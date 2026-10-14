import React from 'react';
import { Card } from '@/components/ui/Card';
import { PROCESS_DATA, CollaborationPrinciple } from '@/data/processData';
import { Target, Eye, RefreshCw, Award, Activity } from 'lucide-react';

const icons = [Target, Eye, RefreshCw, Award, Activity];

export const CollaborationSection: React.FC = () => {
  const { collaboration } = PROCESS_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
          <span>{collaboration.sectionEyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {collaboration.sectionTitle}
        </h2>
        <p className="text-slate-300 mt-3 text-base sm:text-lg font-light leading-relaxed">
          {collaboration.sectionDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collaboration.principles.map((p: CollaborationPrinciple, idx: number) => {
          const Icon = icons[idx % icons.length];

          return (
            <Card
              key={p.title}
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(245, 158, 11, 0.12)"
              className="p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                  {p.tagline}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-amber-200 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
