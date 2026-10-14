import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  isAsteroid: boolean;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

export const MilkyWayDustEngine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Generate ~55 ultra-lightweight particles (stardust + micro-asteroids)
    const particleCount = width < 768 ? 32 : 55;
    const particles: Particle[] = [];

    const colors = [
      'rgba(232, 255, 252, ', // Ice White (#FFFBEB)
      'rgba(35, 247, 219, ', // Neon Cyan (#F59E0B)
      'rgba(48, 241, 190, ', // Neon Mint (#FBBF24)
      'rgba(4, 163, 123, ', // Aqua Mint (#D97706)
    ];

    for (let i = 0; i < particleCount; i++) {
      const isAsteroid = i % 4 === 0; // ~25% micro-asteroids, 75% stardust
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isAsteroid ? Math.random() * 2.2 + 1.2 : Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.4) * 0.18, // Slow drifting motion
        vy: (Math.random() - 0.6) * 0.22,
        opacity: Math.random() * 0.5 + 0.2,
        baseOpacity: Math.random() * 0.4 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        isAsteroid,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.016;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!shouldReduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Twinkle / pulse
        const dynamicOpacity =
          p.baseOpacity + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.25;
        const alpha = Math.max(0.08, Math.min(0.85, dynamicOpacity));

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isAsteroid) {
          // Draw faceted micro-asteroid mote
          ctx.beginPath();
          ctx.fillStyle = `${p.color}${alpha * 0.8})`;
          const r = p.size;
          ctx.moveTo(-r, -r * 0.6);
          ctx.lineTo(r * 0.8, -r);
          ctx.lineTo(r, r * 0.5);
          ctx.lineTo(-r * 0.4, r);
          ctx.closePath();
          ctx.fill();
        } else {
          // Draw soft glowing stardust mote
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* 1. LAYERED MILKY WAY NEBULA CLOUD DRIFT (Hardware Accelerated CSS) */}
      <div className="absolute inset-0 opacity-40">
        {/* Core Milky Way Diagonal Stream */}
        <div
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[140vw] h-[90vh] rotate-[-22deg] filter blur-[120px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.22) 0%, rgba(251, 191, 36, 0.12) 35%, rgba(217, 119, 6, 0.08) 60%, transparent 80%)',
          }}
        />

        {/* Lower Cosmic Rift Cloud */}
        <div
          className="absolute top-[45%] -left-[10%] w-[80vw] h-[70vh] filter blur-[140px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(234, 88, 12, 0.18) 0%, rgba(7, 13, 24, 0.25) 50%, transparent 75%)',
          }}
        />

        {/* Deep Sapphire Horizon Nebula */}
        <div
          className="absolute top-[75%] right-[5%] w-[70vw] h-[60vh] filter blur-[150px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(217, 119, 6, 0.14) 0%, rgba(2, 6, 17, 0.3) 60%, transparent 80%)',
          }}
        />
      </div>

      {/* 2. 60FPS LIGHTWEIGHT MICRO-ASTEROID & STARDUST CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />

      {/* 3. PRECISION ASTRONOMICAL ORBIT VECTOR GRIDS */}
      <svg
        className="absolute inset-0 w-full h-full z-15 pointer-events-none opacity-45"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mwOrbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#020611" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mwOrbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#070D18" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Trajectory Loop 1 */}
        <ellipse
          cx="1080"
          cy="420"
          rx="620"
          ry="320"
          fill="none"
          stroke="url(#mwOrbitGrad1)"
          strokeWidth="1"
          strokeDasharray="4 6"
          transform="rotate(-18 1080 420)"
        />

        {/* Trajectory Loop 2 */}
        <ellipse
          cx="1100"
          cy="440"
          rx="780"
          ry="410"
          fill="none"
          stroke="url(#mwOrbitGrad2)"
          strokeWidth="0.8"
          strokeDasharray="2 8"
          transform="rotate(-24 1100 440)"
        />

        {/* Radar Telemetry Beacon Reticle */}
        <g transform="translate(820, 360)">
          <circle cx="0" cy="0" r="4" fill="#F59E0B" />
          <circle cx="0" cy="0" r="14" fill="none" stroke="#F59E0B" strokeWidth="0.7" opacity="0.4" />
          <circle cx="0" cy="0" r="32" fill="none" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
};

export default MilkyWayDustEngine;
