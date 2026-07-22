/**
 * RelationshipMap — interactive SVG renderer for patent relationship graphs.
 *
 * Consumes the pure layout engine (layout.ts) and draws edges, then nodes, then
 * labels as inline SVG with inline styles. Party and patent nodes both recenter
 * through parent-owned URL state. Zoom/pan comes from the shared useViewBoxZoom
 * hook. No <a>/<Link> lives inside the SVG; the parent translates node clicks
 * to navigation.
 */

import { useMemo, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import { toggleBtn } from "../../utils/style/styles.js";
import type { Theme } from "../../types/theme.js";
import type { GraphPatentNode, PartyRef, RelationshipGraph } from "../../utils/catalog/relationshipGraph.js";
import { layoutRelationshipGraph } from "./layout.js";

interface RelationshipMapProps {
  graph: RelationshipGraph;
  theme: Theme;
  onFocusPatent: (patent: GraphPatentNode) => void;
  onFocusParty: (ref: PartyRef) => void;
}

const PATENT_R = 10;
const PARTY_R = 14;

/** True when an Enter or Space key event should activate a node. */
function isActivateKey(event: KeyboardEvent): boolean {
  return event.key === "Enter" || event.key === " " || event.key === "Spacebar";
}

/* Keep a pointerdown that starts on an interactive node from bubbling to the
 * <svg>: the pan hook calls setPointerCapture on the svg during pointerdown,
 * which retargets the following click to the svg and would swallow the node's
 * onClick. Stopping propagation means no capture is taken, so the click reaches
 * the node. Panning still works when a drag starts on the background/edges. */
function stopNodePointerDown(event: PointerEvent<SVGGElement>) {
  event.stopPropagation();
}

export default function RelationshipMap({ graph, theme: t, onFocusPatent, onFocusParty }: RelationshipMapProps) {
  const layout = useMemo(() => layoutRelationshipGraph(graph), [graph]);
  const zoom = useViewBoxZoom(layout.width, layout.height, true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const patentById = useMemo(() => new Map(graph.patents.map((p) => [p.id, p])), [graph.patents]);
  const partyById = useMemo(
    () =>
      new Map([
        ...graph.parties.map((party) => [party.id, party] as const),
        ...(graph.centerKind === "party" ? ([[graph.center.id, graph.center]] as const) : []),
      ]),
    [graph],
  );
  const patentYearById = useMemo(() => new Map(graph.patents.map((p) => [p.id, p.patentYear])), [graph.patents]);

  const activeNodeId = hoveredNodeId;

  const centerName = graph.centerKind === "patent" ? `patent ${graph.center.patentNumber}` : graph.center.ref.name;
  const ariaLabel = `Relationship map centered on ${centerName}: ${graph.patents.length} ${
    graph.patents.length === 1 ? "patent" : "patents"
  }, ${graph.parties.length} related ${graph.parties.length === 1 ? "inventor or assignee" : "inventors and assignees"}`;

  const legendItemStyle: CSSProperties = { display: "flex", alignItems: "center", gap: 6 };
  const legendSwatch = (stroke: string, square: boolean): CSSProperties => ({
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: square ? 2 : "50%",
    border: `2px solid ${stroke}`,
    background: t.panelBg,
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
      {/* Bordered viewport: makes the zoom/pan region visually distinct from
       * the surrounding page (which scrolls). */}
      <div style={{ border: `1px solid ${t.panelBorder}`, borderRadius: 8, overflow: "hidden" }}>
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={zoom.viewBox}
          style={{
            width: "100%",
            height: "auto",
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
          {/* Edges first so nodes and labels always draw on top. */}
          {layout.edges.map((edge, i) => {
            const active = edge.from === activeNodeId || edge.to === activeNodeId;
            return (
              <line
                key={`${edge.from}->${edge.to}-${i}`}
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke={t.axis}
                strokeWidth={active ? 2 : 1}
                opacity={active ? 1 : 0.5}
                pointerEvents="none"
              />
            );
          })}

          {/* Nodes + labels. */}
          {layout.nodes.map((node) => {
            const hovered = hoveredNodeId === node.id;
            const patent = patentById.get(node.id);
            if (patent) {
              const centered = graph.centerKind === "patent" && graph.center.id === node.id;
              const year = patentYearById.get(node.id);
              return (
                <g
                  key={node.id}
                  role={centered ? undefined : "button"}
                  tabIndex={centered ? undefined : 0}
                  aria-label={centered ? undefined : `Center map on patent ${patent.patentNumber}`}
                  style={{ cursor: centered ? "default" : "pointer" }}
                  onPointerDown={centered ? undefined : stopNodePointerDown}
                  onPointerEnter={() => setHoveredNodeId(node.id)}
                  onPointerLeave={() => setHoveredNodeId((cur) => (cur === node.id ? null : cur))}
                  onClick={centered ? undefined : () => onFocusPatent(patent)}
                  onKeyDown={(e) => {
                    if (!centered && isActivateKey(e)) {
                      e.preventDefault();
                      onFocusPatent(patent);
                    }
                  }}
                >
                  <title>{node.fullLabel}</title>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={centered ? node.r : PATENT_R}
                    fill={t.panelBg}
                    stroke={centered ? t.sliderAccent : t.stop}
                    strokeWidth={centered ? 2.5 : hovered ? 3 : 1.5}
                  />
                  <text
                    x={node.labelX}
                    y={node.labelY}
                    textAnchor={node.labelAnchor}
                    fontSize={11}
                    fill={t.label}
                    pointerEvents="none"
                  >
                    {node.label}
                    {year !== undefined && (
                      <tspan x={node.labelX} dy={13} fill={t.muted}>
                        {year}
                      </tspan>
                    )}
                  </text>
                </g>
              );
            }

            const party = partyById.get(node.id);
            if (!party) return null;
            const centered = graph.centerKind === "party" && graph.center.id === node.id;
            const isAssignee = party.ref.role === "assignee";
            const partyRadius = centered ? node.r : PARTY_R;
            const side = 2 * partyRadius * 0.85;
            return (
              <g
                key={node.id}
                role={centered ? undefined : "button"}
                tabIndex={centered ? undefined : 0}
                aria-label={
                  centered
                    ? undefined
                    : `Recenter map on ${party.ref.name}${isAssignee ? " (assignee)" : " (inventor)"}`
                }
                style={{ cursor: centered ? "default" : "pointer" }}
                onPointerDown={centered ? undefined : stopNodePointerDown}
                onPointerEnter={() => setHoveredNodeId(node.id)}
                onPointerLeave={() => setHoveredNodeId((cur) => (cur === node.id ? null : cur))}
                onClick={centered ? undefined : () => onFocusParty(party.ref)}
                onKeyDown={(e) => {
                  if (!centered && isActivateKey(e)) {
                    e.preventDefault();
                    onFocusParty(party.ref);
                  }
                }}
              >
                <title>{node.fullLabel}</title>
                {isAssignee ? (
                  <rect
                    x={node.x - side / 2}
                    y={node.y - side / 2}
                    width={side}
                    height={side}
                    rx={3}
                    fill={t.panelBg}
                    stroke={centered ? t.sliderAccent : t.rayCool}
                    strokeWidth={centered ? 2.5 : hovered ? 3 : 1.5}
                  />
                ) : (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={partyRadius}
                    fill={t.panelBg}
                    stroke={centered ? t.sliderAccent : t.rayWarm}
                    strokeWidth={centered ? 2.5 : hovered ? 3 : 1.5}
                  />
                )}
                <text
                  x={node.labelX}
                  y={node.labelY}
                  textAnchor={node.labelAnchor}
                  fontSize={11}
                  fill={t.body}
                  pointerEvents="none"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.9rem",
          marginTop: "0.5rem",
          fontSize: "0.7rem",
          color: t.muted,
        }}
      >
        <span style={legendItemStyle}>
          <span style={legendSwatch(t.rayWarm, false)} /> Inventor
        </span>
        <span style={legendItemStyle}>
          <span style={legendSwatch(t.rayCool, true)} /> Assignee
        </span>
        <span style={legendItemStyle}>
          <span style={legendSwatch(t.stop, false)} /> Patent
        </span>
      </div>
    </div>
  );
}
