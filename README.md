# Persona Hub

Personal site and project ecosystem for Prashant Umrekar: a bioprocessing scientist building privacy-aware browser tools around biology, data, signal review, visual systems, and creative experiments.

This is not intended to be a repo dump or a generic developer portfolio. Persona Hub is the front door to the standalone project ecosystem and the place where each project gets a clearer story: why it exists, what works now, what is still planned, and where the live demo or repo lives.

## Ecosystem

Recommended GitHub profile pinning order:

1. `persona-hub` — personal front door, CV hub, project story archive, PWA.
2. `neural-pulse-play` — EEG review and neural signal playground with demo/upload workflows, playback, band modes, reference/montage modes, smoothing, artifact controls, and export roadmap.
3. `biobody-insights` — interactive whole-body systems biology atlas for genes, pathways, tissues, metabolic flux, and disease programs.
4. `live-vision-model-lab` — installable browser vision playground with webcam/image/video inference, switchable TensorFlow.js and face-api.js models, local weights, and JSON/CSV export.
5. Gene Expression Profiling — upcoming client-side expression analysis concept for fold-change, clustering, and disease-linked signal exploration.
6. Pokemon Card Scanner — upcoming playful computer-vision/OCR tool for identifying cards and estimating collection or deck value.

Major standalone repos should keep their README structure consistent:

- Why this exists
- What works now
- Roadmap
- Safety or scientific note where relevant
- Demo link
- Tech stack

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui-style source components
- React Router
- Framer Motion
- Vite Plugin PWA
- React Helmet Async
- ESLint + Prettier

## Local setup

```bash
npm install
npm run dev
```

## Codespaces

This repo is intended to run in GitHub Codespaces with Node 20.9.0 or newer.

If you opened the repository before these config files were present, rebuild the container or run:

```bash
rm -rf node_modules package-lock.json
nvm install 20.9.0
nvm use 20.9.0
npm install
```

If `node_modules` or `dist` were previously committed from macOS, remove them from git tracking once and recommit:

```bash
git rm -r --cached node_modules dist
git add .gitignore package-lock.json
git commit -m "Fix repo for cross-platform installs"
```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` prepares optional GitHub metadata, builds the app, and writes `dist/sitemap.xml`
- `npm run preview` previews the production build
- `npm run lint` runs ESLint
- `npm run format` formats the project with Prettier

## Environment variables

Create a `.env` file if you need custom deployment settings:

```bash
VITE_BASE_PATH=/persona-hub/
VITE_SITE_URL=https://your-username.github.io/persona-hub/
VITE_GH_TOKEN=github_personal_access_token_optional
VITE_INSTAGRAM_URL=https://www.instagram.com/your-username/
```

- `VITE_BASE_PATH`: use `/` for root hosting or `/<repo-name>/` for GitHub Pages project hosting
- `VITE_SITE_URL`: canonical public URL used for SEO metadata and sitemap generation
- `VITE_GH_TOKEN`: optional. If present at build time, project cards are enriched with GitHub stars, topics, and homepage metadata. If absent, the site works entirely from local JSON data.
- `VITE_INSTAGRAM_URL`: optional public profile URL used for homepage/profile links.

## Photo reel and Instagram

The homepage photo reel is intentionally curated from local media rather than scraped from Instagram or fetched with private API tokens. This keeps the PWA fast, reliable, offline-friendly, and safe for a personal Instagram account.

Recommended setup for Instagram-derived images:

1. Export or download selected Instagram images, reel covers, or stills.
2. Add them to `public/photos/instagram`.
3. Update the `media` entries in `src/data/projects.json`.
4. Add `instagramUrl` to individual media items if you want a card to link to the original public post or reel.
5. Set `VITE_INSTAGRAM_URL` in Vercel if you want the homepage to link to the Instagram profile.

Example media item:

```json
{
  "id": "tokyo-night-frame",
  "slug": "tokyo-night-frame",
  "title": "Tokyo Night Frame",
  "description": "A selected frame from travel and street photography.",
  "tags": ["Travel", "Photography"],
  "image": "/photos/instagram/tokyo-night-frame.jpg",
  "fallbackImage": "/media/photo-coastal.svg",
  "instagramUrl": "https://www.instagram.com/p/POST_ID/",
  "year": 2026,
  "mediaKind": "image",
  "category": "travel"
}
```

## Content customization

- Edit site-wide branding and links in `src/config/site.ts`
- Update project and media data in `src/data/projects.json`
- Replace placeholder media in `public/media`
- Add curated Instagram exports to `public/photos/instagram`
- Replace the placeholder CV at `public/cv.pdf`
- Replace the default social/SEO image at `public/seo/og-default.svg`

## Free deployment

### GitHub Pages

1. Push the repo to GitHub.
2. In repository settings, enable GitHub Pages and set the source to GitHub Actions.
3. Update:
   - `src/config/site.ts`
   - `.github/workflows/deploy-pages.yml`
   - repository secret `VITE_GH_TOKEN` if you want optional GitHub enrichment
4. Push to `main` and the workflow deploys `dist`.

If your repository name changes from `persona-hub`, update `VITE_BASE_PATH` in the workflow accordingly.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Add `VITE_SITE_URL` in Netlify environment variables
- Netlify Forms support is already wired into the contact form markup

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Add `VITE_SITE_URL` and optional `VITE_GH_TOKEN`

## Notes

- The hub is intentionally a curated directory to standalone repositories and demos rather than a single repo dump.
- The app is static-host friendly and client-side first, with PWA caching for improved offline resilience and privacy.
- The visual system is designed to look strong with placeholder content, so the first pass is already presentation-ready.
