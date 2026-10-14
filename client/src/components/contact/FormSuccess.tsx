import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface FormSuccessProps {
  referenceNumber: string;
  name: string;
  onReset: () => void;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({
  referenceNumber,
  name,
  onReset,
}) => {
  return (
    <Card
      variant="default"
      spotlight={true}
      withReticles={true}
      className="py-12 sm:py-16 text-center max-w-xl mx-auto space-y-6 rounded-2xl bg-[#061F25]/90 border-white/[0.08] shadow-xl"
    >
      <div className="w-16 h-16 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-950/30">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
          ENQUIRY RECEIVED // REFERENCE: {referenceNumber}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Thank you, {name || 'Partner'}. <br />
          Let's take it from here.
        </h2>
      </div>

      <p className="text-base text-slate-300 leading-relaxed font-normal font-sans">
        Your enquiry has been received. Our team will review the details and determine the appropriate next step for your project.
      </p>

      <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono text-slate-300 flex items-center justify-center space-x-2">
        <span>STATUS:</span>
        <span className="text-cyan-400 font-bold">ENQUIRY LOGGED &bull; UNDER REVIEW</span>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/">
          <Button variant="primary" size="md" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Button>
        </Link>

        <Link to="/work">
          <Button variant="secondary" size="md" className="flex items-center group">
            <span>Explore Agency Work</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-mono text-slate-400 hover:text-cyan-400 underline transition-colors"
        >
          Submit another project enquiry &rarr;
        </button>
      </div>
    </Card>
  );
};
