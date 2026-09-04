import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  duration = 2400,
  suffix = '',
  prefix = '',
  decimals = 0,
}) => {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = from + (to - from) * easeOutProgress;
            setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(to);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [from, to, duration, decimals]);

  return (
    <span ref={ref} className="tabular-nums font-extrabold text-brand-navy">
      {prefix}
      {value}
      {suffix}
    </span>
  );
};
