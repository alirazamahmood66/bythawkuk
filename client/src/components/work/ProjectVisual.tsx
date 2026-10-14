import React from 'react';
import { Terminal, Layers, Sparkles } from 'lucide-react';

interface ProjectVisualProps {
  title: string;
  category: string;
  accentColor: string;
  heroImage?: string;
  badgeLabel?: string;
  aspectRatio?: 'wide' | 'standard' | 'portrait';
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  title,
  category,
  accentColor,
  heroImage,
  badgeLabel = 'PROJECT PREVIEW',
  aspectRatio = 'standard',
  className = '',
}) => {
  const aspectClasses = {
    wide: 'h-64 sm:h-80 md:h-96 lg:h-[420px]',
    standard: 'h-52 sm:h-64 md:h-72',
    portrait: 'h-72 sm:h-80 md:h-[380px]',
  }[aspectRatio];

  if (heroImage) {
    return (
      <div
        className={`w-full ${aspectClasses} rounded-2xl overflow-hidden relative border border-[#E8FFFC]/[0.08] bg-[#061F25]/90 group ${className}`}
      >
        <img
          src={heroImage}
          alt={`${title} case study visual preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-10">
          <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#001119]/80 border border-[#E8FFFC]/[0.08] text-[#E8FFFC]/70 backdrop-blur-md">
            {badgeLabel}
          </span>
        </div>
      </div>
    );
  }

  // Abstract Architectural Blueprint & Constellation Motif
  return (
    <div
      className={`w-full ${aspectClasses} rounded-2xl overflow-hidden relative border border-[#E8FFFC]/[0.08] bg-[#061F25]/90 p-5 sm:p-7 flex flex-col justify-between group transition-all duration-300 ${className}`}
    >
      {/* Background radial gradient spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />

      {/* Decorative Technical Grid Overlay */}
      <div className="absolute inset-0 bg-space-grid opacity-25 pointer-events-none" />

      {/* Subtle Constellation Vector Vectors */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke={accentColor} strokeWidth="1" strokeDasharray="3 4" />
        <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#30F1BE" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="50%" y1="50%" x2="60%" y2="80%" stroke={accentColor} strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="20%" cy="30%" r="3" fill={accentColor} />
        <circle cx="50%" cy="50%" r="4" fill="#23F7DB" />
        <circle cx="80%" cy="40%" r="3" fill="#30F1BE" />
        <circle cx="60%" cy="80%" r="3" fill="#04A37B" />
      </svg>

      {/* Top Header Strip */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5" style={{ color: accentColor }} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#E8FFFC]/70 font-medium">
            {badgeLabel}
          </span>
        </div>

        <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded bg-[#008C6B]/20 border border-[#04A37B]/30 text-[#30F1BE] uppercase">
          {category}
        </span>
      </div>

      {/* Center Holographic Blueprint Schematic */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundColor: `${accentColor}12`,
            border: `1px solid ${accentColor}40`,
            boxShadow: `0 0 30px ${accentColor}20`,
          }}
        >
          <Layers className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: accentColor }} />
        </div>

        <span className="font-mono text-xs text-[#E8FFFC]/90 font-medium tracking-wide">
          {title}
        </span>
        <span className="font-mono text-[10px] text-[#E8FFFC]/50 mt-0.5 uppercase tracking-wider">
          ARCHITECTURAL BLUEPRINT
        </span>
      </div>

      {/* Bottom Technical Telemetry Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#E8FFFC]/50 z-10 pt-3 border-t border-[#E8FFFC]/[0.08]">
        <span className="flex items-center">
          <Sparkles className="w-3 h-3 mr-1" style={{ color: accentColor }} />
          <span>BYTHAWK.UK // SPECIFICATION</span>
        </span>
        <span className="text-[#23F7DB] font-medium">Verified Blueprint</span>
      </div>
    </div>
  );
};
