const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const buildUrl = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

const apiServerClient = {
  fetch(path, options) {
    return fetch(buildUrl(path), options);
  },
};

export default apiServerClient;
