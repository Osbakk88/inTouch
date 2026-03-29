export function renderProfile(profile = {}) {
  return `<section class="profile-card"><h2>${profile.name ?? "Unknown user"}</h2></section>`;
}
