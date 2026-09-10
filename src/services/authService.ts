import { notifyStorageChange, readItem, removeItem, writeItem } from './storage';
import type { AuthSession, LoginResult } from '../types/auth';

const SESSION_KEY = 'otec_auth_session';
const SESSION_DURATION_MS = 12 * 60 * 60 * 1000; // 12 horas

// Credenciales de administrador para esta etapa (sin backend).
//
// LIMITACIÓN IMPORTANTE: como esta app corre 100% en el navegador y el
// repositorio es público, estas credenciales son visibles para cualquiera
// que revise el código fuente — este login protege la UI del panel, pero no
// es seguridad real. Cuando exista un backend, este archivo es el único que
// debe cambiar: en vez de comparar aquí, `login()` debería llamar a una API
// que valide la contraseña del lado del servidor y devuelva un token.
const ADMIN_EMAIL = 'tucascarla@gmail.com';
const ADMIN_PASSWORD = 'otec2026';

export function login(email: string, password: string): LoginResult {
  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail !== ADMIN_EMAIL.toLowerCase() || password !== ADMIN_PASSWORD) {
    return { ok: false, error: 'Correo o contraseña incorrectos.' };
  }

  const session: AuthSession = {
    user: { email: ADMIN_EMAIL },
    expiresAt: Date.now() + SESSION_DURATION_MS,
  };
  writeItem(SESSION_KEY, session);
  notifyStorageChange(SESSION_KEY);
  return { ok: true };
}

export function logout(): void {
  removeItem(SESSION_KEY);
  notifyStorageChange(SESSION_KEY);
}

export function getSession(): AuthSession | null {
  const session = readItem<AuthSession | null>(SESSION_KEY, null);
  if (!session) return null;
  if (Date.now() > session.expiresAt) {
    removeItem(SESSION_KEY);
    return null;
  }
  return session;
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

export { SESSION_KEY };
