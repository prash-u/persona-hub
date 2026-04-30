import { z } from "zod";
import rawProjects from "@/data/projects.json";
import rawGithubMeta from "@/data/github.generated.json";
import type { GitHubEnrichedProject, ProjectCollection } from "@/lib/types";

const projectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  category: z.enum(["biotech", "personal"]),
  featured: z.boolean(),
  status: z.enum(["Live", "Prototype", "Planned"]),
  maturity: z.enum(["Concept", "MVP", "In progress", "Demo-ready"]),
  description: z.string(),
  longDescription: z.string(),
  tags: z.array(z.string()),
  methods: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
  repoUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  image: z.string(),
  accent: z.string(),
  privacyNote: z.string().optional(),
  offlineCapable: z.boolean(),
  clientSideOnly: z.boolean(),
  year: z.number(),
  githubRepo: z.string().optional()
});

const mediaSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  image: z.string(),
  year: z.number(),
  mediaKind: z.enum(["image", "video"]),
  category: z.enum(["portrait", "travel", "reel", "lab", "editorial"]),
  demoUrl: z.string().optional()
});

const collectionSchema = z.object({
  biotech: z.array(projectSchema),
  personal: z.array(projectSchema),
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

export const allProjects = [...projects.biotech, ...projects.personal];

export function getGithubMeta(repo?: string) {
  if (!repo) {
    return undefined;
  }

  return githubMeta.find((item) => item.repo === repo);
}
