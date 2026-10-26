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
  type ReactNode,
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
import type { SvgBounds } from "../../utils/svgCoordinates.js";
import { toggleBtn } from "../../utils/style/styles.js";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import useSvgViewport from "../hooks/useSvgViewport.js";
import useBalancedColumns, { widthClass } from "../hooks/useBalancedColumns.js";
import { CompactSection } from "./RelationshipViewShared.js";
import UniversalMapOverview from "./UniversalMapOverview.js";
import { layoutUniversalRelationshipGraph, type UniversalLayoutNode } from "./universalLayout.js";
import {
  boundsIntersect,
  directionalUniversalNode,
  placeUniversalLabels,
  universalEdgeCurve,
} from "./universalMapGeometry.js";

/** Label widths in universalMapGeometry.ts assume this font's 0.6 em monospace advance. */
const MAP_FONT = "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace";
/** Gap between the overview panel and node labels, in CSS pixels. */
const OVERVIEW_LABEL_GAP = 4;

function nodeBounds(node: UniversalLayoutNode) {
  return { x: node.x - node.r, y: node.y - node.r, width: node.r * 2, height: node.r * 2 };
}

interface UniversalRelationshipMapProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
  focusRequest?: { nodeId: string; requestId: number };
  viewResetRequest?: number;
  active?: boolean;
  /**
   * Rendered directly below the map box, before the overview and legend (the page's selection details). Full screen
   * covers the page, so there it floats over the map's bottom-left corner instead.
   */
  belowMap?: ReactNode;
  /** CSS height of a fixed panel the page shows over the screen's bottom edge; full screen ends above it. */
  fullScreenBottomInset?: string;
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
  focusRequest,
  viewResetRequest,
  active = true,
  belowMap,
  fullScreenBottomInset,
}: UniversalRelationshipMapProps) {
  const layout = useMemo(() => layoutUniversalRelationshipGraph(graph), [graph]);
  const { ref: containerRef, width } = useBalancedColumns(1, 1, 0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // Leaving the view (Back, for one) ends full screen, so returning to the Network view never reopens it.
  if (!active && isFullScreen) setIsFullScreen(false);
  const fullScreen = isFullScreen && active;
  const fullScreenToggleRef = useRef<HTMLButtonElement>(null);
  const [coarsePointer, setCoarsePointer] = useState(false);
  useEffect(() => {
    const media = window.matchMedia?.("(pointer: coarse)");
    if (!media) return;
    const update = () => setCoarsePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const twoFingerTouch = coarsePointer && !fullScreen;
  const [showTouchHint, setShowTouchHint] = useState(false);
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showScrollHint = useCallback(() => {
    setShowTouchHint(true);
    if (hintTimer.current) clearTimeout(hintTimer.current);
    hintTimer.current = setTimeout(() => setShowTouchHint(false), 1500);
  }, []);
  useEffect(
    () => () => {
      if (hintTimer.current) clearTimeout(hintTimer.current);
    },
    [],
  );
  const svgRef = useRef<SVGSVGElement>(null);
  const zoom = useViewBoxZoom(layout.width, layout.height, active, svgRef, {
    touchGesture: twoFingerTouch ? "two-finger" : undefined,
    onOneFingerDrag: showScrollHint,
  });
  const viewport = useSvgViewport(svgRef, zoom.viewBox);
  const overviewId = useId();
  // Null follows the responsive default until the reader makes their own choice.
  const [overviewChoice, setOverviewChoice] = useState<boolean | null>(null);
  const showOverview = overviewChoice ?? width >= 600;
  const [legendChoice, setLegendChoice] = useState<boolean | null>(null);
  const legendOpen = legendChoice ?? widthClass(width) !== "phone";
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [emphasizeConnections, setEmphasizeConnections] = useState(false);
  const [keyboardNodeId, setKeyboardNodeId] = useState<string | null>(null);
  const [overviewSize, setOverviewSize] = useState<{ width: number; height: number } | null>(null);
  // The overview's size is fixed, so one measurement on mount is enough to keep labels out from under it.
  const measureOverview = useCallback((element: HTMLDivElement | null) => {
    if (element) setOverviewSize({ width: element.offsetWidth, height: element.offsetHeight });
  }, []);
  const nodeRefs = useRef(new Map<string, SVGGElement>());
  useEffect(() => {
    if (keyboardNodeId) nodeRefs.current.get(keyboardNodeId)?.focus({ preventScroll: true });
  }, [keyboardNodeId]);
  const adjacency = useMemo(() => {
    const neighbors = new Map(graph.nodes.map((node) => [node.id, new Set<string>()]));
    for (const edge of graph.edges) {
      neighbors.get(edge.from)?.add(edge.to);
      neighbors.get(edge.to)?.add(edge.from);
    }
    return neighbors;
  }, [graph]);
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
    reset();
  }, [fullScreen, reset]);
  useEffect(() => {
    if (!fullScreen) return;
    const body = document.body;
    const root = document.documentElement;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      rootOverflow: root.style.overflow,
    };
    const { scrollX, scrollY } = window;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `${-scrollY}px`;
    body.style.width = "100%";
    root.style.overflow = "hidden";
    // This button stays mounted while its label switches between Full screen and Close.
    const toggle = fullScreenToggleRef.current;
    toggle?.focus({ preventScroll: true });
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        event.preventDefault();
        setIsFullScreen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      root.style.overflow = previous.rootOverflow;
      if (scrollX || scrollY) window.scrollTo(scrollX, scrollY);
      toggle?.focus({ preventScroll: true });
    };
  }, [fullScreen]);
  useEffect(() => {
    if (!active || viewResetRequest === undefined || viewResetRequest === handledReset.current) return;
    handledReset.current = viewResetRequest;
    reset();
  }, [active, viewResetRequest, reset]);
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
    if (!active || !focusRequest || handledFocus.current === focusRequest) return;
    const applyFocus = () => {
      if (handledFocus.current === focusRequest) return;
      if (focusNode(focusRequest.nodeId)) handledFocus.current = focusRequest;
    };
    applyFocus();
    if (handledFocus.current === focusRequest || !svgRef.current) return;
    const observer = new ResizeObserver(applyFocus);
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [active, focusRequest, focusNode]);

  const graphNodeById = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node])), [graph.nodes]);
  const graphEdgeById = useMemo(() => new Map(graph.edges.map((edge) => [edge.id, edge])), [graph.edges]);
  const nodeNames = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node.name])), [graph.nodes]);

  const visibleBounds = useMemo(
    () => viewport.bounds ?? { x: zoom.state.vbX, y: zoom.state.vbY, width: zoom.state.vbW, height: zoom.state.vbH },
    [viewport.bounds, zoom.state.vbX, zoom.state.vbY, zoom.state.vbW, zoom.state.vbH],
  );
  const scale =
    viewport.width && viewport.height
      ? Math.min(viewport.width / visibleBounds.width, viewport.height / visibleBounds.height)
      : 1;
  const cullingBounds = useMemo(() => {
    const margin = 24 / scale;
    return {
      x: visibleBounds.x - margin,
      y: visibleBounds.y - margin,
      width: visibleBounds.width + margin * 2,
      height: visibleBounds.height + margin * 2,
    };
  }, [visibleBounds, scale]);
  const highlightedIds = useMemo(
    () =>
      new Set([
        ...(selectedNeighborhood ?? []),
        ...(hoveredNodeId ? [hoveredNodeId, ...(adjacency.get(hoveredNodeId) ?? [])] : []),
        ...(keyboardNodeId ? [keyboardNodeId] : []),
      ]),
    [selectedNeighborhood, hoveredNodeId, adjacency, keyboardNodeId],
  );
  const visibleNodes = useMemo(
    () =>
      layout.nodes.filter((node) => highlightedIds.has(node.id) || boundsIntersect(nodeBounds(node), cullingBounds)),
    [layout.nodes, highlightedIds, cullingBounds],
  );
  const hubIds = useMemo(() => new Set(layout.clusters.map((cluster) => cluster.anchorId)), [layout.clusters]);
  /* ── Screen-space obstacles for labels: the inset overview panel and readable network captions ── */
  const overviewBox = useMemo(
    () =>
      showOverview && (viewport.width >= 600 || fullScreen) && overviewSize?.width && overviewSize.height
        ? {
            x: viewport.width - 8 - overviewSize.width - OVERVIEW_LABEL_GAP,
            y: viewport.height - 8 - overviewSize.height - OVERVIEW_LABEL_GAP,
            width: overviewSize.width + OVERVIEW_LABEL_GAP,
            height: overviewSize.height + OVERVIEW_LABEL_GAP,
          }
        : null,
    [showOverview, viewport.width, viewport.height, overviewSize, fullScreen],
  );
  const controlsBox = useMemo(
    () => ({ x: Math.max(0, viewport.width - 328), y: 0, width: 328, height: 124 }),
    [viewport.width],
  );
  const componentCaptions = useMemo(() => {
    const screenWidth = visibleBounds.width * scale;
    const screenHeight = visibleBounds.height * scale;
    // Clear the boundary's rounded corner (rx 12 SVG units) at any zoom.
    const inset = Math.max(8, 4 * scale);
    const captions = new Map<string, { text: string; x: number; y: number; box: SvgBounds }>();
    for (const component of layout.components) {
      const network = `Network ${component.index + 1}`;
      const nodes = `${component.nodeCount} ${pluralize(component.nodeCount, "node")}`;
      const neighborhoods = `${component.clusterCount} ${pluralize(component.clusterCount, "neighborhood")}`;
      const x = (component.x - visibleBounds.x) * scale + inset;
      const y = (component.y - visibleBounds.y) * scale + inset;
      // Drop detail until the caption fits inside its boundary and the viewport; hide it rather than shrink it.
      const caption = [`${network} · ${nodes} · ${neighborhoods}`, `${network} · ${nodes}`, network]
        .map((text) => ({ text, box: { x, y, width: text.length * 6.6 + 8, height: 16 } }))
        .find(
          ({ box }) =>
            box.width + inset * 2 <= component.width * scale &&
            box.height + inset * 2 <= component.height * scale &&
            box.x >= 0 &&
            box.y >= 0 &&
            box.x + box.width <= screenWidth &&
            box.y + box.height <= screenHeight &&
            !boundsIntersect(box, controlsBox) &&
            !(overviewBox && boundsIntersect(box, overviewBox)),
        );
      if (!caption) continue;
      captions.set(component.id, {
        ...caption,
        x: visibleBounds.x + (x + 4) / scale,
        y: visibleBounds.y + (y + 12) / scale,
      });
    }
    return captions;
  }, [layout.components, visibleBounds, scale, overviewBox, controlsBox]);
  const labelObstacles = useMemo(
    () => [
      ...(viewport.width > 0 ? [controlsBox] : []),
      ...(overviewBox ? [overviewBox] : []),
      ...[...componentCaptions.values()].map((caption) => caption.box),
    ],
    [viewport.width, controlsBox, overviewBox, componentCaptions],
  );
  const measured = viewport.width > 0 && viewport.height > 0;
  const labels = useMemo(
    () =>
      placeUniversalLabels(
        // Prerender and hydration run before the screen scale is known; the 1:1 fallback would label about a
        // thousand nodes into the static HTML, so only hubs and the selection are labelled until measurement.
        measured
          ? visibleNodes
          : visibleNodes.filter(
              (node) => hubIds.has(node.id) || node.id === selectedNodeId || node.id === hoveredNodeId,
            ),
        visibleBounds,
        scale,
        // The selection keeps its label first and the hovered node next, ahead of the selection's neighbors.
        [
          ...new Set([
            ...(selectedNodeId ? [selectedNodeId] : []),
            ...(hoveredNodeId ? [hoveredNodeId] : []),
            ...(selectedNeighborhood ?? []),
          ]),
        ],
        hubIds,
        labelObstacles,
      ),
    [
      measured,
      visibleNodes,
      visibleBounds,
      scale,
      selectedNodeId,
      selectedNeighborhood,
      hoveredNodeId,
      hubIds,
      labelObstacles,
    ],
  );
  const curves = useMemo(
    () =>
      layout.edges.map((edge) => ({
        edge,
        ...universalEdgeCurve(edge, layout.nodeById[edge.from].clusterId !== layout.nodeById[edge.to].clusterId),
      })),
    [layout],
  );
  const edgeLayers = useMemo(
    () =>
      [false, true].map((highlighted) => ({
        highlighted,
        curves: curves.filter(({ edge, bounds }) => {
          const incident =
            edge.from === selectedNodeId ||
            edge.to === selectedNodeId ||
            edge.from === hoveredNodeId ||
            edge.to === hoveredNodeId;
          return incident === highlighted && (incident || boundsIntersect(bounds, cullingBounds));
        }),
      })),
    [curves, selectedNodeId, hoveredNodeId, cullingBounds],
  );
  // Highlighted nodes stay mounted offscreen, so the roving tab stop checks the camera itself; tabbing into the
  // map should land on a node the user can see.
  const onScreen = (node: UniversalLayoutNode | undefined) =>
    node !== undefined && boundsIntersect(nodeBounds(node), visibleBounds);
  const tabNodeId =
    [keyboardNodeId, selectedNodeId].find((id) => id && onScreen(layout.nodeById[id])) ??
    visibleNodes.find(onScreen)?.id ??
    keyboardNodeId ??
    selectedNodeId ??
    visibleNodes[0]?.id;

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
      visibleBounds={visibleBounds}
      onCenterView={zoom.centerOn}
      onPanView={zoom.panBy}
      onFitAll={zoom.reset}
    />
  );
  const controlStyle = (active = false, disabled = false): CSSProperties => {
    const base = toggleBtn(t, active, { flex: 0, hasRightBorder: false, padding: "8px 12px" });
    // Standalone controls use a full border, so omit the shared segmented-control edge.
    delete base.borderRight;
    return {
      ...base,
      // Size to the label: the shared zero basis would shrink text buttons to minWidth and overlap their labels.
      flex: "0 0 auto",
      minWidth: 44,
      minHeight: 44,
      fontSize: "0.75rem",
      borderRadius: 4,
      border: `1px solid ${t.toggleBorder}`,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "default" : "pointer",
    };
  };
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
  // A phone's map box is short, so its text toggles sit in a row under the box and the overlay keeps one icon row.
  const togglesBelowMap = widthClass(width) === "phone" && !fullScreen;
  const mapToggles = (
    <>
      <button
        type="button"
        title="Emphasize connections"
        aria-pressed={emphasizeConnections}
        disabled={!selectedNodeId}
        onClick={() => setEmphasizeConnections((value) => !value)}
        style={controlStyle(emphasizeConnections, !selectedNodeId)}
      >
        Emphasize connections
      </button>
      <button
        type="button"
        title="Overview"
        aria-expanded={showOverview}
        aria-controls={showOverview ? overviewId : undefined}
        onClick={() => setOverviewChoice(!showOverview)}
        style={controlStyle(showOverview)}
      >
        Overview
      </button>
    </>
  );

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div
        data-map-box=""
        role={fullScreen ? "dialog" : undefined}
        aria-label={fullScreen ? "Full-screen relationship map" : undefined}
        style={{
          border: `1px solid ${t.panelBorder}`,
          borderRadius: fullScreen ? 0 : 8,
          overflow: "hidden",
          height: fullScreen
            ? undefined
            : `clamp(320px, ${Math.round(((width * layout.height) / layout.width) * 1.04)}px, min(70vh, 760px))`,
          background: t.panelBg,
          position: fullScreen ? "fixed" : "relative",
          // Ending above the page's bottom panel keeps the overview, labels, and centering in the visible area.
          inset: fullScreen ? (fullScreenBottomInset ? `0 0 ${fullScreenBottomInset}` : 0) : undefined,
          zIndex: fullScreen ? 1000 : undefined,
        }}
      >
        <div
          role="group"
          aria-label="Map navigation"
          style={{
            position: "absolute",
            top: "max(8px, env(safe-area-inset-top))",
            right: "max(8px, env(safe-area-inset-right))",
            zIndex: 1,
            padding: 6,
            borderRadius: 6,
            border: `1px solid ${t.panelBorder}`,
            background: `color-mix(in srgb, ${t.panelBg} 92%, transparent)`,
            backdropFilter: "blur(6px)",
            maxWidth: "calc(100% - 16px)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
            {[
              { label: "Zoom in", icon: "+", action: zoom.zoomIn, disabled: !zoom.canZoomIn },
              { label: "Zoom out", icon: "−", action: zoom.zoomOut, disabled: !zoom.canZoomOut },
              { label: "Fit all", icon: "⛶", action: zoom.reset, disabled: false },
              {
                label: "Center selection",
                icon: "◎",
                action: () => {
                  if (selectedNodeId) focusNode(selectedNodeId);
                },
                disabled: !selectedNodeId,
              },
            ].map(({ label, icon, action, disabled }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                title={label}
                onClick={action}
                disabled={disabled}
                style={{ ...controlStyle(false, disabled), width: 44, padding: 0, fontSize: "1.4rem" }}
              >
                <span aria-hidden="true">{icon}</span>
              </button>
            ))}
            <button
              ref={fullScreenToggleRef}
              type="button"
              aria-label={fullScreen ? "Close full screen" : "Full screen"}
              title={fullScreen ? "Close full screen" : "Full screen"}
              onClick={() => setIsFullScreen((value) => !value)}
              style={{ ...controlStyle(fullScreen), width: 44, padding: 0, fontSize: "1.4rem" }}
            >
              <span aria-hidden="true">{fullScreen ? "×" : "⤢"}</span>
            </button>
          </div>
          {!togglesBelowMap && (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: 4, marginTop: 4 }}>
              {mapToggles}
            </div>
          )}
        </div>
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
            touchAction: twoFingerTouch ? "pan-x pan-y" : "none",
            cursor: zoom.isPanning ? "grabbing" : "grab",
          }}
          onPointerDown={zoom.handlePointerDown}
          onPointerMove={zoom.handlePointerMove}
          onPointerUp={zoom.handlePointerUp}
          onPointerCancel={zoom.handlePointerUp}
        >
          {layout.components.map((component) => {
            const caption = componentCaptions.get(component.id);
            return (
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
                  vectorEffect="non-scaling-stroke"
                />
                {caption && (
                  <text
                    data-network-caption={component.id}
                    x={caption.x}
                    y={caption.y}
                    fontSize={11 / scale}
                    fontFamily={MAP_FONT}
                    fill={t.muted}
                    stroke={t.panelBg}
                    strokeWidth={3 / scale}
                    strokeLinejoin="round"
                    paintOrder="stroke"
                  >
                    {caption.text}
                  </text>
                )}
              </g>
            );
          })}

          {layout.clusters.map((cluster) => {
            const active = cluster.id === activeClusterId;
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
              </g>
            );
          })}

          {edgeLayers.map(({ highlighted, curves }) => (
            <g key={String(highlighted)} data-edge-layer={highlighted ? "highlighted" : "background"}>
              {curves.map(({ edge: layoutEdge, d }) => {
                const edge = graphEdgeById.get(layoutEdge.id);
                if (!edge) return null;
                const active = highlighted;
                const corporate = isUniversalCorporateEdge(edge.kind);
                return (
                  <path
                    key={edge.id}
                    d={d}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    data-edge-id={edge.id}
                    stroke={edgeStroke(t, edge.kind)}
                    strokeWidth={active ? 2.5 : corporate ? 1.35 : 0.8}
                    strokeDasharray={edgeDash(edge.kind)}
                    opacity={
                      (active ? 1 : corporate ? 0.62 : 0.3) *
                      (emphasisActive && edge.from !== selectedNodeId && edge.to !== selectedNodeId ? 0.15 : 1)
                    }
                    pointerEvents="none"
                  >
                    <title>{relationshipTitle(edge, nodeNames)}</title>
                  </path>
                );
              })}
            </g>
          ))}

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
                tabIndex={tabNodeId === node.id ? 0 : -1}
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
                  if (
                    ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key) &&
                    !event.altKey &&
                    !event.ctrlKey &&
                    !event.metaKey
                  ) {
                    event.preventDefault();
                    const target = directionalUniversalNode(layout.nodes, layoutNode, event.key);
                    if (target) {
                      setKeyboardNodeId(target.id);
                      if (!boundsIntersect({ x: target.x, y: target.y, width: 0, height: 0 }, visibleBounds))
                        centerOn(target.x, target.y);
                    }
                    return;
                  }
                  if (!isActivateKey(event)) return;
                  event.preventDefault();
                  activate();
                }}
              >
                <title>{node.name}</title>
                <circle
                  data-node-hit-area={node.id}
                  cx={layoutNode.x}
                  cy={layoutNode.y}
                  r={Math.max(layoutNode.r, (coarsePointer ? 22 : 12) / scale)}
                  fill="transparent"
                  pointerEvents="all"
                  vectorEffect="non-scaling-stroke"
                />
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
                    vectorEffect="non-scaling-stroke"
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
                    vectorEffect="non-scaling-stroke"
                  />
                ) : node.kind === "family" ? (
                  <polygon
                    points={polygonPoints(layoutNode.x, layoutNode.y, layoutNode.r, 6)}
                    fill={active ? t.toggleActiveBg : t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    vectorEffect="non-scaling-stroke"
                  />
                ) : (
                  <circle
                    cx={layoutNode.x}
                    cy={layoutNode.y}
                    r={layoutNode.r}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </g>
            );
          })}
          <g data-label-layer="nodes" aria-hidden="true">
            {labels.map((label) => (
              <g
                key={label.id}
                style={{ cursor: "pointer" }}
                onPointerDown={stopNodePointerDown}
                onClick={() => onSelectNode(label.id === selectedNodeId ? null : label.id)}
              >
                <rect
                  data-label-hit-area={label.id}
                  x={visibleBounds.x + label.box.x / scale}
                  y={visibleBounds.y + label.box.y / scale}
                  width={label.box.width / scale}
                  height={label.box.height / scale}
                  fill="transparent"
                  pointerEvents="all"
                />
                <text
                  data-node-label={label.id}
                  x={label.x}
                  y={label.y}
                  fontSize={13 / scale}
                  fontFamily={MAP_FONT}
                  fill={label.id === selectedNodeId || label.id === hoveredNodeId ? t.title : t.label}
                  opacity={emphasisActive && !selectedNeighborhood?.has(label.id) ? 0.15 : 1}
                  stroke={t.panelBg}
                  strokeWidth={4 / scale}
                  strokeLinejoin="round"
                  paintOrder="stroke"
                >
                  {label.text}
                </text>
              </g>
            ))}
          </g>
        </svg>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "max-content",
            maxWidth: "calc(100% - 32px)",
            padding: "10px 14px",
            borderRadius: 6,
            color: t.title,
            background: t.panelBg,
            border: `1px solid ${t.panelBorder}`,
            fontSize: "0.8rem",
            textAlign: "center",
            pointerEvents: "none",
            opacity: showTouchHint && twoFingerTouch ? 1 : 0,
            transition: "opacity 180ms ease",
          }}
        >
          Use two fingers to move the map
        </div>
        {showOverview && (viewport.width >= 600 || fullScreen) && (
          <div ref={measureOverview} style={{ position: "absolute", right: 8, bottom: 8 }}>
            {overview}
          </div>
        )}
        {fullScreen && belowMap && (
          <div
            style={{
              position: "absolute",
              left: 8,
              bottom: 8,
              zIndex: 1,
              width: `min(420px, calc(100% - ${16 + (overviewBox ? overviewBox.width + 8 : 0)}px))`,
              maxHeight: "45%",
              overflowY: "auto",
              overscrollBehavior: "contain",
            }}
          >
            {belowMap}
          </div>
        )}
      </div>
      {togglesBelowMap && (
        <div
          role="group"
          aria-label="Map display"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: 8, marginTop: 8 }}
        >
          {mapToggles}
        </div>
      )}
      {!fullScreen && belowMap}
      {showOverview && viewport.width < 600 && !fullScreen && <div style={{ marginTop: 8 }}>{overview}</div>}

      <div style={{ marginTop: "0.75rem" }}>
        <CompactSection
          title="Legend"
          summary="Node shapes and connections"
          expanded={legendOpen}
          onToggle={() => setLegendChoice(!legendOpen)}
          theme={t}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginTop: "0.55rem",
              fontSize: "0.68rem",
              color: t.muted,
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
        </CompactSection>
      </div>
    </div>
  );
}
