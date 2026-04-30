import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  FileDown,
  Linkedin,
  Microscope,
  ScanEye,
  ScanLine
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/site";

export function HeroSection() {
  const waveformPaths = [
    "M0 116 C54 116 54 30 108 30 C162 30 162 194 216 194 C270 194 270 70 324 70 C378 70 378 158 432 158 C486 158 486 22 540 22 C594 22 594 168 648 168 C702 168 702 96 756 96 C810 96 810 132 864 132 C918 132 918 42 972 42 C1026 42 1026 182 1080 182 C1134 182 1134 94 1200 94",
    "M0 164 C44 164 44 108 88 108 C132 108 132 210 176 210 C220 210 220 58 264 58 C308 58 308 136 352 136 C396 136 396 88 440 88 C484 88 484 204 528 204 C572 204 572 34 616 34 C660 34 660 144 704 144 C748 144 748 100 792 100 C836 100 836 176 880 176 C924 176 924 78 968 78 C1012 78 1012 148 1056 148 C1100 148 1100 122 1144 122 C1188 122 1188 166 1200 166",
    "M0 72 C70 72 70 168 140 168 C210 168 210 28 280 28 C350 28 350 200 420 200 C490 200 490 84 560 84 C630 84 630 138 700 138 C770 138 770 52 840 52 C910 52 910 188 980 188 C1050 188 1050 92 1120 92 C1170 92 1170 118 1200 118"
  ];

  return (
    <section className="relative overflow-hidden pt-6 md:pt-10">
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:44px_44px] opacity-25" />
      <div className="shell">
        <div className="surface lg:py-18 relative overflow-hidden px-6 py-10 shadow-glow md:px-10 md:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(20,184,166,0.14),transparent_22%),linear-gradient(135deg,rgba(8,15,28,0.02),rgba(8,15,28,0.16))]" />
          <div className="absolute inset-x-0 top-0 h-[260px] overflow-hidden opacity-90">
            <svg
              viewBox="0 0 1200 240"
              className="h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="signalStroke"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(103, 232, 249, 0.15)" />
                  <stop offset="45%" stopColor="rgba(45, 212, 191, 0.65)" />
                  <stop offset="100%" stopColor="rgba(186, 230, 253, 0.18)" />
                </linearGradient>
              </defs>
              {waveformPaths.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="url(#signalStroke)"
                  strokeWidth={index === 1 ? 3.5 : 2}
                  strokeLinecap="round"
                  initial={{ pathLength: 0.35, opacity: 0.18, x: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: [0.16, 0.5, 0.16],
                    x: [0, -18, 0]
                  }}
                  transition={{
                    duration: 7 + index * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </div>
          <div className="via-sky-400/6 absolute inset-y-0 right-0 hidden w-[50%] bg-gradient-to-l from-cyan-400/10 to-transparent lg:block" />
          <div className="absolute -left-12 top-8 size-48 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -bottom-8 right-6 size-56 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <Badge variant="accent">About me</Badge>
              <p className="eyebrow mt-6">
                Biotech, signals, systems, and visual thinking
              </p>
              <h1 className="display-title mt-4">{siteConfig.name}</h1>
              <p className="mt-5 text-lg font-semibold tracking-wide text-cyan-700 dark:text-cyan-300">
                {siteConfig.role}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                I work in biotechnology, but I tend to think in systems. Most of
                what interests me lives somewhere between biological processes,
                signal interpretation, and the tools we use to make difficult
                things easier to see.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Outside the lab, that usually becomes browser-based experiments,
                scientific interfaces, and privacy-first tools that are
                practical, slightly strange, and sometimes just fun to build.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() =>
                    (window.location.href = withBasePath("/projects"))
                  }
                >
                  Explore Projects
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open(withBasePath("/cv.pdf"), "_blank", "noopener")
                  }
                >
                  <FileDown className="size-4" aria-hidden="true" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    (window.location.href = withBasePath("/photos"))
                  }
                >
                  <ScanEye className="size-4" aria-hidden="true" />
                  Photo Reel
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/prashant-umrekar/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="grid gap-4"
            >
              <div className="bg-slate-950/92 rounded-[28px] border border-white/10 p-6 text-white shadow-glow">
                <p className="eyebrow text-cyan-200/70">
                  What tends to pull me in
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <Microscope
                        className="size-5 text-cyan-300"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-cyan-100/70">
                        Biological systems
                      </p>
                    </div>
                    <p className="mt-3 text-xl font-semibold">
                      Lab processes, biological workflows, and the challenge of
                      turning complex science into something more legible.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <BrainCircuit
                        className="size-5 text-cyan-300"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-cyan-100/70">
                        Neural interfaces
                      </p>
                    </div>
                    <p className="mt-3 text-xl font-semibold">
                      EEG-style signals, hidden patterns, and interactive ways
                      of making abstract data feel intuitive.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <ScanLine
                        className="size-5 text-cyan-300"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-cyan-100/70">
                        Scientific tool building
                      </p>
                    </div>
                    <p className="mt-3 text-xl font-semibold">
                      Privacy-first browser tools, visual experiments, and
                      interfaces that feel more curious than corporate.
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
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
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
