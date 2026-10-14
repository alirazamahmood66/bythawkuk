import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PROCESS_LAUNCH_DATA, type LaunchStep } from '@/data/homepageData';
import { CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const processRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ['start end', 'end start'],
  });

  // Photorealistic Moon Drift
  const moonY = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const moonRotate = useTransform(scrollYProgress, [0, 1], [0, 24]);

  // Photorealistic 3D Asteroids Tumble
  const asteroidY = useTransform(scrollYProgress, [0, 1], [120, -160]);
  const asteroidRotate = useTransform(scrollYProgress, [0, 1], [0, 75]);

  return (
    <div ref={processRef} className="relative overflow-hidden bg-[#001119]">
      {/* 1. PHOTOREALISTIC CRESCENT MOON (Exclusive to Process Section) */}
      {/* 1. PHOTOREALISTIC CRESCENT MOON (Exclusive to Process Section - Transparent PNG) */}
      <motion.div
        className="absolute top-[8%] -left-12 sm:left-[2%] md:left-[5%] w-[240px] sm:w-[320px] md:w-[380px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: shouldReduceMotion ? 0 : moonY,
          rotate: shouldReduceMotion ? 0 : moonRotate,
        }}
      >
        <img
          src="/images/cosmic/crescent_moon.png"
          alt="Real photorealistic cratered moon with transparent background"
          className="w-full h-full object-contain filter contrast-110 brightness-110 drop-shadow-[0_0_45px_rgba(148,163,184,0.4)] opacity-90"
          style={{ mixBlendMode: 'screen' }}
          loading="lazy"
        />
      </motion.div>

      {/* 2. PHOTOREALISTIC 3D ASTEROID FIELD (Exclusive to Process Section - Transparent PNG) */}
      <motion.div
        className="absolute bottom-[4%] -right-10 sm:right-[3%] md:right-[6%] w-[260px] sm:w-[340px] md:w-[420px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: shouldReduceMotion ? 0 : asteroidY,
          rotate: shouldReduceMotion ? 0 : asteroidRotate,
        }}
      >
        <img
          src="/images/cosmic/asteroid_cluster.png"
          alt="Real 3D stone asteroid belt cluster with transparent background"
          className="w-full h-full object-contain filter contrast-110 brightness-105 opacity-85"
          style={{ mixBlendMode: 'screen' }}
          loading="lazy"
        />
      </motion.div>

      <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden z-10">
        <Container size="xl">
          <SectionHeading
            eyebrow="METHODOLOGY & TIMELINE // 04"
            title="The Launch"
            highlight="Sequence"
            description="From initial architectural discovery to live production deployment, every project executes along a calibrated flight trajectory engineered for predictable velocity."
          />

          {/* 6-Step Trajectory Timeline Grid */}
          <div className="relative">
            {/* Connecting Trajectory Vector Line (Desktop) */}
            <div
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-gradient-to-r from-[#23F7DB]/20 via-[#30F1BE]/40 to-[#04A37B]/20 border-t border-dashed border-[#23F7DB]/30 pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {PROCESS_LAUNCH_DATA.map((item: LaunchStep) => (
                <Card
                  key={item.step}
                  variant="interactive"
                  spotlight={true}
                  spotlightColor="rgba(35, 247, 219, 0.16)"
                  withReticles={true}
                  className="p-6 sm:p-8 relative bg-[#061F25]/85 border-[#E8FFFC]/[0.08] hover:border-[#23F7DB]/50 flex flex-col justify-between rounded-2xl shadow-xl shadow-[#001119]/50 group transition-all duration-300 backdrop-blur-md"
                >
                  <div>
                    {/* Step Header & Orbital Node */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#23F7DB]/10 text-[#23F7DB] border border-[#23F7DB]/30">
                        PHASE // 0{item.step}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#23F7DB] shadow-[0_0_10px_rgba(35,247,219,0.9)] animate-pulse" />
                        <span className="text-[10px] font-mono text-[#9edcd2]/60 uppercase tracking-widest hidden sm:inline">
                          STAGE LOCK
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#E8FFFC] tracking-tight mb-2 font-sans group-hover:text-[#23F7DB] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9edcd2] font-medium leading-relaxed font-sans mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8FFFC]/[0.08] text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-[#23F7DB] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-semibold uppercase tracking-wider">Mission Deliverable:</span>
                    </div>
                    <span className="text-[#5e948c] leading-relaxed block pl-5">{item.focusArea}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ProcessSection;
