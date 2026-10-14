import React from 'react';
import { Card } from '@/components/ui/Card';
import { WHAT_HAPPENS_NEXT_STAGES } from '@/data/contactData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const WhatHappensNext: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>// DISCOVERY PROTOCOL</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          What Happens Next
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          From initial submission to project planning, our predictable protocol guarantees clear scoping, architecture, and timeline clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {WHAT_HAPPENS_NEXT_STAGES.map((stage, idx) => (
          <Card
            key={stage.step}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(245, 158, 11, 0.12)"
            className="p-6 md:p-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-wider text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-full">
                  STAGE 0{stage.step}
                </span>
                {idx < WHAT_HAPPENS_NEXT_STAGES.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                )}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-amber-200 transition-colors">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {stage.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center text-[11px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mr-2 animate-pulse" />
              <span>Structured project progression</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
