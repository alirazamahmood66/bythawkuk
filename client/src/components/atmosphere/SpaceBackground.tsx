import React from 'react';
import { StarField } from './StarField';
import { NebulaLayer } from './NebulaLayer';
import { GridOverlay } from './GridOverlay';
import { GlowLayer } from './GlowLayer';
import { MilkyWayDustEngine } from './MilkyWayDustEngine';

interface SpaceBackgroundProps {
  children?: React.ReactNode;
  showStars?: boolean;
  showNebula?: boolean;
  showGrid?: boolean;
  showGlow?: boolean;
  glowPosition?: 'top-center' | 'top-left' | 'top-right' | 'center' | 'bottom-right';
  className?: string;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  children,
  showStars = true,
  showNebula = true,
  showGrid = true,
  showGlow = true,
  glowPosition = 'top-center',
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#030712] ${className}`}>
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MilkyWayDustEngine />
        {showNebula && <NebulaLayer intensity="moderate" />}
        {showGrid && <GridOverlay opacity={0.03} />}
        {showStars && <StarField count={75} />}
        {showGlow && <GlowLayer color="cyan" position={glowPosition} />}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
