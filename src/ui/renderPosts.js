export function renderPosts(posts = [], currentUsername = "") {
  if (!posts.length) {
    return `<p class="text-gray-500 text-center">Whats on your mind? Create your first post now</p>`;
  }

  return posts
    .map((post) => {
      const isOwner = post.author?.name && post.author.name === currentUsername;

      return `<article class="bg-white rounded-lg shadow-md p-4 mb-4 post-card">
        <h3 class="text-xl font-semibold">${post.title ?? "Post"}</h3>
        <p class="text-gray-700 mt-1">${post.body ?? ""}</p>
        <p class="text-sm text-gray-500 mt-2">Posted by: <a class="text-purple-600 hover:underline" href="./profile.html?name=${post.author?.name ?? ""}">${post.author?.name ?? "Unknown user"}</a></p>
        ${isOwner ? `<button class="delete-post-btn bg-red-500 text-white rounded-md px-3 py-1 text-sm hover:bg-red-600 mr-2" data-id="${post.id}">Delete</button>` : ""}
        ${isOwner ? `<button class="edit-post-btn bg-gray-200 text-gray-800 rounded-md px-3 py-1 text-sm hover:bg-gray-300 mr-2" data-id="${post.id}">Edit</button> ` : ""}
        <a class="view-post-btn text-purple-600 hover:underline" href="./post.html?id=${post.id}">View post</a>
        </article>`;
    })
    .join("");
}
