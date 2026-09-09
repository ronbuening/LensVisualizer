import { describe, expect, it } from "vitest";
import type { LensData, SurfaceData, VarRange } from "../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

/**
 * Shared-prescription parity for switchable `opticalConfiguration` groups.
 *
 * Each group pairs one visible base prescription with hidden variants that
 * re-transcribe the base surfaces by hand before inserting a converter or
 * extender; the source patents state that the front section is identical.
 * Nothing in the data format links the two copies, so this suite pins them
 * together. Every group in the catalog must declare its contract in
 * `CONTRACTS`; a new configuration family fails until it does.
 */

interface ConfigurationContract {
  /** Leading surfaces the variant copies from the base, through the insertion gap. */
  sharedLeadingSurfaces: number;
  /** Label of the last shared surface; the inserted optics occupy its air gap, so only its `d` may change. */
  insertionGapLabel: string;
  /** Trailing surfaces reused after the inserted optics, compared ignoring label and elemId. */
  sharedTrailingSurfaces: number;
  /** Whether the trailing spacings are copied or re-solved for the variant. */
  trailingSpacing: "shared" | "re-solved";
  /** Whether close-focus `var` values are copied or solved per configuration. */
  closeFocus: "shared" | "solved-per-configuration";
}

const CONTRACTS: Record<string, ConfigurationContract> = {
  // US 2013/0308041 A1 Numerical Example 1: surfaces 1-40 are identical, the
  // extender drops into the gap after surface 41, and the same L44 pair follows.
  "canon-ef-200400-f4l-is-usm-extender-14x": {
    sharedLeadingSurfaces: 41,
    insertionGapLabel: "41",
    sharedTrailingSurfaces: 3,
    trailingSpacing: "shared",
    closeFocus: "shared",
  },
  // WO 2019/131993 A1 Table 10: surfaces 1-45 are identical to Table 8, the
  // converter drops into the gap after surface 45, and the renumbered rear
  // group keeps its optics but re-solves its spacings and close focus.
  "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr-configurations": {
    sharedLeadingSurfaces: 40, // STO plus patent surfaces 1-45, minus removed dummy planes
    insertionGapLabel: "45",
    sharedTrailingSurfaces: 7,
    trailingSpacing: "re-solved",
    closeFocus: "solved-per-configuration",
  },
};

interface ConfigurationGroup {
  base: LensData;
  variants: LensData[];
}

const GROUPS = new Map<string, ConfigurationGroup>();
for (const data of Object.values(LENS_CATALOG)) {
  const groupKey = data.opticalConfiguration?.groupKey;
  if (groupKey === undefined) continue;
  const group = GROUPS.get(groupKey) ?? { base: undefined as unknown as LensData, variants: [] };
  if (data.visible === false) group.variants.push(data);
  else group.base = data;
  GROUPS.set(groupKey, group);
}

const CONTRACT_ENTRIES = Object.entries(CONTRACTS);

function groupFor(groupKey: string): ConfigurationGroup {
  const group = GROUPS.get(groupKey);
  expect(group, `${groupKey} is not a catalog configuration group`).toBeDefined();
  expect(group!.base, `${groupKey} has no visible base configuration`).toBeDefined();
  expect(group!.variants.length, `${groupKey} has no hidden variants`).toBeGreaterThan(0);
  return group!;
}

const omitD = <T extends { d: number }>({ d: _d, ...rest }: T) => rest;
const omitIdentity = <T extends { label: string; elemId: number }>({ label: _label, elemId: _elemId, ...rest }: T) =>
  rest;

/** Normalize a prime `[inf, close…]` or zoom `[[inf, close…], …]` range to zoom shape. */
function zoomRanges(range: VarRange): number[][] {
  return typeof range[0] === "number" ? [range as number[]] : (range as number[][]);
}

