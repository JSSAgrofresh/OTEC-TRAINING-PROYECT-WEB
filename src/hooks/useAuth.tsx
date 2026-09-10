import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import * as authService from '../services/authService';
import { STORAGE_CHANGE_EVENT } from '../services/storage';
import type { AuthUser, LoginResult } from '../types/auth';

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => LoginResult;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => authService.getSession()?.user ?? null);

  const refresh = useCallback(() => {
    setUser(authService.getSession()?.user ?? null);
  }, []);

  useEffect(() => {
    // Reacciona a cambios en otras pestañas (evento nativo `storage`)
    // y en la misma pestaña (evento custom que emite authService).
    window.addEventListener('storage', refresh);
    window.addEventListener(STORAGE_CHANGE_EVENT, refresh as EventListener);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener(STORAGE_CHANGE_EVENT, refresh as EventListener);
    };
  }, [refresh]);

  const login = useCallback((email: string, password: string) => {
    const result = authService.login(email, password);
    if (result.ok) refresh();
    return result;
  }, [refresh]);

  const logout = useCallback(() => {
    authService.logout();
    refresh();
  }, [refresh]);

  const value: AuthContextValue = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
