import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { ServicePlanetConfig } from '../config/solarSystemConfig';
import { getOrCreatePlanetTextures } from '../utils/planetTextureFactory';
import { PlanetAtmosphere } from './PlanetAtmosphere';
import { PlanetRings } from './PlanetRings';

export interface PlanetSurfaceProps {
  config: ServicePlanetConfig;
  isHovered: boolean;
  meshRef: React.RefObject<THREE.Mesh | null>;
  isReducedMotion?: boolean;
  onPointerOver: (e: { stopPropagation: () => void }) => void;
  onPointerOut: () => void;
  onClick: (e: { stopPropagation: () => void }) => void;
}

/**
 * Modular Realistic Planet Surface System.
 * Renders high-fidelity PBR surfaces with multi-octave topographical elevation,
 * tangent-space normal maps, roughness differentiation, independent rotating cloud shells,
 * physical Fresnel atmosphere limbs, and detailed ring systems.
 *
 * Supports future drop-in image assets via `config.surface.textureMap` without breaking
 * interaction, routing, or accessibility.
 */
export const PlanetSurface: React.FC<PlanetSurfaceProps> = ({
  config,
  isHovered,
  meshRef,
  isReducedMotion = false,
  onPointerOver,
  onPointerOut,
  onClick,
}) => {
  const cloudsMeshRef = useRef<THREE.Mesh>(null);

  // 1. Retrieve or generate memoized procedural PBR textures
  const textures = useMemo(() => {
    return getOrCreatePlanetTextures(config.surface);
  }, [config.surface]);

  // 2. Normal scale vector
  const normalScale = useMemo(() => {
    const scale = config.surface.bumpScale * 4.0;
    return new THREE.Vector2(scale, scale);
  }, [config.surface.bumpScale]);

  // 3. Animate atmospheric cloud layer independently
  useFrame((_, delta) => {
    if (cloudsMeshRef.current && !isReducedMotion && config.surface.clouds) {
      cloudsMeshRef.current.rotation.y += delta * config.surface.clouds.rotationSpeed;
      cloudsMeshRef.current.rotation.x += delta * (config.surface.clouds.rotationSpeed * 0.2);
    }
  });

  const cloudScale = config.surface.clouds?.scale || 1.018;

  return (
    <group>
      {/* Primary PBR Planetary Crust */}
      <mesh
        ref={meshRef}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onClick={onClick}
      >
        <sphereGeometry args={[config.size, 64, 64]} />
        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          normalScale={normalScale}
          roughnessMap={textures.roughnessMap}
          roughness={config.surface.roughness}
          metalness={config.surface.metalness}
          emissive={config.emissiveColor}
          emissiveIntensity={isHovered ? 0.35 : 0.04}
        />
      </mesh>

      {/* Atmospheric Cloud Layer (if configured, e.g. Earthlike Web Applications) */}
      {config.surface.clouds && textures.cloudsMap && (
        <mesh
          ref={cloudsMeshRef}
          scale={[cloudScale, cloudScale, cloudScale]}
          raycast={() => null}
        >
          <sphereGeometry args={[config.size, 48, 48]} />
          <meshStandardMaterial
            map={textures.cloudsMap}
            transparent
            opacity={config.surface.clouds.opacity}
            depthWrite={false}
            blending={THREE.NormalBlending}
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>
      )}

      {/* Thin, Realistic Rayleigh / Fresnel Atmospheric Limb */}
      {config.surface.atmosphere && (
        <PlanetAtmosphere
          radius={config.size}
          config={config.surface.atmosphere}
          isHovered={isHovered}
        />
      )}

      {/* High-Fidelity Dust Banded Planetary Rings (if applicable) */}
      {config.hasRings && (
        <PlanetRings
          innerRadius={config.ringInnerRadius || config.size * 1.4}
          outerRadius={config.ringOuterRadius || config.size * 2.0}
          color={config.ringColor || config.color}
          isHovered={isHovered}
          isReducedMotion={isReducedMotion}
        />
      )}
    </group>
  );
};
