export type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
  highlights?: string[];
  section?: "biotech" | "audiovisual" | "fun";
  status?: "working" | "wip" | "upcoming";
  repoUrl?: string;
  demoUrl?: string;
  thumb: string;
  featured?: boolean;
  type: "biotech" | "mlai" | "other" | "media";
  year: number;
  githubRepo?: string;
};

export type MediaItem = ProjectItem & {
  mediaKind: "image" | "video";
  category: "portrait" | "travel" | "reel" | "lab" | "editorial";
};

export type ProjectCollection = {
  biotech: ProjectItem[];
  mlai: ProjectItem[];
  other: ProjectItem[];
  media: MediaItem[];
};

export type GitHubEnrichedProject = {
  repo: string;
  stars?: number;
  topics?: string[];
  homepage?: string;
};
