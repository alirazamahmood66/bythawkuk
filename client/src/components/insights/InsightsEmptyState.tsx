import React from 'react';
import { Compass, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface InsightsEmptyStateProps {
  onReset: () => void;
}

export const InsightsEmptyState: React.FC<InsightsEmptyStateProps> = ({ onReset }) => {
  return (
    <Card
      variant="default"
      spotlight={true}
      withReticles={true}
      className="py-14 px-8 text-center max-w-md mx-auto my-12 rounded-2xl bg-[#0B0C10]/90 border-white/[0.08] space-y-5 shadow-xl"
    >
      <div className="w-14 h-14 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 shadow-sm">
        <Compass className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white tracking-tight font-sans">
          No Insights Found
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          No editorial articles currently match this category filter. Reset the filter to view all perspectives.
        </p>
      </div>

      <div className="pt-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={onReset}
          className="inline-flex items-center space-x-2"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-2" />
          <span>Reset Filter</span>
        </Button>
      </div>
    </Card>
  );
};
