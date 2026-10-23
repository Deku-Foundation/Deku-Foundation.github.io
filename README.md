# Deku Linux website

The public-facing static website for Deku Linux, an independent open-source Linux distribution in development.

## Status

This site describes a project in its foundation and evaluation phase. No official ISO, stable release, security audit, or production-ready distribution is claimed.

## Structure

- `index.html` — homepage and project overview
- `about.html` — mission and current scope
- `docs/` — links to authoritative project documentation
- `install/` — honest installation and release status
- `security/` — security principles, status, and reporting guidance
- `contribute/` — contributor onboarding
- `faq/` — project FAQ
- `assets/` — dependency-free CSS, JavaScript, and SVG mark
- `.github/workflows/pages.yml` — local-link checks and GitHub Pages deployment

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

The workflow validates local links and JavaScript syntax for pull requests. On pushes to `main`, it deploys the static site through GitHub Pages. In repository settings, select **Settings → Pages → Build and deployment → GitHub Actions**.

Because this repository is currently named `deku-foundation`, its expected project-site URL is `https://deku-foundation.github.io/deku-foundation/`. For the organization root URL `https://deku-foundation.github.io/`, the repository must be named `Deku-Foundation.github.io`. Repository renaming must be done through GitHub settings because the connected repository tools do not expose that operation.

## Design principles

- Responsive, semantic HTML with keyboard-visible focus and reduced-motion support.
- No analytics, trackers, remote fonts, external JS libraries, or build dependencies.
- No fake downloads, release dates, stability claims, or security claims.
- Architecture choices are identified as proposals until tested and accepted.
- GitHub Actions are pinned to commit SHAs.
