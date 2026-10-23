import { useMemo } from "react";
import { useRelationshipViewParams } from "./useRelationshipViewParams.js";
import { truncateLabel } from "./layout.js";
import {
  ChartButton,
  ChartFrame,
  CompanySelect,
  controlRow,
  EvidenceNote,
  InventorLink,
  PatentEvidence,
  ViewPanel,
  ViewSelect,
  type RelationshipViewProps,
} from "./RelationshipViewShared.js";

export default function RelationshipEvidenceLanes(
  props: RelationshipViewProps & { inventorId?: string; selectedInventorId?: string | null },
) {
  const { insights, theme: t, inventorId, selectedInventorId } = props;
  const { params, onParamsChange } = useRelationshipViewParams();
  const candidates = useMemo(
    () => [...insights.inventors].sort((a, b) => a.inventor.name.localeCompare(b.inventor.name)),
    [insights],
  );
  const record =
    insights.inventorById.get(inventorId ?? params.get("inventor") ?? selectedInventorId ?? "") ??
    insights.inventors.find((entry) => entry.affiliations.length > 1) ??
    insights.inventors[0];
  if (!record)
    return <ViewPanel title="Evidence lanes" theme={t} description="No inventor patent evidence is available." />;
  const links = record.affiliations;
  const companies = insights.assignees.filter((company) => links.some((link) => link.assigneeId === company.id));
  const left = links.find((link) => link.assigneeId === params.get("left")) ?? links[0];
  const right =
    links.find((link) => link.assigneeId === params.get("right") && link.assigneeId !== left?.assigneeId) ??
    links.find((link) => link !== left);
  const name = (id?: string) => insights.assigneeById.get(id ?? "")?.name ?? "No named assignee";
  const joint = left?.patentIds.filter((id) => right?.patentIds.includes(id)) ?? [];
  const leftOnly = left?.patentIds.filter((id) => !joint.includes(id)) ?? [];
  const rightOnly = right?.patentIds.filter((id) => !joint.includes(id)) ?? [];
  const unassigned = insights.unassignedPatents.get(record.inventor.id) ?? [];
  const rows = Math.max(1, Math.min(6, Math.max(leftOnly.length, rightOnly.length)));
  const midY = 100 + ((rows - 1) * 66) / 2;
  const jointY = 100 + rows * 66;
  const height = jointY + Math.min(joint.length, 3) * 55 + 70;
  const patentNode = (id: string, x: number, y: number) => (
    <ChartButton
      key={id}
      label={`Inspect ${insights.patents.get(id)?.patentNumber}`}
      onClick={(keyboard) => props.onSelectPatent(id, keyboard)}
    >
      <rect x={x - 83} y={y - 21} width={166} height={42} rx={4} fill={t.panelBg} stroke={t.sliderAccent} />
      <text x={x} y={y - 2} textAnchor="middle" fill={t.title} fontSize={11}>
        {truncateLabel(insights.patents.get(id)?.patentNumber ?? id, 24)}
      </text>
      <text x={x} y={y + 13} textAnchor="middle" fill={t.muted} fontSize={10}>
        {insights.patents.get(id)?.patentYear ?? "Year unknown"}
      </text>
    </ChartButton>
  );
  return (
    <ViewPanel
      title="Evidence lanes"
      theme={t}
      description="Follow an inventor’s recorded patents to their named assignees. The lanes organize source evidence; their reading order does not indicate influence or a job move."
    >
      <div style={controlRow}>
        {!inventorId && (
          <ViewSelect
            label="Inventor"
            theme={t}
            value={record.inventor.id}
            onChange={(inventor) => onParamsChange({ inventor, left: null, right: null })}
          >
            {candidates.map((entry) => (
              <option key={entry.inventor.id} value={entry.inventor.id}>
                {entry.inventor.name}
              </option>
            ))}
          </ViewSelect>
        )}
        {left && (
          <CompanySelect
            label="Left assignee"
            companies={companies}
            theme={t}
            value={left.assigneeId}
            onChange={(id) =>
              onParamsChange({
                left: id,
                right: right?.assigneeId === id ? left.assigneeId : (right?.assigneeId ?? null),
              })
            }
          />
        )}
        {right && (
          <CompanySelect
            label="Right assignee"
            companies={companies.filter((company) => company.id !== left?.assigneeId)}
            theme={t}
            value={right.assigneeId}
            onChange={(id) => onParamsChange({ right: id })}
          />
        )}
      </div>
      {links.length > 2 && (
        <p style={{ color: t.muted, fontSize: "0.76rem" }}>
          Comparing two of {links.length} recorded assignees. Use the selectors to explore the other connections.
        </p>
      )}
      {!left ? (
        <p style={{ color: t.body }}>No named assignee is recorded for this inventor’s patents.</p>
      ) : (
        <>
          <ChartFrame label="Patent evidence lanes" height={height}>
            <text x={110} y={28} textAnchor="middle" fill={t.title} fontSize={13}>
              {truncateLabel(name(left.assigneeId), 26)}
            </text>
            <text x={110} y={48} textAnchor="middle" fill={t.muted} fontSize={11}>
              {left.patentIds.length} patents
            </text>
            {right && (
              <>
                <text x={890} y={28} textAnchor="middle" fill={t.title} fontSize={13}>
                  {truncateLabel(name(right.assigneeId), 26)}
                </text>
                <text x={890} y={48} textAnchor="middle" fill={t.muted} fontSize={11}>
                  {right.patentIds.length} patents
                </text>
              </>
            )}
            <line x1={110} x2={110} y1={65} y2={jointY + 20} stroke={t.rayWarm} strokeWidth={3} />
            {right && <line x1={890} x2={890} y1={65} y2={jointY + 20} stroke={t.rayCool} strokeWidth={3} />}
            {leftOnly.slice(0, 6).map((id, i) => (
              <path
                key={id}
                d={`M 110 ${100 + i * 66} H 197 M 363 ${100 + i * 66} L 455 ${midY}`}
                fill="none"
                stroke={t.rayWarm}
                strokeWidth={1.5}
              />
            ))}
            {rightOnly.slice(0, 6).map((id, i) => (
              <path
                key={id}
                d={`M 890 ${100 + i * 66} H 803 M 637 ${100 + i * 66} L 545 ${midY}`}
                fill="none"
                stroke={t.rayCool}
                strokeWidth={1.5}
              />
            ))}
            {joint.slice(0, 3).map((id, i) => (
              <path
                key={id}
                d={`M 110 ${jointY} L 417 ${jointY + 35 + i * 55} M 583 ${jointY + 35 + i * 55} L 890 ${jointY} M 500 ${midY + 38} V ${jointY + 14 + i * 55}`}
                fill="none"
                stroke={t.sliderAccent}
              />
            ))}
            <rect
              x={435}
              y={midY - 38}
              width={130}
              height={76}
              rx={30}
              fill={t.toggleActiveBg}
              stroke={t.sliderAccent}
              strokeWidth={2}
            />
            <text x={500} y={midY - 3} textAnchor="middle" fill={t.title} fontSize={12}>
              {truncateLabel(record.inventor.name, 19)}
            </text>
            <text x={500} y={midY + 16} textAnchor="middle" fill={t.label} fontSize={11}>
              inventor
            </text>
            {leftOnly.slice(0, 6).map((id, i) => patentNode(id, 280, 100 + i * 66))}
            {rightOnly.slice(0, 6).map((id, i) => patentNode(id, 720, 100 + i * 66))}
            {joint.length > 0 && (
              <text x={500} y={jointY + 3} textAnchor="middle" fill={t.label} fontSize={11}>
                Jointly assigned — one patent node
              </text>
            )}
            {joint.slice(0, 3).map((id, i) => patentNode(id, 500, jointY + 35 + i * 55))}
          </ChartFrame>
          <p style={{ color: t.muted, fontSize: "0.74rem" }}>
            Diagram shows up to six patents in each exclusive lane and three jointly assigned patents. The lists below
            contain every supporting patent.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "1rem",
            }}
          >
            <div>
              <strong style={{ color: t.title }}>{name(left.assigneeId)}</strong>
              <PatentEvidence {...props} ids={left.patentIds} />
            </div>
            {right && (
              <div>
                <strong style={{ color: t.title }}>{name(right.assigneeId)}</strong>
                <PatentEvidence {...props} ids={right.patentIds} />
              </div>
            )}
          </div>
          {joint.length > 0 && <PatentEvidence {...props} ids={joint} label="Jointly assigned patents" />}
        </>
      )}
      {unassigned.length > 0 && <PatentEvidence {...props} ids={unassigned} label="Patents without named assignees" />}
      {!inventorId && (
        <p style={{ fontSize: "0.78rem" }}>
          <InventorLink
            inventor={record.inventor}
            theme={t}
            view="evidence"
            left={left?.assigneeId}
            right={right?.assigneeId}
          />{" "}
          — open this inventor’s focused evidence view
        </p>
      )}
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}
