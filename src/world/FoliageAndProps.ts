import * as THREE from 'three';
import { CollisionWorld } from '../core/CollisionWorld';
import { TextureManager } from '../core/TextureManager';

interface SwayingCrown {
  crownGroup: THREE.Group;
  phase: number;
  speed: number;
  amplitude: number;
}

interface FloatingLotus {
  mesh: THREE.Group;
  baseY: number;
  phase: number;
}

export class FoliageAndProps {
  public readonly group: THREE.Group;
  public readonly lampLights: THREE.PointLight[] = [];
  public readonly knockableProps: {
    mesh: THREE.Group;
    initialPos: THREE.Vector3;
    initialFloorY: number;
    velocity: THREE.Vector3;
    angularVel: THREE.Vector3;
    radius: number;
    floorY: number;
    knocked: boolean;
  }[] = [];

  private swayingCrowns: SwayingCrown[] = [];
  private floatingLotuses: FloatingLotus[] = [];
  private lampGlobeMaterials: THREE.MeshStandardMaterial[] = [];

  constructor(_textures: TextureManager, collision: CollisionWorld) {
    this.group = new THREE.Group();
    this.group.name = 'FoliageAndProps';

    this.buildPalmTrees(collision);
    this.buildDokChampaTrees(collision);
    this.buildTopiaryAndFlowerbeds();
    this.buildParkBenches(collision);
    this.buildIssaraponSchoolSigns(collision);
    this.buildLaoStreetlamps(collision);
    this.buildPondLotusPadsAndFlowers(collision);
    this.buildKnockableParkProps();
  }

