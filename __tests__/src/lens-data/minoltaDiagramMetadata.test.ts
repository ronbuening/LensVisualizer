import { describe, expect, it } from "vitest";
import af100 from "../../../src/lens-data/minolta/MinoltaAF100mmf2.data.js";
import stf from "../../../src/lens-data/minolta/MinoltaSTF135mmf28T45.data.js";
import af400 from "../../../src/lens-data/minolta/MinoltaAF400mmf45APOG.data.js";
import af80200 from "../../../src/lens-data/minolta/MinoltaAF80200mmf28APO.data.js";
import fisheye from "../../../src/lens-data/minolta/MinoltaMCFishEyeRokkorOK16mmf28.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";

function displayedElementLabels(lens: { elements: readonly { id: number; diagramLabel?: string }[] }): string[] {
  return lens.elements.map((element) => element.diagramLabel ?? String(element.id));
}

describe("Minolta patent diagram metadata", () => {
  it("uses the source element identifiers where the patent names each physical lens", () => {
    expect(displayedElementLabels(af100)).toEqual(["L1", "L2", "L3", "L4", "L5", "L6", "L7"]);
    expect(displayedElementLabels(stf)).toEqual(["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"]);
    expect(displayedElementLabels(af400)).toEqual(["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"]);
  });

  it("preserves the fisheye's source G numbering across the omitted G6 filter", () => {
    expect(displayedElementLabels(fisheye)).toEqual(["G1", "G2", "G3", "G4", "G5", "G7", "G8", "G9", "G10", "G11"]);
  });

  it("marks exact 493836-family glass as APD-inferred without inventing partial dispersion", () => {
    for (const element of [...af400.elements.slice(0, 2), af80200.elements[11]]) {
      expect(element.apd).toBe("inferred");
      expect("dPgF" in element).toBe(false);
    }
  });

  it("uses a coordinate-compatible catalog curve for the AF 400mm dense flint", () => {
    const element = af400.elements[6];
    expect(resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name).toBe("J-SF03");
  });

  it("models the STF bulk ND element from its patent Abbe coordinates without inventing a catalog glass", () => {
    const element = stf.elements[4];
    const lens = buildLens({ ...LENS_DEFAULTS, ...stf } as LensData);
    const dispersion = lens.indexByIdx[lens.labelIdx["9"]];

    expect(element.glass).toMatch(/^507589 — bulk absorbing ND glass/);
    expect(resolveCompatibleGlass(element.glass, element.nd, element.vd)).toBeNull();
    expect(dispersion.quality).toBe("abbe");
    expect(dispersion.glassEntry).toBeUndefined();
    expect(dispersion.fn("R")).not.toBe(dispersion.fn("B"));
  });
});
