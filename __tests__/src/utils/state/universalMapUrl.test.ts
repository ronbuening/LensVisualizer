import { describe, expect, it } from "vitest";
import { universalMapHash, universalMapNodeFromHash } from "../../../../src/utils/state/universalMapUrl.js";

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
});
