import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getBodyPosition } from '../config/realSolarSystem';

interface ReconSatelliteProps {
  isReducedMotion?: boolean;
}

export const ReconSatellite: React.FC<ReconSatelliteProps> = ({ isReducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const dishRef = useRef<THREE.Group>(null);
  const beaconRef = useRef<THREE.PointLight>(null);
  const earthPos = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = isReducedMotion ? 0 : state.clock.elapsedTime;

    // Follow Earth in its orbit
    getBodyPosition('earth', t, earthPos.current);

    // Orbit around Earth in a high inclination orbit
    const orbitRadius = 1.25; // Just outside Earth (radius 0.58 + atmosphere)
    const orbitSpeed = isReducedMotion ? 0 : t * 0.45;
    const ox = Math.cos(orbitSpeed) * orbitRadius;
    const oz = Math.sin(orbitSpeed) * orbitRadius;
    const oy = Math.sin(orbitSpeed * 1.5) * 0.32;

    groupRef.current.position.set(
      earthPos.current.x + ox,
      earthPos.current.y + oy,
      earthPos.current.z + oz
    );

    // Satellite orientation: nose points along velocity vector
    groupRef.current.rotation.y = -orbitSpeed + Math.PI / 2;
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.08;

    // Gentle dish antenna tracking oscillation
    if (dishRef.current) {
      dishRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }

    // Blinking telemetry beacon light
    if (beaconRef.current) {
      beaconRef.current.intensity = (Math.sin(t * 6) > 0.6 ? 2.5 : 0.2);
    }
  });

  return (
    <group ref={groupRef} scale={[0.15, 0.15, 0.15]}>
      {/* 1. Main Satellite Bus (Gold & Titanium Chassis) */}
      <mesh>
        <boxGeometry args={[0.9, 0.6, 0.6]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.3}
          metalness={0.85}
          bumpScale={0.05}
        />
      </mesh>

      {/* Equipment bay cap */}
      <mesh position={[0.48, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.28, 0.18, 16]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 2. Dual Photovoltaic Solar Panels */}
      {/* Left Solar Wing */}
      <group position={[0, 0, -1.35]}>
        <mesh>
          <boxGeometry args={[0.8, 0.04, 1.8]} />
          <meshStandardMaterial
            color="#1e3a8a"
            roughness={0.2}
            metalness={0.7}
            emissive="#172554"
            emissiveIntensity={0.25}
          />
        </mesh>
        {/* Support boom */}
        <mesh position={[0, 0, 0.7]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>

      {/* Right Solar Wing */}
      <group position={[0, 0, 1.35]}>
        <mesh>
          <boxGeometry args={[0.8, 0.04, 1.8]} />
          <meshStandardMaterial
            color="#1e3a8a"
            roughness={0.2}
            metalness={0.7}
            emissive="#172554"
            emissiveIntensity={0.25}
          />
        </mesh>
        {/* Support boom */}
        <mesh position={[0, 0, -0.7]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>

      {/* 3. High-Gain Communications Dish Antenna */}
      <group ref={dishRef} position={[0, 0.45, 0]} rotation={[0.4, 0, 0]}>
        {/* Dish mast */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.3, 8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Parabolic reflector */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.42, 0.15, 24, 1, true]} />
          <meshStandardMaterial color="#f8fafc" metalness={0.6} roughness={0.4} side={THREE.DoubleSide} />
        </mesh>
        {/* Feed horn */}
        <mesh position={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.02, 0.04, 0.12, 8]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* 4. Blinking Navigation Telemetry Beacon */}
      <mesh position={[-0.46, 0.1, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color="#FBBF24" />
      </mesh>
      <pointLight
        ref={beaconRef}
        color="#FBBF24"
        distance={2.5}
        decay={2}
        intensity={1.5}
        position={[-0.46, 0.1, 0]}
      />
    </group>
  );
};

export default ReconSatellite;
