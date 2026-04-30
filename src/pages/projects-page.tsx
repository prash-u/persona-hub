import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { WorkDirectory } from "@/components/work-directory";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Work Directory"
        description="A cross-disciplinary work directory spanning biotech systems, audio / visual interfaces, and lighter experimental concepts."
        path="/projects"
        breadcrumbLabel="Work Directory"
      />
      <div className="shell section-space space-y-14">
        <SectionHeader
          eyebrow="Work directory"
          title="A single portfolio index for biotech, audio / visual systems, and lighter experimental work."
          description="This route is now the main cross-disciplinary directory. It keeps the strongest live projects visible, shows what is still in progress, and leaves room for upcoming concepts without making the portfolio feel unfinished."
        />
        <WorkDirectory mode="all" />
      </div>
    </>
  );
}
