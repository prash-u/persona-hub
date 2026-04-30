export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  category: "biotech" | "personal";
  featured: boolean;
  status: "Live" | "Prototype" | "Planned";
  maturity: "Concept" | "MVP" | "In progress" | "Demo-ready";
  description: string;
  longDescription: string;
  tags: string[];
  methods: string[];
  problem?: string;
  approach?: string;
  limitations?: string;
  nextSteps?: string;
  credibility?: string[];
  highlights?: string[];
  repoUrl?: string;
  demoUrl?: string;
  image: string;
  accent: string;
  privacyNote?: string;
  offlineCapable: boolean;
  clientSideOnly: boolean;
  year: number;
  githubRepo?: string;
};

export type MediaItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  year: number;
  mediaKind: "image" | "video";
  category: "portrait" | "travel" | "reel" | "lab" | "editorial";
  demoUrl?: string;
};

export type ProjectCollection = {
  biotech: ProjectItem[];
  personal: ProjectItem[];
  media: MediaItem[];
};

export type GitHubEnrichedProject = {
  repo: string;
  stars?: number;
  topics?: string[];
  homepage?: string;
};
