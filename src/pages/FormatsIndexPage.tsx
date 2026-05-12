/**
 * Formats index page — /formats
 *
 * Lists all image formats represented by catalog metadata.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { SITE_NAME, SITE_URL } from "../utils/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/structuredData.js";
import { usePageThemeToggle } from "../utils/usePageThemeToggle.js";
import { PAGE_BASE_STYLE } from "../utils/pageStyles.js";
import { IMAGE_FORMAT_OPTIONS } from "./lensIndex/catalog.js";

export default function FormatsIndexPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse camera lens diagrams by image format, including ${IMAGE_FORMAT_OPTIONS.map(
    (format) => format.label,
  ).join(", ")}.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Lens Image Formats — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={`${SITE_URL}/formats`}
        jsonLd={[
          collectionPageJsonLd({
            name: "Lens Image Formats",
            description: seoDescription,
            url: `${SITE_URL}/formats`,
            route: "/formats",
          }),
          itemListJsonLd({
            name: "Lens Image Formats",
            url: `${SITE_URL}/formats`,
            items: IMAGE_FORMAT_OPTIONS.map((format) => ({
              name: format.label,
              url: `${SITE_URL}/formats/${format.id}`,
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
        <span style={{ color: t.body }}>Formats</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          Lens Image Formats
        </h1>

        {IMAGE_FORMAT_OPTIONS.map((format) => (
          <div
            key={format.id}
            style={{ padding: "1rem 0.75rem", marginBottom: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}
          >
            <Link
              to={`/formats/${format.id}`}
              style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
            >
              {format.label}
            </Link>
            <span style={{ color: t.label, fontSize: "0.8rem", marginLeft: "0.5rem" }}>
              ({format.count} {format.count === 1 ? "lens" : "lenses"})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
