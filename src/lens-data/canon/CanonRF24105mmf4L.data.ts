import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 24-105mm f/4 L IS USM                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0278068 A1, Example 2 (Hatada / Canon).     ║
 * ║  Six-unit zoom: +/−/+/−/−/+ with extended rear group.             ║
 * ║  18 elements / 14 groups, 6 aspherical surfaces (3 GMo elements). ║
 * ║  Focus: inner focus via L4 (single element, rearward motion).     ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D13, D31, D33 (zoom only).              ║
 * ║  Focus variable gaps: D27, D29 (zoom + focus; close-focus data    ║
 * ║    unavailable from patent — estimated from 0.45 m MFD).          ║
 * ║  Reversing groups: D27 (non-monotonic), D29 (non-monotonic).      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent lists effective diameters; sd = effective_diameter / 2.  ║
 * ║    Values taken directly from patent Table (Numerical Example 2). ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24-105-f4-l",
  maker: "Canon",
  name: "CANON RF 24-105mm f/4 L IS USM",
  subtitle: "US 2019/0278068 A1 EXAMPLE 2 — HATADA / CANON",
  specs: [
    "18 ELEMENTS / 14 GROUPS",
    "f = 24.72 – 101.84 mm",
    "F/4.12 (design)",
    "2ω ≈ 82.4° – 24.0°",
    "6 ASPHERICAL SURFACES (3 GMo ELEMENTS)",
    "1 UD ELEMENT",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 105] as [number, number],
  focalLengthDesign: [24.72, 101.84] as [number, number],
  apertureMarketing: 4,
  apertureDesign: 4.12,
  patentYear: 2019,
  elementCount: 18,
  groupCount: 14,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -178.8,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "G1n — high-dispersion negative front element; drives compactness via low Abbe number",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex",
      nd: 1.72916,
      vd: 54.7,
      fl: 128.1,
      glass: "S-BAL14 (OHARA)",
      apd: false,
      role: "G2p — cemented to L1; chromatic corrector within front group",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 108.8,
      glass: "S-BAL14 (OHARA)",
      apd: false,
      role: "G3p — primary converging power of L1 unit",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      fl: -20.7,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Front element of variator; strong negative power in ultra-dense flint",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -37.8,
      glass: "L-BAL35 (OHARA)",
      apd: false,
      role: "Glass-molded aspheric #1 in variator; corrects SA and coma",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8081,
      vd: 22.8,
      fl: 25.7,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Symmetric biconvex in variator; chromatic counterbalance to L4/L5",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -53.6,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Rear variator element; field-flattening meniscus",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Convex",
      nd: 1.91082,
      vd: 35.3,
      fl: 49.4,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "First element after stop; starts beam convergence in relay group",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      fl: -37.3,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Negative component of achromatic doublet in relay",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 21.7,
      glass: "MC-7 (HOYA)",
      apd: false,
      role: "Positive component of achromatic doublet; phosphate crown for axial color correction",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.74951,
      vd: 35.3,
      fl: -19.3,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      role: "Negative component of IS doublet",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: 30.5,
      glass: "S-NPH53 (OHARA)",
      apd: false,
      role: "IS subunit — ultra-high-index positive element for Petzval correction and IS shift control",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      fl: -32.7,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Negative component of Gfp achromatizing doublet",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Plano-Convex",
      nd: 1.497,
      vd: 81.5,
      fl: 38.5,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown (UD glass); anomalous partial dispersion for secondary spectrum correction",
      role: "Gfp — UD element for secondary-spectrum correction adjacent to IS group",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 22.5,
      glass: "L-BAL35 (OHARA)",
      apd: false,
      role: "Glass-molded aspheric #2; strongest positive element in relay group",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: -40.8,
      glass: "S-BAL14 (OHARA)",
      apd: false,
      role: "Focus group — single lightweight inner-focus element (Nano USM driven)",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.7645,
      vd: 49.1,
      fl: -68.4,
      glass: "L-LAM69 (OHARA)",
      apd: false,
      role: "Glass-molded aspheric #3; aggressive aspherization (~1.6 mm departure) for field curvature/distortion",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: 72.4,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Grp — high-index rear positive element; corrects lateral color vs G1n across zoom range",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── L1: Unit L1 (positive, f = +88.25 mm) ──
    // L1 + L2 cemented doublet (D1)
    { label: "1", R: 266.275, d: 1.8, nd: 1.8081, elemId: 1, sd: 31.5 },
    { label: "2", R: 93.368, d: 6.52, nd: 1.72916, elemId: 2, sd: 30.65 }, // junction → L2
    { label: "3", R: 1e15, d: 0.15, nd: 1.0, elemId: 0, sd: 30.44 }, // L2 rear → air
    // L3 standalone
    { label: "4", R: 49.826, d: 6.97, nd: 1.72916, elemId: 3, sd: 27.97 },
    { label: "5", R: 126.155, d: 0.75, nd: 1.0, elemId: 0, sd: 27.37 }, // variable gap L1→L2

    // ── L2: Unit L2 (negative, f = −18.38 mm) ──
    // L4 standalone
    { label: "6", R: 65.832, d: 1.25, nd: 1.95375, elemId: 4, sd: 15.69 },
    { label: "7", R: 15.019, d: 8.19, nd: 1.0, elemId: 0, sd: 11.72 },
    // L5 standalone (both surfaces aspherical)
    { label: "8A", R: -33.476, d: 1.1, nd: 1.58313, elemId: 5, sd: 11.44 },
    { label: "9A", R: 65.137, d: 0.15, nd: 1.0, elemId: 0, sd: 10.98 },
    // L6 standalone (symmetric biconvex)
    { label: "10", R: 40.325, d: 5.03, nd: 1.8081, elemId: 6, sd: 10.86 },
    { label: "11", R: -40.325, d: 0.97, nd: 1.0, elemId: 0, sd: 10.42 },
    // L7 standalone
    { label: "12", R: -25.491, d: 1.0, nd: 1.804, elemId: 7, sd: 10.28 },
    { label: "13", R: -63.435, d: 21.53, nd: 1.0, elemId: 0, sd: 10.05 }, // variable gap L2→L3

    // ── L3: Unit L3 (positive, f = +24.16 mm) ──
    // Aperture stop
    { label: "STO", R: 1e15, d: 0.3, nd: 1.0, elemId: 0, sd: 9.68 },
    // L8 standalone (plano-convex)
    { label: "14", R: 44.965, d: 2.3, nd: 1.91082, elemId: 8, sd: 9.97 },
    { label: "15", R: 1e15, d: 0.15, nd: 1.0, elemId: 0, sd: 9.97 },
    // L9 + L10 cemented doublet (D2)
    { label: "16", R: 21.533, d: 1.0, nd: 1.95375, elemId: 9, sd: 9.95 },
    { label: "17", R: 13.108, d: 6.76, nd: 1.59522, elemId: 10, sd: 9.33 }, // junction → L10
    { label: "18", R: -795.231, d: 1.37, nd: 1.0, elemId: 0, sd: 9.05 }, // L10 rear → air
    // L11 + L12 cemented doublet (D3) — IS subunit
    { label: "19", R: -152.936, d: 0.8, nd: 1.74951, elemId: 11, sd: 8.85 },
    { label: "20", R: 16.038, d: 2.88, nd: 2.00069, elemId: 12, sd: 8.6 }, // junction → L12
    { label: "21", R: 30.717, d: 3.81, nd: 1.0, elemId: 0, sd: 8.39 }, // L12 rear → air
    // L13 + L14 cemented doublet (D4) — Gfp
    { label: "22", R: 76.401, d: 0.75, nd: 1.78472, elemId: 13, sd: 8.4 },
    { label: "23", R: 19.11, d: 3.57, nd: 1.497, elemId: 14, sd: 8.3 }, // junction → L14
    { label: "24", R: 1e15, d: 0.15, nd: 1.0, elemId: 0, sd: 8.36 }, // L14 rear → air
    // L15 standalone (both surfaces aspherical)
    { label: "25A", R: 24.461, d: 7.26, nd: 1.58313, elemId: 15, sd: 9.31 },
    { label: "26A", R: -25.212, d: 1.8, nd: 1.0, elemId: 0, sd: 9.88 }, // variable gap L3→L4

    // ── L4: Unit L4 (negative, f = −40.84 mm) — Focus group ──
    { label: "27", R: 121.315, d: 0.75, nd: 1.72916, elemId: 16, sd: 10.0 },
    { label: "28", R: 23.846, d: 11.59, nd: 1.0, elemId: 0, sd: 9.95 }, // variable gap L4→L5

    // ── L5: Unit L5 (negative, f = −68.35 mm) ──
    { label: "29A", R: -43.071, d: 1.5, nd: 1.7645, elemId: 17, sd: 12.09 },
    { label: "30A", R: -248.821, d: 0.8, nd: 1.0, elemId: 0, sd: 13.57 }, // variable gap L5→L6

    // ── L6: Unit L6 (positive, f = +72.43 mm) — Grp ──
    { label: "31", R: -68.116, d: 4.5, nd: 1.804, elemId: 18, sd: 17.55 },
    { label: "32", R: -32.318, d: 17.88, nd: 1.0, elemId: 0, sd: 18.0 }, // BFD (variable)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "8A": {
      K: 0,
      A4: 5.17863e-6,
      A6: -6.74704e-8,
      A8: 5.22888e-10,
      A10: -4.25942e-12,
      A12: 1.45835e-14,
      A14: 0,
    },
    "9A": {
      K: 0,
      A4: -7.7741e-6,
      A6: -4.92259e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: -2.73692e-5,
      A6: 5.32572e-8,
      A8: -8.4482e-10,
      A10: 5.56287e-12,
      A12: 0,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 1.47893e-5,
      A6: 2.32565e-9,
      A8: -6.75778e-10,
      A10: 4.79574e-12,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: -8.05959e-5,
      A6: 1.99191e-7,
      A8: -1.06561e-9,
      A10: -7.47195e-13,
      A12: 8.67762e-15,
      A14: 0,
    },
    "30A": {
      K: 0,
      A4: -7.18829e-5,
      A6: 2.81391e-7,
      A8: -1.4432e-9,
      A10: 4.2065e-12,
      A12: -5.37088e-15,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom format) ──
   *  Patent provides infinity-focus spacings at 3 zoom positions.
   *  Close-focus data is not available from the patent.  Focus unit L4
   *  (surfaces 27–28) moves rearward during close focus, so D27 increases
   *  and D29 decreases by equal travel to preserve the L3→L5 envelope.
   *
   *  Close-focus endpoints are computed estimates from Canon's published
   *  0.45 m MFD by solving the real-ray paraxial conjugate at each zoom
   *  stop: L4 travel ≈ 0.54 / 1.38 / 3.56 mm at W / M / T.
   */
  zoomPositions: [24.72, 50.92, 101.84],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [0.75, 0.75],
      [15.82, 15.82],
      [34.38, 34.38],
    ],
    "13": [
      [21.53, 21.53],
      [9.07, 9.07],
      [2.38, 2.38],
    ],
    "26A": [
      [1.8, 2.34],
      [3.37, 4.75],
      [1.4, 4.96],
    ],
    "28": [
      [11.59, 11.05],
      [10.02, 8.64],
      [11.99, 8.43],
    ],
    "30A": [
      [0.8, 0.8],
      [13.48, 13.48],
      [17.24, 17.24],
    ],
    "32": [
      [17.88, 17.88],
      [19.75, 19.75],
      [30.96, 30.96],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["26A", "D27"],
    ["28", "D29"],
    ["30A", "D31"],
    ["32", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "26A" },
    { text: "L4 (−)", fromSurface: "27", toSurface: "28" },
    { text: "L5 (−)", fromSurface: "29A", toSurface: "30A" },
    { text: "L6 (+)", fromSurface: "31", toSurface: "32" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "D4", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "Inner focus — L4 (single element) translates toward image side. Close-focus travel estimated from 0.45 m MFD; patent publishes infinity zoom spacings only.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
