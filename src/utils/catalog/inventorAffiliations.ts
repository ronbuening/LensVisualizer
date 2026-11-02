import { catalogCollator } from "./collation.js";
import type { UniversalPartyNode, UniversalRelationshipGraph } from "./universalRelationshipGraph.js";

export interface InventorAffiliation {
  assigneeId: string;
  patentIds: string[];
  /** Share of this inventor's distinct patents that have any named assignee. */
  share: number;
}

export interface InventorAffiliationRecord {
  inventor: UniversalPartyNode;
  affiliations: InventorAffiliation[];
  assignedPatentCount: number;
  unassignedPatentCount: number;
}

export interface InventorAffiliationNetwork {
  inventors: InventorAffiliationRecord[];
  assignees: UniversalPartyNode[];
}

/** Project only actual patent authorship + assignment; corporate history is never inferred as work. */
export function buildInventorAffiliations(
  graph: Pick<UniversalRelationshipGraph, "nodes" | "edges">,
): InventorAffiliationNetwork {
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const patentParties = new Map<string, { authors: Set<string>; assignees: Set<string> }>();
  for (const edge of graph.edges) {
    if (edge.kind !== "authorship" && edge.kind !== "assignment") continue;
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    const patent = from?.kind === "patent" ? from : to?.kind === "patent" ? to : undefined;
    const party = from?.kind === "patent" ? to : from;
    if (!patent || !party) continue;
    const parties = patentParties.get(patent.id) ?? { authors: new Set<string>(), assignees: new Set<string>() };
    if (edge.kind === "authorship" && party.kind === "author") parties.authors.add(party.id);
    if (edge.kind === "assignment" && party.kind === "assignee") parties.assignees.add(party.id);
    patentParties.set(patent.id, parties);
  }

  const records = new Map(
    graph.nodes
      .filter((node): node is UniversalPartyNode => node.kind === "author")
      .map((inventor) => [
        inventor.id,
        {
          inventor,
          assigned: new Set<string>(),
          unassigned: new Set<string>(),
          companies: new Map<string, Set<string>>(),
        },
      ]),
  );
  for (const [patentId, parties] of patentParties) {
    for (const authorId of parties.authors) {
      const record = records.get(authorId)!;
      if (parties.assignees.size === 0) record.unassigned.add(patentId);
      else record.assigned.add(patentId);
      for (const assigneeId of parties.assignees) {
        const patents = record.companies.get(assigneeId) ?? new Set<string>();
        patents.add(patentId);
        record.companies.set(assigneeId, patents);
      }
    }
  }
  const usedAssignees = new Set<string>();
  const inventors = [...records.values()]
    .map(
      (record): InventorAffiliationRecord => ({
        inventor: record.inventor,
        assignedPatentCount: record.assigned.size,
        unassignedPatentCount: record.unassigned.size,
        affiliations: [...record.companies]
          .map(([assigneeId, patents]) => {
            usedAssignees.add(assigneeId);
            return { assigneeId, patentIds: [...patents].sort(), share: patents.size / record.assigned.size };
          })
          .sort(
            (a, b) =>
              b.patentIds.length - a.patentIds.length ||
              catalogCollator.compare(nodeById.get(a.assigneeId)!.name, nodeById.get(b.assigneeId)!.name),
          ),
      }),
    )
    .sort(
      (a, b) =>
        b.affiliations.length - a.affiliations.length || catalogCollator.compare(a.inventor.name, b.inventor.name),
    );

  const assignees = graph.nodes
    .filter((node): node is UniversalPartyNode => node.kind === "assignee" && usedAssignees.has(node.id))
    .sort((a, b) => catalogCollator.compare(a.name, b.name));
  return { inventors, assignees };
}
