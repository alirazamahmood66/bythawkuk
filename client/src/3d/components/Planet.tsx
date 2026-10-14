import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import type { ServicePlanetConfig } from '../config/solarSystemConfig';
import { PlanetLabel } from './PlanetLabel';
import { PlanetSurface } from './PlanetSurface';

interface PlanetProps {
  config: ServicePlanetConfig;
  isReducedMotion?: boolean;
  onHoverChange?: (id: string | null) => void;
}

export const Planet: React.FC<PlanetProps> = ({
  config,
  isReducedMotion = false,
  onHoverChange,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Store current orbital angle in ref to avoid re-renders
  const angleRef = useRef(config.initialAngle);

  useFrame((_, delta) => {
    // 1. Advance orbital position
    const speedMultiplier = isReducedMotion ? 0.02 : 1;
    angleRef.current += delta * config.orbitSpeed * speedMultiplier;

    const x = Math.cos(angleRef.current) * config.orbitRadius;
    const z = Math.sin(angleRef.current) * config.orbitRadius;

    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z);

      // Smooth hover scale interpolation
      const targetScale = isHovered ? 1.25 : 1.0;
      groupRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale } as THREE.Vector3,
        delta * 8
      );
    }

    // 2. Axial rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (isReducedMotion ? 0.05 : 0.5);
    }
  });

  const handlePointerOver = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      setIsHovered(true);
      document.body.style.cursor = 'pointer';
      if (onHoverChange) onHoverChange(config.id);
    },
    [config.id, onHoverChange]
  );

  const handlePointerOut = useCallback(() => {
    setIsHovered(false);
    document.body.style.cursor = 'auto';
    if (onHoverChange) onHoverChange(null);
  }, [onHoverChange]);

  const handleClick = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      document.body.style.cursor = 'auto';
      navigate(config.route);
    },
    [config.route, navigate]
  );

  return (
    <group ref={groupRef}>
      {/* Modular Planet Surface Component (Isolated for future PBR/Model upgrades) */}
      <PlanetSurface
        config={config}
        isHovered={isHovered}
        meshRef={meshRef}
        isReducedMotion={isReducedMotion}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      />

      {/* Technical HUD Label on Hover */}
      <PlanetLabel
        name={config.name}
        category={config.category}
        isVisible={isHovered}
        color={config.color}
      />
    </group>
  );
};
