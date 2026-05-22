import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/72 backdrop-blur-2xl">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="focus-ring flex flex-col rounded-2xl px-1 py-1"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
            Prashant Umrekar
          </span>
          <span className="font-display text-xl tracking-tight md:text-2xl">
            Persona Hub
          </span>
        </Link>
        <div className="hidden flex-1 justify-center lg:flex">
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 rounded-full border border-border/60 bg-background/78 p-1.5 shadow-soft"
          >
            {siteConfig.navigation.map((item) => {
              const [itemPath, itemHash] = item.href.split("#");
              const active =
                item.href === "/"
                  ? location.pathname === "/"
                  : itemHash
                    ? location.pathname === (itemPath || "/") && location.hash === `#${itemHash}`
                    : location.pathname.startsWith(item.href);

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "focus-ring relative rounded-full px-4 py-2.5 text-sm font-semibold transition",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="hidden lg:inline-flex"
            onClick={() => (window.location.href = withBasePath("/cv"))}
          >
            View CV
          </Button>
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/50 lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="shell flex flex-col gap-3 py-4"
            >
              {siteConfig.navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "focus-ring rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                      isActive && "bg-secondary text-foreground"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                variant="outline"
                className="mt-1"
                onClick={() => {
                  setOpen(false);
                  window.location.href = withBasePath("/cv");
                }}
              >
                View CV
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
