import type { LensData } from "../../types/optics.js";

type LensPatentDisplayData = Pick<LensData, "patentNumber" | "patentAuthors" | "subtitle">;

export interface LensPatentAttribution {
  patentNumber: string;
  authors: string[];
}

function legacySubtitle(lens: LensPatentDisplayData): string | null {
  return lens.subtitle?.trim() || null;
}

/** Return normalized structured attribution when both patent fields are present. */
export function lensPatentAttribution(lens: LensPatentDisplayData): LensPatentAttribution | null {
  const patentNumber = lens.patentNumber?.trim();
  if (!patentNumber || lens.patentAuthors === undefined) return null;

  return {
    patentNumber,
    authors: lens.patentAuthors.map((author) => author.trim()).filter(Boolean),
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
  const patentNumber = lens.patentNumber?.trim();
  if (patentNumber) return patentNumber;

  const subtitle = legacySubtitle(lens);
  if (!subtitle) return null;
  if (/\bpatent\b/i.test(subtitle)) return subtitle;

  const patentMatch = subtitle.match(/\b(?:US|WO|JP|EP|GB|DE|CN)\s?[A-Z]?\d[\d/,-]*(?:\s?[A-Z]\d?)?\b/i);
  return patentMatch ? patentMatch[0].trim() : null;
}
