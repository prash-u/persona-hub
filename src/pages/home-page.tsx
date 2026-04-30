import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/hero-section";
import { InstallPrompt } from "@/components/install-prompt";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { Seo } from "@/components/seo";
import { siteConfig } from "@/config/site";
import { projects } from "@/lib/projects";

const featured = [...projects.biotech, ...projects.mlai, ...projects.other].filter(
  (item) => item.featured
);
const marqueeProject = featured.find((item) => item.title === "BioBody Insights") ?? featured[0];
const supportingProjects = featured.filter((item) => item.title !== marqueeProject?.title).slice(0, 3);

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
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Main showcase"
            title="A deliberate lineup of browser-native scientific products."
            description="Rather than treating everything as one monolithic app, this portfolio acts as a front-end directory to standalone repositories and demos, each framed as a focused product or research interface."
          />
          {marqueeProject ? (
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <article className="surface group overflow-hidden">
                <div className="relative">
                  <img
                    src={marqueeProject.thumb}
                    alt={`${marqueeProject.title} cover`}
                    className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <p className="eyebrow text-cyan-100/70">Hero project</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="font-display text-3xl text-white md:text-5xl">
                      {marqueeProject.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                      {marqueeProject.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-cyan-100/80">
                      {marqueeProject.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              <div className="grid gap-4">
                {supportingProjects.map((project, index) => (
                  <Link
                    key={project.title}
                    to={project.type === "biotech" ? "/biotech" : "/projects"}
                    className="surface focus-ring group flex min-h-[170px] flex-col justify-between p-5 transition hover:-translate-y-1"
                  >
                    <div>
                      <p className="eyebrow">0{index + 2} / Featured</p>
                      <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-6">
                        {project.summary}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                      View project directory
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Featured work"
            title="Curated technical work rooted in biotech operations and practical software."
            description="These cards remain the working directory of the portfolio: concise, scannable, and ready to point visitors toward the full repository or live deployment."
          />
          <ProjectGrid items={featured} />
        </section>
        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              href: "/photos",
              title: "Photo / Videography",
              copy:
                "A visual reel with editorial spacing, refined composition, and lightweight gallery browsing."
            },
            {
              href: "/biotech",
              title: "Biotech Projects",
              copy:
                "Curated biotech systems, translational interfaces, live browser vision models, and signal-heavy scientific tooling."
            },
            {
              href: "/projects",
              title: "ML/AI + Other Projects",
              copy:
                "Applied machine learning, client-side demos, and technical projects shaped for useful real-world workflows."
            }
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="surface focus-ring group flex min-h-72 flex-col justify-between p-6 transition hover:-translate-y-1"
            >
              <div>
                <p className="eyebrow">Directory</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-4 text-sm leading-7">
                  {item.copy}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                Explore
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
