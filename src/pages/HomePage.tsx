/**
 * Home page — landing page for Surface & Stop.
 *
 * Renders the site hero, trust strip, navigation cards, recent articles,
 * and recently added lenses. Preserves legacy ?lens=KEY redirects to /lens/KEY.
 */

import { useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import HeroSection from "../components/homepage/HeroSection.js";
import CatalogSearchBox from "../components/search/CatalogSearchBox.js";
import TrustStrip from "../components/homepage/TrustStrip.js";
import QuickNavCards from "../components/homepage/QuickNavCards.js";
import IndexNavBar from "../components/homepage/IndexNavBar.js";
import ArticleList from "../components/content/ArticleList.js";
import RecentLenses from "../components/homepage/RecentLenses.js";
import HomeFooter from "../components/homepage/HomeFooter.js";
import { SUMMARY_KEYS, RECENT_LENS_KEYS } from "../utils/catalog/lensSummaries.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import { HOMEPAGE_ARTICLES, HOMEPAGE_ARTICLE_LIMIT } from "../utils/content/homepageContent.js";
import { publisherJsonLd, webApplicationJsonLd, websiteJsonLd } from "../utils/seo/structuredData.js";
import useMediaQuery from "../utils/useMediaQuery.js";
import { PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { theme: t, themeMode, highContrast, holiday, toggleTheme, toggleHC } = usePageThemeToggle();
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  /* Redirect legacy ?lens=KEY URLs to /lens/KEY */
  useEffect(() => {
    const lensKey = searchParams.get("lens");
    if (lensKey && SUMMARY_KEYS.includes(lensKey)) {
      void navigate(`/lens/${lensKey}`, { replace: true });
      return;
    }
    /* Redirect legacy ?a=KEY&b=KEY comparison URLs to /compare/KEY/KEY */
    const a = searchParams.get("a");
    const b = searchParams.get("b");
    if (a && b && SUMMARY_KEYS.includes(a) && SUMMARY_KEYS.includes(b)) {
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
  const useDarkBrandAssets = themeMode === "auto" ? prefersDark : themeMode === "dark";
  const activeHoliday = themeMode === "auto" ? holiday : null;
  const heroBrandMark = activeHoliday?.brandMark ?? "/branding/mark-card.svg";

  const displayedArticles = HOMEPAGE_ARTICLES.slice(0, HOMEPAGE_ARTICLE_LIMIT);
  const showMoreLink = HOMEPAGE_ARTICLES.length > HOMEPAGE_ARTICLE_LIMIT;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${SITE_NAME} — Interactive Lens Cross-Section Visualizer`}
        description="Explore real camera lens designs with interactive cross-section diagrams, ray tracing, focus and aperture adjustment, element inspection, and chromatic aberration analysis. Built from optical patent data."
        canonicalURL={`${SITE_URL}/`}
        jsonLd={[websiteJsonLd(), webApplicationJsonLd(), publisherJsonLd()]}
      />

      <PageNavBar
        theme={t}
        themeMode={themeMode}
        highContrast={highContrast}
        onToggleTheme={toggleTheme}
        onToggleHC={toggleHC}
      >
        <Link to="/" style={{ color: t.title, textDecoration: "none", fontWeight: 600 }}>
          Surface & Stop
        </Link>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <HeroSection theme={t} brandMarkSrc={heroBrandMark} useDarkBrandFrame={useDarkBrandAssets} />
        <CatalogSearchBox
          theme={t}
          heading="Find a lens or inventor"
          description="Search by lens name, patent number, or author. Exact matches open directly."
          showSuggestions
        />
        <QuickNavCards theme={t} />
        <IndexNavBar theme={t} />
        <div style={isDesktop ? { display: "flex", gap: "2rem", alignItems: "flex-start" } : {}}>
          <div style={isDesktop ? { flex: "1 1 0", minWidth: 0 } : {}}>
            <ArticleList articles={displayedArticles} theme={t} showMoreLink={showMoreLink} />
          </div>
          <div style={isDesktop ? { flex: "1 1 0", minWidth: 0 } : {}}>
            <RecentLenses entries={RECENT_LENS_KEYS} theme={t} showUpdatesLink />
          </div>
        </div>
        <TrustStrip theme={t} />
        <HomeFooter theme={t} />
      </div>
    </div>
  );
}
