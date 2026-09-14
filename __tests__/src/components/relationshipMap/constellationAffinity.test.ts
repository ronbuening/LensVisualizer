/** Hierarchical affinity coverage for universal-map constellation placement. */

import { describe, expect, it } from "vitest";
import {
  buildConstellationAffinities,
  compareConstellationClusterPriority,
  constellationAffinityBetween,
  orderConstellationOrbit,
  type ConstellationAffinity,
  type ConstellationAffinityMap,
  type ConstellationClusterCandidate,
} from "../../../../src/components/relationshipMap/constellationAffinity.js";
import type { UniversalRelationshipGraph } from "../../../../src/utils/catalog/universalRelationshipGraph.js";

function candidate(id: string, nodeCount = 10): ConstellationClusterCandidate {
  return { id, anchorLabel: id, nodeCount, size: 180 };
}

function affinityMap(entries: Array<[string, string, ConstellationAffinity]>): ConstellationAffinityMap {
  const affinities = new Map<string, Map<string, ConstellationAffinity>>();
  for (const [left, right, affinity] of entries) {
    if (!affinities.has(left)) affinities.set(left, new Map());
    if (!affinities.has(right)) affinities.set(right, new Map());
    affinities.get(left)!.set(right, affinity);
    affinities.get(right)!.set(left, affinity);
  }
  return affinities;
}

function areCircularNeighbors(
  order: readonly ConstellationClusterCandidate[],
  leftId: string,
  rightId: string,
): boolean {
  const leftIndex = order.findIndex((cluster) => cluster.id === leftId);
  const rightIndex = order.findIndex((cluster) => cluster.id === rightId);
  const difference = Math.abs(leftIndex - rightIndex);
  return difference === 1 || difference === order.length - 1;
}

describe("constellation affinity", () => {
  it("counts corporate edges and unique shared patents separately", () => {
    const graph: UniversalRelationshipGraph = {
      nodes: [
        { id: "organization:a", kind: "organization", name: "A" },
        { id: "organization:b", kind: "organization", name: "B" },
        {
          id: "patent:one",
          kind: "patent",
          name: "Patent One",
          patent: {
            id: "patent:one",
            patentNumber: "Patent One",
            authors: [],
            assignees: [],
            lenses: [],
          },
        },
        {
          id: "author:one",
          kind: "author",
          name: "Inventor One",
          ref: { role: "author", name: "Inventor One", slug: "one" },
          patentCount: 1,
        },
        {
          id: "assignee:b",
          kind: "assignee",
          name: "Assignee B",
          ref: { role: "assignee", name: "Assignee B", slug: "b" },
          patentCount: 1,
        },
      ],
      edges: [
        { id: "corporate-1", from: "organization:a", to: "organization:b", kind: "acquisition" },
        { id: "corporate-2", from: "organization:a", to: "organization:b", kind: "successor" },
        { id: "patent-1", from: "patent:one", to: "author:one", kind: "authorship" },
        { id: "patent-2", from: "patent:one", to: "assignee:b", kind: "assignment" },
      ],
      patents: [],
      components: [["organization:a", "organization:b", "patent:one", "author:one", "assignee:b"]],
      stats: {
        authors: 1,
        assignees: 1,
        patents: 1,
        organizations: 2,
        families: 0,
        patentRelationships: 2,
        corporateRelationships: 2,
        components: 1,
      },
    };
    const owners = new Map([
      ["organization:a", "cluster:a"],
      ["patent:one", "cluster:a"],
      ["organization:b", "cluster:b"],
      ["author:one", "cluster:b"],
      ["assignee:b", "cluster:b"],
    ]);

    const affinities = buildConstellationAffinities(["cluster:a", "cluster:b"], owners, graph);
    expect(constellationAffinityBetween("cluster:a", "cluster:b", affinities)).toEqual({
      corporateConnections: 2,
      sharedPatentConnections: 1,
    });
    expect(constellationAffinityBetween("cluster:b", "cluster:a", affinities)).toEqual({
      corporateConnections: 2,
      sharedPatentConnections: 1,
    });
  });

  it("ranks corporate connections, then shared patents, then size", () => {
    const corporate = candidate("corporate", 1);
    const patents = candidate("patents", 2);
    const large = candidate("large", 1_000);
    const affinities = affinityMap([
      [corporate.id, "corporate-peer", { corporateConnections: 1, sharedPatentConnections: 0 }],
      [patents.id, "patent-peer", { corporateConnections: 0, sharedPatentConnections: 100 }],
    ]);

    expect(
      [large, patents, corporate].sort((left, right) => compareConstellationClusterPriority(left, right, affinities)),
    ).toEqual([corporate, patents, large]);
  });

  it("keeps a corporate-connected pair adjacent ahead of larger patent counts", () => {
    const alpha = candidate("alpha");
    const beta = candidate("beta");
    const gamma = candidate("gamma");
    const delta = candidate("delta");
    const epsilon = candidate("epsilon", 1_000);
    const affinities = affinityMap([
      [alpha.id, beta.id, { corporateConnections: 1, sharedPatentConnections: 0 }],
      [alpha.id, gamma.id, { corporateConnections: 0, sharedPatentConnections: 100 }],
      [alpha.id, delta.id, { corporateConnections: 0, sharedPatentConnections: 90 }],
    ]);

    const order = orderConstellationOrbit([epsilon, delta, gamma, beta, alpha], affinities);
    expect(areCircularNeighbors(order, alpha.id, beta.id)).toBe(true);
  });
});
