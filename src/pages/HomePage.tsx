/**
 * Home page — landing page for Optical Bench.
 *
 * Renders the site hero, navigation cards, recent articles, and lens
 * announcements. Preserves legacy ?lens=KEY redirects to /lens/KEY.
 */

import { useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import HeroSection from "../components/homepage/HeroSection.js";
import QuickNavCards from "../components/homepage/QuickNavCards.js";
import ArticleList from "../components/homepage/ArticleList.js";
import RecentLenses from "../components/homepage/RecentLenses.js";
import ChangelogBox from "../components/homepage/ChangelogBox.js";
import HomeFooter from "../components/homepage/HomeFooter.js";
import { CATALOG_KEYS, RECENT_LENS_KEYS } from "../utils/lensCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ARTICLES, HOMEPAGE_ARTICLE_LIMIT } from "../utils/homepageContent.js";
import { publisherJsonLd, websiteJsonLd } from "../utils/structuredData.js";
import useMediaQuery from "../utils/useMediaQuery.js";

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  /* Redirect legacy ?lens=KEY URLs to /lens/KEY */
  useEffect(() => {
    const lensKey = searchParams.get("lens");
    if (lensKey && CATALOG_KEYS.includes(lensKey)) {
      void navigate(`/lens/${lensKey}`, { replace: true });
      return;
    }
    /* Redirect legacy ?a=KEY&b=KEY comparison URLs to /compare/KEY/KEY */
    const a = searchParams.get("a");
    const b = searchParams.get("b");
    if (a && b && CATALOG_KEYS.includes(a) && CATALOG_KEYS.includes(b)) {
      const params = new URLSearchParams();
      for (const key of ["focus", "aperture", "zoom"]) {
        const val = searchParams.get(key);
        if (val) params.set(key, val);
      }
      const search = params.toString() ? `?${params.toString()}` : "";
      void navigate(`/compare/${a}/${b}${search}`, { replace: true });
    }
  }, [searchParams, navigate]);

  const isDesktop = useMediaQuery("(min-width: 720px)");

  const displayedArticles = ARTICLES.slice(0, HOMEPAGE_ARTICLE_LIMIT);
  const showMoreLink = ARTICLES.length > HOMEPAGE_ARTICLE_LIMIT;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${SITE_NAME} — Interactive Lens Cross-Section Visualizer`}
        description="Explore real camera lens designs with interactive cross-section diagrams, ray tracing, focus and aperture adjustment, element inspection, and chromatic aberration analysis. Built from optical patent data."
        canonicalURL={`${SITE_URL}/`}
        jsonLd={[websiteJsonLd(), publisherJsonLd()]}
      />

      <PageNavBar
        theme={t}
        themeMode={themeMode}
        highContrast={highContrast}
        onToggleTheme={toggleTheme}
        onToggleHC={toggleHC}
      >
        <Link to="/" style={{ color: t.title, textDecoration: "none", fontWeight: 600 }}>
          Optical Bench
        </Link>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <HeroSection theme={t} />
        <QuickNavCards theme={t} />
        <div style={isDesktop ? { display: "flex", gap: "2rem", alignItems: "flex-start" } : {}}>
          {/* Right column on desktop — RecentLenses + ChangelogBox stacked vertically.
              On mobile this div has no styles, so its children stack in normal flow. */}
          <div style={isDesktop ? { flex: "1 1 0", minWidth: 0, order: 1 } : {}}>
            <RecentLenses entries={RECENT_LENS_KEYS} theme={t} />
            {/* Desktop copy: shown only on desktop so it sits under RecentLenses in the right column. */}
            <div style={{ display: isDesktop ? "block" : "none" }}>
              <ChangelogBox theme={t} />
            </div>
          </div>
          <div style={isDesktop ? { flex: "1 1 0", minWidth: 0, order: 0 } : {}}>
            <ArticleList articles={displayedArticles} theme={t} showMoreLink={showMoreLink} />
          </div>
        </div>
        {/* Mobile copy: shown only on mobile so it appears below ArticleList, before the footer. */}
        <div style={{ display: isDesktop ? "none" : "block" }}>
          <ChangelogBox theme={t} />
        </div>
        <HomeFooter theme={t} />
      </div>
    </div>
  );
}
