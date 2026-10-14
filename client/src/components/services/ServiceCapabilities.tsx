import React from 'react';
import { CapabilityItem } from '@/data/servicesData';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceCapabilitiesProps {
  capabilities: CapabilityItem[];
  accentColor: string;
}

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({
  capabilities,
  accentColor,
}) => {
  return (
    <section id="capabilities" className="py-16 md:py-24 border-b border-white/[0.08] scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
          <span>// TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          What We Deliver
        </h2>
        <p className="text-slate-300 mt-3 text-base sm:text-lg leading-relaxed font-sans">
          Exhaustive end-to-end capabilities engineered to provide full technical and operational coverage for your digital operations.
        </p>
      </div>

      {/* Capabilities 6-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((item) => (
          <Card
            key={item.id}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6 sm:p-7 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Number and Accent line */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-space-muted group-hover:text-white transition-colors">
                  {item.number}
                </span>
                <span
                  className="w-8 h-[2px] rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: accentColor }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-space-cyan transition-colors mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-space-muted leading-relaxed mb-6 font-normal">
                {item.description}
              </p>
            </div>

            {/* Key Outputs Pill Tags */}
            <div className="pt-4 border-t border-space-border/40">
              <span className="text-[11px] font-mono uppercase tracking-wider text-space-muted block mb-2">
                KEY OUTPUTS
              </span>
              <ul className="space-y-1.5">
                {item.keyOutputs.map((output, idx) => (
                  <li key={idx} className="flex items-center text-xs text-space-text/90">
                    <Check
                      className="w-3.5 h-3.5 mr-2 flex-shrink-0"
                      style={{ color: accentColor }}
                    />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
