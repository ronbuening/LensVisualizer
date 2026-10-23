import { useEffect, useMemo, useState } from "react";
import { useRelationshipViewParams } from "./useRelationshipViewParams.js";
import { pluralize } from "../../utils/text.js";
import { inventorCollaborators } from "../../utils/catalog/relationshipInsights.js";
import type { InventorRelationshipView } from "../../utils/state/relationshipViewUrl.js";
import { truncateLabel } from "./layout.js";
import { coInventorLayout } from "./coInventorLayout.js";
import { linearScale, niceTicks } from "../display/analysis/charts/chartMath.js";
import RelationshipEvidenceLanes from "./RelationshipEvidenceLanes.js";
import {
  ChartButton,
  ChartFrame,
  controlRow,
  EvidenceNote,
  InventorLink,
  PatentEvidence,
  ViewPanel,
  ViewSelect,
  viewButton,
  type RelationshipViewProps,
} from "./RelationshipViewShared.js";

type InventorViewProps = RelationshipViewProps & { inventorId: string };

function InventorAssignees(props: InventorViewProps) {
  const { insights, inventorId, theme: t } = props;
  const { onParamsChange } = useRelationshipViewParams();
  const record = insights.inventorById.get(inventorId);
  const [selected, setSelected] = useState<string | null>(null);
  const links = record?.affiliations ?? [];
  const max = Math.max(1, ...links.map((link) => link.patentIds.length));
  return (
    <ViewPanel
      title="Assignee connections"
      theme={t}
      description="Compare this inventor’s patent connections to every named assignee. Bar lengths show distinct patents; percentages use all of the inventor’s assigned patents as the denominator."
    >
      {record && (
        <p style={{ color: t.body, fontSize: "0.8rem" }}>
          {record.assignedPatentCount} assigned {pluralize(record.assignedPatentCount, "patent")} · {links.length}{" "}
          {pluralize(links.length, "assignee")} · {record.unassignedPatentCount}{" "}
          {pluralize(record.unassignedPatentCount, "patent")} without a named assignee
        </p>
      )}
      {links.length > 0 ? (
        <ChartFrame label="Inventor assignee connections" height={60 + links.length * 65}>
          {links.map((link, i) => {
            const name = insights.assigneeById.get(link.assigneeId)!.name;
            const y = 30 + i * 65;
            return (
              <ChartButton
                key={link.assigneeId}
                label={`${name}: ${link.patentIds.length} ${pluralize(link.patentIds.length, "patent")}, ${Math.round(link.share * 100)}%`}
                onClick={() => setSelected(link.assigneeId)}
              >
                <text x={5} y={y + 16} fill={t.title} fontSize={13}>
                  {truncateLabel(name, 36)}
                </text>
                <rect x={320} y={y} width={540} height={30} rx={4} fill={t.toggleBg} />
                <rect
                  x={320}
                  y={y}
                  width={(540 * link.patentIds.length) / max}
                  height={30}
                  rx={4}
                  fill={t.chartSeries[i % t.chartSeries.length]}
                  fillOpacity={selected && selected !== link.assigneeId ? 0.35 : 0.85}
                />
                <text x={880} y={y + 20} fill={t.title} fontSize={13}>
                  {link.patentIds.length} · {Math.round(link.share * 100)}%
                </text>
              </ChartButton>
            );
          })}
        </ChartFrame>
      ) : (
        <p style={{ color: t.body }}>No named assignee is recorded for this inventor.</p>
      )}
      <div style={{ color: t.body, fontSize: "0.8rem" }}>
        {links.map((link) => (
          <section
            key={link.assigneeId}
            aria-label={`${insights.assigneeById.get(link.assigneeId)!.name} evidence`}
            style={{ padding: "0.75rem 0", borderTop: `1px solid ${t.panelDivider}` }}
          >
            <h3 style={{ color: t.title, fontSize: "0.9rem", margin: "0 0 0.4rem" }}>
              {insights.assigneeById.get(link.assigneeId)!.name} · {link.patentIds.length} patents (
              {Math.round(link.share * 100)}%)
            </h3>
            <PatentEvidence {...props} ids={link.patentIds} />
            <button
              type="button"
              style={viewButton(t)}
              onClick={() => onParamsChange({ view: "evidence", left: link.assigneeId, right: null })}
            >
              Open evidence lanes for this assignee
            </button>
          </section>
        ))}
      </div>
      {record && record.unassignedPatentCount > 0 && (
        <PatentEvidence
          {...props}
          ids={insights.unassignedPatents.get(inventorId) ?? []}
          label="Patents without named assignees"
        />
      )}
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}

function InventorTimeline(props: InventorViewProps) {
  const { insights, inventorId, theme: t } = props;
  const { params, onParamsChange } = useRelationshipViewParams();
  const [playing, setPlaying] = useState(false);
  const timeline = useMemo(() => {
    const record = insights.inventorById.get(inventorId);
    const patents = (insights.inventorPatents.get(inventorId) ?? []).map((id) => insights.patents.get(id)!);
    const years = patents.flatMap((patent) => (patent.patentYear === undefined ? [] : [patent.patentYear]));
    const lanes = (record?.affiliations ?? []).map((link) => ({
      id: link.assigneeId,
      name: insights.assigneeById.get(link.assigneeId)!.name,
      patents: link.patentIds.map((id) => insights.patents.get(id)!),
    }));
    const unassigned = insights.unassignedPatents.get(inventorId) ?? [];
    if (unassigned.length)
      lanes.push({
        id: "unassigned",
        name: "No named assignee",
        patents: unassigned.map((id) => insights.patents.get(id)!),
      });
    let laneCursor = 65;
    const positions = lanes.map((lane) => {
      const counts = new Map<number, number>();
      const dots = lane.patents
        .filter((patent) => patent.patentYear !== undefined)
        .sort((a, b) => a.patentYear! - b.patentYear! || a.id.localeCompare(b.id))
        .map((patent) => {
          const stack = counts.get(patent.patentYear!) ?? 0;
          counts.set(patent.patentYear!, stack + 1);
          return { patent, stack };
        });
      const height = Math.max(65, 30 + Math.max(1, ...counts.values()) * 19);
      const y = laneCursor;
      laneCursor += height;
      return { ...lane, dots, y, height };
    });
    return {
      patents,
      years,
      min: years.length ? Math.min(...years) : 0,
      max: years.length ? Math.max(...years) : 0,
      unknown: patents.filter((patent) => patent.patentYear === undefined),
      positions,
      laneCursor,
    };
  }, [insights, inventorId]);
  const { patents, years, min, max, unknown, laneCursor } = timeline;
  const requestedYear = Number(params.get("year"));
  const cutoff =
    params.has("year") && Number.isFinite(requestedYear)
      ? Math.max(min, Math.min(max, Math.round(requestedYear)))
      : max;
  useEffect(() => {
    if (!playing || !years.length) return;
    const timer = window.setInterval(() => {
      if (cutoff >= max) {
        setPlaying(false);
        return;
      }
      onParamsChange({ year: String(cutoff + 1) }, true);
    }, 900);
    return () => window.clearInterval(timer);
  }, [playing, cutoff, max, years.length, onParamsChange]);
  const positions = useMemo(
    () =>
      timeline.positions.map((lane) => ({
        ...lane,
        dots: lane.dots.filter(({ patent }) => patent.patentYear! <= cutoff),
      })),
    [timeline, cutoff],
  );
  const visibleCount = patents.filter(
    (patent) => patent.patentYear !== undefined && patent.patentYear <= cutoff,
  ).length;
  const yearX = linearScale(min, max, 280, 940);
  const ticks = niceTicks(min, max, 6).filter(Number.isInteger);
  return (
    <ViewPanel
      title="Patent timeline"
      theme={t}
      description="Explore this inventor’s patents by recorded year and assignee. Dots are patent records, not employment dates. A jointly assigned patent appears in each named company’s lane."
    >
      {years.length > 0 ? (
        <>
          <div style={controlRow}>
            <label style={{ color: t.body, fontSize: "0.8rem", display: "grid", gap: 8, flex: "1 1 260px" }}>
              Through year: {cutoff}
              <input
                aria-label="Timeline through year"
                type="range"
                min={min}
                max={max}
                step={1}
                value={cutoff}
                onChange={(event) => {
                  setPlaying(false);
                  onParamsChange({ year: event.target.value }, true);
                }}
              />
            </label>
            <button
              type="button"
              style={viewButton(t)}
              disabled={max === min}
              onClick={() => {
                if (playing) setPlaying(false);
                else {
                  if (cutoff >= max) onParamsChange({ year: String(min) }, true);
                  setPlaying(true);
                }
              }}
            >
              {playing ? "Pause timeline" : "Play timeline"}
            </button>
            <button
              type="button"
              style={viewButton(t)}
              onClick={() => {
                setPlaying(false);
                onParamsChange({ year: null });
              }}
            >
              Show all years
            </button>
          </div>
          <p role="status" style={{ color: t.body, fontSize: "0.78rem" }}>
            {visibleCount} distinct dated {pluralize(visibleCount, "patent")} through {cutoff} · {unknown.length} with
            no recorded year
          </p>
          <ChartFrame label="Inventor patent timeline" height={laneCursor + 45}>
            {ticks.map((year) => (
              <g key={year}>
                <line x1={yearX(year)} x2={yearX(year)} y1={40} y2={laneCursor} stroke={t.panelDivider} />
                <text x={yearX(year)} y={25} textAnchor="middle" fill={t.label} fontSize={12}>
                  {year}
                </text>
              </g>
            ))}
            {positions.map((lane, index) => (
              <g key={lane.id}>
                <text x={10} y={lane.y + 18} fill={t.title} fontSize={12}>
                  <title>{lane.name}</title>
                  {truncateLabel(lane.name, 33)}
                </text>
                <line
                  x1={260}
                  x2={960}
                  y1={lane.y + lane.height - 10}
                  y2={lane.y + lane.height - 10}
                  stroke={t.panelDivider}
                />
                {lane.dots.map(({ patent, stack }) => (
                  <ChartButton
                    key={patent.id}
                    label={`${patent.patentNumber}, ${patent.patentYear}, ${lane.name}`}
                    onClick={(keyboard) => props.onSelectPatent(patent.id, keyboard)}
                  >
                    <circle
                      cx={yearX(patent.patentYear!)}
                      cy={lane.y + 12 + stack * 19}
                      r={7}
                      fill={t.chartSeries[index % t.chartSeries.length]}
                      stroke={t.panelBg}
                      strokeWidth={1}
                    />
                  </ChartButton>
                ))}
              </g>
            ))}
            <text x={610} y={laneCursor + 25} textAnchor="middle" fill={t.label} fontSize={12}>
              Recorded patent year
            </text>
          </ChartFrame>
        </>
      ) : (
        <p style={{ color: t.body }}>No recorded patent years are available for this inventor.</p>
      )}
      {positions.map((lane) => (
        <section key={lane.id} style={{ color: t.body, fontSize: "0.8rem" }}>
          <strong>{lane.name}</strong>
          <PatentEvidence
            {...props}
            ids={lane.dots.map(({ patent }) => patent.id)}
            label="Patents in the displayed years"
          />
        </section>
      ))}
      {unknown.length > 0 && (
        <PatentEvidence {...props} ids={unknown.map((patent) => patent.id)} label="Patents with no recorded year" />
      )}
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}

function InventorCoauthors(props: InventorViewProps) {
  const { insights, inventorId, theme: t } = props;
  const { params, onParamsChange } = useRelationshipViewParams();
  const limit = [6, 12, 24].includes(Number(params.get("limit"))) ? Number(params.get("limit")) : 12;
  const network = useMemo(() => inventorCollaborators(insights, inventorId, limit), [insights, inventorId, limit]);
  const center = insights.inventorById.get(inventorId);
  const shown = network.collaborators.slice(0, limit);
  const members = useMemo(
    () =>
      [center, ...network.collaborators.slice(0, limit).map((entry) => entry.record)].filter(
        (record) => record !== undefined,
      ),
    [center, network, limit],
  );
  const layout = useMemo(() => coInventorLayout(members), [members]);
  const { groups, points } = layout;
  const companyName = (id: string) => insights.assigneeById.get(id)?.name ?? "No named assignee";
  const colorIds = [...new Set(members.flatMap((record) => record.affiliations.map((link) => link.assigneeId)))].sort();
  const color = (id: string) => t.chartSeries[colorIds.indexOf(id) % t.chartSeries.length];
  const crossOnly = params.get("cross") === "1";
  const edges = network.edges.filter(
    (edge) =>
      !crossOnly ||
      points.get(edge.from)?.record.affiliations[0]?.assigneeId !==
        points.get(edge.to)?.record.affiliations[0]?.assigneeId,
  );
  const [selectedEdge, setSelectedEdge] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState(inventorId);
  const evidence = edges.find((edge) => JSON.stringify([edge.from, edge.to]) === selectedEdge);
  const person = members.find((record) => record.inventor.id === selectedPerson) ?? center;
  return (
    <ViewPanel
      title="Co-inventor groups"
      theme={t}
      description="Explore direct collaborators and the patents coauthored among them. Groups use each person’s most frequent named assignee across the catalog; they are not formal teams. Rings retain all recorded assignees, including work across company groups."
    >
      <div style={controlRow}>
        <ViewSelect
          label="Collaborators in diagram"
          theme={t}
          value={String(limit)}
          onChange={(value) => onParamsChange({ limit: value })}
        >
          {[6, 12, 24].map((count) => (
            <option key={count} value={count}>
              Up to {count}
            </option>
          ))}
        </ViewSelect>
        <label
          style={{ color: t.body, fontSize: "0.78rem", display: "flex", gap: 6, minHeight: 44, alignItems: "center" }}
        >
          <input
            type="checkbox"
            checked={crossOnly}
            onChange={(event) => onParamsChange({ cross: event.target.checked ? "1" : null })}
          />
          Show only links across assignee groups
        </label>
      </div>
      <p role="status" style={{ color: t.body, fontSize: "0.78rem" }}>
        {network.collaborators.length} direct collaborators · {shown.length} in the diagram · {edges.length}{" "}
        coauthorship links displayed
      </p>
      {network.collaborators.length > 0 ? (
        <>
          <ChartFrame label="Co-inventor network" width={layout.width} height={layout.height}>
            {groups.map((group) => (
              <g key={group.id}>
                <rect
                  x={group.x + 8}
                  y={group.y + 8}
                  width={group.width - 16}
                  height={group.height - 16}
                  rx={15}
                  fill={t.toggleBg}
                  fillOpacity={0.45}
                  stroke={t.panelBorder}
                  strokeDasharray="4 4"
                />
                <text x={group.x + group.width / 2} y={group.y + 37} textAnchor="middle" fill={t.label} fontSize={12}>
                  <title>{companyName(group.id)}</title>
                  {truncateLabel(companyName(group.id), 48)}
                </text>
              </g>
            ))}
            {edges.map((edge) => {
              const a = points.get(edge.from)!;
              const b = points.get(edge.to)!;
              return (
                <ChartButton
                  key={JSON.stringify([edge.from, edge.to])}
                  label={`${a.record.inventor.name} and ${b.record.inventor.name}: ${edge.patentIds.length} shared ${pluralize(edge.patentIds.length, "patent")}`}
                  onClick={() => setSelectedEdge(JSON.stringify([edge.from, edge.to]))}
                >
                  <line
                    x1={a.x}
                    x2={b.x}
                    y1={a.y}
                    y2={b.y}
                    stroke={t.sliderAccent}
                    strokeWidth={Math.min(10, 1 + Math.sqrt(edge.patentIds.length))}
                    opacity={evidence === edge ? 1 : 0.3}
                  />
                  <line x1={a.x} x2={b.x} y1={a.y} y2={b.y} stroke="transparent" strokeWidth={18} />
                </ChartButton>
              );
            })}
            {members.map((record) => {
              const point = points.get(record.inventor.id)!;
              const total = record.affiliations.reduce((sum, link) => sum + link.patentIds.length, 0);
              let offset = 0;
              return (
                <ChartButton
                  key={record.inventor.id}
                  label={`${record.inventor.name}, ${record.affiliations.length} assignees`}
                  onClick={() => setSelectedPerson(record.inventor.id)}
                >
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={record.inventor.id === inventorId ? 23 : 18}
                    fill={t.panelBg}
                    stroke={t.title}
                    strokeWidth={record.inventor.id === inventorId ? 2 : 1}
                  />
                  {record.affiliations.map((link) => {
                    const fraction = link.patentIds.length / total;
                    const start = offset;
                    offset += fraction;
                    return (
                      <circle
                        key={link.assigneeId}
                        cx={point.x}
                        cy={point.y}
                        r={26}
                        fill="none"
                        stroke={color(link.assigneeId)}
                        strokeWidth={5}
                        strokeDasharray={`${fraction * 2 * Math.PI * 26} ${2 * Math.PI * 26}`}
                        strokeDashoffset={-start * 2 * Math.PI * 26}
                        transform={`rotate(-90 ${point.x} ${point.y})`}
                      />
                    );
                  })}
                  <text x={point.x} y={point.y + 4} textAnchor="middle" fill={t.title} fontSize={11}>
                    {record.inventor.id === inventorId ? "Focus" : record.assignedPatentCount}
                  </text>
                  <text
                    x={point.x}
                    y={point.y + 43}
                    textAnchor="middle"
                    fill={t.title}
                    fontSize={11}
                    stroke={t.panelBg}
                    strokeWidth={3}
                    paintOrder="stroke"
                  >
                    {truncateLabel(record.inventor.name, 25)}
                  </text>
                </ChartButton>
              );
            })}
          </ChartFrame>
          <div aria-label="Assignee ring legend" style={{ ...controlRow, color: t.body, fontSize: "0.74rem" }}>
            {colorIds.map((id) => (
              <span key={id} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span
                  aria-hidden="true"
                  style={{ width: 12, height: 12, borderRadius: "50%", background: color(id), display: "inline-block" }}
                />
                {companyName(id)}
              </span>
            ))}
          </div>
          <p style={{ color: t.muted, fontSize: "0.73rem", lineHeight: 1.6 }}>
            Line thickness counts jointly authored patents. Node numbers count each inventor’s assigned patents. Rings
            divide patent–assignee incidences among all named assignees; joint assignments contribute to each segment.
            Tied group assignments use alphabetical company order. Select a person for exact values. Colors repeat after
            five assignees; names and counts are available below.
          </p>
          {person && (
            <section aria-label="Co-inventor affiliation evidence">
              <h3 style={{ color: t.title, fontSize: "0.9rem" }}>
                <InventorLink inventor={person.inventor} theme={t} view="co-inventors" />
              </h3>
              {person.affiliations.map((link) => (
                <div key={link.assigneeId} style={{ color: t.body, fontSize: "0.78rem" }}>
                  <strong>
                    {companyName(link.assigneeId)} · {link.patentIds.length} ({Math.round(link.share * 100)}%)
                  </strong>
                  <PatentEvidence {...props} ids={link.patentIds} />
                </div>
              ))}
            </section>
          )}
          {evidence && (
            <section aria-label="Coauthorship evidence">
              <h3 style={{ color: t.title, fontSize: "0.9rem" }}>
                {points.get(evidence.from)!.record.inventor.name} ↔ {points.get(evidence.to)!.record.inventor.name}
              </h3>
              <PatentEvidence {...props} ids={evidence.patentIds} label="Jointly authored patents" />
            </section>
          )}
        </>
      ) : (
        <p style={{ color: t.body }}>No co-inventors are recorded on this inventor’s represented patents.</p>
      )}
      <details style={{ color: t.body, fontSize: "0.8rem", marginTop: 16 }}>
        <summary style={{ padding: "8px 0", cursor: "pointer" }}>
          All direct collaborators ({network.collaborators.length})
        </summary>
        {network.collaborators.map(({ record, patentIds }) => (
          <div key={record.inventor.id} style={{ borderTop: `1px solid ${t.panelDivider}`, padding: "8px 0" }}>
            <InventorLink inventor={record.inventor} theme={t} view="co-inventors" /> · {patentIds.length} shared
            patents
            <PatentEvidence {...props} ids={patentIds} label="Jointly authored patents" />
          </div>
        ))}
      </details>
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}

export default function InventorRelationshipViews(
  props: InventorViewProps & { view: Exclude<InventorRelationshipView, "relationships"> },
) {
  if (props.view === "assignees") return <InventorAssignees {...props} />;
  if (props.view === "timeline") return <InventorTimeline {...props} />;
  if (props.view === "co-inventors") return <InventorCoauthors {...props} />;
  return <RelationshipEvidenceLanes {...props} />;
}
