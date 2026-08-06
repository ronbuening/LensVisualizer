/**
 * Search page — /search
 *
 * Provides the full lightweight catalog search across lens names, patent
 * numbers, and authors. Result links always lead to the final lens or author
 * destination rather than adding an intermediate detail route.
 */

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import CatalogSearchBox from "../components/search/CatalogSearchBox.js";
import CatalogSearchResults from "../components/search/CatalogSearchResults.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(urlQuery);
  const seoDescription = "Search Surface & Stop by camera lens name, optical patent number, or named inventor.";

  useEffect(() => setQuery(urlQuery), [urlQuery]);

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Search" }]}
      seo={
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
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Search the Catalog</h1>
          <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1rem" }}>
            Find an interactive lens diagram by name or patent number, or open an author’s related patent list.
          </p>
          <CatalogSearchBox theme={t} query={query} onQueryChange={setQuery} />
          <CatalogSearchResults query={query} theme={t} />
        </>
      )}
    </StaticPageShell>
  );
}
