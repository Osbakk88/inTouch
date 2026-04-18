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
      <section class="profile-card">
      ${bannerUrl ? `<img class="profile-banner" src="${bannerUrl}" alt="${profile.name ?? "User"} banner" />` : ""}
      ${avatarUrl ? `<img class="profile-avatar" src="${avatarUrl}" alt="${profile.name ?? "User"} avatar" />` : ""}
      <h2>${profile.name ?? "Unknown user"}</h2>
      <p>${bio}</p>
      <div class="profile-actions">
      <button class="follow-btn" data-username="${profile.name}">Follow</button>
      <button class="unfollow-btn" data-username="${profile.name}">Unfollow</button>
      </div>
      <p id="follow-feedback"></p>
    </section>
  `;
}

export function renderProfilePosts(posts = []) {
  // AI-assisted: I used help to keep this posts section simple to read and render.
  if (!posts.length) {
    return `
      <section class="profile-card">
        <h3>User posts</h3>
        <p>This user has not posted anything yet.</p>
      </section>
    `;
  }

  const items = posts
    .map(
      (post) => `
        <article class="post-card">
          <h3>${post.title ?? "Post"}</h3>
          <p>${post.body ?? ""}</p>
          <a class="view-post-btn" href="./post.html?id=${post.id}">View post</a>
        </article>
      `,
    )
    .join("");

  return `
    <section class="profile-card">
      <h3>User posts</h3>
      ${items}
    </section>
  `;
}
