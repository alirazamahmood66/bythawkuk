import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'special';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-250 cursor-pointer select-none relative overflow-hidden focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

    const variantClasses: Record<ButtonVariant, string> = {
      // Primary: High-contrast Neon Cyan / Neon Mint with glow ("Let's Talk")
      primary:
        'bg-[#23F7DB] hover:bg-[#30F1BE] text-[#001119] font-bold shadow-[0_0_20px_rgba(35,247,219,0.35)] hover:shadow-[0_0_25px_rgba(48,241,190,0.5)] border border-[#23F7DB]/50',

      // Secondary: Refined Dark Teal surface with micro border ("Explore Services")
      secondary:
        'bg-[#061F25] hover:bg-[#092c34] text-[#E8FFFC] hover:text-[#30F1BE] border border-[#E8FFFC]/15 hover:border-[#30F1BE]/50 shadow-sm',

      // Ghost: Minimalist transparent with subtle border highlight on hover ("View Project")
      ghost:
        'bg-transparent hover:bg-white/[0.04] text-[#E8FFFC]/80 hover:text-[#23F7DB] border border-transparent hover:border-[#E8FFFC]/15',

      // Special CTA: Cinematic gradient shimmer with Aqua Mint / Neon Mint / Neon Cyan depth
      special:
        'bg-gradient-to-r from-[#23F7DB] via-[#30F1BE] to-[#04A37B] hover:from-[#30F1BE] hover:to-[#008C6B] text-[#001119] font-extrabold shadow-[0_0_30px_rgba(35,247,219,0.4)] hover:shadow-[0_0_35px_rgba(48,241,190,0.6)] border border-[#E8FFFC]/30',
    };

    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-md tracking-wide',
      md: 'text-sm px-5 py-2.5 gap-2 rounded-lg tracking-normal',
      lg: 'text-base px-7 py-3.5 gap-2.5 rounded-xl tracking-normal',
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
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
