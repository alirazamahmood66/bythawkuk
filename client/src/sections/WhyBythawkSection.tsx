import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { WHY_BYTHAWK_DATA } from '@/data/homepageData';
import { Orbit, Compass, Cpu, Target, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';

export const WhyBythawkSection: React.FC = () => {
  const p1 = WHY_BYTHAWK_DATA[0];
  const p2 = WHY_BYTHAWK_DATA[1];
  const p3 = WHY_BYTHAWK_DATA[2];
  const p4 = WHY_BYTHAWK_DATA[3];

  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden bg-[#070D18]/40">
      {/* Subtle Orbital Background Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#F59E0B]/[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#FFFBEB]/[0.04] pointer-events-none" />

      <Container size="xl">
        <SectionHeading
          eyebrow="PHILOSOPHY & PRINCIPLES // 03"
          title="Why Ambitious Brands"
          highlight="Choose Bythawk"
          description="Technology should create lasting momentum, not architectural debt. We partner with ambitious leaders to engineer digital systems that deliver compounding competitive advantage."
        />

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 1. Flagship Anchor Card (7 cols) */}
          <div className="lg:col-span-7">
            <Card
              variant="interactive"
              spotlight={true}
              spotlightColor="rgba(245, 158, 11, 0.18)"
              withReticles={true}
              className="h-full p-8 sm:p-10 bg-[#070D18]/85 border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/50 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-[#020611]/60 overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30">
                      PRINCIPLE // {p1.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020611]/80 border border-[#FFFBEB]/[0.08] text-[10px] font-mono text-[#F59E0B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>VERIFIED UK ARCHITECTURE</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFBEB] tracking-tight font-sans mb-3 group-hover:text-[#F59E0B] transition-colors">
                  {p1.title}
                </h3>

                <p className="text-base sm:text-lg text-[#FBBF24] font-medium leading-relaxed font-sans mb-4">
                  "{p1.description}"
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-xl">
                  {p1.detail}
                </p>
              </div>

              {/* Telemetry Status Strip */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="text-slate-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Commercial Drivers &bull; Target Outcomes First</span>
                </span>
                <span className="text-amber-400 font-bold">100% UK SENIOR TALENT</span>
              </div>
            </Card>
          </div>

          {/* 2. Principle 02: Built Around People (5 cols) */}
          <div className="lg:col-span-5">
            <Card
              variant="interactive"
              spotlight={true}
              spotlightColor="rgba(251, 191, 36, 0.18)"
              withReticles={true}
              className="h-full p-8 sm:p-10 bg-[#070D18]/85 border-[#FFFBEB]/[0.08] hover:border-[#FBBF24]/50 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-[#020611]/60 overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
                    PRINCIPLE // {p2.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#020611]/80 border border-[#FFFBEB]/[0.08] flex items-center justify-center text-[#FBBF24]">
                    <Target className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#FFFBEB] tracking-tight font-sans mb-3 group-hover:text-[#FBBF24] transition-colors">
                  {p2.title}
                </h3>

                <p className="text-sm sm:text-base text-[#9edcd2] font-medium leading-relaxed font-sans mb-3">
                  "{p2.description}"
                </p>

                <p className="text-xs sm:text-sm text-[#9edcd2]/75 leading-relaxed font-sans">
                  {p2.detail}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#FFFBEB]/[0.08] flex items-center justify-between text-xs font-mono text-[#5e948c]">
                <span>ERGONOMICS TELEMETRY</span>
                <span className="text-[#FBBF24] font-bold">FRICTION-FREE UX</span>
              </div>
            </Card>
          </div>

          {/* 3. Principle 03: Engineering That Scales (5 cols) */}
          <div className="lg:col-span-5">
            <Card
              variant="interactive"
              spotlight={true}
              spotlightColor="rgba(217, 119, 6, 0.22)"
              withReticles={true}
              className="h-full p-8 sm:p-10 bg-[#070D18]/85 border-[#FFFBEB]/[0.08] hover:border-[#D97706]/50 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-[#020611]/60 overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#D97706]/15 text-[#FBBF24] border border-[#D97706]/30">
                    PRINCIPLE // {p3.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#020611]/80 border border-[#FFFBEB]/[0.08] flex items-center justify-center text-[#FBBF24]">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#FFFBEB] tracking-tight font-sans mb-3 group-hover:text-[#FBBF24] transition-colors">
                  {p3.title}
                </h3>

                <p className="text-sm sm:text-base text-[#9edcd2] font-medium leading-relaxed font-sans mb-3">
                  "{p3.description}"
                </p>

                <p className="text-xs sm:text-sm text-[#9edcd2]/75 leading-relaxed font-sans">
                  {p3.detail}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#FFFBEB]/[0.08] flex items-center justify-between text-xs font-mono text-[#5e948c]">
                <span>ARCHITECTURAL SLOS</span>
                <span className="text-[#FBBF24] font-bold">ZERO CODE DEBT</span>
              </div>
            </Card>
          </div>

          {/* 4. Principle 04: One Digital Partner (7 cols) */}
          <div className="lg:col-span-7">
            <Card
              variant="interactive"
              spotlight={true}
              spotlightColor="rgba(245, 158, 11, 0.18)"
              withReticles={true}
              className="h-full p-8 sm:p-10 bg-[#070D18]/85 border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/50 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-[#020611]/60 overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#EA580C]/20 text-[#F59E0B] border border-[#EA580C]/40">
                    PRINCIPLE // {p4.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#020611]/80 border border-[#FFFBEB]/[0.08] flex items-center justify-center text-[#F59E0B]">
                    <Orbit className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFBEB] tracking-tight font-sans mb-3 group-hover:text-[#F59E0B] transition-colors">
                  {p4.title}
                </h3>

                <p className="text-base sm:text-lg text-[#FBBF24] font-medium leading-relaxed font-sans mb-4">
                  "{p4.description}"
                </p>

                <p className="text-xs sm:text-sm text-[#9edcd2] leading-relaxed font-sans max-w-xl">
                  {p4.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#FFFBEB]/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5e948c]">
                <span className="text-[#FFFBEB] font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#F59E0B]" />
                  <span>Strategy &bull; Design &bull; Development &bull; Growth</span>
                </span>
                <span className="text-[#F59E0B] font-bold">UNIFIED TEAM VELOCITY</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyBythawkSection;
