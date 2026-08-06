/**
 * Authors index page — /authors
 *
 * Lists every named inventor represented by visible patent-derived lens data,
 * linking to the generated patent aggregation page for each author.
 */

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import SEOHead from "../components/SEOHead.js";
import LensSelector from "../components/controls/LensSelector.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import { getAuthorBiography } from "../utils/catalog/authorBiographies.js";
import { AUTHORS } from "../utils/catalog/authorCatalog.js";
import {
  ALL_AUTHOR_ASSIGNEES,
  AUTHOR_ASSIGNEE_STRATA,
  AUTHOR_DIRECTORY_ENTRIES,
  UNASSIGNED_AUTHOR_COUNT,
  UNASSIGNED_AUTHORS,
  filterAuthorsByAssignee,
} from "../utils/catalog/authorAssignees.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { collectionPageJsonLd, itemListJsonLd } from "../utils/seo/structuredData.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { toggleBtn, toggleGroup } from "../utils/style/styles.js";
import {
  DEFAULT_AUTHOR_SORT,
  loadAuthorSortPreference,
  saveAuthorSortPreference,
  type AuthorSort,
} from "../utils/state/authorSortPreference.js";
import { catalogCollator } from "../utils/catalog/collation.js";

const AUTHOR_ASSIGNEE_FILTER_OPTIONS = [
  { key: ALL_AUTHOR_ASSIGNEES, label: `All companies and assignees (${AUTHORS.length} authors)` },
  ...AUTHOR_ASSIGNEE_STRATA.map((assignee) => ({
    key: assignee.slug,
    label: `${assignee.name} (${assignee.authorCount} ${assignee.authorCount === 1 ? "author" : "authors"} · ${assignee.patentCount} ${assignee.patentCount === 1 ? "patent" : "patents"})`,
  })),
  ...(UNASSIGNED_AUTHOR_COUNT > 0
    ? [{ key: UNASSIGNED_AUTHORS, label: `No named assignee (${UNASSIGNED_AUTHOR_COUNT} authors)` }]
    : []),
];

