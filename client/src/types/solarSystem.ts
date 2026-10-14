export type PlanetId =
  | 'sun'
  | 'mercury-cloud'
  | 'venus-design'
  | 'earth-engineering'
  | 'mars-ai'
  | 'jupiter-enterprise'
  | 'saturn-security'
  | 'uranus-analytics'
  | 'neptune-future';

export interface PlanetDefinition {
  id: PlanetId;
  name: string;
  category: string;
  shortDescription: string;
  orbitalRadius: number; // distance from central core
  orbitalSpeed: number; // relative angular speed
  rotationSpeed: number; // axial rotation speed
  radius: number; // 3D geometry scale
  color: string;
  emissiveColor?: string;
  roughness?: number;
  metalness?: number;
  hasRings?: boolean;
  atmosphereColor?: string;
}

export interface SolarSystemState {
  activePlanetId: PlanetId | null;
  isPaused: boolean;
  timeScale: number;
  cameraMode: 'overview' | 'focus' | 'cinematic';
  zoomLevel: number;
}
