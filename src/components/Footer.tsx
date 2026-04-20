import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">{siteConfig.shortName}</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Final portfolio hub for biotech projects, browser-based ML prototypes, and a digital CV.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="focus-ring text-muted-foreground rounded-full hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
