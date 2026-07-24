import { describe, expect, it } from "vitest";
import { conicPolySag, sag } from "../../../src/optics/optics.js";
import ZeissTouit from "../../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.js";
import FujifilmGF23 from "../../../src/lens-data/fujifilm/FujifilmGF23mmf4.data.js";
import FujifilmGF3570 from "../../../src/lens-data/fujifilm/FujifilmGF3570mmf4556.data.js";
import FujifilmGFX100RF from "../../../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.js";
import FujifilmX70 from "../../../src/lens-data/fujifilm/FujifilmX7018mmf28.data.js";
import FujifilmXF1655 from "../../../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.js";
import FujifilmXF1655II from "../../../src/lens-data/fujifilm/FujifilmXF16555mmf28RLMWRII.data.js";
import FujifilmXF18 from "../../../src/lens-data/fujifilm/FujifilmXF18mmf2.data.js";
import FujifilmXF23 from "../../../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.js";
import FujifilmXF33 from "../../../src/lens-data/fujifilm/FujifilmXF33mmf14RLMWR.data.js";
import FujifilmXF35 from "../../../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.js";
import FujifilmXF50 from "../../../src/lens-data/fujifilm/FujifilmXF50f1.data.js";
import FujifilmXF56 from "../../../src/lens-data/fujifilm/FujifilmXF56mmf12.data.js";
import FujifilmXF60 from "../../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.js";
import Sigma1424 from "../../../src/lens-data/sigma/Sigma1424mmf28DGHSM.data.js";
import type { AsphericCoefficients } from "../../../src/types/optics.js";

/* Guards the exact odd/even patent transcriptions that replaced the even-order
 * least-squares refits. Expected departures are the values quoted in each
 * companion analysis file, so a failure points at a transcription typo. */

function surfaceR(lens: { surfaces: readonly { label: string; R: number }[] }, label: string): number {
  const surface = lens.surfaces.find((s) => s.label === label);
  if (!surface) throw new Error(`surface ${label} not found`);
  return surface.R;
}

/** Exact aspheric departure from the paraxial sphere in µm. */
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

describe("Fujifilm X70 18.5mm odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    expect(
      Math.abs(departureMicrons(4.75, surfaceR(FujifilmX70, "8A"), FujifilmX70.asph["8A"]) - 247.177),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(5.15, surfaceR(FujifilmX70, "9A"), FujifilmX70.asph["9A"]) - 367.516),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(6.25, surfaceR(FujifilmX70, "10A"), FujifilmX70.asph["10A"]) - -628.802),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(6.55, surfaceR(FujifilmX70, "11A"), FujifilmX70.asph["11A"]) - -494.019),
    ).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm XF50mm f/1.0 odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    expect(
      Math.abs(departureMicrons(10.7, surfaceR(FujifilmXF50, "15A"), FujifilmXF50.asph["15A"]) - 1230.181),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(9.9, surfaceR(FujifilmXF50, "16A"), FujifilmXF50.asph["16A"]) - 632.133),
    ).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm XF56mm f/1.2 odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    expect(
      Math.abs(departureMicrons(6.0, surfaceR(FujifilmXF56, "13A"), FujifilmXF56.asph["13A"]) - -261.595),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(6.0, surfaceR(FujifilmXF56, "14A"), FujifilmXF56.asph["14A"]) - -211.838),
    ).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm XF16-55mm f/2.8 odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    const expected = [
      ["6A", 11.5, 3.733],
      ["7A", 10.8, -416.8],
      ["13A", 10.4, -146.557],
      ["14A", 10.1, -15.348],
      ["22A", 11.4, -250.978],
      ["23A", 11.4, 471.106],
    ] as const;
    for (const [label, h, expectedMicrons] of expected) {
      expect(
        Math.abs(departureMicrons(h, surfaceR(FujifilmXF1655, label), FujifilmXF1655.asph[label]) - expectedMicrons),
      ).toBeLessThanOrEqual(0.01);
    }
  });
});