describe("optical configuration parity", () => {
  it("declares a parity contract for every configuration group in the catalog", () => {
    expect([...GROUPS.keys()].sort()).toEqual(Object.keys(CONTRACTS).sort());
  });

  it.each(CONTRACT_ENTRIES)("%s copies the shared leading surfaces from the base", (groupKey, contract) => {
    const { base, variants } = groupFor(groupKey);
    expect(base.surfaces[contract.sharedLeadingSurfaces - 1]?.label).toBe(contract.insertionGapLabel);

    for (const variant of variants) {
      for (let i = 0; i < contract.sharedLeadingSurfaces; i++) {
        expect(omitD(variant.surfaces[i]), `${variant.key} surface ${base.surfaces[i].label}`).toEqual(
          omitD(base.surfaces[i]),
        );
      }
    }
  });

  it.each(CONTRACT_ENTRIES)("%s changes only the insertion gap ahead of the inserted optics", (groupKey, contract) => {
    const { base, variants } = groupFor(groupKey);
    const gapIndex = contract.sharedLeadingSurfaces - 1;

    for (const variant of variants) {
      const mismatches = base.surfaces
        .slice(0, gapIndex)
        .filter((surface, i) => surface.d !== variant.surfaces[i].d)
        .map(
          (surface, i) => `${variant.key} surface ${surface.label}: base=${surface.d} variant=${variant.surfaces[i].d}`,
        );
      expect(mismatches).toEqual([]);

      // The inserted optics occupy the gap, so the variant's spacing must shrink
      // and its prescription must grow.
      expect(variant.surfaces[gapIndex].d, `${variant.key} insertion gap`).toBeLessThan(base.surfaces[gapIndex].d);
      expect(variant.surfaces.length, `${variant.key} surface count`).toBeGreaterThan(base.surfaces.length);
    }
  });

  it.each(CONTRACT_ENTRIES)("%s reuses the trailing surfaces after the inserted optics", (groupKey, contract) => {
    const { base, variants } = groupFor(groupKey);
    const strip = contract.trailingSpacing === "shared" ? omitIdentity : (s: SurfaceData) => omitD(omitIdentity(s));

    for (const variant of variants) {
      for (let k = 1; k <= contract.sharedTrailingSurfaces; k++) {
        expect(strip(variant.surfaces.at(-k)!), `${variant.key} trailing surface ${k}`).toEqual(
          strip(base.surfaces.at(-k)!),
        );
      }
    }
  });

  it.each(CONTRACT_ENTRIES)(
    "%s keeps the variable-gap schedule aligned across configurations",
    (groupKey, contract) => {
      const { base, variants } = groupFor(groupKey);

      for (const variant of variants) {
        expect(variant.varLabels, `${variant.key} varLabels`).toEqual(base.varLabels);
        const baseVar = base.var ?? {};
        const variantVar = variant.var ?? {};
        expect(Object.keys(variantVar).sort(), `${variant.key} var keys`).toEqual(Object.keys(baseVar).sort());

        if (contract.closeFocus === "shared") {
          expect(variantVar, `${variant.key} var`).toEqual(baseVar);
          continue;
        }

        // Infinity spacings are shared at every zoom station; close focus is a
        // per-configuration solve, so copying one file's values into the other
        // would be a transcription error in the other direction.
        const infinityMismatches: string[] = [];
        let anyCloseDiffers = false;
        for (const [label, baseRange] of Object.entries(baseVar)) {
          const baseZooms = zoomRanges(baseRange);
          const variantZooms = zoomRanges(variantVar[label]);
          expect(variantZooms, `${variant.key} var ${label} zoom-station count`).toHaveLength(baseZooms.length);
          baseZooms.forEach((baseStation, zoomIndex) => {
            const variantStation = variantZooms[zoomIndex];
            if (baseStation[0] !== variantStation[0]) {
              infinityMismatches.push(
                `${label} zoom ${zoomIndex}: base=${baseStation[0]} variant=${variantStation[0]}`,
              );
            }
            if (baseStation.slice(1).some((value, i) => value !== variantStation[i + 1])) anyCloseDiffers = true;
          });
        }
        expect(infinityMismatches, variant.key).toEqual([]);
        expect(anyCloseDiffers, `${variant.key} should solve close focus per configuration`).toBe(true);
      }
    },
  );
});
