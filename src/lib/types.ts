/**
 * Shared content types for projects and media entries.
 */

export type ProjectCategory = "biotech" | "mlai" | "other" | "media";

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description?: string;
  tags: string[];
  category: ProjectCategory;
  year: number;
  thumbnail?: string;
  github?: string;
  demo?: string;
  paper?: string;
  featured?: boolean;
  status?: "live" | "research" | "archive" | "wip";
}

export type MediaKind = "photo" | "video";

export interface MediaItem {
  id: string;
  kind: MediaKind;
  title: string;
  caption?: string;
  category: string;
  year: number;
  src: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  external?: string;
  poster?: string;
}

export interface ProjectsData {
  biotech: ProjectItem[];
  mlai: ProjectItem[];
  other: ProjectItem[];
  media: MediaItem[];
}
