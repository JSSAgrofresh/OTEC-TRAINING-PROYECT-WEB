import { useEffect, useState } from 'react';

interface ScrollProgressState {
  isScrolled: boolean;
  progressPct: number;
  showBackToTop: boolean;
}

/** Replica el onScroll() del sitio original: estado del header (sombra/blur
 * al bajar), porcentaje de la barra de progreso y visibilidad del botón
 * "volver arriba". */
export function useScrollProgress(): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>({
    isScrolled: false,
    progressPct: 0,
    showBackToTop: false,
  });

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPct = docHeight > 0 ? (y / docHeight) * 100 : 0;
      setState({
        isScrolled: y > 40,
        progressPct,
        showBackToTop: y > 700,
      });
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}
