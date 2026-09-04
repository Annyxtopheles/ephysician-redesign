import React from 'react';
import { 
  VoiceSchedulingVisual, 
  AutomatedRemindersVisual, 
  KioskCopayVisual, 
  ClaimsPrepVisual 
} from './illustrations/WorkflowVisuals';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

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

        {/* 4 Pillars Grid — Exactly one hero stat per card with count-up, zero repeated claims */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="bg-surface-white rounded-2xl border border-border-soft p-6 sm:p-7 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="mb-2">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AI VOICE SCHEDULING
                </span>
              </div>

              {/* Headline — Static 1 ring / 24/7 */}
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy tracking-tight">
                Every call answered in 1 ring, 24/7.
              </h3>

              {/* Body */}
              <p className="mt-2 text-sm sm:text-base text-text-body leading-relaxed mb-6">
                Sarah answers every call, verifies identity, checks live availability, and books the appointment — no hold music, no voicemail.
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
              <div className="mb-2">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AUTOMATED REMINDERS
                </span>
              </div>

              {/* Headline with count-up animation and distinct small tag */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy tracking-tight">
                  No-shows drop from 15% to <AnimatedCounter from={15} to={5} suffix="%" />.
                </h3>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                  3x fewer no-shows
                </div>
              </div>

              {/* Body */}
              <p className="mt-2 text-sm sm:text-base text-text-body leading-relaxed mb-6">
                Multi-channel (SMS, email, voice) reminders patients actually respond to, with automatic confirm, cancel, and reschedule parsing.
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
              <div className="mb-2">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  KIOSK CHECK-IN & COPAY
                </span>
              </div>

              {/* Headline with count-up animation to 95% */}
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy tracking-tight">
                Copay collection rises from 60% to <AnimatedCounter from={60} to={95} suffix="%+" />.
              </h3>

              {/* Body */}
              <p className="mt-2 text-sm sm:text-base text-text-body leading-relaxed mb-6">
                Patients confirm identity and pay their copay on a tablet before they see the provider.
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
              <div className="mb-2">
                <span className="text-xs font-bold font-heading text-brand-blue uppercase tracking-wider">
                  AI CLAIMS PREP
                </span>
              </div>

              {/* Headline with count-up animation to 20-30 days */}
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy tracking-tight">
                Revenue cycles compress from 60–90 days to <AnimatedCounter from={60} to={25} prefix="~" suffix=" days" />.
              </h3>

              {/* Body */}
              <p className="mt-2 text-sm sm:text-base text-text-body leading-relaxed mb-6">
                Procedures mapped to codes, coverage verified, and clean claims staged for billing review immediately after each visit.
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
