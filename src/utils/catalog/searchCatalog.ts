/**
 * Catalog search — ranked matching for lens names, patent numbers, and authors.
 *
 * The index is derived entirely from lightweight generated metadata, keeping
 * homepage and search-route interactions independent of the full lens catalog.
 */

import { AUTHORS } from "./authorCatalog.js";
import type { AuthorMetadata } from "./authorCatalog.js";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "./lensSummaries.js";
import type { LensSummary } from "./lensSummaries.js";

export interface LensNameSearchMatch {
  type: "lens";
  key: string;
  data: LensSummary;
}

export interface PatentSearchMatch {
  type: "patent";
  key: string;
  data: LensSummary;
}

export interface AuthorSearchMatch {
  type: "author";
  author: AuthorMetadata;
}

export interface CatalogSearchResults {
  lenses: LensNameSearchMatch[];
  patents: PatentSearchMatch[];
  authors: AuthorSearchMatch[];
}

export type CatalogSearchMatch = LensNameSearchMatch | PatentSearchMatch | AuthorSearchMatch;

/** Normalize punctuation, case, and diacritics while preserving word boundaries. */
export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replaceAll("ß", "ss")
    .replaceAll("æ", "ae")
    .replaceAll("ø", "o")
    .replaceAll("ł", "l")
    .replaceAll("đ", "d")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function matchesWords(candidate: string, query: string): boolean {
  const words = query.split(" ").filter(Boolean);
  return words.length > 0 && words.every((word) => candidate.includes(word));
}

function matchScore(candidate: string, query: string): number {
  if (candidate === query) return 0;
  if (candidate.startsWith(query)) return 1;
  if (candidate.split(" ").some((word) => word.startsWith(query))) return 2;
  return 3;
}

/** Return all ranked catalog matches for a query, separated by destination type. */
export function searchCatalog(query: string): CatalogSearchResults {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return { lenses: [], patents: [], authors: [] };
  const compactQuery = normalizedQuery.replaceAll(" ", "");

  const lenses = SUMMARY_KEYS.map((key) => ({ key, data: LENS_SUMMARIES[key] }))
    .filter(({ data }) => matchesWords(normalizeSearchText(data.name), normalizedQuery))
    .sort(
      (a, b) =>
        matchScore(normalizeSearchText(a.data.name), normalizedQuery) -
          matchScore(normalizeSearchText(b.data.name), normalizedQuery) || a.data.name.localeCompare(b.data.name),
    )
    .map(({ key, data }) => ({ type: "lens" as const, key, data }));

  const patents = SUMMARY_KEYS.map((key) => ({ key, data: LENS_SUMMARIES[key] }))
    .filter(({ data }) => {
      if (!data.patentNumber) return false;
      const normalizedPatent = normalizeSearchText(data.patentNumber);
      return (
        matchesWords(normalizedPatent, normalizedQuery) || normalizedPatent.replaceAll(" ", "").includes(compactQuery)
      );
    })
    .sort((a, b) => {
      const patentA = normalizeSearchText(a.data.patentNumber ?? "");
      const patentB = normalizeSearchText(b.data.patentNumber ?? "");
      return (
        matchScore(patentA, normalizedQuery) - matchScore(patentB, normalizedQuery) ||
        patentA.localeCompare(patentB) ||
        a.data.name.localeCompare(b.data.name)
      );
    })
    .map(({ key, data }) => ({ type: "patent" as const, key, data }));

  const authors = AUTHORS.filter((author) => matchesWords(normalizeSearchText(author.name), normalizedQuery))
    .sort(
      (a, b) =>
        matchScore(normalizeSearchText(a.name), normalizedQuery) -
          matchScore(normalizeSearchText(b.name), normalizedQuery) || a.name.localeCompare(b.name),
    )
    .map((author) => ({ type: "author" as const, author }));

  return { lenses, patents, authors };
}

/** Resolve an exact unambiguous query to the page Enter should open directly. */
export function exactSearchTarget(query: string): string | null {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return null;
  const compactQuery = normalizedQuery.replaceAll(" ", "");

  const lensMatches = SUMMARY_KEYS.filter(
    (key) => normalizeSearchText(LENS_SUMMARIES[key].name) === normalizedQuery,
  ).map((key) => `/lens/${key}`);
  const patentMatches = SUMMARY_KEYS.filter((key) => {
    const patent = LENS_SUMMARIES[key].patentNumber;
    return patent ? normalizeSearchText(patent).replaceAll(" ", "") === compactQuery : false;
  }).map((key) => `/lens/${key}`);
  const authorMatches = AUTHORS.filter((author) => normalizeSearchText(author.name) === normalizedQuery).map(
    (author) => `/authors/${author.slug}`,
  );
  const targets = [...new Set([...lensMatches, ...patentMatches, ...authorMatches])];
  return targets.length === 1 ? targets[0] : null;
}
