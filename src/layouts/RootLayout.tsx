import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HashScrollManager } from "@/components/HashScrollManager";
import { PwaUpdateToast } from "@/components/PwaUpdateToast";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <HashScrollManager />
      <main id="main" className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <PwaUpdateToast />
    </div>
  );
}
