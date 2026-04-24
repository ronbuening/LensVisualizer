import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import { conjugateK, thick } from "../src/optics/optics.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import CanonRF24105Raw from "../src/lens-data/canon/CanonRF24105mmf4L.data.js";
import type { LensData } from "../src/types/optics.js";

function buildCanonRF24105() {
  return buildLens({ ...LENS_DEFAULTS, ...CanonRF24105Raw } as LensData);
}

describe("Canon RF 24-105mm f/4 L focus model", () => {
  it("moves L4 rearward with equal-and-opposite D27/D29 gap changes", () => {
    const L = buildCanonRF24105();
    const d27Idx = L.labelIdx["26A"];
    const d29Idx = L.labelIdx["28"];

    for (const zoomT of [0, 0.5, 1]) {
      const d27Inf = thick(d27Idx, 0, zoomT, L);
      const d27Close = thick(d27Idx, 1, zoomT, L);
      const d29Inf = thick(d29Idx, 0, zoomT, L);
      const d29Close = thick(d29Idx, 1, zoomT, L);

      expect(d27Close, `D27 should expand at zoomT=${zoomT}`).toBeGreaterThan(d27Inf);
      expect(d29Close, `D29 should contract at zoomT=${zoomT}`).toBeLessThan(d29Inf);
      expect(d27Close + d29Close, `L4 envelope should stay fixed at zoomT=${zoomT}`).toBeCloseTo(d27Inf + d29Inf, 8);
    }
  });

  it("produces active close-focus convergence at all tabulated zoom positions", () => {
    const L = buildCanonRF24105();
    const targetK = 1 / 450;

    for (const zoomT of [0, 0.5, 1]) {
      const kInfinity = conjugateK(0, zoomT, L);
      const kClose = conjugateK(1, zoomT, L);

      expect(Math.abs(kInfinity), `infinity focus should stay neutral at zoomT=${zoomT}`).toBeLessThan(1e-8);
      expect(kClose, `close focus should be active at zoomT=${zoomT}`).toBeGreaterThan(1e-3);
      expect(kClose, `close focus should match the MFD-derived estimate at zoomT=${zoomT}`).toBeCloseTo(targetK, 4);
    }
  });
});
