import React from 'react';
import { Stars } from '@react-three/drei';
import { CameraRig } from '../components/CameraRig';
import { DominantHeroPlanet } from '../components/DominantHeroPlanet';
import { RingedHeroPlanet } from '../components/RingedHeroPlanet';
import { DistantMoon } from '../components/DistantMoon';
import { AsteroidField } from '../components/AsteroidField';
import { OrbitalTrajectoryRings } from '../components/OrbitalTrajectoryRings';
import { NebulaBackdrop } from '../components/NebulaBackdrop';

interface HeroSolarSystemProps {
  isReducedMotion?: boolean;
}

export const HeroSolarSystem: React.FC<HeroSolarSystemProps> = ({
  isReducedMotion = false,
}) => {
  return (
    <>
      {/* 1. Cinematic Camera Parallax Rig */}
      <CameraRig isReducedMotion={isReducedMotion} />

      {/* 2. Deep Nebula / Milky Way Plasma Backdrop */}
      <NebulaBackdrop />

      {/* 3. Physical Celestial Lighting System */}
      {/* Deep cosmic ambient fill so planetary shadow sides maintain rich silhouette */}
      <ambientLight intensity={0.22} color="#071426" />

      {/* Primary Key Sunlight (shining from upper left, casting dramatic illuminated crescents) */}
      <directionalLight position={[-12, 8, 9]} intensity={3.2} color="#f8fafc" />

      {/* Secondary Stellar Core Point Light */}
      <pointLight position={[-6, 4, 6]} intensity={3.5} distance={35} decay={1.2} color="#38bdf8" />

      {/* 4. Fine Monochromatic Starfield */}
      <Stars
        radius={85}
        depth={50}
        count={isReducedMotion ? 400 : 1200}
        factor={3.0}
        saturation={0}
        fade
        speed={isReducedMotion ? 0 : 0.35}
      />

      {/* 5. Concentric Astronomical Trajectory Vectors */}
      <OrbitalTrajectoryRings />

      {/* 6. Sparse Cinematic Asteroid Cluster */}
      <AsteroidField isReducedMotion={isReducedMotion} count={28} innerRadius={6.5} outerRadius={8.0} />

      {/* 7. Midground Orbiting Crescent Moon */}
      <DistantMoon
        orbitRadius={6.8}
        speed={0.03}
        size={0.24}
        color="#cbd5e1"
        isReducedMotion={isReducedMotion}
      />

      {/* 8. Upper Background Tilted Saturnian System with Rings & Satellite */}
      <RingedHeroPlanet position={[3.4, 3.2, -4.5]} isReducedMotion={isReducedMotion} />

      {/* 9. Dominant Foreground Illuminated Oceanic / Gas Giant Planet (Right Side) */}
      <DominantHeroPlanet position={[4.0, -0.6, 1.6]} radius={3.0} isReducedMotion={isReducedMotion} />
    </>
  );
};
