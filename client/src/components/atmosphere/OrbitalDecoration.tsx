import React from 'react';

interface OrbitalDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const OrbitalDecoration: React.FC<OrbitalDecorationProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-[320px] h-[320px]',
    md: 'w-[520px] h-[520px]',
    lg: 'w-[750px] h-[750px]',
  };

  return (
    <div
      className={`absolute pointer-events-none flex items-center justify-center opacity-30 ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      {/* Outer Ellipse */}
      <div
        className="w-full h-full rounded-full border border-[#F59E0B]/20"
        style={{
          transform: 'rotate(-25deg) scaleY(0.4)',
        }}
      />
      {/* Secondary Orbit with subtle dash */}
      <div
        className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#FBBF24]/20"
        style={{
          transform: 'rotate(-20deg) scaleY(0.4)',
        }}
      />
      {/* Micro Planetary Node */}
      <div
        className="absolute top-[28%] right-[14%] w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245, 158, 11, 0.8)]"
      />
    </div>
  );
};
