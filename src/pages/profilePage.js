import { requireAuth } from "../utils/authGuard.js";
import { renderProfile, renderProfilePosts } from "../ui/renderProfile.js";
import {
  getProfile,
  getProfilePosts,
  followProfile,
  unfollowProfile,
} from "../api/profiles.js";
import { getUser, clearToken, clearUser } from "../utils/storage.js";

async function renderProfilePageContent(container, profileName) {
  // AI-assisted: I used help to load profile info and that user's posts in one place.
  const profile = await getProfile(profileName);
  const profilePosts = await getProfilePosts(profileName);
  container.innerHTML =
    renderProfile(profile) + renderProfilePosts(profilePosts);
}

export async function initProfilePage() {
  if (!requireAuth()) return;

  const container = document.querySelector("#profile-view");
  if (!container) return;

  const logoutLinks = document.querySelectorAll(".logout-link");
  logoutLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      clearToken();
      clearUser();
      window.location.href = "./login.html";
    });
  });

  const user = getUser();
  const params = new URLSearchParams(window.location.search);
  const profileName = params.get("name") || user?.name;

  if (!profileName) {
    container.innerHTML = `<p>No profile found.</p>`;
    return;
  }

  try {
    await renderProfilePageContent(container, profileName);
  } catch (error) {
    container.innerHTML = `<p>Failed to load profile: ${error.message}</p>`;
  }

  // AI-assisted: I used help to understand the click handling and feedback for follow/unfollow.
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

      await renderProfilePageContent(container, profileName);

      const feedback = container.querySelector("#follow-feedback");
      if (feedback) {
        feedback.textContent = followBtn
          ? `You are now following ${username}.`
          : `You unfollowed ${username}.`;
      }
    } catch (error) {
      const feedback = container.querySelector("#follow-feedback");
      if (feedback) {
        feedback.textContent = `This action failed: ${error.message}`;
      }
    }
  });
}

initProfilePage();
