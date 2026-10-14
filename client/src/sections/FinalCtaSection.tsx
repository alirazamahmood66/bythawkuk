import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Compass, Mail, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end end'],
  });

  // Photorealistic Cyan Vortex Planet rising into view at destination
  const planetY = useTransform(scrollYProgress, [0, 1], [160, -30]);
  const planetScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.25]);
  const planetRotate = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <div ref={ctaRef} className="relative overflow-hidden bg-[#001119]">
      <Section spacingVariant="cinematic" hasBorderTop className="relative overflow-hidden bg-[#001119]">
        {/* REAL PHOTOREALISTIC CYAN VORTEX DESTINATION PLANET */}
        <motion.div
          className="absolute -bottom-28 -right-16 sm:right-[2%] md:right-[5%] w-[320px] sm:w-[420px] md:w-[520px] aspect-square pointer-events-none select-none z-0"
          style={{
            y: shouldReduceMotion ? 0 : planetY,
            scale: shouldReduceMotion ? 1 : planetScale,
            rotate: shouldReduceMotion ? 0 : planetRotate,
          }}
        >
          <img
            src="/images/cosmic/cyan_vortex_planet.png"
            alt="Real cyan vortex destination planet in deep space"
            className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(35,247,219,0.5)] opacity-85"
            style={{ mixBlendMode: 'screen' }}
            loading="lazy"
          />
        </motion.div>

        {/* Ambient atmospheric nebula glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] rounded-full filter blur-[150px] opacity-25"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(35, 247, 219, 0.3) 0%, rgba(48, 241, 190, 0.2) 45%, rgba(4, 163, 123, 0.12) 65%, transparent 80%)',
            }}
          />
        </div>

        <Container size="lg">
          <div className="relative z-10 p-8 sm:p-14 lg:p-18 rounded-3xl bg-[#061F25]/85 border border-[#E8FFFC]/[0.1] shadow-2xl shadow-[#001119]/80 text-center space-y-8 backdrop-blur-xl">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2">
              <Badge variant="cyan" withDot pulseDot size="md">
                A UNIVERSE OF POSSIBILITIES
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="heading-1 text-[#E8FFFC] font-extrabold tracking-tight">
                READY FOR{' '}
                <span className="bg-gradient-to-r from-[#23F7DB] via-[#30F1BE] to-[#04A37B] bg-clip-text text-transparent">
                  LAUNCH?
                </span>
              </h2>
              <p className="text-lead text-[#9edcd2] max-w-xl mx-auto leading-relaxed font-sans">
                Have a digital idea, platform ambition, or technical scaling challenge? Partner with a team engineered to deliver compounding momentum.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/contact">
                <Button
                  variant="special"
                  size="lg"
                  className="font-bold text-sm tracking-wide px-8 py-4"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Project
                </Button>
              </Link>

              <Link to="/work">
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-semibold text-sm tracking-normal px-7 py-4"
                  rightIcon={<Compass className="w-4 h-4" />}
                >
                  Explore Our Work
                </Button>
              </Link>
            </div>

            {/* Telemetry Footer Info */}
            <div className="pt-6 border-t border-[#E8FFFC]/[0.08] flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-[#5e948c]">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#23F7DB]" />
                <span>Direct Senior Partner Scoping</span>
              </span>
              <span>&bull;</span>
              <span>Rapid Technical Sprint Discovery</span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                <Mail className="w-3.5 h-3.5" />
                <span>hello@bythawk.uk</span>
              </span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FinalCtaSection;
