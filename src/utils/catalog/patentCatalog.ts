/**
 * Patent catalog — runtime aggregation for patent-centered browsing.
 *
 * Collapses the lightweight visible lens summaries into one record per source
 * patent. Both the patent index and relationship graph consume this catalog so
 * a patent's diagrams and credited parties stay identical across both views.
 */

import { LENS_SUMMARIES, SUMMARY_KEYS } from "./lensSummaries.js";

export interface PatentLens {
  key: string;
  name: string;
  specs?: string[];
}

export interface PatentRecord {
  patentNumber: string;
  patentYear?: number;
  authors: string[];
  assignees: string[];
  lenses: PatentLens[];
}

/** Aggregate visible lens summaries into one record per source patent. */
function buildPatentCatalog(): PatentRecord[] {
  const patents = new Map<
    string,
    {
      patentNumber: string;
      patentYear?: number;
      authors: Set<string>;
      assignees: Set<string>;
      lenses: PatentLens[];
    }
  >();

  for (const key of SUMMARY_KEYS) {
    const lens = LENS_SUMMARIES[key];
    const patentNumber = lens.patentNumber ?? `Patent source for ${lens.name}`;
    const record = patents.get(patentNumber) ?? {
      patentNumber,
      patentYear: lens.patentYear,
      authors: new Set<string>(),
      assignees: new Set<string>(),
      lenses: [],
    };

    for (const author of lens.patentAuthors ?? []) record.authors.add(author);
    for (const assignee of lens.patentAssignees ?? []) record.assignees.add(assignee);
    record.lenses.push({ key, name: lens.name, specs: lens.specs });
    patents.set(patentNumber, record);
  }

  return [...patents.values()]
    .map((patent) => ({
      patentNumber: patent.patentNumber,
      patentYear: patent.patentYear,
      authors: [...patent.authors],
      assignees: [...patent.assignees],
      lenses: patent.lenses.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.patentNumber.localeCompare(b.patentNumber));
}

export const PATENTS = buildPatentCatalog();

const PATENTS_BY_NUMBER = new Map(PATENTS.map((patent) => [patent.patentNumber, patent]));

/** Find an aggregated patent record by its displayed patent number. */
export function getPatentByNumber(patentNumber: string): PatentRecord | undefined {
  return PATENTS_BY_NUMBER.get(patentNumber);
}
