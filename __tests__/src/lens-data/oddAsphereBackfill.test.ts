import { describe, expect, it } from "vitest";
import { conicPolySag, sag } from "../../../src/optics/optics.js";
import ZeissTouit from "../../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.js";
import FujifilmGF100200 from "../../../src/lens-data/fujifilm/FujifilmGF100200mmf56.data.js";
import FujifilmGF2035 from "../../../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.js";
import FujifilmGF23 from "../../../src/lens-data/fujifilm/FujifilmGF23mmf4.data.js";
import FujifilmGF3264 from "../../../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.js";
import FujifilmGF3570 from "../../../src/lens-data/fujifilm/FujifilmGF3570mmf4556.data.js";
import FujifilmGF45 from "../../../src/lens-data/fujifilm/FujifilmGF45mmf28.data.js";
import FujifilmGFX100RF from "../../../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.js";
import FujifilmX70 from "../../../src/lens-data/fujifilm/FujifilmX7018mmf28.data.js";
import FujifilmXF1655 from "../../../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.js";
import FujifilmXF1655II from "../../../src/lens-data/fujifilm/FujifilmXF16555mmf28RLMWRII.data.js";
import FujifilmXF18 from "../../../src/lens-data/fujifilm/FujifilmXF18mmf2.data.js";
import FujifilmXF23 from "../../../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.js";
import FujifilmXF23F2 from "../../../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.js";
import FujifilmXF33 from "../../../src/lens-data/fujifilm/FujifilmXF33mmf14RLMWR.data.js";
import FujifilmXF35 from "../../../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.js";
import FujifilmXF50 from "../../../src/lens-data/fujifilm/FujifilmXF50f1.data.js";
import FujifilmXF56 from "../../../src/lens-data/fujifilm/FujifilmXF56mmf12.data.js";
import FujifilmXF60 from "../../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.js";
import FujifilmX100 from "../../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.js";
import FujifilmX100V from "../../../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.js";
import Sigma1018 from "../../../src/lens-data/sigma/Sigma1018mmf28DCDN.data.js";
import Sigma1424 from "../../../src/lens-data/sigma/Sigma1424mmf28DGHSM.data.js";
import TamronB028 from "../../../src/lens-data/tamron/TamronB02818400mmf3563.data.js";
import type { AsphericCoefficients } from "../../../src/types/optics.js";

/* Guards the exact odd/even patent transcriptions that replaced the even-order
 * least-squares refits. Expected departures are the values quoted in each
 * companion analysis file, so a failure points at a transcription typo. */

interface BackfillLens {
  surfaces: readonly { label: string; R: number }[];
  asph: Record<string, AsphericCoefficients>;
}

function surfaceR(lens: BackfillLens, label: string): number {
  const surface = lens.surfaces.find((s) => s.label === label);
  if (!surface) throw new Error(`surface ${label} not found`);
  return surface.R;
}

/** Exact aspheric departure from the paraxial sphere in µm. */
function departureMicrons(h: number, R: number, asph: AsphericCoefficients): number {
  return (conicPolySag(h, R, asph) - sag(h, R)) * 1000;
}

/** One row per backfilled lens: [surface label, semi-diameter h (mm), analysis-quoted departure (µm)]. */
type DepartureCase = readonly [label: string, h: number, expectedMicrons: number];

