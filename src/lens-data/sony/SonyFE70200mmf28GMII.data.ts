import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY FE 70-200mm F2.8 GM OSS II (SEL70200GM2)        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2023-039817 A, Example 2 (実施例2).               ║
 * ║  Sony Group Corporation / Naoki Miyakawa, Shūgo Takahashi.        ║
 * ║  Positive-lead telephoto zoom, 8 mechanical groups (GR1–GR8).     ║
 * ║  17 elements / 14 groups, 5 aspherical surfaces on 3 elements.    ║
 * ║  Internal zoom (constant overall length 215.07 mm).               ║
 * ║  Focus: floating inner focus — GR6 (neg.) and GR7 (pos.) move     ║
 * ║    in opposite directions for close focus.                         ║
 * ║  Zoom variable gaps: d6, d8, d11, d13 (zoom only).                ║
 * ║  Focus variable gaps: d23, d26, d28 (zoom + focus).               ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent publishes variable data at 1000 mm object distance.      ║
 * ║    Production lens achieves 0.40 m (Wide) / 0.82 m (Tele).        ║
 * ║    closeFocusM = 1.0 matches the patent's numerical model.        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent provides effective diameter (φi) for each surface.       ║
 * ║    SD = φi / 2, with S2/S3 trimmed slightly for render clearance   ║
 * ║    across the 0.29 mm front air gap.                               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-70-200mm-f28-gm-ii",
  maker: "Sony",
  name: "SONY FE 70-200mm f/2.8 GM OSS II",
  subtitle: "JP 2023-039817 A EXAMPLE 2 — SONY / MIYAKAWA, TAKAHASHI",
  specs: [
    "17 ELEMENTS / 14 GROUPS",
    "f = 72.1–194.0 mm",
    "F/2.88",
    "2ω = 33.4°–12.7°",
    "5 ASPHERICAL SURFACES (3 ELEMENTS)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [70, 200],
  focalLengthDesign: [72.14, 193.95],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentYear: 2023,
  elementCount: 17,
  groupCount: 14,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7766,
      vd: 29.7,
      fl: -398.1,
      glass: "Dense flint (777/297, uncertain)",
      apd: false,
      role: "Front negative meniscus — Petzval field-flattening contribution at largest beam diameter",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.4381,
      vd: 95.1,
      fl: 197.2,
      glass: "S-FPL55 class (OHARA) — Super ED fluorophosphate crown",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate class; patent publishes nd/vd only.",
      role: "First Super ED element — primary axial chromatic and positive power",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.4381,
      vd: 95.1,
      fl: 191.4,
      glass: "S-FPL55 class (OHARA) — Super ED fluorophosphate crown",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate class; patent publishes nd/vd only.",
      role: "Second Super ED element — completes front collector positive power",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.77621,
      vd: 49.6,
      fl: -61.8,
      glass: "S-LAH66 class (OHARA) — lanthanum crown",
      apd: false,
      role: "First variator (GR2) — single-element negative zoom group, strongest |power| in variator",
    },
    {
      id: 5,
      name: "L31",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49845,
      vd: 81.6,
      fl: -69.3,
      glass: "S-FPL51 class (OHARA) — ED fluorophosphate crown",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent publishes nd/vd only.",
      cemented: "D1",
      role: "Second variator (GR3) negative element — ED achromatizer",
    },
    {
      id: 6,
      name: "L32",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.8629,
      vd: 24.8,
      fl: 100.9,
      glass: "863248 — ultra-dense flint (patent nd=1.86290, nu_d=24.8)",
      apd: false,
      cemented: "D1",
      role: "Second variator (GR3) positive partner — achromatizes GR3 with ED L31",
    },
    {
      id: 7,
      name: "L41",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.79191,
      vd: 25.7,
      fl: 192.5,
      glass: "Dense flint (792/257, uncertain)",
      apd: false,
      role: "Third variator (GR4) — converges beam entering GR5 relay",
    },
    {
      id: 8,
      name: "L51",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.49856,
      vd: 81.6,
      fl: 65.1,
      glass: "S-FPL51 class (OHARA) — ED crown, precision glass-molded aspherical",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent publishes nd/vd only.",
      role: "ED aspherical element — primary GR5 positive power with SA correction",
    },
    {
      id: 9,
      name: "L52",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.8629,
      vd: 24.8,
      fl: -47.5,
      glass: "863248 — ultra-dense flint (patent nd=1.86290, nu_d=24.8)",
      apd: false,
      role: "Post-stop negative — achromatizes GR5 against L51 ED",
    },
    {
      id: 10,
      name: "L53",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.8629,
      vd: 24.8,
      fl: -145.7,
      glass: "863248 — ultra-dense flint (patent nd=1.86290, nu_d=24.8)",
      apd: false,
      cemented: "D2",
      role: "OIS doublet negative element — stabilization group",
    },
    {
      id: 11,
      name: "L54",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58547,
      vd: 59.4,
      fl: 40.7,
      glass: "585594 — barium crown (patent nd=1.58547, nu_d=59.4)",
      apd: false,
      cemented: "D2",
      role: "OIS doublet positive element — aspherical rear for decentered correction",
    },
    {
      id: 12,
      name: "L55",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58547,
      vd: 59.4,
      fl: 126.2,
      glass: "585594 — barium crown (patent nd=1.58547, nu_d=59.4), XA element",
      apd: false,
      role: "XA element — field-dependent aberration and bokeh quality control",
    },
    {
      id: 13,
      name: "L61",
      label: "Element 13",
      type: "Plano-Convex",
      nd: 1.93323,
      vd: 20.9,
      fl: 58.6,
      glass: "933209 — ultra-dense flint (patent nd=1.93323, nu_d=20.9)",
      apd: false,
      cemented: "D3",
      role: "1st focus group (GR6) positive element",
    },
    {
      id: 14,
      name: "L62",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.65803,
      vd: 39.7,
      fl: -29.7,
      glass: "658397 — short flint (patent nd=1.65803, nu_d=39.7)",
      apd: false,
      cemented: "D3",
      role: "1st focus group (GR6) negative element — net negative GR6 power",
    },
    {
      id: 15,
      name: "L71",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.61669,
      vd: 44.3,
      fl: 50.5,
      glass: "E-FEL6 class (HOYA) — eco flint",
      apd: false,
      role: "2nd focus group (GR7) — floating-focus counter-motion positive element",
    },
    {
      id: 16,
      name: "L81",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.49845,
      vd: 81.6,
      fl: -104.9,
      glass: "S-FPL51 class (OHARA) — ED crown",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent publishes nd/vd only.",
      role: "GR8 rear negative — ED in negative role for lateral color balance and Petzval",
    },
    {
      id: 17,
      name: "L82",
      label: "Element 17",
      type: "Neg. Meniscus (convex to image)",
      nd: 2.00912,
      vd: 29.1,
      fl: -84.5,
      glass: "FD225 (HOYA) — ultra-high-index dense flint",
      apd: false,
      role: "Rearmost element — telecentricity and Petzval field control",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // GR1 — Fixed front collector (L11, L12, L13)
    { label: "1", R: 116.681, d: 2.82, nd: 1.7766, elemId: 1, sd: 33.68 }, // L11 front
    { label: "2", R: 83.814, d: 0.29, nd: 1.0, elemId: 0, sd: 32.09 }, // L11 rear → air
    { label: "3", R: 87.118, d: 8.34, nd: 1.4381, elemId: 2, sd: 32.09 }, // L12 front
    { label: "4", R: -9920.911, d: 0.2, nd: 1.0, elemId: 0, sd: 32.98 }, // L12 rear → air
    { label: "5", R: 78.201, d: 8.43, nd: 1.4381, elemId: 3, sd: 32.37 }, // L13 front
    { label: "6", R: 1122.581, d: 1.49, nd: 1.0, elemId: 0, sd: 32.01 }, // L13 rear → air (d6, zoom)

    // GR2 — 1st variator, negative (L21)
    { label: "7", R: 481.705, d: 1.4, nd: 1.77621, elemId: 4, sd: 18.58 }, // L21 front
    { label: "8", R: 43.542, d: 22.95, nd: 1.0, elemId: 0, sd: 17.78 }, // L21 rear → air (d8, zoom)

    // GR3 — 2nd variator, negative (L31 + L32 cemented)
    { label: "9", R: -76.229, d: 1.4, nd: 1.49845, elemId: 5, sd: 18.21 }, // L31 front
    { label: "10", R: 63.489, d: 4.55, nd: 1.8629, elemId: 6, sd: 18.94 }, // L31→L32 junction
    { label: "11", R: 226.428, d: 25.12, nd: 1.0, elemId: 0, sd: 19.01 }, // L32 rear → air (d11, zoom)

    // GR4 — 3rd variator, positive (L41)
    { label: "12", R: 66.789, d: 2.61, nd: 1.79191, elemId: 7, sd: 19.4 }, // L41 front
    { label: "13", R: 116.801, d: 18.0, nd: 1.0, elemId: 0, sd: 19.31 }, // L41 rear → air (d13, zoom)

    // GR5 — Fixed relay, positive (L51, stop, L52, L53+L54, L55)
    { label: "14A", R: 47.448, d: 8.26, nd: 1.49856, elemId: 8, sd: 19.37 }, // L51 front (asph)
    { label: "15A", R: -96.798, d: 6.89, nd: 1.0, elemId: 0, sd: 18.98 }, // L51 rear (asph) → air
    { label: "STO", R: 1e15, d: 3.3, nd: 1.0, elemId: 0, sd: 17.07 }, // Aperture stop
    { label: "17", R: -192.404, d: 1.37, nd: 1.8629, elemId: 9, sd: 16.51 }, // L52 front
    { label: "18", R: 52.285, d: 2.08, nd: 1.0, elemId: 0, sd: 16.17 }, // L52 rear → air
    { label: "19", R: 45.043, d: 1.0, nd: 1.8629, elemId: 10, sd: 16.56 }, // L53 front
    { label: "20", R: 32.823, d: 7.88, nd: 1.58547, elemId: 11, sd: 16.33 }, // L53→L54 junction
    { label: "21A", R: -79.003, d: 0.7, nd: 1.0, elemId: 0, sd: 16.27 }, // L54 rear (asph) → air
    { label: "22A", R: 325.773, d: 4.52, nd: 1.58547, elemId: 12, sd: 15.92 }, // L55 front (asph)
    { label: "23A", R: -95.07, d: 6.59, nd: 1.0, elemId: 0, sd: 15.61 }, // L55 rear (asph) → air (d23, zoom+focus)

    // GR6 — 1st focus group, negative (L61 + L62 cemented)
    { label: "24", R: 1e15, d: 3.12, nd: 1.93323, elemId: 13, sd: 13.62 }, // L61 front (flat)
    { label: "25", R: -54.73, d: 1.0, nd: 1.65803, elemId: 14, sd: 13.38 }, // L61→L62 junction
    { label: "26", R: 30.625, d: 19.74, nd: 1.0, elemId: 0, sd: 12.11 }, // L62 rear → air (d26, zoom+focus)

    // GR7 — 2nd focus group, positive (L71)
    { label: "27", R: 53.755, d: 6.52, nd: 1.61669, elemId: 15, sd: 16.29 }, // L71 front
    { label: "28", R: -70.637, d: 7.95, nd: 1.0, elemId: 0, sd: 16.29 }, // L71 rear → air (d28, zoom+focus)

    // GR8 — Fixed rear group, negative (L81, L82)
    { label: "29", R: -321.338, d: 1.25, nd: 1.49845, elemId: 16, sd: 15.53 }, // L81 front
    { label: "30", R: 62.501, d: 5.22, nd: 1.0, elemId: 0, sd: 15.25 }, // L81 rear → air
    { label: "31", R: -44.639, d: 1.3, nd: 2.00912, elemId: 17, sd: 15.25 }, // L82 front
    { label: "32", R: -95.059, d: 28.79, nd: 1.0, elemId: 0, sd: 15.74 }, // L82 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "14A": {
      K: 0,
      A4: -1.54432e-7,
      A6: 5.58124e-10,
      A8: 4.63363e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 5.42944e-6,
      A6: -4.00709e-9,
      A8: 1.18539e-11,
      A10: -4.01118e-14,
      A12: 7.61194e-17,
      A14: -5.77873e-20,
    },
    "21A": {
      K: 0,
      A4: 2.77126e-6,
      A6: 1.11872e-8,
      A8: -1.24574e-10,
      A10: 6.42677e-13,
      A12: -1.62172e-15,
      A14: 1.60781e-18,
    },
    "22A": {
      K: 0,
      A4: 6.52518e-6,
      A6: 2.3838e-10,
      A8: -4.20105e-11,
      A10: 1.79781e-13,
      A12: -2.30019e-16,
      A14: 5.26712e-20,
    },
    "23A": {
      K: 0,
      A4: 3.54582e-6,
      A6: -7.39037e-9,
      A8: 6.16827e-11,
      A10: -3.49819e-13,
      A12: 1.13261e-15,
      A14: -1.35854e-18,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom positions: Wide (72.14), Mid (120.82), Tele (193.95).
   *  Each value: [[d_inf_W, d_close_W], [d_inf_M, d_close_M], [d_inf_T, d_close_T]].
   *  Close focus = 1000 mm object distance (patent model).
   *  Zoom-only gaps: d6, d8, d11, d13 — identical inf/close values.
   *  Zoom+focus gaps: d23, d26, d28 — different inf/close values.
   */
  var: {
    "6": [
      [1.49, 1.49],
      [30.13, 30.13],
      [50.19, 50.19],
    ], // GR1→GR2 (zoom only)
    "8": [
      [22.95, 22.95],
      [12.99, 12.99],
      [14.85, 14.85],
    ], // GR2→GR3 (zoom only)
    "11": [
      [25.12, 25.12],
      [14.91, 14.91],
      [1.03, 1.03],
    ], // GR3→GR4 (zoom only)
    "13": [
      [18.0, 18.0],
      [9.53, 9.53],
      [1.49, 1.49],
    ], // GR4→GR5 (zoom only)
    "23A": [
      [6.59, 7.73],
      [4.87, 9.07],
      [2.3, 11.53],
    ], // GR5→GR6 (zoom + focus)
    "26": [
      [19.74, 17.44],
      [21.12, 14.85],
      [28.28, 13.71],
    ], // GR6→GR7 (zoom + focus)
    "28": [
      [7.95, 9.1],
      [8.28, 10.36],
      [3.7, 9.03],
    ], // GR7→GR8 (zoom + focus)
  },

  varLabels: [
    ["6", "D6"],
    ["8", "D8"],
    ["11", "D11"],
    ["13", "D13"],
    ["23A", "D23"],
    ["26", "D26"],
    ["28", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [72.14, 120.82, 193.95],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GR1 (FIXED)", fromSurface: "1", toSurface: "6" },
    { text: "GR2", fromSurface: "7", toSurface: "8" },
    { text: "GR3", fromSurface: "9", toSurface: "11" },
    { text: "GR4", fromSurface: "12", toSurface: "13" },
    { text: "GR5 (FIXED)", fromSurface: "14A", toSurface: "23A" },
    { text: "GR6", fromSurface: "24", toSurface: "26" },
    { text: "GR7", fromSurface: "27", toSurface: "28" },
    { text: "GR8 (FIXED)", fromSurface: "29", toSurface: "32" },
  ],

  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "19", toSurface: "21A" },
    { text: "D3", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0, // Patent model at 1000 mm; production lens achieves 0.40 m (W) / 0.82 m (T)
  focusDescription:
    "Floating inner focus — GR6 (neg.) moves image-ward, GR7 (pos.) moves object-ward. 4× XD Linear Motors.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.32,
  maxFstop: 22,
} satisfies LensDataInput;

export default LENS_DATA;
