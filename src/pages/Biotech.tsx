import { Seo } from "@/components/Seo";
import { BiotechVisionLab } from "@/components/BiotechVisionLab";
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
          description="A directory of standalone projects, plus a browser-based webcam lab for trying live computer vision models directly on the page."
        />
      </section>

      <BiotechVisionLab />

      <section className="container-editorial pb-24">
        <ProjectGrid projects={projects.biotech} />
      </section>
    </>
  );
}
