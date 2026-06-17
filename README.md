# Dotted i Alliance — website

Hand-coded static multi-page site. No build step; deploy the folder as-is.

**Pages:** `index.html` (Home), `about.html`, `labor-standards.html`, `section-3.html`, `build-america-buy-america.html`, `contact.html`.
**Shared:** `style.css`, `main.js`, `assets/` (`logo-i.png` = red brushstroke "i", `logo-seal.png` = full seal, `favicon.png`).
**Brand:** red `#ed1c25`; fonts Source Serif 4 (headings) + Public Sans (body), loaded from Google Fonts.
(`index-v1.html` / `index-v2.html` are earlier design explorations, not linked; delete before launch if unwanted.)

## Before launch (two quick wiring tasks)
1. **Contact form** — in `contact.html` the `<form action="#">` is a placeholder. Point it at an email/form handler (Formspree, Netlify Forms, Wix Forms, or a script) so submissions reach `info@dottedialliance.com`.
2. **Hero photo** — `index.html` hero uses an Unsplash placeholder (`background-image` URL on `.hero-fig .img`). Swap in a licensed or real DiA jobsite photo. Replace/add other imagery as desired.

## Nice-to-have before launch
- Add `Organization` / `LocalBusiness` JSON-LD (blocks in `../dia-redesign-build-spec.md`).
- Confirm the Section 3 HUD resource links still resolve.

## Deploy
Static files only. Drag-and-drop the `site/` folder into **Cloudflare Pages** or **Netlify**, or connect a git repo. Then point `dottedialliance.com` at it (and 301 the old `/section` and `/rise-center-traning` paths to `/section-3`).
