import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function Seo({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.seo.ogImage,
  type = "website",
  jsonLd,
}: SeoProps) {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title;
  const url = `${siteConfig.url.replace(/\/$/, "")}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url.replace(/\/$/, "")}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(", ")} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {siteConfig.seo.twitterHandle && (
        <meta name="twitter:creator" content={siteConfig.seo.twitterHandle} />
      )}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
