import React, { useEffect, useRef, useState } from 'react';
import { animate, useMotionTemplate, useMotionValue, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BeamInputProps {
  onSubmitEmail?: (email: string) => void;
  onRequestDemo?: () => void;
}

export const BeamInput: React.FC<BeamInputProps> = ({ onSubmitEmail, onRequestDemo }) => {
  const [email, setEmail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const turn = useMotionValue(0);

  useEffect(() => {
    const controls = animate(turn, 1, {
      ease: 'linear',
      duration: 4,
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [turn]);

  // Brand theme beam gradient: glowing cyan/teal to blue
  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, rgba(80, 198, 204, 0) 70%, rgba(46, 148, 193, 0.4) 86%, rgba(80, 198, 204, 1) 100%)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmitEmail) {
      onSubmitEmail(email);
    }
    if (onRequestDemo) {
      onRequestDemo();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onClick={() => inputRef.current?.focus()}
      className="relative flex w-full max-w-lg mx-auto items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/15 to-white/5 py-1.5 pl-6 pr-1.5 backdrop-blur-md shadow-2xl transition-all"
    >
      <input
        ref={inputRef}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your clinic email"
        className="w-full bg-transparent text-sm sm:text-base text-white placeholder-white/70 focus:outline-none"
      />
      <button
        onClick={(e) => e.stopPropagation()}
        type="submit"
        className="group flex shrink-0 items-center gap-1.5 rounded-full bg-brand-blue hover:bg-brand-blue-hover px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-heading font-bold text-white shadow-md transition-all active:scale-[0.985] cursor-pointer"
      >
        <span>Request a Demo</span>
        <ArrowRight className="w-4 h-4 -mr-4 opacity-0 transition-all duration-200 group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
      </button>

      <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
        <motion.div
          style={{
            backgroundImage,
          }}
          className="mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border"
        />
      </div>
    </form>
  );
};
