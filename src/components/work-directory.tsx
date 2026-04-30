import { ArrowRight, ExternalLink, Film, Grid2X2, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EditorialProjectList } from "@/components/editorial-project-list";
import { EditorialProjectSpotlight } from "@/components/editorial-project-spotlight";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { allProjects, projects } from "@/lib/projects";
import { withBasePath } from "@/lib/site";
import type { ProjectItem } from "@/lib/types";

type WorkDirectoryMode = "all" | "scientific";
type WorkTab = "showcase" | "biotech" | "audiovisual" | "fun";

type WorkDirectoryProps = {
  mode: WorkDirectoryMode;
};

const sectionMeta = {
  biotech: {
    eyebrow: "Biotech",
    title: "Scientific systems, disease programs, and research-facing interfaces.",
    description:
      "This section carries the strongest biotech signal in the portfolio: systems biology, target discovery thinking, pathway interfaces, and scientific product framing."
  },
  audiovisual: {
    eyebrow: "Audio / Visual",
    title: "Browser-native interfaces built around perception, signals, and visual interpretation.",
    description:
      "These projects lean into interactive graphics, neural visualisation, and local-first model demos that communicate technical depth through more intuitive interfaces."
  },
  fun: {
    eyebrow: "Fun / Experimental",
    title: "Lighter concepts that still reflect product thinking and technical curiosity.",
    description:
      "Not everything needs to read like regulated scientific software. This section leaves room for playful tools, collector workflows, and experiments with broader consumer appeal."
  }
} as const;

const statusMeta = {
  working: {
    label: "Working now",
    description: "Live or substantially formed products that best represent the current portfolio."
  },
  wip: {
    label: "In progress",
    description: "Active directions that are already concrete enough to frame as product or interface work."
  },
  upcoming: {
    label: "Upcoming",
    description: "Planned concepts and placeholders that indicate where the portfolio is heading next."
  }
} as const;

function getSectionItems(section: keyof typeof sectionMeta) {
  return allProjects.filter((item) => item.section === section);
}

function getLeadProject(items: ProjectItem[], preferredTitle?: string) {
  return (
    items.find((item) => item.title === preferredTitle) ??
    items.find((item) => item.featured && item.status === "working") ??
    items.find((item) => item.featured) ??
    items[0]
  );
}

function getStatusItems(items: ProjectItem[], status: keyof typeof statusMeta, leadTitle?: string) {
  return items.filter((item) => item.status === status && item.title !== leadTitle);
}

