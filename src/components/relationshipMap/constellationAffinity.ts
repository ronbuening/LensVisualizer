/**
 * Hierarchical affinity rules for arranging universal-map hub neighborhoods.
 *
 * Corporate-history links are the strongest signal, unique patents spanning
 * two neighborhoods are the secondary signal, and neighborhood size breaks
 * otherwise equal ties. Comparisons remain lexicographic so no quantity of a
 * lower-priority signal can outweigh a higher-priority one.
 */

import { catalogCollator } from "../../utils/catalog/collation.js";
import type { UniversalEdgeKind, UniversalRelationshipGraph } from "../../utils/catalog/universalRelationshipGraph.js";

export interface ConstellationClusterCandidate {
  id: string;
  anchorLabel: string;
  nodeCount: number;
  size: number;
}

export interface ConstellationAffinity {
  corporateConnections: number;
  sharedPatentConnections: number;
}

export type ConstellationAffinityMap = ReadonlyMap<string, ReadonlyMap<string, ConstellationAffinity>>;

interface MutableConstellationAffinity {
  corporateConnections: number;
  sharedPatentIds: Set<string>;
}

const ZERO_AFFINITY: ConstellationAffinity = {
  corporateConnections: 0,
  sharedPatentConnections: 0,
};

function isPatentRelationship(kind: UniversalEdgeKind): boolean {
  return kind === "authorship" || kind === "assignment";
}

/** Build symmetric pairwise affinities from edges that cross neighborhood ownership. */
export function buildConstellationAffinities(
  clusterIds: readonly string[],
  ownerById: ReadonlyMap<string, string>,
  graph: UniversalRelationshipGraph,
): ConstellationAffinityMap {
  const mutable = new Map(clusterIds.map((clusterId) => [clusterId, new Map<string, MutableConstellationAffinity>()]));
  const graphNodeById = new Map(graph.nodes.map((node) => [node.id, node]));

  for (const edge of graph.edges) {
    const fromCluster = ownerById.get(edge.from);
    const toCluster = ownerById.get(edge.to);
    if (
      !fromCluster ||
      !toCluster ||
      fromCluster === toCluster ||
      !mutable.has(fromCluster) ||
      !mutable.has(toCluster)
    ) {
      continue;
    }

    let affinity = mutable.get(fromCluster)!.get(toCluster);
    if (!affinity) {
      affinity = { corporateConnections: 0, sharedPatentIds: new Set<string>() };
      mutable.get(fromCluster)!.set(toCluster, affinity);
      mutable.get(toCluster)!.set(fromCluster, affinity);
    }

    if (!isPatentRelationship(edge.kind)) {
      affinity.corporateConnections++;
      continue;
    }

    const fromNode = graphNodeById.get(edge.from);
    const toNode = graphNodeById.get(edge.to);
    const patentId = fromNode?.kind === "patent" ? fromNode.id : toNode?.kind === "patent" ? toNode.id : undefined;
    if (patentId) affinity.sharedPatentIds.add(patentId);
  }

  return new Map(
    [...mutable].map(([clusterId, neighbors]) => [
      clusterId,
      new Map(
        [...neighbors].map(([neighborId, affinity]) => [
          neighborId,
          {
            corporateConnections: affinity.corporateConnections,
            sharedPatentConnections: affinity.sharedPatentIds.size,
          },
        ]),
      ),
    ]),
  );
}

export function constellationAffinityBetween(
  leftId: string,
  rightId: string,
  affinities: ConstellationAffinityMap,
): ConstellationAffinity {
  return affinities.get(leftId)?.get(rightId) ?? ZERO_AFFINITY;
}

function totalConstellationAffinity(clusterId: string, affinities: ConstellationAffinityMap): ConstellationAffinity {
  let corporateConnections = 0;
  let sharedPatentConnections = 0;
  for (const affinity of affinities.get(clusterId)?.values() ?? []) {
    corporateConnections += affinity.corporateConnections;
    sharedPatentConnections += affinity.sharedPatentConnections;
  }
  return { corporateConnections, sharedPatentConnections };
}

/** Sort strongest first using corporate links, shared patents, then neighborhood size. */
export function compareConstellationClusterPriority(
  left: ConstellationClusterCandidate,
  right: ConstellationClusterCandidate,
  affinities: ConstellationAffinityMap,
): number {
  const leftAffinity = totalConstellationAffinity(left.id, affinities);
  const rightAffinity = totalConstellationAffinity(right.id, affinities);
  return (
    rightAffinity.corporateConnections - leftAffinity.corporateConnections ||
    rightAffinity.sharedPatentConnections - leftAffinity.sharedPatentConnections ||
    right.nodeCount - left.nodeCount ||
    right.size - left.size ||
    catalogCollator.compare(left.anchorLabel, right.anchorLabel)
  );
}

function insertionAffinity(
  ordered: readonly ConstellationClusterCandidate[],
  candidate: ConstellationClusterCandidate,
  gapIndex: number,
  affinities: ConstellationAffinityMap,
): ConstellationAffinity {
  const left = ordered[gapIndex];
  if (ordered.length === 1) return constellationAffinityBetween(left.id, candidate.id, affinities);

  const right = ordered[(gapIndex + 1) % ordered.length];
  const leftCandidate = constellationAffinityBetween(left.id, candidate.id, affinities);
  const candidateRight = constellationAffinityBetween(candidate.id, right.id, affinities);
  const displaced = constellationAffinityBetween(left.id, right.id, affinities);
  return {
    corporateConnections:
      leftCandidate.corporateConnections + candidateRight.corporateConnections - displaced.corporateConnections,
    sharedPatentConnections:
      leftCandidate.sharedPatentConnections +
      candidateRight.sharedPatentConnections -
      displaced.sharedPatentConnections,
  };
}

/**
 * Order one orbit by inserting each hub into the strongest circular gap.
 * This makes high-priority pairs angular neighbors while remaining stable.
 */
export function orderConstellationOrbit<T extends ConstellationClusterCandidate>(
  clusters: readonly T[],
  affinities: ConstellationAffinityMap,
): T[] {
  if (clusters.length < 2) return [...clusters];
  const remaining = [...clusters].sort((left, right) => compareConstellationClusterPriority(left, right, affinities));
  const ordered = [remaining.shift()!];

  while (remaining.length > 0) {
    let bestCandidateIndex = 0;
    let bestGapIndex = 0;
    let bestAffinity = insertionAffinity(ordered, remaining[0], 0, affinities);

    for (let candidateIndex = 0; candidateIndex < remaining.length; candidateIndex++) {
      const candidate = remaining[candidateIndex];
      for (let gapIndex = 0; gapIndex < ordered.length; gapIndex++) {
        const affinity = insertionAffinity(ordered, candidate, gapIndex, affinities);
        const priorityComparison = compareConstellationClusterPriority(
          candidate,
          remaining[bestCandidateIndex],
          affinities,
        );
        const isBetter =
          affinity.corporateConnections > bestAffinity.corporateConnections ||
          (affinity.corporateConnections === bestAffinity.corporateConnections &&
            (affinity.sharedPatentConnections > bestAffinity.sharedPatentConnections ||
              (affinity.sharedPatentConnections === bestAffinity.sharedPatentConnections &&
                (priorityComparison < 0 || (priorityComparison === 0 && gapIndex < bestGapIndex)))));
        if (!isBetter) continue;
        bestCandidateIndex = candidateIndex;
        bestGapIndex = gapIndex;
        bestAffinity = affinity;
      }
    }

    ordered.splice(bestGapIndex + 1, 0, remaining.splice(bestCandidateIndex, 1)[0]);
  }

  return ordered;
}
