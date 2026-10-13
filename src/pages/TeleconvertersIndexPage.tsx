/**
 * Teleconverters index page — /teleconverters
 *
 * Lists every published detachable rear teleconverter in the catalog. A converter has no diagram of its own; each
 * entry links to its page, where a host lens is chosen to mount it on. Hidden test models are not listed; while the
 * catalog holds nothing else the page is not built and only renders, unindexed, from a hand-typed URL.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { LENS_MOUNT_BY_ID } from "../utils/catalog/lensTaxonomy.js";
import { TELECONVERTER_SUMMARY_LIST } from "../utils/catalog/teleconverterSummaries.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { pluralize } from "../utils/text.js";

const SEO_DESCRIPTION =
  "Browse patent-derived rear teleconverters and mount each one on a compatible lens to trace the combined optical system.";

export default function TeleconvertersIndexPage() {
  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Teleconverters" }]}
      seo={
        <SEOHead
          title={`Teleconverters — ${SITE_NAME}`}
          description={SEO_DESCRIPTION}
          canonicalURL={`${SITE_URL}/teleconverters`}
          robots={TELECONVERTER_SUMMARY_LIST.length === 0 ? "noindex,nofollow" : undefined}
          jsonLd={[
            collectionPageJsonLd({
              name: "Teleconverters",
              description: SEO_DESCRIPTION,
              url: `${SITE_URL}/teleconverters`,
              route: "/teleconverters",
            }),
            itemListJsonLd({
              name: "Teleconverters",
              url: `${SITE_URL}/teleconverters`,
              items: TELECONVERTER_SUMMARY_LIST.map((teleconverter) => ({
                name: teleconverter.name,
                url: `${SITE_URL}/teleconverters/${teleconverter.key}`,
              })),
            }),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Teleconverters</h1>
          <p style={{ fontSize: "0.85rem", color: t.desc, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            A rear teleconverter sits between a lens and the camera and lengthens the focal length. It has no aperture
            stop of its own, so it is shown mounted on a host lens: open a converter to pick the lens.
          </p>

          {TELECONVERTER_SUMMARY_LIST.length === 0 && (
            <p style={{ fontSize: "0.85rem", color: t.muted }}>No teleconverter has been published yet.</p>
          )}

          {TELECONVERTER_SUMMARY_LIST.map((teleconverter) => {
            const hostCount = teleconverter.compatibleLensKeys.length;
            return (
              <div
                key={teleconverter.key}
                style={{ padding: "1rem 0.75rem", marginBottom: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}
              >
                <Link
                  to={`/teleconverters/${teleconverter.key}/`}
                  style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
                >
                  {teleconverter.name}
                </Link>
                <span style={{ color: t.label, fontSize: "0.8rem", marginLeft: "0.5rem" }}>
                  ({hostCount} compatible {pluralize(hostCount, "lens")})
                </span>
                <p style={{ fontSize: "0.8rem", color: t.subtitle, lineHeight: 1.5, marginTop: "0.5rem" }}>
                  {teleconverter.magnification}× ·{" "}
                  {teleconverter.lensMounts.map((mountId) => LENS_MOUNT_BY_ID[mountId].label).join(", ")}
                  {teleconverter.universal ? " · universal" : ""}
                </p>
              </div>
            );
          })}
        </>
      )}
    </StaticPageShell>
  );
}
