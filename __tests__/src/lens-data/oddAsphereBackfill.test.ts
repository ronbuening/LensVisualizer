import { describe, expect, it } from "vitest";
import { conicPolySag, sag } from "../../../src/optics/optics.js";
import ZeissTouit from "../../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.js";
import FujifilmGF3570 from "../../../src/lens-data/fujifilm/FujifilmGF3570mmf4556.data.js";
import FujifilmGFX100RF from "../../../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.js";
import type { AsphericCoefficients } from "../../../src/types/optics.js";

/* Guards the exact odd/even patent transcriptions that replaced the even-order
 * least-squares refits. Expected departures are the values quoted in each
 * companion analysis file, so a failure points at a transcription typo. */

function surfaceR(lens: { surfaces: readonly { label: string; R: number }[] }, label: string): number {
  const surface = lens.surfaces.find((s) => s.label === label);
  if (!surface) throw new Error(`surface ${label} not found`);
  return surface.R;
}

/** Polynomial departure from the base sphere in µm (all tested surfaces have K = 0 conic bases except 15A). */
function departureMicrons(h: number, R: number, asph: AsphericCoefficients): number {
  return (conicPolySag(h, R, asph) - sag(h, R)) * 1000;
}

describe("Zeiss Touit 50mm f/2.8 Macro odd-order backfill", () => {
  it("matches the analysis-quoted polynomial departures at the data-file semi-diameters", () => {
    const asph4A = ZeissTouit.asph["4A"];
    const asph7A = ZeissTouit.asph["7A"];
    expect(Math.abs(departureMicrons(12.0, surfaceR(ZeissTouit, "4A"), asph4A) - -92.27)).toBeLessThanOrEqual(0.01);
    expect(Math.abs(departureMicrons(7.7, surfaceR(ZeissTouit, "7A"), asph7A) - 40.01)).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm GF35-70mm odd-order backfill", () => {
  it("matches the analysis-quoted patent edge departures", () => {
    const asph11A = FujifilmGF3570.asph["11A"];
    const asph12A = FujifilmGF3570.asph["12A"];
    expect(Math.abs(departureMicrons(9.6, surfaceR(FujifilmGF3570, "11A"), asph11A) - 1159.987)).toBeLessThanOrEqual(
      0.01,
    );
    expect(Math.abs(departureMicrons(9.8, surfaceR(FujifilmGF3570, "12A"), asph12A) - 1459.367)).toBeLessThanOrEqual(
      0.01,
    );
  });
});

describe("Fujifilm GFX100RF 35mm odd-order backfill", () => {
  // The even-order least-squares refit that surface 15A stored before the engine
  // supported odd orders; the analysis documents a 0.04 µm max residual against
  // the exact patent polynomial over h = 0..13.0 mm.
  const RETIRED_15A_REFIT: AsphericCoefficients = {
    K: 6.0896629652,
    A4: -1.273921812305e-4,
    A6: 6.225308367471e-7,
    A8: -5.270017831864e-9,
    A10: 8.497988104132e-11,
    A12: -8.76772023499e-13,
    A14: 4.28966910494e-15,
    A16: -5.297188127984e-18,
    A18: -2.446383729733e-20,
    A20: 6.062789672869e-23,
  };

  it("stays within the documented refit residual of the retired even-order surface", () => {
    const R = surfaceR(FujifilmGFX100RF, "15A");
    const exact = FujifilmGFX100RF.asph["15A"];
    let maxResidualMicrons = 0;
    const samples = 97;
    for (let i = 0; i < samples; i++) {
      const h = (13.0 * i) / (samples - 1);
      const residual = Math.abs(conicPolySag(h, R, exact) - conicPolySag(h, R, RETIRED_15A_REFIT)) * 1000;
      maxResidualMicrons = Math.max(maxResidualMicrons, residual);
    }
    expect(maxResidualMicrons).toBeLessThanOrEqual(0.05);
    expect(maxResidualMicrons).toBeGreaterThan(0);
  });
});
