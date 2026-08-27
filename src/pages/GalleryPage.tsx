import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_PHOTOS } from '../data/gallery';

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);
  const previous = useCallback(
    () => setOpenIndex((index) => (index === null ? null : (index - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((index) => (index === null ? null : (index + 1) % GALLERY_PHOTOS.length)),
    [],
  );

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (openIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [openIndex, close, previous, next]);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="container gallery-hero-inner">
          <Link className="gallery-back" to="/">← Volver al inicio</Link>
          <p className="section-kicker">Galería de fotos</p>
          <h1>Entrenamiento en condiciones reales</h1>
          <p>Instalaciones, equipos y actividades prácticas registradas durante nuestros cursos de capacitación en Calama.</p>
          <span className="gallery-count">{GALLERY_PHOTOS.length} fotografías</span>
        </div>
      </section>

      <section className="gallery-collection" aria-label="Colección fotográfica">
        <div className="container gallery-page-grid">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              type="button"
              className="gallery-page-item"
              key={photo.src}
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar fotografía ${index + 1} de ${GALLERY_PHOTOS.length}`}
            >
              <img src={photo.src} alt={photo.alt} loading={index < 8 ? 'eager' : 'lazy'} />
              <span aria-hidden="true">Ampliar</span>
            </button>
          ))}
        </div>
      </section>

      {openIndex !== null && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Visor de fotografías" onClick={close}>
          <button className="modal-close" type="button" aria-label="Cerrar visor" onClick={close}>&times;</button>
          <button className="lightbox-nav lightbox-nav--prev" type="button" aria-label="Fotografía anterior" onClick={(event) => { event.stopPropagation(); previous(); }}>&#8249;</button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img className="lightbox-img" src={GALLERY_PHOTOS[openIndex].src} alt={GALLERY_PHOTOS[openIndex].alt} />
            <figcaption>{openIndex + 1} / {GALLERY_PHOTOS.length}</figcaption>
          </figure>
          <button className="lightbox-nav lightbox-nav--next" type="button" aria-label="Fotografía siguiente" onClick={(event) => { event.stopPropagation(); next(); }}>&#8250;</button>
        </div>
      )}
    </main>
  );
}
