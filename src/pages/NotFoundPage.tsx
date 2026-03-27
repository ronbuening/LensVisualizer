/**
 * 404 page — catch-all for unmatched routes.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { SITE_NAME } from "../utils/lensMetadata.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";

export default function NotFoundPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead title={`Page Not Found — ${SITE_NAME}`} description="Page not found." robots="noindex,follow" />

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
      </PageNavBar>

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "4rem 1.5rem",
          fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ marginBottom: "2rem", color: t.muted }}>Page not found.</p>
        <Link to="/" style={{ color: t.descLinkColor }}>
          Go to Optical Bench
        </Link>
        <span style={{ margin: "0 1rem", color: t.label }}>|</span>
        <Link to="/lenses" style={{ color: t.descLinkColor }}>
          Browse all lenses
        </Link>
      </div>
    </div>
  );
}
