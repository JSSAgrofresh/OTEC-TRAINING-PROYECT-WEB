const OWNER = 'JSSAgrofresh';
const REPO = 'OTEC-TRAINING-PROYECT-WEB';
const FILE_PATH = 'data/contacts.json';
const BRANCH = 'main';

function apiUrl() {
  return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;
}

async function getContacts() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN no configurado');
  const res = await fetch(`${apiUrl()}?ref=${BRANCH}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'otec-training-proyect-web',
      Accept: 'application/vnd.github+json',
    },
  });
  if (res.status === 404) return { contacts: [], sha: null };
  if (!res.ok) throw new Error(`GitHub GET ${res.status}`);
  const json = await res.json();
  const content = Buffer.from(json.content, 'base64').toString('utf8');
  let contacts;
  try {
    contacts = JSON.parse(content);
  } catch {
    contacts = [];
  }
  return { contacts: Array.isArray(contacts) ? contacts : [], sha: json.sha };
}

async function addContact(entry) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN no configurado');
  const { contacts, sha } = await getContacts();
  contacts.push(entry);
  const content = Buffer.from(JSON.stringify(contacts, null, 2)).toString('base64');
  const res = await fetch(apiUrl(), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'otec-training-proyect-web',
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `contact: ${entry.nombre} (${entry.timestamp})`,
      content,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GitHub PUT ${res.status}: ${text.slice(0, 200)}`);
  }
  return contacts;
}

module.exports = { getContacts, addContact };
