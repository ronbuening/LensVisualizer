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

export interface AuthorMetadata {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}

export interface AuthorPatentLens {
  key: string;
  name: string;
  specs?: string[];
}

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
  const patents = new Map<
    string,
    {
      patentNumber: string;
      patentYear?: number;
      authors: Set<string>;
      assignees: Set<string>;
      lenses: AuthorPatentLens[];
    }
  >();

  for (const key of SUMMARY_KEYS) {
    const lens: LensSummary = LENS_SUMMARIES[key];
    const names = role === "author" ? lens.patentAuthors : lens.patentAssignees;
    if (!names?.includes(name)) continue;

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
    .sort(
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
