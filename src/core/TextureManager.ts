import * as THREE from 'three';

export type TextureKey =
  | 'patuxay_arch_pediment'
  | 'patuxay_coffered_ceiling'
  | 'patuxay_cornice_frieze'
  | 'patuxay_stone_wall'
  | 'plaza_terracotta_tiles'
  | 'fountain_mosaic_tile'
  | 'lao_silk_collar';

interface TextureSpec {
  path: string;
  repeatX: number;
  repeatY: number;
}

const TEXTURE_SPECS: Record<TextureKey, TextureSpec> = {
  patuxay_arch_pediment: {
    path: '/textures/patuxay_arch_pediment.jpg',
    repeatX: 1,
    repeatY: 1
  },
  patuxay_coffered_ceiling: {
    path: '/textures/patuxay_coffered_ceiling.jpg',
    repeatX: 3,
    repeatY: 3
  },
  patuxay_cornice_frieze: {
    path: '/textures/patuxay_cornice_frieze.jpg',
    repeatX: 4,
    repeatY: 1
  },
  patuxay_stone_wall: {
    path: '/textures/patuxay_stone_wall.jpg',
    repeatX: 2,
    repeatY: 2
  },
  plaza_terracotta_tiles: {
    path: '/textures/plaza_terracotta_tiles.jpg',
    repeatX: 14,
    repeatY: 14
  },
  fountain_mosaic_tile: {
    path: '/textures/fountain_mosaic_tile.jpg',
    repeatX: 3,
    repeatY: 3
  },
  lao_silk_collar: {
    path: '/textures/lao_silk_collar.jpg',
    repeatX: 2,
    repeatY: 1
  }
};

export class TextureManager {
  private loader = new THREE.TextureLoader();
  private cache = new Map<string, THREE.Texture>();
  private maxAnisotropy = 8;

  constructor(renderer?: THREE.WebGLRenderer) {
    if (renderer) {
      this.maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    }
  }

  public get(key: TextureKey, repeatX?: number, repeatY?: number): THREE.Texture {
    const spec = TEXTURE_SPECS[key];
    const rx = repeatX ?? spec.repeatX;
    const ry = repeatY ?? spec.repeatY;
    const cacheKey = `${key}_${rx}_${ry}`;

    const existing = this.cache.get(cacheKey);
    if (existing) {
      return existing;
    }

    const tex = this.loader.load(spec.path);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(rx, ry);
    tex.anisotropy = this.maxAnisotropy;

    this.cache.set(cacheKey, tex);
    return tex;
  }
}
