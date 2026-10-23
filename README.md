# Deku Linux Website

Public project website: https://deku-foundation.github.io/

## Design and structure

The site is a lightweight, responsive static website hosted on GitHub Pages. Its custom visual system is designed for Deku rather than applying a third-party theme wholesale. It prioritizes clear project status, technical navigation, accessibility, mobile usability, and accurate release messaging.

- `index.html` — project landing page and roadmap overview
- `about.html` — project scope and principles
- `docs/` — documentation entry point
- `install/` — release and installation status
- `security/` — security posture and reporting guidance
- `contribute/` — contribution guidance
- `faq/` — project FAQs
- `assets/styles.css` — shared responsive design system
- `assets/main.js` — progressive enhancement for navigation and current year
- `404.html` — branded not-found page
- `sitemap.xml` and `robots.txt` — search-engine discovery

## Local preview

This site intentionally avoids a framework build step. Serve the repository root with any static HTTP server, then open the local address in a browser. For example:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Quality checklist

- Check every page at mobile and desktop widths.
- Navigate by keyboard and verify visible focus indicators and the skip link.
- Test mobile navigation with keyboard, pointer, and Escape.
- Verify internal links and ensure release statements match actual project state.
- Confirm sitemap URLs and metadata before changing the public domain.
- Do not publish fake download links, release dates, ratings, or security claims.

## Release status

Deku Linux remains in development. The website does not provide an official ISO download because no release artifact has been approved for publication.
