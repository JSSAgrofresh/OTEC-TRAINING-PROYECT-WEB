import { useMemo, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CODELCO_RF, DIRECT_COURSES, SENCE_COURSES } from '../../data/courses';
import type { CourseTabId } from '../../types/course';

const TABS: { id: CourseTabId; label: string; count: number }[] = [
  { id: 'sence', label: 'Cursos SENCE', count: SENCE_COURSES.length },
  { id: 'directos', label: 'Cursos Directos', count: DIRECT_COURSES.length },
  { id: 'codelco', label: 'Matriz de Fatalidad CODELCO', count: 31 },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<CourseTabId>('sence');
  const [searchTerm, setSearchTerm] = useState('');

  const headRef = useScrollReveal<HTMLDivElement>();
  const searchRef = useScrollReveal<HTMLDivElement>();
  const tabsRef = useScrollReveal<HTMLDivElement>(1);

  const term = searchTerm.trim().toLowerCase();

  const filteredSence = useMemo(
    () => SENCE_COURSES.filter((c) => !term || c.nombre.toLowerCase().includes(term)),
    [term]
  );
  const filteredDirect = useMemo(
    () => DIRECT_COURSES.filter((c) => !term || c.nombre.toLowerCase().includes(term)),
    [term]
  );
  const filteredRF = useMemo(
    () => CODELCO_RF.filter((r) => !term || `${r.codigo} ${r.nombre}`.toLowerCase().includes(term)),
    [term]
  );

  const activeCount =
    activeTab === 'sence' ? filteredSence.length : activeTab === 'directos' ? filteredDirect.length : filteredRF.length;

  return (
    <section className="section section-dark" id="cursos">
      <div className="container">
        <div className="section-head center reveal" data-reveal ref={headRef}>
          <p className="section-kicker">Nuestros cursos</p>
          <h2 className="section-title">Del código SENCE a la faena real</h2>
          <p className="section-sub">
            Formación presencial, e-learning y directa — dictada por ingenieros certificados en
            EE.UU. bajo criterios ANSI/ASSE Z359 y 29 CFR OSHA 1910/1926.
          </p>
        </div>

        <div className="course-search reveal" data-reveal ref={searchRef}>
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Busca un curso: altura física, izaje, sílice, incendio…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="tabs reveal" data-reveal ref={tabsRef}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-btn${activeTab === tab.id ? ' is-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label} <span>{tab.count}</span>
            </button>
          ))}
        </div>

        {activeCount === 0 && <p className="course-empty">No encontramos cursos que coincidan con tu búsqueda.</p>}

        <div className={`tab-panel${activeTab === 'sence' ? ' is-active' : ''}`}>
          <p className="panel-note">
            Cursos presenciales con código SENCE vigente, asociados a Reglas Fundamentales (RF) de
            la industria minera.
          </p>
          <div className="course-table">
            <div className="course-row course-row--head">
              <span>Curso</span>
              <span>Código SENCE</span>
              <span>Horas</span>
            </div>
            {filteredSence.map((c, i) => (
              <div className="course-row" key={`${c.codigoSence}-${i}`}>
                <span>{c.nombre}</span>
                <span className="course-code">{c.codigoSence}</span>
                <span className="course-hours">{c.horas} h</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`tab-panel${activeTab === 'directos' ? ' is-active' : ''}`}>
          <p className="panel-note">
            Cursos directos sin código SENCE, para requerimientos específicos de protocolos
            MINSAL, gestión y liderazgo.
          </p>
          <div className="course-table">
            <div className="course-row course-row--head">
              <span>Curso</span>
              <span></span>
              <span>Horas</span>
            </div>
            {filteredDirect.map((c) => (
              <div className="course-row" key={c.nombre}>
                <span>{c.nombre}</span>
                <span></span>
                <span className="course-hours">{c.horas} h</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`tab-panel${activeTab === 'codelco' ? ' is-active' : ''}`}>
          <p className="panel-note">
            Metodología Bowtie: 31 riesgos de fatalidad definidos por CODELCO Chile, cada uno con
            su curso presencial específico. Cobertura completa de la matriz — pocas OTEC pueden
            mostrar esto.
          </p>
          <div className="rf-grid">
            {filteredRF.map((r, i) => (
              <div className="rf-card" key={`${r.codigo}-${i}`}>
                <span className="rf-num">{r.codigo}</span>
                <span>
                  <span className="rf-name">{r.nombre}</span>
                  <span className="rf-hours">{r.horas} horas</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
