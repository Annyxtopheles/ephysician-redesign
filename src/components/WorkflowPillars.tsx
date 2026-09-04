import React from 'react';
import { 
  VoiceSchedulingVisual, 
  AutomatedRemindersVisual, 
  KioskCopayVisual, 
  ClaimsPrepVisual 
} from './illustrations/WorkflowVisuals';
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

        {/* 4 Pillars Grid — Standalone Big Number Display as dominant anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-6 sm:p-7 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AI VOICE SCHEDULING
                </span>
              </div>

              {/* Big Stat Anchor — 24/7 with 1 ring tag */}
              <div className="mb-3">
                <BigStatDisplay
                  staticText="24/7"
                  tag="1 ring"
                  tagPlacement="beside"
                  tagVariant="blue"
                />
              </div>

              {/* Supporting one-line plain-English description */}
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed mb-6">
                Every call, answered, day or night.
              </p>
            </div>

            {/* Mini-UI */}
            <div>
              <VoiceSchedulingVisual />
            </div>
          </div>

          {/* Card 2 — Automated Reminders */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-6 sm:p-7 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AUTOMATED REMINDERS
                </span>
              </div>

              {/* Big Stat Display — 15% → 5% with tag beneath */}
              <div className="mb-3">
                <BigStatDisplay
                  before="15%"
                  target={5}
                  suffix="%"
                  tag="3× fewer no-shows"
                  tagPlacement="below"
                  tagVariant="emerald"
                />
              </div>

              {/* Supporting one-line plain-English description */}
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed mb-6">
                Automated reminders patients actually respond to.
              </p>
            </div>

            {/* Mini-UI */}
            <div>
              <AutomatedRemindersVisual />
            </div>
          </div>

          {/* Card 3 — Kiosk Check-In & Copay */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-6 sm:p-7 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  KIOSK CHECK-IN & COPAY
                </span>
              </div>

              {/* Big Stat Display — 60% → 95%+ */}
              <div className="mb-3">
                <BigStatDisplay
                  before="60%"
                  target={95}
                  suffix="%+"
                />
              </div>

              {/* Supporting one-line plain-English description */}
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed mb-6">
                Copay collected before the patient sees the provider.
              </p>
            </div>

            {/* Mini-UI */}
            <div>
              <KioskCopayVisual />
            </div>
          </div>

          {/* Card 4 — AI Claims Prep */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-6 sm:p-7 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
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

              {/* Supporting one-line plain-English description */}
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed mb-6">
                Claims staged and ready before the visit ends.
              </p>
            </div>

            {/* Mini-UI */}
            <div>
              <ClaimsPrepVisual />
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
