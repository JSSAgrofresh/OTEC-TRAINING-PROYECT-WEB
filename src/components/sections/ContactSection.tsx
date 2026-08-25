import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { addContact } from '../../services/contactsService';
import type { ContactFormInput } from '../../types/contact';
import { OTEC_MAPS_URL } from '../../utils/location';

export default function ContactSection() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const input: ContactFormInput = {
      nombre: String(data.get('nombre') ?? ''),
      email: String(data.get('email') ?? ''),
      telefono: String(data.get('telefono') ?? ''),
      empresa: String(data.get('empresa') ?? ''),
      mensaje: String(data.get('mensaje') ?? ''),
      website: String(data.get('website') ?? ''),
    };

    setSubmitting(true);
    const result = addContact(input);
    setSubmitting(false);

    if (result.ok) {
      setStatus({ ok: true, message: '¡Gracias! Recibimos tu solicitud y te contactaremos pronto.' });
      form.reset();
    } else {
      setStatus({ ok: false, message: result.error ?? 'No pudimos enviar tu solicitud. Intenta de nuevo.' });
    }
  }

  return (
    <section className="section cta-section" id="contacto">
      <div className="cta-bg"></div>
      <div className="container cta-content reveal" data-reveal ref={contentRef}>
        <p className="section-kicker">Hablemos</p>
        <h2 className="section-title">Tu próxima capacitación puede empezar esta semana</h2>
        <p className="section-sub">
          Cuéntanos qué riesgos necesitas cubrir y armamos un plan de formación a la medida de tu
          faena &mdash; presencial o directo en terreno.
        </p>

        <div className="contact-grid">
          <a className="contact-card" href="mailto:operaciones@trainingproyect.cl">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <span>Escríbenos</span>
              <strong>operaciones@trainingproyect.cl</strong>
            </div>
          </a>

          <a className="contact-card" href="tel:+56952075243">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h4l2 5-2.5 2.5a14 14 0 0 0 6 6L16 15l5 2v4a2 2 0 0 1-2 2C10.5 23 1 13.5 1 4a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <span>Llámanos</span>
              <strong>+56 9 5207 5243</strong>
            </div>
          </a>

          <a className="contact-card" href={OTEC_MAPS_URL} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22s8-7.4 8-13a8 8 0 1 0-16 0c0 5.6 8 13 8 13Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div>
              <span>Visítanos</span>
              <strong>Calle 1 Sur #899, Villa Exótica, Calama</strong>
            </div>
          </a>
        </div>

        <a href="https://www.trainingproyect.cl" target="_blank" rel="noopener" className="btn btn-primary btn-lg">
          Visitar www.trainingproyect.cl
        </a>

        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <h3>O déjanos tus datos y te contactamos nosotros</h3>
          <div className="contact-form-grid">
            <input type="text" name="nombre" placeholder="Nombre completo" required />
            <input type="email" name="email" placeholder="Correo electrónico" required />
            <input type="tel" name="telefono" placeholder="Teléfono (opcional)" />
            <input type="text" name="empresa" placeholder="Empresa (opcional)" />
          </div>
          <textarea name="mensaje" placeholder="Cuéntanos qué necesitas capacitar…" rows={3} required />
          <input
            type="text"
            name="website"
            className="contact-form-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Enviando…' : 'Enviar solicitud'}
          </button>
          {status && (
            <p className={`contact-form-status${status.ok ? ' is-ok' : ' is-error'}`} role="status">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
