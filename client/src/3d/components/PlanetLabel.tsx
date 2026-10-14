import React from 'react';
import { Html } from '@react-three/drei';

interface PlanetLabelProps {
  name: string;
  category: string;
  isVisible: boolean;
  color?: string;
}

export const PlanetLabel: React.FC<PlanetLabelProps> = ({
  name,
  category,
  isVisible,
  color = '#23F7DB',
}) => {
  if (!isVisible) return null;

  return (
    <Html
      position={[0, 0.7, 0]}
      center
      distanceFactor={14}
      className="pointer-events-none select-none z-30"
    >
      <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
        {/* Technical Annotation Pill */}
        <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-[#061F25]/95 border border-[#23F7DB]/40 shadow-[0_0_20px_rgba(35,247,219,0.35)] backdrop-blur-md whitespace-nowrap">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: color }}
            />
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#E8FFFC]/70 font-medium">
              {category}
            </span>
          </div>
          <span className="font-sans font-bold text-xs text-[#E8FFFC] tracking-wide mt-0.5">
            {name}
          </span>
          <span className="font-mono text-[8px] text-[#30F1BE]/90 tracking-wider uppercase mt-0.5">
            Click to explore &rarr;
          </span>
        </div>

        {/* Thin vertical connector line */}
        <div className="w-[1px] h-3 bg-gradient-to-b from-[#23F7DB]/80 to-transparent" />
      </div>
    </Html>
  );
};
