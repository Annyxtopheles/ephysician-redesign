import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { BigStatDisplay } from './BigStatDisplay';

import bgVoice from '../assets/cards/card-voice.png';
import bgReminders from '../assets/cards/card-reminders.png';
import bgKiosk from '../assets/cards/card-kiosk.png';
import bgClaims from '../assets/cards/card-claims.png';

interface WorkflowPillarsProps {
  onRequestDemo: () => void;
}

export const WorkflowPillars: React.FC<WorkflowPillarsProps> = ({ onRequestDemo }) => {
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(0);
  const audioIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleSarahAudio = () => {
    if (isVoicePlaying) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      setIsVoicePlaying(false);
      setAudioSeconds(0);
    } else {
      setIsVoicePlaying(true);
      setAudioSeconds(0);

      const totalDuration = 8;
      audioIntervalRef.current = window.setInterval(() => {
        setAudioSeconds((prev) => {
          if (prev >= totalDuration) {
            if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
            setIsVoicePlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);

      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = "Hi, thank you for calling Bay Dental Partners. My name is Sarah. I see an open hygiene slot tomorrow at 10 AM with Doctor Patel. Would that time work for you?";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.05;
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find((v) =>
          v.lang.startsWith('en') && (
            v.name.includes('Natural') ||
            v.name.includes('Samantha') ||
            v.name.includes('Zira') ||
            v.name.includes('Google US English') ||
            v.name.includes('Female')
          )
        );
        if (preferredVoice) utterance.voice = preferredVoice;
        utterance.onend = () => {
          if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
          setIsVoicePlaying(false);
          setAudioSeconds(0);
        };
        utterance.onerror = () => {
          if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
          setIsVoicePlaying(false);
          setAudioSeconds(0);
        };
        window.speechSynthesis.speak(utterance);
      }
    }
  };
  return (
    <section id="features" className="py-10 md:py-14 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold font-heading tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            Four Autonomous Fixes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight text-balance mt-3">
            One platform. Four fixes. Real numbers.
          </h2>
        </div>

        {/* 4 Pillars Grid — 2 rows of 2 cards (2x2 layout) for spacious, uncrowded layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1 — AI Voice Scheduling */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group border border-border-soft">
            {/* Fixed Bounding Area for Brand Glass Icon */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center pointer-events-none select-none z-0">
              <img
                src={bgVoice}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Top Row — Dominant Metric & Header */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2 pr-28 sm:pr-36 min-h-[110px] sm:min-h-[120px]">
              <span className="text-xs font-bold font-heading text-brand-navy uppercase tracking-wider">
                AI VOICE SCHEDULING
              </span>

              {/* Big Stat Display — 42% → 0% */}
              <BigStatDisplay
                before="42%"
                target={0}
                suffix="%"
                textColor="black"
              />

              {/* Supporting one-line plain-English description */}
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed">
                Every call, answered in 1 ring. Zero missed inquiries.
              </p>
            </div>

            {/* Second Row — Authentic EHR & Telemetry Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-4 sm:p-5 border border-border-soft space-y-3 mt-6">
              {/* Event Header */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-brand-navy text-[11px] sm:text-xs">
                    Inbound Call #4819 · Sarah (Voice)
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-brand-blue font-semibold bg-brand-blue/10 px-2 py-0.5 rounded">
                  OpenDental · Synced
                </span>
              </div>

              {/* EHR Record Block */}
              <div className="p-3 rounded-lg bg-white border border-border-soft text-xs space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-text-body">
                  <span className="font-medium text-brand-navy">Caller: Maria G.</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Delta Dental PPO Verified
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-brand-navy pt-1 border-t border-border-soft/60">
                  <span className="font-medium">Slot Booked: Thu 10:00 AM (Dr. Patel)</span>
                  <span className="text-brand-blue font-semibold">1-Ring Answer</span>
                </div>
              </div>

              {/* Interactive Voice Sample Player */}
              <div className="p-2.5 rounded-lg bg-white border border-brand-blue/30 shadow-2xs flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={toggleSarahAudio}
                  className="w-8 h-8 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white flex items-center justify-center shrink-0 shadow-xs transition-transform active:scale-95 cursor-pointer"
                  aria-label={isVoicePlaying ? 'Pause Sarah sample' : 'Play Sarah sample'}
                >
                  {isVoicePlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-[11px] font-semibold">
                    <span className="text-brand-navy truncate">
                      {isVoicePlaying ? 'Live Audio: Inbound Booking Simulation' : 'Audio Preview · Sarah (Voice)'}
                    </span>
                    <span className="text-brand-blue text-[10px] font-bold tabular-nums">
                      {isVoicePlaying ? `${audioSeconds}s / 8s` : '0:08'}
                    </span>
                  </div>

                  {/* Dynamic Sound Waveform Bars */}
                  <div className="flex items-center gap-1 h-3 mt-1">
                    {[40, 75, 55, 95, 60, 85, 45, 90, 70, 40, 80, 65, 90, 50, 75, 45].map((defaultHeight, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full transition-all duration-150 ${
                          isVoicePlaying ? 'bg-brand-blue animate-pulse' : 'bg-brand-blue/30'
                        }`}
                        style={{
                          height: isVoicePlaying
                            ? `${Math.max(25, Math.min(100, Math.sin((audioSeconds * 3) + i) * 60 + 50))}%`
                            : `${defaultHeight}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer telemetry */}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-medium text-text-body/80 pt-1 border-t border-border-soft/60">
                <span className="text-brand-blue font-semibold">
                  Zero Hold Time · Full EHR Write
                </span>
                <span className="font-semibold text-brand-navy">3,200+ calls handled this month</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Automated Reminders */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group border border-border-soft">
            {/* Fixed Bounding Area for Brand Glass Icon */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center pointer-events-none select-none z-0">
              <img
                src={bgReminders}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Top Row — Dominant Metric & Header */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2 pr-28 sm:pr-36 min-h-[110px] sm:min-h-[120px]">
              <span className="text-xs font-bold font-heading text-brand-navy uppercase tracking-wider">
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
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed">
                Automated reminders patients actually respond to.
              </p>
            </div>

            {/* Second Row — Authentic 2-Way SMS Thread Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-4 sm:p-5 border border-border-soft space-y-3 mt-6">
              {/* Event Header */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  <span className="font-bold text-brand-navy text-[11px] sm:text-xs">
                    2-Way SMS Dispatch · David L.
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Delivered 10:32 AM
                </span>
              </div>

              {/* Interactive Conversation Snippet */}
              <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-border-soft text-xs space-y-2 shadow-2xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-text-body text-[11px] leading-snug">
                    <strong className="text-brand-navy font-semibold">Clinic:</strong> &ldquo;Hi David, reply C to confirm your hygiene appt tomorrow at 2:00 PM.&rdquo;
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-border-soft/60">
                  <span className="text-brand-navy font-semibold bg-surface-pale px-2 py-0.5 rounded border border-border-soft">
                    Patient replied: &ldquo;C&rdquo;
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Auto-Confirmed
                  </span>
                </div>
              </div>

              {/* Footer telemetry */}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-medium text-text-body/80 pt-1 border-t border-border-soft/60">
                <span className="font-semibold text-brand-navy">68% SMS · 24% Email · 8% Voice</span>
                <span className="text-xs font-bold text-emerald-700">
                  3× fewer no-shows
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 — Kiosk Check-In & Copay */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group border border-border-soft">
            {/* Fixed Bounding Area for Brand Glass Icon */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center pointer-events-none select-none z-0">
              <img
                src={bgKiosk}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Top Row — Dominant Metric & Header */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2 pr-28 sm:pr-36 min-h-[110px] sm:min-h-[120px]">
              <span className="text-xs font-bold font-heading text-brand-navy uppercase tracking-wider">
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
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed">
                Copay collected before the patient sees the provider.
              </p>
            </div>

            {/* Second Row — Authentic Terminal & Check-in Receipt Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-4 sm:p-5 border border-border-soft space-y-3 mt-6">
              {/* Event Header */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  <span className="font-bold text-brand-navy text-[11px] sm:text-xs">
                    Terminal 02 (Lobby Kiosk) · Patient #1042
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-brand-navy font-semibold bg-white px-2 py-0.5 rounded border border-border-soft">
                  Check-in: 84 sec
                </span>
              </div>

              {/* Terminal Transaction Block */}
              <div className="p-3 rounded-lg bg-white border border-border-soft text-xs space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-navy text-sm">
                    $25.00 Copay Collected
                  </span>
                  <span className="text-emerald-700 text-[10px] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Stripe Contactless
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-text-body pt-1 border-t border-border-soft/60">
                  <span>Forms: Medical History + Consent Signed</span>
                  <span className="text-brand-blue font-semibold">Ready for Exam 3</span>
                </div>
              </div>

              {/* Footer telemetry */}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-medium text-text-body/80 pt-1 border-t border-border-soft/60">
                <span className="text-brand-blue font-semibold">PCI-DSS Level 1 Encrypted</span>
                <span className="font-semibold text-brand-navy">100% upfront copay collection</span>
              </div>
            </div>
          </div>

          {/* Card 4 — AI Claims Prep */}
          <div className="relative bg-white rounded-2xl overflow-hidden p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group border border-border-soft">
            {/* Fixed Bounding Area for Brand Glass Icon */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center pointer-events-none select-none z-0">
              <img
                src={bgClaims}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Top Row — Dominant Metric & Header */}
            <div className="relative z-10 flex flex-col items-start text-left space-y-2 pr-28 sm:pr-36 min-h-[110px] sm:min-h-[120px]">
              <span className="text-xs font-bold font-heading text-brand-navy uppercase tracking-wider">
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
              <p className="text-sm sm:text-base text-text-body font-medium leading-relaxed">
                Claims staged and ready before the visit ends.
              </p>
            </div>

            {/* Second Row — Authentic Clearinghouse Staging Proof Snippet */}
            <div className="relative z-10 w-full bg-[#EFFAFB] rounded-xl p-4 sm:p-5 border border-border-soft space-y-3 mt-6">
              {/* Event Header */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                  <span className="font-bold text-brand-navy text-[11px] sm:text-xs">
                    Claim Staging #CLM-9821 · Dr. Kim
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Pre-Auth on File
                </span>
              </div>

              {/* Procedure & Code Mapping Block */}
              <div className="p-3 rounded-lg bg-white border border-border-soft text-xs space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-brand-navy">CPT 99214 + D0150 · ICD-10 M25.511</span>
                  <span className="text-brand-blue font-semibold">Auto-Mapped</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-text-body pt-1 border-t border-border-soft/60">
                  <span>Payer Rules: MetLife Verified</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Queued for 1-Click Sign-Off
                  </span>
                </div>
              </div>

              {/* Footer telemetry */}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-medium text-text-body/80 pt-1 border-t border-border-soft/60">
                <span className="text-brand-blue font-semibold">Zero Unbilled Charts</span>
                <span className="font-semibold text-brand-navy">100% flagged before 30-day aging</span>
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
