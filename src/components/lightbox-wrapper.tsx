import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import type { MediaItem } from "@/lib/types";

type LightboxWrapperProps = {
  galleryId: string;
  items: MediaItem[];
};

export function LightboxWrapper({ galleryId, items }: LightboxWrapperProps) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: "a[data-pswp-width]",
      pswpModule: () => import("photoswipe")
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [galleryId, items]);

  return null;
}
