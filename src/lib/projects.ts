import { z } from "zod";
import rawProjects from "@/data/projects.json";
import rawGithubMeta from "@/data/github.generated.json";
import type { GitHubEnrichedProject, ProjectCollection } from "@/lib/types";

const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
  section: z.enum(["biotech", "audiovisual", "fun"]).optional(),
  status: z.enum(["working", "wip", "upcoming"]).optional(),
  repoUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  thumb: z.string(),
  featured: z.boolean().optional(),
  type: z.enum(["biotech", "mlai", "other", "media"]),
  year: z.number(),
  githubRepo: z.string().optional()
});

const mediaSchema = projectSchema.extend({
  mediaKind: z.enum(["image", "video"]),
  category: z.enum(["portrait", "travel", "reel", "lab", "editorial"])
});

const collectionSchema = z.object({
  biotech: z.array(projectSchema),
  mlai: z.array(projectSchema),
  other: z.array(projectSchema),
  media: z.array(mediaSchema)
});

const githubMetaSchema = z.array(
  z.object({
    repo: z.string(),
    stars: z.number().optional(),
    topics: z.array(z.string()).optional(),
    homepage: z.string().optional()
  })
);

export const projects = collectionSchema.parse(rawProjects) as ProjectCollection;
export const githubMeta = githubMetaSchema.parse(
  rawGithubMeta
) as GitHubEnrichedProject[];

export const allProjects = [...projects.biotech, ...projects.mlai, ...projects.other];

export function getGithubMeta(repo?: string) {
  if (!repo) {
    return undefined;
  }

  return githubMeta.find((item) => item.repo === repo);
}
