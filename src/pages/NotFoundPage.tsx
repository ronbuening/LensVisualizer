/**
 * 404 page — catch-all for unmatched routes.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";

const PAGE_STYLE: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "4rem 1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  color: "#e0e0e0",
  backgroundColor: "#1a1a2e",
  minHeight: "100vh",
  textAlign: "center",
};

export default function NotFoundPage() {
  return (
    <div style={PAGE_STYLE}>
      <SEOHead title={`Page Not Found — ${SITE_NAME}`} description="Page not found." canonicalURL={SITE_URL} />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ marginBottom: "2rem", color: "#999" }}>Page not found.</p>
      <Link to="/" style={{ color: "#7ec8e3" }}>
        Go to Optical Bench
      </Link>
      <span style={{ margin: "0 1rem", color: "#555" }}>|</span>
      <Link to="/lenses" style={{ color: "#7ec8e3" }}>
        Browse all lenses
      </Link>
    </div>
  );
}
