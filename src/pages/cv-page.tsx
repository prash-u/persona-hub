import { Download, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Seo } from "@/components/seo";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/site";

const personalStatement = [
  "Biotech professional with GMP-compliant manufacturing experience supporting late-phase gene therapy programmes. Currently working within upstream production at MeiraGTx, contributing to programme execution through material coordination, documentation, deviation management, and cross-functional collaboration across Manufacturing, Quality, MSAT, and Supply Chain.",
  "Experienced in aligning material usage with Batch Manufacturing Records, supporting change control, and maintaining accurate documentation to ensure programme readiness and compliance. Strong background in coordinating workflows, tracking critical activities, and ensuring timely delivery of clinical manufacturing objectives within regulated environments.",
  "Highly organised, detail-oriented, and comfortable managing competing priorities across multiple programme activities. Motivated to apply operational, coordination, and supply chain expertise to support end-to-end programme delivery in genetic medicine supply.",
];

const skills = [
  {
    title: "Bioprocessing",
    items: [
      "AAV upstream processing",
      "Mammalian cell culture",
      "Media and buffer preparation",
      "Single-use bioreactors",
    ],
  },
  {
    title: "Quality and GMP",
    items: ["Batch records", "Deviations", "CAPAs", "Technology transfer", "Inspection readiness"],
  },
  {
    title: "Diagnostics and assays",
    items: ["PCR", "RT-qPCR", "LAMP", "Method validation", "Gene expression analysis"],
  },
  {
    title: "Systems",
    items: ["NetSuite", "UPMRs", "MIAFs", "IOQs", "Excel / VBA"],
  },
];

const experience = [
  {
    role: "Bioprocessing Scientist",
    org: "MeiraGTx, Old Street / London",
    period: "December 2022 — Present",
    bullets: [
      "Executed upstream processing for AAV vector production, including cell expansion, media and buffer preparation, and bioreactor monitoring in a cGMP environment.",
      "Led process deviation investigations, performing root cause analysis and corrective and preventive actions (CAPAs) to improve process robustness.",
      "Contributed to technology transfer activities for clinical-scale viral vector production.",
      "Ensured continuous inspection readiness by maintaining compliance with regulatory and quality standards.",
      "Led a cross-functional BOM and BMR alignment project to improve material traceability, reduce waste, and ensure accurate material allocation.",
    ],
  },
  {
    role: "Senior Scientist",
    org: "Cignpost Diagnostics, Stratford / London",
    period: "October 2021 — May 2022",
    bullets: [
      "Directed lab operations, ensuring compliance with GLP and GMP while implementing quality management systems.",
      "Spearheaded PCR-based diagnostic testing, supervising the development and validation of analytical methods.",
      "Trained and mentored lab staff in SOPs, quality control, and troubleshooting protocols.",
    ],
  },
  {
    role: "Scientist / Laboratory Technologist",
    org: "Halo, White City / Heathrow",
    period: "November 2020 — October 2021",
    bullets: [
      "Developed and optimised molecular diagnostic assays, including RT-qPCR and LAMP techniques.",
      "Led R&D initiatives to improve throughput and diagnostic accuracy.",
      "Maintained compliance with regulatory standards through SOP development.",
    ],
  },
  {
    role: "Pharmacy MDU Chemotherapy Coordinator",
    org: "The Royal Marsden NHS, South Kensington",
    period: "December 2014 — July 2015",
    bullets: [
      "Coordinated the preparation and delivery of chemotherapy drugs, ensuring accurate and timely distribution to the oncology day unit across multiple hospital sites.",
      "Created and implemented Excel macros using Visual Basic to streamline workflow processes, reducing errors and improving operational efficiency.",
    ],
  },
];

const education = [
  {
    degree: "MSc Nanotechnology and Regenerative Medicine",
    org: "University College London",
    period: "September 2019 — December 2020",
    detail:
      "Dissertation: “The Nanoparticle Delivery of Ambroxol Across the Blood-Brain Barrier to Treat Parkinson’s Disease”. Developed expertise in nanoparticle engineering, bioinformatics, qPCR, RNA QC, and gene expression analysis.",
    modules: "Biomaterials, Tissue Engineering, Translational Research (Lab-to-Market).",
  },
  {
    degree: "BSc Biochemistry",
    org: "Queen Mary University of London",
    period: "September 2015 — August 2019",
    detail:
      "Dissertation: “Xanthophylls of Light-Harvesting Antennae: Structure and Role”. Explored molecular biology techniques, bioinformatics, and protein purification.",
    modules: "Neuroscience, Bioinformatics, and Protein Characterisation.",
  },
];

const achievements = [
  "First Aid and Mental Health First Aid certification",
  "Mammalian Cell Culture: Adherent and suspension culture, shake flasks, single-use bioreactors (SUBs)",
  "Upstream Processing (USP): Cell revival, media and buffer preparation, process monitoring, scale-up",
  "GMP Compliance & Documentation: SOPs, batch records, deviations, CAPAs, technology transfer",
  "Process Troubleshooting: Root cause analysis (RCA), deviation investigations, risk assessments",
  "Regulatory Experience: FDA and EMA compliance, pre-approval inspections (PAIs), quality audits",
  "Mentoring & Training: Coaching new team members, technical knowledge transfer",
  "Equipment & Systems: NetSuite, UPMRs, MIAFs, IOQs, Single-Use Systems (SUS)",
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
          title="A faithful digital summary of the February 2026 CV, designed to read well on screen."
          description="This route mirrors the current CV instead of using placeholder portfolio copy, while keeping a direct path to the downloadable PDF."
        />
        <div className="surface flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Prashant Umrekar</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-7">
              Biotech professional with GMP-compliant manufacturing experience spanning gene therapy manufacturing, diagnostics, documentation, investigations, and cross-functional delivery.
            </p>
          </div>
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
              <h3 className="text-xl font-semibold">Contact</h3>
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
              <h3 className="text-xl font-semibold">Key skills and achievements</h3>
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
