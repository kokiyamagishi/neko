import * as THREE from 'three';

export type TimeOfDay = 'morning' | 'golden_hour' | 'night';

interface AtmospherePreset {
  skyTop: THREE.Color;
  skyHorizon: THREE.Color;
  fogColor: THREE.Color;
  fogDensity: number;
  sunColor: THREE.Color;
  sunIntensity: number;
  sunPosition: THREE.Vector3;
  hemiSky: THREE.Color;
  hemiGround: THREE.Color;
  hemiIntensity: number;
  ambientColor: THREE.Color;
  ambientIntensity: number;
  exposure: number;
  nightFactor: number;
  orbColor: THREE.Color;
}

const PRESETS: Record<TimeOfDay, AtmospherePreset> = {
  morning: {
    skyTop: new THREE.Color('#4298e8'),
    skyHorizon: new THREE.Color('#b8e6ff'),
    fogColor: new THREE.Color('#a4d8f7'),
    fogDensity: 0.0042,
    sunColor: new THREE.Color('#fff7e2'),
    sunIntensity: 2.35,
    sunPosition: new THREE.Vector3(58, 66, 36),
    hemiSky: new THREE.Color('#8cd3ff'),
    hemiGround: new THREE.Color('#8b7a5e'),
    hemiIntensity: 0.9,
    ambientColor: new THREE.Color('#fff9ee'),
    ambientIntensity: 0.48,
    exposure: 1.08,
    nightFactor: 0.0,
    orbColor: new THREE.Color('#fff9d6')
  },
  golden_hour: {
    skyTop: new THREE.Color('#d97149'),
    skyHorizon: new THREE.Color('#ffd28e'),
    fogColor: new THREE.Color('#f4ae72'),
    fogDensity: 0.0048,
    sunColor: new THREE.Color('#ffb85c'),
    sunIntensity: 2.65,
    sunPosition: new THREE.Vector3(-72, 34, -44),
    hemiSky: new THREE.Color('#ffc482'),
    hemiGround: new THREE.Color('#704d3a'),
    hemiIntensity: 0.95,
    ambientColor: new THREE.Color('#ffd8a8'),
    ambientIntensity: 0.52,
    exposure: 1.12,
    nightFactor: 0.22,
    orbColor: new THREE.Color('#ffcf70')
  },
  night: {
    skyTop: new THREE.Color('#070d1d'),
    skyHorizon: new THREE.Color('#19294b'),
    fogColor: new THREE.Color('#0e172c'),
    fogDensity: 0.0055,
    sunColor: new THREE.Color('#8ab4f8'),
    sunIntensity: 0.72,
    sunPosition: new THREE.Vector3(45, 58, -50),
    hemiSky: new THREE.Color('#273e6b'),
    hemiGround: new THREE.Color('#181c28'),
    hemiIntensity: 0.55,
    ambientColor: new THREE.Color('#324874'),
    ambientIntensity: 0.38,
    exposure: 0.95,
    nightFactor: 1.0,
    orbColor: new THREE.Color('#e2eeff')
  }
};

export class AtmosphereAndAudio {
  public currentTimeOfDay: TimeOfDay = 'golden_hour';
  public isMuted = false;
  public onTimeOfDayChanged?: (tod: TimeOfDay, nightFactor: number) => void;

  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;

  private dirLight: THREE.DirectionalLight;
  private hemiLight: THREE.HemisphereLight;
  private ambientLight: THREE.AmbientLight;
  private fog: THREE.FogExp2;

  private skyDome: THREE.Mesh;
  private skyUniforms: {
    uTopColor: { value: THREE.Color };
    uHorizonColor: { value: THREE.Color };
  };
  private celestialOrb: THREE.Mesh;
  private celestialHalo: THREE.Mesh;
  private starField: THREE.Points;

  // Web Audio API State
  private audioCtx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private fountainGain: GainNode | null = null;
  private purrGain: GainNode | null = null;
  private chimeTimer = 1.5;

  constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    this.renderer = renderer;

    const initial = PRESETS[this.currentTimeOfDay];

    // Exponential atmospheric fog
    this.fog = new THREE.FogExp2(initial.fogColor.getHex(), initial.fogDensity);
    this.scene.fog = this.fog;
    this.scene.background = initial.skyHorizon.clone();

    // Directional Sun / Moon Light with soft shadows
    this.dirLight = new THREE.DirectionalLight(initial.sunColor, initial.sunIntensity);
    this.dirLight.position.copy(initial.sunPosition);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.set(2048, 2048);
    this.dirLight.shadow.camera.near = 5;
    this.dirLight.shadow.camera.far = 210;
    const frustum = 75;
    this.dirLight.shadow.camera.left = -frustum;
    this.dirLight.shadow.camera.right = frustum;
    this.dirLight.shadow.camera.top = frustum;
    this.dirLight.shadow.camera.bottom = -frustum;
    this.dirLight.shadow.bias = -0.0004;
    this.scene.add(this.dirLight);

    // Hemisphere Sky/Ground Fill
    this.hemiLight = new THREE.HemisphereLight(
      initial.hemiSky,
      initial.hemiGround,
      initial.hemiIntensity
    );
    this.hemiLight.position.set(0, 60, 0);
    this.scene.add(this.hemiLight);

