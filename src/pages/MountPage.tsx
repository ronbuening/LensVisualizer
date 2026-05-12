/**
 * Individual mount page — /mounts/:mountId
 */

import { Navigate, Link, useParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { LENS_MOUNT_BY_ID, isLensMountId } from "../utils/lensTaxonomy.js";
import { mountCanonicalURL, SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE } from "../utils/pageStyles.js";
import { lensLinkFromMount } from "./lensIndex/clusterLinks.js";
import { lensesForMount } from "./lensIndex/catalog.js";

export default function MountPage() {
  const { mountId } = useParams<{ mountId: string }>();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  if (!isLensMountId(mountId)) return <Navigate to="/mounts" replace />;

  const mount = LENS_MOUNT_BY_ID[mountId];
  const lenses = lensesForMount(mountId);
  if (lenses.length === 0) return <Navigate to="/mounts" replace />;

  const seoDescription = `Explore ${lenses.length} ${mount.label} lens designs with interactive cross-section diagrams, ray tracing, and element inspection.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${mount.label} Lenses — ${SITE_NAME}`}
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
        <Link to="/mounts" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Mounts
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>{mount.label}</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          {mount.label} Lenses
        </h1>
        <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1.5rem" }}>
          {lenses.length} interactive lens {lenses.length === 1 ? "diagram" : "diagrams"}
        </p>

        <div style={{ borderTop: `1px solid ${t.panelBorder}`, paddingTop: "1rem" }}>
          {lenses.map((entry) => (
            <Link
              key={entry.key}
              to={lensLinkFromMount(entry.key, mountId)}
              style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
            >
              {entry.data.name}
              {entry.data.specs && entry.data.specs.length > 0 && (
                <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                  — {entry.data.specs.slice(0, 3).join(", ")}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
