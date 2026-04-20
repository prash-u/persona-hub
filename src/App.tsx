import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "@/layouts/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const Photos = lazy(() => import("./pages/Photos"));
const Biotech = lazy(() => import("./pages/Biotech"));
const Projects = lazy(() => import("./pages/Projects"));
const CV = lazy(() => import("./pages/CV"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="container-editorial py-24">
    <div className="h-6 w-32 animate-pulse rounded bg-muted" />
    <div className="mt-6 h-12 w-3/4 animate-pulse rounded bg-muted" />
    <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-muted" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/biotech" element={<Biotech />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
