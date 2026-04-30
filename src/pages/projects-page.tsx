import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { ProjectStoryCard } from "@/components/project-story-card";
import { projects } from "@/lib/projects";

const featuredIds = new Set([
  "neural-pulse",
  "gene-expression-profiling",
  "live-vision-model-lab"
]);

export default function ProjectsPage() {
  const biotechProjects = [
    ...projects.biotech.filter((project) => featuredIds.has(project.id)),
    ...projects.biotech.filter((project) => !featuredIds.has(project.id))
  ];

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

        <section className="space-y-8">
          <SectionHeader
            eyebrow="BioTech & scientific"
            title="Signal, molecular, and lab-facing work."
            description="This is the core archive: scientific tools shaped by biotech practice, diagnostics, EEG workflows, data interpretation, and interface design."
          />
          <div className="space-y-5">
            {biotechProjects.map((project) => (
              <ProjectStoryCard key={project.id} item={project} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Personal & experimental"
            title="Playful tools, visual ideas, and browser-first experiments."
            description="These are lighter in tone, but they still come from the same habit of making systems more interactive, privacy-aware, legible, and slightly more fun to use."
          />
          <div className="space-y-5">
            {projects.personal.map((project) => (
              <ProjectStoryCard key={project.id} item={project} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
