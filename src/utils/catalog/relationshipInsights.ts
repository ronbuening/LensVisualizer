import type { GraphPatentNode } from "./relationshipGraph.js";
import { buildInventorAffiliations, type InventorAffiliationNetwork } from "./inventorAffiliations.js";
import type { UniversalRelationshipGraph } from "./universalRelationshipGraph.js";
import { catalogCollator } from "./collation.js";

export interface RelationshipInsights extends InventorAffiliationNetwork {
  patents: ReadonlyMap<string, GraphPatentNode>;
  inventorPatents: ReadonlyMap<string, readonly string[]>;
  patentInventors: ReadonlyMap<string, readonly string[]>;
}

/** Index the patent evidence once; all comparison views use the same distinct publication ids. */
export function buildRelationshipInsights(graph: UniversalRelationshipGraph): RelationshipInsights {
  const network = buildInventorAffiliations(graph);
  const patents = new Map(graph.patents.map((patent) => [patent.id, patent]));
  const authors = new Set(network.inventors.map((record) => record.inventor.id));
  const inventorPatents = new Map<string, Set<string>>();
  const patentInventors = new Map<string, Set<string>>();
  for (const edge of graph.edges) {
    if (edge.kind !== "authorship") continue;
    const inventor = authors.has(edge.from) ? edge.from : edge.to;
    const patent = patents.has(edge.to) ? edge.to : edge.from;
    if (!authors.has(inventor) || !patents.has(patent)) continue;
    if (!inventorPatents.has(inventor)) inventorPatents.set(inventor, new Set());
    if (!patentInventors.has(patent)) patentInventors.set(patent, new Set());
    inventorPatents.get(inventor)!.add(patent);
    patentInventors.get(patent)!.add(inventor);
  }
  return {
    ...network,
    patents,
    inventorPatents: new Map(
      [...inventorPatents].sort(([a], [b]) => catalogCollator.compare(a, b)).map(([id, ids]) => [id, [...ids].sort()]),
    ),
    patentInventors: new Map(
      [...patentInventors].sort(([a], [b]) => catalogCollator.compare(a, b)).map(([id, ids]) => [id, [...ids].sort()]),
    ),
  };
}

export function companyBridge(insights: InventorAffiliationNetwork, left: string, right: string) {
  if (left === right) return [];
  return insights.inventors
    .flatMap((record) => {
      const a = record.affiliations.find((link) => link.assigneeId === left);
      const b = record.affiliations.find((link) => link.assigneeId === right);
      if (!a || !b) return [];
      return [
        {
          record,
          left: a,
          right: b,
          rightShare: b.patentIds.length / (a.patentIds.length + b.patentIds.length),
          jointPatentIds: a.patentIds.filter((id) => b.patentIds.includes(id)),
        },
      ];
    })
    .sort(
      (a, b) =>
        b.left.patentIds.length + b.right.patentIds.length - a.left.patentIds.length - a.right.patentIds.length ||
        catalogCollator.compare(a.record.inventor.name, b.record.inventor.name),
    );
}

export function companyConnections(insights: InventorAffiliationNetwork, companyIds: readonly string[]) {
  const selected = new Set(companyIds);
  const pairs = new Map<string, { left: string; right: string; inventorIds: string[] }>();
  for (const record of insights.inventors) {
    const ids = record.affiliations
      .map((link) => link.assigneeId)
      .filter((id) => selected.has(id))
      .sort();
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const key = JSON.stringify([ids[i], ids[j]]);
        const pair = pairs.get(key) ?? { left: ids[i], right: ids[j], inventorIds: [] };
        pair.inventorIds.push(record.inventor.id);
        pairs.set(key, pair);
      }
    }
  }
  return [...pairs.values()].sort(
    (a, b) =>
      b.inventorIds.length - a.inventorIds.length ||
      catalogCollator.compare(a.left, b.left) ||
      catalogCollator.compare(a.right, b.right),
  );
}

/** Direct collaborators, followed by every recorded coauthorship among the displayed people. */
export function inventorCollaborators(insights: RelationshipInsights, inventorId: string, limit: number) {
  const shared = new Map<string, Set<string>>();
  for (const patent of insights.inventorPatents.get(inventorId) ?? []) {
    for (const other of insights.patentInventors.get(patent) ?? []) {
      if (other === inventorId) continue;
      if (!shared.has(other)) shared.set(other, new Set());
      shared.get(other)!.add(patent);
    }
  }
  const byId = new Map(insights.inventors.map((record) => [record.inventor.id, record]));
  const collaborators = [...shared]
    .map(([id, patents]) => ({ record: byId.get(id)!, patentIds: [...patents].sort() }))
    .sort(
      (a, b) =>
        b.patentIds.length - a.patentIds.length ||
        catalogCollator.compare(a.record.inventor.name, b.record.inventor.name),
    );
  const shown = collaborators.slice(0, Math.max(0, limit));
  const ids = new Set([inventorId, ...shown.map((entry) => entry.record.inventor.id)]);
  const edges = new Map<string, { from: string; to: string; patentIds: string[] }>();
  for (const [patent, inventors] of insights.patentInventors) {
    const members = inventors.filter((id) => ids.has(id)).sort();
    for (let i = 0; i < members.length; i++) {
      for (let j = i + 1; j < members.length; j++) {
        const key = JSON.stringify([members[i], members[j]]);
        const edge = edges.get(key) ?? { from: members[i], to: members[j], patentIds: [] };
        edge.patentIds.push(patent);
        edges.set(key, edge);
      }
    }
  }
  return {
    collaborators: shown,
    total: collaborators.length,
    edges: [...edges.values()]
      .map((edge) => ({ ...edge, patentIds: edge.patentIds.sort() }))
      .sort((a, b) => catalogCollator.compare(a.from, b.from) || catalogCollator.compare(a.to, b.to)),
  };
}
