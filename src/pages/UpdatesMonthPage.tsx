/**
 * Monthly updates archive — /updates/:month (YYYY-MM)
 *
 * Every changelog entry and added lens of one month, at a permanent URL. Unknown or malformed months fall back to
 * the /updates hub.
 */

import { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import UpdatesView from "../components/content/UpdatesView.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { formatUpdateMonth } from "../utils/content/updateMonths.js";
import { UPDATE_MONTHS, hasUpdateMonth } from "../utils/content/updatesArchive.js";
import { canonicalPageUrl } from "../utils/seo/siteUrls.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { pluralize, textRun } from "../utils/text.js";

export default function UpdatesMonthPage() {
  const { month } = useParams<{ month: string }>();
  const months = useMemo(() => (month ? [month] : []), [month]);

  const summary = UPDATE_MONTHS.find((entry) => entry.month === month);
  if (!hasUpdateMonth(month) || !summary) return <Navigate to="/updates/" replace />;

  const label = formatUpdateMonth(month);
  const canonicalURL = canonicalPageUrl(`/updates/${month}`);
  const { changelogCount, lensCount } = summary;
  const seoDescription =
    `Everything that changed on ${SITE_NAME} in ${label}: ${changelogCount} changelog ` +
    `${pluralize(changelogCount, "entry")} and ${lensCount} newly added lens ${pluralize(lensCount, "diagram")}.`;

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Updates", to: "/updates/" }, { label }]}
      seo={
        <SEOHead
          title={`${label} Updates — ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={canonicalURL}
          jsonLd={[
            collectionPageJsonLd({
              name: `${label} Updates`,
              description: seoDescription,
              url: canonicalURL,
              route: `/updates/${month}`,
            }),
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Updates", url: `${SITE_URL}/updates` },
              { name: label, url: canonicalURL },
            ]),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>{textRun(label, " Updates")}</h1>
          <p style={{ fontSize: "0.875rem", color: t.muted, marginBottom: "1.5rem" }}>
            {textRun(
              changelogCount,
              " changelog ",
              pluralize(changelogCount, "entry"),
              " and ",
              lensCount,
              " newly added ",
              pluralize(lensCount, "lens"),
              " from ",
              label,
              ".",
            )}
          </p>

          <UpdatesView theme={t} months={months} currentMonth={month} />
        </>
      )}
    </StaticPageShell>
  );
}
