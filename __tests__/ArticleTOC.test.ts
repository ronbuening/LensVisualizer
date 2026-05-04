import { describe, expect, it } from "vitest";
import { resolveActiveHeadingId } from "../src/components/display/ArticleTOC.js";

describe("resolveActiveHeadingId", () => {
  it("returns first heading when no headings intersect activation line", () => {
    const ids = ["intro", "details", "summary"];
    const tops = new Map([
      ["intro", 140],
      ["details", 300],
      ["summary", 520],
    ]);

    const active = resolveActiveHeadingId(ids, 80, (id) => tops.get(id) ?? null);
    expect(active).toBe("intro");
  });

  it("tracks fast-scroll transitions to later headings", () => {
    const ids = ["intro", "details", "summary"];
    const tops = new Map([
      ["intro", -400],
      ["details", -8],
      ["summary", 180],
    ]);

    const active = resolveActiveHeadingId(ids, 80, (id) => tops.get(id) ?? null);
    expect(active).toBe("details");
  });

  it("selects final heading near page bottom", () => {
    const ids = ["intro", "details", "summary"];
    const tops = new Map([
      ["intro", -700],
      ["details", -250],
      ["summary", 50],
    ]);

    const active = resolveActiveHeadingId(ids, 80, (id) => tops.get(id) ?? null);
    expect(active).toBe("summary");
  });
});
