import { describe, expect, it } from "vitest";
import {
  universalMapHash,
  universalMapNodeFromHash,
  universalMapExploreHash,
  universalMapExploreFromHash,
} from "../../../../src/utils/state/universalMapUrl.js";

describe("universal map fragments", () => {
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

  it("round-trips views and trace endpoints while preserving selection and unrelated fragments", () => {
    const ids = new Set(["family:A%20%26%20B", "patent:US 1/2 A1"]);
    const state = {
      view: "trace" as const,
      from: "family:A%20%26%20B",
      to: "patent:US 1/2 A1",
      includeCorporate: false,
    };
    const hash = universalMapExploreHash("#keep=yes&node=patent%3AUS+1%2F2+A1", state);
    expect(universalMapExploreFromHash(hash, ids)).toEqual(state);
    expect(universalMapNodeFromHash(hash, ids)).toBe(state.to);
    expect(new URLSearchParams(hash.slice(1)).get("keep")).toBe("yes");
    const reset = universalMapExploreHash(hash, { view: "network", from: null, to: null, includeCorporate: true });
    expect(reset).toBe("#keep=yes&node=patent%3AUS+1%2F2+A1");
  });

  it("validates restored exploration state and defaults to the original network", () => {
    expect(universalMapExploreFromHash("#view=__proto__&from=%FF&to=unknown", new Set())).toEqual({
      view: "network",
      from: null,
      to: null,
      includeCorporate: true,
    });
    expect(universalMapExploreFromHash("#view=affiliations", new Set()).view).toBe("affiliations");
  });
});
