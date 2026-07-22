/**
 * Authors index page — /authors
 *
 * Lists every named inventor represented by visible patent-derived lens data,
 * linking to the generated patent aggregation page for each author.
 */

import { useMemo, useState } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { AUTHORS } from "../utils/catalog/authorCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { toggleBtn, toggleGroup } from "../utils/style/styles.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";

type AuthorSort = "alphabetical" | "patents";

export default function AuthorsIndexPage() {
  const [sortBy, setSortBy] = useState<AuthorSort>("alphabetical");
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse ${AUTHORS.length} named optical patent authors and open their related patents and interactive lens diagrams.`;
  const sortedAuthors = useMemo(
    () =>
      [...AUTHORS].sort((left, right) =>
        sortBy === "patents"
          ? right.patentCount - left.patentCount || left.name.localeCompare(right.name)
          : left.name.localeCompare(right.name),
      ),
    [sortBy],
  );

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Lens Patent Authors — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/authors`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Lens Patent Authors",
            description: seoDescription,
            url: `${SITE_URL}/authors`,
            route: "/authors",
          }),
          itemListJsonLd({
            name: "Lens Patent Authors",
            url: `${SITE_URL}/authors`,
            items: AUTHORS.map((author) => ({
              name: author.name,
              url: `${SITE_URL}/authors/${author.slug}`,
            })),
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
        <span style={{ color: t.body }}>Authors</span>
      </PageNavBar>

      <main style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 0.5rem" }}>Lens Patent Authors</h1>
        <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
          {AUTHORS.length} named inventors represented in the Surface &amp; Stop catalog. Explore how they connect
          through shared patents in the{" "}
          <Link to="/relationships" style={{ color: t.descLinkColor, textDecoration: "none" }}>
            patent relationship map
          </Link>
          .
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <span style={{ color: t.label, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Sort by
          </span>
          <div role="group" aria-label="Sort authors" style={toggleGroup(t)}>
            {(
              [
                { value: "alphabetical", label: "Alphabetical" },
                { value: "patents", label: "Patent count" },
              ] as const
            ).map((option, index) => {
              const selected = sortBy === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSortBy(option.value)}
                  style={toggleBtn(t, selected, { hasRightBorder: index === 0, padding: "0.45rem 0.7rem" })}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem" }}>
          {sortedAuthors.map((author) => (
            <div
              key={author.slug}
              style={{
                background: t.panelBg,
                border: `1px solid ${t.panelBorder}`,
                borderRadius: 6,
                padding: "0.8rem",
              }}
            >
              <Link
                to={`/authors/${author.slug}`}
                style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}
              >
                {author.name}
              </Link>
              <div style={{ color: t.label, fontSize: "0.7rem", marginTop: "0.3rem" }}>
                {author.patentCount} {author.patentCount === 1 ? "patent" : "patents"} · {author.lensKeys.length}{" "}
                {author.lensKeys.length === 1 ? "lens diagram" : "lens diagrams"}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
