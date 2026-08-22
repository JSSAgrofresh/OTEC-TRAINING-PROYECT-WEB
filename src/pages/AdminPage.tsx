import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useContacts } from '../hooks/useContacts';

export default function AdminPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const contacts = useContacts();

  const sorted = useMemo(
    () => [...contacts].sort((a, b) => b.timestamp.localeCompare(a.timestamp)),
    [contacts]
  );

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
          <button className="btn btn-ghost btn-sm" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
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
