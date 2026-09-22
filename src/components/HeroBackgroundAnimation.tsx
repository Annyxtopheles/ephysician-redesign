import React from 'react';

interface Particle {
  id: number;
  left: string;
  bottom: string;
  size: number;
  color: string;
  glow: string;
  animClass: string;
  duration: string;
  delay: string;
  blur?: string;
}

// 26 thoughtfully distributed bioluminescent micro-orbs & luminous depth flecks
// Using staggered negative delays so particles are immediately active at all screen heights
const PARTICLES: Particle[] = [
  // Left Zone
  { id: 1, left: '4%', bottom: '40px', size: 5, color: 'bg-white', glow: 'shadow-[0_0_10px_#ffffff,0_0_20px_rgba(80,198,204,0.8)]', animClass: 'animate-particle-1', duration: '18s', delay: '-3s' },
  { id: 2, left: '8%', bottom: '10px', size: 7, color: 'bg-cyan-200', glow: 'shadow-[0_0_12px_#ffffff,0_0_22px_rgba(80,198,204,0.9)]', animClass: 'animate-particle-2', duration: '22s', delay: '-14s' },
  { id: 3, left: '13%', bottom: '60px', size: 4, color: 'bg-white', glow: 'shadow-[0_0_8px_#ffffff,0_0_16px_rgba(255,255,255,0.9)]', animClass: 'animate-particle-3', duration: '17s', delay: '-8s' },
  { id: 4, left: '17%', bottom: '15px', size: 14, color: 'bg-cyan-100/40', glow: 'shadow-[0_0_20px_rgba(80,198,204,0.7)]', animClass: 'animate-particle-1', duration: '24s', delay: '-19s', blur: 'blur-[2px]' },
  { id: 5, left: '21%', bottom: '70px', size: 6, color: 'bg-white', glow: 'shadow-[0_0_10px_#ffffff,0_0_18px_rgba(80,198,204,0.8)]', animClass: 'animate-particle-2', duration: '20s', delay: '-5s' },
  { id: 6, left: '25%', bottom: '25px', size: 4.5, color: 'bg-cyan-200', glow: 'shadow-[0_0_9px_#ffffff,0_0_16px_rgba(80,198,204,0.75)]', animClass: 'animate-particle-3', duration: '16s', delay: '-12s' },

  // Center-Left Zone
  { id: 7, left: '30%', bottom: '50px', size: 8, color: 'bg-white', glow: 'shadow-[0_0_14px_#ffffff,0_0_25px_rgba(80,198,204,0.95)]', animClass: 'animate-particle-1', duration: '21s', delay: '-10s' },
  { id: 8, left: '34%', bottom: '10px', size: 4, color: 'bg-cyan-100', glow: 'shadow-[0_0_8px_#ffffff,0_0_14px_rgba(80,198,204,0.7)]', animClass: 'animate-particle-2', duration: '19s', delay: '-2s' },
  { id: 9, left: '39%', bottom: '65px', size: 6, color: 'bg-white', glow: 'shadow-[0_0_10px_#ffffff,0_0_20px_rgba(255,255,255,0.9)]', animClass: 'animate-particle-3', duration: '18s', delay: '-16s' },
  { id: 10, left: '43%', bottom: '30px', size: 16, color: 'bg-white/35', glow: 'shadow-[0_0_24px_rgba(255,255,255,0.8)]', animClass: 'animate-particle-1', duration: '25s', delay: '-7s', blur: 'blur-[3px]' },

  // Center & Center-Right Zone
  { id: 11, left: '48%', bottom: '55px', size: 5, color: 'bg-cyan-200', glow: 'shadow-[0_0_10px_#ffffff,0_0_18px_rgba(80,198,204,0.85)]', animClass: 'animate-particle-2', duration: '17s', delay: '-13s' },
  { id: 12, left: '53%', bottom: '20px', size: 7.5, color: 'bg-white', glow: 'shadow-[0_0_12px_#ffffff,0_0_22px_rgba(80,198,204,0.9)]', animClass: 'animate-particle-3', duration: '23s', delay: '-4s' },
  { id: 13, left: '58%', bottom: '75px', size: 4, color: 'bg-cyan-100', glow: 'shadow-[0_0_8px_#ffffff,0_0_15px_rgba(80,198,204,0.7)]', animClass: 'animate-particle-1', duration: '19s', delay: '-18s' },
  { id: 14, left: '62%', bottom: '15px', size: 6, color: 'bg-white', glow: 'shadow-[0_0_10px_#ffffff,0_0_19px_rgba(255,255,255,0.9)]', animClass: 'animate-particle-2', duration: '20s', delay: '-9s' },
  { id: 15, left: '66%', bottom: '60px', size: 15, color: 'bg-cyan-100/40', glow: 'shadow-[0_0_22px_rgba(80,198,204,0.75)]', animClass: 'animate-particle-3', duration: '26s', delay: '-1s', blur: 'blur-[2.5px]' },

  // Right Zone
  { id: 16, left: '71%', bottom: '35px', size: 5, color: 'bg-cyan-200', glow: 'shadow-[0_0_10px_#ffffff,0_0_18px_rgba(80,198,204,0.85)]', animClass: 'animate-particle-1', duration: '18s', delay: '-15s' },
  { id: 17, left: '75%', bottom: '80px', size: 7, color: 'bg-white', glow: 'shadow-[0_0_12px_#ffffff,0_0_22px_rgba(80,198,204,0.9)]', animClass: 'animate-particle-2', duration: '21s', delay: '-6s' },
  { id: 18, left: '80%', bottom: '25px', size: 4.5, color: 'bg-white', glow: 'shadow-[0_0_9px_#ffffff,0_0_16px_rgba(255,255,255,0.85)]', animClass: 'animate-particle-3', duration: '16s', delay: '-11s' },
  { id: 19, left: '84%', bottom: '70px', size: 6.5, color: 'bg-cyan-200', glow: 'shadow-[0_0_11px_#ffffff,0_0_20px_rgba(80,198,204,0.85)]', animClass: 'animate-particle-1', duration: '22s', delay: '-17s' },
  { id: 20, left: '88%', bottom: '15px', size: 5, color: 'bg-white', glow: 'shadow-[0_0_10px_#ffffff,0_0_18px_rgba(80,198,204,0.8)]', animClass: 'animate-particle-2', duration: '19s', delay: '-5s' },
  { id: 21, left: '92%', bottom: '65px', size: 8, color: 'bg-cyan-100', glow: 'shadow-[0_0_13px_#ffffff,0_0_24px_rgba(80,198,204,0.9)]', animClass: 'animate-particle-3', duration: '20s', delay: '-14s' },
  { id: 22, left: '96%', bottom: '30px', size: 4, color: 'bg-white', glow: 'shadow-[0_0_8px_#ffffff,0_0_15px_rgba(255,255,255,0.85)]', animClass: 'animate-particle-1', duration: '17s', delay: '-2s' },

  // Supplementary mid-elevation particles
  { id: 23, left: '11%', bottom: '90px', size: 5.5, color: 'bg-white', glow: 'shadow-[0_0_10px_#ffffff,0_0_18px_rgba(80,198,204,0.8)]', animClass: 'animate-particle-2', duration: '23s', delay: '-12s' },
  { id: 24, left: '37%', bottom: '85px', size: 4.5, color: 'bg-cyan-200', glow: 'shadow-[0_0_9px_#ffffff,0_0_16px_rgba(80,198,204,0.75)]', animClass: 'animate-particle-3', duration: '18s', delay: '-6s' },
  { id: 25, left: '64%', bottom: '90px', size: 6, color: 'bg-white', glow: 'shadow-[0_0_11px_#ffffff,0_0_19px_rgba(255,255,255,0.9)]', animClass: 'animate-particle-1', duration: '21s', delay: '-15s' },
  { id: 26, left: '86%', bottom: '85px', size: 5, color: 'bg-cyan-100', glow: 'shadow-[0_0_10px_#ffffff,0_0_17px_rgba(80,198,204,0.8)]', animClass: 'animate-particle-2', duration: '19s', delay: '-8s' },
];

export const HeroBackgroundAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-[840px] overflow-hidden pointer-events-none select-none z-0"
    >
      {/* -------------------------------------------------------------
          1. LUMINOUS ATMOSPHERIC BREATHING POOLS
          ------------------------------------------------------------- */}
      <div className="absolute -top-20 left-1/4 w-[38rem] h-[38rem] rounded-full bg-cyan-300/25 blur-[120px] animate-hero-biolum" />
      <div
        className="absolute top-12 right-1/4 w-[34rem] h-[34rem] rounded-full bg-white/20 blur-[110px] animate-hero-biolum"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute top-36 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] rounded-full bg-cyan-100/20 blur-[130px] animate-hero-biolum"
        style={{ animationDelay: '2s' }}
      />

      {/* -------------------------------------------------------------
          2. FLOATING BIOLUMINESCENT PARTICLES (Active Across Full Hero)
          ------------------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full ${p.color} ${p.glow} ${p.animClass} ${p.blur || ''}`}
            style={{
              left: p.left,
              bottom: p.bottom,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};
