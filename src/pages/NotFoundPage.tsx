/**
 * 404 page — catch-all for unmatched routes.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { usePageTheme } from "../utils/usePageTheme.js";

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "4rem 1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
  textAlign: "center",
} satisfies React.CSSProperties;

export default function NotFoundPage() {
  const t = usePageTheme();
  return (
    <div style={{ ...PAGE_BASE_STYLE, backgroundColor: t.bg, color: t.body }}>
      <SEOHead title={`Page Not Found — ${SITE_NAME}`} description="Page not found." canonicalURL={SITE_URL} />
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
  );
}
