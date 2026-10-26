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
import UniversalConnectionTrace from "../components/relationshipMap/UniversalConnectionTrace.js";
import InventorAffiliationMap from "../components/relationshipMap/InventorAffiliationMap.js";
import CompanyRelationshipViews from "../components/relationshipMap/CompanyRelationshipViews.js";
import RelationshipEvidenceLanes from "../components/relationshipMap/RelationshipEvidenceLanes.js";
import UniversalNeighborhoodSummary from "../components/relationshipMap/UniversalNeighborhoodSummary.js";
import { RetainedMapView, ViewChoices } from "../components/relationshipMap/RelationshipViewShared.js";
import useBalancedColumns, { balancedItemStyle, balancedRowStyle } from "../components/hooks/useBalancedColumns.js";
import { SUMMARY_KEYS } from "../utils/catalog/lensSummaries.js";
import { getRelationshipCatalog } from "../utils/catalog/relationshipCatalog.js";
import SEOHead from "../components/SEOHead.js";
import { SITE_NAME, SITE_URL } from "../utils/catalog/lensMetadata.js";
import { breadcrumbJsonLd, collectionPageJsonLd } from "../utils/seo/structuredData.js";
import { canonicalPageUrl } from "../utils/seo/siteUrls.js";
import { H1_STYLE, STICKY_NAV_SCROLL_MARGIN } from "../utils/style/pageStyles.js";
import { panelCard } from "../utils/style/styles.js";
import {
  universalMapHash,
  universalMapNodeFromHash,
  universalMapExploreFromHash,
  universalMapExploreHash,
  type UniversalMapExploreState,
  UNIVERSAL_VIEWS,
} from "../utils/state/universalMapUrl.js";

const { graph: UNIVERSAL_GRAPH, insights: INSIGHTS } = getRelationshipCatalog();
const UNIVERSAL_NODE_IDS = new Set(UNIVERSAL_GRAPH.nodes.map((node) => node.id));
const STATS: readonly (readonly [number, string])[] = [
  [SUMMARY_KEYS.length, "catalog lenses"],
  [UNIVERSAL_GRAPH.stats.patents, "patents"],
  [UNIVERSAL_GRAPH.stats.lenses, "non-patent models"],
  [UNIVERSAL_GRAPH.stats.authors, "inventors"],
  [UNIVERSAL_GRAPH.stats.assignees, "assignees"],
  [UNIVERSAL_GRAPH.stats.corporateRelationships, "corporate links"],
  [UNIVERSAL_GRAPH.stats.components, "connected networks"],
];
// One row when the cards fit; otherwise balanced rows (4 + 3), with labels free to wrap.
const STAT_MIN_WIDTH = 112;
const STAT_GAP = 9;

