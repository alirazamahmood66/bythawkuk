import React from 'react';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string; // Enforce accessible label
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  isLoading?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      variant = 'secondary',
      size = 'md',
      isLoading = false,
      className = '',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer select-none focus-ring disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';

    const variantClasses: Record<IconButtonVariant, string> = {
      primary:
        'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-amber-500/20 border border-amber-400/40',
      secondary:
        'bg-[#0B0C10] hover:bg-[#0B0C10] text-slate-300 hover:text-white border border-white/10 hover:border-amber-500/30',
      ghost:
        'bg-transparent hover:bg-white/[0.06] text-slate-400 hover:text-slate-100 border border-transparent',
      glass:
        'bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-slate-300 hover:text-amber-300 border border-white/10',
    };

    const sizeClasses: Record<IconButtonSize, string> = {
      sm: 'w-8 h-8 p-1.5 text-xs',
      md: 'w-10 h-10 p-2 text-sm',
      lg: 'w-12 h-12 p-2.5 text-base',
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        ) : (
          children
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
