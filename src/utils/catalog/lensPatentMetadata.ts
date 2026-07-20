import type { LensData } from "../../types/optics.js";

type LensPatentDisplayData = Pick<LensData, "patentNumber" | "patentAuthors" | "subtitle">;

function legacySubtitle(lens: LensPatentDisplayData): string | null {
  return lens.subtitle?.trim() || null;
}

/** Build the standardized patent attribution shown beneath a lens name. */
export function lensDisplaySubtitle(lens: LensPatentDisplayData): string | null {
  const patentNumber = lens.patentNumber?.trim();
  if (!patentNumber || lens.patentAuthors === undefined) return legacySubtitle(lens);

  const authors = lens.patentAuthors.map((author) => author.trim()).filter(Boolean);
  return authors.length > 0 ? `${patentNumber} — ${authors.join(", ")}` : patentNumber;
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