const BACKFILLS: readonly (readonly [name: string, lens: BackfillLens, cases: readonly DepartureCase[]])[] = [
  // 6A departure taken at the figure-refined semi-diameter.
  ["Tamron B028 18-400mm", TamronB028, [["6A", 14.0, 212.39]]],
  // Polynomial departures at the data-file semi-diameters.
  [
    "Zeiss Touit 50mm f/2.8 Macro",
    ZeissTouit,
    [
      ["4A", 12.0, -92.27],
      ["7A", 7.7, 40.01],
    ],
  ],
  [
    "Fujifilm GF35-70mm",
    FujifilmGF3570,
    [
      ["11A", 9.6, 1159.987],
      ["12A", 9.8, 1459.367],
    ],
  ],
  [
    "Fujifilm X70 18.5mm",
    FujifilmX70,
    [
      ["8A", 4.75, 247.177],
      ["9A", 5.15, 367.516],
      ["10A", 9.3, -1823.797],
      ["11A", 9.6, -1653.712],
    ],
  ],
  [
    "Fujifilm XF50mm f/1.0",
    FujifilmXF50,
    [
      ["15A", 10.7, 1230.181],
      ["16A", 9.9, 632.133],
    ],
  ],
  [
    "Fujifilm XF56mm f/1.2",
    FujifilmXF56,
    [
      ["13A", 6.0, -261.595],
      ["14A", 6.0, -211.838],
    ],
  ],
  [
    "Fujifilm XF16-55mm f/2.8",
    FujifilmXF1655,
    [
      ["6A", 11.5, 3.733],
      ["7A", 10.8, -416.8],
      ["13A", 10.4, -146.557],
      ["14A", 10.1, -15.348],
      ["22A", 11.4, -250.978],
      ["23A", 11.4, 471.106],
    ],
  ],
  [
    "Sigma 14-24mm f/2.8 DG HSM",
    Sigma1424,
    [
      ["5A", 17.5, 571.91],
      ["6A", 17.5, 881.809],
    ],
  ],
  [
    "Fujifilm XF18mm f/2",
    FujifilmXF18,
    [
      ["9A", 6.3, -82.367],
      ["10A", 6.0, 55.663],
      ["13A", 4.8, 473.799],
      ["14A", 6.5, 1034.025],
    ],
  ],
  // Analysis quotes the scaled edge departures (patent example rescaled to 23 mm).
  [
    "Fujifilm XF23mm f/1.4 R LM WR",
    FujifilmXF23,
    [
      ["21A", 11.8781, -115.498],
      ["22A", 11.8781, 1057.587],
      ["25A", 11.97546, 222.423],
      ["26A", 11.97546, 354.395],
    ],
  ],
  [
    "Fujifilm XF35mm f/1.4 R",
    FujifilmXF35,
    [
      ["10A", 8.4, -1257.304],
      ["11A", 6.5, -149.709],
    ],
  ],
  [
    "Fujifilm GF23mm f/4",
    FujifilmGF23,
    [
      ["3A", 14.5, 688.665],
      ["4A", 12.2, -631.897],
      ["18A", 16.5, -3174.943],
      ["19A", 16.8, -596.891],
    ],
  ],
  [
    "Fujifilm XF16-55mm f/2.8 R LM WR II",
    FujifilmXF1655II,
    [
      ["6A", 12.5, 377.281],
      ["7A", 10.1, 16.939],
      ["14A", 9.8, -126.997],
      ["15A", 10.2, 102.315],
      ["22A", 11.4, -486.404],
      ["23A", 11.2, -0.097],
      ["27A", 14.7, -451.562],
      ["28A", 14.9, -101.954],
    ],
  ],
  [
    "Fujifilm XF60mm f/2.4 R Macro",
    FujifilmXF60,
    [
      ["12A", 8.5, 48.326],
      ["13A", 8.2, 63.515],
    ],
  ],
  [
    "Fujifilm XF33mm f/1.4 R LM WR",
    FujifilmXF33,
    [
      ["20A", 11.0, -138.385],
      ["21A", 11.6, 265.275],
      ["25A", 10.7, -158.032],
      ["26A", 10.9, 98.897],
    ],
  ],
  [
    "Fujifilm XF23mm f/2 R WR",
    FujifilmXF23F2,
    [
      ["7A", 7.2, -262.925],
      ["8A", 7.13, 164.806],
      ["13A", 8.0, 537.774],
      ["14A", 7.9, 545.702],
    ],
  ],
  [
    "Fujifilm GF45mm f/2.8",
    FujifilmGF45,
    [
      ["16A", 17.0, 87.712],
      ["17A", 19.0, 1594.924],
    ],
  ],
  [
    "Fujifilm GF32-64mm f/4",
    FujifilmGF3264,
    [
      ["6A", 16.0, -1519.78],
      ["15A", 10.5, -488.913],
      ["16A", 10.5, 218.616],
      ["22A", 12.1, 155.099],
      ["23A", 12.12, 204.597],
    ],
  ],
  [
    "Fujifilm GF20-35mm f/4",
    FujifilmGF2035,
    [
      ["3A", 15.0, 577.975],
      ["4A", 14.0, -37.733],
      ["10A", 8.4, 308.149],
      ["11A", 8.4, 329.393],
      ["17A", 10.5, -96.106],
      ["18A", 10.5, 59.308],
      ["22A", 13.4, -1351.665],
      ["23A", 13.865, -542.723],
    ],
  ],
  [
    "Fujifilm GF100-200mm f/5.6",
    FujifilmGF100200,
    [
      ["31A", 14.5, 971.94],
      ["32A", 14.5, 382.355],
    ],
  ],
  [
    "Fujifilm X100V 23mm f/2",
    FujifilmX100V,
    [
      ["7A", 6.3, 27.447],
      ["8A", 6.2, 94.584],
      ["9A", 9.4, 662.051],
      ["10A", 9.4, 563.937],
    ],
  ],
  [
    "Fujifilm X100 23mm f/2",
    FujifilmX100,
    [
      ["10A", 6.4, -246.111],
      ["11A", 6.0, -104.58],
    ],
  ],
  ["Sigma 10-18mm f/2.8 DC DN", Sigma1018, [["4A", 10.25, -911.983]]],
];

describe("odd-order asphere backfills", () => {
  it.each(BACKFILLS)("%s matches the analysis-quoted departures", (_name, lens, cases) => {
    for (const [label, h, expectedMicrons] of cases) {
      expect(
        Math.abs(departureMicrons(h, surfaceR(lens, label), lens.asph[label]) - expectedMicrons),
        `${label} at h=${h}`,
      ).toBeLessThanOrEqual(0.01);
    }
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
