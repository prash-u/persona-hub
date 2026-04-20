import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

const socials = [
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
  { href: `mailto:${siteConfig.author.email}`, icon: Mail, label: "Email" },
].filter((item) => Boolean(item.href));

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-card/40">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-display text-2xl font-medium tracking-tight">
              {siteConfig.name}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
              Index
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-foreground/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
              Elsewhere
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent hover:shadow-soft"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="link-underline"
              >
                {siteConfig.author.email}
              </a>
            </p>
          </div>
        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="text-mono">Built with care · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
