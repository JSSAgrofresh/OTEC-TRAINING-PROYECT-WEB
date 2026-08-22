import { useScrollReveal } from '../../hooks/useScrollReveal';
import heroFlags from '../../assets/img/hero-flags.jpg';

export default function InstructorsSection() {
  const mediaRef = useScrollReveal<HTMLDivElement>();
  const kickerRef = useScrollReveal<HTMLParagraphElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>(1);
  const body1Ref = useScrollReveal<HTMLParagraphElement>(2);
  const body2Ref = useScrollReveal<HTMLParagraphElement>(3);
  const badgeRef = useScrollReveal<HTMLDivElement>(4);

  return (
    <section className="section" id="instructores">
      <div className="container split-layout split-layout--reverse">
        <div className="split-media reveal" data-reveal data-reveal-dir="right" ref={mediaRef}>
          <div className="media-frame">
            <img
              src={heroFlags}
              alt="Instructores de OTEC Training Proyect en la torre de entrenamiento en altura física"
              loading="lazy"
            />
          </div>
        </div>

        <div className="split-text">
          <p className="section-kicker reveal" data-reveal ref={kickerRef}>
            Nuestros instructores
          </p>
          <h2 className="section-title reveal" data-reveal ref={titleRef}>
            30 profesionales que ya trabajaron donde tú trabajas.
          </h2>
          <p className="body-text reveal" data-reveal ref={body1Ref}>
            TRAINING PROYECT SpA ha consolidado un staff de más de 30 profesionales con
            experiencia comprobada: Ingenieros Civiles Industriales, Ingenieros Civiles en Minas,
            Ingenieros Civiles Eléctricos y Ejecución en Prevención de Riesgos &mdash; todos
            Expertos SERGEOMIN Clase &ldquo;A&rdquo; y &ldquo;B&rdquo;, además de profesionales
            de Salud Ocupacional e Higiene Industrial. En su mayoría, ex trabajadores de la
            industria minera de la región.
          </p>
          <p className="body-text reveal" data-reveal ref={body2Ref}>
            Nos preocupamos tanto de actualizar contenidos y legislación como de especializar a
            quienes los enseñan. Nuestros instructores se formaron en Estados Unidos bajo
            criterios ANSI/ASSE Z359 y 29 CFR OSHA 1910 y 1926, y están autorizados a dictar
            cursos en Trabajos en Altura Física, Espacios Confinados, Aislación y Bloqueo,
            Control de Riesgos Eléctricos, Andamios Multidireccionales y Manejo de Sustancias
            Peligrosas &mdash; todo bajo criterios reconocidos por la legislación chilena vigente.
          </p>

          <div className="badge-row reveal" data-reveal ref={badgeRef}>
            <span className="mini-badge">SERGEOMIN Clase A/B</span>
            <span className="mini-badge">ANSI/ASSE Z359</span>
            <span className="mini-badge">29 CFR OSHA 1910 &amp; 1926</span>
            <span className="mini-badge">Chile Valora</span>
          </div>
        </div>
      </div>
    </section>
  );
}
