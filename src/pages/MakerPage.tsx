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
import { associationsForMaker } from "../utils/catalog/lensRelationships.js";
import type { LensMakerAssociation } from "../utils/catalog/lensRelationships.js";
import { lensLinkFromMaker } from "./lensIndex/clusterLinks.js";

interface MakerLensEntry {
  key: string;
  data: LensSummary;
  associations: LensMakerAssociation[];
}

function lensesForMaker(makerSlug: string): MakerLensEntry[] {
  return SUMMARY_KEYS.flatMap((key) => {
    const data = LENS_SUMMARIES[key];
    const associations = associationsForMaker(data, makerSlug);
    return associations.length > 0 ? [{ key, data, associations }] : [];
  });
}

/** Canonical mount metadata for every mount used by the maker's lenses, in taxonomy order. */
function mountsForMaker(lenses: MakerLensEntry[]): LensMountMetadata[] {
  const ids = new Set<LensMountId>();
  for (const { associations } of lenses) {
    for (const association of associations) for (const mountId of association.lensMounts) ids.add(mountId);
  }
  return [...ids].map((id) => LENS_MOUNT_BY_ID[id]).sort((a, b) => a.sortOrder - b.sortOrder);
}

function brandedPresentation(entry: MakerLensEntry): { text: string; meta?: string } {
  const canonical = entry.associations.find((association) => association.role === "canonical");
  const aliases = entry.associations.filter((association) => association.role === "alias");
  if (canonical) {
    return {
      text: canonical.displayName,
      ...(aliases.length > 0
        ? { meta: `Also sold as ${aliases.map((association) => association.displayName).join(", ")}` }
        : {}),
    };
  }
  return { text: aliases[0].displayName, meta: `Alias of ${entry.data.name}` };
}

function manufacturerPresentation(entry: MakerLensEntry): { text: string; meta: string } {
  const manufacturers = entry.associations.filter((association) => association.role === "manufacturer");
  const names = manufacturers.map((association) => association.entity ?? association.maker.display);
  const brandedMaker = deriveMaker(entry.data.name, entry.data.maker).display;
  return { text: entry.data.name, meta: `${names.join(", ")} manufacturing for ${brandedMaker}` };
}

export default function MakerPage() {
  const { maker } = useParams<{ maker: string }>();

  if (!maker) return <Navigate to="/makers/" replace />;

  const lenses = lensesForMaker(maker);
  if (lenses.length === 0) return <Navigate to="/makers/" replace />;

  const displayName = makerDisplayName(maker) ?? lenses[0].associations[0].maker.display;
  const details = getMakerDetails(maker);
  const makerMounts = mountsForMaker(lenses);
  const brandedLenses = lenses.filter((entry) =>
    entry.associations.some((association) => association.role === "canonical" || association.role === "alias"),
  );
  const manufacturedLenses = lenses.filter((entry) =>
    entry.associations.some((association) => association.role === "manufacturer"),
  );

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
              {brandedLenses.length > 0 && (
                <section style={{ marginBottom: manufacturedLenses.length > 0 ? "1.5rem" : 0 }}>
                  <h2 style={{ color: t.title, fontSize: "1rem", margin: "0 0 0.6rem" }}>Sold under this brand</h2>
                  {brandedLenses.map((entry) => {
                    const presentation = brandedPresentation(entry);
                    return (
                      <LensEntryLink
                        key={entry.key}
                        lensKey={entry.key}
                        text={presentation.text}
                        meta={presentation.meta}
                        specs={entry.data.specs}
                        specsCount={3}
                        theme={t}
                        hrefForLens={() => lensLinkFromMaker(entry.key, maker, displayName)}
                      />
                    );
                  })}
                </section>
              )}
              {manufacturedLenses.length > 0 && (
                <section>
                  <h2 style={{ color: t.title, fontSize: "1rem", margin: "0 0 0.6rem" }}>
                    Manufactured for other brands
                  </h2>
                  {manufacturedLenses.map((entry) => {
                    const presentation = manufacturerPresentation(entry);
                    return (
                      <LensEntryLink
                        key={entry.key}
                        lensKey={entry.key}
                        text={presentation.text}
                        meta={presentation.meta}
                        theme={t}
                        hrefForLens={() => lensLinkFromMaker(entry.key, maker, displayName)}
                      />
                    );
                  })}
                </section>
              )}
            </div>
          </SidebarLayout>
        </>
      )}
    </StaticPageShell>
  );
}
