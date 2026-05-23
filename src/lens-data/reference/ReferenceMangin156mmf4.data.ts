import type { LensDataInput } from "../../types/optics.js";

/**
 * Reference Mangin Mirror — single-element catadioptric demo.
 *
 * Classical Mangin design from W.J. Smith, *Modern Optical Engineering*
 * (3rd ed., 1990, §13.5): a meniscus glass element with a silvered rear
 * surface. Light refracts through the front surface, reflects off the
 * silvered back, and refracts back out through the front in a single trip.
 *
 * Prescription (BK7, ~156 mm focal length):
 *   R₁ = −147.69 mm   (front refractive surface, concave toward incoming light)
 *   R₂ = −228.34 mm   (silvered rear, concave toward incoming light)
 *   t  =    8.00 mm   (axial thickness)
 *   nd =    1.517     (Schott BK7)
 *
 * Marked `visible: false` because the build pipeline does not yet handle
 * the negative-EFL / image-plane-behind-the-lens conventions that
 * catadioptrics require for full analysis-tab support. Production code
 * paths still load and trace this lens via `buildLens` (verified by the
 * mirror regression tests).
 */
const LENS_DATA = {
  key: "reference-mangin-156f4",
  maker: "Reference",
  visible: false,
  name: "REFERENCE MANGIN MIRROR 156 mm f/4",
  subtitle: "Single-element catadioptric (Smith MOE 3rd ed., §13.5)",
  specs: ["1 ELEMENT", "f ≈ 156 mm", "F/4"],

  focalLengthMarketing: 156,
  apertureMarketing: 4,
  nominalFno: 4,

  elements: [
    {
      id: 1,
      name: "L_I",
      label: "Mangin meniscus",
      type: "Mangin Mirror (silvered rear)",
      nd: 1.517,
      vd: 64.17,
      glass: "BK7 (Schott)",
      role: "Refracts at front, reflects off silvered rear, refracts again on exit",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 20 },
    { label: "1", R: -147.69, d: 8, nd: 1.517, elemId: 1, sd: 30 },
    {
      label: "M1",
      R: -228.34,
      d: 200,
      nd: 1.517,
      elemId: 1,
      sd: 30,
      reflect: { kind: "second" },
    },
  ],

  closeFocusM: 10,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],

  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
