import { memo, useEffect, useId, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { RelationshipInsights } from "../../utils/catalog/relationshipInsights.js";
import type { UniversalPartyNode } from "../../utils/catalog/universalRelationshipGraph.js";
import { panelCard, toggleBtn } from "../../utils/style/styles.js";
import CollapseButton from "../controls/CollapseButton.js";
import useBalancedColumns, { balancedItemStyle, balancedRowStyle, widthClass } from "../hooks/useBalancedColumns.js";

const VIEW_CHOICE_MIN_WIDTH = 150;
const VIEW_CHOICE_GAP = 12;

export interface RelationshipViewProps {
  insights: RelationshipInsights;
  theme: Theme;
  onSelectPatent: (id: string, keyboard?: boolean) => void;
}

/** Defer layout until first use, then retain the map's camera while another view is active. */
export const RetainedMapView = memo(
  function RetainedMapView({ active, children }: { active: boolean; children: ReactNode }) {
    const [visited, setVisited] = useState(active);
    useEffect(() => {
      if (active) setVisited(true);
    }, [active]);
    return active || visited ? <div hidden={!active}>{children}</div> : null;
  },
  // Reopening supplies the latest selection and theme; hidden SVGs need no URL-driven rerenders.
  (previous, next) => !previous.active && !next.active,
);

export const controlRow: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  alignItems: "center",
  margin: "0.8rem 0",
};
export function viewButton(t: Theme, active = false): CSSProperties {
  // Drop the segmented-control `borderRight: none`; React would apply it after `border` and erase the right edge.
  const { borderRight: _segmentEdge, ...base } = toggleBtn(t, active, { flex: 0, hasRightBorder: false });
  return {
    ...base,
    border: `1px solid ${t.toggleBorder}`,
    borderRadius: 4,
    padding: "8px 12px",
    minHeight: 44,
    fontSize: "0.76rem",
  };
}

