import { useCallback, useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import torreEquipo from '../../assets/img/equipo-6.jpg';
import rescateDetalle from '../../assets/img/equipo-4.jpg';
import equipoCloseup from '../../assets/img/equipo-3.jpg';
import izajeRescate from '../../assets/img/izaje-rescate-1.jpg';
import extintores from '../../assets/img/extintores.jpg';
import proyectoMujeres from '../../assets/img/proyecto-mujeres.jpg';
import equipoTorre from '../../assets/img/equipo-7.jpg';
import equipoGrupo from '../../assets/img/equipo-2.jpg';
import izajeRescate2 from '../../assets/img/izaje-rescate-2.jpg';

const PHOTOS = [
  { src: torreEquipo, alt: 'Equipo entrenando en la torre de altura física' },
  { src: rescateDetalle, alt: 'Detalle de equipo de rescate en altura' },
  { src: equipoCloseup, alt: 'Instructor revisando equipo de anclaje junto a un grupo de alumnos' },
  { src: izajeRescate, alt: 'Maniobra de izaje y rescate en altura' },
  { src: extintores, alt: 'Práctica de uso de extintores portátiles' },
  { src: proyectoMujeres, alt: 'Participantes del programa de formación para mujeres en la industria minera' },
  { src: equipoTorre, alt: 'Grupo de alumnos en la torre, con vista a Calama de fondo' },
  { src: equipoGrupo, alt: 'Grupo de alumnos al finalizar un curso' },
  { src: izajeRescate2, alt: 'Maniobra de rescate en altura, vista desde la torre' },
];

function GalleryTile({ photo, index, delay, onOpen }: { photo: (typeof PHOTOS)[number]; index: number; delay: number; onOpen: (i: number) => void }) {
  const ref = useScrollReveal<HTMLButtonElement>(delay);
  return (
    <button type="button" className="gallery-item reveal" data-reveal ref={ref} onClick={() => onOpen(index)}>
      <img src={photo.src} alt={photo.alt} loading="lazy" />
    </button>
  );
}

export default function GallerySection() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)), []);
  const next = useCallback(() => setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)), []);

  useEffect(() => {
    if (openIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIndex, close, prev, next]);

  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className="section-head center reveal" data-reveal ref={headRef}>
          <p className="section-kicker">En terreno</p>
          <h2 className="section-title">Así se ve un curso de OTEC Training Proyect</h2>
          <p className="section-sub">
            Fotos reales de nuestras torres de entrenamiento, prácticas de rescate y cursos
            dictados en Calama — sin sets ni fotos de stock.
          </p>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <GalleryTile key={photo.src} photo={photo} index={i} delay={(i % 3) + 1} onOpen={setOpenIndex} />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Galería de fotos" onClick={close}>
          <button className="modal-close" type="button" aria-label="Cerrar" onClick={close}>
            &times;
          </button>
          <button
            className="lightbox-nav lightbox-nav--prev"
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            &#8249;
          </button>
          <img
            className="lightbox-img"
            src={PHOTOS[openIndex].src}
            alt={PHOTOS[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-nav--next"
            type="button"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
