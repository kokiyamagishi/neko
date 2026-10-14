import * as THREE from 'three';
import { CollisionWorld } from '../core/CollisionWorld';
import { TextureManager } from '../core/TextureManager';

interface AnimatedBeacon {
  ring: THREE.Mesh;
  innerRing: THREE.Mesh;
  column: THREE.Mesh;
  baseY: number;
  phase: number;
}

interface DustParticle {
  mesh: THREE.Mesh;
  basePos: THREE.Vector3;
  speed: number;
  phase: number;
  orbitRadius: number;
}

export class PatuxayMonument {
  public readonly group: THREE.Group;
  public readonly nightLights: THREE.PointLight[] = [];
  public readonly rooftopViewpoint = new THREE.Vector3(0, 16.2, 6.5);

  private readonly emissiveMaterials: THREE.MeshStandardMaterial[] = [];
  private readonly lanternMaterials: THREE.MeshStandardMaterial[] = [];
  private readonly beacons: AnimatedBeacon[] = [];
  private readonly dustParticles: DustParticle[] = [];
  private nightIntensity = 0.25;

  constructor(textures: TextureManager, collision: CollisionWorld) {
    this.group = new THREE.Group();
    this.group.name = 'PatuxayMonument';

    // Core textured & architectural materials
    const stoneWallTex = textures.get('patuxay_stone_wall', 2, 3);
    const stonePierMat = new THREE.MeshStandardMaterial({
      map: stoneWallTex,
      roughness: 0.78,
      metalness: 0.06
    });

    const stoneTrimTex = textures.get('patuxay_stone_wall', 2, 1);
    const stoneTrimMat = new THREE.MeshStandardMaterial({
      map: stoneTrimTex,
      color: new THREE.Color('#f0dec0'),
      roughness: 0.7,
      metalness: 0.08
    });

    const darkSandstoneMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#b6976c'),
      roughness: 0.82,
      metalness: 0.06
    });

    const pedimentTex = textures.get('patuxay_arch_pediment', 1, 1);
    const pedimentMat = new THREE.MeshStandardMaterial({
      map: pedimentTex,
      roughness: 0.55,
      metalness: 0.18
    });

    const corniceTex = textures.get('patuxay_cornice_frieze', 4, 1);
    const corniceMat = new THREE.MeshStandardMaterial({
      map: corniceTex,
      roughness: 0.62,
      metalness: 0.14
    });

    const ceilingTex = textures.get('patuxay_coffered_ceiling', 3, 3);
    const ceilingMat = new THREE.MeshStandardMaterial({
      map: ceilingTex,
      roughness: 0.58,
      metalness: 0.15,
      side: THREE.DoubleSide
    });

    const plazaTileTex = textures.get('plaza_terracotta_tiles', 6, 6);
    const floorTileMat = new THREE.MeshStandardMaterial({
      map: plazaTileTex,
      roughness: 0.72,
      metalness: 0.06
    });

    const mosaicTex = textures.get('fountain_mosaic_tile', 2, 2);
    const turquoiseMat = new THREE.MeshStandardMaterial({
      map: mosaicTex,
      color: new THREE.Color('#3bd1c8'),
      roughness: 0.35,
      metalness: 0.25
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#eebc48'),
      roughness: 0.28,
      metalness: 0.72,
      emissive: new THREE.Color('#6b4808'),
      emissiveIntensity: 0.18
    });
    this.emissiveMaterials.push(goldMat);

    const laoRoofMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#9c2f23'),
      roughness: 0.52,
      metalness: 0.22
    });

    const bambooMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#c89d54'),
      roughness: 0.68,
      metalness: 0.08
    });

    const lanternGlowMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffe6a3'),
      emissive: new THREE.Color('#ffaa2b'),
      emissiveIntensity: 1.1,
      roughness: 0.2,
      metalness: 0.1
    });
    this.lanternMaterials.push(lanternGlowMat);

    // 1. Stepped Base Plinth & Ceremonial Floor Medallion
    this.buildSteppedPlinth(collision, stoneTrimMat, darkSandstoneMat, floorTileMat, goldMat);
    this.buildFloorMedallion(goldMat, turquoiseMat, darkSandstoneMat);

    // 2. Four Corner Piers, Flanking Columns, Semicircular Arches & Lao Gable Pediments
    this.buildCornerPiers(collision, stonePierMat, stoneTrimMat, darkSandstoneMat, goldMat, lanternGlowMat);
    this.buildFlankingColumns(stoneTrimMat, darkSandstoneMat, goldMat);
    this.buildGrandArchesAndPediments(stonePierMat, stoneTrimMat, pedimentMat, goldMat);

    // 3. Under-Arch Vaulted Coffered Ceiling & Night Illumination
    this.buildCofferedVaultCeiling(ceilingMat, stoneTrimMat, goldMat, lanternGlowMat);

    // 4. Entablature, Lotus Cornice & Rooftop Viewing Terrace (y = 16.0)
    this.buildEntablatureAndRooftop(
      collision,
      corniceMat,
      stoneTrimMat,
      darkSandstoneMat,
      floorTileMat,
      goldMat
    );

    // 5. Five Traditional Lao Rooftop Towers (4 Corner + 1 Central Spire)
    this.buildRooftopTowers(
      collision,
      stonePierMat,
      stoneTrimMat,
      laoRoofMat,
      goldMat,
      lanternGlowMat
    );

    // 6. Cat Bamboo & Stone Stepped Climbing Walkway + Interactive Staircase Portals
    this.buildCatClimbingWalkway(
      collision,
      stoneTrimMat,
      darkSandstoneMat,
      bambooMat,
      goldMat,
      lanternGlowMat
    );
    this.buildStaircasePortals(collision, stoneTrimMat, goldMat, lanternGlowMat);

    // 7. Ambient golden dust motes under the central arch & around rooftop spires
    this.buildAtmosphericDust(goldMat);

    this.setNightMode(this.nightIntensity);
  }

  private buildSteppedPlinth(
    collision: CollisionWorld,
    stoneMat: THREE.Material,
    darkStoneMat: THREE.Material,
    floorTileMat: THREE.Material,
    goldMat: THREE.Material
  ): void {
    const tiers = [
      { id: 'monument_plinth_1', half: 13.5, bottomY: 0.0, topY: 0.25 },
      { id: 'monument_plinth_2', half: 12.5, bottomY: 0.25, topY: 0.5 },
      { id: 'monument_plinth_3', half: 11.5, bottomY: 0.5, topY: 0.75 }
    ];

    for (const tier of tiers) {
      const height = tier.topY - tier.bottomY;
      const size = tier.half * 2;
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(size, height, size),
        stoneMat
      );
      mesh.position.set(0, tier.bottomY + height * 0.5, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);

      // Decorative dark stone nosing lip around each step
      const lip = new THREE.Mesh(
        new THREE.BoxGeometry(size + 0.14, 0.05, size + 0.14),
        darkStoneMat
      );
      lip.position.set(0, tier.topY - 0.025, 0);
      lip.receiveShadow = true;
      this.group.add(lip);

      collision.addBox({
        id: tier.id,
        minX: -tier.half,
        maxX: tier.half,
        minZ: -tier.half,
        maxZ: tier.half,
        bottomY: 0,
        topY: tier.topY,
        walkable: true,
        tag: 'monument'
      });
    }

    // Terracotta ceremonial paving on top of tier 3 (y = 0.75)
    const paving = new THREE.Mesh(
      new THREE.BoxGeometry(22.4, 0.02, 22.4),
      floorTileMat
    );
    paving.position.set(0, 0.75, 0);
    paving.receiveShadow = true;
    this.group.add(paving);

    // Cross-shaped golden inlay borders guiding through the 4 archways
    const crossNS = new THREE.Mesh(
      new THREE.BoxGeometry(7.8, 0.024, 22.6),
      goldMat
    );
    crossNS.position.set(0, 0.751, 0);
    crossNS.receiveShadow = true;
    this.group.add(crossNS);

    const crossEW = new THREE.Mesh(
      new THREE.BoxGeometry(22.6, 0.024, 7.8),
      goldMat
    );
    crossEW.position.set(0, 0.751, 0);
    crossEW.receiveShadow = true;
    this.group.add(crossEW);

    const innerNS = new THREE.Mesh(
      new THREE.BoxGeometry(7.2, 0.028, 22.5),
      floorTileMat
    );
    innerNS.position.set(0, 0.752, 0);
    innerNS.receiveShadow = true;
    this.group.add(innerNS);

    const innerEW = new THREE.Mesh(
      new THREE.BoxGeometry(22.5, 0.028, 7.2),
      floorTileMat
    );
    innerEW.position.set(0, 0.752, 0);
    innerEW.receiveShadow = true;
    this.group.add(innerEW);
  }

  private buildFloorMedallion(
    goldMat: THREE.Material,
    turquoiseMat: THREE.Material,
    darkStoneMat: THREE.Material
  ): void {
    const medallionGroup = new THREE.Group();
    medallionGroup.position.set(0, 0.76, 0);

    // Outer octagonal stone ring
    const outerOct = new THREE.Mesh(
      new THREE.CylinderGeometry(3.4, 3.5, 0.03, 8),
      darkStoneMat
    );
    outerOct.rotation.y = Math.PI / 8;
    outerOct.receiveShadow = true;
    medallionGroup.add(outerOct);

    // Golden octagonal border
    const goldOct = new THREE.Mesh(
      new THREE.CylinderGeometry(3.05, 3.12, 0.04, 8),
      goldMat
    );
    goldOct.rotation.y = Math.PI / 8;
    goldOct.receiveShadow = true;
    medallionGroup.add(goldOct);

    // Turquoise mosaic lotus pool inlay
    const turquoiseDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(2.65, 2.65, 0.048, 16),
      turquoiseMat
    );
    turquoiseDisc.receiveShadow = true;
    medallionGroup.add(turquoiseDisc);

    // 8 radiating 3D lotus petals in gold
    const petalGeom = new THREE.ConeGeometry(0.48, 2.3, 4);
    petalGeom.rotateX(Math.PI * 0.5);
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const petal = new THREE.Mesh(petalGeom, goldMat);
      petal.scale.set(1, 0.14, 1);
      petal.position.set(Math.cos(angle) * 1.2, 0.03, Math.sin(angle) * 1.2);
      petal.rotation.y = -angle + Math.PI * 0.5;
      medallionGroup.add(petal);
    }

    // Inner concentric lotus boss
    const centerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 1.05, 0.06, 16),
      goldMat
    );
    centerRing.receiveShadow = true;
    medallionGroup.add(centerRing);

    const centerTurquoise = new THREE.Mesh(
      new THREE.CylinderGeometry(0.62, 0.62, 0.07, 12),
      turquoiseMat
    );
    medallionGroup.add(centerTurquoise);

    const centerJewel = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.28, 0),
      goldMat
    );
    centerJewel.scale.set(1, 0.35, 1);
    centerJewel.position.y = 0.05;
    medallionGroup.add(centerJewel);

    this.group.add(medallionGroup);
  }

  private buildCornerPiers(
    collision: CollisionWorld,
    stonePierMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    darkStoneMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): void {
    const signs = [-1, 1];

    for (const sx of signs) {
      for (const sz of signs) {
        const cx = sx * 6.7;
        const cz = sz * 6.7;

        // Register solid non-walkable BoxCollider for each corner pier ([4.2, 9.2] in ±X, ±Z)
        collision.addBox({
          id: `monument_pier_${sx > 0 ? 'E' : 'W'}${sz > 0 ? 'S' : 'N'}`,
          minX: sx > 0 ? 4.2 : -9.2,
          maxX: sx > 0 ? 9.2 : -4.2,
          minZ: sz > 0 ? 4.2 : -9.2,
          maxZ: sz > 0 ? 9.2 : -4.2,
          bottomY: 0.75,
          topY: 15.8,
          walkable: false,
          tag: 'wall'
        });

        // Stepped pier pedestal base (y = 0.75 to 1.65)
        const base1 = new THREE.Mesh(
          new THREE.BoxGeometry(5.35, 0.45, 5.35),
          darkStoneMat
        );
        base1.position.set(cx, 0.75 + 0.225, cz);
        base1.castShadow = true;
        base1.receiveShadow = true;
        this.group.add(base1);

        const base2 = new THREE.Mesh(
          new THREE.BoxGeometry(5.18, 0.45, 5.18),
          stoneTrimMat
        );
        base2.position.set(cx, 1.2 + 0.225, cz);
        base2.castShadow = true;
        base2.receiveShadow = true;
        this.group.add(base2);

        // Main massive pier shaft (5.0 x 12.35 x 5.0, from y = 1.65 to 14.0)
        const pierBody = new THREE.Mesh(
          new THREE.BoxGeometry(5.0, 12.35, 5.0),
          stonePierMat
        );
        pierBody.position.set(cx, 1.65 + 12.35 * 0.5, cz);
        pierBody.castShadow = true;
        pierBody.receiveShadow = true;
        this.group.add(pierBody);

        // Horizontal stringcourses & golden lotus bands at y = 4.8 and y = 8.5
        for (const bandY of [4.8, 8.5, 12.2]) {
          const band = new THREE.Mesh(
            new THREE.BoxGeometry(5.26, 0.28, 5.26),
            stoneTrimMat
          );
          band.position.set(cx, bandY, cz);
          band.castShadow = true;
          this.group.add(band);

          const goldLine = new THREE.Mesh(
            new THREE.BoxGeometry(5.3, 0.08, 5.3),
            goldMat
          );
          goldLine.position.set(cx, bandY + 0.16, cz);
          this.group.add(goldLine);
        }

        // Decorative recessed niche frames on outer faces of each pier
        const nicheFrameZ = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 4.6, 5.12),
          stoneTrimMat
        );
        nicheFrameZ.position.set(cx, 5.2, cz);
        this.group.add(nicheFrameZ);

        const nicheGoldZ = new THREE.Mesh(
          new THREE.BoxGeometry(1.7, 3.9, 5.18),
          goldMat
        );
        nicheGoldZ.position.set(cx, 5.2, cz);
        this.group.add(nicheGoldZ);

        const nicheFrameX = new THREE.Mesh(
          new THREE.BoxGeometry(5.12, 4.6, 2.4),
          stoneTrimMat
        );
        nicheFrameX.position.set(cx, 5.2, cz);
        this.group.add(nicheFrameX);

        const nicheGoldX = new THREE.Mesh(
          new THREE.BoxGeometry(5.18, 3.9, 1.7),
          goldMat
        );
        nicheGoldX.position.set(cx, 5.2, cz);
        this.group.add(nicheGoldX);

        // Inner passageway wall lantern sconce facing the central crossroads
        const sconcePos = new THREE.Vector3(sx * 4.15, 4.2, sz * 4.15);
        this.addOrnamentalLantern(sconcePos, goldMat, lanternGlowMat, 1.15);
      }
    }
  }

  private buildFlankingColumns(
    stoneTrimMat: THREE.Material,
    darkStoneMat: THREE.Material,
    goldMat: THREE.Material
  ): void {
    // Twin cylindrical columns with lotus capitals and tiered pedestals on all 4 facades
    // Placed along the outer face (±9.35) of each pier, flanking the arch opening at ±4.65 and ±8.75
    const columnOffsets = [-8.75, -4.65, 4.65, 8.75];
    const facadePositions: Array<{ x: number; z: number }> = [];

    for (const offset of columnOffsets) {
      // North (-Z) and South (+Z) facades
      facadePositions.push({ x: offset, z: 9.35 });
      facadePositions.push({ x: offset, z: -9.35 });
      // East (+X) and West (-X) facades
      facadePositions.push({ x: 9.35, z: offset });
      facadePositions.push({ x: -9.35, z: offset });
    }

    const pedestalGeom = new THREE.BoxGeometry(0.95, 1.1, 0.95);
    const plinthRingGeom = new THREE.CylinderGeometry(0.44, 0.52, 0.3, 14);
    const shaftGeom = new THREE.CylinderGeometry(0.34, 0.4, 6.4, 16);
    const neckRingGeom = new THREE.CylinderGeometry(0.42, 0.36, 0.22, 16);
    const lotusCapGeom = new THREE.CylinderGeometry(0.62, 0.38, 0.55, 12);
    const abacusGeom = new THREE.BoxGeometry(1.1, 0.24, 1.1);

    for (const pos of facadePositions) {
      const colGroup = new THREE.Group();
      colGroup.position.set(pos.x, 0.75, pos.z);

      const pedestal = new THREE.Mesh(pedestalGeom, darkStoneMat);
      pedestal.position.y = 0.55;
      pedestal.castShadow = true;
      pedestal.receiveShadow = true;
      colGroup.add(pedestal);

      const plinthRing = new THREE.Mesh(plinthRingGeom, goldMat);
      plinthRing.position.y = 1.25;
      colGroup.add(plinthRing);

      const shaft = new THREE.Mesh(shaftGeom, stoneTrimMat);
      shaft.position.y = 1.4 + 3.2;
      shaft.castShadow = true;
      shaft.receiveShadow = true;
      colGroup.add(shaft);

      // Decorative golden shaft rings
      for (const ry of [2.8, 5.2, 7.4]) {
        const ring = new THREE.Mesh(neckRingGeom, goldMat);
        ring.position.y = ry;
        colGroup.add(ring);
      }

      const lotusCap = new THREE.Mesh(lotusCapGeom, goldMat);
      lotusCap.position.y = 8.05;
      lotusCap.castShadow = true;
      colGroup.add(lotusCap);

      const abacus = new THREE.Mesh(abacusGeom, stoneTrimMat);
      abacus.position.y = 8.42;
      abacus.castShadow = true;
      colGroup.add(abacus);

      this.group.add(colGroup);
    }
  }

  private buildGrandArchesAndPediments(
    stonePierMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    pedimentMat: THREE.Material,
    goldMat: THREE.Material
  ): void {
    // Extruded semicircular arch spandrel spanning [-4.2, 4.2] above y = 8.5
    const archDepth = 5.0;
    const archShape = new THREE.Shape();
    archShape.moveTo(-4.3, 0);
    archShape.lineTo(-4.2, 0);
    // Semicircular inner arch vault from (-4.2, 0) to (4.2, 0) with radius 4.2
    archShape.absarc(0, 0, 4.2, Math.PI, 0, true);
    archShape.lineTo(4.3, 0);
    archShape.lineTo(4.3, 5.5);
    archShape.lineTo(-4.3, 5.5);
    archShape.closePath();

    const archGeom = new THREE.ExtrudeGeometry(archShape, {
      depth: archDepth,
      bevelEnabled: false,
      curveSegments: 28
    });
    // Center geometry along Z [-archDepth/2, +archDepth/2]
    archGeom.translate(0, 0, -archDepth * 0.5);

    // Normalize UVs so stone wall texture maps cleanly
    const posAttr = archGeom.attributes.position;
    const uvAttr = archGeom.attributes.uv;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const vz = posAttr.getZ(i);
      uvAttr.setXY(i, (vx + vz + 4.5) * 0.12, vy * 0.18);
    }
    uvAttr.needsUpdate = true;

    // Golden semicircular archivolt molding along the rim of each arch
    const archivoltGeom = new THREE.TorusGeometry(4.22, 0.16, 10, 32, Math.PI);

    // Triangular Lao Gable Pediment geometry (y = 10.2 to 13.8) with [0..1] UVs
    const pedimentPanelGeom = this.createTriangularPedimentGeometry(9.6, 3.6, 0.26);

    const facades = [
      { name: 'South', x: 0, z: 6.7, rotY: 0 },
      { name: 'North', x: 0, z: -6.7, rotY: Math.PI },
      { name: 'East', x: 6.7, z: 0, rotY: Math.PI * 0.5 },
      { name: 'West', x: -6.7, z: 0, rotY: -Math.PI * 0.5 }
    ];

    for (const f of facades) {
      const facadeGroup = new THREE.Group();
      facadeGroup.position.set(f.x, 8.5, f.z);
      facadeGroup.rotation.y = f.rotY;

      // Solid semicircular arch vault connecting the piers
      const archMesh = new THREE.Mesh(archGeom, stonePierMat);
      archMesh.castShadow = true;
      archMesh.receiveShadow = true;
      facadeGroup.add(archMesh);

      // Outer & inner golden archivolts
      for (const zOff of [-2.48, 2.48]) {
        const ring = new THREE.Mesh(archivoltGeom, goldMat);
        ring.position.set(0, 0, zOff);
        facadeGroup.add(ring);
      }

      // Sculpted golden Kala/Lotus Keystone at the crown of the arch (y = 8.5 + 4.2 = 12.7)
      const keystone = new THREE.Mesh(
        new THREE.ConeGeometry(0.45, 1.1, 6),
        goldMat
      );
      keystone.position.set(0, 4.15, 2.62);
      keystone.rotation.z = Math.PI;
      facadeGroup.add(keystone);

      // Prominent Triangular Lao Gable Pediment above the arch (y = 10.2 to 13.8 -> local y = 1.7 to 5.3)
      const pedimentBase = new THREE.Mesh(
        new THREE.BoxGeometry(10.2, 0.36, 0.72),
        stoneTrimMat
      );
      pedimentBase.position.set(0, 1.7, 2.72);
      pedimentBase.castShadow = true;
      facadeGroup.add(pedimentBase);

      // Textured relief pediment panel (textures.get('patuxay_arch_pediment', 1, 1))
      const pedimentRelief = new THREE.Mesh(pedimentPanelGeom, pedimentMat);
      pedimentRelief.position.set(0, 1.85, 2.75);
      pedimentRelief.castShadow = true;
      facadeGroup.add(pedimentRelief);

      // Sculpted sandstone & gold Naga / lotus gable raking rafters
      const slopeLength = Math.hypot(4.9, 3.6);
      const slopeAngle = Math.atan2(3.6, 4.9);

      for (const side of [-1, 1]) {
        const rafterStone = new THREE.Mesh(
          new THREE.BoxGeometry(slopeLength, 0.32, 0.48),
          stoneTrimMat
        );
        rafterStone.position.set(side * 2.45, 1.85 + 1.8, 2.78);
        rafterStone.rotation.z = -side * slopeAngle;
        rafterStone.castShadow = true;
        facadeGroup.add(rafterStone);

        const rafterGold = new THREE.Mesh(
          new THREE.BoxGeometry(slopeLength + 0.2, 0.16, 0.56),
          goldMat
        );
        rafterGold.position.set(side * 2.45, 1.85 + 1.94, 2.82);
        rafterGold.rotation.z = -side * slopeAngle;
        facadeGroup.add(rafterGold);

        // Uplifted Naga tail/head finial at each lower gable corner
        const nagaHead = new THREE.Mesh(
          new THREE.ConeGeometry(0.28, 1.05, 6),
          goldMat
        );
        nagaHead.position.set(side * 4.95, 2.25, 2.88);
        nagaHead.rotation.z = -side * 0.35;
        facadeGroup.add(nagaHead);
      }

      // Central apex Chofa spire finial at top of pediment (y = 13.8 -> local y = 5.3)
      const apexSpire = new THREE.Mesh(
        new THREE.ConeGeometry(0.32, 1.35, 8),
        goldMat
      );
      apexSpire.position.set(0, 5.75, 2.86);
      facadeGroup.add(apexSpire);

      this.group.add(facadeGroup);
    }
  }

  private createTriangularPedimentGeometry(
    width: number,
    height: number,
    depth: number
  ): THREE.BufferGeometry {
    const halfW = width * 0.5;
    const shape = new THREE.Shape();
    shape.moveTo(-halfW, 0);
    shape.lineTo(halfW, 0);
    shape.lineTo(0, height);
    shape.closePath();

    const geom = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 2
    });

    const pos = geom.attributes.position;
    const uv = geom.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const u = (pos.getX(i) + halfW) / width;
      const v = pos.getY(i) / height;
      uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    return geom;
  }

  private buildCofferedVaultCeiling(
    ceilingMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): void {
    // Downward-facing coffered ceiling plane at y = 12.8 (16 x 16)
    const ceilingPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 16),
      ceilingMat
    );
    ceilingPlane.position.set(0, 12.8, 0);
    ceilingPlane.rotation.x = Math.PI * 0.5;
    ceilingPlane.receiveShadow = true;
    this.group.add(ceilingPlane);

    // Solid backing slab above the ceiling so no sky leaks from below
    const ceilingBacking = new THREE.Mesh(
      new THREE.BoxGeometry(16.6, 0.5, 16.6),
      stoneTrimMat
    );
    ceilingBacking.position.set(0, 13.1, 0);
    ceilingBacking.castShadow = true;
    this.group.add(ceilingBacking);

    // Ornate 3D coffered ribs & golden lotus bosses across the ceiling grid
    const ribOffsets = [-4.2, -1.4, 1.4, 4.2];
    for (const offset of ribOffsets) {
      const ribX = new THREE.Mesh(
        new THREE.BoxGeometry(16.0, 0.22, 0.28),
        goldMat
      );
      ribX.position.set(0, 12.72, offset);
      this.group.add(ribX);

      const ribZ = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.22, 16.0),
        goldMat
      );
      ribZ.position.set(offset, 12.72, 0);
      this.group.add(ribZ);
    }

    // Central suspended golden lotus chandelier at (0, 12.3, 0)
    const chandelierGroup = new THREE.Group();
    chandelierGroup.position.set(0, 12.65, 0);

    const canopyRosette = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 0.9, 0.28, 12),
      goldMat
    );
    chandelierGroup.add(canopyRosette);

    const pendantBulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 14, 12),
      lanternGlowMat
    );
    pendantBulb.position.y = -0.45;
    chandelierGroup.add(pendantBulb);

    const pendantFinial = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 0.55, 8),
      goldMat
    );
    pendantFinial.position.y = -0.9;
    pendantFinial.rotation.z = Math.PI;
    chandelierGroup.add(pendantFinial);

    this.group.add(chandelierGroup);

    // Warm PointLights under the central vault and archways
    const centerVaultLight = new THREE.PointLight(0xffb84d, 1.5, 26, 1.4);
    centerVaultLight.position.set(0, 11.4, 0);
    this.group.add(centerVaultLight);
    this.nightLights.push(centerVaultLight);

    // 4 archway warm uplights
    const archLightCoords = [
      new THREE.Vector3(0, 6.5, 6.8),
      new THREE.Vector3(0, 6.5, -6.8),
      new THREE.Vector3(6.8, 6.5, 0),
      new THREE.Vector3(-6.8, 6.5, 0)
    ];
    for (const pos of archLightCoords) {
      const light = new THREE.PointLight(0xffaa3b, 1.1, 20, 1.5);
      light.position.copy(pos);
      this.group.add(light);
      this.nightLights.push(light);
    }
  }

  private buildEntablatureAndRooftop(
    collision: CollisionWorld,
    corniceMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    darkStoneMat: THREE.Material,
    floorTileMat: THREE.Material,
    goldMat: THREE.Material
  ): void {
    // Entablature frieze block (y = 13.8 to 15.0) mapped with patuxay_cornice_frieze
    const friezeBlock = new THREE.Mesh(
      new THREE.BoxGeometry(19.2, 1.25, 19.2),
      corniceMat
    );
    friezeBlock.position.set(0, 14.42, 0);
    friezeBlock.castShadow = true;
    friezeBlock.receiveShadow = true;
    this.group.add(friezeBlock);

    // Projecting multi-tiered lotus cornice (y = 15.0 to 16.0)
    const corniceTier1 = new THREE.Mesh(
      new THREE.BoxGeometry(20.6, 0.45, 20.6),
      stoneTrimMat
    );
    corniceTier1.position.set(0, 15.25, 0);
    corniceTier1.castShadow = true;
    corniceTier1.receiveShadow = true;
    this.group.add(corniceTier1);

    const corniceGoldBelt = new THREE.Mesh(
      new THREE.BoxGeometry(21.4, 0.18, 21.4),
      goldMat
    );
    corniceGoldBelt.position.set(0, 15.55, 0);
    this.group.add(corniceGoldBelt);

    const terraceDeckSlab = new THREE.Mesh(
      new THREE.BoxGeometry(22.6, 0.42, 22.6),
      stoneTrimMat
    );
    terraceDeckSlab.position.set(0, 15.79, 0);
    terraceDeckSlab.castShadow = true;
    terraceDeckSlab.receiveShadow = true;
    this.group.add(terraceDeckSlab);

    // Sculpted rounded lotus-petal bolsters around all 4 cornice edges
    const bolsterGeom = new THREE.CylinderGeometry(0.24, 0.14, 0.65, 8);
    for (let i = -9.6; i <= 9.6; i += 1.6) {
      for (const sign of [-1, 1]) {
        const bolsterNS = new THREE.Mesh(bolsterGeom, goldMat);
        bolsterNS.position.set(i, 15.32, sign * 10.35);
        bolsterNS.rotation.x = sign * 0.25;
        this.group.add(bolsterNS);

        const bolsterEW = new THREE.Mesh(bolsterGeom, goldMat);
        bolsterEW.position.set(sign * 10.35, 15.32, i);
        bolsterEW.rotation.z = -sign * 0.25;
        this.group.add(bolsterEW);
      }
    }

    // Rooftop Viewing Terrace paving at y = 16.0
    const rooftopPaving = new THREE.Mesh(
      new THREE.BoxGeometry(22.0, 0.03, 22.0),
      floorTileMat
    );
    rooftopPaving.position.set(0, 16.0, 0);
    rooftopPaving.receiveShadow = true;
    this.group.add(rooftopPaving);

    // Walkable Rooftop Viewing Terrace collider at topY = 16.0
    collision.addBox({
      id: 'monument_rooftop_terrace',
      minX: -11.2,
      maxX: 11.2,
      minZ: -11.2,
      maxZ: 11.2,
      bottomY: 14.5,
      topY: 16.0,
      walkable: true,
      tag: 'rooftop'
    });

    // Ornamental Lao crenellated parapet railings around the outer edge (±11.2)
    // Note: Leave an entry gap on the East side (x = +11.2, z in [3.6, 7.2]) for the Cat Climbing Walkway!
    this.buildRooftopParapets(collision, stoneTrimMat, darkStoneMat, goldMat);
  }

  private buildRooftopParapets(
    collision: CollisionWorld,
    stoneTrimMat: THREE.Material,
    darkStoneMat: THREE.Material,
    goldMat: THREE.Material
  ): void {
    const wallY = 16.28;
    const wallH = 0.56;

    // North parapet (-Z)
    const northWall = new THREE.Mesh(
      new THREE.BoxGeometry(22.6, wallH, 0.36),
      stoneTrimMat
    );
    northWall.position.set(0, wallY, -11.15);
    northWall.castShadow = true;
    this.group.add(northWall);

    // South parapet (+Z)
    const southWall = new THREE.Mesh(
      new THREE.BoxGeometry(22.6, wallH, 0.36),
      stoneTrimMat
    );
    southWall.position.set(0, wallY, 11.15);
    southWall.castShadow = true;
    this.group.add(southWall);

    // West parapet (-X)
    const westWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, wallH, 22.6),
      stoneTrimMat
    );
    westWall.position.set(-11.15, wallY, 0);
    westWall.castShadow = true;
    this.group.add(westWall);

    // East parapet (+X) split into two segments to leave a welcoming entry gap at z in [3.6, 7.2]
    // Segment 1: z from -11.15 to 3.6 (length 14.75, center -3.775)
    const eastWallNorth = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, wallH, 14.75),
      stoneTrimMat
    );
    eastWallNorth.position.set(11.15, wallY, -3.775);
    eastWallNorth.castShadow = true;
    this.group.add(eastWallNorth);

    // Segment 2: z from 7.2 to 11.15 (length 3.95, center 9.175)
    const eastWallSouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, wallH, 3.95),
      stoneTrimMat
    );
    eastWallSouth.position.set(11.15, wallY, 9.175);
    eastWallSouth.castShadow = true;
    this.group.add(eastWallSouth);

    // Flame-shaped Sim merlons along the parapet top (y = 16.56 to 16.95)
    const merlonBaseGeom = new THREE.BoxGeometry(0.46, 0.24, 0.26);
    const merlonFlameGeom = new THREE.ConeGeometry(0.26, 0.42, 5);

    for (let t = -10.4; t <= 10.4; t += 1.3) {
      // North & South merlons
      for (const sz of [-11.15, 11.15]) {
        const mb = new THREE.Mesh(merlonBaseGeom, darkStoneMat);
        mb.position.set(t, 16.68, sz);
        this.group.add(mb);

        const mf = new THREE.Mesh(merlonFlameGeom, goldMat);
        mf.position.set(t, 16.98, sz);
        this.group.add(mf);
      }

      // West merlons
      const mbW = new THREE.Mesh(merlonBaseGeom, darkStoneMat);
      mbW.rotation.y = Math.PI * 0.5;
      mbW.position.set(-11.15, 16.68, t);
      this.group.add(mbW);

      const mfW = new THREE.Mesh(merlonFlameGeom, goldMat);
      mfW.position.set(-11.15, 16.98, t);
      this.group.add(mfW);

      // East merlons (skip ramp entry gap z in [3.4, 7.4])
      if (t < 3.4 || t > 7.4) {
        const mbE = new THREE.Mesh(merlonBaseGeom, darkStoneMat);
        mbE.rotation.y = Math.PI * 0.5;
        mbE.position.set(11.15, 16.68, t);
        this.group.add(mbE);

        const mfE = new THREE.Mesh(merlonFlameGeom, goldMat);
        mfE.position.set(11.15, 16.98, t);
        this.group.add(mfE);
      }
    }

    // Non-walkable safety border colliders at ±11.3 (topY: 16.7, bottomY: 16.0, walkable: false)
    collision.addBox({
      id: 'rooftop_parapet_north',
      minX: -11.4,
      maxX: 11.4,
      minZ: -11.4,
      maxZ: -11.15,
      bottomY: 16.0,
      topY: 16.7,
      walkable: false,
      tag: 'wall'
    });
    collision.addBox({
      id: 'rooftop_parapet_south',
      minX: -11.4,
      maxX: 11.4,
      minZ: 11.15,
      maxZ: 11.4,
      bottomY: 16.0,
      topY: 16.7,
      walkable: false,
      tag: 'wall'
    });
    collision.addBox({
      id: 'rooftop_parapet_west',
      minX: -11.4,
      maxX: -11.15,
      minZ: -11.4,
      maxZ: 11.4,
      bottomY: 16.0,
      topY: 16.7,
      walkable: false,
      tag: 'wall'
    });
    collision.addBox({
      id: 'rooftop_parapet_east_north',
      minX: 11.15,
      maxX: 11.4,
      minZ: -11.4,
      maxZ: 3.6,
      bottomY: 16.0,
      topY: 16.7,
      walkable: false,
      tag: 'wall'
    });
    collision.addBox({
      id: 'rooftop_parapet_east_south',
      minX: 11.15,
      maxX: 11.4,
      minZ: 7.2,
      maxZ: 11.4,
      bottomY: 16.0,
      topY: 16.7,
      walkable: false,
      tag: 'wall'
    });
  }

  private buildRooftopTowers(
    collision: CollisionWorld,
    stonePierMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    laoRoofMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): void {
    // 1. Four Corner Towers at (±7.4, 16.0, ±7.4) rising to y = 22.5
    const signs = [-1, 1];
    for (const sx of signs) {
      for (const sz of signs) {
        const cx = sx * 7.4;
        const cz = sz * 7.4;

        // Register footprint [±5.6 to ±9.2] as walkable: false from bottomY: 16.0 to topY: 22.0
        collision.addBox({
          id: `rooftop_corner_tower_${sx > 0 ? 'E' : 'W'}${sz > 0 ? 'S' : 'N'}`,
          minX: cx - 1.8,
          maxX: cx + 1.8,
          minZ: cz - 1.8,
          maxZ: cz + 1.8,
          bottomY: 16.0,
          topY: 22.0,
          walkable: false,
          tag: 'wall'
        });

        const tower = this.createCornerTowerMesh(
          stonePierMat,
          stoneTrimMat,
          laoRoofMat,
          goldMat,
          lanternGlowMat
        );
        tower.position.set(cx, 16.0, cz);
        this.group.add(tower);
      }
    }

    // 2. Grand Central Multi-Tiered Lotus Tower at (0, 16.0, 0) ([-3.2, 3.2]) rising to y = 28.0
    collision.addBox({
      id: 'rooftop_central_tower',
      minX: -3.2,
      maxX: 3.2,
      minZ: -3.2,
      maxZ: 3.2,
      bottomY: 16.0,
      topY: 28.0,
      walkable: false,
      tag: 'wall'
    });

    const centralTower = this.createCentralTowerMesh(
      stonePierMat,
      stoneTrimMat,
      laoRoofMat,
      goldMat,
      lanternGlowMat
    );
    centralTower.position.set(0, 16.0, 0);
    this.group.add(centralTower);

    // Warm rooftop beacon PointLight on the central tower
    const rooftopLight = new THREE.PointLight(0xffc257, 1.4, 28, 1.4);
    rooftopLight.position.set(0, 21.5, 0);
    this.group.add(rooftopLight);
    this.nightLights.push(rooftopLight);
  }

  private createCornerTowerMesh(
    stonePierMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    laoRoofMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): THREE.Group {
    const g = new THREE.Group();

    // Base plinth (height 0.45)
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.45, 3.6),
      stoneTrimMat
    );
    base.position.y = 0.225;
    base.castShadow = true;
    base.receiveShadow = true;
    g.add(base);

    // Main square tower body (3.2 x 2.7 x 3.2)
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 2.7, 3.2),
      stonePierMat
    );
    body.position.y = 0.45 + 1.35;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    // Glowing arched windows on all 4 sides
    const winFrameZ = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 1.65, 3.32),
      goldMat
    );
    winFrameZ.position.y = 1.8;
    g.add(winFrameZ);

    const winGlowZ = new THREE.Mesh(
      new THREE.BoxGeometry(0.76, 1.35, 3.38),
      lanternGlowMat
    );
    winGlowZ.position.y = 1.8;
    g.add(winGlowZ);

    const winFrameX = new THREE.Mesh(
      new THREE.BoxGeometry(3.32, 1.65, 1.1),
      goldMat
    );
    winFrameX.position.y = 1.8;
    g.add(winFrameX);

    const winGlowX = new THREE.Mesh(
      new THREE.BoxGeometry(3.38, 1.35, 0.76),
      lanternGlowMat
    );
    winGlowX.position.y = 1.8;
    g.add(winGlowX);

    // 3-tiered telescoping Lao roof (y = 3.15 to 4.95)
    const roofTiers = [
      { y: 3.45, rBottom: 2.75, rTop: 1.85, h: 0.65 },
      { y: 4.1, rBottom: 2.15, rTop: 1.3, h: 0.6 },
      { y: 4.68, rBottom: 1.55, rTop: 0.75, h: 0.55 }
    ];

    for (const rt of roofTiers) {
      const roof = new THREE.Mesh(
        new THREE.CylinderGeometry(rt.rTop, rt.rBottom, rt.h, 4),
        laoRoofMat
      );
      roof.rotation.y = Math.PI * 0.25;
      roof.position.y = rt.y;
      roof.castShadow = true;
      g.add(roof);

      const eavesRim = new THREE.Mesh(
        new THREE.BoxGeometry(rt.rBottom * 1.48, 0.1, rt.rBottom * 1.48),
        goldMat
      );
      eavesRim.position.y = rt.y - rt.h * 0.45;
      g.add(eavesRim);
    }

    // Golden stupa bell & spire reaching y = 6.5 (world y = 22.5)
    const stupaBell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.58, 0.65, 12),
      goldMat
    );
    stupaBell.position.y = 5.25;
    g.add(stupaBell);

    const spireCone = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 1.05, 12),
      goldMat
    );
    spireCone.position.y = 6.02;
    spireCone.castShadow = true;
    g.add(spireCone);

    return g;
  }

  private createCentralTowerMesh(
    stonePierMat: THREE.Material,
    stoneTrimMat: THREE.Material,
    laoRoofMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): THREE.Group {
    const g = new THREE.Group();

    // Multi-stepped pedestal (y = 0 to 0.9)
    const base1 = new THREE.Mesh(
      new THREE.BoxGeometry(6.4, 0.45, 6.4),
      stoneTrimMat
    );
    base1.position.y = 0.225;
    base1.castShadow = true;
    base1.receiveShadow = true;
    g.add(base1);

    const base2 = new THREE.Mesh(
      new THREE.BoxGeometry(5.9, 0.45, 5.9),
      goldMat
    );
    base2.position.y = 0.675;
    base2.castShadow = true;
    g.add(base2);

    // Main central pavilion body (5.4 x 3.8 x 5.4, y = 0.9 to 4.7)
    const mainBody = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 3.8, 5.4),
      stonePierMat
    );
    mainBody.position.y = 0.9 + 1.9;
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    g.add(mainBody);

    // Arched windows & mini-pediments on all 4 sides of central tower
    const archWinZ = new THREE.Mesh(
      new THREE.BoxGeometry(1.9, 2.5, 5.56),
      goldMat
    );
    archWinZ.position.y = 2.65;
    g.add(archWinZ);

    const archGlowZ = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 2.1, 5.64),
      lanternGlowMat
    );
    archGlowZ.position.y = 2.65;
    g.add(archGlowZ);

    const archWinX = new THREE.Mesh(
      new THREE.BoxGeometry(5.56, 2.5, 1.9),
      goldMat
    );
    archWinX.position.y = 2.65;
    g.add(archWinX);

    const archGlowX = new THREE.Mesh(
      new THREE.BoxGeometry(5.64, 2.1, 1.4),
      lanternGlowMat
    );
    archGlowX.position.y = 2.65;
    g.add(archGlowX);

    // Multi-tiered Lao roof tiers (y = 4.7 to 7.4)
    const tiers = [
      { y: 5.1, rB: 4.5, rT: 3.2, h: 0.85 },
      { y: 5.95, rB: 3.6, rT: 2.4, h: 0.8 },
      { y: 6.75, rB: 2.7, rT: 1.65, h: 0.75 }
    ];
    for (const t of tiers) {
      const roof = new THREE.Mesh(
        new THREE.CylinderGeometry(t.rT, t.rB, t.h, 4),
        laoRoofMat
      );
      roof.rotation.y = Math.PI * 0.25;
      roof.position.y = t.y;
      roof.castShadow = true;
      g.add(roof);

      const trim = new THREE.Mesh(
        new THREE.BoxGeometry(t.rB * 1.46, 0.14, t.rB * 1.46),
        goldMat
      );
      trim.position.y = t.y - t.h * 0.45;
      g.add(trim);
    }

    // Upper Lantern Pavilion Cupola & Curved Lotus Dome (y = 7.1 to 9.2)
    const lanternCupola = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.55, 1.25, 8),
      lanternGlowMat
    );
    lanternCupola.position.y = 7.65;
    g.add(lanternCupola);

    const lotusDome = new THREE.Mesh(
      new THREE.SphereGeometry(1.45, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.65),
      goldMat
    );
    lotusDome.position.y = 8.15;
    lotusDome.castShadow = true;
    g.add(lotusDome);

    // Tall Golden Finial Spire with Chatra parasol rings reaching y = 12.0 (world y = 28.0)
    const spireShaft = new THREE.Mesh(
      new THREE.ConeGeometry(0.42, 3.3, 14),
      goldMat
    );
    spireShaft.position.y = 10.35;
    spireShaft.castShadow = true;
    g.add(spireShaft);

    for (let i = 0; i < 5; i++) {
      const ringY = 9.4 + i * 0.5;
      const ringR = 0.68 - i * 0.1;
      const parasol = new THREE.Mesh(
        new THREE.TorusGeometry(ringR, 0.045, 8, 18),
        goldMat
      );
      parasol.rotation.x = Math.PI * 0.5;
      parasol.position.y = ringY;
      g.add(parasol);
    }

    return g;
  }

  private buildCatClimbingWalkway(
    collision: CollisionWorld,
    stoneTrimMat: THREE.Material,
    darkStoneMat: THREE.Material,
    bambooMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): void {
    // Visible, charming exterior/side Cat Bamboo & Stone Stepped Climbing Walkway / Ramps
    // wrapping up the South-East & East side of the monument (x: 9.2 to 11.2)
    // leading from y = 0.75 all the way to the rooftop entry gap at y = 16.0!

    // Entry Landing 0 on the SE Plinth (x: 9.2..11.5, z: 6.8..9.8, y = 0.75)
    this.addOrnamentalLantern(new THREE.Vector3(10.8, 0.75, 7.6), goldMat, lanternGlowMat, 1.35);

    // RAMP 1: East side lower run heading North (-z), z: 6.8 -> -6.8, y: 0.75 -> 4.55
    collision.addRamp({
      id: 'cat_climb_ramp_1',
      minX: 9.2,
      maxX: 11.3,
      minZ: -6.8,
      maxZ: 6.8,
      direction: '-z',
      startY: 0.75,
      endY: 4.55,
      tag: 'ramp'
    });
    this.buildSteppedRampMesh(
      9.2,
      11.2,
      -6.8,
      6.8,
      0.75,
      4.55,
      '-z',
      stoneTrimMat,
      bambooMat,
      goldMat
    );

    // LANDING 1: North-East turn platform (x: 9.2..12.2, z: -9.8..-6.8, topY: 4.55)
    collision.addBox({
      id: 'cat_climb_landing_1',
      minX: 9.2,
      maxX: 12.2,
      minZ: -9.8,
      maxZ: -6.8,
      bottomY: 4.15,
      topY: 4.55,
      walkable: true,
      tag: 'ledge'
    });
    this.buildLandingPlatformMesh(
      9.2,
      12.2,
      -9.8,
      -6.8,
      4.55,
      stoneTrimMat,
      darkStoneMat,
      bambooMat,
      goldMat,
      lanternGlowMat
    );

    // RAMP 2: East side middle-low run heading South (+z), z: -6.8 -> 6.8, y: 4.55 -> 8.35
    collision.addRamp({
      id: 'cat_climb_ramp_2',
      minX: 9.2,
      maxX: 11.8,
      minZ: -6.8,
      maxZ: 6.8,
      direction: '+z',
      startY: 4.55,
      endY: 8.35,
      tag: 'ramp'
    });
    this.buildSteppedRampMesh(
      9.6,
      11.6,
      -6.8,
      6.8,
      4.55,
      8.35,
      '+z',
      stoneTrimMat,
      bambooMat,
      goldMat
    );

    // LANDING 2: South-East turn platform (x: 9.2..12.2, z: 6.8..9.8, topY: 8.35)
    collision.addBox({
      id: 'cat_climb_landing_2',
      minX: 9.2,
      maxX: 12.2,
      minZ: 6.8,
      maxZ: 9.8,
      bottomY: 7.95,
      topY: 8.35,
      walkable: true,
      tag: 'ledge'
    });
    this.buildLandingPlatformMesh(
      9.2,
      12.2,
      6.8,
      9.8,
      8.35,
      stoneTrimMat,
      darkStoneMat,
      bambooMat,
      goldMat,
      lanternGlowMat
    );

    // RAMP 3: East side middle-high run heading North (-z), z: 6.8 -> -6.8, y: 8.35 -> 12.15
    collision.addRamp({
      id: 'cat_climb_ramp_3',
      minX: 9.2,
      maxX: 11.4,
      minZ: -6.8,
      maxZ: 6.8,
      direction: '-z',
      startY: 8.35,
      endY: 12.15,
      tag: 'ramp'
    });
    this.buildSteppedRampMesh(
      9.2,
      11.2,
      -6.8,
      6.8,
      8.35,
      12.15,
      '-z',
      stoneTrimMat,
      bambooMat,
      goldMat
    );

    // LANDING 3: North-East upper turn platform (x: 9.2..12.2, z: -9.8..-6.8, topY: 12.15)
    collision.addBox({
      id: 'cat_climb_landing_3',
      minX: 9.2,
      maxX: 12.2,
      minZ: -9.8,
      maxZ: -6.8,
      bottomY: 11.75,
      topY: 12.15,
      walkable: true,
      tag: 'ledge'
    });
    this.buildLandingPlatformMesh(
      9.2,
      12.2,
      -9.8,
      -6.8,
      12.15,
      stoneTrimMat,
      darkStoneMat,
      bambooMat,
      goldMat,
      lanternGlowMat
    );

    // RAMP 4: East side final summit run heading South (+z), z: -6.8 -> 4.0, y: 12.15 -> 16.0
    collision.addRamp({
      id: 'cat_climb_ramp_4',
      minX: 9.2,
      maxX: 11.8,
      minZ: -6.8,
      maxZ: 4.0,
      direction: '+z',
      startY: 12.15,
      endY: 16.0,
      tag: 'ramp'
    });
    this.buildSteppedRampMesh(
      9.5,
      11.5,
      -6.8,
      4.0,
      12.15,
      16.0,
      '+z',
      stoneTrimMat,
      bambooMat,
      goldMat
    );

    // LANDING 4: Rooftop East Entry Bridge (x: 9.2..11.8, z: 4.0..7.2, topY: 16.0)
    // Connects seamlessly through the East parapet opening (z: 3.6..7.2) onto the rooftop terrace!
    collision.addBox({
      id: 'cat_climb_rooftop_bridge',
      minX: 9.2,
      maxX: 11.8,
      minZ: 4.0,
      maxZ: 7.2,
      bottomY: 15.5,
      topY: 16.0,
      walkable: true,
      tag: 'rooftop'
    });
    this.buildLandingPlatformMesh(
      9.2,
      11.8,
      4.0,
      7.2,
      16.0,
      stoneTrimMat,
      darkStoneMat,
      bambooMat,
      goldMat,
      lanternGlowMat
    );
  }

  private buildSteppedRampMesh(
    minX: number,
    maxX: number,
    minZ: number,
    maxZ: number,
    startY: number,
    endY: number,
    direction: '+z' | '-z',
    stoneMat: THREE.Material,
    bambooMat: THREE.Material,
    goldMat: THREE.Material
  ): void {
    const width = maxX - minX;
    const length = maxZ - minZ;
    const rise = endY - startY;
    const centerX = (minX + maxX) * 0.5;
    const centerZ = (minZ + maxZ) * 0.5;
    const centerY = (startY + endY) * 0.5;

    const rampGroup = new THREE.Group();

    // Sloped bamboo & stone stringer carriage
    const hypot = Math.hypot(length, rise);
    const slopeAngle = Math.atan2(rise, length) * (direction === '+z' ? -1 : 1);

    const carriage = new THREE.Mesh(
      new THREE.BoxGeometry(width, 0.22, hypot),
      bambooMat
    );
    carriage.position.set(centerX, centerY - 0.12, centerZ);
    carriage.rotation.x = slopeAngle;
    carriage.castShadow = true;
    carriage.receiveShadow = true;
    rampGroup.add(carriage);

    // Outer bamboo handrail along the ramp
    const rail = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.055, hypot, 8),
      goldMat
    );
    rail.rotation.x = Math.PI * 0.5 + slopeAngle;
    rail.position.set(maxX - 0.08, centerY + 0.42, centerZ);
    rampGroup.add(rail);

    // Individual stone & bamboo treads for tactile visual detail
    const stepCount = 16;
    const stepLen = length / stepCount;
    for (let i = 0; i < stepCount; i++) {
      const t = (i + 0.5) / stepCount;
      const z = direction === '+z' ? minZ + t * length : maxZ - t * length;
      const y = startY + t * rise;

      const tread = new THREE.Mesh(
        new THREE.BoxGeometry(width - 0.08, 0.1, stepLen * 0.92),
        i % 2 === 0 ? stoneMat : bambooMat
      );
      tread.position.set(centerX, y - 0.05, z);
      tread.castShadow = true;
      tread.receiveShadow = true;
      rampGroup.add(tread);
    }

    this.group.add(rampGroup);
  }

  private buildLandingPlatformMesh(
    minX: number,
    maxX: number,
    minZ: number,
    maxZ: number,
    topY: number,
    stoneMat: THREE.Material,
    darkStoneMat: THREE.Material,
    bambooMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): void {
    const w = maxX - minX;
    const d = maxZ - minZ;
    const cx = (minX + maxX) * 0.5;
    const cz = (minZ + maxZ) * 0.5;

    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(w, 0.34, d),
      stoneMat
    );
    slab.position.set(cx, topY - 0.17, cz);
    slab.castShadow = true;
    slab.receiveShadow = true;
    this.group.add(slab);

    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.12, 0.08, d + 0.12),
      goldMat
    );
    trim.position.set(cx, topY - 0.04, cz);
    this.group.add(trim);

    // Bamboo support brackets underneath the landing
    const strut = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.16, 1.4, 8),
      bambooMat
    );
    strut.position.set(maxX - 0.25, topY - 0.85, cz);
    strut.rotation.z = 0.35;
    this.group.add(strut);

    // Corner post + warm glowing golden lantern on each landing
    const post = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.75, 0.24),
      darkStoneMat
    );
    post.position.set(maxX - 0.2, topY + 0.375, cz);
    this.group.add(post);

    this.addOrnamentalLantern(
      new THREE.Vector3(maxX - 0.2, topY + 0.78, cz),
      goldMat,
      lanternGlowMat,
      1.1
    );
  }

  private buildStaircasePortals(
    collision: CollisionWorld,
    stoneTrimMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material
  ): void {
    // 1. Upward staircase portal at (6.8, 0.75, 9.6) -> (0, 16.05, 7.5)
    const upEntry = new THREE.Vector3(6.8, 0.75, 9.6);
    collision.addClimbable({
      id: 'monument_stair_up',
      label: 'ຂຶ້ນຂັ້ນໄດສູ່ດາດຟ້າປະຕູໄຊ [F]',
      entryPosition: upEntry,
      targetPosition: new THREE.Vector3(0, 16.05, 7.5),
      radius: 3.0
    });

    // 2. Downward staircase portal at (0, 16.0, 8.8) -> (0, 0.75, 13.8)
    const downEntry = new THREE.Vector3(0, 16.0, 8.8);
    collision.addClimbable({
      id: 'monument_stair_down',
      label: 'ລົງຂັ້ນໄດສູ່ເດີ່ນປະຕູໄຊ [F]',
      entryPosition: downEntry,
      targetPosition: new THREE.Vector3(0, 0.75, 13.8),
      radius: 3.0
    });

    // Build ornate visual portal archways & animated golden beacons at both locations
    this.createPortalShrine(upEntry, stoneTrimMat, goldMat, lanternGlowMat, 0);
    this.createPortalShrine(downEntry, stoneTrimMat, goldMat, lanternGlowMat, Math.PI);
  }

  private createPortalShrine(
    pos: THREE.Vector3,
    stoneMat: THREE.Material,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material,
    phase: number
  ): void {
    const portalGroup = new THREE.Group();
    portalGroup.position.copy(pos);

    // Twin mini-pillars framing the staircase doorway
    for (const sx of [-0.95, 0.95]) {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.18, 2.1, 10),
        stoneMat
      );
      pillar.position.set(sx, 1.05, 0);
      pillar.castShadow = true;
      portalGroup.add(pillar);

      const cap = new THREE.Mesh(
        new THREE.ConeGeometry(0.24, 0.45, 8),
        goldMat
      );
      cap.position.set(sx, 2.28, 0);
      portalGroup.add(cap);
    }

    // Mini Lao gable arch header
    const lintel = new THREE.Mesh(
      new THREE.BoxGeometry(2.3, 0.24, 0.32),
      goldMat
    );
    lintel.position.set(0, 2.05, 0);
    portalGroup.add(lintel);

    const roofApex = new THREE.Mesh(
      new THREE.ConeGeometry(0.65, 0.65, 4),
      goldMat
    );
    roofApex.rotation.y = Math.PI * 0.25;
    roofApex.position.set(0, 2.48, 0);
    portalGroup.add(roofApex);

    // Hanging lantern inside the portal arch
    this.addOrnamentalLantern(
      new THREE.Vector3(pos.x, pos.y + 1.65, pos.z),
      goldMat,
      lanternGlowMat,
      0.9
    );

    // Animated golden floor beacon rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd56b,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.85, 1.05, 28),
      ringMat
    );
    ring.rotation.x = -Math.PI * 0.5;
    ring.position.y = 0.04;
    portalGroup.add(ring);

    const innerRing = new THREE.Mesh(
      new THREE.RingGeometry(0.42, 0.56, 24),
      ringMat
    );
    innerRing.rotation.x = -Math.PI * 0.5;
    innerRing.position.y = 0.05;
    portalGroup.add(innerRing);

    const columnMat = new THREE.MeshBasicMaterial({
      color: 0xffdf80,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const column = new THREE.Mesh(
      new THREE.CylinderGeometry(0.68, 0.85, 1.4, 20, 1, true),
      columnMat
    );
    column.position.y = 0.72;
    portalGroup.add(column);

    this.beacons.push({
      ring,
      innerRing,
      column,
      baseY: 0.04,
      phase
    });

    this.group.add(portalGroup);
  }

  private addOrnamentalLantern(
    pos: THREE.Vector3,
    goldMat: THREE.Material,
    lanternGlowMat: THREE.Material,
    scale = 1.0
  ): void {
    const lantern = new THREE.Group();
    lantern.position.copy(pos);
    lantern.scale.setScalar(scale);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.2, 0.12, 8),
      goldMat
    );
    base.position.y = 0.06;
    lantern.add(base);

    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.12, 0.34, 8),
      lanternGlowMat
    );
    core.position.y = 0.28;
    lantern.add(core);

    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(0.26, 0.24, 8),
      goldMat
    );
    roof.position.y = 0.54;
    lantern.add(roof);

    this.group.add(lantern);
  }

  private buildAtmosphericDust(goldMat: THREE.Material): void {
    const moteGeom = new THREE.OctahedronGeometry(0.065, 0);
    for (let i = 0; i < 28; i++) {
      const mesh = new THREE.Mesh(moteGeom, goldMat);
      const isRooftop = i >= 16;
      const radius = isRooftop ? 2.5 + (i % 6) * 1.2 : 1.5 + (i % 7) * 1.1;
      const angle = (i * 2.39996) % (Math.PI * 2);
      const baseY = isRooftop ? 16.8 + (i % 5) * 1.4 : 1.6 + (i % 8) * 1.1;
      const basePos = new THREE.Vector3(
        Math.cos(angle) * radius,
        baseY,
        Math.sin(angle) * radius
      );
      mesh.position.copy(basePos);
      this.group.add(mesh);

      this.dustParticles.push({
        mesh,
        basePos,
        speed: 0.6 + (i % 5) * 0.22,
        phase: i * 0.75,
        orbitRadius: 0.22 + (i % 4) * 0.08
      });
    }
  }

  public setNightMode(intensity: number): void {
    const clamped = Math.max(0, Math.min(1, intensity));
    this.nightIntensity = clamped;

    // Scale warm PointLights under the archways and on the rooftop
    for (let i = 0; i < this.nightLights.length; i++) {
      const light = this.nightLights[i];
      const baseIntensity = i === 0 ? 2.4 : 1.75;
      light.intensity = 0.35 + clamped * baseIntensity;
    }

    // Adjust emissive glow on golden trim & monument lanterns
    for (const mat of this.emissiveMaterials) {
      mat.emissiveIntensity = 0.14 + clamped * 0.42;
    }
    for (const mat of this.lanternMaterials) {
      mat.emissiveIntensity = 0.75 + clamped * 1.65;
    }
  }

  public update(delta: number, elapsed: number): void {
    // Subtle lantern shimmer
    const shimmer = Math.sin(elapsed * 3.8) * 0.08 + Math.sin(elapsed * 7.3) * 0.04;
    for (const mat of this.lanternMaterials) {
      mat.emissiveIntensity = Math.max(0.4, 0.75 + this.nightIntensity * 1.65 + shimmer);
    }

    // Animate staircase guide beacons
    for (const b of this.beacons) {
      const pulse = 0.5 + 0.5 * Math.sin(elapsed * 2.6 + b.phase);
      b.ring.rotation.z += delta * 0.65;
      b.innerRing.rotation.z -= delta * 1.1;
      b.ring.scale.setScalar(0.94 + pulse * 0.14);
      b.innerRing.scale.setScalar(1.06 - pulse * 0.12);
      b.column.position.y = 0.72 + Math.sin(elapsed * 2.2 + b.phase) * 0.08;
      const colMat = b.column.material as THREE.MeshBasicMaterial;
      colMat.opacity = 0.16 + pulse * 0.16;
    }

    // Animate floating golden dust motes under the arches & around rooftop towers
    for (const p of this.dustParticles) {
      const t = elapsed * p.speed + p.phase;
      p.mesh.position.x = p.basePos.x + Math.cos(t) * p.orbitRadius;
      p.mesh.position.y = p.basePos.y + Math.sin(t * 1.3) * 0.28;
      p.mesh.position.z = p.basePos.z + Math.sin(t) * p.orbitRadius;
      p.mesh.rotation.y = t;
      p.mesh.rotation.x = t * 0.7;
    }
  }
}
