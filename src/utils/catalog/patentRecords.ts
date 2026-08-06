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

export interface PatentRecord {
  patentNumber: string;
  patentYear?: number;
  jurisdiction: PatentJurisdiction;
  authors: string[];
  assignees: string[];
  lenses: PatentLensRef[];
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
  NL: "Netherlands",
  SU: "Soviet Union",
  US: "United States",
  WO: "International (WIPO)",
};

const patentNumberCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

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
