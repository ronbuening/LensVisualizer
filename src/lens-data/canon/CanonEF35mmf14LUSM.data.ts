import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 35mm f/1.4 L USM                                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP H11-211978 A, Numerical Example 1 (Canon Inc.).                        ║
 * ║ Correlation to the production EF 35mm f/1.4L USM is inferred from focal length,   ║
 * ║ aperture class, 11-element / 9-group construction, ninth-element asphere, floating ║
 * ║ focus behavior, 0.3 m close state, and December 1998 production timing.            ║
 * ║                                                                                     ║
 * ║ SOURCE CORRECTION: the patent visibly prints r11 = +72.820 mm. Independent y-nu    ║
 * ║ and ABCD checks give EFL = 26.8926 mm and a positive L2b subgroup with that sign,   ║
 * ║ contradicting the source f = 34.3 mm and its stated negative L2b. This model uses  ║
 * ║ r11 = -72.820 mm, which gives EFL = 34.2948319 mm and restores negative L2b.        ║
 * ║                                                                                     ║
 * ║ Scaling: none (s = 1). Marketing values remain separate from design values.         ║
 * ║ Design f-number / nominalFno = 1.45; marketed maximum aperture = f/1.4.             ║
 * ║                                                                                     ║
 * ║ FOCUS STATUS: PUBLISHED. The source publishes d6 = 5.20 -> 0.43 mm and              ║
 * ║ d13 = 3.70 -> 2.06 mm from infinity to the 300 mm state. L1 is fixed; L2 moves      ║
 * ║ 4.77 mm objectward; L3 plus the stop moves 6.41 mm objectward. Surface 21 BF is    ║
 * ║ a computed fixed-image-plane normalization, 38.6533555 -> 45.0633555 mm, not a      ║
 * ║ separately published focus gap.                                                     ║
 * ║                                                                                     ║
 * ║ ASPHERE: r17 uses the more precise source-table base R = -65.3464 mm and standard  ║
 * ║ conic K = +2.39046. Patent B/C/D map to A4/A6/A8. The Example-1 E (h^10) term is   ║
 * ║ not printed; A10 = 0 below is a disclosed modeling assumption, not a source zero.   ║
 * ║ A12 and A14 are zero because the published equation terminates at h^10.             ║
 * ║                                                                                     ║
 * ║ SEMI-DIAMETERS: the patent does not publish clear apertures. SDs are modeled from   ║
 * ║ the f/1.45 pupil constraint (STO sd = 12.5926009 mm), on-axis marginal rays,         ║
 * ║ +/-32 deg chief rays at infinity and the 0.3 m state, and the official Canon block  ║
 * ║ diagram. Surface-specific SDs were then checked for edge thickness, actual rim      ║
 * ║ slope, conic limit, shared-gap intrusion, off-axis containment, and silhouette.     ║
 * ║ Off-axis vignetting is allowed at air-facing element edges; neither cemented        ║
 * ║ junction is the first clipping surface in the verification bundles.                 ║
 * ║                                                                                     ║
 * ║ GLASS: the patent gives d-line nd / vd coordinates but no vendor names or line      ║
 * ║ indices. Generic coordinate classes are stored; nC, nF, ng, and dPgF are omitted    ║
 * ║ because no source-defensible values are available for the unidentified melts.       ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-ef-35mm-f14l-usm",
  maker: "Canon",
  name: "CANON EF 35mm f/1.4 L USM",
  subtitle: "JP H11-211978 A Example 1 — corrected r11 sign; production correlation inferred",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "35 mm MARKETED / 34.2948 mm DESIGN",
    "f/1.4 MARKETED / f/1.45 DESIGN",
    "2ω = 64°",
    "1 ASPHERICAL SURFACE",
    "0.30 m MFD",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.294831855424036,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H11-211978 A",
  patentAuthors: ["Yasunori Murata", "Makoto Misaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1999,
  elementCount: 11,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.4,
      indexReference: "d",
      fl: -77.59314088315068,
      glass: "583594/595 class (vendor unresolved)",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.4,
      indexReference: "d",
      fl: -94.17073259813091,
      glass: "583594/595 class (vendor unresolved)",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      fl: 65.85967540206435,
      glass: "713538/539/540 class (vendor unresolved)",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      fl: 60.95488850902199,
      glass: "713538/539/540 class (vendor unresolved)",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.2,
      indexReference: "d",
      fl: -314.293452650426,
      glass: "516641/642 class (vendor unresolved)",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      fl: 50.16186656500432,
      glass: "835427 class (vendor unresolved)",
      cemented: "L2b",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 34.5,
      indexReference: "d",
      fl: -43.50725067734946,
      glass: "S-TIM27 coefficient proxy (patent 640345; production supplier unspecified)",
      cemented: "L2b",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -22.95419584350211,
      glass: "805254/255 class (vendor unresolved)",
      cemented: "L3a",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      fl: 72.20755433769958,
      glass: "835427 class (vendor unresolved)",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: 46.7590649936805,
      glass: "773496 class (vendor unresolved)",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: 51.38854165207472,
      glass: "773496 class (vendor unresolved)",
    },
  ],

  surfaces: [
    { label: "1", R: 400.0, d: 2.8, nd: 1.58313, elemId: 1, sd: 25.0 },
    { label: "2", R: 40.544, d: 6.91, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "3", R: 606.181, d: 2.3, nd: 1.58313, elemId: 2, sd: 21.5 },
    { label: "4", R: 50.282, d: 10.31, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "5", R: 61.687, d: 6.5, nd: 1.713, elemId: 3, sd: 22.5 },
    { label: "6", R: -188.04, d: 5.2, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "7", R: 47.477, d: 5.06, nd: 1.713, elemId: 4, sd: 19.8 },
    { label: "8", R: -490.98, d: 0.2, nd: 1.0, elemId: 0, sd: 18.8 },
    { label: "9", R: 31.299, d: 3.0, nd: 1.51633, elemId: 5, sd: 18.5 },
    { label: "10", R: 25.382, d: 9.27, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "11", R: -72.82, d: 3.77, nd: 1.83481, elemId: 6, sd: 15.0 },
    { label: "12", R: -27.213, d: 1.5, nd: 1.6398, elemId: 7, sd: 14.5 },
    { label: "13", R: -1242.161, d: 3.7, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "STO", R: 1e15, d: 7.07, nd: 1.0, elemId: 0, sd: 12.592600892397842 },
    { label: "15", R: -18.961, d: 1.6, nd: 1.80518, elemId: 8, sd: 13.5 },
    { label: "16", R: 759.56, d: 3.3, nd: 1.83481, elemId: 9, sd: 14.2 },
    { label: "17A", R: -65.3464, d: 0.2, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "18", R: -172.7, d: 5.94, nd: 1.7725, elemId: 10, sd: 15.4 },
    { label: "19", R: -30.321, d: 0.2, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "20", R: -160.598, d: 6.81, nd: 1.7725, elemId: 11, sd: 18.0 },
    { label: "21", R: -32.418, d: 38.653355504539874, nd: 1.0, elemId: 0, sd: 22.0 },
  ],

  asph: {
    "17A": {
      K: 2.39046,
      A4: 1.36838e-5,
      A6: 3.28097e-10,
      A8: -1.1445e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "6": [5.2, 0.43],
    "13": [3.7, 2.06],
    "21": [38.653355504539874, 45.06335550453987],
  },

  varLabels: [
    ["6", "d6"],
    ["13", "d13"],
    ["21", "BF"],
  ],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2", fromSurface: "7", toSurface: "13" },
    { text: "L3", fromSurface: "15", toSurface: "21" },
  ],

  doublets: [
    { text: "L1a", fromSurface: "1", toSurface: "4" },
    { text: "L1b", fromSurface: "5", toSurface: "6" },
    { text: "L2a", fromSurface: "7", toSurface: "10" },
    { text: "L2b", fromSurface: "11", toSurface: "13" },
    { text: "L3a", fromSurface: "15", toSurface: "17A" },
    { text: "L3b", fromSurface: "18", toSurface: "21" },
  ],

  closeFocusM: 0.3,
  focusDescription:
    "PUBLISHED floating focus: L1 remains fixed; d6 changes 5.20→0.43 mm and d13 changes 3.70→2.06 mm. " +
    "L2 moves 4.77 mm objectward and L3 plus the stop moves 6.41 mm objectward at the 300 mm state. " +
    "BF 38.6533555→45.0633555 mm is computed only to preserve the fixed image plane.",

  nominalFno: 1.45,
  fstopSeries: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 8,
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
