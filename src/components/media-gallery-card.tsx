import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { MediaItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

type MediaGalleryCardProps = {
  item: MediaItem;
  onSelect: () => void;
};

export function MediaGalleryCard({ item, onSelect }: MediaGalleryCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24 }}
      onClick={onSelect}
      className="surface focus-ring group block overflow-hidden text-left"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          <Badge variant="accent">{item.category}</Badge>
          <Badge>{item.year}</Badge>
        </div>
        {item.mediaKind === "video" ? (
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white">
            <PlayCircle className="size-5" aria-hidden="true" />
            <span className="text-sm font-semibold">Open video</span>
          </div>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          {item.description}
        </p>
      </div>
    </motion.button>
  );
}
