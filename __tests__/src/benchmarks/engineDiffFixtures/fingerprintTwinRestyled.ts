/**
 * Fingerprint twin, restyled half: the prescription of `fingerprintTwinPlain.ts` and nothing else.
 *
 * Every difference from the plain half is one the semantic fingerprint must ignore: comments, layout, the spelling of
 * a number, key order, a lens default written out, and a member written as `undefined`. The object is exempt from
 * Prettier on purpose, since its layout is part of what is tested.
 */

import type { LensDataInput } from "../../../../src/types/optics.js";

// prettier-ignore
const LENS = {
  /* Explicit lens defaults. */
  visible: true,
  rayFractions: [-0.83, -0.5, -0.17, 0.17, 0.5, 0.83],
  rayLeadFrac: 0.35, lensShiftFrac: 0.08, offAxisFieldFrac: 0.6,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],
  svgW: 1080, svgH: 490, scFill: 0.55, gapSagFrac: 0.90, maxAspectRatio: 1.6,
  focusStep: 0.004, apertureStep: 4e-3, maxFstop: 16,

  // Variable gaps first, surfaces last.
  varLabels: [["2", "BF"]],
  var: { "2": [80.0, 84.00] },
  asph: {
    "1A": { A14: 0, A12: 0, A10: 0, A8: 0, A6: -0.0000000002, A4: 0.00000125, K: -.5 },
  },
  apertureBlades: 7,
  yScFill: 0.550,
  fstopSeries: [2.8, 4.0, 5.6, 8.0, 11.0, 16.0],
  closeFocusM: 5e-1,
  nominalFno: 2.80,
  subtitle: 'Synthetic singlet',
  name: "ENGINE DIFF Fingerprint Twin 50mm f/2.8", // display name
  maker: null,
  key: "engine-diff-fingerprint-twin",
  elements: [
    { glass: "N-BK7", vd: 64.170, nd: 1.51680, type: "Biconvex Positive", label: "Element 1", name: "L1", id: 1, cemented: undefined },
  ],
  surfaces: [
    { sd: 8,  elemId: 0, nd: 1.0,    d: 1.0,  R: 1000000000000000, label: "STO" }, // aperture stop
    { sd: 15, elemId: 1, nd: 1.5168, d: 5.0,  R: 50.0,             label: "1A" },
    { sd: 15, elemId: 0, nd: 1.0,    d: 80.0, R: -50.0,            label: "2" },
  ],
} satisfies LensDataInput;

export default LENS;
