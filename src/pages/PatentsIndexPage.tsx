/**
 * Patents index page — /patents
 *
 * Lists every unique source patent represented by visible lens data, grouped
 * first by publication country/jurisdiction and then by named assignee.
 */

import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import type { Theme } from "../types/theme.js";
import { authorPathForName } from "../utils/catalog/authorCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import {
  PATENTS,
  PATENT_ASSIGNEE_FALLBACK,
  PATENT_COUNTRY_GROUPS,
  type PatentRecord,
} from "../utils/catalog/patentCatalog.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";

interface PatentCardProps {
  patent: PatentRecord;
  groupedAssignee: string;
  theme: Theme;
}

const countryAnchorId = (code: string): string => `patent-country-${code.toLowerCase()}`;

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
        {patent.patentNumber}
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
          Inventors:{" "}
          {patent.authors.map((name, index) => {
            const path = authorPathForName(name);
            return (
              <span key={name}>
                {index > 0 && ", "}
                {path ? (
                  <Link to={path} style={{ color: t.descLinkColor, textDecoration: "none" }}>
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </span>
            );
          })}
        </p>
      )}

      <div style={{ paddingTop: "0.15rem" }}>
        {patent.lenses.map((lens) => (
          <Link key={lens.key} to={`/lens/${lens.key}`} style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}>
            {lens.name}
            {lens.specs?.length ? (
              <span style={{ color: t.label, fontSize: "0.68rem", marginLeft: "0.5rem" }}>
                — {lens.specs.slice(0, 2).join(", ")}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </article>
  );
}

export default function PatentsIndexPage() {
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const seoDescription = `Browse ${PATENTS.length} optical patents by publication country and assignee, with links to their interactive lens diagrams.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
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
        <span style={{ color: t.body }}>Patents</span>
      </PageNavBar>

      <main style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 0.5rem" }}>
          Lens Patents by Country and Assignee
        </h1>
        <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
          {PATENTS.length} unique source patents represented in the Surface &amp; Stop catalog. Country identifies the
          publication authority at the start of each patent number; WO publications appear under International (WIPO).
        </p>
        <p style={{ color: t.label, fontSize: "0.7rem", lineHeight: 1.5, margin: "0 0 1.5rem" }}>
          Jointly assigned patents appear in each named assignee section. Patents without a published assignee are
          collected under “{PATENT_ASSIGNEE_FALLBACK}.”
        </p>

        <SidebarLayout
          sidebar={
            <LinkListSidebar
              title="Countries"
              ariaLabel="Patent country sections"
              items={PATENT_COUNTRY_GROUPS.map((country) => ({
                id: country.jurisdiction.code,
                label: `${country.jurisdiction.label} (${country.patentCount})`,
                to: `#${countryAnchorId(country.jurisdiction.code)}`,
              }))}
              theme={t}
            />
          }
        >
          {PATENT_COUNTRY_GROUPS.map((country) => (
            <section
              key={country.jurisdiction.code}
              id={countryAnchorId(country.jurisdiction.code)}
              style={{ marginBottom: "2.25rem" }}
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
                  {country.jurisdiction.code} · {country.patentCount} {country.patentCount === 1 ? "patent" : "patents"}
                </span>
              </h2>

              {country.assignees.map((assignee) => (
                <section
                  key={assignee.id}
                  style={{
                    background: t.panelBg,
                    border: `1px solid ${t.panelBorder}`,
                    borderRadius: 6,
                    marginBottom: "1rem",
                    overflow: "hidden",
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
                    <span style={{ color: t.label, fontSize: "0.68rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                      ({assignee.patents.length})
                    </span>
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
      </main>
    </div>
  );
}
