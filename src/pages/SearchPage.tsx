/**
 * Search page — /search
 *
 * Provides the full lightweight catalog search across lens names, patent
 * numbers, and authors. Result links always lead to the final lens or author
 * destination rather than adding an intermediate detail route.
 */

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import CatalogSearchBox from "../components/search/CatalogSearchBox.js";
import CatalogSearchResults from "../components/search/CatalogSearchResults.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(urlQuery);
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = "Search Surface & Stop by camera lens name, optical patent number, or named inventor.";

  useEffect(() => setQuery(urlQuery), [urlQuery]);

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Search Lens Patents and Authors | ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/search`}
        jsonLd={collectionPageJsonLd({
          name: "Lens Patent Search",
          description: seoDescription,
          url: `${SITE_URL}/search`,
          route: "/search",
        })}
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
        <span style={{ color: t.body }}>Search</span>
      </PageNavBar>

      <main style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 0.5rem" }}>Search the Catalog</h1>
        <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1rem" }}>
          Find an interactive lens diagram by name or patent number, or open an author’s related patent list.
        </p>
        <CatalogSearchBox theme={t} query={query} onQueryChange={setQuery} />
        <CatalogSearchResults query={query} theme={t} />
      </main>
    </div>
  );
}
