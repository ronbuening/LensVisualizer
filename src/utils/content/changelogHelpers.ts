import type { ChangelogEntry, ChangelogEntryType } from "./changelogData.js";

export const CHANGELOG_TYPE_COLORS: Record<ChangelogEntryType, string> = {
  feature: "#58c",
  fix: "#c65",
  lens: "#2a7",
  improvement: "#c84",
  article: "#a5c",
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

export function groupChangelogByDate(entries: readonly ChangelogEntry[]): Map<string, ChangelogEntry[]> {
  const grouped = new Map<string, ChangelogEntry[]>();
  for (const entry of entries) {
    const bucket = grouped.get(entry.date) ?? [];
    bucket.push(entry);
    grouped.set(entry.date, bucket);
  }
  return grouped;
}
