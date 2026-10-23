import { useMemo, useState } from "react";
import { companyBridge, companyConnections } from "../../utils/catalog/relationshipInsights.js";
import { catalogCollator } from "../../utils/catalog/collation.js";
import { truncateLabel } from "./layout.js";
import { companyChordLayout } from "./companyChordLayout.js";
import {
  ChartButton,
  ChartFrame,
  CompanySelect,
  controlRow,
  defaultCompanyIds,
  EvidenceNote,
  InventorLink,
  PatentEvidence,
  ViewPanel,
  ViewSelect,
  viewButton,
  type RelationshipViewProps,
} from "./RelationshipViewShared.js";

export type CompanyRelationshipView = "bridge" | "matrix" | "chords";

function CompanyFilter(props: RelationshipViewProps & { selected: string[] }) {
  const { theme: t, insights, selected, onParamsChange } = props;
  return (
    <details style={{ color: t.body, fontSize: "0.78rem", margin: "1rem 0" }}>
      <summary style={{ cursor: "pointer", padding: "8px 0" }}>Choose assignees ({selected.length}/8)</summary>
      <fieldset
        style={{
          border: `1px solid ${t.panelBorder}`,
          borderRadius: 4,
          maxHeight: 240,
          overflowY: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 4,
          padding: 10,
        }}
      >
        <legend>Select up to eight assignees</legend>
        {insights.assignees.map((company) => (
          <label key={company.id} style={{ display: "flex", alignItems: "center", gap: 6, minHeight: 44 }}>
            <input
              type="checkbox"
              checked={selected.includes(company.id)}
              disabled={selected.length >= 8 && !selected.includes(company.id)}
              onChange={(event) =>
                onParamsChange({
                  companies: (event.target.checked
                    ? [...selected, company.id]
                    : selected.filter((id) => id !== company.id)
                  ).join(","),
                  page: null,
                })
              }
            />
            {company.name}
          </label>
        ))}
      </fieldset>
      <button type="button" style={viewButton(t)} onClick={() => onParamsChange({ companies: null, page: null })}>
        Reset assignees
      </button>
    </details>
  );
}

function selectedCompanies(props: RelationshipViewProps) {
  const { insights, params } = props;
  const known = new Set(insights.assignees.map((company) => company.id));
  return params.has("companies")
    ? [...new Set(params.get("companies")!.split(","))].filter((id) => known.has(id)).slice(0, 8)
    : defaultCompanyIds(insights);
}

