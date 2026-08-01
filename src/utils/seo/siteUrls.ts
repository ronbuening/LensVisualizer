/**
 * Public URL normalization for prerendered application pages.
 *
 * Cloudflare Pages serves `route/index.html` at `/route/`, so every page URL
 * exposed to crawlers must use a trailing slash. Static files keep their
 * filename form, and query/hash state is preserved after the normalized path.
 */

export const SITE_URL = "https://surfaceandstop.com";

const STATIC_FILE_EXTENSIONS = new Set([
  "avif",
  "cjs",
  "css",
  "eot",
  "gif",
  "ico",
  "jpeg",
  "jpg",
  "js",
  "json",
  "map",
  "mjs",
  "otf",
  "pdf",
  "png",
  "svg",
  "ttf",
  "txt",
  "webmanifest",
  "webp",
  "woff",
  "woff2",
  "xml",
]);

function hasStaticFileExtension(pathname: string): boolean {
  const finalSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  const extension = finalSegment.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase();
  return extension ? STATIC_FILE_EXTENSIONS.has(extension) : false;
}

/** Normalize a same-site path to the URL form served directly by Cloudflare Pages. */
export function canonicalPagePath(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) return value;

  const suffixIndex = value.search(/[?#]/);
  const pathname = suffixIndex === -1 ? value : value.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : value.slice(suffixIndex);

  if (pathname === "/" || pathname.endsWith("/") || hasStaticFileExtension(pathname)) return value;
  return `${pathname}/${suffix}`;
}

/** Build an absolute canonical URL for a prerendered page route. */
export function canonicalPageUrl(path: string): string {
  return `${SITE_URL}${canonicalPagePath(path)}`;
}

/** Normalize an absolute same-site page URL while leaving external URLs unchanged. */
export function normalizeSitePageUrl(url: string): string {
  if (url === SITE_URL) return `${SITE_URL}/`;
  if (!url.startsWith(`${SITE_URL}/`)) return url;
  return `${SITE_URL}${canonicalPagePath(url.slice(SITE_URL.length))}`;
}
