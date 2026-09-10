/**
 * Abstracción genérica sobre localStorage.
 *
 * Toda la "base de datos" del sitio (sesión de administrador, registro de
 * contactos) pasa por aquí. El día que exista un backend real, solo hay que
 * reescribir estas tres funciones (por ejemplo, para que llamen a `fetch`)
 * y el resto de la app —hooks, páginas, componentes— no cambia una línea.
 */

export function readItem<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage lleno o no disponible (modo privado, etc.): se ignora
    // silenciosamente, la app sigue funcionando con el estado en memoria.
  }
}

export function removeItem(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ver nota en writeItem
  }
}

/** Nombre del evento custom que emitimos tras cada escritura, para que
 * distintas partes de la misma pestaña puedan reaccionar sin recargar. */
export const STORAGE_CHANGE_EVENT = 'otec:storage-change';

export function notifyStorageChange(key: string): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(STORAGE_CHANGE_EVENT, { detail: { key } }));
}
