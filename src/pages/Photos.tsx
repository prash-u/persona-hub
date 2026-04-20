import { useMemo, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { allMedia, photoCategories } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function Photos() {
  const [filter, setFilter] = useState<string>("All");

  const items = useMemo(() => {
    if (filter === "All") return allMedia;
    return allMedia.filter((m) => m.category === filter);
  }, [filter]);

  return (
    <>
      <Seo
        title="Photos"
        path="/photos"
        description="A curated visual journal — fieldwork, still life, and motion."
      />

      <section className="container-editorial pb-10 pt-16 md:pt-24">
        <SectionHeader
          eyebrow="Visual journal"
          title="Photos & motion"
          description="A small, slow-growing archive. Browse by category."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {["All", ...photoCategories].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                filter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-wide pb-24">
        <Gallery withCaption>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((m, i) => {
              if (m.kind === "video") {
                return (
                  <motion.a
                    key={m.id}
                    href={m.external || m.src}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                    className="group relative block overflow-hidden rounded-2xl border border-border break-inside-avoid"
                  >
                    <img
                      src={m.poster || m.thumbnail}
                      alt={m.title}
                      loading="lazy"
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-foreground/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-background/95 text-foreground shadow-floating">
                        <Play className="h-5 w-5 translate-x-0.5" />
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-primary-foreground bg-gradient-to-t from-foreground/80 to-transparent">
                      <div>
                        <div className="text-mono text-[10px] uppercase tracking-widest opacity-80">
                          Video · {m.category}
                        </div>
                        <div className="mt-0.5 text-sm font-medium">{m.title}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-80" />
                    </div>
                  </motion.a>
                );
              }

              return (
                <Item
                  key={m.id}
                  original={m.src}
                  thumbnail={m.thumbnail || m.src}
                  width={m.width || 1600}
                  height={m.height || 1067}
                  caption={`${m.title} — ${m.category}`}
                >
                  {({ ref, open }) => (
                    <motion.button
                      ref={ref as React.Ref<HTMLButtonElement>}
                      onClick={open}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                      className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left break-inside-avoid"
                      aria-label={`Open ${m.title}`}
                    >
                      <img
                        src={m.thumbnail || m.src}
                        alt={m.title}
                        loading="lazy"
                        className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-foreground/80 to-transparent text-primary-foreground">
                        <div>
                          <div className="text-mono text-[10px] uppercase tracking-widest opacity-80">
                            {m.category} · {m.year}
                          </div>
                          <div className="mt-0.5 text-sm font-medium">{m.title}</div>
                        </div>
                      </div>
                    </motion.button>
                  )}
                </Item>
              );
            })}
          </div>
        </Gallery>
      </section>
    </>
  );
}
