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
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={nexhealthLogo} alt="NexHealth" className="h-5 sm:h-5.5 w-auto max-w-[130px] object-contain" />
        </div>
      ),
      title: 'NexHealth',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={ecwLogo} alt="eClinicalWorks" className="h-4.5 sm:h-5 w-auto max-w-[145px] object-contain" />
        </div>
      ),
      title: 'eClinicalWorks',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={sikkaLogo} alt="Sikka" className="h-4.5 sm:h-5 w-auto max-w-[110px] object-contain" />
        </div>
      ),
      title: 'Sikka',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={twilioLogo} alt="Twilio" className="h-5 sm:h-5.5 w-auto max-w-[100px] object-contain" />
        </div>
      ),
      title: 'Twilio',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={stediLogo} alt="Stedi" className="h-5 sm:h-5.5 w-auto max-w-[95px] object-contain" />
        </div>
      ),
      title: 'Stedi',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={stripeLogo} alt="Stripe" className="h-5 sm:h-5.5 w-auto max-w-[80px] object-contain" />
        </div>
      ),
      title: 'Stripe',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2.5">
          <img src={googleCalendarLogo} alt="Google Calendar" className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain" />
          <span className="text-sm font-bold text-[#1A2B3D] tracking-tight whitespace-nowrap">Google Calendar</span>
        </div>
      ),
      title: 'Google Calendar',
    },
  ];

  // Row 2: Synchronizer PMS & Platform Stack (Sliding Right)
  const row2Logos = [
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={openDentalLogo} alt="Open Dental" className="h-5 sm:h-5.5 w-auto max-w-[130px] object-contain" />
        </div>
      ),
      title: 'Open Dental',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={dentrixLogo} alt="Dentrix" className="h-4 sm:h-4.5 w-auto max-w-[125px] object-contain" />
        </div>
      ),
      title: 'Dentrix',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={eaglesoftLogo} alt="Eaglesoft" className="h-5 sm:h-5.5 w-auto max-w-[125px] object-contain" />
        </div>
      ),
      title: 'Eaglesoft',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2.5">
          <img src={curveDentalLogo} alt="Curve Dental" className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain" />
          <span className="text-sm font-bold text-[#1A2B3D] tracking-tight whitespace-nowrap">Curve Dental</span>
        </div>
      ),
      title: 'Curve Dental',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={openaiLogo} alt="OpenAI" className="h-5 sm:h-5.5 w-auto max-w-[105px] object-contain" />
        </div>
      ),
      title: 'OpenAI',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={elevenlabsLogo} alt="ElevenLabs" className="h-4.5 sm:h-5 w-auto max-w-[115px] object-contain" />
        </div>
      ),
      title: 'ElevenLabs',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={sendgridLogo} alt="SendGrid" className="h-4.5 sm:h-5 w-auto max-w-[110px] object-contain" />
        </div>
      ),
      title: 'SendGrid',
    },
    {
      node: (
        <div className="h-12 px-5 rounded-xl bg-white border border-border-soft hover:border-brand-blue/40 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center">
          <img src={resendLogo} alt="Resend" className="h-4.5 sm:h-5 w-auto max-w-[100px] object-contain" />
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
            gap={14}
            logoHeight={48}
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
            logoHeight={48}
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
