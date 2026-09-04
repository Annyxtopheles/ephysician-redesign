import React from 'react';
import LogoLoop from './LogoLoop';

export const TrustBar: React.FC = () => {
  // Row 1: Core Practice & Infrastructure Integrations (Sliding Left)
  const row1Logos = [
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#0066F5]/10 text-[#0066F5] flex items-center justify-center font-bold text-xs font-heading">
            NH
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">NexHealth</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Patient + appointment sync</span>
          </div>
        </div>
      ),
      title: 'NexHealth',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#00529B]/10 text-[#00529B] flex items-center justify-center font-bold text-xs font-heading">
            eCW
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">eClinicalWorks</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">EHR + practice management</span>
          </div>
        </div>
      ),
      title: 'eClinicalWorks',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#E65100]/10 text-[#E65100] flex items-center justify-center font-bold text-xs font-heading">
            Sk
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Sikka</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Practice analytics</span>
          </div>
        </div>
      ),
      title: 'Sikka',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#F22F46]/10 text-[#F22F46] flex items-center justify-center">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.977 0-7.2-3.223-7.2-7.2s3.223-7.2 7.2-7.2 7.2 3.223 7.2 7.2-3.223 7.2-7.2 7.2z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Twilio</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Voice & SMS</span>
          </div>
        </div>
      ),
      title: 'Twilio',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#4A154B]/10 text-[#4A154B] flex items-center justify-center font-bold text-xs font-heading">
            St
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Stedi</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Insurance eligibility</span>
          </div>
        </div>
      ),
      title: 'Stedi',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-bold text-xs font-heading">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.72.5 7.437.5 3.76 3.195 3.76 7.646c0 5.034 5.372 5.56 8.32 6.643 2.502.915 3.328 1.603 3.328 2.659 0 1.054-.913 1.579-2.316 1.579-2.344 0-5.188-1.056-7.042-2.164L5 22.185c1.88 1.139 4.887 1.815 8.163 1.815 5.586 0 9.387-2.713 9.387-7.25 0-5.228-5.344-5.918-8.574-7.6z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Stripe</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Payments</span>
          </div>
        </div>
      ),
      title: 'Stripe',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center font-bold text-xs font-heading">
            GC
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Google Calendar</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Provider calendars</span>
          </div>
        </div>
      ),
      title: 'Google Calendar',
    },
  ];

  // Row 2: Synchronizer PMS & Platform Stack (Sliding Right)
  const row2Logos = [
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#1E88E5]/10 text-[#1E88E5] flex items-center justify-center font-bold text-xs font-heading">
            OD
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Open Dental</span>
            <span className="text-[10px] text-brand-blue font-semibold block">Via NexHealth Synchronizer</span>
          </div>
        </div>
      ),
      title: 'Open Dental',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#00838F]/10 text-[#00838F] flex items-center justify-center font-bold text-xs font-heading">
            Dx
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Dentrix</span>
            <span className="text-[10px] text-brand-blue font-semibold block">Via NexHealth Synchronizer</span>
          </div>
        </div>
      ),
      title: 'Dentrix',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#6A1B9A]/10 text-[#6A1B9A] flex items-center justify-center font-bold text-xs font-heading">
            Es
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Eaglesoft</span>
            <span className="text-[10px] text-brand-blue font-semibold block">Via NexHealth Synchronizer</span>
          </div>
        </div>
      ),
      title: 'Eaglesoft',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center font-bold text-xs font-heading">
            CD
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Curve Dental</span>
            <span className="text-[10px] text-brand-blue font-semibold block">Via NexHealth Synchronizer</span>
          </div>
        </div>
      ),
      title: 'Curve Dental',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#10A37F]/10 text-[#10A37F] flex items-center justify-center font-bold text-xs font-heading">
            AI
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">OpenAI</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">AI understanding</span>
          </div>
        </div>
      ),
      title: 'OpenAI',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#111827]/10 text-[#111827] flex items-center justify-center font-bold text-xs font-heading">
            11
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">ElevenLabs</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Voice synthesis</span>
          </div>
        </div>
      ),
      title: 'ElevenLabs',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#1A82E2]/10 text-[#1A82E2] flex items-center justify-center font-bold text-xs font-heading">
            SG
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">SendGrid</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Transactional email</span>
          </div>
        </div>
      ),
      title: 'SendGrid',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-7 h-7 rounded-lg bg-[#000000]/10 text-[#000000] flex items-center justify-center font-bold text-xs font-heading">
            Re
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-[#1A2B3D] block leading-tight">Resend</span>
            <span className="text-[10px] text-text-body/60 font-semibold block">Transactional email</span>
          </div>
        </div>
      ),
      title: 'Resend',
    },
  ];

  return (
    <section id="integrations" className="pt-8 pb-4 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy tracking-tight">
          Works with the systems you already have.
        </h2>
      </div>

      {/* Row 1 & Row 2 with minimal vertical gap */}
      <div className="w-full flex flex-col gap-2">
        {/* Row 1: Right to Left (direction="left") */}
        <div className="w-full relative">
          <LogoLoop
            logos={row1Logos}
            speed={40}
            direction="left"
            gap={14}
            logoHeight={44}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            scaleOnHover={false}
          />
        </div>

        {/* Row 2: Left to Right (direction="right") */}
        <div className="w-full relative">
          <LogoLoop
            logos={row2Logos}
            speed={38}
            direction="right"
            gap={14}
            logoHeight={44}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            scaleOnHover={false}
          />
        </div>
      </div>
    </section>
  );
};
