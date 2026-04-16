import { useEffect } from "react";
import { Link } from "react-router";
import useMediaQuery from "../utils/useMediaQuery.js";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { collectionPageJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ALL_LENSES_BY_DATE, LENS_CATALOG } from "../utils/lensCatalog.js";
import { CHANGELOG } from "../utils/changelogData.js";
import type { ChangelogEntry, ChangelogEntryType } from "../utils/changelogData.js";

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

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

export default function UpdatesPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const isWide = useMediaQuery("(min-width: 720px)");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const grouped = new Map<string, ChangelogEntry[]>();
  for (const entry of CHANGELOG) {
    const bucket = grouped.get(entry.date) ?? [];
    bucket.push(entry);
    grouped.set(entry.date, bucket);
  }

  const seoDescription =
    "Full update history for Optical Bench — recently added lenses and a complete changelog of features, fixes, and improvements.";

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Updates — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/updates`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Updates",
            description: seoDescription,
            url: `${SITE_URL}/updates`,
            route: "/updates",
          }),
        ]}
      />

      <PageNavBar
        theme={t}
        themeMode={themeMode}
        highContrast={highContrast}
        onToggleTheme={toggleTheme}
        onToggleHC={toggleHC}
      >
        <Link to="/" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>Updates</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Updates</h1>
        <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "2rem" }}>
          Recently added lenses and a complete development changelog.
        </p>

        {/* ── Two-column layout (changelog left on mobile / lenses right) ── */}
        <div
          style={{
            display: "flex",
            flexDirection: isWide ? "row" : "column",
            gap: isWide ? "1.5rem" : "1.25rem",
            alignItems: "flex-start",
            marginBottom: "2.5rem",
          }}
        >
          {/* ── Changelog ─────────────────────────────────────────────── */}
          <section style={{ flex: isWide ? "1 1 0" : undefined, minWidth: 0, width: isWide ? undefined : "100%" }}>
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
            <div style={{ maxHeight: isWide ? "72vh" : "60vh", overflowY: "auto", paddingRight: "0.25rem" }}>
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
                      <span style={{ fontSize: "0.8rem", color: t.body, lineHeight: 1.4 }}>{entry.summary}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* ── Lenses Added ──────────────────────────────────────────── */}
          <section style={{ flex: isWide ? "1 1 0" : undefined, minWidth: 0, width: isWide ? undefined : "100%" }}>
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
              Lenses Added
            </h2>
            <div style={{ maxHeight: isWide ? "72vh" : "60vh", overflowY: "auto", paddingRight: "0.25rem" }}>
              {ALL_LENSES_BY_DATE.map((e) => {
                const lens = LENS_CATALOG[e.key];
                if (!lens) return null;
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
                    <div style={{ fontSize: "0.7rem", color: t.label, margin: "0.2rem 0" }}>{formatDate(e.date)}</div>
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
            { to: "/lenses", label: "Lens Library" },
            { to: "/makers", label: "Makers" },
            { to: "/articles", label: "Articles" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.75rem" }}>
              {label}
            </Link>
          ))}
        </footer>
      </div>
    </div>
  );
}
