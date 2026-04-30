import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { ProjectStoryCard } from "@/components/project-story-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import type { ProjectItem } from "@/lib/types";

const featuredIds = new Set([
  "neural-pulse",
  "gene-expression-profiling",
  "live-vision-model-lab"
]);

type ProjectFilter =
  | "all"
  | "biotech"
  | "personal"
  | "live"
  | "prototype"
  | "planned";

const filters: Array<{ label: string; value: ProjectFilter }> = [
  { label: "All", value: "all" },
  { label: "BioTech & Scientific", value: "biotech" },
  { label: "Personal & Experimental", value: "personal" },
  { label: "Live", value: "live" },
  { label: "Prototype", value: "prototype" },
  { label: "Planned", value: "planned" }
];

function applyFilter(project: ProjectItem, filter: ProjectFilter) {
  if (filter === "all") {
    return true;
  }

  if (filter === "biotech" || filter === "personal") {
    return project.category === filter;
  }

  return project.status.toLowerCase() === filter;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const biotechProjects = [
    ...projects.biotech.filter((project) => featuredIds.has(project.id)),
    ...projects.biotech.filter((project) => !featuredIds.has(project.id))
  ];
  const personalProjects = projects.personal;

  const visibleBiotechProjects = biotechProjects.filter((project) =>
    applyFilter(project, activeFilter)
  );
  const visiblePersonalProjects = personalProjects.filter((project) =>
    applyFilter(project, activeFilter)
  );
  const hasProjects =
    visibleBiotechProjects.length > 0 || visiblePersonalProjects.length > 0;

  return (
    <>
      <Seo
        title="Projects"
        description="A story archive of biotech and personal experimental projects built around complex systems, privacy-aware tools, and interactive scientific thinking."
        path="/projects"
        breadcrumbLabel="Projects"
      />
      <div className="shell section-space space-y-14 md:space-y-16">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="A story archive of tools, experiments, and systems-in-progress."
            description="Some of these projects are grounded in real lab workflows. Others are lighter experiments shaped by the same instinct: if a process is difficult to understand, there is usually a better way to see it."
          />
          <div className="surface space-y-3 p-6">
            <p className="eyebrow">A note on scope</p>
            <p className="text-sm leading-7 text-muted-foreground">
              I would rather show the shape of the work honestly than pretend
              every idea is finished. Most of the projects here are prototypes,
              concepts, or evolving browser-first tools.
            </p>
          </div>
        </section>

        <section className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </section>

        {hasProjects ? (
          <>
            {visibleBiotechProjects.length ? (
              <section className="space-y-8">
                <SectionHeader
                  eyebrow="BioTech & scientific"
                  title="Signal, molecular, and lab-facing work."
                  description="This is the core archive: scientific tools shaped by biotech practice, diagnostics, EEG workflows, data interpretation, and interface design."
                />
                <div className="space-y-5">
                  {visibleBiotechProjects.map((project) => (
                    <ProjectStoryCard key={project.id} item={project} />
                  ))}
                </div>
              </section>
            ) : null}

            {visiblePersonalProjects.length ? (
              <section className="space-y-8">
                <SectionHeader
                  eyebrow="Personal & experimental"
                  title="Playful tools, visual ideas, and browser-first experiments."
                  description="These are lighter in tone, but they still come from the same habit of making systems more interactive, privacy-aware, legible, and slightly more fun to use."
                />
                <div className="space-y-5">
                  {visiblePersonalProjects.map((project) => (
                    <ProjectStoryCard key={project.id} item={project} />
                  ))}
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section className="surface p-8 text-center">
            <p className="eyebrow">No matching projects</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Nothing in this slice yet.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              Try another filter to move back across the archive. Planned work,
              prototypes, and live demos are intentionally separated so the
              maturity of each idea stays clear.
            </p>
          </section>
        )}
      </div>
    </>
  );
}
