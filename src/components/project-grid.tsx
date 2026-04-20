import type { ProjectItem } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";

type ProjectGridProps = {
  items: ProjectItem[];
};

export function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ProjectCard
          key={item.title}
          item={item}
        />
      ))}
    </div>
  );
}
