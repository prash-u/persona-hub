import { BiotechVisionLab } from "@/components/biotech-vision-lab";
import { EditorialProjectList } from "@/components/editorial-project-list";
import { EditorialProjectSpotlight } from "@/components/editorial-project-spotlight";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { projects } from "@/lib/projects";

export default function BiotechPage() {
  const leadProject =
    projects.biotech.find((item) => item.title === "BioBody Insights") ?? projects.biotech[0];
  const supportingProjects = projects.biotech.filter((item) => item.title !== leadProject?.title);

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
          title="Scientific systems, translational interfaces, and browser-native biotech demos."
          description="This page is structured more like a case-study index than a generic repository list, with a lead product, supporting interfaces, and a live embedded vision demo for direct interaction."
        />
        {leadProject ? (
          <EditorialProjectSpotlight
            item={leadProject}
            eyebrow="Lead biotech case study"
          />
        ) : null}
        {supportingProjects.length ? (
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Supporting projects"
              title="Additional biotech and research-facing explorations."
              description="These projects extend the main portfolio through genomic QC, EEG interface concepts, and browser-first scientific experimentation."
            />
            <EditorialProjectList
              items={supportingProjects}
              directoryHref="/biotech"
            />
          </section>
        ) : null}
        <BiotechVisionLab />
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Directory grid"
            title="Full biotech directory"
            description="A compact grid remains available for fast scanning once the editorial overview has done the heavier storytelling work."
          />
          <ProjectGrid items={projects.biotech} />
        </section>
      </div>
    </>
  );
}
