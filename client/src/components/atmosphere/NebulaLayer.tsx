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
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(2, 132, 199, 0.05) 50%, transparent 70%)',
        }}
      />

      {/* Middle-left cosmic violet glow */}
      <div
        className="absolute top-[35%] -left-[15%] w-[750px] h-[750px] rounded-full filter blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Bottom center deep navy glow */}
      <div
        className="absolute -bottom-[20%] left-[20%] w-[900px] h-[600px] rounded-full filter blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(14, 165, 233, 0.08) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 80%)',
        }}
      />
    </div>
  );
};
