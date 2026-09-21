import React from 'react';
import { Clock } from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const milestones = [
    {
      time: '07:45 AM',
      without: {
        badge: 'Staff Burnout',
        headline: '40 voicemails deep before doors open',
        impact: 'Staff burns 90+ minutes returning calls while phones keep ringing. High-intent callers give up and book with competing clinics.',
        stat: '90 min lost daily',
      },
      with: {
        badge: 'Autonomous Resolution',
        headline: 'Zero backlog. 11 calls resolved overnight.',
        impact: 'Sarah answered every overnight call on the first ring, verified insurance eligibility, and booked 8 slots directly into your EHR calendar.',
        stat: '0 morning backlog',
      },
    },
    {
      time: '10:30 AM',
      without: {
        badge: 'Manual Phone Tag',
        headline: '35 outbound dials into voicemail · 15% no-shows',
        impact: 'Front desk dials between walk-ins. Most patients screen unknown numbers, leaving schedules unconfirmed and chairs empty.',
        stat: '15% empty chairs',
      },
      with: {
        badge: '2-Way Smart Sequence',
        headline: 'Automated SMS sequence · 4% no-shows',
        impact: 'Patients tap "C" to confirm. ePhysician detects intent, updates calendar status in real time, and auto-backfills cancellations.',
        stat: '82%+ instant responses',
      },
    },
    {
      time: '01:15 PM',
      without: {
        badge: 'Front-Desk Congestion',
        headline: 'Paper clipboards & 40% uncollected copays',
        impact: 'Lobby queues build up. Rushed staff send patients to exam rooms without collecting copays, generating costly follow-up mailers.',
        stat: '40% copays missed',
      },
      with: {
        badge: '84s Tablet Kiosk',
        headline: '95%+ copays collected before provider visit',
        impact: 'Patient taps contactless card on tablet kiosk, reviews digital consent forms, and enters exam room with balance paid upfront.',
        stat: '95%+ paid upfront',
      },
    },
    {
      time: '05:00 PM',
      without: {
        badge: 'Aging A/R Drag',
        headline: '60–90 day claim cycles & unbilled charts',
        impact: 'Biller manually cross-references procedure codes, operative notes, and payer pre-authorizations days after the clinical encounter.',
        stat: '60–90d cash cycle',
      },
      with: {
        badge: 'Instant Pre-Coding',
        headline: '20–25 day compressed cash cycles',
        impact: 'AI pre-maps CPT and ICD-10 codes immediately upon encounter sign-off, flagging pre-auths for instant 1-click biller approval.',
        stat: '20–25d cash cycle',
      },
    },
  ];

  return (
    <section id="compare" className="py-14 md:py-20 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold font-heading tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            A Day in the Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight text-balance mt-3">
            A morning without ePhysician vs.&nbsp;with&nbsp;it.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-body max-w-2xl mx-auto">
            From the opening shift bell to end-of-day billing, see how autonomous workflows eliminate front-desk burnout.
          </p>
        </div>

        {/* Track Column Labels (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 mb-6 text-xs font-bold font-heading uppercase tracking-wider">
          <div className="col-span-5 text-rose-800/80 pl-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
            Without ePhysician (The Backlog Trap)
          </div>
          <div className="col-span-2 text-center text-text-body/60 font-heading font-bold">
            Shift Timeline
          </div>
          <div className="col-span-5 text-emerald-800/90 pl-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            With ePhysician (The Autonomous Clinic)
          </div>
        </div>

        {/* Connected Shift Timeline */}
        <div className="relative space-y-8 lg:space-y-10">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-border-soft -z-0"></div>

          {milestones.map((item, idx) => (
            <div key={idx} className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* Left Column: Without ePhysician */}
              <div className="lg:col-span-5 bg-[#FFF7F7] rounded-2xl p-5 sm:p-6 border border-rose-200/80 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                      {item.without.badge}
                    </span>
                    <span className="text-xs font-bold text-rose-600">
                      {item.without.stat}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-rose-950 leading-snug">
                    {item.without.headline}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-rose-900/80 leading-relaxed">
                    {item.without.impact}
                  </p>
                </div>
              </div>

              {/* Center Timeline Badge */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center">
                <div className="bg-white rounded-full px-3.5 py-1.5 border-2 border-brand-blue/30 shadow-xs flex items-center gap-1.5 text-xs font-bold font-heading text-brand-navy shrink-0">
                  <Clock className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{item.time}</span>
                </div>
              </div>

              {/* Right Column: With ePhysician */}
              <div className="lg:col-span-5 bg-[#F0FDF8] rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {item.with.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-700">
                      {item.with.stat}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-emerald-950 leading-snug">
                    {item.with.headline}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-900/80 leading-relaxed">
                    {item.with.impact}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quantified Clinic Shift Impact Summary Bar */}
        <div className="mt-12 sm:mt-16 bg-[#EFFAFB] rounded-2xl p-6 sm:p-8 border border-border-soft">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border-soft">
            <div className="pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
                +20 Hours
              </div>
              <div className="text-xs sm:text-sm font-medium text-text-body mt-1">
                Reclaimed weekly per front-desk staff member
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-blue">
                100% Inbound
              </div>
              <div className="text-xs sm:text-sm font-medium text-text-body mt-1">
                Calls answered live in 1 ring without voicemail queues
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-700">
                &lt; 24 Hours
              </div>
              <div className="text-xs sm:text-sm font-medium text-text-body mt-1">
                Zero-migration launch with your existing phone number & EHR
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
