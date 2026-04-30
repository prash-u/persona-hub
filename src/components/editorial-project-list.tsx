import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TagBadges } from "@/components/tag-badges";
import type { ProjectItem } from "@/lib/types";

type EditorialProjectListProps = {
  items: ProjectItem[];
  directoryHref: string;
};

export function EditorialProjectList({
  items,
  directoryHref
}: EditorialProjectListProps) {
  return (
    <div className="grid gap-4">
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
            <TagBadges tags={item.tags} />
            <Link
              to={directoryHref}
              className="focus-ring inline-flex items-center gap-2 text-sm font-semibold"
            >
              Browse section
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
