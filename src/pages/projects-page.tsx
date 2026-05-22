import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { ProjectStoryCard } from "@/components/project-story-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import type { ProjectItem } from "@/lib/types";

const featuredIds = new Set([
  "neural-pulse",
  "network-pulse-analyzer",
  "rare-signal",
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

const stageGroups = [
  {
    id: "active",
    eyebrow: "Active prototypes",
    title: "Working apps and demos with real interaction models.",
    description:
      "These are the strongest ecosystem pieces right now: standalone tools with enough shape to explore, test, and improve.",
    matches: (project: ProjectItem) =>
      project.status === "Live" || project.status === "Prototype"
  },
  {
    id: "planned",
    eyebrow: "Planned concepts",
    title: "Ideas with clear scientific or product direction.",
    description:
      "These are intentionally marked as planned so the archive stays honest about what exists today and what is still being shaped.",
    matches: (project: ProjectItem) => project.status === "Planned"
  }
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

  const orderedProjects = [
    ...projects.biotech,
    ...projects.personal
  ].sort((a, b) => {
    const featuredDelta =
      Number(featuredIds.has(b.id)) - Number(featuredIds.has(a.id));

    if (featuredDelta !== 0) {
      return featuredDelta;
    }

    return a.title.localeCompare(b.title);
  });

  const visibleProjects = orderedProjects.filter((project) =>
    applyFilter(project, activeFilter)
  );
  const hasProjects = visibleProjects.length > 0;

  return (
    <>
      <Seo
        title="Projects"
        description="A story archive of biotech and personal experimental projects built around complex systems, privacy-aware tools, and interactive scientific thinking."
        path="/projects"
        breadcrumbLabel="Projects"
      />
      <div className="shell section-space space-y-14 md:space-y-16">
        <section className="route-hero">
          <SectionHeader
            eyebrow="Projects"
            title="A story archive of tools, experiments, and systems-in-progress."
            description="Some routes are grounded in real lab or translational workflows. Others are lighter experiments shaped by the same instinct: if a process is difficult to understand, there is usually a better way to see it."
          />
          <div className="page-panel space-y-4">
            <p className="eyebrow">How to read the archive</p>
            <p className="text-sm leading-7 text-muted-foreground">
              This route is intentionally honest about maturity. Live and demo-ready work sits next to active prototypes and planned concepts so the portfolio stays credible rather than overproduced.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="signal-metric">
                <p className="eyebrow">Live</p>
                <p className="mt-2 text-lg font-semibold">Deployed apps</p>
              </div>
              <div className="signal-metric">
                <p className="eyebrow">Prototype</p>
                <p className="mt-2 text-lg font-semibold">Meaningful interaction</p>
              </div>
              <div className="signal-metric">
                <p className="eyebrow">Planned</p>
                <p className="mt-2 text-lg font-semibold">Clear direction</p>
              </div>
            </div>
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
          stageGroups.map((stage) => {
            const stageProjects = visibleProjects.filter(stage.matches);

            if (!stageProjects.length) {
              return null;
            }

            return (
              <section
                key={stage.id}
                className="space-y-8"
              >
                <SectionHeader
                  eyebrow={stage.eyebrow}
                  title={stage.title}
                  description={stage.description}
                />
                <div className="space-y-5">
                  {stageProjects.map((project) => (
                    <ProjectStoryCard
                      key={project.id}
                      item={project}
                    />
                  ))}
                </div>
              </section>
            );
          })
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
