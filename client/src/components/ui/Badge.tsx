import React from 'react';

export type BadgeVariant = 'cyan' | 'violet' | 'emerald' | 'amber' | 'neutral' | 'outline';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  withDot?: boolean;
  pulseDot?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  withDot = false,
  pulseDot = false,
  size = 'sm',
  className = '',
}) => {
  const variantStyles: Record<BadgeVariant, { badge: string; dot: string }> = {
    cyan: {
      badge: 'bg-[#23F7DB]/10 text-[#23F7DB] border-[#23F7DB]/30 shadow-[0_0_12px_rgba(35,247,219,0.2)]',
      dot: 'bg-[#23F7DB]',
    },
    violet: {
      badge: 'bg-[#04A37B]/15 text-[#30F1BE] border-[#04A37B]/30 shadow-[0_0_12px_rgba(48,241,190,0.15)]',
      dot: 'bg-[#30F1BE]',
    },
    emerald: {
      badge: 'bg-[#30F1BE]/10 text-[#30F1BE] border-[#30F1BE]/30 shadow-[0_0_12px_rgba(48,241,190,0.2)]',
      dot: 'bg-[#30F1BE]',
    },
    amber: {
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      dot: 'bg-amber-400',
    },
    neutral: {
      badge: 'bg-white/[0.04] text-slate-300 border-white/[0.1]',
      dot: 'bg-slate-400',
    },
    outline: {
      badge: 'bg-transparent text-slate-300 border-white/20',
      dot: 'bg-white',
    },
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  const current = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-full border uppercase tracking-wider ${current.badge} ${sizeStyles[size]} ${className}`}
    >
      {withDot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulseDot && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dot}`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${current.dot}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
