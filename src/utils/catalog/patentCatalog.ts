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
import { aggregatePatentRecords } from "./patentRecords.js";
import type { PatentJurisdiction, PatentRecord } from "./patentRecords.js";

export {
  aggregatePatentRecords,
  espacenetPatentUrl,
  isPatentPublicationNumber,
  patentJurisdiction,
} from "./patentRecords.js";
export type { PatentJurisdiction, PatentRecord } from "./patentRecords.js";

export type PatentLens = PatentLensRef;

/* Group and index arrays are readonly for the same reason as PatentRecord's
   fields: PATENTS / PATENT_COUNTRY_GROUPS are shared module-scope state. */
export interface PatentAssigneeGroup {
  id: string;
  label: string;
  isFallback: boolean;
  patents: readonly PatentRecord[];
}

export interface PatentCountryGroup {
  jurisdiction: PatentJurisdiction;
  patentCount: number;
  assignees: readonly PatentAssigneeGroup[];
}

export interface PatentIndex {
  patents: readonly PatentRecord[];
  countries: readonly PatentCountryGroup[];
}

export const PATENT_ASSIGNEE_FALLBACK = "No named assignee or applicant";

/**
 * Build the unique patent records and their Country → Assignee hierarchy.
 *
 * Exact patent-number strings are the identity key because the source data
 * stores the displayed publication or grant identifier in canonical form.
 */
export function buildPatentIndex(summaries: readonly LensSummary[]): PatentIndex {
  const patents = aggregatePatentRecords(summaries);

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
