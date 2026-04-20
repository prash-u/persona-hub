import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects"
        path="/projects"
        description="Machine learning, software, and creative engineering work."
      />

      <section className="container-editorial pb-10 pt-16 md:pt-24">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects"
          description="ML, software, and creative-technical projects — grouped by intent."
        />
      </section>

      <section className="container-editorial pb-16">
        <div className="mb-8 flex items-baseline gap-4">
          <h3 className="text-display text-2xl font-medium tracking-tight md:text-3xl">
            Machine learning & AI
          </h3>
          <span className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
            {projects.mlai.length} entries
          </span>
        </div>
        <ProjectGrid projects={projects.mlai} />
      </section>

      <div className="container-editorial">
        <div className="hairline" />
      </div>

      <section className="container-editorial pb-24 pt-16">
        <div className="mb-8 flex items-baseline gap-4">
          <h3 className="text-display text-2xl font-medium tracking-tight md:text-3xl">
            Other & creative
          </h3>
          <span className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
            {projects.other.length} entries
          </span>
        </div>
        <ProjectGrid projects={projects.other} />
      </section>
    </>
  );
}
