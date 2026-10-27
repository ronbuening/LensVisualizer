/**
 * Hub-neighborhood summary for the universal relationship map.
 *
 * Membership comes from the complete universal layout: every node belongs to
 * the hub cluster the layout placed it in. Edges whose endpoints sit in two
 * different neighborhoods become typed bridges (patent attribution, sourced
 * corporate history, or catalog-maker grouping), so the summary view can name
 * each hub's strongest links without drawing the whole network.
 */

import { catalogCollator } from "../../utils/catalog/collation.js";
import { normalizeSearchText } from "../../utils/catalog/searchCatalog.js";
import {
  isUniversalCorporateEdge,
  type UniversalEdgeKind,
  type UniversalRelationshipGraph,
} from "../../utils/catalog/universalRelationshipGraph.js";
import type { UniversalRelationshipLayout } from "./universalLayout.js";

export type UniversalBridgeCategory = "patent" | "corporate" | "catalog";
export const UNIVERSAL_BRIDGE_CATEGORIES: readonly UniversalBridgeCategory[] = ["patent", "corporate", "catalog"];

export interface UniversalNeighborhood {
  id: string;
  anchorId: string;
  anchorLabel: string;
  componentIndex: number;
  nodeIds: string[];
  /** Edges with both endpoints inside the neighborhood. */
  edgeIds: string[];
  patents: number;
  inventors: number;
  assignees: number;
  /** Non-patent catalog models grouped under a maker hub. */
  models: number;
  /** Member assignee, organization, family, and maker names, for filtering by a name the hub label omits. */
  companyNames: string[];
}

export interface UniversalNeighborhoodBridge {
  id: string;
  from: string;
  to: string;
  category: UniversalBridgeCategory;
  edgeIds: string[];
  /** Distinct patents for patent bridges; underlying records for corporate and catalog bridges. */
  weight: number;
}

export interface UniversalNeighborhoodModel {
  neighborhoods: UniversalNeighborhood[];
  bridges: UniversalNeighborhoodBridge[];
  /** Node id to owning neighborhood id. */
  owner: ReadonlyMap<string, string>;
}

/** One neighboring hub reached through a single bridge category. */
export interface UniversalNeighborLink {
  neighborhoodId: string;
  anchorId: string;
  anchorLabel: string;
  weight: number;
}

export interface UniversalBridgeGroup {
  category: UniversalBridgeCategory;
  /** Strongest links first, capped by the summary limit. */
  links: UniversalNeighborLink[];
  /** Every neighborhood reached through this category, before the cap. */
  total: number;
}

export function universalBridgeCategory(kind: UniversalEdgeKind): UniversalBridgeCategory {
  if (isUniversalCorporateEdge(kind)) return "corporate";
  return kind === "catalog-maker" ? "catalog" : "patent";
}

/** Derive neighborhoods and typed cross-neighborhood bridges from the layout's hub clusters. */
export function buildUniversalNeighborhoods(
  graph: UniversalRelationshipGraph,
  layout: Pick<UniversalRelationshipLayout, "clusters" | "nodes">,
): UniversalNeighborhoodModel {
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
    assignees: 0,
    models: 0,
    companyNames: [],
  }));
  const byId = new Map(neighborhoods.map((neighborhood) => [neighborhood.id, neighborhood]));
  const kindById = new Map(graph.nodes.map((node) => [node.id, node.kind]));
  for (const node of graph.nodes) {
    const neighborhood = byId.get(owner.get(node.id) ?? "");
    if (!neighborhood) continue;
    neighborhood.nodeIds.push(node.id);
    if (node.kind === "patent") neighborhood.patents++;
    else if (node.kind === "author") neighborhood.inventors++;
    else if (node.kind === "assignee") neighborhood.assignees++;
    else if (node.kind === "lens") neighborhood.models++;
    if (node.kind === "assignee" || node.kind === "organization" || node.kind === "family" || node.kind === "maker")
      neighborhood.companyNames.push(node.name);
  }

  const bridges = new Map<string, UniversalNeighborhoodBridge>();
  const bridgePatents = new Map<string, Set<string>>();
  for (const edge of graph.edges) {
    const a = owner.get(edge.from);
    const b = owner.get(edge.to);
    if (!a || !b || !byId.has(a) || !byId.has(b)) continue;
    if (a === b) {
      byId.get(a)!.edgeIds.push(edge.id);
      continue;
    }
    const [from, to] = [a, b].sort(catalogCollator.compare);
    const category = universalBridgeCategory(edge.kind);
    const id = JSON.stringify([from, to, category]);
    let bridge = bridges.get(id);
    if (!bridge) {
      bridge = { id, from, to, category, edgeIds: [], weight: 0 };
      bridges.set(id, bridge);
    }
    bridge.edgeIds.push(edge.id);
    if (category === "patent") {
      // A patent reaching several inventors or assignees in one neighborhood counts once.
      let patents = bridgePatents.get(id);
      if (!patents) bridgePatents.set(id, (patents = new Set()));
      patents.add(kindById.get(edge.from) === "patent" ? edge.from : edge.to);
      bridge.weight = patents.size;
    } else {
      bridge.weight = bridge.edgeIds.length;
    }
  }
  return { neighborhoods, bridges: [...bridges.values()], owner };
}

