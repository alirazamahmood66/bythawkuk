import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AsteroidFieldProps {
  count?: number;
  innerRadius?: number;
  outerRadius?: number;
  isReducedMotion?: boolean;
}

export const AsteroidField: React.FC<AsteroidFieldProps> = ({
  count = 130,
  innerRadius = 7.1,
  outerRadius = 8.2,
  isReducedMotion = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate dense asteroid positions and scales
  const asteroids = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.22;
      const dist = innerRadius + Math.random() * (outerRadius - innerRadius);
      const y = (Math.random() - 0.5) * 0.75;
      const scale = 0.045 + Math.random() * 0.065;
      list.push({
        position: [Math.cos(angle) * dist, y, Math.sin(angle) * dist] as [number, number, number],
        scale: [scale, scale * (0.75 + Math.random() * 0.5), scale * (0.85 + Math.random() * 0.3)] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
        color: i % 3 === 0 ? '#64748b' : i % 3 === 1 ? '#475569' : '#334155',
      });
    }
    return list;
  }, [count, innerRadius, outerRadius]);

  useFrame((_, delta) => {
    if (groupRef.current && !isReducedMotion) {
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {asteroids.map((ast, idx) => (
        <mesh
          key={idx}
          position={ast.position}
          scale={ast.scale}
          rotation={ast.rotation}
          raycast={() => null}
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={ast.color}
            roughness={0.88}
            metalness={0.12}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
};
