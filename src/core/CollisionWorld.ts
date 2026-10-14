import * as THREE from 'three';

export interface BoxCollider {
  id: string;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  topY: number;
  bottomY?: number;
  walkable: boolean;
  tag?: 'ground' | 'monument' | 'ledge' | 'stair' | 'rooftop' | 'bench' | 'pond_coping' | 'wall' | 'tree';
}

export interface CylinderCollider {
  id: string;
  x: number;
  z: number;
  radius: number;
  topY: number;
  bottomY?: number;
  walkable: boolean;
  tag?: 'fountain_rim' | 'fountain_basin' | 'tree_trunk' | 'pillar' | 'tower';
}

export interface RampCollider {
  id: string;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  /** Direction along which elevation rises: '+z' | '-z' | '+x' | '-x' */
  direction: '+z' | '-z' | '+x' | '-x';
  startY: number;
  endY: number;
  tag?: 'stair' | 'ramp';
}

export interface WaterZone {
  id: string;
  type: 'circle' | 'rect';
  x: number;
  z: number;
  radius?: number;
  width?: number;
  depth?: number;
  waterY: number;
  floorY: number;
}

export interface ClimbablePoint {
  id: string;
  label: string;
  entryPosition: THREE.Vector3;
  targetPosition: THREE.Vector3;
  radius: number;
}

export interface CollisionResolution {
  position: THREE.Vector3;
  groundY: number;
  grounded: boolean;
  inWater: boolean;
  waterSurfaceY: number;
  currentTag: string;
  nearClimbable: ClimbablePoint | null;
}

export class CollisionWorld {
  public boxes: BoxCollider[] = [];
  public cylinders: CylinderCollider[] = [];
  public ramps: RampCollider[] = [];
  public waterZones: WaterZone[] = [];
  public climbables: ClimbablePoint[] = [];

  public addBox(box: BoxCollider): void {
    this.boxes.push(box);
  }

  public addCylinder(cyl: CylinderCollider): void {
    this.cylinders.push(cyl);
  }

  public addRamp(ramp: RampCollider): void {
    this.ramps.push(ramp);
  }

  public addWaterZone(zone: WaterZone): void {
    this.waterZones.push(zone);
  }

  public addClimbable(climb: ClimbablePoint): void {
    this.climbables.push(climb);
  }

  /**
   * Computes the highest walkable surface height at (x, z) reachable from currentY.
   * Allows stepping up onto ledges up to maxStepUp above currentY.
   */
  public getSurfaceInfoAt(
    x: number,
    z: number,
    currentY: number,
    maxStepUp = 1.65
  ): { groundY: number; tag: string; inWater: boolean; waterY: number } {
    let highestY = 0.0;
    let activeTag = 'ground';
    let inWater = false;
    let waterY = 0.0;

    // Check water zones first (shallow wading pools & circular fountain)
    for (const wz of this.waterZones) {
      let inside = false;
      if (wz.type === 'circle' && wz.radius !== undefined) {
        const dx = x - wz.x;
        const dz = z - wz.z;
        inside = dx * dx + dz * dz <= wz.radius * wz.radius;
      } else if (wz.type === 'rect' && wz.width !== undefined && wz.depth !== undefined) {
        inside =
          Math.abs(x - wz.x) <= wz.width * 0.5 &&
          Math.abs(z - wz.z) <= wz.depth * 0.5;
      }
      if (inside && currentY < wz.waterY + 0.6) {
        inWater = true;
        waterY = wz.waterY;
        highestY = Math.max(highestY, wz.floorY);
      }
    }

    // Check ramps / staircases
    for (const r of this.ramps) {
      if (x >= r.minX && x <= r.maxX && z >= r.minZ && z <= r.maxZ) {
        let t = 0;
        if (r.direction === '+z') {
          t = (z - r.minZ) / Math.max(0.001, r.maxZ - r.minZ);
        } else if (r.direction === '-z') {
          t = (r.maxZ - z) / Math.max(0.001, r.maxZ - r.minZ);
        } else if (r.direction === '+x') {
          t = (x - r.minX) / Math.max(0.001, r.maxX - r.minX);
        } else {
          t = (r.maxX - x) / Math.max(0.001, r.maxX - r.minX);
        }
        t = Math.max(0, Math.min(1, t));
        const rampY = r.startY + t * (r.endY - r.startY);
        if (rampY <= currentY + maxStepUp && rampY >= highestY - 0.1) {
          highestY = rampY;
          activeTag = r.tag ?? 'stair';
          inWater = false;
        }
      }
    }

    // Check walkable boxes
    for (const b of this.boxes) {
      if (!b.walkable) continue;
      const bottom = b.bottomY ?? -10;
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) {
        if (b.topY <= currentY + maxStepUp && currentY >= bottom - 0.5) {
          if (b.topY >= highestY) {
            highestY = b.topY;
            activeTag = b.tag ?? 'ledge';
            if (b.topY > waterY + 0.05) {
              inWater = false;
            }
          }
        }
      }
    }

