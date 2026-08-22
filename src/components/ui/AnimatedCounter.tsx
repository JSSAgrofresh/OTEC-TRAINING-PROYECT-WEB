import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  /** Si el número es un año de 4 dígitos, anima "hacia atrás" desde -40. */
  isYear?: boolean;
}

/** Replica animateCounter() del sitio original: cuenta desde 0 (o desde
 * target-40 si es un año) hasta el valor final con easing cúbico, una
 * sola vez, apenas el número entra al viewport. */
export default function AnimatedCounter({ target, isYear = false }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const duration = 1400;
            const start = performance.now();

            function tick(now: number) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const next = isYear ? Math.round(target - (1 - eased) * 40) : Math.round(target * eased);
              setValue(next);
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isYear]);

  return (
    <span className="counter" ref={spanRef}>
      {value}
    </span>
  );
}
