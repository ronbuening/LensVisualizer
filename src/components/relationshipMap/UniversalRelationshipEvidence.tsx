import type { Theme } from "../../types/theme.js";
import type {
  UniversalRelationshipEdge,
  UniversalRelationshipGraph,
} from "../../utils/catalog/universalRelationshipGraph.js";
import {
  universalRelationshipDate,
  universalRelationshipText,
} from "../../utils/catalog/universalRelationshipQueries.js";
import PatentNumberLink from "../content/PatentNumberLink.js";

interface UniversalRelationshipEvidenceProps {
  edge: UniversalRelationshipEdge;
  graph: UniversalRelationshipGraph;
  theme: Theme;
}

export default function UniversalRelationshipEvidence({ edge, graph, theme: t }: UniversalRelationshipEvidenceProps) {
  const names = new Map(graph.nodes.map((n) => [n.id, n.name]));
  const patent = graph.nodes.find((n) => n.kind === "patent" && (n.id === edge.from || n.id === edge.to));
  const date = universalRelationshipDate(edge);
  return (
    <div style={{ fontSize: "0.78rem", lineHeight: 1.6, overflowWrap: "anywhere", color: t.body }}>
      <div>{universalRelationshipText(edge, names)}</div>
      {date && <div style={{ color: t.label }}>{date}</div>}
      {edge.note && <div style={{ color: t.muted }}>{edge.note}</div>}
      {edge.sourceUrl ? (
        <a href={edge.sourceUrl} target="_blank" rel="noreferrer" style={{ color: t.descLinkColor }}>
          Source ↗
        </a>
      ) : patent?.kind === "patent" ? (
        <PatentNumberLink patentNumber={patent.name} color={t.descLinkColor} />
      ) : (
        <span style={{ color: t.muted }}>
          {edge.kind === "catalog-maker" ? "Source: authored catalog maker grouping" : "Source unavailable"}
        </span>
      )}
    </div>
  );
}
