export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Prashant Umrekar",
  shortName: "Prashant",
  role: "Bioprocessing Scientist · Scientific Interface Builder · Browser ML Prototyper",
  tagline:
    "A portfolio spanning bioprocessing operations, neural interfaces, browser-based vision systems, and scientific product thinking.",
  description:
    "Premium portfolio PWA showcasing biotech systems, browser-based neurotechnology and vision prototypes, and a digital CV grounded in manufacturing, diagnostics, and scientific operations.",
  email: "p.umrekar@gmail.com",
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://prash-u.github.io/persona-hub/",
  basePath: import.meta.env.VITE_BASE_PATH ?? "/",
  location: "London, United Kingdom",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/prash-u"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prashant-umrekar/"
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
    jobTitle: "Bioprocessing Scientist and Scientific Interface Builder",
    sameAs: [
      "https://github.com/prash-u",
      "https://www.linkedin.com/in/prashant-umrekar/"
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
