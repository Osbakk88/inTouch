import { API_ENDPOINTS } from "../utils/config.js";

export async function getProfile(username) {
  return { endpoint: `${API_ENDPOINTS.profiles.base}/${username}` };
}

export async function followProfile(username) {
  return { endpoint: `${API_ENDPOINTS.profiles.base}/${username}/follow` };
}

export async function unfollowProfile(username) {
  return { endpoint: `${API_ENDPOINTS.profiles.base}/${username}/unfollow` };
}
