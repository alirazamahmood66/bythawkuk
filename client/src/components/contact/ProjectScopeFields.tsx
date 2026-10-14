import React from 'react';
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '@/data/contactData';

interface ProjectScopeFieldsProps {
  description: string;
  onDescriptionChange: (val: string) => void;
  website: string;
  onWebsiteChange: (val: string) => void;
  company: string;
  onCompanyChange: (val: string) => void;
  budget: string;
  onBudgetChange: (val: string) => void;
  timeline: string;
  onTimelineChange: (val: string) => void;
  errors: Record<string, string>;
}

export const ProjectScopeFields: React.FC<ProjectScopeFieldsProps> = ({
  description,
  onDescriptionChange,
  website,
  onWebsiteChange,
  company,
  onCompanyChange,
  budget,
  onBudgetChange,
  timeline,
  onTimelineChange,
  errors,
}) => {
  const maxChars = 3000;
  const charsRemaining = maxChars - description.length;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Project Scope & Objectives
        </h2>
        <p className="text-sm text-space-muted mt-1 leading-relaxed">
          Provide an overview of what you are aiming to build, improve, or solve.
        </p>
      </div>

      {/* Project Description Textarea */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="project-description"
            className="text-sm font-semibold text-white tracking-wide"
          >
            Tell us about your project <span className="text-space-cyan">*</span>
          </label>
          <span
            className={`text-[11px] font-mono ${
              charsRemaining < 100 ? 'text-amber-400' : 'text-space-muted'
            }`}
          >
            {charsRemaining} characters left
          </span>
        </div>

        <textarea
          id="project-description"
          name="description"
          rows={5}
          maxLength={maxChars}
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Tell us what you're building, what you're trying to improve, your primary objectives, and what success would look like."
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? 'desc-error' : 'desc-hint'}
          className={`w-full p-4 rounded-xl bg-[#070D18]/90 border text-white placeholder-slate-400 text-sm leading-relaxed transition-all focus:outline-none focus:ring-2 ${
            errors.description
              ? 'border-red-500 focus:ring-red-500/50'
              : 'border-white/[0.08] focus:border-cyan-400 focus:ring-cyan-400/50'
          }`}
        />

        <p id="desc-hint" className="text-xs text-slate-400 font-sans">
          A brief summary is plenty. We will delve into specific technical details during our discovery call.
        </p>

        {errors.description && (
          <p id="desc-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
            {errors.description}
          </p>
        )}
      </div>

      {/* Organization and Current Website (2-Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="company-name"
            className="text-sm font-semibold text-white tracking-wide block font-sans"
          >
            Business / Organization <span className="text-xs font-normal text-slate-400 font-mono">(Optional)</span>
          </label>
          <input
            id="company-name"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={150}
            value={company}
            onChange={(e) => onCompanyChange(e.target.value)}
            placeholder="e.g. Acme Health UK"
            className="w-full px-4 py-3 rounded-xl bg-[#070D18]/90 border border-white/[0.08] text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="current-website"
            className="text-sm font-semibold text-white tracking-wide block font-sans"
          >
            Current Website or Product <span className="text-xs font-normal text-slate-400 font-mono">(Optional)</span>
          </label>
          <input
            id="current-website"
            name="website"
            type="url"
            autoComplete="url"
            maxLength={255}
            value={website}
            onChange={(e) => onWebsiteChange(e.target.value)}
            placeholder="https://example.co.uk"
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? 'website-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-[#070D18]/90 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.website
                ? 'border-red-500 focus:ring-red-500/50'
                : 'border-white/[0.08] focus:border-cyan-400 focus:ring-cyan-400/50'
            }`}
          />
          {errors.website && (
            <p id="website-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
              {errors.website}
            </p>
          )}
        </div>
      </div>

      {/* Indicative Budget Range Selection */}
      <fieldset className="space-y-3 pt-4 border-t border-white/[0.08]">
        <legend className="text-sm font-semibold text-white tracking-wide font-sans">
          Indicative Investment Range <span className="text-xs font-normal text-slate-400 font-mono">(Optional)</span>
        </legend>
        <p className="text-xs text-slate-400 font-sans">
          Helps us tailor architecture and phasing options appropriately. These are non-binding exploratory ranges.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {BUDGET_OPTIONS.map((opt) => {
            const isSelected = budget === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onBudgetChange(opt.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                  isSelected
                    ? 'bg-amber-950/60 border-cyan-400 text-white shadow-md shadow-amber-950/40'
                    : 'bg-[#070D18]/80 border-white/[0.08] hover:border-amber-500/40 text-slate-300 hover:text-white'
                }`}
              >
                <div className="text-xs font-bold text-white tracking-wide font-sans">
                  {opt.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                  {opt.hint}
                </div>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Anticipated Timeline Selection */}
      <fieldset className="space-y-3 pt-4 border-t border-white/[0.08]">
        <legend className="text-sm font-semibold text-white tracking-wide font-sans">
          Anticipated Timeline <span className="text-xs font-normal text-slate-400 font-mono">(Optional)</span>
        </legend>
        <p className="text-xs text-slate-400 font-sans">
          When would you ideally like the first operational milestone to launch?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {TIMELINE_OPTIONS.map((opt) => {
            const isSelected = timeline === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onTimelineChange(opt.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                  isSelected
                    ? 'bg-amber-950/60 border-cyan-400 text-white shadow-md shadow-amber-950/40'
                    : 'bg-[#070D18]/80 border-white/[0.08] hover:border-amber-500/40 text-slate-300 hover:text-white'
                }`}
              >
                <div className="text-xs font-bold text-white tracking-wide font-sans">
                  {opt.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                  {opt.hint}
                </div>
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};
