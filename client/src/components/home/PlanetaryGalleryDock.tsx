import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Layers, Smartphone, TrendingUp, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface DisciplineNode {
  id: string;
  name: string;
  code: string;
  category: string;
  tagline: string;
  route: string;
  color: string;
  icon: LucideIcon;
  illustration: string;
}

const DISCIPLINES: DisciplineNode[] = [
  {
    id: 'web-development',
    name: 'Web Architecture',
    code: '01',
    category: 'CORE WEB',
    tagline: 'High-velocity Next.js & React architectures engineered for sub-second speeds.',
    route: '/services/web-development',
    color: '#F59E0B',
    icon: Layers,
    illustration: '/images/cosmic/pulsar_energy_core.png',
  },
  {
    id: 'web-applications',
    name: 'Cloud Systems',
    code: '02',
    category: 'SaaS & APIs',
    tagline: 'Resilient cloud platforms, telemetry consoles, and scalable backend infrastructure.',
    route: '/services/web-applications',
    color: '#68afff',
    icon: Cpu,
    illustration: '/images/cosmic/jupiter_gas_giant.png',
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile Products',
    code: '03',
    category: 'iOS & ANDROID',
    tagline: 'Fluid cross-platform mobile apps built for seamless offline-first experiences.',
    route: '/services/mobile-app-development',
    color: '#FBBF24',
    icon: Smartphone,
    illustration: '/images/cosmic/neptune_ice_giant.png',
  },
  {
    id: 'digital-marketing',
    name: 'Growth & SEO',
    code: '04',
    category: 'DISCOVERY',
    tagline: 'High-intent search architecture and performance engines driving pipeline growth.',
    route: '/services/digital-marketing',
    color: '#10b981',
    icon: TrendingUp,
    illustration: '/images/cosmic/quantum_uplink_dish.png',
  },
];

export const PlanetaryGalleryDock: React.FC = () => {
  return (
    <div className="w-full relative z-20 pt-3 sm:pt-4">
      {/* Dock Header */}
      <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/[0.08] mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold">
            FLAGSHIP DISCIPLINES // DIGITAL CAPABILITIES
          </span>
        </div>

        <Link
          to="/services"
          className="text-xs text-slate-400 hover:text-amber-300 font-mono transition-colors hidden sm:inline"
        >
          View All Services &rarr;
        </Link>
      </div>

      {/* 4-Column Transparent Glass Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {DISCIPLINES.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.route}
              className="group block focus-ring rounded-xl h-full"
              aria-label={`Explore ${item.name} specification`}
            >
              <Card
                variant="default"
                spotlight={true}
                withReticles={true}
                spotlightColor="rgba(32, 217, 243, 0.12)"
                className="h-full p-4 rounded-xl bg-[#070D18]/30 backdrop-blur-md border-white/[0.08] hover:border-amber-500/40 hover:bg-[#070D18]/50 transition-all duration-300 shadow-lg flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Transparent Ambient Cosmic Illustration in Card Background */}
                <div className="absolute -right-3 -bottom-3 w-20 h-20 opacity-20 group-hover:opacity-35 transition-all duration-300 pointer-events-none group-hover:scale-110">
                  <img
                    src={item.illustration}
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(32,217,243,0.3)]"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10">
                  {/* Node Header */}
                  <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.06] text-[10px] font-mono">
                    <span className="text-amber-400 font-semibold">{item.code}</span>
                    <span className="text-slate-400">{item.category}</span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm shrink-0"
                      style={{
                        backgroundColor: `${item.color}18`,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight font-sans group-hover:text-amber-200 transition-colors">
                      {item.name}
                    </h4>
                  </div>

                  {/* Concise Copy */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                {/* Bottom Prompt */}
                <div className="relative z-10 pt-2.5 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-amber-400/90 group-hover:text-amber-300">
                  <span>EXPLORE DISCIPLINE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetaryGalleryDock;
