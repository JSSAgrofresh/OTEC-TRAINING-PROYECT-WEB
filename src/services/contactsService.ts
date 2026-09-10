import { notifyStorageChange, readItem, writeItem } from './storage';
import type { ContactFormInput, ContactRecord } from '../types/contact';

const CONTACTS_KEY = 'otec_contacts';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function generateId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getContacts(): ContactRecord[] {
  return readItem<ContactRecord[]>(CONTACTS_KEY, []);
}

export interface AddContactResult {
  ok: boolean;
  error?: string;
  record?: ContactRecord;
}

/**
 * Valida y guarda un contacto. Si en el futuro esto se conecta a un backend
 * real, esta es la única función que hay que cambiar (por un POST a la API);
 * el formulario y el panel de administración no necesitan tocarse.
 */
export function addContact(input: ContactFormInput): AddContactResult {
  // Honeypot: los bots rellenan este campo oculto. Fingimos éxito sin guardar nada.
  if (input.website) {
    return { ok: true };
  }

  const nombre = input.nombre?.trim();
  const email = input.email?.trim();
  const mensaje = input.mensaje?.trim();

  if (!nombre || !email || !mensaje) {
    return { ok: false, error: 'Nombre, correo y mensaje son obligatorios.' };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: 'El correo no parece válido.' };
  }

  const record: ContactRecord = {
    id: generateId(),
    nombre: nombre.slice(0, 200),
    email: email.slice(0, 200),
    telefono: input.telefono?.trim().slice(0, 60) ?? '',
    empresa: input.empresa?.trim().slice(0, 200) ?? '',
    mensaje: mensaje.slice(0, 2000),
    timestamp: new Date().toISOString(),
  };

  const contacts = getContacts();
  contacts.push(record);
  writeItem(CONTACTS_KEY, contacts);
  notifyStorageChange(CONTACTS_KEY);

  return { ok: true, record };
}

export { CONTACTS_KEY };
