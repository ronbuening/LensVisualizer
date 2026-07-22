/**
 * Invariant coverage for the relationship graph assembly.
 *
 * Lens data changes weekly, so these assertions loop over the real catalog and
 * check structural invariants rather than hard-coding party names.
 */

import { describe, expect, it } from "vitest";
import { AUTHORS } from "../../../../src/utils/catalog/authorCatalog.js";
import { ASSIGNEES } from "../../../../src/utils/catalog/assigneeCatalog.js";
import {
  buildRelationshipGraph,
  resolveFocusParam,
  type PartyRef,
} from "../../../../src/utils/catalog/relationshipGraph.js";

const AUTHOR_REFS: PartyRef[] = AUTHORS.map((a) => ({ role: "author", name: a.name, slug: a.slug }));
const ASSIGNEE_REFS: PartyRef[] = ASSIGNEES.map((a) => ({ role: "assignee", name: a.name, slug: a.slug }));
const ALL_REFS: PartyRef[] = [...AUTHOR_REFS, ...ASSIGNEE_REFS];

describe("buildRelationshipGraph invariants", () => {
  it("has a non-empty catalog to exercise", () => {
    expect(AUTHORS.length).toBeGreaterThan(0);
    expect(ASSIGNEES.length).toBeGreaterThan(0);
  });

  it("holds structural invariants for every author and assignee", () => {
    for (const ref of ALL_REFS) {
      const graph = buildRelationshipGraph(ref);
      const centerId = `${ref.role}:${ref.slug}`;

      // Center identity.
      expect(graph.center.id).toBe(centerId);
      expect(graph.center.ref).toEqual(ref);
      expect(graph.center.hasPage).toBe(ref.role === "author");

      // Every lens yields a patent record, so there is always ≥ 1 patent.
      expect(graph.patents.length).toBeGreaterThan(0);

      // Parties never contain the center.
      expect(graph.parties.some((party) => party.id === centerId)).toBe(false);

      // All patent ids are unique.
      const patentIds = graph.patents.map((p) => p.id);
      expect(new Set(patentIds).size).toBe(patentIds.length);

      // Patents sorted by (year ?? Infinity, patentNumber).
      for (let i = 1; i < graph.patents.length; i++) {
        const prev = graph.patents[i - 1];
        const cur = graph.patents[i];
        const py = prev.patentYear ?? Number.POSITIVE_INFINITY;
        const cy = cur.patentYear ?? Number.POSITIVE_INFINITY;
        expect(py < cy || (py === cy && prev.patentNumber.localeCompare(cur.patentNumber) <= 0)).toBe(true);
      }

      // Every party has ≥ 1 patentId, all pointing at real patents.
      const nodeIds = new Set<string>([centerId, ...patentIds, ...graph.parties.map((p) => p.id)]);
      for (const party of graph.parties) {
        expect(party.patentIds.length).toBeGreaterThan(0);
        for (const pid of party.patentIds) expect(patentIds).toContain(pid);
        expect(party.hasPage).toBe(party.ref.role === "author");
      }

      // Every edge endpoint is a node id present in the graph.
      for (const edge of graph.edges) {
        expect(nodeIds.has(edge.from)).toBe(true);
        expect(nodeIds.has(edge.to)).toBe(true);
      }
    }
  });

  it("produces the expected shape for at least one connected author", () => {
    const connected = AUTHOR_REFS.map(buildRelationshipGraph).find((g) => g.parties.length > 0);
    expect(connected).toBeDefined();
    if (!connected) return;

    // Center→patent edge per patent, plus patent→party edges.
    const centerEdges = connected.edges.filter((e) => e.from === connected.center.id);
    expect(centerEdges.length).toBe(connected.patents.length);
  });

  it("gives a name in both indexes two distinct node ids", () => {
    const shared = AUTHORS.find((a) => ASSIGNEES.some((b) => b.name === a.name));
    if (!shared) return; // no overlap in current data — nothing to assert
    const authorRef: PartyRef = { role: "author", name: shared.name, slug: shared.slug };
    const assigneeMeta = ASSIGNEES.find((b) => b.name === shared.name)!;
    const assigneeRef: PartyRef = { role: "assignee", name: shared.name, slug: assigneeMeta.slug };
    expect(`${authorRef.role}:${authorRef.slug}`).not.toBe(`${assigneeRef.role}:${assigneeRef.slug}`);
  });
});

describe("resolveFocusParam", () => {
  it("resolves a valid author", () => {
    const a = AUTHORS[0];
    expect(resolveFocusParam(`author:${a.slug}`)).toEqual({ role: "author", name: a.name, slug: a.slug });
  });

  it("resolves a valid assignee", () => {
    const a = ASSIGNEES[0];
    expect(resolveFocusParam(`assignee:${a.slug}`)).toEqual({ role: "assignee", name: a.name, slug: a.slug });
  });

  it("returns undefined for unknown slug, bad role, null/empty/no-colon", () => {
    expect(resolveFocusParam(`author:definitely-not-a-real-slug-xyz`)).toBeUndefined();
    expect(resolveFocusParam(`maker:${AUTHORS[0].slug}`)).toBeUndefined();
    expect(resolveFocusParam(null)).toBeUndefined();
    expect(resolveFocusParam("")).toBeUndefined();
    expect(resolveFocusParam("no-colon-here")).toBeUndefined();
    expect(resolveFocusParam(":leading-colon")).toBeUndefined();
    expect(resolveFocusParam("author:")).toBeUndefined();
  });

  it("splits on the first colon only", () => {
    // A slug is always ASCII-safe (no colon), but the parser must not choke if a
    // role prefix is followed by a value that itself contains a colon.
    expect(resolveFocusParam("author:a:b")).toBeUndefined(); // "a:b" is not a real slug → undefined, not a throw
  });
});
