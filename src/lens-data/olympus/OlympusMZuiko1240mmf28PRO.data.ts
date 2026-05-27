import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS M.ZUIKO DIGITAL ED 12–40 mm f/2.8 PRO        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0139720 A1, Example 5 (¶0259).               ║
 * ║  Applicant: Olympus Imaging Corp. Inventors: Ogata et al.          ║
 * ║  Five-unit zoom: P–N–P–N–P (G1–G5).  14 elements / 9 groups.      ║
 * ║  6 aspherical surfaces on 4 elements (DSA, HD, EDA, asph).        ║
 * ║  Focus: inner focus via G4 (cemented doublet, toward image).       ║
 * ║  G5 stationary during zoom and focus (dust-sealed rear element).   ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d3, d10 (zoom only).                         ║
 * ║  Focus variable gaps: d18, d21 (zoom + focus).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. SDs are estimated from     ║
 * ║    FIGS. 5A–5C (Example 5) and ray clearance, then reduced where   ║
 * ║    edge thickness, conic height, or tight air gaps set stricter    ║
 * ║    geometric limits. FIG. 5B is the primary silhouette reference:  ║
 * ║    G1 is kept below the 62 mm filter-thread cap, G4 is opened up, ║
 * ║    and G5 sits near the L14 edge-thickness limit. G2 surfaces      ║
 * ║    5→6 and 8→9 remain the binding air-gap constraints.            ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent close-focus data at 0.25 m object-to-image distance.     ║
 * ║    Production MFD is 0.20 m (manufacturer spec takes precedence).  ║
 * ║    var gaps reflect the patent's 0.25 m condition.                 ║
 * ║                                                                    ║
 * ║  Cover glass excluded; BFD folded to air-equivalent (≈ 15.997).   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-mzuiko-12-40-f28-pro",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 12–40 mm f/2.8 PRO",
  subtitle: "US 2014/0139720 A1 EXAMPLE 5 — OLYMPUS / OGATA",
  specs: [
    "14 ELEMENTS / 9 GROUPS",
    "f = 12.25–39.10 mm",
    "F/2.88 CONSTANT",
    "2ω ≈ 88.9°–30.5°",
    "6 ASPHERICAL SURFACES (4 ELEMENTS)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [12, 40],
  focalLengthDesign: [12.25, 39.1],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2014,
  elementCount: 14,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: -245.0,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "HR candidate. Ultra-high-index dense flint; chromatic pre-corrector in G1 doublet.",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.53,
      fl: 80.7,
      glass: "S-LAL14 (OHARA) — lanthanum crown (697555)",
      apd: false,
      role: "Crown partner for G1 achromatic doublet. Moderate dispersion balances L1.",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.7432,
      vd: 49.29,
      fl: -18.9,
      glass: "S-LAM60 (OHARA) — lanthanum (743493)",
      apd: false,
      role: "DSA (Dual Super Aspherical). Strongest single element in G2; dual aspherics correct SA and coma.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.54,
      fl: -44.3,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, νd = 81.54. One of two standalone ED elements.",
      role: "ED element in G2 achromatic doublet (cemented with L5).",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.51,
      fl: 304.5,
      glass: "S-TIH4 (OHARA) — dense flint",
      apd: false,
      role: "Flint partner in G2 ED achromat. High-index positive for Petzval sum control (cond. 9).",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -49.0,
      glass: "S-LAH66 (OHARA) — high-index lanthanum (773496)",
      apd: false,
      role: "Field-flattening element at rear of G2. Controls divergence angle toward stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      fl: 42.0,
      glass: "L-BAL42 (OHARA) — PGM barium crown",
      apd: false,
      role: "HD (High Definition) element (inferred from PGM glass + dual asph). Primary SA corrector for G3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 38.5,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, νd = 81.54. Second standalone ED element. Satisfies cond. (1): ν₃ₚ = 81.54.",
      role: "ED element in G3. Principal axial chromatic corrector at the telephoto end.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.42,
      fl: -31.0,
      glass: "S-TIH6 (OHARA) / SF6 (Schott) — dense flint (805254)",
      apd: false,
      role: "Dense flint in G3 cemented ED achromat (with L10).",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.497,
      vd: 81.54,
      fl: 21.2,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote: "EDA (ED Aspherical). ED glass with aspherical rear surface (S18A).",
      role: "EDA element. ED crown partner for L9; rear asph corrects coma in image-side G3 sub-unit.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.8061,
      vd: 40.88,
      fl: -16.3,
      glass: "S-LAH53 (OHARA) — high-index lanthanum (806409)",
      apd: false,
      role: "Focus group front element. Aspherical front surface (S19A) maintains focus-dependent aberration balance.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 53.9,
      glass: "946180 — extreme high-dispersion dense flint (patent nd=1.94595, νd=17.98)",
      apd: false,
      role: "HR candidate. Achromatizing dense flint partner in G4 negative cemented doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.46,
      fl: -92.2,
      glass: "TAFD40 (HOYA) — ultra-high-index dense flint (001255)",
      apd: false,
      role: "HR candidate (nd > 2.0). Negative element in stationary G5; final Petzval corrector.",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.58313,
      vd: 59.38,
      fl: 23.9,
      glass: "L-BAL42 (OHARA) — PGM barium crown",
      apd: false,
      role: "Crown partner in stationary G5 doublet. Ensures quasi-telecentric exit pupil for MFT sensor.",
      cemented: "D5",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ─── G1: L1 + L2 (cemented doublet) ───
    { label: "1", R: 55.0572, d: 2.4, nd: 1.92286, elemId: 1, sd: 26.0 },
    { label: "2", R: 44.2744, d: 7.101, nd: 1.6968, elemId: 2, sd: 26.0 }, // L1→L2 junction
    { label: "3", R: 207.849, d: 0.8433, nd: 1.0, elemId: 0, sd: 24.2 }, // L2 rear → air (d3 zoom var)

    // ─── G2: L3 / L4+L5 / L6 ───
    { label: "4A", R: 159.5696, d: 1.5, nd: 1.7432, elemId: 3, sd: 11.0 }, // L3 front (DSA asph)
    { label: "5A", R: 12.8384, d: 7.332, nd: 1.0, elemId: 0, sd: 9.6 }, // L3 rear (DSA asph) → air
    { label: "6", R: -22.1355, d: 1.2, nd: 1.497, elemId: 4, sd: 15.0 }, // L4 front (ED)
    { label: "7", R: 22.1355, d: 4.241, nd: 1.7552, elemId: 5, sd: 15.0 }, // L4→L5 junction
    { label: "8", R: -56.895, d: 1.807, nd: 1.0, elemId: 0, sd: 8.3 }, // L5 rear → air
    { label: "9", R: -16.7113, d: 1.1, nd: 1.7725, elemId: 6, sd: 12.8 }, // L6 front
    { label: "10", R: -29.9316, d: 19.7674, nd: 1.0, elemId: 0, sd: 12.8 }, // L6 rear → air (d10 zoom var)

    // ─── Aperture stop ───
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 10.0 },

    // ─── G3: L7 / L8 / L9+L10 ───
    { label: "12A", R: 29.3834, d: 4.596, nd: 1.58313, elemId: 7, sd: 11.5 }, // L7 front (HD asph)
    { label: "13A", R: -148.0986, d: 3.53, nd: 1.0, elemId: 0, sd: 11.5 }, // L7 rear (HD asph) → air
    { label: "14", R: 91.1635, d: 4.632, nd: 1.497, elemId: 8, sd: 12.2 }, // L8 front (ED)
    { label: "15", R: -24.2108, d: 0.13, nd: 1.0, elemId: 0, sd: 12.2 }, // L8 rear → air
    { label: "16", R: 42.3361, d: 1.2, nd: 1.80518, elemId: 9, sd: 12.5 }, // L9 front
    { label: "17", R: 15.6885, d: 8.296, nd: 1.497, elemId: 10, sd: 12.5 }, // L9→L10 junction
    { label: "18A", R: -32.0641, d: 1.8876, nd: 1.0, elemId: 0, sd: 12.0 }, // L10 rear (EDA asph) → air (d18 var)

    // ─── G4: L11 + L12 (cemented doublet, focus group) ───
    { label: "19A", R: 573.6706, d: 0.92, nd: 1.8061, elemId: 11, sd: 10.2 }, // L11 front (asph)
    { label: "20", R: 12.8813, d: 2.041, nd: 1.94595, elemId: 12, sd: 10.2 }, // L11→L12 junction
    { label: "21", R: 17.2342, d: 4.6989, nd: 1.0, elemId: 0, sd: 10.0 }, // L12 rear → air (d21 var)

    // ─── G5: L13 + L14 (cemented doublet, stationary) ───
    { label: "22", R: 30.0105, d: 1.395, nd: 2.00069, elemId: 13, sd: 13.2 }, // L13 front
    { label: "23", R: 22.6466, d: 7.173, nd: 1.58313, elemId: 14, sd: 13.2 }, // L13→L14 junction
    { label: "24", R: -36.2011, d: 15.997, nd: 1.0, elemId: 0, sd: 13.2 }, // L14 rear → image (BFD air-equiv)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "4A": {
      K: -9.0073,
      A4: 1.7086e-5,
      A6: 7.3258e-8,
      A8: -5.0052e-10,
      A10: 1.3518e-12,
      A12: 0,
      A14: 0,
    },
    "5A": {
      K: 0.2022,
      A4: -2.0814e-5,
      A6: -1.0324e-7,
      A8: 2.0273e-9,
      A10: -2.2396e-11,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: -2.136,
      A4: 7.7286e-7,
      A6: -5.8809e-8,
      A8: -8.1816e-10,
      A10: -3.2776e-12,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 8.4339,
      A4: 4.0121e-5,
      A6: -3.1751e-8,
      A8: -1.2712e-9,
      A10: -5.4995e-13,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: -0.7208,
      A4: 5.6768e-7,
      A6: 1.3061e-8,
      A8: 1.1822e-11,
      A10: -1.162e-14,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 9.0337,
      A4: -1.7254e-6,
      A6: -4.0437e-8,
      A8: 3.1029e-9,
      A10: -3.4898e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom format: one [d_inf, d_close] pair per zoom position.
   *  d3, d10: zoom-only gaps (identical inf/close values).
   *  d18, d21: zoom + focus gaps (G4 moves toward image for close focus).
   *  Close-focus data at 0.25 m object-to-image distance (patent ¶0252).
   */
  var: {
    "3": [
      [0.8433, 0.8433],
      [3.1723, 3.1723],
      [26.5044, 26.5044],
    ],
    "10": [
      [19.7674, 19.7674],
      [6.3586, 6.3586],
      [1.0555, 1.0555],
    ],
    "18A": [
      [1.8876, 2.4446],
      [8.2567, 9.8217],
      [13.0735, 17.5045],
    ],
    "21": [
      [4.6989, 4.1419],
      [9.7482, 8.1832],
      [11.7552, 7.3242],
    ],
  },

  varLabels: [
    ["3", "D3"],
    ["10", "D10"],
    ["18A", "D18"],
    ["21", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [12.25, 21.92, 39.1],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−)", fromSurface: "4A", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "12A", toSurface: "18A" },
    { text: "G4 (−) FOCUS", fromSurface: "19A", toSurface: "21" },
    { text: "G5 (+) FIXED", fromSurface: "22", toSurface: "24" },
  ],

  doublets: [
    { text: "Ja", fromSurface: "1", toSurface: "3" },
    { text: "Jb", fromSurface: "6", toSurface: "8" },
    { text: "Jc", fromSurface: "16", toSurface: "18A" },
    { text: "Jd", fromSurface: "19A", toSurface: "21" },
    { text: "Je", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Inner focus via G4 (cemented negative doublet L11+L12). G4 translates toward the image side for close focus. " +
    "All other groups stationary during focus. Supports wobbling for video CDAF.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
