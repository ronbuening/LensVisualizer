import { describe, expect, it } from "vitest";
import {
  findUniversalConnectionPaths,
  universalConnectionDescription,
} from "../../../../src/utils/catalog/universalConnectionPaths.js";
import { buildInventorAffiliations } from "../../../../src/utils/catalog/inventorAffiliations.js";
import { layoutInventorAffiliations } from "../../../../src/components/relationshipMap/inventorAffiliationLayout.js";
import {
  buildUniversalRelationshipGraph,
  type UniversalPartyNode,
  type UniversalRelationshipEdge,
  type UniversalRelationshipNode,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";

function party(id: string, kind: "author" | "assignee"): UniversalPartyNode {
  return { id, kind, name: id, patentCount: 0, ref: { role: kind, slug: id, name: id } };
}

function patent(id: string): UniversalRelationshipNode {
  return { id, name: id, kind: "patent", patent: { id, patentNumber: id, authors: [], assignees: [], lenses: [] } };
}

function edge(
  id: string,
  from: string,
  to: string,
  kind: UniversalRelationshipEdge["kind"] = "family",
): UniversalRelationshipEdge {
  return { id, from, to, kind };
}

describe("universal connection tracing", () => {
  const graph = {
    nodes: ["a", "b", "c", "d", "e", "isolated"].map((id) => ({ id, name: id, kind: "organization" as const })),
    edges: [
      edge("ab", "a", "b"),
      edge("bd", "b", "d"),
      edge("ac", "c", "a"),
      edge("cd", "d", "c"),
      edge("be", "b", "e"),
      edge("ed", "e", "d"),
    ],
  };

  it("finds all shortest alternatives, traversing either direction without cycles", () => {
    const result = findUniversalConnectionPaths(graph, "a", "d");
    expect(result.distance).toBe(2);
    expect(result.paths).toEqual([
      { nodeIds: ["a", "b", "d"], edgeIds: ["ab", "bd"] },
      { nodeIds: ["a", "c", "d"], edgeIds: ["ac", "cd"] },
    ]);
    expect(findUniversalConnectionPaths(graph, "d", "a").distance).toBe(2);
    expect(
      findUniversalConnectionPaths({ nodes: [...graph.nodes].reverse(), edges: [...graph.edges].reverse() }, "a", "d"),
    ).toEqual(result);
  });

  it("caps alternate routes and reports that additional routes exist", () => {
    const result = findUniversalConnectionPaths(graph, "a", "d", true, 1);
    expect(result.paths).toHaveLength(1);
    expect(result.truncated).toBe(true);
    expect(findUniversalConnectionPaths(graph, "a", "d", true, 2).truncated).toBe(false);
  });

  it("handles excluded corporate links, isolated nodes, invalid endpoints, and identity", () => {
    expect(findUniversalConnectionPaths(graph, "a", "d", false).distance).toBeNull();
    expect(findUniversalConnectionPaths(graph, "a", "isolated").paths).toEqual([]);
    expect(findUniversalConnectionPaths(graph, "__proto__", "a").paths).toEqual([]);
    expect(findUniversalConnectionPaths(graph, null, "a").paths).toEqual([]);
    expect(findUniversalConnectionPaths(graph, "a", "a")).toEqual({
      distance: 0,
      truncated: false,
      paths: [{ nodeIds: ["a"], edgeIds: [] }],
    });
    const patentOnly = {
      nodes: graph.nodes,
      edges: [
        edge("ab", "a", "b", "authorship"),
        edge("bd", "b", "d", "assignment"),
        edge("ad", "a", "d", "acquisition"),
      ],
    };
    expect(findUniversalConnectionPaths(patentOnly, "d", "a").distance).toBe(1);
    expect(findUniversalConnectionPaths(patentOnly, "d", "a", false).distance).toBe(2);
  });

  it("keeps parallel corporate records as distinct evidence and describes the original direction", () => {
    const graphWithParallelEdges = {
      nodes: graph.nodes,
      edges: [edge("old", "a", "b", "acquisition"), edge("new", "a", "b", "subsidiary")],
    };
    const result = findUniversalConnectionPaths(graphWithParallelEdges, "b", "a");
    expect(result.paths).toHaveLength(2);
    expect(
      universalConnectionDescription(
        graphWithParallelEdges.edges[0],
        new Map([
          ["a", "Alpha"],
          ["b", "Beta"],
        ]),
      ),
    ).toBe("Alpha was acquired by Beta");
  });
});

describe("inventor affiliation projection and placement", () => {
  const nodes = [
    party("inventor", "author"),
    party("unassigned", "author"),
    party("company-a", "assignee"),
    party("company-b", "assignee"),
    party("corporate-parent", "assignee"),
    ...["p1", "p2", "p3", "p4", "p5"].map(patent),
  ];
  const edges = [
    ...["p1", "p2", "p3", "p4"].map((id) => edge(`author-${id}`, id, "inventor", "authorship")),
    ...["p1", "p2", "p3"].map((id) => edge(`assignment-${id}`, id, "company-a", "assignment")),
    edge("b", "company-b", "p4", "assignment"),
    edge("duplicate", "p1", "inventor", "authorship"),
    edge("unassigned", "p5", "unassigned", "authorship"),
    edge("corporate", "company-a", "corporate-parent", "subsidiary"),
  ];
  const graph = { nodes, edges };

  it("counts distinct patent evidence, excludes corporate-only ties, and retains unassigned inventors", () => {
    const network = buildInventorAffiliations(graph);
    expect(network.assignees.map((node) => node.id)).toEqual(["company-a", "company-b"]);
    expect(network.inventors[0]).toMatchObject({
      inventor: { id: "inventor" },
      assignedPatentCount: 4,
      unassignedPatentCount: 0,
      affiliations: [
        { assigneeId: "company-a", patentIds: ["p1", "p2", "p3"], share: 0.75 },
        { assigneeId: "company-b", patentIds: ["p4"], share: 0.25 },
      ],
    });
    expect(network.inventors[1]).toMatchObject({ assignedPatentCount: 0, unassignedPatentCount: 1, affiliations: [] });
    expect(buildInventorAffiliations({ nodes: [...nodes].reverse(), edges: [...edges].reverse() })).toEqual(network);
  });

  it("uses a union denominator for jointly assigned patents, without dropping unassigned evidence", () => {
    const network = buildInventorAffiliations({
      nodes,
      edges: [
        ...edges,
        edge("joint", "p1", "company-b", "assignment"),
        edge("author-p5", "p5", "inventor", "authorship"),
      ],
    });
    const record = network.inventors[0];
    expect(record.assignedPatentCount).toBe(4);
    expect(record.unassignedPatentCount).toBe(1);
    expect(record.affiliations.map((link) => link.share)).toEqual([0.75, 0.5]);
  });

  it("places a 3:1 inventor nearer the stronger company and an equal inventor at the midpoint", () => {
    const record = buildInventorAffiliations(graph).inventors[0];
    const layout = layoutInventorAffiliations([record]);
    const [a, b] = layout.assignees;
    const inventor = layout.inventors[0];
    expect(inventor.x).toBeCloseTo(a.x * 0.75 + b.x * 0.25);
    expect(inventor.y).toBeCloseTo(a.y * 0.75 + b.y * 0.25);
    expect(Math.hypot(inventor.x - a.x, inventor.y - a.y)).toBeLessThan(Math.hypot(inventor.x - b.x, inventor.y - b.y));
    const equal = layoutInventorAffiliations([
      { ...record, affiliations: record.affiliations.map((link) => ({ ...link, patentIds: ["p1"] })) },
    ]);
    expect(equal.inventors[0].x).toBeCloseTo((equal.assignees[0].x + equal.assignees[1].x) / 2);
    expect(layoutInventorAffiliations([]).inventors).toEqual([]);
  });

  it("keeps coincident inventors separate with deterministic finite positions", () => {
    const record = buildInventorAffiliations(graph).inventors[0];
    const records = Array.from({ length: 30 }, (_, index) => ({
      ...record,
      inventor: { ...record.inventor, id: `inventor-${index}` },
    }));
    const layout = layoutInventorAffiliations(records);
    expect(layoutInventorAffiliations([...records].reverse())).toEqual(layout);
    for (const [index, inventor] of layout.inventors.entries()) {
      expect(Number.isFinite(inventor.x) && Number.isFinite(inventor.y)).toBe(true);
      for (const other of layout.inventors.slice(index + 1))
        expect(Math.hypot(inventor.x - other.x, inventor.y - other.y)).toBeGreaterThanOrEqual(23);
    }
  });

  it("backs every catalog affiliation with both original patent edges", () => {
    const catalog = buildUniversalRelationshipGraph();
    const network = buildInventorAffiliations(catalog);
    const original = new Set(catalog.edges.map((entry) => `${entry.kind}:${entry.from}:${entry.to}`));
    for (const record of network.inventors)
      for (const link of record.affiliations)
        for (const id of link.patentIds) {
          expect(original.has(`authorship:${id}:${record.inventor.id}`)).toBe(true);
          expect(original.has(`assignment:${id}:${link.assigneeId}`)).toBe(true);
        }
    expect(network.inventors.some((record) => record.affiliations.length > 1)).toBe(true);
  });
});
