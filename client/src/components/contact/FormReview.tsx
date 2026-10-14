import React from 'react';
import { Link } from 'react-router-dom';
import {
  PROJECT_TYPE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from '@/data/contactData';
import { Check, Edit2, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface FormReviewProps {
  selectedTypes: string[];
  description: string;
  website: string;
  company: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  onEditStep: (stepNumber: number) => void;
}

export const FormReview: React.FC<FormReviewProps> = ({
  selectedTypes,
  description,
  website,
  company,
  budget,
  timeline,
  name,
  email,
  phone,
  onEditStep,
}) => {
  const selectedTypeLabels = PROJECT_TYPE_OPTIONS.filter((opt) =>
    selectedTypes.includes(opt.id)
  ).map((opt) => opt.label);

  const budgetLabel =
    BUDGET_OPTIONS.find((b) => b.id === budget)?.label || 'Not specified';
  const timelineLabel =
    TIMELINE_OPTIONS.find((t) => t.id === timeline)?.label || 'Not specified';

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Review Project Specification
        </h2>
        <p className="text-sm text-space-muted mt-1 leading-relaxed">
          Please confirm your details before dispatching your project enquiry to our London engineering studio.
        </p>
      </div>

      <div className="space-y-4">
        {/* Step 1 Review: Selected Disciplines */}
        <Card
          variant="default"
          spotlight={true}
          withReticles={true}
          className="p-5 rounded-xl bg-[#071426]/90 border-white/[0.08] flex flex-col justify-between shadow-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              STEP 01 // SELECTED DISCIPLINES
            </span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 inline-flex items-center transition-colors"
            >
              <Edit2 className="w-3 h-3 mr-1" />
              <span>Edit</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedTypeLabels.map((lbl) => (
              <span
                key={lbl}
                className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-semibold"
              >
                {lbl}
              </span>
            ))}
          </div>
        </Card>

        {/* Step 2 Review: Scope & Parameters */}
        <Card
          variant="default"
          spotlight={true}
          withReticles={true}
          className="p-5 rounded-xl bg-[#071426]/90 border-white/[0.08] space-y-3 shadow-sm"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              STEP 02 // SCOPE & PARAMETERS
            </span>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 inline-flex items-center transition-colors"
            >
              <Edit2 className="w-3 h-3 mr-1" />
              <span>Edit</span>
            </button>
          </div>

          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase block font-semibold">
              DESCRIPTION
            </span>
            <p className="text-sm text-slate-200 mt-1 whitespace-pre-wrap leading-relaxed line-clamp-4 font-sans">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/[0.08] text-xs">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                ORGANIZATION
              </span>
              <span className="font-bold text-white mt-0.5 block truncate font-sans">
                {company || 'None provided'}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                WEBSITE
              </span>
              <span className="font-bold text-white mt-0.5 block truncate font-sans">
                {website || 'None provided'}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                BUDGET
              </span>
              <span className="font-bold text-white mt-0.5 block font-sans">
                {budgetLabel}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                TIMELINE
              </span>
              <span className="font-bold text-white mt-0.5 block font-sans">
                {timelineLabel}
              </span>
            </div>
          </div>
        </Card>

        {/* Step 3 Review: Contact Coordinates */}
        <Card
          variant="default"
          spotlight={true}
          withReticles={true}
          className="p-5 rounded-xl bg-[#071426]/90 border-white/[0.08] space-y-3 shadow-sm"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              STEP 03 // CONTACT COORDINATES
            </span>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 inline-flex items-center transition-colors"
            >
              <Edit2 className="w-3 h-3 mr-1" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                FULL NAME
              </span>
              <span className="font-bold text-white mt-0.5 block font-sans">
                {name}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                EMAIL ADDRESS
              </span>
              <span className="font-bold text-white mt-0.5 block truncate font-sans">
                {email}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                PHONE NUMBER
              </span>
              <span className="font-bold text-white mt-0.5 block font-sans">
                {phone || 'Not provided'}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Privacy Notice */}
      <div className="p-4 rounded-xl bg-[#071426]/80 border border-white/[0.08] flex items-start space-x-3 text-xs text-slate-300 leading-relaxed font-sans">
        <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
        <p>
          By submitting this enquiry, you acknowledge that Bythawk will process the details provided to assess your project requirements and communicate our response. For more information, please read our{' '}
          <Link to="/privacy" className="text-cyan-400 underline hover:text-cyan-300">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
