import React from 'react';
import { Stars } from '@react-three/drei';
import { WalkthroughCameraRig } from '../components/WalkthroughCameraRig';
import { ConcentricOrbitRings } from '../components/ConcentricOrbitRings';
import { RealAsteroidBelt } from '../components/RealAsteroidBelt';
import { MilkyWayBackdrop, RealSun, AllRealPlanets } from '../components/RealSolarBodies';
import { ASTEROID_BELT } from '../config/realSolarSystem';

interface WalkthroughSolarSystemProps {
  scrollProgress: number;
  isReducedMotion?: boolean;
}

export const WalkthroughSolarSystem: React.FC<WalkthroughSolarSystemProps> = ({
  scrollProgress,
  isReducedMotion = false,
}) => {
  return (
    <>
      <WalkthroughCameraRig scrollProgress={scrollProgress} isReducedMotion={isReducedMotion} />

      {/* Real Milky Way photo backdrop + fine stars for depth */}
      <MilkyWayBackdrop isReducedMotion={isReducedMotion} />
      <Stars radius={150} depth={60} count={isReducedMotion ? 600 : 2200} factor={3.4} saturation={0} fade speed={isReducedMotion ? 0 : 0.25} />

      {/* Lighting: low fill + strong sun-side key => real day/night terminators */}
      <ambientLight intensity={0.16} color="#8aa0c8" />
      <directionalLight position={[-9, 6, 12]} intensity={3.1} color="#fff4e0" />
      <directionalLight position={[10, -3, 6]} intensity={0.22} color="#7aa7ff" />

      <RealSun isReducedMotion={isReducedMotion} />
      <ConcentricOrbitRings />
      <AllRealPlanets isReducedMotion={isReducedMotion} />

      {/* Main asteroid belt between Mars and Jupiter */}
      <RealAsteroidBelt
        count={420}
        innerRadius={ASTEROID_BELT.inner}
        outerRadius={ASTEROID_BELT.outer}
        isReducedMotion={isReducedMotion}
      />
    </>
  );
};

export default WalkthroughSolarSystem;
