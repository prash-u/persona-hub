import { ExternalLink, Microscope, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { EditorialProjectList } from "@/components/editorial-project-list";
import { EditorialProjectSpotlight } from "@/components/editorial-project-spotlight";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { allProjects, projects } from "@/lib/projects";
import { withBasePath } from "@/lib/site";

type WorkDirectoryMode = "all" | "scientific";
type WorkTab = "showcase" | "biotech" | "personal";

type WorkDirectoryProps = {
  mode: WorkDirectoryMode;
};

const statusCounts = [
  {
    key: "Live",
    label: "Live",
    copy: "Deployed or demo-ready standalone tools."
  },
  {
    key: "Prototype",
    label: "Prototype",
    copy: "Working concepts with meaningful interaction already in place."
  },
  {
    key: "Planned",
    label: "Planned",
    copy: "Future tools framed honestly as concepts, not overclaimed products."
  }
] as const;

export function WorkDirectory({ mode }: WorkDirectoryProps) {
  const [activeTab, setActiveTab] = useState<WorkTab>(mode === "scientific" ? "biotech" : "showcase");

  const biotechProjects = useMemo(
    () => projects.biotech,
    []
  );
  const personalProjects = useMemo(
    () => projects.personal,
    []
  );
  const featuredProjects = useMemo(
    () => allProjects.filter((project) => project.featured),
    []
  );

  const neuralPulse =
    biotechProjects.find((project) => project.id === "neural-pulse") ?? biotechProjects[0];
  const personalLead =
    personalProjects.find((project) => project.id === "live-vision-model-lab") ?? personalProjects[0];
  const reelItem = projects.media.find((item) => item.category === "reel") ?? projects.media[0];

  const groupedBiotech = {
    featured: biotechProjects.filter((project) => project.featured && project.id !== neuralPulse?.id),
    archive: biotechProjects.filter((project) => project.id !== neuralPulse?.id)
  };

  const neuralSystems = biotechProjects.filter((project) =>
    ["neural-pulse"].includes(project.id)
  );
  const molecularSystems = biotechProjects.filter((project) =>
    [
      "biobody-insights",
      "gene-expression-profiling",
      "bioinformatics-sequence-alignment-tool",
      "microarray-data-processor"
    ].includes(project.id)
  );
  const labSystems = biotechProjects.filter((project) =>
    [
      "virtual-lab-simulator",
      "drug-interaction-predictor",
      "environmental-impact-calculator",
      "disease-outbreak-prediction-model",
      "tissue-engineering-visualization"
    ].includes(project.id)
  );

  const groupedPersonal = {
    featured: personalProjects.filter((project) => project.featured && project.id !== personalLead?.id),
    archive: personalProjects.filter((project) => project.id !== personalLead?.id)
  };

  const renderOverview = (
    <section className="grid gap-4 lg:grid-cols-3">
      {statusCounts.map((item) => (
        <article key={item.key} className="surface p-6">
          <p className="eyebrow">{item.label}</p>
          <p className="font-display mt-4 text-4xl">
            {allProjects.filter((project) => project.status === item.key).length}
          </p>
          <p className="text-muted-foreground mt-3 text-sm leading-7">{item.copy}</p>
        </article>
      ))}
    </section>
  );

  const renderShowcase = (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Featured projects"
        title="A curated first pass through the strongest scientific and experimental work."
        description="This view behaves like a premium portfolio front door: selective, high-signal, and anchored by a few projects that best represent the mix of biotech practice and interactive tool building."
      />
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        {neuralPulse ? (
          <EditorialProjectSpotlight
            item={neuralPulse}
            eyebrow="EEG flagship"
            title="Neural Pulse · EEG visualisation"
          />
        ) : null}
        <div className="grid gap-4">
          <article className="surface overflow-hidden p-6">
            <p className="eyebrow">Photo reel from Instagram</p>
            <h3 className="mt-3 text-2xl font-semibold">
              A cleaner showcase layer for visual work and creative output.
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-7">
              The media route is positioned as a personal visual showcase, not a disconnected gallery. It is the natural home for a curated Instagram-derived reel and selected photography.
            </p>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-border/70">
              <img
                src={reelItem?.image}
                alt={reelItem?.title ?? "Photo reel preview"}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button onClick={() => (window.location.href = withBasePath("/photos"))}>
                Open showcase
              </Button>
              {reelItem?.demoUrl ? (
                <Button
                  variant="outline"
                  onClick={() => window.open(reelItem.demoUrl, "_blank", "noopener,noreferrer")}
                >
                  Open reel
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Button>
              ) : null}
            </div>
          </article>
          {featuredProjects
            .filter((project) => project.id !== neuralPulse?.id)
            .slice(0, 3)
            .map((project, index) => (
              <article key={project.id} className="surface p-5">
                <p className="eyebrow">0{index + 2} / Selected</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{project.description}</p>
              </article>
            ))}
        </div>
      </div>
      <ProjectGrid items={featuredProjects} />
    </section>
  );

  const renderBiotech = (
    <section id="biotech" className="space-y-8">
      <SectionHeader
        eyebrow="BioTech & scientific projects"
        title="An ecosystem of scientific tools organised around neural, molecular, and lab systems."
        description="This is the strongest framing for the portfolio: not a list of disconnected ideas, but a set of interface-led tools solving different classes of scientific problems."
      />
      {neuralPulse ? (
        <EditorialProjectSpotlight
          item={neuralPulse}
          eyebrow="Lead project"
          title="Neural Pulse · EEG visualisation"
        />
      ) : null}
      {neuralSystems.length > 1 ? (
        <EditorialProjectList
          items={neuralSystems.slice(1)}
          heading="Neural systems"
          description="Signal-first tools focused on EEG review, filtering, interpretation, and neural visualisation."
        />
      ) : null}
      {molecularSystems.length ? (
        <EditorialProjectList
          items={molecularSystems}
          heading="Molecular systems"
          description="Gene expression, biological mapping, sequence comparison, and matrix-style analysis concepts built around interpretable data workflows."
        />
      ) : null}
      {labSystems.length ? (
        <EditorialProjectList
          items={labSystems}
          heading="Lab systems"
          description="Training, workflow, and operational concepts shaped by real exposure to GMP, diagnostics, documentation, and process thinking."
        />
      ) : null}
    </section>
  );

  const renderPersonal = (
    <section id="personal" className="space-y-8">
      <SectionHeader
        eyebrow="Personal & experimental projects"
        title="Playful, visual, and exploratory tools that still reflect strong product thinking."
        description="These projects sit outside the core biotech identity but still show interface design, privacy-aware browser workflows, and a habit of turning ideas into tangible tools."
      />
      {personalLead ? (
        <EditorialProjectSpotlight
          item={personalLead}
          eyebrow="Lead experimental project"
        />
      ) : null}
      {groupedPersonal.featured.length ? (
        <EditorialProjectList
          items={groupedPersonal.featured}
          heading="Additional experimental work"
          description="Concepts and prototypes ranging from consumer-facing scanning tools to creative and educational browser experiences."
        />
      ) : null}
      <ProjectGrid items={groupedPersonal.archive} />
    </section>
  );

  return (
    <div className="space-y-14">
      {renderOverview}

      {mode === "all" ? (
        <>
          <section className="surface flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Project view</p>
              <p className="mt-3 text-lg font-semibold">
                This project hub is selective on purpose.
              </p>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Live and prototype work link outward to dedicated apps or repositories. Planned tools stay clearly marked as concepts so the portfolio stays trustworthy rather than feeling padded.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 rounded-full border border-border/60 bg-background/65 p-1.5">
              {[
                { key: "showcase", label: "Showcase", icon: Sparkles },
                { key: "biotech", label: "BioTech", icon: Microscope },
                { key: "personal", label: "Personal", icon: Sparkles }
              ].map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveTab(item.key as WorkTab)}
                    className={`focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </section>
          {activeTab === "showcase" ? renderShowcase : null}
          {activeTab === "biotech" ? renderBiotech : null}
          {activeTab === "personal" ? renderPersonal : null}
        </>
      ) : (
        <>
          {renderBiotech}
          <section className="space-y-8">
            <SectionHeader
              eyebrow="Selected adjacent work"
              title="A few supporting projects that extend the scientific profile without diluting it."
              description="The scientific route stays mostly biotech-focused, but a couple of adjacent projects remain visible to show range in browser-based interface and visual tool building."
            />
            <ProjectGrid items={featuredProjects.filter((project) => project.category === "personal").slice(0, 2)} />
            <Link
              to="/projects"
              className="focus-ring inline-flex items-center gap-2 text-sm font-semibold"
            >
              Open the full project hub
              <ExternalLink className="size-4" aria-hidden="true" />
            </Link>
          </section>
        </>
      )}
    </div>
  );
}
