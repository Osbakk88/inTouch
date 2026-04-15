export function renderProfile(profile = {}) {
  const avatarUrl = profile.avatar?.url ?? "";
  const bannerUrl = profile.banner?.url ?? "";
  const bio =
    profile.bio ??
    "Hi, I'm Christina. Second year front-end developer student ☺️";

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
