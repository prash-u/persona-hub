import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/hero-section";
import { InstallPrompt } from "@/components/install-prompt";
import { PhotoReel } from "@/components/photo-reel";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { projects } from "@/lib/projects";
import { withBasePath } from "@/lib/site";

const featuredIds = new Set([
  "neural-pulse",
  "biobody-insights",
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

  return (
    <>
      <Seo title="About" description={siteConfig.description} path="/" />
      <HeroSection />
      <div className="shell section-space space-y-16 md:space-y-20">
        <InstallPrompt />

        <section
          id="about"
          className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="surface overflow-hidden p-4">
            <img
              src={siteConfig.profileImage}
              alt="Prashant Umrekar portrait"
              className="h-80 w-full rounded-[24px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <SectionHeader
              eyebrow="Short about me"
              title="Biotech is the day job. Systems thinking is the through-line."
              description="I am drawn to work where messy biological, operational, or signal-heavy systems become clearer through better tools. Persona Hub is the front door to that ecosystem: scientific prototypes, standalone browser apps, photo work, and notes from the edge of biology, data, and interaction."
            />
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://github.com/prash-u",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                GitHub
                <ExternalLink className="size-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/prashant-umrekar/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                LinkedIn
                <ExternalLink className="size-4" aria-hidden="true" />
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
        </section>

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
            description="Photography, travel, visual studies, and small moments worth keeping. The reel is curated from local images so it stays fast, reliable, and offline-friendly, with optional Instagram links per frame."
          />
          <PhotoReel items={projects.media} />
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Selected work"
            title="A few projects that best capture the overlap between biology, data, and interaction."
            description="Neural Pulse anchors the signal side, BioBody Insights shows the body-atlas direction, Live Vision Model Lab proves the privacy-first browser-tooling angle, and Gene Expression Profiling frames the molecular roadmap."
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
