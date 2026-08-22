import { useScrollReveal } from '../../hooks/useScrollReveal';

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4 40 12v10c0 12-7 20-16 22-9-2-16-10-16-22V12L24 4Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M17 24l5 5 10-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Torres de entrenamiento en altura física',
    text: 'Estructuras de andamiaje multidireccional donde los trabajadores aprenden a controlar los riesgos reales que tendrán en faena.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 44s16-9.5 16-22V10l-16-6-16 6v12c0 12.5 16 22 16 22Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M24 16v10M24 30h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Zona cardio-protegida DEA',
    text: 'Estación de emergencias con desfibrilador externo automático, camilla de rescate, kit de férulas y algoritmo de cadena de supervivencia, integrada a nuestro plan de emergencia y evacuación.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.4" />
        <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Personal certificado en primeros auxilios',
    text: 'Todo el personal de OTEC Training Proyect está certificado en primeros socorros, RCP y uso de DEA por ACES AIDER Canadá — entrenados para responder, no solo para enseñar a responder.',
  },
];

function FeatureCard({ feature, delay }: { feature: (typeof FEATURES)[number]; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div className="feature-card reveal" data-reveal ref={ref}>
      <div className="feature-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
}

export default function TrainingCenterSection() {
  const headRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section section-dark" id="centro">
      <div className="container">
        <div className="section-head center reveal" data-reveal ref={headRef}>
          <p className="section-kicker">Nuestro centro de entrenamiento</p>
          <h2 className="section-title">Un centro construido para entrenar en condiciones reales</h2>
          <p className="section-sub">
            Centro de Entrenamiento y Capacitación Minera OTEC Training Proyect SpA
            <br />
            Calle 1 Sur #899, Villa Exótica, Calama
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
