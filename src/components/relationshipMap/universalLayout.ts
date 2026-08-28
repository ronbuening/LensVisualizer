/**
 * Deterministic multi-hub layout for the universal relationship map.
 *
 * Connected components remain the outer grouping, but large patent networks are
 * partitioned into corporate-family and major-assignee neighborhoods before
 * they are drawn. Each neighborhood gets its own capacity-limited radial
 * layout, then a weighted hub graph arranges those neighborhoods as a compact
 * constellation. This keeps prolific assignees from turning an entire
 * component into one enormous ring while preserving every graph edge for the
 * renderer.
 */

import { catalogCollator } from "../../utils/catalog/collation.js";
import type {
  UniversalNodeKind,
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { truncateLabel } from "./layout.js";

export interface UniversalLayoutNode {
  id: string;
  kind: UniversalNodeKind;
  x: number;
  y: number;
  r: number;
  label: string;
  fullLabel: string;
  componentIndex: number;
  clusterId: string;
}

export interface UniversalLayoutEdge {
  id: string;
  from: string;
  to: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface UniversalLayoutCluster {
  id: string;
  componentIndex: number;
  anchorId: string;
  anchorLabel: string;
  x: number;
  y: number;
  width: number;
  height: number;
  nodeCount: number;
  edgeCount: number;
}

export interface UniversalLayoutComponent {
  id: string;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  nodeCount: number;
  edgeCount: number;
  clusterCount: number;
  rootId: string;
  rootLabel: string;
}

export interface UniversalRelationshipLayout {
  width: number;
  height: number;
  nodes: UniversalLayoutNode[];
  nodeById: Record<string, UniversalLayoutNode>;
  edges: UniversalLayoutEdge[];
  clusters: UniversalLayoutCluster[];
  components: UniversalLayoutComponent[];
}

interface ClusterHub {
  id: string;
  anchorId: string;
  anchorLabel: string;
  seedIds: string[];
  strength: number;
}

interface LocalCluster {
  id: string;
  anchorId: string;
  anchorLabel: string;
  size: number;
  nodeCount: number;
  edgeCount: number;
  nodes: Array<Omit<UniversalLayoutNode, "x" | "y"> & { localX: number; localY: number }>;
}

interface LocalComponent {
  index: number;
  width: number;
  height: number;
  rootId: string;
  rootLabel: string;
  nodeCount: number;
  edgeCount: number;
  nodes: UniversalLayoutNode[];
  clusters: UniversalLayoutCluster[];
}

const TAU = 2 * Math.PI;
const TOP = -Math.PI / 2;
const MIN_COMPONENT_SIZE = 180;
const MIN_CLUSTER_SIZE = 180;
const CLUSTER_PADDING = 44;
const COMPONENT_INSET = 12;
const COMPONENT_HEADER_HEIGHT = 32;
const CANVAS_PADDING = 24;
const COMPONENT_GAP = 24;
const MIN_RING_GAP = 54;
const MIN_NODE_ARC = 28;
const MIN_HUB_PATENT_EDGES = 8;
const CONSTELLATION_GAP = 28;
const CONSTELLATION_ARC_GAP = 28;
const MAX_HUBS_PER_ORBIT = 12;

const KIND_ORDER: Record<UniversalNodeKind, number> = {
  family: 0,
  assignee: 1,
  organization: 2,
  author: 3,
  patent: 4,
};

export function universalNodeRadius(kind: UniversalNodeKind): number {
  if (kind === "patent") return 5;
  if (kind === "family") return 10;
  if (kind === "organization") return 8;
  if (kind === "assignee") return 8;
  return 7;
}

function compareNodes(left: UniversalRelationshipNode, right: UniversalRelationshipNode): number {
  return KIND_ORDER[left.kind] - KIND_ORDER[right.kind] || catalogCollator.compare(left.name, right.name);
}

function compareClusterNodes(left: UniversalRelationshipNode, right: UniversalRelationshipNode): number {
  if (left.kind === "patent" && right.kind === "patent") {
    return (
      (left.patent.patentYear ?? Number.POSITIVE_INFINITY) - (right.patent.patentYear ?? Number.POSITIVE_INFINITY) ||
      catalogCollator.compare(left.name, right.name)
    );
  }
  return compareNodes(left, right);
}

function highestDegreeNode(
  nodes: readonly UniversalRelationshipNode[],
  degree: ReadonlyMap<string, number>,
): UniversalRelationshipNode {
  return [...nodes].sort(
    (left, right) => (degree.get(right.id) ?? 0) - (degree.get(left.id) ?? 0) || compareNodes(left, right),
  )[0];
}

function distancesFromSeeds(
  seedIds: readonly string[],
  componentIds: ReadonlySet<string>,
  adjacency: ReadonlyMap<string, ReadonlySet<string>>,
): Map<string, number> {
  const distances = new Map<string, number>();
  const queue: string[] = [];
  for (const seedId of seedIds) {
    if (!componentIds.has(seedId) || distances.has(seedId)) continue;
    distances.set(seedId, 0);
    queue.push(seedId);
  }

  for (let index = 0; index < queue.length; index++) {
    const id = queue[index];
    const nextDistance = (distances.get(id) ?? 0) + 1;
    for (const neighbor of adjacency.get(id) ?? []) {
      if (!componentIds.has(neighbor) || distances.has(neighbor)) continue;
      distances.set(neighbor, nextDistance);
      queue.push(neighbor);
    }
  }
  return distances;
}

function selectClusterHubs(
  componentNodes: readonly UniversalRelationshipNode[],
  componentIds: ReadonlySet<string>,
  graph: UniversalRelationshipGraph,
  graphNodeById: ReadonlyMap<string, UniversalRelationshipNode>,
  degree: ReadonlyMap<string, number>,
  patentDegree: ReadonlyMap<string, number>,
): ClusterHub[] {
  const familyMembers = new Map<string, UniversalRelationshipNode[]>();
  for (const edge of graph.edges) {
    if (edge.kind !== "family" || !componentIds.has(edge.from) || !componentIds.has(edge.to)) continue;
    const from = graphNodeById.get(edge.from);
    const to = graphNodeById.get(edge.to);
    const family = from?.kind === "family" ? from : to?.kind === "family" ? to : undefined;
    const assignee = from?.kind === "assignee" ? from : to?.kind === "assignee" ? to : undefined;
    if (!family || !assignee) continue;
    const members = familyMembers.get(family.id) ?? [];
    if (!members.some((member) => member.id === assignee.id)) members.push(assignee);
    familyMembers.set(family.id, members);
  }

  const familyHubs = componentNodes
    .filter((node) => node.kind === "family")
    .map((family) => {
      const members = (familyMembers.get(family.id) ?? []).sort(compareNodes);
      const strength = members.reduce((sum, member) => sum + (patentDegree.get(member.id) ?? 0), 0);
      return {
        id: `cluster:${family.id}`,
        anchorId: family.id,
        anchorLabel: family.name,
        seedIds: [family.id, ...members.map((member) => member.id)],
        strength,
      } satisfies ClusterHub;
    })
    .filter((hub) => hub.strength >= MIN_HUB_PATENT_EDGES);

  const coveredAssignees = new Set(familyHubs.flatMap((hub) => hub.seedIds.slice(1)));
  const assigneeHubs = componentNodes
    .filter(
      (node) =>
        node.kind === "assignee" &&
        !coveredAssignees.has(node.id) &&
        (patentDegree.get(node.id) ?? 0) >= MIN_HUB_PATENT_EDGES,
    )
    .map(
      (assignee) =>
        ({
          id: `cluster:${assignee.id}`,
          anchorId: assignee.id,
          anchorLabel: assignee.name,
          seedIds: [assignee.id],
          strength: patentDegree.get(assignee.id) ?? 0,
        }) satisfies ClusterHub,
    );

  const hubs = [...familyHubs, ...assigneeHubs].sort((left, right) => {
    if (right.strength !== left.strength) return right.strength - left.strength;
    const leftNode = graphNodeById.get(left.anchorId);
    const rightNode = graphNodeById.get(right.anchorId);
    if (!leftNode || !rightNode) return left.anchorId.localeCompare(right.anchorId);
    return compareNodes(leftNode, rightNode);
  });
  if (hubs.length > 0) return hubs;

  const root = highestDegreeNode(componentNodes, degree);
  return [
    {
      id: `cluster:${root.id}`,
      anchorId: root.id,
      anchorLabel: root.name,
      seedIds: [root.id],
      strength: degree.get(root.id) ?? 0,
    },
  ];
}

function preferredAngle(
  nodeId: string,
  nodeLevel: number,
  adjacency: ReadonlyMap<string, ReadonlySet<string>>,
  levelById: ReadonlyMap<string, number>,
  angleById: ReadonlyMap<string, number>,
): number | undefined {
  let sinSum = 0;
  let cosSum = 0;
  let count = 0;
  for (const neighbor of adjacency.get(nodeId) ?? []) {
    if ((levelById.get(neighbor) ?? Number.POSITIVE_INFINITY) >= nodeLevel) continue;
    const angle = angleById.get(neighbor);
    if (angle === undefined) continue;
    sinSum += Math.sin(angle);
    cosSum += Math.cos(angle);
    count++;
  }
  if (count === 0 || Math.hypot(sinSum, cosSum) < 1e-8) return undefined;
  return ((Math.atan2(sinSum, cosSum) % TAU) + TAU) % TAU;
}

function orderByPreferredAngle(
  nodes: readonly UniversalRelationshipNode[],
  nodeLevel: number,
  adjacency: ReadonlyMap<string, ReadonlySet<string>>,
  levelById: ReadonlyMap<string, number>,
  angleById: ReadonlyMap<string, number>,
): Array<{ node: UniversalRelationshipNode; preferred?: number }> {
  const entries = nodes.map((node) => ({
    node,
    preferred: preferredAngle(node.id, nodeLevel, adjacency, levelById, angleById),
  }));
  const positioned = entries
    .filter((entry): entry is { node: UniversalRelationshipNode; preferred: number } => entry.preferred !== undefined)
    .sort((left, right) => left.preferred - right.preferred || compareClusterNodes(left.node, right.node));
  const unpositioned = entries
    .filter((entry) => entry.preferred === undefined)
    .sort((left, right) => compareClusterNodes(left.node, right.node));

  if (positioned.length > 1) {
    let largestGapIndex = positioned.length - 1;
    let largestGap = positioned[0].preferred + TAU - positioned.at(-1)!.preferred;
    for (let index = 0; index < positioned.length - 1; index++) {
      const gap = positioned[index + 1].preferred - positioned[index].preferred;
      if (gap <= largestGap) continue;
      largestGap = gap;
      largestGapIndex = index;
    }
    const start = (largestGapIndex + 1) % positioned.length;
    positioned.push(...positioned.splice(0, start));
  }

  return [...positioned, ...unpositioned];
}

function layoutCluster(
  hub: ClusterHub,
  clusterNodes: readonly UniversalRelationshipNode[],
  hubDistances: ReadonlyMap<string, number>,
  ownerById: ReadonlyMap<string, string>,
  adjacency: ReadonlyMap<string, ReadonlySet<string>>,
  graph: UniversalRelationshipGraph,
  componentIndex: number,
): LocalCluster {
  const ownedSeedIds = new Set(hub.seedIds.filter((id) => ownerById.get(id) === hub.id));
  ownedSeedIds.add(hub.anchorId);
  const hasInnerSeedRing = ownedSeedIds.size > 1;
  const levelById = new Map<string, number>();
  const levels = new Map<number, UniversalRelationshipNode[]>();

  for (const node of clusterNodes) {
    const level =
      node.id === hub.anchorId
        ? 0
        : ownedSeedIds.has(node.id)
          ? 1
          : Math.max(1, (hubDistances.get(node.id) ?? 1) + (hasInnerSeedRing ? 1 : 0));
    levelById.set(node.id, level);
    const nodesAtLevel = levels.get(level) ?? [];
    nodesAtLevel.push(node);
    levels.set(level, nodesAtLevel);
  }

  const anchor = clusterNodes.find((node) => node.id === hub.anchorId) ?? clusterNodes[0];
  const localNodes: LocalCluster["nodes"] = [
    {
      id: anchor.id,
      kind: anchor.kind,
      localX: 0,
      localY: 0,
      r: universalNodeRadius(anchor.kind),
      label: truncateLabel(anchor.name),
      fullLabel: anchor.name,
      componentIndex,
      clusterId: hub.id,
    },
  ];
  const angleById = new Map<string, number>();
  let previousRadius = 0;
  let maxRadius = universalNodeRadius(anchor.kind);
  const sortedLevels = [...levels.keys()].filter((level) => level > 0).sort((left, right) => left - right);

  for (const level of sortedLevels) {
    const ordered = orderByPreferredAngle(levels.get(level) ?? [], level, adjacency, levelById, angleById);
    let offset = 0;
    let bandIndex = 0;
    while (offset < ordered.length) {
      const ringRadius = previousRadius + MIN_RING_GAP;
      const capacity = Math.max(1, Math.floor((TAU * ringRadius) / MIN_NODE_ARC));
      const band = ordered.slice(offset, offset + capacity);
      const bandAnchor = band.find((entry) => entry.preferred !== undefined)?.preferred;
      const angleOffset = bandAnchor ?? TOP + (bandIndex % 2 === 1 && band.length > 1 ? Math.PI / band.length : 0);
      let largestNodeRadius = 0;

      band.forEach(({ node }, index) => {
        const angle = angleOffset + (TAU * index) / band.length;
        angleById.set(node.id, angle);
        const r = universalNodeRadius(node.kind);
        largestNodeRadius = Math.max(largestNodeRadius, r);
        localNodes.push({
          id: node.id,
          kind: node.kind,
          localX: ringRadius * Math.cos(angle),
          localY: ringRadius * Math.sin(angle),
          r,
          label: truncateLabel(node.name),
          fullLabel: node.name,
          componentIndex,
          clusterId: hub.id,
        });
      });

      maxRadius = Math.max(maxRadius, ringRadius + largestNodeRadius);
      previousRadius = ringRadius;
      offset += band.length;
      bandIndex++;
    }
  }

  const clusterIdSet = new Set(clusterNodes.map((node) => node.id));
  return {
    id: hub.id,
    anchorId: hub.anchorId,
    anchorLabel: hub.anchorLabel,
    size: Math.max(MIN_CLUSTER_SIZE, 2 * (maxRadius + CLUSTER_PADDING)),
    nodeCount: clusterNodes.length,
    edgeCount: graph.edges.filter((edge) => clusterIdSet.has(edge.from) && clusterIdSet.has(edge.to)).length,
    nodes: localNodes,
  };
}

function clusterConnectionWeights(
  clusters: readonly LocalCluster[],
  ownerById: ReadonlyMap<string, string>,
  graph: UniversalRelationshipGraph,
): Map<string, Map<string, number>> {
  const weights = new Map(clusters.map((cluster) => [cluster.id, new Map<string, number>()]));
  for (const edge of graph.edges) {
    const fromCluster = ownerById.get(edge.from);
    const toCluster = ownerById.get(edge.to);
    if (
      !fromCluster ||
      !toCluster ||
      fromCluster === toCluster ||
      !weights.has(fromCluster) ||
      !weights.has(toCluster)
    ) {
      continue;
    }
    weights.get(fromCluster)!.set(toCluster, (weights.get(fromCluster)!.get(toCluster) ?? 0) + 1);
    weights.get(toCluster)!.set(fromCluster, (weights.get(toCluster)!.get(fromCluster) ?? 0) + 1);
  }
  return weights;
}

function totalConnectionWeight(clusterId: string, weights: ReadonlyMap<string, ReadonlyMap<string, number>>): number {
  return [...(weights.get(clusterId)?.values() ?? [])].reduce((sum, weight) => sum + weight, 0);
}

function compareConstellationClusters(
  left: LocalCluster,
  right: LocalCluster,
  weights: ReadonlyMap<string, ReadonlyMap<string, number>>,
): number {
  return (
    totalConnectionWeight(right.id, weights) - totalConnectionWeight(left.id, weights) ||
    right.nodeCount - left.nodeCount ||
    right.size - left.size ||
    catalogCollator.compare(left.anchorLabel, right.anchorLabel)
  );
}

function greedyConstellationOrder(
  clusters: readonly LocalCluster[],
  weights: ReadonlyMap<string, ReadonlyMap<string, number>>,
): LocalCluster[] {
  if (clusters.length < 2) return [...clusters];
  const remaining = [...clusters].sort((left, right) => compareConstellationClusters(left, right, weights));
  const ordered = [remaining.shift()!];
  while (remaining.length > 0) {
    const previous = ordered.at(-1)!;
    remaining.sort(
      (left, right) =>
        (weights.get(previous.id)?.get(right.id) ?? 0) - (weights.get(previous.id)?.get(left.id) ?? 0) ||
        compareConstellationClusters(left, right, weights),
    );
    ordered.push(remaining.shift()!);
  }
  return ordered;
}

function constellationRingPositions(
  ordered: readonly LocalCluster[],
  minimumRadius: number,
  fallbackAngle: number,
): { radius: number; positions: Array<{ cluster: LocalCluster; angle: number; x: number; y: number }> } {
  const slotLengths = ordered.map((cluster) => cluster.size + CONSTELLATION_ARC_GAP);
  let radius = Math.max(minimumRadius, slotLengths.reduce((sum, length) => sum + length, 0) / TAU);

  for (let attempt = 0; attempt < 24; attempt++) {
    const occupiedAngle = slotLengths.reduce((sum, length) => sum + length / radius, 0);
    const extraAngle = Math.max(0, TAU - occupiedAngle) / ordered.length;
    const firstSpan = slotLengths[0] / radius;
    let cursorAngle = fallbackAngle - firstSpan / 2;
    const positions = ordered.map((cluster, index) => {
      const span = slotLengths[index] / radius;
      const angle = cursorAngle + span / 2;
      cursorAngle += span + extraAngle;
      return { cluster, angle, x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
    });
    const overlaps = positions.some((left, leftIndex) =>
      positions.slice(leftIndex + 1).some((right) => {
        const minimumDistance = left.cluster.size / 2 + right.cluster.size / 2 + CONSTELLATION_GAP;
        return Math.hypot(left.x - right.x, left.y - right.y) < minimumDistance;
      }),
    );
    if (!overlaps) return { radius, positions };
    radius *= 1.08;
  }

  const positions = ordered.map((cluster, index) => {
    const angle = fallbackAngle + (TAU * index) / ordered.length;
    return { cluster, angle, x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
  });
  return { radius, positions };
}

function layoutClusterConstellation(
  localClusters: readonly LocalCluster[],
  ownerById: ReadonlyMap<string, string>,
  graph: UniversalRelationshipGraph,
  componentIndex: number,
): Pick<LocalComponent, "width" | "height" | "nodes" | "clusters"> {
  const weights = clusterConnectionWeights(localClusters, ownerById, graph);
  const centerCluster = [...localClusters].sort((left, right) => compareConstellationClusters(left, right, weights))[0];
  const centerByClusterId = new Map<string, { x: number; y: number }>([[centerCluster.id, { x: 0, y: 0 }]]);
  const orbitingClusters = greedyConstellationOrder(
    localClusters.filter((cluster) => cluster.id !== centerCluster.id),
    weights,
  );
  let previousOuterRadius = centerCluster.size / 2;
  for (let offset = 0, orbitIndex = 0; offset < orbitingClusters.length; orbitIndex++) {
    const orbit = orbitingClusters.slice(offset, offset + MAX_HUBS_PER_ORBIT);
    const largestRadius = Math.max(...orbit.map((cluster) => cluster.size / 2));
    const minimumRadius = previousOuterRadius + CONSTELLATION_GAP + largestRadius;
    const ringLayout = constellationRingPositions(
      orbit,
      minimumRadius,
      TOP + (orbitIndex % 2 === 1 ? Math.PI / orbit.length : 0),
    );
    for (const position of ringLayout.positions) {
      centerByClusterId.set(position.cluster.id, { x: position.x, y: position.y });
    }
    previousOuterRadius = Math.max(
      previousOuterRadius,
      ...ringLayout.positions.map((position) => ringLayout.radius + position.cluster.size / 2),
    );
    offset += orbit.length;
  }

  const minX = Math.min(...localClusters.map((cluster) => centerByClusterId.get(cluster.id)!.x - cluster.size / 2));
  const maxX = Math.max(...localClusters.map((cluster) => centerByClusterId.get(cluster.id)!.x + cluster.size / 2));
  const minY = Math.min(...localClusters.map((cluster) => centerByClusterId.get(cluster.id)!.y - cluster.size / 2));
  const maxY = Math.max(...localClusters.map((cluster) => centerByClusterId.get(cluster.id)!.y + cluster.size / 2));
  const shiftX = COMPONENT_INSET - minX;
  const shiftY = COMPONENT_HEADER_HEIGHT - minY;
  const nodes: UniversalLayoutNode[] = [];
  const clusters: UniversalLayoutCluster[] = [];

  for (const cluster of localClusters) {
    const center = centerByClusterId.get(cluster.id)!;
    const clusterX = shiftX + center.x - cluster.size / 2;
    const clusterY = shiftY + center.y - cluster.size / 2;
    for (const localNode of cluster.nodes) {
      const { localX, localY, ...rest } = localNode;
      nodes.push({ ...rest, x: clusterX + cluster.size / 2 + localX, y: clusterY + cluster.size / 2 + localY });
    }
    clusters.push({
      id: cluster.id,
      componentIndex,
      anchorId: cluster.anchorId,
      anchorLabel: cluster.anchorLabel,
      x: clusterX,
      y: clusterY,
      width: cluster.size,
      height: cluster.size,
      nodeCount: cluster.nodeCount,
      edgeCount: cluster.edgeCount,
    });
  }

  return {
    width: Math.max(maxX - minX + 2 * COMPONENT_INSET, MIN_COMPONENT_SIZE),
    height: Math.max(maxY - minY + COMPONENT_HEADER_HEIGHT + COMPONENT_INSET, MIN_COMPONENT_SIZE),
    nodes,
    clusters,
  };
}

function layoutComponent(
  componentIds: readonly string[],
  componentIndex: number,
  graph: UniversalRelationshipGraph,
  graphNodeById: ReadonlyMap<string, UniversalRelationshipNode>,
  adjacency: ReadonlyMap<string, ReadonlySet<string>>,
  degree: ReadonlyMap<string, number>,
  patentDegree: ReadonlyMap<string, number>,
): LocalComponent {
  const componentIdSet = new Set(componentIds);
  const componentNodes = componentIds
    .map((id) => graphNodeById.get(id))
    .filter((node): node is UniversalRelationshipNode => node !== undefined);
  const root = highestDegreeNode(componentNodes, degree);
  const hubs = selectClusterHubs(componentNodes, componentIdSet, graph, graphNodeById, degree, patentDegree);
  const distancesByHub = new Map(
    hubs.map((hub) => [hub.id, distancesFromSeeds(hub.seedIds, componentIdSet, adjacency)]),
  );
  const ownerById = new Map<string, string>();

  for (const node of componentNodes) {
    let owner = hubs[0];
    let bestDistance = distancesByHub.get(owner.id)?.get(node.id) ?? Number.POSITIVE_INFINITY;
    for (let index = 1; index < hubs.length; index++) {
      const candidate = hubs[index];
      const distance = distancesByHub.get(candidate.id)?.get(node.id) ?? Number.POSITIVE_INFINITY;
      if (distance >= bestDistance) continue;
      owner = candidate;
      bestDistance = distance;
    }
    ownerById.set(node.id, owner.id);
  }

  const localClusters = hubs
    .map((hub) => {
      const clusterNodes = componentNodes.filter((node) => ownerById.get(node.id) === hub.id);
      return layoutCluster(
        hub,
        clusterNodes,
        distancesByHub.get(hub.id) ?? new Map(),
        ownerById,
        adjacency,
        graph,
        componentIndex,
      );
    })
    .sort((left, right) => catalogCollator.compare(left.anchorLabel, right.anchorLabel));
  const constellation = layoutClusterConstellation(localClusters, ownerById, graph, componentIndex);

  return {
    index: componentIndex,
    width: constellation.width,
    height: constellation.height,
    rootId: root.id,
    rootLabel: root.name,
    nodeCount: componentNodes.length,
    edgeCount: graph.edges.filter((edge) => componentIdSet.has(edge.from) && componentIdSet.has(edge.to)).length,
    nodes: constellation.nodes,
    clusters: constellation.clusters,
  };
}

/** Compute deterministic SVG positions for every universal graph component and hub neighborhood. */
export function layoutUniversalRelationshipGraph(graph: UniversalRelationshipGraph): UniversalRelationshipLayout {
  const graphNodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const adjacency = new Map(graph.nodes.map((node) => [node.id, new Set<string>()]));
  const degree = new Map(graph.nodes.map((node) => [node.id, 0]));
  const patentDegree = new Map(graph.nodes.map((node) => [node.id, 0]));
  for (const edge of graph.edges) {
    adjacency.get(edge.from)?.add(edge.to);
    adjacency.get(edge.to)?.add(edge.from);
    degree.set(edge.from, (degree.get(edge.from) ?? 0) + 1);
    degree.set(edge.to, (degree.get(edge.to) ?? 0) + 1);
    if (edge.kind === "assignment") {
      patentDegree.set(edge.from, (patentDegree.get(edge.from) ?? 0) + 1);
      patentDegree.set(edge.to, (patentDegree.get(edge.to) ?? 0) + 1);
    }
  }

  const localComponents = graph.components.map((componentIds, componentIndex) =>
    layoutComponent(componentIds, componentIndex, graph, graphNodeById, adjacency, degree, patentDegree),
  );
  const totalArea = localComponents.reduce((sum, component) => sum + component.width * component.height, 0);
  const largestWidth = Math.max(...localComponents.map((component) => component.width), MIN_COMPONENT_SIZE);
  const targetWidth = Math.max(largestWidth, Math.sqrt(totalArea) * 1.25);
  const nodes: UniversalLayoutNode[] = [];
  const nodeById: Record<string, UniversalLayoutNode> = {};
  const clusters: UniversalLayoutCluster[] = [];
  const components: UniversalLayoutComponent[] = [];
  let cursorX = CANVAS_PADDING;
  let cursorY = CANVAS_PADDING;
  let rowHeight = 0;
  let usedWidth = 0;

  for (const component of localComponents) {
    if (cursorX > CANVAS_PADDING && cursorX + component.width > targetWidth + CANVAS_PADDING) {
      cursorX = CANVAS_PADDING;
      cursorY += rowHeight + COMPONENT_GAP;
      rowHeight = 0;
    }

    for (const localNode of component.nodes) {
      const node = { ...localNode, x: cursorX + localNode.x, y: cursorY + localNode.y };
      nodes.push(node);
      nodeById[node.id] = node;
    }
    for (const localCluster of component.clusters) {
      clusters.push({ ...localCluster, x: cursorX + localCluster.x, y: cursorY + localCluster.y });
    }
    components.push({
      id: `component-${component.index + 1}`,
      index: component.index,
      x: cursorX,
      y: cursorY,
      width: component.width,
      height: component.height,
      nodeCount: component.nodeCount,
      edgeCount: component.edgeCount,
      clusterCount: component.clusters.length,
      rootId: component.rootId,
      rootLabel: component.rootLabel,
    });

    usedWidth = Math.max(usedWidth, cursorX + component.width);
    rowHeight = Math.max(rowHeight, component.height);
    cursorX += component.width + COMPONENT_GAP;
  }

  const edges: UniversalLayoutEdge[] = graph.edges.flatMap((edge) => {
    const from = nodeById[edge.from];
    const to = nodeById[edge.to];
    if (!from || !to) return [];
    return [{ id: edge.id, from: edge.from, to: edge.to, x1: from.x, y1: from.y, x2: to.x, y2: to.y }];
  });

  return {
    width: Math.max(usedWidth + CANVAS_PADDING, MIN_COMPONENT_SIZE),
    height: Math.max(cursorY + rowHeight + CANVAS_PADDING, MIN_COMPONENT_SIZE),
    nodes,
    nodeById,
    edges,
    clusters,
    components,
  };
}
