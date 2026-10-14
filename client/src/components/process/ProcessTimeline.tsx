import React from 'react';
import { Link } from 'react-router-dom';
import { PROCESS_DATA, ProcessStageItem } from '@/data/processData';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const ProcessTimeline: React.FC = () => {
  const { stages } = PROCESS_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
          <span>// 6-STAGE DELIVERY TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          A Disciplined, Phased Methodology
        </h2>
        <p className="text-slate-300 mt-3 text-base sm:text-lg leading-relaxed font-sans">
          Each phase produces verified, tangible milestone deliverables designed to eliminate scope drift and maintain technical velocity.
        </p>
      </div>

      {/* Visual Stage Trajectory */}
      <div className="space-y-12">
        {stages.map((stage: ProcessStageItem, idx: number) => (
          <Card
            key={stage.number}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 relative group shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Number & Stage Identity */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-space-cyan px-3 py-1 rounded-lg bg-space-cyan/10 border border-space-cyan/30">
                    {stage.number}
                  </span>
                  <span className="text-xs font-mono text-space-muted uppercase tracking-wider">
                    PHASE {stage.number} / 06
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-2">
                  {stage.name}
                </h3>

                <p className="text-sm font-medium text-space-text/90 leading-relaxed">
                  {stage.shortDescription}
                </p>

                <p className="text-xs sm:text-sm text-space-muted leading-relaxed font-normal pt-1">
                  {stage.overview}
                </p>

                {stage.relatedServiceRoute && (
                  <div className="pt-3">
                    <Link
                      to={stage.relatedServiceRoute}
                      className="text-xs font-mono tracking-wider text-space-cyan hover:underline inline-flex items-center font-medium"
                    >
                      <span>{stage.relatedServiceLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Activities and Expected Output */}
              <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l lg:border-white/[0.08]">
                {/* Activities list */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-3 font-semibold">
                    TYPICAL STAGE ACTIVITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stage.activities.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start text-xs sm:text-sm text-slate-300 p-3 rounded-lg bg-[#061F25]/60 border border-white/[0.08] font-sans"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-2.5 flex-shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output Deliverable */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      EXPECTED STAGE MILESTONE
                    </span>
                    <div className="flex items-center text-sm font-bold text-white font-sans">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{stage.deliverable}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-cyan-300 self-start sm:self-auto px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30">
                    VERIFIED ARTIFACT
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
