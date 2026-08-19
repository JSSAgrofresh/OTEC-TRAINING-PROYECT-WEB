const { addContact } = require('../lib/github');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { nombre, email, telefono, empresa, mensaje, website } = req.body || {};

  // Honeypot: bots fill hidden fields. Pretend success, don't store.
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!nombre || !email || !mensaje) {
    res.status(400).json({ error: 'Nombre, correo y mensaje son obligatorios' });
    return;
  }
  if (!EMAIL_RE.test(String(email))) {
    res.status(400).json({ error: 'El correo no parece válido' });
    return;
  }

  const entry = {
    nombre: String(nombre).slice(0, 200),
    email: String(email).slice(0, 200),
    telefono: telefono ? String(telefono).slice(0, 60) : '',
    empresa: empresa ? String(empresa).slice(0, 200) : '',
    mensaje: String(mensaje).slice(0, 2000),
    timestamp: new Date().toISOString(),
  };

  try {
    await addContact(entry);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact.js error:', err);
    res.status(500).json({ error: 'No se pudo guardar tu solicitud, intenta de nuevo en unos minutos' });
  }
};
