/**
 * Interactive SVG renderer for the catalog-wide universal relationship graph.
 *
 * The visual vocabulary matches the focused map while adding corporate
 * organizations, family hubs, dated corporate edges, and visible component
 * boundaries. Labels progressively appear while zooming to keep the complete
 * catalog legible at its initial fit.
 */

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import type { Theme } from "../../types/theme.js";
import type {
  UniversalEdgeKind,
  UniversalNodeKind,
  UniversalRelationshipEdge,
  UniversalRelationshipGraph,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { isUniversalCorporateEdge } from "../../utils/catalog/universalRelationshipGraph.js";
import { pluralize } from "../../utils/text.js";
import { mapButton, mapRow } from "./universalMapStyles.js";
import { ENABLE_REVISED_UNIVERSAL_MAP, ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS } from "../../utils/featureFlags.js";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import useSvgViewport from "../hooks/useSvgViewport.js";
import UniversalMapOverview from "./UniversalMapOverview.js";
import { layoutUniversalRelationshipGraph, type UniversalRelationshipLayout } from "./universalLayout.js";
import { UNIVERSAL_EDGE_KINDS } from "../../utils/catalog/universalRelationshipQueries.js";
import {
  boundsIntersect,
  directionalUniversalNode,
  placeUniversalLabels,
  universalEdgeCurve,
} from "./universalMapGeometry.js";

interface UniversalRelationshipMapProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
  onShowDetails?: () => void;
  focusRequest?: { nodeId: string; requestId: number };
  viewResetRequest?: number;
  layout?: UniversalRelationshipLayout;
  edgeKinds?: readonly UniversalEdgeKind[];
  pathNodeIds?: readonly string[];
  pathEdgeIds?: readonly string[];
  isVisible?: boolean;
}

function isActivateKey(event: KeyboardEvent): boolean {
  return event.key === "Enter" || event.key === " " || event.key === "Spacebar";
}

function stopNodePointerDown(event: PointerEvent<SVGGElement>) {
  event.stopPropagation();
}

function polygonPoints(cx: number, cy: number, radius: number, sides: number, rotation = -Math.PI / 2): string {
  return Array.from({ length: sides }, (_, index) => {
    const angle = rotation + (2 * Math.PI * index) / sides;
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
  }).join(" ");
}

function nodeRoleLabel(kind: UniversalNodeKind): string {
  if (kind === "author") return "inventor";
  if (kind === "maker") return "catalog maker";
  if (kind === "lens") return "lens model";
  if (kind === "family") return "corporate family";
  if (kind === "organization") return "external organization";
  return kind;
}

function edgeStroke(theme: Theme, kind: UniversalEdgeKind): string {
  if (kind === "authorship") return theme.rayWarm;
  if (kind === "assignment") return theme.rayCool;
  if (kind === "family") return theme.sliderAccent;
  if (kind === "catalog-maker") return theme.imgLine;
  if (kind === "successor") return theme.imgLine;
  if (kind === "acquisition") return theme.stop;
  return theme.pupilExit;
}

function edgeDash(kind: UniversalEdgeKind): string | undefined {
  if (kind === "family") return "2 3";
  if (kind === "catalog-maker") return "1 3";
  if (kind === "successor") return "7 3";
  if (kind === "subsidiary") return "3 3";
  return undefined;
}

function relationshipTitle(edge: UniversalRelationshipEdge, nodeNames: ReadonlyMap<string, string>): string {
  const from = nodeNames.get(edge.from) ?? edge.from;
  const to = nodeNames.get(edge.to) ?? edge.to;
  const date = edge.effectiveDate ?? edge.effectiveFrom;
  const end = edge.effectiveTo ? `–${edge.effectiveTo}` : "";
  const when = date ? ` (${date}${end})` : "";
  if (edge.kind === "catalog-maker") return `${from} grouped under catalog maker ${to}`;
  if (edge.kind === "authorship") return `${to} named on ${from}`;
  if (edge.kind === "assignment") return `${from} assigned to ${to}`;
  if (edge.kind === "successor") return `${from} succeeded ${to}${when}`;
  if (edge.kind === "acquisition") return `${from} acquired by ${to}${when}`;
  if (edge.kind === "subsidiary") return `${from} subsidiary of ${to}${when}`;
  return `${from} in ${to}${when}`;
}

