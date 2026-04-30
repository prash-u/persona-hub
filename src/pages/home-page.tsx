import { ArrowRight, Download, ExternalLink } from "lucide-react";
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

const aboutPoints = [
  "Current role: Bioprocessing Scientist at MeiraGTx, working across upstream viral processing, cell culture, bioreactor workflows, solution preparation, Material Impact Assessments, Quality Events, and GMP compliance.",
  "Previous scientific roles at Cignpost Diagnostics and Halo covered PCR, endpoint PCR, RT-qPCR, LAMP, environmental monitoring, SOPs, QC/QA, GLP, GDPR, DNA extraction, diagnostic screening, and staff training.",
  "Former NHS Pharmacy MDU Chemotherapy Coordinator at The Royal Marsden with cross-site coordination, SOP development, Excel macro automation, and a strong patient-safety culture."
];

const education = [
  {
    title: "UCL — MSc Nanotechnology and Regenerative Medicine",
    detail:
      "Thesis: Nanoparticle delivery of Ambroxol across the blood-brain barrier to treat Parkinson’s disease."
  },
  {
    title: "Queen Mary University of London — BSc Biochemistry",
    detail:
      "Thesis: Xanthophylls of Light-Harvesting Antennae: Structure and Role."
  },
  {
    title: "Esher College — A Levels Biology, Chemistry, Maths",
    detail:
      "EPQ in Duchenne’s Muscular Dystrophy."
  }
];

const featuredProjects = [
  ...projects.biotech.filter((project) =>
    [
      "neural-pulse",
      "gene-expression-profiling",
      "virtual-lab-simulator",
      "tissue-engineering-visualization"
    ].includes(project.id)
  ),
  ...projects.personal.filter((project) =>
    ["live-vision-model-lab", "pokemon-card-scanner"].includes(project.id)
  )
];

const credibilityStats = [
  { value: "10+", label: "Scientific tool concepts" },
  { value: "GMP / GLP / GCP", label: "Regulated environment literacy" },
  { value: "Client-side first", label: "Privacy-aware workflow bias" },
  { value: "Biotech + data", label: "Cross-domain practice" }
];

export default function HomePage() {
  const reelItem = projects.media.find((item) => item.category === "reel") ?? projects.media[0];

  return (
    <>
      <Seo
        title="Portfolio"
        description={siteConfig.description}
        path="/"
      />
      <HeroSection />
      <div className="shell section-space space-y-16">
        <InstallPrompt />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {credibilityStats.map((item) => (
            <article key={item.label} className="surface p-5">
              <p className="font-display text-2xl">{item.value}</p>
              <p className="text-muted-foreground mt-2 text-sm leading-6">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface p-6 md:p-8">
            <SectionHeader
              eyebrow="About"
              title="A scientist grounded in biotech operations who also builds useful interactive tools."
              description="This site is not a generic developer portfolio. It is a curated CV and project hub for scientific, technical, and interface-led work."
            />
            <div className="text-muted-foreground mt-6 space-y-4 text-sm leading-7">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => (window.location.href = withBasePath("/projects"))}>
                View projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(withBasePath("/cv.pdf"), "_blank", "noopener")}
              >
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="surface grid gap-5 overflow-hidden p-6 md:p-8">
            <div className="flex items-center gap-4">
              <img
                src={siteConfig.profileImage}
                alt="Prashant Umrekar profile portrait"
                className="size-20 rounded-[24px] object-cover ring-1 ring-border/70"
              />
              <div>
                <p className="eyebrow">About me</p>
                <h3 className="mt-2 text-2xl font-semibold">Scientist first. Builder by extension.</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-7">
              The personal side of the site is there to add texture, not noise. Visual work, experimental tools, and browser-based ideas live here as supporting signals around the main biotech identity.
            </p>
            <div className="overflow-hidden rounded-[24px] border border-border/70">
              <img
                src={reelItem?.image}
                alt={reelItem?.title ?? "Instagram reel showcase preview"}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => (window.location.href = withBasePath("/photos"))}>
                Open visual showcase
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
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Featured projects"
            title="A selective project strip anchored by one flagship and a few high-signal supporting tools."
            description="Top portfolios do not show everything at once. This shortlist prioritises the projects that best communicate scientific thinking, technical taste, and product direction."
          />
          <ProjectGrid items={featuredProjects} />
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="BioTech & scientific projects"
            title="Scientific tools shaped by biotech practice, diagnostics, signal work, and bioinformatics."
            description="Neural Pulse is the EEG flagship. AI-style methods appear only where they support scientific interpretation, privacy-aware workflows, or useful interaction design."
          />
          <ProjectGrid items={projects.biotech.slice(0, 6)} />
          <Link
            to="/biotech"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold"
          >
            Open scientific project index
            <ExternalLink className="size-4" aria-hidden="true" />
          </Link>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Personal & experimental projects"
            title="Supporting experiments, playful tools, and browser-first concepts."
            description="These projects are deliberately secondary to the biotech identity, but they still show product thinking, privacy-aware interaction design, and technical curiosity."
          />
          <ProjectGrid items={projects.personal} />
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Education"
            title="Biochemistry, nanotechnology, regenerative medicine, and an early focus on disease biology."
            description="The academic background anchors the later work across biotech operations, diagnostics, and interactive scientific systems."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {education.map((item) => (
              <article key={item.title} className="surface p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">CV & contact</p>
            <h2 className="mt-3 text-2xl font-semibold">Experience and skills stay in the CV where they belong.</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
              The homepage stays lighter and more curated. For the full professional timeline, grouped skills, and QR-ready summary, the dedicated CV route remains the better handoff.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => (window.location.href = withBasePath("/cv"))}>Open CV</Button>
            <Button onClick={() => (window.location.href = withBasePath("/contact"))}>Contact</Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/prash-u", "_blank", "noopener,noreferrer")}
            >
              GitHub
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
