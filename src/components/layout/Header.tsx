import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/img/logo.png';

const NAV_LINKS = [
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#centro', label: 'Centro de Entrenamiento' },
  { href: '/#certificaciones', label: 'Certificaciones' },
  { href: '/#cursos', label: 'Cursos' },
  { href: '/#instructores', label: 'Instructores' },
];

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function closeMenu() {
    setIsOpen(false);
  }

  function handleLoginClick() {
    closeMenu();
    navigate(isAuthenticated ? '/admin' : '/login');
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Training OTEC Proyect" className="brand-logo" />
        </Link>

        <nav className={`main-nav${isOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Link to="/galeria" className="nav-link" onClick={closeMenu}>
            Galería
          </Link>
          <a href="/#contacto" className="nav-link nav-cta" onClick={closeMenu}>
            Contáctanos
          </a>
          <button
            type="button"
            className={`nav-link nav-login${isAuthenticated ? ' is-logged-in' : ''}`}
            onClick={handleLoginClick}
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M15 12a4 4 0 1 0-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M3 21c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>{isAuthenticated ? 'Panel' : 'Iniciar sesión'}</span>
          </button>
        </nav>

        <button
          className={`nav-toggle${isOpen ? ' is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
