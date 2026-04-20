import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";

interface BIPEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const STORAGE_KEY = "pwa-install-dismissed";

export function InstallPrompt() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const handler = (e: Event) => {
      e.preventDefault();
      setEvt(e as BIPEvent);
      setTimeout(() => setVisible(true), 2500);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const install = async () => {
    if (!evt) return;
    await evt.prompt();
    await evt.userChoice;
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && evt && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="surface-glass mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl p-4 shadow-soft"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
            <Download className="h-4 w-4" />
          </span>
          <div className="flex-1 text-sm">
            <div className="font-medium text-foreground">Install this site</div>
            <div className="text-xs text-muted-foreground">
              Get the offline-capable app version.
            </div>
          </div>
          <button
            onClick={install}
            className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground"
          >
            Install
          </button>
          <button
            onClick={dismiss}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
