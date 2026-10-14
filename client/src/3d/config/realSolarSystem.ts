import * as THREE from 'three';

export interface RealBodyConfig {
  id: string;
  texture: string;
  radius: number;
  orbitRadius: number;
  /** radians per second (kept very slow so the system feels majestic, not frantic) */
  speed: number;
  angle: number;
  /** axial tilt in radians */
  tilt: number;
  /** axial spin radians per second */
  spin: number;
  /** surface relief strength (uses the colour map as a height map) */
  bump?: number;
  /** city-lights map (Earth night side) */
  night?: string;
  atmosphere?: { color: string; intensity: number; scale: number };
  clouds?: string;
  moon?: boolean;
  rings?: { inner: number; outer: number; texture: string };
}

export const SUN_RADIUS = 1.3;
export const SUN_TEXTURE = '/textures/2k_sun.jpg';
export const MILKY_WAY_TEXTURE = '/textures/2k_stars_milky_way.jpg';

// Real Solar System (compressed distances, true planet order, real NASA-derived surface maps).
// Only Saturn has rings, exactly like the real thing.
export const REAL_BODIES: RealBodyConfig[] = [
  { id: 'mercury', texture: '/textures/2k_mercury.jpg', radius: 0.17, orbitRadius: 2.7, speed: 0.045, angle: 1.9, tilt: 0.03, spin: 0.05, bump: 1.2 },
  {
    id: 'venus', texture: '/textures/2k_venus_atmosphere.jpg', radius: 0.3, orbitRadius: 3.8, speed: 0.032, angle: 1.2, tilt: 0.1, spin: 0.03,
    atmosphere: { color: '#ffd9a0', intensity: 1.1, scale: 1.08 },
  },
  {
    id: 'earth', texture: '/textures/2k_earth_daymap.jpg', radius: 0.34, orbitRadius: 5.1, speed: 0.024, angle: 1.85, tilt: 0.41, spin: 0.14,
    night: '/textures/2k_earth_nightmap.jpg',
    atmosphere: { color: '#6cb4ff', intensity: 1.6, scale: 1.1 },
    clouds: '/textures/2k_earth_clouds.jpg', moon: true,
  },
  {
    id: 'mars', texture: '/textures/2k_mars.jpg', radius: 0.24, orbitRadius: 6.4, speed: 0.018, angle: 1.1, tilt: 0.44, spin: 0.13, bump: 1.4,
    atmosphere: { color: '#ffb48a', intensity: 0.7, scale: 1.05 },
  },
  {
    id: 'jupiter', texture: '/textures/2k_jupiter.jpg', radius: 1.05, orbitRadius: 11.0, speed: 0.012, angle: 1.75, tilt: 0.05, spin: 0.25,
    atmosphere: { color: '#f3d2a4', intensity: 0.55, scale: 1.035 },
  },
  {
    id: 'saturn', texture: '/textures/2k_saturn.jpg', radius: 0.9, orbitRadius: 14.8, speed: 0.009, angle: 1.3, tilt: 0.47, spin: 0.22,
    atmosphere: { color: '#f0dcae', intensity: 0.5, scale: 1.035 },
    rings: { inner: 1.25, outer: 2.35, texture: '/textures/2k_saturn_ring_alpha.png' },
  },
  {
    id: 'uranus', texture: '/textures/2k_uranus.jpg', radius: 0.52, orbitRadius: 18.4, speed: 0.006, angle: 1.8, tilt: 1.7, spin: 0.15,
    atmosphere: { color: '#a8f0f4', intensity: 1.2, scale: 1.07 },
  },
  {
    id: 'neptune', texture: '/textures/2k_neptune.jpg', radius: 0.5, orbitRadius: 21.5, speed: 0.0045, angle: 1.35, tilt: 0.5, spin: 0.16,
    atmosphere: { color: '#5b8cff', intensity: 1.4, scale: 1.08 },
  },
];

export const ASTEROID_BELT = { inner: 7.4, outer: 9.0 };

/** Single source of truth for body position so camera & meshes can never disagree. */
export function getBodyPosition(id: string, t: number, out: THREE.Vector3): THREE.Vector3 {
  if (id === 'sun') return out.set(0, 0, 0);
  const b = REAL_BODIES.find((x) => x.id === id);
  if (!b) return out.set(0, 0, 0);
  const a = b.angle + t * b.speed;
  return out.set(Math.cos(a) * b.orbitRadius, 0, Math.sin(a) * b.orbitRadius);
}
