import { describe, expect, it } from "vitest";
import {
  allEntries,
  assertCatalogConsistent,
  catalogSize,
  evaluateSellmeier,
  LINE_NM,
  resolveGlass,
} from "../src/optics/glassCatalog.js";
import { makeSurfaceDispersion, summarizeDispersionQuality } from "../src/optics/dispersion.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

describe("glass catalog", () => {
  it("every entry's Sellmeier coefficients reproduce the listed nd within 1e-4", () => {
    expect(() => assertCatalogConsistent(1e-4)).not.toThrow();
  });

  it("Sellmeier evaluator is monotonically decreasing across the visible range for normal glass", () => {
    const nbk7 = resolveGlass("N-BK7");
    expect(nbk7).not.toBeNull();
    const nC = evaluateSellmeier(nbk7!, LINE_NM.C);
    const nd = evaluateSellmeier(nbk7!, LINE_NM.d);
    const nF = evaluateSellmeier(nbk7!, LINE_NM.F);
    const ng = evaluateSellmeier(nbk7!, LINE_NM.g);
    // n increases as λ decreases (normal dispersion)
    expect(nC).toBeLessThan(nd);
    expect(nd).toBeLessThan(nF);
    expect(nF).toBeLessThan(ng);
  });

  it("computed Abbe number for N-BK7 matches the catalog vd within 0.5", () => {
    const nbk7 = resolveGlass("N-BK7");
    expect(nbk7).not.toBeNull();
    const nC = evaluateSellmeier(nbk7!, LINE_NM.C);
    const nd = evaluateSellmeier(nbk7!, LINE_NM.d);
    const nF = evaluateSellmeier(nbk7!, LINE_NM.F);
    const computedVd = (nd - 1) / (nF - nC);
    expect(Math.abs(computedVd - nbk7!.vd)).toBeLessThan(0.5);
  });

  it("catalog has at least the verified seed entries", () => {
    expect(catalogSize()).toBeGreaterThanOrEqual(3);
    expect(allEntries().some((e) => e.name === "N-BK7")).toBe(true);
    expect(allEntries().some((e) => e.name === "S-BSL7")).toBe(true);
    expect(allEntries().some((e) => e.name === "CaF2")).toBe(true);
  });
});

describe("resolveGlass", () => {
  it("resolves an exact canonical name", () => {
    expect(resolveGlass("N-BK7")?.name).toBe("N-BK7");
    expect(resolveGlass("S-BSL7")?.name).toBe("S-BSL7");
  });

  it("is case-insensitive", () => {
    expect(resolveGlass("n-bk7")?.name).toBe("N-BK7");
    expect(resolveGlass("CAF2")?.name).toBe("CaF2");
  });

  it("resolves through real-world messy strings", () => {
    expect(resolveGlass("S-BSL7 / N-BK7 (universal)")?.name).toBeDefined();
    expect(resolveGlass("BK7 (Schott, ≈)")?.name).toBe("N-BK7");
    expect(resolveGlass("517642 — N-BK7 (Schott)")?.name).toBe("N-BK7");
  });

  it("resolves an alias (BSC7 → S-BSL7, BK7 → N-BK7)", () => {
    expect(resolveGlass("BSC7 (HOYA)")?.name).toBe("S-BSL7");
    expect(resolveGlass("BK7")?.name).toBe("N-BK7");
  });

  it("resolves a 6-digit Schott CID", () => {
    expect(resolveGlass("517642")?.name).toBe("N-BK7");
  });

  it("returns null for unknown glasses", () => {
    expect(resolveGlass("S-FANTASY99 (made up)")).toBeNull();
    expect(resolveGlass("Z-NOSUCH50")).toBeNull();
  });

  it("returns null for explicit 'unmatched' markers", () => {
    expect(resolveGlass("Unmatched (likely Sumita proprietary)")).toBeNull();
    expect(resolveGlass("Unknown high-index")).toBeNull();
  });

  it("returns null for empty / undefined", () => {
    expect(resolveGlass(undefined)).toBeNull();
    expect(resolveGlass("")).toBeNull();
  });
});

