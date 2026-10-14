import * as THREE from 'three';
import { TextureManager } from '../core/TextureManager';

interface ParabolicJetStream {
  mesh: THREE.Mesh;
  ringIndex: number;
  angle: number;
  baseScaleY: number;
}

interface SplashRingInstance {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  active: boolean;
  age: number;
  maxAge: number;
  maxScale: number;
}

interface SwimmingKoi {
  group: THREE.Group;
  tail: THREE.Mesh;
  pondCenter: THREE.Vector3;
  orbitRadiusX: number;
  orbitRadiusZ: number;
  speed: number;
  phase: number;
  figureEight: boolean;
}

const WATER_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec3 uCatPos;

  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vWaveHeight;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);

    // Dual-directional surface wave displacement
    float w1 = sin(worldPosition.x * 1.45 + uTime * 2.1 + worldPosition.z * 0.65) * 0.014;
    float w2 = cos(worldPosition.z * 1.85 - uTime * 1.75 + worldPosition.x * 0.85) * 0.012;

    // Interactive cat proximity ripple displacement
    float catDist = distance(worldPosition.xz, uCatPos.xz);
    float catFactor = smoothstep(3.8, 0.0, catDist) * step(abs(worldPosition.y - uCatPos.y), 0.85);
    float catRipple = sin(catDist * 9.0 - uTime * 9.5) * 0.025 * catFactor;

    float displacement = w1 + w2 + catRipple;
    worldPosition.y += displacement;

    vWorldPos = worldPosition.xyz;
    vWaveHeight = displacement;

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const WATER_FRAGMENT_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uNightMix;
  uniform float uIsCircle;
  uniform vec3 uCatPos;
  uniform sampler2D uCausticTex;

  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vWaveHeight;

  // Procedural dual-wave normal perturbation & caustic pattern
  float causticPattern(vec2 p, float t) {
    vec2 uv1 = p * 0.28 + vec2(t * 0.04, -t * 0.03);
    vec2 uv2 = p * 0.34 + vec2(-t * 0.035, t * 0.045);
    float c1 = sin(uv1.x * 18.0 + cos(uv1.y * 16.0 + t * 1.8));
    float c2 = cos(uv2.y * 19.0 + sin(uv2.x * 17.0 - t * 1.5));
    return pow( clamp((c1 * c2) * 0.5 + 0.5, 0.0, 1.0), 2.4 );
  }

  void main() {
    // Compute normalized edge distance (0 = center, 1 = shoreline edge)
    float edgeFactor = 0.0;
    if (uIsCircle > 0.5) {
      edgeFactor = length((vUv - 0.5) * 2.0);
    } else {
      vec2 d = abs(vUv - 0.5) * 2.0;
      edgeFactor = max(d.x, d.y);
    }

    // Dual-wave normal approximation in world XZ
    vec2 waveGrad1 = vec2(
      cos(vWorldPos.x * 2.2 + uTime * 2.4) * 0.5,
      sin(vWorldPos.z * 2.5 - uTime * 2.1) * 0.5
    );
    vec2 waveGrad2 = vec2(
      -sin((vWorldPos.x - vWorldPos.z) * 3.1 + uTime * 3.0) * 0.35,
      cos((vWorldPos.x + vWorldPos.z) * 2.9 - uTime * 2.6) * 0.35
    );
    vec3 normal = normalize(vec3(waveGrad1.x + waveGrad2.x, 4.5, waveGrad1.y + waveGrad2.y));

    // Turquoise-to-emerald depth gradient
    vec3 shallowTurquoise = vec3(0.14, 0.82, 0.78);
    vec3 deepEmerald = vec3(0.03, 0.38, 0.36);
    float depthMix = clamp(1.0 - pow(edgeFactor, 1.65), 0.0, 1.0);
    vec3 waterBase = mix(shallowTurquoise, deepEmerald, depthMix);

    // Sample mosaic texture + procedural shimmering caustics
    vec2 distortedUv = vUv * 3.5 + normal.xz * 0.06 + vec2(uTime * 0.015, -uTime * 0.012);
    vec3 mosaicSample = texture2D(uCausticTex, distortedUv).rgb;
    float caustics = causticPattern(vWorldPos.xz, uTime);

    vec3 causticColor = mix(vec3(0.55, 0.98, 0.92), vec3(1.0, 0.88, 0.55), uNightMix * 0.55);
    vec3 color = mix(waterBase, mosaicSample * 0.85, 0.24);
    color += causticColor * caustics * (0.28 + 0.16 * uNightMix);

    // Specular sky/sun reflection highlight from dual-wave normals
    vec3 lightDir = normalize(vec3(0.45, 0.85, 0.35));
    float spec = pow(max(dot(normal, lightDir), 0.0), 28.0);
    color += vec3(0.95, 0.99, 1.0) * spec * (0.45 - 0.2 * uNightMix);

    // Shoreline foam band + gentle pulsing meniscus
    float foamLine = smoothstep(0.89, 0.995, edgeFactor + sin(uTime * 3.2 + vWorldPos.x * 2.5 + vWorldPos.z * 2.5) * 0.018);
    // Fountain central pedestal inner foam collar
    if (uIsCircle > 0.5) {
      float centerFoam = 1.0 - smoothstep(0.18, 0.27, edgeFactor + cos(uTime * 4.0 + vWorldPos.x * 3.0) * 0.015);
      foamLine = max(foamLine, centerFoam);
    }

    // Interactive ripple ring around cat position when near water
    float catDist = distance(vWorldPos.xz, uCatPos.xz);
    float catNear = smoothstep(3.6, 0.0, catDist) * step(abs(vWorldPos.y - uCatPos.y), 0.85);
    float catRing = sin(catDist * 10.5 - uTime * 11.0) * 0.5 + 0.5;
    float catFoam = pow(catRing, 5.0) * catNear * 0.85;

    float totalFoam = clamp(foamLine * 0.78 + catFoam + vWaveHeight * 4.5, 0.0, 1.0);
    color = mix(color, vec3(0.94, 0.99, 1.0), totalFoam);

    // Night mode underwater LED glow tint on circular fountain
    if (uIsCircle > 0.5 && uNightMix > 0.01) {
      float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
      vec3 ledGlow = 0.5 + 0.5 * cos(uTime * 1.6 + angle * 2.0 + vec3(0.0, 2.1, 4.2));
      color += ledGlow * (1.0 - edgeFactor * 0.5) * uNightMix * 0.38;
    }

    gl_FragColor = vec4(color, 0.86);
  }
