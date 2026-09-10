import logo from '../../assets/img/logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <img src={logo} alt="Training OTEC Proyect" className="footer-logo" />
        <p>
          OTEC Training Proyect SpA &middot; Centro de Entrenamiento y Capacitación Minera
          &middot; Calle 1 Sur #899, Villa Exótica, Calama
        </p>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/otec.training.proyect"
            target="_blank"
            rel="noopener"
            aria-label="Instagram de OTEC Training Proyect"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://cl.linkedin.com/in/otec-training-proyect-b0398a195"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn de OTEC Training Proyect"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-4a2 2 0 0 1 4 0v4M12 12.5v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <p className="footer-fine">&copy; {new Date().getFullYear()} OTEC Training Proyect SpA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
