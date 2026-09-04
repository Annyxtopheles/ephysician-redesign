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

        {/* 4 Pillars Grid — 4 cards in 1 line on desktop with image backgrounds and all white text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] group border border-border-soft/40">
            <img
              src={bgVoice}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-white/90 uppercase tracking-wider">
                  AI VOICE SCHEDULING
                </span>
              </div>

              {/* Big Stat Anchor — 24/7 */}
              <div className="mb-3">
                <BigStatDisplay staticText="24/7" textColor="white" />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="relative z-10 text-sm text-white font-medium leading-relaxed mt-2 drop-shadow-xs">
              Every call, answered in 1 ring.
            </p>
          </div>

          {/* Card 2 — Automated Reminders */}
          <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] group border border-border-soft/40">
            <img
              src={bgReminders}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-white/90 uppercase tracking-wider">
                  AUTOMATED REMINDERS
                </span>
              </div>

              {/* Big Stat Display — 15% → 5% */}
              <div className="mb-3">
                <BigStatDisplay
                  before="15%"
                  target={5}
                  suffix="%"
                  textColor="white"
                />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="relative z-10 text-sm text-white font-medium leading-relaxed mt-2 drop-shadow-xs">
              Automated reminders patients actually respond to.
            </p>
          </div>

          {/* Card 3 — Kiosk Check-In & Copay */}
          <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] group border border-border-soft/40">
            <img
              src={bgKiosk}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-white/90 uppercase tracking-wider">
                  KIOSK CHECK-IN & COPAY
                </span>
              </div>

              {/* Big Stat Display — 60% → 95% */}
              <div className="mb-3">
                <BigStatDisplay
                  before="60%"
                  target={95}
                  suffix="%"
                  textColor="white"
                />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="relative z-10 text-sm text-white font-medium leading-relaxed mt-2 drop-shadow-xs">
              Copay collected before the patient sees the provider.
            </p>
          </div>

          {/* Card 4 — AI Claims Prep */}
          <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] group border border-border-soft/40">
            <img
              src={bgClaims}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-white/90 uppercase tracking-wider">
                  AI CLAIMS PREP
                </span>
              </div>

              {/* Big Stat Display — 60–90d → ~25d */}
              <div className="mb-3">
                <BigStatDisplay
                  before="60–90d"
                  target={25}
                  prefix="~"
                  suffix="d"
                  textColor="white"
                />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="relative z-10 text-sm text-white font-medium leading-relaxed mt-2 drop-shadow-xs">
              Claims staged and ready before the visit ends.
            </p>
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
