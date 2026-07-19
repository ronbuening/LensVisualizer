import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Sony FE 20–70 mm F4 G (SEL2070G)            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2023/153076 A1, Example 8 (Tables 36–40).       ║
 * ║  Sony Group Corporation. Inventors: Tasaki, Kumisawa, Juri.       ║
 * ║  16 elements / 13 groups (photographic count), 8 aspherical       ║
 * ║  surfaces on 4 elements (2 AA, 1 ED asph, 1 asph).               ║
 * ║  Six-group retrofocus zoom: positive–negative–positive–positive–  ║
 * ║  negative–negative. Constant F/4.12 (marketed f/4).               ║
 * ║                                                                    ║
 * ║  Zoom positions: Wide 20.71 / Mid 36.05 / Tele 67.56 mm.         ║
 * ║  Extending barrel (total track 115–155 mm). G3+G6 linked cam.    ║
 * ║  Zoom variable gaps: d3, d11, d14A, d30 (zoom only).             ║
 * ║  Focus variable gaps: d22A, d26A (zoom + focus).                  ║
 * ║  Focus: Inner focus via G5 (L51+L52), translates image-ward.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent Table 36 column "φi" lists effective diameters (not     ║
 * ║    semi-diameters). All sd values = φi / 2. Verified via image   ║
 * ║    plane φi = 43.30 mm ≈ FF diagonal (43.27 mm), confirming      ║
 * ║    that φi is the full clear aperture diameter.                    ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent close-focus data at d0 = 299 mm (all zoom positions).   ║
 * ║    Production MFD: 0.30 m (wide) / 0.25 m (tele).                ║
 * ║    Patent data corresponds to MFD ≈ 0.41–0.45 m; production      ║
 * ║    lens achieves closer focus via extended G5 travel beyond the   ║
 * ║    tabulated range.                                                ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-20-70mm-f4-g",
  maker: "Sony",
  name: "SONY FE 20-70mm f/4 G",
  subtitle: "WO 2023/153076 A1 Example 8 — Sony Group / Tasaki, Kumisawa, Juri",
  specs: [
    "16 ELEMENTS / 13 GROUPS",
    "f = 20.71–67.56 mm",
    "F/4.12 (constant)",
    "2ω = 87.8°–35.5°",
    "8 ASPHERICAL SURFACES (4 ELEMENTS)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [20, 70],
  focalLengthDesign: [20.71, 67.56],
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2023/153076 A1",
  patentAuthors: ["涼平 田崎", "悠真 組澤", "比呂生 重里"],
  patentAssignees: ["Sony Group Corp"],
  patentYear: 2023,
  elementCount: 16,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    // G1 — cemented doublet (L11 + L12)
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 18.0,
      fl: -440.2,
      glass: "FDS18 (HOYA)",
      apd: false,
      role: "G1 achromatic flint partner; ultra-high-dispersion phosphate glass",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.6,
      fl: 100.3,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.019; ED fluorophosphate crown",
      role: "G1 achromatic ED crown partner",
      cemented: "D1",
    },
    // G2 — four air-separated elements (L21, L22, L23, L24)
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -20.8,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "G2 primary negative power; retrofocus diverger",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85155,
      vd: 40.1,
      fl: -60.0,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      role: "G2 AA aspherical; distortion and coma correction",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      fl: 35.1,
      glass: "S-NBH56 (OHARA)",
      apd: false,
      role: "G2 internal chromatic corrector; high-dispersion flint",
    },
    {
      id: 6,
      name: "L24",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.59282,
      vd: 68.6,
      fl: -60.9,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.019; ED fluorophosphate crown",
      role: "G2 ED chromatic corrector; second stage G2 achromatization",
    },
    // G3 — single element (L31)
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 55.1,
      glass: "694532 - mold-optimized lanthanum crown (S-LAL13 / M-LAC130 code match)",
      apd: false,
      role: "G3 zoom variator; AA aspherical element",
    },
    // G4 — L41+L42 cemented, L43+L44 cemented, L45
    {
      id: 8,
      name: "L41",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      fl: -44.9,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "G4 primary achromat flint partner; highest nd in system",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L42",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 29.8,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.034; ED fluorophosphate crown",
      role: "G4 primary achromat ED crown; workhorse positive power",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L43",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: 60.7,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "G4 secondary achromat positive element",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L44",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.2,
      fl: -48.8,
      glass: "NBFD25 (HOYA, 855252)",
      apd: false,
      role: "G4 secondary achromat flint partner",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L45",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.5,
      fl: 28.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.034; ED aspherical element (PL1 per patent)",
      role: "G4 ED aspherical corrector; SA + chromatic control",
    },
    // G5 — focus group (L51, L52)
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18.0,
      fl: 98.2,
      glass: "FDS18 (HOYA)",
      apd: false,
      role: "G5 focus group chromatic compensator",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.77002,
      vd: 49.4,
      fl: -28.2,
      glass: "Near S-LAH66 (770/494 variant, Δnd = 0.0025)",
      apd: false,
      role: "G5 focus group primary negative power; aspherical",
    },
    // G6 — rear group (L61, L62)
    {
      id: 15,
      name: "L61",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 109.2,
      glass: "Fluorophosphate crown class (593/670)",
      apd: false,
      role: "G6 field flattener; linked cam with G3",
    },
    {
      id: 16,
      name: "L62",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.7,
      fl: -82.8,
      glass: "Dense flint class (720/347)",
      apd: false,
      role: "G6 field/telecentricity corrector; final chromatic trim",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1 — cemented doublet L11 + L12
    { label: "1", R: 64.762, d: 1.7, nd: 1.94595, elemId: 1, sd: 26.2 },
    { label: "2", R: 55.331, d: 7.5, nd: 1.59282, elemId: 2, sd: 25.41 }, // junction → L12
    { label: "3", R: 760.618, d: 0.8, nd: 1.0, elemId: 0, sd: 24.89 }, // d3 variable (zoom)

    // G2 — L21
    { label: "4", R: 183.794, d: 1.3, nd: 1.7725, elemId: 3, sd: 16.44 },
    { label: "5", R: 14.722, d: 8.42, nd: 1.0, elemId: 0, sd: 11.78 },

    // G2 — L22 (AA, 2× asph)
    { label: "6A", R: -47.619, d: 1.3, nd: 1.85155, elemId: 4, sd: 11.24 },
    { label: "7A", R: -704.225, d: 0.2, nd: 1.0, elemId: 0, sd: 11.04 },

    // G2 — L23
    { label: "8", R: 86.286, d: 3.96, nd: 1.85478, elemId: 5, sd: 10.74 },
    { label: "9", R: -45.02, d: 1.49, nd: 1.0, elemId: 0, sd: 10.31 },

    // G2 — L24
    { label: "10", R: -23.082, d: 1.0, nd: 1.59282, elemId: 6, sd: 9.99 },
    { label: "11", R: -65.076, d: 18.34, nd: 1.0, elemId: 0, sd: 9.6 }, // d11 variable (zoom)

    // Aperture stop
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 9.44 },

    // G3 — L31 (AA, 2× asph)
    { label: "13A", R: 28.485, d: 3.87, nd: 1.6935, elemId: 7, sd: 10.32 },
    { label: "14A", R: 105.907, d: 5.97, nd: 1.0, elemId: 0, sd: 10.2 }, // d14 variable (zoom)

    // G4 — cemented doublet L41 + L42
    { label: "15", R: 23.941, d: 1.39, nd: 1.95375, elemId: 8, sd: 10.38 },
    { label: "16", R: 14.925, d: 5.5, nd: 1.497, elemId: 9, sd: 9.85 }, // junction → L42
    { label: "17", R: -1850.404, d: 4.88, nd: 1.0, elemId: 0, sd: 9.85 },

    // G4 — cemented doublet L43 + L44
    { label: "18", R: -106.096, d: 2.64, nd: 1.60342, elemId: 10, sd: 9.87 },
    { label: "19", R: -27.492, d: 1.0, nd: 1.85451, elemId: 11, sd: 9.92 }, // junction → L44
    { label: "20", R: -82.109, d: 0.3, nd: 1.0, elemId: 0, sd: 10.12 },

    // G4 — L45 (ED asph, 2× asph)
    { label: "21A", R: 42.022, d: 5.9, nd: 1.497, elemId: 12, sd: 10.24 },
    { label: "22A", R: -20.182, d: 3.44, nd: 1.0, elemId: 0, sd: 10.2 }, // d22 variable (zoom+focus)

    // G5 — L51
    { label: "23", R: -46.07, d: 1.8, nd: 1.94595, elemId: 13, sd: 10.39 },
    { label: "24", R: -31.379, d: 1.16, nd: 1.0, elemId: 0, sd: 10.54 },

    // G5 — L52 (asph, 2× asph)
    { label: "25A", R: -44.196, d: 1.0, nd: 1.77002, elemId: 14, sd: 10.39 },
    { label: "26A", R: 43.227, d: 4.96, nd: 1.0, elemId: 0, sd: 10.62 }, // d26 variable (zoom+focus)

    // G6 — L61
    { label: "27", R: 431.39, d: 2.45, nd: 1.59349, elemId: 15, sd: 12.19 },
    { label: "28", R: -76.074, d: 5.76, nd: 1.0, elemId: 0, sd: 12.38 },

    // G6 — L62
    { label: "29", R: -30.895, d: 1.0, nd: 1.72047, elemId: 16, sd: 12.95 },
    { label: "30", R: -64.954, d: 14.51, nd: 1.0, elemId: 0, sd: 13.69 }, // d30 variable (zoom), BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 3.45711e-5,
      A6: -2.90267e-7,
      A8: 1.2101e-9,
      A10: -2.89546e-12,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: 1.82987e-5,
      A6: -3.14005e-7,
      A8: 1.2014e-9,
      A10: -3.43951e-12,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: 9.979e-7,
      A6: 2.32833e-8,
      A8: 4.07896e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 1.00265e-5,
      A6: 3.82113e-8,
      A8: 4.3399e-10,
      A10: 7.09846e-13,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -1.99923e-5,
      A6: 1.43766e-8,
      A8: -8.84773e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: 2.9736e-5,
      A6: -5.24644e-8,
      A8: -2.28818e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 5.12601e-6,
      A6: -6.942e-8,
      A8: 8.91091e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 2.56539e-6,
      A6: -1.42392e-8,
      A8: 7.41628e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [20.71, 36.05, 67.56],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom + focus) ── */
  var: {
    // Zoom-only gaps (identical inf/close values)
    "3": [
      [0.8, 0.8],
      [13.41, 13.41],
      [32.6, 32.6],
    ],
    "11": [
      [18.34, 18.34],
      [8.53, 8.53],
      [2.0, 2.0],
    ],
    "14A": [
      [5.97, 5.97],
      [2.77, 2.77],
      [1.0, 1.0],
    ],
    "30": [
      [14.51, 14.51],
      [23.95, 23.95],
      [39.01, 39.01],
    ],
    // Zoom + focus gaps (different inf/close values)
    "22A": [
      [3.44, 4.49],
      [2.77, 4.63],
      [2.3, 6.12],
    ],
    "26A": [
      [4.96, 3.91],
      [8.83, 6.97],
      [11.07, 7.25],
    ],
  },
  varLabels: [
    ["3", "D3"],
    ["11", "D11"],
    ["14A", "D14"],
    ["22A", "D22"],
    ["26A", "D26"],
    ["30", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "11" },
    { text: "G3", fromSurface: "13A", toSurface: "14A" },
    { text: "G4", fromSurface: "15", toSurface: "22A" },
    { text: "G5", fromSurface: "23", toSurface: "26A" },
    { text: "G6", fromSurface: "27", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Inner focus via G5 (L51+L52); translates image-ward for close focus. Two XD linear motors.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  apertureBlades: 9,
  fstopSeries: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
