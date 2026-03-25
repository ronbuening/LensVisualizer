/**
 * Makers index page — /makers
 *
 * Lists all lens makers with links to their individual maker pages.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { getMakerDetails } from "../utils/makerDetails.js";
import { usePageTheme } from "../utils/usePageTheme.js";

interface MakerEntry {
  display: string;
  slug: string;
  count: number;
}

function getAllMakers(): MakerEntry[] {
  const counts = new Map<string, MakerEntry>();
  for (const key of CATALOG_KEYS) {
    const data = LENS_CATALOG[key];
    const maker = deriveMaker(data.name, data.maker);
    const existing = counts.get(maker.slug);
    if (existing) {
      existing.count++;
    } else {
      counts.set(maker.slug, { display: maker.display, slug: maker.slug, count: 1 });
    }
  }
  return Array.from(counts.values()).sort((a, b) => a.display.localeCompare(b.display));
}

const PAGE_BASE_STYLE = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "2rem 1.5rem",
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
  minHeight: "100vh",
} satisfies React.CSSProperties;

const NAV_STYLE: React.CSSProperties = { marginBottom: "1.5rem", fontSize: "0.8rem" };

export default function MakersIndexPage() {
  const makers = getAllMakers();
  const t = usePageTheme();

  return (
    <div style={{ ...PAGE_BASE_STYLE, backgroundColor: t.bg, color: t.body }}>
      <SEOHead
        title={`Lens Makers — ${SITE_NAME}`}
        description={`Browse lenses by maker: ${makers.map((m) => m.display).join(", ")}. Interactive cross-section diagrams with ray tracing and element inspection.`}
        canonicalURL={`${SITE_URL}/makers`}
      />

      <nav style={NAV_STYLE}>
        <Link to="/" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Home
        </Link>
        {" / Makers"}
      </nav>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem" }}>Lens Makers</h1>

      {makers.map((maker) => {
        const details = getMakerDetails(maker.slug);
        return (
          <div
            key={maker.slug}
            style={{ padding: "1rem 0.75rem", marginBottom: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}
          >
            <Link
              to={`/makers/${maker.slug}`}
              style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
            >
              {maker.display}
            </Link>
            {details ? (
              <>
                <div style={{ fontSize: "0.8rem", color: t.label, marginTop: "0.25rem" }}>
                  Est. {details.founded} · {details.headquarters} · {maker.count}{" "}
                  {maker.count === 1 ? "lens" : "lenses"}
                </div>
                <p style={{ fontSize: "0.8rem", color: t.subtitle, lineHeight: 1.5, marginTop: "0.5rem" }}>
                  {details.summary}
                </p>
              </>
            ) : (
              <span style={{ color: t.label, fontSize: "0.8rem", marginLeft: "0.5rem" }}>
                ({maker.count} {maker.count === 1 ? "lens" : "lenses"})
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
