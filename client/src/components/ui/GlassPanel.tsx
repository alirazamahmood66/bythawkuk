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
    flat: 'bg-[#061F25]/70',
    elevated: 'bg-[#061F25]/90 shadow-xl shadow-black/40',
    sunken: 'bg-[#001119]/80 inset-shadow',
    floating: 'bg-[#061F25]/95 shadow-2xl shadow-cyan-950/20',
  };

  const blurClasses = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-xl',
  };

  const borderClasses = {
    none: 'border-0',
    subtle: 'border border-[#E8FFFC]/[0.08]',
    medium: 'border border-[#E8FFFC]/[0.14]',
    accent: 'border border-[#23F7DB]/35',
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
