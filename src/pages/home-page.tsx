import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/hero-section";
import { InstallPrompt } from "@/components/install-prompt";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { projects } from "@/lib/projects";
import { withBasePath } from "@/lib/site";

const featuredIds = new Set([
  "neural-pulse",
  "gene-expression-profiling",
  "live-vision-model-lab"
]);

const currentlyBuilding = [
  {
    title: "Neural Pulse",
    description:
      "EEG signal visualisation and neural data playground for exploring simulated and structured brainwave activity."
  },
  {
    title: "Live Vision Model Lab",
    description:
      "Client-side object detection experiments that keep camera and model inference in the browser."
  },
  {
    title: "Gene Expression Profiling",
    description:
      "A local-first concept for exploring disease-linked gene patterns through upload, clustering, and visual comparison."
  }
];

export default function HomePage() {
  const featuredProjects = [
    ...projects.biotech.filter((project) => featuredIds.has(project.id)),
    ...projects.personal.filter((project) => featuredIds.has(project.id))
  ];

  const reelItem =
    projects.media.find((item) => item.category === "reel") ??
    projects.media[0];
  const stills = projects.media
    .filter((item) => item.id !== reelItem?.id)
    .slice(0, 2);

  return (
    <>
      <Seo title="About" description={siteConfig.description} path="/" />
      <HeroSection />
      <div className="shell section-space space-y-16 md:space-y-20">
        <InstallPrompt />

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Currently building"
            title="The projects I keep returning to between lab work, notes, and experiments."
            description="The emphasis is less on launching a polished product and more on finding useful ways to make difficult signals, workflows, and visual ideas easier to explore."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {currentlyBuilding.map((item) => (
              <article key={item.title} className="surface p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Life outside the lab"
            title="A photo reel for everything that does not fit neatly into datasets."
            description="Photography, travel, visual studies, and small moments worth keeping. This stays curated and local-first for now, with room for Instagram links later."
          />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            {reelItem ? (
              <article className="surface overflow-hidden">
                <div className="overflow-hidden border-b border-border/70">
                  <img
                    src={reelItem.image}
                    alt={reelItem.title}
                    className="h-72 w-full object-cover md:h-80"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <p className="eyebrow">Photo Reel</p>
                  <h3 className="text-2xl font-semibold">{reelItem.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {reelItem.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() =>
                        (window.location.href = withBasePath("/photos"))
                      }
                    >
                      Open Photo Reel
                    </Button>
                    {siteConfig.instagramUrl ? (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(
                            siteConfig.instagramUrl,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Instagram
                        <ExternalLink className="size-4" aria-hidden="true" />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            ) : null}

            <div className="grid gap-5">
              {stills.map((item) => (
                <article key={item.id} className="surface overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-2 p-5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Selected work"
            title="Three projects that best capture the overlap between biology, data, and interaction."
            description="Neural Pulse anchors the scientific side, Gene Expression Profiling frames the molecular direction, and Live Vision Model Lab shows how far privacy-first browser tooling can go."
          />
          <ProjectGrid items={featuredProjects} />
        </section>

        <section className="surface flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">Elsewhere</p>
            <h2 className="text-2xl font-semibold">
              The full timeline lives in the CV. The rest of the archive lives
              in Projects.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              This homepage is deliberately about identity, curiosity, and the
              shape of the work. For the fuller background, the dedicated CV and
              project archive go deeper.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => (window.location.href = withBasePath("/cv"))}
            >
              Open CV
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = withBasePath("/contact"))}
            >
              Get in Touch
            </Button>
            <Link
              to="/projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-semibold"
            >
              Project archive
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
