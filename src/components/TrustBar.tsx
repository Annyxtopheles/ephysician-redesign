import React from 'react';
import LogoLoop from './LogoLoop';

// Import official system SVGs
import nexhealthLogo from '../assets/systems/nexhealth-dark.svg';
import ecwLogo from '../assets/systems/EClinicalWorks_idCA4_zeW0_0.svg';
import sikkaLogo from '../assets/systems/sikka-dark.svg';
import twilioLogo from '../assets/systems/Twilio logo.svg';
import stediLogo from '../assets/systems/stedi-dark.svg';
import stripeLogo from '../assets/systems/svgexport-1 (1).svg';
import googleCalendarLogo from '../assets/systems/google-calendar-icon.svg';
import openDentalLogo from '../assets/systems/opendental logo.svg';
import dentrixLogo from '../assets/systems/Henry_Schein_One_idgM28iBol_1.svg';
import eaglesoftLogo from '../assets/systems/eaglesoft logo.svg';
import curveDentalLogo from '../assets/systems/curve-dental-dark.svg';
import openaiLogo from '../assets/systems/OpenAI_wordmark_2017.svg';
import elevenlabsLogo from '../assets/systems/svgexport-1 (2).svg';
import sendgridLogo from '../assets/systems/sendgrid-svgrepo-com.svg';
import resendLogo from '../assets/systems/resend-wordmark-black.svg';

export const TrustBar: React.FC = () => {
  // Row 1: Core Practice & Infrastructure Integrations (Sliding Left)
  const row1Logos = [
    {
      node: (
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#0066F5]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={nexhealthLogo} alt="NexHealth" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#173E58]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={ecwLogo} alt="eClinicalWorks" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#681C9A]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={sikkaLogo} alt="Sikka" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#DB132A]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={twilioLogo} alt="Twilio" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#009086]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={stediLogo} alt="Stedi" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#635BFF]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={stripeLogo} alt="Stripe" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#4285F4]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={googleCalendarLogo} alt="Google Calendar" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#1E88E5]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={openDentalLogo} alt="Open Dental" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#002E6D]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={dentrixLogo} alt="Dentrix" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#0B1E33]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={eaglesoftLogo} alt="Eaglesoft" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#00838F]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={curveDentalLogo} alt="Curve Dental" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#10A37F]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={openaiLogo} alt="OpenAI" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#111827]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={elevenlabsLogo} alt="ElevenLabs" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#1A82E2]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={sendgridLogo} alt="SendGrid" className="w-full h-full object-contain" />
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
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200">
          <div className="w-8 h-8 rounded-lg bg-[#000000]/5 flex items-center justify-center p-1 flex-shrink-0">
            <img src={resendLogo} alt="Resend" className="w-full h-full object-contain" />
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
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
          Works with the systems you already have.
        </h2>
      </div>

      {/* Row 1 & Row 2 with minimal vertical gap */}
      <div className="w-full flex flex-col gap-1.5">
        {/* Row 1: Right to Left (direction="left") */}
        <div className="w-full relative">
          <LogoLoop
            logos={row1Logos}
            speed={40}
            direction="left"
            gap={12}
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
            gap={12}
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
