import { Download, ExternalLink, QrCode } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Seo } from "@/components/seo";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/site";

const personalStatement = [
  "Bioprocessing scientist with GMP-compliant manufacturing experience supporting late-phase gene therapy programmes, paired with hands-on work building browser-based scientific interfaces for biotech, neurotechnology, and computer vision concepts.",
  "Currently working within upstream production at MeiraGTx, contributing through material coordination, documentation, deviation management, and cross-functional collaboration across Manufacturing, Quality, MSAT, and Supply Chain.",
  "Alongside regulated operations experience, I design and prototype technical products that make complex biological and analytical systems easier to inspect, explain, and present clearly to scientific and cross-functional audiences."
];

const skills = [
  {
    title: "Bioprocessing",
    items: [
      "AAV upstream processing",
      "Mammalian cell culture",
      "Media and buffer preparation",
      "Single-use bioreactors"
    ]
  },
  {
    title: "Quality and GMP",
    items: ["Batch records", "Deviations", "CAPAs", "Technology transfer", "Inspection readiness"]
  },
  {
    title: "Diagnostics and assays",
    items: ["PCR", "RT-qPCR", "LAMP", "Method validation", "Gene expression analysis"]
  },
  {
    title: "Scientific software",
    items: ["React", "TypeScript", "Browser ML", "Data-rich UI", "Technical storytelling"]
  }
];

const experience = [
  {
    role: "Bioprocessing Scientist",
    org: "MeiraGTx, Old Street / London",
    period: "December 2022 — Present",
    bullets: [
      "Executed upstream processing for AAV vector production, including cell expansion, media and buffer preparation, and bioreactor monitoring in a cGMP environment.",
      "Led process deviation investigations, root cause analysis, and CAPA actions to improve process robustness and batch readiness.",
      "Contributed to technology transfer activities for clinical-scale viral vector production and supported continuous inspection readiness.",
      "Led a cross-functional BOM and BMR alignment project to improve material traceability, reduce waste, and ensure accurate material allocation."
    ]
  },
  {
    role: "Senior Scientist",
    org: "Cignpost Diagnostics, Stratford / London",
    period: "October 2021 — May 2022",
    bullets: [
      "Directed lab operations, ensuring compliance with GLP and GMP while implementing quality management systems.",
      "Spearheaded PCR-based diagnostic testing and supervised the development and validation of analytical methods.",
      "Trained and mentored lab staff in SOPs, quality control, and troubleshooting protocols."
    ]
  },
  {
    role: "Scientist / Laboratory Technologist",
    org: "Halo, White City / Heathrow",
    period: "November 2020 — October 2021",
    bullets: [
      "Developed and optimised molecular diagnostic assays, including RT-qPCR and LAMP techniques.",
      "Led R&D initiatives to improve throughput and diagnostic accuracy.",
      "Maintained compliance with regulatory standards through SOP development and controlled documentation."
    ]
  },
  {
    role: "Pharmacy MDU Chemotherapy Coordinator",
    org: "The Royal Marsden NHS, South Kensington",
    period: "December 2014 — July 2015",
    bullets: [
      "Coordinated the preparation and delivery of chemotherapy drugs, ensuring accurate and timely distribution to the oncology day unit across multiple hospital sites.",
      "Created Excel macros using Visual Basic to streamline workflow processes, reduce errors, and improve operational efficiency."
    ]
  }
];

const education = [
  {
    degree: "MSc Nanotechnology and Regenerative Medicine",
    org: "University College London",
    period: "September 2019 — December 2020",
    detail:
      "Dissertation: “The Nanoparticle Delivery of Ambroxol Across the Blood-Brain Barrier to Treat Parkinson’s Disease”. Developed expertise in nanoparticle engineering, bioinformatics, qPCR, RNA QC, and gene expression analysis.",
    modules: "Biomaterials, Tissue Engineering, Translational Research (Lab-to-Market)."
  },
  {
    degree: "BSc Biochemistry",
    org: "Queen Mary University of London",
    period: "September 2015 — August 2019",
    detail:
      "Dissertation: “Xanthophylls of Light-Harvesting Antennae: Structure and Role”. Explored molecular biology techniques, bioinformatics, and protein purification.",
    modules: "Neuroscience, Bioinformatics, and Protein Characterisation."
  }
];

