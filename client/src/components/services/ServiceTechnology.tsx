import React from 'react';
import { TechStackTier } from '@/data/servicesData';
import { Cpu } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceTechnologyProps {
  technologies: TechStackTier[];
  accentColor: string;
}

export const ServiceTechnology: React.FC<ServiceTechnologyProps> = ({
  technologies,
  accentColor,
}) => {
  return (
    <section className="py-16 md:py-20 border-b border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
          <span>// CURATED TOOLING</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Curated Technology Stack
        </h2>
        <p className="text-slate-300 mt-3 text-base leading-relaxed font-sans">
          We intentionally select modern, battle-tested technologies that balance developer productivity, execution performance, and enterprise support.
        </p>
      </div>

      {/* Stack Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tier, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-7 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-white/[0.06]">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
                style={{
                  backgroundColor: `${accentColor}18`,
                  border: `1px solid ${accentColor}40`,
                }}
              >
                <Cpu className="w-4 h-4" style={{ color: accentColor }} />
              </div>
              <h3 className="text-base font-bold text-white tracking-wide font-sans">
                {tier.category}
              </h3>
            </div>

            <div className="space-y-4">
              {tier.tools.map((tool, tIdx) => (
                <div key={tIdx} className="group/tool pb-3 border-b border-white/[0.04] last:border-none last:pb-0">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-white group-hover/tool:text-cyan-300 transition-colors font-sans">
                      {tool.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans font-normal">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceTechnology;
