import { getFormData } from "../ui/forms.js";
import { register } from "../api/auth.js";

export function initRegisterPage() {
  const form = document.querySelector("#register-form");
  const errorMessage = document.querySelector("#register-error");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = getFormData(form);
    errorMessage.textContent = "";

    try {
      await register(data);
      window.location.href = "./login.html";
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
}

initRegisterPage();
