import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { PROCESS_DATA, EngagementType } from '@/data/processData';
import { ArrowUpRight } from 'lucide-react';

export const EngagementTypes: React.FC = () => {
  const { engagementTypes } = PROCESS_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
          <span>{engagementTypes.sectionEyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {engagementTypes.sectionTitle}
        </h2>
        <p className="text-slate-300 mt-3 text-base sm:text-lg font-light leading-relaxed">
          {engagementTypes.sectionDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engagementTypes.types.map((type: EngagementType) => (
          <Card
            key={type.title}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(245, 158, 11, 0.12)"
            className="p-6 sm:p-7 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">
                  {type.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-200 transition-colors">
                {type.title}
              </h3>

              <div className="text-xs font-mono text-amber-400/80 mb-4 uppercase">
                {type.targetAudience}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                {type.description}
              </p>

              {/* Typical focus tags */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  CORE FOCUS AREAS
                </span>
                {type.typicalFocus.map((focus, fIdx) => (
                  <div key={fIdx} className="flex items-center text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <Link
                to={type.serviceLink}
                className="text-xs font-mono tracking-wider text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center font-medium"
              >
                <span>{type.serviceLinkLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
