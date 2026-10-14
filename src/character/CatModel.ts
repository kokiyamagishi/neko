import * as THREE from 'three';
import { TextureManager } from '../core/TextureManager';

export type CoatId = 'siamese' | 'ginger_tabby' | 'korat' | 'calico';

export type CatAnimState =
  | 'idle'
  | 'walk'
  | 'trot'
  | 'sprint'
  | 'jump'
  | 'climb'
  | 'swat'
  | 'meow'
  | 'loaf';

export interface CoatDefinition {
  id: CoatId;
  name: string;
  subtitle: string;
  bodyColor: string;
  pointColor: string;
  bellyColor: string;
  eyeColor: string;
  noseColor: string;
}

export const COAT_DEFINITIONS: Record<CoatId, CoatDefinition> = {
  siamese: {
    id: 'siamese',
    name: 'Classic Seal-Point Siamese',
    subtitle: 'Warm ivory-cream silk coat with chocolate seal points & sapphire eyes',
    bodyColor: '#f5ead6',
    pointColor: '#3d261c',
    bellyColor: '#fbf5ea',
    eyeColor: '#2b82e3',
    noseColor: '#2b1a13'
  },
  ginger_tabby: {
    id: 'ginger_tabby',
    name: 'Ginger & White Street Tabby',
    subtitle: 'Warm marmalade orange stripes with snowy white mittens & amber-gold eyes',
    bodyColor: '#e88331',
    pointColor: '#b54c13',
    bellyColor: '#fcfaf5',
    eyeColor: '#d99b1e',
    noseColor: '#e67e8b'
  },
  korat: {
    id: 'korat',
    name: 'Silver-Blue Korat',
    subtitle: 'Velvet blue-silver lucky coat with dusty slate tips & emerald-green eyes',
    bodyColor: '#768699',
    pointColor: '#4c5969',
    bellyColor: '#98a7b8',
    eyeColor: '#2ebd62',
    noseColor: '#3b4452'
  },
  calico: {
    id: 'calico',
    name: 'Golden Temple Calico',
    subtitle: 'Creamy white base with spiced ginger & espresso patches and honey-green eyes',
    bodyColor: '#f7efe2',
    pointColor: '#2e1f18',
    bellyColor: '#ffffff',
    eyeColor: '#78b833',
    noseColor: '#f08a99'
  }
};

interface LegRig {
  hipPivot: THREE.Group;
  kneePivot: THREE.Group;
  pawGroup: THREE.Group;
  upperMesh: THREE.Mesh;
  lowerMesh: THREE.Mesh;
  pawMesh: THREE.Mesh;
}

interface FloatingRingFX {
  mesh: THREE.Group;
  age: number;
  maxAge: number;
  startY: number;
}

export class CatModel {
  public readonly group: THREE.Group;
  public currentCoat: CoatId = 'siamese';

  // Articulated rig nodes
  private readonly rootPivot: THREE.Group;
  private readonly spineGroup: THREE.Group;
  private readonly chestMesh: THREE.Mesh;
  private readonly headPivot: THREE.Group;
  private readonly jawPivot: THREE.Group;
  private readonly leftEarPivot: THREE.Group;
  private readonly rightEarPivot: THREE.Group;
  private readonly leftEyelid: THREE.Mesh;
  private readonly rightEyelid: THREE.Mesh;
  private readonly leftHappyCrescent: THREE.Mesh;
  private readonly rightHappyCrescent: THREE.Mesh;
  private readonly bellPivot: THREE.Group;
  private readonly dokChampaGroup: THREE.Group;

  private readonly frontLeftLeg: LegRig;
  private readonly frontRightLeg: LegRig;
  private readonly backLeftLeg: LegRig;
  private readonly backRightLeg: LegRig;
  private readonly tailSegments: THREE.Group[] = [];

  // Dynamic coat pattern groups
  private readonly siameseMaskMesh: THREE.Mesh;
  private readonly tabbyStripesGroup: THREE.Group;
  private readonly calicoPatchesGroup: THREE.Group;

  // Shared live-switchable materials
  private readonly bodyMat: THREE.MeshStandardMaterial;
  private readonly pointMat: THREE.MeshStandardMaterial;
  private readonly bellyMat: THREE.MeshStandardMaterial;
  private readonly pawMat: THREE.MeshStandardMaterial;
  private readonly muzzleMat: THREE.MeshStandardMaterial;
  private readonly eyeIrisMat: THREE.MeshStandardMaterial;
  private readonly noseMat: THREE.MeshStandardMaterial;
  private readonly innerEarMat: THREE.MeshStandardMaterial;
  private readonly whiskerMat: THREE.MeshStandardMaterial;
  private readonly calicoGingerMat: THREE.MeshStandardMaterial;
  private readonly calicoEspressoMat: THREE.MeshStandardMaterial;

  // Visual FX state
  private readonly fxGroup: THREE.Group;
  private readonly meowRings: FloatingRingFX[] = [];
  private readonly loafRings: FloatingRingFX[] = [];
  private readonly swatArcMesh: THREE.Mesh;
  private meowAnimTimer = 0;
  private swatAnimTimer = 0;
  private loafSpawnTimer = 0;
  private blinkTimer = 2.4;
  private blinkDuration = 0;

