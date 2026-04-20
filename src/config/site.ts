export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Prashant Umrekar",
  shortName: "Prashant",
  role: "Bioprocessing Scientist · Builder of scientific tools",
  tagline:
    "A portfolio spanning bioprocessing, browser-based computer vision, and scientific product thinking.",
  description:
    "Premium portfolio PWA showcasing biotech projects, browser-based ML prototypes, and a digital CV anchored in real manufacturing and diagnostics experience.",
  email: "p.umrekar@gmail.com",
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://example.github.io/persona-hub/",
  basePath: import.meta.env.VITE_BASE_PATH ?? "/",
  location: "London, United Kingdom",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/prash-u"
    },
    {
      label: "Email",
      href: "mailto:p.umrekar@gmail.com"
    }
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Photos", href: "/photos" },
    { label: "Biotech", href: "/biotech" },
    { label: "Projects", href: "/projects" },
    { label: "CV", href: "/cv" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  repo: {
    owner: "prash-u",
    name: "persona-hub"
  },
  seo: {
    image: "/seo/og-default.svg",
    twitterHandle: ""
  },
  person: {
    jobTitle: "Bioprocessing Scientist",
    sameAs: [
      "https://github.com/prash-u"
    ]
  }
} as const;

export const routeMeta = {
  "/": {
    title: "Portfolio",
    description:
      "A premium personal hub for bioprocessing, biotech tooling, and browser-based ML experiments."
  },
  "/photos": {
    title: "Photo & Videography",
    description:
      "Editorial media gallery featuring curated stills, reels, and visual experiments."
  },
  "/biotech": {
    title: "Biotech Projects",
    description:
      "A curated directory of standalone biotech repositories, experiments, and scientific prototypes."
  },
  "/projects": {
    title: "Projects",
    description:
      "Selected ML/AI, software, and creative technical work with links to repositories and demos."
  },
  "/cv": {
    title: "CV",
    description:
      "Digital CV summary aligned to the February 2026 CV with experience, education, and key skills."
  },
  "/contact": {
    title: "Contact",
    description:
      "Professional contact page with direct links and a static-host friendly contact form."
  },
  "/offline": {
    title: "Offline",
    description: "Offline fallback experience for the portfolio PWA."
  }
} as const;
