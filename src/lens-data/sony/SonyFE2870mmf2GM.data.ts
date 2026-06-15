import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 28-70mm F2 GM (SEL2870GM)            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2025/263124 A1, Example 1 (Sony Group Corp.)      ║
 * ║  Positive-lead 7-group zoom, constant F/2.06 aperture.             ║
 * ║  20 elements / 14 groups, 10 aspherical surfaces on 5 elements.    ║
 * ║  Focus: Dual-group floating inner focus (G5 neg + G6 pos).         ║
 * ║                                                                    ║
 * ║  Extending zoom (L grows from 155.40 to 170.88 mm, W→T).          ║
 * ║  Zoom variable gaps: d5, d12, d18 (zoom only).                    ║
 * ║  Focus variable gaps: d26, d28, d30 (zoom + focus).               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent-listed effective diameters (φi) divided by 2.            ║
 * ║    All sd = φi / 2 directly from [表1].                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-28-70mm-f2-gm",
  maker: "Sony",
  name: "SONY FE 28-70mm f/2 GM",
  subtitle: "WO 2025/263124 A1 Example 1 — Sony Group / Yamasaki, Yamada",
  specs: [
    "20 ELEMENTS / 14 GROUPS",
    "f = 28.86–67.87 mm",
    "F/2.06",
    "2ω = 73.71–35.36°",
    "10 ASPHERICAL SURFACES (5 elements)",
  ],

  focalLengthMarketing: [28, 70],
  focalLengthDesign: [28.86, 67.87],
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentYear: 2025,
  elementCount: 20,
  groupCount: 14,

  /* ── Elements ── */
  elements: [
    // ── G1 — Front Collector ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.95825,
      vd: 18.0,
      fl: -611.1,
      glass: "Dense flint (≈S-NPH1W, OHARA; Δnd = +0.0008, probable proprietary melt)",
      apd: false,
      cemented: "D1",
      role: "Ultra-high-index dense flint; chromatic counterweight for L12 in front collector doublet",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.59489,
      vd: 68.6,
      fl: +242.8,
      glass: "595686 — fluorophosphate crown (patent nd=1.59489, νd=68.6)",
      apd: false,
      cemented: "D1",
      role: "Fluorophosphate crown; low-dispersion partner in D1, probable ED element (νd = 68.6)",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59561,
      vd: 67.0,
      fl: +136.6,
      glass: "596670 - fluorophosphate crown (patent nd=1.59561, vd=67.0; no exact public catalog match)",
      apd: false,
      role: "Fluorophosphate crown; bulk positive power of G1 front collector",
    },
    // ── G2 — Variator ──
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.77373,
      vd: 49.4,
      fl: -32.3,
      glass: "774494 — lanthanum crown (patent nd=1.77373, νd=49.4)",
      apd: false,
      role: "Dual-aspherical variator front; controls SA and coma across zoom range. Probable XA element.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7766,
      vd: 29.7,
      fl: -23.3,
      glass: "777297 — dense flint (patent nd=1.77660, νd=29.7)",
      apd: false,
      cemented: "D2",
      role: "Dense flint; strong divergence in variator doublet D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.93024,
      vd: 24.0,
      fl: +20.6,
      glass: "930240 — ultra-high-index dense flint (patent nd=1.93024, νd=24.0)",
      apd: false,
      cemented: "D2",
      role: "Ultra-high-index dense flint; partial compensator in net-negative D2 doublet",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.6998,
      vd: 55.5,
      fl: -63.0,
      glass: "700555 — barium crown (patent nd=1.69980, νd=55.5)",
      apd: false,
      role: "Barium crown field flattener at G2 rear; Petzval compensation",
    },
    // ── G3 — Aperture Stop + Front Relay ──
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85612,
      vd: 40.1,
      fl: +39.7,
      glass: "856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)",
      apd: false,
      role: "Dual-aspherical post-stop element; primary on-axis wavefront correction at F/2. Probable XA element.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.4381,
      vd: 95.1,
      fl: +200.9,
      glass: "S-FPL55 (OHARA)",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate; ΔPgF ≈ +0.035 (catalog value)",
      cemented: "D3",
      role: "First of three S-FPL55 Super ED elements; axial color correction in relay section",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.57125,
      vd: 56.0,
      fl: -53.6,
      glass: "571560 — barium crown (patent nd=1.57125, νd=56.0)",
      apd: false,
      cemented: "D3",
      role: "Barium crown; achromatizing partner for Super ED L32, secondary spectrum correction",
    },
    // ── G4 — Central Relay ──
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 2.00912,
      vd: 29.1,
      fl: -71.8,
      glass: "S-NPH85 (OHARA)",
      apd: false,
      cemented: "D4",
      role: "Highest-index glass in design (nd = 2.009); dispersive partner for Super ED L42",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.4381,
      vd: 95.1,
      fl: +68.2,
      glass: "S-FPL55 (OHARA)",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate; ΔPgF ≈ +0.035 (catalog value)",
      cemented: "D4",
      role: "Second S-FPL55 Super ED element; cemented to ultra-dense flint for efficient achromatization",
    },
    {
      id: 13,
      name: "L43",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.4381,
      vd: 95.1,
      fl: +50.7,
      glass: "S-FPL55 (OHARA)",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate; ΔPgF ≈ +0.035 (catalog value)",
      cemented: "D5",
      role: "Third S-FPL55 Super ED element; second chromatic correction stage in G4",
    },
    {
      id: 14,
      name: "L44",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.86252,
      vd: 25.2,
      fl: -35.4,
      glass: "863252 — dense flint (patent nd=1.86252, νd=25.2)",
      apd: false,
      cemented: "D5",
      role: "Dense flint; dispersive counterbalance for Super ED L43 (Δνd = 69.9)",
    },
    {
      id: 15,
      name: "L45",
      label: "Element 15",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85612,
      vd: 40.1,
      fl: +23.4,
      glass: "856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)",
      apd: false,
      role: "Strongest positive singlet in design; largest aspherical departure (A4 = −1.044e-5). Probable XA element.",
    },
    // ── G5 — First Focus Group (GMF1) ──
    {
      id: 16,
      name: "L51",
      label: "Element 16",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85659,
      vd: 40.1,
      fl: -41.9,
      glass: "S-LAM73 (OHARA)",
      apd: false,
      role: "Single-element focus group GMF1; translates toward image at close focus. Driven by dual XD linear motors.",
    },
    // ── G6 — Second Focus Group (GMF2 = GMR) ──
    {
      id: 17,
      name: "L61",
      label: "Element 17",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.59456,
      vd: 66.9,
      fl: +68.3,
      glass: "S-FPM5 (OHARA)",
      apd: false,
      role: "Single-element focus group GMF2; translates toward object at close focus. Floating partner to G5.",
    },
    // ── G7 — Rear Group (GR, fixed) ──
    {
      id: 18,
      name: "L71",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 2.00009,
      vd: 16.5,
      fl: +39.8,
      glass: "S-NPH7 (OHARA)",
      apd: false,
      cemented: "D6",
      role: "Second-highest index (nd = 2.000), lowest νd in design; lateral color correction at image periphery",
    },
    {
      id: 19,
      name: "L72",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.86252,
      vd: 25.2,
      fl: -43.2,
      glass: "863252 — dense flint (patent nd=1.86252, νd=25.2)",
      apd: false,
      cemented: "D6",
      role: "Dense flint; completes lateral chromatic corrector pair with L71",
    },
    {
      id: 20,
      name: "L73",
      label: "Element 20",
      type: "Negative Meniscus",
      nd: 1.85659,
      vd: 40.1,
      fl: -71.9,
      glass: "S-LAM73 (OHARA)",
      apd: false,
      role: "Final element; field curvature correction, maintains short BFD",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 — Front Collector (L11+L12 cemented, L13 singlet) ──
    { label: "1", R: 177.085, d: 2.2, nd: 1.95825, elemId: 1, sd: 35.475 },
    { label: "2", R: 135.141, d: 5.89, nd: 1.59489, elemId: 2, sd: 34.52 },
    { label: "3", R: 2066.572, d: 0.24, nd: 1.0, elemId: 0, sd: 34.085 },
    { label: "4", R: 56.538, d: 7.81, nd: 1.59561, elemId: 3, sd: 30.41 },
    { label: "5", R: 175.851, d: 0.8, nd: 1.0, elemId: 0, sd: 29.695 }, // d5 variable (zoom only)

    // ── G2 — Variator (L21 2×asph, L22+L23 cemented, L24 singlet) ──
    { label: "6A", R: 120.462, d: 1.3, nd: 1.77373, elemId: 4, sd: 20.92 },
    { label: "7A", R: 20.583, d: 10.2, nd: 1.0, elemId: 0, sd: 15.805 },
    { label: "8", R: -59.408, d: 1.05, nd: 1.7766, elemId: 5, sd: 15.13 },
    { label: "9", R: 26.235, d: 7.37, nd: 1.93024, elemId: 6, sd: 13.985 },
    { label: "10", R: -61.353, d: 1.74, nd: 1.0, elemId: 0, sd: 13.64 },
    { label: "11", R: -33.119, d: 1.0, nd: 1.6998, elemId: 7, sd: 13.495 },
    { label: "12", R: -134.707, d: 23.32, nd: 1.0, elemId: 0, sd: 14.165 }, // d12 variable (zoom only)

    // ── G3 — Aperture Stop + Front Relay (STO, L31 2×asph, L32+L33 cemented) ──
    { label: "STO", R: 1e15, d: 0.65, nd: 1.0, elemId: 0, sd: 15.06 },
    { label: "14A", R: 36.963, d: 5.63, nd: 1.85612, elemId: 8, sd: 16.3 },
    { label: "15A", R: -387.72, d: 0.2, nd: 1.0, elemId: 0, sd: 16.215 },
    { label: "16", R: 318.226, d: 2.63, nd: 1.4381, elemId: 9, sd: 16.085 },
    { label: "17", R: -121.356, d: 1.1, nd: 1.57125, elemId: 10, sd: 15.96 },
    { label: "18", R: 41.063, d: 8.07, nd: 1.0, elemId: 0, sd: 15.505 }, // d18 variable (zoom only)

    // ── G4 — Central Relay (L41+L42 cemented, L43+L44 cemented, L45 2×asph) ──
    { label: "19", R: 31.55, d: 1.1, nd: 2.00912, elemId: 11, sd: 16.135 },
    { label: "20", R: 21.594, d: 6.48, nd: 1.4381, elemId: 12, sd: 15.385 },
    { label: "21", R: 70.882, d: 0.2, nd: 1.0, elemId: 0, sd: 15.44 },
    { label: "22", R: 39.91, d: 7.81, nd: 1.4381, elemId: 13, sd: 15.7 },
    { label: "23", R: -47.001, d: 1.1, nd: 1.86252, elemId: 14, sd: 15.645 },
    { label: "24", R: 88.218, d: 0.3, nd: 1.0, elemId: 0, sd: 15.945 },
    { label: "25A", R: 37.15, d: 8.77, nd: 1.85612, elemId: 15, sd: 16.485 },
    { label: "26A", R: -38.637, d: 3.38, nd: 1.0, elemId: 0, sd: 16.49 }, // d26 variable (zoom + focus)

    // ── G5 — First Focus Group / GMF1 (L51 2×asph) ──
    { label: "27A", R: 179.932, d: 1.05, nd: 1.85659, elemId: 16, sd: 15.03 },
    { label: "28A", R: 29.861, d: 7.38, nd: 1.0, elemId: 0, sd: 14.535 }, // d28 variable (zoom + focus)

    // ── G6 — Second Focus Group / GMF2 = GMR (L61 2×asph) ──
    { label: "29A", R: 54.311, d: 6.32, nd: 1.59456, elemId: 17, sd: 17.18 },
    { label: "30A", R: -153.712, d: 2.0, nd: 1.0, elemId: 0, sd: 17.255 }, // d30 variable (zoom + focus)

    // ── G7 — Rear Group / GR (L71+L72 cemented, L73 singlet) ──
    { label: "31", R: -165.491, d: 5.33, nd: 2.00009, elemId: 18, sd: 16.93 },
    { label: "32", R: -32.588, d: 1.1, nd: 1.86252, elemId: 19, sd: 16.985 },
    { label: "33", R: -264.824, d: 5.14, nd: 1.0, elemId: 0, sd: 16.97 },
    { label: "34", R: -59.168, d: 1.2, nd: 1.85659, elemId: 20, sd: 16.925 },
    { label: "35", R: -1500.0, d: 15.53, nd: 1.0, elemId: 0, sd: 17.99 }, // BFD at wide/inf
    { label: "36", R: 1e15, d: 0.0, nd: 1.0, elemId: 0, sd: 21.83 }, // IMG
  ],

  /* ── Aspherical coefficients ──
   *  Patent sag equation (¶0061): standard even-polynomial form with K = 0 for all surfaces.
   *  Coefficients from [表4]. Patent provides up to A12; A14 set to 0.
   */
  asph: {
    "6A": {
      K: 0,
      A4: 9.62187e-7,
      A6: -2.70673e-9,
      A8: 2.10673e-11,
      A10: -4.19378e-14,
      A12: 3.32196e-17,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: -2.94633e-6,
      A6: -9.14106e-9,
      A8: 1.69071e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -3.91536e-6,
      A6: 2.86546e-9,
      A8: -1.68068e-11,
      A10: 1.92541e-14,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: -1.69211e-6,
      A6: 6.44242e-9,
      A8: -1.6449e-11,
      A10: 1.96892e-14,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: -1.04403e-5,
      A6: 5.80346e-10,
      A8: -8.40867e-12,
      A10: 1.49302e-14,
      A12: 0,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 5.26576e-6,
      A6: -1.01818e-8,
      A8: 4.33812e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: 9.67086e-6,
      A6: -3.48204e-8,
      A8: 6.39413e-11,
      A10: -6.13814e-14,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: 9.65105e-6,
      A6: -2.55505e-8,
      A8: 3.0368e-11,
      A10: -5.50418e-14,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: 9.91829e-7,
      A6: -3.28976e-9,
      A8: 3.42617e-11,
      A10: -3.69859e-14,
      A12: 0,
      A14: 0,
    },
    "30A": {
      K: 0,
      A4: -3.674e-6,
      A6: -7.32926e-9,
      A8: 5.31073e-11,
      A10: -5.80714e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom positions ──
   *  Three positions from [表2]: Wide 28.86 mm, Mid 44.39 mm, Tele 67.87 mm.
   *  Zoom ratio 2.35×. Lens extends ~15 mm from wide to tele.
   */
  zoomPositions: [28.86, 44.39, 67.87],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  From [表3]. Format: [[d_inf, d_close], ...] per zoom position.
   *  d5, d12, d18 = zoom-only gaps (identical inf/close values).
   *  d26, d28, d30 = zoom + focus gaps (focus groups G5, G6 translate).
   *  Close focus at 378 mm object distance (production spec 0.38 m).
   */
  var: {
    // Zoom-only gaps
    "5": [
      [0.8, 0.8],
      [13.82, 13.82],
      [26.1, 26.1],
    ],
    "12": [
      [23.32, 23.32],
      [10.61, 10.61],
      [2.24, 2.24],
    ],
    "18": [
      [8.07, 8.07],
      [6.53, 6.53],
      [5.13, 5.13],
    ],
    // Zoom + focus gaps
    "26A": [
      [3.38, 4.79],
      [3.86, 6.65],
      [2.28, 7.1],
    ],
    "28A": [
      [7.38, 5.9],
      [8.44, 5.39],
      [11.98, 5.54],
    ],
    "30A": [
      [2.0, 2.07],
      [6.25, 6.51],
      [12.7, 14.31],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["12", "D12"],
    ["18", "D18"],
    ["26A", "D26"],
    ["28A", "D28"],
    ["30A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "12" },
    { text: "G3", fromSurface: "STO", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "26A" },
    { text: "G5", fromSurface: "27A", toSurface: "28A" },
    { text: "G6", fromSurface: "29A", toSurface: "30A" },
    { text: "G7", fromSurface: "31", toSurface: "35" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
    { text: "D6", fromSurface: "31", toSurface: "33" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.38,
  focusDescription:
    "Dual-group floating inner focus: G5 (L51, negative) moves toward image, " +
    "G6 (L61, positive) moves toward object. Four XD linear motors (two per group).",

  /* ── Aperture configuration ── */
  nominalFno: 2.06,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