const achievements = [
  "Built standalone browser-based scientific demos including BioBody Insights, Neural Pulse Play, Live Vision Model Lab, and Network Pulse Analyzer.",
  "Strong crossover between regulated biotech operations and interface-led scientific communication.",
  "Experienced in GMP documentation, SOPs, batch records, deviations, CAPAs, technology transfer, and quality audits.",
  "Comfortable translating dense technical or biological systems into interactive portfolio-grade product concepts.",
  "Practical experience mentoring, training, and coordinating work across cross-functional scientific teams."
];

const portfolioThemes = [
  "Biological knowledge mapping and translational pathway interfaces",
  "EEG review, neural systems concepts, and explainable neurotechnology demos",
  "Browser-native computer vision prototypes with privacy-aware local inference",
  "Scientific product thinking grounded in real manufacturing and diagnostics experience"
];

export default function CvPage() {
  return (
    <>
      <Seo
        title="CV"
        description="Digital CV summary aligned to the February 2026 CV and linked to the downloadable PDF."
        path="/cv"
        breadcrumbLabel="CV"
      />
      <div className="shell section-space space-y-8">
        <SectionHeader
          eyebrow="Digital CV"
          title="A recruiter-ready CV summary with a direct path into the portfolio."
          description="This route reads as a clean on-screen CV while also acting as the handoff point to the full portfolio site, supporting future use as a QR-linked destination from the PDF CV."
        />
        <div className="surface flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Prashant Umrekar</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-7">
              Bioprocessing scientist with experience across gene therapy manufacturing,
              diagnostics, documentation, investigations, and cross-functional delivery,
              alongside a strong portfolio of browser-based scientific product prototypes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => window.open(withBasePath("/cv.pdf"), "_blank", "noopener")}
            >
              <Download
                className="size-4"
                aria-hidden="true"
              />
              Download CV PDF
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(siteConfig.siteUrl, "_blank", "noopener,noreferrer")}
            >
              <ExternalLink
                className="size-4"
                aria-hidden="true"
              />
              Open portfolio
            </Button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Personal statement</h3>
              <div className="text-muted-foreground mt-4 space-y-4 text-sm leading-7">
                {personalStatement.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Contact and profiles</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p>{siteConfig.email}</p>
                <p className="text-muted-foreground">{siteConfig.location}</p>
                <a
                  href="https://github.com/prash-u"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent inline-flex items-center gap-2 font-semibold"
                >
                  GitHub
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashant-umrekar/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent inline-flex items-center gap-2 font-semibold"
                >
                  LinkedIn
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </section>

            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="mt-4 space-y-5">
                {skills.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-semibold">{group.title}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="surface p-6 md:p-8">
              <div className="flex items-center gap-3">
                <QrCode className="size-5 text-cyan-500" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Portfolio and QR-ready link</h3>
              </div>
              <p className="text-muted-foreground mt-4 text-sm leading-7">
                This portfolio is designed to work as the destination behind a QR code on the PDF CV. Once your final public deployment URL is confirmed, generate a QR code from the canonical link below and place it into the downloadable CV.
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-[0.7fr_1.3fr]">
                <img
                  src={withBasePath("/qr-placeholder.svg")}
                  alt="QR placeholder indicating where a future portfolio QR code can go"
                  className="w-full max-w-[180px] rounded-[22px] border border-border/70 bg-background/70 p-3"
                />
                <div className="space-y-3">
                  <p className="eyebrow">Canonical URL</p>
                  <p className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 font-mono text-xs text-foreground/90">
                    {siteConfig.siteUrl}
                  </p>
                  <p className="text-muted-foreground text-sm leading-6">
                    If you later move to a custom domain, update `VITE_SITE_URL` so the same route stays correct for social metadata, sitemap generation, and future QR usage.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Professional experience</h3>
              <div className="mt-6 space-y-8">
                {experience.map((item) => (
                  <article key={`${item.role}-${item.org}`} className="border-l border-border/70 pl-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">{item.role}</h4>
                        <p className="text-accent text-sm font-medium">{item.org}</p>
                      </div>
                      <p className="eyebrow">{item.period}</p>
                    </div>
                    <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-7">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>— {bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <article key={item.degree}>
                    <h4 className="text-lg font-semibold">{item.degree}</h4>
                    <p className="text-accent mt-1 text-sm font-medium">
                      {item.org} · {item.period}
                    </p>
                    <p className="text-muted-foreground mt-3 text-sm leading-7">{item.detail}</p>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      <span className="font-semibold text-foreground">Key modules:</span> {item.modules}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Portfolio themes</h3>
              <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-7">
                {portfolioThemes.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </section>

            <section className="surface p-6 md:p-8">
              <h3 className="text-xl font-semibold">Key strengths and achievements</h3>
              <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-7">
                {achievements.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
