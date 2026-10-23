import type { GraphPatentNode } from "./relationshipGraph.js";
import {
  buildInventorAffiliations,
  type InventorAffiliationNetwork,
  type InventorAffiliationRecord,
} from "./inventorAffiliations.js";
import type { UniversalPartyNode, UniversalRelationshipGraph } from "./universalRelationshipGraph.js";
import { catalogCollator } from "./collation.js";

export interface RelationshipInsights extends InventorAffiliationNetwork {
  patents: ReadonlyMap<string, GraphPatentNode>;
  inventorPatents: ReadonlyMap<string, readonly string[]>;
  patentInventors: ReadonlyMap<string, readonly string[]>;
  inventorById: ReadonlyMap<string, InventorAffiliationRecord>;
  assigneeById: ReadonlyMap<string, UniversalPartyNode>;
  unassignedPatents: ReadonlyMap<string, readonly string[]>;
  companyPairs: readonly CompanyConnection[];
  assigneesByInventorCount: readonly string[];
}

interface CompanyConnection {
  left: string;
  right: string;
  inventorIds: string[];
}

/** Index the patent evidence once; all comparison views use the same distinct publication ids. */
export function buildRelationshipInsights(
  graph: Pick<UniversalRelationshipGraph, "nodes" | "edges" | "patents">,
): RelationshipInsights {
  const network = buildInventorAffiliations(graph);
  const patents = new Map(graph.patents.map((patent) => [patent.id, patent]));
  const inventorById = new Map(network.inventors.map((record) => [record.inventor.id, record]));
  const inventorPatents = new Map<string, Set<string>>();
  const patentInventors = new Map<string, Set<string>>();
  for (const edge of graph.edges) {
    if (edge.kind !== "authorship") continue;
    const inventor = inventorById.has(edge.from) ? edge.from : edge.to;
    const patent = patents.has(edge.to) ? edge.to : edge.from;
    if (!inventorById.has(inventor) || !patents.has(patent)) continue;
    if (!inventorPatents.has(inventor)) inventorPatents.set(inventor, new Set());
    if (!patentInventors.has(patent)) patentInventors.set(patent, new Set());
    inventorPatents.get(inventor)!.add(patent);
    patentInventors.get(patent)!.add(inventor);
  }
  const unassignedPatents = new Map<string, string[]>();
  const assigneeCounts = new Map<string, number>();
  for (const record of network.inventors) {
    const assigned = new Set(record.affiliations.flatMap((link) => link.patentIds));
    unassignedPatents.set(
      record.inventor.id,
      [...(inventorPatents.get(record.inventor.id) ?? [])].filter((id) => !assigned.has(id)).sort(),
    );
    for (const link of record.affiliations)
      assigneeCounts.set(link.assigneeId, (assigneeCounts.get(link.assigneeId) ?? 0) + 1);
  }
  return {
    ...network,
    patents,
    inventorById,
    assigneeById: new Map(network.assignees.map((company) => [company.id, company])),
    unassignedPatents,
    companyPairs: companyConnections(
      network,
      network.assignees.map((company) => company.id),
    ),
    assigneesByInventorCount: [...network.assignees]
      .sort(
        (a, b) =>
          (assigneeCounts.get(b.id) ?? 0) - (assigneeCounts.get(a.id) ?? 0) || catalogCollator.compare(a.name, b.name),
      )
      .map((company) => company.id),
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

export function companyConnections(
  insights: InventorAffiliationNetwork,
  companyIds: readonly string[],
): CompanyConnection[] {
  const selected = new Set(companyIds);
  const pairs = new Map<string, CompanyConnection>();
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

/** Keep the full collaborator list, but build edges only for the bounded diagram. */
export function inventorCollaborators(insights: RelationshipInsights, inventorId: string, limit: number) {
  const shared = new Map<string, Set<string>>();
  for (const patent of insights.inventorPatents.get(inventorId) ?? []) {
    for (const other of insights.patentInventors.get(patent) ?? []) {
      if (other === inventorId) continue;
      if (!shared.has(other)) shared.set(other, new Set());
      shared.get(other)!.add(patent);
    }
  }
  const collaborators = [...shared]
    .map(([id, patents]) => ({ record: insights.inventorById.get(id)!, patentIds: [...patents].sort() }))
    .sort(
      (a, b) =>
        b.patentIds.length - a.patentIds.length ||
        catalogCollator.compare(a.record.inventor.name, b.record.inventor.name),
    );
  const shown = collaborators.slice(0, Math.max(0, limit));
  const ids = new Set([inventorId, ...shown.map((entry) => entry.record.inventor.id)]);
  const edges = new Map<string, { from: string; to: string; patentIds: string[] }>();
  const relevantPatents = new Set([...ids].flatMap((id) => insights.inventorPatents.get(id) ?? []));
  for (const patent of relevantPatents) {
    const members = insights.patentInventors.get(patent)!.filter((id) => ids.has(id));
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
    collaborators,
    edges: [...edges.values()]
      .map((edge) => ({ ...edge, patentIds: edge.patentIds.sort() }))
      .sort((a, b) => catalogCollator.compare(a.from, b.from) || catalogCollator.compare(a.to, b.to)),
  };
}
