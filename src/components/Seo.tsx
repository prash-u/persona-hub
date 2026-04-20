import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";
import {
  buildBreadcrumbJsonLd,
  buildPersonJsonLd,
  buildWebsiteJsonLd
} from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  breadcrumbLabel?: string;
};

export function Seo({ title, description, path, breadcrumbLabel }: SeoProps) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.seo.image);
  const jsonLd = [
    buildPersonJsonLd(),
    buildWebsiteJsonLd(),
    ...(path !== "/"
      ? [
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: breadcrumbLabel ?? title, path }
          ])
        ]
      : [])
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={description}
      />
      <link
        rel="canonical"
        href={url}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={fullTitle}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content={siteConfig.seo.twitterHandle}
      />
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />
      {jsonLd.map((item) => (
        <script
          key={JSON.stringify(item)}
          type="application/ld+json"
        >
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
