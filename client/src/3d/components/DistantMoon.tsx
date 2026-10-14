import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';

interface DistantMoonProps {
  orbitRadius: number;
  speed: number;
  size: number;
  color?: string;
  isReducedMotion?: boolean;
}

export const DistantMoon: React.FC<DistantMoonProps> = ({
  orbitRadius,
  speed,
  size,
  color = '#94a3b8',
  isReducedMotion = false,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(1.8);

  useFrame((_, delta) => {
    if (meshRef.current) {
      if (!isReducedMotion) {
        angleRef.current += delta * speed;
      }
      const x = Math.cos(angleRef.current) * orbitRadius;
      const z = Math.sin(angleRef.current) * orbitRadius;
      meshRef.current.position.set(x, Math.sin(angleRef.current * 0.5) * 0.3, z);
      meshRef.current.rotation.y += delta * (isReducedMotion ? 0.01 : 0.2);
    }
  });

  return (
    <mesh ref={meshRef} raycast={() => null}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.1}
      />
    </mesh>
  );
};
