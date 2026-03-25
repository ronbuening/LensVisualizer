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
import { usePageTheme } from "../utils/usePageTheme.js";
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

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "2rem 1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

const H1_STYLE: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const MAKER_HEADING_BASE_STYLE = {
  fontSize: "1.125rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
  paddingBottom: "0.25rem",
} satisfies React.CSSProperties;

const LENS_LINK_BASE_STYLE = {
  display: "block",
  padding: "0.5rem 0.75rem",
  marginBottom: "0.25rem",
  textDecoration: "none",
  borderRadius: 4,
  fontSize: "0.875rem",
} satisfies React.CSSProperties;

const NAV_STYLE: React.CSSProperties = {
  marginBottom: "1.5rem",
  fontSize: "0.8rem",
};

export default function LensIndexPage() {
  const groups = groupByMaker();
  const totalLenses = CATALOG_KEYS.length;
  const t = usePageTheme();

  return (
    <div style={{ ...PAGE_BASE_STYLE, backgroundColor: t.bg, color: t.body }}>
      <SEOHead
        title={`All Lenses — ${SITE_NAME}`}
        description={`Browse ${totalLenses} interactive lens cross-section diagrams from Nikon, Carl Zeiss, Ricoh, Voigtländer, and more. Each lens features ray tracing, element inspection, and aberration analysis.`}
        canonicalURL={`${SITE_URL}/lenses`}
      />

      <nav style={NAV_STYLE}>
        <Link to="/" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Home
        </Link>
        {" / Lenses"}
      </nav>

      <h1 style={H1_STYLE}>Lens Library</h1>
      <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "2rem" }}>
        {totalLenses} interactive optical cross-section diagrams built from patent data.
      </p>

      {groups.map((group) => {
        const details = getMakerDetails(group.slug);
        return (
          <section key={group.slug}>
            <h2 style={{ ...MAKER_HEADING_BASE_STYLE, borderBottom: `1px solid ${t.panelBorder}` }}>
              <Link to={`/makers/${group.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                {group.display}
              </Link>
              <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                ({group.lenses.length})
              </span>
            </h2>
            {details && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: t.muted,
                  lineHeight: 1.4,
                  marginTop: "-0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                {details.summary}
              </p>
            )}
            {group.lenses.map(({ key, data }) => (
              <Link key={key} to={`/lens/${key}`} style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}>
                {data.name}
                {data.specs && data.specs.length > 0 && (
                  <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                    — {data.specs.slice(0, 2).join(", ")}
                  </span>
                )}
              </Link>
            ))}
          </section>
        );
      })}
    </div>
  );
}
