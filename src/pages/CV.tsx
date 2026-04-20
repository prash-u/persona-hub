import { Download, ExternalLink } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";

const skills = [
  { group: "Languages", items: ["TypeScript", "Python", "Rust", "SQL", "R"] },
  { group: "ML / Data", items: ["PyTorch", "scikit-learn", "JAX", "Polars", "DuckDB"] },
  { group: "Bio", items: ["Snakemake", "Bioconductor", "Genomics", "EEG / signals"] },
  { group: "Frontend", items: ["React", "Vite", "WebGL", "Three.js", "Tailwind"] },
  { group: "Infra", items: ["Docker", "GitHub Actions", "Cloudflare", "Postgres"] },
];

const experience = [
  {
    role: "Senior Engineer / Researcher",
    org: "Independent",
    period: "2023 — present",
    bullets: [
      "Built EEG visualization tooling adopted in a small research consortium.",
      "Shipped a TCG card-recognition PWA used by collectors weekly.",
      "Contributed open-source pipelines for bulk RNA-seq analysis.",
    ],
  },
  {
    role: "Computer Vision Engineer",
    org: "Previous Lab / Company",
    period: "2021 — 2023",
    bullets: [
      "Edge-deployed detection models on lab microscopy streams.",
      "Owned data labeling, training, and evaluation lifecycle.",
    ],
  },
  {
    role: "Research Assistant",
    org: "University",
    period: "2019 — 2021",
    bullets: [
      "Statistical modeling for behavioral and neural datasets.",
      "Co-authored two conference posters and one journal paper.",
    ],
  },
];

const education = [
  { degree: "MSc, Computational Biology", org: "University", year: "2021" },
  { degree: "BSc, Computer Science", org: "University", year: "2019" },
];

const awards = [
  "Best Demo, Indie Hackers Showcase — 2024",
  "Open Source Maintainer Grant — 2023",
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
                    <div className="text-muted-foreground">
                      {e.org} · {e.year}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
                Awards
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {awards.map((a) => (
                  <li key={a}>· {a}</li>
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
