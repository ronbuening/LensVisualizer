/** Public URL contract shared by build-time SEO artifacts. */

const SITE_URL = "https://surfaceandstop.com";

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

function hasStaticFileExtension(pathname) {
  const finalSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  const extension = finalSegment.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase();
  return extension ? STATIC_FILE_EXTENSIONS.has(extension) : false;
}

function canonicalPagePath(value) {
  if (!value.startsWith("/") || value.startsWith("//")) return value;

  const suffixIndex = value.search(/[?#]/);
  const pathname = suffixIndex === -1 ? value : value.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : value.slice(suffixIndex);

  if (pathname === "/" || pathname.endsWith("/") || hasStaticFileExtension(pathname)) return value;
  return `${pathname}/${suffix}`;
}

function canonicalPageUrl(path) {
  return `${SITE_URL}${canonicalPagePath(path)}`;
}

export { SITE_URL, canonicalPagePath, canonicalPageUrl };
