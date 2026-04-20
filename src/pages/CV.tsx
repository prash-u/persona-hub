import { Download, ExternalLink } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";

const personalStatement = [
  "Biotech professional with GMP-compliant manufacturing experience supporting late-phase gene therapy programmes. Currently working within upstream production at MeiraGTx, contributing to programme execution through material coordination, documentation, deviation management, and cross-functional collaboration across Manufacturing, Quality, MSAT, and Supply Chain.",
  "Experienced in aligning material usage with Batch Manufacturing Records, supporting change control, and maintaining accurate documentation to ensure programme readiness and compliance. Strong background in coordinating workflows, tracking critical activities, and ensuring timely delivery of clinical manufacturing objectives within regulated environments.",
  "Highly organised, detail-oriented, and comfortable managing competing priorities across multiple programme activities. Motivated to apply operational, coordination, and supply chain expertise to support end-to-end programme delivery in genetic medicine supply.",
];

const skills = [
  {
    group: "Bioprocessing",
    items: [
      "AAV upstream processing",
      "Mammalian cell culture",
      "Media & buffer preparation",
      "Single-use bioreactors",
    ],
  },
  {
    group: "Quality & GMP",
    items: ["Batch records", "Deviations", "CAPAs", "Technology transfer", "Inspection readiness"],
  },
  {
    group: "Diagnostics & assays",
    items: ["PCR", "RT-qPCR", "LAMP", "Method validation", "Gene expression analysis"],
  },
  {
    group: "Operations",
    items: ["BOM/BMR alignment", "Material traceability", "Cross-functional coordination", "Risk assessment"],
  },
  {
    group: "Systems",
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
      "Trained and mentored laboratory staff on SOPs, quality control, and troubleshooting protocols.",
    ],
  },
  {
    role: "Scientist / Laboratory Technologist",
    org: "Halo, White City / Heathrow",
    period: "November 2020 — October 2021",
    bullets: [
      "Developed and optimised molecular diagnostic assays, including RT-qPCR and LAMP workflows.",
      "Led R&D initiatives to improve throughput and diagnostic accuracy.",
      "Maintained compliance with regulatory standards through SOP development and controlled process execution.",
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
    degree: "MSc, Nanotechnology and Regenerative Medicine",
    org: "University College London (September 2019 — December 2020)",
    year: "2020",
    detail:
      "Dissertation: “The Nanoparticle Delivery of Ambroxol Across the Blood-Brain Barrier to Treat Parkinson’s Disease”. Developed expertise in nanoparticle engineering, bioinformatics, qPCR, RNA QC, and gene expression analysis.",
    modules: "Key modules: Biomaterials, Tissue Engineering, Translational Research (Lab-to-Market).",
  },
  {
    degree: "BSc, Biochemistry",
    org: "Queen Mary University of London (September 2015 — August 2019)",
    year: "2019",
    detail:
      "Dissertation: “Xanthophylls of Light-Harvesting Antennae: Structure and Role”. Explored molecular biology techniques, bioinformatics, and protein purification.",
    modules: "Key modules: Neuroscience, Bioinformatics, and Protein Characterisation.",
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

export default function CV() {
  return (
    <>
      <Seo
        title="CV"
        path="/cv"
        description="Curriculum vitae — experience, skills, education, and awards."
      />

      <section className="container-editorial pb-10 pt-16 md:pt-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Curriculum vitae"
            title={siteConfig.author.name}
            description={siteConfig.cv.summary}
          />
          <a
            href={siteConfig.cv.pdfPath}
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-floating"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </section>

      <section className="container-editorial pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
                Personal statement
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {personalStatement.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
                Contact
              </div>
              <div className="space-y-1 text-sm">
                <div className="text-foreground">{siteConfig.author.email}</div>
                <div className="text-muted-foreground">{siteConfig.author.location}</div>
                <a
                  href={siteConfig.social.github}
                  className="link-underline inline-flex items-center gap-1 text-foreground"
                >
                  GitHub <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
                Skills
              </div>
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.group}>
                    <div className="text-xs font-semibold text-foreground">{s.group}</div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {s.items.map((i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
                Education
              </div>
              <ul className="space-y-3 text-sm">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="font-medium text-foreground">{e.degree}</div>
                    <div className="text-muted-foreground">{e.org}</div>
                    <div className="mt-1 text-muted-foreground">{e.detail}</div>
                    <div className="mt-1 text-muted-foreground">{e.modules}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
                Key skills and achievements
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {achievements.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Experience */}
          <div>
            <div className="text-mono mb-6 text-xs uppercase tracking-widest text-accent">
              Experience
            </div>
            <ol className="relative space-y-10 border-l border-border pl-6">
              {experience.map((x) => (
                <li key={x.role + x.org} className="relative">
                  <span
                    className="absolute -left-[29px] top-2 grid h-3 w-3 place-items-center rounded-full bg-card"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-display text-xl font-medium tracking-tight text-foreground">
                      {x.role}
                    </h3>
                    <span className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {x.period}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-accent">{x.org}</div>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                    {x.bullets.map((b) => (
                      <li key={b}>— {b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
