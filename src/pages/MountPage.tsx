/**
 * Individual mount page — /mounts/:mountId
 */

import { Navigate, Link, useParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { LENS_MOUNT_BY_ID, isLensMountId } from "../utils/catalog/lensTaxonomy.js";
import { makerDisplayName, mountCanonicalURL, SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { getMountDetails } from "../utils/catalog/mountDetails.js";
import { MOUNT_SPECS } from "../mounts/index.js";
import MountDiagramPanel from "../components/mount/MountDiagramPanel.js";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import { H1_STYLE, LENS_LINK_BASE_STYLE } from "../utils/style/pageStyles.js";
import { lensLinkFromMount } from "./lensIndex/clusterLinks.js";
import { lensesForMount } from "./lensIndex/catalog.js";
import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";
import { catalogCollator } from "../utils/catalog/collation.js";
import { pluralize } from "../utils/text.js";
import { marketedNameForMount } from "../utils/catalog/lensRelationships.js";

/** Makers (slug + display label) that have lenses for this mount, alphabetically. */
function makersForMount(
  lenses: ReturnType<typeof lensesForMount>,
  mountId: LensMountId,
): { slug: string; label: string }[] {
  const map = new Map<string, string>();
  for (const entry of lenses) {
    for (const association of entry.makerAssociations) {
      if (!association.lensMounts.includes(mountId)) continue;
      const { slug, display } = association.maker;
      if (!map.has(slug)) map.set(slug, makerDisplayName(slug) ?? display);
    }
  }
  return [...map.entries()]
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => catalogCollator.compare(a.label, b.label));
}

export default function MountPage() {
  const { mountId } = useParams<{ mountId: string }>();

  if (!isLensMountId(mountId)) return <Navigate to="/mounts/" replace />;

  const mount = LENS_MOUNT_BY_ID[mountId];
  const lenses = lensesForMount(mountId);
  if (lenses.length === 0) return <Navigate to="/mounts/" replace />;
  const details = getMountDetails(mountId);
  const mountSpec = MOUNT_SPECS[mountId];
  const diagramSpec = mountSpec?.mvpStatus === "not_applicable" ? undefined : mountSpec;
  const mountMakers = makersForMount(lenses, mountId);

  const seoDescription = details
    ? `${details.summary} Explore ${lenses.length} patent-derived ${mount.label} lens diagrams with optical analysis.`
    : `Explore ${lenses.length} patent-derived ${mount.label} lens diagrams with ray tracing and optical analysis.`;

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Mounts", to: "/mounts/" }, { label: mount.label }]}
      seo={
        <SEOHead
          title={`${mount.label} Lens Diagrams | ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={mountCanonicalURL(mountId)}
          jsonLd={[
            collectionPageJsonLd({
              name: `${mount.label} Lenses`,
              description: seoDescription,
              url: mountCanonicalURL(mountId),
              route: `/mounts/${mountId}`,
            }),
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Mounts", url: `${SITE_URL}/mounts` },
              { name: mount.label, url: mountCanonicalURL(mountId) },
            ]),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>{mount.label} Lenses</h1>
          <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1.5rem" }}>
            {lenses.length} interactive lens {pluralize(lenses.length, "diagram")}
          </p>

          {details && (
            <section style={{ marginBottom: "1.5rem" }}>
              {(details.era || details.formatNotes) && (
                <p style={{ fontSize: "0.8rem", color: t.label, marginBottom: "0.75rem" }}>
                  {[details.era, details.formatNotes].filter(Boolean).join(" | ")}
                </p>
              )}
              {details.description.split("\n\n").map((paragraph, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: t.desc, lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          )}

          {diagramSpec && (
            <section style={{ marginBottom: "1.5rem" }}>
              <MountDiagramPanel spec={diagramSpec} theme={t} />
            </section>
          )}

          <SidebarLayout
            sidebar={
              mountMakers.length > 0 ? (
                <LinkListSidebar
                  title="Makers"
                  ariaLabel="Makers with lenses for this mount"
                  items={mountMakers.map((m) => ({ id: m.slug, label: m.label, to: `/makers/${m.slug}` }))}
                  theme={t}
                />
              ) : null
            }
          >
            <div style={{ borderTop: `1px solid ${t.panelBorder}`, paddingTop: "1rem" }}>
              {lenses.map((entry) => (
                <Link
                  key={entry.key}
                  {...lensLinkFromMount(entry.key, mountId)}
                  style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
                >
                  {marketedNameForMount(entry.data, mountId)}
                  {entry.data.specs && entry.data.specs.length > 0 && (
                    <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                      — {entry.data.specs.slice(0, 3).join(", ")}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </SidebarLayout>
        </>
      )}
    </StaticPageShell>
  );
}