function CompanyBridge(props: RelationshipViewProps) {
  const { insights, theme: t, params, onParamsChange } = props;
  const defaults = useMemo(
    () =>
      companyConnections(
        insights,
        insights.assignees.map((company) => company.id),
      )[0],
    [insights],
  );
  const left =
    insights.assignees.find((company) => company.id === params.get("left")) ??
    insights.assignees.find((company) => company.id === defaults?.left) ??
    insights.assignees[0];
  const right =
    insights.assignees.find((company) => company.id === params.get("right") && company.id !== left?.id) ??
    insights.assignees.find((company) => company.id === defaults?.right && company.id !== left?.id) ??
    insights.assignees.find((company) => company.id !== left?.id);
  const rows = useMemo(() => companyBridge(insights, left?.id ?? "", right?.id ?? ""), [insights, left?.id, right?.id]);
  const record = rows.find((row) => row.record.inventor.id === params.get("inventor")) ?? rows[0];
  const pages = Math.max(1, Math.ceil(rows.length / 12));
  const page = Math.max(0, Math.min(pages - 1, Math.floor(Number(params.get("page")) || 0)));
  const shown = rows.slice(page * 12, page * 12 + 12);
  return (
    <ViewPanel
      title="Company bridge"
      theme={t}
      description="Compare two assignees through the inventors named on their patents. Each inventor sits between the companies in proportion to the patent count on each side. Thicker connections indicate more patents."
    >
      <div style={controlRow}>
        <CompanySelect
          companies={insights.assignees}
          theme={t}
          label="Left company"
          value={left?.id ?? ""}
          onChange={(id) =>
            onParamsChange({ left: id, right: id === right?.id ? (left?.id ?? null) : (right?.id ?? null), page: null })
          }
        />
        <button
          type="button"
          style={viewButton(t)}
          disabled={!left || !right}
          onClick={() => onParamsChange({ left: right?.id ?? null, right: left?.id ?? null })}
        >
          Swap companies
        </button>
        <CompanySelect
          companies={insights.assignees.filter((company) => company.id !== left?.id)}
          theme={t}
          label="Right company"
          value={right?.id ?? ""}
          onChange={(id) => onParamsChange({ right: id, page: null })}
        />
      </div>
      <p role="status" style={{ color: t.body, fontSize: "0.8rem" }}>
        {rows.length} shared inventor records
        {rows.length
          ? ` · Showing ${page * 12 + 1}–${Math.min(rows.length, (page + 1) * 12)}`
          : " in the represented patents."}
      </p>
      {rows.length > 0 && (
        <>
          <ChartFrame label="Shared inventor bridge" width={1100} height={110 + shown.length * 65}>
            <text x={10} y={28} fill={t.label} fontSize={12}>
              Inventor
            </text>
            <text x={350} y={28} textAnchor="middle" fill={t.title} fontSize={12}>
              {truncateLabel(left.name, 30)}
            </text>
            <text x={800} y={28} textAnchor="middle" fill={t.title} fontSize={12}>
              {truncateLabel(right!.name, 30)}
            </text>
            <text x={935} y={28} fill={t.label} fontSize={12}>
              Other assignees
            </text>
            <line x1={350} x2={350} y1={50} y2={75 + shown.length * 65} stroke={t.rayWarm} strokeWidth={3} />
            <line x1={800} x2={800} y1={50} y2={75 + shown.length * 65} stroke={t.rayCool} strokeWidth={3} />
            {shown.map((row, i) => {
              const y = 95 + i * 65;
              const x = 350 + 450 * row.rightShare;
              const other = row.record.affiliations.filter(
                (link) => link.assigneeId !== left.id && link.assigneeId !== right!.id,
              );
              return (
                <ChartButton
                  key={row.record.inventor.id}
                  label={`${row.record.inventor.name}: ${row.left.patentIds.length} patents with ${left.name}, ${row.right.patentIds.length} with ${right!.name}`}
                  onClick={() => onParamsChange({ inventor: row.record.inventor.id })}
                >
                  <rect
                    x={0}
                    y={y - 27}
                    width={1100}
                    height={54}
                    rx={5}
                    fill={record === row ? t.toggleActiveBg : t.panelBg}
                  />
                  <line
                    x1={350}
                    x2={x}
                    y1={y}
                    y2={y}
                    stroke={t.rayWarm}
                    strokeWidth={2 + Math.sqrt(row.left.patentIds.length) * 2}
                  />
                  <line
                    x1={x}
                    x2={800}
                    y1={y}
                    y2={y}
                    stroke={t.rayCool}
                    strokeWidth={2 + Math.sqrt(row.right.patentIds.length) * 2}
                  />
                  <circle cx={x} cy={y} r={13} fill={t.panelBg} stroke={t.sliderAccent} strokeWidth={2} />
                  <text x={10} y={y + 4} fill={t.title} fontSize={13}>
                    {truncateLabel(row.record.inventor.name, 35)}
                  </text>
                  <text x={320} y={y + 4} textAnchor="end" fill={t.title} fontSize={13}>
                    {row.left.patentIds.length}
                  </text>
                  <text x={835} y={y + 4} fill={t.title} fontSize={13}>
                    {row.right.patentIds.length}
                  </text>
                  <text x={935} y={y + 4} fill={t.muted} fontSize={12}>
                    {other.length ? `${other.length} · inspect below` : "None recorded"}
                  </text>
                </ChartButton>
              );
            })}
          </ChartFrame>
          {pages > 1 && (
            <div style={controlRow}>
              <button
                type="button"
                style={viewButton(t)}
                disabled={page === 0}
                onClick={() => onParamsChange({ page: String(page - 1) })}
              >
                Previous inventors
              </button>
              <button
                type="button"
                style={viewButton(t)}
                disabled={page === pages - 1}
                onClick={() => onParamsChange({ page: String(page + 1) })}
              >
                Next inventors
              </button>
            </div>
          )}
          {record && (
            <section
              aria-label="Company bridge evidence"
              style={{ borderTop: `1px solid ${t.panelDivider}`, paddingTop: 14 }}
            >
              <h3 style={{ color: t.title, fontSize: "0.95rem" }}>
                <InventorLink inventor={record.record.inventor} theme={t} left={left.id} right={right!.id} />
              </h3>
              <p style={{ color: t.body, fontSize: "0.78rem" }}>
                {record.record.assignedPatentCount} distinct assigned patents · {record.jointPatentIds.length} jointly
                assigned to this pair
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                  gap: 12,
                }}
              >
                {record.record.affiliations.map((link) => (
                  <div key={link.assigneeId}>
                    <strong style={{ color: t.title, fontSize: "0.8rem" }}>
                      {insights.assignees.find((company) => company.id === link.assigneeId)?.name} ·{" "}
                      {link.patentIds.length} ({Math.round(link.share * 100)}%)
                    </strong>
                    <PatentEvidence {...props} ids={link.patentIds} />
                  </div>
                ))}
              </div>
              <InventorLink
                inventor={record.record.inventor}
                theme={t}
                view="evidence"
                left={left.id}
                right={right!.id}
              />{" "}
              <span style={{ color: t.muted, fontSize: "0.78rem" }}>— open focused evidence lanes</span>
            </section>
          )}
        </>
      )}
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}

