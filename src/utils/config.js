export const API_BASE_URL = "https://v2.api.noroff.dev";
export const API_KEY = "8b516eb4-6e87-4327-afc8-4c040de0b0f1";

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
  },
  posts: {
    base: `${API_BASE_URL}/social/posts`,
    search: `${API_BASE_URL}/social/posts/search`,
  },
  profiles: {
    base: `${API_BASE_URL}/social/profiles`,
    search: `${API_BASE_URL}/social/profiles/search`,
  },
};
