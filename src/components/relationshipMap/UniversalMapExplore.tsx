import { useEffect, useMemo, useRef, useState } from "react";
import type { Theme } from "../../types/theme.js";
import type { UniversalEdgeKind, UniversalRelationshipGraph } from "../../utils/catalog/universalRelationshipGraph.js";
import {
  UNIVERSAL_ROLE_LABELS,
  filterUniversalEdges,
  universalAdjacency,
} from "../../utils/catalog/universalRelationshipQueries.js";
import { normalizeSearchText } from "../../utils/catalog/searchCatalog.js";
import { searchInput } from "../../utils/style/styles.js";
import useMediaQuery from "../../utils/useMediaQuery.js";
import { buildUniversalNeighborhoods, layoutUniversalNeighborhoods } from "./universalExploreLayout.js";
import type { UniversalRelationshipLayout } from "./universalLayout.js";
import UniversalRelationshipEvidence from "./UniversalRelationshipEvidence.js";
import { mapButton, mapRow } from "./universalMapStyles.js";
import { pluralize } from "../../utils/text.js";

interface UniversalMapExploreProps {
  graph: UniversalRelationshipGraph;
  layout: UniversalRelationshipLayout;
  theme: Theme;
  selectedNodeId: string | null;
  neighborhoodId: string | null;
  edgeKinds: readonly UniversalEdgeKind[];
  onSelectNode: (id: string) => void;
  onOpenFullMap: (id: string) => void;
  onOpenNeighborhood: (id: string | null, anchorId: string | null) => void;
}

