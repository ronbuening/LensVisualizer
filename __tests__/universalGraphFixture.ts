import {
  universalConnectedComponents,
  type UniversalRelationshipGraph,
  type UniversalRelationshipNode,
  type UniversalRelationshipEdge,
} from "../src/utils/catalog/universalRelationshipGraph.js";

export function universalFixture(
  nodes: UniversalRelationshipNode[],
  edges: UniversalRelationshipEdge[],
): UniversalRelationshipGraph {
  const components = universalConnectedComponents(nodes, edges);
  return {
    nodes,
    edges,
    components,
    patents: nodes.flatMap((n) => (n.kind === "patent" ? [n.patent] : [])),
    stats: {
      authors: nodes.filter((n) => n.kind === "author").length,
      assignees: nodes.filter((n) => n.kind === "assignee").length,
      patents: nodes.filter((n) => n.kind === "patent").length,
      organizations: 0,
      families: 0,
      patentRelationships: 0,
      corporateRelationships: 0,
      makers: 0,
      lenses: 0,
      catalogRelationships: 0,
      components: components.length,
    },
  };
}

export function organization(id: string): UniversalRelationshipNode {
  return { id, kind: "organization", name: id };
}

export function patent(id: string, year = 2000): UniversalRelationshipNode {
  return {
    id,
    kind: "patent",
    name: id,
    patent: {
      id,
      patentNumber: id,
      patentYear: year,
      authors: [],
      assignees: [],
      lenses: [{ key: "example", name: "Example Lens" }],
    },
  };
}

export function assignee(id: string): UniversalRelationshipNode {
  return { id, kind: "assignee", name: id, ref: { role: "assignee", name: id, slug: id }, patentCount: 1 };
}
