/**
 * Catalog-wide invariants for the universal patent + corporate graph.
 */

import { describe, expect, it } from "vitest";
import { ASSIGNEES } from "../../../../src/utils/catalog/assigneeCatalog.js";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "../../../../src/utils/catalog/lensSummaries.js";
import { AUTHORS } from "../../../../src/utils/catalog/authorCatalog.js";
import { MAKER_CORPORATE_FAMILIES } from "../../../../src/utils/catalog/makerCorporateFamilies.js";
import {
  buildUniversalRelationshipGraph,
  isUniversalCorporateEdge,
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

  it("retains every visible model and every authored patent-party relationship", () => {
    const graph = buildUniversalRelationshipGraph();
    const representedKeys = new Set([
      ...graph.patents.flatMap((patent) => patent.lenses.map((lens) => lens.key)),
      ...graph.nodes.flatMap((node) => (node.kind === "lens" ? [node.lens.key] : [])),
    ]);
    expect([...representedKeys].sort()).toEqual([...SUMMARY_KEYS].sort());

    for (const key of SUMMARY_KEYS) {
      const summary = LENS_SUMMARIES[key];
      const patentNumber = summary.patentNumber?.trim();
      if (!patentNumber) continue;
      for (const [names, role, kind] of [
        [summary.patentAuthors ?? [], "author", "authorship"],
        [summary.patentAssignees ?? [], "assignee", "assignment"],
      ] as const) {
        for (const name of names) {
          const party = graph.nodes.find((node) => node.kind === role && node.name === name);
          expect(party, `${key}: ${role} ${name}`).toBeDefined();
          expect(
            graph.edges.some(
              (edge) => edge.kind === kind && edge.from === `patent:${patentNumber}` && edge.to === party?.id,
            ),
            `${key}: ${kind} ${name}`,
          ).toBe(true);
        }
      }
    }
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
    // Catalog maker hubs present in the graph add their sourced family records.
    const expectedMakerRecords = Object.entries(MAKER_CORPORATE_FAMILIES)
      .filter(([slug]) => graph.nodes.some((node) => node.id === `maker:${slug}`))
      .reduce((total, [, families]) => total + families.length, 0);

    expect(graph.stats.corporateRelationships).toBe(expectedCorporateRecords + expectedMakerRecords);
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
      if (isUniversalCorporateEdge(edge.kind)) {
        expect(edge.sourceUrl, edge.id).toMatch(/^https:\/\//);
        expect(edge.effectiveDate ?? edge.effectiveFrom, edge.id).toMatch(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/);
      }
    }
  });

  it("joins a catalog maker hub to a corporate family that its patent assignees share", () => {
    const graph = buildUniversalRelationshipGraph();
    const components = universalConnectedComponents(graph.nodes, graph.edges);
    const componentOf = new Map(components.flatMap((component, index) => component.map((id) => [id, index] as const)));
    for (const [slug, families] of Object.entries(MAKER_CORPORATE_FAMILIES)) {
      const makerId = `maker:${slug}`;
      if (!graph.nodes.some((node) => node.id === makerId)) continue;
      for (const { family } of families) {
        const members = ASSIGNEES.filter((assignee) =>
          assignee.corporateFamily.some((entry) => entry.family === family),
        );
        expect(members.length, `${slug} → ${family}`).toBeGreaterThan(0);
        for (const member of members) {
          expect(componentOf.get(`assignee:${member.slug}`), `${slug} → ${member.name}`).toBe(componentOf.get(makerId));
        }
      }
    }
  });

  it("represents non-patent models with catalog maker edges without inventing patent attribution", () => {
    const graph = buildUniversalRelationshipGraph();
    for (const key of SUMMARY_KEYS) {
      const summary = LENS_SUMMARIES[key];
      if (summary.patentNumber?.trim()) continue;
      const node = graph.nodes.find((entry) => entry.id === `lens:${key}`);
      expect(node).toMatchObject({ kind: "lens", name: summary.name, lens: { key } });
      expect(graph.patents.some((patent) => patent.lenses.some((lens) => lens.key === key))).toBe(false);
      const edges = graph.edges.filter((edge) => edge.from === node!.id || edge.to === node!.id);
      expect(edges).toHaveLength(summary.sourceIssuer || summary.maker ? 1 : 0);
      for (const edge of edges) {
        expect(edge.kind).toBe("catalog-maker");
        const target = graph.nodes.find((entry) => entry.id === edge.to);
        // A manufacturer document's issuer replaces the catalog maker hub.
        if (summary.sourceIssuer) expect(target?.name).toBe(summary.sourceIssuer);
        else expect(target?.kind).toBe("maker");
      }
    }
    expect(graph.stats.patents).toBe(graph.nodes.filter((node) => node.kind === "patent").length);
    expect(graph.stats.catalogRelationships).toBe(graph.edges.filter((edge) => edge.kind === "catalog-maker").length);
    expect(graph.edges.length).toBe(
      graph.stats.patentRelationships + graph.stats.corporateRelationships + graph.stats.catalogRelationships,
    );
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
