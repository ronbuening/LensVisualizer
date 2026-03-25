/**
 * Pure functions for generating SEO metadata from lens data.
 *
 * Used by page components and the prerender script to produce
 * consistent titles, descriptions, and maker slugs.
 */

import type { LensData } from "../types/optics.js";

const SITE_NAME = "Optical Bench";
const SITE_URL = "https://opticalbench.net";

/** Known maker prefixes in lens names, mapped to display names and URL-safe slugs. */
const MAKER_PREFIXES: { prefix: string; display: string; slug: string }[] = [
  { prefix: "CARL ZEISS", display: "Carl Zeiss", slug: "carl-zeiss" },
  { prefix: "VOIGTLÄNDER", display: "Voigtländer", slug: "voigtlander" },
  { prefix: "NIKON", display: "Nikon", slug: "nikon" },
  { prefix: "RICOH", display: "Ricoh", slug: "ricoh" },
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
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: lens.name,
    description: lensPageDescription(lens),
    url: lensCanonicalURL(lensKey),
    author: { "@type": "Person", name: "Ron Buening" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    about: {
      "@type": "Product",
      name: lens.name,
      category: "Camera Lens",
      manufacturer: { "@type": "Organization", name: deriveMaker(lens.name, lens.maker).display },
    },
  };
}

export { SITE_NAME, SITE_URL };
