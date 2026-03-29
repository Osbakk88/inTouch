# inTouch

## Pages

- `index.html`
- `login.html`
- `register.html`
- `feed.html`
- `post.html`
- `profile.html`

## Source modules

I used GitHub Copilot to scaffold the initial folder structure for JS and module split. This helped me verify that I had understood the assignment requirements correctly before writing the actual logic myself. As JS is neew and quite massive for me still, I feel I need a lot of explaing and research to get things right.

- `src/api`: API calls for auth, posts and profiles
- `src/utils`: config, storage helpers and auth guard
- `src/ui`: render helpers and form handling
- `src/pages`: page-specific initialization scripts

## Setup note

Before testing API calls, update `API_BASE_URL` in `src/utils/config.js` to match your course API.

## Styles

- `styles/main.css`
