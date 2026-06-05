/**
 * Individual maker page — /makers/:maker
 *
 * Shows all lenses from a specific maker with crawlable links.
 */

import { useParams, Navigate, Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_CATALOG, CATALOG_KEYS } from "../utils/catalog/lensCatalog.js";
import {
  deriveMaker,
  makerDisplayName,
  makerCanonicalURL,
  SITE_NAME,
  SITE_URL,
} from "../utils/catalog/lensMetadata.js";
import { getMakerDetails } from "../utils/catalog/makerDetails.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import { LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { LENS_MOUNT_BY_ID } from "../utils/catalog/lensTaxonomy.js";
import type { LensMountId, LensMountMetadata } from "../utils/catalog/lensTaxonomy.js";
import MakerMountsSidebar from "../components/content/MakerMountsSidebar.js";
import type { LensData } from "../types/optics.js";

function lensesForMaker(makerSlug: string): { key: string; data: LensData }[] {
  return CATALOG_KEYS.filter(
    (key) => deriveMaker(LENS_CATALOG[key].name, LENS_CATALOG[key].maker).slug === makerSlug,
  ).map((key) => ({
    key,
    data: LENS_CATALOG[key],
  }));
}

/** Canonical mount metadata for every mount used by the maker's lenses, in taxonomy order. */
function mountsForMaker(lenses: { key: string; data: LensData }[]): LensMountMetadata[] {
  const ids = new Set<LensMountId>();
  for (const { data } of lenses) for (const mountId of data.lensMounts ?? []) ids.add(mountId);
  return [...ids].map((id) => LENS_MOUNT_BY_ID[id]).sort((a, b) => a.sortOrder - b.sortOrder);
}

export default function MakerPage() {
  const { maker } = useParams<{ maker: string }>();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  if (!maker) return <Navigate to="/makers" replace />;

  const displayName = makerDisplayName(maker);
  if (!displayName) return <Navigate to="/makers" replace />;

  const lenses = lensesForMaker(maker);
  if (lenses.length === 0) return <Navigate to="/makers" replace />;
  const details = getMakerDetails(maker);
  const makerMounts = mountsForMaker(lenses);

  const seoDescription = details
    ? `${details.summary} Explore ${lenses.length} patent-derived ${displayName} lens cross-sections with ray tracing and optical analysis.`
    : `Explore ${lenses.length} patent-derived ${displayName} lens cross-sections with ray tracing and optical analysis.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${displayName} Lens Cross-Sections | ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={makerCanonicalURL(maker)}
        jsonLd={[
          collectionPageJsonLd({
            name: `${displayName} Lenses`,
            description: seoDescription,
            url: makerCanonicalURL(maker),
            route: `/makers/${maker}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: SITE_URL },
            { name: "Makers", url: `${SITE_URL}/makers` },
            { name: displayName, url: makerCanonicalURL(maker) },
          ]),
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
        <Link to="/makers" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Makers
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>{displayName}</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          {displayName} Lenses
        </h1>

        {details && (
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.8rem", color: t.label, marginBottom: "0.75rem" }}>
              Est. {details.founded} · {details.headquarters} · {lenses.length}{" "}
              {lenses.length === 1 ? "lens" : "lenses"}
            </p>
            {details.history.split("\n\n").map((paragraph, i) => (
              <p key={i} style={{ fontSize: "0.85rem", color: t.desc, lineHeight: 1.6, marginBottom: "0.75rem" }}>
                {paragraph}
              </p>
            ))}
            {details.notableDesigns && (
              <p style={{ fontSize: "0.8rem", color: t.muted, fontStyle: "italic", marginBottom: "0.5rem" }}>
                Notable designs: {details.notableDesigns}
              </p>
            )}
          </div>
        )}

        {!details && (
          <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1.5rem" }}>
            {lenses.length} interactive lens {lenses.length === 1 ? "diagram" : "diagrams"}
          </p>
        )}

        <MakerMountsSidebar mounts={makerMounts} theme={t} />

        <div style={{ borderTop: `1px solid ${t.panelBorder}`, paddingTop: "1rem" }}>
          {lenses.map(({ key, data }) => (
            <Link key={key} to={`/lens/${key}`} style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}>
              {data.name}
              {data.specs && data.specs.length > 0 && (
                <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                  — {data.specs.slice(0, 3).join(", ")}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
