import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF-S 18-45mm f/4.5-6.3 IS STM                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2021-86024 A, Numerical Example 2 (Canon Inc.; Yuichi Gyoda).     ║
 * ║  Strong production correlation; the patent does not identify the production lens.  ║
 * ║  Prescription is unscaled: 7 elements / 7 air-spaced physical groups.               ║
 * ║  Functional motion groups: B1 negative, B2 positive, B3 negative, B4 positive.      ║
 * ║  Four aspherical surfaces on two physical elements (L2 and L7).                     ║
 * ║                                                                                      ║
 * ║  ZOOM: Published infinity-focus states only, at 18.53 / 30.00 / 43.65 mm.           ║
 * ║    Variable gaps: D6, D11, D13, and BF (D15).                                       ║
 * ║    B2 and B4 share the same trajectory. B1 has a small published mid→tele reversal. ║
 * ║                                                                                      ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                                         ║
 * ║    The patent states that B3 moves image-side toward close focus but gives no        ║
 * ║    finite-conjugate spacing table. All close members of `var` therefore equal the   ║
 * ║    corresponding infinity values; no internal close-focus motion is invented.       ║
 * ║    `closeFocusM` retains Canon's marketed 0.20 m AF MFD at 18 mm as metadata only.  ║
 * ║                                                                                      ║
 * ║  APERTURE: `nominalFno` uses the patent design F/# values. STO sd=4.58 mm is the    ║
 * ║    patent's published effective-radius envelope, not an asserted hard-iris radius.  ║
 * ║                                                                                      ║
 * ║  SEMI-DIAMETERS: patent effective diameters divided by two; no inferred SDs.         ║
 * ║  SPECTRAL DATA: patent publishes nd/νd only. Vendor identity is unresolved, so      ║
 * ║    nC, nF, ng, and dPgF are intentionally not fabricated.                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rfs-18-45mm-f45-63-is-stm",
  maker: "Canon",
  name: "CANON RF-S 18-45mm f/4.5-6.3 IS STM",
  subtitle: "JP 2021-86024 A — Numerical Example 2; strong production correlation, unscaled",
  specs: [
    "7 ELEMENTS / 7 GROUPS",
    "18–45mm f/4.5–6.3 (marketed)",
    "18.53–43.65mm f/4.56–6.50 (patent)",
    "2 ASPHERICAL ELEMENTS / 4 ASPHERICAL SURFACES",
    "IN-LENS IS / LEAD-SCREW STM",
  ],

  focalLengthMarketing: [18, 45],
  focalLengthDesign: [18.529406, 43.62675],
  // Scalar metadata fields retain the wide-end maximum aperture; `nominalFno` carries all design stations.
  apertureMarketing: 4.5,
  apertureDesign: 4.56,
  lensMounts: ["canon-rf"],
  imageFormat: "aps-c",
  patentNumber: "JP 2021-86024 A",
  patentAuthors: ["Yuichi Gyoda"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2021,
  elementCount: 7,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      fl: -35.03,
      glass: "639554/639555 crown class (vendor unresolved)",
      role: "Front negative element of functional group B1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: -60.57,
      glass: "Unmatched (nd=1.53110, νd=55.9; vendor unresolved)",
      role: "Double-aspherical negative element in functional group B1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 74.25,
      glass: "847238 high-index flint class (vendor unresolved)",
      role: "Positive rear element of functional group B1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 48.63,
      glass: "697555 lanthanum-crown class (vendor unresolved)",
      role: "Front positive element of B2 and the patent-designated image-stabilization subgroup B2A.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 23.39,
      glass: "773496 lanthanum optical-glass class (vendor unresolved)",
      role: "Rear positive element of functional group B2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -23.06,
      glass: "847238 high-index flint class (vendor unresolved)",
      role: "Single-element negative focus group B3; finite-focus travel is not reconstructed.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: 59.61,
      glass: "Unmatched (nd=1.53110, νd=55.9; vendor unresolved)",
      role: "Double-aspherical positive final functional group B4.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 26.941, d: 1.0, nd: 1.63854, elemId: 1, sd: 12.395 },
    { label: "2", R: 12.045, d: 7.49, nd: 1.0, elemId: 0, sd: 10.12 },
    { label: "3A", R: -1000.0, d: 1.7, nd: 1.5311, elemId: 2, sd: 9.82 },
    { label: "4A", R: 33.26, d: 0.4, nd: 1.0, elemId: 0, sd: 9.645 },
    { label: "5", R: 46.469, d: 1.94, nd: 1.84666, elemId: 3, sd: 9.515 },
    { label: "6", R: 174.749, d: 28.48, nd: 1.0, elemId: 0, sd: 9.315 },
    { label: "7", R: 139.916, d: 1.73, nd: 1.6968, elemId: 4, sd: 4.49 },
    { label: "8", R: -44.483, d: 1.0, nd: 1.0, elemId: 0, sd: 4.56 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 4.58 },
    { label: "10", R: 16.314, d: 2.57, nd: 1.7725, elemId: 5, sd: 4.615 },
    { label: "11", R: 156.41, d: 1.53, nd: 1.0, elemId: 0, sd: 4.38 },
    { label: "12", R: -384.505, d: 0.7, nd: 1.84666, elemId: 6, sd: 3.96 },
    { label: "13", R: 20.582, d: 8.52, nd: 1.0, elemId: 0, sd: 3.855 },
    { label: "14A", R: -312.236, d: 2.08, nd: 1.5311, elemId: 7, sd: 5.395 },
    { label: "15A", R: -28.811, d: 28.48, nd: 1.0, elemId: 0, sd: 5.73 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 0,
      A4: -1.41463e-4,
      A6: 7.66013e-7,
      A8: -1.2719e-9,
      A10: -1.10963e-11,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: -1.69055e-4,
      A6: 8.63631e-7,
      A8: -2.53183e-9,
      A10: -7.27576e-12,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -9.44164e-6,
      A6: 5.54551e-7,
      A8: -1.94972e-8,
      A10: 2.35602e-10,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 3.12388e-5,
      A6: 2.318e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published infinity-focus zoom spacings; no finite-focus reconstruction ── */
  var: {
    "6": [
      [28.48, 28.48],
      [10.86, 10.86],
      [1.48, 1.48],
    ],
    "11": [
      [1.53, 1.53],
      [1.64, 1.64],
      [2.28, 2.28],
    ],
    "13": [
      [8.52, 8.52],
      [8.41, 8.41],
      [7.77, 7.77],
    ],
    "15A": [
      [28.48, 28.48],
      [38.21, 38.21],
      [47.77, 47.77],
    ],
  },
  varLabels: [
    ["6", "D6"],
    ["11", "D11"],
    ["13", "D13"],
    ["15A", "BF"],
  ],

  zoomPositions: [18.53, 30.0, 43.65],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "B1", fromSurface: "1", toSurface: "6" },
    { text: "B2", fromSurface: "7", toSurface: "11" },
    { text: "B3 / FOCUS", fromSurface: "12", toSurface: "13" },
    { text: "B4", fromSurface: "14A", toSurface: "15A" },
  ],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JP 2021-86024 A Example 2 publishes only infinity-focus zoom spacings and states that B3 moves image-side toward close focus. Canon's 0.20 m AF MFD applies at 18 mm and is retained as product metadata; no finite-focus internal spacing is modeled.",

  /* ── Aperture configuration ── */
  nominalFno: [4.56, 5.48, 6.5],
  fstopSeries: [4.5, 5.6, 6.3, 8, 11, 16],
  apertureBlades: 7,

  /* ── Layout ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
