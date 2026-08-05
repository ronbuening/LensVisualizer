import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import useMediaQuery from "../utils/useMediaQuery.js";
import SEOHead from "../components/SEOHead.js";
import ChangelogList from "../components/content/ChangelogList.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { ALL_LENSES_BY_DATE, LENS_SUMMARIES } from "../utils/catalog/lensSummaries.js";
import { formatDisplayDate } from "../utils/content/changelogHelpers.js";
import { CHANGELOG_FEED_PATH, LENS_FEED_PATH } from "../utils/content/feedMetadata.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";

export default function UpdatesPage() {
  const isWide = useMediaQuery("(min-width: 720px)");
  const { hash } = useLocation();

  // RSS feed items deep-link to /updates#<changelogEntryId>. The browser's
  // native anchor scroll fires before React commits the page, so the target
  // is located after commit instead; without a hash the page keeps its
  // original scroll-to-top behavior.
  useEffect(() => {
    let fragment = hash.startsWith("#") ? hash.slice(1) : hash;
    if (fragment) {
      try {
        fragment = decodeURIComponent(fragment);
      } catch {
        // Malformed percent-encoding: fall back to the raw fragment.
      }
    }
    if (!fragment) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(fragment)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  const seoDescription =
    "Full update history for Surface & Stop — recently added lenses and a complete changelog of features, fixes, and improvements.";

  return (
    <StaticPageShell breadcrumbs={[{ label: "Home", to: "/" }, { label: "Updates" }]}>
      {({ theme: t }) => (
        <>
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

          <h1 style={H1_STYLE}>Updates</h1>
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
              <a
                href={CHANGELOG_FEED_PATH}
                type="application/rss+xml"
                style={{
                  display: "inline-block",
                  color: t.descLinkColor,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  marginBottom: "0.75rem",
                }}
              >
                Subscribe to Changelog
              </a>
              <ChangelogList theme={t} maxHeight={isWide ? "72vh" : "60vh"} />
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
              <a
                href={LENS_FEED_PATH}
                type="application/rss+xml"
                style={{
                  display: "inline-block",
                  color: t.descLinkColor,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  marginBottom: "0.75rem",
                }}
              >
                Subscribe to New Lenses
              </a>
              <div style={{ maxHeight: isWide ? "72vh" : "60vh", overflowY: "auto", paddingRight: "0.25rem" }}>
                {ALL_LENSES_BY_DATE.map((e) => {
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
      )}
    </StaticPageShell>
  );
}
