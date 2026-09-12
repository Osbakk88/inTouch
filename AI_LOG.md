# AI Usage Log — CSS Frameworks Course Assignment

This log documents all AI assistance received while working on this assignment, in line with the course's AI Policy. Before starting, I gave the AI (Claude) the full text of the AI Policy so it had the actual rules in front of it throughout the project.

**Tool used:** Claude (Anthropic)
**Date:** 2026-08-25
**Purpose:** Brainstorming which assignment option (Option 1 vs Option 2) to choose, and comparing the trade-offs of each in terms of learning value and difficulty.
**Outcome:** Chose Option 1: Styling the existing JS2 CA. Because working inside an existing codebase felt more challenging and closer to real front-end work. Decision was made independently after discussion.

**Tool used:** Claude (Anthropic)
**Date:** 2026-08-25
**Purpose:** Discussed the choice between Tailwind and Bootstrap with Sass.
**Outcome:** Chose Tailwind, mainly because I hadn't used it before and wanted hands-on experience with it.

**Tool used:** Claude (Anthropic) and YouTube tutorials
**Date:** 2026-08-29
**Purpose:** Guidance on setting up Tailwind CSS via npm from scratch. No existing Node/build setup in the inTouch project. Including `package.json` dev/build scripts with `--watch`.
**Outcome:** Set up `package.json`, installed Tailwind and the CLI, and wrote the scripts myself. Verified the pipeline worked by testing a sample utility class before styling real content.

**Tool used:** Claude (Anthropic)
**Date:** 2026-08-29
**Purpose:** Debugging help: Described issues I ran into (Tailwind classes not appearing in the browser, a malformed self-closing `<main>` tag, a stray `</>` closing tag, a self-closing `<body>` tag, `npm run dev` not running after a machine restart, sticky footer not working).
**Outcome:** Identified and fixed each issue myself after the cause was explained (e.g. that `--watch` stops when the terminal/machine restarts, or that a missing `flex flex-col` on `<body>` breaks a sticky footer layout).

**Tool used:** Claude (Anthropic)
**Date:** 2026-08-29 to 2026-09-04
**Purpose:** Explaining Tailwind utility classes for layout (flexbox, sticky footer pattern with `min-h-screen flex flex-col` + `flex-1`) and for styling forms, headers, and footers, so I could apply them myself.
**Outcome:** Styled the login page (header, form with validation, footer) and the static parts of the feed page (search bar, create-post form) myself using the explained classes.

**Tool used:** GitHub Copilot
**Date:** 2026-09-04
**Purpose:** Copilot suggested an alternative version of the Tailwind classes on the feed page's `<main>` section while I was editing in VS Code.
**Outcome:** Compared it with what I already had, confirmed it was a valid/equivalent approach, and used a version of it.

**Tool used:** Claude (Anthropic)
**Date:** 2026-09-07
**Purpose:** Clarifying the conceptual difference between CSS frameworks (Tailwind/Bootstrap) and JS frameworks (React/Vue/Angular), in relation to whether styling JS-generated HTML (in `renderProfile.js` and `renderPosts.js`) was within scope for this assignment.
**Outcome:** Drafted a question and sent it to my teacher, Monde, on Teams to confirm before proceeding. Monde confirmed it was fine to add Tailwind classes inside JS-generated HTML strings, as long as I wasn't changing the underlying logic. Only continued with that part of the work after this confirmation.

**Tool used:** Claude (Anthropic)
**Date:** 2026-09-08
**Purpose:** Explaining which Tailwind classes to use for styling the profile card, avatar/banner images, follow/unfollow buttons, and the post list (in `renderProfile.js` and `renderPosts.js`), since this content is generated dynamically via JavaScript rather than static HTML.
**Outcome:** Styled both files myself. Along the way, introduced and then fixed a couple of self-made logic bugs (a broken ternary expression that hid the "View post" link for non-owners, and placeholder text copy-pasted into the wrong template) by carefully re-reading the JavaScript structure.

**Tool used:** Claude (Anthropic)
**Date:** 2026-09-09
**Purpose:** Help drafting and refining the written reflection for this assignment, based on the process and challenges discussed throughout the project.
**Outcome:** Used Claude to help structure my thoughts and phrase things clearly (helpful for me as a dyslexic student), then edited and personalized the content myself so it reflects my own voice and experience.

**Tool used:** Claude (Anthropic)
**Date: 2026-09-12:**
**Purpose:** Explored improving the visual design after the core functionality and pages were done. Better nav link styling (hover states, then a more visible "always-on" pill style). Also discussed a custom Tailwind color (@theme config) as an option, though I ended up using Tailwind's built-in rose scale instead.
**Outcome:** Updated the header, footer, nav links, and buttons across all three pages (login, feed, profile). And both JS-rendered files (renderProfile.js, renderPosts.js) to a consistent rose/burgundy palette. Made several of these class changes independently after seeing the pattern repeated a few times, then had them checked over for consistency and small typos.

## Notes on AI use overall

I used AI mainly to have concepts explained (Git, Tailwind, the CSS vs. JS framework distinction) and to talk through debugging when I got stuck, rather than to generate finished code. Having given Claude the assignment's AI Policy up front meant it pushed back on a few things that were closer to the line than I initially realized.

As a dyslexic student, I also find AI genuinely useful for wording documentation and reflections. And for spellchecking, it helps me get thoughts that I have already more clearly worded. All code changes, class names, and structural decisions in the project's HTML and JavaScript files were written and applied by me.
