import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description="ML/AI, software, and miscellaneous technical projects presented as a polished directory."
        path="/projects"
        breadcrumbLabel="Projects"
      />
      <div className="shell section-space space-y-14">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="ML / AI"
            title="Applied intelligence work with a clear product and privacy lens."
            description="A mix of ML prototypes and practical tools, designed to run gracefully on the client where possible and to remain legible as standalone public work."
          />
          <ProjectGrid items={projects.mlai} />
        </section>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Other work"
            title="Software, collection tooling, and creative technical systems."
            description="This section is intentionally broad enough to house software products, experimental utilities, and creative or interdisciplinary work without diluting the portfolio structure."
          />
          <ProjectGrid items={projects.other} />
        </section>
      </div>
    </>
  );
}
