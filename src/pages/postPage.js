import { requireAuth } from "../utils/authGuard.js";
import { renderPost } from "../ui/renderPost.js";
import { getPostById } from "../api/posts.js";

export async function initPostPage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#single-post");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  if (!postId) {
    container.innerHTML = `<p>No post found</p>`;
    return;
  }

  try {
    const post = await getPostById(postId);
    container.innerHTML = renderPost(post);
  } catch (error) {
    container.innerHTML = `<p>Failed to load post: ${error.message}</p>`;
  }
}

initPostPage();
