export interface PlanetAtmosphereConfig {
  color: string;
  rimPower: number; // Fresnel sharpness factor (higher = thinner rim)
  opacity: number;
  scale?: number;
}

export interface PlanetCloudsConfig {
  opacity: number;
  rotationSpeed: number;
  scale?: number;
}

export interface PlanetProceduralConfig {
  palette: {
    primary: string; // Base terrain / sea
    secondary: string; // Continental / plateau
    accent: string; // Mountain ridges / fissure highlights
    dark: string; // Craters / trenches / rift valleys
    specular: string; // Specular reflection tint
  };
  noiseScale: number;
  bumpIntensity: number;
  craterDensity?: number;
  turbulence?: number;
  banding?: number;
}

export interface PlanetSurfaceConfig {
  type: 'terrestrial' | 'earthlike' | 'icy' | 'desert' | 'oceanic' | 'rose_marble';
  // Future asset texture overrides (if provided, they take precedence over procedural generation)
  textureMap?: string;
  bumpMap?: string;
  normalMap?: string;
  roughnessMap?: string;
  cloudsMap?: string;
  // Material parameters
  roughness: number;
  metalness: number;
  bumpScale: number;
  atmosphere?: PlanetAtmosphereConfig;
  clouds?: PlanetCloudsConfig;
  procedural: PlanetProceduralConfig;
}

export interface ServicePlanetConfig {
  id: string;
  name: string;
  route: string;
  category: string;
  tagline: string;
  orbitRadius: number;
  orbitSpeed: number; // Angular velocity factor
  initialAngle: number; // Initial radian position
  size: number; // Geometry radius
  color: string;
  emissiveColor: string;
  roughness: number;
  metalness: number;
  hasRings?: boolean;
  ringInnerRadius?: number;
  ringOuterRadius?: number;
  ringColor?: string;
  atmosphericGlow?: string;
  surface: PlanetSurfaceConfig;
}

