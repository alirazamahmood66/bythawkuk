import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getOrCreateSaturnRingTexture } from '../utils/cosmicTextureGenerator';

interface PlanetRingsProps {
  outerRadius: number;
  innerRadius?: number;
  color?: string;
  isHovered?: boolean;
  isReducedMotion?: boolean;
}

export const PlanetRings: React.FC<PlanetRingsProps> = ({
  outerRadius,
  innerRadius,
  color,
  isHovered = false,
  isReducedMotion = false,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Retrieve cached 1024x1024 radial concentric ring texture
  const ringTexture = useMemo(() => getOrCreateSaturnRingTexture(), []);

  useFrame((_, delta) => {
    if (meshRef.current && !isReducedMotion) {
      meshRef.current.rotation.z += delta * 0.02;
    }
  });

  const planeSize = outerRadius * 2.2;

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.8, 0.1, 0.4]}
      raycast={() => null}
    >
      <planeGeometry args={[planeSize, planeSize]} />
      <meshBasicMaterial
        map={ringTexture}
        transparent
        opacity={isHovered ? 0.95 : 0.85}
        side={THREE.DoubleSide}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
};
