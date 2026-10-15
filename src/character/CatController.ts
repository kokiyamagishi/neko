import * as THREE from 'three';
import { ClimbablePoint, CollisionWorld } from '../core/CollisionWorld';
import { TextureManager } from '../core/TextureManager';
import { CatAnimState, CatModel } from './CatModel';

interface ParticleItem {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  age: number;
  maxAge: number;
  initialScale: number;
  isRipple?: boolean;
}

export class CatController {
  public readonly catModel: CatModel;
  public readonly position = new THREE.Vector3(2.6, 0.48, -63.4);
  public readonly velocity = new THREE.Vector3();
  public yaw = -0.05;
  public state: CatAnimState = 'idle';
  public isLoafing = false;
  public activeClimbPrompt: string | null = null;

  // Milestone flags
  public hasWalkedUnderArch = false;
  public hasReachedRooftop = false;
  public hasSplashedFountain = false;

  // Event callbacks
  public onMeow?: () => void;
  public onSwat?: (pos: THREE.Vector3) => void;
  public onWaterSplash?: (pos: THREE.Vector3) => void;
  public onClimbUsed?: (climbId: string) => void;

  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly collision: CollisionWorld;

  // Input state
  private readonly keys = new Set<string>();
  private jumpQueued = false;
  private joystickX = 0;
  private joystickY = 0;
  private joystickSprint = false;

  // Movement & physics state
  private grounded = true;
  private coyoteTimer = 0;
  private jumpsRemaining = 1;
  private wasInWater = false;
  private splashCooldown = 0;
  private dustSpawnTimer = 0;
  private swatActionTimer = 0;
  private meowActionTimer = 0;

  // Climb transition state
  private currentClimbable: ClimbablePoint | null = null;
  private isClimbing = false;
  private climbTimer = 0;
  private climbDuration = 0.58;
  private readonly climbStartPos = new THREE.Vector3();
  private readonly climbEndPos = new THREE.Vector3();

  // Orbit camera state
  public cameraYaw = -0.05;
  public cameraPitch = -0.06;
  public cameraDistance = 3.3;
  private readonly cameraLookCurrent = new THREE.Vector3(2.6, 1.38, -63.4);
  private isPointerDragging = false;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private cameraTouchId: number | null = null;
  private lastTouchX = 0;
  private lastTouchY = 0;
  private pinchStartDist = 0;
  private pinchStartCamDist = 3.3;

  // Particle system (pawstep dust puffs & water splash droplets)
  private readonly particleGroup = new THREE.Group();
  private readonly particles: ParticleItem[] = [];
  private readonly dustGeo = new THREE.SphereGeometry(0.055, 8, 8);
  private readonly dropletGeo = new THREE.SphereGeometry(0.038, 8, 8);
  private readonly rippleGeo = new THREE.RingGeometry(0.08, 0.13, 20);

  constructor(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    collision: CollisionWorld,
    textures: TextureManager
  ) {
    this.scene = scene;
    this.camera = camera;
    this.collision = collision;

    this.catModel = new CatModel(textures);
    this.catModel.group.scale.setScalar(1.32);
    this.catModel.group.position.copy(this.position);
    this.catModel.group.rotation.y = this.yaw;
    this.scene.add(this.catModel.group);

    this.rippleGeo.rotateX(-Math.PI * 0.5);
    this.particleGroup.name = 'CatParticles';
    this.scene.add(this.particleGroup);

    // Initialize ground height at starting plaza spot
    const startSurf = this.collision.getSurfaceInfoAt(
      this.position.x,
      this.position.z,
      this.position.y
    );
    this.position.y = startSurf.groundY;
    this.catModel.group.position.copy(this.position);
    this.cameraLookCurrent.set(this.position.x, this.position.y + 0.9, this.position.z);

    this.bindInputEvents();
    this.updateCamera(0.1);
  }

