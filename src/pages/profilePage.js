import { requireAuth } from "../utils/authGuard.js";
import { renderProfile } from "../ui/renderProfile.js";
import { getProfile, followProfile, unfollowProfile } from "../api/profiles.js";
import { getUser } from "../utils/storage.js";

export async function initProfilePage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#profile-view");
  if (!container) return;

  const user = getUser();
  const params = new URLSearchParams(window.location.search);
  const profileName = params.get("name") || user?.name;

  if (!profileName) {
    container.innerHTML = `<p>No profile found.</p>`;
    return;
  }

  try {
    const profile = await getProfile(profileName);
    container.innerHTML = renderProfile(profile);
  } catch (error) {
    container.innerHTML = `<p>Failed to load profile: ${error.message}</p>`;
  }

  container.addEventListener("click", async (event) => {
    const followBtn = event.target.closest(".follow-btn");
    const unfollowBtn = event.target.closest(".unfollow-btn");
    const button = followBtn || unfollowBtn;
    if (!button) return;

    const username = button.dataset.username;
    if (!username) return;

    try {
      if (followBtn) {
        await followProfile(username);
      } else if (unfollowBtn) {
        await unfollowProfile(username);
      }

      const profile = await getProfile(profileName);
      container.innerHTML = renderProfile(profile);
    } catch (error) {
      container.innerHTML = `<p>This action failed: ${error.message}</p>`;
    }
  });
}

initProfilePage();