    // Warm Ambient Fill
    this.ambientLight = new THREE.AmbientLight(initial.ambientColor, initial.ambientIntensity);
    this.scene.add(this.ambientLight);

    // Procedural Gradient Sky Dome
    this.skyUniforms = {
      uTopColor: { value: initial.skyTop.clone() },
      uHorizonColor: { value: initial.skyHorizon.clone() }
    };

    const skyGeo = new THREE.SphereGeometry(260, 32, 20);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 uTopColor;
        uniform vec3 uHorizonColor;
        varying vec3 vWorldPos;
        void main() {
          float h = clamp(normalize(vWorldPos).y, 0.0, 1.0);
          vec3 col = mix(uHorizonColor, uTopColor, pow(h, 0.58));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false
    });
    this.skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyDome);

    // Glowing Sun / Moon Celestial Orb
    const orbGeo = new THREE.SphereGeometry(8.5, 24, 24);
    const orbMat = new THREE.MeshBasicMaterial({
      color: initial.orbColor,
      fog: false
    });
    this.celestialOrb = new THREE.Mesh(orbGeo, orbMat);

    const haloGeo = new THREE.SphereGeometry(14.5, 24, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: initial.orbColor,
      transparent: true,
      opacity: 0.25,
      fog: false
    });
    this.celestialHalo = new THREE.Mesh(haloGeo, haloMat);
    this.celestialOrb.add(this.celestialHalo);
    this.updateOrbPosition(initial.sunPosition);
    this.scene.add(this.celestialOrb);

    // Starfield for Vientiane Night Mode
    this.starField = this.createStarField();
    this.starField.visible = false;
    this.scene.add(this.starField);

    this.setupAudioInteractionHook();
    this.setTimeOfDay(this.currentTimeOfDay);
  }

  private createStarField(): THREE.Points {
    const count = 650;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.44 + 0.05;
      const r = 235;
      positions[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xfff8e7,
      size: 1.65,
      transparent: true,
      opacity: 0.88,
      fog: false
    });
    return new THREE.Points(geo, mat);
  }

  private updateOrbPosition(sunPos: THREE.Vector3): void {
    const dir = sunPos.clone().normalize().multiplyScalar(215);
    this.celestialOrb.position.copy(dir);
  }

  public setTimeOfDay(tod: TimeOfDay): void {
    this.currentTimeOfDay = tod;
    const preset = PRESETS[tod];

    this.skyUniforms.uTopColor.value.copy(preset.skyTop);
    this.skyUniforms.uHorizonColor.value.copy(preset.skyHorizon);
    this.scene.background = preset.skyHorizon.clone();

    this.fog.color.copy(preset.fogColor);
    this.fog.density = preset.fogDensity;

    this.dirLight.color.copy(preset.sunColor);
    this.dirLight.intensity = preset.sunIntensity;
    this.dirLight.position.copy(preset.sunPosition);

    this.hemiLight.color.copy(preset.hemiSky);
    this.hemiLight.groundColor.copy(preset.hemiGround);
    this.hemiLight.intensity = preset.hemiIntensity;

    this.ambientLight.color.copy(preset.ambientColor);
    this.ambientLight.intensity = preset.ambientIntensity;

    this.renderer.toneMappingExposure = preset.exposure;

    const orbMat = this.celestialOrb.material as THREE.MeshBasicMaterial;
    orbMat.color.copy(preset.orbColor);
    const haloMat = this.celestialHalo.material as THREE.MeshBasicMaterial;
    haloMat.color.copy(preset.orbColor);
    this.updateOrbPosition(preset.sunPosition);

    this.starField.visible = tod === 'night';

    this.onTimeOfDayChanged?.(tod, preset.nightFactor);
  }

  public cycleTimeOfDay(): TimeOfDay {
    const order: TimeOfDay[] = ['morning', 'golden_hour', 'night'];
    const idx = order.indexOf(this.currentTimeOfDay);
    const next = order[(idx + 1) % order.length];
    this.setTimeOfDay(next);
    return next;
  }

  private setupAudioInteractionHook(): void {
    const unlock = (): void => {
      this.ensureAudioContext();
    };
    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true, passive: true });
  }

  private ensureAudioContext(): AudioContext | null {
    try {
      if (!this.audioCtx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return null;

        this.audioCtx = new AudioCtx();
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.value = this.isMuted ? 0 : 0.35;
        this.masterGain.connect(this.audioCtx.destination);

        this.setupAmbientSoundscape(this.audioCtx, this.masterGain);
      }
      if (this.audioCtx.state === 'suspended') {
        void this.audioCtx.resume();
      }
      return this.audioCtx;
    } catch {
      return null;
    }
  }

  private setupAmbientSoundscape(ctx: AudioContext, destination: AudioNode): void {
    try {
      // 1. Soft warm Lao khaen-inspired harmonic pad drone (C4 + G4 subtle sine)
      const droneGain = ctx.createGain();
      droneGain.gain.value = 0.045;
      droneGain.connect(destination);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 261.63; // C4
      osc1.connect(droneGain);
      osc1.start();

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.value = 392.0; // G4
      osc2.connect(droneGain);
      osc2.start();

      // 2. Spatial Fountain Water Murmur (filtered pink/white noise)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0;
      let b1 = 0;
      let b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.997 * b0 + white * 0.029;
        b1 = 0.985 * b1 + white * 0.032;
        b2 = 0.95 * b2 + white * 0.048;
        output[i] = (b0 + b1 + b2 + white * 0.02) * 0.35;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 620;
      filter.Q.value = 0.7;

      this.fountainGain = ctx.createGain();
      this.fountainGain.gain.value = 0.02;

      noiseSource.connect(filter);
      filter.connect(this.fountainGain);
      this.fountainGain.connect(destination);
      noiseSource.start();

      // 3. Gentle Cat Purr Synthesizer (active when loafing on a sunny cushion)
      const purrOsc = ctx.createOscillator();
      purrOsc.type = 'triangle';
      purrOsc.frequency.value = 27.5;

      const purrFilter = ctx.createBiquadFilter();
      purrFilter.type = 'lowpass';
      purrFilter.frequency.value = 95;

      this.purrGain = ctx.createGain();
      this.purrGain.gain.value = 0.0;

      purrOsc.connect(purrFilter);
      purrFilter.connect(this.purrGain);
      this.purrGain.connect(destination);
      purrOsc.start();
    } catch {
      // Ignore audio errors on restricted devices
    }
  }

  private playPentatonicChimeNote(): void {
    if (this.isMuted || !this.audioCtx || !this.masterGain) return;
    try {
      const ctx = this.audioCtx;
      // Lao Dok Champa pentatonic frequencies (C5, D5, E5, G5, A5, C6, D6, E6)
      const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];
      const freq = scale[Math.floor(Math.random() * scale.length)];

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.075, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 2.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.45);
    } catch {
      // Safe fallback
    }
  }

  public playMeowSound(): void {
    const ctx = this.ensureAudioContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const formant = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      const pitchOffset = (Math.random() - 0.5) * 70;
      const startFreq = 490 + pitchOffset;
      const peakFreq = 780 + pitchOffset;
      const endFreq = 410 + pitchOffset;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(peakFreq, now + 0.14);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.46);

      formant.type = 'bandpass';
      formant.frequency.setValueAtTime(1100, now);
      formant.frequency.exponentialRampToValueAtTime(1650, now + 0.15);
      formant.frequency.exponentialRampToValueAtTime(920, now + 0.46);
      formant.Q.value = 2.4;

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.38, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);

      osc.connect(formant);
      formant.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch {
      // Safe fallback
    }
  }

  public playCollectSound(): void {
    const ctx = this.ensureAudioContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const now = ctx.currentTime + i * 0.065;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now);
        osc.stop(now + 0.58);
      });
    } catch {
      // Safe fallback
    }
  }

  public playSplashSound(): void {
    const ctx = this.ensureAudioContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    try {
      const now = ctx.currentTime;
      const duration = 0.38;
      const bufferSize = Math.floor(ctx.sampleRate * duration);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.12));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(950, now);
      filter.frequency.exponentialRampToValueAtTime(380, now + duration);
      filter.Q.value = 1.4;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.32, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + duration);
    } catch {
      // Safe fallback
    }
  }

  public playSwatSound(): void {
    const ctx = this.ensureAudioContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.14);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      // Safe fallback
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    const ctx = this.ensureAudioContext();
    if (ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.35, ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  public update(
    delta: number,
    elapsed: number,
    catPosition: THREE.Vector3,
    isLoafing: boolean
  ): void {
    if (this.starField.visible) {
      this.starField.rotation.y = elapsed * 0.008;
    }

    if (this.audioCtx && !this.isMuted) {
      // Gentle random pentatonic wind chime note every 2.5 - 5.2 seconds
      this.chimeTimer -= delta;
      if (this.chimeTimer <= 0) {
        this.chimeTimer = 2.4 + Math.random() * 2.8;
        this.playPentatonicChimeNote();
      }

      // Spatial fountain water murmur volume based on proximity to fountain (0, 0, -52) or koi ponds
      if (this.fountainGain) {
        const distFountain = Math.hypot(catPosition.x, catPosition.z + 52);
        const distPond = Math.hypot(Math.abs(catPosition.x) - 19, Math.abs(catPosition.z) - 14.5);
        const minWaterDist = Math.min(distFountain, distPond);
        const proximity = Math.max(0, 1 - minWaterDist / 38);
        const targetGain = 0.015 + proximity * 0.14;
        this.fountainGain.gain.setTargetAtTime(targetGain, this.audioCtx.currentTime, 0.1);
      }

      // Rhythmic cat purr when loafing on a sunny nap cushion
      if (this.purrGain) {
        const purrPulse = isLoafing ? 0.09 + Math.sin(elapsed * 3.6) * 0.045 : 0.0;
        this.purrGain.gain.setTargetAtTime(purrPulse, this.audioCtx.currentTime, 0.12);
      }
    }
  }
}
