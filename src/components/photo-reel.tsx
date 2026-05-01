import { ExternalLink } from "lucide-react";
import type { SyntheticEvent } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { MediaItem } from "@/lib/types";
import { withBasePath } from "@/lib/site";

type PhotoReelProps = {
  items: MediaItem[];
};

export function PhotoReel({ items }: PhotoReelProps) {
  const heroItem = items.find((item) => item.category === "reel") ?? items[0];
  const supportingItems = items
    .filter((item) => item.id !== heroItem?.id)
    .slice(0, 2);

  if (!heroItem) {
    return null;
  }

  const useFallbackImage = (
    event: SyntheticEvent<HTMLImageElement>,
    item: MediaItem
  ) => {
    if (item.fallbackImage && event.currentTarget.src !== item.fallbackImage) {
      event.currentTarget.src = item.fallbackImage;
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <article className="surface overflow-hidden">
        <div className="overflow-hidden border-b border-border/70">
          <img
            src={heroItem.image}
            alt={heroItem.title}
            className="h-72 w-full object-cover md:h-80"
            loading="lazy"
            onError={(event) => useFallbackImage(event, heroItem)}
          />
        </div>
        <div className="space-y-4 p-6">
          <p className="eyebrow">Photo Reel</p>
          <h3 className="text-2xl font-semibold">{heroItem.title}</h3>
          <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
            {heroItem.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => (window.location.href = withBasePath("/photos"))}
            >
              Open Photo Reel
            </Button>
            {heroItem.instagramUrl ? (
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    heroItem.instagramUrl,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Open Instagram post
                <ExternalLink className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
            {siteConfig.instagramUrl ? (
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    siteConfig.instagramUrl,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Instagram profile
                <ExternalLink className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
        </div>
      </article>

      <div className="grid gap-5">
        {supportingItems.map((item) => (
          <article key={item.id} className="surface overflow-hidden">
            <button
              type="button"
              className="block w-full text-left"
              onClick={() => {
                if (item.instagramUrl) {
                  window.open(
                    item.instagramUrl,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
                loading="lazy"
                onError={(event) => useFallbackImage(event, item)}
              />
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
