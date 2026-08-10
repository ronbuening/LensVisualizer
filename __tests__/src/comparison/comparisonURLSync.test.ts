import { describe, it, expect } from "vitest";
import { buildComparePath } from "../../../src/comparison/comparisonURLSync.js";

describe("buildComparePath", () => {
  it("builds pathname-based comparison URL", () => {
    expect(buildComparePath("NikkorZ50f12", "Nokton50f1")).toBe("/compare/NikkorZ50f12/Nokton50f1/");
  });

  it("appends slider params as query string", () => {
    const path = buildComparePath("NikkorZ50f12", "Nokton50f1", { focus: 0.3, aperture: 0.5 });
    expect(path).toBe("/compare/NikkorZ50f12/Nokton50f1/?focus=0.300&aperture=0.500");
  });

  it("appends zoom param", () => {
    const path = buildComparePath("NikkorZ50f12", "Nokton50f1", { zoom: 50 });
    expect(path).toBe("/compare/NikkorZ50f12/Nokton50f1/?zoom=50");
  });

  it("omits zero/null slider params", () => {
    const path = buildComparePath("NikkorZ50f12", "Nokton50f1", { zoom: null, focus: 0, aperture: 0 });
    expect(path).toBe("/compare/NikkorZ50f12/Nokton50f1/");
  });

  it("encodes special characters in slugs", () => {
    const path = buildComparePath("a b", "c&d");
    expect(path).toBe("/compare/a%20b/c%26d/");
  });
});
