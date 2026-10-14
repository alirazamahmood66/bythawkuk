import React from 'react';

interface StatusIndicatorProps {
  status: 'online' | 'degraded' | 'offline' | 'loading';
  label?: string;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  className = '',
}) => {
  const statusConfig = {
    online: {
      dot: 'bg-emerald-400',
      pulse: 'bg-emerald-400/75',
      text: 'text-emerald-400',
      defaultLabel: 'System Operational',
    },
    degraded: {
      dot: 'bg-amber-400',
      pulse: 'bg-amber-400/75',
      text: 'text-amber-400',
      defaultLabel: 'Degraded',
    },
    offline: {
      dot: 'bg-rose-500',
      pulse: 'bg-rose-500/75',
      text: 'text-rose-400',
      defaultLabel: 'Offline / Disconnected',
    },
    loading: {
      dot: 'bg-cyan-400',
      pulse: 'bg-cyan-400/75',
      text: 'text-cyan-400',
      defaultLabel: 'Checking Status...',
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-2 text-xs font-medium ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.pulse}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${config.dot}`}
        />
      </span>
      <span className={config.text}>{label || config.defaultLabel}</span>
    </div>
  );
};