export default function UniversalRelationshipMap({
  graph,
  theme: t,
  selectedNodeId,
  onSelectNode,
  onShowDetails,
  focusRequest,
  viewResetRequest,
  layout: providedLayout,
  edgeKinds = UNIVERSAL_EDGE_KINDS,
  pathNodeIds,
  pathEdgeIds,
  isVisible = true,
}: UniversalRelationshipMapProps) {
  const revised = ENABLE_REVISED_UNIVERSAL_MAP;
  const layout = useMemo(() => providedLayout ?? layoutUniversalRelationshipGraph(graph), [graph, providedLayout]);
  const svgRef = useRef<SVGSVGElement>(null);
  const fitAllRef = useRef<HTMLButtonElement>(null);
  const zoom = useViewBoxZoom(layout.width, layout.height, true, svgRef);
  const viewport = useSvgViewport(svgRef, zoom.viewBox);
  const overviewId = useId();
  const selectionToolsId = useId();
  const [showOverview, setShowOverview] = useState(true);
  const [showSelectionTools, setShowSelectionTools] = useState(false);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [emphasizeConnections, setEmphasizeConnections] = useState(false);
  const [keyboardNodeId, setKeyboardNodeId] = useState<string | null>(null);
  const nodeRefs = useRef(new Map<string, SVGGElement>());
  const adjacency = useMemo(() => {
    const neighbors = new Map(graph.nodes.map((node) => [node.id, new Set<string>()]));
    for (const edge of graph.edges) {
      if (!edgeKinds.includes(edge.kind)) continue;
      neighbors.get(edge.from)?.add(edge.to);
      neighbors.get(edge.to)?.add(edge.from);
    }
    return neighbors;
  }, [graph, edgeKinds]);
  const selectedNeighborhood = useMemo(
    () => (selectedNodeId ? new Set([selectedNodeId, ...(adjacency.get(selectedNodeId) ?? [])]) : null),
    [adjacency, selectedNodeId],
  );
  const emphasisActive = emphasizeConnections && selectedNeighborhood !== null;
  const activeNodeId = hoveredNodeId ?? selectedNodeId;
  const activeClusterId = activeNodeId ? layout.nodeById[activeNodeId]?.clusterId : undefined;
  const handledFocus = useRef<typeof focusRequest>(undefined);
  const { centerOn } = zoom;
  const currentZoom = zoom.state.zoom;
  const handledReset = useRef(0);
  const { reset } = zoom;
  useEffect(() => {
    if (viewResetRequest === undefined || viewResetRequest === handledReset.current) return;
    handledReset.current = viewResetRequest;
    reset();
  }, [viewResetRequest, reset]);
  const focusNode = useCallback(
    (nodeId: string) => {
      const node = layout.nodeById[nodeId];
      if (!node) return true;
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect?.width || !rect.height) return false;
      // Frame a local area large enough to distinguish individual relationship targets.
      const fitScale = Math.min(rect.width / layout.width, rect.height / layout.height);
      centerOn(node.x, node.y, Math.max(currentZoom, 1.5 / fitScale));
      return true;
    },
    [layout, centerOn, currentZoom],
  );

  useEffect(() => {
    if (!isVisible || !focusRequest || handledFocus.current === focusRequest) return;
    const applyFocus = () => {
      if (handledFocus.current === focusRequest) return;
      if (focusNode(focusRequest.nodeId)) handledFocus.current = focusRequest;
    };
    applyFocus();
    if (handledFocus.current === focusRequest || !svgRef.current) return;
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(applyFocus);
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [focusRequest, focusNode, isVisible]);

  const graphNodeById = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node])), [graph.nodes]);
  const graphEdgeById = useMemo(() => new Map(graph.edges.map((edge) => [edge.id, edge])), [graph.edges]);
  const nodeNames = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node.name])), [graph.nodes]);
  const bounds = useMemo(
    () =>
      viewport.bounds ?? {
        x: zoom.state.vbX,
        y: zoom.state.vbY,
        width: zoom.state.vbW,
        height: zoom.state.vbH,
      },
    [viewport.bounds, zoom.state.vbX, zoom.state.vbY, zoom.state.vbW, zoom.state.vbH],
  );
  const scale =
    viewport.width && viewport.height ? Math.min(viewport.width / bounds.width, viewport.height / bounds.height) : 1;
  const visibleNodes = useMemo(
    () =>
      revised
        ? layout.nodes.filter((n) =>
            boundsIntersect({ x: n.x - n.r, y: n.y - n.r, width: n.r * 2, height: n.r * 2 }, bounds),
          )
        : layout.nodes,
    [layout.nodes, bounds, revised],
  );
  const hubIds = useMemo(() => new Set(layout.clusters.map((c) => c.anchorId)), [layout.clusters]);
  const labels = useMemo(
    () =>
      revised
        ? placeUniversalLabels(
            visibleNodes,
            bounds,
            scale,
            [...new Set([selectedNodeId, hoveredNodeId, ...(pathNodeIds ?? [])].filter((id): id is string => !!id))],
            hubIds,
          )
        : [],
    [visibleNodes, bounds, scale, selectedNodeId, hoveredNodeId, pathNodeIds, hubIds, revised],
  );
  const curves = useMemo(
    () =>
      layout.edges.map((edge) => ({
        edge,
        ...universalEdgeCurve(
          edge,
          revised && layout.nodeById[edge.from].clusterId !== layout.nodeById[edge.to].clusterId,
        ),
      })),
    [layout, revised],
  );
  const visibleEdges = curves
    .filter(
      (curve) =>
        edgeKinds.includes(graphEdgeById.get(curve.edge.id)!.kind) &&
        (!revised || boundsIntersect(curve.bounds, bounds)),
    )
    .sort((a, b) =>
      revised
        ? Number(a.edge.from === activeNodeId || a.edge.to === activeNodeId || !!pathEdgeIds?.includes(a.edge.id)) -
          Number(b.edge.from === activeNodeId || b.edge.to === activeNodeId || !!pathEdgeIds?.includes(b.edge.id))
        : 0,
    );
  const tabNodeId = visibleNodes.some((n) => n.id === keyboardNodeId)
    ? keyboardNodeId
    : visibleNodes.some((n) => n.id === selectedNodeId)
      ? selectedNodeId
      : visibleNodes[0]?.id;
  const fitNeighborhood = () => {
    const cluster = layout.clusters.find(
      (c) => c.id === (selectedNodeId ? layout.nodeById[selectedNodeId]?.clusterId : undefined),
    );
    if (!cluster) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect?.width || !rect.height) return;
    const fitScale = Math.min(rect.width / layout.width, rect.height / layout.height);
    centerOn(
      cluster.x + cluster.width / 2,
      cluster.y + cluster.height / 2,
      Math.min(rect.width / (cluster.width + 40), rect.height / (cluster.height + 40)) / fitScale,
    );
  };

  const ariaLabel = `Universal relationship map: ${graph.stats.patents} ${pluralize(
    graph.stats.patents,
    "patent",
  )}, ${graph.stats.authors} ${pluralize(graph.stats.authors, "inventor")}, ${graph.stats.assignees} ${pluralize(
    graph.stats.assignees,
    "assignee",
  )}${graph.stats.lenses ? `, ${graph.stats.lenses} non-patent models` : ""}, and ${graph.stats.components} connected ${pluralize(graph.stats.components, "component")}`;

  const legendItemStyle: CSSProperties = { display: "flex", alignItems: "center", gap: 6 };
  const overview = (
    <UniversalMapOverview
      id={overviewId}
      layout={layout}
      theme={t}
      selectedNodeId={selectedNodeId}
      view={zoom.state}
      visibleBounds={
        viewport.bounds ?? { x: zoom.state.vbX, y: zoom.state.vbY, width: zoom.state.vbW, height: zoom.state.vbH }
      }
      onCenterView={zoom.centerOn}
      onPanView={zoom.panBy}
      onFitAll={zoom.reset}
    />
  );
  const controlStyle = (active = false, disabled = false): CSSProperties => ({
    ...mapButton(t, active),
    fontSize: "0.8rem",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "default" : "pointer",
  });
  const selectedNode = selectedNodeId ? layout.nodeById[selectedNodeId] : undefined;
  const compactControls = viewport.width > 0 && viewport.width < 600;
  const selectionActions = selectedNode && (
    <>
      {revised && (
        <button type="button" onClick={fitNeighborhood} style={controlStyle()}>
          Fit neighborhood
        </button>
      )}
      <button type="button" onClick={() => focusNode(selectedNode.id)} style={controlStyle()}>
        Center selection
      </button>
      <button
        type="button"
        aria-pressed={emphasizeConnections}
        onClick={() => setEmphasizeConnections((value) => !value)}
        style={controlStyle(emphasizeConnections)}
      >
        Emphasize connections
      </button>
    </>
  );
  const legendSwatch = (stroke: string, shape: "circle" | "square" | "diamond" | "hexagon"): CSSProperties => ({
    display: "inline-block",
    width: 11,
    height: 11,
    borderRadius: shape === "circle" ? "50%" : shape === "square" ? 2 : 0,
    border: `2px solid ${stroke}`,
    background: t.panelBg,
    transform: shape === "diamond" ? "rotate(45deg) scale(0.78)" : undefined,
    clipPath: shape === "hexagon" ? "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0 50%)" : undefined,
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        role="group"
        aria-label="Map navigation"
        style={{ ...mapRow, justifyContent: "space-between", marginBottom: 8 }}
      >
        <span style={{ color: t.label, fontSize: "0.75rem", padding: "4px 0" }}>
          {graph.nodes.length.toLocaleString("en-US")} entities · {layout.clusters.length} neighborhoods
        </span>
        <div style={{ ...mapRow, gap: 6 }}>
          {[
            { label: "Zoom out", text: "−", action: zoom.zoomOut, disabled: !zoom.canZoomOut },
            { label: "Zoom in", text: "+", action: zoom.zoomIn, disabled: !zoom.canZoomIn },
          ].map(({ label, text, action, disabled }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              title={label}
              onClick={action}
              disabled={disabled}
              style={{ ...controlStyle(false, disabled), width: 44, fontSize: "1.25rem", padding: 0 }}
            >
              {text}
            </button>
          ))}
          <button
            ref={fitAllRef}
            type="button"
            onClick={zoom.reset}
            style={controlStyle()}
            title="Fit the complete network in the map"
          >
            Fit all
          </button>
          <button
            type="button"
            title="Show or hide the mini map"
            aria-expanded={showOverview}
            aria-controls={showOverview ? overviewId : undefined}
            onClick={() => setShowOverview((value) => !value)}
            style={controlStyle(showOverview)}
          >
            Mini map
          </button>
        </div>
      </div>
      {selectedNode && (
        <div
          style={{
            ...mapRow,
            padding: "8px 10px",
            marginBottom: 8,
            background: t.toggleActiveBg,
            border: `1px solid ${t.panelBorder}`,
            borderRadius: 8,
          }}
        >
          <div style={{ flex: compactControls ? "1 1 100%" : "1 1 180px", minWidth: 0 }}>
            <span
              style={{
                display: "block",
                color: t.label,
                fontSize: "0.7rem",
                textTransform: "capitalize",
                marginBottom: 3,
              }}
            >
              {nodeRoleLabel(selectedNode.kind)}
            </span>
            <strong style={{ color: t.title, fontSize: "0.85rem", overflowWrap: "anywhere" }}>
              {selectedNode.fullLabel}
            </strong>
          </div>
          {onShowDetails && (
            <button type="button" onClick={onShowDetails} style={controlStyle()}>
              View details
            </button>
          )}
          {!compactControls && selectionActions}
          {compactControls && (
            <button
              type="button"
              aria-label="Selection tools"
              aria-expanded={showSelectionTools}
              aria-controls={showSelectionTools ? selectionToolsId : undefined}
              onClick={() => setShowSelectionTools((value) => !value)}
              style={controlStyle(showSelectionTools)}
            >
              Tools <span aria-hidden="true">{showSelectionTools ? "−" : "+"}</span>
            </button>
          )}
          <button
            type="button"
            aria-label="Clear selection"
            title="Clear selection"
            onClick={() => {
              onSelectNode(null);
              fitAllRef.current?.focus({ preventScroll: true });
            }}
            style={{ ...controlStyle(), minWidth: 44, fontSize: "1.1rem" }}
          >
            ×
          </button>
          {compactControls && showSelectionTools && (
            <div id={selectionToolsId} style={{ ...mapRow, flex: "1 1 100%" }}>
              {selectionActions}
            </div>
          )}
        </div>
      )}
      <div
        style={{
          border: `1px solid ${t.panelBorder}`,
          borderRadius: 8,
          overflow: "hidden",
          height: "clamp(360px, calc(100svh - 310px), 760px)",
          background: t.panelBg,
          position: "relative",
        }}
      >
        <svg
          ref={svgRef}
          role="group"
          aria-label={ariaLabel}
          viewBox={zoom.viewBox}
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            touchAction: "none",
            cursor: zoom.isPanning ? "grabbing" : "grab",
          }}
          onPointerDown={zoom.handlePointerDown}
          onPointerMove={zoom.handlePointerMove}
          onPointerUp={zoom.handlePointerUp}
          onPointerCancel={zoom.handlePointerUp}
        >
          {layout.components.map((component) => (
            <g key={component.id} pointerEvents="none">
              <rect
                x={component.x}
                y={component.y}
                width={component.width}
                height={component.height}
                rx={12}
                fill="none"
                stroke={t.panelBorder}
                strokeWidth={1}
                strokeDasharray="5 7"
              />
              <text x={component.x + 12} y={component.y + 20} fontSize={10} fill={t.muted} aria-hidden="true">
                {`Network ${component.index + 1} · ${component.nodeCount} ${pluralize(component.nodeCount, "node")} · ${component.clusterCount} ${pluralize(component.clusterCount, "neighborhood")}`}
              </text>
            </g>
          ))}

          {layout.clusters.map((cluster) => {
            const active = cluster.id === activeClusterId;
            const anchorLabel = layout.nodeById[cluster.anchorId]?.label ?? cluster.anchorLabel;
            return (
              <g key={cluster.id} pointerEvents="none">
                <title>{`${cluster.anchorLabel} neighborhood`}</title>
                <ellipse
                  cx={cluster.x + cluster.width / 2}
                  cy={cluster.y + cluster.height / 2}
                  rx={cluster.width / 2}
                  ry={cluster.height / 2}
                  fill={t.toggleActiveBg}
                  fillOpacity={active ? 0.14 : 0.045}
                  stroke={active ? t.label : t.panelDivider}
                  strokeWidth={active ? 1.6 : 0.8}
                  strokeDasharray="3 5"
                  opacity={active ? 0.9 : 0.72}
                />
                {(!revised || cluster.width * scale > 220) && (
                  <text
                    x={cluster.x + cluster.width / 2}
                    y={cluster.y + 17}
                    textAnchor="middle"
                    fontSize={revised ? 12 / scale : 9}
                    fill={active ? t.title : t.label}
                  >
                    {`${anchorLabel} · ${cluster.nodeCount} ${pluralize(cluster.nodeCount, "node")}`}
                  </text>
                )}
              </g>
            );
          })}

          {visibleEdges.map(({ edge: layoutEdge, d }) => {
            const edge = graphEdgeById.get(layoutEdge.id);
            if (!edge) return null;
            const onPath = revised && pathEdgeIds?.includes(edge.id);
            const active = edge.from === activeNodeId || edge.to === activeNodeId || onPath;
            const corporate = isUniversalCorporateEdge(edge.kind);
            return (
              <path
                key={edge.id}
                d={d}
                fill="none"
                vectorEffect={revised ? "non-scaling-stroke" : undefined}
                data-edge-id={edge.id}
                stroke={edgeStroke(t, edge.kind)}
                strokeWidth={active ? 2.5 : corporate ? 1.35 : 0.8}
                strokeDasharray={edgeDash(edge.kind)}
                opacity={
                  (active ? 1 : corporate ? 0.62 : 0.3) *
                  (emphasisActive && !onPath && edge.from !== selectedNodeId && edge.to !== selectedNodeId ? 0.15 : 1)
                }
                pointerEvents="none"
              >
                <title>{relationshipTitle(edge, nodeNames)}</title>
              </path>
            );
          })}

          {visibleNodes.map((layoutNode) => {
            const node = graphNodeById.get(layoutNode.id);
            if (!node) return null;
            const hovered = hoveredNodeId === node.id;
            const selected = selectedNodeId === node.id;
            const active = hovered || selected;
            const strokeWidth = selected ? 3 : hovered ? 2.5 : 1.25;
            const stroke =
              node.kind === "author"
                ? t.rayWarm
                : node.kind === "assignee"
                  ? t.rayCool
                  : node.kind === "lens"
                    ? t.imgLine
                    : node.kind === "patent"
                      ? t.stop
                      : node.kind === "family"
                        ? t.sliderAccent
                        : t.pupilExit;
            const activate = () => onSelectNode(selected ? null : node.id);

            return (
              <g
                key={node.id}
                role="button"
                tabIndex={!revised || tabNodeId === node.id ? 0 : -1}
                ref={(element) => {
                  if (element) nodeRefs.current.set(node.id, element);
                  else nodeRefs.current.delete(node.id);
                }}
                aria-label={`Select ${nodeRoleLabel(node.kind)} ${node.name}`}
                opacity={emphasisActive && !selectedNeighborhood?.has(node.id) ? 0.15 : 1}
                style={{ cursor: "pointer" }}
                onPointerDown={stopNodePointerDown}
                onPointerEnter={() => setHoveredNodeId(node.id)}
                onPointerLeave={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
                onFocus={() => {
                  setHoveredNodeId(node.id);
                  setKeyboardNodeId(node.id);
                }}
                onBlur={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
                onClick={activate}
                onKeyDown={(event) => {
                  if (revised && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
                    event.preventDefault();
                    const target = directionalUniversalNode(visibleNodes, layoutNode, event.key);
                    if (target) nodeRefs.current.get(target.id)?.focus();
                    return;
                  }
                  if (!isActivateKey(event)) return;
                  event.preventDefault();
                  activate();
                }}
              >
                <title>{node.name}</title>
                {revised && (
                  <circle
                    cx={layoutNode.x}
                    cy={layoutNode.y}
                    r={Math.max(layoutNode.r, Math.min(12 / scale, 14))}
                    fill="transparent"
                  />
                )}
                {node.kind === "assignee" || node.kind === "maker" ? (
                  <rect
                    x={layoutNode.x - layoutNode.r}
                    y={layoutNode.y - layoutNode.r}
                    width={layoutNode.r * 2}
                    height={layoutNode.r * 2}
                    rx={2}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    vectorEffect={revised ? "non-scaling-stroke" : undefined}
                  />
                ) : node.kind === "organization" || node.kind === "lens" ? (
                  <polygon
                    points={polygonPoints(
                      layoutNode.x,
                      layoutNode.y,
                      layoutNode.r,
                      4,
                      node.kind === "lens" ? 0 : Math.PI / 4,
                    )}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    vectorEffect={revised ? "non-scaling-stroke" : undefined}
                  />
                ) : node.kind === "family" ? (
                  <polygon
                    points={polygonPoints(layoutNode.x, layoutNode.y, layoutNode.r, 6)}
                    fill={active ? t.toggleActiveBg : t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    vectorEffect={revised ? "non-scaling-stroke" : undefined}
                  />
                ) : (
                  <circle
                    cx={layoutNode.x}
                    cy={layoutNode.y}
                    r={layoutNode.r}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    vectorEffect={revised ? "non-scaling-stroke" : undefined}
                  />
                )}
                {!revised && (zoom.state.zoom >= 2.2 || active || node.kind === "family") && (
                  <text
                    x={layoutNode.x + layoutNode.r + 4}
                    y={layoutNode.y + 3}
                    textAnchor="start"
                    fontSize={9}
                    fill={active ? t.title : t.label}
                    pointerEvents="none"
                  >
                    {layoutNode.label}
                  </text>
                )}
              </g>
            );
          })}
          <g pointerEvents="none" aria-hidden="true">
            {labels.map((label) => (
              <text
                key={label.id}
                data-node-label={label.id}
                x={label.x}
                y={label.y}
                fontSize={13 / scale}
                fill={label.id === selectedNodeId ? t.title : t.label}
                stroke={t.panelBg}
                strokeWidth={4 / scale}
                paintOrder="stroke"
              >
                {label.text}
              </text>
            ))}
          </g>
        </svg>
        {showOverview && viewport.width >= 600 && (
          <div style={{ position: "absolute", right: 8, bottom: 8 }}>{overview}</div>
        )}
      </div>
      {showOverview && viewport.width < 600 && <div style={{ marginTop: 8 }}>{overview}</div>}
      <p style={{ color: t.label, fontSize: "0.72rem", lineHeight: 1.7, margin: "8px 0 0" }}>
        Drag to move · Scroll or pinch to zoom · Select a node for details
      </p>
      <details style={{ color: t.label, fontSize: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}>
        <summary style={{ cursor: "pointer", minHeight: 44, boxSizing: "border-box", padding: "12px 0" }}>
          Map key & keyboard help
        </summary>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
            marginBottom: 12,
            fontSize: "0.75rem",
            color: t.label,
          }}
        >
          <span style={legendItemStyle}>
            <span style={legendSwatch(t.rayWarm, "circle")} /> Inventor
          </span>
          <span style={legendItemStyle}>
            <span style={legendSwatch(t.rayCool, "square")} /> Assignee
          </span>
          <span style={legendItemStyle}>
            <span style={legendSwatch(t.stop, "circle")} /> Patent
          </span>
          <span style={legendItemStyle}>
            <span style={legendSwatch(t.pupilExit, "diamond")} /> Organization
          </span>
          <span style={legendItemStyle}>
            <span style={legendSwatch(t.sliderAccent, "hexagon")} /> Corporate family
          </span>
          {graph.stats.lenses > 0 && (
            <>
              <span style={legendItemStyle}>
                <span style={legendSwatch(t.pupilExit, "square")} /> Catalog maker
              </span>
              <span style={legendItemStyle}>
                <span style={legendSwatch(t.imgLine, "diamond")} /> Non-patent model
              </span>
              <span style={legendItemStyle}>Dotted links · catalog maker grouping</span>
            </>
          )}
          <span style={legendItemStyle}>Solid/dashed colored links · corporate history</span>
          <span style={legendItemStyle}>Soft halos · hub neighborhoods</span>
        </div>
        {revised && (
          <p style={{ fontSize: "0.75rem", lineHeight: 1.7 }}>
            Use Tab to enter the map, arrow keys to move between visible nodes, and Enter to select.{" "}
            {ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS
              ? "Search or Research lists reach every entity."
              : "Search reaches every entity."}{" "}
            On the mini map, arrow keys move the view and Home fits the full network.
          </p>
        )}
      </details>
    </div>
  );
}
