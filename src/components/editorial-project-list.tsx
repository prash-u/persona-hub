import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TagBadges } from "@/components/tag-badges";
import { withBasePath } from "@/lib/site";
import type { ProjectItem } from "@/lib/types";

type EditorialProjectListProps = {
  items: ProjectItem[];
  heading?: string;
  description?: string;
};

export function EditorialProjectList({
  items,
  heading,
  description
}: EditorialProjectListProps) {
  return (
    <div className="space-y-4">
      {heading ? (
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{heading}</p>
            {description ? (
              <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
      {items.map((item, index) => (
        <article
          key={item.title}
          className="surface grid gap-5 p-5 md:grid-cols-[0.2fr_1fr_0.55fr] md:items-start"
        >
          <div className="eyebrow">0{index + 1}</div>
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-7">
                {item.summary}
              </p>
            </div>
            {item.highlights?.length ? (
              <div className="grid gap-2">
                {item.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-2xl border border-border/70 bg-background/70 px-3 py-2 text-xs font-medium"
                  >
                    {highlight}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {item.status ? (
                <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {item.status === "working"
                    ? "Working now"
                    : item.status === "wip"
                      ? "In progress"
                      : "Upcoming"}
                </span>
              ) : null}
              {item.section ? (
                <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {item.section === "audiovisual"
                    ? "Audio / visual"
                    : item.section === "fun"
                      ? "Fun / experimental"
                      : "Biotech"}
                </span>
              ) : null}
            </div>
            <TagBadges tags={item.tags} />
            <div className="flex flex-wrap gap-2">
              {item.repoUrl ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(withBasePath(item.repoUrl!), "_blank", "noopener,noreferrer")}
                >
                  Code
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              ) : null}
              {item.demoUrl ? (
                <Button
                  size="sm"
                  onClick={() => window.open(withBasePath(item.demoUrl!), "_blank", "noopener,noreferrer")}
                >
                  Open app
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              ) : null}
              {!item.repoUrl && !item.demoUrl ? (
                <p className="text-muted-foreground text-sm font-medium">
                  Planned concept
                </p>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
