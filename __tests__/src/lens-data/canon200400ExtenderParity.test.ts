/**
 * Canon EF 200-400mm f/4L Extender 1.4x — EXT OUT vs EXT IN parity.
 *
 * US 2013/0308041 A1 Numerical Example 1 states that surfaces 1-40 are
 * identical in both configurations. The inserted table replaces the rear
 * segment after surface 41 with the eight-element extender followed by the
 * same L44 cemented pair, so this test pins the hand-copied common data to the
 * canonical visible prescription.
 */

import { describe, expect, it } from "vitest";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { SurfaceData } from "../../../src/types/optics.js";

const EXT_OUT = LENS_CATALOG["canon-ef-200400-f4l-is-usm-extender-14x"];
const EXT_IN = LENS_CATALOG["canon-ef-200400-f4l-is-usm-extender-14x-in"];

function byLabel(surfaces: readonly SurfaceData[]): Record<string, SurfaceData> {
  return Object.fromEntries(surfaces.map((surface) => [surface.label, surface]));
}

const OUT_BY_LABEL = byLabel(EXT_OUT.surfaces);
const IN_BY_LABEL = byLabel(EXT_IN.surfaces);
const SHARED_LABELS = EXT_OUT.surfaces
  .map((surface) => surface.label)
  .filter((label): label is string => label === "STO" || Number(label) <= 40);

describe("Canon 200-400mm extender configuration parity", () => {
  it("resolves the visible and hidden configurations as one group", () => {
    expect(EXT_OUT).toBeDefined();
    expect(EXT_IN).toBeDefined();
    expect(EXT_OUT.visible).not.toBe(false);
    expect(EXT_IN.visible).toBe(false);
    expect(EXT_OUT.opticalConfiguration?.groupKey).toBe(EXT_IN.opticalConfiguration?.groupKey);
  });

  it("keeps the 22 shared front elements identical", () => {
    expect(EXT_IN.elements.slice(0, 22)).toEqual(EXT_OUT.elements.slice(0, 22));
  });

  it("keeps every surface through patent surface 40 identical", () => {
    expect(SHARED_LABELS).toHaveLength(40);
    for (const label of SHARED_LABELS) {
      expect(IN_BY_LABEL[label], `surface ${label}`).toEqual(OUT_BY_LABEL[label]);
    }
  });

  it("opens only the surface-41 insertion gap", () => {
    const omitD = ({ d: _d, ...rest }: SurfaceData) => rest;

    expect(omitD(IN_BY_LABEL["41"])).toEqual(omitD(OUT_BY_LABEL["41"]));
    expect(OUT_BY_LABEL["41"].d).toBeCloseTo(45.38, 6);
    expect(IN_BY_LABEL["41"].d).toBeCloseTo(1.99, 6);
  });

  it("retains the same L44 pair after the inserted extender", () => {
    const omitIdentity = ({ label: _label, elemId: _elemId, ...rest }: SurfaceData) => rest;

    expect(omitIdentity(IN_BY_LABEL["54"])).toEqual(omitIdentity(OUT_BY_LABEL["42"]));
    expect(omitIdentity(IN_BY_LABEL["55"])).toEqual(omitIdentity(OUT_BY_LABEL["43"]));
    expect(omitIdentity(IN_BY_LABEL["56"])).toEqual(omitIdentity(OUT_BY_LABEL["44"]));
  });

  it("keeps zoom motion identical across both complete prescriptions", () => {
    expect(EXT_IN.var).toEqual(EXT_OUT.var);
    expect(EXT_IN.varLabels).toEqual(EXT_OUT.varLabels);
  });
});
