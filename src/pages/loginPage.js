import { getFormData } from "../ui/forms.js";
import { login } from "../api/auth.js";
import { setToken, setUser } from "../utils/storage.js";

export function initLoginPage() {
  const form = document.querySelector("#login-form");
  const errorMessage = document.querySelector("#login-error");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = getFormData(form);
    errorMessage.textContent = "";

    try {
      const userData = await login(data);
      setToken(userData.data.accessToken);
      setUser(userData.data);
      window.location.href = "./feed.html";
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
}

initLoginPage();
