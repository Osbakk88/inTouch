/**
 * Makes the HTML for the profile section on the page.
 * @param {Object} profile - Information about the user.
 * @returns {string} The profile HTML as a text string.
 */
export function renderProfile(profile = {}) {
  const avatarUrl = profile.avatar?.url ?? "";
  const bannerUrl = profile.banner?.url ?? "";
  let bio = "This user has not added a bio yet.";
  if (profile.bio && profile.bio.trim() !== "") {
    bio = profile.bio;
  }

  // AI-assisted: I used help to keep the follow/unfollow section simple and easy to understand.
  return `
      <section class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto flex flex-col items-center gap-3 mb-6 profile-card">
      ${bannerUrl ? `<img class="profile-banner w-full h-32 object-cover rounded-md" src="${bannerUrl}" alt="${profile.name ?? "User"} banner" />` : ""}
      ${avatarUrl ? `<img class="profile-avatar h-24 w-24 rounded-full object-cover" src="${avatarUrl}" alt="${profile.name ?? "User"} avatar" />` : ""}
      <h2 class="text-2xl font-bold text-purple-700">${profile.name ?? "Unknown user"}</h2>
      <p class="text-gray-600 text-center">${bio}</p>
      <div class="flex gap-3 profile-actions">
      <button class="follow-btn bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-700" data-username="${profile.name}">Follow</button>
      <button class="unfollow-btn bg-gray-200 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-300" data-username="${profile.name}">Unfollow</button>
      </div>
      <p id="follow-feedback" class="text-sm text-purple-600"></p>
    </section>
  `;
}

export function renderProfilePosts(posts = []) {
  // AI-assisted: I used help to keep this posts section simple to read and render.
  if (!posts.length) {
    return `
      <section class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto flex flex-col items-center gap-3 mb-6 profile-card">
      <h3 class="text-xl font-semibold">User posts</h3>
      <p class="text-gray-500">This user has not posted anything yet.</p> 
      </section>
    `;
  }

  const items = posts
    .map(
      (post) => `
      <article class="post-card border-b border-gray-200 py-3">
        <h3 class="font-semibold">${post.title ?? "Post"}</h3>
        <p class="text-gray-600">${post.body ?? ""}</p>
        <a class="view-post-btn text-purple-600 hover:underline" href="./post.html?id=${post.id}">View post</a>
      </article>
    `,
    )
    .join("");

  return `
  <section class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto profile-card">
    <h3 class="text-xl font-semibold mb-3">User posts</h3>
    ${items}
  </section>
`;
}
