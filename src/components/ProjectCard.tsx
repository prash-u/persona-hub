import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProjectItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

const statusLabel: Record<NonNullable<ProjectItem["status"]>, string> = {
  live: "Live",
  research: "Research",
  archive: "Archive",
  wip: "WIP",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const primary = project.demo || project.github || project.paper;
  const isInternal = primary ? /^(\/|#)/.test(primary) : false;

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    primary && isInternal ? (
      <Link
        to={primary}
        className="block focus:outline-none"
        aria-label={`${project.title} — open project`}
      >
        {children}
      </Link>
    ) : primary ? (
      <a
        href={primary}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none"
        aria-label={`${project.title} — open project`}
      >
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative h-full"
    >
      <Wrapper>
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-floating md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-mono text-xs text-muted-foreground">
                {String(project.year)}
              </span>
              {project.status && (
                <span
                  className={cn(
                    "text-mono rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider",
                    project.status === "live" &&
                      "bg-signal/15 text-signal",
                    project.status === "research" &&
                      "bg-accent/15 text-accent",
                    project.status === "wip" &&
                      "bg-secondary text-secondary-foreground",
                    project.status === "archive" &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  {statusLabel[project.status]}
                </span>
              )}
            </div>
            {primary && (
              <ArrowUpRight className="h-4 w-4 -translate-y-0.5 translate-x-0.5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            )}
          </div>

          <h3 className="text-display mt-5 text-2xl font-medium leading-tight tracking-tight text-foreground md:text-[1.65rem]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-1 items-end gap-3 pt-2">
            {project.github && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                <Github className="h-3.5 w-3.5" /> Code
              </span>
            )}
            {project.demo && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                <ExternalLink className="h-3.5 w-3.5" /> Demo
              </span>
            )}
          </div>

          {/* Decorative corner gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/20"
          />
        </div>
      </Wrapper>
    </motion.article>
  );
}
