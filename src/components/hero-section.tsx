import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { withBasePath } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12">
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:44px_44px] opacity-30" />
      <div className="shell">
        <div className="surface relative overflow-hidden px-6 py-10 shadow-glow md:px-10 md:py-14 lg:px-14 lg:py-18">
          <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-l from-cyan-400/15 via-sky-400/8 to-transparent lg:block" />
          <div className="absolute -left-12 top-8 size-48 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -bottom-8 right-6 size-56 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <Badge variant="accent">Offline-first personal hub</Badge>
              <p className="eyebrow mt-6">Scientific editorial portfolio</p>
              <h1 className="display-title mt-4">
                {siteConfig.name}
              </h1>
              <p className="mt-5 text-lg font-semibold tracking-wide text-cyan-700 dark:text-cyan-300">
                {siteConfig.role}
              </p>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 md:text-lg">
                I work across GMP manufacturing, diagnostics, and scientific systems,
                while building browser-based tools that make technical work easier to
                inspect, explain, and share. This site is the final portfolio hub for
                my biotech projects, standalone repos, and digital CV.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() => (window.location.href = withBasePath("/cv"))}
                >
                  <FileDown
                    className="size-4"
                    aria-hidden="true"
                  />
                  View CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = withBasePath("/projects"))}
                >
                  Explore Projects
                  <ArrowRight
                    className="size-4"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => (window.location.href = withBasePath("/contact"))}
                >
                  <Mail
                    className="size-4"
                    aria-hidden="true"
                  />
                  Contact
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="grid gap-4"
            >
              <div className="rounded-[26px] border border-white/10 bg-slate-950/90 p-6 text-white shadow-glow">
                <p className="eyebrow text-cyan-200/70">Selected focus</p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-cyan-100/70">Biotech systems</p>
                    <p className="mt-2 text-xl font-semibold">
                      Bioprocessing operations, genomic workflows, and applied computer vision.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-cyan-100/70">Client-side scientific software</p>
                    <p className="mt-2 text-xl font-semibold">
                      Offline-first tools focused on privacy, speed, and clear interpretation of technical systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="surface focus-ring rounded-[22px] px-4 py-4 text-sm font-semibold hover:-translate-y-0.5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