    // Check walkable cylinders
    for (const c of this.cylinders) {
      if (!c.walkable) continue;
      const bottom = c.bottomY ?? -10;
      const dx = x - c.x;
      const dz = z - c.z;
      if (dx * dx + dz * dz <= c.radius * c.radius) {
        if (c.topY <= currentY + maxStepUp && currentY >= bottom - 0.5) {
          if (c.topY >= highestY) {
            highestY = c.topY;
            activeTag = c.tag ?? 'fountain_rim';
            if (c.topY > waterY + 0.05) {
              inWater = false;
            }
          }
        }
      }
    }

    return { groundY: highestY, tag: activeTag, inWater, waterY };
  }

  /**
   * Resolves horizontal capsule/circle collisions against non-walkable walls or tall ledges
   * and returns the resolved position + ground height.
   */
  public resolveMovement(
    desiredPos: THREE.Vector3,
    catRadius = 0.38,
    maxStepUp = 0.95
  ): CollisionResolution {
    let x = desiredPos.x;
    let z = desiredPos.z;
    const y = desiredPos.y;

    // Park outer bounds clamp
    const parkHalfWidth = 68;
    const parkHalfLength = 105;
    x = Math.max(-parkHalfWidth, Math.min(parkHalfWidth, x));
    z = Math.max(-parkHalfLength, Math.min(parkHalfLength, z));

    // Push out of solid boxes whose top is higher than (y + maxStepUp) and bottom is below (y + 1.2)
    for (const b of this.boxes) {
      const bottom = b.bottomY ?? 0;
      const blocksHorizontally = !b.walkable || b.topY > y + maxStepUp;
      if (!blocksHorizontally) continue;
      if (y + 0.9 < bottom || y > b.topY - 0.05) continue;

      const closestX = Math.max(b.minX, Math.min(x, b.maxX));
      const closestZ = Math.max(b.minZ, Math.min(z, b.maxZ));
      const dx = x - closestX;
      const dz = z - closestZ;
      const distSq = dx * dx + dz * dz;

      if (distSq < catRadius * catRadius) {
        if (distSq > 1e-6) {
          const dist = Math.sqrt(distSq);
          const overlap = catRadius - dist;
          x += (dx / dist) * overlap;
          z += (dz / dist) * overlap;
        } else {
          // Inside box: push out along nearest edge
          const dLeft = Math.abs(x - b.minX);
          const dRight = Math.abs(b.maxX - x);
          const dBack = Math.abs(z - b.minZ);
          const dFront = Math.abs(b.maxZ - z);
          const minD = Math.min(dLeft, dRight, dBack, dFront);
          if (minD === dLeft) x = b.minX - catRadius;
          else if (minD === dRight) x = b.maxX + catRadius;
          else if (minD === dBack) z = b.minZ - catRadius;
          else z = b.maxZ + catRadius;
        }
      }
    }

    // Push out of solid cylinders
    for (const c of this.cylinders) {
      const bottom = c.bottomY ?? 0;
      const blocksHorizontally = !c.walkable || c.topY > y + maxStepUp;
      if (!blocksHorizontally) continue;
      if (y + 0.9 < bottom || y > c.topY - 0.05) continue;

      const dx = x - c.x;
      const dz = z - c.z;
      const distSq = dx * dx + dz * dz;
      const minRadius = c.radius + catRadius;
      if (distSq < minRadius * minRadius) {
        const dist = Math.sqrt(Math.max(1e-6, distSq));
        const overlap = minRadius - dist;
        x += (dx / dist) * overlap;
        z += (dz / dist) * overlap;
      }
    }

    const surface = this.getSurfaceInfoAt(x, z, y, maxStepUp + 0.45);

    // Check nearby climbable shortcut points
    let nearClimbable: ClimbablePoint | null = null;
    let bestClimbDist = Infinity;
    for (const cp of this.climbables) {
      const d = cp.entryPosition.distanceTo(new THREE.Vector3(x, y, z));
      if (d <= cp.radius && d < bestClimbDist) {
        bestClimbDist = d;
        nearClimbable = cp;
      }
    }

    return {
      position: new THREE.Vector3(x, y, z),
      groundY: surface.groundY,
      grounded: y <= surface.groundY + 0.08,
      inWater: surface.inWater,
      waterSurfaceY: surface.waterY,
      currentTag: surface.tag,
      nearClimbable
    };
  }
}
