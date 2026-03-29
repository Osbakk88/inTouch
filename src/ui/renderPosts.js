export function renderPosts(posts = []) {
  if (!posts.length) {
    return `<p>No posts yet. Create one to get started.</p>`;
  }

  return posts
    .map(
      (post) =>
        `<article class="post-card"><h3>${post.title ?? "Post"}</h3><p>${post.body ?? ""}</p></article>`,
    )
    .join("");
}
