import type { UniversalConnectionPath } from "../../types/universalMap.js";
import { catalogCollator } from "./collation.js";
import type {
  UniversalEdgeKind,
  UniversalNodeKind,
  UniversalRelationshipEdge,
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "./universalRelationshipGraph.js";

export const UNIVERSAL_EDGE_KINDS: UniversalEdgeKind[] = [
  "authorship",
  "assignment",
  "successor",
  "acquisition",
  "subsidiary",
  "family",
  "catalog-maker",
];
export const UNIVERSAL_RELATION_GROUPS: { label: string; kinds: UniversalEdgeKind[] }[] = [
  { label: "Patent relationships", kinds: ["authorship", "assignment"] },
  { label: "Corporate history", kinds: ["successor", "acquisition", "subsidiary", "family"] },
  { label: "Catalog grouping", kinds: ["catalog-maker"] },
];
export const UNIVERSAL_ROLE_LABELS: Record<UniversalNodeKind, string> = {
  author: "Inventor",
  assignee: "Assignee",
  patent: "Patent",
  organization: "Organization",
  family: "Corporate family",
  maker: "Catalog maker",
  lens: "Lens model",
};
export const UNIVERSAL_EDGE_LABELS: Record<UniversalEdgeKind, string> = {
  authorship: "Named inventor",
  assignment: "Assigned to",
  successor: "Successor of",
  acquisition: "Acquired by",
  subsidiary: "Subsidiary of",
  family: "Corporate family",
  "catalog-maker": "Catalog maker grouping",
};

export function compareUniversalNodes(a: UniversalRelationshipNode, b: UniversalRelationshipNode): number {
  return (
    catalogCollator.compare(UNIVERSAL_ROLE_LABELS[a.kind], UNIVERSAL_ROLE_LABELS[b.kind]) ||
    (a.kind === "patent" && b.kind === "patent"
      ? (a.patent.patentYear ?? Infinity) - (b.patent.patentYear ?? Infinity)
      : 0) ||
    catalogCollator.compare(a.name, b.name) ||
    catalogCollator.compare(a.id, b.id)
  );
}

export function filterUniversalEdges(graph: UniversalRelationshipGraph, kinds: readonly UniversalEdgeKind[]) {
  const enabled = new Set(kinds);
  return graph.edges.filter((edge) => enabled.has(edge.kind));
}

export function universalAdjacency(
  graph: UniversalRelationshipGraph,
  kinds: readonly UniversalEdgeKind[] = UNIVERSAL_EDGE_KINDS,
) {
  const adjacency = new Map(
    graph.nodes.map((node) => [node.id, [] as { nodeId: string; edge: UniversalRelationshipEdge }[]]),
  );
  const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
  for (const edge of filterUniversalEdges(graph, kinds)) {
    if (!nodes.has(edge.from) || !nodes.has(edge.to)) continue;
    adjacency.get(edge.from)!.push({ nodeId: edge.to, edge });
    adjacency.get(edge.to)!.push({ nodeId: edge.from, edge });
  }
  for (const neighbors of adjacency.values())
    neighbors.sort(
      (a, b) =>
        compareUniversalNodes(nodes.get(a.nodeId)!, nodes.get(b.nodeId)!) ||
        catalogCollator.compare(a.edge.kind, b.edge.kind) ||
        catalogCollator.compare(a.edge.id, b.edge.id),
    );
  return adjacency;
}

/** BFS records a shortest-path DAG; capped enumeration avoids exponential path materialization. */
export function findUniversalPaths(
  graph: UniversalRelationshipGraph,
  fromId: string,
  toId: string,
  kinds: readonly UniversalEdgeKind[] = UNIVERSAL_EDGE_KINDS,
  limit = 3,
): UniversalConnectionPath[] {
  const adjacency = universalAdjacency(graph, kinds);
  if (!adjacency.has(fromId) || !adjacency.has(toId) || limit <= 0) return [];
  if (fromId === toId) return [{ nodeIds: [fromId], edgeIds: [] }];
  const distances = new Map([[toId, 0]]);
  const queue = [toId];
  for (let i = 0; i < queue.length; i++) {
    const id = queue[i];
    const distance = distances.get(id)!;
    if (distances.has(fromId) && distance >= distances.get(fromId)!) break;
    for (const neighbor of adjacency.get(id)!) {
      if (distances.has(neighbor.nodeId)) continue;
      distances.set(neighbor.nodeId, distance + 1);
      queue.push(neighbor.nodeId);
    }
  }
  if (!distances.has(fromId)) return [];
  const paths: UniversalConnectionPath[] = [];
  const stack: UniversalConnectionPath[] = [{ nodeIds: [fromId], edgeIds: [] }];
  while (stack.length && paths.length < limit) {
    const path = stack.pop()!;
    const id = path.nodeIds.at(-1)!;
    if (id === toId) {
      paths.push(path);
      continue;
    }
    const next = adjacency.get(id)!.filter((n) => distances.get(n.nodeId) === distances.get(id)! - 1);
    for (let i = next.length - 1; i >= 0; i--)
      stack.push({ nodeIds: [...path.nodeIds, next[i].nodeId], edgeIds: [...path.edgeIds, next[i].edge.id] });
  }
  return paths;
}

export function universalRelationshipDate(edge: UniversalRelationshipEdge): string {
  return (
    edge.effectiveDate ??
    (edge.effectiveFrom ? `${edge.effectiveFrom}${edge.effectiveTo ? `–${edge.effectiveTo}` : " onward"}` : "")
  );
}

/** Wording follows the recorded edge, independently of the path's traversal direction. */
export function universalRelationshipText(edge: UniversalRelationshipEdge, names: ReadonlyMap<string, string>): string {
  const from = names.get(edge.from) ?? edge.from;
  const to = names.get(edge.to) ?? edge.to;
  if (edge.kind === "authorship") return `${to} is a named inventor on ${from}`;
  if (edge.kind === "assignment") return `${from} is assigned to ${to}`;
  if (edge.kind === "successor") return `${from} is a successor of ${to}`;
  if (edge.kind === "acquisition") return `${from} was acquired by ${to}`;
  if (edge.kind === "subsidiary") return `${from} is recorded as a subsidiary of ${to}`;
  if (edge.kind === "family") return `${from} is recorded in the ${to} corporate family or lineage`;
  return `${from} is grouped under catalog maker ${to}`;
}
