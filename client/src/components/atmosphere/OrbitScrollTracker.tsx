import React from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { getPlanetTheme } from '@/utils/planetThemes';
import { useLocation } from 'react-router-dom';

const TICKS = 6;

/**
 * Thin vertical "trajectory" on the right edge. A glowing probe moves along it
 * as the page scrolls. Transform/opacity only, desktop only, non-interactive.
 */
export const OrbitScrollTracker: React.FC = () => {
  const { pathname } = useLocation();
  const theme = getPlanetTheme(pathname);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const probeY = useTransform(smooth, [0, 1], ['0%', '100%']);

  return (
    <div
      aria-hidden="true"
      className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-30 h-[46vh] pointer-events-none flex-col items-center"
    >
      <span
        className="mb-3 text-[9px] font-mono uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180"
        style={{ color: theme.hex }}
      >
        {theme.planet}
      </span>

      <div className="relative flex-1 w-px bg-white/10">
        {Array.from({ length: TICKS }).map((_, i) => (
          <span
            key={i}
            className="absolute -left-[2px] w-[5px] h-[5px] rounded-full bg-white/20"
            style={{ top: `${(i / (TICKS - 1)) * 100}%`, transform: 'translateY(-50%)' }}
          />
        ))}

        <motion.span
          className="absolute -left-[4px] w-[9px] h-[9px] rounded-full"
          style={{
            top: reduce ? '0%' : probeY,
            y: '-50%',
            backgroundColor: theme.hex,
            boxShadow: `0 0 12px 2px ${theme.hex}`,
          }}
        />
      </div>
    </div>
  );
};

export default OrbitScrollTracker;
