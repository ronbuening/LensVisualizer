import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — TAMRON SP 90mm f/2.8 Di MACRO 1:1 VC USD         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 9,063,253 B2, Embodiment 7.                       ║
 * ║  Embodiment 7 is numerically identical to Embodiment 1 but uses    ║
 * ║  the patent's six-group image-stabilized taxonomy.                 ║
 * ║  14 elements / 11 groups, all spherical.                           ║
 * ║  Focus: three independently moving inner groups; G2 moves          ║
 * ║  imageward while G3 and G4 move objectward. G1, G5, and G6 remain ║
 * ║  axially fixed. G5 is the laterally decentered VC group.           ║
 * ║                                                                    ║
 * ║  NO PRODUCTION SCALING: the printed patent prescription is used    ║
 * ║  directly. Its computed infinity EFL is 92.556 mm; the patent      ║
 * ║  reports 92.74 mm and the production lens is marketed as 90 mm.    ║
 * ║                                                                    ║
 * ║  The patent's terminal dummy plane (surface 27) is omitted. Its    ║
 * ║  D(27) spacing is folded into the final surface-to-image distance. ║
 * ║  The patent does not tabulate the diaphragm diameter at each focus ║
 * ║  state. The stored stop semi-diameter is calibrated to F/2.89 at   ║
 * ║  infinity; the axial D(14) focus spacing remains variable.         ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS are inferred from combined paraxial marginal- and  ║
 * ║  chief-ray envelopes across the three patent focus states, then    ║
 * ║  constrained by the 58 mm filter envelope, edge thickness, rim     ║
 * ║  slope, element-diameter ratio, and signed cross-gap sag limits.    ║
 * ║  Re-review checks: min edge thickness 0.517 mm; max signed gap     ║
 * ║  intrusion 0.879 of its air gap; max sd/|R| 0.701.                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "tamron-sp-90mm-f2-8-di-macro-vc-usd-f004",
  maker: "Tamron",
  name: "TAMRON SP 90mm f/2.8 Di MACRO 1:1 VC USD (F004)",
  subtitle: "US 9,063,253 B2 — Embodiment 7 / Tamron F004",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "f = 92.556 mm (COMPUTED)",
    "F/2.89 DESIGN / f/2.8 MARKETED",
    "2ω = 26.24° AT INFINITY",
    "2 XLD + 1 LD",
    "1:1 FLOATING INNER FOCUS / VC",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 92.556419,
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["canon-ef", "nikon-f", "sony-a"],
  imageFormat: "135-full-frame",
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ──
   * Element focal lengths are standalone in-air values. Cemented-group
   * focal lengths are documented separately in the companion analysis.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 111.4625,
      glass: "773/496 lanthanum glass (OHARA S-LAH66N / HOYA TAF1 equivalent)",
      role: "High-index front collector in the fixed positive first group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 86.2046,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "HOYA anomalous-dispersion fluorophosphate; patent supplies only nd and νd.",
      role: "First XLD element and positive member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -100.9612,
      glass: "FDS90 (HOYA)",
      role: "Dense-flint achromatizing member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 110.139,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "HOYA anomalous-dispersion fluorophosphate; patent supplies only nd and νd.",
      role: "Second XLD element; completes the fixed positive first group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.62,
      fl: -49.9168,
      glass: "S-LAH59 (OHARA)",
      dPgF: -0.0092,
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
      role: "Leading negative element of the imageward-moving second group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.24,
      fl: -44.0474,
      glass: "S-FSL 5 (OHARA; catalog νd 70.23, patent 70.24)",
      dPgF: 0.0022,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Low-index, low-dispersion negative element in the second focus group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 69.6731,
      glass: "FDS90 (HOYA)",
      role: "Positive dense-flint counterpower in the net-negative second focus group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 116.2191,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote: "HOYA low-dispersion phosphate crown; patent supplies only nd and νd.",
      role: "Single-element third focus group immediately behind the aperture stop.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.46,
      fl: -58.4032,
      glass: "S-TIH10 (OHARA)",
      dPgF: 0.0123,
      nC: 1.72086,
      nF: 1.74645,
      ng: 1.762,
      role: "Front negative member of the objectward-moving fourth-group doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.35,
      fl: 34.436,
      glass: "S-LAL12Q (OHARA)",
      dPgF: -0.0085,
      nC: 1.67417,
      nF: 1.68642,
      ng: 1.69307,
      role: "Rear positive member that gives the fourth cemented group net positive power.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.13,
      fl: -41.2514,
      glass: "S-BAL35 (OHARA; catalog νd 61.14, patent 61.13)",
      dPgF: -0.0018,
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
      role: "Front negative member of the laterally decentered VC doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.42,
      fl: 94.256,
      glass: "S-TIH 6 (OHARA)",
      dPgF: 0.0158,
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
      role: "Rear positive dense-flint member of the net-negative VC doublet.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.23,
      fl: 45.1632,
      glass: "S-LAL10 (OHARA)",
      dPgF: -0.0081,
      nC: 1.71567,
      nF: 1.73,
      ng: 1.73792,
      role: "Positive collector in the fixed sixth group.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -52.6485,
      glass: "FDS90 (HOYA)",
      role: "Rear negative element and field-curvature control element nearest the image plane.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 236.1724, d: 4.7932, nd: 1.7725, elemId: 1, sd: 26.5 },
    { label: "2", R: -134.3107, d: 0.15, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "3", R: 63.0015, d: 7.5198, nd: 1.437, elemId: 2, sd: 24.0 },
    { label: "4", R: -90.2962, d: 1.192, nd: 1.84666, elemId: 3, sd: 22.5 },
    { label: "5", R: 1612.2365, d: 0.15, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "6", R: 41.7672, d: 4.6981, nd: 1.437, elemId: 4, sd: 20.5 },
    { label: "7", R: 305.1013, d: 1.2, nd: 1.0, elemId: 0, sd: 19.4 },
    { label: "8", R: 192.1, d: 1.2, nd: 1.816, elemId: 5, sd: 18.2 },
    { label: "9", R: 33.512, d: 4.912, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "10", R: -46.9417, d: 1.0, nd: 1.48749, elemId: 6, sd: 12.8 },
    { label: "11", R: 39.8523, d: 3.3499, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "12", R: 60.8772, d: 3.1, nd: 1.84666, elemId: 7, sd: 16.0 },
    { label: "13", R: -1857.925, d: 20.05, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "STO", R: 1e15, d: 14.0, nd: 1.0, elemId: 0, sd: 13.933611 },
    { label: "15", R: 344.475, d: 3.005, nd: 1.59282, elemId: 8, sd: 17.3 },
    { label: "16", R: -85.8423, d: 6.7201, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "17", R: 110.2146, d: 0.9, nd: 1.72825, elemId: 9, sd: 17.8 },
    { label: "18", R: 30.5835, d: 6.423, nd: 1.6779, elemId: 10, sd: 15.9 },
    { label: "19", R: -90.2521, d: 1.7996, nd: 1.0, elemId: 0, sd: 15.9 },
    { label: "20", R: 541.4261, d: 0.8952, nd: 1.58913, elemId: 11, sd: 17.2 },
    { label: "21", R: 23.2442, d: 2.7112, nd: 1.80518, elemId: 12, sd: 16.3 },
    { label: "22", R: 31.7632, d: 10.1125, nd: 1.0, elemId: 0, sd: 16.3 },
    { label: "23", R: 42.0889, d: 4.9125, nd: 1.72, elemId: 13, sd: 16.5 },
    { label: "24", R: -136.0043, d: 6.0015, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "25", R: -67.7129, d: 1.2, nd: 1.84666, elemId: 14, sd: 14.9 },
    { label: "26", R: 131.5116, d: 46.7393, nd: 1.0, elemId: 0, sd: 14.8 },
  ],

  asph: {},

  /* ── Three-group floating inner focus ──
   * Values are [infinity, 1:1]. The patent's 1:2 state is not an endpoint
   * in the data model but is recorded and verified in the analysis.
   * STO is the axial D(14) spacing after the fixed stop, not stop diameter.
   */
  var: {
    "7": [1.2, 19.2488],
    "13": [20.05, 2.0012],
    STO: [14.0, 1.7],
    "16": [6.7201, 1.4506],
    "19": [1.7996, 19.369],
    "26": [46.7393, 46.7641],
  },
  varLabels: [
    ["7", "D7"],
    ["13", "D13"],
    ["STO", "D14"],
    ["16", "D16"],
    ["19", "D19"],
    ["26", "BF"],
  ],

  groups: [
    { text: "G1 (+) / FIXED", fromSurface: "1", toSurface: "7" },
    { text: "G2 (-) / FOCUS", fromSurface: "8", toSurface: "13" },
    { text: "G3 (+) / FOCUS", fromSurface: "15", toSurface: "16" },
    { text: "G4 (+) / FOCUS", fromSurface: "17", toSurface: "19" },
    { text: "G5 (-) / VC", fromSurface: "20", toSurface: "22" },
    { text: "G6 (+) / FIXED", fromSurface: "23", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3 / VC", fromSurface: "20", toSurface: "22" },
  ],

  closeFocusM: 0.3,
  focusDescription:
    "Three-group floating inner focus. G2 translates 18.049 mm imageward; G3 and G4 translate 12.300 mm and 17.570 mm objectward from infinity to 1:1. The viewer interpolates between those endpoints.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  offAxisFieldFrac: 0.45,
  scFill: 0.68,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
