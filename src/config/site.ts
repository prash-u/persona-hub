/**
 * Single source of truth for site branding, navigation, SEO, and links.
 * Update this file to personalize the portfolio.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Prashant Umrekar",
  shortName: "Prashant",
  title: "Prashant Umrekar — Biotech, ML, and Visual Systems",
  tagline: "Bioprocessing · computer vision · scientific systems",
  description:
    "Selected work across bioprocessing, computer vision, biotech operations, and interactive systems for scientific work.",
  url: import.meta.env.VITE_SITE_URL || "https://example.com",
  basePath: import.meta.env.VITE_BASE_PATH || "/",
  locale: "en_US",

  author: {
    name: "Prashant Umrekar",
    role: "Bioprocessing Scientist",
    location: "London, United Kingdom",
    email: "p.umrekar@gmail.com",
    bio: "Biotech professional with GMP-compliant manufacturing experience across gene therapy, diagnostic development, and scientific tooling, with a growing focus on browser-based computer vision and practical lab systems.",
  },

  social: {
    github: "https://github.com/prash-u",
    linkedin: "",
    twitter: "",
    instagram: "",
    scholar: "",
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
      "Biotech professional with GMP-compliant manufacturing experience supporting gene therapy programmes, upstream production, deviation management, and cross-functional delivery across Manufacturing, Quality, MSAT, and Supply Chain.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
