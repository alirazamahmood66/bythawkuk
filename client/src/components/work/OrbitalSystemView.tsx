import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WorkProject } from '@/data/workData';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Globe,
  ExternalLink,
  ArrowRight,
  Play,
  Pause,
  Compass,
  RotateCw,
  Sparkles,
  Layers,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

interface OrbitalSystemViewProps {
  projects: WorkProject[];
}

interface PlanetStrataLayer {
  id: string;
  name: string;
  classification: string;
  depth: string;
  temperature: string;
  pressure: string;
  elements: string[];
  architectureTier: string;
  architectureRole: string;
  color: string;
  glow: string;
  description: string;
}

interface PlanetOrbitConfig {
  slug: string;
  planetName: string;
  celestialDesignation: string;
  imageSrc: string;
  radius: number; // orbital radius in SVG units
  baseSpeed: number; // orbital angular velocity in deg/sec
  size: number; // planet radius in SVG units
  color: string;
  glow: string;
  astronomicalUnit: string;
  orbitIndex: string;
  strata: PlanetStrataLayer[];
}

const ORBIT_CONFIGS: Record<string, PlanetOrbitConfig> = {
  'bythawk-studio': {
    slug: 'bythawk-studio',
    planetName: 'Earth (Blue Marble)',
    celestialDesignation: 'TERRA-01 // APOLLO 17 REFERENCE',
    imageSrc: '/images/cosmic/earth_blue_marble.png',
    radius: 95,
    baseSpeed: 16,
    size: 13,
    color: '#23F7DB',
    glow: 'rgba(32, 217, 243, 0.6)',
    astronomicalUnit: '1.00 AU',
    orbitIndex: 'ORBIT I',
    strata: [
      {
        id: 'crust',
        name: 'Troposphere & Oceanic Crust',
        classification: 'Fluid Envelope & Silicate Tectonic Plates',
        depth: '0 - 45 km',
        temperature: '15°C to 450°C',
        pressure: '1.013 bar to 1.2 GPa',
        elements: ['78.1% N₂', '20.9% O₂', '0.93% Ar', 'SiO₂ (Silicates)'],
        architectureTier: 'Tier 1: Global Edge CDN & React Server Components',
        architectureRole: 'Zero-latency content delivery, sub-millisecond edge routing, client hydration.',
        color: '#38bdf8',
        glow: 'rgba(56, 189, 248, 0.6)',
        description: 'Dynamic atmospheric envelope shielding human users and delivering real-time sensory interface response.',
      },
      {
        id: 'mantle',
        name: 'Silicate Convection Mantle',
        classification: 'Viscous Perovskite & Olivine Asthenosphere',
        depth: '45 - 2,890 km',
        temperature: '1,000°C to 3,700°C',
        pressure: '136 GPa',
        elements: ['44.8% O', '22.8% Mg', '21.5% Si', '5.8% Fe'],
        architectureTier: 'Tier 2: Node.js / Go Microservices & Business Logic',
        architectureRole: 'High-throughput asynchronous workflows, algorithmic data transforms, event buses.',
        color: '#0284c7',
        glow: 'rgba(2, 132, 199, 0.6)',
        description: 'Vast thermal convection currents processing massive transactional throughput with fault-tolerant elasticity.',
      },
      {
        id: 'outer-core',
        name: 'Liquid Nickel-Iron Dynamo',
        classification: 'Molten Convective Magnetic Dynamo',
        depth: '2,890 - 5,150 km',
        temperature: '4,000°C to 5,700°C',
        pressure: '330 GPa',
        elements: ['85.5% Liquid Fe', '5.2% Ni', 'Sulfur/Oxygen trace'],
        architectureTier: 'Tier 3: Distributed PostgreSQL & Kafka State Engine',
        architectureRole: 'ACID transactional guarantees, multi-region replication, consensus cluster management.',
        color: '#0ea5e9',
        glow: 'rgba(14, 165, 233, 0.7)',
        description: 'Liquid metallic dynamo generating the magnetosphere that shields data integrity against cosmic corruption.',
      },
      {
        id: 'inner-core',
        name: 'Solid Crystalline Iron Nucleus',
        classification: 'Ultra-Dense Hexagonal Close-Packed Ferronickel',
        depth: '5,150 - 6,371 km',
        temperature: '5,400°C (Solar Photosphere parity)',
        pressure: '360 GPa',
        elements: ['80% Crystalline Fe', '20% Ni alloy'],
        architectureTier: 'Tier 4: Cryptographic HSM & Security Root of Trust',
        architectureRole: 'Hardware-level encryption keys, immutable audit trails, Zero-Trust identity anchor.',
        color: '#e0f2fe',
        glow: 'rgba(224, 242, 254, 0.9)',
        description: 'Crystalline gravitational anchor providing absolute systemic stability and immutable cryptographic security.',
      },
    ],
  },
  'oaksis-academy': {
    slug: 'oaksis-academy',
    planetName: 'Neptune (Voyager 2)',
    celestialDesignation: 'NEPTUNE-VIII // VOYAGER 2 FLYBY',
    imageSrc: '/images/cosmic/neptune_ice_giant.png',
    radius: 150,
    baseSpeed: 11,
    size: 14,
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.6)',
    astronomicalUnit: '30.07 AU',
    orbitIndex: 'ORBIT II',
    strata: [
      {
        id: 'atmosphere',
        name: 'Supersonic Methane Cloud Deck',
        classification: 'Upper Stratosphere & Ammonia-Ice Cirrus',
        depth: '0 - 1,000 km',
        temperature: '-218°C (Coldest Outer Atmosphere)',
        pressure: '1 to 50 bar',
        elements: ['80% H₂', '19% He', '1.5% CH₄ (Methane)'],
        architectureTier: 'Tier 1: Global Distributed Course Delivery & Streaming Video CDN',
        architectureRole: 'Sub-second LMS video transcoding and global multi-tenant asset delivery.',
        color: '#38bdf8',
        glow: 'rgba(56, 189, 248, 0.6)',
        description: 'Fastest winds in the solar system (2,100 km/h) powering instant learning asset distribution across 180 countries.',
      },
      {
        id: 'supercritical-ocean',
        name: 'Supercritical Water-Ammonia Ionic Ocean',
        classification: 'Superheated High-Pressure Fluid Mantle',
        depth: '1,000 - 20,000 km',
        temperature: '2,000°C to 5,000°C',
        pressure: '200 to 600 GPa',
        elements: ['H₂O (Supercritical)', 'NH₃ (Ammonia)', 'CH₄ (Dissociated)'],
        architectureTier: 'Tier 2: Real-Time Telemetry & Adaptive Learning Engine',
        architectureRole: 'Neural analytics tracking student mastery, quiz validation, and live lecture synchronization.',
        color: '#0284c7',
        glow: 'rgba(2, 132, 199, 0.7)',
        description: 'Dense, electrically conductive fluid mantle driving real-time cognitive evaluation and progress scoring.',
      },
      {
        id: 'diamond-layer',
        name: 'Carbon Pyrolysis Diamond Precipitation',
        classification: 'High-Pressure Dissociated Carbon Pyrolysis',
        depth: '20,000 - 22,000 km',
        temperature: '4,500°C',
        pressure: '700 GPa',
        elements: ['Crystalline Diamond Carbon', 'Metallic Hydrogen'],
        architectureTier: 'Tier 3: Blockchain Course Credentialing & Verification',
        architectureRole: 'Immutable cryptographic certificate hashing and fraud-proof student graduation credentials.',
        color: '#7dd3fc',
        glow: 'rgba(125, 211, 252, 0.8)',
        description: 'Methane crushed into solid diamond hail, mirroring cryptographic proof-of-completion hashing.',
      },
      {
        id: 'silicate-core',
        name: 'Silicate-Nickel Rocky Nucleus',
        classification: 'Solid Rocky Ice-Giant Foundation',
        depth: '22,000 - 24,622 km',
        temperature: '7,000°C',
        pressure: '800 GPa',
        elements: ['Silicates (SiO₂)', 'Iron-Nickel alloy', 'Magnesium oxide'],
        architectureTier: 'Tier 4: Enterprise SIS Integration & Master Record Database',
        architectureRole: 'High-compliance student identity records and government regulatory compliance engine.',
        color: '#e0f2fe',
        glow: 'rgba(224, 242, 254, 0.9)',
        description: 'Ultra-dense anchor safeguarding multi-year academic transcripts with 99.999% uptime guarantees.',
      },
    ],
  },
  'ceedrs-platform': {
    slug: 'ceedrs-platform',
    planetName: 'Saturn (Cassini)',
    celestialDesignation: 'SATURN-VI // CASSINI SOLSTICE',
    imageSrc: '/images/cosmic/saturn_ringed_planet.png',
    radius: 205,
    baseSpeed: 8,
    size: 16,
    color: '#facc15',
    glow: 'rgba(250, 204, 21, 0.6)',
    astronomicalUnit: '9.58 AU',
    orbitIndex: 'ORBIT III',
    strata: [
      {
        id: 'ring-system',
        name: 'Luminous Micro-Debris Ring Plane',
        classification: 'Water-Ice Particles & Silicate Dust Resonance',
        depth: 'Extends 282,000 km (10m thick)',
        temperature: '-180°C',
        pressure: 'Vacuum (10⁻¹⁰ Pa)',
        elements: ['99% Pure H₂O Ice', '0.5% Silicate Tholins', 'Iron traces'],
        architectureTier: 'Tier 1: Multi-Stakeholder Collaborative Dispute UI',
        architectureRole: 'Synchronized multi-party mediation workspace, encrypted video testimonies, live document review.',
        color: '#fef08a',
        glow: 'rgba(254, 240, 138, 0.6)',
        description: 'Vast concentric rings representing thousands of legal dispute participants resolving issues in harmonious order.',
      },
      {
        id: 'upper-haze',
        name: 'Hydrogen-Helium Atmosphere & Jet Streams',
        classification: 'Convective Ammonia Clouds & Polar Hexagon',
        depth: '0 - 1,000 km',
        temperature: '-130°C to 0°C',
        pressure: '1 to 20 bar',
        elements: ['96.3% H₂', '3.25% He', '0.45% CH₄', 'NH₃ ice'],
        architectureTier: 'Tier 2: Real-time WebSockets & Encrypted Audio/Video Pipeline',
        architectureRole: 'End-to-end encrypted audio and evidence feeds for remote dispute resolution tribunals.',
        color: '#fde047',
        glow: 'rgba(253, 224, 71, 0.6)',
        description: 'Hexagonal polar jet stream maintaining geometric order over complex cross-border judicial negotiations.',
      },
      {
        id: 'metallic-hydrogen',
        name: 'Liquid Metallic Hydrogen Mantle',
        classification: 'Degenerate Convective Quantum Fluid',
        depth: '1,000 - 30,000 km',
        temperature: '6,000°C to 11,000°C',
        pressure: '200 to 1,000 GPa',
        elements: ['Dissociated Ionized H⁺', 'Helium rain droplets'],
        architectureTier: 'Tier 3: Distributed Legal Escrow & Smart Arbitral Contracts',
        architectureRole: 'Automated escrow fund lock/release upon judge consensus and digitally signed settlement awards.',
        color: '#eab308',
        glow: 'rgba(234, 179, 8, 0.7)',
        description: 'Superconducting fluid mantle ensuring absolute financial escrow execution without human tampering.',
      },
      {
        id: 'silicate-core',
        name: 'High-Density Rocky-Metallic Core',
        classification: 'Iron-Silicate Heavy Element Foundation',
        depth: '30,000 - 58,232 km',
        temperature: '11,700°C',
        pressure: '1,500 GPa',
        elements: ['Silicate rocks', 'Iron', 'Nickel', 'Volatile ices'],
        architectureTier: 'Tier 4: Judicial Audit Vault & UK/EU GDPR Data Store',
        architectureRole: 'Court-admissible evidentiary logging, immutable timestamps, legal hold data persistence.',
        color: '#ca8a04',
        glow: 'rgba(202, 138, 4, 0.9)',
        description: 'Indestructible core preserving certified legal settlement archives with 10-year statutory retention.',
      },
    ],
  },
  'global-integrated-support': {
    slug: 'global-integrated-support',
    planetName: 'Mars (Viking)',
    celestialDesignation: 'MARS-IV // VIKING ORBITER MOSAIC',
    imageSrc: '/images/cosmic/mars_red_planet.png',
    radius: 260,
    baseSpeed: 5.5,
    size: 13,
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.6)',
    astronomicalUnit: '1.52 AU',
    orbitIndex: 'ORBIT IV',
    strata: [
      {
        id: 'regolith',
        name: 'Iron Oxide Crust & Olympus Shields',
        classification: 'Oxidized Basaltic Regolith & Shield Volcanoes',
        depth: '0 - 50 km',
        temperature: '-63°C average (-140°C to 20°C)',
        pressure: '6.1 mbar (Thin CO₂)',
        elements: ['95.3% CO₂', '2.6% N₂', '1.9% Ar', 'Fe₂O₃ (Rust)'],
        architectureTier: 'Tier 1: Global Healthcare Support Dashboard & Multi-Device Portal',
        architectureRole: 'Low-bandwidth clinical portal accessible from field stations and remote care facilities.',
        color: '#f87171',
        glow: 'rgba(248, 113, 113, 0.6)',
        description: 'Rugged terrain operating under extreme constraints, providing dependable support in crisis scenarios.',
      },
      {
        id: 'lithosphere',
        name: 'Thick Rigid Silicate Lithosphere',
        classification: 'Solidified Basaltic Mantle Crust',
        depth: '50 - 1,800 km',
        temperature: '800°C to 1,500°C',
        pressure: '15 to 40 GPa',
        elements: ['Silicates (SiO₂)', 'Iron-rich Olivine', 'Pyroxene'],
        architectureTier: 'Tier 2: 24/7 Global Dispatch & Emergency Incident Routing Engine',
        architectureRole: 'Automated triage triage engine prioritizing urgent care incidents based on severity metrics.',
        color: '#ef4444',
        glow: 'rgba(239, 68, 68, 0.7)',
        description: 'Rigid thermal barrier routing critical health requests to the nearest available on-call specialist team.',
      },
      {
        id: 'liquid-core',
        name: 'Liquid Sulfur-Iron Core Dynamo',
        classification: 'Molten Iron-Sulfur Core',
        depth: '1,800 - 3,390 km',
        temperature: '1,900°C to 2,200°C',
        pressure: '40 GPa',
        elements: ['Molten Fe', '14-17% Light Sulfur (S)', 'Nickel trace'],
        architectureTier: 'Tier 3: HIPAA & NHS Data Protection Compliance Engine',
        architectureRole: 'End-to-end patient record tokenization, pseudonymization, and tamper-evident audit trails.',
        color: '#b91c1c',
        glow: 'rgba(185, 28, 28, 0.8)',
        description: 'Fluid core containing high sulfur fraction, maintaining continuous cryptographic tokenization for patient health.',
      },
    ],
  },
  'darul-quran-wa-sunnah': {
    slug: 'darul-quran-wa-sunnah',
    planetName: 'Jupiter (Juno)',
    celestialDesignation: 'JUPITER-V // NASA JUNO CAM',
    imageSrc: '/images/cosmic/jupiter_gas_giant.png',
    radius: 315,
    baseSpeed: 3.8,
    size: 17,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.6)',
    astronomicalUnit: '5.20 AU',
    orbitIndex: 'ORBIT V',
    strata: [
      {
        id: 'belts',
        name: 'Great Red Spot & Ammonia Belts',
        classification: 'Tropospheric Cloud Decks & Anticyclonic Storms',
        depth: '0 - 1,000 km',
        temperature: '-145°C to 20°C',
        pressure: '0.1 to 10 bar',
        elements: ['89.8% H₂', '10.2% He', 'Ammonia (NH₃)', 'Water vapor'],
        architectureTier: 'Tier 1: Multilingual Islamic Content Portal & High-QPS Audio Streamer',
        architectureRole: 'Global audio CDN streaming verified Quranic recitations and scholarly lectures to millions.',
        color: '#fbbf24',
        glow: 'rgba(251, 191, 36, 0.6)',
        description: 'Monumental storm vortex enduring centuries, mirroring the enduring preservation of sacred knowledge.',
      },
      {
        id: 'molecular-hydrogen',
        name: 'Molecular Hydrogen & Helium Rain',
        classification: 'Supercritical Fluid Transition Zone',
        depth: '1,000 - 20,000 km',
        temperature: '2,000°C to 7,000°C',
        pressure: '10 to 200 GPa',
        elements: ['Supercritical Fluid H₂', 'Liquid He drops', 'Phosphorus'],
        architectureTier: 'Tier 2: Global Student Registration & Live Classroom Scheduler',
        architectureRole: 'Dynamic class allocation coordinating international student cohorts across 24 time zones.',
        color: '#f59e0b',
        glow: 'rgba(245, 158, 11, 0.7)',
        description: 'Massive atmospheric convection handling continuous global traffic surges during peak Ramadan and daily prayers.',
      },
      {
        id: 'metallic-hydrogen',
        name: 'Liquid Metallic Hydrogen Convection Dynamo',
        classification: 'Quantum Liquid Electrical Conductor',
        depth: '20,000 - 60,000 km',
        temperature: '10,000°C to 20,000°C',
        pressure: '300 to 4,000 GPa',
        elements: ['Protons & Delocalized Electrons', 'Metallic H'],
        architectureTier: 'Tier 3: Verified Hadith & Quranic Text Validation Engine',
        architectureRole: 'Tashkeel-accurate Arabic typographic renderer and verified chain-of-transmission data store.',
        color: '#d97706',
        glow: 'rgba(217, 119, 6, 0.8)',
        description: 'Enormous convective current generating the solar system’s most powerful magnetic shield against corruption.',
      },
      {
        id: 'diffuse-core',
        name: 'Diffuse Dilute Heavy-Element Core',
        classification: 'Mantle-Mixed Rocky-Icy Hybrid Core',
        depth: '60,000 - 69,911 km',
        temperature: '24,000°C',
        pressure: '4,500 GPa',
        elements: ['Silicates', 'Iron-Nickel', 'High-pressure water ices'],
        architectureTier: 'Tier 4: Enterprise Non-Profit Governance & Master Donation Engine',
        architectureRole: 'Stripe charity processing, gift-aid tax compliance, transparent donor ledger accounting.',
        color: '#b45309',
        glow: 'rgba(180, 83, 9, 0.9)',
        description: 'Dilute heavy-element anchor guaranteeing financial transparency and enduring institutional perpetuity.',
      },
    ],
  },
};

