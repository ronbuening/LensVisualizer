/**
 * Articles archive page — /articles
 *
 * Lists all articles with summary cards, following the same
 * layout pattern as LensIndexPage and MakersIndexPage.
 */

import { useEffect } from "react";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import ArticleCard from "../components/content/ArticleCard.js";
import SeriesCard from "../components/content/SeriesCard.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { ARTICLES, ARTICLE_SERIES } from "../utils/content/homepageContent.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { ARTICLE_FEED_PATH } from "../utils/content/feedMetadata.js";

export default function ArticlesPage() {
  const seoDescription = `${ARTICLES.length} articles and guides about optical design, lens aberrations, and how camera lenses work.`;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Articles" }]}
      seo={
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
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>All Articles</h1>
          <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "2rem" }}>
            {ARTICLES.length} articles and guides about optical design and lens engineering.{" "}
            <a
              href={ARTICLE_FEED_PATH}
              type="application/rss+xml"
              style={{ color: t.descLinkColor, textDecoration: "none" }}
            >
              Subscribe to New Articles
            </a>
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
        </>
      )}
    </StaticPageShell>
  );
}