`;

export class WaterSystem {
  public readonly group: THREE.Group;

  private fountainMaterial!: THREE.ShaderMaterial;
  private pondMaterial!: THREE.ShaderMaterial;

  private centralGeyserMesh!: THREE.Mesh;
  private parabolicStreams: ParabolicJetStream[] = [];
  private dropletPoints!: THREE.Points;
  private dropletPositions!: Float32Array;
  private dropletVelocities: { vx: number; vy: number; vz: number; ring: number; baseR: number; angle: number; phase: number }[] = [];

  private fountainLedLights: THREE.PointLight[] = [];
  private splashPool: SplashRingInstance[] = [];
  private koiList: SwimmingKoi[] = [];
  private lastAutoRippleTime = 0;
  private lastCatXZ = new THREE.Vector2();

  constructor(textures: TextureManager) {
    this.group = new THREE.Group();
    this.group.name = 'WaterSystem';

    this.buildWaterSurfaces(textures);
    this.buildMusicalFountainJetsAndLights();
    this.buildSplashRingPool();
    this.buildPondKoiFish();
  }

  private buildWaterSurfaces(textures: TextureManager): void {
    const causticTex = textures.get('fountain_mosaic_tile', 4, 4);

    // Custom ShaderMaterial for North Circular Fountain (radius = 11.3 at (0, 0.36, -52))
    this.fountainMaterial = new THREE.ShaderMaterial({
      vertexShader: WATER_VERTEX_SHADER,
      fragmentShader: WATER_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uNightMix: { value: 0 },
        uIsCircle: { value: 1.0 },
        uCatPos: { value: new THREE.Vector3(0, 0, 18) },
        uCausticTex: { value: causticTex }
      }
    });

    const fountainGeo = new THREE.CircleGeometry(11.3, 64);
    const fountainWater = new THREE.Mesh(fountainGeo, this.fountainMaterial);
    fountainWater.rotation.x = -Math.PI * 0.5;
    fountainWater.position.set(0, 0.36, -52);
    this.group.add(fountainWater);

    // Custom ShaderMaterial for the 4 flanking Koi Reflection Ponds (10.8 x 13.8 at (±19, 0.25, ±14.5))
    this.pondMaterial = new THREE.ShaderMaterial({
      vertexShader: WATER_VERTEX_SHADER,
      fragmentShader: WATER_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uNightMix: { value: 0 },
        uIsCircle: { value: 0.0 },
        uCatPos: { value: new THREE.Vector3(0, 0, 18) },
        uCausticTex: { value: causticTex }
      }
    });

    const pondGeo = new THREE.PlaneGeometry(10.8, 13.8, 24, 28);
    const pondCenters = [
      new THREE.Vector3(-19, 0.25, -14.5),
      new THREE.Vector3(19, 0.25, -14.5),
      new THREE.Vector3(-19, 0.25, 14.5),
      new THREE.Vector3(19, 0.25, 14.5)
    ];

    for (const pos of pondCenters) {
      const pondWater = new THREE.Mesh(pondGeo, this.pondMaterial);
      pondWater.rotation.x = -Math.PI * 0.5;
      pondWater.position.copy(pos);
      this.group.add(pondWater);
    }
  }

  private buildMusicalFountainJetsAndLights(): void {
    const fountainOrigin = new THREE.Vector3(0, 0.5, -52);
    const jetGroup = new THREE.Group();
    jetGroup.position.copy(fountainOrigin);

    const streamMat = new THREE.MeshStandardMaterial({
      color: 0xdffbff,
      emissive: 0x48c9b0,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.65,
      roughness: 0.15
    });

    // Central high-reaching geyser column at (0, 0.5, -52)
    const geyserGeo = new THREE.CylinderGeometry(0.16, 0.42, 6.2, 16, 8, true);
    geyserGeo.translate(0, 3.1, 0);
    this.centralGeyserMesh = new THREE.Mesh(geyserGeo, streamMat);
    this.centralGeyserMesh.position.y = 1.9;
    jetGroup.add(this.centralGeyserMesh);

    // 3 Concentric Rings of Parabolic Water Streams:
    // Ring 0 (inner): 8 jets at r = 2.2m arcing outward/upward
    // Ring 1 (middle): 16 jets at r = 5.2m arcing inward toward lotus bowl
    // Ring 2 (outer): 24 jets at r = 8.8m arcing inward toward middle ring
    const ringConfigs = [
      { ringIndex: 0, count: 8, startR: 2.2, endR: 0.75, peakY: 4.1, tubeR: 0.055 },
      { ringIndex: 1, count: 16, startR: 5.2, endR: 1.85, peakY: 3.3, tubeR: 0.05 },
      { ringIndex: 2, count: 24, startR: 8.8, endR: 4.4, peakY: 2.7, tubeR: 0.045 }
    ];

    for (const cfg of ringConfigs) {
      // Build a shared parabolic curve geometry pointing along -X in local jet space
      const span = cfg.startR - cfg.endR;
      const p0 = new THREE.Vector3(0, 0, 0);
      const p1 = new THREE.Vector3(-span * 0.5, cfg.peakY, 0);
      const p2 = new THREE.Vector3(-span, -0.08, 0);
      const curve = new THREE.QuadraticBezierCurve3(p0, p1, p2);
      const tubeGeo = new THREE.TubeGeometry(curve, 14, cfg.tubeR, 6, false);

      for (let i = 0; i < cfg.count; i++) {
        const angle = (i / cfg.count) * Math.PI * 2;
        const mesh = new THREE.Mesh(tubeGeo, streamMat);
        mesh.position.set(Math.cos(angle) * cfg.startR, 0, Math.sin(angle) * cfg.startR);
        mesh.rotation.y = -angle;
        jetGroup.add(mesh);

        this.parabolicStreams.push({
          mesh,
          ringIndex: cfg.ringIndex,
          angle,
          baseScaleY: 1.0
        });
      }
    }

    // Animated particle droplets & mist cloud (560 particles)
    const particleCount = 560;
    this.dropletPositions = new Float32Array(particleCount * 3);
    const dropletColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const ring = i % 4; // 0 = central geyser, 1..3 = 3 concentric rings
      const angle = Math.random() * Math.PI * 2;
      const baseR = ring === 0 ? 0.25 : ring === 1 ? 2.2 : ring === 2 ? 5.2 : 8.8;
      const phase = Math.random();

      const inwardSpeed = ring === 0 ? (Math.random() - 0.5) * 0.8 : -(1.6 + ring * 0.55);
      const vx = Math.cos(angle) * inwardSpeed + (Math.random() - 0.5) * 0.35;
      const vz = Math.sin(angle) * inwardSpeed + (Math.random() - 0.5) * 0.35;
      const vy = ring === 0 ? 6.2 + Math.random() * 2.2 : 3.8 + (3 - ring) * 0.75 + Math.random() * 0.8;

      this.dropletVelocities.push({ vx, vy, vz, ring, baseR, angle, phase });

      this.dropletPositions[i * 3] = Math.cos(angle) * baseR;
      this.dropletPositions[i * 3 + 1] = Math.random() * 3.0;
      this.dropletPositions[i * 3 + 2] = Math.sin(angle) * baseR;

      dropletColors[i * 3] = 0.85;
      dropletColors[i * 3 + 1] = 0.98;
      dropletColors[i * 3 + 2] = 1.0;
    }

    const dropletGeo = new THREE.BufferGeometry();
    dropletGeo.setAttribute('position', new THREE.BufferAttribute(this.dropletPositions, 3));
    dropletGeo.setAttribute('color', new THREE.BufferAttribute(dropletColors, 3));

    const dropletMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    this.dropletPoints = new THREE.Points(dropletGeo, dropletMat);
    jetGroup.add(this.dropletPoints);

    // Dynamic underwater LED PointLights that glow turquoise, gold, and lotus-pink in Night mode
    const ledPositions = [
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(-4.8, 0.6, -3.5),
      new THREE.Vector3(4.8, 0.6, -3.5),
      new THREE.Vector3(0, 0.6, 5.5)
    ];
    const ledBaseColors = [0x22e5d6, 0xffb838, 0xff66b2, 0x38bdf8];

    for (let i = 0; i < ledPositions.length; i++) {
      const light = new THREE.PointLight(ledBaseColors[i], 0.3, 22, 1.6);
      light.position.copy(ledPositions[i]);
      jetGroup.add(light);
      this.fountainLedLights.push(light);
    }

    this.group.add(jetGroup);
  }

  private buildSplashRingPool(): void {
    const ringGeo = new THREE.RingGeometry(0.18, 0.3, 28);
    ringGeo.rotateX(-Math.PI * 0.5);

    for (let i = 0; i < 18; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xe8ffff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(ringGeo, mat);
      mesh.visible = false;
      this.group.add(mesh);

      this.splashPool.push({
        mesh,
        material: mat,
        active: false,
        age: 0,
        maxAge: 0.95,
        maxScale: 4.5
      });
    }
  }

  private buildPondKoiFish(): void {
    const pondCenters = [
      new THREE.Vector3(-19, 0.16, -14.5),
      new THREE.Vector3(19, 0.16, -14.5),
      new THREE.Vector3(-19, 0.16, 14.5),
      new THREE.Vector3(19, 0.16, 14.5)
    ];

    const koiColors = [0xff5722, 0xffb300, 0xfafafa, 0xff7043, 0xffca28];

    for (const center of pondCenters) {
      for (let i = 0; i < 5; i++) {
        const koiGroup = new THREE.Group();
        const bodyColor = koiColors[i % koiColors.length];
        const bodyMat = new THREE.MeshStandardMaterial({
          color: bodyColor,
          roughness: 0.3,
          metalness: 0.1
        });
        const finMat = new THREE.MeshStandardMaterial({
          color: 0xfff5e4,
          roughness: 0.4,
          side: THREE.DoubleSide
        });

        const body = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.48, 8), bodyMat);
        body.rotation.x = Math.PI * 0.5;
        body.scale.set(1.0, 1.0, 0.55);
        koiGroup.add(body);

        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 3), finMat);
        tail.rotation.x = -Math.PI * 0.5;
        tail.position.z = -0.28;
        koiGroup.add(tail);

        this.group.add(koiGroup);

        this.koiList.push({
          group: koiGroup,
          tail,
          pondCenter: center.clone(),
          orbitRadiusX: 1.8 + (i % 3) * 1.15,
          orbitRadiusZ: 2.2 + ((i + 1) % 3) * 1.35,
          speed: 0.42 + (i % 4) * 0.12,
          phase: i * 1.35,
          figureEight: i % 2 === 1
        });
      }
    }
  }

  public triggerSplash(position: THREE.Vector3): void {
    // Spawn 2 staggered concentric splash rings at position
    for (let layer = 0; layer < 2; layer++) {
      const slot = this.splashPool.find((r) => !r.active) ?? this.splashPool[0];
      slot.active = true;
      slot.age = layer * 0.12;
      slot.maxAge = 0.85 + layer * 0.25;
      slot.maxScale = 3.6 + layer * 2.2;
      slot.mesh.position.set(position.x, position.y + 0.02, position.z);
      slot.mesh.scale.setScalar(0.25);
      slot.material.opacity = 0.85;
      slot.mesh.visible = true;
    }
  }

  public update(
    delta: number,
    elapsed: number,
    catPosition: THREE.Vector3,
    isNight: boolean
  ): void {
    const dt = Math.min(delta, 0.1);
    const targetNight = isNight ? 1.0 : 0.0;
    const currentNight = THREE.MathUtils.lerp(
      this.fountainMaterial.uniforms.uNightMix.value as number,
      targetNight,
      dt * 3.0
    );

    // Update custom water ShaderMaterial uniforms
    this.fountainMaterial.uniforms.uTime.value = elapsed;
    this.fountainMaterial.uniforms.uNightMix.value = currentNight;
    (this.fountainMaterial.uniforms.uCatPos.value as THREE.Vector3).copy(catPosition);

    this.pondMaterial.uniforms.uTime.value = elapsed;
    this.pondMaterial.uniforms.uNightMix.value = currentNight;
    (this.pondMaterial.uniforms.uCatPos.value as THREE.Vector3).copy(catPosition);

    // Automatically spawn gentle wading ripples when the cat moves in shallow water
    const movedSq =
      (catPosition.x - this.lastCatXZ.x) * (catPosition.x - this.lastCatXZ.x) +
      (catPosition.z - this.lastCatXZ.y) * (catPosition.z - this.lastCatXZ.y);
    this.lastCatXZ.set(catPosition.x, catPosition.z);

    if (catPosition.y < 0.39 && movedSq > 0.0004 && elapsed - this.lastAutoRippleTime > 0.28) {
      const inNorthFountain =
        Math.hypot(catPosition.x, catPosition.z + 52) < 11.1;
      const inAnyPond =
        Math.abs(Math.abs(catPosition.x) - 19) < 5.3 &&
        Math.abs(Math.abs(catPosition.z) - 14.5) < 6.8;
      if (inNorthFountain || inAnyPond) {
        this.lastAutoRippleTime = elapsed;
        this.triggerSplash(
          new THREE.Vector3(catPosition.x, inNorthFountain ? 0.36 : 0.25, catPosition.z)
        );
      }
    }

    // Musical Fountain Choreography: central geyser & 3 concentric rings pulse rhythmically
    const geyserPulse = 0.78 + 0.36 * Math.sin(elapsed * 2.4) + 0.18 * Math.cos(elapsed * 5.1);
    this.centralGeyserMesh.scale.set(
      0.9 + 0.15 * Math.sin(elapsed * 6.0),
      Math.max(0.35, geyserPulse),
      0.9 + 0.15 * Math.cos(elapsed * 6.0)
    );
    this.centralGeyserMesh.rotation.y = elapsed * 1.2;

    for (const jet of this.parabolicStreams) {
      const wave =
        0.76 +
        0.28 * Math.sin(elapsed * 2.8 - jet.ringIndex * 1.15 + jet.angle * 2.0) +
        0.12 * Math.cos(elapsed * 4.4 + jet.ringIndex);
      jet.mesh.scale.y = Math.max(0.25, wave);
    }

    // Update parabolic droplet & mist particle trajectories
    const posAttr = this.dropletPoints.geometry.getAttribute('position') as THREE.BufferAttribute;
    for (let i = 0; i < this.dropletVelocities.length; i++) {
      const d = this.dropletVelocities[i];
      // Normalized cyclic lifetime t in [0, 1]
      const cycleSpeed = d.ring === 0 ? 0.72 : 0.88;
      const t = (elapsed * cycleSpeed + d.phase) % 1.0;

      // Musical pulse modulation per ring
      const pulse = 0.82 + 0.24 * Math.sin(elapsed * 2.6 - d.ring * 0.9);
      const startX = Math.cos(d.angle) * d.baseR;
      const startZ = Math.sin(d.angle) * d.baseR;
      const startY = d.ring === 0 ? 2.1 : 0.0;

      const x = startX + d.vx * t * 1.35;
      const z = startZ + d.vz * t * 1.35;
      const y = Math.max(
        -0.1,
        startY + d.vy * pulse * t - 0.5 * 9.2 * t * t
      );

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    // Cycle underwater LED PointLights through turquoise, gold, and lotus-pink in Night mode
    const palette = [
      new THREE.Color(0x1de9b6), // Turquoise
      new THREE.Color(0xffca28), // Gold
      new THREE.Color(0xff66b2)  // Lotus-pink
    ];
    for (let i = 0; i < this.fountainLedLights.length; i++) {
      const light = this.fountainLedLights[i];
      const colorPhase = (elapsed * 0.38 + i * 0.75) % palette.length;
      const idxA = Math.floor(colorPhase);
      const idxB = (idxA + 1) % palette.length;
      const frac = colorPhase - idxA;

      light.color.copy(palette[idxA]).lerp(palette[idxB], frac);
      light.intensity = THREE.MathUtils.lerp(0.2, 3.4 + 0.6 * Math.sin(elapsed * 3.0 + i), currentNight);
    }

    // Update expanding 3D splash rings
    for (const splash of this.splashPool) {
      if (!splash.active) continue;
      splash.age += dt;
      if (splash.age >= splash.maxAge) {
        splash.active = false;
        splash.mesh.visible = false;
        continue;
      }
      const progress = Math.max(0, splash.age / splash.maxAge);
      const scale = THREE.MathUtils.lerp(0.35, splash.maxScale, 1 - Math.pow(1 - progress, 2));
      splash.mesh.scale.setScalar(scale);
      splash.material.opacity = (1.0 - progress) * 0.82;
    }

    // Update swimming Koi fish in the 4 reflection ponds
    for (const koi of this.koiList) {
      const t = elapsed * koi.speed + koi.phase;
      const nextT = t + 0.05;

      const curX = koi.pondCenter.x + Math.cos(t) * koi.orbitRadiusX;
      const curZ =
        koi.pondCenter.z +
        (koi.figureEight ? Math.sin(t * 2.0) * koi.orbitRadiusZ * 0.65 : Math.sin(t) * koi.orbitRadiusZ);

      const nxtX = koi.pondCenter.x + Math.cos(nextT) * koi.orbitRadiusX;
      const nxtZ =
        koi.pondCenter.z +
        (koi.figureEight
          ? Math.sin(nextT * 2.0) * koi.orbitRadiusZ * 0.65
          : Math.sin(nextT) * koi.orbitRadiusZ);

      koi.group.position.set(curX, koi.pondCenter.y, curZ);
      koi.group.rotation.y = Math.atan2(nxtX - curX, nxtZ - curZ);
      koi.tail.rotation.y = Math.sin(elapsed * 9.5 + koi.phase) * 0.38;
    }
  }
}
