import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import { HeroSolarSystem } from '../scenes/HeroSolarSystem';

export interface SolarSystemCanvasProps {
  className?: string;
}

export const SolarSystemCanvas: React.FC<SolarSystemCanvasProps> = ({
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas
        camera={{ position: [0, 2.0, 11.5], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        dpr={[1, 1.5]} // Strict cap to prevent GPU overheating on Retina screens
      >

        <Suspense fallback={null}>
          <HeroSolarSystem isReducedMotion={shouldReduceMotion || false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystemCanvas;
