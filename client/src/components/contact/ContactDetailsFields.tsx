import React from 'react';

interface ContactDetailsFieldsProps {
  name: string;
  onNameChange: (val: string) => void;
  email: string;
  onEmailChange: (val: string) => void;
  phone: string;
  onPhoneChange: (val: string) => void;
  honeypot: string;
  onHoneypotChange: (val: string) => void;
  errors: Record<string, string>;
}

export const ContactDetailsFields: React.FC<ContactDetailsFieldsProps> = ({
  name,
  onNameChange,
  email,
  onEmailChange,
  phone,
  onPhoneChange,
  honeypot,
  onHoneypotChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Your Contact Coordinates
        </h2>
        <p className="text-sm text-space-muted mt-1 leading-relaxed">
          Where should our engineering leadership send your initial assessment and scheduling link?
        </p>
      </div>

      {/* Hidden honeypot trap field for spam bots */}
      <div className="hidden opacity-0 pointer-events-none absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_fax">Leave this field blank</label>
        <input
          id="company_fax"
          name="company_fax"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => onHoneypotChange(e.target.value)}
        />
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-sm font-semibold text-white tracking-wide block font-sans"
          >
            Full Name <span className="text-amber-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="e.g. Alex Morgan"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-[#0B0C10]/90 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-500 focus:ring-red-500/50'
                : 'border-white/[0.08] focus:border-amber-400 focus:ring-amber-400/50'
            }`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-semibold text-white tracking-wide block font-sans"
          >
            Email Address <span className="text-amber-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={255}
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="e.g. alex@company.com.au"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : 'email-hint'}
            className={`w-full px-4 py-3 rounded-xl bg-[#0B0C10]/90 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500/50'
                : 'border-white/[0.08] focus:border-amber-400 focus:ring-amber-400/50'
            }`}
          />
          <p id="email-hint" className="text-xs text-slate-400 font-sans">
            We will only use this email to communicate directly regarding your enquiry. Zero spam.
          </p>
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="contact-phone"
            className="text-sm font-semibold text-white tracking-wide block font-sans"
          >
            Phone Number <span className="text-xs font-normal text-slate-400 font-mono">(Optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={50}
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="e.g. +44 20 7946 0192"
            className="w-full px-4 py-3 rounded-xl bg-[#0B0C10]/90 border border-white/[0.08] text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50"
          />
        </div>
      </div>
    </div>
  );
};
