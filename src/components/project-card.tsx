import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getGithubMeta } from "@/lib/projects";
import { withBasePath } from "@/lib/site";
import type { ProjectItem } from "@/lib/types";
import { TagBadges } from "@/components/tag-badges";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  const meta = getGithubMeta(item.githubRepo);
  const navigate = useNavigate();
  const sectionLabel = item.category === "biotech" ? "BioTech & scientific" : "Personal & experimental";

  const openTarget = (target: string) => {
    if (/^(\/|#)/.test(target)) {
      navigate(target);
      return;
    }

    window.open(withBasePath(target), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="signal-shell group flex h-full flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={`${item.title} cover`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          {item.featured ? <Badge variant="featured">Featured</Badge> : null}
          <Badge variant="accent">{item.status}</Badge>
          <Badge variant="outline">{item.maturity}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
            <Sparkles
              className="text-accent size-5 shrink-0"
              aria-hidden="true"
            />
          </div>
          <p className="text-muted-foreground text-sm leading-6">
            {item.description}
          </p>
        </div>
        {item.highlights?.length ? (
          <div className="grid gap-2">
            {item.highlights.slice(0, 2).map((highlight) => (
              <p
                key={highlight}
                className="rounded-2xl border border-border/60 bg-background/55 px-3 py-2 text-xs font-medium text-foreground/90"
              >
                {highlight}
              </p>
            ))}
          </div>
        ) : null}
        <TagBadges
          tags={[
            ...(item.clientSideOnly ? ["Client-side first"] : []),
            ...(item.offlineCapable ? ["Offline capable"] : []),
            ...(meta?.topics?.slice(0, 1) ?? []),
            ...item.tags
          ].slice(0, 5)}
        />
        {item.privacyNote ? (
          <p className="rounded-2xl border border-border/60 bg-background/55 px-3 py-2 text-xs font-medium text-foreground/90">
            {item.privacyNote}
          </p>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="text-muted-foreground flex items-center gap-3 text-xs">
            {typeof meta?.stars === "number" ? (
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5" aria-hidden="true" />
                {meta.stars}
              </span>
            ) : null}
            <span>{sectionLabel}</span>
          </div>
          <div className="flex gap-2">
            {item.repoUrl ? (
              <Button
                variant="outline"
                size="sm"
                asChild={false}
                onClick={() => item.repoUrl && openTarget(item.repoUrl)}
              >
                <span>
                  Code
                  <ArrowUpRight
                    className="ml-1 inline size-4"
                    aria-hidden="true"
                  />
                </span>
              </Button>
            ) : null}
            {item.demoUrl ? (
              <Button
                size="sm"
                onClick={() => item.demoUrl && openTarget(item.demoUrl)}
              >
                <span>
                  Open app
                  <ArrowUpRight
                    className="ml-1 inline size-4"
                    aria-hidden="true"
                  />
                </span>
              </Button>
            ) : null}
            {!item.repoUrl && !item.demoUrl ? (
              <span className="text-muted-foreground text-xs font-medium">No live link yet</span>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
