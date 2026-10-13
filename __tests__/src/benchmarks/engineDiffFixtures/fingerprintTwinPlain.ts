/**
 * Fingerprint twin, plain half: a synthetic aspheric singlet written the way a lens file is.
 *
 * `fingerprintTwinRestyled.ts` holds the same prescription with other comments, layout, number spellings, key order
 * and explicit defaults. The two must share a semantic fingerprint and capture to identical payloads. It is not a
 * catalog lens; the values are chosen only to build and to give each rule something to act on.
 */

import type { LensDataInput } from "../../../../src/types/optics.js";

const LENS = {
  key: "engine-diff-fingerprint-twin",
  maker: null,
  name: "ENGINE DIFF Fingerprint Twin 50mm f/2.8",
  subtitle: "Synthetic singlet",
  nominalFno: 2.8,
  closeFocusM: 0.5,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  yScFill: 0.55,
  apertureBlades: 7,
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.17,
      glass: "N-BK7",
    },
  ],
  surfaces: [
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 8 },
    { label: "1A", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
    { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
  ],
  asph: {
    "1A": { K: -0.5, A4: 1.25e-6, A6: -2e-10, A8: 0, A10: 0, A12: 0, A14: 0 },
  },
  var: { "2": [80, 84] },
  varLabels: [["2", "BF"]],
} satisfies LensDataInput;

export default LENS;
