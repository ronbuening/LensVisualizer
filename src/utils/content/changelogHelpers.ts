/**
 * Changelog entry contract and display helpers.
 *
 * This module stays import-free at runtime so plain-Node scripts (the changelog compiler, RSS feeds, SEO audit) load
 * the same type list and anchor ids the site renders. Entries live one per file under `src/content/changelog/`; see
 * agent_docs/changelog.md.
 */

/** Valid entry types, in the order they sort within one day (alphabetical, matching the entry file names). */
export const CHANGELOG_ENTRY_TYPES = ["article", "feature", "fix", "improvement", "lens"] as const;

export type ChangelogEntryType = (typeof CHANGELOG_ENTRY_TYPES)[number];

export interface ChangelogEntry {
  /** ISO date string (YYYY-MM-DD): the merge or scheduled publication date, taken from the entry file name */
  date: string;
  /** Category tag for badge display, taken from the entry file name */
  type: ChangelogEntryType;
  /** User-facing one-liner in past tense, e.g. "Added X" or "Fixed Y": the entry file's text */
  summary: string;
}

export const CHANGELOG_TYPE_COLORS: Record<ChangelogEntryType, string> = {
  feature: "#5588cc",
  fix: "#cc6655",
  lens: "#22aa77",
  improvement: "#cc8844",
  article: "#aa55cc",
};

export const CHANGELOG_TYPE_LABELS: Record<ChangelogEntryType, string> = {
  feature: "new",
  fix: "fix",
  lens: "lens",
  improvement: "improved",
  article: "article",
};

export function formatDisplayDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function changelogEntryId(entry: ChangelogEntry): string {
  const identity = `${entry.date.trim()}|${entry.type.trim()}|${entry.summary.trim()}`;
  let hash = 0x811c9dc5;

  for (const character of identity) {
    hash ^= character.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 0x01000193);
  }

  return `changelog-${entry.date.trim()}-${entry.type.trim()}-${(hash >>> 0).toString(36)}`;
}

export function groupChangelogByDate(entries: readonly ChangelogEntry[]): Map<string, ChangelogEntry[]> {
  const grouped = new Map<string, ChangelogEntry[]>();
  for (const entry of entries) {
    const bucket = grouped.get(entry.date) ?? [];
    bucket.push(entry);
    grouped.set(entry.date, bucket);
  }
  return grouped;
}
