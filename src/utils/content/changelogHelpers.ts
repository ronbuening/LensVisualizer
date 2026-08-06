import type { ChangelogEntry, ChangelogEntryType } from "./changelogData.js";

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
