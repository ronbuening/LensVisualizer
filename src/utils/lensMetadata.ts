/**
 * Pure functions for generating SEO metadata from lens data.
 *
 * Used by page components and the prerender script to produce
 * consistent titles, descriptions, and maker slugs.
 */

import type { LensData } from "../types/optics.js";
import buildMeta from "../generated/build-metadata.json";
import makerPrefixes from "../generated/maker-prefixes.json";

const SITE_NAME = "Surface & Stop";
const SITE_URL = "https://surfaceandstop.com";
const SOCIAL_IMAGE_PATH = "/branding/social-dark.svg";
const SOCIAL_IMAGE_URL = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;
const SOCIAL_IMAGE_ALT = "Surface & Stop social card featuring the site's lens mark with RGB ray traces.";
const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;
const META_DESCRIPTION_MAX_LENGTH = 160;

const MAKER_PREFIXES = makerPrefixes as { prefix: string; display: string; slug: string }[];

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

function compactSentence(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function truncateAtWord(value: string, maxLength = META_DESCRIPTION_MAX_LENGTH): string {
  const compact = compactSentence(value);
  if (compact.length <= maxLength) return compact;

  const slice = compact.slice(0, maxLength - 3);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > maxLength * 0.55 ? slice.slice(0, lastSpace) : slice;
  return `${cut.replace(/[,\s.;:]+$/u, "")}...`;
}

function lensSpecSummary(lens: LensData, maxSpecs = 3): string {
  return lens.specs?.slice(0, maxSpecs).join(", ") || "";
}

export function lensPatentReference(lens: LensData): string | null {
  const subtitle = lens.subtitle?.trim();
  if (!subtitle) return null;
  if (/\bpatent\b/i.test(subtitle)) return subtitle;

  const patentMatch = subtitle.match(/\b(?:US|WO|JP|EP|GB|DE|CN)\s?[A-Z]?\d[\d/,-]*(?:\s?[A-Z]\d?)?\b/i);
  return patentMatch ? patentMatch[0].trim() : null;
}

/** Title-case a lens name (e.g., "NIKON NIKKOR Z 50mm f/1.8 S" stays as-is since it's already styled). */
export function lensPageTitle(lens: LensData): string {
  return `${lens.name} — Optical Cross-Section & Ray Tracing | ${SITE_NAME}`;
}

/** Generate a meta description from lens specs and subtitle. */
export function lensPageDescription(lens: LensData): string {
  const specStr = lensSpecSummary(lens);
  const patentRef = lensPatentReference(lens);
  const specClause = specStr ? ` (${specStr})` : "";
  const patentClause = patentRef ? ` from ${patentRef}` : "";
  const base = `${lens.name}${specClause}: patent-derived optical analysis${patentClause}, interactive ray tracing, and aberration tools.`;
  return truncateAtWord(base);
}

/** Canonical URL for a lens page. */
export function lensCanonicalURL(lensKey: string): string {
  return `${SITE_URL}/lens/${lensKey}`;
}

/** Canonical URL for a maker page. */
export function makerCanonicalURL(makerSlug: string): string {
  return `${SITE_URL}/makers/${makerSlug}`;
}

/** Canonical URL for a mount page. */
export function mountCanonicalURL(mountId: string): string {
  return `${SITE_URL}/mounts/${mountId}`;
}

/** Canonical URL for an image-format page. */
export function formatCanonicalURL(formatId: string): string {
  return `${SITE_URL}/formats/${formatId}`;
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
    ...(lensPatentReference(lens)
      ? {
          isBasedOn: {
            "@type": "CreativeWork",
            name: lensPatentReference(lens),
          },
        }
      : {}),
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
