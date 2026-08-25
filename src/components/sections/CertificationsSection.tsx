import { useScrollReveal } from '../../hooks/useScrollReveal';

const CERTS = [
  {
    tag: 'Única en Chile',
    title: 'Licencia ANSI/ASSP Z359 — Protección Contra Caídas',
    text: 'En agosto de 2024, OTEC Training Proyect SpA obtuvo la licencia de Protección Contra Caídas ANSI Z359, otorgada por la American Society of Safety Professionals (ASSP), certificando a sus instructores como los únicos en Chile con esta acreditación.',
    highlight: true,
  },
  {
    tag: 'Desde 2014',
    title: 'Acreditados por CODELCO Corporativo',
    text: 'Entre 2014 y 2020 impartimos directamente a CODELCO Distrito Norte programas de capacitación en Seguridad y Salud Ocupacional — Trabajos en Altura Física, Espacios Confinados y Andamios Multidireccionales, entre otros. Desde 2014 hasta hoy seguimos entregando apoyo técnico permanente en el levantamiento y verificación de controles de trabajos en altura física, con continuidad operativa vigente para 2026.',
  },
  {
    tag: 'Estados Unidos',
    title: 'Auditoría 29 CFR OSHA 1910',
    text: 'Profesionales de nuestro staff cuentan con certificación de auditor 29 CFR OSHA 1910, obtenida en Carolina del Norte, EE.UU. — el mismo marco regulatorio bajo el que se forman nuestros instructores.',
  },
  {
    tag: 'Chile',
    title: 'Instructores certificados por Chile Valora',
    text: 'Nuestro cuerpo de relatores está certificado por Chile Valora, la Comisión del Sistema Nacional de Certificación de Competencias Laborales, que valida formalmente la idoneidad técnica de quienes forman a sus equipos.',
  },
];

function CertCard({ cert, delay }: { cert: (typeof CERTS)[number]; delay: number }) {
  const ref = useScrollReveal<HTMLElement>(delay);
  return (
    <article
      className={`cert-card${cert.highlight ? ' cert-card--highlight' : ''} reveal`}
      data-reveal
      ref={ref}
    >
      <span className="cert-tag">{cert.tag}</span>
      <h3>{cert.title}</h3>
      <p>{cert.text}</p>
    </article>
  );
}

export default function CertificationsSection() {
  const headRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="certificaciones">
      <div className="container">
        <div className="section-head center reveal" data-reveal ref={headRef}>
          <p className="section-kicker">Acreditaciones y certificaciones</p>
          <h2 className="section-title">Credenciales que no cualquier OTEC puede mostrar</h2>
          <p className="section-sub">
            La seguridad no se improvisa ni se autoproclama: se certifica. Estas son las
            acreditaciones que respaldan cada curso que dictamos.
          </p>
        </div>

        <div className="cert-grid">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
