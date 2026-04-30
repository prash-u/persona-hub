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
          title="The biotech route now acts as a scientific entry point into the full portfolio."
          description="Rather than splitting biotech away from the rest of the work, this page frames the same directory through a research and translational-science lens, then keeps adjacent audio / visual and experimental work visible where it adds context."
        />
        <WorkDirectory mode="scientific" />
      </div>
    </>
  );
}
