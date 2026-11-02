import type { CanonicalLens } from "../../optics/buildLens.js";
import type { PatentExample } from "../../types/optics.js";

type LensPatentDisplayData = Pick<CanonicalLens, "source" | "subtitle">;

export interface LensPatentAttribution {
  patentNumber: string;
  example?: PatentExample;
  authors: string[];
}

/**
 * The text that follows a patent number for its example: `", Example 6"`, `", sole example"`, or `""` when the
 * example is not recorded. Every patent line renders it as plain text after the number's link.
 */
export function patentExampleSuffix(example: PatentExample | undefined): string {
  if (!example) return "";
  return `, ${example.id === null ? "sole example" : example.label}`;
}

function legacySubtitle(lens: LensPatentDisplayData): string | null {
  return lens.subtitle?.trim() || null;
}

/** Return normalized structured attribution when both patent fields are present. */
export function lensPatentAttribution(lens: LensPatentDisplayData): LensPatentAttribution | null {
  const patentNumber = lens.source.patentNumber?.trim();
  if (!patentNumber || lens.source.authors === undefined) return null;

  return {
    patentNumber,
    ...(lens.source.example ? { example: lens.source.example } : {}),
    authors: lens.source.authors.map((author) => author.trim()).filter(Boolean),
  };
}

/** Build the standardized patent attribution shown beneath a lens name. */
export function lensDisplaySubtitle(lens: LensPatentDisplayData): string | null {
  const attribution = lensPatentAttribution(lens);
  if (!attribution) return legacySubtitle(lens);

  const publication = `${attribution.patentNumber}${patentExampleSuffix(attribution.example)}`;
  return attribution.authors.length > 0 ? `${publication} — ${attribution.authors.join(", ")}` : publication;
}

/** Return the structured patent number, falling back to a legacy subtitle reference. */
export function lensPatentReference(lens: LensPatentDisplayData): string | null {
  const patentNumber = lens.source.patentNumber?.trim();
  if (patentNumber) return patentNumber;

  const subtitle = legacySubtitle(lens);
  if (!subtitle) return null;
  if (/\bpatent\b/i.test(subtitle)) return subtitle;

  const patentMatch = subtitle.match(/\b(?:US|WO|JP|EP|GB|DE|CN)\s?[A-Z]?\d[\d/,-]*(?:\s?[A-Z]\d?)?\b/i);
  return patentMatch ? patentMatch[0].trim() : null;
}
