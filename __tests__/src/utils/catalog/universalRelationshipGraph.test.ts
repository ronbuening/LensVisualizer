/**
 * Catalog-wide invariants for the universal patent + corporate graph.
 */

import { describe, expect, it } from "vitest";
import { ASSIGNEES } from "../../../../src/utils/catalog/assigneeCatalog.js";
import { AUTHORS } from "../../../../src/utils/catalog/authorCatalog.js";
import {
  buildUniversalRelationshipGraph,
  universalConnectedComponents,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";

describe("buildUniversalRelationshipGraph", () => {
  it("includes every catalog party and every unique patent", () => {
    const graph = buildUniversalRelationshipGraph();
    const ids = new Set(graph.nodes.map((node) => node.id));

    expect(graph.stats.authors).toBe(AUTHORS.length);
    expect(graph.stats.assignees).toBe(ASSIGNEES.length);
    expect(graph.stats.patents).toBe(graph.patents.length);
    for (const author of AUTHORS) expect(ids.has(`author:${author.slug}`), author.name).toBe(true);
    for (const assignee of ASSIGNEES) expect(ids.has(`assignee:${assignee.slug}`), assignee.name).toBe(true);
    for (const patent of graph.patents) expect(ids.has(patent.id), patent.patentNumber).toBe(true);
  });

  it("adds every curated corporate record and resolves catalog assignees directly", () => {
    const graph = buildUniversalRelationshipGraph();
    const expectedCorporateRecords = ASSIGNEES.reduce(
      (total, assignee) =>
        total +
        assignee.successorOf.length +
        assignee.acquiredBy.length +
        assignee.subsidiaryOf.length +
        assignee.corporateFamily.length,
      0,
    );

    expect(graph.stats.corporateRelationships).toBe(expectedCorporateRecords);
    const canon = ASSIGNEES.find((assignee) => assignee.name === "Canon Inc.")!;
    const canonCamera = ASSIGNEES.find((assignee) => assignee.name === "Canon Camera Co., Inc.")!;
    expect(
      graph.edges.some(
        (edge) =>
          edge.kind === "successor" &&
          edge.from === `assignee:${canon.slug}` &&
          edge.to === `assignee:${canonCamera.slug}` &&
          edge.effectiveDate === "1969-03-01",
      ),
    ).toBe(true);
  });

  it("uses family hubs to bridge historical assignee names", () => {
    const graph = buildUniversalRelationshipGraph();
    const canonFamily = graph.nodes.find((node) => node.kind === "family" && node.name === "Canon");
    expect(canonFamily).toBeDefined();
    if (!canonFamily) return;

    const members = graph.edges
      .filter((edge) => edge.kind === "family" && edge.to === canonFamily.id)
      .map((edge) => graph.nodes.find((node) => node.id === edge.from)?.name)
      .sort();
    expect(members).toEqual(["Canon Camera Co., Inc.", "Canon Inc."]);
  });

  it("reduces fragmentation relative to the patent-only universal network", () => {
    const patentOnly = buildUniversalRelationshipGraph({ includeCorporateRelationships: false });
    const withCorporateHistory = buildUniversalRelationshipGraph();

    expect(withCorporateHistory.stats.components).toBeLessThan(patentOnly.stats.components);
    expect(withCorporateHistory.components[0].length).toBeGreaterThan(patentOnly.components[0].length);
  });

  it("has no duplicate node ids or dangling edge endpoints", () => {
    const graph = buildUniversalRelationshipGraph();
    const ids = graph.nodes.map((node) => node.id);
    const idSet = new Set(ids);
    expect(idSet.size).toBe(ids.length);

    for (const edge of graph.edges) {
      expect(idSet.has(edge.from), edge.id).toBe(true);
      expect(idSet.has(edge.to), edge.id).toBe(true);
      if (edge.kind !== "authorship" && edge.kind !== "assignment") {
        expect(edge.sourceUrl, edge.id).toMatch(/^https:\/\//);
        expect(edge.effectiveDate ?? edge.effectiveFrom, edge.id).toMatch(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/);
      }
    }
  });

  it("partitions every node into exactly one deterministic component", () => {
    const graph = buildUniversalRelationshipGraph();
    const flattened = graph.components.flat();
    expect(flattened.length).toBe(graph.nodes.length);
    expect(new Set(flattened).size).toBe(graph.nodes.length);
    expect(graph.components).toEqual(universalConnectedComponents(graph.nodes, graph.edges));
    for (let index = 1; index < graph.components.length; index++) {
      expect(graph.components[index - 1].length).toBeGreaterThanOrEqual(graph.components[index].length);
    }
  });
});
