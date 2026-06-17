import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon FD 300mm f/4 S.S.C.                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,251,133, Numerical Example 3 (Canon / Tsuji).   ║
 * ║  Six-element, six-group, all-spherical F/4 rear-focusing telephoto.║
 * ║  Focus: L5+L6 movable negative rear sub-group; front group, L4,    ║
 * ║  and the stop remain fixed. Close focus is modeled at Canon's       ║
 * ║  published 3.0 m minimum focus distance.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent prescription is normalized to f = 1. All radii,       ║
 * ║    thicknesses, air spaces, and inferred semi-diameters are scaled  ║
 * ║    ×300 to the marketed 300 mm production lens. The rounded patent ║
 * ║    table ray-traces to EFL = 299.529 mm.                            ║
 * ║                                                                    ║
 * ║  NOTE ON BACK FOCUS:                                               ║
 * ║    The patent lists b.f. = 0.3883, but the rounded prescription     ║
 * ║    computes to paraxial BFD = 0.387595. This file uses the computed ║
 * ║    BFD so infinity rays terminate at the image plane.               ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    The patent does not publish a variable-spacing table. The close  ║
 * ║    state was solved paraxially at a 3.0 m object-to-image-plane     ║
 * ║    distance, corresponding to the patent's 10f close aberration     ║
 * ║    condition at the 300 mm scale. The movable group moves toward    ║
 * ║    the image: STO→R9 increases by 25.016 mm and BFD decreases by    ║
 * ║    the same amount.                                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs are inferred from the      ║
 * ║    f/4 entrance-pupil ray, chief-ray geometry, Canon's 85 mm barrel ║
 * ║    diameter, and renderer constraints: sd/|R| < 0.90, element      ║
 * ║    surface-SD ratio ≤ 1.25, positive edge thickness, and no         ║
 * ║    cross-gap sag overlap beyond 90% of the gap.                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-fd-300mm-f4-ssc",
  maker: "Canon",
  name: "Canon FD 300mm f/4 S.S.C.",
  subtitle: "US 4,251,133 Example 3 — Canon / Tsuji",
  specs: ["6 elements / 6 groups", "f ≈ 299.5 mm", "F/4", "2ω ≈ 8.25°", "all-spherical", "rear focusing"],

  focalLengthMarketing: 300,
  focalLengthDesign: 299.5288,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["canon-fd"],
  imageFormat: "135-full-frame",
  patentYear: 1981,
  elementCount: 6,
  groupCount: 6,
  apertureBlades: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      fl: 194.646,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Front low-dispersion positive collector in the crown-flint-crown front triplet.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72151,
      vd: 29.2,
      fl: -246.113,
      glass: "S-TIH18 (OHARA)",
      nC: 1.71437,
      nF: 1.73905,
      ng: 1.75399,
      role: "Dense-flint achromatizing negative element in the front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      fl: 224.039,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Second low-dispersion positive crown completing the front triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: -997.041,
      glass: "S-BAL35 (OHARA)",
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
      role: "Weak fixed negative meniscus immediately ahead of the movable focusing sub-group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      fl: 112.963,
      glass: "S-FTM16 (OHARA)",
      nC: 1.58779,
      nF: 1.60458,
      ng: 1.61454,
      role: "Positive member of the movable rear focusing sub-group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -67.224,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "High-index negative member that makes the L5+L6 movable sub-group net negative.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 444.42, d: 10.65, nd: 1.48749, elemId: 1, sd: 40.0 },
    { label: "2", R: -119.7, d: 7.11, nd: 1.0, elemId: 0, sd: 39.5 },
    { label: "3", R: -110.13, d: 5.07, nd: 1.72151, elemId: 2, sd: 38.5 },
    { label: "4", R: -295.56, d: 3.06, nd: 1.0, elemId: 0, sd: 38.0 },
    { label: "5", R: 91.83, d: 9.24, nd: 1.48749, elemId: 3, sd: 38.0 },
    { label: "6", R: 557.82, d: 61.92, nd: 1.0, elemId: 0, sd: 37.0 },
    { label: "7", R: 27.81, d: 4.5, nd: 1.58913, elemId: 4, sd: 23.5 },
    { label: "8", R: 24.96, d: 15.96, nd: 1.0, elemId: 0, sd: 22.1 },
    { label: "STO", R: 1e15, d: 1.29, nd: 1.0, elemId: 0, sd: 16.5489 },
    { label: "9", R: 75.9, d: 3.66, nd: 1.5927, elemId: 5, sd: 17.2 },
    { label: "10", R: -557.82, d: 2.04, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "11", R: -866.13, d: 1.71, nd: 1.7725, elemId: 6, sd: 16.5 },
    { label: "12", R: 55.29, d: 116.27854, nd: 1.0, elemId: 0, sd: 16.2 },
  ],

  asph: {},

  var: {
    STO: [1.29, 26.305622],
    "12": [116.27854, 91.262918],
  },

  varLabels: [
    ["STO", "STO→R9"],
    ["12", "BF"],
  ],

  groups: [
    { text: "Front positive group", fromSurface: "1", toSurface: "6" },
    { text: "Fixed rear negative", fromSurface: "7", toSurface: "8" },
    { text: "Movable focus group", fromSurface: "9", toSurface: "12" },
  ],

  doublets: [],

  closeFocusM: 3.0,
  focusDescription: "Internal rear focusing by imageward translation of the L5+L6 negative sub-group.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.64,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
