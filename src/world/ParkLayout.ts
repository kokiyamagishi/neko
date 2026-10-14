import * as THREE from 'three';
import { CollisionWorld } from '../core/CollisionWorld';
import { TextureManager } from '../core/TextureManager';

export class ParkLayout {
  public readonly group: THREE.Group;

  constructor(textures: TextureManager, collision: CollisionWorld) {
    this.group = new THREE.Group();
    this.group.name = 'ParkLayout';

    this.buildBaseGroundAndPromenade(textures);
    this.buildNorthMusicalFountainPlaza(textures, collision);
    this.buildFlankingReflectionPonds(textures, collision);
    this.buildManicuredLawns(collision);
    this.buildSouthApproachAndPerimeterWalls(textures, collision);
    this.buildVientianeBoulevardAndSkyline(textures);
  }

  private buildBaseGroundAndPromenade(textures: TextureManager): void {
    // Outer Vientiane city ground plane (asphalt/boulevard base)
    const cityGroundGeo = new THREE.PlaneGeometry(360, 420);
    const cityGroundMat = new THREE.MeshStandardMaterial({
      color: 0x3b3d42,
      roughness: 0.92,
      metalness: 0.04
    });
    const cityGround = new THREE.Mesh(cityGroundGeo, cityGroundMat);
    cityGround.rotation.x = -Math.PI * 0.5;
    cityGround.position.y = -0.06;
    cityGround.receiveShadow = true;
    this.group.add(cityGround);

    // Main Park Ground Plane (160 x 230) in warm cream sandstone pavement
    const parkBaseGeo = new THREE.PlaneGeometry(160, 230);
    const parkStoneTex = textures.get('patuxay_stone_wall', 28, 40);
    const parkBaseMat = new THREE.MeshStandardMaterial({
      color: 0xe6dac3,
      map: parkStoneTex,
      roughness: 0.86,
      metalness: 0.05
    });
    const parkBase = new THREE.Mesh(parkBaseGeo, parkBaseMat);
    parkBase.rotation.x = -Math.PI * 0.5;
    parkBase.position.y = 0.0;
    parkBase.receiveShadow = true;
    this.group.add(parkBase);

    // Axial North-South red-terracotta tiled promenade (z = -95 to z = +95)
    const nsPromenadeTex = textures.get('plaza_terracotta_tiles', 16, 24);
    const nsPromenadeMat = new THREE.MeshStandardMaterial({
      color: 0xd88766,
      map: nsPromenadeTex,
      roughness: 0.75,
      metalness: 0.06
    });
    const nsPromenadeGeo = new THREE.PlaneGeometry(24, 190);
    const nsPromenade = new THREE.Mesh(nsPromenadeGeo, nsPromenadeMat);
    nsPromenade.rotation.x = -Math.PI * 0.5;
    nsPromenade.position.set(0, 0.014, 0);
    nsPromenade.receiveShadow = true;
    this.group.add(nsPromenade);

    // Sandstone border strips along the North-South promenade
    const borderMat = new THREE.MeshStandardMaterial({
      color: 0xede0c8,
      roughness: 0.7,
      metalness: 0.05
    });
    for (const side of [-1, 1]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.04, 190), borderMat);
      strip.position.set(side * 12.45, 0.02, 0);
      strip.receiveShadow = true;
      this.group.add(strip);
    }

    // Axial East-West promenade across the monument axis (x = -55 to x = +55)
    const ewPromenadeTex = textures.get('plaza_terracotta_tiles', 16, 24);
    const ewPromenadeMat = new THREE.MeshStandardMaterial({
      color: 0xd88766,
      map: ewPromenadeTex,
      roughness: 0.75,
      metalness: 0.06
    });
    const ewPromenadeGeo = new THREE.PlaneGeometry(110, 22);
    const ewPromenade = new THREE.Mesh(ewPromenadeGeo, ewPromenadeMat);
    ewPromenade.rotation.x = -Math.PI * 0.5;
    ewPromenade.position.set(0, 0.016, 0);
    ewPromenade.receiveShadow = true;
    this.group.add(ewPromenade);

    for (const side of [-1, 1]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(110, 0.04, 0.9), borderMat);
      strip.position.set(0, 0.02, side * 11.45);
      strip.receiveShadow = true;
      this.group.add(strip);
    }

    // Central Monument Grand Plaza Apron (32 x 32 around origin)
    const centralPlazaGeo = new THREE.PlaneGeometry(31, 31);
    const centralPlazaMat = new THREE.MeshStandardMaterial({
      color: 0xe7d6b9,
      map: textures.get('patuxay_stone_wall', 8, 8),
      roughness: 0.72,
      metalness: 0.08
    });
    const centralPlaza = new THREE.Mesh(centralPlazaGeo, centralPlazaMat);
    centralPlaza.rotation.x = -Math.PI * 0.5;
    centralPlaza.position.set(0, 0.022, 0);
    centralPlaza.receiveShadow = true;
    this.group.add(centralPlaza);

    // Ornate compass lotus medallion inlaid beneath Patuxay central arch
    const compassOuter = new THREE.Mesh(
      new THREE.RingGeometry(4.2, 5.4, 32),
      new THREE.MeshStandardMaterial({ color: 0xc8963e, roughness: 0.45, metalness: 0.35 })
    );
    compassOuter.rotation.x = -Math.PI * 0.5;
    compassOuter.position.set(0, 0.028, 0);
    this.group.add(compassOuter);

    const compassInner = new THREE.Mesh(
      new THREE.CircleGeometry(4.2, 24),
      new THREE.MeshStandardMaterial({
        color: 0xb85d43,
        map: textures.get('plaza_terracotta_tiles', 3, 3),
        roughness: 0.65
      })
    );
    compassInner.rotation.x = -Math.PI * 0.5;
    compassInner.position.set(0, 0.027, 0);
    this.group.add(compassInner);

    // Secondary walkways framing the reflection ponds (connecting East-West to North/South plazas)
    const subWalkwayMat = new THREE.MeshStandardMaterial({
      color: 0xdecbb0,
      roughness: 0.82
    });
    for (const sideX of [-30, 30]) {
      const sidePath = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 68), subWalkwayMat);
      sidePath.rotation.x = -Math.PI * 0.5;
      sidePath.position.set(sideX, 0.015, 0);
      sidePath.receiveShadow = true;
      this.group.add(sidePath);
    }
  }

  private buildNorthMusicalFountainPlaza(
    textures: TextureManager,
    collision: CollisionWorld
  ): void {
    const centerZ = -52;
    const fountainGroup = new THREE.Group();
    fountainGroup.position.set(0, 0, centerZ);

    // Wide circular stone plaza (radius = 25)
    const plazaDisc = new THREE.Mesh(
      new THREE.CircleGeometry(25, 64),
      new THREE.MeshStandardMaterial({
        color: 0xe3d1b4,
        map: textures.get('patuxay_stone_wall', 10, 10),
        roughness: 0.78,
        metalness: 0.05
      })
    );
    plazaDisc.rotation.x = -Math.PI * 0.5;
    plazaDisc.position.y = 0.024;
    plazaDisc.receiveShadow = true;
    fountainGroup.add(plazaDisc);

    // Decorative terracotta & gold concentric inlays in the circular plaza
    const outerRingInlay = new THREE.Mesh(
      new THREE.RingGeometry(23.6, 24.8, 64),
      new THREE.MeshStandardMaterial({
        color: 0xb86846,
        map: textures.get('plaza_terracotta_tiles', 12, 12),
        roughness: 0.72
      })
    );
    outerRingInlay.rotation.x = -Math.PI * 0.5;
    outerRingInlay.position.y = 0.028;
    fountainGroup.add(outerRingInlay);

    const midRingInlay = new THREE.Mesh(
      new THREE.RingGeometry(15.2, 16.4, 64),
      new THREE.MeshStandardMaterial({
        color: 0xc99a45,
        roughness: 0.5,
        metalness: 0.25
      })
    );
    midRingInlay.rotation.x = -Math.PI * 0.5;
    midRingInlay.position.y = 0.029;
    fountainGroup.add(midRingInlay);

    // Stepped outer apron around the fountain rim (radius = 12.65, height = 0.24)
    const stepMat = new THREE.MeshStandardMaterial({
      color: 0xefe3ce,
      map: textures.get('patuxay_stone_wall', 6, 2),
      roughness: 0.68
    });
    const outerStep = new THREE.Mesh(
      new THREE.CylinderGeometry(12.55, 12.75, 0.24, 64),
      stepMat
    );
    outerStep.position.y = 0.12;
    outerStep.receiveShadow = true;
    outerStep.castShadow = true;
    fountainGroup.add(outerStep);

    // Raised circular fountain stone rim (outerRadius = 12.2, innerRadius = 11.2, topY = 0.52)
    const rimOuterRadius = 12.2;
    const rimInnerRadius = 11.2;
    const rimTopY = 0.52;

    const rimWallMat = new THREE.MeshStandardMaterial({
      color: 0xf4ead8,
      map: textures.get('patuxay_stone_wall', 8, 1),
      roughness: 0.62,
      metalness: 0.06
    });
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xd9a84a,
      roughness: 0.35,
      metalness: 0.55
    });

    // Outer cylinder wall (open-ended)
    const outerWall = new THREE.Mesh(
      new THREE.CylinderGeometry(rimOuterRadius, rimOuterRadius + 0.1, rimTopY, 64, 1, true),
      rimWallMat
    );
    outerWall.position.y = rimTopY * 0.5;
    outerWall.castShadow = true;
    outerWall.receiveShadow = true;
    fountainGroup.add(outerWall);

    // Inner cylinder wall (facing inward toward basin)
    const innerWallMat = rimWallMat.clone();
    innerWallMat.side = THREE.BackSide;
    const innerWall = new THREE.Mesh(
      new THREE.CylinderGeometry(rimInnerRadius, rimInnerRadius, rimTopY, 64, 1, true),
      innerWallMat
    );
    innerWall.position.y = rimTopY * 0.5;
    fountainGroup.add(innerWall);

    // Top flat walkable coping ring (innerRadius = 11.2, outerRadius = 12.2, at y = 0.52)
    const rimCap = new THREE.Mesh(
      new THREE.RingGeometry(rimInnerRadius - 0.04, rimOuterRadius + 0.06, 64),
      rimWallMat
    );
    rimCap.rotation.x = -Math.PI * 0.5;
    rimCap.position.y = rimTopY;
    rimCap.receiveShadow = true;
    fountainGroup.add(rimCap);

    // Golden lotus relief molding around outer fountain wall
    const goldRimBand = new THREE.Mesh(
      new THREE.TorusGeometry(rimOuterRadius + 0.04, 0.055, 12, 64),
      goldTrimMat
    );
    goldRimBand.rotation.x = Math.PI * 0.5;
    goldRimBand.position.y = rimTopY - 0.06;
    fountainGroup.add(goldRimBand);

    // 16 Decorative carved lotus bollards along the fountain rim
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const rMid = (rimOuterRadius + rimInnerRadius) * 0.5;
      const bx = Math.cos(angle) * rMid;
      const bz = Math.sin(angle) * rMid;
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.16, 0.22, 0.16, 12),
        goldTrimMat
      );
      post.position.set(bx, rimTopY + 0.08, bz);
      post.castShadow = true;
      fountainGroup.add(post);
    }

    // Mosaic basin floor at y = 0.08 mapped with textures.get('fountain_mosaic_tile', 3, 3)
    const mosaicTex = textures.get('fountain_mosaic_tile', 3, 3);
    const basinFloorMat = new THREE.MeshStandardMaterial({
      color: 0x38d2c8,
      map: mosaicTex,
      roughness: 0.45,
      metalness: 0.1
    });
    const basinFloor = new THREE.Mesh(
      new THREE.CircleGeometry(rimInnerRadius + 0.05, 64),
      basinFloorMat
    );
    basinFloor.rotation.x = -Math.PI * 0.5;
    basinFloor.position.y = 0.08;
    basinFloor.receiveShadow = true;
    fountainGroup.add(basinFloor);

    // Central tiered lotus fountain pedestal at (0, 0, -52)
    const pedestalGroup = new THREE.Group();

    const baseTier = new THREE.Mesh(
      new THREE.CylinderGeometry(2.4, 2.85, 0.48, 24),
      rimWallMat
    );
    baseTier.position.y = 0.32;
    baseTier.castShadow = true;
    baseTier.receiveShadow = true;
    pedestalGroup.add(baseTier);

    const midTier = new THREE.Mesh(
      new THREE.CylinderGeometry(1.45, 1.9, 0.65, 20),
      rimWallMat
    );
    midTier.position.y = 0.85;
    midTier.castShadow = true;
    pedestalGroup.add(midTier);

    // Golden lotus bowl tier
    const lotusBowl = new THREE.Mesh(
      new THREE.CylinderGeometry(1.75, 0.85, 0.45, 16),
      goldTrimMat
    );
    lotusBowl.position.y = 1.35;
    lotusBowl.castShadow = true;
    pedestalGroup.add(lotusBowl);

    // Sculpted lotus petals around the central fountain bowl
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const petal = new THREE.Mesh(
        new THREE.ConeGeometry(0.32, 0.7, 6),
        goldTrimMat
      );
      petal.position.set(Math.cos(a) * 1.45, 1.48, Math.sin(a) * 1.45);
      petal.rotation.z = -Math.cos(a) * 0.45;
      petal.rotation.x = Math.sin(a) * 0.45;
      pedestalGroup.add(petal);
    }

    // Upper lotus nozzle spire
    const upperColumn = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.68, 0.85, 16),
      rimWallMat
    );
    upperColumn.position.y = 1.92;
    upperColumn.castShadow = true;
    pedestalGroup.add(upperColumn);

    const spireTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.36, 0.95, 16),
      goldTrimMat
    );
    spireTip.position.y = 2.75;
    spireTip.castShadow = true;
    pedestalGroup.add(spireTip);

    // Brass nozzle rings inside basin for the 3 concentric water rings
    for (const ringR of [2.2, 5.2, 8.8]) {
      const pipeRing = new THREE.Mesh(
        new THREE.TorusGeometry(ringR, 0.045, 8, 48),
        goldTrimMat
      );
      pipeRing.rotation.x = Math.PI * 0.5;
      pipeRing.position.y = 0.18;
      fountainGroup.add(pipeRing);
    }

    fountainGroup.add(pedestalGroup);
    this.group.add(fountainGroup);

    // Register walkable CylinderCollider for the outer rim steps and circular WaterZone
    collision.addCylinder({
      id: 'north_fountain_rim',
      x: 0,
      z: centerZ,
      radius: 12.4,
      topY: 0.48,
      bottomY: 0,
      walkable: true,
      tag: 'fountain_rim'
    });

    collision.addWaterZone({
      id: 'north_fountain',
      type: 'circle',
      x: 0,
      z: centerZ,
      radius: 11.2,
      waterY: 0.36,
      floorY: 0.10
    });
  }

  private buildFlankingReflectionPonds(
    textures: TextureManager,
    collision: CollisionWorld
  ): void {
    const pondSpecs = [
      { id: 'pond_nw', x: -19, z: -14.5 },
      { id: 'pond_ne', x: 19, z: -14.5 },
      { id: 'pond_sw', x: -19, z: 14.5 },
      { id: 'pond_se', x: 19, z: 14.5 }
    ];

    const pondWidth = 11.5;
    const pondDepth = 14.5;
    const copingWidth = 0.65;
    const copingTopY = 0.40;

    const tileTex = textures.get('fountain_mosaic_tile', 3, 4);
    const pondFloorMat = new THREE.MeshStandardMaterial({
      color: 0x1ca89e,
      map: tileTex,
      roughness: 0.45,
      metalness: 0.08
    });

    const copingMat = new THREE.MeshStandardMaterial({
      color: 0xf5ecdc,
      map: textures.get('patuxay_stone_wall', 4, 4),
      roughness: 0.6,
      metalness: 0.05
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4a243,
      roughness: 0.38,
      metalness: 0.5
    });

    for (const spec of pondSpecs) {
      const pondGroup = new THREE.Group();
      pondGroup.position.set(spec.x, 0, spec.z);

      // Turquoise/jade tiled floor at y = 0.05
      const floorMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(pondWidth - 0.2, pondDepth - 0.2),
        pondFloorMat
      );
      floorMesh.rotation.x = -Math.PI * 0.5;
      floorMesh.position.y = 0.05;
      floorMesh.receiveShadow = true;
      pondGroup.add(floorMesh);

      // North & South coping ledges (along X)
      const nsBarGeo = new THREE.BoxGeometry(pondWidth + copingWidth, copingTopY, copingWidth);
      const northBar = new THREE.Mesh(nsBarGeo, copingMat);
      northBar.position.set(0, copingTopY * 0.5, -pondDepth * 0.5);
      northBar.castShadow = true;
      northBar.receiveShadow = true;
      pondGroup.add(northBar);

      const southBar = new THREE.Mesh(nsBarGeo, copingMat);
      southBar.position.set(0, copingTopY * 0.5, pondDepth * 0.5);
      southBar.castShadow = true;
      southBar.receiveShadow = true;
      pondGroup.add(southBar);

      // West & East coping ledges (along Z)
      const ewBarGeo = new THREE.BoxGeometry(copingWidth, copingTopY, pondDepth - copingWidth);
      const westBar = new THREE.Mesh(ewBarGeo, copingMat);
      westBar.position.set(-pondWidth * 0.5, copingTopY * 0.5, 0);
      westBar.castShadow = true;
      westBar.receiveShadow = true;
      pondGroup.add(westBar);

      const eastBar = new THREE.Mesh(ewBarGeo, copingMat);
      eastBar.position.set(pondWidth * 0.5, copingTopY * 0.5, 0);
      eastBar.castShadow = true;
      eastBar.receiveShadow = true;
      pondGroup.add(eastBar);

      // Corner lotus finials on the 4 corners of each pond
      for (const cx of [-pondWidth * 0.5, pondWidth * 0.5]) {
        for (const cz of [-pondDepth * 0.5, pondDepth * 0.5]) {
          const cornerPedestal = new THREE.Mesh(
            new THREE.BoxGeometry(copingWidth * 1.25, copingTopY + 0.08, copingWidth * 1.25),
            copingMat
          );
          cornerPedestal.position.set(cx, (copingTopY + 0.08) * 0.5, cz);
          cornerPedestal.castShadow = true;
          cornerPedestal.receiveShadow = true;
          pondGroup.add(cornerPedestal);

          const lotusCap = new THREE.Mesh(
            new THREE.ConeGeometry(0.22, 0.28, 8),
            goldAccentMat
          );
          lotusCap.position.set(cx, copingTopY + 0.22, cz);
          pondGroup.add(lotusCap);
        }
      }

      this.group.add(pondGroup);

      // Register 4 perimeter walkable BoxColliders with tag: 'pond_coping'
      const halfW = pondWidth * 0.5;
      const halfD = pondDepth * 0.5;
      const halfC = copingWidth * 0.55;

      collision.addBox({
        id: `${spec.id}_coping_north`,
        minX: spec.x - halfW - halfC,
        maxX: spec.x + halfW + halfC,
        minZ: spec.z - halfD - halfC,
        maxZ: spec.z - halfD + halfC,
        topY: copingTopY,
        bottomY: 0,
        walkable: true,
        tag: 'pond_coping'
      });

      collision.addBox({
        id: `${spec.id}_coping_south`,
        minX: spec.x - halfW - halfC,
        maxX: spec.x + halfW + halfC,
        minZ: spec.z + halfD - halfC,
        maxZ: spec.z + halfD + halfC,
        topY: copingTopY,
        bottomY: 0,
        walkable: true,
        tag: 'pond_coping'
      });

      collision.addBox({
        id: `${spec.id}_coping_west`,
        minX: spec.x - halfW - halfC,
        maxX: spec.x - halfW + halfC,
        minZ: spec.z - halfD + halfC,
        maxZ: spec.z + halfD - halfC,
        topY: copingTopY,
        bottomY: 0,
        walkable: true,
        tag: 'pond_coping'
      });

      collision.addBox({
        id: `${spec.id}_coping_east`,
        minX: spec.x + halfW - halfC,
        maxX: spec.x + halfW + halfC,
        minZ: spec.z - halfD + halfC,
        maxZ: spec.z + halfD - halfC,
        topY: copingTopY,
        bottomY: 0,
        walkable: true,
        tag: 'pond_coping'
      });

      // Register rectangular WaterZone (width: 10.5, depth: 13.5, waterY: 0.25, floorY: 0.06)
      collision.addWaterZone({
        id: spec.id,
        type: 'rect',
        x: spec.x,
        z: spec.z,
        width: 10.5,
        depth: 13.5,
        waterY: 0.25,
        floorY: 0.06
      });
    }
  }

  private buildManicuredLawns(collision: CollisionWorld): void {
    // Manicured green lawns with raised stone curbing (y = 0.15) in North, Central, and South quadrants
    const lawnSpecs = [
      // North Quadrant flanking the Musical Fountain Plaza
      { id: 'lawn_north_west', x: -38, z: -56, width: 22, depth: 46 },
      { id: 'lawn_north_east', x: 38, z: -56, width: 22, depth: 46 },
      // Far North corner lawns
      { id: 'lawn_far_nw', x: -28, z: -87, width: 28, depth: 12 },
      { id: 'lawn_far_ne', x: 28, z: -87, width: 28, depth: 12 },
      // Central Quadrant outer lawns flanking the reflection ponds
      { id: 'lawn_central_nw', x: -42, z: -22, width: 18, depth: 18 },
      { id: 'lawn_central_ne', x: 42, z: -22, width: 18, depth: 18 },
      { id: 'lawn_central_sw', x: -42, z: 22, width: 18, depth: 18 },
      { id: 'lawn_central_se', x: 42, z: 22, width: 18, depth: 18 },
      // South Quadrant inner lawns along main promenade
      { id: 'lawn_south_inner_w', x: -24, z: 54, width: 20, depth: 44 },
      { id: 'lawn_south_inner_e', x: 24, z: 54, width: 20, depth: 44 },
      // South Quadrant outer lawns
      { id: 'lawn_south_outer_w', x: -46, z: 54, width: 16, depth: 44 },
      { id: 'lawn_south_outer_e', x: 46, z: 54, width: 16, depth: 44 }
    ];

    const curbMat = new THREE.MeshStandardMaterial({
      color: 0xeae0ce,
      roughness: 0.72,
      metalness: 0.04
    });
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x418f3d,
      roughness: 0.9,
      metalness: 0.02
    });
    const stripeGrassMat = new THREE.MeshStandardMaterial({
      color: 0x4ea347,
      roughness: 0.88,
      metalness: 0.02
    });

    const lawnTopY = 0.15;

    for (const lawn of lawnSpecs) {
      const lawnGroup = new THREE.Group();
      lawnGroup.position.set(lawn.x, 0, lawn.z);

      // Raised stone curbing base (y = 0.15)
      const curbMesh = new THREE.Mesh(
        new THREE.BoxGeometry(lawn.width + 0.6, lawnTopY, lawn.depth + 0.6),
        curbMat
      );
      curbMesh.position.y = lawnTopY * 0.5;
      curbMesh.receiveShadow = true;
      curbMesh.castShadow = true;
      lawnGroup.add(curbMesh);

      // Main manicured turf top
      const turfMesh = new THREE.Mesh(
        new THREE.BoxGeometry(lawn.width, 0.03, lawn.depth),
        grassMat
      );
      turfMesh.position.y = lawnTopY + 0.015;
      turfMesh.receiveShadow = true;
      lawnGroup.add(turfMesh);

      // Ornamental lighter-green mowed border inset
      const insetMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(Math.max(2, lawn.width - 2.2), Math.max(2, lawn.depth - 2.2)),
        stripeGrassMat
      );
      insetMesh.rotation.x = -Math.PI * 0.5;
      insetMesh.position.y = lawnTopY + 0.032;
      insetMesh.receiveShadow = true;
      lawnGroup.add(insetMesh);

      this.group.add(lawnGroup);

      collision.addBox({
        id: lawn.id,
        minX: lawn.x - lawn.width * 0.5 - 0.3,
        maxX: lawn.x + lawn.width * 0.5 + 0.3,
        minZ: lawn.z - lawn.depth * 0.5 - 0.3,
        maxZ: lawn.z + lawn.depth * 0.5 + 0.3,
        topY: lawnTopY,
        bottomY: 0,
        walkable: true,
        tag: 'ground'
      });
    }
  }

  private buildSouthApproachAndPerimeterWalls(
    textures: TextureManager,
    collision: CollisionWorld
  ): void {
    // South ceremonial entrance plaza at z = +82
    const southPlaza = new THREE.Mesh(
      new THREE.CircleGeometry(15, 48),
      new THREE.MeshStandardMaterial({
        color: 0xe4d2b4,
        map: textures.get('patuxay_stone_wall', 6, 6),
        roughness: 0.76
      })
    );
    southPlaza.rotation.x = -Math.PI * 0.5;
    southPlaza.position.set(0, 0.022, 82);
    southPlaza.receiveShadow = true;
    this.group.add(southPlaza);

    // Low ornamental park perimeter walls & golden pillars along x = ±68 and z = ±104
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xefe3ce,
      roughness: 0.68
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd8a444,
      roughness: 0.35,
      metalness: 0.55
    });

    // Place decorative boundary pillars around the park perimeter
    for (let z = -96; z <= 96; z += 16) {
      if (Math.abs(z) < 14) continue; // Leave East-West avenue open visually
      for (const sideX of [-62, 62]) {
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.35, 0.9), wallMat);
        pillar.position.set(sideX, 0.675, z);
        pillar.castShadow = true;
        pillar.receiveShadow = true;
        this.group.add(pillar);

        const cap = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.45, 4), goldMat);
        cap.position.set(sideX, 1.55, z);
        cap.rotation.y = Math.PI * 0.25;
        this.group.add(cap);

        collision.addBox({
          id: `perimeter_pillar_${sideX}_${z}`,
          minX: sideX - 0.5,
          maxX: sideX + 0.5,
          minZ: z - 0.5,
          maxZ: z + 0.5,
          topY: 1.4,
          bottomY: 0,
          walkable: false,
          tag: 'wall'
        });
      }
    }
  }

  private buildVientianeBoulevardAndSkyline(textures: TextureManager): void {
    const skylineGroup = new THREE.Group();
    skylineGroup.name = 'VientianeSkyline';

    // Lane Xang Avenue Roadway strips & white lane dashes outside the park
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x2e3136,
      roughness: 0.9
    });
    const laneLineMat = new THREE.MeshBasicMaterial({ color: 0xf4f1ea });

    // West & East Boulevard lanes (x = -74 and x = +74)
    for (const roadX of [-74, 74]) {
      const road = new THREE.Mesh(new THREE.PlaneGeometry(14, 270), roadMat);
      road.rotation.x = -Math.PI * 0.5;
      road.position.set(roadX, -0.02, 0);
      road.receiveShadow = true;
      skylineGroup.add(road);

      for (let z = -120; z <= 120; z += 10) {
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 4.2), laneLineMat);
        dash.rotation.x = -Math.PI * 0.5;
        dash.position.set(roadX, -0.01, z);
        skylineGroup.add(dash);
      }
    }

    // North & South Cross-Avenues (z = -108 and z = +108)
    for (const roadZ of [-108, 108]) {
      const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(220, 16), roadMat);
      crossRoad.rotation.x = -Math.PI * 0.5;
      crossRoad.position.set(0, -0.018, roadZ);
      crossRoad.receiveShadow = true;
      skylineGroup.add(crossRoad);
    }

    // Stylized Lao Government & Ministry Buildings around the perimeter (x = ±65..95, z = ±100..130)
    const buildingConfigs = [
      // Flanking West & East Ministry complexes
      { x: -90, z: -62, w: 16, d: 34, h: 10.5, rotY: Math.PI * 0.5 },
      { x: -90, z: -12, w: 18, d: 38, h: 12.0, rotY: Math.PI * 0.5 },
      { x: -90, z: 42, w: 16, d: 34, h: 10.5, rotY: Math.PI * 0.5 },
      { x: 90, z: -62, w: 16, d: 34, h: 10.5, rotY: -Math.PI * 0.5 },
      { x: 90, z: -12, w: 18, d: 38, h: 12.0, rotY: -Math.PI * 0.5 },
      { x: 90, z: 42, w: 16, d: 34, h: 10.5, rotY: -Math.PI * 0.5 },
      // North & South Avenue buildings (z = ±122)
      { x: -68, z: -122, w: 30, d: 15, h: 11.0, rotY: 0 },
      { x: -24, z: -124, w: 34, d: 16, h: 12.5, rotY: 0 },
      { x: 24, z: -124, w: 34, d: 16, h: 12.5, rotY: 0 },
      { x: 68, z: -122, w: 30, d: 15, h: 11.0, rotY: 0 },
      { x: -65, z: 122, w: 30, d: 15, h: 10.5, rotY: Math.PI },
      { x: 65, z: 122, w: 30, d: 15, h: 10.5, rotY: Math.PI }
    ];

    for (const cfg of buildingConfigs) {
      const bldg = this.createLaoMinistryBuilding(cfg.w, cfg.d, cfg.h, textures);
      bldg.position.set(cfg.x, 0, cfg.z);
      bldg.rotation.y = cfg.rotY;
      skylineGroup.add(bldg);
    }

    // Boulevard avenue trees along outer sidewalks
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c432c, roughness: 0.88 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x2d6e32, roughness: 0.82 });
    for (let z = -98; z <= 98; z += 14) {
      for (const bx of [-83, 83]) {
        const treeGrp = new THREE.Group();
        treeGrp.position.set(bx, 0, z);
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 4.2, 8), trunkMat);
        trunk.position.y = 2.1;
        treeGrp.add(trunk);

        const crown = new THREE.Mesh(new THREE.SphereGeometry(2.6, 10, 8), canopyMat);
        crown.position.y = 5.1;
        crown.scale.set(1.1, 0.85, 1.1);
        treeGrp.add(crown);
        skylineGroup.add(treeGrp);
      }
    }

    // Distant Golden Spire of Pha That Luang Stupa on the North-East Horizon
    const thatLuang = this.createPhaThatLuangHorizonMonument();
    thatLuang.position.set(58, 0, -155);
    skylineGroup.add(thatLuang);

    this.group.add(skylineGroup);
  }

  private createLaoMinistryBuilding(
    width: number,
    depth: number,
    height: number,
    textures: TextureManager
  ): THREE.Group {
    const group = new THREE.Group();

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf7f1e3,
      map: textures.get('patuxay_stone_wall', 4, 2),
      roughness: 0.72
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0xb54b32,
      map: textures.get('plaza_terracotta_tiles', 6, 3),
      roughness: 0.65
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xe3b146,
      roughness: 0.32,
      metalness: 0.62
    });
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x2c4257,
      roughness: 0.25,
      metalness: 0.4
    });

    // Main white facade body
    const body = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), wallMat);
    body.position.y = height * 0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // White colonnade pillars along front facade
    const numCols = Math.max(4, Math.floor(width / 3.8));
    for (let i = 0; i < numCols; i++) {
      const cx = -width * 0.44 + (i / (numCols - 1)) * (width * 0.88);
      const col = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32, 0.36, height * 0.92, 10),
        wallMat
      );
      col.position.set(cx, height * 0.46, depth * 0.5 + 0.55);
      group.add(col);

      if (i < numCols - 1) {
        const winX = cx + (width * 0.88) / (2 * (numCols - 1));
        for (const wy of [height * 0.32, height * 0.68]) {
          const win = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.9, 0.15), windowMat);
          win.position.set(winX, wy, depth * 0.5 + 0.05);
          group.add(win);
        }
      }
    }

    // Two-tiered traditional Lao terracotta hipped roof
    const lowerRoof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.hypot(width, depth) * 0.56, 3.6, 4),
      roofMat
    );
    lowerRoof.position.y = height + 1.8;
    lowerRoof.rotation.y = Math.PI * 0.25;
    lowerRoof.scale.set(width / Math.max(width, depth), 1, depth / Math.max(width, depth));
    group.add(lowerRoof);

    const upperRoof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.hypot(width, depth) * 0.42, 3.4, 4),
      roofMat
    );
    upperRoof.position.y = height + 3.9;
    upperRoof.rotation.y = Math.PI * 0.25;
    upperRoof.scale.set(width / Math.max(width, depth), 1, depth / Math.max(width, depth));
    group.add(upperRoof);

    // Golden roof ridge & Chofa finials
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(width * 0.52, 0.32, 0.32), goldMat);
    ridge.position.y = height + 5.3;
    group.add(ridge);

    const centerSpire = new THREE.Mesh(new THREE.ConeGeometry(0.35, 2.2, 8), goldMat);
    centerSpire.position.y = height + 6.4;
    group.add(centerSpire);

    return group;
  }

  private createPhaThatLuangHorizonMonument(): THREE.Group {
    const stupa = new THREE.Group();
    stupa.name = 'PhaThatLuangBackdrop';

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf4c44e,
      emissive: 0x5a3e08,
      emissiveIntensity: 0.35,
      roughness: 0.24,
      metalness: 0.78
    });
    const baseWallMat = new THREE.MeshStandardMaterial({
      color: 0xe8dec8,
      roughness: 0.65
    });

    // Outer cloister & 3 terraced levels of Pha That Luang
    const terrace1 = new THREE.Mesh(new THREE.BoxGeometry(36, 3.5, 36), baseWallMat);
    terrace1.position.y = 1.75;
    stupa.add(terrace1);

    const terrace2 = new THREE.Mesh(new THREE.BoxGeometry(26, 4.0, 26), goldMat);
    terrace2.position.y = 5.5;
    stupa.add(terrace2);

    const terrace3 = new THREE.Mesh(new THREE.BoxGeometry(18, 3.6, 18), goldMat);
    terrace3.position.y = 9.3;
    stupa.add(terrace3);

    // Ring of 30 small golden stupa pinnacles around the second terrace
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const pin = new THREE.Mesh(new THREE.ConeGeometry(0.65, 3.2, 8), goldMat);
      pin.position.set(Math.cos(a) * 11.2, 12.2, Math.sin(a) * 11.2);
      stupa.add(pin);
    }

    // Main curved lotus dome base
    const domeBase = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 8.2, 7.5, 24), goldMat);
    domeBase.position.y = 14.5;
    stupa.add(domeBase);

    // Soaring 45m golden pyramidal lotus spire
    const mainSpire = new THREE.Mesh(new THREE.ConeGeometry(5.0, 24.0, 24), goldMat);
    mainSpire.position.y = 30.0;
    stupa.add(mainSpire);

    // Sacred golden parasol (Chatra) at the apex
    const apexRing = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.2, 3.5, 12), goldMat);
    apexRing.position.y = 43.2;
    stupa.add(apexRing);

    return stupa;
  }
}
