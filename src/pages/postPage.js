import { requireAuth } from "../utils/authGuard.js";
import { renderPost } from "../ui/renderPost.js";
import { getPostById } from "../api/posts.js";
import { clearToken, clearUser } from "../utils/storage.js";

export async function initPostPage() {
  if (!requireAuth()) return;

  const logoutLinks = document.querySelectorAll(".logout-link");
  logoutLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      clearToken();
      clearUser();
      window.location.href = "./login.html";
    });
  });

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
