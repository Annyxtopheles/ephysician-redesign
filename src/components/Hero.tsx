import React from 'react';
import { DashboardShowcase } from './DashboardShowcase';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 md:pt-40 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================
            CENTERED HERO HEADER
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12] drop-shadow-sm">
            Stop Starting Your Day <br />
            <span className="text-[#EFFAFB]">40 Voicemails Deep.</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Sarah answers every inbound call, verifies insurance, and books directly into your EHR — 24/7, without hold times or added staff.
          </p>

          {/* Simple Centered CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl font-heading font-bold text-base text-brand-navy bg-white hover:bg-surface-pale hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 group border border-white/60"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 text-brand-blue transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="#workflows"
              className="w-full sm:w-auto py-3.5 px-7 rounded-xl font-heading font-bold text-base text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-white fill-current" />
              <span>Watch Video</span>
            </a>
          </div>

        </div>

        {/* ========================================================
            DASHBOARD SHOWCASE WITH FLOATING BREAKOUT METRICS
            ======================================================== */}
        <div className="mt-14 md:mt-18">
          <DashboardShowcase />
        </div>

      </div>
    </section>
  );
};
