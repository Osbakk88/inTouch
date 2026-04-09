import { API_ENDPOINTS, API_KEY } from "../utils/config.js";
import { getToken } from "../utils/storage.js";

export async function getPosts() {
  const accessToken = getToken();

  const response = await fetch(API_ENDPOINTS.posts.base, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error("Error, loading failed. Please try again.");
  }

  return result.data;
}

export async function createPost(payload) {
  const accessToken = getToken();

  const response = await fetch(API_ENDPOINTS.posts.base, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error("Error, could not create post. Please try again.");
  }

  return result.data;
}
