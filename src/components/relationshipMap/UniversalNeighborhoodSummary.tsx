/**
 * Card summary of the universal map's hub neighborhoods.
 *
 * Each card names a hub, counts its patents, inventors, and assignees, and
 * lists its strongest links to other neighborhoods by type. Selecting a card
 * hands the hub to the Network view, which selects and frames it.
 */

import { useId, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import type { UniversalRelationshipGraph } from "../../utils/catalog/universalRelationshipGraph.js";
import { panelCard, searchInput } from "../../utils/style/styles.js";
import { pluralize } from "../../utils/text.js";
import useBalancedColumns, { widthClass } from "../hooks/useBalancedColumns.js";
import { ViewPanel, viewButton } from "./RelationshipViewShared.js";
import { layoutUniversalRelationshipGraph } from "./universalLayout.js";
import {
  buildUniversalNeighborhoods,
  filterUniversalNeighborhoods,
  summarizeUniversalBridges,
  universalNeighborhoodMatch,
  type UniversalBridgeCategory,
  type UniversalBridgeGroup,
  type UniversalNeighborhood,
} from "./universalNeighborhoods.js";

const BRIDGE_LABELS: Record<UniversalBridgeCategory, string> = {
  patent: "Patent links",
  corporate: "Corporate history",
  catalog: "Catalog grouping",
};

interface UniversalNeighborhoodSummaryProps {
  graph: UniversalRelationshipGraph;
  theme: Theme;
  selectedNodeId: string | null;
  onShowInNetwork: (nodeId: string, keyboard?: boolean) => void;
}

function countLine(neighborhood: UniversalNeighborhood): string {
  const parts: [number, string][] = [
    [neighborhood.patents, "patent"],
    [neighborhood.inventors, "inventor"],
    [neighborhood.assignees, "assignee"],
  ];
  if (neighborhood.models) parts.push([neighborhood.models, "lens model"]);
  return parts.map(([count, noun]) => `${count} ${pluralize(count, noun)}`).join(" · ");
}

function bridgeLine(group: UniversalBridgeGroup): string {
  const links = group.links.map((link) => `${link.anchorLabel} (${link.weight})`);
  if (group.total > group.links.length) links.push(`+${group.total - group.links.length} more`);
  return links.join(" · ");
}

export default function UniversalNeighborhoodSummary({
  graph,
  theme: t,
  selectedNodeId,
  onShowInNetwork,
}: UniversalNeighborhoodSummaryProps) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const { ref, width } = useBalancedColumns(1, 1, 0);
  const cardRefs = useRef(new Map<string, HTMLButtonElement>());
  const revealFocus = useRef<string | null>(null);
  const model = useMemo(() => buildUniversalNeighborhoods(graph, layoutUniversalRelationshipGraph(graph)), [graph]);
  const bridges = useMemo(() => summarizeUniversalBridges(model), [model]);
  const matches = useMemo(() => filterUniversalNeighborhoods(model.neighborhoods, query), [model, query]);
  const currentId = selectedNodeId ? model.owner.get(selectedNodeId) : undefined;
  const total = model.neighborhoods.length;
  const limit = widthClass(width) === "phone" ? 12 : 24;
  const filtering = query.trim().length > 0;
  const shown = expanded || filtering ? matches : matches.slice(0, limit);
  const current = matches.find((neighborhood) => neighborhood.id === currentId);
  if (!expanded && !filtering && current && !shown.includes(current)) shown.push(current);

  useLayoutEffect(() => {
    if (revealFocus.current) {
      cardRefs.current.get(revealFocus.current)?.focus();
      revealFocus.current = null;
    }
  }, [expanded]);

  const cardStyle = (current: boolean): CSSProperties => ({
    ...panelCard(t),
    display: "flex",
    flexDirection: "column",
    gap: 6,
    width: "100%",
    height: "100%",
    minHeight: 44,
    boxSizing: "border-box",
    padding: "0.75rem 0.85rem",
    textAlign: "left",
    font: "inherit",
    fontSize: "0.74rem",
    lineHeight: 1.5,
    color: t.body,
    cursor: "pointer",
    borderColor: current ? t.sliderAccent : t.panelBorder,
    boxShadow: current ? `inset 0 0 0 1px ${t.sliderAccent}` : undefined,
  });

  return (
    <ViewPanel
      title="Neighborhoods"
      theme={t}
      description="Each card summarizes one hub neighborhood of the network, largest first. Patent links count distinct patents whose inventors or assignees sit in the other neighborhood; corporate history and catalog grouping count sourced records. Select a card to show its hub in the network. Neighborhoods organize records; they do not establish ownership."
    >
      <div ref={ref}>
        <label
          htmlFor={`${id}-filter`}
          style={{ display: "block", color: t.label, fontSize: "0.75rem", marginBottom: 5 }}
        >
          Filter neighborhoods by name
        </label>
        <input
          id={`${id}-filter`}
          type="search"
          autoComplete="off"
          placeholder="Company or family name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{ ...searchInput(t), width: "100%", maxWidth: "24rem", boxSizing: "border-box" }}
        />
        <p role="status" style={{ color: t.muted, fontSize: "0.72rem", margin: "0.6rem 0" }}>
          {shown.length === total
            ? `${total} ${pluralize(total, "neighborhood")}`
            : `${shown.length} of ${total} ${pluralize(total, "neighborhood")}`}
        </p>
        {shown.length ? (
          <ul
            aria-label="Hub neighborhoods"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 17rem), 1fr))",
              gap: "0.6rem",
            }}
          >
            {shown.map((neighborhood, index) => {
              const groups = bridges.get(neighborhood.id) ?? [];
              const current = neighborhood.id === currentId;
              const detailsId = `${id}-details-${index}`;
              const match = query.trim() ? universalNeighborhoodMatch(neighborhood, query) : undefined;
              return (
                <li key={neighborhood.id} style={{ minWidth: 0 }}>
                  <button
                    ref={(element) => {
                      if (element) cardRefs.current.set(neighborhood.id, element);
                      else cardRefs.current.delete(neighborhood.id);
                    }}
                    type="button"
                    aria-label={`Show ${neighborhood.anchorLabel} in the network`}
                    aria-describedby={detailsId}
                    aria-current={current ? "true" : undefined}
                    style={cardStyle(current)}
                    onClick={(event) => onShowInNetwork(neighborhood.anchorId, event.detail === 0)}
                  >
                    <span style={{ color: t.title, fontSize: "0.9rem", fontWeight: 600, overflowWrap: "anywhere" }}>
                      {neighborhood.anchorLabel}
                    </span>
                    <span id={detailsId} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {match && match !== neighborhood.anchorLabel && (
                        <span style={{ color: t.label, overflowWrap: "anywhere" }}>Includes {match}</span>
                      )}
                      <span style={{ color: t.muted }}>{countLine(neighborhood)}</span>
                      {groups.length ? (
                        groups.map((group) => (
                          <span key={group.category} style={{ overflowWrap: "anywhere" }}>
                            <span style={{ color: t.label }}>{BRIDGE_LABELS[group.category]}: </span>
                            {bridgeLine(group)}
                          </span>
                        ))
                      ) : (
                        <span style={{ color: t.muted }}>No links to other neighborhoods</span>
                      )}
                    </span>
                    <span aria-hidden="true" style={{ color: t.descLinkColor, marginTop: "auto", paddingTop: 2 }}>
                      Show in network →
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p style={{ color: t.muted, fontSize: "0.76rem" }}>No neighborhood matches that name.</p>
        )}
        {!filtering && total > limit && (
          <button
            type="button"
            aria-expanded={expanded}
            style={{ ...viewButton(t), marginTop: "0.75rem" }}
            onClick={() => {
              if (!expanded)
                revealFocus.current = matches.find((neighborhood) => !shown.includes(neighborhood))?.id ?? null;
              setExpanded((value) => !value);
            }}
          >
            {expanded ? "Show fewer" : `Show all ${total} neighborhoods`}
          </button>
        )}
      </div>
    </ViewPanel>
  );
}
