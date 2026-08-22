import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MAMIYA-SEKOR ZOOM E 28-50mm f/3.5-4.5                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP1981-119109 A, Example 1, Yusuke Nanjo / Mamiya Koki.       ║
 * ║ Production correlation: 9 elements / 8 groups and f/3.5-4.5 source states. ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION.                                  ║
 * ║                                                                              ║
 * ║ Scaling: the patent is normalized to f=1 at wide. All radii, spacings,      ║
 * ║ semi-diameters, stop coordinates, and BFDs are scaled uniformly ×28.        ║
 * ║ The all-spherical prescription has no asphere coefficients to transform.     ║
 * ║                                                                              ║
 * ║ Zoom: D8 and BF are the published infinity-state variables. D8 is split at  ║
 * ║ an inferred STO placed 0.0500 patent unit (1.4000 mm scaled) before r9.     ║
 * ║ The stop position is inferred from Fig. 1, not numerically published.        ║
 * ║ STO.sd stores the wide-end base radius derived paraxially for f/3.5; the    ║
 * ║ nominalFno array is the authoritative source f-number sequence.              ║
 * ║                                                                              ║
 * ║ Semi-diameters are modeled, not source-published. They were derived from     ║
 * ║ exact meridional marginal/chief-ray checks, the Fig. 1 silhouette, and the  ║
 * ║ current edge-thickness, rim-slope, cross-gap, off-axis-containment, and      ║
 * ║ render-trim rules. Full-field wide-open rays may vignette at air-separated   ║
 * ║ group boundaries; the default 0.6-field diagnostic bundle is contained.      ║
 * ║                                                                              ║
 * ║ Patent spectral data are limited to nd and νd. nC, nF, ng, and dPgF are     ║
 * ║ therefore not authored: no unique historical vendor/Sellmeier identity is   ║
 * ║ established. Neutral six-digit coordinate/class glass labels are used.       ║
 * ║                                                                              ║
 * ║ The current taxonomy has no Mamiya ZE/E-series mount id; lensMounts is       ║
 * ║ intentionally omitted rather than substituting mamiya-nc.                    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "mamiya-sekor-zoom-e-28-50mm-f3-5-4-5",
  maker: "Mamiya",
  name: "MAMIYA-SEKOR ZOOM E 28-50mm f/3.5-4.5",
  subtitle: "JP1981-119109 A Example 1 — normalized prescription scaled ×28",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "28-47.55 mm DESIGN / 28-50 mm MARKETED",
    "f/3.5-4.5",
    "75°-47.6° SOURCE FIELD",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [28, 50],
  focalLengthDesign: [28.0021, 47.5505],
  imageFormat: "135-full-frame",
  patentNumber: "JP1981-119109 A",
  patentAuthors: ["Yusuke Nanjo"],
  patentAssignees: ["Mamiya Koki Co., Ltd."],
  patentYear: 1981,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.56883,
      vd: 56.2,
      fl: 186.9124,
      glass: "569562 — BAC4 catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Front positive lens of major group I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (concave to image)",
      nd: 1.72,
      vd: 50.2,
      fl: -28.304,
      glass: "720502 — lanthanum crown class (vendor unresolved)",
      apd: false,
      role: "Strong negative member of major group I.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus (concave to image)",
      nd: 1.51823,
      vd: 59,
      fl: -77.5693,
      glass: "518590 — crown class (vendor unresolved)",
      apd: false,
      role: "Negative meniscus continuing the front-group retrofocus power distribution.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus (convex to object)",
      nd: 1.6727,
      vd: 32.1,
      fl: 55.4885,
      glass: "673321 — dense flint class (vendor unresolved)",
      apd: false,
      role: "Positive meniscus completing major group I.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 32.0652,
      glass: "773496 — lanthanum high-index class (vendor unresolved)",
      apd: false,
      role: "Front positive member of major group II.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.56883,
      vd: 56.2,
      fl: 19.9776,
      glass: "569562 — BAC4 catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Positive member of the cemented sixth patent lens group.",
      cemented: "G6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72342,
      vd: 38,
      fl: -16.0211,
      glass: "723380 — barium dense-flint class (vendor unresolved)",
      apd: false,
      role: "Negative member of the cemented sixth patent lens group.",
      cemented: "G6",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus (concave to image)",
      nd: 1.7552,
      vd: 27.5,
      fl: -43.8747,
      glass: "755275 — dense flint class (vendor unresolved)",
      apd: false,
      role: "Negative meniscus in the rear major group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 34.7531,
      glass: "773496 — lanthanum high-index class (vendor unresolved)",
      apd: false,
      role: "Final positive member of major group II.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 212.1084, d: 2.94, nd: 1.56883, elemId: 1, sd: 18 },
    { label: "2", R: -212.1084, d: 0.196, nd: 1, elemId: 0, sd: 18 },
    { label: "3", R: 131.6084, d: 1.96, nd: 1.72, elemId: 2, sd: 14.7 },
    { label: "4", R: 17.5364, d: 9.5872, nd: 1, elemId: 0, sd: 14.7 },
    { label: "5", R: 92.8536, d: 1.47, nd: 1.51823, elemId: 3, sd: 10.6 },
    { label: "6", R: 27.902, d: 0.5096, nd: 1, elemId: 0, sd: 10.6 },
    { label: "7", R: 22.4952, d: 3.234, nd: 1.6727, elemId: 4, sd: 9.6 },
    { label: "8", R: 53.34, d: 21.238, nd: 1, elemId: 0, sd: 9.6 },
    // STO position inferred from patent Fig. 1: fixed 1.4000 mm before r9 after the ×28 scale.
    { label: "STO", R: 1e15, d: 1.4, nd: 1, elemId: 0, sd: 7.323855 },
    { label: "9", R: 35.0784, d: 2.548, nd: 1.7725, elemId: 5, sd: 7 },
    { label: "10", R: -81.6256, d: 0.196, nd: 1, elemId: 0, sd: 7 },
    { label: "11", R: 21.322, d: 4.256, nd: 1.56883, elemId: 6, sd: 7 },
    // Cemented n6→n7 junction: downstream element L7 owns the interface.
    { label: "12", R: -22.5708, d: 1.7556, nd: 1.72342, elemId: 7, sd: 7 },
    { label: "13", R: 24.6008, d: 5.5104, nd: 1, elemId: 0, sd: 7 },
    { label: "14", R: 78.9936, d: 1.47, nd: 1.7552, elemId: 8, sd: 8.8 },
    { label: "15", R: 23.156, d: 1.2852, nd: 1, elemId: 0, sd: 8.8 },
    { label: "16", R: 166.6084, d: 2.94, nd: 1.7725, elemId: 9, sd: 7.5 },
    { label: "17", R: -31.7576, d: 37.716, nd: 1, elemId: 0, sd: 7.5 },
  ],

  asph: {},

  /* ── Published infinity-state zoom variables only; no close-focus reconstruction ── */
  var: {
    "8": [
      [21.238, 21.238],
      [12.46, 12.46],
      [1.624, 1.624],
    ],
    "17": [
      [37.716, 37.716],
      [42.504, 42.504],
      [52.584, 52.584],
    ],
  },
  varLabels: [
    ["8", "D8 to STO"],
    ["17", "BF"],
  ],

  zoomPositions: [28, 34.328, 47.544],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "I (−)", fromSurface: "1", toSurface: "8" },
    { text: "II (+)", fromSurface: "9", toSurface: "17" },
  ],
  doublets: [{ text: "G6", fromSurface: "11", toSurface: "13" }],

  closeFocusM: 0.6,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — the patent publishes infinity-focus zoom states only. The marketed 0.6 m minimum focusing distance is metadata; all authored focus pairs remain at their published infinity values.",

  nominalFno: [3.5, 3.9, 4.5],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
