import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PlanetaryGalleryDock } from '@/components/home/PlanetaryGalleryDock';
import { ArrowRight, Compass, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroTrackRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across a snappy, fast-paced pinned track
  const { scrollYProgress } = useScroll({
    target: heroTrackRef,
    offset: ['start start', 'end end'],
  });

  // SMOOTH CINEMATIC SATURN ZOOM EFFECT (Natural, gradual scaling pace)
  // 1. Scale from normal (1.0) to gentle expansive presence (2.35) across comfortable scroll distance
  const planetScale = useTransform(scrollYProgress, [0, 0.72], [1, 2.35]);
  
  // 2. Smooth center drift as it expands
  const planetX = useTransform(scrollYProgress, [0, 0.72], ['0%', '-14%']);
  const planetY = useTransform(scrollYProgress, [0, 0.72], ['0%', '10%']);
  
  // 3. Subtle, organic axial tilt
  const planetRotate = useTransform(scrollYProgress, [0, 0.72], [-4, 8]);

  // 4. Planet opacity: Stays rich and brilliant, then smoothly softens into background
  const planetOpacity = useTransform(scrollYProgress, [0, 0.55, 0.8, 0.98], [0.95, 1, 0.7, 0]);

  // SMOOTH FOREGROUND CONTENT FADE-OUT
  const contentOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.28], [0, -35]);
  const contentScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.96]);

  return (
    <div ref={heroTrackRef} className="relative h-[190vh] w-full">
      {/* PINNED STICKY VIEWPORT CONTAINER */}
      <section
        aria-label="BYTHAWK Agency Cosmic Hero"
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#040407] pt-18 sm:pt-20 pb-0 z-30"
      >
        {/* 1. PHOTOREALISTIC SATURN WITH LUMINOUS RINGS (GENTLE NATURAL DIVE - NO LABELS) */}
        <motion.div
          className="absolute top-[8%] sm:top-[6%] -right-16 sm:right-[1%] md:right-[4%] w-[340px] sm:w-[460px] md:w-[560px] lg:w-[620px] aspect-square pointer-events-none z-10 origin-center"
          style={{
            scale: shouldReduceMotion ? 1 : planetScale,
            x: shouldReduceMotion ? 0 : planetX,
            y: shouldReduceMotion ? 0 : planetY,
            rotate: shouldReduceMotion ? -4 : planetRotate,
            opacity: shouldReduceMotion ? 0.95 : planetOpacity,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -12, 0],
                  transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
        >
          <img
            src="/images/cosmic/saturn_ringed_planet.png"
            alt="Real ringed planet Saturn floating in deep space"
            className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(245, 158, 11, 0.4)]"
            loading="eager"
          />
        </motion.div>

        {/* 2. HERO CONTENT CONTAINER (Fades gracefully as user scrolls) */}
        <motion.div
          className="relative z-40 flex-1 flex flex-col justify-between py-2 sm:py-3"
          style={{
            opacity: shouldReduceMotion ? 1 : contentOpacity,
            y: shouldReduceMotion ? 0 : contentY,
            scale: shouldReduceMotion ? 1 : contentScale,
          }}
        >
          <Container size="xl">
            {/* Sub-Navigation Category Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3">
              {[
                '01 // WEB ARCHITECTURE',
                '02 // CLOUD SYSTEMS',
                '03 // MOBILE ENGINEERING',
              ].map((cat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wide bg-[#0B0C10]/85 text-[#FBBF24] border border-[#D97706]/30 backdrop-blur-md shadow-sm"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Monumental Headline & Narrative */}
              <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-4">
                {/* Technical Studio Eyebrow */}
                <div className="inline-flex items-center gap-2.5">
                  <Badge variant="cyan" withDot pulseDot size="sm">
                    DIGITAL TECHNOLOGY STUDIO
                  </Badge>
                  <span className="text-xs text-[#FFFBEB]/60 uppercase tracking-widest hidden sm:inline font-sans font-semibold">
                    LONDON &bull; UK
                  </span>
                </div>

                {/* Main Cinematic Display Headline */}
                <div className="space-y-0.5">
                  <h1 className="heading-display text-[#FFFBEB] tracking-tight text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06]">
                    We build <br />
                    <span className="bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">
                      digital worlds.
                    </span>
                  </h1>
                </div>

                {/* Supporting Editorial Copy */}
                <p className="text-lead text-[#FFFBEB]/70 max-w-xl text-sm sm:text-base leading-relaxed font-sans">
                  From vision to reality &mdash; we design and develop immersive digital experiences that inspire, engage and grow.
                </p>

                {/* Action Buttons: 2 Focused Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link to="/services">
                    <Button
                      variant="primary"
                      size="md"
                      className="rounded-full font-bold text-xs tracking-wide px-7 py-3 bg-gradient-to-r from-[#FBBF24] to-[#D97706] text-[#040407] shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Our Services
                    </Button>
                  </Link>

                  <Link to="/work">
                    <Button
                      variant="secondary"
                      size="md"
                      className="rounded-full font-semibold text-xs tracking-normal px-6 py-3 bg-[#0B0C10]/70 border-[#FFFBEB]/[0.15] hover:border-[#F59E0B]/50 backdrop-blur-md"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </div>

                {/* Verified Deployments Footnote */}
                <div className="pt-0.5">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-xs font-sans text-[#FFFBEB]/60 hover:text-[#FBBF24] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                    <span className="text-[#F59E0B] font-semibold">VERIFIED DEPLOYMENTS:</span>
                    <span className="text-[#FFFBEB]/70 group-hover:text-[#FFFBEB] transition-colors">
                      bythawk.com &bull; oaksis.com &bull; ceedrs.com &bull; globalintegratedsupport.com
                    </span>
                    <ArrowRight className="w-3 h-3 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Empty Right Column: Allows Saturn to shine through cleanly */}
              <div className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none" />
            </div>

            {/* 3. PLANETARY GALLERY DOCK */}
            <PlanetaryGalleryDock />
          </Container>
        </motion.div>

        {/* 4. BOTTOM TELEMETRY STRIP & SCROLL PROMPT */}
        <div className="py-2 border-t border-white/[0.08] bg-[#02040a]/85 backdrop-blur-md relative z-40">
          <Container size="xl">
            <div className="flex items-center justify-between text-[11px] font-sans text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>BYTHAWK CELESTIAL ENGINE &bull; 60 FPS MOTION</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors cursor-default">
                <span>SCROLL TO DIVE INTO THE ORBIT</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
              </div>

              <div className="hidden sm:block text-slate-500">
                <span>LONDON UK &bull; 51.5074° N, 0.1278° W</span>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
