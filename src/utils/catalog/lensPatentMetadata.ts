import type { CanonicalLens } from "../../optics/buildLens.js";
import type { LiteratureSource, PatentExample } from "../../types/optics.js";

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

/** The surname of a printed personal name, with its lowercase particles: `"Moritz von Rohr"` → `"von Rohr"`. */
function surname(name: string): string {
  const words = name.trim().split(/\s+/);
  let first = words.length - 1;
  while (first > 1 && /^\p{Ll}/u.test(words[first - 1])) first--;
  return words.slice(first).join(" ");
}

/** A short in-text citation of a literature source: `"von Rohr 1899"`, `"Kingslake and Johnson 2010"`. */
export function literatureShortCitation(literature: LiteratureSource): string {
  const names = literature.authors.map(surname);
  const who = names.length > 2 ? `${names[0]} et al.` : names.join(" and ");
  return `${who} ${literature.year}`;
}

/** The parts of a full literature citation, in reading order; the title is set apart for italics. */
export interface LiteratureCitationParts {
  /** `"Moritz von Rohr, "` */
  lead: string;
  title: string;
  /** `" (Berlin: Julius Springer, 1899), p. 250, Fig. 100; after J. M. Eder (1893)"` */
  tail: string;
}

export function literatureCitationParts(literature: LiteratureSource): LiteratureCitationParts {
  const { authors, title, year, publisher, place, locator, after } = literature;
  const people = authors.length > 1 ? `${authors.slice(0, -1).join(", ")} and ${authors.at(-1)}` : authors[0];
  const imprint = [place && publisher ? `${place}: ${publisher}` : (place ?? publisher), year].filter(Boolean);
  return {
    lead: `${people}, `,
    title,
    tail: ` (${imprint.join(", ")}), ${locator}${after ? `; after ${after}` : ""}`,
  };
}

/** A full literature citation as plain text. */
export function literatureCitation(literature: LiteratureSource): string {
  const { lead, title, tail } = literatureCitationParts(literature);
  return `${lead}${title}${tail}`;
}

/** The literature source of a literature reconstruction, or null for any other lens. */
export function lensLiteratureSource(lens: LensPatentDisplayData): LiteratureSource | null {
  return lens.source.literature ?? null;
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

/** Build the standardized source attribution shown beneath a lens name: a patent line, or a literature citation. */
export function lensDisplaySubtitle(lens: LensPatentDisplayData): string | null {
  const attribution = lensPatentAttribution(lens);
  if (!attribution) {
    const literature = lensLiteratureSource(lens);
    return literature ? literatureCitation(literature) : legacySubtitle(lens);
  }

  const publication = `${attribution.patentNumber}${patentExampleSuffix(attribution.example)}`;
  return attribution.authors.length > 0 ? `${publication} — ${attribution.authors.join(", ")}` : publication;
}

/** Return the structured patent number, falling back to a legacy subtitle reference; none for a literature model. */
export function lensPatentReference(lens: LensPatentDisplayData): string | null {
  const patentNumber = lens.source.patentNumber?.trim();
  if (patentNumber) return patentNumber;
  if (lensLiteratureSource(lens)) return null;

  const subtitle = legacySubtitle(lens);
  if (!subtitle) return null;
  if (/\bpatent\b/i.test(subtitle)) return subtitle;

  const patentMatch = subtitle.match(/\b(?:US|WO|JP|EP|GB|DE|CN)\s?[A-Z]?\d[\d/,-]*(?:\s?[A-Z]\d?)?\b/i);
  return patentMatch ? patentMatch[0].trim() : null;
}
