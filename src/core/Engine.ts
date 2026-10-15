import * as THREE from 'three';

export type UpdateCallback = (delta: number, elapsed: number) => void;

export class Engine {
  public readonly scene: THREE.Scene;
  public readonly camera: THREE.PerspectiveCamera;
  public readonly renderer: THREE.WebGLRenderer;
  public readonly clock: THREE.Clock;
  private updateCallbacks: UpdateCallback[] = [];
  private container: HTMLElement;
  private baseFov = 54;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#f4a668');
    this.scene.fog = new THREE.FogExp2('#f2b47e', 0.0042);

    const { width, height } = this.getViewportSize();
    this.camera = new THREE.PerspectiveCamera(
      this.computeResponsiveFov(width, height),
      width / Math.max(1, height),
      0.15,
      500
    );
    this.camera.position.set(0, 3.2, 42);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true // Enables Photo Mode snapshot download
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height, false);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.container.appendChild(this.renderer.domElement);
    this.clock = new THREE.Clock();

    const triggerResize = () => this.onResize();
    window.addEventListener('resize', triggerResize);
    window.addEventListener('orientationchange', () => {
      this.onResize();
      window.setTimeout(triggerResize, 120);
      window.setTimeout(triggerResize, 350);
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', triggerResize);
    }
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(triggerResize);
      ro.observe(this.container);
    }

    // Ensure full-screen sizing right after initial layout settles
    requestAnimationFrame(triggerResize);
  }

  private getViewportSize(): { width: number; height: number } {
    const rect = this.container.getBoundingClientRect();
    const vvWidth = window.visualViewport ? Math.round(window.visualViewport.width) : 0;
    const vvHeight = window.visualViewport ? Math.round(window.visualViewport.height) : 0;
    const width = Math.max(1, Math.round(rect.width) || vvWidth || window.innerWidth);
    const height = Math.max(1, Math.round(rect.height) || vvHeight || window.innerHeight);
    return { width, height };
  }

  private computeResponsiveFov(width: number, height: number): number {
    const aspect = width / Math.max(1, height);
    // On narrow portrait mobile screens, widen vertical FOV slightly so horizontal field of view remains generous
    if (aspect < 0.85) {
      return THREE.MathUtils.clamp(this.baseFov + (0.85 - aspect) * 28, 52, 68);
    }
    return this.baseFov;
  }

  public setBaseFov(fov: number): void {
    this.baseFov = fov;
    this.onResize();
  }

  public onUpdate(cb: UpdateCallback): void {
    this.updateCallbacks.push(cb);
  }

  public start(): void {
    this.renderer.setAnimationLoop(() => {
      const delta = Math.min(this.clock.getDelta(), 0.1);
      const elapsed = this.clock.getElapsedTime();
      for (const cb of this.updateCallbacks) {
        cb(delta, elapsed);
      }
      this.renderer.render(this.scene, this.camera);
    });
  }

  public onResize(): void {
    const { width, height } = this.getViewportSize();
    this.camera.aspect = width / Math.max(1, height);
    this.camera.fov = this.computeResponsiveFov(width, height);
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height, false);
  }
}
