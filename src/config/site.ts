export type NavItem = {
  label: string;
  href: string;
};

const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL ?? "";

export const siteConfig = {
  name: "Prashant Umrekar",
  shortName: "Prashant",
  role: "Bioprocessing Scientist · Builder · Signal & Data Explorer",
  tagline:
    "A cinematic CV PWA for scientific systems, visual thinking, and privacy-first browser tools shaped by biotech practice.",
  description:
    "Personal CV and project hub for Prashant Umrekar, combining biotechnology, signal exploration, translational biology, creative media, and privacy-first browser-based tools.",
  email: "p.umrekar@gmail.com",
  siteUrl:
    import.meta.env.VITE_SITE_URL ?? "https://prash-u.github.io/persona-hub/",
  basePath: import.meta.env.VITE_BASE_PATH ?? "/",
  profileImage: "https://github.com/prash-u.png?size=400",
  instagramUrl,
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
    ...(instagramUrl
      ? [
          {
            label: "Instagram",
            href: instagramUrl
          }
        ]
      : []),
    {
      label: "Photo Reel",
      href: "/photos"
    },
    {
      label: "Email",
      href: "mailto:p.umrekar@gmail.com"
    }
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Scientific Work", href: "/biotech" },
    { label: "Projects", href: "/projects" },
    { label: "Photos", href: "/photos" },
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
    jobTitle: "Bioprocessing Scientist and Builder of Interactive Systems",
    sameAs: [
      "https://github.com/prash-u",
      "https://www.linkedin.com/in/prashant-umrekar/",
      ...(instagramUrl ? [instagramUrl] : [])
    ]
  }
} as const;

export const routeMeta = {
  "/": {
    title: "About",
    description:
      "A personal landing page for biotech work, scientific curiosity, creative media, and privacy-first browser tools."
  },
  "/photos": {
    title: "Photo Reel",
    description: "Curated stills, reels, and visual notes from outside the lab."
  },
  "/biotech": {
    title: "Scientific Work",
    description:
      "Scientific projects spanning EEG visualisation, translational biology, differential expression, bioinformatics, and lab training interfaces."
  },
  "/projects": {
    title: "Projects",
    description:
      "A story archive of biotech and personal experimental projects shaped by scientific curiosity and privacy-first browser tooling."
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
