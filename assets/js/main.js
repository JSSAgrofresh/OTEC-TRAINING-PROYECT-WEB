// ============================================================
// OTEC Training Proyect SpA — interacciones del sitio
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Course data (from institutional presentation) ---------- */
const SENCE_COURSES = [
  ['Técnicas para Supervisión de Trabajos en Altura Física / Pérdida de Equilibrio RF N°2', '1238063852', 16],
  ['Técnicas para Ejecución Segura de Trabajos en Altura Física / Pérdida de Equilibrio RF N°2', '1238063854', 8],
  ['Técnicas para Interacción de Trabajos en Espacios Confinados / RF N°11', '1238063856', 8],
  ['Técnicas para el Montaje, Desmontaje y Uso de Andamios Multidireccionales / RF N°2', '1238039585', 16],
  ['Técnicas para el Montaje, Desmontaje y Uso de Andamios Multidireccionales', '1238063855', 8],
  ['Técnicas para Manejo, Almacenamiento y Transporte Seguro de Sustancias Peligrosas / RF N°7', '1238063861', 8],
  ['Técnicas para Control de Cargas en Tareas de Izaje. En Baja / RF N°3', '1238063865', 16],
  ['Técnicas para el Control y Manejo de Cargas Mineras. En Baja Re-Instrucción / RF N°3', '1238063869', 8],
  ['Técnicas para Tareas de Izaje de Cargas Pesadas. En Media Re-Instrucción / RF N°3', '1238063872', 8],
  ['Técnicas para la Planificación de Cargas de Alto Tonelaje. En Alta Re-Instrucción / RF N°3', '1238063874', 8],
  ['Técnicas de Izaje y Control de Carga para Rigger en Baja / RF N°3', '1238088619', 40],
  ['Técnicas de Izaje y Control de Carga para Rigger en Baja / RF N°3', '1238085344', 160],
  ['Técnicas de Izaje y Control de Carga para Rigger en Baja / Precontrato / RF N°3', '1238085323', 160],
  ['Técnicas de Seguridad para el Manejo de Cargas con Puente Grúa / RF N°3', '1238072490', 8],
  ['Técnicas de Seguridad para el Manejo de Cargas con Puente Grúa / RF N°3', '1238075989', 16],
  ['Técnicas de Seguridad para el Manejo de Cargas con Puente Grúa / RF N°3', '1238088955', 32],
  ['Técnicas para el Control de Energías Peligrosas: Bloqueo y Etiquetado / RF N°1 y 4', '1238086897', 8],
  ['Técnicas de Ejecución para el Control de Riesgos Eléctricos NFPA 70E / RF N°1', '1238085607', 8],
  ['Técnicas para la Ejecución de Primeros Auxilios', '1238086890', 8],
  ['Técnicas para el Uso y Manejo de Extintores Portátiles / RF N°6', '1238087809', 8],
  ['Técnicas de Primeros Auxilios y Uso de Extintores / RF N°6', '1238087809', 8],
  ['Técnicas de Conducción Segura en Vehículos 4x2 y 4x4 / RF N°10', '1238034935', 8],
  ['Manejo Seguro de Herramientas Críticas', '1238092096', 8],
  ['Aplicación de Metodología de Análisis Causal de Incidentes Operacionales (ICAM)', '1238093663', 8],
];

const DIRECT_COURSES = [
  ['Técnicas de Ejecución para el Manejo y Aplicación de los Protocolos MINSAL', 8],
  ['Protocolo Manejo Manual de Cargas D.S. N°63 / Ley N°20.949', 8],
  ['Protocolo de Vigilancia de Trabajadores Expuestos a Sílice (PLANESI)', 8],
  ['Protocolo de Exposición Ocupacional al Ruido (PREXOR)', 8],
  ['Protocolo de Vigilancia de Riesgos Psicosociales', 8],
  ['Protocolo Exposición Ocupacional a Radiación Ultravioleta de Origen Solar (RUV)', 8],
  ['Técnicas para la Gestión y Responsabilidad de Comités Paritarios de Higiene y Seguridad', 8],
  ['Curso Básico de Prevención de Riesgos', 40],
  ['Curso Básico Introducción a la Prevención de Riesgos', 8],
  ['Técnicas para el Uso y Manejo de Herramientas', 8],
  ['Técnicas Legislativas para la Instalación de Puntos de Anclaje para Trabajos en Altura Física', 40],
  ['Técnicas para el Uso de Detectores de Gases Portátiles', 8],
  ['Técnicas para la Identificación de Peligros y Evaluación de Riesgos en el Trabajo', 8],
  ['Técnicas para la Gestión y Aplicación de la Norma NFPA 25', 8],
  ['Técnicas para la Aplicación y Elementos Esenciales de la Ley N°16.744', 8],
  ['Liderazgo y Trabajo en Equipo', 8],
  ['Técnicas para la Orientación al Cambio y Desarrollo de Personas', 8],
  ['Responsabilidad Civil y Penal frente a Accidentes y Enfermedades Profesionales', 8],
];

