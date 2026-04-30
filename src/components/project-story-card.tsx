import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import type { ProjectItem } from "@/lib/types";
import { TagBadges } from "@/components/tag-badges";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/site";

type ProjectStoryCardProps = {
  item: ProjectItem;
};

export function ProjectStoryCard({ item }: ProjectStoryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.38fr_1fr]">
        <div className="relative min-h-[220px] overflow-hidden">
          <img
            src={item.image}
            alt={`${item.title} cover`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-slate-950/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
              {item.status}
            </span>
            <span className="rounded-full border border-white/15 bg-slate-950/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
              {item.maturity}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
              {item.category === "biotech" ? "BioTech & scientific" : "Personal & experimental"}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-lg font-medium">{item.description}</p>
              <TagBadges tags={item.tags} />
            </div>
            <div className="flex flex-wrap gap-2">
              {item.demoUrl ? (
                <Button
                  size="sm"
                  onClick={() => window.open(withBasePath(item.demoUrl!), "_blank", "noopener,noreferrer")}
                >
                  Try Demo
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Button>
              ) : null}
              {item.repoUrl ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(withBasePath(item.repoUrl!), "_blank", "noopener,noreferrer")}
                >
                  GitHub
                  <Github className="size-4" aria-hidden="true" />
                </Button>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {item.clientSideOnly ? (
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
                Client-side first
              </span>
            ) : null}
            {item.offlineCapable ? (
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-200">
                Offline capable
              </span>
            ) : null}
            {item.credibility?.map((point) => (
              <span
                key={point}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 font-semibold uppercase tracking-[0.22em] text-muted-foreground"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-4">
            <p className="text-muted-foreground text-sm leading-6">
              {item.privacyNote ?? "Project details expand into a fuller story of intent, methods, and next steps."}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Hide Details" : "View Details"}
              {open ? <ChevronUp className="size-4" aria-hidden="true" /> : <ChevronDown className="size-4" aria-hidden="true" />}
            </Button>
          </div>

          {open ? (
            <div className="grid gap-4 border-t border-border/60 pt-5 md:grid-cols-2">
              {item.whyBuilt ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">Why I built this</p>
                  <p className="mt-3 text-sm leading-7">{item.whyBuilt}</p>
                </div>
              ) : null}
              {item.problem ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">Problem</p>
                  <p className="mt-3 text-sm leading-7">{item.problem}</p>
                </div>
              ) : null}
              {item.approach ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">Approach</p>
                  <p className="mt-3 text-sm leading-7">{item.approach}</p>
                </div>
              ) : null}
              {item.whatWorksNow?.length ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">What works now</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7">
                    {item.whatWorksNow.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {item.whatILearned?.length ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">What I learned</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7">
                    {item.whatILearned.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {item.limitations ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">Current limitations</p>
                  <p className="mt-3 text-sm leading-7">{item.limitations}</p>
                </div>
              ) : null}
              {item.nextSteps ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4">
                  <p className="eyebrow">Next steps</p>
                  <p className="mt-3 text-sm leading-7">{item.nextSteps}</p>
                </div>
              ) : null}
              {item.relatedSkills?.length ? (
                <div className="rounded-[22px] border border-border/70 bg-background/60 p-4 md:col-span-2">
                  <p className="eyebrow">Related CV skills</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.relatedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
