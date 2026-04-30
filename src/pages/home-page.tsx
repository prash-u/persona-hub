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

const experience = [
  {
    role: "Bioprocessing Scientist",
    company: "MeiraGTx",
    period: "Dec 2022 — Present",
    copy: "Upstream viral processing, cell culture, bioreactor workflows, solution preparation, Material Impact Assessments, Quality Events, and GMP compliance."
  },
  {
    role: "Senior Scientist",
    company: "Cignpost Diagnostics",
    period: "Oct 2021 — May 2022",
    copy: "PCR and diagnostic workflows, analytical method development, staff training, and quality-led lab operations."
  },
  {
    role: "Scientist / Laboratory Technologist",
    company: "Halo",
    period: "Nov 2020 — Oct 2021",
    copy: "RT-qPCR, LAMP, DNA extraction, screening workflows, documentation, and process optimisation."
  },
  {
    role: "Pharmacy MDU Chemotherapy Coordinator",
    company: "The Royal Marsden NHS",
    period: "Dec 2014 — Jul 2015",
    copy: "Cross-site coordination, SOP development, ordering and invoicing workflows, and Visual Basic macro automation."
  }
];

const skillGroups = [
  {
    title: "Lab",
    items: ["Bioprocessing", "Viral vector upstream processing", "Cell culture", "Bioreactor workflows", "Solution preparation"]
  },
  {
    title: "Quality",
    items: ["GMP / GLP / GCP", "Quality Events", "Material Impact Assessments", "SOP writing", "QC / QA"]
  },
  {
    title: "Molecular",
    items: ["PCR", "RT-qPCR", "LAMP", "DNA extraction", "Gene expression analysis"]
  },
  {
    title: "Data",
    items: ["EEG data processing", "Large dataset analysis", "Bioinformatics", "Process optimisation"]
  },
  {
    title: "Engineering",
    items: ["Python", "Visual Basic", "3D printing in biology", "Tissue engineering", "Client-side scientific tools"]
  }
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

export default function HomePage() {
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
          <div className="surface grid gap-4 p-6 md:p-8">
            <div>
              <p className="eyebrow">Current position</p>
              <h3 className="mt-3 text-2xl font-semibold">MeiraGTx · Old Street / London</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Bioprocessing Scientist working across upstream viral processing, GMP systems, and cross-functional manufacturing support.
              </p>
            </div>
            <div>
              <p className="eyebrow">Degrees</p>
              <p className="mt-3 text-sm font-semibold">MSc Nanotechnology and Regenerative Medicine · UCL</p>
              <p className="mt-2 text-sm font-semibold">BSc Biochemistry · Queen Mary University of London</p>
            </div>
            <div>
              <p className="eyebrow">Scientific methods</p>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Viral vector processing, PCR / RT-qPCR / LAMP, gene expression, EEG workflows, bioinformatics, and quality-led scientific operations.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Featured projects"
            title="A selective project strip focused on scientific credibility and useful interfaces."
            description="These highlighted projects are the strongest entry points into the portfolio and are framed honestly as live tools, prototypes, or planned concepts."
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

        <section id="experience" className="space-y-8">
          <SectionHeader
            eyebrow="Experience snapshot"
            title="A concise timeline of regulated biotech, diagnostics, and NHS experience."
            description="Compact role cards keep the career story readable on-screen while the downloadable CV carries the fuller detail."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="surface p-6">
                <p className="eyebrow">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.company}</h3>
                <p className="mt-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300">{item.role}</p>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <SectionHeader
            eyebrow="Skills & technical stack"
            title="Grouped around lab practice, quality systems, molecular workflows, data work, and engineering."
            description="The emphasis stays on scientific work first, with coding and automation presented as tools that extend that practice."
          />
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group) => (
              <article key={group.title} className="surface p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
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
            <p className="eyebrow">Contact & links</p>
            <h2 className="mt-3 text-2xl font-semibold">Open the project hub, CV, or contact route from here.</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
              The portfolio is designed to work well as a direct link, an installable PWA, or a QR destination from the PDF CV.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
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
