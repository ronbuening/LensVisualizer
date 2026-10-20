import type { CanonicalLens } from "../../optics/buildLens.js";

type LensPatentDisplayData = Pick<CanonicalLens, "source" | "subtitle">;

export interface LensPatentAttribution {
  patentNumber: string;
  authors: string[];
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
    authors: lens.source.authors.map((author) => author.trim()).filter(Boolean),
  };
}

/** Build the standardized patent attribution shown beneath a lens name. */
export function lensDisplaySubtitle(lens: LensPatentDisplayData): string | null {
  const attribution = lensPatentAttribution(lens);
  if (!attribution) return legacySubtitle(lens);

  return attribution.authors.length > 0
    ? `${attribution.patentNumber} — ${attribution.authors.join(", ")}`
    : attribution.patentNumber;
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
