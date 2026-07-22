/**
 * Patent Relationship Map page — /relationships
 *
 * Draws a two-ring "ego graph" around a focus inventor or assignee chosen via
 * the `?focus=<role>:<slug>` query param. With no focus it renders an intro,
 * entity picker, and "most-connected" link columns — this no-focus state is the
 * prerendered SEO content. Query-dependent content is gated behind a mounted
 * flag so the server render (no query) and the first client render agree, then
 * the real focus appears one paint after hydration (same idea as ClientOnly).
 * Only `focus` is URL state; the selected patent is component state.
 */

import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import SEOHead from "../components/SEOHead.js";
import PageNavBar from "../components/layout/PageNavBar.js";
import RelationshipMap from "../components/relationshipMap/RelationshipMap.js";
import RelationshipEntityPicker from "../components/relationshipMap/RelationshipEntityPicker.js";
import PatentDetailCard from "../components/relationshipMap/PatentDetailCard.js";
import { AUTHORS } from "../utils/catalog/authorCatalog.js";
import { ASSIGNEES } from "../utils/catalog/assigneeCatalog.js";
import { buildRelationshipGraph, resolveFocusParam, type PartyRef } from "../utils/catalog/relationshipGraph.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { PAGE_BASE_STYLE } from "../utils/style/pageStyles.js";
import { usePageThemeToggle } from "../utils/theme/usePageThemeToggle.js";

const TOP_COUNT = 12;

/** Top-N entities of an index by patent count, then name. */
function topByPatents<T extends { name: string; slug: string; patentCount: number }>(index: T[]): T[] {
  return [...index]
    .sort((left, right) => right.patentCount - left.patentCount || left.name.localeCompare(right.name))
    .slice(0, TOP_COUNT);
}

export default function RelationshipMapPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme: t, themeMode, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [selectedPatentId, setSelectedPatentId] = useState<string | null>(null);

  /* Server render and first client render agree (no focus); the real focus
   * appears one paint after hydration. Same mechanism as ClientOnly.tsx. */
  const focus = mounted ? resolveFocusParam(searchParams.get("focus")) : undefined;
  const graph = useMemo(() => (focus ? buildRelationshipGraph(focus) : undefined), [focus]);

  const setFocusParty = (ref: PartyRef) => {
    setSelectedPatentId(null);
    setSearchParams({ focus: `${ref.role}:${ref.slug}` });
  };

  const topAuthors = useMemo(() => topByPatents(AUTHORS), []);
  const topAssignees = useMemo(() => topByPatents(ASSIGNEES), []);

  const canonicalURL = `${SITE_URL}/relationships`;
  const seoDescription = `Explore how ${AUTHORS.length} optical inventors and ${ASSIGNEES.length} assignees connect through shared lens patents in an interactive relationship map.`;

  const selectedPatent = graph && selectedPatentId ? graph.patents.find((p) => p.id === selectedPatentId) : undefined;

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <SEOHead
        title={`Patent Relationship Map — ${SITE_NAME}`}
        description={seoDescription}
        canonicalURL={canonicalURL}
        jsonLd={[
          collectionPageJsonLd({
            name: "Patent Relationship Map",
            description: seoDescription,
            url: canonicalURL,
            route: "/relationships",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Relationship map", url: canonicalURL },
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
        <span style={{ color: t.body }}>Relationship map</span>
      </PageNavBar>

      <main style={PAGE_BASE_STYLE}>
        {graph && focus ? (
          <>
            <div style={{ margin: "1.25rem 0 1rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 0.35rem" }}>
                {focus.name}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "0.12rem 0.4rem",
                    borderRadius: 3,
                    border: `1px solid ${focus.role === "assignee" ? t.rayCool : t.rayWarm}`,
                    color: t.muted,
                    marginLeft: "0.5rem",
                    verticalAlign: "middle",
                  }}
                >
                  {focus.role === "assignee" ? "assignee" : "inventor"}
                </span>
              </h2>
              {graph.center.hasPage && (
                <Link
                  to={`/authors/${focus.slug}`}
                  style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.75rem" }}
                >
                  View patent list page →
                </Link>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <RelationshipEntityPicker theme={t} onPick={setFocusParty} compact />
            </div>

            <RelationshipMap
              key={graph.center.id}
              graph={graph}
              theme={t}
              selectedPatentId={selectedPatentId}
              onSelectPatent={setSelectedPatentId}
              onFocusParty={setFocusParty}
            />

            {selectedPatent && (
              <PatentDetailCard
                patent={selectedPatent}
                centerRef={focus}
                theme={t}
                onFocusParty={setFocusParty}
                onClose={() => setSelectedPatentId(null)}
              />
            )}
          </>
        ) : (
          <>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 0.5rem" }}>Patent Relationship Map</h1>
            <p
              style={{
                color: t.muted,
                fontSize: "0.85rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                maxWidth: "48rem",
              }}
            >
              Pick an inventor or assignee to see the patents credited to them and every other inventor and assignee
              named on those patents. Click an outer node to recenter the map on that party and keep exploring; click a
              patent to open its details and jump to the interactive lens diagrams derived from it.
            </p>

            <RelationshipEntityPicker theme={t} onPick={setFocusParty} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <section>
                <h2 style={{ fontSize: "0.95rem", fontWeight: 600, margin: "0 0 0.6rem" }}>Most-connected inventors</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {topAuthors.map((author) => (
                    <li key={author.slug} style={{ marginBottom: "0.35rem" }}>
                      <Link
                        to={`/relationships?focus=author:${author.slug}`}
                        style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.82rem" }}
                      >
                        {author.name}
                      </Link>
                      <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.4rem" }}>
                        {author.patentCount} {author.patentCount === 1 ? "patent" : "patents"}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: "0.95rem", fontWeight: 600, margin: "0 0 0.6rem" }}>Most-connected assignees</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {topAssignees.map((assignee) => (
                    <li key={assignee.slug} style={{ marginBottom: "0.35rem" }}>
                      <Link
                        to={`/relationships?focus=assignee:${assignee.slug}`}
                        style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.82rem" }}
                      >
                        {assignee.name}
                      </Link>
                      <span style={{ color: t.label, fontSize: "0.7rem", marginLeft: "0.4rem" }}>
                        {assignee.patentCount} {assignee.patentCount === 1 ? "patent" : "patents"}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
