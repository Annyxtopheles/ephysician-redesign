import React from 'react';
import { Check } from 'lucide-react';

// Import official EHR & PMS SVGs for Direct Sync dock
import openDentalLogo from '../assets/systems/opendental logo.svg';
import nexhealthLogo from '../assets/systems/nexhealth-dark.svg';
import eaglesoftLogo from '../assets/systems/eaglesoft logo.svg';
import dentrixLogo from '../assets/systems/Henry_Schein_One_idgM28iBol_1.svg';
import ecwLogo from '../assets/systems/EClinicalWorks_idCA4_zeW0_0.svg';

// Import custom generated Bento imagery
import bentoEhrLaptop from '../assets/bento/bento-ehr-laptop.png';
import bentoPricingDesk from '../assets/bento/bento-pricing-desk.jpg';
import bentoSpeedPhone from '../assets/bento/bento-speed-phone.jpg';
import bentoCustomRules from '../assets/bento/bento-custom-rules.jpg';
import bentoSecurityHipaa from '../assets/bento/bento-security-hipaa.jpg';

export const WhyPracticesSwitch: React.FC = () => {
  const ehrIntegrations = [
    { name: 'Open Dental', logo: openDentalLogo, className: 'h-3.5 sm:h-4 w-auto max-w-[95px]' },
    { name: 'NexHealth', logo: nexhealthLogo, className: 'h-4 sm:h-4.5 w-auto max-w-[100px]' },
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
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-border-soft shadow-xs group transition-all duration-300 hover:shadow-card-hover min-h-[300px] sm:min-h-[340px] flex flex-col justify-between p-6 sm:p-8 bg-[#f8fcfd]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={bentoEhrLaptop}
                alt="Clinic EHR on laptop"
                className="w-full h-full object-cover object-right-bottom transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Light Protective Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/80 sm:to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-md lg:max-w-lg">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight">
                Works alongside your existing EHR &amp; PMS
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-text-body leading-relaxed">
                ePhysician is a non-invasive layer on top of your practice management database. Appointments, patient records, and insurance verifications sync bi-directionally in real time.
              </p>
            </div>

            {/* Micro-Visual: EHR Connector Dock */}
            <div className="relative z-10 mt-6 pt-5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {ehrIntegrations.map((ehr, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs border border-border-soft/90 shadow-2xs hover:border-brand-blue/30 transition-all h-8 sm:h-9"
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
          <div className="relative overflow-hidden rounded-3xl border border-border-soft shadow-xs group transition-all duration-300 hover:shadow-card-hover min-h-[300px] sm:min-h-[340px] flex flex-col justify-between p-6 sm:p-8 bg-[#faf8f5]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={bentoPricingDesk}
                alt="Minimalist clinic desk flatlay"
                className="w-full h-full object-cover object-right-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Light Protective Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/30 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/80 sm:to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy tracking-tight leading-snug">
                Pay only for what you use
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-text-body leading-relaxed">
                No bloated vendor contracts. Pay proportional to your actual answered call and reminder volume.
              </p>
            </div>

            {/* Micro-Visual: Pricing Comparison Pill */}
            <div className="relative z-10 mt-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-emerald-300/80 shadow-xs text-xs font-semibold text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>ePhysician Model</span>
                <span className="text-text-body/30">·</span>
                <span>Per-call</span>
                <span className="text-text-body/30">·</span>
                <span className="font-bold text-emerald-900">$0 waste</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Live in Under 24 Hours */}
          <div className="relative overflow-hidden rounded-3xl border border-border-soft shadow-xs group transition-all duration-300 hover:shadow-card-hover min-h-[280px] sm:min-h-[310px] flex flex-col justify-between p-6 sm:p-8 bg-[#f7fafc]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={bentoSpeedPhone}
                alt="Clinic reception VoIP phone"
                className="w-full h-full object-cover object-right-bottom transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Light Protective Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/75 sm:to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight leading-snug">
                Live in under 24 hours
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                Keep your existing clinic telephone number. Point forwarding to Sarah, and start handling live calls today.
              </p>
            </div>

            {/* Micro-Visual: 3-Step Pipeline */}
            <div className="relative z-10 mt-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs border border-border-soft shadow-2xs text-xs font-bold text-brand-navy">
                <span className="flex items-center gap-1.5 text-brand-blue">
                  <span className="w-4 h-4 rounded-full bg-brand-blue text-white text-[10px] flex items-center justify-center font-bold">1</span>
                  Forward
                </span>
                <span className="text-border-soft text-xs">→</span>
                <span className="flex items-center gap-1.5 text-brand-blue">
                  <span className="w-4 h-4 rounded-full bg-brand-blue text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  Auth EHR
                </span>
                <span className="text-border-soft text-xs">→</span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                  Sarah Live
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Staff Customize Voice & Rules */}
          <div className="relative overflow-hidden rounded-3xl border border-border-soft shadow-xs group transition-all duration-300 hover:shadow-card-hover min-h-[280px] sm:min-h-[310px] flex flex-col justify-between p-6 sm:p-8 bg-[#fdfbf9]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={bentoCustomRules}
                alt="Clinic desk with wireless keyboard"
                className="w-full h-full object-cover object-right-bottom transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Light Protective Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/75 sm:to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight leading-snug">
                Staff customize voice &amp; rules
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                Adjust scheduling rules, booking windows, triage logic, and clinical guidelines without waiting on IT tickets.
              </p>
            </div>

            {/* Micro-Visual: Protocol Pills */}
            <div className="relative z-10 mt-6 flex flex-wrap gap-1.5">
              <span className="text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-brand-navy px-2.5 py-1 rounded-lg border border-border-soft shadow-2xs">
                Tone: Warm &amp; Empathetic
              </span>
              <span className="text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-brand-navy px-2.5 py-1 rounded-lg border border-border-soft shadow-2xs">
                English / Spanish
              </span>
              <span className="text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-brand-navy px-2.5 py-1 rounded-lg border border-border-soft shadow-2xs">
                Emergency Triage
              </span>
            </div>
          </div>

          {/* Bento Card 5: Enterprise Compliance */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-xs group transition-all duration-300 hover:shadow-card-hover min-h-[280px] sm:min-h-[310px] flex flex-col justify-between p-6 sm:p-8 bg-[#0a1622]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={bentoSecurityHipaa}
                alt="Medical stethoscope with cyan rim lighting"
                className="w-full h-full object-cover object-right-bottom transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Dark Protective Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1622]/95 via-[#0a1622]/75 to-[#0a1622]/40 sm:bg-gradient-to-r sm:from-[#0a1622]/95 sm:via-[#0a1622]/70 sm:to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight leading-snug">
                Zero patient data used for AI training
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                Full HIPAA Business Associate Agreement (BAA) executed on day one. Your clinical records remain 100% private.
              </p>
            </div>

            {/* Micro-Visual: Compliance Guarantee Pill */}
            <div className="relative z-10 mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xs text-xs font-semibold text-white">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3.5 h-3.5" /> BAA Ready Immediately
                </span>
                <span className="text-white/30">|</span>
                <span className="text-slate-200">PCI-DSS Level 1</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
