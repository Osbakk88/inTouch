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
        <p>Posted by: <a href="./profile.html?name=${post.author?.name ?? ""}">${post.author?.name ?? "Unknown user"}</a></p>
        <button class="delete-post-btn" data-id="${post.id}">Delete</button>
        <button class="edit-post-btn" data-id="${post.id}">Edit</button>
        <a href="./post.html?id=${post.id}">View post</a>
        </article>`,
    )
    .join("");
}
