import type { ReactNode } from "react";
import { Link } from "react-router";
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

function renderSummary(entry: ChangelogEntry, theme: Theme): ReactNode {
  if (!entry.links || entry.links.length === 0) return entry.summary;

  const pieces: ReactNode[] = [];
  let cursor = 0;

  entry.links.forEach((link, linkIndex) => {
    const nextIndex = entry.summary.indexOf(link.text, cursor);
    if (nextIndex < 0) return;

    if (nextIndex > cursor) {
      pieces.push(entry.summary.slice(cursor, nextIndex));
    }

    pieces.push(
      <Link
        key={`${link.lensKey}-${linkIndex}`}
        to={`/lens/${link.lensKey}`}
        style={{
          color: theme.descLinkColor,
          textDecoration: "none",
          borderBottom: `1px solid ${theme.descLinkColor}55`,
        }}
      >
        {link.text}
      </Link>,
    );
    cursor = nextIndex + link.text.length;
  });

  if (cursor < entry.summary.length) {
    pieces.push(entry.summary.slice(cursor));
  }

  return pieces.length > 0 ? pieces : entry.summary;
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
              <span style={{ fontSize: "0.8rem", color: t.body, lineHeight: 1.4 }}>{renderSummary(entry, t)}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
