import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Hand,
  RotateCcw,
} from 'lucide-react';
import { InteractiveSolarCanvas } from '@/3d/canvas/InteractiveSolarCanvas';
import { PLANET_SERVICES, type PlanetServiceStation } from '@/3d/config/planetServicesConfig';

/* Detect mobile (SSR-safe) */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export const SolarSystemHeroSlider: React.FC = () => {
  const [isOverview, setIsOverview] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(3);
  const [hoveredPlanetId, setHoveredPlanetId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const activeStation: PlanetServiceStation = PLANET_SERVICES[activeIndex] || PLANET_SERVICES[0];

  const handleNext = useCallback(() => {
    setIsOverview(false);
    setActiveIndex((prev) => (prev + 1) % PLANET_SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIsOverview(false);
    setActiveIndex((prev) => (prev - 1 + PLANET_SERVICES.length) % PLANET_SERVICES.length);
  }, []);

  const handleSelectPlanet = useCallback((id: string) => {
    if (id === 'overview') { setIsOverview(true); return; }
    const idx = PLANET_SERVICES.findIndex((p) => p.id === id);
    if (idx !== -1) { setActiveIndex(idx); setIsOverview(false); }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setIsOverview(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleNext, handlePrev]);

  const handleScrollDown = () => {
    const el = document.getElementById('studio-overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
  };

  return (
    <section
      aria-label="BYTHAWK Interactive Solar System Hero Slider"
      className="relative w-full bg-[#020611] overflow-hidden select-none z-10"
      style={{ height: isMobile ? '100svh' : '100vh', minHeight: isMobile ? '600px' : '700px' }}
    >
      {/* ── 3D CANVAS ── */}
      <div className="absolute inset-0 z-0">
        <InteractiveSolarCanvas
          activeStationIndex={isOverview ? null : activeIndex}
          isOverview={isOverview}
          hoveredPlanetId={hoveredPlanetId}
          onHoverPlanet={setHoveredPlanetId}
          onSelectPlanet={handleSelectPlanet}
          isMobile={isMobile}
        />
      </div>

      {/* ── SUBTLE VIGNETTE (very light, doesn't dim the planets) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(2, 6, 17, 0.65)_100%)]" />

      {/* ── TOP STATUS BAR ── */}
      <header className="absolute z-20 top-0 left-0 right-0 pt-[72px] sm:pt-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 border-b border-[#FFFBEB]/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] text-[#F59E0B]/90 font-semibold uppercase">
              {isMobile ? 'BYTHAWK // LIVE ORBIT' : 'BYTHAWK UK // LIVE CELESTIAL SYSTEM'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#9edcd2]/70">
            {isMobile ? (
              <span className="flex items-center gap-1 text-[#F59E0B]/80">
                <Hand className="w-3 h-3" />TAP PLANET
              </span>
            ) : (
              <>
                <span className="text-[#FBBF24] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
                  REAL-TIME ORBIT
                </span>
                <span className="text-white/10">&bull;</span>
                <span>CLICK ANY PLANET</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          FLOATING TEXT OVERLAY — NO BACKGROUND CARDS
          Sits gracefully in the middle viewport so the 3D cosmos and planets
          are visible all around and behind it, keeping the bottom dock clean.
      ══════════════════════════════════════════════════════════ */}
      <div
        className="absolute z-20 left-0 right-0 pointer-events-none flex flex-col justify-center top-[90px] bottom-[84px]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 w-full py-4">
          <AnimatePresence mode="wait">
            {isOverview ? (
              /* ── OVERVIEW: clean headline, no card ── */
              <motion.div
                key="ov"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="pointer-events-none"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-2 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#FBBF24] font-bold">
                    DIGITAL STUDIO &bull; LONDON, UK
                  </span>
                </div>

                {/* Hero headline — large, transparent to pointer events so planets behind are 100% clickable */}
                <h1
                  className={`font-extrabold text-[#FFFBEB] tracking-tight leading-[1.05] font-sans drop-shadow-[0_2px_24px_rgba(2, 6, 17, 0.9)] pointer-events-none ${
                    isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl lg:text-6xl'
                  }`}
                >
                  We build{' '}
                  <span className="bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">
                    digital worlds.
                  </span>
                </h1>

                {!isMobile && (
                  <p className="mt-3 text-sm text-[#9edcd2]/80 max-w-lg leading-relaxed font-sans drop-shadow-[0_1px_8px_rgba(2, 6, 17, 0.8)] pointer-events-none">
                    9 engineering disciplines in orbit. Click any planet to explore.
                  </p>
                )}

                {/* CTAs — only buttons have pointer-events-auto */}
                <div className={`flex items-center gap-3 ${isMobile ? 'mt-3' : 'mt-5'} pointer-events-none`}>
                  <Link
                    to="/contact"
                    className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#020611] bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] shadow-lg shadow-[#F59E0B]/30 hover:shadow-[#FBBF24]/50 transition-all cursor-pointer"
                  >
                    Start a Project
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleSelectPlanet('earth')}
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#FFFBEB]/90 bg-[#070D18]/60 border border-[#FFFBEB]/[0.15] hover:bg-[#070D18] hover:text-[#F59E0B] hover:border-[#F59E0B]/40 transition-all backdrop-blur-sm cursor-pointer"
                  >
                    Explore
                    <ArrowUpRight className="w-3 h-3 text-[#F59E0B]" />
                  </button>
                  <span className="text-[10px] font-mono text-[#FBBF24]/70 hidden sm:inline">
                    9 DISCIPLINES IN ORBIT
                  </span>
                </div>
              </motion.div>
            ) : (
              /* ── PLANET SELECTED: service name in planet color, no card bg ── */
              <motion.div
                key={activeStation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`pointer-events-none ${
                  !isMobile && activeStation.cardSide === 'right'
                    ? 'flex flex-col items-end text-right'
                    : 'flex flex-col items-start text-left'
                }`}
              >
                {/* Back + counter */}
                <div className={`flex items-center gap-3 mb-3 pointer-events-none ${!isMobile && activeStation.cardSide === 'right' ? 'flex-row-reverse' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setIsOverview(true)}
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white/60 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.12] hover:text-white/90 transition-all backdrop-blur-sm cursor-pointer"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    ALL WORLDS
                  </button>
                  <span className="text-[10px] font-mono text-white/30">
                    0{activeStation.index + 1} / 0{PLANET_SERVICES.length}
                  </span>
                </div>

                {/* Category label */}
                <div className="flex items-center gap-2 mb-1.5 pointer-events-none">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: activeStation.color, boxShadow: `0 0 10px ${activeStation.color}` }}
                  />
                  <span
                    className="text-[10px] font-mono tracking-[0.25em] font-bold uppercase"
                    style={{ color: activeStation.color }}
                  >
                    {activeStation.category}
                  </span>
                </div>

                {/* Service title — pointer-events-none so any planet behind is 100% clickable */}
                <h2
                  className={`font-extrabold tracking-tight leading-[1.05] font-sans drop-shadow-[0_2px_32px_rgba(0,0,0,0.95)] pointer-events-none ${
                    isMobile ? 'text-2xl' : 'text-4xl sm:text-5xl lg:text-6xl'
                  }`}
                  style={{
                    color: '#ffffff',
                    textShadow: `0 0 40px ${activeStation.color}60, 0 2px 24px rgba(0,0,0,0.9)`,
                  }}
                >
                  {activeStation.serviceTitle}
                </h2>

                {/* Tagline */}
                <p
                  className={`mt-1.5 font-mono font-semibold tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] pointer-events-none ${isMobile ? 'text-[11px]' : 'text-xs sm:text-sm'}`}
                  style={{ color: `${activeStation.color}cc` }}
                >
                  {activeStation.tagline}
                </p>

                {/* CTAs */}
                <div className={`flex items-center gap-3 ${isMobile ? 'mt-3' : 'mt-5'} pointer-events-none`}>
                  <Link
                    to={activeStation.route}
                    className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 shadow-lg transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${activeStation.color}, #ffffff)`,
                      boxShadow: `0 0 24px ${activeStation.color}50`,
                    }}
                  >
                    Explore Service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white/80 bg-white/[0.06] border border-white/[0.15] hover:bg-white/[0.12] hover:text-white transition-all backdrop-blur-sm"
                  >
                    Start Project
                    <ArrowUpRight className="w-3 h-3 text-amber-400" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── MINIMAL BOTTOM CONTROLS (Arrows & Whole View - No Planet Name Tabs) ── */}
      <footer className="absolute z-20 bottom-0 left-0 right-0 px-4 sm:px-8 pb-3 sm:pb-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Quick cycle controls */}
          <div className="flex items-center gap-2 bg-[#070D18]/85 backdrop-blur-xl border border-[#FFFBEB]/[0.1] p-1.5 rounded-2xl shadow-xl shadow-[#020611]/50">
            <button
              onClick={handlePrev}
              aria-label="Previous Planet"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.06] text-[#FFFBEB]/80 hover:text-[#F59E0B] transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Planet"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.06] text-[#FFFBEB]/80 hover:text-[#F59E0B] transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="w-px h-5 bg-white/10 mx-1" />

            {/* Whole system reset button */}
            <button
              onClick={() => setIsOverview(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                isOverview
                  ? 'bg-[#D97706]/25 border border-[#FBBF24] text-[#FFFBEB] shadow-[0_0_15px_rgba(251, 191, 36, 0.35)]'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] border border-transparent text-[#9edcd2]/70 hover:text-[#F59E0B]'
              }`}
            >
              <Globe className={`w-3.5 h-3.5 ${isOverview ? 'text-[#F59E0B] animate-spin' : 'text-[#9edcd2]/60'}`} style={{ animationDuration: '18s' }} />
              <span className="text-[11px] font-semibold tracking-wide">ALL WORLDS</span>
            </button>
          </div>

          {/* Scroll Down Hint */}
          <button
            onClick={handleScrollDown}
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#9edcd2]/80 hover:text-[#F59E0B] transition-colors bg-[#070D18]/75 backdrop-blur-xl border border-[#FFFBEB]/[0.1] px-4 py-2 rounded-2xl cursor-pointer"
          >
            <span>EXPLORE STUDIO</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#F59E0B]" />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default SolarSystemHeroSlider;
