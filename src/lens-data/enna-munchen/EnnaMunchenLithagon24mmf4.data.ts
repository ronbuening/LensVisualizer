import type { LensDataInput } from "../../types/optics.js";

/**
 * ENNA MÜNCHEN LITHAGON 24mm f/4
 *
 * Data source: DE 1 228 820 B, "Fotografisches Retrofocus-Objektiv", sole claimed prescription.
 * The patent prescription is normalized to f = 100. All radii, axial spacings, and inferred
 * semi-diameters in this file are scaled by 0.24 for the 24 mm production focal length.
 *
 * Architecture: 7 elements / 7 air-spaced groups, all spherical.
 * Patent groups: F = L1-L2, M = L3, H = L4-L7.
 * Focus: production unit-focus approximation; the patent gives only an infinity prescription.
 *
 * Aperture stop: not tabulated by the patent. The stop is inferred from the drawing in the l3
 * air gap between L3 and L4, close to the front of group H. The l3 gap (10.416 mm scaled) is
 * split as 8.496 mm before STO and 1.920 mm after STO. The stop semi-diameter below gives an
 * entrance-pupil diameter of approximately 6.000 mm and f/4.0 at the computed EFL.
 *
 * Semi-diameters: patent does not publish clear apertures. Values are conservative estimates
 * constrained by the rendered element edge thicknesses, the thin L7 rear surface, the l1 and
 * l6 cross-gap sag limits, and the f/4 entrance-pupil geometry. They are not manufacturer
 * mechanical dimensions.
 */
const LENS_DATA = {
  key: "enna-munchen-lithagon-24mm-f4",
  maker: "Enna München",
  name: "ENNA MÜNCHEN LITHAGON 24mm f/4",
  subtitle: "DE 1 228 820 B — Hans Lautenbacher / Enna-Werk",
  specs: ["7 elements / 7 groups", "f ≈ 24.0 mm", "f/4", "2ω = 85°", "all spherical"],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.0002,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["exakta", "m42"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 1 228 820 B",
  patentAuthors: ["Hans Lautenbacher"],
  patentAssignees: ["Enna-Werk Optische Anstalt Dr. Appelt K.G."],
  patentYear: 1966,
  elementCount: 7,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -59.29,
      glass: "N-BK7 (Schott)",
      role: "First negative meniscus of the front retrofocus section.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: -49.79,
      glass: "N-SK16 (Schott)",
      role: "Second negative meniscus of the separated front retrofocus section.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62536,
      vd: 35.6,
      fl: 74.99,
      glass: "F7-class flint (legacy Schott 625/356; CDGM H-F6 equivalent)",
      role: "Weak positive middle meniscus between the front diverging section and rear main system.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.51895,
      vd: 57.3,
      fl: 48.88,
      glass: "K4-class crown (legacy 519/573)",
      role: "First positive element of the rear main system; closely spaced to L5.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62374,
      vd: 47,
      fl: 47.02,
      glass: "BaF8-class barium flint (legacy 624/470)",
      role: "Second positive element of the split front component of the rear triplet-like system.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -16.02,
      glass: "SF56A (Schott)",
      role: "Strong dense-flint negative element in the rear main system.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.60801,
      vd: 46.2,
      fl: 23.87,
      glass: "H-BaF6 (CDGM) / barium-flint 608/462 class",
      role: "Final positive element controlling rear convergence and back focal distance.",
    },
  ],

  surfaces: [
    { label: "1", R: 38.928, d: 1.824, nd: 1.5168, elemId: 1, sd: 15.0 },
    { label: "2", R: 16.872, d: 7.8, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "3", R: 156.0, d: 1.296, nd: 1.62041, elemId: 2, sd: 14.05 },
    { label: "4", R: 25.704, d: 15.6, nd: 1.0, elemId: 0, sd: 14.05 },
    { label: "5", R: -108.0, d: 2.592, nd: 1.62536, elemId: 3, sd: 11.0 },
    { label: "6", R: -33.0, d: 8.496, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "STO", R: 1e15, d: 1.92, nd: 1.0, elemId: 0, sd: 5.853673 },
    { label: "7", R: 60.0, d: 2.328, nd: 1.51895, elemId: 4, sd: 7.8 },
    { label: "8", R: -43.368, d: 0.264, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "9", R: 16.272, d: 1.56, nd: 1.62374, elemId: 5, sd: 7.95 },
    { label: "10", R: 35.208, d: 3.36, nd: 1.0, elemId: 0, sd: 7.95 },
    { label: "11", R: -45.6, d: 8.16, nd: 1.7847, elemId: 6, sd: 7.9 },
    { label: "12", R: 18.72, d: 1.152, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "13", R: 153.6, d: 1.92, nd: 1.60801, elemId: 7, sd: 6.45 },
    { label: "14", R: -15.95352, d: 36.175343, nd: 1.0, elemId: 0, sd: 6.45 },
  ],

  asph: {},
  var: {
    "14": [36.175343, 39.75019],
  },
  varLabels: [["14", "BF"]],
  focusDescription:
    "Unit focusing. The patent gives only the infinity prescription; close focus is modeled by increasing BFD for a 0.25 m object distance.",

  groups: [
    { text: "F", fromSurface: "1", toSurface: "4" },
    { text: "M", fromSurface: "5", toSurface: "6" },
    { text: "H", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  closeFocusM: 0.25,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  offAxisFieldFrac: 0.3,
  scFill: 0.58,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
