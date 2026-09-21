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
import sendgridLogo from '../assets/systems/sendgrid-svgrepo-com.svg';
import resendLogo from '../assets/systems/resend-wordmark-black.svg';

export const TrustBar: React.FC = () => {
  // Row 1: Certified Clinical EHR & Practice Management Systems (Sliding Left)
  const ehrLogos = [
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={openDentalLogo} alt="Open Dental" className="h-4.5 sm:h-5 w-auto max-w-[130px] object-contain" />
        </div>
      ),
      title: 'Open Dental',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={dentrixLogo} alt="Dentrix" className="h-4 sm:h-4.5 w-auto max-w-[120px] object-contain" />
        </div>
      ),
      title: 'Dentrix',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={eaglesoftLogo} alt="Eaglesoft" className="h-4.5 sm:h-5 w-auto max-w-[125px] object-contain" />
        </div>
      ),
      title: 'Eaglesoft',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={ecwLogo} alt="eClinicalWorks" className="h-4 sm:h-4.5 w-auto max-w-[140px] object-contain" />
        </div>
      ),
      title: 'eClinicalWorks',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={nexhealthLogo} alt="NexHealth" className="h-7 sm:h-8 w-auto max-w-[140px] object-contain" />
        </div>
      ),
      title: 'NexHealth',
    },
    {
      node: (
        <div className="flex items-center justify-center gap-2 px-4 select-none">
          <img src={curveDentalLogo} alt="Curve Dental" className="h-4 w-4 object-contain" />
          <span className="text-sm font-bold text-[#1A2B3D] tracking-tight whitespace-nowrap">Curve Dental</span>
        </div>
      ),
      title: 'Curve Dental',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={sikkaLogo} alt="Sikka Software" className="h-4 sm:h-4.5 w-auto max-w-[110px] object-contain" />
        </div>
      ),
      title: 'Sikka',
    },
  ];

  // Row 2: Telephony, Payments & Clearinghouse Infrastructure (Sliding Right)
  const infraLogos = [
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={twilioLogo} alt="Twilio Voice" className="h-4.5 sm:h-5 w-auto max-w-[100px] object-contain" />
        </div>
      ),
      title: 'Twilio',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={stripeLogo} alt="Stripe Level 1 PCI" className="h-3.5 sm:h-4 w-auto max-w-[75px] object-contain" />
        </div>
      ),
      title: 'Stripe',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={stediLogo} alt="Stedi Real-Time Claims" className="h-3.5 sm:h-4 w-auto max-w-[85px] object-contain" />
        </div>
      ),
      title: 'Stedi',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={googleCalendarLogo} alt="Google Calendar" className="h-5 w-5 sm:h-5.5 sm:w-5.5 object-contain" />
        </div>
      ),
      title: 'Google Calendar',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={sendgridLogo} alt="SendGrid HIPAA Relay" className="h-3.5 sm:h-4 w-auto max-w-[110px] object-contain" />
        </div>
      ),
      title: 'SendGrid',
    },
    {
      node: (
        <div className="flex items-center justify-center px-4 select-none">
          <img src={resendLogo} alt="Resend Dedicated Relay" className="h-3.5 sm:h-4 w-auto max-w-[100px] object-contain" />
        </div>
      ),
      title: 'Resend',
    },
  ];

  return (
    <section id="integrations" className="pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
        <span className="text-xs font-bold font-heading tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
          Certified Ecosystem
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight mt-3">
          Works with the systems you already have.
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-text-body/80 max-w-xl mx-auto">
          Bi-directional EHR & PMS synchronization with enterprise-grade telephony, clearinghouse, and payment infrastructure.
        </p>
      </div>

      {/* Categorized Sliders */}
      <div className="w-full flex flex-col gap-5">
        {/* Row 1: EHR & PMS Systems */}
        <div className="w-full relative">
          <LogoLoop
            logos={ehrLogos}
            speed={38}
            direction="left"
            gap={40}
            logoHeight={32}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            scaleOnHover={false}
          />
        </div>

        {/* Row 2: Telephony, Clearinghouse & Payment Infrastructure */}
        <div className="w-full relative">
          <LogoLoop
            logos={infraLogos}
            speed={36}
            direction="right"
            gap={40}
            logoHeight={32}
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