  constructor(textures: TextureManager) {
    this.group = new THREE.Group();
    this.group.name = 'NekoLaoCat';

    const initCoat = COAT_DEFINITIONS[this.currentCoat];

    this.bodyMat = new THREE.MeshStandardMaterial({
      color: initCoat.bodyColor,
      roughness: 0.72,
      metalness: 0.04
    });
    this.pointMat = new THREE.MeshStandardMaterial({
      color: initCoat.pointColor,
      roughness: 0.74,
      metalness: 0.04
    });
    this.bellyMat = new THREE.MeshStandardMaterial({
      color: initCoat.bellyColor,
      roughness: 0.76,
      metalness: 0.02
    });
    this.pawMat = new THREE.MeshStandardMaterial({
      color: initCoat.pointColor,
      roughness: 0.75,
      metalness: 0.03
    });
    this.muzzleMat = new THREE.MeshStandardMaterial({
      color: initCoat.pointColor,
      roughness: 0.72,
      metalness: 0.03
    });
    this.eyeIrisMat = new THREE.MeshStandardMaterial({
      color: initCoat.eyeColor,
      roughness: 0.18,
      metalness: 0.12,
      emissive: new THREE.Color(initCoat.eyeColor).multiplyScalar(0.18)
    });
    this.noseMat = new THREE.MeshStandardMaterial({
      color: initCoat.noseColor,
      roughness: 0.45,
      metalness: 0.08
    });
    this.innerEarMat = new THREE.MeshStandardMaterial({
      color: '#f29eb0',
      roughness: 0.65,
      metalness: 0.02
    });
    this.whiskerMat = new THREE.MeshStandardMaterial({
      color: '#fffaf0',
      roughness: 0.4,
      metalness: 0.1
    });
    this.calicoGingerMat = new THREE.MeshStandardMaterial({
      color: '#e37424',
      roughness: 0.72,
      metalness: 0.03
    });
    this.calicoEspressoMat = new THREE.MeshStandardMaterial({
      color: '#2b1d16',
      roughness: 0.74,
      metalness: 0.03
    });

    // Root pivot sits at standing hip/torso height (y = 0.28)
    this.rootPivot = new THREE.Group();
    this.rootPivot.position.set(0, 0.28, 0);
    this.group.add(this.rootPivot);

    this.spineGroup = new THREE.Group();
    this.rootPivot.add(this.spineGroup);

    // --- TORSO, CHEST, HIPS & BELLY ---
    const torsoGeo = new THREE.CapsuleGeometry(0.142, 0.25, 14, 22);
    torsoGeo.rotateX(Math.PI * 0.5);
    const torsoMesh = new THREE.Mesh(torsoGeo, this.bodyMat);
    torsoMesh.position.set(0, 0.015, 0);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    this.spineGroup.add(torsoMesh);

    const chestGeo = new THREE.SphereGeometry(0.152, 20, 18);
    this.chestMesh = new THREE.Mesh(chestGeo, this.bodyMat);
    this.chestMesh.position.set(0, 0.025, 0.135);
    this.chestMesh.scale.set(0.96, 1.02, 1.05);
    this.chestMesh.castShadow = true;
    this.chestMesh.receiveShadow = true;
    this.spineGroup.add(this.chestMesh);

    const chestBibGeo = new THREE.SphereGeometry(0.125, 16, 14);
    const chestBibMesh = new THREE.Mesh(chestBibGeo, this.bellyMat);
    chestBibMesh.position.set(0, -0.015, 0.185);
    chestBibMesh.scale.set(0.88, 0.92, 0.75);
    chestBibMesh.castShadow = true;
    this.spineGroup.add(chestBibMesh);

    const bellyGeo = new THREE.CapsuleGeometry(0.112, 0.23, 10, 16);
    bellyGeo.rotateX(Math.PI * 0.5);
    const bellyMesh = new THREE.Mesh(bellyGeo, this.bellyMat);
    bellyMesh.position.set(0, -0.042, 0.01);
    this.spineGroup.add(bellyMesh);

    const haunchGeo = new THREE.SphereGeometry(0.148, 18, 16);
    const haunchMesh = new THREE.Mesh(haunchGeo, this.bodyMat);
    haunchMesh.position.set(0, 0.02, -0.145);
    haunchMesh.scale.set(0.98, 1.02, 1.05);
    haunchMesh.castShadow = true;
    haunchMesh.receiveShadow = true;
    this.spineGroup.add(haunchMesh);

    // --- COAT MARKING GROUPS (TABBY STRIPES & CALICO PATCHES) ---
    this.tabbyStripesGroup = new THREE.Group();
    this.spineGroup.add(this.tabbyStripesGroup);
    for (let i = 0; i < 4; i++) {
      const zPos = 0.08 - i * 0.075;
      const stripeGeo = new THREE.TorusGeometry(0.143 - Math.abs(i - 1.5) * 0.004, 0.014, 8, 24, Math.PI * 1.15);
      const stripe = new THREE.Mesh(stripeGeo, this.pointMat);
      stripe.position.set(0, 0.015, zPos);
      stripe.rotation.z = -Math.PI * 0.075;
      stripe.scale.set(1.0, 1.02, 0.65);
      this.tabbyStripesGroup.add(stripe);
    }

    this.calicoPatchesGroup = new THREE.Group();
    this.spineGroup.add(this.calicoPatchesGroup);

    const saddleGingerGeo = new THREE.SphereGeometry(0.146, 16, 14);
    const saddleGinger = new THREE.Mesh(saddleGingerGeo, this.calicoGingerMat);
    saddleGinger.position.set(0.032, 0.045, 0.03);
    saddleGinger.scale.set(0.88, 0.78, 1.05);
    this.calicoPatchesGroup.add(saddleGinger);

    const hipEspressoGeo = new THREE.SphereGeometry(0.144, 16, 14);
    const hipEspresso = new THREE.Mesh(hipEspressoGeo, this.calicoEspressoMat);
    hipEspresso.position.set(-0.035, 0.042, -0.11);
    hipEspresso.scale.set(0.86, 0.82, 0.96);
    this.calicoPatchesGroup.add(hipEspresso);

    const shoulderPatchGeo = new THREE.SphereGeometry(0.11, 14, 12);
    const shoulderPatch = new THREE.Mesh(shoulderPatchGeo, this.calicoEspressoMat);
    shoulderPatch.position.set(-0.06, 0.055, 0.12);
    shoulderPatch.scale.set(0.8, 0.75, 0.85);
    this.calicoPatchesGroup.add(shoulderPatch);

    // --- WOVEN LAO SILK COLLAR & GOLDEN BELL ---
    const collarGroup = new THREE.Group();
    collarGroup.position.set(0, 0.095, 0.205);
    collarGroup.rotation.x = Math.PI * 0.34;
    this.spineGroup.add(collarGroup);

    const collarTex = textures.get('lao_silk_collar', 2, 1);
    const collarMat = new THREE.MeshStandardMaterial({
      map: collarTex,
      roughness: 0.42,
      metalness: 0.12
    });
    const collarGeo = new THREE.TorusGeometry(0.126, 0.024, 14, 32);
    const collarMesh = new THREE.Mesh(collarGeo, collarMat);
    collarMesh.castShadow = true;
    collarGroup.add(collarMesh);

    const goldMat = new THREE.MeshStandardMaterial({
      color: '#ffd452',
      roughness: 0.18,
      metalness: 0.88
    });
    const trimGeo = new THREE.TorusGeometry(0.129, 0.005, 8, 32);
    const trimTop = new THREE.Mesh(trimGeo, goldMat);
    trimTop.position.z = 0.016;
    const trimBottom = new THREE.Mesh(trimGeo, goldMat);
    trimBottom.position.z = -0.016;
    collarGroup.add(trimTop, trimBottom);

    // Golden bell at throat
    this.bellPivot = new THREE.Group();
    this.bellPivot.position.set(0, 0.005, 0.315);
    this.spineGroup.add(this.bellPivot);

    const bellLoopGeo = new THREE.TorusGeometry(0.012, 0.004, 8, 14);
    const bellLoop = new THREE.Mesh(bellLoopGeo, goldMat);
    bellLoop.position.set(0, 0.028, 0);
    this.bellPivot.add(bellLoop);

    const bellBodyGeo = new THREE.SphereGeometry(0.036, 18, 16);
    const bellBody = new THREE.Mesh(bellBodyGeo, goldMat);
    bellBody.castShadow = true;
    this.bellPivot.add(bellBody);

    const bellRimGeo = new THREE.TorusGeometry(0.0365, 0.0055, 8, 20);
    bellRimGeo.rotateX(Math.PI * 0.5);
    const bellRim = new THREE.Mesh(bellRimGeo, goldMat);
    this.bellPivot.add(bellRim);

    const bellSlitMat = new THREE.MeshBasicMaterial({ color: '#2b1905' });
    const bellSlitGeo = new THREE.BoxGeometry(0.01, 0.018, 0.052);
    const bellSlit = new THREE.Mesh(bellSlitGeo, bellSlitMat);
    bellSlit.position.set(0, -0.024, 0.01);
    this.bellPivot.add(bellSlit);

    // --- SCULPTED HEAD & FACE ---
    this.headPivot = new THREE.Group();
    this.headPivot.position.set(0, 0.165, 0.235);
    this.spineGroup.add(this.headPivot);

    const craniumGeo = new THREE.SphereGeometry(0.172, 26, 22);
    const craniumMesh = new THREE.Mesh(craniumGeo, this.bodyMat);
    craniumMesh.position.set(0, 0.055, 0.045);
    craniumMesh.scale.set(1.08, 0.96, 1.02);
    craniumMesh.castShadow = true;
    craniumMesh.receiveShadow = true;
    this.headPivot.add(craniumMesh);

    // Chubby rounded cheeks
    const cheekGeo = new THREE.SphereGeometry(0.095, 16, 14);
    const leftCheek = new THREE.Mesh(cheekGeo, this.bodyMat);
    leftCheek.position.set(0.096, 0.005, 0.095);
    leftCheek.scale.set(1.12, 0.86, 0.95);
    const rightCheek = new THREE.Mesh(cheekGeo, this.bodyMat);
    rightCheek.position.set(-0.096, 0.005, 0.095);
    rightCheek.scale.set(1.12, 0.86, 0.95);
    this.headPivot.add(leftCheek, rightCheek);

    // Siamese point mask / facial patch
    const maskGeo = new THREE.SphereGeometry(0.122, 18, 16);
    this.siameseMaskMesh = new THREE.Mesh(maskGeo, this.pointMat);
    this.siameseMaskMesh.position.set(0, 0.038, 0.125);
    this.siameseMaskMesh.scale.set(1.12, 0.86, 0.76);
    this.headPivot.add(this.siameseMaskMesh);

    // Calico head patches (shown only on calico)
    const headCalicoLeft = new THREE.Mesh(
      new THREE.SphereGeometry(0.105, 14, 12),
      this.calicoGingerMat
    );
    headCalicoLeft.position.set(0.075, 0.105, 0.055);
    headCalicoLeft.scale.set(0.95, 0.82, 0.95);
    this.calicoPatchesGroup.add(headCalicoLeft);
    // Attach head patches directly to headPivot so they move with head
    const headCalicoPatchGroup = new THREE.Group();
    this.headPivot.add(headCalicoPatchGroup);
    const crownGinger = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 14, 12),
      this.calicoGingerMat
    );
    crownGinger.position.set(0.068, 0.115, 0.055);
    crownGinger.scale.set(0.92, 0.75, 0.92);
    const crownEspresso = new THREE.Mesh(
      new THREE.SphereGeometry(0.098, 14, 12),
      this.calicoEspressoMat
    );
    crownEspresso.position.set(-0.072, 0.11, 0.045);
    crownEspresso.scale.set(0.88, 0.75, 0.88);
    headCalicoPatchGroup.add(crownGinger, crownEspresso);
    // Keep reference via userData so setCoat toggles it cleanly
    this.calicoPatchesGroup.userData.headGroup = headCalicoPatchGroup;

    // Tabby forehead stripes attached to headPivot
    const headTabbyGroup = new THREE.Group();
    this.headPivot.add(headTabbyGroup);
    for (let i = -1; i <= 1; i++) {
      const browStripe = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.011, 0.065, 6, 8),
        this.pointMat
      );
      browStripe.position.set(i * 0.036, 0.145, 0.155 - Math.abs(i) * 0.01);
      browStripe.rotation.x = Math.PI * 0.32;
      browStripe.rotation.z = -i * 0.22;
      headTabbyGroup.add(browStripe);
    }
    this.tabbyStripesGroup.userData.headGroup = headTabbyGroup;

    // Rounded Muzzle & Whisker Pads
    const leftPad = new THREE.Mesh(
      new THREE.SphereGeometry(0.054, 14, 12),
      this.muzzleMat
    );
    leftPad.position.set(0.038, -0.005, 0.185);
    leftPad.scale.set(1.08, 0.85, 0.88);

    const rightPad = new THREE.Mesh(
      new THREE.SphereGeometry(0.054, 14, 12),
      this.muzzleMat
    );
    rightPad.position.set(-0.038, -0.005, 0.185);
    rightPad.scale.set(1.08, 0.85, 0.88);
    this.headPivot.add(leftPad, rightPad);

    // Articulated Jaw & Tiny Pink Tongue (for Meow!)
    this.jawPivot = new THREE.Group();
    this.jawPivot.position.set(0, -0.032, 0.145);
    this.headPivot.add(this.jawPivot);

    const chinMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.048, 12, 10),
      this.muzzleMat
    );
    chinMesh.position.set(0, -0.012, 0.025);
    chinMesh.scale.set(1.1, 0.65, 0.95);
    this.jawPivot.add(chinMesh);

    const tongueMat = new THREE.MeshStandardMaterial({
      color: '#f57893',
      roughness: 0.4,
      metalness: 0.05
    });
    const tongueMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 10, 8),
      tongueMat
    );
    tongueMesh.position.set(0, 0.004, 0.035);
    tongueMesh.scale.set(0.95, 0.45, 1.15);
    this.jawPivot.add(tongueMesh);

    // Cute Nose Triangle
    const noseGeo = new THREE.ConeGeometry(0.026, 0.024, 3);
    noseGeo.rotateX(Math.PI * 0.5);
    noseGeo.rotateZ(Math.PI);
    const noseMesh = new THREE.Mesh(noseGeo, this.noseMat);
    noseMesh.position.set(0, 0.022, 0.228);
    noseMesh.scale.set(1.15, 0.85, 0.85);
    this.headPivot.add(noseMesh);

    // 6 Delicate Whiskers (3 per side)
    const whiskerGeo = new THREE.CylinderGeometry(0.0018, 0.0038, 0.145, 6);
    whiskerGeo.rotateZ(Math.PI * 0.5);
    for (const side of [-1, 1]) {
      for (let w = -1; w <= 1; w++) {
        const whisker = new THREE.Mesh(whiskerGeo, this.whiskerMat);
        whisker.position.set(side * 0.115, -0.004 + w * 0.014, 0.175);
        whisker.rotation.y = -side * (0.22 + w * 0.06);
        whisker.rotation.z = side * (w * 0.13 - 0.05);
        this.headPivot.add(whisker);
      }
    }

    // --- LARGE EXPRESSIVE EYES & ANIMATED EYELIDS ---
    const scleraMat = new THREE.MeshStandardMaterial({
      color: '#1b1614',
      roughness: 0.35
    });
    const pupilMat = new THREE.MeshBasicMaterial({ color: '#09090f' });
    const catchlightMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });

    const createEye = (side: number): { eyelid: THREE.Mesh; crescent: THREE.Mesh } => {
      const eyeGroup = new THREE.Group();
      eyeGroup.position.set(side * 0.074, 0.068, 0.178);
      eyeGroup.rotation.y = side * 0.22;
      eyeGroup.rotation.x = -0.06;
      this.headPivot.add(eyeGroup);

      // Dark eyeliner backing
      const rimMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.048, 16, 14),
        scleraMat
      );
      rimMesh.scale.set(1.02, 1.08, 0.48);
      eyeGroup.add(rimMesh);

      // Luminous colored iris
      const irisMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.043, 18, 16),
        this.eyeIrisMat
      );
      irisMesh.position.z = 0.008;
      irisMesh.scale.set(0.98, 1.05, 0.46);
      eyeGroup.add(irisMesh);

      // Big expressive dark pupil
      const pupilMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.029, 16, 14),
        pupilMat
      );
      pupilMesh.position.z = 0.015;
      pupilMesh.scale.set(0.76, 1.02, 0.42);
      eyeGroup.add(pupilMesh);

      // Primary & secondary white specular catchlights
      const sparkleMain = new THREE.Mesh(
        new THREE.SphereGeometry(0.011, 10, 8),
        catchlightMat
      );
      sparkleMain.position.set(0.012, 0.014, 0.028);
      sparkleMain.scale.set(1.0, 1.0, 0.4);
      eyeGroup.add(sparkleMain);

      const sparkleSub = new THREE.Mesh(
        new THREE.SphereGeometry(0.0055, 8, 6),
        catchlightMat
      );
      sparkleSub.position.set(-0.011, -0.012, 0.028);
      sparkleSub.scale.set(1.0, 1.0, 0.4);
      eyeGroup.add(sparkleSub);

      // Animated upper eyelid cap for natural blinking & loaf nap
      const eyelidGeo = new THREE.SphereGeometry(
        0.051,
        16,
        12,
        0,
        Math.PI * 2,
        0,
        Math.PI * 0.56
      );
      const eyelid = new THREE.Mesh(eyelidGeo, this.bodyMat);
      eyelid.scale.set(1.04, 1.08, 0.58);
      eyelid.rotation.x = -0.55; // Open state
      eyeGroup.add(eyelid);

      // Happy curved lash crescent when eyes close during loaf
      const crescentGeo = new THREE.TorusGeometry(0.036, 0.0055, 8, 16, Math.PI * 0.85);
      const crescent = new THREE.Mesh(crescentGeo, scleraMat);
      crescent.position.set(0, -0.002, 0.028);
      crescent.rotation.z = Math.PI * 0.075;
      crescent.visible = false;
      eyeGroup.add(crescent);

      return { eyelid, crescent };
    };

    const leftEyeObj = createEye(1);
    const rightEyeObj = createEye(-1);
    this.leftEyelid = leftEyeObj.eyelid;
    this.rightEyelid = rightEyeObj.eyelid;
    this.leftHappyCrescent = leftEyeObj.crescent;
    this.rightHappyCrescent = rightEyeObj.crescent;

    // --- ARTICULATED EARS & ICONIC 3D DOK CHAMPA FLOWER ---
    const createEar = (side: number): THREE.Group => {
      const earPivot = new THREE.Group();
      earPivot.position.set(side * 0.108, 0.178, 0.025);
      earPivot.rotation.z = -side * 0.34;
      earPivot.rotation.x = 0.14;
      earPivot.rotation.y = side * 0.18;
      this.headPivot.add(earPivot);

      const outerEarGeo = new THREE.ConeGeometry(0.068, 0.145, 18);
      outerEarGeo.translate(0, 0.065, 0);
      const outerEar = new THREE.Mesh(outerEarGeo, this.pointMat);
      outerEar.scale.set(1.0, 1.0, 0.58);
      outerEar.castShadow = true;
      earPivot.add(outerEar);

      const innerEarGeo = new THREE.ConeGeometry(0.044, 0.105, 14);
      innerEarGeo.translate(0, 0.055, 0);
      const innerEar = new THREE.Mesh(innerEarGeo, this.innerEarMat);
      innerEar.position.set(0, 0, 0.016);
      innerEar.scale.set(0.88, 0.95, 0.38);
      earPivot.add(innerEar);

      return earPivot;
    };

    this.leftEarPivot = createEar(1);
    this.rightEarPivot = createEar(-1);

    // 5-Petaled White-and-Golden-Yellow 3D Dok Champa (Lao Frangipani) tucked behind left ear
    this.dokChampaGroup = new THREE.Group();
    this.dokChampaGroup.position.set(0.128, 0.155, 0.072);
    this.dokChampaGroup.rotation.set(0.28, 0.42, -0.52);
    this.headPivot.add(this.dokChampaGroup);

    const petalWhiteMat = new THREE.MeshStandardMaterial({
      color: '#fffdf7',
      roughness: 0.35,
      metalness: 0.02
    });
    const petalGoldMat = new THREE.MeshStandardMaterial({
      color: '#ffbe1e',
      roughness: 0.32,
      metalness: 0.05,
      emissive: new THREE.Color('#ffaa00').multiplyScalar(0.18)
    });

    for (let p = 0; p < 5; p++) {
      const angle = (p / 5) * Math.PI * 2;
      const petalHolder = new THREE.Group();
      petalHolder.rotation.y = angle;

      // Creamy white outer frangipani petal with pinwheel overlap
      const petalGeo = new THREE.SphereGeometry(0.032, 12, 10);
      const petalMesh = new THREE.Mesh(petalGeo, petalWhiteMat);
      petalMesh.position.set(0.008, 0.004, 0.032);
      petalMesh.scale.set(0.64, 0.18, 1.18);
      petalMesh.rotation.z = 0.25;
      petalMesh.rotation.x = -0.15;
      petalMesh.castShadow = true;
      petalHolder.add(petalMesh);

      // Golden yellow inner throat gradient petal
      const innerGoldGeo = new THREE.SphereGeometry(0.019, 10, 8);
      const innerGoldMesh = new THREE.Mesh(innerGoldGeo, petalGoldMat);
      innerGoldMesh.position.set(0.004, 0.007, 0.018);
      innerGoldMesh.scale.set(0.56, 0.2, 0.95);
      innerGoldMesh.rotation.z = 0.25;
      petalHolder.add(innerGoldMesh);

      this.dokChampaGroup.add(petalHolder);
    }

    const champaCenter = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 12, 10),
      petalGoldMat
    );
    champaCenter.scale.set(1.0, 0.55, 1.0);
    champaCenter.position.y = 0.006;
    this.dokChampaGroup.add(champaCenter);

    // --- 4 ARTICULATED LEGS WITH TOE SOCKS ---
    const createLeg = (x: number, y: number, z: number): LegRig => {
      const hipPivot = new THREE.Group();
      hipPivot.position.set(x, y, z);
      this.rootPivot.add(hipPivot);

      const upperGeo = new THREE.CapsuleGeometry(0.042, 0.095, 8, 12);
      const upperMesh = new THREE.Mesh(upperGeo, this.bodyMat);
      upperMesh.position.set(0, -0.055, 0);
      upperMesh.castShadow = true;
      hipPivot.add(upperMesh);

      const kneePivot = new THREE.Group();
      kneePivot.position.set(0, -0.115, 0);
      hipPivot.add(kneePivot);

      const lowerGeo = new THREE.CapsuleGeometry(0.035, 0.09, 8, 12);
      const lowerMesh = new THREE.Mesh(lowerGeo, this.pawMat);
      lowerMesh.position.set(0, -0.055, 0);
      lowerMesh.castShadow = true;
      kneePivot.add(lowerMesh);

      const pawGroup = new THREE.Group();
      pawGroup.position.set(0, -0.115, 0.018);
      kneePivot.add(pawGroup);

      const pawGeo = new THREE.SphereGeometry(0.044, 14, 12);
      const pawMesh = new THREE.Mesh(pawGeo, this.pawMat);
      pawMesh.scale.set(1.02, 0.65, 1.24);
      pawMesh.castShadow = true;
      pawGroup.add(pawMesh);

      // Cute pink/dark toe bean pad underneath
      const beanMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.022, 8, 8),
        this.innerEarMat
      );
      beanMesh.position.set(0, -0.022, 0.008);
      beanMesh.scale.set(1.1, 0.35, 1.1);
      pawGroup.add(beanMesh);

      return { hipPivot, kneePivot, pawGroup, upperMesh, lowerMesh, pawMesh };
    };

    this.frontLeftLeg = createLeg(0.092, -0.045, 0.135);
    this.frontRightLeg = createLeg(-0.092, -0.045, 0.135);
    this.backLeftLeg = createLeg(0.096, -0.045, -0.145);
    this.backRightLeg = createLeg(-0.096, -0.045, -0.145);

    // --- 5-SEGMENT CHAINED TAIL ---
    let parentTailNode: THREE.Group = this.spineGroup;
    const tailSegLength = 0.092;
    for (let s = 0; s < 5; s++) {
      const segPivot = new THREE.Group();
      if (s === 0) {
        segPivot.position.set(0, 0.065, -0.24);
      } else {
        segPivot.position.set(0, 0, -tailSegLength);
      }
      parentTailNode.add(segPivot);

      const radius = 0.036 - s * 0.0022;
      const segGeo = new THREE.CapsuleGeometry(radius, tailSegLength * 0.78, 8, 12);
      segGeo.rotateX(Math.PI * 0.5);
      const segMat = s >= 2 ? this.pointMat : this.bodyMat;
      const segMesh = new THREE.Mesh(segGeo, segMat);
      segMesh.position.set(0, 0, -tailSegLength * 0.5);
      segMesh.castShadow = true;
      segPivot.add(segMesh);

      this.tailSegments.push(segPivot);
      parentTailNode = segPivot;
    }

    // --- FLOATING 3D VISUAL FX GROUP (MEOW RINGS, LOAF ZZZ RINGS, SWAT ARC) ---
    this.fxGroup = new THREE.Group();
    this.group.add(this.fxGroup);

    // Swat golden arc ribbon
    const swatArcGeo = new THREE.TorusGeometry(0.24, 0.014, 8, 24, Math.PI * 0.75);
    const swatArcMat = new THREE.MeshBasicMaterial({
      color: '#ffe066',
      transparent: true,
      opacity: 0.0
    });
    this.swatArcMesh = new THREE.Mesh(swatArcGeo, swatArcMat);
    this.swatArcMesh.position.set(-0.08, 0.28, 0.44);
    this.swatArcMesh.rotation.set(Math.PI * 0.35, -0.3, -0.4);
    this.swatArcMesh.visible = false;
    this.fxGroup.add(this.swatArcMesh);

    // Apply initial coat styling
    this.setCoat(this.currentCoat);
  }

  public setCoat(coat: CoatId): void {
    this.currentCoat = coat;
    const def = COAT_DEFINITIONS[coat];

    this.bodyMat.color.set(def.bodyColor);
    this.pointMat.color.set(def.pointColor);
    this.bellyMat.color.set(def.bellyColor);
    this.eyeIrisMat.color.set(def.eyeColor);
    this.eyeIrisMat.emissive.set(def.eyeColor).multiplyScalar(0.2);
    this.noseMat.color.set(def.noseColor);

    const headCalicoGroup = this.calicoPatchesGroup.userData.headGroup as THREE.Group | undefined;
    const headTabbyGroup = this.tabbyStripesGroup.userData.headGroup as THREE.Group | undefined;

    if (coat === 'siamese') {
      this.siameseMaskMesh.visible = true;
      this.tabbyStripesGroup.visible = false;
      if (headTabbyGroup) headTabbyGroup.visible = false;
      this.calicoPatchesGroup.visible = false;
      if (headCalicoGroup) headCalicoGroup.visible = false;
      this.pawMat.color.set(def.pointColor);
      this.muzzleMat.color.set(def.pointColor);
    } else if (coat === 'ginger_tabby') {
      this.siameseMaskMesh.visible = false;
      this.tabbyStripesGroup.visible = true;
      if (headTabbyGroup) headTabbyGroup.visible = true;
      this.calicoPatchesGroup.visible = false;
      if (headCalicoGroup) headCalicoGroup.visible = false;
      this.pawMat.color.set(def.bellyColor); // Snowy white mittens!
      this.muzzleMat.color.set(def.bellyColor); // Snowy white muzzle!
    } else if (coat === 'korat') {
      this.siameseMaskMesh.visible = false;
      this.tabbyStripesGroup.visible = false;
      if (headTabbyGroup) headTabbyGroup.visible = false;
      this.calicoPatchesGroup.visible = false;
      if (headCalicoGroup) headCalicoGroup.visible = false;
      this.pawMat.color.set(def.pointColor);
      this.muzzleMat.color.set(def.bodyColor);
    } else if (coat === 'calico') {
      this.siameseMaskMesh.visible = false;
      this.tabbyStripesGroup.visible = false;
      if (headTabbyGroup) headTabbyGroup.visible = false;
      this.calicoPatchesGroup.visible = true;
      if (headCalicoGroup) headCalicoGroup.visible = true;
      this.pawMat.color.set(def.bellyColor);
      this.muzzleMat.color.set(def.bellyColor);
    }
  }

  public triggerMeowVisual(): void {
    this.meowAnimTimer = 0.65;

    // Create a rising 3D golden heart + musical soundwave ring above the cat's head
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0.62, 0.28);

    const ringMat = new THREE.MeshBasicMaterial({
      color: '#ffd84d',
      transparent: true,
      opacity: 0.95
    });
    const ringMesh = new THREE.Mesh(
      new THREE.TorusGeometry(0.09, 0.011, 10, 28),
      ringMat
    );
    ringMesh.rotation.x = Math.PI * 0.5;
    ringGroup.add(ringMesh);

    // Floating 3D golden heart inside the sound ring
    const heartMat = new THREE.MeshBasicMaterial({
      color: '#ff7aa2',
      transparent: true,
      opacity: 0.95
    });
    const heartHolder = new THREE.Group();
    const leftLobe = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), heartMat);
    leftLobe.position.set(0.016, 0.015, 0);
    const rightLobe = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), heartMat);
    rightLobe.position.set(-0.016, 0.015, 0);
    const tipCone = new THREE.Mesh(new THREE.ConeGeometry(0.034, 0.045, 10), heartMat);
    tipCone.rotation.x = Math.PI;
    tipCone.position.set(0, -0.012, 0);
    heartHolder.add(leftLobe, rightLobe, tipCone);
    ringGroup.add(heartHolder);

    this.fxGroup.add(ringGroup);
    this.meowRings.push({
      mesh: ringGroup,
      age: 0,
      maxAge: 0.95,
      startY: 0.62
    });
  }

  public triggerSwatVisual(): void {
    this.swatAnimTimer = 0.38;
    this.swatArcMesh.visible = true;
    const mat = this.swatArcMesh.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.9;
  }

  private spawnLoafPurrRing(): void {
    const purrGroup = new THREE.Group();
    purrGroup.position.set(
      (Math.random() - 0.5) * 0.08,
      0.42,
      0.18 + (Math.random() - 0.5) * 0.06
    );

    const goldMat = new THREE.MeshBasicMaterial({
      color: '#ffe169',
      transparent: true,
      opacity: 0.85
    });

    // Cozy golden purr ring + mini 'Z' bar motif
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.055, 0.007, 8, 22),
      goldMat
    );
    ring.rotation.x = Math.PI * 0.5;
    purrGroup.add(ring);

    const zTop = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.008, 0.008), goldMat);
    zTop.position.set(0, 0.036, 0);
    const zDiag = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.008, 0.008), goldMat);
    zDiag.position.set(0, 0.02, 0);
    zDiag.rotation.z = 0.65;
    const zBot = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.008, 0.008), goldMat);
    zBot.position.set(0, 0.004, 0);
    purrGroup.add(zTop, zDiag, zBot);

    this.fxGroup.add(purrGroup);
    this.loafRings.push({
      mesh: purrGroup,
      age: 0,
      maxAge: 1.6,
      startY: 0.42
    });
  }

  public updateAnimation(
    state: CatAnimState,
    delta: number,
    elapsed: number,
    speedNormalized: number
  ): void {
    const dt = Math.min(delta, 0.1);

    if (this.meowAnimTimer > 0) {
      this.meowAnimTimer = Math.max(0, this.meowAnimTimer - dt);
    }
    if (this.swatAnimTimer > 0) {
      this.swatAnimTimer = Math.max(0, this.swatAnimTimer - dt);
      const t = 1 - this.swatAnimTimer / 0.38;
      const mat = this.swatArcMesh.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, (1 - t) * 0.9);
      this.swatArcMesh.scale.setScalar(0.85 + t * 0.45);
      this.swatArcMesh.rotation.z = -0.6 + t * 1.4;
      if (this.swatAnimTimer <= 0) {
        this.swatArcMesh.visible = false;
      }
    }

    // Update floating Meow rings
    for (let i = this.meowRings.length - 1; i >= 0; i--) {
      const fx = this.meowRings[i];
      fx.age += dt;
      const progress = fx.age / fx.maxAge;
      if (progress >= 1) {
        this.fxGroup.remove(fx.mesh);
        this.meowRings.splice(i, 1);
      } else {
        fx.mesh.position.y = fx.startY + progress * 0.48;
        fx.mesh.scale.setScalar(0.65 + progress * 1.15);
        fx.mesh.rotation.y += dt * 2.6;
        fx.mesh.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
            child.material.opacity = (1 - progress) * 0.92;
          }
        });
      }
    }

    // Update floating Loaf Zzz / purr rings
    if (state === 'loaf') {
      this.loafSpawnTimer -= dt;
      if (this.loafSpawnTimer <= 0) {
        this.loafSpawnTimer = 0.78;
        this.spawnLoafPurrRing();
      }
    } else {
      this.loafSpawnTimer = 0.15;
    }

    for (let i = this.loafRings.length - 1; i >= 0; i--) {
      const fx = this.loafRings[i];
      fx.age += dt;
      const progress = fx.age / fx.maxAge;
      if (progress >= 1) {
        this.fxGroup.remove(fx.mesh);
        this.loafRings.splice(i, 1);
      } else {
        fx.mesh.position.y = fx.startY + progress * 0.55;
        fx.mesh.position.x += Math.sin(elapsed * 3.5 + i) * dt * 0.08;
        fx.mesh.scale.setScalar(0.55 + Math.sin(progress * Math.PI) * 0.65);
        fx.mesh.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
            child.material.opacity = (1 - progress) * 0.85;
          }
        });
      }
    }

    // --- BLINKING & EYE STATE ---
    if (state === 'loaf') {
      // Closed peaceful crescent eyes
      this.leftEyelid.rotation.x = THREE.MathUtils.lerp(this.leftEyelid.rotation.x, 0.35, dt * 10);
      this.rightEyelid.rotation.x = THREE.MathUtils.lerp(this.rightEyelid.rotation.x, 0.35, dt * 10);
      this.leftHappyCrescent.visible = true;
      this.rightHappyCrescent.visible = true;
    } else {
      this.leftHappyCrescent.visible = false;
      this.rightHappyCrescent.visible = false;
      this.blinkTimer -= dt;
      if (this.blinkTimer <= 0) {
        this.blinkDuration = 0.14;
        this.blinkTimer = 2.6 + Math.random() * 2.4;
      }
      if (this.blinkDuration > 0) {
        this.blinkDuration -= dt;
        this.leftEyelid.rotation.x = 0.32;
        this.rightEyelid.rotation.x = 0.32;
      } else {
        this.leftEyelid.rotation.x = THREE.MathUtils.lerp(this.leftEyelid.rotation.x, -0.58, dt * 16);
        this.rightEyelid.rotation.x = THREE.MathUtils.lerp(this.rightEyelid.rotation.x, -0.58, dt * 16);
      }
    }

    // --- TARGET RIG POSES BY STATE ---
    let targetRootY = 0.28;
    let targetSpinePitch = 0;
    let targetSpineRoll = 0;
    let targetHeadPitch = 0;
    let targetHeadYaw = 0;
    let targetHeadRoll = 0;

    let flHipX = 0;
    let flKneeX = 0;
    let frHipX = 0;
    let frKneeX = 0;
    let blHipX = 0;
    let blKneeX = 0;
    let brHipX = 0;
    let brKneeX = 0;
    let frHipZ = 0;

    if (state === 'loaf') {
      // Cozy cat loaf: body lowers to the ground, all 4 paws tucked neatly underneath
      const purrBreath = Math.sin(elapsed * 4.2) * 0.008;
      targetRootY = 0.14 + purrBreath;
      targetSpinePitch = 0.03;
      targetHeadPitch = 0.12 + Math.sin(elapsed * 2.1) * 0.025;
      targetHeadRoll = Math.sin(elapsed * 1.4) * 0.04;

      this.chestMesh.scale.set(
        0.98 + Math.sin(elapsed * 4.2) * 0.035,
        1.02 + Math.sin(elapsed * 4.2) * 0.03,
        1.05
      );

      // Fold legs under belly
      flHipX = -1.25;
      flKneeX = 2.15;
      frHipX = -1.25;
      frKneeX = 2.15;
      blHipX = 1.25;
      blKneeX = -2.1;
      brHipX = 1.25;
      brKneeX = -2.1;

      // Curl tail cozily around right flank
      for (let s = 0; s < this.tailSegments.length; s++) {
        const seg = this.tailSegments[s];
        seg.rotation.x = THREE.MathUtils.lerp(seg.rotation.x, -0.08, dt * 8);
        seg.rotation.y = THREE.MathUtils.lerp(seg.rotation.y, 0.48 + s * 0.12, dt * 8);
        seg.rotation.z = THREE.MathUtils.lerp(seg.rotation.z, 0, dt * 8);
      }
    } else if (state === 'jump' || state === 'climb') {
      // Airborne / climbing leap pose: front paws extended upward, hind legs pushing back
      targetRootY = 0.31;
      targetSpinePitch = -0.26;
      targetHeadPitch = -0.18;

      flHipX = -0.82;
      flKneeX = 0.35;
      frHipX = -0.82;
      frKneeX = 0.35;
      blHipX = 0.78;
      blKneeX = 0.42;
      brHipX = 0.78;
      brKneeX = 0.42;

      // Tail arched for balance
      for (let s = 0; s < this.tailSegments.length; s++) {
        const seg = this.tailSegments[s];
        const wave = Math.sin(elapsed * 10 - s * 0.7) * 0.12;
        seg.rotation.x = THREE.MathUtils.lerp(seg.rotation.x, 0.32 - s * 0.14, dt * 12);
        seg.rotation.y = THREE.MathUtils.lerp(seg.rotation.y, wave, dt * 12);
      }
    } else if (state === 'walk' || state === 'trot' || state === 'sprint') {
      // Quadruped diagonal / bounding gait cycle
      const freq = state === 'sprint' ? 15.5 : state === 'trot' ? 11.5 : 8.0;
      const amp = state === 'sprint' ? 0.78 : state === 'trot' ? 0.56 : 0.38;
      const phase = elapsed * freq;

      const bounce = Math.abs(Math.sin(phase)) * (state === 'sprint' ? 0.048 : 0.024);
      targetRootY = 0.28 + bounce;
      targetSpinePitch = Math.cos(phase) * (state === 'sprint' ? 0.11 : 0.045);
      targetSpineRoll = Math.sin(phase) * 0.035;
      targetHeadPitch = -targetSpinePitch * 0.65 + Math.sin(phase * 2) * 0.035;

      if (state === 'sprint') {
        // Bounding gallop phase where front pair and back pair work with slight offset
        flHipX = Math.sin(phase) * amp;
        frHipX = Math.sin(phase + 0.45) * amp;
        blHipX = Math.sin(phase + Math.PI) * amp;
        brHipX = Math.sin(phase + Math.PI + 0.45) * amp;
      } else {
        // Diagonal quadruped gait (FL + BR in phase, FR + BL opposite)
        flHipX = Math.sin(phase) * amp;
        brHipX = Math.sin(phase + 0.25) * amp;
        frHipX = Math.sin(phase + Math.PI) * amp;
        blHipX = Math.sin(phase + Math.PI + 0.25) * amp;
      }

      flKneeX = Math.max(0, -Math.cos(phase) * amp * 0.85);
      frKneeX = Math.max(0, -Math.cos(phase + Math.PI) * amp * 0.85);
      blKneeX = Math.max(0, Math.cos(phase + Math.PI) * amp * 0.75);
      brKneeX = Math.max(0, Math.cos(phase) * amp * 0.75);

      // Tail held up happily in walk/trot, or streaming sleekly in sprint
      const tailBaseLift = state === 'sprint' ? 0.22 : 0.58;
      for (let s = 0; s < this.tailSegments.length; s++) {
        const seg = this.tailSegments[s];
        const pitchTarget = s === 0 ? tailBaseLift : state === 'sprint' ? -0.04 : 0.08 - s * 0.05;
        const swayTarget = Math.sin(phase - s * 0.65) * (0.14 + s * 0.04);
        seg.rotation.x = THREE.MathUtils.lerp(seg.rotation.x, pitchTarget, dt * 12);
        seg.rotation.y = THREE.MathUtils.lerp(seg.rotation.y, swayTarget, dt * 12);
      }
    } else {
      // Idle / Meow / Swat standing base
      const breath = Math.sin(elapsed * 2.6);
      targetRootY = 0.28 + breath * 0.005;
      this.chestMesh.scale.set(
        0.96 + breath * 0.018,
        1.02 + breath * 0.018,
        1.05
      );
      targetHeadPitch = Math.sin(elapsed * 1.5) * 0.035;
      targetHeadYaw = Math.sin(elapsed * 0.85) * 0.07;

      // Sinuous figure-8 tail sway
      for (let s = 0; s < this.tailSegments.length; s++) {
        const seg = this.tailSegments[s];
        const pitchTarget = s === 0 ? 0.42 : 0.12 - s * 0.06 + Math.cos(elapsed * 2.2 - s * 0.5) * 0.06;
        const swayTarget = Math.sin(elapsed * 2.4 - s * 0.65) * (0.16 + s * 0.045);
        seg.rotation.x = THREE.MathUtils.lerp(seg.rotation.x, pitchTarget, dt * 10);
        seg.rotation.y = THREE.MathUtils.lerp(seg.rotation.y, swayTarget, dt * 10);
      }
    }

    // --- OVERLAY SWAT POUNCE ARC ---
    if (this.swatAnimTimer > 0 || state === 'swat') {
      const p = this.swatAnimTimer > 0 ? 1 - this.swatAnimTimer / 0.38 : (elapsed * 4) % 1;
      const swipeArc = Math.sin(p * Math.PI);
      targetSpinePitch -= swipeArc * 0.14;
      targetSpineRoll += swipeArc * 0.12;
      targetHeadPitch -= swipeArc * 0.1;
      frHipX = -1.35 * swipeArc;
      frKneeX = 0.45 * (1 - swipeArc);
      frHipZ = -0.38 * swipeArc;
    }

    // --- OVERLAY MEOW HEAD TILT & JAW OPEN ---
    if (this.meowAnimTimer > 0 || state === 'meow') {
      const meowWave = Math.sin(
        (1 - Math.max(0, this.meowAnimTimer) / 0.65) * Math.PI
      );
      targetHeadPitch -= 0.22 * Math.max(0.4, meowWave);
      targetHeadRoll += 0.08 * meowWave;
      this.jawPivot.rotation.x = THREE.MathUtils.lerp(
        this.jawPivot.rotation.x,
        0.38 * Math.max(0.5, meowWave),
        dt * 18
      );
    } else {
      this.jawPivot.rotation.x = THREE.MathUtils.lerp(this.jawPivot.rotation.x, 0, dt * 14);
    }

    // --- EAR TWITCH & BELL JINGLE ---
    const earTwitch = Math.pow(Math.max(0, Math.sin(elapsed * 3.7)), 14) * 0.22;
    this.leftEarPivot.rotation.z = -0.34 - earTwitch * 0.4;
    this.rightEarPivot.rotation.z = 0.34 + Math.pow(Math.max(0, Math.sin(elapsed * 2.9 + 1.2)), 16) * 0.18;

    // Golden bell jingles and bobs with speed & movement
    const jingleAmp = 0.06 + speedNormalized * 0.28 + (this.meowAnimTimer > 0 ? 0.15 : 0);
    this.bellPivot.rotation.x = Math.sin(elapsed * 14) * jingleAmp;
    this.bellPivot.rotation.z = Math.cos(elapsed * 11.5) * jingleAmp * 0.8;

    // Apply smooth transitions to rig nodes
    const blend = Math.min(1, dt * 14);
    this.rootPivot.position.y = THREE.MathUtils.lerp(this.rootPivot.position.y, targetRootY, blend);
    this.spineGroup.rotation.x = THREE.MathUtils.lerp(this.spineGroup.rotation.x, targetSpinePitch, blend);
    this.spineGroup.rotation.z = THREE.MathUtils.lerp(this.spineGroup.rotation.z, targetSpineRoll, blend);

    this.headPivot.rotation.x = THREE.MathUtils.lerp(this.headPivot.rotation.x, targetHeadPitch, blend);
    this.headPivot.rotation.y = THREE.MathUtils.lerp(this.headPivot.rotation.y, targetHeadYaw, blend);
    this.headPivot.rotation.z = THREE.MathUtils.lerp(this.headPivot.rotation.z, targetHeadRoll, blend);

    this.frontLeftLeg.hipPivot.rotation.x = THREE.MathUtils.lerp(this.frontLeftLeg.hipPivot.rotation.x, flHipX, blend);
    this.frontLeftLeg.kneePivot.rotation.x = THREE.MathUtils.lerp(this.frontLeftLeg.kneePivot.rotation.x, flKneeX, blend);

    this.frontRightLeg.hipPivot.rotation.x = THREE.MathUtils.lerp(this.frontRightLeg.hipPivot.rotation.x, frHipX, blend);
    this.frontRightLeg.hipPivot.rotation.z = THREE.MathUtils.lerp(this.frontRightLeg.hipPivot.rotation.z, frHipZ, blend);
    this.frontRightLeg.kneePivot.rotation.x = THREE.MathUtils.lerp(this.frontRightLeg.kneePivot.rotation.x, frKneeX, blend);

    this.backLeftLeg.hipPivot.rotation.x = THREE.MathUtils.lerp(this.backLeftLeg.hipPivot.rotation.x, blHipX, blend);
    this.backLeftLeg.kneePivot.rotation.x = THREE.MathUtils.lerp(this.backLeftLeg.kneePivot.rotation.x, blKneeX, blend);

    this.backRightLeg.hipPivot.rotation.x = THREE.MathUtils.lerp(this.backRightLeg.hipPivot.rotation.x, brHipX, blend);
    this.backRightLeg.kneePivot.rotation.x = THREE.MathUtils.lerp(this.backRightLeg.kneePivot.rotation.x, brKneeX, blend);
  }
}
