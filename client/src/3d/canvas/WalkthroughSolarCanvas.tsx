import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import { WalkthroughSolarSystem } from '../scenes/WalkthroughSolarSystem';

export interface WalkthroughSolarCanvasProps {
  scrollProgress: number;
  className?: string;
}

export const WalkthroughSolarCanvas: React.FC<WalkthroughSolarCanvasProps> = ({
  scrollProgress,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas
        camera={{ position: [0, 2.0, 11.8], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <WalkthroughSolarSystem
            scrollProgress={scrollProgress}
            isReducedMotion={shouldReduceMotion || false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WalkthroughSolarCanvas;
