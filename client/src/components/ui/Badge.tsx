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
      badge: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30 shadow-[0_0_12px_rgba(245, 158, 11, 0.2)]',
      dot: 'bg-[#F59E0B]',
    },
    violet: {
      badge: 'bg-[#D97706]/15 text-[#FBBF24] border-[#D97706]/30 shadow-[0_0_12px_rgba(251, 191, 36, 0.15)]',
      dot: 'bg-[#FBBF24]',
    },
    emerald: {
      badge: 'bg-[#FBBF24]/10 text-[#FBBF24] border-[#FBBF24]/30 shadow-[0_0_12px_rgba(251, 191, 36, 0.2)]',
      dot: 'bg-[#FBBF24]',
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
