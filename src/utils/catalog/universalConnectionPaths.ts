import {
  isUniversalCorporateEdge,
  type UniversalRelationshipEdge,
  type UniversalRelationshipGraph,
} from "./universalRelationshipGraph.js";

export interface UniversalConnectionPath {
  nodeIds: string[];
  edgeIds: string[];
}

export interface UniversalConnectionResult {
  paths: UniversalConnectionPath[];
  distance: number | null;
  truncated: boolean;
}

/** Follow recorded links in either direction, retaining the original edge as evidence. */
export function findUniversalConnectionPaths(
  graph: Pick<UniversalRelationshipGraph, "nodes" | "edges">,
  from: string | null,
  to: string | null,
  includeCorporateRelationships = true,
  maxPaths = 5,
): UniversalConnectionResult {
  const empty: UniversalConnectionResult = { paths: [], distance: null, truncated: false };
  const adjacency = new Map(graph.nodes.map((node) => [node.id, [] as Array<{ nodeId: string; edgeId: string }>]));
  if (!from || !to || !adjacency.has(from) || !adjacency.has(to)) return empty;
  for (const edge of graph.edges) {
    if (!includeCorporateRelationships && isUniversalCorporateEdge(edge.kind)) continue;
    if (!adjacency.has(edge.from) || !adjacency.has(edge.to)) continue;
    adjacency.get(edge.from)!.push({ nodeId: edge.to, edgeId: edge.id });
    adjacency.get(edge.to)!.push({ nodeId: edge.from, edgeId: edge.id });
  }
  for (const neighbors of adjacency.values()) {
    neighbors.sort((a, b) => a.nodeId.localeCompare(b.nodeId) || a.edgeId.localeCompare(b.edgeId));
  }

  const distances = new Map([[from, 0]]);
  const predecessors = new Map<string, Array<{ nodeId: string; edgeId: string }>>();
  const queue = [from];
  for (let index = 0; index < queue.length; index++) {
    const id = queue[index];
    const distance = distances.get(id)!;
    if (distances.has(to) && distance >= distances.get(to)!) break;
    for (const neighbor of adjacency.get(id)!) {
      const known = distances.get(neighbor.nodeId);
      if (known !== undefined && known < distance + 1) continue;
      if (known === undefined) {
        distances.set(neighbor.nodeId, distance + 1);
        queue.push(neighbor.nodeId);
      }
      const previous = predecessors.get(neighbor.nodeId) ?? [];
      previous.push({ nodeId: id, edgeId: neighbor.edgeId });
      predecessors.set(neighbor.nodeId, previous);
    }
  }
  if (!distances.has(to)) return empty;

  // Enumerate at most one extra route, so dense networks cannot expand into
  // exponentially many shortest paths merely to report that more exist.
  const limit = Number.isFinite(maxPaths) ? Math.max(1, Math.floor(maxPaths)) : 5;
  const paths: UniversalConnectionPath[] = [];
  const stack = [{ nodeIds: [to], edgeIds: [] as string[] }];
  while (stack.length && paths.length <= limit) {
    const path = stack.pop()!;
    const id = path.nodeIds[0];
    if (id === from) {
      paths.push(path);
      continue;
    }
    const previous = predecessors.get(id) ?? [];
    for (let index = previous.length - 1; index >= 0; index--) {
      const step = previous[index];
      stack.push({ nodeIds: [step.nodeId, ...path.nodeIds], edgeIds: [step.edgeId, ...path.edgeIds] });
    }
  }
  return { paths: paths.slice(0, limit), distance: distances.get(to)!, truncated: paths.length > limit };
}

/** Describe the recorded direction even when a trace traverses it backwards. */
export function universalConnectionDescription(
  edge: UniversalRelationshipEdge,
  names: ReadonlyMap<string, string>,
): string {
  const from = names.get(edge.from) ?? edge.from;
  const to = names.get(edge.to) ?? edge.to;
  if (edge.kind === "authorship") return `${to} is a named inventor on ${from}`;
  if (edge.kind === "assignment") return `${from} is assigned to ${to}`;
  if (edge.kind === "successor") return `${from} is a successor of ${to}`;
  if (edge.kind === "acquisition") return `${from} was acquired by ${to}`;
  if (edge.kind === "subsidiary") return `${from} is a subsidiary of ${to}`;
  if (edge.kind === "family") return `${from} belongs to the ${to} corporate family`;
  return `${from} is grouped under catalog maker ${to}`;
}
