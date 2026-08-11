import { describe, expect, it } from "vitest";
import {
  allEntries,
  assessCatalogGlassCompatibility,
  assertCatalogConsistent,
  catalogSize,
  evaluateCatalogAbbeNumber,
  evaluateSellmeier,
  explainCompatibleGlassResolution,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  LINE_NM,
  resolveCompatibleGlass,
  resolveGlass,
  decodeCode6,
  resolveGlassCandidates,
} from "../../../src/optics/glassCatalog.js";
import { ALIAS_RECORDS } from "../../../src/optics/glassCatalogAliases.js";
import { DUPLICATE_CODE6_PRECEDENCE } from "../../../src/optics/glassCatalogData.js";
import { CDGM_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/cdgm.js";
import { HIKARI_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/hikari.js";
import { HOYA_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/hoya.js";
import { NHG_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/nhg.js";
import { OHARA_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/ohara.js";
import { SCHOTT_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/schott.js";
import { SPECIAL_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/special.js";
import { SUMITA_GLASS_ENTRIES } from "../../../src/optics/glassCatalogEntries/sumita.js";
import { makeSurfaceDispersion, summarizeDispersionQuality } from "../../../src/optics/dispersion.js";
import { sharedApoLanthar50f2 } from "./testLensFixtures.js";

describe("glass catalog", () => {
  it("every entry reproduces its listed nd, vd, and code coordinate", () => {
    /* Tolerances set from the measured catalog envelope (worst |Δnd| 2.15e-5 =
     * K-VC89; worst |Δvd| 0.104 = CaF2, vendor-rounded published vd) — tight
     * enough that the per-vendor row pins this file used to carry are subsumed,
     * loose enough that legitimately rounded vendor listings still pass. */
    expect(() => assertCatalogConsistent(3e-5, 0.11)).not.toThrow();
  });

  it("every catalog entry is reachable by its exact name through resolveGlass", () => {
    const offenders = allEntries()
      .filter((entry) => resolveGlass(entry.name)?.name !== entry.name)
      .map((entry) => entry.name);
    expect(offenders).toEqual([]);
  });

  // assertCatalogConsistent only checks that each entry's Sellmeier fit
  // reproduces its own stored nd — a systematically wrong catalog would still
  // be self-consistent. These anchors pin two hand-verified reference glasses
  // to independent published Schott datasheet indices at the C/d/F/g lines.
  it.each([
    { name: "N-BK7", nC: 1.51432, nd: 1.5168, nF: 1.52238, ng: 1.52668, vd: 64.17 },
    { name: "K10", nC: 1.49867, nd: 1.50137, nF: 1.50756, ng: 1.51243, vd: 56.41 },
    { name: "SF6", nC: 1.79609, nd: 1.80518, nF: 1.82775, ng: 1.84707, vd: 25.43 },
    { name: "P-LASF47", nC: 1.80023, nd: 1.8061, nF: 1.81994, ng: 1.83112, vd: 40.9 },
  ])("$name reproduces the published Schott datasheet indices at the C/d/F/g lines", (datasheet) => {
    const entry = resolveGlass(datasheet.name);
    expect(entry?.name).toBe(datasheet.name);
    const nC = evaluateSellmeier(entry!, LINE_NM.C);
    const nd = evaluateSellmeier(entry!, LINE_NM.d);
    const nF = evaluateSellmeier(entry!, LINE_NM.F);
    const ng = evaluateSellmeier(entry!, LINE_NM.g);
    expect(nC).toBeCloseTo(datasheet.nC, 5);
    expect(nd).toBeCloseTo(datasheet.nd, 5);
    expect(nF).toBeCloseTo(datasheet.nF, 5);
    expect(ng).toBeCloseTo(datasheet.ng, 5);
    expect((nd - 1) / (nF - nC)).toBeCloseTo(datasheet.vd, 2);
  });

  it("S-TIH53WN reproduces the published OHARA 25-04 line indices", () => {
    const entry = resolveGlass("S-TIH53WN (OHARA)");
    expect(entry?.name).toBe("S-TIH53WN");
    expect(evaluateSellmeier(entry!, LINE_NM.C)).toBeCloseTo(1.83653, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(1.84666, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.F)).toBeCloseTo(1.87201, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.g)).toBeCloseTo(1.89403, 5);
  });

  it("S-BSL7 reproduces the published OHARA 25-04 line indices and Abbe number", () => {
    const entry = resolveGlass("S-BSL7 (OHARA)");
    expect(entry?.name).toBe("S-BSL7");
    expect(entry?.code6).toBe("516641");
    expect(evaluateSellmeier(entry!, LINE_NM.C)).toBeCloseTo(1.51386, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(1.51633, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.F)).toBeCloseTo(1.52191, 4);
    expect(evaluateSellmeier(entry!, LINE_NM.g)).toBeCloseTo(1.52621, 5);
    expect(evaluateCatalogAbbeNumber(entry!)).toBeCloseTo(64.14, 2);
  });

  it.each([
    { name: "J-SF1", code6: "717296", nd: 1.71736, vd: 29.57 },
    { name: "J-SF6", code6: "805255", nd: 1.80518, vd: 25.45 },
    { name: "J-SF10", code6: "728284", nd: 1.72825, vd: 28.38 },
    { name: "J-SF11", code6: "785256", nd: 1.78472, vd: 25.64 },
  ])("$name resolves to its first-party Hikari curve", ({ name, code6, nd, vd }) => {
    const entry = resolveGlass(`${name} (HIKARI)`);
    expect(entry?.name).toBe(name);
    expect(entry?.vendor).toBe("Hikari");
    expect(entry?.code6).toBe(code6);
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(nd, 6);
    expect(evaluateCatalogAbbeNumber(entry!)).toBeCloseTo(vd, 2);
  });

  it("J-SF14 reproduces the published Hikari line indices and Abbe number", () => {
    const entry = resolveGlass("J-SF14 (HIKARI)");
    expect(entry?.name).toBe("J-SF14");
    expect(entry?.code6).toBe("762266");
    expect(evaluateSellmeier(entry!, LINE_NM.C)).toBeCloseTo(1.75358, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(1.76182, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.F)).toBeCloseTo(1.782237, 5);
    expect(evaluateSellmeier(entry!, LINE_NM.g)).toBeCloseTo(1.799796, 5);
    expect(evaluateCatalogAbbeNumber(entry!)).toBeCloseTo(26.58, 2);
  });

  it("FD9 reproduces the HOYA catalog lines and resolves its 654337 code", () => {
    const entry = resolveGlass("FD9 (HOYA)");
    expect(entry?.name).toBe("FD9");
    expect(entry?.code6).toBe("654337");
    expect(evaluateSellmeier(entry!, LINE_NM.C)).toBeCloseTo(1.648789162, 8);
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(1.654461781, 8);
    expect(evaluateSellmeier(entry!, LINE_NM.F)).toBeCloseTo(1.668199592, 8);
    expect(evaluateSellmeier(entry!, LINE_NM.g)).toBeCloseTo(1.679614451, 8);
    expect(evaluateCatalogAbbeNumber(entry!)).toBeCloseTo(33.7170166, 6);
    expect(decodeCode6(entry!.code6!)).toEqual({ nd: 1.654, vd: 33.7 });
    expect(resolveGlass("654337")?.name).toBe("FD9");
  });

  it("L-TIM28P reproduces the published OHARA line indices and Abbe number", () => {
    const entry = resolveGlass("L-TIM28P (OHARA)");
    expect(entry?.name).toBe("L-TIM28P");
    expect(evaluateSellmeier(entry!, LINE_NM.C)).toBeCloseTo(1.687955, 6);
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(1.694529, 6);
    expect(evaluateSellmeier(entry!, LINE_NM.F)).toBeCloseTo(1.710611, 6);
    expect(evaluateSellmeier(entry!, LINE_NM.g)).toBeCloseTo(1.724188, 6);
    expect(evaluateCatalogAbbeNumber(entry!)).toBeCloseTo(30.655992, 5);
  });

  it("requires both nd and vd compatibility before trusting a catalog glass", () => {
    const nbk7 = resolveGlass("N-BK7")!;
    expect(assessCatalogGlassCompatibility(nbk7, 1.5168, 64.17).compatible).toBe(true);
    expect(assessCatalogGlassCompatibility(nbk7, 1.5168, 52.0).compatible).toBe(false);
  });

  it("matches explicit e-line names at the C′/e/F′ coordinates", () => {
    const nbk7 = resolveGlass("N-BK7")!;
    expect(evaluateSellmeier(nbk7, LINE_NM.e)).toBeCloseTo(1.51872, 5);
    expect(evaluateCatalogAbbeNumber(nbk7, "e")).toBeCloseTo(63.96, 2);

    const compatibility = assessCatalogGlassCompatibility(nbk7, 1.51872, 63.96, "e");
    expect(compatibility).toMatchObject({
      compatible: true,
      referenceLine: "e",
    });
    expect(compatibility.catalogIndex).toBeCloseTo(1.51872, 5);
    expect(compatibility.abbeDiff).toBeCloseTo(0, 2);
    expect(resolveCompatibleGlass("N-BK7", 1.51872, 63.96, "e")?.name).toBe("N-BK7");
    expect(explainCompatibleGlassResolution("N-BK7", 1.51872, 63.96, "e")).toMatchObject({
      selected: { name: "N-BK7" },
      criterion: "only-compatible",
    });
  });

  it("does not interpret d-line six-digit codes as e-line coordinates", () => {
    expect(resolveCompatibleGlass("517642 — crown glass", 1.51872, 63.96, "e")).toBeNull();
    expect(explainCompatibleGlassResolution("517642 — crown glass", 1.51872, 63.96, "e")).toMatchObject({
      selected: null,
      candidates: [],
      criterion: "none",
      reason: "No coordinate-compatible catalog candidate.",
    });
  });

  it("uses the tightened catalog compatibility window", () => {
    expect(GLASS_ND_TOLERANCE).toBe(0.003);
    expect(GLASS_VD_TOLERANCE).toBe(2);
    const nbk7 = resolveGlass("N-BK7")!;
    expect(assessCatalogGlassCompatibility(nbk7, 1.5201, 64.17).compatible).toBe(false);
    expect(assessCatalogGlassCompatibility(nbk7, 1.5168, 66.5).compatible).toBe(false);
  });

  /**
   * `RAW_CATALOG` is `GLASS_CATALOG_SOURCE_ORDER.map(entryByName)`, so the shipped
   * catalog is exactly the hand-maintained order list. The reverse direction is
   * already guarded — `entryByName` throws for a listed name with no shard entry —
   * but a shard entry missing FROM the list silently never enters the catalog and
   * the glass just disappears from the resolver and every report.
   */
  it("ships every vendor shard entry exactly once", () => {
    const shardEntries = [
      ...SCHOTT_GLASS_ENTRIES,
      ...OHARA_GLASS_ENTRIES,
      ...HOYA_GLASS_ENTRIES,
      ...HIKARI_GLASS_ENTRIES,
      ...SUMITA_GLASS_ENTRIES,
      ...CDGM_GLASS_ENTRIES,
      ...NHG_GLASS_ENTRIES,
      ...SPECIAL_GLASS_ENTRIES,
    ];
    const shardNames = shardEntries.map((entry) => entry.name);
    const catalogNames = allEntries().map((entry) => entry.name);

    // No shard defines the same glass twice.
    expect([...shardNames].sort()).toEqual([...new Set(shardNames)].sort());
    // The source-order list names no glass twice.
    expect(catalogNames.length, "duplicate name in GLASS_CATALOG_SOURCE_ORDER").toBe(new Set(catalogNames).size);

    const missingFromOrder = shardNames.filter((name) => !new Set(catalogNames).has(name)).sort();
    expect(missingFromOrder, "shard entries absent from GLASS_CATALOG_SOURCE_ORDER never reach the resolver").toEqual(
      [],
    );

    // Exact set equality both ways; the reverse also re-states entryByName's guard.
    expect([...catalogNames].sort()).toEqual([...shardNames].sort());
  });

  it("catalog has at least the verified seed entries", () => {
    // Floor only — the exact count is asserted structurally by the shard-parity
    // test above, so this does not need bumping with every catalog addition.
    expect(catalogSize()).toBeGreaterThanOrEqual(460);
    expect(allEntries().some((e) => e.name === "N-BK7")).toBe(true);
    expect(allEntries().some((e) => e.name === "S-BSL7")).toBe(true);
    expect(allEntries().some((e) => e.name === "CaF2")).toBe(true);
  });

  it("alias records point at real catalog entries", () => {
    const names = new Set(allEntries().map((entry) => entry.name.toUpperCase()));
    for (const alias of ALIAS_RECORDS) {
      expect(names.has(alias.target.toUpperCase()), `${alias.alias} target ${alias.target}`).toBe(true);
    }
  });

  it("alias keys are unique after resolver normalization", () => {
    const keys = ALIAS_RECORDS.map((alias) => alias.alias.toUpperCase());
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("alias records resolve to their declared targets", () => {
    for (const alias of ALIAS_RECORDS) {
      expect(resolveGlass(alias.alias)?.name, alias.alias).toBe(alias.target);
    }
  });

  it("explicit duplicate code6 precedence matches current resolver behavior", () => {
    const namesByCode = new Map<string, string[]>();
    for (const entry of allEntries()) {
      if (!entry.code6) continue;
      namesByCode.set(entry.code6, [...(namesByCode.get(entry.code6) ?? []), entry.name]);
    }

    const duplicateCodes = [...namesByCode.entries()]
      .filter(([, names]) => names.length > 1)
      .map(([code]) => code)
      .sort();

    expect([...DUPLICATE_CODE6_PRECEDENCE.keys()].sort()).toEqual(duplicateCodes);
    for (const [code, expectedName] of DUPLICATE_CODE6_PRECEDENCE) {
      expect(namesByCode.get(code)?.[0], code).toBe(expectedName);
      expect(resolveGlass(code)?.name, code).toBe(expectedName);
    }
  });

  it("evaluates vendor polynomial catalog entries", () => {
    const tafd45 = resolveGlass("TAFD45 (HOYA)");
    expect(tafd45).not.toBeNull();
    expect(evaluateSellmeier(tafd45!, LINE_NM.d)).toBeCloseTo(1.95375, 5);
    expect(evaluateSellmeier(tafd45!, LINE_NM.C)).toBeLessThan(evaluateSellmeier(tafd45!, LINE_NM.F));
  });

  /* Per-vendor catalog-row pins used to live here; they asserted values
   * byte-identical to the stored entries and are subsumed by the tightened
   * assertCatalogConsistent sweep + the exact-name reachability test above.
   * Independent published anchors (Schott/OHARA/Hikari/Sumita line indices)
   * are retained. */

  it("reproduces independent patent line-index anchors for the recovered SUMITA rows", () => {
    const balk3 = resolveGlass("BALK3 (SUMITA)");
    const llf4 = resolveGlass("LLF4 (SUMITA)");
    expect(evaluateSellmeier(balk3!, LINE_NM.g)).toBeCloseTo(1.52897, 5);
    expect(evaluateSellmeier(llf4!, 546.074)).toBeCloseTo(1.56433, 5);
  });

  it("resolves CDGM names regardless of the annotation's casing", () => {
    // Canonical names use the vendor's mixed case (H-ZLaF50D); lens annotations
    // authored in all caps must keep resolving to the same entry.
    for (const [annotated, canonical] of [
      ["H-ZLAF50D", "H-ZLaF50D"],
      ["H-LAK12", "H-LaK12"],
      ["D-ZLAF81-25", "D-ZLaF81-25"],
    ] as const) {
      expect(resolveGlass(annotated)?.name).toBe(canonical);
    }
  });

  it("evaluates the SUMITA K-SKLD5 molding-state catalog row", () => {
    const entry = resolveGlass("K-SKLD5-M (SUMITA K-SKLD5(M) catalog equivalent)");
    expect(entry?.name).toBe("K-SKLD5-M");
    expect(entry?.vendor).toBe("Sumita");
    expect(entry?.code6).toBeUndefined();
    expect(evaluateSellmeier(entry!, LINE_NM.d)).toBeCloseTo(1.58606, 5);
    expect(evaluateCatalogAbbeNumber(entry!)).toBeCloseTo(61.0, 1);
    expect(resolveCompatibleGlass("K-SKLD5-M", 1.58636, 60.9)?.name).toBe("K-SKLD5-M");
    expect(resolveGlass("586609")).toBeNull();
  });

  it("evaluates explicit power-series catalog entries", () => {
    const hikariPskh1 = resolveGlass("593679 - fluorophosphate crown");
    expect(hikariPskh1?.name).toBe("J-PSKH1");
    expect(evaluateSellmeier(hikariPskh1!, LINE_NM.d)).toBeCloseTo(1.59319, 5);
    expect(evaluateSellmeier(hikariPskh1!, LINE_NM.C)).toBeLessThan(evaluateSellmeier(hikariPskh1!, LINE_NM.F));
  });
});

/**
 * One case per tie-breaking rung of `candidateSelectionReason`, in the order the
 * resolver applies them. The multi-name test elsewhere in this file accepts any
 * of four criteria, so before these each rung could have silently stopped
 * working. Cases were derived from real catalog rows rather than invented, so a
 * failure here means the ranking changed, not that a fixture drifted.
 */
describe("glass resolution criteria", () => {
  it("reports none when there is no annotation", () => {
    const resolution = explainCompatibleGlassResolution(undefined, 1.5168, 64.17);
    expect(resolution.criterion).toBe("none");
    expect(resolution.selected).toBeNull();
  });

  it("reports only-compatible for a single candidate", () => {
    const resolution = explainCompatibleGlassResolution("N-BK7", 1.5168, 64.17);
    expect(resolution.criterion).toBe("only-compatible");
    expect(resolution.selected?.name).toBe("N-BK7");
  });

  it("reports source-priority when a direct name competes with a six-digit code", () => {
    // 517642 also matches H-K9L/H-K9LGT, but the spelled-out name outranks them.
    const resolution = explainCompatibleGlassResolution("N-BK7 517642 borosilicate", 1.5168, 64.17);
    expect(resolution.criterion).toBe("source-priority");
    expect(resolution.selected?.name).toBe("N-BK7");
    expect(resolution.reason).toContain("direct name evidence outranks six-digit code evidence");
  });

  it("reports index-residual when two named candidates differ in d-line fit", () => {
    const resolution = explainCompatibleGlassResolution("N-BK7 / H-K9L", 1.5168, 64.2);
    expect(resolution.criterion).toBe("index-residual");
    expect(resolution.selected?.name).toBe("H-K9L");
  });

  it("reports abbe-residual when the index residuals tie exactly", () => {
    // S-TIH53 and S-TIH53W carry byte-identical coefficients, so only their
    // listed Abbe numbers (23.7779 vs 23.77794) can separate them.
    const resolution = explainCompatibleGlassResolution("S-TIH53 / S-TIH53W", 1.846659679775239, 23.7779);
    expect(resolution.criterion).toBe("abbe-residual");
    expect(resolution.selected?.name).toBe("S-TIH53");
  });

  it("reports token-order when annotation position is the only difference", () => {
    // Identical coefficients, identical nd/vd — only which name appears first.
    const resolution = explainCompatibleGlassResolution("H-K9L / H-K9LGT", 1.5168, 64.2);
    expect(resolution.criterion).toBe("token-order");
    expect(resolution.selected?.name).toBe("H-K9L");

    const reversed = explainCompatibleGlassResolution("H-K9LGT / H-K9L", 1.5168, 64.2);
    expect(reversed.criterion).toBe("token-order");
    expect(reversed.selected?.name).toBe("H-K9LGT");
  });

  it("reports duplicate-code-precedence when the configured winner breaks an exact tie", () => {
    // Code-only annotation with no Abbe number: S-TIH53/S-TIH53W tie on source,
    // index, Abbe, and token, so only DUPLICATE_CODE6_PRECEDENCE separates them.
    const resolution = explainCompatibleGlassResolution("847238", 1.846659679775239, undefined);
    expect(resolution.criterion).toBe("duplicate-code-precedence");
    expect(resolution.selected?.name).toBe(DUPLICATE_CODE6_PRECEDENCE.get("847238"));
    expect(resolution.candidates[0].legacyCodePreferred).toBe(true);
  });

  it("reports canonical-name-order as the final deterministic fallback", () => {
    // 517642's configured winner is N-BK7, so neither CDGM twin is preferred and
    // every earlier rung ties — stable name ordering is all that remains.
    const resolution = explainCompatibleGlassResolution("517642", 1.5168, 64.2);
    expect(resolution.criterion).toBe("canonical-name-order");
    expect(resolution.selected?.name).toBe("H-K9L");
    expect(resolution.reason).toContain("H-K9L before H-K9LGT");
  });

  it("uses each criterion string in exactly one of these cases", () => {
    const criteria = [
      explainCompatibleGlassResolution(undefined, 1.5168, 64.17).criterion,
      explainCompatibleGlassResolution("N-BK7", 1.5168, 64.17).criterion,
      explainCompatibleGlassResolution("N-BK7 517642 borosilicate", 1.5168, 64.17).criterion,
      explainCompatibleGlassResolution("N-BK7 / H-K9L", 1.5168, 64.2).criterion,
      explainCompatibleGlassResolution("S-TIH53 / S-TIH53W", 1.846659679775239, 23.7779).criterion,
      explainCompatibleGlassResolution("H-K9L / H-K9LGT", 1.5168, 64.2).criterion,
      explainCompatibleGlassResolution("847238", 1.846659679775239, undefined).criterion,
      explainCompatibleGlassResolution("517642", 1.5168, 64.2).criterion,
    ];

    expect(new Set(criteria).size).toBe(criteria.length);
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

  it("resolves Hoya patent-class aliases to coefficient-backed rows", () => {
    expect(resolveGlass("TAF1 (HOYA)")?.name).toBe("S-LAH66");
    expect(resolveGlass("PCD51 (HOYA)")?.name).toBe("M-PCD51");
    expect(resolveGlass("MP-PCD51-70 precision-mold preform")?.name).toBe("M-PCD51");
    expect(resolveGlass("M-NBFD130 (HOYA)")?.name).toBe("NBFD13");
    expect(resolveGlass("MP-NBFD130 molded high-index flint")?.name).toBe("NBFD13");
  });

  it("resolves Ohara PGM / large-format aliases to catalog equivalents", () => {
    expect(resolveGlass("L-BAL42 (OHARA)")?.name).toBe("S-BAL42");
    expect(resolveGlass("OHARA L-BSL7 (PGM)")?.name).toBe("S-BSL7");
    expect(resolveGlass("L-BAL35 (OHARA)")?.name).toBe("S-BAL35");
  });

  it("resolves a 6-digit Schott CID", () => {
    expect(resolveGlass("517642")?.name).toBe("N-BK7");
  });

  it("does not mistake decimal digits for a 6-digit code", () => {
    // Six-decimal indices in annotations previously tokenized to phantom
    // codes: "1.516330" shed its integer part and resolved as 516330.
    expect(resolveGlass("Crown 1.516330 index note")).toBeNull();
    expect(resolveGlass("nd=1.720467 measured")).toBeNull();
    // Boundary guards must not break genuine standalone codes.
    expect(resolveGlass("crown 517642 annotation")?.name).toBe("N-BK7");
  });

  it("decodes 6-digit codes including the nd ≥ 2.0 wrap", () => {
    expect(decodeCode6("517642")).toEqual({ nd: 1.517, vd: 64.2 });
    const highIndex = decodeCode6("001255");
    expect(highIndex.nd).toBeCloseTo(2.001, 9);
    expect(highIndex.vd).toBeCloseTo(25.5, 9);
  });

  it("preserves explicit duplicate-code precedence for legacy resolution", () => {
    expect(resolveGlass("516641 crown class (vendor unproven)")?.name).toBe("S-BSL7");
  });

  it("exposes every duplicate-code candidate", () => {
    expect(resolveGlassCandidates("516641").map((entry) => entry.name)).toEqual(["S-BSL7", "K-BK7"]);
  });

  it("uses vendor context and coordinates to disambiguate duplicate codes", () => {
    expect(resolveCompatibleGlass("516641 (SUMITA)", 1.5163, 64.11)?.name).toBe("K-BK7");
    expect(resolveCompatibleGlass("516641 (OHARA)", 1.51633, 64.14)?.name).toBe("S-BSL7");
  });

  it("explains compatible candidates using the same runtime ranking", () => {
    const explanation = explainCompatibleGlassResolution("516641 (SUMITA)", 1.5163, 64.11);
    expect(explanation.selected?.name).toBe("K-BK7");
    expect(explanation.candidates.map(({ entry }) => entry.name)).toEqual(["K-BK7", "S-BSL7"]);
    expect(explanation.candidates[0]).toMatchObject({
      source: "code",
      matchedToken: "516641",
      vendorMatch: true,
      legacyCodePreferred: false,
    });
    expect(explanation.criterion).toBe("vendor-context");
    expect(explanation.reason).toBe("Annotation vendor context matches Sumita.");
  });

  it("reports why an earlier direct name wins a compatible multi-name annotation", () => {
    const explanation = explainCompatibleGlassResolution("S-BSL7 / N-BK7", 1.5168, 64.1);
    expect(explanation.candidates.length).toBeGreaterThan(1);
    expect(explanation.selected?.name).toBe(resolveCompatibleGlass("S-BSL7 / N-BK7", 1.5168, 64.1)?.name);
    expect(["index-residual", "abbe-residual", "token-order", "canonical-name-order"]).toContain(explanation.criterion);
  });

  it("can select a compatible later token when the first named glass is incompatible", () => {
    expect(resolveGlass("S-LAH55 / S-LAH60")?.name).toBe("S-LAH55");
    expect(resolveCompatibleGlass("S-LAH55 / S-LAH60", 1.834, 37.16)?.name).toBe("S-LAH60");
  });

  it("resolves slash and hyphen six-digit code annotations", () => {
    expect(resolveGlass("Dense flint (855/252)")?.name).toBe("NBFD25");
    expect(resolveGlass("Heavy flint (770/297)")?.name).toBe("NBFD29");
    expect(resolveGlass("Dense flint (806-333, uncertain)")?.name).toBe("NBFD15");
  });

  it("resolves phase 21 additions by alias and six-digit code", () => {
    expect(resolveGlass("SF8 dense flint")?.name).toBe("N-SF8");
    expect(resolveGlass("Lanthanum flint 750/350")?.name).toBe("H-LaF4");
    expect(resolveGlass("OHARA L-LAM69 PGM")?.name).toBe("L-LAM69");
    expect(resolveGlass("S-BSM10 (OHARA; 623/570)")?.name).toBe("S-BSM10");
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

  it("preserves authored dPgF on the violet channel of a compatible catalog curve", () => {
    const baseline = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "S-BSL7" },
      undefined,
    );
    const patentPartialDispersion = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      {
        id: 1,
        name: "L1",
        label: "L1",
        type: "Test",
        nd,
        vd: 64.14,
        glass: "S-BSL7",
        dPgF: 0.04,
      },
      undefined,
    );

    expect(patentPartialDispersion.quality).toBe("sellmeier");
    expect(patentPartialDispersion.fn("R")).toBe(baseline.fn("R"));
    expect(patentPartialDispersion.fn("G")).toBe(baseline.fn("G"));
    expect(patentPartialDispersion.fn("B")).toBe(baseline.fn("B"));
    const expectedPgF = 0.6438 - 0.001682 * 64.14 + 0.04;
    expect(patentPartialDispersion.fn("V")).toBeCloseTo(
      patentPartialDispersion.fn("B") +
        expectedPgF * (patentPartialDispersion.fn("B") - patentPartialDispersion.fn("R")),
      12,
    );
    expect(patentPartialDispersion.fn("V")).toBeGreaterThan(baseline.fn("V"));
  });

  it("prefers complete measured line indices over a matching catalog entry", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd, vd: 64.14, glass: "S-BSL7" },
      { nC: 1.511, nF: 1.522, ng: 1.529 },
    );
    expect(d.quality).toBe("lineIndices");
    expect(d.glassEntry).toBeUndefined();
    expect(d.fn("R")).toBe(1.511);
    expect(d.fn("G")).toBe(nd);
    expect(d.fn("B")).toBe(1.522);
    expect(d.fn("V")).toBe(1.529);
  });

  it("falls back to Abbe when nd matches but the catalog Abbe number does not", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd: 1.5168, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "Test", nd: 1.5168, vd: 52, glass: "N-BK7" },
      undefined,
    );
    expect(d.quality).toBe("abbe");
    expect(d.glassEntry).toBeUndefined();
  });

  it("uses an explicit e-line-compatible catalog curve at physical C/d/F/g wavelengths", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd: 1.51872, elemId: 1 },
      {
        id: 1,
        name: "L1",
        label: "L1",
        type: "Test",
        nd: 1.51872,
        vd: 63.96,
        indexReference: "e",
        glass: "N-BK7",
      },
      undefined,
    );
    expect(d.quality).toBe("sellmeier");
    expect(d.glassEntry?.name).toBe("N-BK7");
    expect(d.fn("G")).toBeCloseTo(1.5168, 5);
    expect(d.fn("G")).not.toBeCloseTo(1.51872, 5);
  });

  it("keeps authored ne in the fallback G channel when no e-line catalog name is trusted", () => {
    const d = makeSurfaceDispersion(
      { R: 0, d: 0, sd: 0, label: "", nd: 1.51872, elemId: 1 },
      {
        id: 1,
        name: "L1",
        label: "L1",
        type: "Test",
        nd: 1.51872,
        vd: 63.96,
        indexReference: "e",
        glass: "Unmatched crown",
      },
      undefined,
    );
    expect(d.quality).toBe("abbe");
    expect(d.glassEntry).toBeUndefined();
    expect(d.fn("G")).toBe(1.51872);
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
    const L = sharedApoLanthar50f2();
    for (let i = 0; i < L.N; i++) {
      expect(L.indexByIdx[i]).toBeDefined();
      expect(typeof L.indexByIdx[i].fn).toBe("function");
    }
  });

  it("resolves S-BSL7 via the catalog for ApoLanthar's L10 element (mixed-name string)", () => {
    const L = sharedApoLanthar50f2();
    // The Voigtländer APO-Lanthar's last element has glass "S-BSL7 / N-BK7 (universal)".
    // At least one of its surfaces should land on the sellmeier path.
    const qualities = new Set<string>();
    for (let i = 0; i < L.N; i++) qualities.add(L.indexByIdx[i].quality);
    expect(qualities.has("sellmeier")).toBe(true);
  });

  it("summarizeDispersionQuality returns the worst non-air tier across all glass surfaces", () => {
    const L = sharedApoLanthar50f2();
    // ApoLanthar has many proprietary/unmatched glasses, so the weakest surface is 'abbe'.
    expect(summarizeDispersionQuality(L)).toBe("abbe");
  });
});
