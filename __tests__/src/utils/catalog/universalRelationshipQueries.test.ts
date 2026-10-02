import { describe, expect, it } from "vitest";
import {
  findUniversalPaths,
  universalRelationshipText,
  universalRelationshipDate,
} from "../../../../src/utils/catalog/universalRelationshipQueries.js";
import { universalFixture, organization } from "../../../universalGraphFixture.js";

describe("universal connection queries", () => {
  const graph = universalFixture(["A", "B", "C", "D", "E", "Z"].map(organization), [
    { id: "ab", from: "A", to: "B", kind: "acquisition" },
    { id: "ac", from: "A", to: "C", kind: "subsidiary" },
    { id: "ad", from: "A", to: "D", kind: "successor" },
    { id: "be", from: "B", to: "E", kind: "family" },
    { id: "ce", from: "C", to: "E", kind: "family" },
    { id: "de", from: "D", to: "E", kind: "catalog-maker" },
    { id: "bc", from: "B", to: "C", kind: "subsidiary" },
  ]);
  it("finds capped, equally short alternatives deterministically through cycles and reversed records", () => {
    const paths = findUniversalPaths(graph, "A", "E");
    expect(paths.map((p) => p.nodeIds)).toEqual([
      ["A", "B", "E"],
      ["A", "C", "E"],
      ["A", "D", "E"],
    ]);
    expect(
      findUniversalPaths({ ...graph, nodes: [...graph.nodes].reverse(), edges: [...graph.edges].reverse() }, "A", "E"),
    ).toEqual(paths);
    expect(findUniversalPaths(graph, "E", "A")[0].edgeIds).toEqual(["be", "ab"]);
    expect(findUniversalPaths(graph, "A", "E", undefined, 1)).toHaveLength(1);
  });
  it("handles identity, unknown, disconnected and excluded endpoints", () => {
    expect(findUniversalPaths(graph, "A", "A")).toEqual([{ nodeIds: ["A"], edgeIds: [] }]);
    expect(findUniversalPaths(graph, "unknown", "unknown")).toEqual([]);
    expect(findUniversalPaths(graph, "A", "Z")).toEqual([]);
    expect(findUniversalPaths(graph, "A", "E", [])).toEqual([]);
    expect(findUniversalPaths(graph, "A", "E", ["subsidiary", "family"])[0].nodeIds).toEqual(["A", "C", "E"]);
  });
  it("keeps direction and date semantics independent of traversal", () => {
    const names = new Map([
      ["A", "Alpha"],
      ["B", "Beta"],
    ]);
    expect(universalRelationshipText(graph.edges[0], names)).toBe("Alpha was acquired by Beta");
    expect(universalRelationshipText({ ...graph.edges[0], kind: "authorship" }, names)).toBe(
      "Beta is a named inventor on Alpha",
    );
    expect(universalRelationshipText({ ...graph.edges[0], kind: "catalog-maker" }, names)).toContain("catalog maker");
    expect(universalRelationshipDate({ ...graph.edges[0], effectiveFrom: "1990", effectiveTo: "2001" })).toBe(
      "1990–2001",
    );
    expect(universalRelationshipDate({ ...graph.edges[0], effectiveDate: "2003-04" })).toBe("2003-04");
  });
});
