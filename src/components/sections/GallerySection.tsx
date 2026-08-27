import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { GALLERY_PHOTOS } from '../../data/gallery';

const FEATURED_PHOTOS = GALLERY_PHOTOS.slice(0, 6);

export default function GallerySection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section gallery-preview" id="galeria">
      <div className="container">
        <div className="gallery-preview-layout reveal" data-reveal ref={sectionRef}>
          <div className="gallery-preview-copy">
            <p className="section-kicker">En terreno</p>
            <h2 className="section-title">Experiencia real, formación que se demuestra</h2>
            <p className="section-sub">
              Conoce nuestras instalaciones, prácticas y equipos en una selección de fotografías reales
              de cursos realizados en Calama.
            </p>
            <Link className="btn btn-primary" to="/galeria">
              Ver galería completa <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="gallery-preview-mosaic" aria-label="Adelanto de la galería de fotos">
            {FEATURED_PHOTOS.map((photo, index) => (
              <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" className={`preview-photo preview-photo--${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
