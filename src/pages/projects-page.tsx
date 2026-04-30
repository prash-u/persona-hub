import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { WorkDirectory } from "@/components/work-directory";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description="Curated BioTech and personal experimental projects presented as a scientist-engineer showcase."
        path="/projects"
        breadcrumbLabel="Projects"
      />
      <div className="shell section-space space-y-14">
        <SectionHeader
          eyebrow="Projects"
          title="A curated project hub for scientific tools and personal experiments."
          description="The strongest scientific work appears first, planned tools stay clearly marked, and supporting experimental projects show range without diluting the biotech identity."
        />
        <WorkDirectory mode="all" />
      </div>
    </>
  );
}
