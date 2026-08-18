import { describe, expect, it } from "vitest";
import afI300 from "../../../src/lens-data/nikon/NikonAFINikkor300mmf28DIFED.data.js";
import afI400 from "../../../src/lens-data/nikon/NikonAFINikkorED400mmf28DIF.data.js";
import afI600 from "../../../src/lens-data/nikon/NikonAFINikkor600mmf4DIFED.data.js";
import micro40 from "../../../src/lens-data/nikon/NikonAFSDXMicroNikkor40mmf28G.data.js";
import micro85 from "../../../src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.js";
import zoom18200 from "../../../src/lens-data/nikon/NikonAFSDXVRZoomNikkor18200mmf3556GIFED.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import type { LensData } from "../../../src/types/optics.js";

const lenses = [afI300, afI400, afI600, micro40, micro85, zoom18200];

function inferredApdNames(lens: (typeof lenses)[number]): string[] {
  return lens.elements.filter((element) => "apd" in element && element.apd === "inferred").map(({ name }) => name);
}

function movementShifts(
  lens: (typeof lenses)[number],
  mode: "focus" | "zoom",
  focusT: number,
  zoomT: number,
): Record<string, number> {
  const profile = computeGroupMovementProfile(buildLens({ ...LENS_DEFAULTS, ...lens } as LensData), mode, {
    focusT,
    zoomT,
  });
  return Object.fromEntries(profile.series.map(({ group, currentPoint }) => [group.label, currentPoint.shiftMm]));
}

describe("Nikon AF-I and DX batch diagram metadata", () => {
  it("uses Nikon's product-name spacing", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "NIKON AF-I NIKKOR 300mm f/2.8D IF-ED",
      "NIKON AF-I NIKKOR 400mm f/2.8D IF-ED",
      "NIKON AF-I NIKKOR 600mm f/4D IF-ED",
      "NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8G",
      "NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR",
      "NIKON AF-S DX VR ZOOM-NIKKOR 18-200mm f/3.5-5.6G IF-ED",
    ]);
  });

  it("marks only the production-count-correlated ED positions as inferred", () => {
    expect(inferredApdNames(afI300)).toEqual(["L11", "L12", "L31"]);
    expect(inferredApdNames(afI400)).toEqual(["L11", "L12", "L3a"]);
    expect(inferredApdNames(afI600)).toEqual(["L11", "L12", "L31"]);
    expect(inferredApdNames(micro40)).toEqual([]);
    expect(inferredApdNames(micro85)).toEqual(["L33"]);
    expect(inferredApdNames(zoom18200)).toEqual(["L12", "L32"]);
  });

  it("maps every physical glass element to a compatible dispersion curve", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        if (element.type === "Aspheric Resin Layer") continue;
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }
    expect(zoom18200.elements.filter(({ glass }) => glass.startsWith("Unmatched")).map(({ name }) => name)).toEqual([
      "L21r",
      "L34r",
    ]);
  });

  it("keeps source physical numbering and readable subgroup tags on the 18-200mm", () => {
    expect(zoom18200.elements.map(({ id, diagramLabel }) => diagramLabel ?? String(id))).toEqual([
      "1",
      "2",
      "3",
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11r",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ]);
    expect(zoom18200.doublets.map(({ text }) => text)).toEqual(["D1", "H21", "D2", "VR", "D4"]);
    expect(afI600.groups.map(({ text }) => text)).toEqual(["G1", "G2 (FOCUS)", "G3"]);
    expect(micro40.groups.map(({ text }) => text)).toEqual(["G1 (+) FOCUS", "G2 (+) FOCUS", "G3 (−) FIXED"]);
  });

  it("preserves the published prime-lens focus directions", () => {
    expect(movementShifts(afI300, "focus", 1, 0)["G2 (FOCUS)"]).toBeCloseTo(10.8889, 4);
    expect(movementShifts(afI400, "focus", 1, 0)["G2 (FOCUS)"]).toBeCloseTo(17.8317, 4);
    expect(movementShifts(afI600, "focus", 1, 0)["G2 (FOCUS)"]).toBeCloseTo(11.256314825, 6);

    const micro40Focus = movementShifts(micro40, "focus", 1, 0);
    expect(micro40Focus["G1 (+) FOCUS"]).toBeCloseTo(-26.8627, 4);
    expect(micro40Focus["G2 (+) FOCUS"]).toBeCloseTo(-24.4988, 4);
    expect(micro40Focus["G3 (−) FIXED"]).toBeCloseTo(0, 6);

    const micro85Focus = movementShifts(micro85, "focus", 1, 0);
    expect(micro85Focus["G2 (-) FOCUS"]).toBeCloseTo(15.28499, 4);
    expect(micro85Focus["G3 (+) FOCUS"]).toBeCloseTo(-12.99224, 4);
  });

  it("preserves objectward focus and wide-to-tele travel for the 18-200mm", () => {
    expect(movementShifts(zoom18200, "focus", 1, 0)["G2 (-) / FOCUS"]).toBeCloseTo(-0.954821883, 6);
    expect(movementShifts(zoom18200, "focus", 1, 1)["G2 (-) / FOCUS"]).toBeCloseTo(-9.421757313, 6);

    expect(movementShifts(zoom18200, "zoom", 0, 1)).toMatchObject({
      "G1 (+)": expect.closeTo(-64.35736, 4),
      "G2 (-) / FOCUS": expect.closeTo(-6.42736, 4),
      "G3 (+)": expect.closeTo(-34.02736, 4),
      "G4 (+)": expect.closeTo(-41.12736, 4),
    });
  });
});
