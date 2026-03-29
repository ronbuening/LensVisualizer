/**
 * Individual article page — /articles/:slug
 *
 * Renders a standalone article from the ARTICLE_CONTENT registry
 * using react-markdown with theme-aware styling.
 */

import { useEffect, useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useParams, Navigate, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { articleJsonLd, breadcrumbJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { ARTICLE_CONTENT } from "../utils/homepageContent.js";
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
function useMarkdownComponents(t: Theme) {
  return useMemo(
    () => ({
      h1: ({ children }: { children?: ReactNode }) => (
        <h1
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: t.descH1,
            margin: "18px 0 8px",
            fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {children}
        </h1>
      ),
      h2: ({ children }: { children?: ReactNode }) => (
        <h2 style={{ fontSize: 16, fontWeight: 600, color: t.descH2, margin: "16px 0 6px", letterSpacing: "0.04em" }}>
          {children}
        </h2>
      ),
      h3: ({ children }: { children?: ReactNode }) => (
        <h3 style={{ fontSize: 14, fontWeight: 600, color: t.descH2, margin: "12px 0 4px", letterSpacing: "0.04em" }}>
          {children}
        </h3>
      ),
      p: ({ children }: { children?: ReactNode }) => (
        <p style={{ margin: "8px 0", fontSize: 13, color: t.descText, lineHeight: 1.7 }}>{children}</p>
      ),
      strong: ({ children }: { children?: ReactNode }) => (
        <strong style={{ color: t.descH2, fontWeight: 600 }}>{children}</strong>
      ),
      a: ({ href, children }: { href?: string; children?: ReactNode }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: t.descLinkColor, textDecoration: "none", borderBottom: `1px solid ${t.descLinkColor}40` }}
        >
          {children}
        </a>
      ),
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
      li: ({ children }: { children?: ReactNode }) => <li style={{ marginBottom: 4 }}>{children}</li>,
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
    }),
    [t],
  );
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const components = useMarkdownComponents(t);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [slug]);

  if (!slug || !ARTICLE_CONTENT[slug]) {
    return <Navigate to="/articles" replace />;
  }

  const entry = ARTICLE_CONTENT[slug];

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
          breadcrumbJsonLd([
            { name: "Home", url: SITE_URL },
            { name: "Articles", url: `${SITE_URL}/articles` },
            { name: entry.title, url: `${SITE_URL}/articles/${slug}` },
          ]),
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
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>{entry.title}</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <nav style={NAV_STYLE}>
          <Link to="/articles" style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.8rem" }}>
            ← All Articles
          </Link>
        </nav>

        <article style={{ maxWidth: 700, lineHeight: 1.7 }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {entry.markdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
