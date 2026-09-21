import React from 'react';

export const HeroBackgroundAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* -------------------------------------------------------------
          1. AMBIENT BIOLUMINESCENT DEPTH (Soft Breathing Gradient Halos)
          ------------------------------------------------------------- */}
      <div className="absolute -top-24 left-1/4 w-[32rem] h-[32rem] rounded-full bg-cyan-300/20 blur-[110px] animate-hero-biolum" />
      <div
        className="absolute top-20 right-1/4 w-[36rem] h-[36rem] rounded-full bg-white/15 blur-[120px] animate-hero-biolum"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute -top-10 right-10 w-96 h-96 rounded-full bg-brand-teal/15 blur-[100px] animate-hero-biolum"
        style={{ animationDelay: '2s' }}
      />

      {/* -------------------------------------------------------------
          2. CLINICAL TELEMETRY HUD LABELS (Peripheral Command Watermarks)
          ------------------------------------------------------------- */}
      {/* Left Telemetry HUD Badge */}
      <div className="hidden xl:flex items-center gap-2.5 absolute top-36 left-8 2xl:left-14 opacity-60 hover:opacity-100 transition-opacity">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </div>
        <div className="flex flex-col text-[10px] font-mono tracking-wider text-white/70">
          <span className="font-semibold uppercase text-white/90">Sarah Telephony Core</span>
          <span className="text-white/50">24/7 SIP / WebRTC Active</span>
        </div>
      </div>

      {/* Right Telemetry HUD Badge */}
      <div className="hidden xl:flex items-center gap-2.5 absolute top-44 right-8 2xl:right-14 opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex flex-col text-right text-[10px] font-mono tracking-wider text-white/70">
          <span className="font-semibold uppercase text-white/90">EHR Telemetry Stream</span>
          <span className="text-white/50">Bi-directional FHIR Synced</span>
        </div>
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
        </div>
      </div>

      {/* -------------------------------------------------------------
          3. RESPONSIVE SVG HARMONIC BIOMETRIC WAVES & TELEMETRY BEAMS
          ------------------------------------------------------------- */}
      <svg
        className="w-full h-full min-w-[1200px] absolute inset-0 opacity-80"
        viewBox="0 0 1440 820"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for Wave 1 */}
          <linearGradient id="heroWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#50C6CC" stopOpacity="0.38" />
            <stop offset="85%" stopColor="#2E94C1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>

          {/* Gradient for Wave 2 (Harmonic Counter-Wave) */}
          <linearGradient id="heroWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#50C6CC" stopOpacity="0.04" />
            <stop offset="35%" stopColor="#50C6CC" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#2E94C1" stopOpacity="0.05" />
          </linearGradient>

          {/* Gradient for Telemetry Tracer Beam 1 */}
          <linearGradient id="telemetryBeamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="40%" stopColor="#50C6CC" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#50C6CC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Gradient for Telemetry Tracer Beam 2 */}
          <linearGradient id="telemetryBeamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E94C1" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#50C6CC" stopOpacity="0" />
          </linearGradient>

          {/* Subtle Glow Filter for Telemetry Beams */}
          <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Faint Medical Grid Pattern */}
          <pattern id="clinicalGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.5"
              strokeOpacity="0.06"
            />
            <circle cx="0" cy="0" r="1" fill="#FFFFFF" fillOpacity="0.18" />
          </pattern>

          {/* Mask for Grid so it gently fades out radially from hero center */}
          <radialGradient id="gridMaskGrad" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridMaskGrad)" />
          </mask>
        </defs>

        {/* --- Background Clinical Dot/Cross Grid Masked --- */}
        <rect
          width="1440"
          height="820"
          fill="url(#clinicalGrid)"
          mask="url(#gridMask)"
        />

        {/* --- PRIMARY HARMONIC VITAL WAVEFORM (Undulating Smooth Rhythm) --- */}
        <g className="animate-hero-wave-1">
          {/* Base soft guide wave */}
          <path
            d="M -120 220 C 180 140, 420 300, 720 210 C 1020 120, 1260 280, 1560 170"
            stroke="url(#heroWaveGrad1)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Glowing continuous telemetry tracer packet running along Wave 1 */}
          <path
            d="M -120 220 C 180 140, 420 300, 720 210 C 1020 120, 1260 280, 1560 170"
            stroke="url(#telemetryBeamGrad1)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            filter="url(#heroGlow)"
            className="animate-hero-telemetry-1"
          />
        </g>

        {/* --- SECONDARY RESPIRATORY WAVEFORM (Complementary Cadence) --- */}
        <g className="animate-hero-wave-2">
          {/* Base dashed respiratory contour */}
          <path
            d="M -100 310 C 220 380, 500 240, 780 325 C 1060 410, 1300 260, 1580 315"
            stroke="url(#heroWaveGrad2)"
            strokeWidth="1.6"
            strokeDasharray="4 6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Reverse telemetry tracer beam running along Wave 2 */}
          <path
            d="M -100 310 C 220 380, 500 240, 780 325 C 1060 410, 1300 260, 1580 315"
            stroke="url(#telemetryBeamGrad2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#heroGlow)"
            className="animate-hero-telemetry-2"
          />
        </g>

        {/* --- TERTIARY AMBIENT FLUID WAVE (Low amplitude floor flow) --- */}
        <path
          d="M -140 440 C 200 480, 460 380, 720 420 C 980 460, 1240 370, 1580 410"
          stroke="url(#heroWaveGrad1)"
          strokeWidth="1.2"
          strokeOpacity="0.3"
          strokeDasharray="8 12"
          fill="none"
        />

        {/* --- CLINICAL TELEMETRY RETICLES & BEACONS --- */}
        {/* Left Peripheral Reticle */}
        <g transform="translate(140, 205)" opacity="0.45">
          <circle cx="0" cy="0" r="14" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 3" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        {/* Right Peripheral Reticle */}
        <g transform="translate(1290, 255)" opacity="0.45">
          <circle cx="0" cy="0" r="16" stroke="#50C6CC" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="3.5" fill="#50C6CC" />
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#50C6CC" strokeWidth="1" />
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#50C6CC" strokeWidth="1" />
        </g>

        {/* Mid-Lower Telemetry Node Accent */}
        <g transform="translate(260, 450)" opacity="0.35">
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>

        <g transform="translate(1180, 440)" opacity="0.35">
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};
