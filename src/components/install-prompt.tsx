import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInstallPrompt } from "@/hooks/use-install-prompt";

export function InstallPrompt() {
  const { canInstall, triggerInstall } = useInstallPrompt();

  if (!canInstall) {
    return null;
  }

  return (
    <div className="surface flex flex-col items-start justify-between gap-4 p-5 md:flex-row md:items-center">
      <div>
        <p className="eyebrow">Install the app</p>
        <h3 className="mt-2 text-lg font-semibold">Save the portfolio for fast offline access.</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          Install this PWA to pin it to your home screen or desktop and browse key
          sections with cached assets.
        </p>
      </div>
      <Button onClick={() => void triggerInstall()}>
        <Download
          className="size-4"
          aria-hidden="true"
        />
        Install
      </Button>
    </div>
  );
}
