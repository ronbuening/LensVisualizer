/**
 * Interactive SVG renderer for the catalog-wide universal relationship graph.
 *
 * The visual vocabulary matches the focused map while adding corporate
 * organizations, family hubs, dated corporate edges, and visible component
 * boundaries. Labels progressively appear while zooming to keep the complete
 * catalog legible at its initial fit.
 */

import { useMemo, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import type { Theme } from "../../types/theme.js";
import type {
  UniversalEdgeKind,
  UniversalNodeKind,
  UniversalRelationshipEdge,
  UniversalRelationshipGraph,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { pluralize } from "../../utils/text.js";
import { toggleBtn } from "../../utils/style/styles.js";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import { layoutUniversalRelationshipGraph } from "./universalLayout.js";

interface UniversalRelationshipMapProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
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
  if (kind === "family") return "corporate family";
  if (kind === "organization") return "external organization";
  return kind;
}

function edgeStroke(theme: Theme, kind: UniversalEdgeKind): string {
  if (kind === "authorship") return theme.rayWarm;
  if (kind === "assignment") return theme.rayCool;
  if (kind === "family") return theme.sliderAccent;
  if (kind === "successor") return theme.imgLine;
  if (kind === "acquisition") return theme.stop;
  return theme.pupilExit;
}

function edgeDash(kind: UniversalEdgeKind): string | undefined {
  if (kind === "family") return "2 3";
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
}: UniversalRelationshipMapProps) {
  const layout = useMemo(() => layoutUniversalRelationshipGraph(graph), [graph]);
  const zoom = useViewBoxZoom(layout.width, layout.height, true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const activeNodeId = hoveredNodeId ?? selectedNodeId;

  const graphNodeById = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node])), [graph.nodes]);
  const graphEdgeById = useMemo(() => new Map(graph.edges.map((edge) => [edge.id, edge])), [graph.edges]);
  const nodeNames = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node.name])), [graph.nodes]);

  const ariaLabel = `Universal relationship map: ${graph.stats.patents} ${pluralize(
    graph.stats.patents,
    "patent",
  )}, ${graph.stats.authors} ${pluralize(graph.stats.authors, "inventor")}, ${graph.stats.assignees} ${pluralize(
    graph.stats.assignees,
    "assignee",
  )}, and ${graph.stats.components} connected ${pluralize(graph.stats.components, "component")}`;

  const legendItemStyle: CSSProperties = { display: "flex", alignItems: "center", gap: 6 };
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
      {zoom.state.zoom > 1 && (
        <button
          type="button"
          onClick={zoom.reset}
          style={{
            ...toggleBtn(t, false, { flex: 0, hasRightBorder: false, padding: "4px 10px" }),
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
            borderRadius: 4,
            border: `1px solid ${t.toggleBorder}`,
          }}
        >
          Reset view
        </button>
      )}

      <div
        style={{
          border: `1px solid ${t.panelBorder}`,
          borderRadius: 8,
          overflow: "hidden",
          height: "70vh",
          minHeight: 520,
          maxHeight: 760,
          background: t.panelBg,
        }}
      >
        <svg
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
          onWheel={zoom.handleWheel}
          onPointerDown={zoom.handlePointerDown}
          onPointerMove={zoom.handlePointerMove}
          onPointerUp={zoom.handlePointerUp}
          onTouchStart={zoom.handleTouchStart}
          onTouchMove={zoom.handleTouchMove}
          onTouchEnd={zoom.handleTouchEnd}
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
              <text x={component.x + 12} y={component.y + 20} fontSize={10} fill={t.muted}>
                {`Network ${component.index + 1} · ${component.nodeCount} ${pluralize(component.nodeCount, "node")}`}
              </text>
            </g>
          ))}

          {layout.edges.map((layoutEdge) => {
            const edge = graphEdgeById.get(layoutEdge.id);
            if (!edge) return null;
            const active = edge.from === activeNodeId || edge.to === activeNodeId;
            const corporate = edge.kind !== "authorship" && edge.kind !== "assignment";
            return (
              <line
                key={edge.id}
                x1={layoutEdge.x1}
                y1={layoutEdge.y1}
                x2={layoutEdge.x2}
                y2={layoutEdge.y2}
                stroke={edgeStroke(t, edge.kind)}
                strokeWidth={active ? 2.5 : corporate ? 1.35 : 0.8}
                strokeDasharray={edgeDash(edge.kind)}
                opacity={active ? 1 : corporate ? 0.62 : 0.3}
                pointerEvents="none"
              >
                <title>{relationshipTitle(edge, nodeNames)}</title>
              </line>
            );
          })}

          {layout.nodes.map((layoutNode) => {
            const node = graphNodeById.get(layoutNode.id);
            if (!node) return null;
            const hovered = hoveredNodeId === node.id;
            const selected = selectedNodeId === node.id;
            const active = hovered || selected;
            const strokeWidth = selected ? 3 : hovered ? 2.5 : 1.25;
            const showLabel = zoom.state.zoom >= 2.2 || active || node.kind === "family";
            const stroke =
              node.kind === "author"
                ? t.rayWarm
                : node.kind === "assignee"
                  ? t.rayCool
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
                tabIndex={0}
                aria-label={`Select ${nodeRoleLabel(node.kind)} ${node.name}`}
                style={{ cursor: "pointer" }}
                onPointerDown={stopNodePointerDown}
                onPointerEnter={() => setHoveredNodeId(node.id)}
                onPointerLeave={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
                onFocus={() => setHoveredNodeId(node.id)}
                onBlur={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
                onClick={activate}
                onKeyDown={(event) => {
                  if (!isActivateKey(event)) return;
                  event.preventDefault();
                  activate();
                }}
              >
                <title>{node.name}</title>
                {node.kind === "assignee" ? (
                  <rect
                    x={layoutNode.x - layoutNode.r}
                    y={layoutNode.y - layoutNode.r}
                    width={layoutNode.r * 2}
                    height={layoutNode.r * 2}
                    rx={2}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                  />
                ) : node.kind === "organization" ? (
                  <polygon
                    points={polygonPoints(layoutNode.x, layoutNode.y, layoutNode.r, 4, Math.PI / 4)}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                  />
                ) : node.kind === "family" ? (
                  <polygon
                    points={polygonPoints(layoutNode.x, layoutNode.y, layoutNode.r, 6)}
                    fill={active ? t.toggleActiveBg : t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                  />
                ) : (
                  <circle
                    cx={layoutNode.x}
                    cy={layoutNode.y}
                    r={layoutNode.r}
                    fill={t.panelBg}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                  />
                )}
                {showLabel && (
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
        </svg>
      </div>

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
        <span style={legendItemStyle}>Solid/dashed colored links · corporate history</span>
      </div>
    </div>
  );
}
