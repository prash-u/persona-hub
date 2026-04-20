import { RefreshCcw } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Button } from "@/components/ui/button";

export function PwaUpdateToast() {
  const isDev = import.meta.env.DEV;
  const { needRefresh, updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    if (isDev || !needRefresh[0]) {
      return;
    }

    toast("A fresh portfolio build is ready.", {
      description: "Reload to update the app shell and cached content.",
      duration: Infinity,
      action: (
        <Button
          size="sm"
          onClick={() => void updateServiceWorker(true)}
        >
          <RefreshCcw
            className="size-4"
            aria-hidden="true"
          />
          Refresh
        </Button>
      )
    });
  }, [isDev, needRefresh, updateServiceWorker]);

  return null;
}
