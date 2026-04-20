import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { HashScrollManager } from "@/components/hash-scroll-manager";
import { Navbar } from "@/components/navbar";
import { PwaUpdateToast } from "@/components/pwa-update-toast";
import { SkipLink } from "@/components/skip-link";

export function RootLayout() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <HashScrollManager />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
      <PwaUpdateToast />
    </>
  );
}
