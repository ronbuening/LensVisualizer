/**
 * Nikon 180-400mm f/4E TC1.4 — TC-OUT vs TC-IN shared-prescription parity.
 *
 * WO 2019/131993 A1 Table 10 states that the object and surfaces 1-45 are
 * identical to Table 8, then publishes the inserted converter and renumbered
 * rear group. The TC-IN file re-transcribes those 45 surfaces by hand, so
 * nothing but this test pins the two copies together.
 *
 * Two divergences inside that range are correct and are asserted as such rather
 * than excluded silently:
 *   - surface 45's `d` is the air space the converter drops into, so it differs;
 *   - the variable gaps agree at infinity focus but not at close focus, because
 *     the close-focus solve is per-configuration.
 */

import { describe, expect, it } from "vitest";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";
import type { SurfaceData, VarRange } from "../../../../src/types/optics.js";

const TC_OUT = LENS_CATALOG["nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr"];
const TC_IN = LENS_CATALOG["nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr-tc-in"];

/** Patent surface labels 1-45, in the order the shared front section uses. */
const SHARED_LABELS = TC_OUT.surfaces
  .map((surface) => surface.label)
  .filter((label): label is string => {
    const numeric = Number(label);
    return Number.isFinite(numeric) && numeric >= 1 && numeric <= 45;
  });

/** The converter is inserted into the gap that follows this surface. */
const CONVERTER_GAP_LABEL = "45";

function byLabel(surfaces: readonly SurfaceData[]): Record<string, SurfaceData> {
  return Object.fromEntries(surfaces.map((surface) => [surface.label, surface]));
}

/** Normalize a prime `[inf, close]` or zoom `[[inf, close], …]` gap to zoom shape. */
function zoomRanges(range: VarRange): [number, number][] {
  return typeof range[0] === "number" ? [range as [number, number]] : (range as [number, number][]);
}

const OUT_BY_LABEL = byLabel(TC_OUT.surfaces);
const IN_BY_LABEL = byLabel(TC_IN.surfaces);

describe("Nikon 180-400mm TC configuration parity", () => {
  it("resolves both configurations from the catalog", () => {
    expect(TC_OUT, "TC-OUT lens missing").toBeDefined();
    expect(TC_IN, "TC-IN lens missing").toBeDefined();
    expect(TC_OUT.opticalConfiguration?.groupKey).toBe(TC_IN.opticalConfiguration?.groupKey);
  });

  it("shares all 45 front surfaces", () => {
    expect(SHARED_LABELS).toHaveLength(39); // 45 patent numbers minus removed dummy planes
    for (const label of SHARED_LABELS) {
      expect(IN_BY_LABEL[label], `TC-IN is missing surface ${label}`).toBeDefined();
    }
  });

  it("keeps every surface property except d identical across surfaces 1-45", () => {
    // Whole-object comparison rather than an enumerated field list, so any
    // property added to SurfaceData later is covered without editing this test.
    // `d` is asserted separately below because of the converter gap.
    const omitD = ({ d: _d, ...rest }: SurfaceData) => rest;

    for (const label of SHARED_LABELS) {
      expect(omitD(IN_BY_LABEL[label]), `surface ${label}`).toEqual(omitD(OUT_BY_LABEL[label]));
    }
  });

  it("keeps d identical for every surface ahead of the converter gap", () => {
    const mismatches = SHARED_LABELS.filter((label) => label !== CONVERTER_GAP_LABEL)
      .filter((label) => OUT_BY_LABEL[label].d !== IN_BY_LABEL[label].d)
      .map((label) => `${label}: OUT=${OUT_BY_LABEL[label].d} IN=${IN_BY_LABEL[label].d}`);

    expect(mismatches).toEqual([]);
  });

  it("changes only the converter insertion gap", () => {
    // Not an exclusion of convenience: this gap collapses from 41.203 to 2 mm
    // precisely because the 1.4x converter occupies it.
    expect(OUT_BY_LABEL[CONVERTER_GAP_LABEL].d).toBeCloseTo(41.203, 6);
    expect(IN_BY_LABEL[CONVERTER_GAP_LABEL].d).toBeCloseTo(2, 6);
    expect(OUT_BY_LABEL[CONVERTER_GAP_LABEL].R).toBe(IN_BY_LABEL[CONVERTER_GAP_LABEL].R);
  });

  it("keeps the variable gaps identical at infinity focus", () => {
    const outVar = TC_OUT.var ?? {};
    const inVar = TC_IN.var ?? {};
    expect(Object.keys(inVar).sort()).toEqual(Object.keys(outVar).sort());

    const mismatches: string[] = [];
    for (const [surfaceKey, outRange] of Object.entries(outVar)) {
      const outZooms = zoomRanges(outRange);
      const inZooms = zoomRanges(inVar[surfaceKey]);
      expect(inZooms, `surface ${surfaceKey} zoom-position count`).toHaveLength(outZooms.length);

      outZooms.forEach(([infinityOut], zoomIndex) => {
        const [infinityIn] = inZooms[zoomIndex];
        if (infinityOut !== infinityIn) {
          mismatches.push(`surface ${surfaceKey} zoom ${zoomIndex}: OUT=${infinityOut} IN=${infinityIn}`);
        }
      });
    }

    expect(mismatches).toEqual([]);
  });

  it("solves close focus separately per configuration", () => {
    // Guards the reverse direction: if these ever became identical, one file's
    // close-focus reconstruction was copied instead of solved.
    const outFocus = zoomRanges((TC_OUT.var ?? {})["9"]).map(([, close]) => close);
    const inFocus = zoomRanges((TC_IN.var ?? {})["9"]).map(([, close]) => close);
    expect(inFocus).not.toEqual(outFocus);
  });
});
