/**
 * Author page — /authors/:author
 *
 * Lists the unique source patents credited to one inventor. A two-button view
 * switch groups those patents by assignee or fellow inventor, with the shared
 * sticky sidebar providing in-page jumps to each group.
 */

import { Link, Navigate, useParams, useSearchParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import LinkListSidebar from "../components/content/LinkListSidebar.js";
import SidebarLayout from "../components/content/SidebarLayout.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import {
  authorPathForName,
  getAuthorBySlug,
  groupAuthorPatents,
  patentsForAuthor,
} from "../utils/catalog/authorCatalog.js";
import type { AuthorGroupMode, AuthorPatent } from "../utils/catalog/authorCatalog.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { breadcrumbJsonLd, collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { toggleBtn, toggleGroup } from "../utils/style/styles.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";
import { patentPartyGroupAnchorId } from "./lensIndex/groupAnchors.js";
import type { Theme } from "../types/theme.js";

interface PatentCardProps {
  patent: AuthorPatent;
  currentAuthor: string;
  theme: Theme;
}

function PatentCard({ patent, currentAuthor, theme: t }: PatentCardProps) {
  return (
    <article
      style={{
        background: t.panelBg,
        border: `1px solid ${t.panelBorder}`,
        borderRadius: 6,
        padding: "0.85rem",
        marginBottom: "0.75rem",
      }}
    >
      <h3 style={{ color: t.title, fontSize: "0.95rem", margin: "0 0 0.35rem" }}>
        {patent.patentNumber}
        {patent.patentYear !== undefined && (
          <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem", fontWeight: 400 }}>
            {patent.patentYear}
          </span>
        )}
      </h3>
      {patent.assignees.length > 0 && (
        <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0" }}>
          Assignee: {patent.assignees.join(", ")}
        </p>
      )}
      <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0.2rem 0 0.55rem" }}>
        Inventors:{" "}
        {patent.authors.map((name, index) => {
          const path = name === currentAuthor ? undefined : authorPathForName(name);
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
      <div style={{ borderTop: `1px solid ${t.panelDivider}`, paddingTop: "0.35rem" }}>
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

export default function AuthorPage() {
  const { author: authorSlug } = useParams<{ author: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();
  const author = authorSlug ? getAuthorBySlug(authorSlug) : undefined;

  if (!author) return <Navigate to="/authors" replace />;

  const patents = patentsForAuthor(author.name);
  const groupMode: AuthorGroupMode = searchParams.get("group") === "coauthor" ? "coauthor" : "assignee";
  const groups = groupAuthorPatents(patents, author.name, groupMode);
  const route = `/authors/${author.slug}`;
  const canonicalURL = `${SITE_URL}${route}`;
  const seoDescription = `Explore ${patents.length} optical ${patents.length === 1 ? "patent" : "patents"} credited to ${author.name}, with links to related interactive lens diagrams.`;
  const anchorRole = groupMode === "assignee" ? "assignee" : "inventor";

  const setGroupMode = (mode: AuthorGroupMode) => {
    setSearchParams(mode === "coauthor" ? { group: "coauthor" } : {}, { replace: true });
  };

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`${author.name} — Lens Patent Author | ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={canonicalURL}
        jsonLd={[
          collectionPageJsonLd({
            name: `${author.name} Patents`,
            description: seoDescription,
            url: canonicalURL,
            route,
          }),
          itemListJsonLd({
            name: `${author.name} Lens Patents`,
            url: canonicalURL,
            items: patents.flatMap((patent) =>
              patent.lenses.map((lens) => ({
                name: `${patent.patentNumber} — ${lens.name}`,
                url: `${SITE_URL}/lens/${lens.key}`,
              })),
            ),
          }),
          breadcrumbJsonLd([
            { name: "Home", url: SITE_URL },
            { name: "Authors", url: `${SITE_URL}/authors` },
            { name: author.name, url: canonicalURL },
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
        <Link to="/authors" style={{ color: t.descLinkColor, textDecoration: "none" }}>
          Authors
        </Link>
        <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>
        <span style={{ color: t.body }}>{author.name}</span>
      </PageNavBar>

      <main style={PAGE_BASE_STYLE}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 0.35rem" }}>{author.name}</h1>
        <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1rem" }}>
          {patents.length} related {patents.length === 1 ? "patent" : "patents"} across {author.lensKeys.length}{" "}
          interactive lens {author.lensKeys.length === 1 ? "diagram" : "diagrams"}.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <span style={{ color: t.label, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Group by
          </span>
          <div style={toggleGroup(t)}>
            <button
              type="button"
              aria-pressed={groupMode === "assignee"}
              onClick={() => setGroupMode("assignee")}
              style={toggleBtn(t, groupMode === "assignee")}
            >
              Assignee
            </button>
            <button
              type="button"
              aria-pressed={groupMode === "coauthor"}
              onClick={() => setGroupMode("coauthor")}
              style={toggleBtn(t, groupMode === "coauthor", { hasRightBorder: false })}
            >
              Co-authors
            </button>
          </div>
        </div>

        <SidebarLayout
          sidebar={
            <LinkListSidebar
              title={groupMode === "assignee" ? "Assignees" : "Co-authors"}
              ariaLabel={`${groupMode === "assignee" ? "Assignee" : "Co-author"} sections`}
              items={groups.map((group) => ({
                id: group.id,
                label: `${group.label} (${group.patents.length})`,
                to: `#${patentPartyGroupAnchorId(anchorRole, group.id)}`,
              }))}
              theme={t}
            />
          }
        >
          {groups.map((group) => {
            const coauthorPath =
              groupMode === "coauthor" && !group.isFallback ? authorPathForName(group.label) : undefined;
            return (
              <section
                key={group.id}
                id={patentPartyGroupAnchorId(anchorRole, group.id)}
                style={{ marginBottom: "1.75rem" }}
              >
                <h2
                  style={{
                    color: t.title,
                    fontSize: "1.05rem",
                    borderBottom: `1px solid ${t.panelBorder}`,
                    paddingBottom: "0.4rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {coauthorPath ? (
                    <Link to={coauthorPath} style={{ color: "inherit", textDecoration: "none" }}>
                      {group.label}
                    </Link>
                  ) : (
                    group.label
                  )}
                  <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                    ({group.patents.length})
                  </span>
                </h2>
                {group.patents.map((patent) => (
                  <PatentCard
                    key={`${group.id}-${patent.patentNumber}`}
                    patent={patent}
                    currentAuthor={author.name}
                    theme={t}
                  />
                ))}
              </section>
            );
          })}
        </SidebarLayout>
      </main>
    </div>
  );
}
