import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import { InteractiveSolarSystem } from '../scenes/InteractiveSolarSystem';

export interface InteractiveSolarCanvasProps {
  activeStationIndex: number | null;
  isOverview?: boolean;
  hoveredPlanetId: string | null;
  onHoverPlanet: (id: string | null) => void;
  onSelectPlanet: (id: string) => void;
  isMobile?: boolean;
  className?: string;
  onReady?: () => void;
}

function SceneReadyNotifier({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

export const InteractiveSolarCanvas: React.FC<InteractiveSolarCanvasProps> = ({
  activeStationIndex,
  isOverview = false,
  hoveredPlanetId,
  onHoverPlanet,
  onSelectPlanet,
  isMobile = false,
  className = '',
  onReady,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  const handleSceneReady = React.useCallback(() => {
    setIsReady(true);
    onReady?.();
  }, [onReady]);

  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas
        camera={{ position: [0, 21.0, 27.0], fov: isMobile ? 66 : 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.92,
        }}
        dpr={[1, isMobile ? 1.0 : 1.3]}
      >
        <Suspense fallback={null}>
          <InteractiveSolarSystem
            activeStationIndex={activeStationIndex}
            isOverview={isOverview}
            hoveredPlanetId={hoveredPlanetId}
            onHoverPlanet={onHoverPlanet}
            onSelectPlanet={onSelectPlanet}
            isReducedMotion={shouldReduceMotion || false}
            isMobile={isMobile}
            onReady={handleSceneReady}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InteractiveSolarCanvas;
