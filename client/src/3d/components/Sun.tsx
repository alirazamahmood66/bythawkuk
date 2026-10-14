import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { SOLAR_CORE_CONFIG } from '../config/solarSystemConfig';
import { getOrCreateSunTexture } from '../utils/planetTextureFactory';

interface SunProps {
  isReducedMotion?: boolean;
}

export const Sun: React.FC<SunProps> = ({ isReducedMotion = false }) => {
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const coronaMeshRef = useRef<THREE.Mesh>(null);
  const outerVeilRef = useRef<THREE.Mesh>(null);
  const latticeMeshRef = useRef<THREE.Mesh>(null);

  // Retrieve or generate cached procedural solar granulation texture
  const sunTexture = useMemo(() => getOrCreateSunTexture(), []);

  useFrame((state, delta) => {
    if (isReducedMotion) return;

    // 1. Slow, realistic stellar rotation
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y += delta * 0.08;
    }

    // 2. Coronal convection breathing
    const time = state.clock.getElapsedTime();
    const pulse = 1.0 + Math.sin(time * SOLAR_CORE_CONFIG.pulseSpeed) * 0.018;

    if (coronaMeshRef.current) {
      coronaMeshRef.current.rotation.y -= delta * 0.05;
      coronaMeshRef.current.scale.set(pulse * 1.14, pulse * 1.14, pulse * 1.14);
    }

    if (outerVeilRef.current) {
      outerVeilRef.current.rotation.z += delta * 0.03;
      outerVeilRef.current.scale.set(pulse * 1.32, pulse * 1.32, pulse * 1.32);
    }

    // 3. Subtle technological energy lattice
    if (latticeMeshRef.current) {
      latticeMeshRef.current.rotation.y -= delta * 0.12;
      latticeMeshRef.current.rotation.x += delta * 0.06;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Primary Incandescent Warm Stellar Core */}
      <mesh ref={coreMeshRef}>
        <sphereGeometry args={[SOLAR_CORE_CONFIG.radius * 0.92, 48, 48]} />
        <meshStandardMaterial
          map={sunTexture}
          emissiveMap={sunTexture}
          emissive="#fb923c"
          emissiveIntensity={2.8}
          roughness={0.85}
          metalness={0.0}
        />
      </mesh>

      {/* 2. Concentric Technological Energy Lattice */}
      <mesh ref={latticeMeshRef}>
        <icosahedronGeometry args={[SOLAR_CORE_CONFIG.radius, 2]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* 3. Layered Inner Solar Corona */}
      <mesh ref={coronaMeshRef} raycast={() => null}>
        <sphereGeometry args={[SOLAR_CORE_CONFIG.radius * 1.15, 32, 32]} />
        <meshBasicMaterial
          color="#ea580c"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* 4. Outer Soft Stellar Coronal Veil */}
      <mesh ref={outerVeilRef} raycast={() => null}>
        <sphereGeometry args={[SOLAR_CORE_CONFIG.radius * 1.35, 24, 24]} />
        <meshBasicMaterial
          color="#f97316"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* 5. Primary Physical Sunlight Source */}
      <pointLight
        color="#fffbeb"
        intensity={SOLAR_CORE_CONFIG.pointLightIntensity}
        distance={SOLAR_CORE_CONFIG.pointLightDistance}
        decay={1.1}
      />

      {/* 6. Secondary Warm Stellar Spectrum Glow */}
      <pointLight
        color="#f59e0b"
        intensity={2.6}
        distance={24}
        decay={1.4}
      />
    </group>
  );
};
