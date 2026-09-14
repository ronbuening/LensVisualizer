import type { LensDataInput } from "../../types/optics.js";

/** US20190278068A1 Numerical Example 5, PDF page 23 and Figure 9.
 * All three source infinity-focus zoom stations retained; no finite-focus table.
 * Published effective diameters define SDs subject to explicit rendering limits.
 * No filter or cover-glass rows occur in this selected prescription.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24-70-f28",
  maker: "Canon",
  name: "CANON RF 24-70mm f/2.8 L IS USM",
  subtitle: "US 2019/0278068 A1 EXAMPLE 5 — CANON / HATADA",
  specs: [
    "21 ELEMENTS / 15 GROUPS",
    "f = 24.7–67.9 mm",
    "F/2.91",
    "Infinity-focus model; centered IS",
    "2ω = 82.4°–35.4°",
    "5 ASPHERICAL SURFACES / 3 ELEMENTS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 70] as [number, number],
  focalLengthDesign: [24.72, 67.89] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2019/0278068 A1",
  patentAuthors: ["Takahiro Hatada"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2019,
  elementCount: 21,
  groupCount: 15,

  /* ── Elements ── */
  elements: [
    // ── Unit 1: Front positive group (f = +113.48 mm) ──
    {
      id: 1,
      name: "G1n",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.8,
      fl: -184.26,
      glass: "S-NPH1 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D1",
      role: "Negative Meniscus element of cemented doublet D1",
    },
    {
      id: 2,
      name: "G2p",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 160.58,
      glass: "S-LAH66 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D1",
      role: "Positive Meniscus element of cemented doublet D1",
    },
    {
      id: 3,
      name: "G3p",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 122.21,
      glass: "S-LAL18 — compatible catalog counterpart; patent identity unspecified",
      role: "Positive Meniscus singlet",
    },
    // ── Unit 2: Variator / zoom diverging group (f = −18.58 mm) ──
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -29.56,
      glass: "S-LAH58 — compatible catalog counterpart; patent identity unspecified",
      role: "Negative Meniscus singlet",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      fl: -36.22,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D2",
      role: "Biconcave Negative element of cemented doublet D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 42.59,
      glass: "S-NBH56 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D2",
      role: "Positive Meniscus element of cemented doublet D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -59.15,
      glass: "S-LAL18 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconcave Negative singlet",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      fl: 33.41,
      glass: "S-FTM16 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D3",
      role: "Biconvex Positive element of cemented doublet D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -45,
      glass: "S-LAH55V — compatible catalog counterpart; patent identity unspecified",
      cemented: "D3",
      role: "Negative Meniscus element of cemented doublet D3",
    },
    // ── Unit 3: Aperture stop + relay group (f = +35.84 mm) ──
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      fl: 44.79,
      glass: "S-LAH96 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconvex Positive singlet",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 38.2,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D4",
      role: "Biconvex Positive element of cemented doublet D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -44.38,
      glass: "TAFD40 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D4",
      role: "Negative Meniscus element of cemented doublet D4",
    },
    // ── Unit 4: Image stabilization group (f = −69.07 mm) ──
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -45.29,
      glass: "S-BAL42 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D5",
      role: "Biconcave Negative (1× Asph) element of cemented doublet D5; centered IS group",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.5,
      fl: 129.1,
      glass: "S-TIH14 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D5",
      role: "Positive Meniscus element of cemented doublet D5; centered IS group",
    },
    // ── Unit 5: Main converging group (f = +28.29 mm) ──
    {
      id: 15,
      name: "Gfp",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 39.6,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive singlet",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.3,
      fl: -120,
      glass: "J-KZFH9 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D6",
      role: "Negative Meniscus element of cemented doublet D6",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 37.59,
      glass: "S-FPM3 — compatible catalog counterpart; patent identity unspecified",
      cemented: "D6",
      role: "Biconvex Positive element of cemented doublet D6",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -126.62,
      glass: "L-LAH85V — compatible catalog counterpart; patent identity unspecified",
      role: "Biconcave Negative (2× Asph) singlet",
    },
    // ── Unit 6: Focus group (f = −49.77 mm) ──
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -49.77,
      glass: "S-LAH65 — compatible catalog counterpart; patent identity unspecified",
      role: "Negative Meniscus singlet; source focus group, finite motion unavailable",
    },
    // ── Unit 7: Rear field-flattening group (f = +785.94 mm) ──
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -91.93,
      glass: "S-BAL42 — compatible catalog counterpart; patent identity unspecified",
      role: "Negative Meniscus (2× Asph) singlet",
    },
    {
      id: 21,
      name: "Grp",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 84.48,
      glass: "TAFD55 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconvex Positive singlet",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Unit 1 (L1): E1–E3, front positive group ──
    { label: "1", R: 232.357, d: 2.1, nd: 1.80809, elemId: 1, sd: 34.345 }, // G1n front
    { label: "2", R: 90.381, d: 5.78, nd: 1.7725, elemId: 2, sd: 32.975 }, // G1n→G2p junction
    { label: "3", R: 323.713, d: 0.15, nd: 1.0, elemId: 0, sd: 32.69 }, // G2p rear → air
    { label: "4", R: 59.139, d: 7.05, nd: 1.72916, elemId: 3, sd: 30.335 }, // G3p front
    { label: "5", R: 166.984, d: 0.8, nd: 1.0, elemId: 0, sd: 29.73 }, // G3p rear → air (variable: L1→L2)

    // ── Unit 2 (L2): E4–E9, variator ──
    { label: "6", R: 67.802, d: 1.4, nd: 1.883, elemId: 4, sd: 19.265 }, // E4 front
    { label: "7", R: 18.663, d: 8.67, nd: 1.0, elemId: 0, sd: 14.595 }, // E4 rear → air
    { label: "8", R: -115.164, d: 1.2, nd: 1.497, elemId: 5, sd: 14.17 }, // E5 front (UD 1)
    { label: "9", R: 21.412, d: 3.87, nd: 1.85478, elemId: 6, sd: 12.435 }, // E5→E6 junction
    { label: "10", R: 47.653, d: 4.17, nd: 1.0, elemId: 0, sd: 11.93 }, // E6 rear → air
    { label: "11", R: -48.039, d: 1.0, nd: 1.72916, elemId: 7, sd: 11.34 }, // E7 front
    { label: "12", R: 425.782, d: 0.29, nd: 1.0, elemId: 0, sd: 11.02 }, // E7 rear → air
    { label: "13", R: 93.568, d: 6.03, nd: 1.5927, elemId: 8, sd: 10.865 }, // E8 front
    { label: "14", R: -24.518, d: 1.05, nd: 1.83481, elemId: 9, sd: 11.25 }, // E8→E9 junction
    { label: "15", R: -71.957, d: 16.15, nd: 1.0, elemId: 0, sd: 11.925 }, // E9 rear → air (variable: L2→L3)

    // ── Unit 3 (L3): Stop + E10–E12, relay group ──
    { label: "STO", R: 1e15, d: 0.4, nd: 1.0, elemId: 0, sd: 12.955 }, // Aperture stop
    { label: "17", R: 78.059, d: 4.31, nd: 1.76385, elemId: 10, sd: 13.43 }, // E10 front
    { label: "18", R: -59.447, d: 0.15, nd: 1.0, elemId: 0, sd: 13.565 }, // E10 rear → air
    { label: "19", R: 40.155, d: 7.4, nd: 1.497, elemId: 11, sd: 13.46 }, // E11 front (UD 2)
    { label: "20", R: -33.807, d: 1.1, nd: 2.00069, elemId: 12, sd: 13.135 }, // E11→E12 junction
    { label: "21", R: -143.919, d: 2.26, nd: 1.0, elemId: 0, sd: 13.165 }, // E12 rear → air (variable: L3→L4)

    // ── Unit 4 (L4): E13–E14, IS group ──
    { label: "22A", R: -63.149, d: 1.65, nd: 1.58313, elemId: 13, sd: 13.03 }, // E13 front (asph)
    { label: "23", R: 45.825, d: 1.92, nd: 1.76182, elemId: 14, sd: 13.135 }, // E13→E14 junction
    { label: "24", R: 84.251, d: 11.08, nd: 1.0, elemId: 0, sd: 13.12 }, // E14 rear → air (variable: L4→L5)

    // ── Unit 5 (L5): E15–E18, main converging group ──
    { label: "25", R: 26.393, d: 8.28, nd: 1.497, elemId: 15, sd: 13.705 }, // E15 front (Gfp, UD 3)
    { label: "26", R: -69.36, d: 0.35, nd: 1.0, elemId: 0, sd: 13.625 }, // E15 rear → air
    { label: "27", R: 39.335, d: 1.15, nd: 1.738, elemId: 16, sd: 13.45 }, // E16 front
    { label: "28", R: 26.899, d: 7.03, nd: 1.53775, elemId: 17, sd: 13.07 }, // E16→E17 junction
    { label: "29", R: -73.879, d: 0.15, nd: 1.0, elemId: 0, sd: 12.75 }, // E17 rear → air
    { label: "30A", R: -602.944, d: 1.7, nd: 1.854, elemId: 18, sd: 12.64 }, // E18 front (asph)
    { label: "31A", R: 131.941, d: 2.16, nd: 1.0, elemId: 0, sd: 12.45 }, // E18 rear → air (asph, variable: L5→L6)

    // ── Unit 6 (L6): E19, focus group ──
    { label: "32", R: 60.209, d: 0.9, nd: 1.804, elemId: 19, sd: 12.755 }, // E19 front
    { label: "33", R: 23.878, d: 12.96, nd: 1.0, elemId: 0, sd: 12.53 }, // E19 rear → air (variable: L6→L7)

    // ── Unit 7 (L7): E20–E21, rear field-flattening group ──
    { label: "34A", R: -52.714, d: 1.7, nd: 1.58313, elemId: 20, sd: 14.925 }, // E20 front (asph)
    { label: "35A", R: -3211.285, d: 0.15, nd: 1.0, elemId: 0, sd: 16.485 }, // E20 rear → air (asph)
    { label: "36", R: 317.277, d: 3.23, nd: 2.001, elemId: 21, sd: 17.635 }, // E21 front (Grp)
    { label: "37", R: -114.7, d: 14.37, nd: 1.0, elemId: 0, sd: 17.91 }, // E21 rear → BFD (variable)
  ],

  /* ── Aspherical coefficients ──
   *  All 5 aspherical surfaces have K = 0 (spherical base + polynomial).
   *  Patent uses A4–A12 coefficients; A14 not used (set to 0).
   */
  asph: {
    "22A": {
      K: 0,
      A4: 3.0128e-6,
      A6: -9.03767e-10,
      A8: 5.61555e-11,
      A10: -4.27609e-13,
      A12: 9.23668e-16,
      A14: 0,
    },
    "30A": {
      K: 0,
      A4: -5.55314e-5,
      A6: 2.1406e-7,
      A8: -4.57909e-11,
      A10: -2.74784e-12,
      A12: 6.52571e-15,
      A14: 0,
    },
    "31A": {
      K: 0,
      A4: -3.4544e-5,
      A6: 2.65378e-7,
      A8: -1.27555e-10,
      A10: -2.4098e-12,
      A12: 7.25838e-15,
      A14: 0,
    },
    "34A": {
      K: 0,
      A4: -3.28022e-5,
      A6: 1.26827e-7,
      A8: -2.01507e-10,
      A10: -1.636e-12,
      A12: 4.86504e-15,
      A14: 0,
    },
    "35A": {
      K: 0,
      A4: -3.30256e-5,
      A6: 1.44829e-7,
      A8: -5.66682e-10,
      A10: 8.17897e-13,
      A12: -2.19929e-16,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom only — no close-focus data available) ──
   *  Zoom format: each value is [[d_inf, d_close], ...] per zoom position.
   *  Since the patent provides only infinity-focus data, d_inf === d_close for all gaps.
   *  Focus group is L6 (E19); in production, gaps D31 and D33 would vary during focus.
   */
  var: {
    "5": [
      [0.8, 0.8],
      [17.98, 17.98],
      [29.93, 29.93],
    ], // L1→L2 (zoom only)
    "15": [
      [16.15, 16.15],
      [7.07, 7.07],
      [2.4, 2.4],
    ], // L2→L3 (zoom only)
    "21": [
      [2.26, 2.26],
      [2.23, 2.23],
      [2.54, 2.54],
    ], // L3→L4 (zoom only, NON-MONOTONIC)
    "24": [
      [11.08, 11.08],
      [4.97, 4.97],
      [2.87, 2.87],
    ], // L4→L5 (zoom only)
    "31A": [
      [2.16, 2.16],
      [1.42, 1.42],
      [1.33, 1.33],
    ], // L5→L6 (zoom only; focus would vary this gap)
    "33": [
      [12.96, 12.96],
      [13.7, 13.7],
      [13.79, 13.79],
    ], // L6→L7 (zoom only; focus would vary this gap)
    "37": [
      [14.37, 14.37],
      [26.78, 26.78],
      [35.69, 35.69],
    ], // BF (zoom only; L6 focus does not move L7)
  },

  varLabels: [
    ["5", "D5"],
    ["15", "D15"],
    ["21", "D21"],
    ["24", "D24"],
    ["31A", "D31"],
    ["33", "D33"],
    ["37", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [24.72, 44.86, 67.89],
  zoomStep: 0.004,
  zoomLabels: ["24.72 mm", "67.89 mm"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (−)", fromSurface: "6", toSurface: "15" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "21" },
    { text: "L4 (−) IS", fromSurface: "22A", toSurface: "24" },
    { text: "L5 (+)", fromSurface: "25", toSurface: "31A" },
    { text: "L6 (−) AF", fromSurface: "32", toSurface: "33" },
    { text: "L7 (+)", fromSurface: "34A", toSurface: "37" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" }, // E1+E2
    { text: "D2", fromSurface: "8", toSurface: "10" }, // E5+E6
    { text: "D3", fromSurface: "13", toSurface: "15" }, // E8+E9
    { text: "D4", fromSurface: "19", toSurface: "21" }, // E11+E12
    { text: "D5", fromSurface: "22A", toSurface: "24" }, // E13+E14
    { text: "D6", fromSurface: "27", toSurface: "29" }, // E16+E17
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.21, // Canon-specified MFD (wide end); tele MFD is 0.38 m
  focusDescription:
    "Infinity-focus model: the patent describes rearward focus motion of L6 (E19) but publishes no finite-focus gaps. Focus is disabled; the 0.21 m label is retained retail metadata, not a modeled conjugate. IS is centered. Numerical zoom gaps take precedence over the contradictory all-groups-objectward narrative. Only D31 and D33 change for isolated L6 focus motion; BF belongs to zoom.",

  /* ── Aperture configuration ── */
  zoomApertureModel: "from-nominal-fno",
  nominalFno: 2.91,
  fstopSeries: [2.91, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.22,
} satisfies LensDataInput;

export default LENS_DATA;
