import { useScrollReveal } from '../../hooks/useScrollReveal';
import heroImage from '../../assets/img/hero-altura-tower.jpg';

export default function Hero() {
  const eyebrowRef = useScrollReveal<HTMLParagraphElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>(1);
  const leadRef = useScrollReveal<HTMLParagraphElement>(2);
  const actionsRef = useScrollReveal<HTMLDivElement>(3);

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img
          src={heroImage}
          alt="Instructores de OTEC Training Proyect trabajando en altura física sobre torre de andamios"
          className="hero-img"
        />
        <div className="hero-swirl" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <p className="eyebrow reveal" data-reveal ref={eyebrowRef}>
          Organismo Técnico de Capacitación &middot; Calama, Chile
        </p>
        <h1 className="hero-title reveal" data-reveal ref={titleRef}>
          Formamos a quienes
          <br />
          <span className="text-accent">vuelven a casa todos los días.</span>
        </h1>
        <p className="hero-lead reveal" data-reveal ref={leadRef}>
          OTEC Training Proyect SpA es el centro de entrenamiento y capacitación minera que
          transforma protocolos de seguridad en habilidades reales, con instructores certificados
          en Estados Unidos y una licencia que hoy solo nosotros tenemos en toda Latinoamérica.
        </p>
        <div className="hero-actions reveal" data-reveal ref={actionsRef}>
          <a href="#cursos" className="btn btn-primary">
            Ver nuestros cursos
          </a>
          <a href="#contacto" className="btn btn-ghost">
            Hablar con un asesor
          </a>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}
