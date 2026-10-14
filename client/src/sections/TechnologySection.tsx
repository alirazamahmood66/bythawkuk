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
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden bg-[#040407]">
      <Container size="xl">
        <SectionHeading
          eyebrow="ENGINEERING STACK // 05"
          title="The Technology"
          highlight="Ecosystem"
          description="We use a modern, proven tech stack to build future-ready products that perform, grow and adapt to your business needs."
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
                spotlightColor="rgba(245, 158, 11, 0.14)"
                className="p-6 sm:p-7 relative bg-[#0B0C10]/75 border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Technical Header Bar */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#FFFBEB]/[0.06] text-[11px] font-mono">
                    <span className="text-[#F59E0B] font-semibold tracking-wider">
                      MOD 0{idx + 1} // {cat.category.toUpperCase().split(' ')[0]}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#FBBF24]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
                      <span className="text-[10px] tracking-widest uppercase">ACTIVE</span>
                    </div>
                  </div>

                  {/* Icon & Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D97706]/15 border border-[#FBBF24]/30 flex items-center justify-center shrink-0 text-[#F59E0B] group-hover:scale-105 group-hover:border-[#F59E0B] transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-base font-bold text-[#FFFBEB] font-sans tracking-tight group-hover:text-[#F59E0B] transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <p className="text-xs text-[#CBD5E1]/80 mb-4 leading-relaxed font-sans">
                    {cat.description}
                  </p>

                  {/* Architectural Benchmark Telemetry */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#D97706]/15 border border-[#FBBF24]/20 text-[10px] font-mono text-[#F59E0B] mb-5">
                    <Activity className="w-3 h-3 text-[#F59E0B] shrink-0" />
                    <span>{benchmark}</span>
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#FFFBEB]/[0.06]">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#040407] text-[#CBD5E1] border border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/50 hover:text-[#F59E0B] hover:bg-[#D97706]/15 transition-all cursor-default"
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
