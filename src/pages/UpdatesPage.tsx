/**
 * Updates hub — /updates
 *
 * The newest RECENT_UPDATE_MONTH_COUNT months of changelog entries and added lenses, with links to every monthly
 * archive page (/updates/YYYY-MM/). RSS items link here; anchors for older entries move to their archive page.
 */

import SEOHead from "../components/SEOHead.js";
import UpdatesView from "../components/content/UpdatesView.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { formatUpdateMonth } from "../utils/content/updateMonths.js";
import { RECENT_UPDATE_MONTHS } from "../utils/content/updatesArchive.js";
import { collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { textRun } from "../utils/text.js";

export default function UpdatesPage() {
  const seoDescription =
    "Recent Surface & Stop updates — newly added lenses and a changelog of features, fixes, and improvements, with a monthly archive of everything earlier.";

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Updates" }]}
      seo={
        <SEOHead
          title={`Updates — ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={`${SITE_URL}/updates`}
          jsonLd={[
            collectionPageJsonLd({
              name: "Updates",
              description: seoDescription,
              url: `${SITE_URL}/updates`,
              route: "/updates",
            }),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Updates</h1>
          <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1.5rem" }}>
            {textRun(
              "Changelog entries and newly added lenses from ",
              RECENT_UPDATE_MONTHS.map(formatUpdateMonth).join(" and "),
              ". Every month also has its own archive page.",
            )}
          </p>

          <UpdatesView theme={t} months={RECENT_UPDATE_MONTHS} />
        </>
      )}
    </StaticPageShell>
  );
}
