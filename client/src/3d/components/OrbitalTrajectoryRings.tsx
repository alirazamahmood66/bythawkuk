import React, { useMemo } from 'react';
import * as THREE from 'three';

export const OrbitalTrajectoryRings: React.FC = () => {
  // Generate concentric circular trajectory geometries
  const trajectories = useMemo(() => {
    const radii = [2.2, 4.0, 5.8, 7.6, 9.4];
    return radii.map((radius) => {
      const points: THREE.Vector3[] = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      return {
        radius,
        geometry: new THREE.BufferGeometry().setFromPoints(points),
      };
    });
  }, []);

  // Beacon concentric radar rings
  const beaconRings = useMemo(() => {
    const radii = [0.25, 0.55, 0.95];
    return radii.map((radius) => {
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, []);

  return (
    <>
      {/* 1. Large Planetary Orbital Vectors */}
      <group position={[0.8, -1.2, -1.5]} rotation={[0.45, -0.2, 0.1]}>
        {trajectories.map((traj, idx) => (
          <primitive
            key={idx}
            object={
              new THREE.Line(
                traj.geometry,
                new THREE.LineBasicMaterial({
                  color: idx === 1 ? '#20d9f3' : '#38bdf8',
                  transparent: true,
                  opacity: idx === 1 ? 0.35 : 0.12,
                  blending: THREE.AdditiveBlending,
                })
              )
            }
          />
        ))}
      </group>

      {/* 2. Luminous Galactic Navigation Beacon (matching reference artwork) */}
      <group position={[1.4, -0.2, 0.8]}>
        {/* Core glowing star node */}
        <mesh>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color="#20d9f3" />
        </mesh>
        {/* Inner glow halo */}
        <mesh>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
        </mesh>
        {/* Concentric radar trajectory rings */}
        {beaconRings.map((geom, idx) => (
          <primitive
            key={idx}
            object={
              new THREE.Line(
                geom,
                new THREE.LineBasicMaterial({
                  color: '#20d9f3',
                  transparent: true,
                  opacity: 0.45 - idx * 0.1,
                  blending: THREE.AdditiveBlending,
                })
              )
            }
          />
        ))}
      </group>
    </>
  );
};
