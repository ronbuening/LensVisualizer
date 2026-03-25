/**
 * Lens index page — /lenses
 *
 * Browsable list of all lenses grouped by maker, with crawlable <a> links.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { getMakerDetails } from "../utils/makerDetails.js";
import type { LensData } from "../types/optics.js";

interface MakerGroup {
  display: string;
  slug: string;
  lenses: { key: string; data: LensData }[];
}

function groupByMaker(): MakerGroup[] {
  const groups = new Map<string, MakerGroup>();
  for (const key of CATALOG_KEYS) {
    const data = LENS_CATALOG[key];
    const maker = deriveMaker(data.name, data.maker);
    if (!groups.has(maker.slug)) {
      groups.set(maker.slug, { display: maker.display, slug: maker.slug, lenses: [] });
    }
    groups.get(maker.slug)!.lenses.push({ key, data });
  }
  return Array.from(groups.values()).sort((a, b) => a.display.localeCompare(b.display));
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

const H1_STYLE: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const SUBTITLE_STYLE: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "#999",
  marginBottom: "2rem",
};

const MAKER_HEADING_STYLE: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
  borderBottom: "1px solid #333",
  paddingBottom: "0.25rem",
};

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

const NAV_STYLE: React.CSSProperties = {
  marginBottom: "1.5rem",
  fontSize: "0.8rem",
};

const NAV_LINK_STYLE: React.CSSProperties = {
  color: "#7ec8e3",
  textDecoration: "none",
};

export default function LensIndexPage() {
  const groups = groupByMaker();
  const totalLenses = CATALOG_KEYS.length;

  return (
    <div style={PAGE_STYLE}>
      <SEOHead
        title={`All Lenses — ${SITE_NAME}`}
        description={`Browse ${totalLenses} interactive lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more. Each lens features ray tracing, element inspection, and aberration analysis.`}
        canonicalURL={`${SITE_URL}/lenses`}
      />

      <nav style={NAV_STYLE}>
        <Link to="/" style={NAV_LINK_STYLE}>
          Home
        </Link>
        {" / Lenses"}
      </nav>

      <h1 style={H1_STYLE}>Lens Library</h1>
      <p style={SUBTITLE_STYLE}>{totalLenses} interactive optical cross-section diagrams built from patent data.</p>

      {groups.map((group) => {
        const details = getMakerDetails(group.slug);
        return (
          <section key={group.slug}>
            <h2 style={MAKER_HEADING_STYLE}>
              <Link to={`/makers/${group.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.display}
              </Link>
              <span style={{ ...SPEC_STYLE, fontWeight: 400 }}> ({group.lenses.length})</span>
            </h2>
            {details && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#999",
                  lineHeight: 1.4,
                  marginTop: "-0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                {details.summary}
              </p>
            )}
            {group.lenses.map(({ key, data }) => (
              <Link key={key} to={`/lens/${key}`} style={LENS_LINK_STYLE}>
                {data.name}
                {data.specs && data.specs.length > 0 && (
                  <span style={SPEC_STYLE}>— {data.specs.slice(0, 2).join(", ")}</span>
                )}
              </Link>
            ))}
          </section>
        );
      })}
    </div>
  );
}
