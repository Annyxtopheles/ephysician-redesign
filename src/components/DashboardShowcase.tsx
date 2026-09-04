import React from 'react';
import dashboardMain from '../assets/dashboard-main.png';
import floatingPatient from '../assets/floating-patient.png';
import floatingCompliance from '../assets/floating-compliance.png';
import floatingAgent from '../assets/floating-agent.png';

export const DashboardShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto pt-4 pb-12">
      
      {/* ========================================================
          FLOATING BREAKOUT PARTS (With noisy glass effect borders)
          ======================================================== */}

      {/* Floating Part 1: Provider Change Agent Card (Top-Right Floating) */}
      <div className="hidden md:block absolute -top-6 -right-2 lg:-right-8 z-30 animate-float-1">
        <div className="noisy-glass-border p-2.5 sm:p-3 max-w-[280px] sm:max-w-[310px] select-none hover:-translate-y-1.5 transition-transform duration-300">
          <div className="relative rounded-xl overflow-hidden bg-white/90 noise-overlay p-1 shadow-sm">
            <img 
              src={floatingAgent} 
              alt="Provider Change Agent Card" 
              className="w-full h-auto object-contain rounded-lg pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Floating Part 2: Patient Activity Row (Bottom-Center/Left Floating) */}
      <div className="hidden lg:block absolute -bottom-8 -left-4 lg:-left-6 z-30 animate-float-2">
        <div className="noisy-glass-border p-2.5 sm:p-3 max-w-[440px] select-none hover:-translate-y-1.5 transition-transform duration-300">
          <div className="relative rounded-xl overflow-hidden bg-white/90 noise-overlay p-1 shadow-sm">
            <img 
              src={floatingPatient} 
              alt="Patient Record Verification" 
              className="w-full h-auto object-contain rounded-lg pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Floating Part 3: Compliance Score Card (Bottom-Right Floating) */}
      <div className="hidden md:block absolute -bottom-8 right-4 lg:right-12 z-30 animate-float-3">
        <div className="noisy-glass-border p-2.5 sm:p-3 max-w-[200px] select-none hover:-translate-y-1.5 transition-transform duration-300">
          <div className="relative rounded-xl overflow-hidden bg-white/90 noise-overlay p-1 shadow-sm">
            <img 
              src={floatingCompliance} 
              alt="Compliance Score 97%" 
              className="w-full h-auto object-contain rounded-lg pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          MAIN DASHBOARD SCREENSHOT CONTAINER
          ======================================================== */}
      <div className="relative rounded-2xl md:rounded-3xl p-2.5 sm:p-3.5 header-liquid-glass">
        {/* Inner Window Frame with Browser Chrome */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-white border border-border-soft/80 shadow-md">
          
          {/* Top Window Bar */}
          <div className="bg-surface-pale px-4 py-2.5 sm:py-3 border-b border-border-soft flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-[11px] font-semibold text-text-body/70 hidden sm:inline font-mono">
                app.ephysician.biz/command-center
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Demo Mode
              </span>
            </div>
          </div>

          {/* Actual Dashboard Screenshot */}
          <div className="relative w-full bg-slate-50 flex items-center justify-center">
            <img 
              src={dashboardMain} 
              alt="ePhysician Control Tower - Agentic Command Center Dashboard" 
              className="w-full h-auto object-cover block shadow-inner"
              loading="eager"
            />
          </div>
        </div>
      </div>

    </div>
  );
};
