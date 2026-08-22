import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useContacts } from '../hooks/useContacts';

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export default function AdminPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const contacts = useContacts();

  const sorted = useMemo(
    () => [...contacts].sort((a, b) => b.timestamp.localeCompare(a.timestamp)),
    [contacts]
  );

  const stats = useMemo(() => {
    const now = Date.now();
    const thisWeek = contacts.filter((c) => now - new Date(c.timestamp).getTime() <= WEEK_MS).length;
    const companies = new Set(
      contacts.map((c) => c.empresa.trim().toLowerCase()).filter((empresa) => empresa.length > 0)
    ).size;
    return { total: contacts.length, thisWeek, companies };
  }, [contacts]);

  function handleLogout() {
    logout();
    navigate('/', { replace: true });
  }

  return (
    <div className="modal modal--wide">
      <div className="modal-admin-head">
        <div>
          <p className="section-kicker">Panel privado</p>
          <h1 className="modal-title">Registro de contactos</h1>
        </div>
        <div className="modal-admin-actions">
          <span className="admin-live-badge">
            <span aria-hidden="true"></span>
            En vivo
          </span>
          <button className="btn btn-ghost btn-sm" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <span className="admin-stat-number">{stats.total}</span>
          <span className="admin-stat-label">Contactos totales</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-number">{stats.thisWeek}</span>
          <span className="admin-stat-label">En los últimos 7 días</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-number">{stats.companies}</span>
          <span className="admin-stat-label">Empresas distintas</span>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Empresa</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 && (
              <tr>
                <td colSpan={7} className="admin-table-empty">
                  Todavía no hay contactos registrados.
                </td>
              </tr>
            )}
            {sorted.map((contact) => {
              const date = new Date(contact.timestamp);
              return (
                <tr key={contact.id}>
                  <td>{date.toLocaleDateString('es-CL')}</td>
                  <td>{date.toLocaleTimeString('es-CL')}</td>
                  <td>{contact.nombre}</td>
                  <td>{contact.email}</td>
                  <td>{contact.telefono || '—'}</td>
                  <td>{contact.empresa || '—'}</td>
                  <td>{contact.mensaje}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
