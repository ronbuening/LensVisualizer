/**
 * Individual image-format page — /formats/:formatId
 */

import { Navigate, Link, useParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../utils/catalog/lensTaxonomy.js";
import { formatCanonicalURL, SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import { getImageFormatDetails } from "../utils/catalog/imageFormatDetails.js";
import { LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { lensLinkFromFormat } from "./lensIndex/clusterLinks.js";
import { lensesForImageFormat } from "./lensIndex/catalog.js";

export default function FormatPage() {
  const { formatId } = useParams<{ formatId: string }>();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  if (!isImageFormatId(formatId)) return <Navigate to="/formats" replace />;

  const format = IMAGE_FORMAT_BY_ID[formatId];
  const lenses = lensesForImageFormat(formatId);
  if (lenses.length === 0) return <Navigate to="/formats" replace />;
  const details = getImageFormatDetails(formatId);

  const seoDescription = details
    ? `${details.summary} Explore ${lenses.length} patent-derived ${format.label} lens diagrams with optical analysis.`
    : `Explore ${lenses.length} patent-derived ${format.label} lens diagrams with ray tracing and optical analysis.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${format.label} Lens Diagrams | ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={formatCanonicalURL(formatId)}
        jsonLd={[
          collectionPageJsonLd({
            name: `${format.label} Lenses`,
            description: seoDescription,
            url: formatCanonicalURL(formatId),
            route: `/formats/${formatId}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: SITE_URL },
            { name: "Formats", url: `${SITE_URL}/formats` },
            { name: format.label, url: formatCanonicalURL(formatId) },
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
        <Link to="/formats" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Formats
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>{format.label}</span>
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          {format.label} Lenses
        </h1>
        <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1.5rem" }}>
          {format.widthMm} x {format.heightMm} mm image area · {lenses.length} interactive lens{" "}
          {lenses.length === 1 ? "diagram" : "diagrams"}
        </p>

        {details && (
          <section style={{ marginBottom: "1.5rem" }}>
            {(details.commonUses || details.coverageNotes) && (
              <p style={{ fontSize: "0.8rem", color: t.label, marginBottom: "0.75rem" }}>
                {[details.commonUses, details.coverageNotes].filter(Boolean).join(" | ")}
              </p>
            )}
            {details.description.split("\n\n").map((paragraph, i) => (
              <p key={i} style={{ fontSize: "0.85rem", color: t.desc, lineHeight: 1.6, marginBottom: "0.75rem" }}>
                {paragraph}
              </p>
            ))}
          </section>
        )}

        <div style={{ borderTop: `1px solid ${t.panelBorder}`, paddingTop: "1rem" }}>
          {lenses.map((entry) => (
            <Link
              key={entry.key}
              to={lensLinkFromFormat(entry.key, formatId)}
              style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
            >
              {entry.data.name}
              {entry.lensMounts.length > 0 && (
                <span style={{ color: t.label, fontSize: "0.75rem", marginLeft: "0.5rem" }}>
                  — {entry.lensMounts.map((mount) => mount.label).join(", ")}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
