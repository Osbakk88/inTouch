import { API_ENDPOINTS } from "../utils/config.js";

export async function login(payload) {}

export async function register(payload) {
  const response = await fetch(API_ENDPOINTS.auth.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || "Could not register user");
  }
  return data;
}