/** Largest first: patent and catalog-model records, then member count, then anchor name. */
export function compareUniversalNeighborhoodSize(left: UniversalNeighborhood, right: UniversalNeighborhood): number {
  return (
    right.patents + right.models - (left.patents + left.models) ||
    right.nodeIds.length - left.nodeIds.length ||
    catalogCollator.compare(left.anchorLabel, right.anchorLabel) ||
    catalogCollator.compare(left.id, right.id)
  );
}

/** First of the anchor and member company names containing the query; an empty query matches the anchor. */
export function universalNeighborhoodMatch(neighborhood: UniversalNeighborhood, query: string): string | undefined {
  const needle = normalizeSearchText(query);
  if (!needle) return neighborhood.anchorLabel;
  return [neighborhood.anchorLabel, ...neighborhood.companyNames].find((name) =>
    normalizeSearchText(name).includes(needle),
  );
}

/** Keep neighborhoods whose anchor or member company name contains the query, largest first. */
export function filterUniversalNeighborhoods(
  neighborhoods: readonly UniversalNeighborhood[],
  query: string,
): UniversalNeighborhood[] {
  return neighborhoods
    .filter((neighborhood) => universalNeighborhoodMatch(neighborhood, query) !== undefined)
    .sort(compareUniversalNeighborhoodSize);
}

/** Group each neighborhood's bridges by category, strongest neighbors first. */
export function summarizeUniversalBridges(
  model: UniversalNeighborhoodModel,
  limit = 3,
): Map<string, UniversalBridgeGroup[]> {
  const byId = new Map(model.neighborhoods.map((neighborhood) => [neighborhood.id, neighborhood]));
  const links = new Map<string, Map<UniversalBridgeCategory, UniversalNeighborLink[]>>();
  const add = (ownId: string, otherId: string, category: UniversalBridgeCategory, weight: number) => {
    const other = byId.get(otherId)!;
    let categories = links.get(ownId);
    if (!categories) links.set(ownId, (categories = new Map()));
    let list = categories.get(category);
    if (!list) categories.set(category, (list = []));
    list.push({ neighborhoodId: other.id, anchorId: other.anchorId, anchorLabel: other.anchorLabel, weight });
  };
  for (const bridge of model.bridges) {
    add(bridge.from, bridge.to, bridge.category, bridge.weight);
    add(bridge.to, bridge.from, bridge.category, bridge.weight);
  }
  const summary = new Map<string, UniversalBridgeGroup[]>();
  for (const [id, categories] of links) {
    summary.set(
      id,
      UNIVERSAL_BRIDGE_CATEGORIES.flatMap((category) => {
        const list = categories.get(category);
        if (!list) return [];
        list.sort(
          (left, right) => right.weight - left.weight || catalogCollator.compare(left.anchorLabel, right.anchorLabel),
        );
        return [{ category, links: list.slice(0, limit), total: list.length }];
      }),
    );
  }
  return summary;
}
