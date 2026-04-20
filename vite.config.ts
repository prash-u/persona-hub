import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const repoBase = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base: repoBase,
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "icons/icon-192.png",
        "icons/icon-256.png",
        "icons/icon-512.png"
      ],
      manifest: {
        name: "Prashant Umrekar Portfolio",
        short_name: "Prashant",
        description: "A premium portfolio PWA for biotech, ML/AI, and creative work.",
        theme_color: "#0f172a",
        background_color: "#f4f7fb",
        display: "standalone",
        start_url: repoBase,
        scope: repoBase,
        icons: [
          {
            src: `${repoBase}icons/icon-192.png`,
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: `${repoBase}icons/icon-256.png`,
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: `${repoBase}icons/icon-512.png`,
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,webp,woff2,pdf,json}"],
        navigateFallback: `${repoBase}index.html`,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 5
            }
          },
          {
            urlPattern: ({ request }) =>
              ["style", "script", "worker"].includes(request.destination),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "asset-cache"
            }
          },
          {
            urlPattern: ({ request }) =>
              ["image", "font"].includes(request.destination),
            handler: "CacheFirst",
            options: {
              cacheName: "media-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
