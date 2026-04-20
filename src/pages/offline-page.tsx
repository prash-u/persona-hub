import { WifiOff } from "lucide-react";
import { Seo } from "@/components/seo";

export default function OfflinePage() {
  return (
    <>
      <Seo
        title="Offline"
        description="Offline fallback for the portfolio PWA."
        path="/offline"
        breadcrumbLabel="Offline"
      />
      <div className="shell flex min-h-[70vh] items-center justify-center py-16">
        <div className="surface max-w-xl p-10 text-center">
          <WifiOff
            className="mx-auto size-10 text-cyan-500"
            aria-hidden="true"
          />
          <h1 className="font-display mt-5 text-4xl">You are offline.</h1>
          <p className="text-muted-foreground mt-4 text-sm leading-7">
            The app shell and previously cached content should still be available. Reconnect
            to fetch fresh media, external demos, and repository metadata.
          </p>
        </div>
      </div>
    </>
  );
}
