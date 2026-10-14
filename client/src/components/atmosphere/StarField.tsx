import React, { useMemo } from 'react';

interface StarFieldProps {
  count?: number;
  className?: string;
  speed?: 'static' | 'slow' | 'subtle';
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

export const StarField: React.FC<StarFieldProps> = ({
  count = 90,
  className = '',
}) => {
  // Deterministic star generation to prevent hydration mismatches
  const stars = useMemo<Star[]>(() => {
    const list: Star[] = [];
    for (let i = 0; i < count; i++) {
      // Use pseudo-random deterministic distribution
      const seed = i + 1;
      const x = ((Math.sin(seed * 9999) + 1) / 2) * 100;
      const y = ((Math.cos(seed * 7777) + 1) / 2) * 100;
      const size = 0.75 + ((seed * 13) % 15) / 10; // 0.75px to 2.2px
      const opacity = 0.2 + ((seed * 29) % 60) / 100; // 0.2 to 0.8
      const animationDelay = (seed * 37) % 6;
      const animationDuration = 3 + ((seed * 43) % 4);

      list.push({
        id: i,
        x,
        y,
        size,
        opacity,
        animationDelay,
        animationDuration,
      });
    }
    return list;
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {stars.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="#ffffff"
            opacity={star.opacity}
            style={{
              animation: `starPulse ${star.animationDuration}s ease-in-out infinite`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes starPulse {
          0%, 100% { opacity: 0.25; transform: scale(0.9); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          circle { animation: none !important; }
        }
      `}</style>
    </div>
  );
};
