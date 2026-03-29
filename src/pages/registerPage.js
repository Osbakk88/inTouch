import { getFormData } from "../ui/forms.js";
import { register } from "../api/auth.js";

export function initRegisterPage() {
  const form = document.querySelector("#register-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = getFormData(form);
    console.log("Register submit", data);
  });
}

initRegisterPage();
