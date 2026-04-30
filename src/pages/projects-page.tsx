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
          title="A curated showcase first, then a deeper directory."
          description="This route now behaves more like a premium portfolio front than a repo list: lead work first, category tabs second, and the full archive only after the strongest impression has already been made."
        />
        <WorkDirectory mode="all" />
      </div>
    </>
  );
}
