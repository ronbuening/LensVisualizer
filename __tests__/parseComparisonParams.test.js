import { describe, it, expect } from "vitest";
import {
  parseComparisonParams,
  buildComparisonURL,
  focalLengthToZoomT,
  zoomTToFocalLength,
} from "../src/utils/parseComparisonParams.js";

const KEYS = ["NikkorZ50f12", "Nokton50f1", "ApoLanthar50f2", "Sonnar50f15"];

describe("parseComparisonParams", () => {
  it("returns comparison mode for valid ?a=&b= params", () => {
    const result = parseComparisonParams("?a=NikkorZ50f12&b=Nokton50f1", KEYS);
    expect(result.comparing).toBe(true);
    expect(result.lensKeyA).toBe("NikkorZ50f12");
    expect(result.lensKeyB).toBe("Nokton50f1");
  });

  it("returns comparing=false when a key is invalid", () => {
    const result = parseComparisonParams("?a=NikkorZ50f12&b=FakeLens", KEYS);
    expect(result.comparing).toBe(false);
  });

  it("returns comparing=false when params are missing", () => {
    expect(parseComparisonParams("", KEYS).comparing).toBe(false);
    expect(parseComparisonParams("?a=NikkorZ50f12", KEYS).comparing).toBe(false);
    expect(parseComparisonParams("?b=Nokton50f1", KEYS).comparing).toBe(false);
  });

  it("parses ?lens= for single-lens deep link", () => {
    const result = parseComparisonParams("?lens=Sonnar50f15", KEYS);
    expect(result.comparing).toBe(false);
    expect(result.singleLens).toBe("Sonnar50f15");
  });

  it("ignores invalid ?lens= key", () => {
    const result = parseComparisonParams("?lens=FakeLens", KEYS);
    expect(result.comparing).toBe(false);
  });

  it("prefers ?a=&b= over ?lens=", () => {
    const result = parseComparisonParams("?a=NikkorZ50f12&b=Nokton50f1&lens=Sonnar50f15", KEYS);
    expect(result.comparing).toBe(true);
    expect(result.lensKeyA).toBe("NikkorZ50f12");
  });

  it("allows same key for both a and b", () => {
    const result = parseComparisonParams("?a=Nokton50f1&b=Nokton50f1", KEYS);
    expect(result.comparing).toBe(true);
    expect(result.lensKeyA).toBe("Nokton50f1");
    expect(result.lensKeyB).toBe("Nokton50f1");
  });

  /* ── Slider params ── */

  it("parses zoom, focus, aperture params", () => {
    const result = parseComparisonParams("?lens=Sonnar50f15&zoom=50&focus=0.3&aperture=0.5", KEYS);
    expect(result.zoom).toBe(50);
    expect(result.focus).toBe(0.3);
    expect(result.aperture).toBe(0.5);
  });

  it("returns null for missing slider params", () => {
    const result = parseComparisonParams("?lens=Sonnar50f15", KEYS);
    expect(result.zoom).toBeNull();
    expect(result.focus).toBeNull();
    expect(result.aperture).toBeNull();
  });

  it("returns null for non-numeric slider params", () => {
    const result = parseComparisonParams("?lens=Sonnar50f15&zoom=abc&focus=xyz&aperture=", KEYS);
    expect(result.zoom).toBeNull();
    expect(result.focus).toBeNull();
    expect(result.aperture).toBeNull();
  });

  it("clamps focus and aperture to [0, 1]", () => {
    const result = parseComparisonParams("?lens=Sonnar50f15&focus=-0.5&aperture=1.5", KEYS);
    expect(result.focus).toBe(0);
    expect(result.aperture).toBe(1);
  });

  it("rejects zero or negative zoom", () => {
    expect(parseComparisonParams("?lens=Sonnar50f15&zoom=0", KEYS).zoom).toBeNull();
    expect(parseComparisonParams("?lens=Sonnar50f15&zoom=-10", KEYS).zoom).toBeNull();
  });

  it("includes slider params in comparison mode", () => {
    const result = parseComparisonParams("?a=NikkorZ50f12&b=Nokton50f1&focus=0.6&aperture=0.2", KEYS);
    expect(result.comparing).toBe(true);
    expect(result.focus).toBe(0.6);
    expect(result.aperture).toBe(0.2);
  });
});

describe("buildComparisonURL", () => {
  it("builds comparison URL with ?a=&b=", () => {
    const url = buildComparisonURL(true, "NikkorZ50f12", "Nokton50f1");
    expect(url).toBe("?a=NikkorZ50f12&b=Nokton50f1");
  });

  it("builds single-lens URL with ?lens=", () => {
    const url = buildComparisonURL(false, "Sonnar50f15");
    expect(url).toBe("?lens=Sonnar50f15");
  });

  it("returns empty string when no key provided", () => {
    expect(buildComparisonURL(false, "")).toBe("");
    expect(buildComparisonURL(false, null)).toBe("");
  });

  it("encodes special characters in keys", () => {
    const url = buildComparisonURL(true, "a b", "c&d");
    expect(url).toContain("a%20b");
    expect(url).toContain("c%26d");
  });

  it("appends slider params when provided", () => {
    const url = buildComparisonURL(false, "Sonnar50f15", null, { zoom: 50, focus: 0.3, aperture: 0.5 });
    expect(url).toBe("?lens=Sonnar50f15&zoom=50&focus=0.300&aperture=0.500");
  });

  it("omits zero/null slider params", () => {
    const url = buildComparisonURL(false, "Sonnar50f15", null, { zoom: null, focus: 0, aperture: 0 });
    expect(url).toBe("?lens=Sonnar50f15");
  });

  it("appends slider params in comparison mode", () => {
    const url = buildComparisonURL(true, "NikkorZ50f12", "Nokton50f1", { focus: 0.6 });
    expect(url).toBe("?a=NikkorZ50f12&b=Nokton50f1&focus=0.600");
  });
});

describe("focalLengthToZoomT / zoomTToFocalLength", () => {
  const zoomLens = { isZoom: true, zoomPositions: [24, 50, 70] };
  const primeLens = { isZoom: false };

  it("returns 0 for prime lenses", () => {
    expect(focalLengthToZoomT(50, primeLens)).toBe(0);
  });

  it("returns null for prime lenses (zoomTToFocalLength)", () => {
    expect(zoomTToFocalLength(0.5, primeLens)).toBeNull();
  });

  it("returns 0 at wide end", () => {
    expect(focalLengthToZoomT(24, zoomLens)).toBe(0);
    expect(focalLengthToZoomT(20, zoomLens)).toBe(0);
  });

  it("returns 1 at tele end", () => {
    expect(focalLengthToZoomT(70, zoomLens)).toBe(1);
    expect(focalLengthToZoomT(100, zoomLens)).toBe(1);
  });

  it("round-trips at defined positions", () => {
    for (const fl of [24, 50, 70]) {
      const t = focalLengthToZoomT(fl, zoomLens);
      expect(zoomTToFocalLength(t, zoomLens)).toBeCloseTo(fl, 5);
    }
  });

  it("round-trips at intermediate values", () => {
    for (const fl of [30, 37, 45, 55, 60, 65]) {
      const t = focalLengthToZoomT(fl, zoomLens);
      expect(zoomTToFocalLength(t, zoomLens)).toBeCloseTo(fl, 5);
    }
  });

  it("zoomT=0 gives wide end, zoomT=1 gives tele end", () => {
    expect(zoomTToFocalLength(0, zoomLens)).toBeCloseTo(24, 5);
    expect(zoomTToFocalLength(1, zoomLens)).toBeCloseTo(70, 5);
  });
});
