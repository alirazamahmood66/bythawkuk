import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import { getOrCreateVortexGasGiantTextures } from '../utils/cosmicTextureGenerator';
import { PlanetAtmosphere } from './PlanetAtmosphere';

interface DominantHeroPlanetProps {
  position?: [number, number, number];
  radius?: number;
  isReducedMotion?: boolean;
}

export const DominantHeroPlanet: React.FC<DominantHeroPlanetProps> = ({
  position = [4.2, -0.4, 1.2],
  radius = 3.2,
  isReducedMotion = false,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Retrieve high-resolution cyclonic vortex textures
  const textures = useMemo(() => getOrCreateVortexGasGiantTextures(), []);

  useFrame((_, delta) => {
    if (isReducedMotion) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.035;
    }
  });

  return (
    <group position={position}>
      {/* 1. Primary Swirling Vortex Gas Giant Body */}
      <mesh ref={meshRef} rotation={[0.2, 0.4, -0.1]}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={textures.map}
          roughnessMap={textures.roughnessMap}
          roughness={0.32}
          metalness={0.15}
          emissive="#0369a1"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* 2. Luminous Cyan Atmospheric Rim Glow (Fresnel Limb) */}
      <PlanetAtmosphere
        radius={radius}
        config={{
          color: '#20d9f3',
          rimPower: 2.2,
          opacity: 0.85,
          scale: 1.045,
        }}
        isHovered={false}
      />
    </group>
  );
};
