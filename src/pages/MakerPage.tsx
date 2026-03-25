/**
 * Individual maker page — /makers/:maker
 *
 * Shows all lenses from a specific maker with crawlable links.
 */

import { useParams, Navigate, Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, makerDisplayName, makerCanonicalURL, SITE_NAME } from "../utils/lensMetadata.js";
import { getMakerDetails } from "../utils/makerDetails.js";
import type { LensData } from "../types/optics.js";

function lensesForMaker(makerSlug: string): { key: string; data: LensData }[] {
  return CATALOG_KEYS.filter(
    (key) => deriveMaker(LENS_CATALOG[key].name, LENS_CATALOG[key].maker).slug === makerSlug,
  ).map((key) => ({
    key,
    data: LENS_CATALOG[key],
  }));
}

const PAGE_STYLE: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "2rem 1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  color: "#e0e0e0",
  backgroundColor: "#1a1a2e",
  minHeight: "100vh",
};

const NAV_STYLE: React.CSSProperties = { marginBottom: "1.5rem", fontSize: "0.8rem" };
const NAV_LINK_STYLE: React.CSSProperties = { color: "#7ec8e3", textDecoration: "none" };
const LENS_LINK_STYLE: React.CSSProperties = {
  display: "block",
  padding: "0.5rem 0.75rem",
  marginBottom: "0.25rem",
  color: "#7ec8e3",
  textDecoration: "none",
  borderRadius: 4,
  fontSize: "0.875rem",
};
const SPEC_STYLE: React.CSSProperties = {
  color: "#888",
  fontSize: "0.75rem",
  marginLeft: "0.5rem",
};

export default function MakerPage() {
  const { maker } = useParams<{ maker: string }>();

  if (!maker) return <Navigate to="/makers" replace />;

  const displayName = makerDisplayName(maker);
  if (!displayName) return <Navigate to="/makers" replace />;

  const lenses = lensesForMaker(maker);
  const details = getMakerDetails(maker);

  const seoDescription = details
    ? `${details.summary} Explore ${lenses.length} ${displayName} lens designs with interactive cross-section diagrams, ray tracing, and element inspection.`
    : `Explore ${lenses.length} ${displayName} lens designs with interactive cross-section diagrams, ray tracing, and element inspection.`;

  return (
    <div style={PAGE_STYLE}>
      <SEOHead
        title={`${displayName} Lenses — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={makerCanonicalURL(maker)}
      />

      <nav style={NAV_STYLE}>
        <Link to="/" style={NAV_LINK_STYLE}>
          Home
        </Link>
        {" / "}
        <Link to="/makers" style={NAV_LINK_STYLE}>
          Makers
        </Link>
        {` / ${displayName}`}
      </nav>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>{displayName} Lenses</h1>

      {details && (
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.75rem" }}>
            Est. {details.founded} · {details.headquarters} · {lenses.length}{" "}
            {lenses.length === 1 ? "lens" : "lenses"}
          </p>
          {details.history.split("\n\n").map((paragraph, i) => (
            <p key={i} style={{ fontSize: "0.85rem", color: "#ccc", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              {paragraph}
            </p>
          ))}
          {details.notableDesigns && (
            <p style={{ fontSize: "0.8rem", color: "#999", fontStyle: "italic", marginBottom: "0.5rem" }}>
              Notable designs: {details.notableDesigns}
            </p>
          )}
        </div>
      )}

      {!details && (
        <p style={{ fontSize: "0.875rem", color: "#999", marginBottom: "1.5rem" }}>
          {lenses.length} interactive lens {lenses.length === 1 ? "diagram" : "diagrams"}
        </p>
      )}

      <div style={{ borderTop: "1px solid #333", paddingTop: "1rem" }}>
        {lenses.map(({ key, data }) => (
          <Link key={key} to={`/lens/${key}`} style={LENS_LINK_STYLE}>
            {data.name}
            {data.specs && data.specs.length > 0 && (
              <span style={SPEC_STYLE}>— {data.specs.slice(0, 3).join(", ")}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
