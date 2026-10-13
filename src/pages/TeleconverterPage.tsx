/**
 * Individual teleconverter page — /teleconverters/:teleconverterKey
 *
 * A teleconverter cannot be traced or drawn alone, so this page has no diagram: it describes the converter and lists
 * the lenses it can mount on. Each lens link opens the viewer with the converter attached. A hidden test model has
 * no prerendered page; it renders here only from a hand-typed URL and is marked noindex.
 */

import { Navigate, Link, useParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import InventorLinks from "../components/content/InventorLinks.js";
import LensEntryLink from "../components/content/LensEntryLink.js";
import PatentNumberLink from "../components/content/PatentNumberLink.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { LENS_SUMMARIES } from "../utils/catalog/lensSummaries.js";
import { LENS_MOUNT_BY_ID } from "../utils/catalog/lensTaxonomy.js";
import { TELECONVERTER_SUMMARIES } from "../utils/catalog/teleconverterSummaries.js";
import { canonicalPageUrl } from "../utils/seo/siteUrls.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE, SECTION_HEADING_BASE_STYLE } from "../utils/style/pageStyles.js";
import { pluralize } from "../utils/text.js";
import { lensLinkFromTeleconverter } from "./lensIndex/clusterLinks.js";

export default function TeleconverterPage() {
  const { teleconverterKey } = useParams<{ teleconverterKey: string }>();
  const teleconverter = teleconverterKey ? TELECONVERTER_SUMMARIES[teleconverterKey] : undefined;

  if (!teleconverter) return <Navigate to="/teleconverters/" replace />;

  const route = `/teleconverters/${teleconverter.key}`;
  const canonicalURL = canonicalPageUrl(route);
  const hostKeys = teleconverter.compatibleLensKeys.filter((key) => LENS_SUMMARIES[key]);
  const mountLabels = teleconverter.lensMounts.map((mountId) => LENS_MOUNT_BY_ID[mountId].label);
  const seoDescription =
    `${teleconverter.name}: a ${teleconverter.magnification}× rear teleconverter for ${mountLabels.join(", ")}. ` +
    `Mount it on ${hostKeys.length} compatible ${pluralize(hostKeys.length, "lens")} and trace the combined optical system.`;

  return (
    <StaticPageShell
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Teleconverters", to: "/teleconverters/" },
        { label: teleconverter.name },
      ]}
      seo={
        <SEOHead
          title={`${teleconverter.name} — Teleconverter Optical Design | ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={canonicalURL}
          robots={teleconverter.visible ? undefined : "noindex,nofollow"}
          jsonLd={[
            collectionPageJsonLd({ name: teleconverter.name, description: seoDescription, url: canonicalURL, route }),
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Teleconverters", url: `${SITE_URL}/teleconverters` },
              { name: teleconverter.name, url: canonicalURL },
            ]),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>{teleconverter.name}</h1>
          <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1rem" }}>
            {teleconverter.magnification}× rear teleconverter for{" "}
            {teleconverter.lensMounts.map((mountId, index) => (
              <span key={mountId}>
                {index > 0 && ", "}
                <Link to={`/mounts/${mountId}/`} style={{ color: t.descLinkColor, textDecoration: "none" }}>
                  {LENS_MOUNT_BY_ID[mountId].label}
                </Link>
              </span>
            ))}
          </p>

          {!teleconverter.visible && (
            <p style={{ fontSize: "0.8rem", color: t.muted, marginBottom: "0.75rem" }}>
              Hidden test model: not part of the published catalog.
            </p>
          )}

          {teleconverter.patentNumber && (
            <p style={{ fontSize: "0.8rem", color: t.subtitle, marginBottom: "0.75rem" }}>
              <PatentNumberLink patentNumber={teleconverter.patentNumber} color={t.descLinkColor} />
              {teleconverter.patentAuthors && teleconverter.patentAuthors.length > 0 && (
                <>
                  {" — "}
                  <InventorLinks names={teleconverter.patentAuthors} theme={t} />
                </>
              )}
            </p>
          )}

          {teleconverter.specs && teleconverter.specs.length > 0 && (
            <p style={{ fontSize: "0.8rem", color: t.label, marginBottom: "0.75rem" }}>
              {teleconverter.specs.join(" | ")}
            </p>
          )}

          <p style={{ fontSize: "0.85rem", color: t.desc, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            {teleconverter.universal
              ? "A universal converter: it mounts on any catalog lens for the same mount that leaves room behind its rear element."
              : "A dedicated converter: it mounts only on lenses made to accept it."}{" "}
            A teleconverter has no aperture stop of its own, so it is shown attached to a host lens, where the lens's
            stop stays the system stop and the focal length and f-number both grow by the converter's factor.
          </p>

          <h2 style={{ ...SECTION_HEADING_BASE_STYLE, color: t.title }}>
            Mount it on a lens ({hostKeys.length} {pluralize(hostKeys.length, "lens")})
          </h2>
          <div style={{ borderTop: `1px solid ${t.panelBorder}`, paddingTop: "1rem" }}>
            {hostKeys.length === 0 ? (
              <p style={{ fontSize: "0.85rem", color: t.muted }}>
                No lens in the catalog accepts this teleconverter yet.
              </p>
            ) : (
              hostKeys.map((lensKey) => (
                <LensEntryLink
                  key={lensKey}
                  lensKey={lensKey}
                  text={LENS_SUMMARIES[lensKey].name}
                  theme={t}
                  specs={LENS_SUMMARIES[lensKey].specs}
                  specsCount={3}
                  hrefForLens={(key) => lensLinkFromTeleconverter(key, teleconverter.key)}
                />
              ))
            )}
          </div>
        </>
      )}
    </StaticPageShell>
  );
}
