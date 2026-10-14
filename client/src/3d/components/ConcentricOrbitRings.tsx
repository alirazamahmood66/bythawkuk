import React, { useMemo } from 'react';
import * as THREE from 'three';
import { REAL_BODIES } from '../config/realSolarSystem';

export const ConcentricOrbitRings: React.FC = () => {
  const lines = useMemo(
    () =>
      REAL_BODIES.map((b) => {
        const pts: THREE.Vector3[] = [];
        for (let i = 0; i <= 192; i++) {
          const th = (i / 192) * Math.PI * 2;
          pts.push(new THREE.Vector3(Math.cos(th) * b.orbitRadius, 0, Math.sin(th) * b.orbitRadius));
        }
        return new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({
            color: '#9fc4ff',
            transparent: true,
            opacity: 0.1,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
        );
      }),
    []
  );

  return (
    <group>
      {lines.map((l, i) => (
        <primitive key={i} object={l} />
      ))}
    </group>
  );
};
