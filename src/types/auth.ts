export interface AuthUser {
  email: string;
}

export interface AuthSession {
  user: AuthUser;
  /** epoch ms */
  expiresAt: number;
}

export interface LoginResult {
  ok: boolean;
  error?: string;
}
