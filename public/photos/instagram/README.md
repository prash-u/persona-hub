# Instagram media

Place curated Instagram exports, reel covers, and selected stills here.

Images should be manually downloaded/exported from Instagram. Do not scrape
Instagram or link directly to Instagram CDN media URLs; those URLs are unstable
and are not suitable for an offline-friendly PWA.

Recommended naming:

- `ig-2026-01.jpg`
- `ig-2026-02.webp`
- `portrait-01.jpg`
- `travel-01.webp`
- `lab-01.jpg`

Keep file sizes optimized before committing. Aim for less than 300 KB per image
where possible, and prefer WebP for photographic exports.

Reference these files from `src/data/projects.json` using paths like:

```json
"/photos/instagram/reel-01.jpg"
```

Keep this folder curated. Six to twelve strong images will usually feel better than a full feed mirror.
