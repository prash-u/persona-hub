import { useMemo, useState } from "react";
import { MediaGalleryCard } from "@/components/media-gallery-card";
import { LightboxWrapper } from "@/components/lightbox-wrapper";
import { Seo } from "@/components/seo";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

const filters = [
  "all",
  "portrait",
  "travel",
  "reel",
  "lab",
  "editorial"
] as const;

export default function PhotosPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const items = useMemo(
    () =>
      projects.media.filter(
        (item) => filter === "all" || item.category === filter
      ),
    [filter]
  );

  return (
    <>
      <Seo
        title="Photo & Videography"
        description="Visual portfolio page featuring editorial stills and short-form video pieces."
        path="/photos"
        breadcrumbLabel="Photos"
      />
      <div className="shell section-space space-y-8">
        <SectionHeader
          eyebrow="Life outside the lab"
          title="A curated photo reel shaped more like a visual notebook than a social feed."
          description="This route keeps the media side of the site local-first and easy to curate. It is the quieter, more personal counterpart to the project archive."
        />
        <div className="flex flex-wrap gap-3">
          {filters.map((value) => (
            <Button
              key={value}
              variant={filter === value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(value)}
            >
              {value}
            </Button>
          ))}
        </div>
        <div
          id="media-gallery"
          className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3"
        >
          {items.map((item) => (
            <div key={item.title} className="break-inside-avoid">
              {item.mediaKind === "image" ? (
                <a
                  href={item.image}
                  data-pswp-width="1600"
                  data-pswp-height="1200"
                  className="hidden"
                >
                  {item.title}
                </a>
              ) : null}
              <MediaGalleryCard
                item={item}
                onSelect={() => {
                  if (item.mediaKind === "video" && item.demoUrl) {
                    window.open(item.demoUrl, "_blank", "noopener,noreferrer");
                  } else {
                    const anchor = document.querySelector(
                      `a[href='${item.image}']`
                    ) as HTMLAnchorElement | null;
                    anchor?.click();
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <LightboxWrapper
        galleryId="media-gallery"
        items={items.filter((item) => item.mediaKind === "image")}
      />
    </>
  );
}
