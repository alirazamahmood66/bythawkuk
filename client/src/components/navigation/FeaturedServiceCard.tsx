import React from 'react';
import { Link } from 'react-router-dom';
import type { FeaturedService } from './navigationConfig';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedServiceCardProps {
  service: FeaturedService;
  onSelect?: () => void;
}

export const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  service,
  onSelect,
}) => {
  return (
    <Link
      to={service.href}
      onClick={onSelect}
      className="group relative flex flex-col justify-between p-5 rounded-xl bg-[#070D18]/70 hover:bg-[#070D18] border border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-amber-950/20 overflow-hidden focus-ring"
    >
      {/* Ambient background glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-28 h-28 rounded-full filter blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: service.color }}
      />

      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span
            className="text-[10px] font-mono tracking-widest font-semibold uppercase px-2 py-0.5 rounded-full border border-[#FFFBEB]/[0.08] bg-[#FFFBEB]/[0.02]"
            style={{ color: service.color }}
          >
            {service.category}
          </span>
          <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FFFBEB]/[0.04] group-hover:bg-[#F59E0B]/20 text-[#FFFBEB]/60 group-hover:text-[#F59E0B] transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <h4 className="text-[#FFFBEB] font-bold text-base tracking-tight mb-1 group-hover:text-[#F59E0B] transition-colors font-sans">
          {service.title}
        </h4>
        <p className="text-xs text-[#FFFBEB]/70 leading-relaxed font-sans line-clamp-2">
          {service.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#FFFBEB]/[0.06] flex items-center gap-2 text-[11px] font-mono text-[#FBBF24] font-medium">
        <span>Explore Architecture</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </div>
    </Link>
  );
};
