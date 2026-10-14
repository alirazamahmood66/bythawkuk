import React from 'react';

interface GridOverlayProps {
  opacity?: number;
  className?: string;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({
  opacity = 0.035,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, ${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)',
      }}
      aria-hidden="true"
    />
  );
};
