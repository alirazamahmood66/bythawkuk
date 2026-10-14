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
}

export const InteractiveSolarSystem: React.FC<InteractiveSolarSystemProps> = ({
  activeStationIndex,
  isOverview = false,
  hoveredPlanetId,
  onHoverPlanet,
  onSelectPlanet,
  isReducedMotion = false,
  isMobile = false,
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

      {/* Real Milky Way photo backdrop + deep space stars */}
      <MilkyWayBackdrop isReducedMotion={isReducedMotion} />
      <Stars
        radius={150}
        depth={60}
        count={isReducedMotion ? 600 : 2200}
        factor={3.4}
        saturation={0}
        fade
        speed={isReducedMotion ? 0 : 0.25}
      />

      {/* Balanced lighting so inner and outer planets (Saturn, Uranus, Neptune) are clearly visible */}
      <ambientLight intensity={0.22} color="#687d9d" />
      <directionalLight position={[-12, 10, 16]} intensity={2.0} color="#fff8ee" />
      <directionalLight position={[12, -6, -10]} intensity={0.35} color="#5577aa" />

      {/* High-tech Recon Satellite orbiting in Earth's sphere */}
      <ReconSatellite isReducedMotion={isReducedMotion} />

      {/* Sun with hover and click interactions */}
      <RealSun
        isReducedMotion={isReducedMotion}
        isHovered={hoveredPlanetId === 'sun'}
        serviceTitle={planetServicesMap['sun']?.serviceTitle}
        planetName={planetServicesMap['sun']?.planetName}
        onPointerOver={onHoverPlanet}
        onPointerOut={() => onHoverPlanet(null)}
        onClick={() => onSelectPlanet('sun')}
      />

      {/* Planetary orbit rings */}
      <ConcentricOrbitRings />

      {/* All planets with interactive hover tooltips & click handlers */}
      <AllRealPlanets
        isReducedMotion={isReducedMotion}
        hoveredPlanetId={hoveredPlanetId}
        activePlanetId={activeStation?.id}
        planetServices={planetServicesMap}
        onPointerOver={onHoverPlanet}
        onPointerOut={() => onHoverPlanet(null)}
        onClick={onSelectPlanet}
      />

      {/* Asteroid belt between Mars and Jupiter */}
      <RealAsteroidBelt
        count={420}
        innerRadius={ASTEROID_BELT.inner}
        outerRadius={ASTEROID_BELT.outer}
        isReducedMotion={isReducedMotion}
      />
    </>
  );
};

export default InteractiveSolarSystem;
