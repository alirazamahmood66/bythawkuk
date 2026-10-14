import React, { useRef, useState } from 'react';

export type CardVariant =
  | 'default'
  | 'interactive'
  | 'elevated'
  | 'glowCyan'
  | 'glowViolet'
  | 'dark'
  | 'bordered';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  glow?: boolean; // legacy alias support
  padding?: 'none' | 'sm' | 'md' | 'lg';
  spotlight?: boolean;
  spotlightColor?: string;
  withReticles?: boolean;
  as?: 'div' | 'article' | 'section' | 'aside' | any;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  glow,
  padding = 'md',
  spotlight = true,
  spotlightColor = 'rgba(32, 217, 243, 0.14)',
  withReticles = false,
  as = 'div',
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const Component: any = as;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Resolve variant with backwards compatibility for boolean glow prop
  const effectiveVariant = glow ? 'glowCyan' : variant;

  const variantClasses: Record<CardVariant, string> = {
    default: 'glass-panel',
    interactive:
      'glass-panel-interactive cursor-pointer hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300',
    elevated: 'elevated-panel',
    glowCyan: 'glow-panel-cyan',
    glowViolet: 'glow-panel-violet',
    dark: 'dark-panel',
    bordered: 'bordered-panel bg-[#080e1e]/60 backdrop-blur-sm',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (spotlight && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (spotlight) {
      setMousePos(null);
    }
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <Component
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${variantClasses[effectiveVariant]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {/* 1. Dynamic Cursor Spotlight Illumination */}
      {spotlight && mousePos && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 60%)`,
          }}
        />
      )}

      {/* 2. Technical Corner HUD Reticles [ + ] */}
      {withReticles && (
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-cyan-400/50" />
          <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-cyan-400/50" />
          <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-cyan-400/50" />
          <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-cyan-400/50" />
        </div>
      )}

      {/* 3. Card Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default Card;
