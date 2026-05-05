import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import { doLayout, thick, traceToImage } from "../src/optics/optics.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import MinoltaVarisoftRaw from "../src/lens-data/minolta/MinoltaVarisoft85mmf28.data.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function buildMinoltaVarisoft(): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...MinoltaVarisoftRaw } as LensData);
}

function surfaceIndex(L: RuntimeLens, label: string): number {
  const index = L.S.findIndex((surface) => surface.label === label);
  expect(index, `surface ${label} should exist`).toBeGreaterThanOrEqual(0);
  return index;
}

function fixedImagePlanePositions(L: RuntimeLens, focusT: number): number[] {
  const ref = doLayout(0, 0, L);
  const cur = doLayout(focusT, 0, L);
  const dz = ref.imgZ - cur.imgZ;
  return cur.z.map((z) => z + dz);
}

describe("Minolta Varisoft 85mm f/2.8 focus model", () => {
  it("advances Group AI while keeping AII, B, BFD, and dB0 fixed", () => {
    const L = buildMinoltaVarisoft();
    const dA7 = surfaceIndex(L, "7");
    const dB0 = surfaceIndex(L, "9");
    const bfd = surfaceIndex(L, "11");

    expect(thick(dA7, 1, 0, L)).toBeGreaterThan(thick(dA7, 0, 0, L));
    expect(thick(dB0, 1, 0, L)).toBeCloseTo(thick(dB0, 0, 0, L), 8);
    expect(thick(bfd, 1, 0, L)).toBeCloseTo(thick(bfd, 0, 0, L), 8);

    const infinityZ = fixedImagePlanePositions(L, 0);
    const closeZ = fixedImagePlanePositions(L, 1);
    const focusTravel = thick(dA7, 1, 0, L) - thick(dA7, 0, 0, L);

    for (const label of ["1", "STO", "7"]) {
      const index = surfaceIndex(L, label);
      expect(closeZ[index], `${label} should move objectward by the dA7 increase`).toBeCloseTo(
        infinityZ[index] - focusTravel,
        8,
      );
    }

    for (const label of ["8", "10", "11"]) {
      const index = surfaceIndex(L, label);
      expect(closeZ[index], `${label} should remain fixed during focus`).toBeCloseTo(infinityZ[index], 8);
    }
  });

  it("matches the patent close-focus magnification when dA7 is widened", () => {
    const L = buildMinoltaVarisoft();
    const magnification = traceToImage(1, 0, 1, 0, L);
    const raySensitivity = traceToImage(0, 1, 1, 0, L);

    expect(magnification).toBeCloseTo(-0.11, 2);
    expect(-raySensitivity / magnification).toBeGreaterThan(0);
  });
});