export const OrbitalSystemView: React.FC<OrbitalSystemViewProps> = ({ projects }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!shouldReduceMotion);
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');
  const [selectedSlug, setSelectedSlug] = useState<string>(
    projects[0]?.slug || 'bythawk-studio'
  );
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedLayerId, setSelectedLayerId] = useState<string>('crust');

  // Angles in degrees for each planet
  const [angles, setAngles] = useState<Record<string, number>>(() => ({
    'bythawk-studio': 45,
    'oaksis-academy': 160,
    'ceedrs-platform': 275,
    'global-integrated-support': 110,
    'darul-quran-wa-sunnah': 330,
  }));

  const lastTimeRef = useRef<number>(performance.now());
  const requestRef = useRef<number | null>(null);

  // 60FPS animation loop for planetary orbits
  useEffect(() => {
    if (!isPlaying || shouldReduceMotion || viewMode === 'interior') {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    const animate = (now: number) => {
      const delta = (now - lastTimeRef.current) / 1000; // in seconds
      lastTimeRef.current = now;

      // When hovering over a planet, slow rotation to 25% for easy inspection
      const speedMultiplier = hoveredSlug ? 0.25 : 1;

      setAngles((prev) => {
        const next: Record<string, number> = { ...prev };
        projects.forEach((p) => {
          const config = ORBIT_CONFIGS[p.slug];
          if (config) {
            const currentAngle = prev[p.slug] || 0;
            next[p.slug] = (currentAngle + config.baseSpeed * delta * speedMultiplier) % 360;
          }
        });
        return next;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    lastTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, hoveredSlug, shouldReduceMotion, projects, viewMode]);

  const activeProject =
    projects.find((p) => p.slug === (hoveredSlug || selectedSlug)) || projects[0];

  const activeConfig = ORBIT_CONFIGS[activeProject.slug] || ORBIT_CONFIGS['bythawk-studio'];

  // Active layer for interior view
  const activeLayer =
    activeConfig.strata.find((s) => s.id === selectedLayerId) || activeConfig.strata[0];

  return (
    <div className="w-full space-y-6">
      {/* 1. Orrery Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#061F25]/90 border border-white/[0.08] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#23F7DB]" />
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase flex items-center gap-2">
              <span>ORBITAL CELESTIAL OBSERVATORY</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                NASA PUBLIC DOMAIN DATA
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Heliocentric alignment around Bythawk Solar Core & Planetary Interior Strata
            </div>
          </div>
        </div>

        {/* Dual Mode View Switcher: Exterior vs Interior Core View */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-lg bg-[#001119] border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setViewMode('exterior')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${
                viewMode === 'exterior'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>ORBITAL EXTERIOR</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setViewMode('interior');
                if (activeConfig.strata.length > 0) {
                  setSelectedLayerId(activeConfig.strata[0].id);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${
                viewMode === 'interior'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>INSIDE PLANETARY CORE</span>
            </button>
          </div>

          {viewMode === 'exterior' && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-[#001119] border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                title={isPlaying ? 'Pause planetary orbits' : 'Resume planetary orbits'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setAngles({
                    'bythawk-studio': 45,
                    'oaksis-academy': 160,
                    'ceedrs-platform': 275,
                    'global-integrated-support': 110,
                    'darul-quran-wa-sunnah': 330,
                  });
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 bg-[#001119] border border-white/[0.08] hover:border-cyan-500/40 transition-colors"
                title="Reset Planetary Alignment"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. Interactive Orrery Visual Canvas & Telemetry HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual Canvas (7 cols) */}
        <div className="lg:col-span-7 relative w-full aspect-square max-w-[620px] mx-auto rounded-2xl bg-[#001119]/95 border border-white/[0.08] p-4 flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Background Astronomical Coordinate Grid */}
          <div className="absolute inset-0 bg-space-grid opacity-20 pointer-events-none" />

          {/* Coordinate Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
            <div className="w-full h-px bg-cyan-500/20" />
            <div className="absolute h-full w-px bg-cyan-500/20" />
          </div>

          {viewMode === 'exterior' ? (
            /* =================== VIEW 1: HELIOCENTRIC ORRERY =================== */
            <svg
              viewBox="-380 -380 760 760"
              className="w-full h-full select-none"
              aria-label="Interactive Solar System Orrery showcasing real NASA planets"
            >
              <defs>
                {/* Corona outer pulse */}
                <radialGradient id="coronaPulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central Star: REAL NASA SOLAR DYNAMICS OBSERVATORY SUN */}
              <circle cx="0" cy="0" r="58" fill="url(#coronaPulse)" className="animate-pulse" />
              <g className="cursor-pointer" onClick={() => setSelectedSlug('bythawk-studio')}>
                <image
                  href="/images/cosmic/sun_solar_core.png"
                  x="-46"
                  y="-46"
                  width="92"
                  height="92"
                  className="filter drop-shadow-[0_0_24px_rgba(251,191,36,0.85)]"
                />
              </g>

              {/* Central Monogram Label */}
              <text
                x="0"
                y="58"
                textAnchor="middle"
                className="text-[9px] font-mono font-bold fill-amber-300 tracking-widest drop-shadow-md"
              >
                BYTHAWK SUN // CORE
              </text>

              {/* Planetary Orbits and Bodies */}
              {projects.map((project) => {
                const config = ORBIT_CONFIGS[project.slug];
                if (!config) return null;

                const angleDeg = angles[project.slug] || 0;
                const angleRad = (angleDeg * Math.PI) / 180;
                const px = config.radius * Math.cos(angleRad);
                const py = config.radius * Math.sin(angleRad);
                const isSelected = selectedSlug === project.slug;
                const isHovered = hoveredSlug === project.slug;
                const isHighlighted = isSelected || isHovered;
                const displaySize = config.size * 2.2;

                return (
                  <g key={project.slug}>
                    {/* Orbit Track Circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r={config.radius}
                      fill="none"
                      stroke={isHighlighted ? config.color : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isHighlighted ? 1.8 : 0.8}
                      strokeDasharray={isHighlighted ? 'none' : '4 6'}
                      className="transition-colors duration-300"
                    />

                    {/* Clean Architecture Tier Index on the axis */}
                    <text
                      x={config.radius + 6}
                      y="-4"
                      fill={isHighlighted ? config.color : 'rgba(148, 163, 184, 0.4)'}
                      className="text-[8px] font-mono tracking-wider transition-colors duration-300"
                    >
                      {`0${projects.findIndex((p) => p.slug === project.slug) + 1}`}
                    </text>

                    {/* Celestial Body Node (Clickable & Hoverable) */}
                    <g
                      transform={`translate(${px}, ${py})`}
                      className="cursor-pointer"
                      onClick={() => setSelectedSlug(project.slug)}
                      onMouseEnter={() => setHoveredSlug(project.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${project.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedSlug(project.slug);
                        }
                      }}
                    >
                      {/* Highlight Targeting Reticle when selected */}
                      {isHighlighted && (
                        <g className="animate-spin-slow">
                          <circle
                            cx="0"
                            cy="0"
                            r={displaySize / 2 + 10}
                            fill="none"
                            stroke={config.color}
                            strokeWidth="1.2"
                            strokeDasharray="4 4"
                            opacity="0.9"
                          />
                          <line
                            x1={-displaySize / 2 - 14}
                            y1="0"
                            x2={-displaySize / 2 - 8}
                            y2="0"
                            stroke={config.color}
                            strokeWidth="1.5"
                          />
                          <line
                            x1={displaySize / 2 + 8}
                            y1="0"
                            x2={displaySize / 2 + 14}
                            y2="0"
                            stroke={config.color}
                            strokeWidth="1.5"
                          />
                          <line
                            x1="0"
                            y1={-displaySize / 2 - 14}
                            x2="0"
                            y2={-displaySize / 2 - 8}
                            stroke={config.color}
                            strokeWidth="1.5"
                          />
                          <line
                            x1="0"
                            y1={displaySize / 2 + 8}
                            x2="0"
                            y2={displaySize / 2 + 14}
                            stroke={config.color}
                            strokeWidth="1.5"
                          />
                        </g>
                      )}

                      {/* Planetary Atmospheric Ambient Aura */}
                      <circle
                        cx="0"
                        cy="0"
                        r={displaySize / 2 + 6}
                        fill={config.color}
                        opacity={isHighlighted ? 0.35 : 0.15}
                      />

                      {/* REAL NASA PHOTOGRAPHIC PLANET IMAGE */}
                      <image
                        href={config.imageSrc}
                        x={-displaySize / 2}
                        y={-displaySize / 2}
                        width={displaySize}
                        height={displaySize}
                        className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-transform duration-200"
                      />

                      {/* Planet Spec Label */}
                      <text
                        x="0"
                        y={displaySize / 2 + 14}
                        textAnchor="middle"
                        fill={isHighlighted ? '#ffffff' : '#94a3b8'}
                        className="text-[9px] font-mono font-bold tracking-wider pointer-events-none drop-shadow-md"
                      >
                        {config.planetName.split(' ')[0]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          ) : (
            /* =================== VIEW 2: INSIDE PLANETARY CORE & CUTAWAY =================== */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
              <svg
                viewBox="-220 -220 440 440"
                className="w-full h-full select-none max-w-[500px]"
                aria-label={`Inside cutaway schematic of ${activeConfig.planetName}`}
              >
                <defs>
                  {/* Atmospheric Haze Gradient */}
                  <radialGradient id="atmosphereGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="70%" stopColor={activeConfig.color} stopOpacity="0" />
                    <stop offset="90%" stopColor={activeConfig.color} stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
                  </radialGradient>

                  {/* Core Convective Heat Gradient */}
                  <radialGradient id="innerCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#f97316" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.8" />
                  </radialGradient>
                </defs>

                {/* Magnetic Field Lines looping through the core */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx="190"
                  ry="95"
                  fill="none"
                  stroke={activeConfig.color}
                  strokeWidth="0.8"
                  strokeDasharray="4 6"
                  opacity="0.35"
                  transform="rotate(-25)"
                />
                <ellipse
                  cx="0"
                  cy="0"
                  rx="205"
                  ry="120"
                  fill="none"
                  stroke={activeConfig.color}
                  strokeWidth="0.8"
                  strokeDasharray="4 6"
                  opacity="0.25"
                  transform="rotate(-25)"
                />

                {/* Concentric Geological / Atmospheric Cutaway Strata Rings */}
                {activeConfig.strata.map((stratum, idx) => {
                  const totalLayers = activeConfig.strata.length;
                  // Radii from outside inward:
                  const outerRadius = 160 - idx * (120 / totalLayers);
                  const isSelected = stratum.id === activeLayer.id;

                  return (
                    <g
                      key={stratum.id}
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedLayerId(stratum.id)}
                    >
                      {/* Stratum Ring */}
                      <circle
                        cx="0"
                        cy="0"
                        r={outerRadius}
                        fill={idx === totalLayers - 1 ? 'url(#innerCoreGlow)' : stratum.color}
                        fillOpacity={isSelected ? 0.85 : 0.45}
                        stroke={isSelected ? '#ffffff' : stratum.color}
                        strokeWidth={isSelected ? 2.5 : 1}
                        className="transition-all duration-300 hover:fill-opacity-80"
                      />

                      {/* Stratum Label Indicator Tag */}
                      <g transform={`translate(${outerRadius * 0.72}, ${-outerRadius * 0.72})`}>
                        <line
                          x1="0"
                          y1="0"
                          x2="28"
                          y2="-18"
                          stroke={isSelected ? '#ffffff' : stratum.color}
                          strokeWidth="1.2"
                        />
                        <circle
                          cx="28"
                          cy="-18"
                          r="3"
                          fill={isSelected ? '#ffffff' : stratum.color}
                        />
                        <text
                          x="34"
                          y="-15"
                          fill={isSelected ? '#ffffff' : '#94a3b8'}
                          className="text-[9px] font-mono font-bold tracking-wider"
                        >
                          L{idx + 1}: {stratum.name.split(' ')[0]}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Central Core Hotspot Sparkle */}
                <circle cx="0" cy="0" r="12" fill="#ffffff" className="animate-pulse" />

                {/* Real-time cutaway crosshair telemetry */}
                <circle
                  cx="0"
                  cy="0"
                  r="165"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  opacity="0.3"
                />

                {/* Heading Monogram */}
                <text
                  x="0"
                  y="195"
                  textAnchor="middle"
                  className="text-[10px] font-mono font-bold fill-cyan-300 tracking-widest uppercase"
                >
                  {activeProject.title} // ARCHITECTURAL TIERS
                </text>
              </svg>

              {/* Architecture Blueprint Badge in corner */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#061F25]/50 border border-white/[0.1] backdrop-blur-md">
                <img
                  src={activeConfig.imageSrc}
                  alt={activeProject.title}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase">
                  {activeProject.title} // SYSTEM BLUEPRINT
                </span>
              </div>
            </div>
          )}

          {/* Quick instructions pill at bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#061F25]/60 border border-white/[0.1] text-[10px] font-mono text-slate-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg pointer-events-none">
            <Compass className="w-3 h-3 text-cyan-400" />
            <span>
              {viewMode === 'exterior'
                ? 'Select any system node to inspect architectural blueprint'
                : 'Click any internal layer ring to inspect technical stack & infrastructure mapping'}
            </span>
          </div>
        </div>

        {/* 3. Obsidian Titanium Planetary Telemetry Inspector (Right / 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Planet Navigation Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#061F25]/80 border border-white/[0.08]">
            {projects.map((p) => {
              const isSelected = p.slug === activeProject.slug;
              const config = ORBIT_CONFIGS[p.slug];
              return (
                <button
                  key={p.slug}
                  onClick={() => {
                    setSelectedSlug(p.slug);
                    if (config?.strata?.length > 0) {
                      setSelectedLayerId(config.strata[0].id);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    isSelected
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <img
                    src={config?.imageSrc || '/images/cosmic/earth_blue_marble.png'}
                    alt={p.title}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  <span className="truncate max-w-[95px]">{config?.planetName?.split(' ')[0] || p.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Planetary HUD Panel */}
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor={`${activeConfig.color}25`}
            className="p-6 sm:p-7 bg-[#061F25]/40 backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Top Architecture Status Coordinates */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-bold uppercase">
                  {activeProject.primaryCategory}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">
                  // PRODUCTION VERIFIED
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {activeProject.year || '2026'}
              </span>
            </div>

            {viewMode === 'exterior' ? (
              /* =================== EXTERIOR BLUEPRINT TELEMETRY =================== */
              <>
                {/* Title & Category */}
                <div className="space-y-1 mb-4">
                  <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block font-semibold">
                    SYSTEM BLUEPRINT // {activeProject.primaryCategory}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                  {activeProject.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    TECH SYSTEM SPECS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#001119]/70 border border-[#E8FFFC]/[0.08] text-[#E8FFFC]/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toggle to Interior Cutaway View Button */}
                <div className="p-3 rounded-xl bg-[#061F25]/80 border border-[#04A37B]/40 mb-5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono font-bold text-[#30F1BE] block">
                      FULL-STACK ARCHITECTURE BLUEPRINT
                    </span>
                    <span className="text-[11px] font-mono text-[#E8FFFC]/60 block">
                      Inspect engineering layers, CDN routing, and database state tiers
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode('interior');
                      if (activeConfig.strata.length > 0) {
                        setSelectedLayerId(activeConfig.strata[0].id);
                      }
                    }}
                    className="px-2.5 py-1 rounded bg-[#008C6B]/30 hover:bg-[#008C6B]/50 border border-[#04A37B]/60 text-[11px] font-mono text-[#30F1BE] font-bold transition-colors whitespace-nowrap"
                  >
                    INSPECT STACK &rarr;
                  </button>
                </div>

                {/* Live Domain Pill (if present) */}
                {activeProject.liveUrl && (
                  <div className="p-3 rounded-xl bg-[#001119]/90 border border-[#E8FFFC]/[0.08] flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#23F7DB]" />
                      <span className="text-xs font-mono text-[#E8FFFC] font-medium">
                        {activeProject.liveUrl.replace(/^https?:\/\//, '')}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#30F1BE] flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30F1BE] animate-pulse" />
                      ONLINE
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link to={`/work/${activeProject.slug}`} className="flex-1">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/40"
                    >
                      <span>Inspect Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-[#30F1BE] bg-[#001119] hover:bg-[#061F25] border border-[#04A37B]/40 hover:border-[#23F7DB] transition-all shadow-md"
                    >
                      <span>Launch Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </>
            ) : (
              /* =================== INTERIOR ARCHITECTURE TELEMETRY =================== */
              <div className="space-y-4">
                {/* Architecture Tier Selector Tabs */}
                <div>
                  <span className="text-[10px] font-mono text-[#E8FFFC]/60 uppercase tracking-wider block mb-2">
                    SELECT ARCHITECTURE TIER:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {activeConfig.strata.map((s, idx) => {
                      const isSelected = s.id === activeLayer.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedLayerId(s.id)}
                          className={`text-left p-2 rounded-lg text-xs font-mono transition-all ${
                            isSelected
                              ? 'bg-[#008C6B]/40 border border-[#23F7DB]/50 text-[#30F1BE]'
                              : 'bg-[#001119]/80 border border-[#E8FFFC]/[0.08] text-[#E8FFFC]/60 hover:text-[#E8FFFC]'
                          }`}
                        >
                          <div className="text-[10px] text-[#23F7DB] font-bold">
                            TIER 0{idx + 1}
                          </div>
                          <div className="truncate font-semibold">{s.name.split('&')[0]}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Stratum Deep Dive Specs */}
                <div className="p-4 rounded-xl bg-[#001119]/70 border border-[#E8FFFC]/[0.08] space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#23F7DB] uppercase font-bold tracking-wider block">
                      {activeLayer.classification}
                    </span>
                    <h4 className="text-lg font-bold text-[#E8FFFC] font-sans">
                      {activeLayer.name}
                    </h4>
                  </div>

                  {/* Software Engineering Performance Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#E8FFFC]/[0.08]">
                    <div>
                      <span className="text-[9px] font-mono text-[#E8FFFC]/60 block uppercase">LATENCY</span>
                      <span className="text-xs font-mono font-bold text-[#E8FFFC]">&lt; 95ms</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-[#E8FFFC]/60 block uppercase">UPTIME</span>
                      <span className="text-xs font-mono font-bold text-[#30F1BE]">99.99%</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-[#E8FFFC]/60 block uppercase">PROTOCOL</span>
                      <span className="text-xs font-mono font-bold text-[#23F7DB]">TLS 1.3</span>
                    </div>
                  </div>

                  {/* Architecture Role and Description */}
                  <div className="pt-2 border-t border-[#E8FFFC]/[0.08]">
                    <span className="text-[10px] font-mono text-[#30F1BE] uppercase font-bold tracking-wider block mb-1">
                      ENGINEERING SPECIFICATION:
                    </span>
                    <div className="text-xs font-sans font-bold text-[#E8FFFC] mb-1">
                      {activeLayer.architectureTier}
                    </div>
                    <p className="text-[11px] text-[#E8FFFC]/70 leading-relaxed font-sans">
                      {activeLayer.architectureRole}
                    </p>
                  </div>
                </div>

                {/* Back to Orbital Exterior button */}
                <button
                  type="button"
                  onClick={() => setViewMode('exterior')}
                  className="w-full py-2.5 rounded-xl font-mono text-xs font-bold text-[#30F1BE] bg-[#001119] hover:bg-[#061F25] border border-[#04A37B]/40 hover:border-[#23F7DB] transition-all text-center"
                >
                  &larr; RETURN TO ORBITAL EXTERIOR
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
