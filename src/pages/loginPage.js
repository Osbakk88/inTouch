import { getFormData } from "../ui/forms.js";
import { login } from "../api/auth.js";
import { setToken, setUser } from "../utils/storage.js";

export function initLoginPage() {
  const form = document.querySelector("#login-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = getFormData(form);
    console.log("Login submit", data);
  });
}

initLoginPage();
