import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

/** Layout minimalista para /login y /admin: se renderiza independiente del
 * layout público (sin nav por anclas, sin footer largo), solo una barra
 * superior con el logo y un link de vuelta al sitio. */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-shell">
      <div className="auth-topbar">
        <div className="container auth-topbar-inner">
          <Link to="/" className="brand">
            <img src={logo} alt="Training OTEC Proyect" className="brand-logo" />
          </Link>
          <Link to="/" className="auth-back-link">
            ← Volver al sitio
          </Link>
        </div>
      </div>
      <main className="auth-page">{children}</main>
    </div>
  );
}
