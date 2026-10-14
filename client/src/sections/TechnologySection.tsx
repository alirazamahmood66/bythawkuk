import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { TECHNOLOGY_ECOSYSTEM_DATA, type TechCategory } from '@/data/homepageData';
import { Layout, Server, Smartphone, Box, TrendingUp, Cpu, Activity, type LucideIcon } from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  'Frontend Engineering': Layout,
  'Backend & Cloud': Server,
  'Mobile Products': Smartphone,
  '3D & Experience': Box,
  'Search & Growth': TrendingUp,
};

const categoryMetrics: Record<string, string> = {
  'Frontend Engineering': 'LCP < 0.8s // REACT 19 READY',
  'Backend & Cloud': '99.99% RESILIENCE // CLOUD SCALE',
  'Mobile Products': '60FPS NATIVE // DUAL OS PIPELINE',
  '3D & Experience': 'WEBGL ACCELERATED // SHADER OPT',
  'Search & Growth': '100/100 CWV // SEMANTIC GRAPH',
};

export const TechnologySection: React.FC = () => {
  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden bg-[#050b18]/40">
      <Container size="xl">
        <SectionHeading
          eyebrow="ENGINEERING STACK // 05"
          title="Technology"
          highlight="Ecosystem"
          description="We choose technology based on the problem, not the trend. Modern, scalable, and battle-tested frameworks tailored for production reliability."
        />

        {/* Categorized Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_ECOSYSTEM_DATA.map((cat: TechCategory, idx: number) => {
            const Icon = categoryIcons[cat.category] || Cpu;
            const benchmark = categoryMetrics[cat.category] || 'ENTERPRISE PRODUCTION GRADE';

            return (
              <Card
                key={cat.category}
                variant="default"
                spotlight={true}
                withReticles={true}
                spotlightColor="rgba(32, 217, 243, 0.12)"
                className="p-6 sm:p-7 relative border-white/[0.08] hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Technical Header Bar */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06] text-[11px] font-mono">
                    <span className="text-cyan-400 font-semibold tracking-wider">
                      MOD 0{idx + 1} // {cat.category.toUpperCase().split(' ')[0]}
                    </span>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] tracking-widest uppercase">ACTIVE</span>
                    </div>
                  </div>

                  {/* Icon & Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-base font-bold text-white font-sans tracking-tight group-hover:text-cyan-200 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-sans">
                    {cat.description}
                  </p>

                  {/* Architectural Benchmark Telemetry */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/30 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 mb-5">
                    <Activity className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{benchmark}</span>
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#030712] text-slate-300 border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-950/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
