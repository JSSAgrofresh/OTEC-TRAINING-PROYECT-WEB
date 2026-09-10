export interface ContactFormInput {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  mensaje: string;
  /** Campo honeypot: si viene con contenido, es un bot. */
  website?: string;
}

export interface ContactRecord {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  mensaje: string;
  /** ISO 8601, para poder ordenar/mostrar fecha y hora de forma confiable. */
  timestamp: string;
}