describe("Sigma 14-24mm f/2.8 DG HSM odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    expect(
      Math.abs(departureMicrons(17.5, surfaceR(Sigma1424, "5A"), Sigma1424.asph["5A"]) - 571.91),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(17.5, surfaceR(Sigma1424, "6A"), Sigma1424.asph["6A"]) - 881.809),
    ).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm XF18mm f/2 odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    const expected = [
      ["9A", 6.3, -82.367],
      ["10A", 6.0, 55.663],
      ["13A", 4.8, 473.799],
      ["14A", 6.5, 1034.025],
    ] as const;
    for (const [label, h, expectedMicrons] of expected) {
      expect(
        Math.abs(departureMicrons(h, surfaceR(FujifilmXF18, label), FujifilmXF18.asph[label]) - expectedMicrons),
      ).toBeLessThanOrEqual(0.01);
    }
  });
});

describe("Fujifilm XF23mm f/1.4 R LM WR odd-order backfill", () => {
  it("matches the analysis-quoted exact scaled edge departures", () => {
    const expected = [
      ["21A", 11.8781, -115.498],
      ["22A", 11.8781, 1057.587],
      ["25A", 11.97546, 222.423],
      ["26A", 11.97546, 354.395],
    ] as const;
    for (const [label, h, expectedMicrons] of expected) {
      expect(
        Math.abs(departureMicrons(h, surfaceR(FujifilmXF23, label), FujifilmXF23.asph[label]) - expectedMicrons),
      ).toBeLessThanOrEqual(0.01);
    }
  });
});

describe("Fujifilm XF35mm f/1.4 R odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    expect(
      Math.abs(departureMicrons(8.4, surfaceR(FujifilmXF35, "10A"), FujifilmXF35.asph["10A"]) - -1257.304),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(6.5, surfaceR(FujifilmXF35, "11A"), FujifilmXF35.asph["11A"]) - -149.709),
    ).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm GF23mm f/4 odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    const expected = [
      ["3A", 14.5, 688.665],
      ["4A", 12.2, -631.897],
      ["18A", 16.5, -3174.943],
      ["19A", 16.8, -596.891],
    ] as const;
    for (const [label, h, expectedMicrons] of expected) {
      expect(
        Math.abs(departureMicrons(h, surfaceR(FujifilmGF23, label), FujifilmGF23.asph[label]) - expectedMicrons),
      ).toBeLessThanOrEqual(0.01);
    }
  });
});

describe("Fujifilm XF16-55mm f/2.8 R LM WR II odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    const expected = [
      ["6A", 12.5, 377.281],
      ["7A", 10.1, 16.939],
      ["14A", 9.8, -126.997],
      ["15A", 10.2, 102.315],
      ["22A", 11.4, -486.404],
      ["23A", 11.2, -0.097],
      ["27A", 14.7, -451.562],
      ["28A", 14.9, -101.954],
    ] as const;
    for (const [label, h, expectedMicrons] of expected) {
      expect(
        Math.abs(
          departureMicrons(h, surfaceR(FujifilmXF1655II, label), FujifilmXF1655II.asph[label]) - expectedMicrons,
        ),
      ).toBeLessThanOrEqual(0.01);
    }
  });
});

describe("Fujifilm XF60mm f/2.4 R Macro odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    expect(
      Math.abs(departureMicrons(8.5, surfaceR(FujifilmXF60, "12A"), FujifilmXF60.asph["12A"]) - 48.326),
    ).toBeLessThanOrEqual(0.01);
    expect(
      Math.abs(departureMicrons(8.2, surfaceR(FujifilmXF60, "13A"), FujifilmXF60.asph["13A"]) - 63.515),
    ).toBeLessThanOrEqual(0.01);
  });
});

describe("Fujifilm XF33mm f/1.4 R LM WR odd-order backfill", () => {
  it("matches the analysis-quoted exact edge departures", () => {
    const expected = [
      ["20A", 11.0, -138.385],
      ["21A", 11.6, 265.275],
      ["25A", 10.7, -158.032],
      ["26A", 10.9, 98.897],
    ] as const;
    for (const [label, h, expectedMicrons] of expected) {
      expect(
        Math.abs(departureMicrons(h, surfaceR(FujifilmXF33, label), FujifilmXF33.asph[label]) - expectedMicrons),
      ).toBeLessThanOrEqual(0.01);
    }
  });
});
