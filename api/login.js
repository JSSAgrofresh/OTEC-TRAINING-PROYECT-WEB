const { sign } = require('../lib/auth');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { email, password } = req.body || {};
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    res.status(500).json({ error: 'Login no configurado en el servidor (faltan variables de entorno)' });
    return;
  }

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
