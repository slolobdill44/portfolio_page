# AGENTS.md

Conventions for AI coding agents working on this repo, including lobster_dev, Adrian's
automated pipeline. It's also a good summary for humans.

## Stack

- Static single-page site: vanilla HTML5, CSS3 and a small inline `<script>` in
  `dist/index.html`. No framework, no package manager, no build step.
- Everything that ships lives in `dist/`: `index.html`, `css/main.css`, `assets/`.
- Font: Inter from Google Fonts.
- Production: a push to `main` runs `.github/workflows/deploy.yml`, which rsyncs `dist/`
  to a Google Cloud Storage bucket and purges the Fastly cache. **Merging is shipping.**
- Previews: Vercel builds every non-`main` branch (output directory `dist`);
  `vercel.json` disables Vercel deploys of `main`.

## Commands

- No install, build, lint or test commands.
- Preview locally: `python3 -m http.server -d dist 8080`, then open http://localhost:8080
- lobster_dev's verify step runs HTML validation (html-validate recommended rules),
  a Playwright smoke test with desktop and mobile screenshots, Lighthouse, a link check
  and a security-header check. Changes must not add new HTML errors or lower Lighthouse
  scores.

## Structure

- **Desktop and mobile use separate markup.** Above 900px the page shows the `desktop-*`
  blocks (e.g. `#desktop-experience`, `#desktop-projects`); at 900px and below it shows
  the `<section>`s (`#experience`, `#projects`, `#contact`). A content change must be
  made in **both** places. Check both viewports.
- The breakpoint is 900px (`@media (max-width: 900px)` / `(min-width: 901px)`).
- The pets section is intentionally commented out. Leave it that way unless asked.
- The ASCII-art lobster comment at the top of `index.html` stays.

## Rules

- Work only on the branch you were given. Never push to `main`; only Adrian merges.
- Keep changes small and focused on the brief's acceptance criteria.
- Don't change global layout, navigation or styling unless the brief says so.
- Keep the site dependency-free: no frameworks, bundlers or npm packages unless the
  brief explicitly asks for one.
- Games and experiments live under `dist/lab/` (served at `/lab/`), each in its own
  folder, self-contained, and linked from the main page only if the brief says so.
- Images: prefer modern formats and explicit `width`/`height`; keep new assets small.
- Accessibility: meaningful `alt` text, visible focus styles, sufficient contrast.
- Don't touch `.github/`, `AGENTS.md`, `CLAUDE.md`, `vercel.json` or `.claude/`.
