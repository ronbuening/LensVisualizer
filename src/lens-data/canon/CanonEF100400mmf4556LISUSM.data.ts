import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 100-400mm f/4.5-5.6 L IS USM                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2000-47107 A, Numerical Example 2 (Canon Inc.;           ║
 * ║ Hiroshi Endo). The patent prescription is modeled unscaled at its         ║
 * ║ published zoom states f = 102.68 / 161.53 / 389.19 mm.                   ║
 * ║                                                                            ║
 * ║ Production correlation: Canon Camera Museum identifies the November 1998  ║
 * ║ EF 100-400mm f/4.5-5.6L IS USM as a 17-element / 14-group EF lens with  ║
 * ║ fluorite, Super UD, rear-focus floating focusing, IS, 1.8 m MFD, and      ║
 * ║ 0.2x maximum magnification. Product identity is a correlation inference;  ║
 * ║ exact optical quantities below come from the patent and independent trace.║
 * ║                                                                            ║
 * ║ Prescription normalization: patent surface 7 is an R=∞ air-to-air         ║
 * ║ bookkeeping plane with d7=2.00 mm at every zoom position. It is omitted,  ║
 * ║ and its 2.00 mm is folded into the preceding d6 air spacing. No cover      ║
 * ║ glass, filter, sensor plate, mechanical part, or folded optical path is    ║
 * ║ included. Surface 19 is represented by the single required STO surface.   ║
 * ║                                                                            ║
 * ║ Zoom-only variable gaps: D6+D7 and D12. Focus+zoom gaps: D19 (STO->G4),  ║
 * ║ D21 (G4->G5), D29 (G5->G6), and BF after surface 33. No published zoom    ║
 * ║ reversal occurs across the three tabulated states.                         ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that focusing  ║
 * ║ moves G4 objectward and G6 imageward, with approximately common G4 travel  ║
 * ║ at a given object distance. The 1.8 m close-focus rows are code-solved     ║
 * ║ against Canon's rounded 1.8 m MFD and 0.2x maximum-magnification product   ║
 * ║ specifications as reconstruction targets while preserving that mechanism. ║
 * ║ The precise internal shifts are one compatible paraxial model, not         ║
 * ║ patent-published or measured production travel.                            ║
 * ║                                                                            ║
 * ║ Aperture: the patent publishes FNo = 4.6 / 5.1 / 5.8 but no physical stop  ║
 * ║ diameter. The stop radius is derived from the design f-number at each zoom ║
 * ║ station; station nominalFNumber values carry the three published design    ║
 * ║ values.                                                                    ║
 * ║                                                                            ║
 * ║ Glass: the patent supplies nd/nu_d pairs but not vendor identities or      ║
 * ║ nC/nF/ng/dPgF line data. Vendor-neutral six-digit/class labels are used;   ║
 * ║ E3 fluorite and E7 Super-UD-class labels are production correlations. E9   ║
 * ║ uses K-SSK9 only as a qualified coefficient proxy. No APO/APD behavior is  ║
 * ║ asserted.                                                                   ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent does not tabulate clear apertures. SDs were     ║
 * ║ derived from coded marginal/chief-ray envelopes at all three zoom states  ║
 * ║ and at infinity/MFD, then constrained by Fig. 6 proportions, the 77 mm     ║
 * ║ front filter envelope, edge thickness, actual rim slope, cross-gap         ║
 * ║ clearance, and off-axis containment. gapSagFrac=0.96 is used because the  ║
 * ║ spherical rims at 9->10 and 25->26 retain positive physical clearance     ║
 * ║ (0.155 mm and 0.076 mm respectively) while exceeding the default 90%     ║
 * ║ conservative intrusion allowance. This is a geometry policy override, not ║
 * ║ a layout workaround.                                                       ║
 * ║                                                                            ║
 * ║ The centered sequential model does not model IS-group decenter states.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-100400-f45-56l-is-usm",
  maker: "Canon",
  name: "CANON EF 100-400mm f/4.5-5.6 L IS USM",
  subtitle: "JP 2000-47107 A Example 2 — unscaled patent prescription; production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 14 PHYSICAL GROUPS",
      "PATENT f = 102.68 / 161.53 / 389.19 mm",
      "PATENT FNO = 4.6 / 5.1 / 5.8",
      "ALL-SPHERICAL",
      "1.8 m MFD — CONSTRAINED RECONSTRUCTION",
    ],
    elementCount: 17,
    groupCount: 14,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: [100, 400], design: [102.687376759194, 389.165258375804] },
    fNumber: {
      marketing: 4.5, // wide-end marketing value; tele-end f/5.6 is carried by the product name
      design: 4.6, // wide-end design value; full 4.6/5.1/5.8 sequence is nominalFno
    },
  },

  source: { patentNumber: "JP 2000-47107 A", patentYear: 2000, authors: ["Hiroshi Endo"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 312.26206,
      glass: "487702 class (vendor not established)",
      role: "Front positive collector in functional zoom group G1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.0,
      indexReference: "d",
      focalLengthMm: -248.870426,
      glass: "750350 class (lanthanum flint coordinate family; vendor not established)",
      role: "Negative component of the front positive zoom group G1.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 155.615754,
      glass: "Fluorite (CaF2; production correlation)",
      role: "Low-dispersion positive component of G1; fluorite identification is production-correlated.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: -71.239377,
      glass: "713539 class (vendor not established)",
      role: "Front negative component of functional zoom group G2.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: -48.620801,
      glass: "623582 class (S-BSM15/BACD15 coordinate family; vendor not established)",
      role: "Negative member of the cemented pair in G2.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 76.233815,
      glass: "847238 class (dense flint coordinate family; vendor not established)",
      role: "Positive high-dispersion member of the cemented pair in G2.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95.0,
      indexReference: "d",
      focalLengthMm: 71.394018,
      glass: "439950 class (S-FPL53 coordinate; Canon Super UD correlation; vendor not established)",
      role: "Low-dispersion positive component at the front of functional group G3.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.70154,
      vd: 41.2,
      indexReference: "d",
      focalLengthMm: -167.187167,
      glass: "702412 class (vendor not established)",
      role: "Negative middle component of G3.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.62012,
      vd: 49.5,
      indexReference: "d",
      focalLengthMm: 161.249705,
      glass: "K-SSK9 coefficient proxy (patent nd=1.62012, nu_d=49.5; production supplier unspecified)",
      role: "Positive rear component of G3; K-SSK9 supplies a qualified spectral proxy, not a production identity.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: -135.379089,
      glass: "603606 class (SK14 coordinate family; vendor not established)",
      role: "Single negative floating group G4; moves objectward during close focusing.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 109.887227,
      glass: "487702 class (vendor not established)",
      role: "Front positive component of relay group G5.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -68.025992,
      glass: "805254 class (high-index flint coordinate family; vendor not established)",
      role: "Negative component of relay group G5.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 107.219815,
      glass: "516641 class (S-BSL7 coordinate family; vendor not established)",
      role: "Positive component of relay group G5.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.66672,
      vd: 48.3,
      indexReference: "d",
      focalLengthMm: 66.41833,
      glass: "667483 class (BAF11 coordinate family; vendor not established)",
      role: "Rear positive component of relay group G5.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -48.104335,
      glass: "835427 class (S-LAH55V coordinate family; vendor not established)",
      role: "Negative front member of the cemented rear-focus triplet G6.",
      cemented: "T1",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.5,
      indexReference: "d",
      focalLengthMm: 44.640957,
      glass: "728285 class (dense flint coordinate family; vendor not established)",
      role: "Positive middle member of the cemented rear-focus triplet G6.",
      cemented: "T1",
    },
    {
      id: 17,
      name: "E17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -57.598621,
      glass: "773496 class (high-index lanthanum family; vendor not established)",
      role: "Negative rear member of G6; the complete triplet moves imageward during close focusing.",
      cemented: "T1",
    },
  ],

  surfaces: [
    { label: "1", R: 117.449, d: 5.2, sd: 36.0, medium: 1 },
    { label: "2", R: 506.654, d: 0.15, sd: 36.0 },
    { label: "3", R: 108.121, d: 3.5, sd: 36.0, medium: 2 },
    { label: "4", R: 67.497, d: 0.12, sd: 36.0 },
    { label: "5", R: 68.071, d: 10.4, sd: 34.5, medium: 3 },
    { label: "6", R: -7912.525, sd: 34.5 },
    { label: "8", R: -371.134, d: 1.4, sd: 13.85, medium: 4 },
    { label: "9", R: 58.94, d: 3.5, sd: 13.85 },
    { label: "10", R: -57.436, d: 1.4, sd: 14.1, medium: 5 },
    { label: "11", R: 64.689, d: 2.6, sd: 14.1, medium: 6 },
    { label: "12", R: -28288.289, sd: 14.1 },
    { label: "13", R: 225.869, d: 5.9, sd: 15.6, medium: 7 },
    { label: "14", R: -36.078, d: 1.1, sd: 15.6 },
    { label: "15", R: -37.529, d: 2.0, sd: 15.6, medium: 8 },
    { label: "16", R: -56.4, d: 0.2, sd: 15.6 },
    { label: "17", R: 52.957, d: 2.4, sd: 15.6, medium: 9 },
    { label: "18", R: 110.626, d: 3.0, sd: 15.6 },
    { label: "STO", R: "flat" },
    { label: "20", R: -41.96, d: 2.9, sd: 15.3, medium: 10 },
    { label: "21", R: -88.566, sd: 15.3 },
    { label: "22", R: 1463.246, d: 3.5, sd: 15.6, medium: 11 },
    { label: "23", R: -55.561, d: 0.15, sd: 15.6 },
    { label: "24", R: 309.587, d: 1.6, sd: 15.6, medium: 12 },
    { label: "25", R: 46.432, d: 1.3, sd: 15.6 },
    { label: "26", R: 83.246, d: 3.2, sd: 15.6, medium: 13 },
    { label: "27", R: -163.106, d: 0.15, sd: 15.6 },
    { label: "28", R: 41.344, d: 4.0, sd: 15.6, medium: 14 },
    { label: "29", R: 598.945, sd: 15.6 },
    { label: "30", R: 431.689, d: 1.4, sd: 14.8, medium: 15 },
    { label: "31", R: 36.686, d: 3.9, sd: 14.8, medium: 16 },
    { label: "32", R: -272.789, d: 1.4, sd: 14.8, medium: 17 },
    { label: "33", R: 53.286, sd: 14.8 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 102.68, nominalFNumber: 4.6, label: "Wide" },
      { focalLengthMm: 161.53, nominalFNumber: 5.1 },
      { focalLengthMm: 389.19, nominalFNumber: 5.8, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 1.8,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent moves G4 objectward and G6 imageward for closer focus. Canon's rounded 1.8 m MFD and 0.2x maximum-magnification product specifications are used as reconstruction targets while the patent's same-distance G4 travel is held constant across zoom. The resulting precise internal shifts are one compatible paraxial solution, not patent-published spacings or measured production travel.",
  },

  gaps: {
    "6": {
      label: "D6+D7",
      values: [
        [9.74, 9.74],
        [43.09, 43.09],
        [93.13, 93.13],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [20.89, 20.89],
        [15.49, 15.49],
        [6.44, 6.44],
      ],
    },
    STO: {
      label: "D19",
      values: [
        [11.91, 7.947134311205],
        [14.86, 10.897134311205],
        [20.25, 16.287134311205],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [26.8, 30.762865688795],
        [19.97, 23.932865688795],
        [10.38, 14.342865688795],
      ],
    },
    "29": {
      label: "D29",
      values: [
        [22.57, 24.289138512125],
        [18.94, 22.350178920566],
        [1.94, 14.54307165204],
      ],
    },
    "33": {
      label: "BF",
      values: [
        [74.01, 72.290861487875],
        [86.92, 83.509821079434],
        [117.18, 104.57692834796],
      ],
    },
  },

  aperture: { fStops: [4.5, 5.6, 8, 11, 16, 22, 32, 40], maxFNumber: 40, blades: 8 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2 IS", fromSurface: "8", toSurface: "12" },
    { text: "L3", fromSurface: "13", toSurface: "18" },
    { text: "L4", fromSurface: "20", toSurface: "21" },
    { text: "L5", fromSurface: "22", toSurface: "29" },
    { text: "L6", fromSurface: "30", toSurface: "33" },
  ],
  doublets: [],

  layout: { yScFill: 0.36 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
