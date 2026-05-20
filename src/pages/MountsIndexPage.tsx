/**
 * Mounts index page — /mounts
 *
 * Lists all lens mounts represented by catalog metadata.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import { getMountDetails } from "../utils/catalog/mountDetails.js";
import { PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { MOUNT_OPTIONS } from "./lensIndex/catalog.js";

export default function MountsIndexPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse patent-derived camera lens diagrams by mount, including ${MOUNT_OPTIONS.map(
    (mount) => mount.label,
  ).join(", ")}.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
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
        <span style={{ color: t.body }}>Mounts</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          Lens Mounts
        </h1>

        {MOUNT_OPTIONS.map((mount) => {
          const details = getMountDetails(mount.id);
          return (
            <div
              key={mount.id}
              style={{ padding: "1rem 0.75rem", marginBottom: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}
            >
              <Link
                to={`/mounts/${mount.id}`}
                style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
              >
                {mount.label}
              </Link>
              <span style={{ color: t.label, fontSize: "0.8rem", marginLeft: "0.5rem" }}>
                ({mount.count} {mount.count === 1 ? "lens" : "lenses"})
              </span>
              {details && (
                <p style={{ fontSize: "0.8rem", color: t.subtitle, lineHeight: 1.5, marginTop: "0.5rem" }}>
                  {details.summary}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