export default function AuthorsIndexPage() {
  const [sortBy, setSortBy] = useState<AuthorSort>(DEFAULT_AUTHOR_SORT);
  const [assigneeFilter, setAssigneeFilter] = useState(ALL_AUTHOR_ASSIGNEES);
  const seoDescription = `Browse ${AUTHORS.length} named optical patent authors and open their related patents and interactive lens diagrams.`;
  const filteredAuthors = useMemo(
    () => filterAuthorsByAssignee(AUTHOR_DIRECTORY_ENTRIES, assigneeFilter),
    [assigneeFilter],
  );
  const sortedAuthors = useMemo(
    () =>
      [...filteredAuthors].sort((left, right) =>
        sortBy === "patents"
          ? right.author.patentCount - left.author.patentCount ||
            catalogCollator.compare(left.author.name, right.author.name)
          : catalogCollator.compare(left.author.name, right.author.name),
      ),
    [filteredAuthors, sortBy],
  );
  const selectedAssignee = AUTHOR_ASSIGNEE_STRATA.find((assignee) => assignee.slug === assigneeFilter);

  useEffect(() => {
    setSortBy(loadAuthorSortPreference());
  }, []);

  const selectSort = (sort: AuthorSort) => {
    setSortBy(sort);
    saveAuthorSortPreference(sort);
  };

  return (
    <StaticPageShell
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Authors" }]}
      seo={
        <SEOHead
          title={`Lens Patent Authors — ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={`${SITE_URL}/authors`}
          jsonLd={[
            collectionPageJsonLd({
              name: "Lens Patent Authors",
              description: seoDescription,
              url: `${SITE_URL}/authors`,
              route: "/authors",
            }),
            itemListJsonLd({
              name: "Lens Patent Authors",
              url: `${SITE_URL}/authors`,
              items: AUTHORS.map((author) => ({
                name: author.name,
                url: `${SITE_URL}/authors/${author.slug}`,
              })),
            }),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Lens Patent Authors</h1>
          <p style={{ color: t.muted, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
            {AUTHORS.length} named inventors represented in the Surface &amp; Stop catalog. Explore how they connect
            through shared patents in the{" "}
            <Link to="/relationships/" style={{ color: t.descLinkColor, textDecoration: "none" }}>
              patent relationship map
            </Link>
            . Profiles with a curated biography are labeled below.
          </p>

          <div
            role="group"
            aria-label="Author directory controls"
            style={{ display: "flex", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "0.65rem" }}
          >
            <div>
              <div style={{ color: t.label, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Sort by
              </div>
              <div role="group" aria-label="Sort authors" style={{ ...toggleGroup(t), marginTop: "0.4rem" }}>
                {(
                  [
                    { value: "alphabetical", label: "Alphabetical" },
                    { value: "patents", label: "Patent count" },
                  ] as const
                ).map((option, index) => {
                  const selected = sortBy === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectSort(option.value)}
                      style={toggleBtn(t, selected, { hasRightBorder: index === 0, padding: "0.45rem 0.7rem" })}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <label
              htmlFor="author-assignee-filter"
              style={{
                color: t.label,
                flex: "0 1 360px",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                minWidth: 0,
                textTransform: "uppercase",
              }}
            >
              Company / assignee
              <LensSelector
                id="author-assignee-filter"
                ariaLabel="Company / assignee"
                theme={t}
                isWide
                value={assigneeFilter}
                options={AUTHOR_ASSIGNEE_FILTER_OPTIONS}
                onChange={setAssigneeFilter}
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  marginTop: "0.4rem",
                  minHeight: 32,
                  width: "100%",
                }}
              />
            </label>
          </div>

          <p role="status" aria-live="polite" style={{ color: t.muted, fontSize: "0.72rem", margin: "0 0 1.25rem" }}>
            {assigneeFilter === ALL_AUTHOR_ASSIGNEES
              ? `${sortedAuthors.length} authors across ${AUTHOR_ASSIGNEE_STRATA.length} named assignees.`
              : assigneeFilter === UNASSIGNED_AUTHORS
                ? `${sortedAuthors.length} of ${AUTHORS.length} authors have no named assignee.`
                : `${sortedAuthors.length} of ${AUTHORS.length} authors shown for ${selectedAssignee?.name ?? "the selected assignee"}.`}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem" }}>
            {sortedAuthors.map(({ author, assignees }) => (
              <div
                key={author.slug}
                style={{
                  background: t.panelBg,
                  border: `1px solid ${t.panelBorder}`,
                  borderRadius: 6,
                  padding: "0.8rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.45rem" }}>
                  <Link
                    to={`/authors/${author.slug}/`}
                    style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}
                  >
                    {author.name}
                  </Link>
                  {getAuthorBiography(author.name) && (
                    <span
                      style={{
                        background: t.toggleActiveBg,
                        border: `1px solid ${t.toggleActiveBorder}`,
                        borderRadius: 3,
                        color: t.toggleActiveText,
                        fontSize: "0.58rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        padding: "1px 6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Biography
                    </span>
                  )}
                </div>
                <div style={{ color: t.label, fontSize: "0.7rem", marginTop: "0.3rem" }}>
                  {author.patentCount} {author.patentCount === 1 ? "patent" : "patents"} · {author.lensKeys.length}{" "}
                  {author.lensKeys.length === 1 ? "lens diagram" : "lens diagrams"}
                </div>
                <div style={{ color: t.muted, fontSize: "0.68rem", lineHeight: 1.5, marginTop: "0.35rem" }}>
                  {assignees.length === 0 ? (
                    "No named patent assignee"
                  ) : (
                    <>
                      {assignees.length === 1 ? "Assignee: " : "Assignees: "}
                      {assignees.map((assignee, index) => (
                        <span key={assignee.slug}>
                          {index > 0 && " · "}
                          <Link
                            to={`/relationships/#focus=assignee:${assignee.slug}`}
                            style={{ color: t.descLinkColor, textDecoration: "none" }}
                          >
                            {assignee.name}
                          </Link>
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </StaticPageShell>
  );
}
