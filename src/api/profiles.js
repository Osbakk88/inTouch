import { API_ENDPOINTS, API_KEY } from "../utils/config.js";
import { getToken } from "../utils/storage.js";

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
