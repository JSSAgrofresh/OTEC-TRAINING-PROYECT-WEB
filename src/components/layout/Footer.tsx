import logo from '../../assets/img/logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <img src={logo} alt="Training OTEC Proyect" className="footer-logo" />
        <p>OTEC Training Proyect SpA &middot; Centro de Entrenamiento y Capacitación Minera &middot; Calama, Chile</p>
        <p className="footer-fine">&copy; {new Date().getFullYear()} OTEC Training Proyect SpA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
