import { API_ENDPOINTS, API_KEY } from "../utils/config.js";
import { getToken } from "../utils/storage.js";

/**
 * Fetches a user's profile data from the API
 * @param {string} username - The username to fetch
 * @returns {Promise<Object>} The user's profile page.
 */
export async function getProfile(username) {
  const accessToken = getToken();

  const response = await fetch(`${API_ENDPOINTS.profiles.base}/${username}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error("Could not load profile. Please try again.");
  }

  return result.data;
}

/**
 * Sends a follow request to the API for a specific user
 * @param {string} username - The username to follow
 * @returns {Promise<Object>} The API response confirming the follow action
 */
export async function followProfile(username) {
  const accessToken = getToken();

  const response = await fetch(
    `${API_ENDPOINTS.profiles.base}/${username}/follow`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
      },
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(`Error. Could not follow ${username}. Please try again.`);
  }

  return result.data;
}

export async function unfollowProfile(username) {
  const accessToken = getToken();

  const response = await fetch(
    `${API_ENDPOINTS.profiles.base}/${username}/unfollow`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
      },
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(`Error. Could not unfollow ${username}. Please try again.`);
  }

  return result.data;
}
