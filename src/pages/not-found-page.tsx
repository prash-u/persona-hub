import { Compass } from "lucide-react";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/site";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="404"
        description="The page you requested could not be found."
        path="/404"
        breadcrumbLabel="404"
      />
      <div className="shell flex min-h-[70vh] items-center justify-center py-16">
        <div className="page-panel max-w-xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="font-display mt-4 text-4xl">This route is out of frame.</h1>
          <p className="text-muted-foreground mt-4 text-sm leading-7">
            The page may have moved, or the path may not exist in this portfolio build.
            Head back to the main routes to continue exploring.
          </p>
          <div className="mt-8 flex justify-center">
            <Button onClick={() => (window.location.href = withBasePath("/"))}>
              <Compass
                className="size-4"
                aria-hidden="true"
              />
              Return home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
