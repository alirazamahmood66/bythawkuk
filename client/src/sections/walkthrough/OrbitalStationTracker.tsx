import React from 'react';

interface OrbitalStationTrackerProps {
  activeStation: number;
  onSelectStation: (index: number) => void;
}

const STATIONS = [
  { label: 'Home', code: '01' },
  { label: 'Web Development', code: '02' },
  { label: 'Web Applications', code: '03' },
  { label: 'Mobile Apps', code: '04' },
  { label: 'E-commerce', code: '05' },
  { label: 'Marketing & SEO', code: '06' },
  { label: 'UI/UX Design', code: '07' },
];

export const OrbitalStationTracker: React.FC<OrbitalStationTrackerProps> = ({
  activeStation,
  onSelectStation,
}) => {
  return (
    <nav
      aria-label="Orbital Trajectory Navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4 pointer-events-auto"
    >
      <div className="relative flex flex-col items-center gap-3 py-3 px-2 rounded-full bg-[#061F25]/70 backdrop-blur-md border border-[#E8FFFC]/[0.08] shadow-xl">
        {STATIONS.map((station, idx) => {
          const isActive = idx === activeStation;
          return (
            <button
              key={idx}
              onClick={() => onSelectStation(idx)}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              aria-label={`Scroll to ${station.label} station`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-[#E8FFFC] bg-[#001119]/90 border border-[#E8FFFC]/[0.1] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                {station.code} // {station.label}
              </span>

              {/* Station Dot */}
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-[#23F7DB] ring-4 ring-[#23F7DB]/25 shadow-[0_0_12px_rgba(35,247,219,0.8)]'
                    : 'w-1.5 h-1.5 bg-[#E8FFFC]/40 hover:bg-[#E8FFFC]'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
