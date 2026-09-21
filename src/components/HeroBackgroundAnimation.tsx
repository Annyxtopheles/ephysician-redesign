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
}

// 22 artfully balanced bioluminescent particles
const PARTICLES: Particle[] = [
  { id: 1, left: '6%', bottom: '-40px', size: 3, color: 'bg-white/80', glow: 'shadow-[0_0_8px_rgba(255,255,255,0.8)]', animClass: 'animate-particle-1', duration: '18s', delay: '-2s' },
  { id: 2, left: '12%', bottom: '20px', size: 4, color: 'bg-cyan-200/90', glow: 'shadow-[0_0_10px_rgba(80,198,204,0.7)]', animClass: 'animate-particle-2', duration: '22s', delay: '-9s' },
  { id: 3, left: '18%', bottom: '-20px', size: 2.5, color: 'bg-white/70', glow: 'shadow-[0_0_6px_rgba(255,255,255,0.7)]', animClass: 'animate-particle-3', duration: '16s', delay: '-5s' },
  { id: 4, left: '24%', bottom: '60px', size: 5, color: 'bg-white/90', glow: 'shadow-[0_0_12px_rgba(255,255,255,0.9)]', animClass: 'animate-particle-1', duration: '20s', delay: '-13s' },
  { id: 5, left: '31%', bottom: '-10px', size: 3, color: 'bg-cyan-200/80', glow: 'shadow-[0_0_8px_rgba(80,198,204,0.6)]', animClass: 'animate-particle-2', duration: '19s', delay: '-4s' },
  { id: 6, left: '38%', bottom: '40px', size: 2, color: 'bg-white/70', glow: 'shadow-[0_0_5px_rgba(255,255,255,0.6)]', animClass: 'animate-particle-3', duration: '15s', delay: '-11s' },
  { id: 7, left: '44%', bottom: '-50px', size: 4, color: 'bg-white/85', glow: 'shadow-[0_0_9px_rgba(255,255,255,0.8)]', animClass: 'animate-particle-1', duration: '24s', delay: '-7s' },
  { id: 8, left: '50%', bottom: '30px', size: 3, color: 'bg-cyan-100/90', glow: 'shadow-[0_0_8px_rgba(80,198,204,0.7)]', animClass: 'animate-particle-2', duration: '17s', delay: '-14s' },
  { id: 9, left: '56%', bottom: '-30px', size: 2.5, color: 'bg-white/75', glow: 'shadow-[0_0_6px_rgba(255,255,255,0.7)]', animClass: 'animate-particle-3', duration: '21s', delay: '-3s' },
  { id: 10, left: '63%', bottom: '50px', size: 4.5, color: 'bg-white/90', glow: 'shadow-[0_0_11px_rgba(255,255,255,0.85)]', animClass: 'animate-particle-1', duration: '19s', delay: '-16s' },
  { id: 11, left: '70%', bottom: '-15px', size: 3, color: 'bg-cyan-200/80', glow: 'shadow-[0_0_8px_rgba(80,198,204,0.6)]', animClass: 'animate-particle-2', duration: '23s', delay: '-8s' },
  { id: 12, left: '76%', bottom: '25px', size: 2, color: 'bg-white/70', glow: 'shadow-[0_0_5px_rgba(255,255,255,0.6)]', animClass: 'animate-particle-3', duration: '16s', delay: '-12s' },
  { id: 13, left: '83%', bottom: '-45px', size: 4, color: 'bg-white/85', glow: 'shadow-[0_0_10px_rgba(255,255,255,0.8)]', animClass: 'animate-particle-1', duration: '21s', delay: '-6s' },
  { id: 14, left: '89%', bottom: '35px', size: 3.5, color: 'bg-cyan-200/90', glow: 'shadow-[0_0_9px_rgba(80,198,204,0.7)]', animClass: 'animate-particle-2', duration: '18s', delay: '-15s' },
  { id: 15, left: '95%', bottom: '-25px', size: 2.5, color: 'bg-white/75', glow: 'shadow-[0_0_6px_rgba(255,255,255,0.7)]', animClass: 'animate-particle-3', duration: '20s', delay: '-4s' },
  { id: 16, left: '15%', bottom: '110px', size: 3, color: 'bg-white/80', glow: 'shadow-[0_0_7px_rgba(255,255,255,0.7)]', animClass: 'animate-particle-1', duration: '25s', delay: '-18s' },
  { id: 17, left: '28%', bottom: '90px', size: 2.5, color: 'bg-cyan-200/80', glow: 'shadow-[0_0_6px_rgba(80,198,204,0.6)]', animClass: 'animate-particle-2', duration: '22s', delay: '-1s' },
  { id: 18, left: '48%', bottom: '120px', size: 3.5, color: 'bg-white/85', glow: 'shadow-[0_0_9px_rgba(255,255,255,0.8)]', animClass: 'animate-particle-3', duration: '19s', delay: '-10s' },
  { id: 19, left: '67%', bottom: '100px', size: 2.5, color: 'bg-cyan-100/85', glow: 'shadow-[0_0_6px_rgba(80,198,204,0.6)]', animClass: 'animate-particle-1', duration: '23s', delay: '-7s' },
  { id: 20, left: '81%', bottom: '115px', size: 3, color: 'bg-white/80', glow: 'shadow-[0_0_7px_rgba(255,255,255,0.7)]', animClass: 'animate-particle-2', duration: '17s', delay: '-13s' },
  { id: 21, left: '9%', bottom: '80px', size: 2, color: 'bg-white/70', glow: 'shadow-[0_0_5px_rgba(255,255,255,0.5)]', animClass: 'animate-particle-3', duration: '24s', delay: '-6s' },
  { id: 22, left: '92%', bottom: '95px', size: 3, color: 'bg-cyan-200/80', glow: 'shadow-[0_0_7px_rgba(80,198,204,0.6)]', animClass: 'animate-particle-1', duration: '20s', delay: '-11s' },
];

export const HeroBackgroundAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Soft atmospheric breathing light — calm, natural gradient depth */}
      <div className="absolute -top-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-[140px] animate-hero-biolum" />
      <div
        className="absolute top-16 right-1/4 w-[32rem] h-[32rem] rounded-full bg-cyan-200/15 blur-[130px] animate-hero-biolum"
        style={{ animationDelay: '4s' }}
      />

      {/* Floating bioluminescent micro-particles */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full ${p.color} ${p.glow} ${p.animClass}`}
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
