import { requireAuth } from "../utils/authGuard.js";
import { renderPosts } from "../ui/renderPosts.js";
import { getPosts, createPost, deletePost } from "../api/posts.js";
import { getFormData } from "../ui/forms.js";

export async function initFeedPage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#feed-list");
  if (!container) return;

  const form = document.querySelector("#create-post-form");
  const postError = document.querySelector("#post-error");

  if (!form || !postError) return;

  try {
    const allPosts = await getPosts();
    container.innerHTML = renderPosts(allPosts);
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

      const allPosts = await getPosts();
      container.innerHTML = renderPosts(allPosts);
    } catch (error) {
      postError.textContent = error.message;
    }
  });

  container.addEventListener("click", async (event) => {
    if (event.target.classList.contains("delete-post-btn")) {
      const postId = event.target.dataset.id;

      try {
        await deletePost(postId);
        const allPosts = await getPosts();
        container.innerHTML = renderPosts(allPosts);
      } catch (error) {
        postError.textContent = error.message;
      }
    }
  });
}

initFeedPage();
