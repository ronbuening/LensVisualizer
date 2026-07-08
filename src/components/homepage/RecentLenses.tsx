/**
 * RecentLenses — section showing recently added lenses.
 *
 * Entries are auto-generated from git history at build time.
 * Name and specs are derived from the catalog automatically.
 * Entries with invalid keys are silently skipped.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { RecentLensEntry } from "../../utils/catalog/lensSummaries.js";
import { LENS_SUMMARIES } from "../../utils/catalog/lensSummaries.js";
import { formatDisplayDate } from "../../utils/content/changelogHelpers.js";

interface RecentLensesProps {
  entries: RecentLensEntry[];
  theme: Theme;
  showUpdatesLink?: boolean;
}

export default function RecentLenses({ entries, theme: t, showUpdatesLink }: RecentLensesProps) {
  const valid = entries.filter((e) => LENS_SUMMARIES[e.key]);
  if (valid.length === 0) return null;

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
        Recently Added
      </h2>
      {valid.map((e) => {
        const lens = LENS_SUMMARIES[e.key];
        return (
          <Link
            key={e.key}
            to={`/lens/${e.key}`}
            style={{
              display: "block",
              padding: "0.75rem 1rem",
              marginBottom: "0.5rem",
              borderRadius: 6,
              border: `1px solid ${t.panelBorder}`,
              background: t.panelBg,
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
          >
            <div style={{ fontSize: "0.875rem", fontWeight: 600, color: t.descLinkColor }}>{lens.name}</div>
            <div style={{ fontSize: "0.7rem", color: t.label, margin: "0.2rem 0" }}>{formatDisplayDate(e.date)}</div>
            {lens.specs && lens.specs.length > 0 && (
              <div style={{ fontSize: "0.75rem", color: t.muted, marginBottom: "0.2rem" }}>
                {lens.specs.slice(0, 3).join(" · ")}
              </div>
            )}
          </Link>
        );
      })}
      {showUpdatesLink && (
        <Link
          to="/updates"
          style={{
            display: "inline-block",
            marginTop: "0.75rem",
            fontSize: "0.8rem",
            color: t.descLinkColor,
            textDecoration: "none",
          }}
        >
          View all updates →
        </Link>
      )}
    </section>
  );
}
