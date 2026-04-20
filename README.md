# Portfolio — React + Vite PWA

A premium personal portfolio scaffold: editorial design system, route-split pages, offline-capable PWA, and SEO out of the box. Static-host friendly — no backend required.

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** with a custom semantic design system (HSL tokens, light/dark)
- **shadcn/ui** primitives (used selectively)
- **React Router** with route-based code splitting
- **Framer Motion** for tasteful, reduced-motion-aware animation
- **React Helmet Async** for per-route SEO
- **PhotoSwipe** lightbox for the photo gallery
- **Hand-rolled service worker + Web App Manifest** (offline + install)

## Quick start

```bash
npm install
npm run dev
```

## Codespaces

This repo is intended to run in GitHub Codespaces with Node 20.9.0 or newer.

If a Codespace was created before the lockfile or runtime config was updated, rebuild the container or run:

```bash
rm -rf node_modules package-lock.json
nvm install 20.9.0
nvm use 20.9.0
npm install
```

This repository uses `npm install` in Codespaces because the previous issue was an out-of-sync `package-lock.json`. Once the lockfile is fresh and committed, installs should be stable across Linux and macOS.

## Customizing

Almost everything you need to personalize lives in two files:

- `src/config/site.ts` — name, bio, social links, navigation, SEO defaults, CV PDF path
- `src/data/projects.json` — biotech, ML/AI, other, and media entries

Replace `public/cv.pdf`, `public/og-image.jpg`, and `public/icons/*.png` with your own assets.

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_SITE_URL` | Canonical URL used in SEO / sitemap | `https://example.com` |
| `VITE_BASE_PATH` | Vite `base` for subpath hosting (GitHub Pages project sites) | `/` |
| `VITE_GH_TOKEN` | Optional — reserved for future build-time GitHub repo enrichment | — |

## Deployment

### GitHub Pages (default)

A workflow is included at `.github/workflows/deploy.yml`.

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. If hosting at `https://<user>.github.io/<repo>/`, set repo variable `VITE_BASE_PATH=/<repo>/`.
4. Set `VITE_SITE_URL` to your canonical URL.

The workflow builds, copies `index.html` → `404.html` for SPA fallback, and deploys `dist/`.

### Netlify

- Build: `npm run build` — Publish: `dist`
- Add `public/_redirects` containing: `/* /index.html 200`
- Forms work out of the box (`<form data-netlify="true" name="contact">` is wired).

### Vercel

- Framework preset: **Vite** — Build: `npm run build`, Output: `dist`. SPA rewrites are automatic.

## PWA notes

The service worker is **disabled in development and inside iframes / Lovable preview hosts** (see `src/lib/registerSW.ts`). Install prompt and offline fallback only activate on your published site.

## Accessibility

- Skip-to-content link, semantic landmarks
- Visible `:focus-visible` rings, keyboard-safe menu and gallery
- `prefers-reduced-motion` honored globally

## License

MIT — make it yours.
