import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface ServiceBreadcrumbsProps {
  serviceTitle: string;
}

export const ServiceBreadcrumbs: React.FC<ServiceBreadcrumbsProps> = ({ serviceTitle }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-slate-400 flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center hover:text-amber-400 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-amber-400/50 rounded px-1"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>HOME</span>
          </Link>
        </li>
        <li className="flex items-center text-white/20" aria-hidden="true">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        <li>
          <Link
            to="/services"
            className="hover:text-amber-400 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-amber-400/50 rounded px-1"
          >
            <span>SERVICES</span>
          </Link>
        </li>
        <li className="flex items-center text-white/20" aria-hidden="true">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        <li aria-current="page">
          <span className="text-amber-300 font-medium px-2 py-0.5 bg-amber-950/40 border border-amber-500/30 rounded">
            {serviceTitle.toUpperCase()}
          </span>
        </li>
      </ol>
    </nav>
  );
};
