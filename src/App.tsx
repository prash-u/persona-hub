import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/layouts/root-layout";

const HomePage = lazy(() => import("@/pages/home-page"));
const PhotosPage = lazy(() => import("@/pages/photos-page"));
const BiotechPage = lazy(() => import("@/pages/biotech-page"));
const ProjectsPage = lazy(() => import("@/pages/projects-page"));
const CvPage = lazy(() => import("@/pages/cv-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const OfflinePage = lazy(() => import("@/pages/offline-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "photos", element: <PhotosPage /> },
        { path: "biotech", element: <BiotechPage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "cv", element: <CvPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "offline", element: <OfflinePage /> },
        { path: "*", element: <NotFoundPage /> }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="shell flex min-h-screen items-center justify-center py-20">
          <div className="surface px-6 py-4 text-sm text-muted-foreground">
            Loading portfolio…
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
