/**
 * RecentLenses — section showing recently added lens announcements.
 *
 * Each announcement references a lens catalog key; name and specs
 * are derived from the catalog automatically. Entries with invalid
 * keys are silently skipped.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { LensAnnouncement } from "../../utils/homepageContent.js";
import { LENS_CATALOG } from "../../utils/lensCatalog.js";

interface RecentLensesProps {
  announcements: LensAnnouncement[];
  theme: Theme;
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function RecentLenses({ announcements, theme: t }: RecentLensesProps) {
  const valid = announcements.filter((a) => LENS_CATALOG[a.lensKey]);
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
      {valid.map((a) => {
        const lens = LENS_CATALOG[a.lensKey];
        return (
          <Link
            key={a.lensKey}
            to={`/lens/${a.lensKey}`}
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
            <div style={{ fontSize: "0.7rem", color: t.label, margin: "0.2rem 0" }}>{formatDate(a.date)}</div>
            {lens.specs && lens.specs.length > 0 && (
              <div style={{ fontSize: "0.75rem", color: t.muted, marginBottom: "0.2rem" }}>
                {lens.specs.slice(0, 3).join(" · ")}
              </div>
            )}
            <div style={{ fontSize: "0.8rem", color: t.muted, lineHeight: 1.5 }}>{a.blurb}</div>
          </Link>
        );
      })}
    </section>
  );
}
