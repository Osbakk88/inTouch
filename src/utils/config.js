export const API_BASE_URL = "https://api.example.com";

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
  },
  posts: {
    base: `${API_BASE_URL}/posts`,
    search: `${API_BASE_URL}/posts/search`,
  },
  profiles: {
    base: `${API_BASE_URL}/profiles`,
  },
};
