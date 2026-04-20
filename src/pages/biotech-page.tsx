import { BiotechVisionLab } from "@/components/biotech-vision-lab";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { projects } from "@/lib/projects";

export default function BiotechPage() {
  return (
    <>
      <Seo
        title="Biotech Projects"
        description="Curated biotech project directory linking to standalone repositories and demos."
        path="/biotech"
        breadcrumbLabel="Biotech"
      />
      <div className="shell section-space space-y-8">
        <SectionHeader
          eyebrow="Biotech directory"
          title="Standalone biotech projects presented as a curated scientific portfolio."
          description="This section now combines the refined PWACV presentation style with concrete project homes under Documents/GitHub and an embedded live browser vision demo."
        />
        <BiotechVisionLab />
        <ProjectGrid items={projects.biotech} />
      </div>
    </>
  );
}
