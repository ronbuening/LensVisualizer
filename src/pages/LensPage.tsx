/**
 * Individual lens page — /lens/:slug
 *
 * Renders SEO-friendly text content (specs, description, element list)
 * plus the interactive visualizer (client-only).
 */

import { useParams, Navigate, Link } from "react-router";
import LensVisualization from "../components/layout/LensViewer.js";
import SEOHead from "../components/SEOHead.js";
import ClientOnly from "../components/ClientOnly.js";
import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from "../utils/lensCatalog.js";
import {
  lensPageTitle,
  lensPageDescription,
  lensCanonicalURL,
  lensJsonLd,
  deriveMaker,
} from "../utils/lensMetadata.js";

const CONTENT_STYLE: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  color: "#e0e0e0",
};

const NAV_STYLE: React.CSSProperties = { marginBottom: "1rem", fontSize: "0.8rem" };
const NAV_LINK_STYLE: React.CSSProperties = { color: "#7ec8e3", textDecoration: "none" };

const SPEC_TABLE_STYLE: React.CSSProperties = {
  borderCollapse: "collapse",
  fontSize: "0.8rem",
  marginBottom: "1rem",
};

const TD_STYLE: React.CSSProperties = {
  padding: "0.25rem 0.75rem 0.25rem 0",
  borderBottom: "1px solid #333",
  verticalAlign: "top",
};

export default function LensPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !CATALOG_KEYS.includes(slug)) {
    return <Navigate to="/lenses" replace />;
  }

  const lens = LENS_CATALOG[slug];
  const maker = deriveMaker(lens.name);
  const analysis = mdForKey(slug);

  return (
    <>
      <SEOHead
        title={lensPageTitle(lens)}
        description={lensPageDescription(lens)}
        canonicalURL={lensCanonicalURL(slug)}
        ogType="article"
        jsonLd={lensJsonLd(lens, slug)}
      />

      {/* Interactive visualizer — client-only */}
      <ClientOnly>
        <LensVisualization initialLensKey={slug} />
      </ClientOnly>

      {/* SEO text content — renders during SSR for crawlers */}
      <div style={CONTENT_STYLE}>
        <nav style={NAV_STYLE}>
          <Link to="/" style={NAV_LINK_STYLE}>
            Home
          </Link>
          {" / "}
          <Link to="/lenses" style={NAV_LINK_STYLE}>
            Lenses
          </Link>
          {" / "}
          <Link to={`/makers/${maker.slug}`} style={NAV_LINK_STYLE}>
            {maker.display}
          </Link>
          {` / ${lens.name}`}
        </nav>

        <h1 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{lens.name}</h1>

        {lens.subtitle && <p style={{ fontSize: "0.8rem", color: "#999", marginBottom: "1rem" }}>{lens.subtitle}</p>}

        {lens.specs && lens.specs.length > 0 && (
          <table style={SPEC_TABLE_STYLE}>
            <tbody>
              {lens.specs.map((spec, i) => (
                <tr key={i}>
                  <td style={TD_STYLE}>{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {lens.focusDescription && (
          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.25rem" }}>Focus Mechanism</h2>
            <p style={{ fontSize: "0.8rem", color: "#ccc", lineHeight: 1.5 }}>{lens.focusDescription}</p>
          </section>
        )}

        {lens.elements && lens.elements.length > 0 && (
          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Optical Elements ({lens.elements.length})
            </h2>
            <table style={SPEC_TABLE_STYLE}>
              <thead>
                <tr>
                  <th style={{ ...TD_STYLE, fontWeight: 600, fontSize: "0.75rem" }}>Element</th>
                  <th style={{ ...TD_STYLE, fontWeight: 600, fontSize: "0.75rem" }}>Type</th>
                  <th style={{ ...TD_STYLE, fontWeight: 600, fontSize: "0.75rem" }}>Glass</th>
                </tr>
              </thead>
              <tbody>
                {lens.elements.map((el) => (
                  <tr key={el.id}>
                    <td style={TD_STYLE}>{el.name || el.label}</td>
                    <td style={TD_STYLE}>{el.type}</td>
                    <td style={TD_STYLE}>{el.glass || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {analysis && (
          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.5rem" }}>Analysis</h2>
            <p style={{ fontSize: "0.8rem", color: "#999" }}>
              Detailed analysis available in the interactive viewer above.
            </p>
          </section>
        )}
      </div>
    </>
  );
}
