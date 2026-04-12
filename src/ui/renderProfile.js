export function renderProfile(profile = {}) {
  const avatarUrl = profile.avatar?.url ?? "";
  const bannerUrl = profile.banner?.url ?? "";
  const bio = profile.bio ?? "No bio found.";

  return `
      <section class="profile-card">
      ${bannerUrl ? `<img src="${bannerUrl}" alt="${profile.name ?? "User"} banner" />` : ""}
      ${avatarUrl ? `<img src="${avatarUrl}" alt="${profile.name ?? "User"} avatar" />` : ""}
      <h2>${profile.name ?? "Unknown user"}</h2>
      <p>${bio}</p>
    </section>
  `;
}
