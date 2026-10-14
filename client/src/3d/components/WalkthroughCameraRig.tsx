import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getBodyPosition } from '../config/realSolarSystem';

interface Station {
  focus: string;
  /** camera offset from focus body */
  cam: [number, number, number];
  /** look-at offset from focus body (x shifts the planet to the opposite side of the card) */
  look: [number, number, number];
}

// Cards alternate left/right, so each planet is framed on the opposite side.
export const STATIONS: Station[] = [
  { focus: 'sun', cam: [-2.8, 2.6, 10.0], look: [-2.8, 0, 0] }, // Hero (card left → sun right)
  { focus: 'earth', cam: [1.25, 0.55, 3.3], look: [1.25, 0, 0] }, // Services (card right → Earth left)
  { focus: 'mars', cam: [-1.0, 0.4, 2.7], look: [-1.0, 0, 0] }, // Process (card left → Mars right)
  { focus: 'jupiter', cam: [3.0, 0.9, 7.0], look: [3.0, 0, 0] }, // Philosophy (card right)
  { focus: 'saturn', cam: [-3.6, 1.7, 8.2], look: [-3.6, 0, 0] }, // Technology (card left)
  { focus: 'uranus', cam: [1.8, 0.5, 4.2], look: [1.8, 0, 0] }, // Insights (card right)
  { focus: 'neptune', cam: [-1.8, 0.5, 4.0], look: [-1.8, 0, 0] }, // Design (card left → Neptune right)
];

// Scroll progress at which each station is perfectly framed (matches card visibility windows)
const CENTERS = [0.04, 0.22, 0.38, 0.54, 0.7, 0.85, 0.97];
const HOLD = 0.045;

const smooth = (x: number) => x * x * (3 - 2 * x);

function resolve(p: number): [number, number] {
  for (let i = 0; i < CENTERS.length - 1; i++) {
    const a = CENTERS[i] + HOLD;
    const b = CENTERS[i + 1] - HOLD;
    if (p < a) return [i, 0];
    if (p <= b) return [i, (p - a) / (b - a)];
  }
  return [CENTERS.length - 2, 1];
}

interface RigProps {
  scrollProgress: number;
  isReducedMotion?: boolean;
}

export const WalkthroughCameraRig: React.FC<RigProps> = ({ scrollProgress, isReducedMotion = false }) => {
  const init = useRef(false);
  const pos = useRef(new THREE.Vector3());
  const look = useRef(new THREE.Vector3());
  const bodyA = useRef(new THREE.Vector3());
  const bodyB = useRef(new THREE.Vector3());
  const posA = useRef(new THREE.Vector3());
  const posB = useRef(new THREE.Vector3());
  const lookA = useRef(new THREE.Vector3());
  const lookB = useRef(new THREE.Vector3());
  const tPos = useRef(new THREE.Vector3());
  const tLook = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const time = isReducedMotion ? 0 : state.clock.elapsedTime;
    const p = Math.max(0, Math.min(1, scrollProgress));
    const [i, rawT] = resolve(p);
    const t = smooth(Math.max(0, Math.min(1, rawT)));

    const sA = STATIONS[i];
    const sB = STATIONS[i + 1];
    getBodyPosition(sA.focus, time, bodyA.current);
    getBodyPosition(sB.focus, time, bodyB.current);

    posA.current.set(...sA.cam).add(bodyA.current);
    posB.current.set(...sB.cam).add(bodyB.current);
    lookA.current.set(...sA.look).add(bodyA.current);
    lookB.current.set(...sB.look).add(bodyB.current);

    tPos.current.lerpVectors(posA.current, posB.current, t);
    tLook.current.lerpVectors(lookA.current, lookB.current, t);
    // cinematic lift while travelling between worlds
    tPos.current.y += Math.sin(Math.PI * t) * 1.6;

    if (!isReducedMotion) {
      tPos.current.x += state.pointer.x * 0.25;
      tPos.current.y += state.pointer.y * 0.15;
    }

    if (!init.current) {
      pos.current.copy(tPos.current);
      look.current.copy(tLook.current);
      init.current = true;
    } else {
      const k = Math.min(1, delta * 4);
      pos.current.lerp(tPos.current, k);
      look.current.lerp(tLook.current, k);
    }

    state.camera.position.copy(pos.current);
    state.camera.lookAt(look.current);
  });

  return null;
};
