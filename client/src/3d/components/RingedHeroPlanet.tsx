import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import {
  getOrCreateSaturnPlanetTextures,
  getOrCreateMoonTextures,
} from '../utils/cosmicTextureGenerator';
import { PlanetRings } from './PlanetRings';
import { PlanetAtmosphere } from './PlanetAtmosphere';

interface RingedHeroPlanetProps {
  position?: [number, number, number];
  isReducedMotion?: boolean;
}

export const RingedHeroPlanet: React.FC<RingedHeroPlanetProps> = ({
  position = [3.4, 3.2, -4.5],
  isReducedMotion = false,
}) => {
  const planetMeshRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Mesh>(null);

  const radius = 1.35;

  // Retrieve cached Saturn & Moon textures
  const planetTextures = useMemo(() => getOrCreateSaturnPlanetTextures(), []);
  const moonTextures = useMemo(() => getOrCreateMoonTextures(), []);

  useFrame((_, delta) => {
    if (isReducedMotion) return;

    if (planetMeshRef.current) {
      planetMeshRef.current.rotation.y += delta * 0.02;
    }

    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <group position={position}>
      {/* 1. Tilted Saturnian System */}
      <group rotation={[0.45, 0.1, -0.3]}>
        {/* Planet Sphere */}
        <mesh ref={planetMeshRef}>
          <sphereGeometry args={[radius, 48, 48]} />
          <meshStandardMaterial
            map={planetTextures.map}
            roughnessMap={planetTextures.roughnessMap}
            roughness={0.4}
            metalness={0.2}
            emissive="#EA580C"
            emissiveIntensity={0.12}
          />
        </mesh>

        {/* Atmospheric Edge Glow */}
        <PlanetAtmosphere
          radius={radius}
          config={{
            color: '#F59E0B',
            rimPower: 2.5,
            opacity: 0.65,
            scale: 1.045,
          }}
          isHovered={false}
        />

        {/* Wide Radiant Concentric Dust Rings */}
        <PlanetRings
          outerRadius={radius * 2.8}
          isReducedMotion={isReducedMotion}
        />
      </group>

      {/* 2. Realistic Cratered Moon in Foreground */}
      <mesh
        ref={moonRef}
        position={[2.0, 0.8, 0.8]}
        raycast={() => null}
      >
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          map={moonTextures.map}
          bumpMap={moonTextures.bumpMap}
          bumpScale={0.06}
          roughness={0.7}
          metalness={0.15}
          emissive="#64748b"
          emissiveIntensity={0.08}
        />
      </mesh>
    </group>
  );
};
