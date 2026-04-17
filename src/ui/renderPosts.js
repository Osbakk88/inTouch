export function renderPosts(posts = [], currentUsername = "") {
  if (!posts.length) {
    return `<p>Whats on your mind? Create your first post now</p>`;
  }

  return posts
    .map((post) => {
      const isOwner = post.author?.name && post.author.name === currentUsername;

      return `<article class="post-card">
        <h3>${post.title ?? "Post"}</h3>
        <p>${post.body ?? ""}</p>
        <p>Posted by: <a href="./profile.html?name=${post.author?.name ?? ""}">${post.author?.name ?? "Unknown user"}</a></p>
        ${isOwner ? `<button class="delete-post-btn" data-id="${post.id}">Delete</button>` : ""}
        ${isOwner ? `<button class="edit-post-btn" data-id="${post.id}">Edit</button>` : ""}
        <a class="view-post-btn" href="./post.html?id=${post.id}">View post</a>
        </article>`;
    })
    .join("");
}
