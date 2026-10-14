import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Zap, ShieldCheck, Globe, Cpu } from 'lucide-react';

export const ShipTransitSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  // Track scroll across the pinned 210vh distance
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // NATURAL DIAGONAL TRAVEL TRAJECTORY:
  // Starts on the LEFT in the MIDDLE of the screen (bottom-most point of travel)
  // Climbs UP as user scrolls, exits at the TOP-RIGHT side
  const shipX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['2vw', '25vw', '52vw', '76vw']);
  const shipY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['32vh', '18vh', '4vh', '-10vh']);
  const shipRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 2, 6]);
  const shipScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.96, 1.12, 0.94]);

  // Trail stretch effect
  const trailOpacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0.4, 0.95, 0.95, 0.3]);

  // HUD activation states
  const hudOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 0.95], [0.5, 1, 1, 0.5]);

  return (
    <div ref={trackRef} className="relative h-[200vh] w-full bg-[#001119]">
      {/* PINNED STICKY VIEWPORT CONTAINER */}
      <section
        aria-label="Bythawk Starship Orbital Transit"
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#001119] z-25 select-none"
      >
        {/* Subtle Ambient Cosmic Background Flare */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full filter blur-[180px] bg-[#23F7DB]/10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[160px] bg-[#008C6B]/15 pointer-events-none" />
        </div>

        {/* 1. PHOTOREALISTIC BYTHAWK RECON STARSHIP (ANCHORED TOP-0 LEFT-0: STARTS BOTTOM-LEFT, TRAVELS UP TO TOP-RIGHT) */}
        <motion.div
          className="absolute top-0 left-0 z-10 pointer-events-none aspect-square w-[260px] sm:w-[340px] md:w-[400px]"
          style={{
            x: shouldReduceMotion ? '60vw' : shipX,
            y: shouldReduceMotion ? '15vh' : shipY,
            rotate: shouldReduceMotion ? 2 : shipRotate,
            scale: shouldReduceMotion ? 1 : shipScale,
          }}
        >
          <div className="relative w-full h-full">
            {/* Trailing Cyan Ion Plasma Thruster Trail (Behind Rear Engines at Bottom-Left) */}
            <motion.div
              className="absolute bottom-[22%] -left-20 sm:-left-32 w-36 sm:w-48 h-14 rounded-full bg-gradient-to-r from-transparent via-[#23F7DB]/40 to-[#30F1BE] filter blur-xl pointer-events-none transform -rotate-30 origin-right"
              style={{ opacity: trailOpacity }}
            />
            <motion.div
              className="absolute bottom-[24%] left-[6%] w-20 h-7 rounded-full bg-[#30F1BE]/60 filter blur-md pointer-events-none transform -rotate-35"
              style={{ opacity: trailOpacity }}
            />

            <img
              src="/images/cosmic/bythawk_recon_spaceship.png"
              alt="Bythawk stealth reconnaissance starship traveling forward from bottom-left to top-right"
              className="w-full h-full object-contain filter contrast-110 brightness-110 drop-shadow-[0_0_50px_rgba(35,247,219,0.7)]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* 2. FOREGROUND HUD & ARCHITECTURAL STATS CONTAINER (TRANSPARENT GLASS CARDS - SHIP SHINES THROUGH) */}
        <motion.div
          className="relative z-20 w-full max-w-5xl px-6 text-center"
          style={{ opacity: shouldReduceMotion ? 1 : hudOpacity }}
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="cyan" withDot pulseDot size="sm">
              ENGINEERING STANDARDS
            </Badge>
            <span className="text-xs text-[#E8FFFC]/60 uppercase tracking-widest font-mono hidden sm:inline">
              UK TECHNICAL EXCELLENCE
            </span>
          </div>

          {/* Monumental Transit Headline */}
          <h2 className="heading-display text-[#E8FFFC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] mb-4">
            PRECISION ARCHITECTURE <br />
            <span className="bg-gradient-to-r from-[#23F7DB] via-[#30F1BE] to-[#E8FFFC] bg-clip-text text-transparent">
              CUTTING THROUGH THE VOID.
            </span>
          </h2>

          <p className="text-[#E8FFFC]/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 font-sans">
            Every digital product we construct is built for hyper-velocity throughput, resilient
            cloud survivability, and zero-downtime execution.
          </p>

          {/* 3 Active Transparent Glass Cards that let the ship shine through */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Gauge 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#061F25]/40 border border-[#E8FFFC]/[0.1] backdrop-blur-md text-left transition-all duration-300 hover:border-[#23F7DB]/50 hover:bg-[#061F25]/60 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#23F7DB] font-bold uppercase tracking-wider">
                  SUB-SECOND LATENCY
                </span>
                <Zap className="w-4 h-4 text-[#23F7DB]" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E8FFFC] mb-1">
                &lt; 95ms
              </div>
              <p className="text-xs text-[#E8FFFC]/70 leading-snug">
                Sub-second global time-to-first-byte engineered via Next.js edge caching.
              </p>
            </div>

            {/* Gauge 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#061F25]/40 border border-[#E8FFFC]/[0.1] backdrop-blur-md text-left transition-all duration-300 hover:border-[#23F7DB]/50 hover:bg-[#061F25]/60 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#23F7DB] font-bold uppercase tracking-wider">
                  ENTERPRISE SURVIVABILITY
                </span>
                <ShieldCheck className="w-4 h-4 text-[#30F1BE]" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E8FFFC] mb-1">
                99.99%
              </div>
              <p className="text-xs text-[#E8FFFC]/70 leading-snug">
                Redundant multi-region microservices built to withstand peak traffic spikes.
              </p>
            </div>

            {/* Gauge 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#061F25]/40 border border-[#E8FFFC]/[0.1] backdrop-blur-md text-left transition-all duration-300 hover:border-[#23F7DB]/50 hover:bg-[#061F25]/60 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#23F7DB] font-bold uppercase tracking-wider">
                  GLOBAL EDGE FABRIC
                </span>
                <Globe className="w-4 h-4 text-[#30F1BE]" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E8FFFC] mb-1">
                GLOBAL
              </div>
              <p className="text-xs text-[#E8FFFC]/70 leading-snug">
                Serving verified deployments across UK, Europe, and global edge networks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Pinned Scroll Prompt */}
        <div className="absolute bottom-4 sm:bottom-6 text-center text-xs font-mono text-[#E8FFFC]/60 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#23F7DB] animate-pulse" />
          <span>SCROLL TO ADVANCE TRANSIT &bull; WATCH SHIP TRAJECTORY</span>
        </div>
      </section>
    </div>
  );
};

export default ShipTransitSection;
