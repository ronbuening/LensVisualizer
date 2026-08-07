/**
 * Deterministic clustered layout for the universal relationship map.
 *
 * Each connected component is arranged as breadth-first concentric rings around
 * its highest-degree node. Component squares are then shelf-packed into one SVG
 * canvas. This keeps disconnected catalog segments visibly separate without a
 * runtime force simulation or another rendering dependency.
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

export interface UniversalLayoutComponent {
  id: string;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  nodeCount: number;
  edgeCount: number;
  rootId: string;
  rootLabel: string;
}

export interface UniversalRelationshipLayout {
  width: number;
  height: number;
  nodes: UniversalLayoutNode[];
  nodeById: Record<string, UniversalLayoutNode>;
  edges: UniversalLayoutEdge[];
  components: UniversalLayoutComponent[];
}

const TAU = 2 * Math.PI;
const TOP = -Math.PI / 2;
const MIN_COMPONENT_SIZE = 180;
const COMPONENT_PADDING = 54;
const CANVAS_PADDING = 24;
const COMPONENT_GAP = 24;
const MIN_RING_GAP = 54;
const MIN_NODE_ARC = 28;

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

/** Compute deterministic SVG positions for every universal graph component. */
export function layoutUniversalRelationshipGraph(graph: UniversalRelationshipGraph): UniversalRelationshipLayout {
  const graphNodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const adjacency = new Map(graph.nodes.map((node) => [node.id, new Set<string>()]));
  const degree = new Map(graph.nodes.map((node) => [node.id, 0]));
  for (const edge of graph.edges) {
    adjacency.get(edge.from)?.add(edge.to);
    adjacency.get(edge.to)?.add(edge.from);
    degree.set(edge.from, (degree.get(edge.from) ?? 0) + 1);
    degree.set(edge.to, (degree.get(edge.to) ?? 0) + 1);
  }

  interface LocalComponent {
    index: number;
    size: number;
    maxRadius: number;
    rootId: string;
    rootLabel: string;
    nodeCount: number;
    edgeCount: number;
    nodes: Array<Omit<UniversalLayoutNode, "x" | "y"> & { localX: number; localY: number }>;
  }

  const localComponents: LocalComponent[] = graph.components.map((componentIds, componentIndex) => {
    const componentNodes = componentIds
      .map((id) => graphNodeById.get(id))
      .filter((node): node is UniversalRelationshipNode => node !== undefined);
    const root = [...componentNodes].sort(
      (left, right) => (degree.get(right.id) ?? 0) - (degree.get(left.id) ?? 0) || compareNodes(left, right),
    )[0];

    const depth = new Map<string, number>([[root.id, 0]]);
    const queue = [root.id];
    for (let index = 0; index < queue.length; index++) {
      const id = queue[index];
      const nextDepth = (depth.get(id) ?? 0) + 1;
      const neighbors = [...(adjacency.get(id) ?? [])]
        .filter((neighbor) => componentIds.includes(neighbor) && !depth.has(neighbor))
        .sort((leftId, rightId) => {
          const left = graphNodeById.get(leftId);
          const right = graphNodeById.get(rightId);
          if (!left || !right) return leftId.localeCompare(rightId);
          return compareNodes(left, right);
        });
      for (const neighbor of neighbors) {
        depth.set(neighbor, nextDepth);
        queue.push(neighbor);
      }
    }

    const rings = new Map<number, UniversalRelationshipNode[]>();
    for (const node of componentNodes) {
      const nodeDepth = depth.get(node.id) ?? 0;
      const ring = rings.get(nodeDepth) ?? [];
      ring.push(node);
      rings.set(nodeDepth, ring);
    }
    for (const ring of rings.values()) ring.sort(compareNodes);

    let previousRadius = 0;
    let maxRadius = universalNodeRadius(root.kind);
    const localNodes: LocalComponent["nodes"] = [];
    const sortedDepths = [...rings.keys()].sort((left, right) => left - right);
    for (const ringDepth of sortedDepths) {
      const ring = rings.get(ringDepth) ?? [];
      if (ringDepth === 0) {
        const node = ring[0];
        localNodes.push({
          id: node.id,
          kind: node.kind,
          localX: 0,
          localY: 0,
          r: universalNodeRadius(node.kind),
          label: truncateLabel(node.name),
          fullLabel: node.name,
          componentIndex,
        });
        continue;
      }

      const largestNodeRadius = Math.max(...ring.map((node) => universalNodeRadius(node.kind)));
      const ringRadius = Math.max(
        previousRadius + MIN_RING_GAP,
        (ring.length * MIN_NODE_ARC) / TAU,
        ringDepth * MIN_RING_GAP,
      );
      const angleOffset = ringDepth % 2 === 0 && ring.length > 1 ? Math.PI / ring.length : 0;
      ring.forEach((node, index) => {
        const angle = TOP + angleOffset + (TAU * index) / ring.length;
        localNodes.push({
          id: node.id,
          kind: node.kind,
          localX: ringRadius * Math.cos(angle),
          localY: ringRadius * Math.sin(angle),
          r: universalNodeRadius(node.kind),
          label: truncateLabel(node.name),
          fullLabel: node.name,
          componentIndex,
        });
      });
      previousRadius = ringRadius;
      maxRadius = Math.max(maxRadius, ringRadius + largestNodeRadius);
    }

    const size = Math.max(MIN_COMPONENT_SIZE, 2 * (maxRadius + COMPONENT_PADDING));
    const componentIdSet = new Set(componentIds);
    return {
      index: componentIndex,
      size,
      maxRadius,
      rootId: root.id,
      rootLabel: root.name,
      nodeCount: componentIds.length,
      edgeCount: graph.edges.filter((edge) => componentIdSet.has(edge.from) && componentIdSet.has(edge.to)).length,
      nodes: localNodes,
    };
  });

  const totalArea = localComponents.reduce((sum, component) => sum + component.size * component.size, 0);
  const largestSize = Math.max(...localComponents.map((component) => component.size), MIN_COMPONENT_SIZE);
  const targetWidth = Math.max(largestSize, Math.sqrt(totalArea) * 1.25);

  const nodes: UniversalLayoutNode[] = [];
  const nodeById: Record<string, UniversalLayoutNode> = {};
  const components: UniversalLayoutComponent[] = [];
  let cursorX = CANVAS_PADDING;
  let cursorY = CANVAS_PADDING;
  let rowHeight = 0;
  let usedWidth = 0;

  for (const component of localComponents) {
    if (cursorX > CANVAS_PADDING && cursorX + component.size > targetWidth + CANVAS_PADDING) {
      cursorX = CANVAS_PADDING;
      cursorY += rowHeight + COMPONENT_GAP;
      rowHeight = 0;
    }

    const centerX = cursorX + component.size / 2;
    const centerY = cursorY + component.size / 2;
    for (const localNode of component.nodes) {
      const { localX, localY, ...rest } = localNode;
      const node: UniversalLayoutNode = { ...rest, x: centerX + localX, y: centerY + localY };
      nodes.push(node);
      nodeById[node.id] = node;
    }

    components.push({
      id: `component-${component.index + 1}`,
      index: component.index,
      x: cursorX,
      y: cursorY,
      width: component.size,
      height: component.size,
      nodeCount: component.nodeCount,
      edgeCount: component.edgeCount,
      rootId: component.rootId,
      rootLabel: component.rootLabel,
    });

    usedWidth = Math.max(usedWidth, cursorX + component.size);
    rowHeight = Math.max(rowHeight, component.size);
    cursorX += component.size + COMPONENT_GAP;
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
    components,
  };
}
