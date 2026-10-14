import React from 'react';

export interface DividerProps {
  variant?: 'subtle' | 'gradient' | 'dashed' | 'accent';
  label?: string;
  withNode?: boolean;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'subtle',
  label,
  withNode = false,
  className = '',
}) => {
  const lineStyles = {
    subtle: 'bg-white/[0.08]',
    gradient: 'bg-gradient-to-r from-transparent via-white/[0.15] to-transparent',
    accent: 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent',
    dashed: 'border-b border-dashed border-white/[0.12] bg-transparent',
  };

  if (label || withNode) {
    return (
      <div className={`relative flex items-center justify-center my-8 ${className}`}>
        <div className={`flex-grow h-[1px] ${lineStyles[variant]}`} />
        <div className="mx-4 flex items-center gap-2 shrink-0">
          {withNode && (
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          )}
          {label && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
              {label}
            </span>
          )}
        </div>
        <div className={`flex-grow h-[1px] ${lineStyles[variant]}`} />
      </div>
    );
  }

  return <div className={`w-full h-[1px] my-6 ${lineStyles[variant]} ${className}`} />;
};
