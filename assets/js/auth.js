// ============================================================
// OTEC Training Proyect SpA — login, formulario de contacto y panel admin
// ============================================================

const TOKEN_KEY = 'otec_admin_token';

const loginTrigger = document.getElementById('loginTrigger');
const loginTriggerLabel = document.getElementById('loginTriggerLabel');
const loginOverlay = document.getElementById('loginOverlay');
const loginClose = document.getElementById('loginClose');
const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');

const adminOverlay = document.getElementById('adminOverlay');
const adminClose = document.getElementById('adminClose');
const adminStatus = document.getElementById('adminStatus');
const adminTableBody = document.getElementById('adminTableBody');
const adminRefresh = document.getElementById('adminRefresh');
const logoutBtn = document.getElementById('logoutBtn');

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

function openOverlay(el) {
  el.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeOverlay(el) {
  el.hidden = true;
  document.body.style.overflow = '';
}

function refreshLoginButton() {
  const logged = !!getToken();
  loginTriggerLabel.textContent = logged ? 'Panel' : 'Iniciar sesión';
  loginTrigger.classList.toggle('is-logged-in', logged);
}

loginTrigger.addEventListener('click', () => {
  if (getToken()) {
    openAdminPanel();
  } else {
    loginStatus.textContent = '';
    loginStatus.className = 'modal-status';
    loginForm.reset();
    openOverlay(loginOverlay);
  }
});

loginClose.addEventListener('click', () => closeOverlay(loginOverlay));
loginOverlay.addEventListener('click', (e) => { if (e.target === loginOverlay) closeOverlay(loginOverlay); });
adminClose.addEventListener('click', () => closeOverlay(adminOverlay));
adminOverlay.addEventListener('click', (e) => { if (e.target === adminOverlay) closeOverlay(adminOverlay); });

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(loginForm).entries());
  loginStatus.textContent = 'Verificando…';
  loginStatus.className = 'modal-status';
  submitBtn.disabled = true;
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || 'Credenciales inválidas');
    setToken(body.token);
    refreshLoginButton();
    closeOverlay(loginOverlay);
    openAdminPanel();
  } catch (err) {
    loginStatus.textContent = err.message;
    loginStatus.className = 'modal-status is-error';
  } finally {
    submitBtn.disabled = false;
  }
});

logoutBtn.addEventListener('click', () => {
  clearToken();
  refreshLoginButton();
  closeOverlay(adminOverlay);
});

adminRefresh.addEventListener('click', () => loadContacts());

function openAdminPanel() {
  openOverlay(adminOverlay);
  loadContacts();
}

function fmtDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return { fecha: iso, hora: '' };
  return {
    fecha: d.toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    hora: d.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }),
  };
}

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function loadContacts() {
  adminStatus.textContent = 'Cargando…';
  adminStatus.className = 'modal-status';
  adminTableBody.innerHTML = '';
  try {
    const res = await fetch('/api/contacts', {
      headers: { Authorization: 'Bearer ' + getToken() },
    });
    if (res.status === 401) {
      clearToken();
      refreshLoginButton();
      closeOverlay(adminOverlay);
      throw new Error('Sesión expirada, vuelve a iniciar sesión.');
    }
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || 'No se pudo cargar el registro');

    const contacts = (body.contacts || []).slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    if (contacts.length === 0) {
      adminTableBody.innerHTML = '<tr><td colspan="7" class="admin-table-empty">Aún no hay contactos registrados.</td></tr>';
    } else {
      adminTableBody.innerHTML = contacts.map((c) => {
        const { fecha, hora } = fmtDate(c.timestamp);
        return `<tr>
          <td>${escapeHtml(fecha)}</td>
          <td>${escapeHtml(hora)}</td>
          <td>${escapeHtml(c.nombre)}</td>
          <td>${escapeHtml(c.email)}</td>
          <td>${escapeHtml(c.telefono) || '—'}</td>
          <td>${escapeHtml(c.empresa) || '—'}</td>
          <td>${escapeHtml(c.mensaje)}</td>
        </tr>`;
      }).join('');
    }
    adminStatus.textContent = `${contacts.length} contacto${contacts.length === 1 ? '' : 's'} registrado${contacts.length === 1 ? '' : 's'}.`;
    adminStatus.className = 'modal-status is-ok';
  } catch (err) {
    adminStatus.textContent = err.message;
    adminStatus.className = 'modal-status is-error';
  }
}

/* ---------- public contact form ---------- */
const contactForm = document.getElementById('contactForm');
const contactFormStatus = document.getElementById('contactFormStatus');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(contactForm).entries());

  if (data.website) return; // honeypot triggered, silently ignore

  contactFormStatus.textContent = 'Enviando…';
  contactFormStatus.className = 'contact-form-status';
  submitBtn.disabled = true;
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || 'No se pudo enviar tu solicitud');
    contactForm.reset();
    contactFormStatus.textContent = '¡Gracias! Te contactaremos a la brevedad.';
    contactFormStatus.className = 'contact-form-status is-ok';
  } catch (err) {
    contactFormStatus.textContent = err.message;
    contactFormStatus.className = 'contact-form-status is-error';
  } finally {
    submitBtn.disabled = false;
  }
});

refreshLoginButton();
