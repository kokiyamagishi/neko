import * as THREE from 'three';

interface KoiFish {
  group: THREE.Group;
  tailPivot: THREE.Group;
  leftFin: THREE.Mesh;
  rightFin: THREE.Mesh;
  pondCenter: THREE.Vector3;
  rx: number;
  rz: number;
  speed: number;
  phase: number;
  figureEight: boolean;
  leapTimer: number;
  leapDuration: number;
  splashRing: THREE.Mesh;
}

interface ParkPigeon {
  group: THREE.Group;
  bodyGroup: THREE.Group;
  headGroup: THREE.Group;
  leftWing: THREE.Group;
  rightWing: THREE.Group;
  homePos: THREE.Vector3;
  wanderAngle: number;
  wanderRadius: number;
  peckPhase: number;
  state: 'ground' | 'flying';
  flightTimer: number;
  flightOrbitCenter: THREE.Vector3;
  flightOrbitAngle: number;
}

interface TropicalButterfly {
  group: THREE.Group;
  leftWing: THREE.Group;
  rightWing: THREE.Group;
  anchor: THREE.Vector3;
  radiusX: number;
  radiusZ: number;
  speed: number;
  phase: number;
  flapSpeed: number;
}

interface DokChampaFlower {
  group: THREE.Group;
  flowerHead: THREE.Group;
  haloRing: THREE.Mesh;
  sparkles: THREE.Group;
  basePos: THREE.Vector3;
  phase: number;
  collected: boolean;
  collectAnimTimer: number;
}

interface NapCushion {
  group: THREE.Group;
  sunbeam: THREE.Mesh;
  haloRing: THREE.Mesh;
  position: THREE.Vector3;
  label: string;
}

export class WildlifeAndInteractables {
  public readonly group: THREE.Group;
  public collectedCount = 0;
  public readonly totalFlowers = 30;
  public koiBattedCount = 0;
  public pigeonsChasedCount = 0;
  public activeNapSpotLabel: string | null = null;

  public onFlowerCollected?: (count: number, total: number) => void;
  public onKoiBatted?: () => void;
  public onPigeonScattered?: () => void;

  private koiList: KoiFish[] = [];
  private pigeonList: ParkPigeon[] = [];
  private butterflyList: TropicalButterfly[] = [];
  private flowerList: DokChampaFlower[] = [];
  private cushionList: NapCushion[] = [];
  private wasSwatting = false;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    this.group.name = 'WildlifeAndInteractables';
    scene.add(this.group);

