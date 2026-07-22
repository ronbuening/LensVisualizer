/**
 * Patents index page — /patents
 *
 * Lists each unique source patent represented by visible lens diagrams. Patent
 * numbers open centered relationship views; credited parties and every derived
 * diagram remain directly navigable from the index card.
 */

import { useMemo, useState } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import { getAssigneeByName } from "../utils/catalog/assigneeCatalog.js";
import { authorPathForName } from "../utils/catalog/authorCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { PATENTS } from "../utils/catalog/patentCatalog.js";
import { relationshipPathForFocus } from "../utils/catalog/relationshipGraph.js";
import { breadcrumbJsonLd, collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { toggleBtn, toggleGroup } from "../utils/style/styles.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import type { Theme } from "../types/theme.js";
import type { PartyRole } from "../utils/catalog/relationshipGraph.js";

type PatentSort = "number" | "year";

interface PartyLinksProps {
  names: string[];
  role: PartyRole;
  theme: Theme;
}

function PartyLinks({ names, role, theme: t }: PartyLinksProps) {
  return names.map((name, index) => {
    const authorPath = role === "author" ? authorPathForName(name) : undefined;
    const assignee = role === "assignee" ? getAssigneeByName(name) : undefined;
    const path =
      authorPath ??
      (assignee ? relationshipPathForFocus({ role: "assignee", name: assignee.name, slug: assignee.slug }) : undefined);
    return (
      <span key={`${role}:${name}`}>
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
  });
}

export default function PatentsIndexPage() {
  const [sortBy, setSortBy] = useState<PatentSort>("number");
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const sortedPatents = useMemo(
    () =>
      [...PATENTS].sort((left, right) =>
        sortBy === "year"
          ? (right.patentYear ?? Number.NEGATIVE_INFINITY) - (left.patentYear ?? Number.NEGATIVE_INFINITY) ||
            left.patentNumber.localeCompare(right.patentNumber)
          : left.patentNumber.localeCompare(right.patentNumber),
      ),
    [sortBy],
  );
  const diagramCount = PATENTS.reduce((total, patent) => total + patent.lenses.length, 0);
  const canonicalURL = `${SITE_URL}/patents`;
  const seoDescription = `Browse ${PATENTS.length} optical patents with credited inventors, assignees, and links to ${diagramCount} interactive lens diagrams.`;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Lens Patent Index — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={canonicalURL}
        jsonLd={[
          collectionPageJsonLd({
            name: "Lens Patent Index",
            description: seoDescription,
            url: canonicalURL,
            route: "/patents",
          }),
          itemListJsonLd({
            name: "Lens Patents",
            url: canonicalURL,
            items: PATENTS.map((patent) => ({
              name: patent.patentNumber,
              url: `${SITE_URL}${relationshipPathForFocus({
                role: "patent",
                patentNumber: patent.patentNumber,
              })}`,
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", url: SITE_URL },
            { name: "Patents", url: canonicalURL },
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
        <span style={{ color: t.body }}>Patents</span>
      </PageNavBar>

      <main style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 0.5rem" }}>Lens Patent Index</h1>
        <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
          {PATENTS.length} source patents represented by {diagramCount} interactive lens diagrams. Open a patent in the{" "}
          <Link to="/relationships" style={{ color: t.descLinkColor, textDecoration: "none" }}>
            relationship map
          </Link>{" "}
          to explore its inventor and assignee connections.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <span style={{ color: t.label, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Sort by
          </span>
          <div role="group" aria-label="Sort patents" style={toggleGroup(t)}>
            {(
              [
                { value: "number", label: "Patent number" },
                { value: "year", label: "Newest first" },
              ] as const
            ).map((option, index) => {
              const selected = sortBy === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSortBy(option.value)}
                  style={toggleBtn(t, selected, { hasRightBorder: index === 0, padding: "0.45rem 0.7rem" })}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "0.75rem" }}>
          {sortedPatents.map((patent) => {
            const relationshipPath = relationshipPathForFocus({
              role: "patent",
              patentNumber: patent.patentNumber,
            });
            return (
              <article
                key={patent.patentNumber}
                style={{
                  background: t.panelBg,
                  border: `1px solid ${t.panelBorder}`,
                  borderRadius: 6,
                  padding: "0.85rem",
                }}
              >
                <h2 style={{ fontSize: "0.95rem", margin: "0 0 0.35rem" }}>
                  <Link
                    to={relationshipPath}
                    style={{ color: t.descLinkColor, textDecoration: "none", fontWeight: 600 }}
                  >
                    {patent.patentNumber}
                  </Link>
                  {patent.patentYear !== undefined && (
                    <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                      {patent.patentYear}
                    </span>
                  )}
                </h2>

                {patent.authors.length > 0 && (
                  <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0" }}>
                    Inventors: <PartyLinks names={patent.authors} role="author" theme={t} />
                  </p>
                )}
                {patent.assignees.length > 0 && (
                  <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0 0.55rem" }}>
                    Assignees: <PartyLinks names={patent.assignees} role="assignee" theme={t} />
                  </p>
                )}

                <div style={{ borderTop: `1px solid ${t.panelDivider}`, paddingTop: "0.35rem" }}>
                  {patent.lenses.map((lens) => (
                    <Link
                      key={lens.key}
                      to={`/lens/${lens.key}`}
                      style={{ ...LENS_LINK_BASE_STYLE, color: t.descLinkColor }}
                    >
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
          })}
        </div>
      </main>
    </div>
  );
}
