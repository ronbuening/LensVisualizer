/**
 * Individual maker page — /makers/:maker
 *
 * Shows all lenses from a specific maker with crawlable links.
 */

import { useParams, Navigate } from "react-router";
import SEOHead from "../components/SEOHead.js";
import LensEntryLink from "../components/content/LensEntryLink.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "../utils/catalog/lensSummaries.js";
import {
  deriveMaker,
  makerDisplayName,
  makerCanonicalURL,
  SITE_NAME,
  SITE_URL,
} from "../utils/catalog/lensMetadata.js";
import { getMakerDetails } from "../utils/catalog/makerDetails.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { LENS_MOUNT_BY_ID } from "../utils/catalog/lensTaxonomy.js";
import type { LensMountId, LensMountMetadata } from "../utils/catalog/lensTaxonomy.js";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import type { LensSummary } from "../utils/catalog/lensSummaries.js";
import { pluralize } from "../utils/text.js";

function lensesForMaker(makerSlug: string): { key: string; data: LensSummary }[] {
  return SUMMARY_KEYS.filter(
    (key) => deriveMaker(LENS_SUMMARIES[key].name, LENS_SUMMARIES[key].maker).slug === makerSlug,
  ).map((key) => ({
    key,
    data: LENS_SUMMARIES[key],
  }));
}

/** Canonical mount metadata for every mount used by the maker's lenses, in taxonomy order. */
function mountsForMaker(lenses: { key: string; data: LensSummary }[]): LensMountMetadata[] {
  const ids = new Set<LensMountId>();
  for (const { data } of lenses) for (const mountId of data.lensMounts ?? []) ids.add(mountId);
  return [...ids].map((id) => LENS_MOUNT_BY_ID[id]).sort((a, b) => a.sortOrder - b.sortOrder);
}

export default function MakerPage() {
  const { maker } = useParams<{ maker: string }>();

  if (!maker) return <Navigate to="/makers/" replace />;

  const lenses = lensesForMaker(maker);
  if (lenses.length === 0) return <Navigate to="/makers/" replace />;

  const displayName = makerDisplayName(maker) ?? deriveMaker(lenses[0].data.name, lenses[0].data.maker).display;
  const details = getMakerDetails(maker);
  const makerMounts = mountsForMaker(lenses);

  const lensCountText = `Explore ${lenses.length} patent-derived ${displayName} lens cross-sections with ray tracing and optical analysis.`;
  const seoDescription = details ? `${details.summary} ${lensCountText}` : lensCountText;

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Makers", to: "/makers/" }, { label: displayName }]}
      seo={
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
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>{displayName} Lenses</h1>

          {details && (
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.8rem", color: t.label, marginBottom: "0.75rem" }}>
                Est. {details.founded} · {details.headquarters} · {lenses.length} {pluralize(lenses.length, "lens")}
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
              {lenses.length} interactive lens {pluralize(lenses.length, "diagram")}
            </p>
          )}

          <SidebarLayout
            sidebar={
              makerMounts.length > 0 ? (
                <LinkListSidebar
                  title="Mounts"
                  ariaLabel="Mounts used by this maker"
                  items={makerMounts.map((m) => ({ id: m.id, label: m.label, to: `/mounts/${m.id}` }))}
                  theme={t}
                />
              ) : null
            }
          >
            <div style={{ borderTop: `1px solid ${t.panelBorder}`, paddingTop: "1rem" }}>
              {lenses.length > 0 ? (
                lenses.map(({ key, data }) => (
                  <LensEntryLink key={key} lensKey={key} text={data.name} specs={data.specs} specsCount={3} theme={t} />
                ))
              ) : (
                <p style={{ fontSize: "0.85rem", color: t.muted, margin: 0 }}>
                  No patent-derived lens diagrams have been published for {displayName} yet.
                </p>
              )}
            </div>
          </SidebarLayout>
        </>
      )}
    </StaticPageShell>
  );
}