    this.createKoiFish();
    this.createPigeons();
    this.createButterflies();
    this.createDokChampaFlowers();
    this.createNapCushions();
  }

  public restoreCollectedFlowers(indices: number[]): void {
    let count = 0;
    for (const idx of indices) {
      const f = this.flowerList[idx];
      if (f && !f.collected) {
        f.collected = true;
        f.collectAnimTimer = 0;
        f.group.visible = false;
      }
    }
    for (const f of this.flowerList) {
      if (f.collected) count += 1;
    }
    this.collectedCount = count;
  }

  public getCollectedFlowerIndices(): number[] {
    const out: number[] = [];
    for (let i = 0; i < this.flowerList.length; i++) {
      if (this.flowerList[i].collected) out.push(i);
    }
    return out;
  }

  private createKoiFish(): void {
    const pondCenters = [
      new THREE.Vector3(-19, 0.16, -14.5),
      new THREE.Vector3(19, 0.16, -14.5),
      new THREE.Vector3(-19, 0.16, 14.5),
      new THREE.Vector3(19, 0.16, 14.5)
    ];

    const bodyGeo = new THREE.CapsuleGeometry(0.11, 0.34, 8, 12);
    bodyGeo.rotateX(Math.PI * 0.5);

    const spotGeo = new THREE.SphereGeometry(0.095, 8, 8);
    spotGeo.scale(1.1, 0.45, 1.5);

    const tailGeo = new THREE.ConeGeometry(0.13, 0.28, 5);
    tailGeo.rotateX(-Math.PI * 0.5);
    tailGeo.translate(0, 0, -0.12);

    const finGeo = new THREE.BoxGeometry(0.16, 0.015, 0.1);
    const dorsalGeo = new THREE.BoxGeometry(0.02, 0.09, 0.22);

    const ringGeo = new THREE.RingGeometry(0.12, 0.22, 24);
    ringGeo.rotateX(-Math.PI * 0.5);

    const koiPalettes = [
      // Kohaku (white with vermilion-orange spots)
      { base: 0xfff8ef, spot1: 0xff4e22, spot2: 0xff6b35, fin: 0xfff0dd },
      // Yamabuki Ogon (metallic golden yellow)
      { base: 0xffca3a, spot1: 0xffaa00, spot2: 0xffe270, fin: 0xffdf78 },
      // Showa / Sanke (calico white, crimson, ink black)
      { base: 0xfaf3e8, spot1: 0xe63946, spot2: 0x22252a, fin: 0xff7b54 }
    ];

    for (let p = 0; p < pondCenters.length; p++) {
      const center = pondCenters[p];
      for (let i = 0; i < 6; i++) {
        const idx = p * 6 + i;
        const palette = koiPalettes[idx % koiPalettes.length];

        const fishGroup = new THREE.Group();
        const bodyMat = new THREE.MeshStandardMaterial({
          color: palette.base,
          roughness: 0.25,
          metalness: 0.12
        });
        const spotMat1 = new THREE.MeshStandardMaterial({
          color: palette.spot1,
          roughness: 0.28
        });
        const spotMat2 = new THREE.MeshStandardMaterial({
          color: palette.spot2,
          roughness: 0.28
        });
        const finMat = new THREE.MeshStandardMaterial({
          color: palette.fin,
          roughness: 0.35,
          transparent: true,
          opacity: 0.88
        });

        const body = new THREE.Mesh(bodyGeo, bodyMat);
        fishGroup.add(body);

        const patch1 = new THREE.Mesh(spotGeo, spotMat1);
        patch1.position.set(0.01, 0.07, 0.08);
        fishGroup.add(patch1);

        const patch2 = new THREE.Mesh(spotGeo, spotMat2);
        patch2.position.set(-0.01, 0.065, -0.09);
        fishGroup.add(patch2);

        const dorsal = new THREE.Mesh(dorsalGeo, finMat);
        dorsal.position.set(0, 0.11, -0.02);
        fishGroup.add(dorsal);

        const leftFin = new THREE.Mesh(finGeo, finMat);
        leftFin.position.set(0.11, -0.02, 0.08);
        leftFin.rotation.y = 0.35;
        fishGroup.add(leftFin);

        const rightFin = new THREE.Mesh(finGeo, finMat);
        rightFin.position.set(-0.11, -0.02, 0.08);
        rightFin.rotation.y = -0.35;
        fishGroup.add(rightFin);

        const tailPivot = new THREE.Group();
        tailPivot.position.set(0, 0, -0.22);
        const tailMesh = new THREE.Mesh(tailGeo, finMat);
        tailPivot.add(tailMesh);
        fishGroup.add(tailPivot);

        const scale = 0.85 + (idx % 4) * 0.12;
        fishGroup.scale.setScalar(scale);

        const splashMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        });
        const splashRing = new THREE.Mesh(ringGeo, splashMat);
        splashRing.position.copy(center);
        splashRing.position.y = center.y + 0.05;
        this.group.add(splashRing);

        fishGroup.position.copy(center);
        this.group.add(fishGroup);

        this.koiList.push({
          group: fishGroup,
          tailPivot,
          leftFin,
          rightFin,
          pondCenter: center.clone(),
          rx: 2.0 + (i % 3) * 1.15,
          rz: 2.6 + ((i + 1) % 3) * 1.35,
          speed: 0.48 + (idx % 5) * 0.09,
          phase: (idx * Math.PI * 2) / 6,
          figureEight: i % 2 === 0,
          leapTimer: 0,
          leapDuration: 1.05,
          splashRing
        });
      }
    }
  }

  private createPigeons(): void {
    const pigeonAnchors = [
      new THREE.Vector3(-6.5, 0, -34.0),
      new THREE.Vector3(-4.2, 0, -31.5),
      new THREE.Vector3(5.8, 0, -33.2),
      new THREE.Vector3(7.4, 0, -36.0),
      new THREE.Vector3(-9.5, 0, -48.0),
      new THREE.Vector3(9.2, 0, -47.5),
      new THREE.Vector3(-11.0, 0, -22.0),
      new THREE.Vector3(11.5, 0, -21.0),
      new THREE.Vector3(-8.5, 0, -9.5),
      new THREE.Vector3(8.5, 0, -9.2),
      new THREE.Vector3(-12.5, 0, 2.5),
      new THREE.Vector3(12.8, 0, 3.2),
      new THREE.Vector3(-7.5, 0, 14.5),
      new THREE.Vector3(7.2, 0, 15.0),
      new THREE.Vector3(-5.0, 0, 25.0),
      new THREE.Vector3(5.4, 0, 26.5),
      new THREE.Vector3(-2.8, 0, -26.5),
      new THREE.Vector3(3.1, 0, -25.8)
    ];

    const bodyGeo = new THREE.SphereGeometry(0.16, 10, 10);
    bodyGeo.scale(0.85, 0.85, 1.35);

    const headGeo = new THREE.SphereGeometry(0.095, 8, 8);
    const collarGeo = new THREE.CylinderGeometry(0.085, 0.11, 0.07, 10);
    const beakGeo = new THREE.ConeGeometry(0.032, 0.09, 6);
    beakGeo.rotateX(Math.PI * 0.5);

    const wingGeo = new THREE.BoxGeometry(0.28, 0.025, 0.22);
    wingGeo.translate(0.14, 0, 0);

    const tailGeo = new THREE.BoxGeometry(0.12, 0.02, 0.18);

    const greyMat = new THREE.MeshStandardMaterial({ color: 0x7d8590, roughness: 0.65 });
    const darkWingMat = new THREE.MeshStandardMaterial({ color: 0x4f5661, roughness: 0.6 });
    const neckMat = new THREE.MeshStandardMaterial({
      color: 0x2ec4b6,
      roughness: 0.25,
      metalness: 0.55
    });
    const beakMat = new THREE.MeshStandardMaterial({ color: 0xff9f1c, roughness: 0.4 });

    for (let i = 0; i < pigeonAnchors.length; i++) {
      const home = pigeonAnchors[i];
      const pigeonGroup = new THREE.Group();
      const bodyGroup = new THREE.Group();
      bodyGroup.position.y = 0.18;
      pigeonGroup.add(bodyGroup);

      const torso = new THREE.Mesh(bodyGeo, greyMat);
      torso.castShadow = true;
      bodyGroup.add(torso);

      const tail = new THREE.Mesh(tailGeo, darkWingMat);
      tail.position.set(0, 0.02, -0.22);
      tail.rotation.x = -0.25;
      bodyGroup.add(tail);

      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.12, 0.15);

      const collar = new THREE.Mesh(collarGeo, neckMat);
      collar.position.set(0, -0.03, 0);
      headGroup.add(collar);

      const head = new THREE.Mesh(headGeo, greyMat);
      head.position.set(0, 0.04, 0.02);
      headGroup.add(head);

      const beak = new THREE.Mesh(beakGeo, beakMat);
      beak.position.set(0, 0.035, 0.12);
      headGroup.add(beak);

      bodyGroup.add(headGroup);

      const leftWing = new THREE.Group();
      leftWing.position.set(0.09, 0.04, 0.02);
      const leftWingMesh = new THREE.Mesh(wingGeo, darkWingMat);
      leftWing.add(leftWingMesh);
      bodyGroup.add(leftWing);

      const rightWing = new THREE.Group();
      rightWing.position.set(-0.09, 0.04, 0.02);
      const rightWingMesh = new THREE.Mesh(wingGeo, darkWingMat);
      rightWingMesh.scale.x = -1;
      rightWing.add(rightWingMesh);
      bodyGroup.add(rightWing);

      pigeonGroup.position.copy(home);
      this.group.add(pigeonGroup);

      this.pigeonList.push({
        group: pigeonGroup,
        bodyGroup,
        headGroup,
        leftWing,
        rightWing,
        homePos: home.clone(),
        wanderAngle: (i * 1.7) % (Math.PI * 2),
        wanderRadius: 1.4 + (i % 3) * 0.65,
        peckPhase: i * 0.9,
        state: 'ground',
        flightTimer: 0,
        flightOrbitCenter: home.clone().add(new THREE.Vector3(0, 9.5 + (i % 4) * 1.8, 0)),
        flightOrbitAngle: (i * Math.PI) / 9
      });
    }
  }

  private createButterflies(): void {
    const anchors = [
      new THREE.Vector3(-14, 1.4, -36),
      new THREE.Vector3(14, 1.5, -36),
      new THREE.Vector3(-22, 1.3, -18),
      new THREE.Vector3(22, 1.3, -18),
      new THREE.Vector3(-22, 1.4, 18),
      new THREE.Vector3(22, 1.4, 18),
      new THREE.Vector3(-14, 1.5, 32),
      new THREE.Vector3(14, 1.5, 32),
      new THREE.Vector3(0, 1.6, 28),
      new THREE.Vector3(-9, 1.4, 42),
      new THREE.Vector3(9, 1.4, 42),
      new THREE.Vector3(-26, 1.6, 0),
      new THREE.Vector3(26, 1.6, 0),
      new THREE.Vector3(-16, 1.5, -52),
      new THREE.Vector3(16, 1.5, -52),
      new THREE.Vector3(-11, 1.3, -14),
      new THREE.Vector3(11, 1.3, -14),
      new THREE.Vector3(-11, 1.3, 14),
      new THREE.Vector3(11, 1.3, 14),
      new THREE.Vector3(0, 16.9, -4)
    ];

    const colors = [0xffd166, 0x2ec4b6, 0xff6b9d];
    const foreWingGeo = new THREE.CircleGeometry(0.11, 6);
    foreWingGeo.translate(0.09, 0, 0.03);
    const hindWingGeo = new THREE.CircleGeometry(0.075, 6);
    hindWingGeo.translate(0.07, 0, -0.05);

    for (let i = 0; i < anchors.length; i++) {
      const bGroup = new THREE.Group();
      const wingColor = colors[i % colors.length];
      const wingMat = new THREE.MeshBasicMaterial({
        color: wingColor,
        side: THREE.DoubleSide
      });

      const leftWing = new THREE.Group();
      const lf = new THREE.Mesh(foreWingGeo, wingMat);
      lf.rotation.x = -Math.PI * 0.5;
      const lh = new THREE.Mesh(hindWingGeo, wingMat);
      lh.rotation.x = -Math.PI * 0.5;
      leftWing.add(lf, lh);

      const rightWing = new THREE.Group();
      rightWing.scale.x = -1;
      const rf = new THREE.Mesh(foreWingGeo, wingMat);
      rf.rotation.x = -Math.PI * 0.5;
      const rh = new THREE.Mesh(hindWingGeo, wingMat);
      rh.rotation.x = -Math.PI * 0.5;
      rightWing.add(rf, rh);

      bGroup.add(leftWing, rightWing);
      bGroup.position.copy(anchors[i]);
      this.group.add(bGroup);

      this.butterflyList.push({
        group: bGroup,
        leftWing,
        rightWing,
        anchor: anchors[i].clone(),
        radiusX: 2.2 + (i % 4) * 0.8,
        radiusZ: 2.4 + ((i + 2) % 4) * 0.7,
        speed: 0.75 + (i % 5) * 0.14,
        phase: i * 1.13,
        flapSpeed: 10.5 + (i % 4) * 1.5
      });
    }
  }

  private createDokChampaFlowers(): void {
    // Exactly 30 Dok Champa Collectible Blossoms across Patuxay Park & Monument
    const flowerCoords: [number, number, number][] = [
      // 1-6: Musical Fountain Rim & North Plaza
      [0, 1.05, -39.2],
      [11.2, 1.05, -52.0],
      [-11.2, 1.05, -52.0],
      [0, 1.05, -64.8],
      [-5.5, 0.55, -33.0],
      [5.5, 0.55, -33.0],

      // 7-14: Four Flanking Lotus/Koi Reflection Ponds & Bridges
      [-13.5, 0.78, -14.5],
      [-24.5, 0.78, -14.5],
      [13.5, 0.78, -14.5],
      [24.5, 0.78, -14.5],
      [-13.5, 0.78, 14.5],
      [-24.5, 0.78, 14.5],
      [13.5, 0.78, 14.5],
      [24.5, 0.78, 14.5],

      // 15-18: Under Patuxay Vaulted Arch & Podium Ledges
      [0, 1.15, 0],
      [0, 1.05, -10.5],
      [0, 1.05, 10.5],
      [-10.5, 1.05, 0],

      // 19-24: Monument Archway Steps, Plinth Corners & South Courtyard
      [10.5, 1.05, 0.0],
      [10.5, 1.05, 7.8],
      [10.5, 1.05, -7.8],
      [0.0, 0.55, 18.5],
      [-10.5, 1.05, 7.8],
      [12.0, 0.55, 30.0],

      // 25-30: 6 Blossoms Atop the Patuxay Rooftop Terrace
      [0, 16.55, -7.2],
      [7.2, 16.55, 0],
      [0, 16.55, 7.2],
      [-7.2, 16.55, 0],
      [5.2, 16.55, -5.2],
      [-5.2, 16.55, 5.2]
    ];

    const petalGeo = new THREE.SphereGeometry(0.18, 10, 8);
    petalGeo.scale(0.58, 0.18, 1.35);
    petalGeo.translate(0, 0, 0.19);

    const centerGeo = new THREE.SphereGeometry(0.12, 10, 10);
    centerGeo.scale(1, 0.55, 1);

    const haloGeo = new THREE.RingGeometry(0.36, 0.48, 24);
    haloGeo.rotateX(-Math.PI * 0.5);

    const sparkleGeo = new THREE.OctahedronGeometry(0.055, 0);

    const petalMat = new THREE.MeshStandardMaterial({
      color: 0xfffdf7,
      emissive: 0xffd166,
      emissiveIntensity: 0.35,
      roughness: 0.25
    });

    const throatMat = new THREE.MeshStandardMaterial({
      color: 0xffbe0b,
      emissive: 0xff9f1c,
      emissiveIntensity: 0.75,
      roughness: 0.2
    });

    for (let i = 0; i < flowerCoords.length; i++) {
      const [x, y, z] = flowerCoords[i];
      const fGroup = new THREE.Group();
      const flowerHead = new THREE.Group();

      for (let p = 0; p < 5; p++) {
        const petalPivot = new THREE.Group();
        petalPivot.rotation.y = (p * Math.PI * 2) / 5;
        const petal = new THREE.Mesh(petalGeo, petalMat);
        petal.rotation.x = 0.22;
        petal.rotation.z = 0.18;
        petalPivot.add(petal);
        flowerHead.add(petalPivot);
      }

      const throat = new THREE.Mesh(centerGeo, throatMat);
      throat.position.y = 0.03;
      flowerHead.add(throat);

      fGroup.add(flowerHead);

      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xffd166,
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide
      });
      const haloRing = new THREE.Mesh(haloGeo, haloMat);
      haloRing.position.y = -0.22;
      fGroup.add(haloRing);

      const sparkles = new THREE.Group();
      const sparkleMat = new THREE.MeshBasicMaterial({ color: 0xffe680 });
      for (let s = 0; s < 6; s++) {
        const sp = new THREE.Mesh(sparkleGeo, sparkleMat);
        const angle = (s * Math.PI * 2) / 6;
        sp.position.set(Math.cos(angle) * 0.28, 0.05 * (s % 3), Math.sin(angle) * 0.28);
        sparkles.add(sp);
      }
      fGroup.add(sparkles);

      const basePos = new THREE.Vector3(x, y, z);
      fGroup.position.copy(basePos);
      this.group.add(fGroup);

      this.flowerList.push({
        group: fGroup,
        flowerHead,
        haloRing,
        sparkles,
        basePos,
        phase: i * 0.55,
        collected: false,
        collectAnimTimer: 0
      });
    }
  }

  public resetAllFlowers(): void {
    this.collectedCount = 0;
    for (const f of this.flowerList) {
      f.collected = false;
      f.collectAnimTimer = 0;
      f.group.visible = true;
      f.group.position.copy(f.basePos);
      f.flowerHead.scale.setScalar(1);
      f.sparkles.scale.setScalar(1);
    }
  }

  private createNapCushions(): void {
    const spots: { pos: [number, number, number]; label: string }[] = [
      { pos: [0, 0.52, -39.8], label: 'ເບາະແສງແດດ ແຄມນ້ຳພຸດົນຕີ' },
      { pos: [-13.5, 0.42, -14.5], label: 'ເບາະໄໝລາວ ແຄມໜອງບົວ' },
      { pos: [3.2, 0.76, 3.2], label: 'ເບາະໄໝລາວ ໃຕ້ປະຕູໄຊ' },
      { pos: [12.0, 0.16, 32.0], label: 'ເບາະໄໝລາວ ສວນດອກຈຳປາ' },
      { pos: [0, 16.05, -8.5], label: 'ເບາະຊົມວິວ ດາດຟ້າປະຕູໄຊ' }
    ];

    const cushionGeo = new THREE.CylinderGeometry(0.68, 0.74, 0.16, 16);
    const innerPadGeo = new THREE.CylinderGeometry(0.52, 0.55, 0.18, 16);
    const tasselGeo = new THREE.SphereGeometry(0.075, 8, 8);
    const sunbeamGeo = new THREE.CylinderGeometry(0.45, 0.92, 4.5, 20, 1, true);
    sunbeamGeo.translate(0, 2.25, 0);
    const ringGeo = new THREE.RingGeometry(0.76, 0.88, 28);
    ringGeo.rotateX(-Math.PI * 0.5);

    const silkMat = new THREE.MeshStandardMaterial({
      color: 0x9e1b24,
      roughness: 0.45,
      metalness: 0.15
    });
    const goldBrocadeMat = new THREE.MeshStandardMaterial({
      color: 0xf3c653,
      emissive: 0xd49b27,
      emissiveIntensity: 0.25,
      roughness: 0.3,
      metalness: 0.45
    });

    for (const spot of spots) {
      const cGroup = new THREE.Group();
      const pos = new THREE.Vector3(spot.pos[0], spot.pos[1], spot.pos[2]);

      const outerPad = new THREE.Mesh(cushionGeo, goldBrocadeMat);
      outerPad.position.y = 0.08;
      outerPad.castShadow = true;
      outerPad.receiveShadow = true;
      cGroup.add(outerPad);

      const innerPad = new THREE.Mesh(innerPadGeo, silkMat);
      innerPad.position.y = 0.085;
      cGroup.add(innerPad);

      for (let t = 0; t < 8; t++) {
        const angle = (t * Math.PI * 2) / 8;
        const tassel = new THREE.Mesh(tasselGeo, goldBrocadeMat);
        tassel.position.set(Math.cos(angle) * 0.72, 0.06, Math.sin(angle) * 0.72);
        cGroup.add(tassel);
      }

      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xffe49e,
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const sunbeam = new THREE.Mesh(sunbeamGeo, beamMat);
      cGroup.add(sunbeam);

      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffd166,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide
      });
      const haloRing = new THREE.Mesh(ringGeo, ringMat);
      haloRing.position.y = 0.02;
      cGroup.add(haloRing);

      cGroup.position.copy(pos);
      this.group.add(cGroup);

      this.cushionList.push({
        group: cGroup,
        sunbeam,
        haloRing,
        position: pos,
        label: spot.label
      });
    }
  }

  public interactWithKoi(catPosition: THREE.Vector3): boolean {
    let battedAny = false;
    for (const koi of this.koiList) {
      const dist = koi.group.position.distanceTo(catPosition);
      if (dist <= 3.2 && koi.leapTimer <= 0) {
        koi.leapTimer = koi.leapDuration;
        koi.splashRing.position.set(
          koi.group.position.x,
          koi.pondCenter.y + 0.04,
          koi.group.position.z
        );
        battedAny = true;
      }
    }

    if (battedAny) {
      this.koiBattedCount += 1;
      this.onKoiBatted?.();
    }
    return battedAny;
  }

  public update(
    delta: number,
    elapsed: number,
    catPosition: THREE.Vector3,
    isSwatting: boolean
  ): void {
    const swatTriggered = isSwatting && !this.wasSwatting;
    this.wasSwatting = isSwatting;

    if (swatTriggered) {
      this.interactWithKoi(catPosition);
    }

    // 1. Update 24 Koi Fish
    for (let i = 0; i < this.koiList.length; i++) {
      const koi = this.koiList[i];
      const speedMult = koi.leapTimer > 0 ? 2.4 : 1.0;
      koi.phase += delta * koi.speed * speedMult;

      let localX = 0;
      let localZ = 0;
      let dx = 0;
      let dz = 0;

      if (koi.figureEight) {
        localX = Math.sin(koi.phase) * koi.rx;
        localZ = Math.sin(koi.phase * 2) * (koi.rz * 0.65);
        dx = Math.cos(koi.phase) * koi.rx;
        dz = Math.cos(koi.phase * 2) * 2 * (koi.rz * 0.65);
      } else {
        localX = Math.cos(koi.phase) * koi.rx;
        localZ = Math.sin(koi.phase) * koi.rz;
        dx = -Math.sin(koi.phase) * koi.rx;
        dz = Math.cos(koi.phase) * koi.rz;
      }

      let leapY = 0;
      let pitchX = 0;
      if (koi.leapTimer > 0) {
        koi.leapTimer = Math.max(0, koi.leapTimer - delta);
        const progress = 1 - koi.leapTimer / koi.leapDuration;
        leapY = Math.sin(progress * Math.PI) * 0.72;
        pitchX = -Math.cos(progress * Math.PI) * 0.65;

        const splashScale = 1 + progress * 3.2;
        koi.splashRing.scale.setScalar(splashScale);
        const ringMat = koi.splashRing.material as THREE.MeshBasicMaterial;
        ringMat.opacity = (1 - progress) * 0.75;
      } else {
        const ringMat = koi.splashRing.material as THREE.MeshBasicMaterial;
        ringMat.opacity = 0;
      }

      koi.group.position.set(
        koi.pondCenter.x + localX,
        koi.pondCenter.y + leapY,
        koi.pondCenter.z + localZ
      );

      const heading = Math.atan2(dx, dz);
      koi.group.rotation.set(pitchX, heading, 0);

      const wagFreq = koi.leapTimer > 0 ? 18 : 7.5;
      koi.tailPivot.rotation.y = Math.sin(elapsed * wagFreq + i) * 0.42;
      koi.leftFin.rotation.z = Math.sin(elapsed * 5 + i) * 0.2;
      koi.rightFin.rotation.z = -Math.sin(elapsed * 5 + i) * 0.2;
    }

    // 2. Update 18 Park Pigeons
    for (let i = 0; i < this.pigeonList.length; i++) {
      const pigeon = this.pigeonList[i];

      if (pigeon.state === 'ground') {
        const distToCat = pigeon.group.position.distanceTo(catPosition);
        if (distToCat < 3.5) {
          pigeon.state = 'flying';
          pigeon.flightTimer = 8.0;
          pigeon.flightOrbitAngle = Math.atan2(
            pigeon.group.position.z - catPosition.z,
            pigeon.group.position.x - catPosition.x
          );
          this.pigeonsChasedCount += 1;
          this.onPigeonScattered?.();
          continue;
        }

        pigeon.wanderAngle += delta * 0.45;
        const wx = pigeon.homePos.x + Math.cos(pigeon.wanderAngle) * pigeon.wanderRadius;
        const wz = pigeon.homePos.z + Math.sin(pigeon.wanderAngle) * pigeon.wanderRadius;
        const tx = -Math.sin(pigeon.wanderAngle);
        const tz = Math.cos(pigeon.wanderAngle);

        pigeon.group.position.set(wx, pigeon.homePos.y, wz);
        pigeon.group.rotation.y = Math.atan2(tx, tz);

        // Waddle & head peck
        pigeon.bodyGroup.rotation.z = Math.sin(elapsed * 7 + pigeon.peckPhase) * 0.08;
        const peckWave = Math.max(0, Math.sin(elapsed * 3.8 + pigeon.peckPhase));
        pigeon.headGroup.rotation.x = peckWave * 0.55;
        pigeon.leftWing.rotation.z = 0;
        pigeon.rightWing.rotation.z = 0;
      } else {
        pigeon.flightTimer -= delta;
        pigeon.flightOrbitAngle += delta * 1.65;

        const progress = 1 - Math.max(0, pigeon.flightTimer) / 8.0;
        // Ascend smoothly, circle high, then descend back to homePos
        const heightEnvelope = Math.sin(progress * Math.PI);
        const currentRadius = pigeon.wanderRadius + heightEnvelope * 5.5;
        const currentY = pigeon.homePos.y + heightEnvelope * 9.5;

        const fx = pigeon.homePos.x + Math.cos(pigeon.flightOrbitAngle) * currentRadius;
        const fz = pigeon.homePos.z + Math.sin(pigeon.flightOrbitAngle) * currentRadius;

        pigeon.group.position.set(fx, currentY, fz);
        pigeon.group.rotation.y = Math.atan2(
          -Math.sin(pigeon.flightOrbitAngle),
          Math.cos(pigeon.flightOrbitAngle)
        );

        const flap = Math.sin(elapsed * 22 + i) * 0.85;
        pigeon.leftWing.rotation.z = flap;
        pigeon.rightWing.rotation.z = -flap;
        pigeon.headGroup.rotation.x = 0;

        if (pigeon.flightTimer <= 0) {
          pigeon.state = 'ground';
          pigeon.group.position.y = pigeon.homePos.y;
        }
      }
    }

    // 3. Update 20 Tropical Butterflies
    for (let i = 0; i < this.butterflyList.length; i++) {
      const b = this.butterflyList[i];
      const t = elapsed * b.speed + b.phase;
      const bx = b.anchor.x + Math.sin(t) * b.radiusX;
      const bz = b.anchor.z + Math.cos(t * 1.3) * b.radiusZ;
      const by = b.anchor.y + Math.sin(t * 2.4) * 0.45;

      const dx = Math.cos(t) * b.radiusX;
      const dz = -Math.sin(t * 1.3) * 1.3 * b.radiusZ;
      b.group.position.set(bx, by, bz);
      b.group.rotation.y = Math.atan2(dx, dz);

      const flap = Math.sin(elapsed * b.flapSpeed + b.phase) * 0.95;
      b.leftWing.rotation.z = flap;
      b.rightWing.rotation.z = -flap;
    }

    // 4. Update 30 Collectible Dok Champa Blossoms
    for (let i = 0; i < this.flowerList.length; i++) {
      const f = this.flowerList[i];
      if (f.collected) {
        if (f.collectAnimTimer > 0) {
          f.collectAnimTimer = Math.max(0, f.collectAnimTimer - delta);
          const p = 1 - f.collectAnimTimer / 0.55;
          f.group.position.y = f.basePos.y + p * 1.45;
          f.flowerHead.rotation.y += delta * 10;
          f.flowerHead.scale.setScalar(Math.max(0.001, 1 - p));
          f.sparkles.scale.setScalar(1 + p * 2.4);
          f.sparkles.rotation.y += delta * 8;
          if (f.collectAnimTimer === 0) {
            f.group.visible = false;
          }
        }
        continue;
      }

      // Gentle bobbing & spinning
      f.group.position.y = f.basePos.y + Math.sin(elapsed * 2.4 + f.phase) * 0.12;
      f.flowerHead.rotation.y = elapsed * 1.1 + f.phase;
      f.sparkles.rotation.y = -elapsed * 1.5 + f.phase;
      const haloScale = 0.92 + Math.sin(elapsed * 3.2 + f.phase) * 0.12;
      f.haloRing.scale.setScalar(haloScale);

      // Check collection within generous 2.15m radius
      if (f.group.position.distanceTo(catPosition) <= 2.15) {
        f.collected = true;
        f.collectAnimTimer = 0.55;
        this.collectedCount += 1;
        this.onFlowerCollected?.(this.collectedCount, this.totalFlowers);
      }
    }

    // 5. Update 5 Scenic Sunny Nap Cushions & check proximity
    let foundNapLabel: string | null = null;
    for (let i = 0; i < this.cushionList.length; i++) {
      const c = this.cushionList[i];
      c.haloRing.rotation.z = elapsed * 0.45 + i;
      const beamMat = c.sunbeam.material as THREE.MeshBasicMaterial;
      beamMat.opacity = 0.13 + Math.sin(elapsed * 1.8 + i) * 0.04;

      if (catPosition.distanceTo(c.position) <= 2.2) {
        foundNapLabel = c.label;
      }
    }
    this.activeNapSpotLabel = foundNapLabel;
  }
}
