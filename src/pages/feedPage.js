import { requireAuth } from "../utils/authGuard.js";
import { renderPosts } from "../ui/renderPosts.js";
import { getPosts } from "../api/posts.js";

export async function initFeedPage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#feed-list");
  if (!container) return;

  try {
    const allPosts = await getPosts();
    container.innerHTML = renderPosts(allPosts);
  } catch (error) {
    container.innerHTML = `<p>Failed to load posts: ${error.message}</p>`;
  }
}

initFeedPage();
