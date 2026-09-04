import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BigStatDisplay } from './BigStatDisplay';

import bgVoice from '../assets/cards/card-voice.png';
import bgReminders from '../assets/cards/card-reminders.png';
import bgKiosk from '../assets/cards/card-kiosk.png';
import bgClaims from '../assets/cards/card-claims.png';

interface WorkflowPillarsProps {
  onRequestDemo: () => void;
}

export const WorkflowPillars: React.FC<WorkflowPillarsProps> = ({ onRequestDemo }) => {
  return (
    <section id="features" className="py-10 md:py-14 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            One platform. Four fixes. Real numbers.
          </h2>
        </div>

        {/* 4 Pillars Grid — 4 cards in 1 line on desktop with image backgrounds and all black text aligned to left-bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end items-start text-left min-h-[280px] sm:min-h-[300px] group border border-border-soft">
            <img
              src={bgVoice}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative z-10 flex flex-col items-start text-left space-y-2 mt-auto">
              <span className="text-xs font-bold font-heading text-black uppercase tracking-wider">
                AI VOICE SCHEDULING
              </span>

              {/* Big Stat Anchor — 24/7 */}
              <BigStatDisplay staticText="24/7" textColor="black" />

              {/* Supporting one-line plain-English description */}
              <p className="text-sm text-black font-medium leading-relaxed">
                Every call, answered in 1 ring.
              </p>
            </div>
          </div>

          {/* Card 2 — Automated Reminders */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end items-start text-left min-h-[280px] sm:min-h-[300px] group border border-border-soft">
            <img
              src={bgReminders}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative z-10 flex flex-col items-start text-left space-y-2 mt-auto">
              <span className="text-xs font-bold font-heading text-black uppercase tracking-wider">
                AUTOMATED REMINDERS
              </span>

              {/* Big Stat Display — 15% → 5% */}
              <BigStatDisplay
                before="15%"
                target={5}
                suffix="%"
                textColor="black"
              />

              {/* Supporting one-line plain-English description */}
              <p className="text-sm text-black font-medium leading-relaxed">
                Automated reminders patients actually respond to.
              </p>
            </div>
          </div>

          {/* Card 3 — Kiosk Check-In & Copay */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end items-start text-left min-h-[280px] sm:min-h-[300px] group border border-border-soft">
            <img
              src={bgKiosk}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative z-10 flex flex-col items-start text-left space-y-2 mt-auto">
              <span className="text-xs font-bold font-heading text-black uppercase tracking-wider">
                KIOSK CHECK-IN & COPAY
              </span>

              {/* Big Stat Display — 60% → 95% */}
              <BigStatDisplay
                before="60%"
                target={95}
                suffix="%"
                textColor="black"
              />

              {/* Supporting one-line plain-English description */}
              <p className="text-sm text-black font-medium leading-relaxed">
                Copay collected before the patient sees the provider.
              </p>
            </div>
          </div>

          {/* Card 4 — AI Claims Prep */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end items-start text-left min-h-[280px] sm:min-h-[300px] group border border-border-soft">
            <img
              src={bgClaims}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative z-10 flex flex-col items-start text-left space-y-2 mt-auto">
              <span className="text-xs font-bold font-heading text-black uppercase tracking-wider">
                AI CLAIMS PREP
              </span>

              {/* Big Stat Display — 60–90d → ~25d */}
              <BigStatDisplay
                before="60–90d"
                target={25}
                prefix="~"
                suffix="d"
                textColor="black"
              />

              {/* Supporting one-line plain-English description */}
              <p className="text-sm text-black font-medium leading-relaxed">
                Claims staged and ready before the visit ends.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onRequestDemo}
            className="py-3 px-6 rounded-xl font-heading font-bold text-sm text-white bg-brand-blue hover:bg-brand-blue-hover hover:shadow-btn-hover transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>See All 4 Workflows in Action</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
