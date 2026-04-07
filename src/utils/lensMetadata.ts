/**
 * Pure functions for generating SEO metadata from lens data.
 *
 * Used by page components and the prerender script to produce
 * consistent titles, descriptions, and maker slugs.
 */

import type { LensData } from "../types/optics.js";
import buildMeta from "../generated/build-metadata.json";

const SITE_NAME = "Optical Bench";
const SITE_URL = "https://opticalbench.net";
const SOCIAL_IMAGE_PATH = "/og-default.png";
const SOCIAL_IMAGE_URL = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;
const SOCIAL_IMAGE_ALT = "Optical Bench social card showing a stylized lens diagram and ray traces.";
const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;

/* Known maker prefixes in lens names, mapped to display names and URL-safe slugs.
   Build-time copy: scripts/generate-build-metadata.mjs MAKER_PREFIXES */
const MAKER_PREFIXES: { prefix: string; display: string; slug: string }[] = [
  { prefix: "CANON", display: "Canon", slug: "canon" },
  { prefix: "CARL ZEISS", display: "Carl Zeiss", slug: "carl-zeiss" },
  { prefix: "FUJIFILM", display: "Fujifilm", slug: "fujifilm" },
  { prefix: "FUJINON", display: "Fujifilm", slug: "fujifilm" },
  { prefix: "VOIGTLÄNDER", display: "Voigtländer", slug: "voigtlander" },
  { prefix: "NIKON", display: "Nikon", slug: "nikon" },
  { prefix: "RICOH", display: "Ricoh", slug: "ricoh" },
  { prefix: "VIVITAR", display: "Vivitar", slug: "vivitar" },
];

export interface MakerInfo {
  display: string;
  slug: string;
}

/** Derive maker info from a lens's maker field or name. */
export function deriveMaker(nameOrMaker: string, makerField?: string): MakerInfo {
  /* Use explicit maker field if provided */
  if (makerField) {
    const entry = MAKER_PREFIXES.find((m) => m.display === makerField);
    if (entry) return { display: entry.display, slug: entry.slug };
    return { display: makerField, slug: makerField.toLowerCase().replace(/\s+/g, "-") };
  }
  /* Fall back to deriving from lens name */
  const upper = nameOrMaker.toUpperCase();
  for (const { prefix, display, slug } of MAKER_PREFIXES) {
    if (upper.startsWith(prefix)) return { display, slug };
  }
  const firstWord = nameOrMaker.split(/\s+/)[0];
  return { display: firstWord, slug: firstWord.toLowerCase() };
}

/** All known maker slugs, derived from MAKER_PREFIXES. */
export function allMakerSlugs(): string[] {
  return MAKER_PREFIXES.map((m) => m.slug);
}

/** Look up maker display name from slug. */
export function makerDisplayName(slug: string): string | null {
  const entry = MAKER_PREFIXES.find((m) => m.slug === slug);
  return entry ? entry.display : null;
}

/** Title-case a lens name (e.g., "NIKON NIKKOR Z 50mm f/1.8 S" stays as-is since it's already styled). */
export function lensPageTitle(lens: LensData): string {
  return `${lens.name} — Interactive Lens Diagram | ${SITE_NAME}`;
}

/** Generate a meta description from lens specs and subtitle. */
export function lensPageDescription(lens: LensData): string {
  const specStr = lens.specs?.slice(0, 3).join(", ") || "";
  const patent = lens.subtitle ? ` From ${lens.subtitle}.` : "";
  const base = `Explore the ${specStr} lens.${patent} Interactive ray tracing, element inspection, and aberration analysis.`;
  return base.length > 160 ? base.slice(0, 157) + "..." : base;
}

/** Canonical URL for a lens page. */
export function lensCanonicalURL(lensKey: string): string {
  return `${SITE_URL}/lens/${lensKey}`;
}

/** Canonical URL for a maker page. */
export function makerCanonicalURL(makerSlug: string): string {
  return `${SITE_URL}/makers/${makerSlug}`;
}

/** Generate JSON-LD structured data for a lens page. */
export function lensJsonLd(lens: LensData, lensKey: string): Record<string, unknown> {
  const freshness = (buildMeta.lensFreshness as Record<string, { publishedOn: string; lastModified: string }>)[lensKey];
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: lens.name,
    description: lensPageDescription(lens),
    url: lensCanonicalURL(lensKey),
    mainEntityOfPage: lensCanonicalURL(lensKey),
    author: { "@type": "Person", name: "Ron Buening" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    ...(freshness
      ? {
          datePublished: freshness.publishedOn,
          dateModified: freshness.lastModified,
        }
      : {}),
    about: {
      "@type": "Product",
      name: lens.name,
      category: "Camera Lens",
      manufacturer: { "@type": "Organization", name: deriveMaker(lens.name, lens.maker).display },
    },
  };
}

/* Re-export comparison metadata (moved to comparison module) for backward compatibility */
export { comparePageTitle, comparePageDescription, compareCanonicalURL } from "../comparison/comparisonURLSync.js";

export {
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_PATH,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_WIDTH,
  SOCIAL_IMAGE_HEIGHT,
};