export const HERO_SERVICE_PLANETS: ServicePlanetConfig[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    route: '/services/web-development',
    category: 'ENGINEERING',
    tagline: 'High-performance websites engineered for business velocity.',
    orbitRadius: 3.4,
    orbitSpeed: 0.12,
    initialAngle: 0.4,
    size: 0.34,
    color: '#06b6d4', // Cyan accent
    emissiveColor: '#0891b2',
    roughness: 0.75,
    metalness: 0.15,
    atmosphericGlow: 'rgba(6, 182, 212, 0.35)',
    surface: {
      type: 'terrestrial',
      roughness: 0.72,
      metalness: 0.18,
      bumpScale: 0.08,
      atmosphere: {
        color: '#22d3ee',
        rimPower: 3.2,
        opacity: 0.45,
        scale: 1.05,
      },
      procedural: {
        palette: {
          primary: '#162232', // Dark basaltic base rock
          secondary: '#25384d', // Rugged highland plateaus
          accent: '#0891b2', // Cool cyan-tinted mineral fault lines
          dark: '#0a1017', // Impact craters and deep rifts
          specular: '#38bdf8',
        },
        noiseScale: 3.8,
        bumpIntensity: 0.14,
        craterDensity: 0.4,
        turbulence: 0.35,
      },
    },
  },
  {
    id: 'web-applications',
    name: 'Web Applications',
    route: '/services/web-applications',
    category: 'DIGITAL SYSTEMS',
    tagline: 'Scalable cloud architectures, SaaS products & portals.',
    orbitRadius: 5.0,
    orbitSpeed: 0.09,
    initialAngle: 2.1,
    size: 0.46,
    color: '#38bdf8', // Electric Sky Blue
    emissiveColor: '#0284c7',
    roughness: 0.35,
    metalness: 0.25,
    hasRings: true,
    ringInnerRadius: 0.58,
    ringOuterRadius: 0.82,
    ringColor: '#0284c7',
    atmosphericGlow: 'rgba(56, 189, 248, 0.35)',
    surface: {
      type: 'earthlike',
      roughness: 0.38,
      metalness: 0.22,
      bumpScale: 0.06,
      clouds: {
        opacity: 0.55,
        rotationSpeed: 0.07,
        scale: 1.018,
      },
      atmosphere: {
        color: '#38bdf8',
        rimPower: 2.8,
        opacity: 0.6,
        scale: 1.06,
      },
      procedural: {
        palette: {
          primary: '#082f49', // Deep sapphire ocean abysses
          secondary: '#0c4a6e', // Continental shelf shallows
          accent: '#1e3a5f', // Earth/slate landmasses with subtle vegetation
          dark: '#031726', // Oceanic trenches
          specular: '#bae6fd', // Glint on water surfaces
        },
        noiseScale: 2.8,
        bumpIntensity: 0.1,
        turbulence: 0.5,
      },
    },
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    route: '/services/mobile-app-development',
    category: 'MOBILE PLATFORMS',
    tagline: 'iOS, Android & cross-platform high-retention apps.',
    orbitRadius: 6.6,
    orbitSpeed: 0.07,
    initialAngle: 4.2,
    size: 0.38,
    color: '#8b5cf6', // Cosmic Violet
    emissiveColor: '#7c3aed',
    roughness: 0.55,
    metalness: 0.3,
    atmosphericGlow: 'rgba(139, 92, 246, 0.35)',
    surface: {
      type: 'icy',
      roughness: 0.42,
      metalness: 0.32,
      bumpScale: 0.09,
      atmosphere: {
        color: '#a78bfa',
        rimPower: 3.5,
        opacity: 0.4,
        scale: 1.05,
      },
      procedural: {
        palette: {
          primary: '#1e1638', // Deep violet-indigo mantle
          secondary: '#2e2154', // Fractured ice crust
          accent: '#7c3aed', // Sub-surface crystalline fissure glow
          dark: '#0f0a1c', // Deep chasm fault lines
          specular: '#c4b5fd', // Glacial specular sheen
        },
        noiseScale: 4.2,
        bumpIntensity: 0.16,
        craterDensity: 0.2,
        turbulence: 0.4,
      },
    },
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    route: '/services/digital-marketing',
    category: 'GROWTH ENGINE',
    tagline: 'Data-driven acquisition, PPC, Meta ads & performance.',
    orbitRadius: 8.2,
    orbitSpeed: 0.055,
    initialAngle: 1.2,
    size: 0.42,
    color: '#f59e0b', // Amber Gold
    emissiveColor: '#d97706',
    roughness: 0.85,
    metalness: 0.1,
    atmosphericGlow: 'rgba(245, 158, 11, 0.3)',
    surface: {
      type: 'desert',
      roughness: 0.82,
      metalness: 0.12,
      bumpScale: 0.07,
      atmosphere: {
        color: '#fbbf24',
        rimPower: 3.0,
        opacity: 0.38,
        scale: 1.05,
      },
      procedural: {
        palette: {
          primary: '#451a03', // Deep terracotta bedrock
          secondary: '#78350f', // Oxidized canyon cliffs
          accent: '#b45309', // Warm golden sand plains & dune crests
          dark: '#260e02', // Canyon shadows & volcanic rifts
          specular: '#fde68a', // Low matte mineral specular
        },
        noiseScale: 3.4,
        bumpIntensity: 0.12,
        banding: 0.25, // Longitudinal dune striations
        turbulence: 0.3,
      },
    },
  },
  {
    id: 'seo',
    name: 'SEO & Search Architecture',
    route: '/services/seo',
    category: 'DISCOVERY',
    tagline: 'Technical search strategies capturing qualified intent.',
    orbitRadius: 9.8,
    orbitSpeed: 0.042,
    initialAngle: 3.5,
    size: 0.32,
    color: '#10b981', // Emerald
    emissiveColor: '#059669',
    roughness: 0.65,
    metalness: 0.2,
    atmosphericGlow: 'rgba(16, 185, 129, 0.3)',
    surface: {
      type: 'oceanic',
      roughness: 0.58,
      metalness: 0.22,
      bumpScale: 0.08,
      atmosphere: {
        color: '#34d399',
        rimPower: 3.6,
        opacity: 0.42,
        scale: 1.05,
      },
      procedural: {
        palette: {
          primary: '#022c22', // Deep abyssal emerald seabed
          secondary: '#064e3b', // Oceanic teal plateaus
          accent: '#059669', // Crystalline coastal reef bands
          dark: '#011711', // Deep ocean rifts
          specular: '#a7f3d0',
        },
        noiseScale: 3.6,
        bumpIntensity: 0.11,
        turbulence: 0.45,
      },
    },
  },
  {
    id: 'graphic-design',
    name: 'Graphic & UI/UX Design',
    route: '/services/graphic-design',
    category: 'CREATIVE CRAFT',
    tagline: 'Brand identities, design systems & high-conversion UI/UX.',
    orbitRadius: 11.5,
    orbitSpeed: 0.032,
    initialAngle: 5.3,
    size: 0.44,
    color: '#ec4899', // Nebula Rose
    emissiveColor: '#db2777',
    roughness: 0.48,
    metalness: 0.3,
    hasRings: true,
    ringInnerRadius: 0.56,
    ringOuterRadius: 0.78,
    ringColor: '#db2777',
    atmosphericGlow: 'rgba(236, 72, 153, 0.3)',
    surface: {
      type: 'rose_marble',
      roughness: 0.45,
      metalness: 0.28,
      bumpScale: 0.07,
      atmosphere: {
        color: '#f472b6',
        rimPower: 2.9,
        opacity: 0.4,
        scale: 1.05,
      },
      procedural: {
        palette: {
          primary: '#4a044e', // Deep plum tectonic base
          secondary: '#701a75', // Dusky rose highland ridges
          accent: '#be185d', // Vibrant magenta-rose marble veining
          dark: '#2e0234', // Deep metamorphic crevices
          specular: '#fbcfe8',
        },
        noiseScale: 3.0,
        bumpIntensity: 0.1,
        turbulence: 0.6,
        banding: 0.35, // Swirling celestial marbling
      },
    },
  },
];

export const SOLAR_CORE_CONFIG = {
  name: 'BYTHAWK CORE',
  radius: 1.25,
  color: '#38bdf8',
  warmColor: '#f8fafc',
  coronaColor: '#0284c7',
  emissiveIntensity: 3.5,
  pointLightIntensity: 4.5,
  pointLightDistance: 32,
  pulseSpeed: 0.6,
};
