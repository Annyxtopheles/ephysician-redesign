import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BigStatDisplay } from './BigStatDisplay';

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

        {/* 4 Pillars Grid — 4 cards in 1 line on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-5 sm:p-6 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AI VOICE SCHEDULING
                </span>
              </div>

              {/* Big Stat Anchor — 24/7 */}
              <div className="mb-3">
                <BigStatDisplay staticText="24/7" />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="text-sm text-text-body font-medium leading-relaxed mt-2">
              Every call, answered in 1 ring.
            </p>
          </div>

          {/* Card 2 — Automated Reminders */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-5 sm:p-6 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AUTOMATED REMINDERS
                </span>
              </div>

              {/* Big Stat Display — 15% → 5% */}
              <div className="mb-3">
                <BigStatDisplay
                  before="15%"
                  target={5}
                  suffix="%"
                />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="text-sm text-text-body font-medium leading-relaxed mt-2">
              Automated reminders patients actually respond to.
            </p>
          </div>

          {/* Card 3 — Kiosk Check-In & Copay */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-5 sm:p-6 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  KIOSK CHECK-IN & COPAY
                </span>
              </div>

              {/* Big Stat Display — 60% → 95% */}
              <div className="mb-3">
                <BigStatDisplay
                  before="60%"
                  target={95}
                  suffix="%"
                />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="text-sm text-text-body font-medium leading-relaxed mt-2">
              Copay collected before the patient sees the provider.
            </p>
          </div>

          {/* Card 4 — AI Claims Prep */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-5 sm:p-6 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
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
                />
              </div>
            </div>

            {/* Supporting one-line plain-English description */}
            <p className="text-sm text-text-body font-medium leading-relaxed mt-2">
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
