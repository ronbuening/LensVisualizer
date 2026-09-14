/**
 * Universal Relationship Map page — /relationships/universal
 *
 * Presents every visible patent, inventor, assignee, and curated corporate
 * relationship in one zoomable SVG. The ordinary /relationships page remains
 * the focused ego-map workflow, available through explicit detail-card links.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router";
import ClientOnly from "../components/ClientOnly.js";
import PanelErrorBoundary from "../components/errors/PanelErrorBoundary.js";
import StaticPageShell from "../components/layout/StaticPageShell.js";
import PatentDetailCard from "../components/relationshipMap/PatentDetailCard.js";
import UniversalEntityDetailCard from "../components/relationshipMap/UniversalEntityDetailCard.js";
import UniversalRelationshipMap from "../components/relationshipMap/UniversalRelationshipMap.js";
import UniversalMapSearch from "../components/relationshipMap/UniversalMapSearch.js";
import SEOHead from "../components/SEOHead.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { buildUniversalRelationshipGraph } from "../utils/catalog/universalRelationshipGraph.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { canonicalPageUrl } from "../utils/seo/siteUrls.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { panelCard } from "../utils/style/styles.js";
import { universalMapHash, universalMapNodeFromHash } from "../utils/state/universalMapUrl.js";

const UNIVERSAL_GRAPH = buildUniversalRelationshipGraph();
const UNIVERSAL_NODE_IDS = new Set(UNIVERSAL_GRAPH.nodes.map((node) => node.id));

export default function UniversalRelationshipMapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const selectedNodeId = mounted ? universalMapNodeFromHash(location.hash, UNIVERSAL_NODE_IDS) : null;
  const [focusRequest, setFocusRequest] = useState<{ nodeId: string; requestId: number }>();
  const [viewResetRequest, setViewResetRequest] = useState(0);
  const focusSequence = useRef(0);
  const pendingSelection = useRef<{ hash: string; center: boolean; keyboard: boolean } | undefined>(undefined);
  const handledLocationKey = useRef<string | undefined>(undefined);
  const detailsHeadingRef = useRef<HTMLHeadingElement>(null);
  const focusDetails = useRef(false);
  const requestNodeFocus = useCallback((nodeId: string) => {
    setFocusRequest({ nodeId, requestId: ++focusSequence.current });
  }, []);

  const selectNode = (nodeId: string | null, center = false, keyboard = false) => {
    if (nodeId !== null && !UNIVERSAL_NODE_IDS.has(nodeId)) return;
    const hash = universalMapHash(location.hash, nodeId);
    if (
      hash !== location.hash &&
      (nodeId === null || nodeId !== universalMapNodeFromHash(location.hash, UNIVERSAL_NODE_IDS))
    ) {
      pendingSelection.current = { hash, center, keyboard };
      void navigate({ pathname: location.pathname, search: location.search, hash }, { preventScrollReset: true });
    } else {
      pendingSelection.current = undefined;
      focusDetails.current = keyboard;
      if (center && nodeId) requestNodeFocus(nodeId);
    }
  };
  const focusNode = (nodeId: string, keyboard = false) => selectNode(nodeId, true, keyboard);

  // Selection derives from the committed URL: Back can cancel a concurrent
  // navigation before it renders. Only consume its camera intent if it commits.
  useEffect(() => {
    if (!mounted || handledLocationKey.current === location.key) return;
    handledLocationKey.current = location.key;
    const local =
      navigationType !== "POP" && pendingSelection.current?.hash === location.hash
        ? pendingSelection.current
        : undefined;
    pendingSelection.current = undefined;
    const nodeId = universalMapNodeFromHash(location.hash, UNIVERSAL_NODE_IDS);
    focusDetails.current = local?.keyboard ?? false;
    if (nodeId && (!local || local.center)) requestNodeFocus(nodeId);
    else {
      setFocusRequest(undefined);
      if (!local) setViewResetRequest((previous) => previous + 1);
    }
  }, [mounted, location.hash, location.key, navigationType, requestNodeFocus]);
  useEffect(() => {
    if (!focusDetails.current) return;
    detailsHeadingRef.current?.focus({ preventScroll: true });
    focusDetails.current = false;
  }, [selectedNodeId, focusRequest]);
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
              <UniversalMapSearch graph={UNIVERSAL_GRAPH} theme={t} onSelectNode={focusNode} />
              <UniversalRelationshipMap
                graph={UNIVERSAL_GRAPH}
                theme={t}
                selectedNodeId={selectedNodeId}
                onSelectNode={(nodeId) => selectNode(nodeId)}
                focusRequest={focusRequest}
                viewResetRequest={viewResetRequest}
              />

              {selectedNode?.kind === "patent" && (
                <PatentDetailCard
                  patent={selectedNode.patent}
                  theme={t}
                  onFocusParty={(ref, keyboard) => focusNode(`${ref.role}:${ref.slug}`, keyboard)}
                  onClose={() => selectNode(null)}
                  headingRef={detailsHeadingRef}
                />
              )}

              {selectedNode && selectedNode.kind !== "patent" && (
                <UniversalEntityDetailCard
                  graph={UNIVERSAL_GRAPH}
                  node={selectedNode}
                  theme={t}
                  onClose={() => selectNode(null)}
                  onSelectNode={focusNode}
                  headingRef={detailsHeadingRef}
                />
              )}
            </PanelErrorBoundary>
          </ClientOnly>
        </>
      )}
    </StaticPageShell>
  );
}
