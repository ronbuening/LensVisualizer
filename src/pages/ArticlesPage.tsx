/**
 * Articles archive page — /articles
 *
 * Lists all articles with summary cards, following the same
 * layout pattern as LensIndexPage and MakersIndexPage.
 */

import { useEffect } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import ArticleCard from "../components/homepage/ArticleCard.js";
import SeriesCard from "../components/homepage/SeriesCard.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ARTICLES, ARTICLE_SERIES } from "../utils/homepageContent.js";

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

export default function ArticlesPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `${ARTICLES.length} articles and guides about optical design, lens aberrations, and how camera lenses work.`;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Articles — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/articles`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Articles",
            description: seoDescription,
            url: `${SITE_URL}/articles`,
            route: "/articles",
          }),
          itemListJsonLd({
            name: "Articles",
            url: `${SITE_URL}/articles`,
            items: ARTICLES.map((article) => ({
              name: article.title,
              url: `${SITE_URL}/articles/${article.slug}`,
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
        <span style={{ color: t.body }}>Articles</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          All Articles
        </h1>
        <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "2rem" }}>
          {ARTICLES.length} articles and guides about optical design and lens engineering.
        </p>

        {(() => {
          const seenSeries = new Set<string>();
          return ARTICLES.map((article) => {
            if (article.series) {
              if (seenSeries.has(article.series)) return null;
              seenSeries.add(article.series);
              const series = ARTICLE_SERIES[article.series];
              if (series) return <SeriesCard key={`series:${series.id}`} series={series} theme={t} />;
            }
            return <ArticleCard key={article.slug} article={article} theme={t} />;
          });
        })()}
      </div>
    </div>
  );
}
