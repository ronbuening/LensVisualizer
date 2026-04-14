/**
 * SeriesCard — card representing a multi-article series in the archive.
 *
 * Renders the landing entry's title/summary/date and a nested list of
 * member articles beneath it. Visual shell matches ArticleCard so the two
 * sit alongside each other in listings without style drift.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { SeriesSummary } from "../../utils/homepageContent.js";

interface SeriesCardProps {
  series: SeriesSummary;
  theme: Theme;
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function SeriesCard({ series, theme: t }: SeriesCardProps) {
  const { landing, members } = series;
  const otherMembers = members.filter((m) => m.slug !== landing.slug);

  return (
    <div
      style={{
        padding: "0.875rem 1rem",
        marginBottom: "0.5rem",
        borderRadius: 6,
        border: `1px solid ${t.panelBorder}`,
        background: t.panelBg,
      }}
    >
      <Link to={landing.linkTo} style={{ textDecoration: "none", display: "block" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: t.descLinkColor }}>{landing.title}</span>
          <span
            style={{
              fontSize: "0.6rem",
              padding: "1px 6px",
              borderRadius: 3,
              background: `${t.toggleActiveBg}22`,
              color: t.toggleActiveText,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {members.length}-part series
          </span>
        </div>
        <div style={{ fontSize: "0.7rem", color: t.label, marginBottom: "0.3rem" }}>{formatDate(landing.date)}</div>
        <div style={{ fontSize: "0.8rem", color: t.muted, lineHeight: 1.5 }}>{landing.summary}</div>
      </Link>

      {otherMembers.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0.75rem 0 0",
            borderTop: `1px solid ${t.panelBorder}`,
            paddingTop: "0.6rem",
          }}
        >
          {otherMembers.map((m) => (
            <li key={m.slug} style={{ margin: "0.2rem 0" }}>
              <Link
                to={m.linkTo}
                style={{
                  fontSize: "0.75rem",
                  color: t.descLinkColor,
                  textDecoration: "none",
                  display: "flex",
                  gap: "0.4rem",
                }}
              >
                <span style={{ color: t.label, minWidth: "1.4rem" }}>{m.seriesOrder ?? ""}</span>
                <span>{m.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
