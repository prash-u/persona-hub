import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, RefreshCw } from "lucide-react";

/**
 * Listens for service worker updates and prompts the user to refresh.
 * Safe in environments without a SW (does nothing).
 */
export function PwaUpdateToast() {
  const [updateReady, setUpdateReady] = useState(false);
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let cancelled = false;

    navigator.serviceWorker.getRegistration().then((reg) => {
      if (!reg || cancelled) return;
      if (reg.waiting) {
        setWaiting(reg.waiting);
        setUpdateReady(true);
      }
      reg.addEventListener("updatefound", () => {
        const installing = reg.installing;
        if (!installing) return;
        installing.addEventListener("statechange", () => {
          if (
            installing.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            setWaiting(reg.waiting);
            setUpdateReady(true);
          }
        });
      });
    });

    const onCtrl = () => window.location.reload();
    navigator.serviceWorker.addEventListener("controllerchange", onCtrl);

    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", onCtrl);
    };
  }, []);

  const apply = () => {
    waiting?.postMessage({ type: "SKIP_WAITING" });
  };

  return (
    <AnimatePresence>
      {updateReady && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-4 shadow-floating"
          role="status"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
            <Download className="h-4 w-4" />
          </span>
          <div className="text-sm">
            <div className="font-medium text-foreground">Update available</div>
            <div className="text-xs text-muted-foreground">
              A new version is ready.
            </div>
          </div>
          <button
            onClick={apply}
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <RefreshCw className="h-3 w-3" /> Refresh
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
