import React from 'react';
import { ArrowUpRight, PhoneCall, MessageSquare, CreditCard, FileCheck2, Check } from 'lucide-react';
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

        {/* 4 Pillars Grid — 4 cards in 1 line on desktop, two-row layout with proof snippets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border border-border-soft">
            <img
              src={bgVoice}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Row — Unchanged */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2">
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

            {/* Second Row — Mini-UI Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-3.5 sm:p-4 border border-border-soft space-y-3 mt-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-brand-navy">Sarah · Voice Agent</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                  Live Agent Active
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-border-soft text-xs text-text-body">
                <p className="font-medium text-brand-navy">
                  &ldquo;Checked live availability with Dr. Patel. Slot booked for Thu 10:00 AM.&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] font-medium text-text-body/80 pt-1.5 border-t border-border-soft/60">
                <span className="flex items-center gap-1 text-brand-blue font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Direct EHR Calendar Sync
                </span>
                <span className="font-semibold text-brand-navy">3,200+ calls handled this month</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Automated Reminders */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border border-border-soft">
            <img
              src={bgReminders}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Row — Unchanged */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2">
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

            {/* Second Row — Mini-UI Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-3.5 sm:p-4 border border-border-soft space-y-3 mt-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-brand-navy">2-Way Smart Sequence</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                  82%+ Confirmations
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-soft text-xs gap-2">
                <span className="text-text-body truncate">&ldquo;Reply C to confirm or R to reschedule&rdquo;</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-blue text-white shrink-0">
                  Confirmed ✓
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] font-medium text-text-body/80 pt-1.5 border-t border-border-soft/60">
                <span className="font-semibold text-brand-navy">68% SMS · 24% Email · 8% Voice</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shrink-0">
                  3× fewer no-shows
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 — Kiosk Check-In & Copay */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border border-border-soft">
            <img
              src={bgKiosk}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Row — Unchanged */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2">
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

            {/* Second Row — Mini-UI Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-3.5 sm:p-4 border border-border-soft space-y-3 mt-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-brand-teal text-white flex items-center justify-center shrink-0">
                    <CreditCard className="w-3.5 h-3.5 text-brand-navy" />
                  </div>
                  <span className="font-bold text-brand-navy">Tablet Kiosk Check-In</span>
                </div>
                <span className="text-[11px] font-semibold text-brand-blue bg-white px-2 py-0.5 rounded border border-border-soft shrink-0">
                  Intake &lt; 2 min
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-soft text-xs gap-2">
                <div>
                  <span className="text-[10px] text-text-body/60 uppercase block font-semibold">COPAY COLLECTED</span>
                  <span className="font-extrabold text-brand-navy text-xs sm:text-sm">$25.00 via Stripe</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 shrink-0">
                  Paid Before Provider Visit
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] font-medium text-text-body/80 pt-1.5 border-t border-border-soft/60">
                <span>PCI DSS Level 1 Certified</span>
                <span className="font-semibold text-brand-navy">Avg. check-in to payment: 90 sec</span>
              </div>
            </div>
          </div>

          {/* Card 4 — AI Claims Prep */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border border-border-soft">
            <img
              src={bgClaims}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Row — Unchanged */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2">
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

            {/* Second Row — Mini-UI Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-3.5 sm:p-4 border border-border-soft space-y-3 mt-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                  <span className="font-bold text-brand-navy">AI Claims Staging</span>
                </div>
                <span className="text-[11px] font-semibold text-brand-blue bg-white px-2 py-0.5 rounded border border-border-soft shrink-0">
                  Instant Pre-Coding
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-soft text-xs gap-2">
                <span className="text-brand-navy font-semibold text-xs">Procedures Mapped to Codes</span>
                <span className="text-[10px] font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded border border-brand-blue/20 shrink-0">
                  Staged for Biller Approval
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] font-medium text-text-body/80 pt-1.5 border-t border-border-soft/60">
                <span>Pre-Authorization Verified</span>
                <span className="font-semibold text-brand-navy">100% of claims flagged before 30-day aging</span>
              </div>
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
