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
        <section className="route-hero">
          <SectionHeader
            eyebrow="Scientific work"
            title="A focused index for the strongest biotech-facing work."
            description="This route keeps the emphasis on EEG visualisation, differential expression, pathway mapping, diagnostics, and scientific training concepts while still linking naturally back to the wider project hub."
          />
          <div className="page-panel">
            <p className="eyebrow">Portfolio frame</p>
            <p className="text-sm leading-7 text-muted-foreground">
              The scientific route is where the portfolio feels most distinctive: regulated biotech context on one side, interface-led explanation and analysis surfaces on the other.
            </p>
          </div>
        </section>
        <WorkDirectory mode="scientific" />
      </div>
    </>
  );
}