export default function UniversalMapExplore({
  graph,
  layout,
  theme: t,
  selectedNodeId,
  neighborhoodId,
  edgeKinds,
  onSelectNode,
  onOpenFullMap,
  onOpenNeighborhood,
}: UniversalMapExploreProps) {
  const wide = useMediaQuery("(min-width: 900px)", { ssrDefault: false });
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(960);
  const [query, setQuery] = useState("");
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [bridgeId, setBridgeId] = useState<string | null>(null);
  const [keyboardId, setKeyboardId] = useState<string | null>(null);
  const summaries = useRef(new Map<string, SVGGElement>());
  const model = useMemo(() => buildUniversalNeighborhoods(graph, layout), [graph, layout]);
  const summary = useMemo(() => layoutUniversalNeighborhoods(graph, model, width), [graph, model, width]);
  const nodeById = useMemo(() => new Map(graph.nodes.map((n) => [n.id, n])), [graph]);
  const enabledEdges = useMemo(
    () => new Map(filterUniversalEdges(graph, edgeKinds).map((e) => [e.id, e])),
    [graph, edgeKinds],
  );
  const bridges = useMemo(
    () =>
      model.bridges
        .map((b) => ({ ...b, edgeIds: b.edgeIds.filter((id) => enabledEdges.has(id)) }))
        .filter((b) => b.edgeIds.length),
    [model, enabledEdges],
  );
  const positionById = new Map(summary.nodes.map((n) => [n.id, n]));
  const pinned = model.neighborhoods.find((n) => n.id === pinnedId);
  const neighborhood = model.neighborhoods.find((n) => n.id === neighborhoodId);
  const selected = selectedNodeId ? nodeById.get(selectedNodeId) : undefined;
  const centerId = selected?.id ?? neighborhood?.anchorId;
  const chosenBridge = bridges.find((b) => b.id === bridgeId);
  const matching = model.neighborhoods.filter((n) =>
    normalizeSearchText(n.anchorLabel).includes(normalizeSearchText(query)),
  );
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const measure = () => {
      if (element.clientWidth) setWidth(element.clientWidth);
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={container}>
      {centerId ? (
        <>
          <nav aria-label="Explore breadcrumbs" style={{ ...mapRow, marginBottom: 8 }}>
            <button style={mapButton(t)} onClick={() => onOpenNeighborhood(null, null)}>
              All neighborhoods
            </button>
            {neighborhood && (
              <>
                <span aria-hidden="true">/</span>
                <button style={mapButton(t)} onClick={() => onSelectNode(neighborhood.anchorId)}>
                  {neighborhood.anchorLabel}
                </button>
              </>
            )}
            {selected && selected.id !== neighborhood?.anchorId && (
              <span style={{ color: t.label, fontSize: "0.8rem" }}>/ {selected.name}</span>
            )}
          </nav>
          <UniversalLocalConnections
            key={`${centerId}:${edgeKinds.join(",")}`}
            graph={graph}
            centerId={centerId}
            edgeKinds={edgeKinds}
            theme={t}
            onSelectNode={onSelectNode}
            onOpenFullMap={onOpenFullMap}
          />
        </>
      ) : (
        <>
          <div style={{ ...mapRow, justifyContent: "space-between", marginBottom: 10 }}>
            <h2 style={{ margin: 0, color: t.title, fontSize: "1rem" }}>{model.neighborhoods.length} neighborhoods</h2>
            <label style={{ fontSize: "0.75rem", color: t.label }}>
              Find a neighborhood{" "}
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ ...searchInput(t), maxWidth: "100%" }}
              />
            </label>
          </div>
          <p style={{ fontSize: "0.75rem", color: t.muted }}>
            Select a neighborhood to inspect its connections, then open it to explore individual entities. Neighborhoods
            organize records; they do not establish ownership.
          </p>
          <p style={{ fontSize: "0.7rem", color: t.label }}>
            Solid links: patent records · Dashed: corporate history · Dotted: catalog grouping. Counts describe the full
            neighborhood.
          </p>
          {pinned && (
            <section aria-label="Selected neighborhood" style={{ marginTop: 12 }}>
              <div style={mapRow}>
                <h3 style={{ color: t.title, fontSize: "0.9rem" }}>{pinned.anchorLabel}</h3>
                <button style={mapButton(t, true)} onClick={() => onOpenNeighborhood(pinned.id, pinned.anchorId)}>
                  Open neighborhood
                </button>
              </div>
              <div style={mapRow}>
                {bridges
                  .filter((b) => b.from === pinned.id || b.to === pinned.id)
                  .map((b) => (
                    <button key={b.id} style={mapButton(t, bridgeId === b.id)} onClick={() => setBridgeId(b.id)}>
                      {positionById.get(b.from === pinned.id ? b.to : b.from)?.anchorLabel} · {b.edgeIds.length}{" "}
                      {b.category} {pluralize(b.edgeIds.length, "record")}
                    </button>
                  ))}
              </div>
              {!bridges.some((b) => b.from === pinned.id || b.to === pinned.id) && (
                <p style={{ color: t.muted }}>No connections to other neighborhoods under these filters.</p>
              )}
            </section>
          )}
          {chosenBridge && (
            <section aria-label="Neighborhood connection evidence" style={{ marginTop: 12 }}>
              <h3 style={{ color: t.title, fontSize: "0.9rem" }}>{chosenBridge.edgeIds.length} underlying records</h3>
              <ul style={{ maxHeight: 360, overflow: "auto" }}>
                {chosenBridge.edgeIds.map((id) => (
                  <li key={id} style={{ marginBottom: 12 }}>
                    <UniversalRelationshipEvidence edge={enabledEdges.get(id)!} graph={graph} theme={t} />
                  </li>
                ))}
              </ul>
            </section>
          )}
          {wide && !query ? (
            <div
              style={{
                maxHeight: "70vh",
                overflow: "auto",
                border: `1px solid ${t.panelBorder}`,
                borderRadius: 8,
                background: t.panelBg,
              }}
            >
              <svg
                width="100%"
                height={summary.height}
                viewBox={`0 0 ${summary.width} ${summary.height}`}
                role="group"
                aria-label="Neighborhood overview"
              >
                {summary.networks.map((network) => (
                  <g key={network.index} aria-hidden="true">
                    <rect
                      {...{ x: network.x, y: network.y, width: network.width, height: network.height }}
                      fill="none"
                      stroke={t.panelBorder}
                      strokeDasharray="4 5"
                      rx={8}
                    />
                    <text x={network.x + 12} y={network.y + 19} fill={t.muted} fontSize={11}>
                      Network {network.index + 1}
                    </text>
                  </g>
                ))}
                {bridges.map((bridge) => {
                  const a = positionById.get(bridge.from)!,
                    b = positionById.get(bridge.to)!;
                  const x1 = a.x + a.width / 2,
                    y1 = a.y + a.height / 2,
                    x2 = b.x + b.width / 2,
                    y2 = b.y + b.height / 2;
                  const active = bridge.from === pinnedId || bridge.to === pinnedId;
                  const color =
                    bridge.category === "corporate"
                      ? t.sliderAccent
                      : bridge.category === "patent"
                        ? t.rayCool
                        : t.imgLine;
                  const d = `M ${x1} ${y1} Q ${(x1 + x2) / 2 + 28} ${(y1 + y2) / 2 - 24} ${x2} ${y2}`;
                  return (
                    <g key={bridge.id} onClick={() => setBridgeId(bridge.id)} style={{ cursor: "pointer" }}>
                      <title>{`${bridge.edgeIds.length} ${bridge.category} records between ${a.anchorLabel} and ${b.anchorLabel}`}</title>
                      <path d={d} fill="none" stroke="transparent" strokeWidth={24} />
                      <path
                        d={d}
                        fill="none"
                        stroke={color}
                        strokeWidth={active ? 3 : 1.5}
                        strokeDasharray={
                          bridge.category === "corporate" ? "6 4" : bridge.category === "catalog" ? "1 3" : undefined
                        }
                        opacity={pinnedId ? (active ? 0.95 : 0.12) : 0.4}
                        pointerEvents="none"
                      />
                    </g>
                  );
                })}
                {summary.nodes.map((n, i) => (
                  <g
                    key={n.id}
                    role="button"
                    aria-pressed={pinnedId === n.id}
                    aria-label={`Inspect neighborhood ${n.anchorLabel}`}
                    tabIndex={(keyboardId ?? summary.nodes[0]?.id) === n.id ? 0 : -1}
                    ref={(element) => {
                      if (element) summaries.current.set(n.id, element);
                      else summaries.current.delete(n.id);
                    }}
                    onFocus={() => setKeyboardId(n.id)}
                    onClick={() => {
                      setPinnedId(n.id);
                      setBridgeId(null);
                    }}
                    onDoubleClick={() => onOpenNeighborhood(n.id, n.anchorId)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setPinnedId(n.id);
                        setBridgeId(null);
                      }
                      if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) {
                        e.preventDefault();
                        const next =
                          summary.nodes[
                            (i + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : summary.nodes.length - 1)) %
                              summary.nodes.length
                          ];
                        summaries.current.get(next.id)?.focus();
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <title>{n.anchorLabel}</title>
                    <rect
                      x={n.x}
                      y={n.y}
                      width={n.width}
                      height={n.height}
                      rx={8}
                      fill={t.panelBg}
                      stroke={pinnedId === n.id ? t.sliderAccent : t.panelBorder}
                      strokeWidth={pinnedId === n.id ? 2 : 1}
                    />
                    <foreignObject
                      x={n.x + 12}
                      y={n.y + 10}
                      width={n.width - 24}
                      height={n.height - 20}
                      pointerEvents="none"
                    >
                      <div style={{ color: t.title, fontSize: 13, lineHeight: 1.4, overflowWrap: "anywhere" }}>
                        <strong style={{ display: "block", maxHeight: 55, overflow: "hidden" }}>{n.anchorLabel}</strong>
                        <div style={{ color: t.label, fontSize: 11, marginTop: 5 }}>
                          {n.patents} {pluralize(n.patents, "patent")} · {n.inventors}{" "}
                          {pluralize(n.inventors, "inventor")}
                          <br />
                          {n.nodeIds.length} {pluralize(n.nodeIds.length, "entity")}
                        </div>
                      </div>
                    </foreignObject>
                  </g>
                ))}
              </svg>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                gap: 8,
              }}
            >
              {matching.map((n) => (
                <button
                  key={n.id}
                  style={{ ...mapButton(t, pinnedId === n.id), textAlign: "left", padding: 14 }}
                  aria-pressed={pinnedId === n.id}
                  onClick={() => {
                    setPinnedId(n.id);
                    setBridgeId(null);
                  }}
                >
                  <strong style={{ display: "block" }}>{n.anchorLabel}</strong>
                  <span style={{ color: t.muted, display: "block", marginTop: 6 }}>
                    {n.patents} {pluralize(n.patents, "patent")} · {n.inventors} {pluralize(n.inventors, "inventor")} ·{" "}
                    {n.nodeIds.length} {pluralize(n.nodeIds.length, "entity")}
                  </span>
                </button>
              ))}
              {!matching.length && <p role="status">No matching neighborhoods.</p>}
            </div>
          )}
        </>
      )}
    </div>
  );
}

