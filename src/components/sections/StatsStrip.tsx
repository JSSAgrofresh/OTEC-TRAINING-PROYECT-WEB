import AnimatedCounter from '../ui/AnimatedCounter';

export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        <div className="stat">
          <span className="stat-number">
            <AnimatedCounter target={2014} isYear />
          </span>
          <span className="stat-label">Formando a la industria minera desde</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            <AnimatedCounter target={30} />+
          </span>
          <span className="stat-label">Profesionales certificados en nuestro staff</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            <AnimatedCounter target={31} />
          </span>
          <span className="stat-label">Riesgos de fatalidad cubiertos (Metodología Bowtie)</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            <AnimatedCounter target={1} />ª
          </span>
          <span className="stat-label">OTEC en Chile con licencia ANSI/ASSP Z359</span>
        </div>
      </div>
    </section>
  );
}
