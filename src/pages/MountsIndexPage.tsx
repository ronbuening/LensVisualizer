/**
 * Mounts index page — /mounts
 *
 * Lists all lens mounts represented by catalog metadata.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { getMountDetails } from "../utils/catalog/mountDetails.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { MOUNT_OPTIONS } from "./lensIndex/catalog.js";
import { pluralize } from "../utils/text.js";

export default function MountsIndexPage() {
  const seoDescription = `Browse patent-derived camera lens diagrams by mount, including ${MOUNT_OPTIONS.map(
    (mount) => mount.label,
  ).join(", ")}.`;

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Mounts" }]}
      seo={
        <SEOHead
          title={`Lens Mounts — ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={`${SITE_URL}/mounts`}
          jsonLd={[
            collectionPageJsonLd({
              name: "Lens Mounts",
              description: seoDescription,
              url: `${SITE_URL}/mounts`,
              route: "/mounts",
            }),
            itemListJsonLd({
              name: "Lens Mounts",
              url: `${SITE_URL}/mounts`,
              items: MOUNT_OPTIONS.map((mount) => ({
                name: mount.label,
                url: `${SITE_URL}/mounts/${mount.id}`,
              })),
            }),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={{ ...H1_STYLE, marginBottom: "1.5rem" }}>Lens Mounts</h1>

          {MOUNT_OPTIONS.map((mount) => {
            const details = getMountDetails(mount.id);
            return (
              <div
                key={mount.id}
                style={{ padding: "1rem 0.75rem", marginBottom: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}
              >
                <Link
                  to={`/mounts/${mount.id}/`}
                  style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
                >
                  {mount.label}
                </Link>
                <span style={{ color: t.label, fontSize: "0.8rem", marginLeft: "0.5rem" }}>
                  ({mount.count} {pluralize(mount.count, "lens")})
                </span>
                {details && (
                  <p style={{ fontSize: "0.8rem", color: t.subtitle, lineHeight: 1.5, marginTop: "0.5rem" }}>
                    {details.summary}
                  </p>
                )}
              </div>
            );
          })}
        </>
      )}
    </StaticPageShell>
  );
}
