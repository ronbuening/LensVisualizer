import type { LensDataInput } from "../../types/optics.js";

/**
 * Leica Macro-Elmarit-R 60mm f/2.8
 *
 * Source prescription: US 3,552,833, sole numerical example / claim table.
 * The patent uses e-line indices (ne, νe); the renderer schema stores them in nd/vd fields.
 *
 * Scaling: the normalized patent prescription computes EFL = 0.999134763 because of four-decimal
 * prescription rounding. All radii, axial distances, and inferred semi-diameters are scaled by
 * 61.45317155 so the paraxial EFL equals Leica's published 61.4 mm focal length.
 *
 * Transcription note: the upper patent table prints d3 = 0.0339, but the claim table prints d3 = 0.0331.
 * The latter is used here because it is the only value that reproduces both the patent's Σ(d+a)=0.5871
 * and s' = 0.6838 through an independent paraxial trace.
 *
 * Stop and semi-diameters: the aperture stop is inserted inside a2. Its position is inferred from
 * Leica's published entrance-pupil position of 24.2 mm from the first surface. Semi-diameters are
 * inferred from f/2.8 marginal rays plus the patent's ±18° design half-field, then trimmed where
 * necessary to satisfy spherical-rim, edge-thickness, and thin-air-gap constraints. Native close focus
 * is modeled as unit focusing by increasing the final BFD by 0.5 × 61.4 mm for the production 1:2 limit.
 */

const LENS_DATA = {
  key: "leica-macro-elmarit-r-60mm-f28",
  maker: "Leica",
  name: "Leica Macro-Elmarit-R 60mm f/2.8",
  subtitle: "US 3,552,833 — Ernst Leitz / Heinz Marquardt",
  specs: [
    "6 elements / 5 groups",
    "f = 61.4 mm design, 60 mm nominal",
    "F/2.8",
    "40° diagonal field (published)",
    "All-spherical modified Gauss",
    "Unit focus",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 61.4,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["leica-r"],
  imageFormat: "135-full-frame",
  patentYear: 1971,
  elementCount: 6,
  groupCount: 5,
  focusDescription:
    "Unit focus. The production lens focuses from infinity to 0.27 m / 1:2 natively, and reaches 1:1 with the Macro-Adapter-R.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.74795,
      vd: 44.5,
      fl: 98.92,
      glass: "LAF2 / S-LAM2 class (e-line catalog match; patent vendor not named)",
      role: "Front positive meniscus collector; high-index moderate-dispersion glass reduces curvature for the required front power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.69282,
      vd: 49.5,
      fl: 32.7,
      glass: "Unmatched (693/495 e-line; positive member of front cemented doublet)",
      cemented: "D1",
      role: "Positive member of the cemented negative meniscus doublet before the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.67764,
      vd: 32.0,
      fl: -21.3,
      glass: "E-FD5 / S-TIM25 class (e-line catalog match; patent vendor not named)",
      cemented: "D1",
      role: "High-dispersion negative member of the front cemented doublet; supplies most of the doublet's negative power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7407,
      vd: 26.2,
      fl: -70.29,
      glass: "Unmatched dense flint (741/262 e-line; no close current HOYA/OHARA match)",
      role: "Rear-side negative meniscus immediately behind the stop; strong field-flattening and chromatic overcorrection member.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62287,
      vd: 60.1,
      fl: 69.83,
      glass: "BACD16 / S-BSM16 class (e-line catalog match; patent vendor not named)",
      role: "First rear positive meniscus; balances the L4 flint power while limiting chromatic residuals.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.61521,
      vd: 58.4,
      fl: 66.54,
      glass: "BACD4 class (e-line catalog match; patent vendor not named)",
      role: "Final positive meniscus and rear field-correcting element.",
    },
  ],

  surfaces: [
    { label: "1", R: 39.1641, d: 3.6872, nd: 1.74795, elemId: 1, sd: 20.0 },
    { label: "2", R: 79.8584, d: 2.3967, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "3", R: 17.7907, d: 6.3235, nd: 1.69282, elemId: 2, sd: 14.0 },
    { label: "4", R: 70.8002, d: 2.0341, nd: 1.67764, elemId: 3, sd: 12.8 },
    { label: "5", R: 11.8482, d: 5.6058, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 8.1228, nd: 1.0, elemId: 0, sd: 7.36 },
    { label: "6", R: -12.4135, d: 2.2062, nd: 1.7407, elemId: 4, sd: 11.0 },
    { label: "7", R: -17.5326, d: 0.1721, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "8", R: -70.2287, d: 2.6548, nd: 1.62287, elemId: 5, sd: 12.5 },
    { label: "9", R: -27.2483, d: 0.1721, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "10", R: -36.6937, d: 2.7039, nd: 1.61521, elemId: 6, sd: 12.8 },
    { label: "11", R: -19.8924, d: 42.0224, nd: 1.0, elemId: 0, sd: 12.8 },
  ],

  asph: {},
  var: {
    "11": [42.0224, 72.7224],
  },
  varLabels: [["11", "BF"]],
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  closeFocusM: 0.27,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
