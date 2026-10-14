import React from 'react';

export type GlassDepth = 'flat' | 'elevated' | 'sunken' | 'floating';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  depth?: GlassDepth;
  blur?: 'sm' | 'md' | 'lg' | 'none';
  borderVariant?: 'subtle' | 'medium' | 'accent' | 'none';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  depth = 'flat',
  blur = 'md',
  borderVariant = 'subtle',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const depthClasses: Record<GlassDepth, string> = {
    flat: 'bg-[#070D18]/70',
    elevated: 'bg-[#070D18]/90 shadow-xl shadow-black/40',
    sunken: 'bg-[#020611]/80 inset-shadow',
    floating: 'bg-[#070D18]/95 shadow-2xl shadow-amber-950/20',
  };

  const blurClasses = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-xl',
  };

  const borderClasses = {
    none: 'border-0',
    subtle: 'border border-[#FFFBEB]/[0.08]',
    medium: 'border border-[#FFFBEB]/[0.14]',
    accent: 'border border-[#F59E0B]/35',
  };

  const combinedClassName = `rounded-xl ${depthClasses[depth]} ${blurClasses[blur]} ${borderClasses[borderVariant]} ${className}`;

  if (Component === 'section') {
    return <section className={combinedClassName} {...props}>{children}</section>;
  }
  if (Component === 'article') {
    return <article className={combinedClassName} {...props}>{children}</article>;
  }
  if (Component === 'aside') {
    return <aside className={combinedClassName} {...props}>{children}</aside>;
  }

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};
