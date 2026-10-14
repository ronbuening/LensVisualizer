/**
 * Catalog search — ranked matching for lens names, teleconverters, patent numbers, and authors.
 *
 * The index is derived entirely from lightweight generated metadata, keeping
 * homepage and search-route interactions independent of the full lens catalog.
 */

import { AUTHORS } from "./authorCatalog.js";
import type { AuthorMetadata } from "./authorCatalog.js";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "./lensSummaries.js";
import type { LensSummary } from "./lensSummaries.js";
import { TELECONVERTER_SUMMARY_LIST } from "./teleconverterSummaries.js";
import type { TeleconverterSummary } from "./teleconverterSummaries.js";
import { canonicalPagePath } from "../seo/siteUrls.js";
import { catalogCollator } from "./collation.js";
import { normalizeLensSearchText, transliterateCatalogText } from "./slugText.js";

export { normalizeLensSearchText } from "./slugText.js";

export interface LensNameSearchMatch {
  type: "lens";
  key: string;
  data: LensSummary;
  matchedName: string;
  matchKind: "canonical" | "alias" | "manufacturer";
  relationshipLabel?: string;
}

export interface TeleconverterSearchMatch {
  type: "teleconverter";
  key: string;
  data: TeleconverterSummary;
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
  teleconverters: TeleconverterSearchMatch[];
  patents: PatentSearchMatch[];
  authors: AuthorSearchMatch[];
}

export type CatalogSearchMatch = LensNameSearchMatch | TeleconverterSearchMatch | PatentSearchMatch | AuthorSearchMatch;

