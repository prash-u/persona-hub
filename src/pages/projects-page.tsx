import { EditorialProjectList } from "@/components/editorial-project-list";
import { EditorialProjectSpotlight } from "@/components/editorial-project-spotlight";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const leadMlProject =
    projects.mlai.find((item) => item.title === "Neural Pulse Play") ?? projects.mlai[0];

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
            title="Applied intelligence work with a clearer product and interpretation lens."
            description="This section emphasizes interactive demos and client-side technical products that are easier to understand, share, and evaluate than a plain repository list."
          />
          {leadMlProject ? (
            <EditorialProjectSpotlight
              item={leadMlProject}
              eyebrow="Lead ML / AI project"
            />
          ) : null}
        </section>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Other work"
            title="Software, analysis, and supporting technical systems."
            description="These projects sit alongside the flagship biotech work and show how the same product thinking extends into broader tooling, analysis, and browser-based experimentation."
          />
          <EditorialProjectList
            items={projects.other}
            directoryHref="/projects"
          />
        </section>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Directory grid"
            title="Full cross-disciplinary project directory"
            description="A compact grid remains below for quick scanning and repeat visits."
          />
          <ProjectGrid items={[...projects.mlai, ...projects.other]} />
        </section>
      </div>
    </>
  );
}
