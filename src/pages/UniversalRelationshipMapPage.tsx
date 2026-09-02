/**
 * Universal Relationship Map page — /relationships/universal
 *
 * Presents every visible patent, inventor, assignee, and curated corporate
 * relationship in one zoomable SVG. The ordinary /relationships page remains
 * the focused ego-map workflow; party links from this page hand off to it.
 */

import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import ClientOnly from "../components/ClientOnly.js";
import PanelErrorBoundary from "../components/errors/PanelErrorBoundary.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import PatentDetailCard from "../components/relationshipMap/PatentDetailCard.js";
import UniversalEntityDetailCard from "../components/relationshipMap/UniversalEntityDetailCard.js";
import UniversalRelationshipMap from "../components/relationshipMap/UniversalRelationshipMap.js";
import SEOHead from "../components/SEOHead.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { buildUniversalRelationshipGraph } from "../utils/catalog/universalRelationshipGraph.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { canonicalPagePath, canonicalPageUrl } from "../utils/seo/siteUrls.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { panelCard } from "../utils/style/styles.js";

const UNIVERSAL_GRAPH = buildUniversalRelationshipGraph();

export default function UniversalRelationshipMapPage() {
  const navigate = useNavigate();
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const selectedNode = useMemo(
    () => UNIVERSAL_GRAPH.nodes.find((node) => node.id === selectedNodeId),
    [selectedNodeId],
  );
  const canonicalURL = canonicalPageUrl("/relationships/universal");
  const seoDescription = `Explore the complete ${SITE_NAME} patent network, including every represented inventor, assignee, source patent, and sourced corporate lineage connection.`;

  return (
    <StaticPageShell
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Relationship map", to: "/relationships" },
        { label: "Universal map" },
      ]}
      seo={
        <SEOHead
          title={`Universal Patent Relationship Map — ${SITE_NAME}`}
          description={seoDescription}
          canonicalURL={canonicalURL}
          jsonLd={[
            collectionPageJsonLd({
              name: "Universal Patent Relationship Map",
              description: seoDescription,
              url: canonicalURL,
              route: "/relationships/universal",
            }),
            breadcrumbJsonLd([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Relationship map", url: canonicalPageUrl("/relationships") },
              { name: "Universal map", url: canonicalURL },
            ]),
          ]}
        />
      }
    >
      {({ theme: t }) => (
        <>
          <h1 style={H1_STYLE}>Universal Relationship Map</h1>
          <p style={{ color: t.muted, fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 1rem", maxWidth: "52rem" }}>
            This map draws the entire catalog at once, organized into corporate-family and major-assignee neighborhoods.
            Patents connect their inventors and assignees, while dated successor, acquisition, subsidiary, and
            corporate-family records reconnect historical company names. Those corporate links appear only here; the
            standard relationship map remains strictly patent-focused. Neighborhood placement prioritizes corporate
            connections, then shared patents, then neighborhood size.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "0.55rem",
              marginBottom: "1rem",
            }}
          >
            {[
              [UNIVERSAL_GRAPH.stats.patents, "patents"],
              [UNIVERSAL_GRAPH.stats.authors, "inventors"],
              [UNIVERSAL_GRAPH.stats.assignees, "assignees"],
              [UNIVERSAL_GRAPH.stats.corporateRelationships, "corporate links"],
              [UNIVERSAL_GRAPH.stats.components, "connected networks"],
            ].map(([value, label]) => (
              <div key={label} style={{ ...panelCard(t), padding: "0.65rem 0.75rem" }}>
                <strong style={{ color: t.title, display: "block", fontSize: "1rem" }}>{value}</strong>
                <span style={{ color: t.muted, fontSize: "0.68rem" }}>{label}</span>
              </div>
            ))}
          </div>

          <p style={{ color: t.label, fontSize: "0.72rem", lineHeight: 1.5, margin: "0 0 0.8rem" }}>
            Soft halos group hub neighborhoods; dashed boxes mark disconnected networks. Pinch or scroll to zoom, drag
            to pan, and select any node for details. Labels appear as you zoom in.
          </p>

          <ClientOnly
            fallback={
              <div style={{ ...panelCard(t), padding: "2rem", color: t.muted, textAlign: "center" }}>
                Preparing the universal relationship map…
              </div>
            }
          >
            <PanelErrorBoundary lensKey="universal-relationship-map">
              <UniversalRelationshipMap
                graph={UNIVERSAL_GRAPH}
                theme={t}
                selectedNodeId={selectedNodeId}
                onSelectNode={setSelectedNodeId}
              />

              {selectedNode?.kind === "patent" && (
                <PatentDetailCard
                  patent={selectedNode.patent}
                  theme={t}
                  onFocusParty={(ref) =>
                    void navigate(canonicalPagePath(`/relationships#focus=${ref.role}:${ref.slug}`))
                  }
                  onClose={() => setSelectedNodeId(null)}
                />
              )}

              {selectedNode && selectedNode.kind !== "patent" && (
                <UniversalEntityDetailCard
                  graph={UNIVERSAL_GRAPH}
                  node={selectedNode}
                  theme={t}
                  onClose={() => setSelectedNodeId(null)}
                />
              )}
            </PanelErrorBoundary>
          </ClientOnly>
        </>
      )}
    </StaticPageShell>
  );
}