function AffiliationMatrix(props: RelationshipViewProps) {
  const { insights, theme: t, params, onParamsChange } = props;
  const ids = selectedCompanies(props);
  const companies = ids.map((id) => insights.assignees.find((company) => company.id === id)!);
  const sort = ["connections", "name", "assignee"].includes(params.get("sort") ?? "")
    ? params.get("sort")!
    : "connections";
  const percent = params.get("measure") === "share";
  const query = (params.get("q") ?? "").toLocaleLowerCase().trim();
  const records = insights.inventors
    .filter(
      (record) =>
        (params.get("singles") === "1" || record.affiliations.length > 1) &&
        record.inventor.name.toLocaleLowerCase().includes(query) &&
        record.affiliations.some((link) => ids.includes(link.assigneeId)),
    )
    .sort((a, b) => {
      const weight = (record: typeof a) =>
        record.affiliations
          .filter((link) => ids.includes(link.assigneeId))
          .reduce((sum, link) => sum + link.patentIds.length, 0);
      if (sort === "assignee")
        return (
          catalogCollator.compare(a.affiliations[0]?.assigneeId ?? "", b.affiliations[0]?.assigneeId ?? "") ||
          weight(b) - weight(a) ||
          catalogCollator.compare(a.inventor.name, b.inventor.name)
        );
      return (sort === "name" ? 0 : weight(b) - weight(a)) || catalogCollator.compare(a.inventor.name, b.inventor.name);
    });
  const pages = Math.max(1, Math.ceil(records.length / 25));
  const page = Math.max(0, Math.min(pages - 1, Math.floor(Number(params.get("page")) || 0)));
  const max = Math.max(
    1,
    ...records.flatMap((record) =>
      record.affiliations.filter((link) => ids.includes(link.assigneeId)).map((link) => link.patentIds.length),
    ),
  );
  const selected = records.find((record) => record.inventor.id === params.get("inventor"));
  const selectedLink = selected?.affiliations.find((link) => link.assigneeId === params.get("cell"));
  return (
    <ViewPanel
      title="Affiliation matrix"
      theme={t}
      description="Compare many inventors and companies without overlapping lines. Each cell shows the inventor’s distinct patents naming that assignee, or the share of all their assigned patents. Select a cell to inspect its evidence."
    >
      <CompanyFilter {...props} selected={ids} />
      <div style={controlRow}>
        <label style={{ color: t.label, fontSize: "0.75rem", display: "grid", gap: 5 }}>
          Find inventor
          <input
            aria-label="Find inventor in matrix"
            value={params.get("q") ?? ""}
            onChange={(event) => onParamsChange({ q: event.target.value || null, page: null }, true)}
            style={{
              minHeight: 40,
              padding: "0 8px",
              background: t.panelBg,
              color: t.body,
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 4,
            }}
          />
        </label>
        <ViewSelect
          theme={t}
          label="Cell values"
          value={percent ? "share" : "count"}
          onChange={(measure) => onParamsChange({ measure })}
        >
          <option value="count">Patent count</option>
          <option value="share">Share of assigned patents</option>
        </ViewSelect>
        <ViewSelect
          theme={t}
          label="Order inventors"
          value={sort}
          onChange={(value) => onParamsChange({ sort: value, page: null })}
        >
          <option value="connections">Most patents in selected companies</option>
          <option value="name">Inventor name</option>
          <option value="assignee">Primary assignee</option>
        </ViewSelect>
        <label
          style={{ color: t.body, fontSize: "0.76rem", minHeight: 44, display: "flex", alignItems: "center", gap: 6 }}
        >
          <input
            type="checkbox"
            checked={params.get("singles") === "1"}
            onChange={(event) => onParamsChange({ singles: event.target.checked ? "1" : null, page: null })}
          />
          Include single-assignee inventors
        </label>
      </div>
      <p role="status" style={{ color: t.body, fontSize: "0.78rem" }}>
        {records.length} inventor records · {companies.length} assignees
        {records.length > 0
          ? ` · Rows ${page * 25 + 1}–${Math.min(records.length, (page + 1) * 25)}`
          : " · Choose assignees or adjust the filters."}
      </p>
      {companies.length > 0 && (
        <div
          tabIndex={0}
          role="region"
          aria-label="Affiliation matrix table, scroll horizontally"
          style={{ overflowX: "auto", maxWidth: "100%" }}
        >
          <table
            style={{ borderCollapse: "separate", borderSpacing: 3, width: "100%", fontSize: "0.76rem", color: t.body }}
          >
            <caption style={{ textAlign: "left", padding: "8px 0", color: t.muted }}>
              {percent ? "Share of each inventor’s assigned patents" : "Distinct patents by inventor and assignee"} ·
              Stronger shading indicates a larger value
            </caption>
            <thead>
              <tr>
                <th scope="col" style={{ minWidth: 175, textAlign: "left" }}>
                  Inventor
                </th>
                {companies.map((company) => (
                  <th
                    key={company.id}
                    scope="col"
                    style={{ minWidth: 110, maxWidth: 150, padding: 8, verticalAlign: "bottom" }}
                  >
                    {company.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.slice(page * 25, page * 25 + 25).map((record) => (
                <tr key={record.inventor.id}>
                  <th scope="row" style={{ textAlign: "left", fontWeight: 400, padding: "8px 4px" }}>
                    <InventorLink inventor={record.inventor} theme={t} />
                  </th>
                  {companies.map((company) => {
                    const link = record.affiliations.find((entry) => entry.assigneeId === company.id);
                    const value = percent ? Math.round((link?.share ?? 0) * 100) : (link?.patentIds.length ?? 0);
                    return (
                      <td key={company.id} style={{ textAlign: "center", padding: 0, background: t.panelBg }}>
                        {link ? (
                          <button
                            type="button"
                            aria-label={`${record.inventor.name}, ${company.name}: ${value}${percent ? "% of assigned patents" : " patents"}`}
                            onClick={() => onParamsChange({ inventor: record.inventor.id, cell: company.id })}
                            style={{
                              position: "relative",
                              width: "100%",
                              minHeight: 44,
                              border: `1px solid ${t.panelBorder}`,
                              borderRadius: 3,
                              color: t.title,
                              background: "transparent",
                              cursor: "pointer",
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                position: "absolute",
                                inset: 0,
                                background: t.sliderAccent,
                                opacity: 0.1 + 0.45 * (percent ? link.share : link.patentIds.length / max),
                              }}
                            />
                            <span style={{ position: "relative" }}>
                              {value}
                              {percent ? "%" : ""}
                            </span>
                          </button>
                        ) : (
                          <span aria-label="No recorded patents">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {pages > 1 && (
        <div style={controlRow}>
          <button
            type="button"
            style={viewButton(t)}
            disabled={page === 0}
            onClick={() => onParamsChange({ page: String(page - 1) })}
          >
            Previous rows
          </button>
          <button
            type="button"
            style={viewButton(t)}
            disabled={page === pages - 1}
            onClick={() => onParamsChange({ page: String(page + 1) })}
          >
            Next rows
          </button>
        </div>
      )}
      {selected && selectedLink && (
        <section aria-label="Matrix cell evidence" style={{ marginTop: 16 }}>
          <h3 style={{ fontSize: "0.9rem", color: t.title }}>
            <InventorLink inventor={selected.inventor} theme={t} /> ·{" "}
            {insights.assignees.find((company) => company.id === selectedLink.assigneeId)?.name}
          </h3>
          <p style={{ color: t.body, fontSize: "0.78rem" }}>
            {selectedLink.patentIds.length} of {selected.assignedPatentCount} assigned patents (
            {Math.round(selectedLink.share * 100)}%)
          </p>
          <PatentEvidence {...props} ids={selectedLink.patentIds} />
        </section>
      )}
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}

function CompanyChords(props: RelationshipViewProps) {
  const { insights, theme: t, params, onParamsChange } = props;
  const ids = selectedCompanies(props);
  const minimum = [1, 2, 3, 5, 10, 20, 50].includes(Number(params.get("minimum"))) ? Number(params.get("minimum")) : 1;
  const pairs = companyConnections(insights, ids).filter((pair) => pair.inventorIds.length >= minimum);
  const layout = companyChordLayout(ids, pairs);
  const [hover, setHover] = useState<string | null>(null);
  const [isolated, setIsolated] = useState<string | null>(null);
  const emphasis = hover ?? (ids.includes(isolated ?? "") ? isolated : null);
  const name = (id: string) => insights.assignees.find((company) => company.id === id)?.name ?? id;
  const selected = pairs.find(
    (pair) =>
      (pair.left === params.get("left") && pair.right === params.get("right")) ||
      (pair.right === params.get("left") && pair.left === params.get("right")),
  );
  const color = (id: string) => t.chartSeries[ids.indexOf(id) % t.chartSeries.length];
  return (
    <ViewPanel
      title="Company chords"
      theme={t}
      description="See which assignees share inventor records. Ribbon width represents the number of distinct inventors with patents attributed to both companies. These links are undirected and do not indicate contracts, employment, or technology transfer."
    >
      <CompanyFilter {...props} selected={ids} />
      <div style={controlRow}>
        <ViewSelect
          label="Minimum shared inventors"
          theme={t}
          value={String(minimum)}
          onChange={(value) => onParamsChange({ minimum: value })}
        >
          {[1, 2, 3, 5, 10, 20, 50].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </ViewSelect>
      </div>
      <p role="status" style={{ color: t.body, fontSize: "0.78rem" }}>
        {pairs.length} company pairs match the filter.
      </p>
      {pairs.length > 0 && (
        <ChartFrame label="Shared inventor chords" height={630}>
          {layout.ribbons.map((ribbon) => (
            <g
              key={`${ribbon.left}/${ribbon.right}`}
              onMouseEnter={() => setHover(ribbon.left)}
              onMouseLeave={() => setHover(null)}
            >
              <ChartButton
                label={`${name(ribbon.left)} and ${name(ribbon.right)}: ${ribbon.inventorIds.length} shared inventors`}
                onClick={() => onParamsChange({ left: ribbon.left, right: ribbon.right })}
              >
                <path
                  d={ribbon.path}
                  fill={color(ribbon.left)}
                  fillOpacity={
                    emphasis && emphasis !== ribbon.left && emphasis !== ribbon.right
                      ? 0.08
                      : selected?.left === ribbon.left && selected.right === ribbon.right
                        ? 0.85
                        : 0.4
                  }
                  stroke={color(ribbon.right)}
                  strokeWidth={1}
                />
              </ChartButton>
            </g>
          ))}
          {layout.sectors
            .filter((sector) => sector.count > 0)
            .map((sector) => (
              <g
                key={sector.id}
                onMouseEnter={() => setHover(sector.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(sector.id)}
                onBlur={() => setHover(null)}
              >
                <ChartButton
                  label={`${name(sector.id)}: ${sector.count} pair incidences. Isolate company`}
                  onClick={() => setIsolated(isolated === sector.id ? null : sector.id)}
                >
                  <path d={sector.path} fill="none" stroke={color(sector.id)} strokeWidth={12} />
                  <path
                    d={`M ${sector.anchor.x} ${sector.anchor.y} L ${sector.label.x < 500 ? sector.label.x + 8 : sector.label.x - 8} ${sector.label.y - 4}`}
                    fill="none"
                    stroke={t.muted}
                    strokeWidth={0.6}
                  />
                  <text
                    x={sector.label.x}
                    y={sector.label.y}
                    textAnchor={sector.label.x < 490 ? "end" : sector.label.x > 510 ? "start" : "middle"}
                    fill={t.title}
                    fontSize={12}
                  >
                    {truncateLabel(name(sector.id), 28)}
                  </text>
                </ChartButton>
              </g>
            ))}
        </ChartFrame>
      )}
      <p style={{ color: t.muted, fontSize: "0.74rem" }}>
        Arc sizes sum pair incidences: an inventor connected to three selected companies contributes to three pairs. The
        table provides exact counts and works without using the chart.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{ width: "100%", color: t.body, fontSize: "0.78rem", textAlign: "left", borderCollapse: "collapse" }}
        >
          <caption style={{ textAlign: "left", color: t.label, padding: 8 }}>Shared inventors by company pair</caption>
          <thead>
            <tr>
              <th scope="col">Company pair</th>
              <th scope="col">Inventors</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((pair) => (
              <tr key={`${pair.left}/${pair.right}`}>
                <td style={{ borderTop: `1px solid ${t.panelDivider}` }}>
                  <button
                    type="button"
                    style={{
                      ...viewButton(t),
                      textAlign: "left",
                      border: 0,
                      background: "none",
                      color: t.descLinkColor,
                    }}
                    onClick={() => onParamsChange({ left: pair.left, right: pair.right })}
                  >
                    {name(pair.left)} ↔ {name(pair.right)}
                  </button>
                </td>
                <td>{pair.inventorIds.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selected && (
        <section aria-label="Chord evidence">
          <h3 style={{ color: t.title, fontSize: "0.9rem" }}>
            {name(selected.left)} ↔ {name(selected.right)}
          </h3>
          <p style={{ color: t.body, fontSize: "0.78rem" }}>
            Each inventor below has a recorded patent connection to both assignees.
          </p>
          <ul style={{ color: t.body, fontSize: "0.8rem", lineHeight: 2 }}>
            {selected.inventorIds.map((id) => (
              <li key={id}>
                <InventorLink
                  inventor={insights.inventors.find((record) => record.inventor.id === id)!.inventor}
                  theme={t}
                  view="evidence"
                  left={selected.left}
                  right={selected.right}
                />
              </li>
            ))}
          </ul>
          <button type="button" style={viewButton(t)} onClick={() => onParamsChange({ view: "bridge", page: null })}>
            Compare this pair in Company bridge
          </button>
        </section>
      )}
      <EvidenceNote theme={t} />
    </ViewPanel>
  );
}

export default function CompanyRelationshipViews(props: RelationshipViewProps & { view: CompanyRelationshipView }) {
  if (props.view === "bridge") return <CompanyBridge {...props} />;
  if (props.view === "matrix") return <AffiliationMatrix {...props} />;
  return <CompanyChords {...props} />;
}
