/**
 * UpdatesView — the body shared by the /updates hub and the /updates/YYYY-MM/ archive pages: the monthly archive
 * navigation, the Changelog and Lenses Added columns for the page's months, and the footer links.
 *
 * It also keeps old changelog links working: `/updates/#changelog-…` anchors (RSS items, shared links) whose entry
 * is not on this page are replaced by the same anchor on the entry's archive page, where RouteLayout scrolls to it.
 */

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import type { Theme } from "../../types/theme.js";
import ChangelogList from "./ChangelogList.js";
import { LENS_SUMMARIES } from "../../utils/catalog/lensSummaries.js";
import { formatDisplayDate } from "../../utils/content/changelogHelpers.js";
import { CHANGELOG_FEED_PATH, LENS_FEED_PATH } from "../../utils/content/feedMetadata.js";
import { formatUpdateMonth } from "../../utils/content/updateMonths.js";
import {
  UPDATE_MONTHS,
  archivedMonthForFragment,
  changelogForMonths,
  lensesForMonths,
} from "../../utils/content/updatesArchive.js";
import { canonicalPagePath, hashFragmentId } from "../../utils/seo/siteUrls.js";
import { pluralize, textRun } from "../../utils/text.js";

/* One viewport-relative height for both scroll panes at every width — vh already
   scales with the shorter phone viewports the old 60vh narrow case served. */
const SCROLL_PANE_MAX_HEIGHT = "72vh";

interface UpdatesViewProps {
  theme: Theme;
  /** The months this page lists, newest first. Must be referentially stable across renders. */
  months: readonly string[];
  /** The archive month this page is, marked as the current page in the month navigation. */
  currentMonth?: string;
}

export default function UpdatesView({ theme: t, months, currentMonth }: UpdatesViewProps) {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;
    const month = archivedMonthForFragment(hashFragmentId(hash), months);
    if (month) void navigate({ pathname: canonicalPagePath(`/updates/${month}`), hash }, { replace: true });
  }, [hash, months, navigate]);

  const entries = changelogForMonths(months);
  const lenses = lensesForMonths(months);

  const sectionHeadingStyle = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: t.body,
    marginBottom: "1rem",
    paddingBottom: "0.25rem",
    borderBottom: `1px solid ${t.panelBorder}`,
  };
  const feedLinkStyle = {
    display: "inline-block",
    color: t.descLinkColor,
    textDecoration: "none",
    fontSize: "0.8rem",
    marginBottom: "0.75rem",
  };
  const emptyStyle = { fontSize: "0.8rem", color: t.muted };

  return (
    <>
      <MonthNav theme={t} currentMonth={currentMonth} />

      {/* ── Two-column layout (changelog left on mobile / lenses right):
             flex-wrap with a 340px basis replaces the old JS breakpoint,
             so the prerendered layout is already correct at every viewport ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "flex-start",
          marginBottom: "2.5rem",
        }}
      >
        {/* ── Changelog ─────────────────────────────────────────────── */}
        <section style={{ flex: "1 1 340px", minWidth: 0 }}>
          <h2 style={sectionHeadingStyle}>Changelog</h2>
          <a href={CHANGELOG_FEED_PATH} type="application/rss+xml" style={feedLinkStyle}>
            Subscribe to Changelog
          </a>
          {entries.length > 0 ? (
            <ChangelogList theme={t} entries={entries} maxHeight={SCROLL_PANE_MAX_HEIGHT} />
          ) : (
            <p style={emptyStyle}>No changelog entries this month.</p>
          )}
        </section>

        {/* ── Lenses Added ──────────────────────────────────────────── */}
        <section style={{ flex: "1 1 340px", minWidth: 0 }}>
          <h2 style={sectionHeadingStyle}>Lenses Added</h2>
          <a href={LENS_FEED_PATH} type="application/rss+xml" style={feedLinkStyle}>
            Subscribe to New Lenses
          </a>
          {lenses.length === 0 && <p style={emptyStyle}>No lenses were added this month.</p>}
          <div style={{ maxHeight: SCROLL_PANE_MAX_HEIGHT, overflowY: "auto", paddingRight: "0.25rem" }}>
            {lenses.map((e) => {
              const lens = LENS_SUMMARIES[e.key];
              if (!lens) return null;
              return (
                <Link
                  key={e.key}
                  to={`/lens/${e.key}/`}
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
                  <div style={{ fontSize: "0.7rem", color: t.label, margin: "0.2rem 0" }}>
                    {formatDisplayDate(e.date)}
                  </div>
                  {lens.specs && lens.specs.length > 0 && (
                    <div style={{ fontSize: "0.75rem", color: t.muted, marginBottom: "0.2rem" }}>
                      {lens.specs.slice(0, 3).join(" · ")}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${t.panelBorder}`,
          paddingTop: "1.5rem",
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/lenses/", label: "Lens Library" },
          { to: "/makers/", label: "Makers" },
          { to: "/articles/", label: "Articles" },
        ].map(({ to, label }) => (
          <Link key={to} to={to} style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.75rem" }}>
            {label}
          </Link>
        ))}
      </footer>
    </>
  );
}

/** Every archive month, newest first, as a wrapping row of links; the page's own month is marked, not linked. */
function MonthNav({ theme: t, currentMonth }: { theme: Theme; currentMonth?: string }) {
  return (
    <nav aria-label="Monthly archive" style={{ marginBottom: "1.75rem" }}>
      <h2
        style={{
          fontSize: "0.7rem",
          color: t.label,
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        Monthly archive
      </h2>
      <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: 0, margin: 0 }}>
        {UPDATE_MONTHS.map(({ month, changelogCount, lensCount }) => {
          const isCurrent = month === currentMonth;
          const boxStyle = {
            display: "block",
            padding: "0.35rem 0.65rem",
            borderRadius: 6,
            border: `1px solid ${isCurrent ? t.descLinkColor : t.panelBorder}`,
            background: t.panelBg,
            textDecoration: "none",
          };
          const content = (
            <>
              <span
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: isCurrent ? t.body : t.descLinkColor,
                }}
              >
                {formatUpdateMonth(month)}
              </span>
              <span style={{ display: "block", fontSize: "0.65rem", color: t.label }}>
                {textRun(
                  changelogCount,
                  " ",
                  pluralize(changelogCount, "update"),
                  " · ",
                  lensCount,
                  " ",
                  pluralize(lensCount, "lens"),
                )}
              </span>
            </>
          );
          return (
            <li key={month}>
              {isCurrent ? (
                <span aria-current="page" style={boxStyle}>
                  {content}
                </span>
              ) : (
                <Link to={canonicalPagePath(`/updates/${month}`)} style={boxStyle}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
