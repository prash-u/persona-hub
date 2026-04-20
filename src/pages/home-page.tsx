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
            eyebrow="Featured work"
            title="Curated technical work rooted in biotech operations and practical software."
            description="This site highlights a focused selection of work and points outward to independent repositories and demos where each project can grow on its own terms."
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
                "Curated biotech systems, live browser vision models, EEG concepts, and genomics workflows."
            },
            {
              href: "/projects",
              title: "ML/AI + Other Projects",
              copy:
                "Applied machine learning, privacy-aware tools, and technical projects shaped for useful real-world workflows."
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
