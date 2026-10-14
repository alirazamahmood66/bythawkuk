import React from 'react';

interface GlowLayerProps {
  color?: 'cyan' | 'violet' | 'blue' | 'white';
  position?: 'top-center' | 'top-left' | 'top-right' | 'center' | 'bottom-right';
  className?: string;
}

export const GlowLayer: React.FC<GlowLayerProps> = ({
  color = 'cyan',
  position = 'top-center',
  className = '',
}) => {
  const colorGradients = {
    cyan: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0) 70%)',
    violet: 'radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, rgba(139, 92, 246, 0) 70%)',
    blue: 'radial-gradient(circle, rgba(2, 132, 199, 0.16) 0%, rgba(2, 132, 199, 0) 70%)',
    white: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
  };

  const positionStyles = {
    'top-center': 'top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]',
    'top-left': '-top-20 -left-20 w-[600px] h-[600px]',
    'top-right': '-top-20 -right-20 w-[600px] h-[600px]',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]',
    'bottom-right': '-bottom-20 -right-20 w-[600px] h-[600px]',
  };

  return (
    <div
      className={`absolute pointer-events-none rounded-full filter blur-[90px] ${positionStyles[position]} ${className}`}
      style={{ background: colorGradients[color] }}
      aria-hidden="true"
    />
  );
};