interface UniversalLocalConnectionsProps {
  graph: UniversalRelationshipGraph;
  centerId: string;
  edgeKinds: readonly UniversalEdgeKind[];
  theme: Theme;
  onSelectNode: (id: string) => void;
  onOpenFullMap: (id: string) => void;
}

function UniversalLocalConnections({
  graph,
  centerId,
  edgeKinds,
  theme: t,
  onSelectNode,
  onOpenFullMap,
}: UniversalLocalConnectionsProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [evidenceId, setEvidenceId] = useState<string | null>(null);
  const nodes = useMemo(() => new Map(graph.nodes.map((n) => [n.id, n])), [graph]);
  const adjacency = useMemo(() => universalAdjacency(graph, edgeKinds), [graph, edgeKinds]);
  const neighbors = [...new Set((adjacency.get(centerId) ?? []).map((n) => n.nodeId))];
  const filtered = neighbors.filter((id) =>
    normalizeSearchText(nodes.get(id)!.name).includes(normalizeSearchText(query)),
  );
  const shown = filtered.slice(page * 25, (page + 1) * 25);
  const center = nodes.get(centerId)!;
  const height = Math.max(180, Math.ceil(shown.length / 2) * 66 + 24);
  const evidence = (adjacency.get(centerId) ?? []).filter((n) => n.nodeId === evidenceId);
  return (
    <section aria-label="Local connections">
      <div style={{ ...mapRow, justifyContent: "space-between" }}>
        <h2 style={{ color: t.title, fontSize: "1rem", overflowWrap: "anywhere", minWidth: 0 }}>{center.name}</h2>
        <button
          type="button"
          style={{ ...mapButton(t), fontSize: "0.75rem", textDecoration: "underline" }}
          onClick={() => onOpenFullMap(centerId)}
        >
          Open full map <span aria-hidden="true">→</span>
        </button>
      </div>
      <p style={{ color: t.muted, fontSize: "0.72rem", margin: "0 0 14px" }}>
        Open the full map with this entity selected and your filters preserved.
      </p>
      <div style={mapRow}>
        <label style={{ color: t.label, fontSize: "0.75rem" }}>
          Search all {neighbors.length} neighbors{" "}
          <input
            type="search"
            style={searchInput(t)}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
          />
        </label>
        <span role="status" style={{ color: t.muted, fontSize: "0.75rem" }}>
          {shown.length ? `${page * 25 + 1}–${page * 25 + shown.length}` : "0"} of {filtered.length} ·{" "}
          {Math.max(0, filtered.length - (page + 1) * 25)} remaining
        </span>
      </div>
      <div
        style={{
          maxHeight: 520,
          overflow: "auto",
          marginTop: 10,
          border: `1px solid ${t.panelBorder}`,
          borderRadius: 8,
        }}
      >
        <svg
          viewBox={`0 0 720 ${height}`}
          width="100%"
          style={{ minWidth: 580, display: "block", background: t.panelBg }}
          role="group"
          aria-label={`Direct relationships of ${center.name}`}
        >
          {shown.map((id, i) => (
            <path
              key={id}
              d={`M 360 ${height / 2} Q ${i % 2 ? 410 : 310} ${i * 8 + height / 3} ${i % 2 ? 444 : 276} ${Math.floor(i / 2) * 66 + 42}`}
              stroke={t.rayCool}
              opacity={0.45}
              fill="none"
            />
          ))}
          <foreignObject x={284} y={height / 2 - 80} width={152} height={160}>
            <div style={{ display: "flex", alignItems: "center", height: "100%", padding: 4, boxSizing: "border-box" }}>
              <button
                type="button"
                aria-label={`Open full map with ${center.name} selected`}
                title={center.name}
                onClick={() => onOpenFullMap(centerId)}
                style={{
                  ...mapButton(t, true),
                  width: "100%",
                  padding: "12px 8px",
                  border: `2px solid ${t.sliderAccent}`,
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: t.title,
                    fontSize: 14,
                    lineHeight: "18px",
                    fontWeight: 600,
                    overflowWrap: "anywhere",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                  }}
                >
                  {center.name}
                </span>
                <span style={{ fontSize: 12, textDecoration: "underline" }}>
                  Open full map <span aria-hidden="true">→</span>
                </span>
              </button>
            </div>
          </foreignObject>
          {shown.map((id, i) => {
            const n = nodes.get(id)!;
            const x = i % 2 ? 444 : 12,
              y = Math.floor(i / 2) * 66 + 12;
            return (
              <g key={id} aria-hidden="true" onClick={() => onSelectNode(id)} style={{ cursor: "pointer" }}>
                <title>{n.name}</title>
                <rect x={x} y={y} width={264} height={54} rx={6} fill={t.panelBg} stroke={t.panelBorder} />
                <text x={x + 10} y={y + 21} fontSize={12} fill={t.title}>
                  {n.name.length > 30 ? `${n.name.slice(0, 29)}…` : n.name}
                </text>
                <text x={x + 10} y={y + 40} fontSize={11} fill={t.muted}>
                  {UNIVERSAL_ROLE_LABELS[n.kind]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p style={{ color: t.muted, fontSize: "0.72rem" }}>
        Direct neighbors under the active filters. Use the list for complete names and relationship evidence.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {shown.map((id) => (
          <li key={id} style={{ ...mapRow, borderTop: `1px solid ${t.panelDivider}`, justifyContent: "space-between" }}>
            <button style={{ ...mapButton(t), textAlign: "left", flex: "1 1 220px" }} onClick={() => onSelectNode(id)}>
              {nodes.get(id)!.name}{" "}
              <span style={{ color: t.muted }}>· {UNIVERSAL_ROLE_LABELS[nodes.get(id)!.kind]}</span>
            </button>
            <button
              style={mapButton(t, evidenceId === id)}
              onClick={() => setEvidenceId(evidenceId === id ? null : id)}
              aria-label={`Evidence for ${nodes.get(id)!.name}`}
            >
              Evidence
            </button>
            {evidenceId === id && (
              <div style={{ flexBasis: "100%", padding: 10 }}>
                {evidence.map((n) => (
                  <UniversalRelationshipEvidence key={n.edge.id} edge={n.edge} graph={graph} theme={t} />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {!shown.length && (
        <p role="status">
          {neighbors.length ? "No matching neighbors." : "No direct relationships under these filters."}
        </p>
      )}
      <div style={mapRow}>
        <button style={mapButton(t)} disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
          Previous neighbors
        </button>
        <button
          style={mapButton(t)}
          disabled={(page + 1) * 25 >= filtered.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next neighbors
        </button>
      </div>
    </section>
  );
}
