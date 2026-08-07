/**
 * Patents index page — /patents
 *
 * Lists every unique source patent represented by visible lens data, grouped
 * first by publication country/jurisdiction and then by named assignee.
 */

import SEOHead from "../components/SEOHead.js";
import InventorLinks from "../components/content/InventorLinks.js";
import LensEntryLink from "../components/content/LensEntryLink.js";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import PatentNumberLink from "../components/content/PatentNumberLink.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import type { Theme } from "../types/theme.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import {
  PATENTS,
  PATENT_ASSIGNEE_FALLBACK,
  PATENT_COUNTRY_GROUPS,
  type PatentRecord,
} from "../utils/catalog/patentCatalog.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE, STICKY_NAV_SCROLL_MARGIN } from "../utils/style/pageStyles.js";
import { countSuffix, panelCard } from "../utils/style/styles.js";
import { patentPartyGroupAnchorId } from "./lensIndex/groupAnchors.js";
import { pluralize } from "../utils/text.js";

interface PatentCardProps {
  patent: PatentRecord;
  groupedAssignee: string;
  theme: Theme;
}

const countryAnchorId = (code: string): string => `patent-country-${code.toLowerCase()}`;
const assigneeAnchorId = (countryCode: string, assigneeId: string): string =>
  patentPartyGroupAnchorId("assignee", `${countryCode}:${assigneeId}`);

function PatentCard({ patent, groupedAssignee, theme: t }: PatentCardProps) {
  const otherAssignees = patent.assignees.filter((assignee) => assignee !== groupedAssignee);

  return (
    <article
      style={{
        borderBottom: `1px solid ${t.panelDivider}`,
        padding: "0.75rem 0.85rem",
      }}
    >
      <h4 style={{ color: t.title, fontSize: "0.9rem", margin: "0 0 0.3rem" }}>
        <PatentNumberLink patentNumber={patent.patentNumber} color={t.descLinkColor} />
        {patent.patentYear !== undefined && (
          <span style={{ color: t.label, fontSize: "0.68rem", marginLeft: "0.5rem", fontWeight: 400 }}>
            {patent.patentYear}
          </span>
        )}
      </h4>

      {otherAssignees.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.7rem", lineHeight: 1.5, margin: "0.2rem 0" }}>
          Also assigned to: {otherAssignees.join(", ")}
        </p>
      )}

      {patent.authors.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.7rem", lineHeight: 1.5, margin: "0.2rem 0 0.4rem" }}>
          Inventors: <InventorLinks names={patent.authors} theme={t} />
        </p>
      )}

      <div style={{ paddingTop: "0.15rem" }}>
        {patent.lenses.map((lens) => (
          <LensEntryLink
            key={lens.key}
            lensKey={lens.key}
            text={lens.name}
            specs={lens.specs}
            theme={t}
            metaStyle={{ fontSize: "0.68rem" }}
          />
        ))}
      </div>
    </article>
  );
}

export default function PatentsIndexPage() {
  const seoDescription = `Browse ${PATENTS.length} optical patents by publication country and assignee, with links to their interactive lens diagrams.`;

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Patents" }]}
      seo={
        <SEOHead
          title={`Lens Patents by Country and Assignee — ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={`${SITE_URL}/patents`}
          jsonLd={[
            collectionPageJsonLd({
              name: "Lens Patents by Country and Assignee",
              description: seoDescription,
              url: `${SITE_URL}/patents`,
              route: "/patents",
            }),
            itemListJsonLd({
              name: "Lens Patents",
              url: `${SITE_URL}/patents`,
              items: PATENTS.map((patent) => ({
                name: patent.patentNumber,
                url: `${SITE_URL}/lens/${patent.lenses[0].key}`,
              })),
            }),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Lens Patents by Country and Assignee</h1>
          <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
            {PATENTS.length} unique source patents represented in the Surface &amp; Stop catalog. Country identifies the
            publication authority at the start of each patent number; WO publications appear under International (WIPO).
          </p>
          <p style={{ color: t.label, fontSize: "0.7rem", lineHeight: 1.5, margin: "0 0 1.5rem" }}>
            Jointly assigned patents appear in each named assignee section. Patents without a published assignee are
            collected under “{PATENT_ASSIGNEE_FALLBACK}.” Patent numbers open their worldwide Espacenet record search in
            a new tab.
          </p>

          <SidebarLayout
            sidebar={
              <LinkListSidebar
                title="Countries"
                ariaLabel="Patent country sections"
                items={PATENT_COUNTRY_GROUPS.map((country) => ({
                  id: country.jurisdiction.code,
                  label: `${country.jurisdiction.label} (${country.patentCount})`,
                  children: country.assignees.map((assignee) => ({
                    id: `${country.jurisdiction.code}:${assignee.id}`,
                    label: `${assignee.label} (${assignee.patents.length})`,
                    to: `#${assigneeAnchorId(country.jurisdiction.code, assignee.id)}`,
                  })),
                }))}
                theme={t}
              />
            }
          >
            {PATENT_COUNTRY_GROUPS.map((country) => (
              <section
                key={country.jurisdiction.code}
                id={countryAnchorId(country.jurisdiction.code)}
                style={{ marginBottom: "2.25rem", scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}
              >
                <h2
                  style={{
                    color: t.title,
                    fontSize: "1.15rem",
                    borderBottom: `1px solid ${t.panelBorder}`,
                    paddingBottom: "0.45rem",
                    margin: "0 0 1rem",
                  }}
                >
                  {country.jurisdiction.label}
                  <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                    {country.jurisdiction.code} · {country.patentCount} {pluralize(country.patentCount, "patent")}
                  </span>
                </h2>

                {country.assignees.map((assignee) => (
                  <section
                    key={assignee.id}
                    id={assigneeAnchorId(country.jurisdiction.code, assignee.id)}
                    style={{
                      ...panelCard(t),
                      marginBottom: "1rem",
                      overflow: "hidden",
                      scrollMarginTop: STICKY_NAV_SCROLL_MARGIN,
                    }}
                  >
                    <h3
                      style={{
                        color: assignee.isFallback ? t.muted : t.title,
                        fontSize: "0.92rem",
                        margin: 0,
                        padding: "0.7rem 0.85rem",
                        borderBottom: `1px solid ${t.panelBorder}`,
                      }}
                    >
                      {assignee.label}
                      <span style={countSuffix(t, { fontSize: "0.68rem" })}>({assignee.patents.length})</span>
                    </h3>
                    {assignee.patents.map((patent) => (
                      <PatentCard
                        key={patent.patentNumber}
                        patent={patent}
                        groupedAssignee={assignee.isFallback ? "" : assignee.label}
                        theme={t}
                      />
                    ))}
                  </section>
                ))}
              </section>
            ))}
          </SidebarLayout>
        </>
      )}
    </StaticPageShell>
  );
}
