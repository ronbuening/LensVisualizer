import { useMemo, useState } from "react";
import type { Theme } from "../../types/theme.js";
import type { UniversalConnectionPath } from "../../types/universalMap.js";
import type { UniversalEdgeKind, UniversalRelationshipGraph } from "../../utils/catalog/universalRelationshipGraph.js";
import { catalogCollator } from "../../utils/catalog/collation.js";
import { normalizeSearchText } from "../../utils/catalog/searchCatalog.js";
import {
  filterUniversalEdges,
  findUniversalPaths,
  UNIVERSAL_EDGE_LABELS,
  UNIVERSAL_ROLE_LABELS,
  universalRelationshipDate,
} from "../../utils/catalog/universalRelationshipQueries.js";
import { searchInput } from "../../utils/style/styles.js";
import UniversalMapSearch from "./UniversalMapSearch.js";
import UniversalRelationshipEvidence from "./UniversalRelationshipEvidence.js";
import { mapButton, mapRow } from "./universalMapStyles.js";

interface UniversalMapResearchProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  edgeKinds: readonly UniversalEdgeKind[];
  selectedNodeId: string | null;
  fromId: string | null;
  toId: string | null;
  connectionPaths?: readonly UniversalConnectionPath[];
  onSelectNode: (id: string) => void;
  onFindPath: (from: string, to: string) => void;
}

