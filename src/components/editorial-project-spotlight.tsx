import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGithubMeta } from "@/lib/projects";
import { withBasePath } from "@/lib/site";
import type { ProjectItem } from "@/lib/types";
import { TagBadges } from "@/components/tag-badges";

type EditorialProjectSpotlightProps = {
  item: ProjectItem;
  eyebrow: string;
  title?: string;
};

export function EditorialProjectSpotlight({
  item,
  eyebrow,
  title
}: EditorialProjectSpotlightProps) {
  const meta = getGithubMeta(item.githubRepo);

  return (
    <section className="surface overflow-hidden">
      <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[320px]">
          <img
            src={item.thumb}
            alt={`${item.title} cover`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="eyebrow text-cyan-100/80">{eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl text-white md:text-5xl">
              {title ?? item.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              {item.summary}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {item.type}
            </span>
            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {item.year}
            </span>
            {typeof meta?.stars === "number" ? (
              <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <Star className="mr-1 inline size-3.5" aria-hidden="true" />
                {meta.stars} stars
              </span>
            ) : null}
          </div>
          {item.highlights?.length ? (
            <div className="grid gap-3 md:grid-cols-2">
              {item.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[22px] border border-border/70 bg-background/60 px-4 py-4 text-sm font-medium leading-6"
                >
                  {highlight}
                </div>
              ))}
            </div>
          ) : null}
          <TagBadges tags={item.tags} />
          <div className="flex flex-wrap gap-3 pt-2">
            {item.repoUrl ? (
              <Button
                variant="outline"
                onClick={() => window.open(withBasePath(item.repoUrl!), "_blank", "noopener,noreferrer")}
              >
                Repo
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
            {item.demoUrl ? (
              <Button
                onClick={() => window.open(withBasePath(item.demoUrl!), "_blank", "noopener,noreferrer")}
              >
                Live demo
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