/** Header for a section that can fold away: a short title, a one-line summary while folded, and the LESS/MORE pill. */
export function CompactSection({
  title,
  summary,
  expanded,
  onToggle,
  theme: t,
  children,
}: {
  title: string;
  summary: ReactNode;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
  children: ReactNode;
}) {
  const contentId = useId();
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 0.5rem" }}>
        <span style={{ color: t.label, fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {title}
        </span>
        {!expanded && (
          <span style={{ color: t.muted, fontSize: "0.7rem", flex: 1, minWidth: 0, overflowWrap: "anywhere" }}>
            {summary}
          </span>
        )}
        <CollapseButton
          expanded={expanded}
          onToggle={onToggle}
          controls={contentId}
          theme={t}
          style={{ marginLeft: "auto", minHeight: 32, padding: "6px 12px", fontSize: 10, flexShrink: 0 }}
        />
      </div>
      <div id={contentId} hidden={!expanded}>
        {children}
      </div>
    </>
  );
}

export function ViewChoices<V extends string>({
  views,
  value,
  onChange,
  theme: t,
  label,
}: {
  views: readonly (readonly [V, string])[];
  value: V;
  onChange: (id: V) => void;
  theme: Theme;
  label: string;
}) {
  // Equal-width buttons in balanced rows (4 + 4 rather than 5 + 3); labels may wrap on narrow screens.
  // The buttons fold under a header that names the current view; they start open. Phones get one native select,
  // which takes a single row where eight buttons took four. The measured wrapper stays the same element in both.
  const { ref, columns, width } = useBalancedColumns(views.length, VIEW_CHOICE_MIN_WIDTH, VIEW_CHOICE_GAP);
  const [open, setOpen] = useState(true);
  const selectId = useId();
  if (widthClass(width) === "phone") {
    return (
      <div ref={ref} style={{ margin: controlRow.margin, display: "flex", alignItems: "center", gap: 10 }}>
        <label
          htmlFor={selectId}
          style={{ color: t.label, fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          View
        </label>
        <select
          id={selectId}
          value={value}
          onChange={(event) => {
            const next = views.find(([id]) => id === event.target.value);
            if (next) onChange(next[0]);
          }}
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: 44,
            padding: "6px 8px",
            font: "inherit",
            fontSize: "16px",
            color: t.body,
            background: t.panelBg,
            border: `1px solid ${t.toggleBorder}`,
            borderRadius: 4,
          }}
        >
          {views.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  const buttons = (
    <div role="group" aria-label={label} style={balancedRowStyle(VIEW_CHOICE_GAP)}>
      {views.map(([id, name]) => (
        <button
          type="button"
          key={id}
          aria-pressed={value === id}
          style={{
            ...viewButton(t, value === id),
            ...balancedItemStyle(columns, VIEW_CHOICE_GAP),
            whiteSpace: "normal",
            textAlign: "center",
          }}
          onClick={() => onChange(id)}
        >
          {name}
        </button>
      ))}
    </div>
  );
  return (
    <div ref={ref} style={{ margin: controlRow.margin }}>
      <CompactSection
        title="View"
        summary={views.find(([id]) => id === value)?.[1]}
        expanded={open}
        onToggle={() => setOpen((current) => !current)}
        theme={t}
      >
        {buttons}
      </CompactSection>
    </div>
  );
}

export function ViewPanel({
  title,
  description,
  theme: t,
  children,
}: {
  title: string;
  description: string;
  theme: Theme;
  children?: ReactNode;
}) {
  return (
    <section aria-label={title} style={{ ...panelCard(t), padding: "1rem", minWidth: 0 }}>
      <h2 style={{ color: t.title, fontSize: "1.05rem", margin: "0 0 0.5rem" }}>{title}</h2>
      <p style={{ color: t.body, fontSize: "0.8rem", lineHeight: 1.65, maxWidth: "65rem", margin: "0 0 0.75rem" }}>
        {description}
      </p>
      {children}
    </section>
  );
}

export function ViewSelect({
  label,
  value,
  onChange,
  theme: t,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  theme: Theme;
  children: ReactNode;
}) {
  return (
    <label
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: 5,
        color: t.label,
        fontSize: "0.75rem",
        minWidth: 0,
        maxWidth: "100%",
      }}
    >
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{
          minHeight: 44,
          minWidth: 0,
          width: "100%",
          maxWidth: "100%",
          padding: "6px 8px",
          font: "inherit",
          color: t.body,
          background: t.panelBg,
          border: `1px solid ${t.panelBorder}`,
          borderRadius: 4,
        }}
      >
        {children}
      </select>
    </label>
  );
}

export function CompanySelect({
  companies,
  ...props
}: {
  companies: readonly UniversalPartyNode[];
  label: string;
  value: string;
  onChange: (value: string) => void;
  theme: Theme;
}) {
  return (
    <ViewSelect {...props}>
      {companies.map((company) => (
        <option key={company.id} value={company.id}>
          {company.name}
        </option>
      ))}
    </ViewSelect>
  );
}

export function PatentEvidence({
  ids,
  insights,
  theme: t,
  onSelectPatent,
  label = "Supporting patents",
}: Pick<RelationshipViewProps, "insights" | "theme" | "onSelectPatent"> & { ids: readonly string[]; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      onToggle={(event) => setOpen(event.currentTarget.open)}
      style={{ fontSize: "0.76rem", color: t.body, margin: "0.5rem 0" }}
    >
      <summary style={{ cursor: "pointer", padding: "8px 0" }}>
        {label} ({ids.length})
      </summary>
      {open && (
        <ul style={{ paddingLeft: "1.2rem", margin: 0, maxHeight: "18rem", overflowY: "auto" }}>
          {ids.map((id) => {
            const patent = insights.patents.get(id);
            return patent ? (
              <li key={id}>
                <button
                  type="button"
                  style={{ ...viewButton(t), border: 0, background: "none", color: t.descLinkColor, textAlign: "left" }}
                  onClick={(event) => onSelectPatent(id, event.detail === 0)}
                >
                  {patent.patentNumber}
                  {patent.patentYear ? ` · ${patent.patentYear}` : " · Year unknown"}
                </button>
              </li>
            ) : null;
          })}
        </ul>
      )}
    </details>
  );
}

export function InventorLink({
  inventor,
  theme: t,
  view = "assignees",
  left,
  right,
}: {
  inventor: UniversalPartyNode;
  theme: Theme;
  view?: string;
  left?: string;
  right?: string;
}) {
  const params = new URLSearchParams({ focus: inventor.id, view });
  if (left) params.set("left", left);
  if (right) params.set("right", right);
  return (
    <Link to={`/relationships/#${params}`} style={{ color: t.descLinkColor }}>
      {inventor.name}
    </Link>
  );
}

export function ChartButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: (keyboard?: boolean) => void;
  children: ReactNode;
}) {
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={(event) => onClick(event.detail === 0)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick(true);
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <title>{label}</title>
      {children}
    </g>
  );
}

export function ChartFrame({
  label,
  width = 1000,
  height,
  children,
}: {
  label: string;
  width?: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${label} chart, scroll horizontally on smaller screens`}
      style={{ overflowX: "auto", margin: "1rem 0", maxWidth: "100%" }}
    >
      <svg
        role="group"
        aria-label={label}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          display: "block",
          width: "100%",
          maxWidth: width,
          minWidth: Math.min(width, 760),
          height: "auto",
          marginInline: "auto",
        }}
      >
        {children}
      </svg>
    </div>
  );
}

export const EVIDENCE_NOTE =
  "Counts cover distinct patent records represented in this catalog, not a complete career. Historical assignee names stay separate. Joint assignments count for each named assignee, so shares can total more than 100%. Patent attribution does not establish employment.";

export function EvidenceNote({ theme: t }: { theme: Theme }) {
  return <p style={{ color: t.muted, fontSize: "0.72rem", lineHeight: 1.6 }}>{EVIDENCE_NOTE}</p>;
}