export function WorkDirectory({ mode }: WorkDirectoryProps) {
  const [activeTab, setActiveTab] = useState<WorkTab>(mode === "scientific" ? "biotech" : "showcase");
  const overviewItems = [
    {
      value: allProjects.filter((item) => item.status === "working").length,
      label: "Working now",
      copy: "Live or mature standalone apps worth opening directly."
    },
    {
      value: allProjects.filter((item) => item.status === "wip").length,
      label: "In progress",
      copy: "Concepts already shaped enough to discuss as products."
    },
    {
      value: allProjects.filter((item) => item.status === "upcoming").length,
      label: "Upcoming",
      copy: "Intentional placeholders for the next wave of work."
    }
  ];

  const biotechItems = getSectionItems("biotech");
  const audiovisualItems = getSectionItems("audiovisual");
  const funItems = getSectionItems("fun");

  const biotechLead = getLeadProject(biotechItems, "BioBody Insights");
  const audiovisualLead = getLeadProject(audiovisualItems, "Neural Pulse Play");
  const funLead = getLeadProject(funItems, "Pokemon Card Scanner & Deck Valuation");

  const categories = [
    { key: "biotech", items: biotechItems, lead: biotechLead },
    { key: "audiovisual", items: audiovisualItems, lead: audiovisualLead },
    { key: "fun", items: funItems, lead: funLead }
  ] as const;
  const featured = allProjects.filter((item) => item.featured);
  const showcaseLead = biotechLead ?? featured[0];
  const showcaseSupporting = featured.filter((item) => item.title !== showcaseLead?.title).slice(0, 3);
  const reelItem = projects.media.find((item) => item.category === "reel") ?? projects.media[0];
  const tabItems = [
    { key: "showcase", label: "Showcase", icon: Sparkles },
    { key: "biotech", label: "Biotech", icon: Grid2X2 },
    { key: "audiovisual", label: "Audio / Visual", icon: Film },
    { key: "fun", label: "Fun", icon: Sparkles }
  ] as const;

  const renderCategory = (key: keyof typeof sectionMeta, lead: ProjectItem | undefined, items: ProjectItem[]) => {
    const content = sectionMeta[key];
    const leadTitle = lead?.title;
    const workingItems = getStatusItems(items, "working", leadTitle);
    const wipItems = getStatusItems(items, "wip", leadTitle);
    const upcomingItems = getStatusItems(items, "upcoming", leadTitle);

    return (
      <section key={key} id={key} className="space-y-8">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        {lead ? (
          <EditorialProjectSpotlight
            item={lead}
            eyebrow={mode === "scientific" && key === "biotech" ? "Lead scientific case study" : "Lead project"}
          />
        ) : null}
        {workingItems.length ? (
          <EditorialProjectList
            items={workingItems}
            heading={statusMeta.working.label}
            description={statusMeta.working.description}
          />
        ) : null}
        {wipItems.length ? (
          <EditorialProjectList
            items={wipItems}
            heading={statusMeta.wip.label}
            description={statusMeta.wip.description}
          />
        ) : null}
        {upcomingItems.length ? (
          <EditorialProjectList
            items={upcomingItems}
            heading={statusMeta.upcoming.label}
            description={statusMeta.upcoming.description}
          />
        ) : null}
      </section>
    );
  };

  return (
    <div className="space-y-14">
      <section className="grid gap-4 lg:grid-cols-3">
        {overviewItems.map((item) => (
          <article key={item.label} className="surface p-6">
            <p className="eyebrow">{item.label}</p>
            <p className="font-display mt-4 text-4xl">{item.value}</p>
            <p className="text-muted-foreground mt-3 text-sm leading-7">{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="surface flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">Portfolio behavior</p>
          <p className="mt-3 text-lg font-semibold">
            Demos launch as standalone apps rather than being embedded directly in the CV shell.
          </p>
          <p className="text-muted-foreground mt-3 text-sm leading-7">
            That keeps this PWA lighter, protects privacy for camera-based experiences, and makes each project feel like its own product rather than a bloated sub-feature of the portfolio.
          </p>
        </div>
        {mode === "scientific" ? (
          <Link
            to="/projects"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold"
          >
            Open full work directory
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        ) : (
          <div className="flex flex-wrap gap-2">
            {Object.entries(sectionMeta).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="focus-ring rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
              >
                {value.eyebrow}
              </a>
            ))}
          </div>
        )}
      </section>

      {mode === "all" ? (
        <>
          <section className="space-y-6">
            <div className="flex flex-wrap gap-2 rounded-[28px] border border-border/60 bg-background/65 p-2">
              {tabItems.map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.key;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveTab(item.key)}
                    className={`focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={active}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </section>

          {activeTab === "showcase" ? (
            <section className="space-y-8">
              <SectionHeader
                eyebrow="Showcase"
                title="A sharper front door for the strongest work, with room for media and upcoming concepts."
                description="This tab works like the curated first impression used by top portfolio sites: a few strong lead pieces, a visual reel hook, and only the most relevant ideas surfaced up front."
              />
              {showcaseLead ? (
                <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                  <EditorialProjectSpotlight
                    item={showcaseLead}
                    eyebrow="Flagship project"
                  />
                  <div className="grid gap-4">
                    <article className="surface overflow-hidden p-6">
                      <p className="eyebrow">Photo reel from Instagram</p>
                      <h3 className="mt-3 text-2xl font-semibold">
                        Selected stills and motion studies, reframed as a cleaner editorial showcase.
                      </h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-7">
                        The media side should feel like part of the personal brand, not a separate hobby dump. This route is ready to become the curated home for your reel and selected visual frames.
                      </p>
                      <div className="mt-5 overflow-hidden rounded-[24px] border border-border/70">
                        <img
                          src={reelItem?.thumb}
                          alt={reelItem?.title ?? "Photo reel preview"}
                          className="h-52 w-full object-cover"
                        />
                      </div>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <Button
                          onClick={() => (window.location.href = withBasePath("/photos"))}
                        >
                          Open showcase
                          <ArrowRight className="size-4" aria-hidden="true" />
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
                    {showcaseSupporting.map((item, index) => (
                      <article key={item.title} className="surface p-5">
                        <p className="eyebrow">0{index + 2} / Selected</p>
                        <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground mt-3 text-sm leading-7">{item.summary}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
              <section className="space-y-6">
                <SectionHeader
                  eyebrow="Selected work"
                  title="A tighter, less repetitive shortlist."
                  description="These are the projects that currently earn the most attention on a first pass."
                />
                <ProjectGrid items={featured} />
              </section>
            </section>
          ) : null}

          {activeTab === "biotech" ? renderCategory("biotech", biotechLead, biotechItems) : null}
          {activeTab === "audiovisual" ? renderCategory("audiovisual", audiovisualLead, audiovisualItems) : null}
          {activeTab === "fun" ? renderCategory("fun", funLead, funItems) : null}
        </>
      ) : (
        <>
          {renderCategory("biotech", biotechLead, biotechItems)}
          <section className="space-y-8">
            <SectionHeader
              eyebrow="Adjacent work"
              title="Selected supporting interfaces that reinforce the scientific story."
              description="A couple of adjacent projects stay visible here so the scientific route still reflects your broader product and interface range."
            />
            <ProjectGrid items={[...audiovisualItems.slice(0, 2), ...funItems.slice(0, 1)]} />
          </section>
        </>
      )}

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Archive"
          title="The full project index still exists for repeat visits."
          description="This layer is intentionally secondary now: useful for scanning, but no longer carrying the burden of the first impression."
        />
        <ProjectGrid items={allProjects} />
      </section>
    </div>
  );
}
