import React, { useMemo } from 'react';
import { Stars } from '@react-three/drei';
import { SliderCameraRig } from '../components/SliderCameraRig';
import { ConcentricOrbitRings } from '../components/ConcentricOrbitRings';
import { RealAsteroidBelt } from '../components/RealAsteroidBelt';
import { MilkyWayBackdrop, RealSun, AllRealPlanets } from '../components/RealSolarBodies';
import { ASTEROID_BELT } from '../config/realSolarSystem';
import { PLANET_SERVICES } from '../config/planetServicesConfig';
import { ReconSatellite } from '../components/ReconSatellite';

interface InteractiveSolarSystemProps {
  activeStationIndex: number | null;
  isOverview?: boolean;
  hoveredPlanetId: string | null;
  onHoverPlanet: (id: string | null) => void;
  onSelectPlanet: (id: string) => void;
  isReducedMotion?: boolean;
  isMobile?: boolean;
  onReady?: () => void;
}

function SceneReadyWatcher({ onReady }: { onReady?: () => void }) {
  React.useEffect(() => {
    onReady?.();
  }, [onReady]);
  return null;
}

export const InteractiveSolarSystem: React.FC<InteractiveSolarSystemProps> = ({
  activeStationIndex,
  isOverview = false,
  hoveredPlanetId,
  onHoverPlanet,
  onSelectPlanet,
  isReducedMotion = false,
  isMobile = false,
  onReady,
}) => {
  const planetServicesMap = useMemo(() => {
    const map: Record<string, { serviceTitle: string; planetName: string }> = {};
    PLANET_SERVICES.forEach((s) => {
      map[s.id] = { serviceTitle: s.serviceTitle, planetName: s.planetName };
    });
    return map;
  }, []);

  const activeStation = activeStationIndex !== null ? PLANET_SERVICES[activeStationIndex] : undefined;

  return (
    <>
      {/* Dynamic lerp camera rig tuned for carousel slides and whole solar system overview */}
      <SliderCameraRig
        activeStationIndex={activeStationIndex}
        isOverview={isOverview}
        isReducedMotion={isReducedMotion}
        isMobile={isMobile}
      />

      {/* Deep space procedural stars - renders on FRAME 1 without textures */}
      <Stars
        radius={150}
        depth={60}
        count={isReducedMotion ? 500 : 1800}
        factor={3.2}
        saturation={0}
        fade
        speed={isReducedMotion ? 0 : 0.2}
      />

      {/* Real Milky Way photo backdrop */}
      <MilkyWayBackdrop isReducedMotion={isReducedMotion} />

      {/* Balanced lighting so inner and outer planets are clearly visible */}
      <ambientLight intensity={0.24} color="#687d9d" />
      <directionalLight position={[-12, 10, 16]} intensity={2.0} color="#fff8ee" />
      <directionalLight position={[12, -6, -10]} intensity={0.35} color="#5577aa" />

      {/* High-tech Recon Satellite orbiting in Earth's sphere */}
      <ReconSatellite isReducedMotion={isReducedMotion} />

      {/* Planetary orbit rings - renders on FRAME 1 immediately */}
      <ConcentricOrbitRings />

      {/* Asteroid belt between Mars and Jupiter - renders on FRAME 1 immediately */}
      <RealAsteroidBelt
        count={360}
        innerRadius={ASTEROID_BELT.inner}
        outerRadius={ASTEROID_BELT.outer}
        isReducedMotion={isReducedMotion}
      />

      {/* Sun with hover and click interactions - renders on FRAME 1 immediately with procedural plasma */}
      <RealSun
        isReducedMotion={isReducedMotion}
        isHovered={hoveredPlanetId === 'sun'}
        serviceTitle={planetServicesMap['sun']?.serviceTitle}
        planetName={planetServicesMap['sun']?.planetName}
        onPointerOver={onHoverPlanet}
        onPointerOut={() => onHoverPlanet(null)}
        onClick={() => onSelectPlanet('sun')}
      />

      {/* All planets with interactive hover tooltips & click handlers - renders on FRAME 1 immediately */}
      <AllRealPlanets
        isReducedMotion={isReducedMotion}
        isMobile={isMobile}
        hoveredPlanetId={hoveredPlanetId}
        activePlanetId={activeStation?.id}
        planetServices={planetServicesMap}
        onPointerOver={onHoverPlanet}
        onPointerOut={() => onHoverPlanet(null)}
        onClick={onSelectPlanet}
      />
      <SceneReadyWatcher onReady={onReady} />
    </>
  );
};

export default InteractiveSolarSystem;
