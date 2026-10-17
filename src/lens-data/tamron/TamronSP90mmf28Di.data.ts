import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  state. The stop radius is derived from nominal f/2.8;             ║
 * ║  the original calibration targeted F/2.89 at infinity.             ║
 * ║  The axial D(14) focus spacing remains variable.                   ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS are inferred from combined paraxial marginal- and  ║
 * ║  chief-ray envelopes across the three patent focus states, then    ║
 * ║  constrained by the 58 mm filter envelope, edge thickness, rim     ║
 * ║  slope, element-diameter ratio, and signed cross-gap sag limits.    ║
 * ║  Re-review checks: min edge thickness 0.517 mm; max signed gap     ║
 * ║  intrusion 0.879 of its air gap; max sd/|R| 0.701.                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: US9063253B2 Embodiment 7 (PDF pp. 84–85) reproduces
 * all stored prescription values but not its own printed infinity focal length.
 * EFL = 92.556419 mm versus 92.74; paraxial BFL = 47.033197 mm versus
 * the published air path 44.5749 + 2.1644 = 46.7393 mm (offset +0.293897 mm).
 * Surface 27 is a dummy air plane, not a plate. Preserve the source image plane.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "tamron-sp-90mm-f2-8-di-macro-vc-usd-f004",
  maker: "Tamron",
  name: "TAMRON SP 90mm f/2.8 Di MACRO 1:1 VC USD (F004)",
  subtitle: "US 9,063,253 B2 — Embodiment 7 / Tamron F004",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "f = 92.556 mm (COMPUTED)",
      "F/2.89 DESIGN / f/2.8 MARKETED",
      "2ω = 26.24° AT INFINITY",
      "2 XLD + 1 LD",
      "1:1 FLOATING INNER FOCUS / VC",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 90, design: 92.556419 },
    fNumber: { marketing: 2.8, design: 2.89 },
  },

  source: {
    patentNumber: "US 9,063,253 B2",
    patentYear: 2015,
    authors: ["Nobuyuki Adachi"],
    assignees: ["Tamron Co., Ltd."],
  },

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
      focalLengthMm: 111.4625,
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
      focalLengthMm: 86.2046,
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
      focalLengthMm: -100.9612,
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
      focalLengthMm: 110.139,
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
      focalLengthMm: -49.9168,
      glass: "S-LAH59 (OHARA)",
      role: "Leading negative element of the imageward-moving second group.",
      dPgF: -0.0092,
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.24,
      focalLengthMm: -44.0474,
      glass: "S-FSL5 (OHARA; catalog νd 70.23, patent 70.24)",
      role: "Low-index, low-dispersion negative element in the second focus group.",
      dPgF: 0.0022,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 69.6731,
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
      focalLengthMm: 116.2191,
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
      focalLengthMm: -58.4032,
      glass: "S-TIH10 (OHARA)",
      role: "Front negative member of the objectward-moving fourth-group doublet.",
      cemented: "D2",
      dPgF: 0.0123,
      nC: 1.72086,
      nF: 1.74645,
      ng: 1.762,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.35,
      focalLengthMm: 34.436,
      glass: "S-LAL12Q (OHARA)",
      role: "Rear positive member that gives the fourth cemented group net positive power.",
      cemented: "D2",
      dPgF: -0.0085,
      nC: 1.67417,
      nF: 1.68642,
      ng: 1.69307,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.13,
      focalLengthMm: -41.2514,
      glass: "S-BAL35 (OHARA; catalog νd 61.14, patent 61.13)",
      role: "Front negative member of the laterally decentered VC doublet.",
      cemented: "D3",
      dPgF: -0.0018,
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.42,
      focalLengthMm: 94.256,
      glass: "S-TIH6 (OHARA)",
      role: "Rear positive dense-flint member of the net-negative VC doublet.",
      cemented: "D3",
      dPgF: 0.0158,
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.23,
      focalLengthMm: 45.1632,
      glass: "S-LAL10 (OHARA)",
      role: "Positive collector in the fixed sixth group.",
      dPgF: -0.0081,
      nC: 1.71567,
      nF: 1.73,
      ng: 1.73792,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -52.6485,
      glass: "FDS90 (HOYA)",
      role: "Rear negative element and field-curvature control element nearest the image plane.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 236.1724, d: 4.7932, sd: 26.5, medium: 1 },
    { label: "2", R: -134.3107, d: 0.15, sd: 26.5 },
    { label: "3", R: 63.0015, d: 7.5198, sd: 24.0, medium: 2 },
    { label: "4", R: -90.2962, d: 1.192, sd: 22.5, medium: 3 },
    { label: "5", R: 1612.2365, d: 0.15, sd: 20.5 },
    { label: "6", R: 41.7672, d: 4.6981, sd: 20.5, medium: 4 },
    { label: "7", R: 305.1013, sd: 19.4 },
    { label: "8", R: 192.1, d: 1.2, sd: 18.2, medium: 5 },
    { label: "9", R: 33.512, d: 4.912, sd: 16.0 },
    { label: "10", R: -46.9417, d: 1.0, sd: 12.8, medium: 6 },
    { label: "11", R: 39.8523, d: 3.3499, sd: 12.8 },
    { label: "12", R: 60.8772, d: 3.1, sd: 16.0, medium: 7 },
    { label: "13", R: -1857.925, sd: 17.0 },
    { label: "STO", R: "flat" },
    { label: "15", R: 344.475, d: 3.005, sd: 17.3, medium: 8 },
    { label: "16", R: -85.8423, sd: 17.3 },
    { label: "17", R: 110.2146, d: 0.9, sd: 17.8, medium: 9 },
    { label: "18", R: 30.5835, d: 6.423, sd: 15.9, medium: 10 },
    { label: "19", R: -90.2521, sd: 15.9 },
    { label: "20", R: 541.4261, d: 0.8952, sd: 17.2, medium: 11 },
    { label: "21", R: 23.2442, d: 2.7112, sd: 16.3, medium: 12 },
    { label: "22", R: 31.7632, d: 10.1125, sd: 16.3 },
    { label: "23", R: 42.0889, d: 4.9125, sd: 16.5, medium: 13 },
    { label: "24", R: -136.0043, d: 6.0015, sd: 16.5 },
    { label: "25", R: -67.7129, d: 1.2, sd: 14.9, medium: 14 },
    { label: "26", R: 131.5116, sd: 14.8 },
  ],

  focus: {
    closeFocusM: 0.3,
    /* ── Three-group floating inner focus ──
     * Values are [infinity, 1:2, 1:1].
     * STO is the axial D(14) spacing after the fixed stop, not stop diameter.
     */
    keyframes: [0, 0.7976078358456278, 1],
    description:
      "Three-group floating inner focus. G2 translates 18.049 mm imageward; G3 and G4 translate 12.300 mm and 17.570 mm objectward from infinity to 1:1. The infinity, 1:2, and 1:1 patent rows are exact focus keyframes.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "7": { label: "D7", values: [[1.2, 9.8415, 19.2488]] },
    "13": { label: "D13", values: [[20.05, 11.4085, 2.0012]] },
    STO: { label: "D14", values: [[14.0, 9.2987, 1.7]] },
    "16": { label: "D16", values: [[6.7201, 1.0992, 1.4506]] },
    "19": { label: "D19", values: [[1.7996, 12.1217, 19.369]] },
    "26": { label: "BF", values: [[46.7393, 46.7793, 46.7641]] },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

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

  layout: { scFill: 0.68, yScFill: 0.72 },

  rays: { offAxisFieldFrac: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
