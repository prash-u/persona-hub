import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { WorkDirectory } from "@/components/work-directory";

export default function BiotechPage() {
  return (
    <>
      <Seo
        title="Scientific Work"
        description="A scientific lens on the broader work directory, spanning biotech systems, pathway interfaces, and adjacent visual tooling."
        path="/biotech"
        breadcrumbLabel="Scientific Work"
      />
      <div className="shell section-space space-y-12">
        <SectionHeader
          eyebrow="Scientific work"
          title="A more focused scientific index for the strongest biotech-facing work."
          description="This route stays leaner than the main showcase and emphasises the systems biology, pathway, diagnostics, and operations-adjacent parts of the portfolio without losing the broader context."
        />
        <WorkDirectory mode="scientific" />
      </div>
    </>
  );
}
