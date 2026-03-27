/**
 * Comparison page — /compare/:slugA/:slugB
 *
 * Renders SEO-friendly text content for both lenses plus the interactive
 * comparison visualizer (client-only). Follows the LensPage pattern.
 */

import { useParams, Navigate, Link } from "react-router";
import LensVisualization from "../components/layout/LensViewer.js";
import SEOHead from "../components/SEOHead.js";
import ClientOnly from "../components/ClientOnly.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker } from "../utils/lensMetadata.js";
import { comparePageTitle, comparePageDescription, compareCanonicalURL } from "../comparison/comparisonURLSync.js";

const CONTENT_STYLE: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  color: "#e0e0e0",
};

const NAV_STYLE: React.CSSProperties = { marginBottom: "1rem", fontSize: "0.8rem" };
const NAV_LINK_STYLE: React.CSSProperties = { color: "#7ec8e3", textDecoration: "none" };

function LensSummary({ lensKey }: { lensKey: string }) {
  const lens = LENS_CATALOG[lensKey];
  if (!lens) return null;
  const maker = deriveMaker(lens.name, lens.maker);
  return (
    <section style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>
        <Link to={`/lens/${lensKey}`} style={NAV_LINK_STYLE}>
          {lens.name}
        </Link>
      </h2>
      {lens.subtitle && <p style={{ fontSize: "0.8rem", color: "#999", marginBottom: "0.5rem" }}>{lens.subtitle}</p>}
      <p style={{ fontSize: "0.8rem", color: "#ccc" }}>
        {maker.display}
        {lens.specs && lens.specs.length > 0 ? ` — ${lens.specs.slice(0, 3).join(", ")}` : ""}
      </p>
    </section>
  );
}

export default function ComparePage() {
  const { slugA, slugB } = useParams<{ slugA: string; slugB: string }>();

  if (!slugA || !slugB || !CATALOG_KEYS.includes(slugA) || !CATALOG_KEYS.includes(slugB)) {
    return <Navigate to="/lenses" replace />;
  }

  const lensA = LENS_CATALOG[slugA];
  const lensB = LENS_CATALOG[slugB];

  return (
    <>
      <SEOHead
        title={comparePageTitle(lensA, lensB)}
        description={comparePageDescription(lensA, lensB)}
        canonicalURL={compareCanonicalURL(slugA, slugB)}
        robots="noindex,follow"
        ogType="article"
      />

      <ClientOnly
        fallback={
          <div style={CONTENT_STYLE}>
            <nav style={NAV_STYLE}>
              <Link to="/" style={NAV_LINK_STYLE}>
                Home
              </Link>
              {" / "}
              <Link to="/lenses" style={NAV_LINK_STYLE}>
                Lenses
              </Link>
              {" / Compare"}
            </nav>

            <h1 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
              {lensA.name} vs {lensB.name}
            </h1>

            <LensSummary lensKey={slugA} />
            <LensSummary lensKey={slugB} />

            <p style={{ fontSize: "0.8rem", color: "#999" }}>
              Interactive side-by-side comparison available in the viewer above.
            </p>
          </div>
        }
      >
        <LensVisualization initialLensKey={slugA} initialLensKeyB={slugB} />
      </ClientOnly>
    </>
  );
}
