/**
 * Patent record aggregation — the shared leaf under the patent and author catalogs.
 *
 * Holds only pure functions and types so that importers pay no module-evaluation
 * cost: authorCatalog (on the search/homepage path) and patentCatalog (on the
 * patent routes) each build their own module-scope records from these helpers
 * without dragging in the other subsystem's precomputed index.
 */

import type { LensSummary } from "./lensSummaries.js";
import { catalogCollator } from "./collation.js";
import type { PatentLensRef } from "../../types/catalog.js";

export interface PatentJurisdiction {
  code: string;
  label: string;
}

/* Array fields are readonly because aggregated records are shared module-scope
   state (PATENTS, the author directory) — an in-place sort in one page would
   corrupt every other consumer. Copy before reordering. */
export interface PatentRecord {
  patentNumber: string;
  patentYear?: number;
  jurisdiction: PatentJurisdiction;
  authors: readonly string[];
  assignees: readonly string[];
  lenses: readonly PatentLensRef[];
}

export interface AggregatePatentOptions {
  includeFallbackRecords?: boolean;
}

const JURISDICTION_LABELS: Record<string, string> = {
  AT: "Austria",
  CA: "Canada",
  CH: "Switzerland",
  CN: "China",
  DD: "East Germany (GDR)",
  DE: "Germany",
  EP: "European Patent Office",
  FR: "France",
  GB: "United Kingdom",
  IT: "Italy",
  JP: "Japan",
  KR: "South Korea",
  NL: "Netherlands",
  SU: "Soviet Union",
  US: "United States",
  WO: "International (WIPO)",
};

const patentNumberCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

/** Return whether a display value is an external patent publication number rather than a local fallback label. */
export function isPatentPublicationNumber(value: string): boolean {
  return /^[A-Z]{2}\s+.*\d/i.test(value.trim());
}

/**
 * Convert a catalog display number into the DOCDB publication number that
 * Espacenet indexes.
 *
 * Three catalog formats diverge from DOCDB. US application publications print a
 * seven-digit serial whose leading zero DOCDB drops (US 2018/0164556 A1 is
 * US2018164556A1). Japanese era numbers keep their serial without leading zeros
 * (JP S62-078520 A is JPS6278520A). Pre-2000 Japanese numbers recorded with a
 * Western year must use the Showa or Heisei era year the publication carries
 * (JP 1991-141313 is JPH03141313). Every other format, including post-2000
 * Japanese numbers whose six-digit serials keep their zeros, only needs its
 * display punctuation removed.
 */
export function docdbPublicationNumber(patentNumber: string): string {
  const display = patentNumber.trim().toUpperCase();

  const usApplication = display.match(/^US\s+(\d{4})\/0(\d{6})\s*([A-Z]\d?)?$/);
  if (usApplication) return `US${usApplication[1]}${usApplication[2]}${usApplication[3] ?? ""}`;

  const japanese = display.match(/^JP\s+(?:([SH])(\d{1,2})|(\d{4}))-(\d+)\s*([A-Z]\d?)?$/);
  if (japanese) {
    const [, era, eraYear, westernYear, serial, kind = ""] = japanese;
    const resolved = era
      ? { era, eraYear: Number(eraYear) }
      : japaneseEraFromWesternYear(Number(westernYear), Number(serial));
    if (resolved) return `JP${resolved.era}${String(resolved.eraYear).padStart(2, "0")}${Number(serial)}${kind}`;
  }

  return display.replace(/[^A-Z0-9]/g, "");
}

/**
 * Map a pre-2000 Western publication year to its Showa or Heisei era year; later
 * years keep the Western form.
 *
 * 1989 spans both eras. The JPO kept Showa 64 numbering for publications until
 * early April 1989 (serials through the 90000s) and started Heisei 1 numbering
 * at 100000, so the serial decides which era prefix a 1989 number carries.
 */
function japaneseEraFromWesternYear(year: number, serial: number): { era: "S" | "H"; eraYear: number } | undefined {
  if (year >= 2000 || year < 1926) return undefined;
  if (year === 1989) return serial < 100000 ? { era: "S", eraYear: 64 } : { era: "H", eraYear: 1 };
  return year > 1989 ? { era: "H", eraYear: year - 1988 } : { era: "S", eraYear: year - 1925 };
}

/** Build a worldwide Espacenet publication-number search URL from a catalog display number. */
export function espacenetPatentUrl(patentNumber: string): string {
  return `https://worldwide.espacenet.com/patent/search?q=${encodeURIComponent(`pn=${docdbPublicationNumber(patentNumber)}`)}`;
}

/** Resolve the publication authority encoded at the start of a patent number. */
export function patentJurisdiction(patentNumber: string): PatentJurisdiction {
  const code = patentNumber.trim().match(/^([A-Z]{2})\b/)?.[1] ?? "OTHER";
  return {
    code,
    label: JURISDICTION_LABELS[code] ?? (code === "OTHER" ? "Other jurisdictions" : code),
  };
}

/**
 * Aggregate visible lens summaries into one defensively merged record per source patent.
 *
 * Per-patent `authors`/`assignees` preserve lens-file source order (first
 * occurrence wins) per LENS_DATA_SPEC — only identity-level lists sort.
 *
 * @param summaries - lightweight catalog records to aggregate
 * @param options - whether attributed lenses without a patent number become fallback records
 * @returns unique patent records ordered by their displayed patent number
 */
export function aggregatePatentRecords(
  summaries: readonly LensSummary[],
  options: AggregatePatentOptions = {},
): PatentRecord[] {
  const records = new Map<
    string,
    {
      patentNumber: string;
      patentYear?: number;
      jurisdiction: PatentJurisdiction;
      authors: Set<string>;
      assignees: Set<string>;
      lenses: Map<string, PatentLensRef>;
    }
  >();

  for (const lens of summaries) {
    if (!lens.visible) continue;
    const explicitPatentNumber = lens.patentNumber?.trim();
    if (!explicitPatentNumber && !options.includeFallbackRecords) continue;
    const patentIdentity = explicitPatentNumber || `lens:${lens.key}`;
    const patentNumber = explicitPatentNumber || `Patent source for ${lens.name}`;

    const record = records.get(patentIdentity) ?? {
      patentNumber,
      patentYear: lens.patentYear,
      jurisdiction: patentJurisdiction(patentNumber),
      authors: new Set<string>(),
      assignees: new Set<string>(),
      lenses: new Map<string, PatentLensRef>(),
    };

    record.patentYear ??= lens.patentYear;
    for (const author of lens.patentAuthors ?? []) record.authors.add(author);
    for (const assignee of lens.patentAssignees ?? []) record.assignees.add(assignee);
    record.lenses.set(lens.key, { key: lens.key, name: lens.name, specs: lens.specs });
    records.set(patentIdentity, record);
  }

  return [...records.values()]
    .map((record) => ({
      patentNumber: record.patentNumber,
      patentYear: record.patentYear,
      jurisdiction: record.jurisdiction,
      authors: [...record.authors],
      assignees: [...record.assignees],
      lenses: [...record.lenses.values()].sort((a, b) => catalogCollator.compare(a.name, b.name)),
    }))
    .sort((a, b) => patentNumberCollator.compare(a.patentNumber, b.patentNumber));
}