export default function UniversalMapResearch(props: UniversalMapResearchProps) {
  const { graph, theme: t, edgeKinds, selectedNodeId, onSelectNode } = props;
  const [table, setTable] = useState<"entities" | "relationships">("entities");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState({ column: "name", descending: false });
  const [expandedEdgeId, setExpandedEdgeId] = useState<string | null>(null);
  const nodes = useMemo(() => new Map(graph.nodes.map((n) => [n.id, n])), [graph]);
  const edges = useMemo(() => filterUniversalEdges(graph, edgeKinds), [graph, edgeKinds]);
  const counts = useMemo(() => {
    const result = new Map<string, number>();
    for (const e of edges) for (const id of [e.from, e.to]) result.set(id, (result.get(id) ?? 0) + 1);
    return result;
  }, [edges]);
  const normalized = normalizeSearchText(query);
  const rows = useMemo(() => {
    const data =
      table === "entities"
        ? graph.nodes.map((n) => ({
            id: n.id,
            name: n.name,
            type: UNIVERSAL_ROLE_LABELS[n.kind],
            other: "",
            date: n.kind === "patent" ? String(n.patent.patentYear ?? "") : "",
            search: `${n.name} ${UNIVERSAL_ROLE_LABELS[n.kind]} ${n.kind === "patent" ? n.patent.lenses.map((l) => l.name).join(" ") : ""}`,
          }))
        : edges.map((e) => ({
            id: e.id,
            name: nodes.get(e.from)!.name,
            other: nodes.get(e.to)!.name,
            type: UNIVERSAL_EDGE_LABELS[e.kind],
            date: universalRelationshipDate(e),
            search: `${nodes.get(e.from)!.name} ${nodes.get(e.to)!.name} ${UNIVERSAL_EDGE_LABELS[e.kind]} ${universalRelationshipDate(e)} ${e.note ?? ""}`,
          }));
    return data
      .filter((row) => normalizeSearchText(row.search).includes(normalized))
      .sort((a, b) => {
        const column = sort.column as "name" | "type" | "date" | "other";
        return (
          (sort.descending ? -1 : 1) *
          (catalogCollator.compare(a[column], b[column]) || catalogCollator.compare(a.id, b.id))
        );
      });
  }, [graph, nodes, edges, table, normalized, sort]);
  const safePage = Math.min(page, Math.max(0, Math.ceil(rows.length / 50) - 1));
  const shown = rows.slice(safePage * 50, (safePage + 1) * 50);
  const edgeById = useMemo(() => new Map(edges.map((e) => [e.id, e])), [edges]);
  const heading = (column: string, title: string) => (
    <th
      scope="col"
      aria-sort={sort.column === column ? (sort.descending ? "descending" : "ascending") : "none"}
      style={{ padding: 4, textAlign: "left" }}
    >
      <button
        style={mapButton(t)}
        onClick={() => {
          setSort({ column, descending: sort.column === column && !sort.descending });
          setPage(0);
        }}
      >
        {title}
        {sort.column === column ? (sort.descending ? " ↓" : " ↑") : ""}
      </button>
    </th>
  );
  return (
    <div>
      <UniversalPathFinder {...props} />
      <section aria-label="Research records" style={{ marginTop: 20 }}>
        <div style={mapRow}>
          {(["entities", "relationships"] as const).map((kind) => (
            <button
              key={kind}
              style={mapButton(t, table === kind)}
              aria-pressed={table === kind}
              onClick={() => {
                setTable(kind);
                setPage(0);
                setSort({ column: "name", descending: false });
              }}
            >
              {kind === "entities" ? "Entities" : "Relationships"}
            </button>
          ))}
          <label style={{ color: t.label, fontSize: "0.75rem" }}>
            Search records{" "}
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
        </div>
        <p role="status" style={{ color: t.muted, fontSize: "0.75rem" }}>
          {rows.length} matching {table} · {shown.length ? `${safePage * 50 + 1}–${safePage * 50 + shown.length}` : "0"}{" "}
          shown.{" "}
          {table === "entities"
            ? "Connection counts use the active filters; all entities remain searchable."
            : `${edges.length} of ${graph.edges.length} recorded relationships enabled.`}
        </p>
        <div style={{ overflow: "auto", maxHeight: "65vh", border: `1px solid ${t.panelBorder}`, borderRadius: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.75rem", color: t.body }}>
            <caption style={{ textAlign: "left", padding: 8, color: t.label }}>
              {table === "entities" ? "Catalog entities" : "Recorded relationships"}
            </caption>
            <thead style={{ position: "sticky", top: 0, background: t.panelBg, zIndex: 1 }}>
              <tr>
                {heading("name", table === "entities" ? "Entity" : "From")}
                {heading("type", "Type")}
                {table === "relationships" && heading("other", "To")}
                {heading("date", "Date")}
                {table === "entities" ? <th scope="col">Connections</th> : <th scope="col">Evidence</th>}
              </tr>
            </thead>
            <tbody>
              {shown.map((row) => {
                const edge = edgeById.get(row.id);
                return (
                  <tr
                    key={row.id}
                    style={{
                      borderTop: `1px solid ${t.panelDivider}`,
                      background: selectedNodeId === row.id ? t.toggleActiveBg : undefined,
                      verticalAlign: "top",
                    }}
                  >
                    <td style={{ padding: 4 }}>
                      <button
                        style={{ ...mapButton(t), textAlign: "left", overflowWrap: "anywhere" }}
                        onClick={() => onSelectNode(table === "entities" ? row.id : edge!.from)}
                      >
                        {row.name}
                      </button>
                    </td>
                    <td style={{ padding: 10 }}>{row.type}</td>
                    {table === "relationships" && (
                      <td style={{ padding: 4 }}>
                        <button
                          style={{ ...mapButton(t), textAlign: "left", overflowWrap: "anywhere" }}
                          onClick={() => onSelectNode(edge!.to)}
                        >
                          {row.other}
                        </button>
                      </td>
                    )}
                    <td style={{ padding: 10 }}>{row.date || "Not recorded"}</td>
                    <td style={{ padding: 4 }}>
                      {table === "entities" ? (
                        <span>{counts.get(row.id) ?? 0}</span>
                      ) : (
                        <>
                          <button
                            style={mapButton(t, expandedEdgeId === row.id)}
                            aria-expanded={expandedEdgeId === row.id}
                            onClick={() => setExpandedEdgeId(expandedEdgeId === row.id ? null : row.id)}
                          >
                            Evidence
                          </button>
                          {expandedEdgeId === row.id && (
                            <UniversalRelationshipEvidence edge={edge!} graph={graph} theme={t} />
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {!shown.length && <p>No matching records.</p>}
        <div style={{ ...mapRow, marginTop: 8 }}>
          <button style={mapButton(t)} disabled={safePage === 0} onClick={() => setPage(safePage - 1)}>
            Previous records
          </button>
          <button
            style={mapButton(t)}
            disabled={(safePage + 1) * 50 >= rows.length}
            onClick={() => setPage(safePage + 1)}
          >
            Next records
          </button>
        </div>
      </section>
    </div>
  );
}

function UniversalPathFinder({
  graph,
  theme: t,
  edgeKinds,
  selectedNodeId,
  fromId,
  toId,
  connectionPaths,
  onSelectNode,
  onFindPath,
}: UniversalMapResearchProps) {
  const [from, setFrom] = useState(fromId ?? selectedNodeId);
  const [to, setTo] = useState(toId);
  const [alternative, setAlternative] = useState(0);
  const [savedEndpoints, setSavedEndpoints] = useState({ fromId, toId });
  // Sync changed URL endpoints independently so a new map selection keeps the destination draft.
  if (savedEndpoints.fromId !== fromId || savedEndpoints.toId !== toId) {
    setSavedEndpoints({ fromId, toId });
    if (savedEndpoints.fromId !== fromId) setFrom(fromId ?? selectedNodeId);
    if (savedEndpoints.toId !== toId) setTo(toId);
    setAlternative(0);
  }
  const nodes = useMemo(() => new Map(graph.nodes.map((n) => [n.id, n])), [graph]);
  const edgeById = useMemo(() => new Map(graph.edges.map((e) => [e.id, e])), [graph]);
  const paths = useMemo(
    () => connectionPaths ?? (fromId && toId ? findUniversalPaths(graph, fromId, toId, edgeKinds) : []),
    [graph, fromId, toId, edgeKinds, connectionPaths],
  );
  const unfilteredConnection = useMemo(
    () => (fromId && toId && !paths.length ? findUniversalPaths(graph, fromId, toId, undefined, 1).length > 0 : false),
    [graph, fromId, toId, paths.length],
  );
  const path = paths[Math.min(alternative, paths.length - 1)];
  return (
    <section
      aria-label="Find a connection"
      style={{ padding: 14, border: `1px solid ${t.panelBorder}`, borderRadius: 8, background: t.panelBg }}
    >
      <h2 style={{ margin: "0 0 10px", fontSize: "1rem", color: t.title }}>How are they connected?</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 12 }}>
        <div>
          <UniversalMapSearch graph={graph} theme={t} label="Connection start" onSelectNode={setFrom} />
          <p style={{ color: t.label, fontSize: "0.8rem", overflowWrap: "anywhere" }}>
            {from ? nodes.get(from)?.name : "Choose a starting entity"}
          </p>
        </div>
        <div>
          <UniversalMapSearch graph={graph} theme={t} label="Connection end" onSelectNode={setTo} />
          <p style={{ color: t.label, fontSize: "0.8rem", overflowWrap: "anywhere" }}>
            {to ? nodes.get(to)?.name : "Choose an ending entity"}
          </p>
        </div>
      </div>
      <button
        style={mapButton(t, true)}
        disabled={!from || !to}
        onClick={() => {
          if (from && to) onFindPath(from, to);
        }}
      >
        Find connection
      </button>
      {fromId && toId && (
        <div aria-live="polite">
          {!path ? (
            <p role="status">
              {unfilteredConnection
                ? "No connection under these filters. Enable more relationship types to see the recorded connection."
                : "No recorded connection between these entities."}
            </p>
          ) : (
            <>
              <p style={{ color: t.label, fontSize: "0.78rem" }}>
                {path.edgeIds.length === 0
                  ? "Both endpoints are the same entity."
                  : `${path.edgeIds.length} steps in this shortest recorded path.`}
              </p>
              {paths.length > 1 && (
                <div style={mapRow}>
                  {paths.map((_, i) => (
                    <button
                      key={i}
                      style={mapButton(t, i === Math.min(alternative, paths.length - 1))}
                      aria-pressed={i === Math.min(alternative, paths.length - 1)}
                      onClick={() => setAlternative(i)}
                    >
                      Path {i + 1}
                    </button>
                  ))}
                  <span style={{ color: t.muted, fontSize: "0.72rem" }}>Up to three equally short alternatives.</span>
                </div>
              )}
              <div style={{ maxHeight: 360, overflow: "auto", marginTop: 10 }}>
                <svg
                  viewBox={`0 0 520 ${path.nodeIds.length * 74}`}
                  width="100%"
                  style={{ minWidth: 300, maxWidth: 650, display: "block" }}
                  role="group"
                  aria-label="Connection path diagram"
                >
                  {path.nodeIds.slice(1).map((id, i) => (
                    <line
                      key={`${id}:${i}`}
                      x1={260}
                      x2={260}
                      y1={i * 74 + 58}
                      y2={(i + 1) * 74 + 10}
                      stroke={t.sliderAccent}
                      strokeWidth={2}
                    />
                  ))}
                  {path.nodeIds.map((id, i) => (
                    <g
                      key={id}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select path entity ${nodes.get(id)!.name}`}
                      onClick={() => onSelectNode(id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onSelectNode(id);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <title>{nodes.get(id)!.name}</title>
                      <rect
                        x={10}
                        y={i * 74 + 10}
                        width={500}
                        height={48}
                        rx={6}
                        fill={t.toggleActiveBg}
                        stroke={t.panelBorder}
                      />
                      <text x={24} y={i * 74 + 39} fontSize={13} fill={t.title}>
                        {nodes.get(id)!.name.length > 55 ? `${nodes.get(id)!.name.slice(0, 54)}…` : nodes.get(id)!.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <p style={{ color: t.muted, fontSize: "0.75rem" }}>
                These records span their stated dates. A connection does not establish current ownership or simultaneous
                relationships.
              </p>
              <ol aria-label="Connection path evidence" style={{ paddingLeft: 24 }}>
                {path.edgeIds.map((id) => (
                  <li key={id} style={{ marginBottom: 12 }}>
                    <UniversalRelationshipEvidence edge={edgeById.get(id)!} graph={graph} theme={t} />
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </section>
  );
}
