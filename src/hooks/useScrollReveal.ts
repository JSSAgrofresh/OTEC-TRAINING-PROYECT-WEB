import { useEffect, useRef } from 'react';

/**
 * Replica el comportamiento de `.reveal` / `[data-reveal]` del sitio
 * original: el elemento aparece (fade + slide) la primera vez que entra
 * al viewport, usando IntersectionObserver, y deja de observarse después.
 */
export function useScrollReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.setProperty('--d', String(delay));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
