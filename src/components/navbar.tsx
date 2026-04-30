import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="focus-ring font-display text-2xl"
        >
          {siteConfig.shortName}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-2 lg:flex"
        >
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground",
                  isActive && "bg-secondary text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
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
              className="shell flex flex-col gap-2 py-4"
            >
              {siteConfig.navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                      isActive && "bg-secondary text-foreground"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
