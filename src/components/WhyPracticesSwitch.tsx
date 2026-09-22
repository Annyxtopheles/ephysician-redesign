import React from 'react';
import { Database, DollarSign, Zap, Sliders, ShieldCheck, ArrowRight, Check } from 'lucide-react';

// Import official EHR & PMS SVGs for Direct Sync dock
import openDentalLogo from '../assets/systems/opendental logo.svg';
import nexhealthLogo from '../assets/systems/nexhealth-dark.svg';
import eaglesoftLogo from '../assets/systems/eaglesoft logo.svg';
import dentrixLogo from '../assets/systems/Henry_Schein_One_idgM28iBol_1.svg';
import ecwLogo from '../assets/systems/EClinicalWorks_idCA4_zeW0_0.svg';

export const WhyPracticesSwitch: React.FC = () => {
  const ehrIntegrations = [
    { name: 'Open Dental', logo: openDentalLogo, className: 'h-3.5 sm:h-4 w-auto max-w-[95px]' },
    { name: 'NexHealth', logo: nexhealthLogo, className: 'h-4.5 sm:h-5 w-auto max-w-[90px]' },
    { name: 'Eaglesoft', logo: eaglesoftLogo, className: 'h-3.5 sm:h-4 w-auto max-w-[90px]' },
    { name: 'Dentrix', logo: dentrixLogo, className: 'h-3 sm:h-3.5 w-auto max-w-[85px]' },
    { name: 'eClinicalWorks', logo: ecwLogo, className: 'h-3 sm:h-3.5 w-auto max-w-[105px]' },
  ];

  return (
    <section id="architecture" className="py-14 md:py-20 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold font-heading tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight text-balance mt-3">
            Built to replace the busywork, not&nbsp;your&nbsp;systems.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-body max-w-2xl mx-auto">
            Engineered for high-volume clinics that want autonomous front-desk operations without tearing out their existing EHR or retraining staff.
          </p>
        </div>

        {/* Bento-Grid Architecture Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Works Alongside Your EHR (Spans 2 cols on desktop) */}
          <div className="md:col-span-2 bg-[#EFFAFB] rounded-2xl p-6 sm:p-8 border border-border-soft flex flex-col justify-between hover:border-brand-blue/40 hover:shadow-card-hover transition-all duration-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold font-heading uppercase tracking-wider text-brand-blue">
                  Zero Migration Required
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy tracking-tight">
                Works alongside your existing EHR & PMS
              </h3>
              <p className="mt-2 text-sm sm:text-base text-text-body leading-relaxed max-w-xl">
                ePhysician is a non-invasive layer on top of your practice management database. Appointments, patient records, and insurance verifications sync bi-directionally in real time.
              </p>
            </div>

            {/* Micro-Visual: EHR Connector Dock */}
            <div className="mt-6 pt-5 border-t border-border-soft/80">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-xs font-semibold text-text-body/70 mr-1">Direct Sync:</span>
                {ehrIntegrations.map((ehr, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-border-soft shadow-2xs hover:border-brand-blue/30 transition-all h-8 sm:h-9"
                    title={ehr.name}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <img
                      src={ehr.logo}
                      alt={ehr.name}
                      className={`${ehr.className} object-contain`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 2: Fair Usage-Based Pricing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-soft flex flex-col justify-between hover:border-brand-blue/40 hover:shadow-card-hover transition-all duration-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <DollarSign className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold font-heading uppercase tracking-wider text-emerald-700">
                  Usage-Based Pricing
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                Pay only for what you use
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                No bloated vendor contracts. Pay proportional to your actual answered call and reminder volume.
              </p>
            </div>

            {/* Micro-Visual: Pricing Comparison */}
            <div className="mt-6 p-3.5 rounded-xl bg-surface-pale border border-border-soft space-y-2">
              <div className="flex items-center justify-between text-xs text-text-body/60 line-through">
                <span>Traditional SaaS Contract</span>
                <span>$1,500/mo flat fee</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                <span>ePhysician Model</span>
                <span>Per-call handled · $0 waste</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Live in Under 24 Hours */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-soft flex flex-col justify-between hover:border-brand-blue/40 hover:shadow-card-hover transition-all duration-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold font-heading uppercase tracking-wider text-amber-700">
                  Same-Day Launch
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                Live in under 24 hours
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                Keep your existing clinic telephone number. Point forwarding to Sarah, and start handling live calls today.
              </p>
            </div>

            {/* Micro-Visual: 3-Step Pipeline */}
            <div className="mt-6 flex items-center justify-between text-[11px] font-bold text-brand-navy bg-surface-pale p-3 rounded-xl border border-border-soft">
              <span className="text-brand-blue">1. Forward</span>
              <ArrowRight className="w-3 h-3 text-border-soft shrink-0" />
              <span className="text-brand-blue">2. Auth EHR</span>
              <ArrowRight className="w-3 h-3 text-border-soft shrink-0" />
              <span className="text-emerald-700">3. Sarah Live</span>
            </div>
          </div>

          {/* Bento Card 4: Clinician Configured Voice */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-soft flex flex-col justify-between hover:border-brand-blue/40 hover:shadow-card-hover transition-all duration-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0">
                  <Sliders className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold font-heading uppercase tracking-wider text-brand-navy">
                  Custom Practice Rules
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                Staff customize voice & rules
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                Adjust scheduling rules, booking windows, triage logic, and clinical guidelines without waiting on IT tickets.
              </p>
            </div>

            {/* Micro-Visual: Protocol Pills */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-medium bg-surface-pale text-brand-navy px-2 py-1 rounded border border-border-soft">
                Tone: Warm & Empathetic
              </span>
              <span className="text-[10px] font-medium bg-surface-pale text-brand-navy px-2 py-1 rounded border border-border-soft">
                Emergency Call Triage
              </span>
              <span className="text-[10px] font-medium bg-surface-pale text-brand-navy px-2 py-1 rounded border border-border-soft">
                English / Spanish Live
              </span>
            </div>
          </div>

          {/* Bento Card 5: Enterprise Compliance */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-soft flex flex-col justify-between hover:border-brand-blue/40 hover:shadow-card-hover transition-all duration-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold font-heading uppercase tracking-wider text-brand-blue">
                  Healthcare Security
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                Zero patient data used for AI training
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                Full HIPAA Business Associate Agreement (BAA) executed on day one. Your clinical records remain 100% private.
              </p>
            </div>

            {/* Micro-Visual: Compliance Guarantee */}
            <div className="mt-6 flex items-center justify-between text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> BAA Ready Immediately
              </span>
              <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">
                PCI-DSS Level 1
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
