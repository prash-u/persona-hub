import { absoluteUrl } from "@/lib/site";
import { siteConfig } from "@/config/site";

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.person.jobTitle,
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    sameAs: siteConfig.person.sameAs,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location
    }
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.siteUrl,
    description: siteConfig.description
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
