import type { GraphPatentNode } from "../../src/utils/catalog/relationshipGraph.js";
import type {
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
  UniversalPartyNode,
} from "../../src/utils/catalog/universalRelationshipGraph.js";

export function relationshipInsightFixture(): UniversalRelationshipGraph {
  const party = (name: string, kind: "author" | "assignee"): UniversalPartyNode => ({
    id: `${kind}:${name.toLowerCase()}`,
    kind,
    name,
    patentCount: 0,
    ref: { role: kind, name, slug: name.toLowerCase() },
  });
  const parties = [
    party("Ada", "author"),
    party("Bea", "author"),
    party("Cy", "author"),
    party("Dora", "author"),
    party("Zero", "author"),
    party("Solo", "author"),
    party("Alpha", "assignee"),
    party("Beta", "assignee"),
    party("Gamma", "assignee"),
  ];
  const patent = (n: number, year: number | undefined, authors: string[], assignees: string[]): GraphPatentNode => ({
    id: `patent:P${n}`,
    patentNumber: `P${n}`,
    patentYear: year,
    authors,
    assignees,
    lenses: [],
  });
  const patents = [
    patent(1, 2000, ["Ada", "Bea"], ["Alpha"]),
    patent(2, 2005, ["Ada", "Cy"], ["Beta"]),
    patent(3, 2010, ["Ada", "Bea"], ["Alpha", "Beta"]),
    patent(4, 2015, ["Bea", "Cy"], ["Gamma"]),
    patent(5, undefined, ["Dora"], []),
    patent(6, 2010, ["Ada"], []),
    patent(7, 2022, ["Bea"], ["Gamma"]),
    patent(8, 2000, ["Solo"], ["Alpha"]),
  ];
  const nodes: UniversalRelationshipNode[] = [
    ...parties,
    ...patents.map((p) => ({ id: p.id, name: p.patentNumber, kind: "patent" as const, patent: p })),
  ];
  const edges = patents.flatMap((p) => [
    ...p.authors.map((name) => ({
      id: `${p.id}/${name}`,
      from: `author:${name.toLowerCase()}`,
      to: p.id,
      kind: "authorship" as const,
    })),
    ...p.assignees.map((name) => ({
      id: `${p.id}/${name}`,
      from: p.id,
      to: `assignee:${name.toLowerCase()}`,
      kind: "assignment" as const,
    })),
  ]);
  return {
    nodes,
    patents,
    edges: [...edges, edges[0], { id: "corporate", from: "assignee:alpha", to: "assignee:gamma", kind: "successor" }],
    components: [],
    stats: {
      patents: patents.length,
      authors: 6,
      assignees: 3,
      organizations: 0,
      families: 0,
      corporateRelationships: 1,
      patentRelationships: edges.length,
      components: 1,
      makers: 0,
      lenses: 0,
      catalogRelationships: 0,
    },
  };
}
