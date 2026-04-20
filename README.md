# Premium Portfolio PWA

A premium React + TypeScript portfolio PWA designed as a polished personal hub, digital CV, and directory to standalone biotech, ML/AI, and creative projects.

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
VITE_BASE_PATH=/PWACV/
VITE_SITE_URL=https://your-username.github.io/PWACV/
VITE_GH_TOKEN=github_personal_access_token_optional
```

- `VITE_BASE_PATH`: use `/` for root hosting or `/<repo-name>/` for GitHub Pages project hosting
- `VITE_SITE_URL`: canonical public URL used for SEO metadata and sitemap generation
- `VITE_GH_TOKEN`: optional. If present at build time, project cards are enriched with GitHub stars, topics, and homepage metadata. If absent, the site works entirely from local JSON data.

## Content customization

- Edit site-wide branding and links in `src/config/site.ts`
- Update project and media data in `src/data/projects.json`
- Replace placeholder media in `public/media`
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

If your repository name changes from `PWACV`, update `VITE_BASE_PATH` in the workflow accordingly.

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

- The portfolio is intentionally a curated directory to standalone repositories and demos rather than a single repo dump.
- The app is static-host friendly and client-side first, with PWA caching for improved offline resilience and privacy.
- The visual system is designed to look strong with placeholder content, so the first pass is already presentation-ready.
