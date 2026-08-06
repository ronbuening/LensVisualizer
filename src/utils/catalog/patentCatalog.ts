/**
 * Patent catalog — runtime aggregation for the patent-number index.
 *
 * Builds one record per source patent from the lightweight lens summaries,
 * then groups those records by publication jurisdiction and assignee. Jointly
 * assigned patents intentionally appear in every named assignee section.
 */

import { LENS_SUMMARIES, SUMMARY_KEYS } from "./lensSummaries.js";
import type { LensSummary } from "./lensSummaries.js";
import { catalogCollator } from "./collation.js";
import type { PatentLensRef } from "../../types/catalog.js";
import { groupByNamedParty } from "./groupByNamedParty.js";

export type PatentLens = PatentLensRef;

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
  lenses: PatentLens[];
}

export interface PatentAssigneeGroup {
  id: string;
  label: string;
  isFallback: boolean;
  patents: PatentRecord[];
}

export interface PatentCountryGroup {
  jurisdiction: PatentJurisdiction;
  patentCount: number;
  assignees: PatentAssigneeGroup[];
}

export interface PatentIndex {
  patents: PatentRecord[];
  countries: PatentCountryGroup[];
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

export const PATENT_ASSIGNEE_FALLBACK = "No named assignee or applicant";

const patentNumberCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

/**
 * Build a worldwide Espacenet publication-number search URL.
 *
 * Espacenet accepts DOCDB-style identifiers without display punctuation and is
 * flexible about omitted kind codes, which covers both modern publications and
 * the historical patent-number formats represented in the catalog.
 */
export function espacenetPatentUrl(patentNumber: string): string {
  const publicationNumber = patentNumber.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return `https://worldwide.espacenet.com/patent/search?q=${encodeURIComponent(`pn=${publicationNumber}`)}`;
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
 * Build the unique patent records and their Country → Assignee hierarchy.
 *
 * Exact patent-number strings are the identity key because the source data
 * stores the displayed publication or grant identifier in canonical form.
 */
export function buildPatentIndex(summaries: readonly LensSummary[]): PatentIndex {
  const records = new Map<
    string,
    {
      patentNumber: string;
      patentYear?: number;
      jurisdiction: PatentJurisdiction;
      authors: Set<string>;
      assignees: Set<string>;
      lenses: Map<string, PatentLens>;
    }
  >();

  for (const lens of summaries) {
    if (!lens.visible || !lens.patentNumber) continue;

    const record = records.get(lens.patentNumber) ?? {
      patentNumber: lens.patentNumber,
      patentYear: lens.patentYear,
      jurisdiction: patentJurisdiction(lens.patentNumber),
      authors: new Set<string>(),
      assignees: new Set<string>(),
      lenses: new Map<string, PatentLens>(),
    };

    record.patentYear ??= lens.patentYear;
    for (const author of lens.patentAuthors ?? []) record.authors.add(author);
    for (const assignee of lens.patentAssignees ?? []) record.assignees.add(assignee);
    record.lenses.set(lens.key, { key: lens.key, name: lens.name, specs: lens.specs });
    records.set(lens.patentNumber, record);
  }

  const patents: PatentRecord[] = [...records.values()]
    .map((record) => ({
      patentNumber: record.patentNumber,
      patentYear: record.patentYear,
      jurisdiction: record.jurisdiction,
      authors: [...record.authors].sort((a, b) => catalogCollator.compare(a, b)),
      assignees: [...record.assignees].sort((a, b) => catalogCollator.compare(a, b)),
      lenses: [...record.lenses.values()].sort((a, b) => catalogCollator.compare(a.name, b.name)),
    }))
    .sort((a, b) => patentNumberCollator.compare(a.patentNumber, b.patentNumber));

  const countries = new Map<
    string,
    {
      jurisdiction: PatentJurisdiction;
      patents: PatentRecord[];
    }
  >();

  for (const patent of patents) {
    const country = countries.get(patent.jurisdiction.code) ?? {
      jurisdiction: patent.jurisdiction,
      patents: [],
    };
    country.patents.push(patent);
    countries.set(patent.jurisdiction.code, country);
  }

  return {
    patents,
    countries: [...countries.values()]
      .map((country) => ({
        jurisdiction: country.jurisdiction,
        patentCount: country.patents.length,
        assignees: groupByNamedParty(country.patents, (patent) => patent.assignees, {
          fallbackId: "fallback",
          fallbackLabel: PATENT_ASSIGNEE_FALLBACK,
        }).map(({ id, label, items, isFallback }) => ({ id, label, patents: items, isFallback })),
      }))
      .sort((a, b) => catalogCollator.compare(a.jurisdiction.label, b.jurisdiction.label)),
  };
}

const PATENT_INDEX = buildPatentIndex(SUMMARY_KEYS.map((key) => LENS_SUMMARIES[key]));

export const PATENTS = PATENT_INDEX.patents;
export const PATENT_COUNTRY_GROUPS = PATENT_INDEX.countries;
