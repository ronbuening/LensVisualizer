/**
 * Makers index page — /makers
 *
 * Lists all lens makers with links to their individual maker pages.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";

interface MakerEntry {
  display: string;
  slug: string;
  count: number;
}

function getAllMakers(): MakerEntry[] {
  const counts = new Map<string, MakerEntry>();
  for (const key of CATALOG_KEYS) {
    const maker = deriveMaker(LENS_CATALOG[key].name);
    const existing = counts.get(maker.slug);
    if (existing) {
      existing.count++;
    } else {
      counts.set(maker.slug, { display: maker.display, slug: maker.slug, count: 1 });
    }
  }
  return Array.from(counts.values()).sort((a, b) => a.display.localeCompare(b.display));
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

export default function MakersIndexPage() {
  const makers = getAllMakers();

  return (
    <div style={PAGE_STYLE}>
      <SEOHead
        title={`Lens Makers — ${SITE_NAME}`}
        description={`Browse lenses by maker: ${makers.map((m) => m.display).join(", ")}. Interactive cross-section diagrams with ray tracing and element inspection.`}
        canonicalURL={`${SITE_URL}/makers`}
      />

      <nav style={NAV_STYLE}>
        <Link to="/" style={NAV_LINK_STYLE}>
          Home
        </Link>
        {" / Makers"}
      </nav>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem" }}>Lens Makers</h1>

      {makers.map((maker) => (
        <Link
          key={maker.slug}
          to={`/makers/${maker.slug}`}
          style={{
            display: "block",
            padding: "0.75rem",
            marginBottom: "0.5rem",
            color: "#7ec8e3",
            textDecoration: "none",
            fontSize: "1rem",
            borderRadius: 4,
          }}
        >
          {maker.display}
          <span style={{ color: "#888", fontSize: "0.8rem", marginLeft: "0.5rem" }}>
            ({maker.count} {maker.count === 1 ? "lens" : "lenses"})
          </span>
        </Link>
      ))}
    </div>
  );
}
