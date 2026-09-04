import React from 'react';
import { PhoneCall, MessageSquare, CreditCard, FileCheck2, Check } from 'lucide-react';

// Visual for Pillar 1: AI Voice Scheduling
export const VoiceSchedulingVisual: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-surface-pale border border-border-soft space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-blue text-white flex items-center justify-center">
            <PhoneCall className="w-3 h-3" />
          </div>
          <span className="font-bold text-brand-navy">Sarah · Voice Agent</span>
        </div>
        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Live Agent Active
        </span>
      </div>

      <div className="p-2.5 rounded-lg bg-white border border-border-soft text-xs text-text-body">
        <p className="font-medium text-brand-navy">
          "Checked live availability with Dr. Patel. Slot booked for Thu 10:00 AM."
        </p>
      </div>

      <div className="flex items-center justify-between text-[11px] font-medium text-text-body/80 pt-1">
        <span className="flex items-center gap-1 text-brand-blue font-semibold">
          <Check className="w-3.5 h-3.5 text-emerald-500" /> Direct EHR Calendar Sync
        </span>
        {/* Placeholder: replace with actual clinic volume when live */}
        <span className="font-semibold text-brand-navy">3,200+ calls handled this month</span>
      </div>
    </div>
  );
};

// Visual for Pillar 2: Automated Reminders
export const AutomatedRemindersVisual: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-surface-pale border border-border-soft space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-blue text-white flex items-center justify-center">
            <MessageSquare className="w-3 h-3" />
          </div>
          <span className="font-bold text-brand-navy">2-Way Smart Sequence</span>
        </div>
        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          82%+ Confirmations
        </span>
      </div>

      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-soft text-xs">
        <span className="text-text-body">"Reply C to confirm or R to reschedule"</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-blue text-white">
          Confirmed ✓
        </span>
      </div>

      {/* Replaced verbatim repeat with distinct channel mix */}
      <div className="flex items-center justify-between text-[11px] font-medium text-text-body/80 pt-1">
        <span className="text-text-body">Real-time multi-channel delivery</span>
        <span className="font-semibold text-brand-navy">68% SMS · 24% Email · 8% Voice</span>
      </div>
    </div>
  );
};

// Visual for Pillar 3: Kiosk Check-In & Copay
export const KioskCopayVisual: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-surface-pale border border-border-soft space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-teal text-white flex items-center justify-center">
            <CreditCard className="w-3 h-3 text-brand-navy" />
          </div>
          <span className="font-bold text-brand-navy">Tablet Kiosk Check-In</span>
        </div>
        <span className="text-[11px] font-semibold text-brand-blue bg-white px-2 py-0.5 rounded border border-border-soft">
          Intake &lt; 2 min
        </span>
      </div>

      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-soft text-xs">
        <div>
          <span className="text-[10px] text-text-body/60 uppercase block">Copay Collected</span>
          <span className="font-extrabold text-brand-navy text-sm">$25.00 via Stripe</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
          Paid Before Provider Visit
        </span>
      </div>

      {/* Replaced repeat with time-to-payment fact */}
      <div className="flex items-center justify-between text-[11px] font-medium text-text-body/80 pt-1">
        <span>PCI DSS Level 1 Certified</span>
        <span className="font-semibold text-brand-navy">Avg. check-in to payment: 90 sec</span>
      </div>
    </div>
  );
};

// Visual for Pillar 4: AI Claims Prep
export const ClaimsPrepVisual: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-surface-pale border border-border-soft space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-navy text-white flex items-center justify-center">
            <FileCheck2 className="w-3 h-3 text-brand-teal" />
          </div>
          <span className="font-bold text-brand-navy">AI Claims Staging</span>
        </div>
        <span className="text-[11px] font-semibold text-brand-blue bg-white px-2 py-0.5 rounded border border-border-soft">
          Instant Pre-Coding
        </span>
      </div>

      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-soft text-xs">
        <span className="text-brand-navy font-semibold">Procedures Mapped to Codes</span>
        <span className="text-brand-blue font-bold">Staged for Biller Approval</span>
      </div>

      {/* Replaced repeat with 30-day aging fact */}
      <div className="flex items-center justify-between text-[11px] font-medium text-text-body/80 pt-1">
        <span>Pre-Authorization Verified</span>
        <span className="font-semibold text-brand-navy">100% of claims flagged before 30-day aging</span>
      </div>
    </div>
  );
};
