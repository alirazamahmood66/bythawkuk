import React, { useMemo } from 'react';
import * as THREE from 'three';

interface OrbitRingProps {
  radius: number;
  color?: string;
  isHighlighted?: boolean;
}

export const OrbitRing: React.FC<OrbitRingProps> = ({
  radius,
  color = '#30F1BE',
  isHighlighted = false,
}) => {
  // Generate circular orbit path coordinates with 128 segments for smooth curvature
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [radius]);

  return (
    <primitive
      object={
        new THREE.Line(
          lineGeometry,
          new THREE.LineBasicMaterial({
            color: isHighlighted ? '#23F7DB' : color,
            transparent: true,
            opacity: isHighlighted ? 0.35 : 0.08,
            blending: THREE.AdditiveBlending,
          })
        )
      }
    />
  );
};
