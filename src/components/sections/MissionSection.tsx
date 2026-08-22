import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function MissionSection() {
  const mediaRef = useScrollReveal<HTMLDivElement>();
  const kickerRef = useScrollReveal<HTMLParagraphElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>(1);
  const body1Ref = useScrollReveal<HTMLParagraphElement>(2);
  const body2Ref = useScrollReveal<HTMLParagraphElement>(3);
  const listRef = useScrollReveal<HTMLUListElement>(4);

  return (
    <section className="section" id="nosotros">
      <div className="container split-layout">
        <div className="split-media reveal" data-reveal data-reveal-dir="left" ref={mediaRef}>
          <div className="media-frame media-frame--graphic">
            <div className="media-rings" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="media-quote">&ldquo;Salvar una vida tras la eliminación de los accidentes fatales.&rdquo;</p>
          </div>
          <div className="media-badge">
            <strong>Calama</strong>
            <span>Región de Antofagasta</span>
          </div>
        </div>

        <div className="split-text">
          <p className="section-kicker reveal" data-reveal ref={kickerRef}>
            Nuestra misión y visión
          </p>
          <h2 className="section-title reveal" data-reveal ref={titleRef}>
            Salvar una vida tras la eliminación de los accidentes fatales.
          </h2>
          <p className="body-text reveal" data-reveal ref={body1Ref}>
            Esa frase no es un eslogan: es el criterio con el que diseñamos cada curso. TRAINING
            PROYECT nació con el propósito de entregar los más altos estándares de enseñanza a
            través de formatos de capacitación aplicados en Estados Unidos, que incorporan
            directamente la normativa legal en seguridad, salud ocupacional e higiene industrial
            vigente para la minería y la industria en Chile. El resultado es un cumplimiento
            fehaciente de los criterios de seguridad más exigentes en los procesos productivos de
            cada una de las empresas que confían en nosotros.
          </p>
          <p className="body-text reveal" data-reveal ref={body2Ref}>
            Pero formar competencias es solo la mitad del trabajo. Como Organismo Técnico de
            Capacitación (OTEC), también asesoramos en terreno a cada cliente que forma a su
            gente con nosotros: levantamientos para identificar peligros, evaluaciones y
            controles asociados bajo metodología IPER, entrega de informes técnicos legislativos
            y creación de procedimientos a la medida de cada faena. No dejamos que el aprendizaje
            se quede en la sala de clases.
          </p>

          <ul className="check-list reveal" data-reveal ref={listRef}>
            <li>Formato de enseñanza teórico&ndash;práctico, replicando condiciones reales de faena.</li>
            <li>Asesorías en terreno con levantamiento IPER y controles operacionales.</li>
            <li>Informes técnicos legislativos y procedimientos hechos a medida.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
