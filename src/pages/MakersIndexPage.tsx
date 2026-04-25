/**
 * Makers index page — /makers
 *
 * Lists all lens makers with links to their individual maker pages.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/lensCatalog.js";
import { deriveMaker, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { getMakerDetails } from "../utils/makerDetails.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { PAGE_BASE_STYLE } from "../utils/pageStyles.js";

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

export default function MakersIndexPage() {
  const makers = getAllMakers();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse lenses by maker: ${makers.map((m) => m.display).join(", ")}. Interactive cross-section diagrams with ray tracing and element inspection.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Lens Makers — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/makers`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Lens Makers",
            description: seoDescription,
            url: `${SITE_URL}/makers`,
            route: "/makers",
          }),
          itemListJsonLd({
            name: "Lens Makers",
            url: `${SITE_URL}/makers`,
            items: makers.map((maker) => ({
              name: maker.display,
              url: `${SITE_URL}/makers/${maker.slug}`,
            })),
          }),
        ]}
      />

      <PageNavBar
        theme={t}
        themeMode={themeMode}
        highContrast={highContrast}
        onToggleTheme={toggleTheme}
        onToggleHC={toggleHC}
      >
        <Link to="/" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>Makers</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          Lens Makers
        </h1>

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
    </div>
  );
}
