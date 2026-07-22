export function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}

function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.results)) {
    return payload.results;
  }

  if (payload && Array.isArray(payload.items)) {
    return payload.items;
  }

  if (payload && Array.isArray(payload.data)) {
    return payload.data;
  }

  return [];
}

export async function fetchCollection(name) {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/api/${name}/`);

  if (!response.ok) {
    throw new Error(`Failed to load ${name}`);
  }

  const payload = await response.json();
  return normalizeCollection(payload);
}