const CODELCO_RF = [
  ['RF1', 'Energía Eléctrica', 16],
  ['RF2', 'Trabajo en Altura Física — Nivel Operadores', 8],
  ['RF2', 'Trabajo en Altura Física — Nivel Supervisores', 16],
  ['RF3', 'Maniobra de Izaje — Re-Instrucción Baja/Media/Alta', 8],
  ['RF3', 'Maniobra de Izaje — Re-Instrucción Baja/Media/Alta', 16],
  ['RF3', 'Maniobra de Izaje — Instrucción Baja/Media/Alta', 40],
  ['RF3', 'Maniobra de Izaje — Instrucción Baja/Media/Alta', 160],
  ['RF3', 'Maniobra de Izaje — Puente Grúa', 32],
  ['RF4', 'Liberación Descontrolada de Energías', 8],
  ['RF5', 'Caída de Rocas en Mina Rajo', 8],
  ['RF6', 'Incendio', 8],
  ['RF7', 'Sustancias Peligrosas', 8],
  ['RF8', 'Tronaduras y Explosivos', 8],
  ['RF9', 'Partes Móviles', 8],
  ['RF10', 'Vehículos', 8],
  ['RF11', 'Espacios Confinados', 8],
  ['RF12', 'Materiales Fundidos', 8],
  ['RF13', 'Caídas de Objetos', 8],
  ['RF14', 'Operación Ferroviaria', 8],
  ['RF15', 'Avalancha y Aludes', 8],
  ['RF16', 'Vaciados, Chimeneas y Piques', 8],
  ['RF17', 'Material Húmedo', 8],
  ['RF18', 'Planchoneo', 8],
  ['RF19', 'Estallido de Roca', 8],
  ['RF20', 'Sílice', 8],
  ['RF21', 'Arsénico', 8],
  ['RF22', 'Colapso Estructural de Pasillos, Pisos y Barandas', 8],
  ['RF23', 'Colapso Estructural del Macizo Rocoso', 8],
  ['RF24', 'Taludes', 8],
  ['RF25', 'Equipos Mineros e Industriales', 8],
  ['RF26', 'Equipos Autónomos', 8],
  ['RF27', 'Atropello', 8],
  ['RF28', 'Caving', 8],
  ['RF29', 'Caída a Cuerpos Líquidos', 8],
  ['RF30', 'Tiro y Arrastre', 8],
  ['RF31', 'Incendio de Equipos Mineros e Industriales', 8],
];

/* ---------- render tables ---------- */
function renderCourseTable(panelSelector, rows, withCode) {
  const table = document.querySelector(panelSelector + ' .course-table');
  rows.forEach(([name, code, hours]) => {
    const row = document.createElement('div');
    row.className = 'course-row';
    row.dataset.search = name.toLowerCase();
    row.innerHTML = withCode
      ? `<span>${name}</span><span class="course-code">${code}</span><span class="course-hours">${hours} h</span>`
      : `<span>${name}</span><span></span><span class="course-hours">${hours} h</span>`;
    table.appendChild(row);
  });
}
renderCourseTable('[data-panel="sence"]', SENCE_COURSES, true);
renderCourseTable('[data-panel="directos"]', DIRECT_COURSES.map(([n, h]) => [n, '', h]), false);

const rfGrid = document.getElementById('rfGrid');
CODELCO_RF.forEach(([code, name, hours]) => {
  const card = document.createElement('div');
  card.className = 'rf-card';
  card.dataset.search = (code + ' ' + name).toLowerCase();
  card.innerHTML = `
    <span class="rf-num">${code}</span>
    <span>
      <span class="rf-name">${name}</span>
      <span class="rf-hours">${hours} horas</span>
    </span>`;
  rfGrid.appendChild(card);
});

/* ---------- tabs ---------- */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => b.classList.remove('is-active'));
    tabPanels.forEach((p) => p.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('is-active');
    applySearch();
  });
});

/* ---------- course search (filters active tab only) ---------- */
const searchInput = document.getElementById('courseSearch');
const emptyState = document.getElementById('courseEmpty');

function applySearch() {
  const term = searchInput.value.trim().toLowerCase();
  const activePanel = document.querySelector('.tab-panel.is-active');
  const items = activePanel.querySelectorAll('[data-search]');
  let visibleCount = 0;
  items.forEach((item) => {
    const match = !term || item.dataset.search.includes(term);
    item.classList.toggle('is-hidden', !match);
    if (match) visibleCount++;
  });
  emptyState.hidden = visibleCount !== 0;
}
searchInput.addEventListener('input', applySearch);

/* ---------- header scroll state ---------- */
const header = document.getElementById('siteHeader');
const progressBar = document.getElementById('progressBar');
const toTopBtn = document.getElementById('toTop');

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 40);
  toTopBtn.classList.toggle('is-visible', y > 700);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- mobile nav ---------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
  })
);

/* ---------- scroll reveal ---------- */
const revealEls = document.querySelectorAll('[data-reveal]');
revealEls.forEach((el) => {
  const delay = el.getAttribute('data-reveal-delay');
  if (delay) el.style.setProperty('--d', delay);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- animated counters ---------- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const isYear = target > 100 && target < 3000 && el.dataset.target.length === 4;
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = isYear
      ? Math.round(target - (1 - eased) * 40)
      : Math.round(target * eased);
    el.textContent = value;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));
