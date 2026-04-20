import raw from "@/data/projects.json";
import type { ProjectsData, ProjectItem, MediaItem } from "./types";

const data = raw as ProjectsData;

export const projects = data;

export const allProjects: ProjectItem[] = [
  ...data.biotech,
  ...data.mlai,
  ...data.other,
];

export const featuredProjects: ProjectItem[] = allProjects.filter((p) => p.featured);

export const photos: MediaItem[] = data.media.filter((m) => m.kind === "photo");
export const videos: MediaItem[] = data.media.filter((m) => m.kind === "video");
export const allMedia: MediaItem[] = data.media;

export const photoCategories = Array.from(
  new Set(data.media.map((m) => m.category))
).sort();
