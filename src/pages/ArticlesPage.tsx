/**
 * Articles archive page — /articles
 *
 * Lists all articles with summary cards, following the same
 * layout pattern as LensIndexPage and MakersIndexPage.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import ArticleCard from "../components/homepage/ArticleCard.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ARTICLES } from "../utils/homepageContent.js";

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

export default function ArticlesPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Articles — ${SITE_NAME}`}
        description={`${ARTICLES.length} articles and guides about optical design, lens aberrations, and how camera lenses work.`}
        canonicalURL={`${SITE_URL}/articles`}
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

        {ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} theme={t} />
        ))}
      </div>
    </div>
  );
}
