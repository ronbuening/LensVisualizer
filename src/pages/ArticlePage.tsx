/**
 * Individual article page — /articles/:slug
 *
 * Renders a standalone article from the ARTICLE_CONTENT registry
 * using react-markdown with theme-aware styling.
 */

import { useEffect, useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useParams, Navigate, Link, useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import ArticleTOC from "../components/display/ArticleTOC.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { articleJsonLd, breadcrumbJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ARTICLE_CONTENT, ARTICLE_SERIES } from "../utils/homepageContent.js";
import type { Theme } from "../types/theme.js";

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 1.5rem 2rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

const NAV_STYLE: CSSProperties = { marginTop: "1.5rem", marginBottom: "1.5rem", fontSize: "0.8rem" };

/** Theme-aware markdown components — same pattern as DescriptionPanel */
function useMarkdownComponents(t: Theme, isStartHere: boolean) {
  return useMemo(
    () => ({
      h1: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <h1
          id={id}
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: t.descH1,
            margin: "18px 0 8px",
            fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
            letterSpacing: "0.02em",
            scrollMarginTop: 88,
          }}
        >
          {children}
        </h1>
      ),
      h2: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <h2
          id={id}
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: t.descH2,
            margin: "16px 0 6px",
            letterSpacing: "0.04em",
            scrollMarginTop: 88,
          }}
        >
          {children}
        </h2>
      ),
      h3: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <h3
          id={id}
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: t.descH2,
            margin: "12px 0 4px",
            letterSpacing: "0.04em",
            scrollMarginTop: 88,
          }}
        >
          {children}
        </h3>
      ),
      p: ({ children }: { children?: ReactNode }) => (
        <p style={{ margin: "8px 0", fontSize: 13, color: t.descText, lineHeight: 1.7 }}>{children}</p>
      ),
      strong: ({ children }: { children?: ReactNode }) => (
        <strong style={{ color: t.descH2, fontWeight: 600 }}>{children}</strong>
      ),
      a: ({ href, id, children }: { href?: string; id?: string; children?: ReactNode }) => {
        const linkStyle: CSSProperties = {
          color: t.descLinkColor,
          textDecoration: "none",
          borderBottom: `1px solid ${t.descLinkColor}40`,
        };
        // Lens pages deserve a new tab — opening the interactive viewer shouldn't
        // lose the reader's place in the article.
        if (href && href.startsWith("/lens/")) {
          return (
            <a id={id} href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {children}
            </a>
          );
        }
        // Other internal paths: SPA navigation in the same tab.
        if (href && href.startsWith("/")) {
          const state = isStartHere && href.startsWith("/articles/") ? { fromStartHere: true } : undefined;
          return (
            <Link id={id} to={href} state={state} style={linkStyle}>
              {children}
            </Link>
          );
        }
        // Anchor links (#...) — GFM footnote refs and back-refs land here; the
        // id lets back-references from the footnote body find the caller.
        if (href && href.startsWith("#")) {
          return (
            <a id={id} href={href} style={{ ...linkStyle, scrollMarginTop: 88 }}>
              {children}
            </a>
          );
        }
        // External URLs — same tab (per project convention), but still safe.
        return (
          <a id={id} href={href} rel="noopener noreferrer" style={linkStyle}>
            {children}
          </a>
        );
      },
      code: ({ className, children }: { className?: string; children?: ReactNode }) => {
        const isBlock = className?.startsWith("language-");
        if (isBlock) return <code style={{ fontSize: 12 }}>{children}</code>;
        return (
          <code
            style={{
              background: t.descCodeBg,
              padding: "1px 5px",
              borderRadius: 3,
              fontSize: 12,
              color: t.descLinkColor,
            }}
          >
            {children}
          </code>
        );
      },
      pre: ({ children }: { children?: ReactNode }) => (
        <pre
          style={{
            background: t.descCodeBg,
            padding: 14,
            borderRadius: 6,
            overflow: "auto",
            margin: "12px 0",
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          {children}
        </pre>
      ),
      ul: ({ children }: { children?: ReactNode }) => (
        <ul style={{ paddingLeft: 22, margin: "8px 0", fontSize: 13, color: t.descText, lineHeight: 1.7 }}>
          {children}
        </ul>
      ),
      ol: ({ children }: { children?: ReactNode }) => (
        <ol style={{ paddingLeft: 22, margin: "8px 0", fontSize: 13, color: t.descText, lineHeight: 1.7 }}>
          {children}
        </ol>
      ),
      li: ({ children, id }: { children?: ReactNode; id?: string }) => (
        <li id={id} style={{ marginBottom: 4, scrollMarginTop: 88 }}>
          {children}
        </li>
      ),
      blockquote: ({ children }: { children?: ReactNode }) => (
        <blockquote
          style={{ borderLeft: `3px solid ${t.descLinkColor}`, paddingLeft: 16, margin: "12px 0", color: t.muted }}
        >
          {children}
        </blockquote>
      ),
      table: ({ children }: { children?: ReactNode }) => (
        <div style={{ overflowX: "auto", margin: "12px 0" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>{children}</table>
        </div>
      ),
      thead: ({ children }: { children?: ReactNode }) => (
        <thead style={{ background: t.descTableHeaderBg }}>{children}</thead>
      ),
      th: ({ children }: { children?: ReactNode }) => (
        <th
          style={{
            border: `1px solid ${t.descTableBorder}`,
            padding: "6px 10px",
            textAlign: "left",
            color: t.descH2,
            fontWeight: 600,
            fontSize: 11.5,
          }}
        >
          {children}
        </th>
      ),
      td: ({ children }: { children?: ReactNode }) => (
        <td
          style={{ border: `1px solid ${t.descTableBorder}`, padding: "5px 10px", color: t.descText, fontSize: 11.5 }}
        >
          {children}
        </td>
      ),
      hr: () => <hr style={{ border: "none", borderTop: `1px solid ${t.descBorder}`, margin: "18px 0" }} />,
      img: ({ src, alt }: { src?: string; alt?: string }) => (
        <figure style={{ margin: "24px 0", textAlign: "center" }}>
          <img
            src={src}
            alt={alt ?? ""}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: 6,
              border: `1px solid ${t.descTableBorder}`,
            }}
          />
          {alt && (
            <figcaption style={{ marginTop: 6, fontSize: 11, color: t.muted, fontStyle: "italic" }}>{alt}</figcaption>
          )}
        </figure>
      ),
    }),
    [t, isStartHere],
  );
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { state: locationState } = useLocation();
  const fromStartHere = (locationState as { fromStartHere?: boolean } | null)?.fromStartHere === true;
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const components = useMarkdownComponents(t, slug === "start-here");

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
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeSlug, rehypeKatex]}
            components={components}
          >
            {entry.markdown}
          </ReactMarkdown>
        </article>
      </div>

      {entry.toc && <ArticleTOC markdown={entry.markdown} theme={t} />}
    </div>
  );
}
