import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — OLYMPUS F.ZUIKO AUTO-T 200mm f/5               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,804,494, Example 1 / Claim 2 (Olympus / Ito).   ║
 * ║  Six-element, five-group all-spherical telephoto lens.             ║
 * ║  Focus: unit-focus production lens; patent is infinity-only.       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent prescription is normalized to f = 100 mm. All radii, ║
 * ║    axial thicknesses, air spaces, BFD, and estimated semi-diameters ║
 * ║    are scaled ×2 to represent the 200 mm production lens.          ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    The patent gives F/5 but does not publish a stop surface or stop ║
 * ║    coordinate. The STO surface below is a synthetic diaphragm       ║
 * ║    inserted at the midpoint of the large L4-L5 air gap. Its semi-   ║
 * ║    diameter is paraxially solved to give an entrance-pupil diameter ║
 * ║    consistent with f/5 at the computed EFL.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not list clear apertures. SDs are conservative  ║
 * ║    estimates constrained by the 49 mm production filter thread,     ║
 * ║    the f/5 on-axis marginal bundle, edge thickness, and cross-gap   ║
 * ║    sag clearance. Off-axis full-field vignetting is expected and    ║
 * ║    consistent with the compact barrel.                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "olympus-zuiko-auto-t-200mm-f5",
  maker: "Olympus",
  name: "OLYMPUS F.ZUIKO AUTO-T 200mm f/5",
  subtitle: "US 3,804,494 Example 1 — Olympus / Keiichi Ito",
  specs: ["6 elements / 5 groups", "f ≈ 200.02 mm", "F/5", "2ω = 12°10′", "All-spherical"],

  focalLengthMarketing: 200,
  focalLengthDesign: 200.019,
  apertureMarketing: 5,
  apertureDesign: 5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentYear: 1974,
  elementCount: 6,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.4875,
      vd: 70.2,
      fl: 161.1,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Low-index front positive meniscus; main front collector with low dispersion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7283,
      vd: 28.5,
      fl: -135.37,
      glass: "S-TIH10 (OHARA)",
      nC: 1.72086,
      nF: 1.74645,
      ng: 1.762,
      cemented: "D1",
      role: "High-index dense-flint component of the cemented chromatic-correction doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5014,
      vd: 56.4,
      fl: 78.91,
      glass: "K10 (Schott)",
      cemented: "D1",
      role: "Crown component of the cemented doublet; restores positive power after L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.744,
      vd: 44.8,
      fl: -160.94,
      glass: "S-LAM2 (OHARA)",
      nC: 1.73905,
      nF: 1.75566,
      ng: 1.76506,
      role: "High-index negative corrector closing the positive front group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54.0,
      fl: -39.75,
      glass: "S-LAL8 (OHARA)",
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
      role: "Strong negative relay element in the rear telephoto group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.5,
      fl: 58.78,
      glass: "S-FTM16 (OHARA)",
      nC: 1.58779,
      nF: 1.60458,
      ng: 1.61454,
      role: "Positive light-flint partner to L5 in the rear negative group.",
    },
  ],

  surfaces: [
    { label: "1", R: 54.74, d: 6.0, nd: 1.4875, elemId: 1, sd: 23.0 },
    { label: "2", R: 174.18, d: 3.0, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "3", R: 48.94, d: 3.0, nd: 1.7283, elemId: 2, sd: 21.0 },
    { label: "4", R: 31.86, d: 6.0, nd: 1.5014, elemId: 3, sd: 19.2 },
    { label: "5", R: 153.34, d: 20.0, nd: 1.0, elemId: 0, sd: 19.2 },
    { label: "6", R: 1e15, d: 3.0, nd: 1.744, elemId: 4, sd: 17.5 },
    { label: "7", R: 119.74, d: 25.0, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "STO", R: 1e15, d: 25.0, nd: 1.0, elemId: 0, sd: 8.741 },
    { label: "8", R: -24.1, d: 2.0, nd: 1.713, elemId: 5, sd: 13.0 },
    { label: "9", R: -166.48, d: 1.0, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "10", R: 711.18, d: 5.0, nd: 1.5927, elemId: 6, sd: 14.5 },
    { label: "11", R: -36.54, d: 51.0, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  asph: {},
  var: {
    "11": [51.0, 71.04],
  },
  varLabels: [["11", "BF"]],
  focusDescription:
    "Unit focus. The patent publishes only the infinity prescription; the close-focus BFD is estimated from the 2.5 m production MFD.",
  groups: [
    { text: "FRONT I", fromSurface: "1", toSurface: "7" },
    { text: "REAR II", fromSurface: "8", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  closeFocusM: 2.5,
  nominalFno: 5,
  fstopSeries: [5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
