const { requireAuth } = require('../lib/auth');
const { getContacts } = require('../lib/github');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const session = requireAuth(req);
  if (!session) {
    res.status(401).json({ error: 'No autorizado' });
    return;
  }

  try {
    const { contacts } = await getContacts();
    res.status(200).json({ contacts });
  } catch (err) {
    console.error('contacts.js error:', err);
    res.status(500).json({ error: 'No se pudo cargar el registro de contactos' });
  }
};
