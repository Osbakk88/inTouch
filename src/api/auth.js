import { API_ENDPOINTS } from "../utils/config.js";

export async function login(payload) {
  const loginResponse = await fetch(API_ENDPOINTS.auth.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const loginData = await loginResponse.json();

  if (!loginResponse.ok) {
    throw new Error("Login failed. Check your email and password.");
  }
  return loginData;
}

export async function register(payload) {
  const registerResponse = await fetch(API_ENDPOINTS.auth.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const registerData = await registerResponse.json();

  if (!registerResponse.ok) {
    throw new Error("Registration failed. Please try again.");
  }
  return registerData;
}
