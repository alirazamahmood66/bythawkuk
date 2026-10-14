import React from 'react';

interface NebulaLayerProps {
  intensity?: 'subtle' | 'moderate' | 'deep';
  className?: string;
}

export const NebulaLayer: React.FC<NebulaLayerProps> = ({
  intensity = 'subtle',
  className = '',
}) => {
  const opacityMap = {
    subtle: 'opacity-40',
    moderate: 'opacity-60',
    deep: 'opacity-80',
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${opacityMap[intensity]} ${className}`}
      aria-hidden="true"
    >
      {/* Top-right deep cyan glow */}
      <div
        className="absolute -top-[15%] -right-[10%] w-[650px] h-[650px] rounded-full filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.08) 50%, transparent 70%)',
        }}
      />

      {/* Middle-left cosmic mint glow */}
      <div
        className="absolute top-[35%] -left-[15%] w-[750px] h-[750px] rounded-full filter blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(234, 88, 12, 0.06) 50%, transparent 70%)',
        }}
      />

      {/* Bottom center deep navy glow */}
      <div
        className="absolute -bottom-[20%] left-[20%] w-[900px] h-[600px] rounded-full filter blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.08) 0%, rgba(4, 4, 7, 0.2) 60%, transparent 80%)',
        }}
      />
    </div>
  );
};