  private bindInputEvents(): void {
    window.addEventListener('keydown', (e) => {
      // Ignore shortcuts if user is typing in an input element
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const code = e.code;
      this.keys.add(code);

      if (code === 'Space') {
        e.preventDefault();
        this.jumpQueued = true;
      } else if ((code === 'KeyE' || code === 'KeyM') && !e.repeat) {
        this.triggerMeow();
      } else if (code === 'KeyF' && !e.repeat) {
        this.triggerSwat();
      } else if ((code === 'KeyC' || code === 'KeyR') && !e.repeat) {
        this.toggleLoaf();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    window.addEventListener('blur', () => {
      this.keys.clear();
      this.isPointerDragging = false;
    });

    // Mouse drag orbit (works seamlessly without mandatory pointer lock so HUD buttons stay clickable)
    window.addEventListener('mousedown', (e) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('select') || target.closest('input') || target.closest('.hud-interactive'))) {
        return;
      }
      if (e.button === 0 || e.button === 2) {
        this.isPointerDragging = true;
        this.lastPointerX = e.clientX;
        this.lastPointerY = e.clientY;
      }
    });

    window.addEventListener('mouseup', () => {
      this.isPointerDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement) {
        this.cameraYaw -= e.movementX * 0.0045;
        this.cameraPitch = THREE.MathUtils.clamp(
          this.cameraPitch + e.movementY * 0.0038,
          -0.42,
          1.18
        );
      } else if (this.isPointerDragging) {
        const dx = e.clientX - this.lastPointerX;
        const dy = e.clientY - this.lastPointerY;
        this.lastPointerX = e.clientX;
        this.lastPointerY = e.clientY;
        this.cameraYaw -= dx * 0.0055;
        this.cameraPitch = THREE.MathUtils.clamp(
          this.cameraPitch + dy * 0.0045,
          -0.42,
          1.18
        );
      }
    });

    window.addEventListener(
      'wheel',
      (e) => {
        const target = e.target as HTMLElement | null;
        if (target && (target.closest('dialog') || target.closest('.hud-scrollable'))) {
          return;
        }
        this.cameraDistance = THREE.MathUtils.clamp(
          this.cameraDistance + e.deltaY * 0.0032,
          2.4,
          7.2
        );
      },
      { passive: true }
    );

    const isHudTouchTarget = (target: EventTarget | null): boolean => {
      const el = target as HTMLElement | null;
      if (!el) return false;
      return Boolean(
        el.closest('button') ||
          el.closest('input') ||
          el.closest('dialog') ||
          el.closest('.nl-joystick-zone') ||
          el.closest('.nl-top-bar') ||
          el.closest('.nl-controls-bar') ||
          el.closest('.nl-glass-card')
      );
    };

    const getSceneTouches = (touches: TouchList): Touch[] => {
      const list: Touch[] = [];
      for (let i = 0; i < touches.length; i++) {
        if (!isHudTouchTarget(touches[i].target)) {
          list.push(touches[i]);
        }
      }
      return list;
    };

