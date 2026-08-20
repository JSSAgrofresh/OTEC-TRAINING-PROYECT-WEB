const { sign } = require('../lib/auth');

// Fallback usado si ADMIN_EMAIL / ADMIN_PASSWORD no están configurados como variables
// de entorno en Vercel. Recomendado: configurarlos en Vercel y quitar este fallback,
// ya que este archivo vive en un repositorio público.
const FALLBACK_ADMIN_EMAIL = 'tucascarla@gmail.com';
const FALLBACK_ADMIN_PASSWORD = 'otec2026';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { email, password } = req.body || {};
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || FALLBACK_ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || FALLBACK_ADMIN_PASSWORD;

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    email.trim().toLowerCase() !== ADMIN_EMAIL.trim().toLowerCase() ||
    password !== ADMIN_PASSWORD
  ) {
    res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    return;
  }

  const token = sign({ sub: email, exp: Date.now() + 12 * 60 * 60 * 1000 });
  res.status(200).json({ token });
};
