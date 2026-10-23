import { useMemo, useState } from "react";
import type { Theme } from "../../types/theme.js";
import type { UniversalRelationshipGraph } from "../../utils/catalog/universalRelationshipGraph.js";
import {
  findUniversalConnectionPaths,
  universalConnectionDescription,
} from "../../utils/catalog/universalConnectionPaths.js";
import { panelCard, toggleBtn } from "../../utils/style/styles.js";
import { pluralize } from "../../utils/text.js";
import UniversalMapSearch from "./UniversalMapSearch.js";
import { truncateLabel } from "./layout.js";

interface UniversalConnectionTraceProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  from: string | null;
  to: string | null;
  includeCorporate: boolean;
  selectedNodeId: string | null;
  onChange: (from: string | null, to: string | null, includeCorporate: boolean) => void;
  onSelectNode: (nodeId: string, keyboard?: boolean) => void;
}

export default function UniversalConnectionTrace({
  graph,
  theme: t,
  from,
  to,
  includeCorporate,
  selectedNodeId,
  onChange,
  onSelectNode,
}: UniversalConnectionTraceProps) {
  const [pathIndex, setPathIndex] = useState(0);
  const result = useMemo(
    () => findUniversalConnectionPaths(graph, from, to, includeCorporate),
    [graph, from, to, includeCorporate],
  );
  const nodes = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node])), [graph.nodes]);
  const edges = useMemo(() => new Map(graph.edges.map((edge) => [edge.id, edge])), [graph.edges]);
  const names = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node.name])), [graph.nodes]);
  const path = result.paths[Math.min(pathIndex, result.paths.length - 1)];
  const buttonStyle = {
    ...toggleBtn(t, false, { flex: 0, hasRightBorder: false }),
    border: `1px solid ${t.toggleBorder}`,
    borderRadius: 4,
    minHeight: 44,
    padding: "8px 12px",
    fontSize: "0.75rem",
  };
  const change = (start: string | null, end: string | null, corporate = includeCorporate) => {
    setPathIndex(0);
    onChange(start, end, corporate);
  };

  return (
    <section aria-label="Trace connections" style={{ ...panelCard(t), padding: "1rem" }}>
      <p style={{ color: t.body, fontSize: "0.8rem", lineHeight: 1.6, marginTop: 0 }}>
        Choose any two entities to trace the shortest recorded connections between them. Links can be followed in either
        direction; each step below preserves the original relationship and its evidence.
      </p>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1rem" }}
      >
        {(["start", "end"] as const).map((side) => {
          const id = side === "start" ? from : to;
          return (
            <div key={side}>
              <UniversalMapSearch
                graph={graph}
                theme={t}
                label={side === "start" ? "Start entity" : "End entity"}
                onSelectNode={(nodeId) => change(side === "start" ? nodeId : from, side === "end" ? nodeId : to)}
              />
              <p style={{ color: t.title, fontSize: "0.8rem", minHeight: "1.2rem", overflowWrap: "anywhere" }}>
                {id ? nodes.get(id)?.name : "No entity selected"}
              </p>
              <button
                type="button"
                disabled={!selectedNodeId}
                style={{ ...buttonStyle, opacity: selectedNodeId ? 1 : 0.5 }}
                onClick={() => change(side === "start" ? selectedNodeId : from, side === "end" ? selectedNodeId : to)}
              >
                Use selection as {side}
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginTop: "1rem" }}>
        <label
          style={{ color: t.body, fontSize: "0.75rem", display: "flex", alignItems: "center", gap: 6, minHeight: 44 }}
        >
          <input
            type="checkbox"
            checked={includeCorporate}
            onChange={(event) => change(from, to, event.target.checked)}
          />
          Include corporate history
        </label>
        <button type="button" disabled={!from && !to} onClick={() => change(to, from)} style={buttonStyle}>
          Swap entities
        </button>
        <button type="button" disabled={!from && !to} onClick={() => change(null, null)} style={buttonStyle}>
          Clear trace
        </button>
      </div>
      <p role="status" style={{ color: t.label, fontSize: "0.78rem", lineHeight: 1.6 }}>
        {!from || !to
          ? "Select a start and end entity to find a connection."
          : result.distance === null
            ? `No connection found in the catalog${includeCorporate ? "." : " with corporate history excluded. Try including corporate history."}`
            : result.distance === 0
              ? "Both endpoints are the same entity: 0 steps."
              : `${result.distance} ${pluralize(result.distance, "step")} · ${result.truncated ? "Showing the first " : ""}${result.paths.length} shortest ${pluralize(result.paths.length, "path")}${result.truncated ? "; more paths exist" : ""}.`}
      </p>
      {result.paths.length > 1 && (
        <div role="group" aria-label="Shortest paths" style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {result.paths.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-pressed={path === result.paths[index]}
              onClick={() => setPathIndex(index)}
              style={{ ...buttonStyle, background: path === result.paths[index] ? t.toggleActiveBg : t.toggleBg }}
            >
              Path {index + 1}
            </button>
          ))}
        </div>
      )}
      {path && (
        <>
          <div style={{ overflowX: "auto", marginTop: "0.75rem" }}>
            <svg
              role="group"
              aria-label="Connection path"
              viewBox={`0 0 ${path.nodeIds.length * 205} 120`}
              style={{ display: "block", width: "100%", minWidth: path.nodeIds.length * 165, height: 120 }}
            >
              {path.edgeIds.map((id, index) => (
                <line
                  key={id}
                  x1={index * 205 + 183}
                  y1={52}
                  x2={(index + 1) * 205 + 20}
                  y2={52}
                  stroke={t.sliderAccent}
                  strokeWidth={2}
                />
              ))}
              {path.nodeIds.map((id, index) => {
                const node = nodes.get(id)!;
                const x = index * 205 + 20;
                return (
                  <g
                    key={id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.name}, ${node.kind === "author" ? "inventor" : node.kind}`}
                    onClick={(event) => onSelectNode(id, event.detail === 0)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelectNode(id, true);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <title>{node.name}</title>
                    <rect
                      x={x}
                      y={24}
                      width={163}
                      height={56}
                      rx={node.kind === "author" ? 25 : 5}
                      fill={id === selectedNodeId ? t.toggleActiveBg : t.panelBg}
                      stroke={node.kind === "author" ? t.rayWarm : t.rayCool}
                      strokeWidth={id === selectedNodeId ? 3 : 1.5}
                    />
                    <text x={x + 81.5} y={48} textAnchor="middle" fill={t.title} fontSize={11}>
                      {truncateLabel(node.name, 22)}
                    </text>
                    <text x={x + 81.5} y={65} textAnchor="middle" fill={t.muted} fontSize={10}>
                      {node.kind === "author" ? "inventor" : node.kind}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          {path.edgeIds.length > 0 && (
            <ol
              aria-label="Connection evidence"
              style={{ color: t.body, fontSize: "0.78rem", lineHeight: 1.6, paddingLeft: "1.5rem" }}
            >
              {path.edgeIds.map((id) => {
                const edge = edges.get(id)!;
                const date = edge.effectiveDate ?? edge.effectiveFrom;
                return (
                  <li key={id} style={{ padding: "0.5rem 0", borderBottom: `1px solid ${t.panelDivider}` }}>
                    {universalConnectionDescription(edge, names)}
                    {date && (
                      <span style={{ color: t.label }}>
                        {" "}
                        · {date}
                        {edge.effectiveTo ? `–${edge.effectiveTo}` : edge.effectiveFrom ? " onward" : ""}
                      </span>
                    )}
                    {edge.sourceUrl && (
                      <>
                        {" "}
                        ·{" "}
                        <a href={edge.sourceUrl} target="_blank" rel="noreferrer" style={{ color: t.descLinkColor }}>
                          Source ↗
                        </a>
                      </>
                    )}
                    {edge.note && <div style={{ color: t.muted }}>{edge.note}</div>}
                    {(edge.kind === "authorship" || edge.kind === "assignment") && (
                      <div>
                        <button
                          type="button"
                          onClick={(event) =>
                            onSelectNode(
                              nodes.get(edge.from)?.kind === "patent" ? edge.from : edge.to,
                              event.detail === 0,
                            )
                          }
                          style={{ ...buttonStyle, fontSize: "0.72rem" }}
                        >
                          Inspect supporting patent
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          )}
          {includeCorporate && (
            <p style={{ color: t.muted, fontSize: "0.7rem", lineHeight: 1.5 }}>
              Corporate dates apply to individual records. A path can span different periods.
            </p>
          )}
        </>
      )}
    </section>
  );
}
