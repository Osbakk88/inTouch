export function renderPosts(posts = []) {
  if (!posts.length) {
    return `<p>Whats on your mind? Create your first post now</p>`;
  }

  return posts
    .map(
      (post) =>
        `<article class="post-card">
        <h3>${post.title ?? "Post"}</h3>
        <p>${post.body ?? ""}</p>
        <button class="delete-post-btn" data-id="${post.id}">Delete</button>
        <button class="edit-post-btn" data-id="${post.id}">Edit</button>
        </article>`,
    )
    .join("");
}
