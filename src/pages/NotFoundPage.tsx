/**
 * 404 page — catch-all for unmatched routes.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME } from "../utils/catalog/lensMetadata.js";

export default function NotFoundPage() {
  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }]}
      seo={<SEOHead title={`Page Not Found — ${SITE_NAME}`} description="Page not found." robots="noindex,follow" />}
    >
      {({ theme: t }) => (
        <div style={{ padding: "4rem 0", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>404</h1>
          <p style={{ marginBottom: "2rem", color: t.muted }}>Page not found.</p>
          <Link to="/" style={{ color: t.descLinkColor }}>
            Go to Surface & Stop
          </Link>
          <span style={{ margin: "0 1rem", color: t.label }}>|</span>
          <Link to="/lenses/" style={{ color: t.descLinkColor }}>
            Browse all lenses
          </Link>
        </div>
      )}
    </StaticPageShell>
  );
}