/** Normalize punctuation, case, and diacritics while preserving word boundaries. */
export function normalizeSearchText(value: string): string {
  return transliterateCatalogText(value)
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function matchesWords(candidate: string, query: string): boolean {
  const words = query.split(" ").filter(Boolean);
  return words.length > 0 && words.every((word) => candidate.includes(word));
}

function indexLensName(name: string) {
  const normalizedName = normalizeLensSearchText(name);
  const numbers: string[] = normalizedName.match(/\d+(?:\.\d+)?/g) ?? [];
  return { normalizedName, tokens: normalizedName.split(" "), numbers };
}

function matchesIndexedLens(candidate: ReturnType<typeof indexLensName>, words: readonly string[]): boolean {
  return (
    words.length > 0 &&
    words.every((word) => {
      if (/^\d+(?:\.\d+)?$/.test(word)) return candidate.numbers.includes(word);
      if (/\d/.test(word)) return candidate.tokens.includes(word);
      return candidate.normalizedName.includes(word);
    })
  );
}

/** Numbers match whole values; named ranges contribute endpoints, never inferred interior values. */
export function matchesLensSearch(candidate: string, query: string): boolean {
  return matchesIndexedLens(indexLensName(candidate), normalizeLensSearchText(query).split(" ").filter(Boolean));
}

function matchScore(candidate: string, query: string): number {
  if (candidate === query) return 0;
  if (candidate.startsWith(query)) return 1;
  if (candidate.split(" ").some((word) => word.startsWith(query))) return 2;
  return 3;
}

const SEARCH_LENSES = SUMMARY_KEYS.map((key) => {
  const data = LENS_SUMMARIES[key];
  const normalizedPatent = data.patentNumber ? normalizeSearchText(data.patentNumber) : undefined;
  return {
    key,
    data,
    ...indexLensName(data.name),
    normalizedPatent,
    compactPatent: normalizedPatent?.replaceAll(" ", ""),
  };
});

const SEARCH_LENS_NAMES = SEARCH_LENSES.flatMap((entry) => {
  const canonical = {
    ...entry,
    matchedName: entry.data.name,
    matchKind: "canonical" as const,
    relationshipLabel: undefined,
    relationPriority: 0,
  };
  const aliases = (entry.data.aliases ?? []).map((alias) => ({
    ...entry,
    matchedName: alias.name,
    ...indexLensName(alias.name),
    matchKind: "alias" as const,
    relationshipLabel: `Alias of ${entry.data.name}`,
    relationPriority: 1,
  }));
  const manufacturers = (entry.data.manufacturedBy ?? []).map((manufacturer) => {
    const entity = manufacturer.entity ?? manufacturer.maker;
    return {
      ...entry,
      matchedName: entry.data.name,
      ...indexLensName(`${entity} ${manufacturer.maker}`),
      matchKind: "manufacturer" as const,
      relationshipLabel: `Manufactured by ${entity}`,
      relationPriority: 2,
    };
  });
  return [canonical, ...aliases, ...manufacturers];
});

/* Teleconverter names carry the same optical quantities as lens names, so they share the lens-name matcher. */
const SEARCH_TELECONVERTERS = TELECONVERTER_SUMMARY_LIST.map((data) => ({
  key: data.key,
  data,
  ...indexLensName(data.name),
}));

const SEARCH_AUTHORS = AUTHORS.map((author) => ({ author, normalizedName: normalizeSearchText(author.name) }));

/** Return all ranked catalog matches for a query, separated by destination type. */
export function searchCatalog(query: string): CatalogSearchResults {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return { lenses: [], teleconverters: [], patents: [], authors: [] };
  const compactQuery = normalizedQuery.replaceAll(" ", "");
  const lensQuery = normalizeLensSearchText(query);

  const lensWords = lensQuery.split(" ").filter(Boolean);
  const rankedLensNames = SEARCH_LENS_NAMES.filter((entry) => matchesIndexedLens(entry, lensWords))
    .map((entry) => ({
      ...entry,
      score: matchScore(entry.normalizedName, lensQuery) * 10 + entry.relationPriority,
    }))
    .sort(
      (a, b) =>
        a.score - b.score ||
        catalogCollator.compare(a.matchedName, b.matchedName) ||
        catalogCollator.compare(a.data.name, b.data.name),
    );
  const seenLensKeys = new Set<string>();
  const lenses = rankedLensNames.flatMap(({ key, data, matchedName, matchKind, relationshipLabel }) => {
    if (seenLensKeys.has(key)) return [];
    seenLensKeys.add(key);
    return [{ type: "lens" as const, key, data, matchedName, matchKind, relationshipLabel }];
  });

  const teleconverters = SEARCH_TELECONVERTERS.filter((entry) => matchesIndexedLens(entry, lensWords))
    .map((entry) => ({ ...entry, score: matchScore(entry.normalizedName, lensQuery) }))
    .sort((a, b) => a.score - b.score || catalogCollator.compare(a.data.name, b.data.name))
    .map(({ key, data }) => ({ type: "teleconverter" as const, key, data }));

  const patents = SEARCH_LENSES.filter(({ normalizedPatent, compactPatent }) => {
    if (!normalizedPatent || !compactPatent) return false;
    return matchesWords(normalizedPatent, normalizedQuery) || compactPatent.includes(compactQuery);
  })
    .map((entry) => ({ ...entry, score: matchScore(entry.normalizedPatent!, normalizedQuery) }))
    .sort((a, b) => {
      return (
        a.score - b.score ||
        catalogCollator.compare(a.normalizedPatent!, b.normalizedPatent!) ||
        catalogCollator.compare(a.data.name, b.data.name)
      );
    })
    .map(({ key, data }) => ({ type: "patent" as const, key, data }));

  const authors = SEARCH_AUTHORS.filter(({ normalizedName }) => matchesWords(normalizedName, normalizedQuery))
    .map((entry) => ({ ...entry, score: matchScore(entry.normalizedName, normalizedQuery) }))
    .sort((a, b) => a.score - b.score || catalogCollator.compare(a.author.name, b.author.name))
    .map(({ author }) => ({ type: "author" as const, author }));

  return { lenses, teleconverters, patents, authors };
}

/** Resolve an exact unambiguous query to the page Enter should open directly. */
export function exactSearchTarget(query: string): string | null {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return null;
  const compactQuery = normalizedQuery.replaceAll(" ", "");
  const lensQuery = normalizeLensSearchText(query);

  const lensMatches = SEARCH_LENS_NAMES.filter(
    ({ normalizedName, matchKind }) => matchKind !== "manufacturer" && normalizedName === lensQuery,
  ).map(({ key }) => canonicalPagePath(`/lens/${key}`));
  const teleconverterMatches = SEARCH_TELECONVERTERS.filter(({ normalizedName }) => normalizedName === lensQuery).map(
    ({ key }) => canonicalPagePath(`/teleconverters/${key}`),
  );
  const patentMatches = SEARCH_LENSES.filter(({ compactPatent }) => compactPatent === compactQuery).map(({ key }) =>
    canonicalPagePath(`/lens/${key}`),
  );
  const authorMatches = SEARCH_AUTHORS.filter(({ normalizedName }) => normalizedName === normalizedQuery).map(
    ({ author }) => canonicalPagePath(`/authors/${author.slug}`),
  );
  const targets = [...new Set([...lensMatches, ...teleconverterMatches, ...patentMatches, ...authorMatches])];
  return targets.length === 1 ? targets[0] : null;
}
