const crypto = require('crypto');

// Fallback usado si JWT_SECRET no está configurado como variable de entorno en Vercel.
// Recomendado: configurar JWT_SECRET en Vercel y quitar este fallback.
const FALLBACK_JWT_SECRET = '8a41141beec64ed9323c11b63e327589f4c84958c9e4540db736dd3846fb3bcf';

function base64url(input) {
  return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64urlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return Buffer.from(str, 'base64').toString('utf8');
}

function sign(payload) {
  const secret = process.env.JWT_SECRET || FALLBACK_JWT_SECRET;
  const body = base64url(JSON.stringify(payload));
  const sig = crypto.createHmac('sha256', secret).update(body).digest('hex');
  return `${body}.${sig}`;
}

function verify(token) {
  const secret = process.env.JWT_SECRET || FALLBACK_JWT_SECRET;
  if (!token) return null;
  const parts = String(token).split('.');
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let payload;
  try {
    payload = JSON.parse(base64urlDecode(body));
  } catch {
    return null;
  }
  if (payload.exp && Date.now() > payload.exp) return null;
  return payload;
}

function requireAuth(req) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  return verify(token);
}

module.exports = { sign, verify, requireAuth };