  private buildPalmTrees(collision: CollisionWorld): void {
    // 36 Tropical Royal Palms & Coconut Palms arranged along the promenade, fountain plaza, and lawns
    const palmCoords: { x: number; z: number; height: number; leanX: number; leanZ: number }[] = [
      // North Fountain Plaza outer ring (10 palms)
      { x: -19, z: -70, height: 8.8, leanX: -0.25, leanZ: -0.2 },
      { x: 19, z: -70, height: 8.8, leanX: 0.25, leanZ: -0.2 },
      { x: -27, z: -58, height: 9.2, leanX: -0.35, leanZ: 0.1 },
      { x: 27, z: -58, height: 9.2, leanX: 0.35, leanZ: 0.1 },
      { x: -27, z: -44, height: 8.6, leanX: -0.3, leanZ: 0.2 },
      { x: 27, z: -44, height: 8.6, leanX: 0.3, leanZ: 0.2 },
      { x: -18, z: -31, height: 8.4, leanX: -0.2, leanZ: 0.25 },
      { x: 18, z: -31, height: 8.4, leanX: 0.2, leanZ: 0.25 },
      { x: -13.5, z: -78, height: 9.0, leanX: -0.18, leanZ: -0.15 },
      { x: 13.5, z: -78, height: 9.0, leanX: 0.18, leanZ: -0.15 },

      // North-South Promenade colonnade (14 royal palms)
      { x: -13.5, z: -90, height: 9.4, leanX: -0.12, leanZ: 0.05 },
      { x: 13.5, z: -90, height: 9.4, leanX: 0.12, leanZ: 0.05 },
      { x: -13.5, z: 30, height: 9.1, leanX: -0.15, leanZ: 0.08 },
      { x: 13.5, z: 30, height: 9.1, leanX: 0.15, leanZ: 0.08 },
      { x: -13.5, z: 44, height: 9.3, leanX: -0.12, leanZ: -0.06 },
      { x: 13.5, z: 44, height: 9.3, leanX: 0.12, leanZ: -0.06 },
      { x: -13.5, z: 58, height: 9.0, leanX: -0.16, leanZ: 0.1 },
      { x: 13.5, z: 58, height: 9.0, leanX: 0.16, leanZ: 0.1 },
      { x: -13.5, z: 72, height: 9.4, leanX: -0.14, leanZ: -0.08 },
      { x: 13.5, z: 72, height: 9.4, leanX: 0.14, leanZ: -0.08 },
      { x: -13.5, z: 88, height: 9.2, leanX: -0.18, leanZ: 0.12 },
      { x: 13.5, z: 88, height: 9.2, leanX: 0.18, leanZ: 0.12 },
      { x: -27, z: -6, height: 8.7, leanX: -0.22, leanZ: -0.12 },
      { x: 27, z: -6, height: 8.7, leanX: 0.22, leanZ: -0.12 },

      // Flanking Lawns & East-West Axis (12 coconut palms)
      { x: -35, z: -14, height: 8.3, leanX: -0.45, leanZ: 0.25 },
      { x: 35, z: -14, height: 8.3, leanX: 0.45, leanZ: 0.25 },
      { x: -35, z: 14, height: 8.5, leanX: -0.4, leanZ: -0.25 },
      { x: 35, z: 14, height: 8.5, leanX: 0.4, leanZ: -0.25 },
      { x: -46, z: -38, height: 8.9, leanX: 0.3, leanZ: 0.35 },
      { x: 46, z: -38, height: 8.9, leanX: -0.3, leanZ: 0.35 },
      { x: -46, z: -72, height: 8.6, leanX: -0.35, leanZ: -0.3 },
      { x: 46, z: -72, height: 8.6, leanX: 0.35, leanZ: -0.3 },
      { x: -46, z: 38, height: 8.8, leanX: -0.38, leanZ: 0.28 },
      { x: 46, z: 38, height: 8.8, leanX: 0.38, leanZ: 0.28 },
      { x: -46, z: 70, height: 8.4, leanX: 0.32, leanZ: -0.32 },
      { x: 46, z: 70, height: 8.4, leanX: -0.32, leanZ: -0.32 }
    ];

    const trunkDarkMat = new THREE.MeshStandardMaterial({ color: 0x6e533b, roughness: 0.88 });
    const trunkLightMat = new THREE.MeshStandardMaterial({ color: 0x84674c, roughness: 0.85 });
    const crownShaftMat = new THREE.MeshStandardMaterial({ color: 0x4b8338, roughness: 0.65 });
    const coconutMat = new THREE.MeshStandardMaterial({ color: 0x5c3c1e, roughness: 0.72 });
    const frondMat = new THREE.MeshStandardMaterial({
      color: 0x357d32,
      roughness: 0.72,
      side: THREE.DoubleSide
    });

    for (let idx = 0; idx < palmCoords.length; idx++) {
      const cfg = palmCoords[idx];
      const palmGroup = new THREE.Group();
      palmGroup.position.set(cfg.x, 0, cfg.z);

      // Curved segmented trunk (7 stacked tapered segments)
      const segments = 7;
      const segHeight = cfg.height / segments;
      let curX = 0;
      let curZ = 0;

      for (let s = 0; s < segments; s++) {
        const t = s / segments;
        const nextT = (s + 1) / segments;
        const rBottom = THREE.MathUtils.lerp(0.42, 0.21, t);
        const rTop = THREE.MathUtils.lerp(0.42, 0.21, nextT);

        const segMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(rTop, rBottom, segHeight * 1.06, 10),
          s % 2 === 0 ? trunkDarkMat : trunkLightMat
        );

        const offsetX = cfg.leanX * t * t;
        const offsetZ = cfg.leanZ * t * t;
        segMesh.position.set(offsetX, (s + 0.5) * segHeight, offsetZ);
        segMesh.rotation.z = -(cfg.leanX * 0.12 * t);
        segMesh.rotation.x = cfg.leanZ * 0.12 * t;
        segMesh.castShadow = true;
        segMesh.receiveShadow = true;
        palmGroup.add(segMesh);

        curX = cfg.leanX * nextT * nextT;
        curZ = cfg.leanZ * nextT * nextT;
      }

      // Smooth green crownshaft at top of trunk
      const crownGroup = new THREE.Group();
      crownGroup.position.set(curX, cfg.height, curZ);

      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.21, 0.75, 10),
        crownShaftMat
      );
      shaft.position.y = 0.25;
      crownGroup.add(shaft);

      // Cluster of coconuts beneath the fronds
      for (let c = 0; c < 5; c++) {
        const ca = (c / 5) * Math.PI * 2;
        const coconut = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), coconutMat);
        coconut.position.set(Math.cos(ca) * 0.24, 0.08, Math.sin(ca) * 0.24);
        crownGroup.add(coconut);
      }

      // 11 Lush arched palm fronds radiating from the crown
      const frondCount = 11;
      for (let f = 0; f < frondCount; f++) {
        const angle = (f / frondCount) * Math.PI * 2 + (idx % 3) * 0.2;
        const isUpper = f % 2 === 0;
        const frondPivot = new THREE.Group();
        frondPivot.position.y = isUpper ? 0.58 : 0.42;
        frondPivot.rotation.y = angle;
        frondPivot.rotation.z = isUpper ? 0.22 : -0.05;

        // 3 arched segments per frond
        for (let part = 0; part < 3; part++) {
          const leafBlade = new THREE.Mesh(
            new THREE.BoxGeometry(1.15, 0.04, 0.58 - part * 0.12),
            frondMat
          );
          leafBlade.position.set(0.6 + part * 0.98, 0.28 - part * 0.26, 0);
          leafBlade.rotation.z = -0.18 - part * 0.26;
          leafBlade.rotation.x = 0.15;
          leafBlade.castShadow = true;
          frondPivot.add(leafBlade);
        }

        crownGroup.add(frondPivot);
      }

      palmGroup.add(crownGroup);
      this.group.add(palmGroup);

      this.swayingCrowns.push({
        crownGroup,
        phase: idx * 0.75,
        speed: 1.35 + (idx % 4) * 0.18,
        amplitude: 0.045
      });

      // Register trunk CylinderCollider (radius: 0.45, topY: 5, walkable: false)
      collision.addCylinder({
        id: `palm_trunk_${idx}`,
        x: cfg.x,
        z: cfg.z,
        radius: 0.45,
        topY: 5,
        bottomY: 0,
        walkable: false,
        tag: 'tree_trunk'
      });
    }
  }

  private buildDokChampaTrees(collision: CollisionWorld): void {
    // 16 Blooming Dok Champa (Lao Frangipani) trees, including 2 special large climbable trees at (-16, 0, -34) and (16, 0, 34)
    const champaSpecs: { x: number; z: number; scale: number; climbable: boolean; id: string }[] = [
      // 2 Special Large Climbable Dok Champa trees
      { id: 'champa_climb_north', x: -16, z: -34, scale: 1.35, climbable: true },
      { id: 'champa_climb_south', x: 16, z: 34, scale: 1.35, climbable: true },

      // 14 Additional Blooming Dok Champa trees around lawns, ponds, and walkways
      { id: 'champa_3', x: 16, z: -34, scale: 1.05, climbable: false },
      { id: 'champa_4', x: -16, z: 34, scale: 1.05, climbable: false },
      { id: 'champa_5', x: -31, z: -48, scale: 1.0, climbable: false },
      { id: 'champa_6', x: 31, z: -48, scale: 1.0, climbable: false },
      { id: 'champa_7', x: -31, z: -64, scale: 0.95, climbable: false },
      { id: 'champa_8', x: 31, z: -64, scale: 0.95, climbable: false },
      { id: 'champa_9', x: -39, z: -18, scale: 1.08, climbable: false },
      { id: 'champa_10', x: 39, z: -18, scale: 1.08, climbable: false },
      { id: 'champa_11', x: -39, z: 18, scale: 1.08, climbable: false },
      { id: 'champa_12', x: 39, z: 18, scale: 1.08, climbable: false },
      { id: 'champa_13', x: -22, z: 48, scale: 1.02, climbable: false },
      { id: 'champa_14', x: 22, z: 48, scale: 1.02, climbable: false },
      { id: 'champa_15', x: -22, z: 64, scale: 0.98, climbable: false },
      { id: 'champa_16', x: 22, z: 64, scale: 0.98, climbable: false }
    ];

    const barkMat = new THREE.MeshStandardMaterial({ color: 0x694b35, roughness: 0.86 });
    const woodPlatformMat = new THREE.MeshStandardMaterial({ color: 0x8c5832, roughness: 0.74 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x3b8c36, roughness: 0.78 });
    const petalWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xfffdf7,
      roughness: 0.45
    });
    const petalGoldMat = new THREE.MeshStandardMaterial({
      color: 0xffca28,
      emissive: 0x6e4f00,
      emissiveIntensity: 0.18,
      roughness: 0.4
    });

    for (let i = 0; i < champaSpecs.length; i++) {
      const spec = champaSpecs[i];
      const treeGroup = new THREE.Group();
      treeGroup.position.set(spec.x, 0, spec.z);

      const s = spec.scale;

      // Gnarled main trunk
      const mainTrunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28 * s, 0.42 * s, 2.2 * s, 10),
        barkMat
      );
      mainTrunk.position.y = 1.1 * s;
      mainTrunk.rotation.z = 0.08;
      mainTrunk.castShadow = true;
      mainTrunk.receiveShadow = true;
      treeGroup.add(mainTrunk);

      const crownContainer = new THREE.Group();
      crownContainer.position.y = 2.0 * s;

      // 4 Gnarled spreading limbs with lush green leaf clusters and Dok Champa blossoms
      const branchDirs = [
        { dx: 1.1, dz: 0.7, rotZ: -0.58, rotX: 0.35 },
        { dx: -1.1, dz: 0.8, rotZ: 0.55, rotX: 0.38 },
        { dx: -0.9, dz: -1.0, rotZ: 0.48, rotX: -0.45 },
        { dx: 1.0, dz: -0.9, rotZ: -0.52, rotX: -0.42 }
      ];

      for (const b of branchDirs) {
        const limb = new THREE.Mesh(
          new THREE.CylinderGeometry(0.14 * s, 0.24 * s, 1.9 * s, 8),
          barkMat
        );
        limb.position.set(b.dx * 0.55 * s, 0.65 * s, b.dz * 0.55 * s);
        limb.rotation.z = b.rotZ;
        limb.rotation.x = b.rotX;
        limb.castShadow = true;
        crownContainer.add(limb);

        // Leaf cluster sphere
        const canopyCluster = new THREE.Mesh(
          new THREE.DodecahedronGeometry(1.35 * s, 1),
          foliageMat
        );
        canopyCluster.position.set(b.dx * 1.15 * s, 1.35 * s, b.dz * 1.15 * s);
        canopyCluster.scale.set(1.15, 0.72, 1.15);
        canopyCluster.castShadow = true;
        canopyCluster.receiveShadow = true;
        crownContainer.add(canopyCluster);

        // 5-petal white & golden-yellow Dok Champa blossoms on each cluster
        for (let f = 0; f < 6; f++) {
          const fa = (f / 6) * Math.PI * 2;
          const blossom = this.createDokChampaBlossom(petalWhiteMat, petalGoldMat, 0.14 * s);
          blossom.position.set(
            b.dx * 1.15 * s + Math.cos(fa) * 0.85 * s,
            1.55 * s + (f % 2) * 0.25 * s,
            b.dz * 1.15 * s + Math.sin(fa) * 0.85 * s
          );
          crownContainer.add(blossom);
        }
      }

      // Central top canopy crown
      const topCanopy = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.5 * s, 1),
        foliageMat
      );
      topCanopy.position.set(0, 1.9 * s, 0);
      topCanopy.scale.set(1.2, 0.75, 1.2);
      topCanopy.castShadow = true;
      crownContainer.add(topCanopy);

      treeGroup.add(crownContainer);

      // Scattered fallen Dok Champa blossoms on the ground beneath the tree
      for (let g = 0; g < 5; g++) {
        const ga = g * 1.25 + i;
        const gr = 0.85 + (g % 3) * 0.45;
        const fallen = this.createDokChampaBlossom(petalWhiteMat, petalGoldMat, 0.09);
        fallen.position.set(Math.cos(ga) * gr, 0.18, Math.sin(ga) * gr);
        treeGroup.add(fallen);
      }

      this.swayingCrowns.push({
        crownGroup: crownContainer,
        phase: i * 1.1,
        speed: 1.15,
        amplitude: 0.025
      });

      // Trunk collider
      collision.addCylinder({
        id: `${spec.id}_trunk`,
        x: spec.x,
        z: spec.z,
        radius: 0.38 * s,
        topY: 2.5 * s,
        bottomY: 0,
        walkable: false,
        tag: 'tree_trunk'
      });

      // Special Climbable Dok Champa Trees at (-16, 0, -34) and (16, 0, 34):
      // Add low wooden platforms & sturdy branches (BoxColliders + ClimbablePoints)
      if (spec.climbable) {
        const dirSign = spec.x < 0 ? 1 : -1;

        // Step 1: Low wooden garden stepping platform at y = 0.82
        const step1X = spec.x + dirSign * 1.55;
        const step1Z = spec.z + 0.9;
        const plat1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.14, 1.2), woodPlatformMat);
        plat1.position.set(dirSign * 1.55, 0.82 - 0.07, 0.9);
        plat1.castShadow = true;
        plat1.receiveShadow = true;
        treeGroup.add(plat1);

        const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.8, 8), barkMat);
        post1.position.set(dirSign * 1.55, 0.4, 0.9);
        treeGroup.add(post1);

        collision.addBox({
          id: `${spec.id}_platform_1`,
          minX: step1X - 0.65,
          maxX: step1X + 0.65,
          minZ: step1Z - 0.65,
          maxZ: step1Z + 0.65,
          topY: 0.82,
          bottomY: 0.6,
          walkable: true,
          tag: 'tree'
        });

        // Step 2: Mid branch wooden deck at y = 1.62
        const step2X = spec.x + dirSign * 1.1;
        const step2Z = spec.z - 0.55;
        const plat2 = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.14, 1.35), woodPlatformMat);
        plat2.position.set(dirSign * 1.1, 1.62 - 0.07, -0.55);
        plat2.castShadow = true;
        plat2.receiveShadow = true;
        treeGroup.add(plat2);

        collision.addBox({
          id: `${spec.id}_platform_2`,
          minX: step2X - 0.72,
          maxX: step2X + 0.72,
          minZ: step2Z - 0.72,
          maxZ: step2Z + 0.72,
          topY: 1.62,
          bottomY: 1.3,
          walkable: true,
          tag: 'tree'
        });

        // Step 3: Upper Canopy Perch Platform inside the blooming Dok Champa crown at y = 2.45
        const step3X = spec.x;
        const step3Z = spec.z;
        const plat3 = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.1, 0.16, 12), woodPlatformMat);
        plat3.position.set(0, 2.45 - 0.08, 0);
        plat3.castShadow = true;
        plat3.receiveShadow = true;
        treeGroup.add(plat3);

        collision.addBox({
          id: `${spec.id}_canopy_perch`,
          minX: step3X - 1.15,
          maxX: step3X + 1.15,
          minZ: step3Z - 1.15,
          maxZ: step3Z + 1.15,
          topY: 2.45,
          bottomY: 2.1,
          walkable: true,
          tag: 'tree'
        });

        // Register interactive ClimbablePoint so the cat can also leap directly into the canopy
        collision.addClimbable({
          id: `${spec.id}_climb`,
          label: 'ປີນຕົ້ນດອກຈຳປາ [F]',
          entryPosition: new THREE.Vector3(step1X, 0.0, step1Z),
          targetPosition: new THREE.Vector3(step3X, 2.48, step3Z),
          radius: 2.4
        });
      }

      this.group.add(treeGroup);
    }
  }

  private createDokChampaBlossom(
    whiteMat: THREE.Material,
    goldMat: THREE.Material,
    size: number
  ): THREE.Group {
    const flower = new THREE.Group();
    const center = new THREE.Mesh(new THREE.SphereGeometry(size * 0.45, 6, 6), goldMat);
    flower.add(center);

    for (let p = 0; p < 5; p++) {
      const a = (p / 5) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(size * 0.65, 6, 5), whiteMat);
      petal.scale.set(1.3, 0.35, 0.75);
      petal.position.set(Math.cos(a) * size * 0.7, 0.02, Math.sin(a) * size * 0.7);
      petal.rotation.y = -a;
      flower.add(petal);
    }
    return flower;
  }

  private buildTopiaryAndFlowerbeds(): void {
    const shrubDarkMat = new THREE.MeshStandardMaterial({ color: 0x26692b, roughness: 0.84 });
    const shrubLightMat = new THREE.MeshStandardMaterial({ color: 0x388e3c, roughness: 0.8 });
    const marigoldMat = new THREE.MeshStandardMaterial({ color: 0xffa000, roughness: 0.6 });
    const bougainvilleaMat = new THREE.MeshStandardMaterial({ color: 0xe91e63, roughness: 0.6 });

    // Ornamental manicured spherical & conical topiaries along the central & fountain lawns
    const topiaryCoords = [
      { x: -29, z: -38 }, { x: 29, z: -38 },
      { x: -29, z: -66 }, { x: 29, z: -66 },
      { x: -15, z: 38 }, { x: 15, z: 38 },
      { x: -15, z: 54 }, { x: 15, z: 54 },
      { x: -15, z: 70 }, { x: 15, z: 70 },
      { x: -33, z: -26 }, { x: 33, z: -26 },
      { x: -33, z: 26 }, { x: 33, z: 26 },
      { x: -36, z: 42 }, { x: 36, z: 42 },
      { x: -36, z: 66 }, { x: 36, z: 66 }
    ];

    for (let i = 0; i < topiaryCoords.length; i++) {
      const pos = topiaryCoords[i];
      const topiary = new THREE.Group();
      topiary.position.set(pos.x, 0.15, pos.z);

      // Lower trimmed hedge ring
      const baseBush = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.95, 0.45, 12),
        shrubDarkMat
      );
      baseBush.position.y = 0.225;
      baseBush.castShadow = true;
      baseBush.receiveShadow = true;
      topiary.add(baseBush);

      // Sculpted cone or tiered sphere topiary
      const spire = new THREE.Mesh(
        i % 2 === 0
          ? new THREE.ConeGeometry(0.7, 1.35, 12)
          : new THREE.SphereGeometry(0.68, 12, 10),
        shrubLightMat
      );
      spire.position.y = i % 2 === 0 ? 1.05 : 0.85;
      spire.castShadow = true;
      topiary.add(spire);

      // Ring of marigold & bougainvillea blooms around the base
      for (let b = 0; b < 8; b++) {
        const ba = (b / 8) * Math.PI * 2;
        const bloom = new THREE.Mesh(
          new THREE.SphereGeometry(0.14, 6, 6),
          b % 2 === 0 ? marigoldMat : bougainvilleaMat
        );
        bloom.position.set(Math.cos(ba) * 0.82, 0.46, Math.sin(ba) * 0.82);
        topiary.add(bloom);
      }

      this.group.add(topiary);
    }
  }

  private buildParkBenches(collision: CollisionWorld): void {
    // 18 Warm teakwood & stone park benches along walkways and North Musical Fountain Plaza
    // Each registered as a walkable BoxCollider with topY: 0.62, tag: 'bench'
    const benchSpecs: { id: string; x: number; z: number; rotY: number }[] = [
      // 6 Benches around the North Circular Fountain Plaza
      { id: 'bench_fountain_nw', x: -15.5, z: -61.5, rotY: Math.PI * 0.25 },
      { id: 'bench_fountain_ne', x: 15.5, z: -61.5, rotY: -Math.PI * 0.25 },
      { id: 'bench_fountain_w', x: -18.5, z: -52.0, rotY: Math.PI * 0.5 },
      { id: 'bench_fountain_e', x: 18.5, z: -52.0, rotY: -Math.PI * 0.5 },
      { id: 'bench_fountain_sw', x: -15.5, z: -42.5, rotY: Math.PI * 0.75 },
      { id: 'bench_fountain_se', x: 15.5, z: -42.5, rotY: -Math.PI * 0.75 },

      // 4 Benches along the North-Central Promenade (between monument & fountain)
      { id: 'bench_prom_nw1', x: -11.2, z: -26.0, rotY: Math.PI * 0.5 },
      { id: 'bench_prom_ne1', x: 11.2, z: -26.0, rotY: -Math.PI * 0.5 },
      { id: 'bench_prom_nw2', x: -11.2, z: -35.5, rotY: Math.PI * 0.5 },
      { id: 'bench_prom_ne2', x: 11.2, z: -35.5, rotY: -Math.PI * 0.5 },

      // 4 Benches flanking the Reflection Ponds along East-West Avenue
      { id: 'bench_pond_nw', x: -19.0, z: -5.8, rotY: 0 },
      { id: 'bench_pond_ne', x: 19.0, z: -5.8, rotY: 0 },
      { id: 'bench_pond_sw', x: -19.0, z: 5.8, rotY: Math.PI },
      { id: 'bench_pond_se', x: 19.0, z: 5.8, rotY: Math.PI },

      // 4 Benches along the South Grand Promenade
      { id: 'bench_south_w1', x: -11.2, z: 26.5, rotY: Math.PI * 0.5 },
      { id: 'bench_south_e1', x: 11.2, z: 26.5, rotY: -Math.PI * 0.5 },
      { id: 'bench_south_w2', x: -11.2, z: 48.0, rotY: Math.PI * 0.5 },
      { id: 'bench_south_e2', x: 11.2, z: 48.0, rotY: -Math.PI * 0.5 }
    ];

    const teakMat = new THREE.MeshStandardMaterial({
      color: 0x8d4e2a,
      roughness: 0.62,
      metalness: 0.08
    });
    const stoneLegMat = new THREE.MeshStandardMaterial({
      color: 0xebe0cc,
      roughness: 0.72
    });
    const goldMedallionMat = new THREE.MeshStandardMaterial({
      color: 0xd9a742,
      roughness: 0.35,
      metalness: 0.6
    });
    const benchPlaqueTex = this.createIssaraponSignTexture('bench');
    const benchPlaqueMat = new THREE.MeshStandardMaterial({
      map: benchPlaqueTex,
      roughness: 0.32,
      metalness: 0.15,
      emissive: 0x3a2408,
      emissiveIntensity: 0.22
    });

    for (const spec of benchSpecs) {
      const benchGroup = new THREE.Group();
      benchGroup.position.set(spec.x, 0, spec.z);
      benchGroup.rotation.y = spec.rotY;

      // Carved sandstone leg supports
      for (const lx of [-0.95, 0.95]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.54, 0.78), stoneLegMat);
        leg.position.set(lx, 0.27, 0);
        leg.castShadow = true;
        leg.receiveShadow = true;
        benchGroup.add(leg);

        const armRest = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.82), teakMat);
        armRest.position.set(lx, 0.70, 0);
        armRest.castShadow = true;
        benchGroup.add(armRest);

        const medallion = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 0.2, 8),
          goldMedallionMat
        );
        medallion.rotation.z = Math.PI * 0.5;
        medallion.position.set(lx, 0.70, 0.36);
        benchGroup.add(medallion);
      }

      // Slatted teakwood seat at y = 0.58..0.62
      for (let slat = -1; slat <= 1; slat++) {
        const seatPlank = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.07, 0.24), teakMat);
        seatPlank.position.set(0, 0.585, slat * 0.26);
        seatPlank.castShadow = true;
        seatPlank.receiveShadow = true;
        benchGroup.add(seatPlank);
      }

      // Teakwood backrest planks
      for (const by of [0.82, 1.08]) {
        const backPlank = new THREE.Mesh(new THREE.BoxGeometry(2.26, 0.18, 0.07), teakMat);
        backPlank.position.set(0, by, -0.36);
        backPlank.castShadow = true;
        benchGroup.add(backPlank);
      }

      // Golden-framed "Issarapon School" backrest plaque (visible from both front & back of every bench)
      const plaqueFrame = new THREE.Mesh(
        new THREE.BoxGeometry(1.96, 0.38, 0.09),
        goldMedallionMat
      );
      plaqueFrame.position.set(0, 0.98, -0.36);
      plaqueFrame.castShadow = true;
      benchGroup.add(plaqueFrame);

      const frontPlaque = new THREE.Mesh(
        new THREE.PlaneGeometry(1.88, 0.32),
        benchPlaqueMat
      );
      frontPlaque.position.set(0, 0.98, -0.312);
      benchGroup.add(frontPlaque);

      const backPlaque = new THREE.Mesh(
        new THREE.PlaneGeometry(1.88, 0.32),
        benchPlaqueMat
      );
      backPlaque.position.set(0, 0.98, -0.408);
      backPlaque.rotation.y = Math.PI;
      benchGroup.add(backPlaque);

      this.group.add(benchGroup);

      // Compute oriented bounding box extents in world XZ
      const cosR = Math.abs(Math.cos(spec.rotY));
      const sinR = Math.abs(Math.sin(spec.rotY));
      const halfExtX = 1.18 * cosR + 0.48 * sinR;
      const halfExtZ = 1.18 * sinR + 0.48 * cosR;

      collision.addBox({
        id: spec.id,
        minX: spec.x - halfExtX,
        maxX: spec.x + halfExtX,
        minZ: spec.z - halfExtZ,
        maxZ: spec.z + halfExtZ,
        topY: 0.62,
        bottomY: 0,
        walkable: true,
        tag: 'bench'
      });
    }
  }

  private createIssaraponSignTexture(variant: 'bench' | 'billboard'): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    if (variant === 'bench') {
      canvas.width = 768;
      canvas.height = 160;
      const ctx = canvas.getContext('2d')!;

      // Royal maroon & teak background
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#4f161e');
      grad.addColorStop(0.5, '#360d13');
      grad.addColorStop(1, '#4f161e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold double border
      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 8;
      ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);
      ctx.strokeStyle = 'rgba(255, 209, 102, 0.55)';
      ctx.lineWidth = 3;
      ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);

      // Crisp "Issarapon School" lettering
      ctx.fillStyle = '#ffd166';
      ctx.font = 'bold 58px "Fredoka", "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
      ctx.shadowBlur = 8;
      ctx.fillText('🌼 Issarapon School 🌼', canvas.width * 0.5, canvas.height * 0.52);
    } else {
      canvas.width = 1024;
      canvas.height = 420;
      const ctx = canvas.getContext('2d')!;

      // Rich royal Lao temple crimson & gold gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#5a1620');
      grad.addColorStop(0.5, '#380b12');
      grad.addColorStop(1, '#5a1620');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Decorative gold frame
      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 14;
      ctx.strokeRect(14, 14, canvas.width - 28, canvas.height - 28);
      ctx.strokeStyle = '#ff9f1c';
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

      // Top Lao welcome header
      ctx.fillStyle = '#9bf6ee';
      ctx.font = 'bold 42px "Noto Sans Lao", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✨ ຍິນດີຕ້ອນຮັບສູ່ ສວນປະຕູໄຊ • ແມວລາວ ✨', canvas.width * 0.5, 98);

      // Main prominent "Issarapon School" title
      ctx.fillStyle = '#ffd166';
      ctx.font = 'bold 92px "Fredoka", "Plus Jakarta Sans", sans-serif';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
      ctx.shadowBlur = 12;
      ctx.fillText('Issarapon School', canvas.width * 0.5, 224);

      // Bottom Lao & Dok Champa subtitle
      ctx.shadowBlur = 4;
      ctx.fillStyle = '#fff9f0';
      ctx.font = 'bold 44px "Noto Sans Lao", sans-serif';
      ctx.fillText('🌼 ໂຮງຮຽນ ອິດສະຫຼະພອນ • ນະຄອນຫຼວງວຽງຈັນ 🌼', canvas.width * 0.5, 336);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  private buildIssaraponSchoolSigns(collision: CollisionWorld): void {
    // Prominent 3D Lao-style "Issarapon School" Welcome Signboards at key vistas:
    // 1. Spawn Plaza right in front of the starting view
    // 2. South side of North Musical Fountain
    // 3 & 4. Flanking the North Entrance of Patuxay Monument
    // 5 & 6. Flanking the South Entrance of Patuxay Monument
    // 7. Rooftop Terrace (16m) Commemorative Signboard
    const signLocations: {
      id: string;
      x: number;
      y: number;
      z: number;
      rotY: number;
      scale: number;
    }[] = [
      { id: 'issarapon_sign_spawn', x: -5.2, y: 0, z: -65.2, rotY: 0.22, scale: 1.05 },
      { id: 'issarapon_sign_fountain_sw', x: -5.4, y: 0, z: -38.2, rotY: -0.15, scale: 1.08 },
      { id: 'issarapon_sign_fountain_se', x: 5.4, y: 0, z: -38.2, rotY: 0.15, scale: 1.08 },
      { id: 'issarapon_sign_monument_nw', x: -6.8, y: 0, z: -14.8, rotY: 0.12, scale: 1.15 },
      { id: 'issarapon_sign_monument_ne', x: 6.8, y: 0, z: -14.8, rotY: -0.12, scale: 1.15 },
      { id: 'issarapon_sign_monument_sw', x: -6.8, y: 0, z: 14.8, rotY: Math.PI - 0.12, scale: 1.15 },
      { id: 'issarapon_sign_monument_se', x: 6.8, y: 0, z: 14.8, rotY: Math.PI + 0.12, scale: 1.15 },
      { id: 'issarapon_sign_rooftop', x: -3.2, y: 16.0, z: 6.2, rotY: 0.25, scale: 0.92 }
    ];

    const billboardTex = this.createIssaraponSignTexture('billboard');
    const billboardMat = new THREE.MeshStandardMaterial({
      map: billboardTex,
      roughness: 0.28,
      metalness: 0.12,
      emissive: 0x3b2208,
      emissiveIntensity: 0.26
    });
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x8d4e2a,
      roughness: 0.58
    });
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xe6b446,
      roughness: 0.3,
      metalness: 0.68
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0xb23a22,
      roughness: 0.55
    });
    const baseStoneMat = new THREE.MeshStandardMaterial({
      color: 0xebe0cc,
      roughness: 0.72
    });

    for (const loc of signLocations) {
      const signGroup = new THREE.Group();
      signGroup.position.set(loc.x, loc.y, loc.z);
      signGroup.rotation.y = loc.rotY;
      signGroup.scale.setScalar(loc.scale);

      // Stepped stone pedestal base
      const basePlinth = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 0.32, 0.85),
        baseStoneMat
      );
      basePlinth.position.y = 0.16;
      basePlinth.castShadow = true;
      basePlinth.receiveShadow = true;
      signGroup.add(basePlinth);

      // Two ornate pillars with golden capitals
      for (const px of [-1.42, 1.42]) {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.11, 0.13, 2.45, 10),
          pillarMat
        );
        post.position.set(px, 1.35, 0);
        post.castShadow = true;
        signGroup.add(post);

        const goldRing = new THREE.Mesh(
          new THREE.CylinderGeometry(0.16, 0.16, 0.18, 10),
          goldTrimMat
        );
        goldRing.position.set(px, 2.42, 0);
        signGroup.add(goldRing);
      }

      // Main golden signboard frame
      const boardFrame = new THREE.Mesh(
        new THREE.BoxGeometry(2.76, 1.18, 0.14),
        goldTrimMat
      );
      boardFrame.position.set(0, 1.62, 0);
      boardFrame.castShadow = true;
      signGroup.add(boardFrame);

      // Double-sided "Issarapon School" high-contrast display panels
      const frontPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(2.62, 1.06),
        billboardMat
      );
      frontPanel.position.set(0, 1.62, 0.075);
      signGroup.add(frontPanel);

      const backPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(2.62, 1.06),
        billboardMat
      );
      backPanel.position.set(0, 1.62, -0.075);
      backPanel.rotation.y = Math.PI;
      signGroup.add(backPanel);

      // Traditional Lao tiered roof ("Sim" style) with golden spire finial
      const lowerRoof = new THREE.Mesh(
        new THREE.BoxGeometry(3.35, 0.16, 0.72),
        roofMat
      );
      lowerRoof.position.set(0, 2.52, 0);
      lowerRoof.castShadow = true;
      signGroup.add(lowerRoof);

      const upperRoof = new THREE.Mesh(
        new THREE.BoxGeometry(2.55, 0.18, 0.54),
        roofMat
      );
      upperRoof.position.set(0, 2.72, 0);
      upperRoof.castShadow = true;
      signGroup.add(upperRoof);

      const roofSpire = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.55, 8),
        goldTrimMat
      );
      roofSpire.position.set(0, 3.06, 0);
      signGroup.add(roofSpire);

      this.group.add(signGroup);

      if (loc.y < 1.0) {
        collision.addBox({
          id: loc.id,
          minX: loc.x - 1.5,
          maxX: loc.x + 1.5,
          minZ: loc.z - 0.5,
          maxZ: loc.z + 0.5,
          topY: 0.34,
          bottomY: 0,
          walkable: true,
          tag: 'bench'
        });
      }
    }
  }

  private buildLaoStreetlamps(collision: CollisionWorld): void {
    // 14 Ornate Lao Streetlamps with golden naga-crest post brackets & warm PointLights
    const lampCoords: { x: number; z: number }[] = [
      { x: -11.5, z: -80 },
      { x: 11.5, z: -80 },
      { x: -17.5, z: -66 },
      { x: 17.5, z: -66 },
      { x: -17.5, z: -38 },
      { x: 17.5, z: -38 },
      { x: -11.5, z: -20 },
      { x: 11.5, z: -20 },
      { x: -11.5, z: 20 },
      { x: 11.5, z: 20 },
      { x: -11.5, z: 40 },
      { x: 11.5, z: 40 },
      { x: -11.5, z: 62 },
      { x: 11.5, z: 62 },
      { x: -11.5, z: 80 },
      { x: 11.5, z: 80 }
    ];

    const poleMat = new THREE.MeshStandardMaterial({
      color: 0x2c2520,
      roughness: 0.45,
      metalness: 0.65
    });
    const goldNagaMat = new THREE.MeshStandardMaterial({
      color: 0xe3b144,
      roughness: 0.3,
      metalness: 0.72
    });

    for (let i = 0; i < lampCoords.length; i++) {
      const pos = lampCoords[i];
      const lampGroup = new THREE.Group();
      lampGroup.position.set(pos.x, 0, pos.z);

      // Ornate stepped pedestal base
      const basePedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.34, 0.75, 10),
        goldNagaMat
      );
      basePedestal.position.y = 0.375;
      basePedestal.castShadow = true;
      lampGroup.add(basePedestal);

      // Fluted dark-bronze lamp column
      const column = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.15, 3.8, 10),
        poleMat
      );
      column.position.y = 2.3;
      column.castShadow = true;
      lampGroup.add(column);

      // Golden Naga crest cross-arm & finial spire at top of post
      const crossArm = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.12, 0.12), goldNagaMat);
      crossArm.position.y = 4.15;
      lampGroup.add(crossArm);

      const topSpire = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.65, 8), goldNagaMat);
      topSpire.position.y = 4.52;
      lampGroup.add(topSpire);

      // Warm lotus lantern globe
      const globeMat = new THREE.MeshStandardMaterial({
        color: 0xfff3d1,
        emissive: 0xffb74d,
        emissiveIntensity: 0.35,
        roughness: 0.2
      });
      this.lampGlobeMaterials.push(globeMat);

      for (const gx of [-0.48, 0.48]) {
        const globe = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), globeMat);
        globe.position.set(gx, 3.92, 0);
        lampGroup.add(globe);
      }

      // Warm PointLight stored in this.lampLights
      const light = new THREE.PointLight(0xffb85c, 0.25, 18, 1.7);
      light.position.set(0, 3.85, 0);
      lampGroup.add(light);
      this.lampLights.push(light);

      this.group.add(lampGroup);

      collision.addCylinder({
        id: `streetlamp_${i}`,
        x: pos.x,
        z: pos.z,
        radius: 0.3,
        topY: 4.4,
        bottomY: 0,
        walkable: false,
        tag: 'pillar'
      });
    }
  }

  private buildPondLotusPadsAndFlowers(collision: CollisionWorld): void {
    // 4 Flanking reflection ponds at (±19, 0, ±14.5)
    const ponds = [
      { id: 'nw', cx: -19, cz: -14.5 },
      { id: 'ne', cx: 19, cz: -14.5 },
      { id: 'sw', cx: -19, cz: 14.5 },
      { id: 'se', cx: 19, cz: 14.5 }
    ];

    const padMat = new THREE.MeshStandardMaterial({
      color: 0x2e8538,
      roughness: 0.72
    });
    const giantPadMat = new THREE.MeshStandardMaterial({
      color: 0x389c42,
      roughness: 0.65
    });
    const pinkPetalMat = new THREE.MeshStandardMaterial({
      color: 0xff80ab,
      roughness: 0.42
    });
    const whitePetalMat = new THREE.MeshStandardMaterial({
      color: 0xfff8fa,
      roughness: 0.42
    });
    const goldStamenMat = new THREE.MeshStandardMaterial({
      color: 0xffd54f,
      roughness: 0.35
    });

    for (const pond of ponds) {
      // 3 Giant Walkable Victoria Lotus Pads per pond (12 total) near pond edges & center
      // Registered as walkable CylinderColliders at topY: 0.28 so the cat can hop across lotus pads!
      const giantOffsets = [
        { dx: -3.2, dz: -3.6 },
        { dx: 0.0, dz: 0.0 },
        { dx: 3.1, dz: 3.6 }
      ];

      for (let g = 0; g < giantOffsets.length; g++) {
        const wx = pond.cx + giantOffsets[g].dx;
        const wz = pond.cz + giantOffsets[g].dz;

        const giantPadGroup = new THREE.Group();
        giantPadGroup.position.set(wx, 0.26, wz);

        const disc = new THREE.Mesh(
          new THREE.CylinderGeometry(1.05, 1.02, 0.05, 24),
          giantPadMat
        );
        disc.receiveShadow = true;
        giantPadGroup.add(disc);

        // Upturned Victoria amazonica rim
        const rim = new THREE.Mesh(
          new THREE.TorusGeometry(1.03, 0.055, 8, 24),
          giantPadMat
        );
        rim.rotation.x = Math.PI * 0.5;
        rim.position.y = 0.04;
        giantPadGroup.add(rim);

        // Sacred pink or white lotus flower crowning the edge of the giant pad
        const lotusFlower = this.createSacredLotusFlower(
          g % 2 === 0 ? pinkPetalMat : whitePetalMat,
          goldStamenMat,
          0.26
        );
        lotusFlower.position.set(0.55, 0.06, 0.35);
        giantPadGroup.add(lotusFlower);

        this.group.add(giantPadGroup);

        collision.addCylinder({
          id: `giant_lotus_pad_${pond.id}_${g}`,
          x: wx,
          z: wz,
          radius: 1.05,
          topY: 0.28,
          bottomY: 0,
          walkable: true,
          tag: 'fountain_basin'
        });
      }

      // 8 Decorative floating lily pads & lotus blossoms per pond
      const decorativeOffsets = [
        { dx: -3.6, dz: 2.8, r: 0.48, hasFlower: true, pink: true },
        { dx: -2.1, dz: 4.4, r: 0.38, hasFlower: false, pink: false },
        { dx: 3.5, dz: -3.2, r: 0.52, hasFlower: true, pink: false },
        { dx: 2.2, dz: -4.6, r: 0.40, hasFlower: true, pink: true },
        { dx: -1.6, dz: -1.8, r: 0.44, hasFlower: false, pink: true },
        { dx: 1.8, dz: 1.9, r: 0.46, hasFlower: true, pink: true },
        { dx: -4.0, dz: -0.6, r: 0.42, hasFlower: true, pink: false },
        { dx: 3.9, dz: 0.8, r: 0.45, hasFlower: false, pink: true }
      ];

      for (let d = 0; d < decorativeOffsets.length; d++) {
        const cfg = decorativeOffsets[d];
        const padGroup = new THREE.Group();
        padGroup.position.set(pond.cx + cfg.dx, 0.258, pond.cz + cfg.dz);

        const padMesh = new THREE.Mesh(
          new THREE.CircleGeometry(cfg.r, 16, 0.15, Math.PI * 1.85),
          padMat
        );
        padMesh.rotation.x = -Math.PI * 0.5;
        padMesh.rotation.z = d * 1.1;
        padMesh.receiveShadow = true;
        padGroup.add(padMesh);

        if (cfg.hasFlower) {
          const flower = this.createSacredLotusFlower(
            cfg.pink ? pinkPetalMat : whitePetalMat,
            goldStamenMat,
            0.22
          );
          flower.position.y = 0.03;
          padGroup.add(flower);
        }

        this.group.add(padGroup);
        this.floatingLotuses.push({
          mesh: padGroup,
          baseY: 0.258,
          phase: d * 0.9 + pond.cx
        });
      }
    }
  }

  private createSacredLotusFlower(
    petalMat: THREE.Material,
    centerMat: THREE.Material,
    scale: number
  ): THREE.Group {
    const lotus = new THREE.Group();
    const receptacle = new THREE.Mesh(
      new THREE.CylinderGeometry(scale * 0.38, scale * 0.2, scale * 0.28, 8),
      centerMat
    );
    receptacle.position.y = scale * 0.15;
    lotus.add(receptacle);

    // Outer & inner rings of pointed lotus petals
    for (let ring = 0; ring < 2; ring++) {
      const count = ring === 0 ? 8 : 6;
      const tilt = ring === 0 ? 0.85 : 0.45;
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2 + ring * 0.4;
        const petal = new THREE.Mesh(
          new THREE.ConeGeometry(scale * 0.26, scale * 0.75, 5),
          petalMat
        );
        petal.position.set(
          Math.cos(a) * scale * (0.35 - ring * 0.1),
          scale * 0.24,
          Math.sin(a) * scale * (0.35 - ring * 0.1)
        );
        petal.rotation.z = -Math.cos(a) * tilt;
        petal.rotation.x = Math.sin(a) * tilt;
        lotus.add(petal);
      }
    }
    return lotus;
  }

  private buildKnockableParkProps(): void {
    // 12 Interactive Knockable Park Props placed on park benches and fountain rims:
    // - 4 Woven bamboo flower baskets
    // - 4 Iced coffee / coconut cups
    // - 4 Small golden offering bowls
    const propPlacements: {
      type: 'basket' | 'cup' | 'bowl';
      x: number;
      y: number;
      z: number;
    }[] = [
      // On North Fountain Rim (topY = 0.52)
      { type: 'bowl', x: 0.0, y: 0.52, z: -40.3 },
      { type: 'cup', x: -8.3, y: 0.52, z: -43.7 },
      { type: 'basket', x: 8.3, y: 0.52, z: -43.7 },
      { type: 'bowl', x: 0.0, y: 0.52, z: -63.7 },

      // On Benches around the Fountain & Main Promenade (topY = 0.62)
      { type: 'cup', x: -11.2, y: 0.62, z: -25.6 },
      { type: 'basket', x: 11.2, y: 0.62, z: -25.6 },
      { type: 'bowl', x: -11.2, y: 0.62, z: -35.1 },
      { type: 'cup', x: 11.2, y: 0.62, z: -35.1 },

      // On Pond-facing & South Promenade Benches (topY = 0.62)
      { type: 'basket', x: -18.6, y: 0.62, z: -5.8 },
      { type: 'cup', x: 18.6, y: 0.62, z: -5.8 },
      { type: 'bowl', x: -11.2, y: 0.62, z: 26.1 },
      { type: 'basket', x: 11.2, y: 0.62, z: 26.1 }
    ];

    const bambooMat = new THREE.MeshStandardMaterial({ color: 0xc89d54, roughness: 0.78 });
    const marigoldMat = new THREE.MeshStandardMaterial({ color: 0xffa726, roughness: 0.55 });
    const cupMat = new THREE.MeshStandardMaterial({ color: 0xf5efe6, roughness: 0.35 });
    const coffeeMat = new THREE.MeshStandardMaterial({ color: 0x4e2c14, roughness: 0.25 });
    const strawMat = new THREE.MeshStandardMaterial({ color: 0x26a69a, roughness: 0.4 });
    const goldBowlMat = new THREE.MeshStandardMaterial({
      color: 0xf4c44e,
      roughness: 0.25,
      metalness: 0.78
    });

    for (const item of propPlacements) {
      const propGroup = new THREE.Group();
      propGroup.position.set(item.x, item.y + 0.14, item.z);

      if (item.type === 'basket') {
        // Woven bamboo flower basket filled with marigolds
        const basketBase = new THREE.Mesh(
          new THREE.CylinderGeometry(0.22, 0.15, 0.22, 10),
          bambooMat
        );
        basketBase.castShadow = true;
        propGroup.add(basketBase);

        for (let m = 0; m < 5; m++) {
          const ma = (m / 5) * Math.PI * 2;
          const flower = new THREE.Mesh(new THREE.SphereGeometry(0.075, 6, 6), marigoldMat);
          flower.position.set(Math.cos(ma) * 0.09, 0.12, Math.sin(ma) * 0.09);
          propGroup.add(flower);
        }
      } else if (item.type === 'cup') {
        // Lao iced coffee / young coconut cup with green straw
        const cup = new THREE.Mesh(
          new THREE.CylinderGeometry(0.13, 0.095, 0.28, 12),
          cupMat
        );
        cup.castShadow = true;
        propGroup.add(cup);

        const coffeeTop = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), coffeeMat);
        coffeeTop.rotation.x = -Math.PI * 0.5;
        coffeeTop.position.y = 0.135;
        propGroup.add(coffeeTop);

        const straw = new THREE.Mesh(
          new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6),
          strawMat
        );
        straw.position.set(0.03, 0.18, 0.02);
        straw.rotation.z = -0.25;
        propGroup.add(straw);
      } else {
        // Small embossed golden Lao offering bowl (Khan Dok Mai)
        const foot = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.13, 0.08, 12),
          goldBowlMat
        );
        foot.position.y = -0.08;
        propGroup.add(foot);

        const bowl = new THREE.Mesh(
          new THREE.CylinderGeometry(0.19, 0.11, 0.18, 14),
          goldBowlMat
        );
        bowl.position.y = 0.03;
        bowl.castShadow = true;
        propGroup.add(bowl);

        const offering = new THREE.Mesh(
          new THREE.ConeGeometry(0.12, 0.16, 8),
          marigoldMat
        );
        offering.position.y = 0.15;
        propGroup.add(offering);
      }

      this.group.add(propGroup);

      this.knockableProps.push({
        mesh: propGroup,
        initialPos: new THREE.Vector3(item.x, item.y + 0.14, item.z),
        initialFloorY: item.y,
        velocity: new THREE.Vector3(),
        angularVel: new THREE.Vector3(),
        radius: 0.24,
        floorY: item.y,
        knocked: false
      });
    }
  }

  public resetKnockableProps(): void {
    for (const prop of this.knockableProps) {
      prop.mesh.position.copy(prop.initialPos);
      prop.mesh.rotation.set(0, 0, 0);
      prop.velocity.set(0, 0, 0);
      prop.angularVel.set(0, 0, 0);
      prop.floorY = prop.initialFloorY;
      prop.knocked = false;
    }
  }

  public swatNearbyProps(catPosition: THREE.Vector3, radius = 2.2): number {
    let newlyKnocked = 0;

    for (const prop of this.knockableProps) {
      const dist = prop.mesh.position.distanceTo(catPosition);
      if (dist <= radius) {
        const dir = new THREE.Vector3()
          .subVectors(prop.mesh.position, catPosition)
          .setY(0);
        if (dir.lengthSq() < 0.001) {
          dir.set(Math.random() - 0.5, 0, Math.random() - 0.5);
        }
        dir.normalize();

        const speed = 3.4 + Math.random() * 1.8;
        prop.velocity.set(
          dir.x * speed,
          3.2 + Math.random() * 1.4,
          dir.z * speed
        );
        prop.angularVel.set(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 14
        );

        // Once swatted off its bench or fountain rim, let it fall to the ground plane
        prop.floorY = 0.02;

        if (!prop.knocked) {
          prop.knocked = true;
          newlyKnocked++;
        } else {
          newlyKnocked++;
        }
      }
    }

    return newlyKnocked;
  }

  public setNightMode(intensity: number): void {
    const clamped = THREE.MathUtils.clamp(intensity, 0, 1);
    for (const light of this.lampLights) {
      light.intensity = THREE.MathUtils.lerp(0.15, 2.4, clamped);
    }
    for (const mat of this.lampGlobeMaterials) {
      mat.emissiveIntensity = THREE.MathUtils.lerp(0.25, 2.2, clamped);
    }
  }

  public update(delta: number, elapsed: number, catPosition: THREE.Vector3): void {
    const dt = Math.min(delta, 0.1);

    // Gentle tropical breeze swaying for palm crowns & Dok Champa canopies
    for (const item of this.swayingCrowns) {
      item.crownGroup.rotation.z =
        Math.sin(elapsed * item.speed + item.phase) * item.amplitude;
      item.crownGroup.rotation.x =
        Math.cos(elapsed * (item.speed * 0.82) + item.phase) * item.amplitude * 0.8;
    }

    // Gentle water bobbing for decorative pond lotus pads
    for (const lotus of this.floatingLotuses) {
      lotus.mesh.position.y =
        lotus.baseY + Math.sin(elapsed * 2.1 + lotus.phase) * 0.012;
    }

    // Simulate tumbling physics for knockable props
    for (const prop of this.knockableProps) {
      // Allow automatic bump-knock if cat walks directly through an un-knocked prop
      if (!prop.knocked && prop.mesh.position.distanceTo(catPosition) < 0.58) {
        this.swatNearbyProps(catPosition, 0.75);
      }

      if (!prop.knocked) continue;

      const speedSq = prop.velocity.lengthSq();
      const angSq = prop.angularVel.lengthSq();
      if (speedSq < 0.0005 && angSq < 0.0005 && prop.mesh.position.y <= prop.floorY + prop.radius * 0.55) {
        continue;
      }

      // Gravity
      prop.velocity.y -= 11.8 * dt;

      // Integrate position & rotation
      prop.mesh.position.addScaledVector(prop.velocity, dt);
      prop.mesh.rotation.x += prop.angularVel.x * dt;
      prop.mesh.rotation.y += prop.angularVel.y * dt;
      prop.mesh.rotation.z += prop.angularVel.z * dt;

      // Ground bounce & friction
      const minCenterY = prop.floorY + prop.radius * 0.5;
      if (prop.mesh.position.y < minCenterY) {
        prop.mesh.position.y = minCenterY;
        if (prop.velocity.y < -0.6) {
          prop.velocity.y = -prop.velocity.y * 0.42;
        } else {
          prop.velocity.y = 0;
        }
        prop.velocity.x *= Math.max(0, 1 - 4.5 * dt);
        prop.velocity.z *= Math.max(0, 1 - 4.5 * dt);
        prop.angularVel.multiplyScalar(Math.max(0, 1 - 4.0 * dt));
      }
    }
  }
}