describe("makeSurfaceDispersion preference cascade", () => {
  const nd = 1.51633;

  it("returns 'air' constant when surface nd === 1.0", () => {
    const d = makeSurfaceDispersion({ R: 0, d: 0, sd: 0, label: "", nd: 1.0, elemId: 0 }, undefined, undefined);
    expect(d.quality).toBe("air");
    expect(d.fn("R")).toBe(1.0);
    expect(d.fn("G")).toBe(1.0);
    expect(d.fn("B")).toBe(1.0);
    expect(d.fn("V")).toBe(1.0);
  });

  it("prefers Sellmeier when the element resolves to a catalog entry", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "S-BSL7" },
      undefined,
    );
    expect(d.quality).toBe("sellmeier");
    expect(d.glassEntry?.name).toBe("S-BSL7");
    // n should grow from C to F to V (normal dispersion across the whole spectrum)
    expect(d.fn("R")).toBeLessThan(d.fn("G"));
    expect(d.fn("G")).toBeLessThan(d.fn("B"));
    expect(d.fn("B")).toBeLessThan(d.fn("V"));
  });

  it("uses measured line indices when the catalog misses but nC/nF are present", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "Unmatched proprietary" },
      { nC: 1.51, nF: 1.52 },
    );
    expect(d.quality).toBe("lineIndices");
    expect(d.fn("R")).toBe(1.51);
    expect(d.fn("G")).toBe(nd);
    expect(d.fn("B")).toBe(1.52);
    // V channel: estimated from dPgF=0 normal-line partial dispersion (≈ 0.536 for vd=64.14).
    // n_g should sit above n_F (nF + PgF*(nF-nC) > nF since PgF > 0).
    expect(d.fn("V")).toBeGreaterThan(1.52);
  });

  it("uses measured ng directly when present in line-indices spectral data", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "Unmatched proprietary" },
      { nC: 1.51, nF: 1.52, ng: 1.527 },
    );
    expect(d.quality).toBe("lineIndices");
    expect(d.fn("V")).toBe(1.527);
  });

  it("falls back to Abbe when only nd and vd are available", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "Unmatched proprietary" },
      undefined,
    );
    expect(d.quality).toBe("abbe");
    const delta = (nd - 1) / (2 * 64.14);
    expect(d.fn("R")).toBeCloseTo(nd - delta, 10);
    expect(d.fn("G")).toBe(nd);
    expect(d.fn("B")).toBeCloseTo(nd + delta, 10);
    // V channel: normal-line PgF = 0.6438 - 0.001682*64.14 ≈ 0.5359; ng = nF + PgF*(nF-nC).
    const PgF = 0.6438 - 0.001682 * 64.14;
    expect(d.fn("V")).toBeCloseTo(nd + delta + PgF * (2 * delta), 10);
  });

  it("dPgF on the element shifts the V-channel index away from the normal-line baseline", () => {
    const baseline = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "Unmatched" },
      undefined,
    );
    const apoLike = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "Unmatched", dPgF: 0.04 },
      undefined,
    );
    // R/G/B unchanged by dPgF.
    expect(apoLike.fn("R")).toBe(baseline.fn("R"));
    expect(apoLike.fn("G")).toBe(baseline.fn("G"));
    expect(apoLike.fn("B")).toBe(baseline.fn("B"));
    // V is shifted: positive dPgF raises n_g (more secondary spectrum on the violet side).
    expect(apoLike.fn("V")).toBeGreaterThan(baseline.fn("V"));
  });

  it("returns the surface nd as a constant when no spectral data exists at all", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd },
      undefined,
    );
    expect(d.quality).toBe("constant");
    expect(d.fn("R")).toBe(nd);
    expect(d.fn("G")).toBe(nd);
    expect(d.fn("B")).toBe(nd);
    expect(d.fn("V")).toBe(nd);
  });
});

describe("buildLens integration with dispersion", () => {
  it("populates indexByIdx for each surface on a real lens", () => {
    const L = build(ApoLantharRaw);
    for (let i = 0; i < L.N; i++) {
      expect(L.indexByIdx[i]).toBeDefined();
      expect(typeof L.indexByIdx[i].fn).toBe("function");
    }
  });

  it("resolves S-BSL7 via the catalog for ApoLanthar's L10 element (mixed-name string)", () => {
    const L = build(ApoLantharRaw);
    // The Voigtländer APO-Lanthar's last element has glass "S-BSL7 / N-BK7 (universal)".
    // At least one of its surfaces should land on the sellmeier path.
    const qualities = new Set<string>();
    for (let i = 0; i < L.N; i++) qualities.add(L.indexByIdx[i].quality);
    expect(qualities.has("sellmeier")).toBe(true);
  });

  it("summarizeDispersionQuality returns the worst non-air tier across all glass surfaces", () => {
    const L = build(ApoLantharRaw);
    // ApoLanthar has many proprietary/unmatched glasses, so the weakest surface is 'abbe'.
    expect(summarizeDispersionQuality(L)).toBe("abbe");
  });
});
