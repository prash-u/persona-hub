import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/site";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="shell">
        <div className="page-panel flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Persona Hub</p>
            <p className="font-display mt-3 text-3xl">{siteConfig.shortName}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              A visually led CV PWA for biotech systems, signal exploration,
              scientific product thinking, and selected creative work built with
              privacy-first browser instincts.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={
                  link.href.startsWith("/") ? withBasePath(link.href) : link.href
                }
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring rounded-full border border-border/60 px-4 py-2 text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
