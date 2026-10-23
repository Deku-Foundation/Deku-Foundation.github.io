# Deku Foundation website

The public website is a build-free static site for Deku Foundation, an independent multi-project open-source engineering organization: <https://deku-foundation.github.io/>. Deku Linux is the first platform project; the foundation also publishes language research and cross-project engineering practices.

## Governance and contribution

- [Contributing](CONTRIBUTING.md) — the shared `dev` → `main` review and validation workflow.
- [Engineering workflow](ENGINEERING_WORKFLOW.md) — branch lifecycle, CI expectations, and honest release claims.
- [Governance](GOVERNANCE.md) — decision records, repository responsibilities, and transparent project status.
- [Security policy](SECURITY.md) — vulnerability reporting and security engineering priorities.
- [Code of conduct](CODE_OF_CONDUCT.md) — expected behavior and private reporting of conduct concerns.

## Languages

- English: `/`
- French: `/fr/`
- Arabic: `/ar/`

The primary project pages are available in English, French and Arabic: overview, documentation, installation status, security, community, roadmap, development updates and FAQ. Arabic pages use `lang="ar"` and `dir="rtl"`. Each translated page should preserve the purpose and current status of its English counterpart without claiming features that are not implemented.

## Structure

- `index.html`, `fr/index.html` and `ar/index.html` — the foundation-wide portfolio landing page in English, French and Arabic.
- `ecosystem/`, `fr/ecosystem/` and `ar/ecosystem/` — a multilingual directory for the seven core repositories, project information areas and contribution routes.
- `fr/` and `ar/` — translated page routes with equivalent information architecture.
- `about.html`, `fr/about/` and `ar/about/` — foundation mission, current portfolio, upstream-first principles and the research/prototype/release workflow.
- `docs/` — documentation landing page and website standards.
- `architecture/` — evidence-led system design in English, French and Arabic, covering upstream lessons, compatibility limits, immutable storage, recovery and security.
- `development/`, `fr/development/`, `ar/development/` — a multilingual engineering hub for repositories, issues, pull requests, Actions, contribution workflow and the current limits of GitHub’s discussion/project features.
- `fr/docs/website-standards/` and `ar/docs/website-standards/` — localized website quality standards.
- `scripts/check_sitemap.py` — dependency-free checks for sitemap targets and language alternates.
- `scripts/check_design_tokens.py` — targeted WCAG contrast-ratio and minimum microtype regression checks for selected text pairs.
- `install/` — release status; no official ISO download is advertised.
- `security/` — security posture and reporting guidance.
- `community/` — contribution channels and review expectations.
- `roadmap/` — engineering milestones and testable exit criteria.
- `updates/` — verified sources for ongoing repository changes.
- `assets/styles.css` — green design tokens, responsive components, RTL rules and reduced-motion support.
- `assets/main.js` — small progressive enhancement for the responsive navigation and current year.
- `sitemap.xml` and `robots.txt` — search-engine discovery.
- `.github/workflows/pages.yml` — local-link, document structure, language metadata, image alternatives, sitemap/hreflang, JavaScript and deployment checks.

## Design and implementation decisions

The published site remains static HTML, CSS and small JavaScript. An experimental `site-v2` Docusaurus scaffold was not promoted: it lacked a complete translation/content/assets set and validated production build. Keep the known-good static pipeline until a migration demonstrates stable dependencies, complete EN/FR/AR coverage, equivalent SEO/accessibility and green build checks. The design uses a Deku-owned evergreen palette, system-font stacks, local SVG branding, semantic HTML, visible keyboard focus, skip links, language-prefixed routes and logical CSS properties for RTL.

The design principles are informed by established open systems including [GitHub Primer](https://primer.style/product/getting-started/foundations/), [Astro/Starlight i18n](https://starlight.astro.build/guides/i18n/), the [GOV.UK Design System](https://design-system.service.gov.uk/) and [WCAG 2.2](https://www.w3.org/TR/WCAG22/). No code, fonts or brand artwork are copied from these projects. See [Website design and quality standards](docs/website-standards.html) for the October 2026 design review and its limits.

## Local preview

Serve the repository root with any static HTTP server:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>.

No npm install or compilation step is required.

## Validation and release process

Pull requests run the website validation workflow. The deploy job is gated to a push to the default branch after validation succeeds and receives Pages permissions only in that job. A successful pull-request check is not proof that production deployment completed; verify the default-branch deployment and the published URL separately.

The architecture guide records the proposed compatibility policy and links to primary upstream documentation rather than presenting design proposals as completed functionality. Before merge, review local links and language routes, run the GitHub Actions checks, and inspect the English, French and Arabic pages at desktop and mobile widths. Manual review must include keyboard-only navigation, visible focus, zoom, reduced motion, Arabic text direction, mixed Arabic/English technical terms and actual language-switch targets.

## Public-status rule

Deku Linux is still in development. The website must not advertise a download, version, release date, security certification, performance figure or feature as shipped unless an actual artifact and evidence support the claim. The package manager, build system and installer remain prototypes; there is no official ISO release.

## Contribution

Small, reviewable improvements are preferred. Follow the project’s contribution process in the main [project repository](https://github.com/Deku-Foundation/deku-linux/blob/main/CONTRIBUTING.md). Translation changes should be reviewed for meaning and technical terminology, not merely for matching word count.
