import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { WorkDirectory } from "@/components/work-directory";

export default function BiotechPage() {
  return (
    <>
      <Seo
        title="Scientific Work"
        description="BioTech and scientific projects spanning EEG visualisation, gene expression concepts, bioinformatics, and training-oriented scientific interfaces."
        path="/biotech"
        breadcrumbLabel="Scientific Work"
      />
      <div className="shell section-space space-y-12">
        <SectionHeader
          eyebrow="Scientific work"
          title="A focused index for the strongest biotech-facing work."
          description="This route keeps the emphasis on EEG visualisation, gene expression, bioinformatics, diagnostics, and scientific training concepts while still linking naturally back to the wider project hub."
        />
        <WorkDirectory mode="scientific" />
      </div>
    </>
  );
}
