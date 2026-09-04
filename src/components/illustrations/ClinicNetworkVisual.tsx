import React from 'react';
import { Building2, Shield, Signal, Stethoscope, Clock, Zap } from 'lucide-react';

/* placeholder visual — swap for real product screenshot once UI is finalized */

export const ClinicNetworkVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Abstract Medical Clinic Facility Structure */}
      <div className="relative bg-surface-pale border border-border-soft rounded-2xl p-6 md:p-8 shadow-card overflow-hidden">
        
        {/* Central Facility Graphic Composition */}
        <div className="relative flex flex-col items-center justify-center py-6">
          
          {/* Main Clinic Hub - Solid Brand Blue */}
          <div className="relative z-10 w-28 h-28 rounded-2xl bg-brand-blue flex flex-col items-center justify-center text-white shadow-card transition-transform hover:scale-105 duration-200">
            <Building2 className="w-12 h-12 text-white stroke-[1.75]" />
            <div className="flex items-center gap-1 mt-1 text-[10px] font-bold tracking-wider uppercase text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Clinic Live
            </div>
            {/* Soft rings with solid borders */}
            <div className="absolute -inset-3 rounded-2xl border-2 border-brand-teal/40 -z-10" />
            <div className="absolute -inset-6 rounded-3xl border border-brand-blue/20 -z-20" />
          </div>

          {/* Connected Network Nodes */}
          <div className="w-full grid grid-cols-3 gap-3 mt-8 relative z-10">
            
            {/* Node 1: Inbound Voice Lines */}
            <div className="p-3 rounded-xl bg-surface-white border border-border-soft text-center shadow-xs">
              <div className="w-8 h-8 mx-auto rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-1.5">
                <Signal className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-brand-navy">100% Inbound</div>
              <div className="text-[10px] text-text-body/70">Never Miss a Call</div>
            </div>

            {/* Node 2: Sub-second Booking */}
            <div className="p-3 rounded-xl bg-surface-white border border-border-soft text-center shadow-xs">
              <div className="w-8 h-8 mx-auto rounded-lg bg-sky-50 text-brand-blue flex items-center justify-center mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-brand-navy">&lt; 24h Setup</div>
              <div className="text-[10px] text-text-body/70">No Rip-and-Replace</div>
            </div>

            {/* Node 3: Clean Revenue */}
            <div className="p-3 rounded-xl bg-surface-white border border-border-soft text-center shadow-xs">
              <div className="w-8 h-8 mx-auto rounded-lg bg-surface-pale text-brand-navy flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4 text-brand-blue" />
              </div>
              <div className="text-[11px] font-bold text-brand-navy">95%+ Copays</div>
              <div className="text-[10px] text-text-body/70">Paid at Check-in</div>
            </div>

          </div>

          {/* Bottom Trust Badge Cluster */}
          <div className="mt-6 inline-flex items-center gap-4 px-4 py-2 rounded-full bg-surface-white border border-border-soft text-xs text-text-body shadow-xs">
            <span className="flex items-center gap-1.5 font-medium text-brand-navy">
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              HIPAA & PCI DSS L1
            </span>
            <span className="text-border-soft">•</span>
            <span className="flex items-center gap-1.5 font-medium text-brand-navy">
              <Stethoscope className="w-3.5 h-3.5 text-brand-blue" />
              1–3 Location Clinics
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
