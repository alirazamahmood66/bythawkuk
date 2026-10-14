import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Layout,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  Layers,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ServiceHeroProps {
  title: string;
  eyebrow: string;
  category: string;
  headline: string;
  introduction: string;
  accentColor: string;
  iconName: 'Globe' | 'Layout' | 'ShoppingBag' | 'Smartphone' | 'TrendingUp' | 'Search' | 'Palette' | 'Layers';
  metaBadges: {
    label: string;
    value: string;
  }[];
}

const iconMap = {
  Globe,
  Layout,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  Layers,
};

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  eyebrow,
  headline,
  introduction,
  accentColor,
  iconName,
  metaBadges,
}) => {
  const IconComponent = iconMap[iconName] || Globe;

  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Accent Radial Glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full opacity-15 blur-[120px] pointer-events-none -z-10"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-space-grid opacity-20 pointer-events-none -z-10" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            {/* Eyebrow & Category Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 shadow-sm backdrop-blur-sm">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-xs font-mono font-medium tracking-wider text-amber-300 uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
              {headline}
            </h1>

            {/* Authoritative Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal font-sans">
              {introduction}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="group flex items-center shadow-lg shadow-amber-950/30"
                >
                  <span>Initiate Discovery Call</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <button
                onClick={scrollToCapabilities}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-[#0B0C10]/80 hover:bg-[#0B0C10] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <span>Explore Capabilities</span>
                <ChevronDown className="w-4 h-4 ml-2 opacity-70" />
              </button>
            </div>
          </div>
        </div>

        {/* Metadata Badges Strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4">
          {metaBadges.map((badge, idx) => (
            <Card
              key={idx}
              variant="default"
              spotlight={true}
              withReticles={true}
              className="p-4 rounded-xl bg-[#0B0C10]/90 border-white/[0.08] shadow-sm"
            >
              <div className="text-[11px] font-mono tracking-wider text-amber-400 uppercase font-semibold">
                {badge.label}
              </div>
              <div className="text-sm font-bold text-white mt-1 font-sans">
                {badge.value}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
