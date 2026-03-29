import { requireAuth } from "../utils/authGuard.js";
import { renderPosts } from "../ui/renderPosts.js";

export function initFeedPage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#feed-list");
  if (!container) return;

  container.innerHTML = renderPosts([]);
}

initFeedPage();
