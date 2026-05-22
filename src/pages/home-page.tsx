import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/hero-section";
import { InstallPrompt } from "@/components/install-prompt";
import { PhotoReel } from "@/components/photo-reel";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { allProjects, projects } from "@/lib/projects";
import { withBasePath } from "@/lib/site";

const featuredIds = new Set([
  "neural-pulse",
  "biobody-insights",
  "network-pulse-analyzer",
  "live-vision-model-lab",
  "rare-signal"
]);

const builderStrip = [
  {
    title: "RareSignal",
    status: "WIP / product prototype",
    description:
      "A local-first TCG collection intelligence surface built around scanning, archive structure, and market-style analysis."
  },
  {
    title: "Neural Pulse",
    status: "EEG flagship",
    description:
      "Clinical-style signal exploration for demo and uploaded EEG-style data with filtering, playback, and interpretability cues."
  },
  {
    title: "Network Pulse Analyzer",
    status: "Translational review app",
    description:
      "Turns differential expression signals into pathway, network, and report-ready stories for discussion and review."
  },
  {
    title: "Live Vision Model Lab",
    status: "Browser ML demo",
    description:
      "Client-side computer vision playground that keeps inference local while making model behaviour visible and testable."
  }
];

const routeCards = [
  {
    eyebrow: "Scientific work",
    title: "Neural systems, molecular systems, and lab-facing interfaces.",
    description:
      "The biotech route is the strongest expression of the portfolio: real scientific context translated into browsable systems and product surfaces.",
    href: "/biotech",
    action: "Open scientific work"
  },
  {
    eyebrow: "CV + contact",
    title: "The recruiter-facing layer stays direct, credible, and easy to scan.",
    description:
      "The CV and contact routes are designed to support serious opportunities without losing the character of the wider portfolio.",
    href: "/cv",
    action: "Open CV"
  }
];

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => featuredIds.has(project.id));

  return (
    <>
      <Seo title="About" description={siteConfig.description} path="/" />
      <HeroSection />
      <div className="shell section-space space-y-16 md:space-y-20">
        <InstallPrompt />

        <section id="about" className="route-hero">
          <div className="page-panel">
            <SectionHeader
              eyebrow="Systems lens"
              title="The hub is meant to feel like a scientific signal surface, not a generic portfolio grid."
              description="The through-line across the site is simple: complex systems become more useful once they are easier to inspect, explain, and interact with. That shows up in biotech tooling, signal visualisation, browser ML, and even the more playful experiments."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="signal-metric">
                <p className="eyebrow">Current role</p>
                <p className="mt-3 text-lg font-semibold">Bioprocessing Scientist</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  GMP operations, investigations, documentation, and cross-functional delivery.
                </p>
              </article>
              <article className="signal-metric">
                <p className="eyebrow">Portfolio instinct</p>
                <p className="mt-3 text-lg font-semibold">Make hard signals legible</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  From EEG traces to gene networks to privacy-first browser inference.
                </p>
              </article>
              <article className="signal-metric">
                <p className="eyebrow">What this site is</p>
                <p className="mt-3 text-lg font-semibold">CV PWA + project archive</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A front door for tools, experiments, photos, and scientific product thinking.
                </p>
              </article>
            </div>
          </div>

          <div className="signal-shell p-4">
            <img
              src={siteConfig.profileImage}
              alt="Prashant Umrekar portrait"
              className="h-full min-h-[420px] w-full rounded-[26px] object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="In progress now"
            title="The current energy is around signal-rich interfaces, local-first tools, and products that feel analytical instead of generic."
            description="This strip is the most accurate picture of where attention is going right now: neural review, translational biology, browser vision, and a new collection-intelligence experiment."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {builderStrip.map((item) => (
              <article key={item.title} className="page-panel">
                <p className="eyebrow">{item.status}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Selected work"
            title="The strongest overlap between biology, data, and interaction."
            description="These projects are the clearest argument for the direction of the portfolio: scientific systems explained through more tactile, expressive browser-based surfaces."
          />
          <ProjectGrid items={featuredProjects} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {routeCards.map((item) => (
            <article key={item.href} className="page-panel">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                {item.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6">
                <Button onClick={() => (window.location.href = withBasePath(item.href))}>
                  {item.action}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Visual notebook"
            title="Photography sits here as the quieter counterpart to the data-heavy work."
            description="The image side of the site is still part of the same system: composition, framing, atmosphere, and a sense of what is worth paying attention to."
          />
          <PhotoReel items={projects.media} />
        </section>

        <section className="page-panel flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">Next step</p>
            <h2 className="text-2xl font-semibold">
              Use the project archive for depth, the scientific route for narrative, and the CV when you need the formal version.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              The homepage is intentionally selective. The rest of the hub is there for people who want the deeper story, the exact projects, or the recruiter-facing summary.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => (window.location.href = withBasePath("/projects"))}>
              Full archive
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = withBasePath("/contact"))}
            >
              Get in touch
            </Button>
            <Link
              to="/biotech"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-semibold"
            >
              Scientific work
              <Sparkles className="size-4" aria-hidden="true" />
            </Link>
            <Button
              variant="ghost"
              onClick={() =>
                window.open("https://github.com/prash-u", "_blank", "noopener,noreferrer")
              }
            >
              GitHub
              <ExternalLink className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
