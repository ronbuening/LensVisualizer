import { describe, expect, it } from "vitest";
import {
  universalMapHash,
  universalMapNodeFromHash,
  universalMapStateHash,
  universalMapStateFromHash,
} from "../../../../src/utils/state/universalMapUrl.js";
import { UNIVERSAL_EDGE_KINDS } from "../../../../src/utils/catalog/universalRelationshipQueries.js";

describe("universal map fragments", () => {
  it("round-trips workspace state while retaining legacy ids and foreign parameters", () => {
    const ids = new Set(["family:A%20B", "author:ada"]);
    const neighborhoods = new Set(["cluster:family:A%20B"]);
    const patch = {
      view: "research" as const,
      nodeId: "family:A%20B",
      neighborhoodId: "cluster:family:A%20B",
      edgeKinds: ["assignment" as const],
      fromId: "author:ada",
      toId: "family:A%20B",
    };
    const hash = universalMapStateHash("#keep=unchanged", patch);
    expect(universalMapStateFromHash(hash, ids, neighborhoods)).toEqual(patch);
    expect(new URLSearchParams(hash.slice(1)).get("keep")).toBe("unchanged");
    expect(
      universalMapStateFromHash(universalMapStateHash(hash, { edgeKinds: [] }), ids, neighborhoods).edgeKinds,
    ).toEqual([]);
    expect(universalMapStateHash("", { view: "full", edgeKinds: UNIVERSAL_EDGE_KINDS })).toBe("");
    expect(
      universalMapStateFromHash("#view=bad&node=unknown&relations=bad&neighborhood=bad&from=bad", ids, neighborhoods),
    ).toEqual({
      view: "full",
      nodeId: null,
      neighborhoodId: null,
      edgeKinds: UNIVERSAL_EDGE_KINDS,
      fromId: null,
      toId: null,
    });
  });

  it("defaults to Full map and preserves explicit Explore and Research links", () => {
    const ids = new Set(["author:ada"]);
    const neighborhoods = new Set<string>();
    expect(universalMapStateFromHash("", ids, neighborhoods).view).toBe("full");
    for (const view of ["explore", "research"] as const) {
      const hash = universalMapStateHash("#node=author%3Aada&keep=yes", { view });
      expect(universalMapStateFromHash(hash, ids, neighborhoods)).toMatchObject({ view, nodeId: "author:ada" });
      expect(universalMapStateHash(hash, { view: "full" })).toBe("#node=author%3Aada&keep=yes");
    }
  });
  it.each([
    "author:ada",
    "assignee:example",
    "patent:US 2012/123 A1",
    "organization:Müller & Sohn",
    "family:A%20%26%20B",
  ])("round-trips the complete %s id", (id) => {
    const hash = universalMapHash("#keep=yes", id);
    expect(universalMapNodeFromHash(hash, new Set([id]))).toBe(id);
    expect(new URLSearchParams(hash.slice(1)).get("keep")).toBe("yes");
    expect(universalMapHash(hash, null)).toBe("#keep=yes");
  });

  it("ignores missing, malformed, and unknown node ids", () => {
    for (const hash of ["", "#node=", "#node=%FF", "#node=__proto__", "#node=author:unknown"]) {
      expect(universalMapNodeFromHash(hash, new Set(["author:ada"]))).toBeNull();
    }
    expect(universalMapHash("#node=author:ada", null)).toBe("");
  });
});