export default function UniversalRelationshipMapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const [mounted, setMounted] = useState(false);
  const statsLayout = useBalancedColumns(STATS.length, STAT_MIN_WIDTH, STAT_GAP);
  useEffect(() => setMounted(true), []);
  const selectedNodeId = mounted ? universalMapNodeFromHash(location.hash, UNIVERSAL_NODE_IDS) : null;
  const explore = universalMapExploreFromHash(mounted ? location.hash : "", UNIVERSAL_NODE_IDS);
  const changeExplore = (state: UniversalMapExploreState) => {
    const hash = universalMapExploreHash(location.hash, state);
    if (hash !== location.hash)
      void navigate({ pathname: location.pathname, search: location.search, hash }, { preventScrollReset: true });
  };
  const [focusRequest, setFocusRequest] = useState<{ nodeId: string; requestId: number }>();
  const [viewResetRequest, setViewResetRequest] = useState(0);
  const focusSequence = useRef(0);
  const pendingSelection = useRef<{ hash: string; center: boolean; keyboard: boolean } | undefined>(undefined);
  const handledLocationKey = useRef<string | undefined>(undefined);
  const handledSelectionId = useRef<string | null>(null);
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
  const viewChoicesRef = useRef<HTMLDivElement>(null);
  // A neighborhood card hands its hub to the Network view in one history entry: switch, select, and frame it.
  const showInNetwork = (nodeId: string, keyboard = false) => {
    if (!UNIVERSAL_NODE_IDS.has(nodeId)) return;
    const hash = universalMapExploreHash(universalMapHash(location.hash, nodeId), { ...explore, view: "network" });
    if (hash === location.hash) {
      focusNode(nodeId, keyboard);
      return;
    }
    pendingSelection.current = { hash, center: true, keyboard };
    void navigate({ pathname: location.pathname, search: location.search, hash }, { preventScrollReset: true });
    // Cards far down the list would otherwise leave the map above the viewport.
    const choices = viewChoicesRef.current;
    if (choices && choices.getBoundingClientRect().top < 0) choices.scrollIntoView({ block: "start" });
  };

  // Selection derives from the committed URL: Back can cancel a concurrent
  // navigation before it renders. Only consume its camera intent if it commits.
  useEffect(() => {
    if (!mounted || handledLocationKey.current === location.key) return;
    const initialLocation = handledLocationKey.current === undefined;
    handledLocationKey.current = location.key;
    const local =
      navigationType !== "POP" && pendingSelection.current?.hash === location.hash
        ? pendingSelection.current
        : undefined;
    pendingSelection.current = undefined;
    const nodeId = universalMapNodeFromHash(location.hash, UNIVERSAL_NODE_IDS);
    // Switching views or editing trace endpoints must preserve the network camera.
    if (!initialLocation && nodeId === handledSelectionId.current && !local) return;
    handledSelectionId.current = nodeId;
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
            Explore the entire catalog through the original network, a summary of its hub neighborhoods, connection
            tracing, inventor affiliations, company bridges, a comparison matrix, company chords, and patent evidence
            lanes. Patents connect their inventors and assignees; dated corporate records reconnect historical company
            names. Non-patent models connect to their explicit catalog maker grouping. A neighborhood halo does not
            imply corporate ownership.
          </p>

          <div ref={statsLayout.ref} style={{ ...balancedRowStyle(STAT_GAP), marginBottom: "1rem" }}>
            {STATS.map(([value, label]) => (
              <div
                key={label}
                style={{
                  ...panelCard(t),
                  ...balancedItemStyle(statsLayout.columns, STAT_GAP),
                  padding: "0.65rem 0.75rem",
                }}
              >
                <strong style={{ color: t.title, display: "block", fontSize: "1rem" }}>{value}</strong>
                <span style={{ color: t.muted, fontSize: "0.68rem" }}>{label}</span>
              </div>
            ))}
          </div>

          {explore.view === "network" && (
            <p style={{ color: t.label, fontSize: "0.72rem", lineHeight: 1.5, margin: "0 0 0.8rem" }}>
              Soft halos group hub neighborhoods; dashed boxes mark disconnected networks. Pinch or scroll to zoom, drag
              to pan, and select any node for details. Double-click the overview to zoom in on that spot. Labels appear
              as you zoom in.
            </p>
          )}

          <ClientOnly
            fallback={
              <div style={{ ...panelCard(t), padding: "2rem", color: t.muted, textAlign: "center" }}>
                Preparing the universal relationship map…
              </div>
            }
          >
            <PanelErrorBoundary lensKey="universal-relationship-map">
              <div ref={viewChoicesRef} style={{ scrollMarginTop: STICKY_NAV_SCROLL_MARGIN }}>
                <ViewChoices
                  views={UNIVERSAL_VIEWS}
                  value={explore.view}
                  onChange={(view) => changeExplore({ ...explore, view })}
                  theme={t}
                  label="Relationship map views"
                />
              </div>
              <UniversalMapSearch graph={UNIVERSAL_GRAPH} theme={t} onSelectNode={focusNode} />
              <RetainedMapView active={explore.view === "network"}>
                <UniversalRelationshipMap
                  graph={UNIVERSAL_GRAPH}
                  theme={t}
                  selectedNodeId={selectedNodeId}
                  onSelectNode={(nodeId) => selectNode(nodeId)}
                  focusRequest={focusRequest}
                  viewResetRequest={viewResetRequest}
                  active={explore.view === "network"}
                />
              </RetainedMapView>
              {explore.view === "neighborhoods" && (
                <UniversalNeighborhoodSummary
                  graph={UNIVERSAL_GRAPH}
                  theme={t}
                  selectedNodeId={selectedNodeId}
                  onShowInNetwork={showInNetwork}
                />
              )}
              {explore.view === "trace" && (
                <UniversalConnectionTrace
                  graph={UNIVERSAL_GRAPH}
                  theme={t}
                  from={explore.from}
                  to={explore.to}
                  includeCorporate={explore.includeCorporate}
                  selectedNodeId={selectedNodeId}
                  onChange={(from, to, includeCorporate) => changeExplore({ ...explore, from, to, includeCorporate })}
                  onSelectNode={focusNode}
                />
              )}
              {explore.view === "affiliations" && (
                <InventorAffiliationMap
                  graph={UNIVERSAL_GRAPH}
                  network={INSIGHTS}
                  theme={t}
                  selectedNodeId={selectedNodeId}
                  onSelectNode={focusNode}
                  focusRequest={focusRequest}
                />
              )}
              {(explore.view === "bridge" || explore.view === "matrix" || explore.view === "chords") && (
                <CompanyRelationshipViews
                  view={explore.view}
                  insights={INSIGHTS}
                  theme={t}
                  onSelectPatent={focusNode}
                />
              )}
              {explore.view === "evidence" && (
                <RelationshipEvidenceLanes
                  insights={INSIGHTS}
                  theme={t}
                  onSelectPatent={focusNode}
                  selectedInventorId={selectedNode?.kind === "author" ? selectedNode.id : null}
                />
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
            </PanelErrorBoundary>
          </ClientOnly>
        </>
      )}
    </StaticPageShell>
  );
}