    // Mobile Touch Orbit & 3D Cat Camera Pinch-Zoom (never interferes with Left Joystick + Right Action buttons)
    window.addEventListener(
      'touchstart',
      (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (isHudTouchTarget(t.target)) {
            continue;
          }
          if (this.cameraTouchId === null) {
            this.cameraTouchId = t.identifier;
            this.lastTouchX = t.clientX;
            this.lastTouchY = t.clientY;
          }
        }
        const sceneTouches = getSceneTouches(e.touches);
        if (sceneTouches.length === 2) {
          const dx = sceneTouches[0].clientX - sceneTouches[1].clientX;
          const dy = sceneTouches[0].clientY - sceneTouches[1].clientY;
          this.pinchStartDist = Math.hypot(dx, dy);
          this.pinchStartCamDist = this.cameraDistance;
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'touchmove',
      (e) => {
        const sceneTouches = getSceneTouches(e.touches);
        if (sceneTouches.length === 2 && this.pinchStartDist > 16) {
          const dx = sceneTouches[0].clientX - sceneTouches[1].clientX;
          const dy = sceneTouches[0].clientY - sceneTouches[1].clientY;
          const dist = Math.hypot(dx, dy);
          const scale = this.pinchStartDist / Math.max(16, dist);
          this.cameraDistance = THREE.MathUtils.clamp(
            this.pinchStartCamDist * scale,
            2.4,
            7.2
          );
          return;
        }
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === this.cameraTouchId) {
            const dx = t.clientX - this.lastTouchX;
            const dy = t.clientY - this.lastTouchY;
            this.lastTouchX = t.clientX;
            this.lastTouchY = t.clientY;
            this.cameraYaw -= dx * 0.0065;
            this.cameraPitch = THREE.MathUtils.clamp(
              this.cameraPitch + dy * 0.0052,
              -0.42,
              1.18
            );
          }
        }
      },
      { passive: true }
    );

    const endTouch = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.cameraTouchId) {
          this.cameraTouchId = null;
        }
      }
      if (getSceneTouches(e.touches).length < 2) {
        this.pinchStartDist = 0;
      }
    };
    window.addEventListener('touchend', endTouch, { passive: true });
    window.addEventListener('touchcancel', endTouch, { passive: true });
  }

  public cycleCameraZoom(): number {
    if (this.cameraDistance > 4.2) {
      this.cameraDistance = 3.3; // Normal
    } else if (this.cameraDistance > 2.7) {
      this.cameraDistance = 2.1; // Close up to Cat!
    } else {
      this.cameraDistance = 5.0; // Wide view
    }
    return this.cameraDistance;
  }

  public setCameraDistance(dist: number): void {
    this.cameraDistance = THREE.MathUtils.clamp(dist, 2.0, 6.0);
  }

  public setJoystickInput(x: number, y: number, sprint = false): void {
    this.joystickX = x;
    this.joystickY = y;
    this.joystickSprint = sprint;
  }

  public triggerJump(): void {
    this.jumpQueued = true;
  }

  public triggerMeow(): void {
    this.meowActionTimer = 0.65;
    this.catModel.triggerMeowVisual();
    this.onMeow?.();
  }

  public triggerSwat(): void {
    if (this.isClimbing) return;

    // If standing inside a ClimbablePoint portal, leap up to its target!
    if (this.currentClimbable) {
      this.startClimbTransition(this.currentClimbable);
      return;
    }

    if (this.isLoafing) {
      this.isLoafing = false;
    }

    this.swatActionTimer = 0.38;
    this.catModel.triggerSwatVisual();

    // Playful forward pounce impulse
    const forwardX = Math.sin(this.yaw);
    const forwardZ = Math.cos(this.yaw);
    this.velocity.x += forwardX * 2.8;
    this.velocity.z += forwardZ * 2.8;

    const swatHitPos = new THREE.Vector3(
      this.position.x + forwardX * 0.72,
      this.position.y + 0.3,
      this.position.z + forwardZ * 0.72
    );
    this.onSwat?.(swatHitPos);
  }

  public toggleLoaf(): void {
    if (this.isClimbing) return;
    this.isLoafing = !this.isLoafing;
    if (this.isLoafing) {
      this.velocity.set(0, 0, 0);
      this.state = 'loaf';
    } else {
      this.state = 'idle';
    }
  }

  public teleportTo(pos: THREE.Vector3, yaw?: number, pitch?: number): void {
    this.isClimbing = false;
    this.isLoafing = false;
    this.position.copy(pos);
    this.velocity.set(0, 0, 0);
    if (yaw !== undefined) {
      this.yaw = yaw;
      this.cameraYaw = yaw;
    }
    if (pitch !== undefined) {
      this.cameraPitch = pitch;
    }
    this.catModel.group.position.copy(this.position);
    this.catModel.group.rotation.y = this.yaw;
    this.cameraLookCurrent.set(this.position.x, this.position.y + 0.9, this.position.z);
    this.updateCamera(1.0);
  }

  private startClimbTransition(climbable: ClimbablePoint): void {
    this.isLoafing = false;
    this.isClimbing = true;
    this.climbTimer = 0;
    const dist = this.position.distanceTo(climbable.targetPosition);
    this.climbDuration = THREE.MathUtils.clamp(dist * 0.085, 0.48, 0.85);
    this.climbStartPos.copy(this.position);
    this.climbEndPos.copy(climbable.targetPosition);

    const dx = this.climbEndPos.x - this.climbStartPos.x;
    const dz = this.climbEndPos.z - this.climbStartPos.z;
    if (dx * dx + dz * dz > 1e-4) {
      this.yaw = Math.atan2(dx, dz);
    }

    this.velocity.set(0, 0, 0);
    this.state = 'climb';
    this.onClimbUsed?.(climbable.id);
  }

  public update(
    delta: number,
    elapsed: number,
    photoModeActive: boolean,
    isPaused = false
  ): void {
    const dt = Math.min(delta, 0.05);

    if (isPaused && !photoModeActive) {
      this.updateCamera(dt);
      return;
    }

    // Keyboard camera rotation keys (Q / Z or [ / ])
    const camRotSpeed = 1.95;
    if (this.keys.has('KeyQ') || this.keys.has('BracketLeft')) {
      this.cameraYaw += camRotSpeed * dt;
    }
    if (this.keys.has('KeyZ') || this.keys.has('BracketRight')) {
      this.cameraYaw -= camRotSpeed * dt;
    }

    // If Photo Mode is active, allow camera orbit/zoom while freezing locomotion
    if (photoModeActive) {
      this.updateParticles(dt);
      this.catModel.updateAnimation(this.state, dt, elapsed, 0);
      this.updateCamera(dt);
      return;
    }

    if (this.swatActionTimer > 0) {
      this.swatActionTimer = Math.max(0, this.swatActionTimer - dt);
    }
    if (this.meowActionTimer > 0) {
      this.meowActionTimer = Math.max(0, this.meowActionTimer - dt);
    }
    if (this.splashCooldown > 0) {
      this.splashCooldown = Math.max(0, this.splashCooldown - dt);
    }

    // --- HANDLE ACTIVE CLIMB LEAP ARC ---
    if (this.isClimbing) {
      this.climbTimer += dt;
      const t = Math.min(1, this.climbTimer / this.climbDuration);
      const smoothT = t * t * (3 - 2 * t);

      this.position.lerpVectors(this.climbStartPos, this.climbEndPos, smoothT);
      const arcHeight = Math.sin(t * Math.PI) * 1.85;
      this.position.y += arcHeight;

      this.catModel.group.position.copy(this.position);
      this.catModel.group.rotation.y = this.yaw;
      this.state = 'climb';

      if (t >= 1) {
        this.isClimbing = false;
        this.position.copy(this.climbEndPos);
        this.grounded = true;
        this.state = 'idle';
      }

      this.checkMilestones(false);
      this.updateParticles(dt);
      this.catModel.updateAnimation(this.state, dt, elapsed, 0.8);
      this.updateCamera(dt);
      return;
    }

    // --- MOVEMENT INPUT RELATIVE TO CAMERA YAW ---
    let inputForward = this.joystickY;
    let inputRight = this.joystickX;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) inputForward += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) inputForward -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) inputRight += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) inputRight -= 1;

    const inputMag = Math.min(1, Math.hypot(inputForward, inputRight));
    const hasMoveInput = inputMag > 0.06;
    const isSprinting =
      this.keys.has('ShiftLeft') ||
      this.keys.has('ShiftRight') ||
      this.joystickSprint;

    // Wake up from loaf if movement or jump input occurs
    if (this.isLoafing && (hasMoveInput || this.jumpQueued)) {
      this.isLoafing = false;
    }

    // Compute camera-relative horizontal movement direction
    const camForwardX = Math.sin(this.cameraYaw);
    const camForwardZ = Math.cos(this.cameraYaw);
    const camRightX = -Math.cos(this.cameraYaw);
    const camRightZ = Math.sin(this.cameraYaw);

    const moveDirX = camForwardX * inputForward + camRightX * inputRight;
    const moveDirZ = camForwardZ * inputForward + camRightZ * inputRight;
    const moveLen = Math.hypot(moveDirX, moveDirZ);

    const maxSpeed = isSprinting ? 9.2 : 5.4;
    const targetSpeed = !hasMoveInput ? 0 : maxSpeed * Math.max(0.35, inputMag);

    if (moveLen > 1e-4 && !this.isLoafing) {
      const normX = moveDirX / moveLen;
      const normZ = moveDirZ / moveLen;

      const accel = this.grounded ? 18.0 : 10.5;
      this.velocity.x = THREE.MathUtils.lerp(
        this.velocity.x,
        normX * targetSpeed,
        Math.min(1, accel * dt)
      );
      this.velocity.z = THREE.MathUtils.lerp(
        this.velocity.z,
        normZ * targetSpeed,
        Math.min(1, accel * dt)
      );

      // Smoothly turn cat yaw toward movement direction
      const desiredYaw = Math.atan2(normX, normZ);
      this.yaw = this.lerpAngle(this.yaw, desiredYaw, Math.min(1, dt * 14));
    } else {
      const damping = this.grounded ? 14.0 : 4.0;
      this.velocity.x = THREE.MathUtils.lerp(
        this.velocity.x,
        0,
        Math.min(1, damping * dt)
      );
      this.velocity.z = THREE.MathUtils.lerp(
        this.velocity.z,
        0,
        Math.min(1, damping * dt)
      );
    }

    // --- JUMP & NIMBLE DOUBLE-HOP / LEDGE BOOST ---
    if (this.grounded) {
      this.coyoteTimer = 0.15;
      this.jumpsRemaining = 1;
    } else {
      this.coyoteTimer = Math.max(0, this.coyoteTimer - dt);
    }

    if (this.jumpQueued) {
      this.jumpQueued = false;
      if (this.coyoteTimer > 0) {
        this.velocity.y = 8.4;
        this.grounded = false;
        this.coyoteTimer = 0;
        this.jumpsRemaining = 1;
        this.spawnDustBurst(4);
      } else if (this.jumpsRemaining > 0) {
        // Nimble mid-air double-hop / ledge boost for effortless stair & fountain climbing
        this.velocity.y = 7.5;
        this.jumpsRemaining = 0;
        this.velocity.x += Math.sin(this.yaw) * 1.65;
        this.velocity.z += Math.cos(this.yaw) * 1.65;
        this.spawnDustBurst(3);
      }
    }

    // Apply gravity
    const gravity = -21.5;
    this.velocity.y = Math.max(-24.0, this.velocity.y + gravity * dt);

    // Integrate desired position
    const desiredPos = new THREE.Vector3(
      this.position.x + this.velocity.x * dt,
      this.position.y + this.velocity.y * dt,
      this.position.z + this.velocity.z * dt
    );

    // Generous step-up when jumping or sprinting so stairs and copings feel silky smooth
    const stepAllowance = !this.grounded && this.velocity.y > -2.0 ? 1.25 : 0.95;
    const res = this.collision.resolveMovement(desiredPos, 0.36, stepAllowance);

    this.position.x = res.position.x;
    this.position.z = res.position.z;

    if (desiredPos.y <= res.groundY + 0.06 && this.velocity.y <= 0) {
      // Smooth step-up / landing snap
      const wasAirborne = !this.grounded && this.velocity.y < -3.5;
      this.position.y = THREE.MathUtils.lerp(this.position.y, res.groundY, Math.min(1, dt * 28));
      if (Math.abs(this.position.y - res.groundY) < 0.04) {
        this.position.y = res.groundY;
      }
      this.velocity.y = 0;
      this.grounded = true;

      if (wasAirborne) {
        if (res.inWater) {
          this.spawnWaterSplash(res.waterSurfaceY, 8);
          this.onWaterSplash?.(this.position.clone());
        } else {
          this.spawnDustBurst(5);
        }
      }
    } else {
      this.position.y = desiredPos.y;
      this.grounded = false;
    }

    // Update nearby climbable prompt
    this.currentClimbable = res.nearClimbable;
    this.activeClimbPrompt = res.nearClimbable ? res.nearClimbable.label : null;

    // --- WATER SPLASHES & PAWSTEP DUST PUFFS ---
    const horizSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    if (res.inWater) {
      if (!this.wasInWater || (horizSpeed > 1.2 && this.splashCooldown <= 0)) {
        this.spawnWaterSplash(res.waterSurfaceY, !this.wasInWater ? 8 : 4);
        this.onWaterSplash?.(this.position.clone());
        this.splashCooldown = 0.24;
      }
    } else if (this.grounded && horizSpeed > 6.2) {
      this.dustSpawnTimer -= dt;
      if (this.dustSpawnTimer <= 0) {
        this.dustSpawnTimer = 0.11;
        this.spawnDustBurst(2);
      }
    }
    this.wasInWater = res.inWater;

    // --- DETERMINE ANIMATION STATE ---
    if (this.isLoafing) {
      this.state = 'loaf';
    } else if (this.swatActionTimer > 0) {
      this.state = 'swat';
    } else if (!this.grounded) {
      this.state = 'jump';
    } else if (horizSpeed > 6.8) {
      this.state = 'sprint';
    } else if (horizSpeed > 3.2) {
      this.state = 'trot';
    } else if (horizSpeed > 0.35) {
      this.state = 'walk';
    } else if (this.meowActionTimer > 0) {
      this.state = 'meow';
    } else {
      this.state = 'idle';
    }

    // Sync CatModel transform & procedural rig
    this.catModel.group.position.copy(this.position);
    this.catModel.group.rotation.y = this.yaw;

    const speedNormalized = THREE.MathUtils.clamp(horizSpeed / 9.2, 0, 1);
    this.catModel.updateAnimation(this.state, dt, elapsed, speedNormalized);

    // Check exploration milestones
    this.checkMilestones(res.inWater);

    // Update particles & camera
    this.updateParticles(dt);
    this.updateCamera(dt);
  }

  private checkMilestones(inWater: boolean): void {
    if (
      Math.abs(this.position.x) < 4.5 &&
      Math.abs(this.position.z) < 4.5 &&
      this.position.y < 4.0
    ) {
      this.hasWalkedUnderArch = true;
    }
    if (this.position.y >= 15.2) {
      this.hasReachedRooftop = true;
    }
    if (inWater && this.position.z < -35) {
      this.hasSplashedFountain = true;
    }
  }

  private spawnDustBurst(count: number): void {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: '#f2e2c9',
        transparent: true,
        opacity: 0.68
      });
      const mesh = new THREE.Mesh(this.dustGeo, mat);
      const angle = Math.random() * Math.PI * 2;
      const spread = 0.08 + Math.random() * 0.14;
      mesh.position.set(
        this.position.x - Math.sin(this.yaw) * 0.15 + Math.cos(angle) * spread,
        this.position.y + 0.05,
        this.position.z - Math.cos(this.yaw) * 0.15 + Math.sin(angle) * spread
      );
      const scale = 0.65 + Math.random() * 0.55;
      mesh.scale.setScalar(scale);
      this.particleGroup.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * 0.55,
          0.45 + Math.random() * 0.45,
          Math.sin(angle) * 0.55
        ),
        age: 0,
        maxAge: 0.42 + Math.random() * 0.18,
        initialScale: scale
      });
    }
  }

  private spawnWaterSplash(waterY: number, count: number): void {
    // Expanding surface ripple ring
    const rippleMat = new THREE.MeshBasicMaterial({
      color: '#a8fff9',
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    const rippleMesh = new THREE.Mesh(this.rippleGeo, rippleMat);
    rippleMesh.position.set(this.position.x, waterY + 0.02, this.position.z);
    this.particleGroup.add(rippleMesh);
    this.particles.push({
      mesh: rippleMesh,
      velocity: new THREE.Vector3(0, 0, 0),
      age: 0,
      maxAge: 0.65,
      initialScale: 1.0,
      isRipple: true
    });

    // Sparkling water droplets
    for (let i = 0; i < count; i++) {
      const dropletMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? '#ffffff' : '#7ef5ed',
        transparent: true,
        opacity: 0.92
      });
      const mesh = new THREE.Mesh(this.dropletGeo, dropletMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.08 + Math.random() * 0.16;
      mesh.position.set(
        this.position.x + Math.cos(angle) * radius,
        waterY + 0.05,
        this.position.z + Math.sin(angle) * radius
      );
      const scale = 0.6 + Math.random() * 0.5;
      mesh.scale.setScalar(scale);
      this.particleGroup.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * (0.9 + Math.random() * 0.9),
          2.1 + Math.random() * 1.6,
          Math.sin(angle) * (0.9 + Math.random() * 0.9)
        ),
        age: 0,
        maxAge: 0.48 + Math.random() * 0.18,
        initialScale: scale
      });
    }
  }

  private updateParticles(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.age += dt;
      const t = p.age / p.maxAge;
      if (t >= 1) {
        this.particleGroup.remove(p.mesh);
        (p.mesh.material as THREE.Material).dispose();
        this.particles.splice(i, 1);
        continue;
      }

      const mat = p.mesh.material as THREE.MeshBasicMaterial;
      if (p.isRipple) {
        const s = 1.0 + t * 4.2;
        p.mesh.scale.set(s, 1, s);
        mat.opacity = (1 - t) * 0.8;
      } else {
        p.mesh.position.addScaledVector(p.velocity, dt);
        if (p.velocity.y > 0.9 || p.mesh.geometry === this.dropletGeo) {
          p.velocity.y -= 7.5 * dt;
        }
        p.mesh.scale.setScalar(p.initialScale * (1 + t * 0.85));
        mat.opacity = (1 - t) * 0.78;
      }
    }
  }

  private updateCamera(dt: number): void {
    const targetLook = new THREE.Vector3(
      this.position.x,
      this.position.y + 0.9,
      this.position.z
    );
    this.cameraLookCurrent.lerp(targetLook, Math.min(1, dt * 14));

    const horizDist = Math.cos(this.cameraPitch) * this.cameraDistance;
    const vertDist = Math.sin(this.cameraPitch) * this.cameraDistance;

    const camX = this.cameraLookCurrent.x - Math.sin(this.cameraYaw) * horizDist;
    const camZ = this.cameraLookCurrent.z - Math.cos(this.cameraYaw) * horizDist;
    let camY = this.cameraLookCurrent.y + vertDist;

    // Keep camera above local ground surface so it never clips under walkways
    const camSurface = this.collision.getSurfaceInfoAt(
      camX,
      camZ,
      this.position.y,
      2.0
    );
    camY = Math.max(camY, camSurface.groundY + 0.35);

    this.camera.position.set(camX, camY, camZ);
    this.camera.lookAt(this.cameraLookCurrent);
  }

  private lerpAngle(a: number, b: number, t: number): number {
    let diff = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
    if (diff < -Math.PI) diff += Math.PI * 2;
    return a + diff * t;
  }
}
