import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

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

export const SUN_RADIUS = 1.85;
export const SUN_TEXTURE = '/textures/2k_sun.jpg';
export const MILKY_WAY_TEXTURE = '/textures/2k_stars_milky_way.jpg';

// Instant background texture preloading
if (typeof window !== 'undefined') {
  useTexture.preload([
    SUN_TEXTURE,
    MILKY_WAY_TEXTURE,
    '/textures/2k_mercury.jpg',
    '/textures/2k_venus_atmosphere.jpg',
    '/textures/2k_earth_daymap.jpg',
    '/textures/2k_earth_nightmap.jpg',
    '/textures/2k_earth_clouds.jpg',
    '/textures/2k_moon.jpg',
    '/textures/2k_mars.jpg',
    '/textures/2k_jupiter.jpg',
    '/textures/2k_saturn.jpg',
    '/textures/2k_saturn_ring_alpha.png',
    '/textures/2k_uranus.jpg',
    '/textures/2k_neptune.jpg',
  ]);
}

// Real Solar System (compressed distances, true planet order, real NASA-derived surface maps).
// Only Saturn has rings, exactly like the real thing.
export const REAL_BODIES: RealBodyConfig[] = [
  { id: 'mercury', texture: '/textures/2k_mercury.jpg', radius: 0.32, orbitRadius: 3.0, speed: 0.18, angle: 1.9, tilt: 0.03, spin: 0.12, bump: 1.2 },
  {
    id: 'venus', texture: '/textures/2k_venus_atmosphere.jpg', radius: 0.52, orbitRadius: 4.3, speed: 0.13, angle: 1.2, tilt: 0.1, spin: 0.08,
    atmosphere: { color: '#ffd9a0', intensity: 1.1, scale: 1.08 },
  },
  {
    id: 'earth', texture: '/textures/2k_earth_daymap.jpg', radius: 0.58, orbitRadius: 5.7, speed: 0.095, angle: 1.85, tilt: 0.41, spin: 0.24,
    night: '/textures/2k_earth_nightmap.jpg',
    atmosphere: { color: '#6cb4ff', intensity: 1.6, scale: 1.1 },
    clouds: '/textures/2k_earth_clouds.jpg', moon: true,
  },
  {
    id: 'mars', texture: '/textures/2k_mars.jpg', radius: 0.42, orbitRadius: 7.1, speed: 0.072, angle: 1.1, tilt: 0.44, spin: 0.20, bump: 1.4,
    atmosphere: { color: '#ffb48a', intensity: 0.7, scale: 1.05 },
  },
  {
    id: 'jupiter', texture: '/textures/2k_jupiter.jpg', radius: 1.65, orbitRadius: 11.2, speed: 0.046, angle: 1.75, tilt: 0.05, spin: 0.35,
    atmosphere: { color: '#f3d2a4', intensity: 0.55, scale: 1.035 },
  },
  {
    id: 'saturn', texture: '/textures/2k_saturn.jpg', radius: 1.40, orbitRadius: 15.8, speed: 0.036, angle: 1.3, tilt: 0.47, spin: 0.30,
    atmosphere: { color: '#f0dcae', intensity: 0.5, scale: 1.035 },
    rings: { inner: 1.88, outer: 3.45, texture: '/textures/2k_saturn_ring_alpha.png' },
  },
  {
    id: 'uranus', texture: '/textures/2k_uranus.jpg', radius: 0.85, orbitRadius: 20.2, speed: 0.028, angle: 1.8, tilt: 1.7, spin: 0.22,
    atmosphere: { color: '#a8f0f4', intensity: 1.2, scale: 1.07 },
  },
  {
    id: 'neptune', texture: '/textures/2k_neptune.jpg', radius: 0.82, orbitRadius: 23.2, speed: 0.022, angle: 1.35, tilt: 0.5, spin: 0.24,
    atmosphere: { color: '#5b8cff', intensity: 1.4, scale: 1.08 },
  },
];

export const ASTEROID_BELT = { inner: 8.1, outer: 9.7 };

/** Single source of truth for body position so camera & meshes can never disagree. */
export function getBodyPosition(id: string, t: number, out: THREE.Vector3): THREE.Vector3 {
  if (id === 'sun') return out.set(0, 0, 0);
  const b = REAL_BODIES.find((x) => x.id === id);
  if (!b) return out.set(0, 0, 0);
  const a = b.angle + t * b.speed;
  return out.set(Math.cos(a) * b.orbitRadius, 0, Math.sin(a) * b.orbitRadius);
}
