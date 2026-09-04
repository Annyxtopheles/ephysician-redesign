import React from 'react';
import { PhoneCall, CheckCircle2, ShieldCheck, CalendarCheck, Sparkles, UserCheck, Activity } from 'lucide-react';

/* placeholder visual — swap for real product screenshot once UI is finalized */

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Main Container */}
      <div className="relative bg-surface-white border border-border-soft rounded-2xl shadow-card p-5 sm:p-6 overflow-hidden">
        
        {/* Top bar: Live Call Status */}
        <div className="relative flex items-center justify-between border-b border-border-soft pb-3.5 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-brand-blue text-white shadow-btn">
              <PhoneCall className="w-4 h-4 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-brand-navy">Sarah</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                  Live Voice Agent
                </span>
              </div>
              <p className="text-[11px] text-text-body/70">1-Ring Answer · Zero Hold</p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-pale border border-border-soft text-brand-blue text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
            <span>24/7 Active</span>
          </div>
        </div>

        {/* Live Audio Stream Visual */}
        <div className="relative bg-surface-pale rounded-xl p-3.5 mb-4 border border-border-soft/70">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-body/60">Live Call Audio</span>
            <span className="text-[10px] font-semibold text-brand-blue flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Realtime Voice Stream
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 h-9 py-1">
            {[30, 60, 95, 45, 80, 100, 70, 40, 90, 65, 85, 30, 75, 90, 50, 80, 60, 40, 70, 90, 40].map((height, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-brand-blue"
                style={{
                  height: `${height}%`,
                }}
              />
            ))}
          </div>
          <p className="text-center text-xs text-brand-navy font-medium mt-1">
            "I have tomorrow at 10:00 AM open with Dr. Patel. Shall I confirm?"
          </p>
        </div>

        {/* 3 Clear Pipeline Steps */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-border-soft shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center">
                <UserCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-brand-navy">Patient Identity Verified</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-border-soft shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-50 text-brand-blue flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-brand-navy">Insurance Pre-Eligibility</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Active Payer
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-border-soft shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-surface-pale text-brand-blue flex items-center justify-center">
                <CalendarCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-brand-navy">EHR Calendar Slot Synced</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Booked
            </span>
          </div>
        </div>

        {/* Bottom Proof Strip */}
        <div className="mt-4 pt-3 border-t border-border-soft flex items-center justify-between text-xs text-text-body/80">
          <span className="font-medium text-brand-navy text-[11px] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-teal" />
            SMS confirmation sent automatically
          </span>
          <span className="font-bold text-brand-blue text-[11px]">No hold music</span>
        </div>
      </div>

      {/* Floating Pill */}
      <div className="absolute -bottom-3 -right-2 bg-brand-navy text-white px-3.5 py-2 rounded-xl shadow-card border border-border-soft flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
        <span className="text-xs font-medium">
          <strong className="text-brand-teal font-bold">20+ hrs</strong> saved weekly
        </span>
      </div>
    </div>
  );
};
