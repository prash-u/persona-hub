import { Badge } from "@/components/ui/badge";

type TagBadgesProps = {
  tags: string[];
};

export function TagBadges({ tags }: TagBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="default"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
