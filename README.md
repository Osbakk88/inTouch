# inTouch

inTouch is a social media app I built in vanilla JavaScript using ES6 modules.  
The app lets users register, log in, create posts, edit/delete their own posts, view profiles, and follow/unfollow other users.

## Live site

- Live version (GitHub Pages): `https://osbakk88.github.io/inTouch/`

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6 modules)
- Noroff Social API v2

## Features

- Register account
- Login/logout
- View all posts in feed
- Create a post
- Edit own post
- Delete own post
- Search posts by title/body
- View single post
- View profile (own and others)
- Follow/unfollow profiles
- View posts from a specific user on profile page

## Project structure

- `index.html`
- `login.html`
- `register.html`
- `feed.html`
- `post.html`
- `profile.html`
- `styles/main.css`
- `src/api` - API calls for auth, posts, and profiles
- `src/pages` - Page initialization scripts
- `src/ui` - Render and form helper modules
- `src/utils` - Config, storage, and auth guard helpers

## Getting started

1. Clone the repository.
2. Open the project in VS Code.
3. Check that API config is correct in `src/utils/config.js`.
4. Run with a local static server (example below).

Example using `npx serve`:

```bash
npx serve .
```

Then open the local URL shown in terminal.

## API setup note

- Update `API_BASE_URL` and endpoints in `src/utils/config.js` if needed.
- Add your Noroff API key in `API_KEY`.

## AI assistance disclosure

I used GitHub Copilot for guidance while working on structure, endpoint setup, and some refactoring. I wrote and tested the main project logic myself.

I mostly used AI as a learning helper, not to copy/paste code. For example, I asked it to explain why certain errors happened, compare different ways to solve the same problem, and give me small quiz-style questions so I could check if I really understood the logic.

This helped me learn things like:

- how to read and use API docs better
- how event listeners can break when added in the wrong place
- how to debug step by step instead of guessing
- how to keep code modular with ES6 modules
- I also used AI early in the project to scaffold the structure and suggest a clean folder/module setup so the codebase was easier to understand and maintain.

## Future improvements

If I continue this project, I would like to improve both features and UX/design:

- Add better profile picture handling and editing
- Implement comment functions and emoji reaction functions on posts
- Implement functions to see who follows you and who reacted to a post
- Add image upload support for posts (instead of text-only flow)
- Improve overall UX styling (spacing, hierarchy, feedback messages, button states)
- Add a cleaner comment/reaction experience with better mobile layout
- Continue refactoring to keep the code even cleaner as features grow
