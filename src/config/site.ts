export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Prashant Umrekar",
  shortName: "Prashant",
  role: "Bioprocessing Scientist · Biotech Systems Builder · Signal & Data Visualisation",
  tagline:
    "Scientist-engineer project hub spanning viral vector processing, molecular diagnostics, gene expression, EEG workflows, and client-side scientific tooling.",
  description:
    "Premium CV and project hub for Prashant Umrekar, presenting bioprocessing, diagnostics, bioinformatics, signal visualisation, and privacy-aware scientific tools.",
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
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
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
    jobTitle: "Bioprocessing Scientist and Biotech Systems Builder",
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
      "A premium scientist-engineer hub for biotech systems, diagnostics, signal visualisation, and client-side scientific tools."
  },
  "/photos": {
    title: "Photo & Videography",
    description:
      "Editorial media gallery featuring curated stills, reels, and visual experiments."
  },
  "/biotech": {
    title: "Scientific Work",
    description:
      "BioTech and scientific projects spanning EEG visualisation, gene expression concepts, bioinformatics, and lab training interfaces."
  },
  "/projects": {
    title: "Projects",
    description:
      "Curated biotech and personal experimental projects presented as a premium scientist-engineer showcase."
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
