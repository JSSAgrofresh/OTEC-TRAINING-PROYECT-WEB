import { useState, type FormEvent } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    const from = (location.state as { from?: { pathname?: string } } | null)?.from;
    return <Navigate to={from?.pathname ?? '/admin'} replace />;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') ?? '');
    const password = String(data.get('password') ?? '');

    setSubmitting(true);
    const result = login(email, password);
    setSubmitting(false);

    if (result.ok) {
      navigate('/admin', { replace: true });
    } else {
      setStatus({ ok: false, message: result.error ?? 'No se pudo iniciar sesión.' });
    }
  }

  return (
    <div className="modal">
      <p className="section-kicker">Acceso privado</p>
      <h1 className="modal-title">Iniciar sesión</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo electrónico" required autoComplete="username" />
        <input type="password" name="password" placeholder="Contraseña" required autoComplete="current-password" />
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Entrando…' : 'Entrar'}
        </button>
        {status && (
          <p className={`modal-status${status.ok ? ' is-ok' : ' is-error'}`} role="status">
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
