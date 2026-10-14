import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TESTIMONIALS_DATA, type TestimonialItem } from '@/data/homepageData';
import { ShieldCheck, Quote, Terminal, FileCode2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden">
      <Container size="xl">
        <SectionHeading
          eyebrow="PARTNERSHIP OBSERVATIONS // 06"
          title="Client"
          highlight="Partnerships"
          description="Verified executive commentary and project feedback. Component architecture structured for live client validation onboarding."
        />

        {/* Testimonials Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item: TestimonialItem, idx: number) => {
            const initials = item.clientName
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <Card
                key={item.id}
                variant="default"
                spotlight={true}
                withReticles={true}
                spotlightColor="rgba(32, 217, 243, 0.14)"
                className="p-8 sm:p-10 relative bg-[#071426]/90 border-white/[0.09] hover:border-cyan-500/40 flex flex-col justify-between group overflow-hidden"
              >
                {/* Background HUD watermark */}
                <div className="absolute right-4 top-4 text-white/[0.03] select-none pointer-events-none font-mono text-8xl font-black">
                  "
                </div>

                <div className="relative z-10">
                  {/* Telemetry Header Bar */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                        DEBRIEF LOG // REF-0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VALIDATED RECORD</span>
                    </div>
                  </div>

                  {/* Structured Quote with Quote Icon */}
                  <div className="flex gap-4 mb-8">
                    <Quote className="w-6 h-6 text-cyan-400/40 shrink-0 mt-1 rotate-180" />
                    <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed font-sans italic">
                      "{item.quote}"
                    </blockquote>
                  </div>
                </div>

                {/* Client & Role Metadata Console */}
                <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Monogram Seal */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-sm text-cyan-300 shadow-md shadow-cyan-950/40">
                      {initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm font-sans tracking-tight">
                        {item.clientName}
                      </div>
                      <div className="text-xs text-slate-400 font-sans mt-0.5">
                        {item.role} &bull; <span className="text-cyan-300 font-medium">{item.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project scope tag */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-black/40 border border-white/[0.08] px-2.5 py-1 rounded">
                    <FileCode2 className="w-3 h-3 text-cyan-400" />
                    <span className="truncate max-w-[160px] sm:max-w-none">{item.project}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
