import { requireAuth } from "../utils/authGuard.js";
import { renderPost } from "../ui/renderPost.js";

export function initPostPage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#single-post");
  if (!container) return;

  container.innerHTML = renderPost({});
}

initPostPage();
