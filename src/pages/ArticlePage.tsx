/**
 * Individual article page — /articles/:slug
 *
 * Renders a standalone article from the ARTICLE_CONTENT registry
 * using react-markdown with theme-aware styling.
 */

import { useEffect } from "react";
import type { CSSProperties } from "react";
import { useParams, Navigate, Link, useLocation } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import ArticleTOC from "../components/display/ArticleTOC.js";
import ThemedMarkdown from "../components/markdown/ThemedMarkdown.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { PAGE_BASE_STYLE } from "../utils/pageStyles.js";
import { articleJsonLd, breadcrumbJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ARTICLE_CONTENT, ARTICLE_SERIES } from "../utils/homepageContent.js";

const NAV_STYLE: CSSProperties = { marginTop: "1.5rem", marginBottom: "1.5rem", fontSize: "0.8rem" };

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { state: locationState } = useLocation();
  const fromStartHere = (locationState as { fromStartHere?: boolean } | null)?.fromStartHere === true;
  const { theme: t, themeMode, dark, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [slug]);

  if (!slug || !ARTICLE_CONTENT[slug]) {
    return <Navigate to="/articles" replace />;
  }

  const entry = ARTICLE_CONTENT[slug];
  // If this article belongs to a series *and* is not the landing page itself,
  // surface the series landing page in the breadcrumb + back-link so series
  // members form a coherent mini-site rather than feeling orphaned.
  const series = entry.series ? ARTICLE_SERIES[entry.series] : undefined;
  const seriesLanding = series && series.landing.slug !== slug ? series.landing : undefined;

  // When the user arrived from the start-here guide (and this isn't a series
  // member — series context takes precedence), thread back through it.
  const startHereRef =
    !seriesLanding && fromStartHere ? { path: "/articles/start-here", label: "Getting Started" } : null;

  const backPath = seriesLanding ? seriesLanding.linkTo : startHereRef ? startHereRef.path : "/articles";
  const backLabel = seriesLanding ? seriesLanding.title : startHereRef ? startHereRef.label : "All Articles";

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Articles", url: `${SITE_URL}/articles` },
    ...(seriesLanding ? [{ name: seriesLanding.title, url: `${SITE_URL}${seriesLanding.linkTo}` }] : []),
    ...(startHereRef ? [{ name: startHereRef.label, url: `${SITE_URL}${startHereRef.path}` }] : []),
    { name: entry.title, url: `${SITE_URL}/articles/${slug}` },
  ];

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${entry.title} — ${SITE_NAME}`}
        description={entry.description}
        canonicalURL={`${SITE_URL}/articles/${slug}`}
        ogType="article"
        jsonLd={[
          articleJsonLd({
            title: entry.title,
            description: entry.description,
            slug,
          }),
          breadcrumbJsonLd(breadcrumbs),
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
        <Link to="/articles" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Articles
        </Link>
        {seriesLanding && (
          <>
            <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
            <Link to={seriesLanding.linkTo} style={{ color: t.descLinkColor, textDecoration: "none" }}>
              {seriesLanding.title}
            </Link>
          </>
        )}
        {startHereRef && (
          <>
            <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
            <Link to={startHereRef.path} style={{ color: t.descLinkColor, textDecoration: "none" }}>
              {startHereRef.label}
            </Link>
          </>
        )}
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>{entry.title}</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <nav style={NAV_STYLE}>
          <Link to={backPath} style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.8rem" }}>
            ← {backLabel}
          </Link>
        </nav>

        <article style={{ maxWidth: 700, lineHeight: 1.7 }}>
          <ThemedMarkdown
            markdown={entry.markdown}
            theme={t}
            variant="article"
            isStartHere={slug === "start-here"}
            isDark={dark}
          />
        </article>
      </div>

      {entry.toc && <ArticleTOC markdown={entry.markdown} theme={t} />}
    </div>
  );
}
