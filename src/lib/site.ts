import { siteConfig } from "@/config/site";

export function withBasePath(path: string) {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:")) {
    return path;
  }

  const normalizedBase = siteConfig.basePath.endsWith("/")
    ? siteConfig.basePath.slice(0, -1)
    : siteConfig.basePath;

  return `${normalizedBase}${path.startsWith("/") ? path : `/${path}`}` || "/";
}

export function absoluteUrl(path: string) {
  return new URL(withBasePath(path), siteConfig.siteUrl).toString();
}
