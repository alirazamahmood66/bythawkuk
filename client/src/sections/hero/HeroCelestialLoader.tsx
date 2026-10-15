import React, { useState, useEffect } from 'react';

interface HeroCelestialLoaderProps {
  isReady: boolean;
  onFinished?: () => void;
}

export const HeroCelestialLoader: React.FC<HeroCelestialLoaderProps> = ({
  isReady,
  onFinished,
}) => {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Natural smooth curve: progresses briskly then resolves smoothly to 100% once WebGL is ready
      const increment = isReady ? (100 - current) * 0.35 + 2.5 : (94 - current) * 0.08 + 1.2;
      current = Math.min(100, current + increment);
      setProgress(Math.floor(current));

      if (current >= 99.5 && isReady) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsDismissed(true);
          onFinished?.();
        }, 320);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [isReady, onFinished]);

  if (isDismissed) return null;

  const getPhaseText = () => {
    if (progress < 25) return 'CALIBRATING 9 ORBITAL VECTORS';
    if (progress < 55) return 'STREAMING PBR SURFACE ATLAS';
    if (progress < 85) return 'SYNCHRONIZING CELESTIAL SHADERS';
    if (progress < 100) return 'ENGAGING SOLAR PLASMA CORE';
    return 'CELESTIAL SYSTEM ONLINE';
  };

  const getPhaseNumber = () => {
    if (progress < 25) return '01';
    if (progress < 55) return '02';
    if (progress < 85) return '03';
    if (progress < 100) return '04';
    return 'OK';
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
        isReady && progress >= 100 ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* ── HIGH-TECH PRECISION CELESTIAL GYROSCOPE (Centered at Sun coordinates) ── */}
      <div className="relative flex items-center justify-center -translate-y-4 sm:-translate-y-6">
        {/* Ambient Radial Solar Core Bloom */}
        <div className="absolute w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25)_0%,rgba(234,88,12,0.10)_35%,transparent_70%)] blur-2xl animate-pulse duration-[3000ms]" />

        {/* Outer Precision Reticle Ring with 4 Cardinal Coordinates */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#F59E0B]/20 flex items-center justify-center">
          {/* Cardinal Ticks */}
          <div className="absolute top-0 w-px h-3 bg-[#F59E0B]/70" />
          <div className="absolute bottom-0 w-px h-3 bg-[#F59E0B]/70" />
          <div className="absolute left-0 h-px w-3 bg-[#F59E0B]/70" />
          <div className="absolute right-0 h-px w-3 bg-[#F59E0B]/70" />

          {/* Precision Cardinal Readouts */}
          <span className="absolute top-1 text-[8px] font-mono text-[#F59E0B]/60 tracking-wider">000°</span>
          <span className="absolute right-1 text-[8px] font-mono text-[#F59E0B]/60 tracking-wider">090°</span>
          <span className="absolute bottom-1 text-[8px] font-mono text-[#F59E0B]/60 tracking-wider">180°</span>
          <span className="absolute left-1 text-[8px] font-mono text-[#F59E0B]/60 tracking-wider">270°</span>

          {/* Rotating Dashed Telemetry Ring */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-dashed border-[#FBBF24]/30 animate-[spin_32s_linear_infinite]" />

          {/* Counter-Rotating Laser Ring with Orbital Satellite Dot */}
          <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#F59E0B]/35 animate-[spin_18s_linear_infinite_reverse]">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FDE047] shadow-[0_0_12px_#FBBF24] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#040407]" />
            </div>
          </div>

          {/* Fast Inner Quantum Ring with Dual Particles */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-dotted border-[#EA580C]/50 animate-[spin_10s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#EA580C] shadow-[0_0_8px_#EA580C]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
          </div>

          {/* Central Blazing Solar Flare Core */}
          <div className="absolute w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#F59E0B] to-[#FDE047] shadow-[0_0_45px_rgba(245,158,11,0.95)] animate-pulse flex items-center justify-center">
            {/* Inner Reticle Crosshair */}
            <div className="w-4 h-4 relative flex items-center justify-center opacity-70">
              <div className="w-full h-px bg-[#040407]" />
              <div className="h-full w-px bg-[#040407] absolute" />
            </div>
          </div>
        </div>
      </div>

      {/* ── COOL SCI-FI TELEMETRY HUD (Clean, Decent, High-Tech) ── */}
      <div className="mt-4 flex flex-col items-center gap-2.5 -translate-y-4 sm:-translate-y-6">
        {/* Main Status Pill with Glassmorphism */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B0C10]/80 border border-[#F59E0B]/30 backdrop-blur-xl shadow-2xl shadow-black/80">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]" />
          </span>

          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#CBD5E1]/90 uppercase font-semibold">
            <span className="text-[#FBBF24]">[{getPhaseNumber()}]</span> {getPhaseText()}
          </span>

          <div className="h-3 w-px bg-white/20" />

          {/* Crisp Monospace Percentage */}
          <span className="text-[11px] font-mono font-bold text-[#FDE047] tracking-wider">
            {progress}%
          </span>
        </div>

        {/* Razor Laser Beam Progress Track */}
        <div className="w-56 sm:w-72 h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(245,158,11,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Micro Telemetry Footnote */}
        <div className="flex items-center gap-3 text-[9px] font-mono tracking-widest text-[#CBD5E1]/50 uppercase">
          <span>HELIOCENTRIC ORBIT</span>
          <span className="text-white/20">&bull;</span>
          <span>AUSTRALIA // 33.8688° S</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-[#FBBF24]/80">9 DISCIPLINES</span>
        </div>
      </div>
    </div>
  );
};
