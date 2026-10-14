import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MilkyWayDustEngine } from './MilkyWayDustEngine';
import { OrbitScrollTracker } from './OrbitScrollTracker';
import { getPlanetTheme } from '@/utils/planetThemes';

export const CosmicScrollJourney: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const theme = getPlanetTheme(pathname);
  const { scrollYProgress } = useScroll();

  // Scroll Parallax for atmospheric depth
  const nebulaParallaxY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const vectorParallaxY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#001119]">
        {/* 1. 60FPS MILKY WAY & MICRO-ASTEROID DUST ENGINE */}
        <MilkyWayDustEngine />

        {/* 2. DYNAMIC SCROLL-DRIVEN AMBIENT NEBULA DRIFT */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: shouldReduceMotion ? 0 : nebulaParallaxY,
          }}
        >
          {/* Upper Hero Glow */}
          <div
            className="absolute top-[12%] right-[15%] w-[650px] h-[650px] rounded-full filter blur-[160px] opacity-25 pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(${theme.rgb}, 0.4) 0%, rgba(0, 140, 107, 0.2) 50%, transparent 75%)`,
            }}
          />

          {/* Mid-Page Cyan Services Aurora */}
          <div
            className="absolute top-[45%] left-[10%] w-[700px] h-[700px] rounded-full filter blur-[170px] opacity-20 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(35, 247, 219, 0.35) 0%, rgba(4, 163, 123, 0.15) 50%, transparent 75%)',
            }}
          />

          {/* Lower Work Violet Starburst */}
          <div
            className="absolute top-[75%] right-[8%] w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(${theme.rgb}, 0.28) 0%, rgba(6, 31, 37, 0.25) 50%, transparent 75%)`,
            }}
          />
        </motion.div>

        {/* 3. PARALLAX ASTRONOMICAL VECTORS & RADAR GRIDS */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-40 z-15"
          style={{
            y: shouldReduceMotion ? 0 : vectorParallaxY,
          }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Subtle Global Latitude Grid */}
            <line x1="0" y1="280" x2="1440" y2="280" stroke="#23F7DB" strokeWidth="0.5" strokeDasharray="3 9" opacity="0.2" />
            <line x1="0" y1="640" x2="1440" y2="640" stroke="#30F1BE" strokeWidth="0.5" strokeDasharray="3 9" opacity="0.15" />
          </svg>
        </motion.div>

        {/* 4. GLOBAL READABILITY VIGNETTES */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 25% 45%, rgba(0, 17, 25, 0.94) 0%, rgba(0, 17, 25, 0.6) 45%, transparent 75%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#001119] via-[#001119]/85 to-transparent z-25 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#001119]/80 to-transparent z-25 pointer-events-none" />
      </div>

      {/* 5. ORBIT SCROLL TRACKER TELEMETRY PROBE */}
      <OrbitScrollTracker />
    </>
  );
};

export default CosmicScrollJourney;
