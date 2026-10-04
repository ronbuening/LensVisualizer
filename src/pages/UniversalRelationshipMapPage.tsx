/**
 * Universal Relationship Map page — /relationships/universal
 *
 * Presents every visible patent, inventor, assignee, and curated corporate
 * relationship through Explore, Full map, and Research. The /relationships page remains
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
import UniversalMapExplore from "../components/relationshipMap/UniversalMapExplore.js";
import UniversalMapResearch from "../components/relationshipMap/UniversalMapResearch.js";
import { layoutUniversalRelationshipGraph } from "../components/relationshipMap/universalLayout.js";
import { mapButton, mapRow } from "../components/relationshipMap/universalMapStyles.js";
import {
  findUniversalPaths,
  UNIVERSAL_EDGE_KINDS,
  UNIVERSAL_RELATION_GROUPS,
} from "../utils/catalog/universalRelationshipQueries.js";
import type { UniversalMapState, UniversalMapView } from "../types/universalMap.js";
import useMediaQuery from "../utils/useMediaQuery.js";
import { ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS } from "../utils/featureFlags.js";
import SEOHead from "../components/SEOHead.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { buildUniversalRelationshipGraph } from "../utils/catalog/universalRelationshipGraph.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { canonicalPageUrl } from "../utils/seo/siteUrls.js";
import { H1_STYLE } from "../utils/style/pageStyles.js";
import { panelCard } from "../utils/style/styles.js";
import {
  universalMapStateHash,
  universalMapStateFromHash,
  universalMapNodeFromHash,
} from "../utils/state/universalMapUrl.js";

const UNIVERSAL_GRAPH = buildUniversalRelationshipGraph();
const UNIVERSAL_NODE_IDS = new Set(UNIVERSAL_GRAPH.nodes.map((node) => node.id));
const UNIVERSAL_LAYOUT = layoutUniversalRelationshipGraph(UNIVERSAL_GRAPH);
const UNIVERSAL_NEIGHBORHOOD_IDS = new Set(UNIVERSAL_LAYOUT.clusters.map((cluster) => cluster.id));
const MAP_VIEWS: { id: UniversalMapView; label: string }[] = [
  { id: "full", label: "Full map" },
  { id: "explore", label: "Explore" },
  { id: "research", label: "Research" },
];

export default function UniversalRelationshipMapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const [mounted, setMounted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => setMounted(true), []);
  const mapState = useMemo(
    () => universalMapStateFromHash(mounted ? location.hash : "", UNIVERSAL_NODE_IDS, UNIVERSAL_NEIGHBORHOOD_IDS),
    [mounted, location.hash],
  );
  const selectedNodeId = mapState.nodeId;
  const allRelationships = mapState.edgeKinds.length === UNIVERSAL_EDGE_KINDS.length;
  // Disabled views cannot be exposed by a saved fragment; keep the fragment intact for re-enabling.
  const view = ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS ? mapState.view : "full";
  const connectionPaths = useMemo(
    () =>
      ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS && mapState.fromId && mapState.toId
        ? findUniversalPaths(UNIVERSAL_GRAPH, mapState.fromId, mapState.toId, mapState.edgeKinds)
        : [],
    [mapState.fromId, mapState.toId, mapState.edgeKinds],
  );
  const sideDetails = useMediaQuery("(min-width: 1100px)", { ssrDefault: false, clientOnly: true });
  const lastFullSelection = useRef<string | null>(null);
  useEffect(() => {
    if (view === "full") lastFullSelection.current = selectedNodeId;
  }, [view, selectedNodeId]);
  const [focusRequest, setFocusRequest] = useState<{ nodeId: string; requestId: number }>();
  const [viewResetRequest, setViewResetRequest] = useState(0);
  const focusSequence = useRef(0);
  const pendingSelection = useRef<{ hash: string; center: boolean; keyboard: boolean } | undefined>(undefined);
  const handledLocationKey = useRef<string | undefined>(undefined);
  const committedNode = useRef<string | null | undefined>(undefined);
  const detailsHeadingRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const fullMapRef = useRef<HTMLDivElement>(null);
  const focusDetails = useRef(false);
  const requestNodeFocus = useCallback((nodeId: string) => {
    setFocusRequest({ nodeId, requestId: ++focusSequence.current });
  }, []);

  const updateMap = (patch: Partial<UniversalMapState>, center = false, keyboard = false) => {
    const nodeId = patch.nodeId === undefined ? selectedNodeId : patch.nodeId;
    if (nodeId !== null && !UNIVERSAL_NODE_IDS.has(nodeId)) return;
    const hash = universalMapStateHash(location.hash, patch);
    if (hash !== location.hash) {
      pendingSelection.current = { hash, center, keyboard };
      void navigate({ pathname: location.pathname, search: location.search, hash }, { preventScrollReset: true });
    } else {
      pendingSelection.current = undefined;
      focusDetails.current = keyboard;
      if (center && nodeId) requestNodeFocus(nodeId);
    }
  };
  const selectNode = (nodeId: string | null, center = false, keyboard = false) =>
    updateMap({ nodeId }, center, keyboard);
  const focusNode = (nodeId: string, keyboard = false) => selectNode(nodeId, true, keyboard);
  const changeView = (nextView: UniversalMapView) =>
    updateMap(
      {
        view: nextView,
        ...(nextView === "research" && view !== "research" && selectedNodeId ? { fromId: selectedNodeId } : {}),
      },
      nextView === "full" && selectedNodeId !== lastFullSelection.current,
    );

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
    const nodeChanged = committedNode.current !== nodeId;
    committedNode.current = nodeId;
    focusDetails.current = local?.keyboard ?? false;
    if (nodeId && (local ? local.center : nodeChanged)) requestNodeFocus(nodeId);
    else {
      setFocusRequest(undefined);
      if (!local && nodeChanged && !nodeId) setViewResetRequest((previous) => previous + 1);
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
      maxWidth={1600}
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
          <p style={{ color: t.label, fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 16px" }}>
            {ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS
              ? "Explore neighborhoods, inspect the complete map, or trace the evidence connecting two entities."
              : "Start with a name or patent. Follow the connections between inventors and companies."}
          </p>

          <ClientOnly
            fallback={
              <div style={{ ...panelCard(t), padding: "2rem", color: t.muted, textAlign: "center" }}>
                Preparing the universal relationship map…
              </div>
            }
          >
            <PanelErrorBoundary lensKey="universal-relationship-map">
              <div style={{ ...mapRow, alignItems: "stretch", marginBottom: 12 }}>
                <div style={{ flex: "1 1 320px", minWidth: 0 }}>
                  <UniversalMapSearch graph={UNIVERSAL_GRAPH} theme={t} onSelectNode={focusNode} compact />
                </div>
                <button
                  type="button"
                  aria-expanded={showFilters}
                  aria-controls="universal-map-filters"
                  onClick={() => setShowFilters((value) => !value)}
                  style={{ ...mapButton(t, showFilters || !allRelationships), fontSize: "0.8rem", minHeight: 48 }}
                >
                  Filters · {allRelationships ? "All" : mapState.edgeKinds.length === 0 ? "None" : "Custom"}
                  <span aria-hidden="true" style={{ marginLeft: 10 }}>
                    {showFilters ? "−" : "+"}
                  </span>
                </button>
              </div>
              {ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS && (
                <div role="tablist" aria-label="Relationship map views" style={{ ...mapRow, marginBottom: 10 }}>
                  {MAP_VIEWS.map((tab, index) => (
                    <button
                      key={tab.id}
                      id={`map-tab-${tab.id}`}
                      role="tab"
                      aria-selected={view === tab.id}
                      aria-controls={`map-panel-${tab.id}`}
                      tabIndex={view === tab.id ? 0 : -1}
                      style={mapButton(t, view === tab.id)}
                      onClick={() => changeView(tab.id)}
                      onKeyDown={(event) => {
                        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                        event.preventDefault();
                        const next =
                          MAP_VIEWS[
                            event.key === "Home"
                              ? 0
                              : event.key === "End"
                                ? 2
                                : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3
                          ];
                        changeView(next.id);
                        document.getElementById(`map-tab-${next.id}`)?.focus();
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
              <fieldset
                id="universal-map-filters"
                hidden={!showFilters}
                style={{
                  ...mapRow,
                  display: showFilters ? "flex" : "none",
                  border: `1px solid ${t.panelBorder}`,
                  borderRadius: 8,
                  padding: 12,
                  margin: "0 0 12px",
                  background: t.panelBg,
                }}
              >
                <legend style={{ color: t.label, fontSize: "0.72rem", marginBottom: 6 }}>Relationship filters</legend>
                {UNIVERSAL_RELATION_GROUPS.map((group) => (
                  <label
                    key={group.label}
                    style={{
                      ...mapRow,
                      minHeight: 44,
                      fontSize: "0.8rem",
                      color: t.label,
                      padding: "0 8px",
                      border: `1px solid ${t.panelBorder}`,
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ accentColor: t.sliderAccent, width: 16, height: 16 }}
                      ref={(input) => {
                        if (input)
                          input.indeterminate =
                            group.kinds.some((kind) => mapState.edgeKinds.includes(kind)) &&
                            !group.kinds.every((kind) => mapState.edgeKinds.includes(kind));
                      }}
                      checked={group.kinds.every((kind) => mapState.edgeKinds.includes(kind))}
                      onChange={(event) =>
                        updateMap({
                          edgeKinds: event.target.checked
                            ? [...new Set([...mapState.edgeKinds, ...group.kinds])]
                            : mapState.edgeKinds.filter((kind) => !group.kinds.includes(kind)),
                        })
                      }
                    />
                    {group.label}
                  </label>
                ))}
                {!allRelationships && (
                  <button
                    type="button"
                    onClick={() => updateMap({ edgeKinds: [...UNIVERSAL_EDGE_KINDS] })}
                    style={mapButton(t)}
                  >
                    Show all relationships
                  </button>
                )}
              </fieldset>
              {!allRelationships && (
                <p role="status" style={{ color: t.label, fontSize: "0.75rem", margin: "0 0 12px" }}>
                  {mapState.edgeKinds.length === 0
                    ? "All connections are hidden. Open Filters to show relationships."
                    : "Some relationship types are hidden. Filters apply across the map."}
                </p>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: sideDetails && selectedNode ? "minmax(0, 1fr) 320px" : "minmax(0, 1fr)",
                  gap: 18,
                  alignItems: "start",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  {ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS && (
                    <div
                      id="map-panel-explore"
                      role="tabpanel"
                      aria-labelledby="map-tab-explore"
                      hidden={view !== "explore"}
                    >
                      <UniversalMapExplore
                        graph={UNIVERSAL_GRAPH}
                        layout={UNIVERSAL_LAYOUT}
                        theme={t}
                        selectedNodeId={selectedNodeId}
                        neighborhoodId={
                          mapState.neighborhoodId ??
                          (selectedNodeId ? (UNIVERSAL_LAYOUT.nodeById[selectedNodeId]?.clusterId ?? null) : null)
                        }
                        edgeKinds={mapState.edgeKinds}
                        onSelectNode={focusNode}
                        onOpenFullMap={(nodeId) => {
                          updateMap({ view: "full", nodeId }, true);
                          document.getElementById("map-tab-full")?.focus();
                        }}
                        onOpenNeighborhood={(neighborhoodId, nodeId) => updateMap({ neighborhoodId, nodeId }, true)}
                      />
                    </div>
                  )}
                  <div
                    id="map-panel-full"
                    ref={fullMapRef}
                    tabIndex={-1}
                    style={{ scrollMarginTop: 60 }}
                    role={ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS ? "tabpanel" : "region"}
                    aria-label={ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS ? undefined : "Full map"}
                    aria-labelledby={ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS ? "map-tab-full" : undefined}
                    hidden={view !== "full"}
                  >
                    <UniversalRelationshipMap
                      graph={UNIVERSAL_GRAPH}
                      layout={UNIVERSAL_LAYOUT}
                      edgeKinds={mapState.edgeKinds}
                      isVisible={view === "full"}
                      pathNodeIds={connectionPaths[0]?.nodeIds}
                      pathEdgeIds={connectionPaths[0]?.edgeIds}
                      theme={t}
                      selectedNodeId={selectedNodeId}
                      onSelectNode={(nodeId) => selectNode(nodeId)}
                      onShowDetails={
                        sideDetails
                          ? undefined
                          : () => {
                              if (detailsRef.current) {
                                detailsRef.current.open = true;
                                detailsRef.current.scrollIntoView({ block: "start" });
                                detailsHeadingRef.current?.focus({ preventScroll: true });
                              }
                            }
                      }
                      focusRequest={focusRequest}
                      viewResetRequest={viewResetRequest}
                    />
                  </div>
                  {ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS && (
                    <div
                      id="map-panel-research"
                      role="tabpanel"
                      aria-labelledby="map-tab-research"
                      hidden={view !== "research"}
                    >
                      <UniversalMapResearch
                        graph={UNIVERSAL_GRAPH}
                        theme={t}
                        edgeKinds={mapState.edgeKinds}
                        selectedNodeId={selectedNodeId}
                        fromId={mapState.fromId}
                        toId={mapState.toId}
                        connectionPaths={connectionPaths}
                        onSelectNode={focusNode}
                        onFindPath={(fromId, toId) => updateMap({ fromId, toId })}
                      />
                    </div>
                  )}
                </div>
                {selectedNode && (
                  <details
                    ref={detailsRef}
                    key={selectedNodeId}
                    open
                    style={{
                      minWidth: 0,
                      position: sideDetails ? "sticky" : undefined,
                      top: sideDetails ? 60 : undefined,
                      maxHeight: sideDetails ? "calc(100vh - 80px)" : undefined,
                      overflowY: sideDetails ? "auto" : undefined,
                      scrollMarginTop: 60,
                    }}
                  >
                    <summary
                      style={{
                        color: t.label,
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        minHeight: 44,
                        boxSizing: "border-box",
                        padding: "12px 0",
                      }}
                    >
                      Details & sources
                    </summary>
                    {!sideDetails && view === "full" && (
                      <button
                        type="button"
                        style={mapButton(t)}
                        onClick={() => {
                          fullMapRef.current?.scrollIntoView({ block: "start" });
                          fullMapRef.current?.focus({ preventScroll: true });
                        }}
                      >
                        Back to map
                      </button>
                    )}
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
                  </details>
                )}
              </div>
            </PanelErrorBoundary>
          </ClientOnly>
          <details style={{ color: t.label, fontSize: "0.75rem", lineHeight: 1.8, marginTop: 8 }}>
            <summary style={{ cursor: "pointer", minHeight: 44, boxSizing: "border-box", padding: "12px 0" }}>
              About the map and its evidence
            </summary>
            <p style={{ margin: "0 0 8px" }}>
              {UNIVERSAL_GRAPH.stats.patents} patents · {UNIVERSAL_GRAPH.stats.authors} inventors ·{" "}
              {UNIVERSAL_GRAPH.stats.assignees} assignees · {UNIVERSAL_GRAPH.stats.corporateRelationships} corporate
              links · {UNIVERSAL_GRAPH.stats.lenses} non-patent models · {UNIVERSAL_GRAPH.stats.components} connected
              networks
            </p>
            <p style={{ maxWidth: 900 }}>
              Patents connect their named inventors and assignees. Dated corporate records describe succession,
              acquisition, subsidiaries, and corporate families. Shared inventors and spatial proximity do not establish
              ownership. Non-patent models connect to their explicit catalog maker. Neighborhood placement prioritizes
              corporate connections, then patent links. The full map retains every entity.
              {ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS &&
                " Explore summarizes these records; Research explains each connection with its available sources."}
            </p>
          </details>
        </>
      )}
    </StaticPageShell>
  );
}
