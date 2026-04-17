import { requireAuth } from "../utils/authGuard.js";
import { renderPosts } from "../ui/renderPosts.js";
import { getPosts, createPost, deletePost, updatePost } from "../api/posts.js";
import { getFormData } from "../ui/forms.js";
import { clearToken, clearUser } from "../utils/storage.js";

/**
 * Sets up the feed page by loading posts and adding event listeners.
 * Checks if user is logged in, loads all posts, and allows user to create/delete posts
 * @returns {void}
 */
export async function initFeedPage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#feed-list");
  if (!container) return;

  const form = document.querySelector("#create-post-form");
  const postError = document.querySelector("#post-error");
  const logoutLinks = document.querySelectorAll(".logout-link");

  if (!form || !postError) return;

  logoutLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      clearToken();
      clearUser();
      window.location.href = "./login.html";
    });
  });

  let posts = [];

  try {
    posts = await getPosts();
    container.innerHTML = renderPosts(posts);
  } catch (error) {
    container.innerHTML = `<p>Failed to load posts: ${error.message}</p>`;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    postError.textContent = "";

    const data = getFormData(form);

    try {
      await createPost(data);
      form.reset();

      posts = await getPosts();
      container.innerHTML = renderPosts(posts);
    } catch (error) {
      postError.textContent = error.message;
    }
  });

  container.addEventListener("click", async (event) => {
    if (event.target.classList.contains("delete-post-btn")) {
      const postId = event.target.dataset.id;

      try {
        await deletePost(postId);
        posts = await getPosts();
        container.innerHTML = renderPosts(posts);
      } catch (error) {
        postError.textContent = error.message;
      }
    }
  });

  container.addEventListener("click", async (event) => {
    const editButton = event.target.closest(".edit-post-btn");
    if (!editButton) return;

    const postId = editButton.dataset.id;
    const newTitle = prompt("New title:");
    const newBody = prompt("New body:");

    if (!newTitle || !newBody) return;

    try {
      await updatePost(postId, { title: newTitle, body: newBody });

      posts = await getPosts();
      container.innerHTML = renderPosts(posts, currentUsername);
    } catch (error) {
      postError.textContent = error.message;
    }
  });

  const searchInput = document.querySelector("#search-input");
  if (!searchInput) return;

  // AI-assisted: guidance used for scope, listener placement, and filter logic.
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filteredPosts = posts.filter(
      (post) =>
        post.title?.toLowerCase().includes(keyword) ||
        post.body?.toLowerCase().includes(keyword),
    );
    container.innerHTML = renderPosts(filteredPosts);
  });
}

initFeedPage();
