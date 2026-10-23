import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { Theme } from "../../types/theme.js";
import type { UniversalRelationshipGraph } from "../../utils/catalog/universalRelationshipGraph.js";
import type { RelationshipInsights } from "../../utils/catalog/relationshipInsights.js";
import { panelCard, searchInput, toggleBtn } from "../../utils/style/styles.js";
import { pluralize } from "../../utils/text.js";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import useSvgViewport from "../hooks/useSvgViewport.js";
import { layoutInventorAffiliations } from "./inventorAffiliationLayout.js";
import { truncateLabel } from "./layout.js";
import { PatentEvidence } from "./RelationshipViewShared.js";

interface InventorAffiliationMapProps {
  graph: UniversalRelationshipGraph;
  network: RelationshipInsights;
  theme: Theme;
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string, keyboard?: boolean) => void;
  focusRequest?: { nodeId: string; requestId: number };
}

export default function InventorAffiliationMap({
  graph,
  network,
  theme: t,
  selectedNodeId,
  onSelectNode,
  focusRequest,
}: InventorAffiliationMapProps) {
  const nodes = useMemo(() => new Map(graph.nodes.map((node) => [node.id, node])), [graph.nodes]);
  const [includeSingle, setIncludeSingle] = useState(false);
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [inspectedId, setInspectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const filterId = useId();
  const records = useMemo(
    () =>
      network.inventors.filter(
        (record) =>
          record.affiliations.length >= (includeSingle ? 1 : 2) &&
          (!assigneeFilter || record.affiliations.some((link) => link.assigneeId === assigneeFilter)),
      ),
    [network, includeSingle, assigneeFilter],
  );
  const layout = useMemo(() => layoutInventorAffiliations(records), [records]);
  const companyPositions = useMemo(() => new Map(layout.assignees.map((node) => [node.id, node])), [layout]);
  const recordsById = useMemo(() => new Map(records.map((record) => [record.inventor.id, record])), [records]);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoom = useViewBoxZoom(layout.width, layout.height, records.length > 0, svgRef);
  const viewport = useSvgViewport(svgRef, zoom.viewBox);
  const screenScale =
    viewport.width && viewport.height ? Math.min(viewport.width / zoom.state.vbW, viewport.height / zoom.state.vbH) : 1;
  const handledFocus = useRef<typeof focusRequest>(undefined);
  const { reset, centerOn } = zoom;
  const currentZoom = zoom.state.zoom;
  useEffect(() => reset(), [layout, reset]);
  useEffect(() => {
    if (!focusRequest || focusRequest === handledFocus.current) return;
    const point = [...layout.assignees, ...layout.inventors].find((node) => node.id === focusRequest.nodeId);
    if (!point) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect?.width || !rect.height) return;
    handledFocus.current = focusRequest;
    const fitScale = Math.min(rect.width / layout.width, rect.height / layout.height);
    centerOn(point.x, point.y, Math.max(currentZoom, 1 / fitScale));
  }, [focusRequest, layout, centerOn, currentZoom]);
  const activeId =
    hoveredId ??
    (selectedNodeId && (recordsById.has(selectedNodeId) || companyPositions.has(selectedNodeId))
      ? selectedNodeId
      : recordsById.has(inspectedId ?? "")
        ? inspectedId
        : null);
  const activeCompanies = new Set(recordsById.get(activeId ?? "")?.affiliations.map((link) => link.assigneeId));
  const inspected = recordsById.get(selectedNodeId ?? "") ?? recordsById.get(inspectedId ?? "");
  const multiCount = network.inventors.filter((record) => record.affiliations.length > 1).length;
  const unassignedCount = network.inventors.filter((record) => record.affiliations.length === 0).length;
  const hiddenInventor = network.inventors.find(
    (record) => record.inventor.id === selectedNodeId && !recordsById.has(record.inventor.id),
  );
  const buttonStyle = {
    ...toggleBtn(t, false, { flex: 0, hasRightBorder: false }),
    border: `1px solid ${t.toggleBorder}`,
    borderRadius: 4,
    minHeight: 44,
    padding: "8px 12px",
    fontSize: "0.75rem",
  };
  const pick = (id: string, keyboard = false) => {
    if (recordsById.has(id)) setInspectedId(id);
    onSelectNode(id, keyboard);
  };
  const nodeButtonStyle = {
    background: "none",
    border: "none",
    color: t.descLinkColor,
    cursor: "pointer",
    font: "inherit",
    padding: "6px 0",
    textAlign: "left" as const,
    minHeight: 36,
  };

  return (
    <section aria-label="Inventor affiliations">
      <p style={{ color: t.body, fontSize: "0.8rem", lineHeight: 1.6, marginTop: 0 }}>
        Inventors sit between their recorded assignees, pulled toward companies with more shared patents. Thicker lines
        mean more distinct catalog patents. Select an inventor to compare counts and inspect the supporting patents.
      </p>
      <p style={{ color: t.muted, fontSize: "0.72rem", lineHeight: 1.6 }}>
        These are patent attribution links, not employment records. Historical assignee names remain separate. Positions
        include spacing offsets; the counts give the exact strength of each connection.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", gap: "0.75rem", marginBottom: "0.75rem" }}>
        <label
          style={{ color: t.body, fontSize: "0.75rem", display: "flex", alignItems: "center", gap: 6, minHeight: 44 }}
        >
          <input type="checkbox" checked={includeSingle} onChange={(event) => setIncludeSingle(event.target.checked)} />
          Include single-assignee inventors
        </label>
        <div style={{ flex: "1 1 240px", maxWidth: "28rem" }}>
          <label htmlFor={filterId} style={{ color: t.label, fontSize: "0.72rem", display: "block", marginBottom: 5 }}>
            Organization
          </label>
          <select
            id={filterId}
            value={assigneeFilter}
            onChange={(event) => setAssigneeFilter(event.target.value)}
            style={{ ...searchInput(t), width: "100%", minHeight: 44 }}
          >
            <option value="">All organizations</option>
            {network.assignees.map((assignee) => (
              <option key={assignee.id} value={assignee.id}>
                {assignee.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p role="status" style={{ color: t.label, fontSize: "0.72rem", lineHeight: 1.6 }}>
        Showing {records.length} {pluralize(records.length, "inventor")} and {layout.assignees.length}{" "}
        {pluralize(layout.assignees.length, "assignee")}. The catalog has {multiCount}{" "}
        {pluralize(multiCount, "inventor")} with multiple assignees; {unassignedCount}{" "}
        {pluralize(unassignedCount, "inventor")} without a named assignee {unassignedCount === 1 ? "is" : "are"}{" "}
        excluded from this view.
      </p>
      {hiddenInventor && (
        <p style={{ color: t.label, fontSize: "0.75rem" }}>
          {hiddenInventor.affiliations.length === 0 ? (
            `${hiddenInventor.inventor.name} has no named assignee in this catalog.`
          ) : (
            <>
              {hiddenInventor.inventor.name} is hidden by the current filters.{" "}
              <button
                type="button"
                onClick={() => {
                  setIncludeSingle(true);
                  setAssigneeFilter("");
                }}
                style={buttonStyle}
              >
                Show selected inventor
              </button>
            </>
          )}
        </p>
      )}
      {records.length === 0 ? (
        <p style={{ ...panelCard(t), padding: "1.5rem", color: t.muted }}>
          No inventors match these filters. Include single-assignee inventors or choose another organization.
        </p>
      ) : (
        <>
          <div
            role="group"
            aria-label="Affiliation map navigation"
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}
          >
            <button type="button" disabled={!zoom.canZoomIn} onClick={zoom.zoomIn} style={buttonStyle}>
              Zoom in
            </button>
            <button type="button" disabled={!zoom.canZoomOut} onClick={zoom.zoomOut} style={buttonStyle}>
              Zoom out
            </button>
            <button type="button" onClick={zoom.reset} style={buttonStyle}>
              Fit affiliations
            </button>
          </div>
          <div style={{ ...panelCard(t), height: "65vh", minHeight: 420, maxHeight: 720, overflow: "hidden" }}>
            <svg
              ref={svgRef}
              role="group"
              aria-label="Inventor affiliation map"
              viewBox={zoom.viewBox}
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
              {layout.inventors.flatMap((inventor) =>
                recordsById.get(inventor.id)!.affiliations.map((link) => {
                  const company = companyPositions.get(link.assigneeId)!;
                  const active = activeId === inventor.id || activeId === company.id;
                  return (
                    <line
                      key={`${inventor.id}:${company.id}`}
                      x1={inventor.x}
                      y1={inventor.y}
                      x2={company.x}
                      y2={company.y}
                      stroke={active ? t.sliderAccent : t.rayCool}
                      strokeWidth={1 + Math.log2(link.patentIds.length + 1)}
                      vectorEffect="non-scaling-stroke"
                      opacity={activeId && !active ? 0.12 : active ? 0.95 : 0.45}
                    >
                      <title>
                        {nodes.get(inventor.id)!.name} — {nodes.get(company.id)!.name}: {link.patentIds.length} distinct
                        patents
                      </title>
                    </line>
                  );
                }),
              )}
              {[...layout.assignees, ...layout.inventors].map((point) => {
                const node = nodes.get(point.id)!;
                const company = node.kind === "assignee";
                const active = activeId === point.id;
                return (
                  <g
                    key={point.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.name}, ${company ? "assignee" : "inventor"}`}
                    aria-pressed={selectedNodeId === point.id}
                    onPointerDown={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                    onClick={(event) => pick(point.id, event.detail === 0)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        pick(point.id, true);
                      }
                    }}
                    onMouseEnter={() => setHoveredId(point.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(point.id)}
                    onBlur={() => setHoveredId(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <title>{node.name}</title>
                    {company ? (
                      <rect
                        x={point.x - 10}
                        y={point.y - 10}
                        width={20}
                        height={20}
                        rx={2}
                        fill={t.panelBg}
                        stroke={t.rayCool}
                        strokeWidth={active ? 3 : 2}
                        vectorEffect="non-scaling-stroke"
                      />
                    ) : (
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={active ? 9 : 6}
                        fill={selectedNodeId === point.id ? t.rayWarm : t.panelBg}
                        stroke={t.rayWarm}
                        strokeWidth={active ? 3 : 2}
                        vectorEffect="non-scaling-stroke"
                      />
                    )}
                    {((company && (screenScale >= 0.65 || activeCompanies.has(point.id))) || active) && (
                      <text
                        x={point.x}
                        y={point.y - Math.max(18, 12 / screenScale)}
                        textAnchor="middle"
                        fill={t.title}
                        stroke={t.panelBg}
                        strokeWidth={4 / screenScale}
                        paintOrder="stroke"
                        fontSize={Math.max(company ? 12 : 13, 11 / screenScale)}
                        style={{ pointerEvents: "none" }}
                      >
                        {company ? truncateLabel(node.name, 27) : node.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
          <p style={{ color: t.muted, fontSize: "0.7rem", lineHeight: 1.5 }}>
            ○ Inventor · □ Assignee · Scroll or pinch to zoom, drag to pan. Hover or select a node to read its name;
            company labels appear as you zoom. Organization filtering retains every affiliation of the matching
            inventors.
          </p>
        </>
      )}
      {inspected && (
        <section aria-label="Affiliation evidence" style={{ ...panelCard(t), padding: "1rem", marginTop: "1rem" }}>
          <h3 style={{ color: t.title, fontSize: "0.9rem", margin: "0 0 0.5rem" }}>
            {inspected.inventor.name}: assignee connections
          </h3>
          <p style={{ color: t.muted, fontSize: "0.72rem", lineHeight: 1.6 }}>
            Percentages use this inventor’s {inspected.assignedPatentCount} distinct assigned{" "}
            {pluralize(inspected.assignedPatentCount, "patent")}. A jointly assigned patent counts for each named
            assignee, so percentages can total more than 100%.
            {inspected.unassignedPatentCount > 0 &&
              ` Another ${inspected.unassignedPatentCount} ${pluralize(inspected.unassignedPatentCount, "patent")} ${inspected.unassignedPatentCount === 1 ? "has" : "have"} no named assignee and ${inspected.unassignedPatentCount === 1 ? "is" : "are"} excluded from these percentages.`}
          </p>
          {inspected.affiliations.map((link) => (
            <div
              key={link.assigneeId}
              style={{ borderTop: `1px solid ${t.panelDivider}`, padding: "0.65rem 0", fontSize: "0.76rem" }}
            >
              <button
                type="button"
                onClick={(event) => pick(link.assigneeId, event.detail === 0)}
                style={nodeButtonStyle}
              >
                {nodes.get(link.assigneeId)!.name}
              </button>
              <span style={{ color: t.label }}>
                {" "}
                · {link.patentIds.length} {pluralize(link.patentIds.length, "patent")} · {Math.round(link.share * 100)}%
              </span>
              <div style={{ background: t.toggleBg, height: 6, borderRadius: 3, margin: "0.25rem 0 0.5rem" }}>
                <div
                  style={{ width: `${link.share * 100}%`, height: "100%", borderRadius: 3, background: t.rayCool }}
                />
              </div>
              <PatentEvidence insights={network} theme={t} ids={link.patentIds} onSelectPatent={onSelectNode} />
            </div>
          ))}
        </section>
      )}
      <section aria-label="Inventor connection list" style={{ marginTop: "1rem" }}>
        <h3 style={{ color: t.title, fontSize: "0.85rem" }}>Compare inventor connections</h3>
        <div style={{ overflowX: "auto", maxHeight: "24rem", overflowY: "auto", ...panelCard(t) }}>
          <table
            style={{ borderCollapse: "collapse", width: "100%", fontSize: "0.75rem", color: t.body, textAlign: "left" }}
          >
            <thead>
              <tr>
                {["Inventor", "Assignee connections · distinct patents"].map((label) => (
                  <th
                    key={label}
                    scope="col"
                    style={{ padding: "0.75rem", borderBottom: `1px solid ${t.panelBorder}` }}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.inventor.id}>
                  <th
                    scope="row"
                    style={{ padding: "0.5rem 0.75rem", borderBottom: `1px solid ${t.panelDivider}`, fontWeight: 400 }}
                  >
                    <button
                      type="button"
                      onClick={(event) => pick(record.inventor.id, event.detail === 0)}
                      style={nodeButtonStyle}
                    >
                      {record.inventor.name}
                    </button>
                  </th>
                  <td
                    style={{ padding: "0.5rem 0.75rem", borderBottom: `1px solid ${t.panelDivider}`, lineHeight: 1.7 }}
                  >
                    {record.affiliations
                      .map((link) => `${nodes.get(link.assigneeId)!.name}: ${link.patentIds.length}`)
                      .join(" · ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
