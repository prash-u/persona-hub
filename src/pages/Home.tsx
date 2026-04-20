import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Github } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { InstallPrompt } from "@/components/InstallPrompt";
import { siteConfig } from "@/config/site";
import { featuredProjects } from "@/lib/projects";
import heroBg from "@/assets/hero-bg.jpg";

const introBlocks = [
  {
    eyebrow: "Photos & motion",
    title: "An editorial gallery",
    body: "A curated stream of fieldwork, still life, and motion experiments.",
    href: "/photos",
  },
  {
    eyebrow: "Biotech",
    title: "Instruments & pipelines",
    body: "Signal viewers, omics pipelines, and computer-vision tools for the lab.",
    href: "/biotech",
  },
  {
    eyebrow: "ML / AI / Software",
    title: "Models that ship",
    body: "Embedding-driven products, local-first agents, and creative tooling.",
    href: "/projects",
  },
];

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    description: siteConfig.author.bio,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <>
      <Seo path="/" jsonLd={personJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-hero"
        />
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.32] mix-blend-multiply dark:opacity-30 dark:mix-blend-screen"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        />

        <div className="container-editorial relative pb-24 pt-20 md:pb-36 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-mono mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Available for select work · {new Date().getFullYear()}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-display max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance"
          >
            {siteConfig.author.name}
            <span className="block text-muted-foreground">
              {siteConfig.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty"
          >
            {siteConfig.author.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-floating"
            >
              See selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
            >
              <FileText className="h-4 w-4" />
              Read CV
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>{siteConfig.author.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <a href={siteConfig.social.github} className="link-underline inline-flex items-center gap-1.5">
              <Github className="h-3 w-3" /> github
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <a href={`mailto:${siteConfig.author.email}`} className="link-underline normal-case tracking-normal">
              {siteConfig.author.email}
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected"
            title="Featured projects"
            description="A small set of recent work across research, products, and creative tooling."
          />
          <Link
            to="/projects"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent md:inline-flex"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      {/* INTRO BLOCKS */}
      <section className="container-editorial py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {introBlocks.map((block, i) => (
            <motion.div
              key={block.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={block.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-floating"
              >
                <div className="text-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {block.eyebrow}
                </div>
                <h3 className="text-display mt-4 text-2xl font-medium tracking-tight">
                  {block.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTALL CALLOUT */}
      <section className="container-editorial pb-8 pt-4">
        <InstallPrompt />
      </section>
    </>
  );
}
