import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function Biotech() {
  return (
    <>
      <Seo
        title="Biotech"
        path="/biotech"
        description="Computational biology, instrumentation, and lab tools."
      />

      <section className="container-editorial pb-10 pt-16 md:pt-24">
        <SectionHeader
          eyebrow="Computational biology"
          title="Biotech & instrumentation"
          description="A directory of standalone projects — viewers, pipelines, and detectors. Each lives in its own repository or live demo."
        />
      </section>

      <section className="container-editorial pb-24">
        <ProjectGrid projects={projects.biotech} />
      </section>
    </>
  );
}
