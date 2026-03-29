export function renderPost(post = {}) {
  return `<article class="post-single"><h2>${post.title ?? "Untitled"}</h2><p>${post.body ?? ""}</p></article>`;
}
