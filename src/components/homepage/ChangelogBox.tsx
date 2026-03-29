/**
 * ChangelogBox — homepage section showing recent site updates.
 *
 * Entries are manually curated in src/utils/changelogData.ts.
 * Grouped by date (newest first) with color-coded type badges.
 * Non-interactive: changelog items do not correspond to routable pages.
 */

import type { Theme } from "../../types/theme.js";
import { CHANGELOG } from "../../utils/changelogData.js";
import type { ChangelogEntry, ChangelogEntryType } from "../../utils/changelogData.js";

interface ChangelogBoxProps {
  theme: Theme;
}

const ENTRY_TYPE_COLORS: Record<ChangelogEntryType, string> = {
  feature: "#58c",
  fix: "#c65",
  lens: "#2a7",
  improvement: "#c84",
  article: "#a5c",
};

const ENTRY_TYPE_LABELS: Record<ChangelogEntryType, string> = {
  feature: "new",
  fix: "fix",
  lens: "lens",
  improvement: "improved",
  article: "article",
};

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ChangelogBox({ theme: t }: ChangelogBoxProps) {
  // Group flat entries into a date-keyed Map, preserving newest-first insertion order.
  const grouped = new Map<string, ChangelogEntry[]>();
  for (const entry of CHANGELOG) {
    const bucket = grouped.get(entry.date) ?? [];
    bucket.push(entry);
    grouped.set(entry.date, bucket);
  }

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
          color: t.body,
          marginBottom: "1rem",
          paddingBottom: "0.25rem",
          borderBottom: `1px solid ${t.panelBorder}`,
        }}
      >
        Changelog
      </h2>

      <div style={{ maxHeight: "28rem", overflowY: "auto" }}>
        {Array.from(grouped.entries()).map(([date, entries]) => (
          <div key={date} style={{ marginBottom: "0.75rem" }}>
            <div
              style={{
                fontSize: "0.7rem",
                color: t.label,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
              }}
            >
              {formatDate(date)}
            </div>

            {entries.map((entry, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  padding: "0.5rem 0.75rem",
                  marginBottom: "0.35rem",
                  borderRadius: 6,
                  border: `1px solid ${t.panelBorder}`,
                  background: t.panelBg,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.6rem",
                    padding: "1px 6px",
                    borderRadius: 3,
                    background: `${ENTRY_TYPE_COLORS[entry.type]}22`,
                    color: ENTRY_TYPE_COLORS[entry.type],
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginTop: "0.15rem",
                  }}
                >
                  {ENTRY_TYPE_LABELS[entry.type]}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: t.body,
                    lineHeight: 1.4,
                  }}
                >
                  {entry.summary}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
