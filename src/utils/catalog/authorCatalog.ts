/**
 * Author catalog — runtime aggregation for inventor pages.
 *
 * Uses the build-generated author slugs and lightweight lens summaries to
 * assemble unique patent records without loading full optical prescriptions.
 * AuthorPage consumes the grouped records; search consumes the author index.
 */

import buildMeta from "../../generated/build-metadata.json";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "./lensSummaries.js";
import type { LensSummary } from "./lensSummaries.js";
import { canonicalPagePath } from "../seo/siteUrls.js";
import { catalogCollator } from "./collation.js";
import type { PatentLensRef, PatentPartyMetadata, PatentPartyRole } from "../../types/catalog.js";
import { groupByNamedParty } from "./groupByNamedParty.js";
import { aggregatePatentRecords } from "./patentCatalog.js";

export type AuthorMetadata = PatentPartyMetadata;

export type AuthorPatentLens = PatentLensRef;

export interface AuthorPatent {
  patentNumber: string;
  patentYear?: number;
  authors: string[];
  assignees: string[];
  lenses: AuthorPatentLens[];
}

export type AuthorGroupMode = "assignee" | "coauthor";

export interface AuthorPatentGroup {
  id: string;
  label: string;
  patents: AuthorPatent[];
  isFallback: boolean;
}

export const AUTHORS = buildMeta.authors as AuthorMetadata[];

const AUTHORS_BY_SLUG = new Map(AUTHORS.map((author) => [author.slug, author]));
const AUTHORS_BY_NAME = new Map(AUTHORS.map((author) => [author.name, author]));
const CATALOG_PATENT_RECORDS = aggregatePatentRecords(
  SUMMARY_KEYS.map((key) => LENS_SUMMARIES[key]),
  { includeFallbackRecords: true },
);

function toAuthorPatent(record: (typeof CATALOG_PATENT_RECORDS)[number]): AuthorPatent {
  const { patentNumber, patentYear, authors, assignees, lenses } = record;
  return { patentNumber, patentYear, authors, assignees, lenses };
}

function compareAuthorPatents(a: AuthorPatent, b: AuthorPatent): number {
  return (
    (a.patentYear ?? Number.POSITIVE_INFINITY) - (b.patentYear ?? Number.POSITIVE_INFINITY) ||
    catalogCollator.compare(a.patentNumber, b.patentNumber)
  );
}

function buildPartyPatentDirectory(records: typeof CATALOG_PATENT_RECORDS) {
  const directory: Record<PatentPartyRole, Map<string, AuthorPatent[]>> = {
    author: new Map(),
    assignee: new Map(),
  };

  const addRecord = (role: PatentPartyRole, name: string, patent: AuthorPatent) => {
    const patents = directory[role].get(name) ?? [];
    patents.push(patent);
    directory[role].set(name, patents);
  };

  for (const record of records) {
    const patent = toAuthorPatent(record);
    for (const author of record.authors) addRecord("author", author, patent);
    for (const assignee of record.assignees) addRecord("assignee", assignee, patent);
  }
  for (const role of ["author", "assignee"] as const) {
    for (const patents of directory[role].values()) patents.sort(compareAuthorPatents);
  }
  return directory;
}

const PATENTS_BY_PARTY = buildPartyPatentDirectory(CATALOG_PATENT_RECORDS);

/** Find build-generated author metadata by its stable URL slug. */
export function getAuthorBySlug(slug: string): AuthorMetadata | undefined {
  return AUTHORS_BY_SLUG.get(slug);
}

/** Find build-generated author metadata by its patent display name. */
export function getAuthorByName(name: string): AuthorMetadata | undefined {
  return AUTHORS_BY_NAME.get(name);
}

/** Return the canonical in-app URL for a named inventor when one exists. */
export function authorPathForName(name: string): string | undefined {
  const author = getAuthorByName(name);
  return author ? canonicalPagePath(`/authors/${author.slug}`) : undefined;
}

/**
 * Aggregate visible lens summaries into one record per patent for a party.
 *
 * A source patent may underpin multiple diagrams. Those diagrams stay under a
 * single patent record so the result describes the party's patent work rather
 * than implying each rendered example is a different filing. The membership
 * test switches between the inventor (`patentAuthors`) and assignee
 * (`patentAssignees`) name lists based on `role`.
 */
export function patentsForParty(
  name: string,
  role: PatentPartyRole,
  summaries?: readonly LensSummary[],
): AuthorPatent[] {
  if (summaries === undefined) return PATENTS_BY_PARTY[role].get(name) ?? [];

  return aggregatePatentRecords(summaries, { includeFallbackRecords: true })
    .filter((patent) => (role === "author" ? patent.authors : patent.assignees).includes(name))
    .map(toAuthorPatent)
    .sort(compareAuthorPatents);
}

/** Aggregate one record per patent for an inventor (see {@link patentsForParty}). */
export function patentsForAuthor(name: string): AuthorPatent[] {
  return patentsForParty(name, "author");
}

/**
 * Regroup an author's patent records for the page toggle and jump sidebar.
 *
 * Multi-party patents intentionally appear in every relevant assignee or
 * co-author section, matching the library's existing patent-party grouping.
 */
export function groupAuthorPatents(
  patents: AuthorPatent[],
  authorName: string,
  mode: AuthorGroupMode,
): AuthorPatentGroup[] {
  const fallbackLabel = mode === "assignee" ? "No named assignee or applicant" : "Sole inventor";
  return groupByNamedParty(
    patents,
    (patent) => (mode === "assignee" ? patent.assignees : patent.authors.filter((author) => author !== authorName)),
    { fallbackId: "fallback", fallbackLabel },
  ).map(({ id, label, items, isFallback }) => ({ id, label, patents: items, isFallback }));
}
