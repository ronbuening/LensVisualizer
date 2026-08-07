/**
 * Detail panel for a selected non-patent node in the universal map.
 *
 * Patent nodes continue to use PatentDetailCard. This panel exposes the dated
 * corporate relationships behind assignee, organization, and family nodes and
 * provides the handoff from a catalog party to the existing focused map.
 */

import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type {
  UniversalRelationshipEdge,
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { panelCard } from "../../utils/style/styles.js";
import { pluralize } from "../../utils/text.js";

interface UniversalEntityDetailCardProps {
  graph: UniversalRelationshipGraph;
  node: Exclude<UniversalRelationshipNode, { kind: "patent" }>;
  theme: Theme;
  onClose: () => void;
}

function nodeKindLabel(node: Exclude<UniversalRelationshipNode, { kind: "patent" }>): string {
  if (node.kind === "author") return "inventor";
  if (node.kind === "family") return "corporate family";
  if (node.kind === "organization") return "external organization";
  return "assignee";
}

function relationshipDate(edge: UniversalRelationshipEdge): string | undefined {
  if (edge.effectiveDate) return edge.effectiveDate;
  if (!edge.effectiveFrom) return undefined;
  return edge.effectiveTo ? `${edge.effectiveFrom}–${edge.effectiveTo}` : `${edge.effectiveFrom} onward`;
}

function relationshipParts(
  edge: UniversalRelationshipEdge,
  selectedNodeId: string,
  nodeById: ReadonlyMap<string, UniversalRelationshipNode>,
): { prefix: string; other?: UniversalRelationshipNode } {
  const outgoing = edge.from === selectedNodeId;
  const other = nodeById.get(outgoing ? edge.to : edge.from);
  if (edge.kind === "successor") return { prefix: outgoing ? "Successor of" : "Succeeded by", other };
  if (edge.kind === "acquisition") return { prefix: outgoing ? "Acquired by" : "Acquired", other };
  if (edge.kind === "subsidiary") return { prefix: outgoing ? "Subsidiary of" : "Parent of", other };
  if (edge.kind === "family") return { prefix: outgoing ? "Corporate family" : "Family member", other };
  return { prefix: "Related entity", other };
}

export default function UniversalEntityDetailCard({ graph, node, theme: t, onClose }: UniversalEntityDetailCardProps) {
  const nodeById = new Map(graph.nodes.map((entry) => [entry.id, entry]));
  const corporateEdges = graph.edges.filter(
    (edge) =>
      edge.kind !== "authorship" && edge.kind !== "assignment" && (edge.from === node.id || edge.to === node.id),
  );
  const patentEdges = graph.edges.filter(
    (edge) =>
      (edge.kind === "authorship" || edge.kind === "assignment") && (edge.from === node.id || edge.to === node.id),
  );

  return (
    <article
      style={{
        position: "relative",
        ...panelCard(t),
        padding: "0.85rem",
        marginTop: "1rem",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close entity details"
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.6rem",
          background: "none",
          border: "none",
          color: t.muted,
          cursor: "pointer",
          fontSize: "0.85rem",
        }}
      >
        Close
      </button>

      <h3 style={{ color: t.title, fontSize: "0.95rem", margin: "0 0 0.25rem", paddingRight: "3rem" }}>{node.name}</h3>
      <p style={{ color: t.muted, fontSize: "0.7rem", margin: "0 0 0.6rem", textTransform: "uppercase" }}>
        {nodeKindLabel(node)}
        {patentEdges.length > 0 && ` · ${patentEdges.length} ${pluralize(patentEdges.length, "patent connection")}`}
      </p>

      {(node.kind === "author" || node.kind === "assignee") && (
        <Link
          to={`/relationships/#focus=${node.ref.role}:${node.ref.slug}`}
          style={{ color: t.descLinkColor, textDecoration: "none", fontSize: "0.76rem" }}
        >
          Open focused relationship map →
        </Link>
      )}

      {corporateEdges.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0" }}>
          {corporateEdges.map((edge) => {
            const date = relationshipDate(edge);
            const { prefix, other } = relationshipParts(edge, node.id, nodeById);
            const otherFocusedPath =
              other?.kind === "author" || other?.kind === "assignee"
                ? `/relationships/#focus=${other.ref.role}:${other.ref.slug}`
                : undefined;
            return (
              <li
                key={edge.id}
                style={{ borderTop: `1px solid ${t.panelDivider}`, padding: "0.55rem 0", fontSize: "0.75rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    columnGap: "0.35rem",
                    rowGap: "0.2rem",
                    color: t.body,
                  }}
                >
                  <span>{prefix}:</span>
                  {otherFocusedPath ? (
                    <Link to={otherFocusedPath} style={{ color: t.descLinkColor, textDecoration: "none" }}>
                      {other?.name ?? "Unknown organization"}
                    </Link>
                  ) : (
                    <span>{other?.name ?? "Unknown organization"}</span>
                  )}
                </div>
                {edge.note && (
                  <span style={{ color: t.muted, display: "block", marginTop: "0.25rem", lineHeight: 1.45 }}>
                    {edge.note}
                  </span>
                )}
                {(date || edge.sourceUrl) && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "0.35rem 0.75rem",
                      marginTop: "0.3rem",
                    }}
                  >
                    {date && <span style={{ color: t.label }}>{date}</span>}
                    {edge.sourceUrl && (
                      <a href={edge.sourceUrl} target="_blank" rel="noreferrer" style={{ color: t.descLinkColor }}>
                        Source ↗
                      </a>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}
