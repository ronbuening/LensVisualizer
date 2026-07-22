/**
 * Author catalog — runtime aggregation for inventor pages.
 *
 * Uses the build-generated author slugs and shared patent catalog without
 * loading full optical prescriptions. AuthorPage consumes the grouped records;
 * search consumes the author index.
 */

import buildMeta from "../../generated/build-metadata.json";
import { PATENTS } from "./patentCatalog.js";
import type { PatentLens, PatentRecord } from "./patentCatalog.js";

export interface AuthorMetadata {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}

export type AuthorPatentLens = PatentLens;

export type AuthorPatent = PatentRecord;

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
  return author ? `/authors/${author.slug}` : undefined;
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
export function patentsForParty(name: string, role: "author" | "assignee"): AuthorPatent[] {
  return PATENTS.filter((patent) =>
    role === "author" ? patent.authors.includes(name) : patent.assignees.includes(name),
  ).sort(
    (a, b) =>
      (a.patentYear ?? Number.POSITIVE_INFINITY) - (b.patentYear ?? Number.POSITIVE_INFINITY) ||
      a.patentNumber.localeCompare(b.patentNumber),
  );
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
  const groups = new Map<string, AuthorPatentGroup>();
  const fallbackLabel = mode === "assignee" ? "No named assignee or applicant" : "Sole inventor";

  const addPatent = (id: string, label: string, patent: AuthorPatent, isFallback = false) => {
    const group = groups.get(id) ?? { id, label, patents: [], isFallback };
    group.patents.push(patent);
    groups.set(id, group);
  };

  for (const patent of patents) {
    const parties = mode === "assignee" ? patent.assignees : patent.authors.filter((author) => author !== authorName);
    if (parties.length === 0) {
      addPatent("fallback", fallbackLabel, patent, true);
      continue;
    }
    for (const party of new Set(parties)) addPatent(`named:${party}`, party, patent);
  }

  return [...groups.values()].sort(
    (a, b) => Number(a.isFallback) - Number(b.isFallback) || a.label.localeCompare(b.label),
  );
}
