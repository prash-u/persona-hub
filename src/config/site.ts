/**
 * Single source of truth for site branding, navigation, SEO, and links.
 * Update this file to personalize the portfolio.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Your Name",
  shortName: "Portfolio",
  title: "Your Name — Researcher, Engineer, Maker",
  tagline: "Biotech · Machine learning · Visual systems",
  description:
    "Selected work in computational biology, machine learning, and creative engineering — a working notebook of experiments, instruments, and images.",
  url: import.meta.env.VITE_SITE_URL || "https://example.com",
  basePath: import.meta.env.VITE_BASE_PATH || "/",
  locale: "en_US",

  author: {
    name: "Your Name",
    role: "Researcher & Engineer",
    location: "Somewhere on Earth",
    email: "hello@example.com",
    bio: "I build at the intersection of biological signals, machine learning, and visual computing — turning messy data into useful instruments.",
  },

  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourhandle",
    scholar: "https://scholar.google.com/",
  },

  nav: [
    { label: "Work", href: "/projects" },
    { label: "Biotech", href: "/biotech" },
    { label: "Photos", href: "/photos" },
    { label: "CV", href: "/cv" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  seo: {
    keywords: [
      "portfolio",
      "biotech",
      "machine learning",
      "computational biology",
      "EEG",
      "computer vision",
      "creative engineering",
    ],
    ogImage: "/og-image.jpg",
    twitterHandle: "@yourhandle",
  },

  cv: {
    pdfPath: "/cv.pdf",
    summary:
      "Researcher and engineer working across computational biology, machine learning, and visual computing. I prototype instruments, analysis pipelines, and interactive systems for scientific and creative work.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
