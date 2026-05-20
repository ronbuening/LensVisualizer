import type { Theme } from "../../types/theme.js";
import { CHANGELOG } from "../../utils/content/changelogData.js";
import {
  CHANGELOG_TYPE_COLORS,
  CHANGELOG_TYPE_LABELS,
  formatDisplayDate,
  groupChangelogByDate,
} from "../../utils/content/changelogHelpers.js";
import type { ChangelogEntry } from "../../utils/content/changelogData.js";

interface ChangelogListProps {
  theme: Theme;
  entries?: readonly ChangelogEntry[];
  maxHeight?: string;
}

export default function ChangelogList({ theme: t, entries = CHANGELOG, maxHeight = "28rem" }: ChangelogListProps) {
  const grouped = groupChangelogByDate(entries);

  return (
    <div style={{ maxHeight, overflowY: "auto", paddingRight: "0.25rem" }}>
      {Array.from(grouped.entries()).map(([date, dateEntries]) => (
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
            {formatDisplayDate(date)}
          </div>

          {dateEntries.map((entry, i) => (
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
                  background: `${CHANGELOG_TYPE_COLORS[entry.type]}22`,
                  color: CHANGELOG_TYPE_COLORS[entry.type],
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: "0.15rem",
                }}
              >
                {CHANGELOG_TYPE_LABELS[entry.type]}
              </span>
              <span style={{ fontSize: "0.8rem", color: t.body, lineHeight: 1.4 }}>{entry.summary}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
