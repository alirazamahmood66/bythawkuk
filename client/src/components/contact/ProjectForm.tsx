import React, { useState } from 'react';
import { ProjectTypeSelector } from './ProjectTypeSelector';
import { ProjectScopeFields } from './ProjectScopeFields';
import { ContactDetailsFields } from './ContactDetailsFields';
import { FormReview } from './FormReview';
import { FormSuccess } from './FormSuccess';
import { FormError } from './FormError';
import { submitContactEnquiry } from '@/services/api/contactService';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowLeft, Send, Check } from 'lucide-react';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function isValidUrl(val: string): boolean {
  if (!val) return true;
  try {
    const url = val.startsWith('http://') || val.startsWith('https://') ? val : `https://${val}`;
    const parsed = new URL(url);
    return Boolean(parsed.hostname && parsed.hostname.includes('.'));
  } catch {
    return false;
  }
}

export const ProjectForm: React.FC = () => {
  // Form State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>('');

  // UI / Submission state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successReference, setSuccessReference] = useState<string | null>(null);

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (selectedTypes.length === 0) {
      newErrors.projectTypes = 'Please select at least one project discipline before continuing.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!description.trim()) {
      newErrors.description = 'Please tell us about your project or operational requirements.';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Please provide at least 10 characters describing your project.';
    }

    if (website.trim() && !isValidUrl(website.trim())) {
      newErrors.website = 'Please enter a valid website URL (e.g. https://example.co.uk).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    else if (currentStep === 3) isValid = validateStep3();

    if (isValid) {
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      // Smooth scroll back to form header if needed
      const el = document.getElementById('project-form-container');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Verify all steps before sending
    if (!validateStep1() || !validateStep2() || !validateStep3()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await submitContactEnquiry({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        company: company.trim() || undefined,
        website: website.trim() || undefined,
        projectTypes: selectedTypes,
        description: description.trim(),
        budget: budget || undefined,
        timeline: timeline || undefined,
        honeypot: honeypot || undefined,
      });

      if (response && response.success) {
        setSuccessReference(response.data?.referenceNumber || 'BYT-RECEIVED');
      } else {
        setSubmitError(response?.message || 'Enquiry submission failed. Please try again.');
      }
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : 'Network error. Please try again.';
      setSubmitError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedTypes([]);
    setDescription('');
    setWebsite('');
    setCompany('');
    setBudget('');
    setTimeline('');
    setName('');
    setEmail('');
    setPhone('');
    setHoneypot('');
    setErrors({});
    setSubmitError(null);
    setSuccessReference(null);
  };

  // If successfully submitted, render success state
  if (successReference) {
    return (
      <FormSuccess
        referenceNumber={successReference}
        name={name}
        onReset={handleReset}
      />
    );
  }

  const stepsMeta = [
    { num: 1, label: 'Disciplines' },
    { num: 2, label: 'Scope' },
    { num: 3, label: 'Coordinates' },
    { num: 4, label: 'Review & Send' },
  ];

  return (
    <div
      id="project-form-container"
      className="p-6 sm:p-10 md:p-12 rounded-2xl bg-[#070D18]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl relative scroll-mt-24 group overflow-hidden"
    >
      {/* Precision HUD Reticles */}
      <span className="pointer-events-none absolute top-3 left-3 text-[10px] font-mono text-cyan-500/40 select-none">
        ┌
      </span>
      <span className="pointer-events-none absolute top-3 right-3 text-[10px] font-mono text-cyan-500/40 select-none">
        ┐
      </span>
      <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] font-mono text-cyan-500/40 select-none">
        └
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] font-mono text-cyan-500/40 select-none">
        ┘
      </span>

      {/* Step Progress Indicators */}
      <div className="mb-10 pb-6 border-b border-white/[0.08]">
        <nav aria-label="Project enquiry steps">
          <ol className="grid grid-cols-4 gap-2 sm:gap-4">
            {stepsMeta.map((s) => {
              const isCompleted = currentStep > s.num;
              const isCurrent = currentStep === s.num;

              return (
                <li key={s.num} className="flex flex-col">
                  <div
                    className={`h-1.5 rounded-full mb-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-space-cyan'
                        : isCurrent
                        ? 'bg-space-cyan/60 animate-pulse'
                        : 'bg-[#070D18]/80 border border-white/[0.08]'
                    }`}
                  />
                  <div className="flex items-center space-x-1.5 text-xs font-mono">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isCompleted
                          ? 'bg-space-cyan text-black'
                          : isCurrent
                          ? 'border border-space-cyan text-space-cyan'
                          : 'border border-space-border text-space-muted'
                      }`}
                    >
                      {isCompleted ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : s.num}
                    </span>
                    <span
                      className={`hidden sm:inline tracking-wider truncate ${
                        isCurrent
                          ? 'text-white font-semibold'
                          : isCompleted
                          ? 'text-space-cyan'
                          : 'text-space-muted'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Form Content Area */}
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {currentStep === 1 && (
          <ProjectTypeSelector
            selectedTypes={selectedTypes}
            onChange={(types) => {
              setSelectedTypes(types);
              if (errors.projectTypes) setErrors({});
            }}
            error={errors.projectTypes}
          />
        )}

        {currentStep === 2 && (
          <ProjectScopeFields
            description={description}
            onDescriptionChange={(val) => {
              setDescription(val);
              if (errors.description) {
                const next = { ...errors };
                delete next.description;
                setErrors(next);
              }
            }}
            website={website}
            onWebsiteChange={(val) => {
              setWebsite(val);
              if (errors.website) {
                const next = { ...errors };
                delete next.website;
                setErrors(next);
              }
            }}
            company={company}
            onCompanyChange={setCompany}
            budget={budget}
            onBudgetChange={setBudget}
            timeline={timeline}
            onTimelineChange={setTimeline}
            errors={errors}
          />
        )}

        {currentStep === 3 && (
          <ContactDetailsFields
            name={name}
            onNameChange={(val) => {
              setName(val);
              if (errors.name) {
                const next = { ...errors };
                delete next.name;
                setErrors(next);
              }
            }}
            email={email}
            onEmailChange={(val) => {
              setEmail(val);
              if (errors.email) {
                const next = { ...errors };
                delete next.email;
                setErrors(next);
              }
            }}
            phone={phone}
            onPhoneChange={setPhone}
            honeypot={honeypot}
            onHoneypotChange={setHoneypot}
            errors={errors}
          />
        )}

        {currentStep === 4 && (
          <FormReview
            selectedTypes={selectedTypes}
            description={description}
            website={website}
            company={company}
            budget={budget}
            timeline={timeline}
            name={name}
            email={email}
            phone={phone}
            onEditStep={(step) => setCurrentStep(step)}
          />
        )}

        {/* Submission Error Banner */}
        {submitError && (
          <div className="mt-8">
            <FormError message={submitError} onRetry={handleSubmit} />
          </div>
        )}

        {/* Navigation Actions Footer */}
        <div className="mt-10 pt-6 border-t border-space-border/40 flex items-center justify-between">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={handleBack}
              disabled={isSubmitting}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Previous Step</span>
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNext}
              className="group flex items-center"
            >
              <span>Continue to Step 0{currentStep + 1}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group flex items-center shadow-lg shadow-space-cyan/20"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>
                {isSubmitting
                  ? 'DISPATCHING SPECIFICATION...'
                  : 'SEND PROJECT ENQUIRY →'}
              </span>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
