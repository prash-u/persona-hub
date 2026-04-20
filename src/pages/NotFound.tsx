import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { Seo } from "@/components/Seo";
import { siteConfig } from "@/config/site";

const NotFound = () => {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="container-editorial flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <div className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
          Error 404
        </div>
        <h1 className="text-display mt-6 text-6xl font-medium tracking-tight md:text-8xl">
          Off the map
        </h1>
        <p className="mt-6 max-w-md text-base text-muted-foreground text-pretty">
          This page hasn't been charted yet. Pick up the thread elsewhere.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-floating"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
          >
            <Compass className="h-4 w-4" /> Browse work
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-mono text-xs uppercase tracking-widest text-muted-foreground">
          {siteConfig.nav.map((n) => (
            <Link key={n.href} to={n.href} className="link-underline">
              {n.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default NotFound;
