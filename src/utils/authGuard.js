import { getToken } from "./storage.js";

export function requireAuth(redirectTo = "./login.html") {
  const token = getToken();
  if (!token) {
    window.location.href = redirectTo;
    return false;
  }
  return true;
}
