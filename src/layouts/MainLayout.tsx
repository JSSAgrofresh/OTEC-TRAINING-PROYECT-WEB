import type { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProgressBar from '../components/layout/ProgressBar';
import BackToTop from '../components/layout/BackToTop';
import { useScrollProgress } from '../hooks/useScrollProgress';

/** Layout del sitio público (landing page): header con navegación por
 * anclas, barra de progreso, botón "volver arriba" y footer. */
export default function MainLayout({ children }: { children: ReactNode }) {
  const { isScrolled, progressPct, showBackToTop } = useScrollProgress();

  return (
    <>
      <ProgressBar progressPct={progressPct} />
      <Header isScrolled={isScrolled} />
      {children}
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
  );
}
