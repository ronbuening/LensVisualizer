import { catalogCollator } from "../../utils/catalog/collation.js";
import {
  isUniversalCorporateEdge,
  type UniversalRelationshipGraph,
} from "../../utils/catalog/universalRelationshipGraph.js";
import { buildConstellationAffinities, orderConstellationOrbit } from "./constellationAffinity.js";
import type { UniversalRelationshipLayout } from "./universalLayout.js";

export interface UniversalNeighborhood {
  id: string;
  anchorId: string;
  anchorLabel: string;
  componentIndex: number;
  nodeIds: string[];
  edgeIds: string[];
  patents: number;
  inventors: number;
}
export interface UniversalNeighborhoodBridge {
  id: string;
  from: string;
  to: string;
  category: "patent" | "corporate" | "catalog";
  edgeIds: string[];
}

/** Membership comes from the complete layout and never changes when a relationship filter changes. */
export function buildUniversalNeighborhoods(graph: UniversalRelationshipGraph, layout: UniversalRelationshipLayout) {
  const owner = new Map(layout.nodes.map((node) => [node.id, node.clusterId]));
  const neighborhoods: UniversalNeighborhood[] = layout.clusters.map((cluster) => ({
    id: cluster.id,
    anchorId: cluster.anchorId,
    anchorLabel: cluster.anchorLabel,
    componentIndex: cluster.componentIndex,
    nodeIds: [],
    edgeIds: [],
    patents: 0,
    inventors: 0,
  }));
  const byId = new Map(neighborhoods.map((n) => [n.id, n]));
  for (const node of graph.nodes) {
    const neighborhood = byId.get(owner.get(node.id)!);
    if (!neighborhood) continue;
    neighborhood.nodeIds.push(node.id);
    if (node.kind === "patent") neighborhood.patents++;
    if (node.kind === "author") neighborhood.inventors++;
  }
  const bridges = new Map<string, UniversalNeighborhoodBridge>();
  for (const edge of graph.edges) {
    const a = owner.get(edge.from),
      b = owner.get(edge.to);
    if (!a || !b) continue;
    if (a === b) {
      byId.get(a)!.edgeIds.push(edge.id);
      continue;
    }
    const [from, to] = [a, b].sort(catalogCollator.compare);
    const category = isUniversalCorporateEdge(edge.kind)
      ? "corporate"
      : edge.kind === "catalog-maker"
        ? "catalog"
        : "patent";
    const id = JSON.stringify([from, to, category]);
    const bridge = bridges.get(id) ?? { id, from, to, category, edgeIds: [] };
    bridge.edgeIds.push(edge.id);
    bridges.set(id, bridge);
  }
  return { neighborhoods, bridges: [...bridges.values()], owner };
}

/** Equal-size cards keep prolific assignees from dominating the overview's area. */
export function layoutUniversalNeighborhoods(
  graph: UniversalRelationshipGraph,
  model: ReturnType<typeof buildUniversalNeighborhoods>,
  availableWidth: number,
) {
  const columns = Math.max(2, Math.floor(availableWidth / 240));
  const cellWidth = availableWidth / columns;
  const cellHeight = 142;
  const affinities = buildConstellationAffinities(
    model.neighborhoods.map((n) => n.id),
    model.owner,
    graph,
  );
  const positioned: (UniversalNeighborhood & { x: number; y: number; width: number; height: number })[] = [];
  const networks: { index: number; x: number; y: number; width: number; height: number }[] = [];
  let x = 0,
    y = 0,
    rowHeight = 0;
  for (let index = 0; index < graph.components.length; index++) {
    const members = model.neighborhoods.filter((n) => n.componentIndex === index);
    if (!members.length) continue;
    const ordered = orderConstellationOrbit(
      members.map((n) => ({ ...n, nodeCount: n.nodeIds.length, size: 1 })),
      affinities,
    );
    const cols = Math.min(columns, Math.ceil(Math.sqrt(members.length)));
    const width = cols * cellWidth,
      height = Math.ceil(members.length / cols) * cellHeight + 30;
    if (x + width > availableWidth + 1) {
      x = 0;
      y += rowHeight;
      rowHeight = 0;
    }
    networks.push({ index, x: x + 4, y: y + 4, width: width - 8, height: height - 8 });
    ordered.forEach((n, i) => {
      const row = Math.floor(i / cols),
        col = row % 2 ? cols - 1 - (i % cols) : i % cols;
      positioned.push({
        ...n,
        x: x + col * cellWidth + 14,
        y: y + row * cellHeight + 34,
        width: cellWidth - 28,
        height: cellHeight - 24,
      });
    });
    x += width;
    rowHeight = Math.max(rowHeight, height);
  }
  return { nodes: positioned, networks, width: availableWidth, height: y + rowHeight };
}
