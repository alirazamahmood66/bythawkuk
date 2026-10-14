import React from 'react';
import { DeliverableItem } from '@/data/servicesData';
import { PackageCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceDeliverablesProps {
  deliverables: DeliverableItem[];
  accentColor: string;
}

export const ServiceDeliverables: React.FC<ServiceDeliverablesProps> = ({
  deliverables,
  accentColor,
}) => {
  return (
    <section id="deliverables" className="py-16 md:py-20 border-b border-white/[0.08] scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
          <span>// TANGIBLE ARTIFACTS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Tangible Deliverables Matrix
        </h2>
        <p className="text-slate-300 mt-3 text-base leading-relaxed font-sans">
          Every engagement produces verified, production-grade assets that you own completely. No vague consulting hours—only concrete deliverables.
        </p>
      </div>

      {/* Grid of Deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deliverables.map((item, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6 rounded-2xl bg-[#071426]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/[0.06]">
                <span
                  className="text-[10px] font-mono font-medium tracking-wider px-2.5 py-0.5 rounded border uppercase"
                  style={{
                    color: accentColor,
                    borderColor: `${accentColor}40`,
                    backgroundColor: `${accentColor}15`,
                  }}
                >
                  {item.tag}
                </span>
                <PackageCheck className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors font-sans">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>STATUS:</span>
              <span className="text-cyan-300 font-semibold">HANDOVER-READY</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
