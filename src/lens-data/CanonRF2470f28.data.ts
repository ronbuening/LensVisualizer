import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 24-70mm f/2.8L IS USM              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0278068 A1 Example 5 (Canon / T. Hatada).   ║
 * ║  7-unit positive-lead zoom: L1(+) L2(−) L3(+) L4(−) L5(+)        ║
 * ║    L6(−) L7(+).                                                    ║
 * ║  21 elements / 15 groups, 5 aspherical surfaces (3 GMo elements). ║
 * ║  Focus: L6 (single neg. meniscus) moves rearward for close focus. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D15, D21, D24, D31, D33, D37 (BF).      ║
 * ║  Reversing groups: D21 (non-monotonic, 2.26 → 2.23 → 2.54 mm).   ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS DATA:                                               ║
 * ║    The patent provides variable gap data at infinity focus only,   ║
 * ║    at three zoom positions. Close-focus gap values are not given   ║
 * ║    in the numerical example. All variable gaps are therefore       ║
 * ║    entered as zoom-only (identical inf/close values). The focus    ║
 * ║    slider will have no visible effect in the renderer. The focus   ║
 * ║    group (L6) moves rearward; gaps D31, D33, and D37 would vary.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs are taken directly from the patent's "effective diameter"   ║
 * ║    column (÷ 2). These represent beam footprints at infinity       ║
 * ║    focus, wide-angle position. Actual mechanical clear apertures   ║
 * ║    include additional clearance.                                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24-70-f28",
  maker: "Canon",
  name: "CANON RF 24-70mm f/2.8L IS USM",
  subtitle: "US 2019/0278068 A1 EXAMPLE 5 — CANON / HATADA",
  specs: [
    "21 ELEMENTS / 15 GROUPS",
    "f = 24.7–67.9 mm",
    "F/2.91",
    "2ω = 82.4°–35.4°",
    "5 ASPHERICAL SURFACES (3 GMo ELEMENTS)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 70] as [number, number],
  focalLengthDesign: [24.72, 67.89] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
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
      fl: -183.0,
      glass: "S-NPH1 (OHARA)",
      cemented: "D1",
      role: "Leading negative meniscus — high-dispersion flint. Conditional expression (1): νd1n = 22.76. Bends chief ray inward to reduce downstream diameters.",
    },
    {
      id: 2,
      name: "G2p",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 162.3,
      glass: "S-LAH66 (OHARA)",
      cemented: "D1",
      role: "Achromatic partner to G1n (Δνd ≈ 27). Lanthanum crown provides chromatic contrast without extreme curvature.",
    },
    {
      id: 3,
      name: "G3p",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 125.6,
      glass: "S-LAL14 (OHARA)",
      role: "Second positive lens in L1. Carries bulk of L1's converging power.",
    },
    // ── Unit 2: Variator / zoom diverging group (f = −18.58 mm) ──
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -29.2,
      glass: "S-LAH58 (OHARA)",
      role: "Leading element of L2. Strong negative power; steeply curved rear surface diverges converged beam from L1.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      fl: -36.3,
      glass: "S-FPL51 (OHARA) — UD 1 of 3",
      apd: "inferred",
      apdNote: "S-FPL51: anomalous partial dispersion (below normal line on Pg,F diagram).",
      cemented: "D2",
      role: "First UD element. Anomalous dispersion corrects secondary spectrum of variator group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 45.5,
      glass: "S-NPH53 (OHARA)",
      cemented: "D2",
      role: "High-dispersion flint partner to E5. UD–flint pair controls lateral color across zoom range.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -59.2,
      glass: "S-LAL14 (OHARA)",
      role: "Weakly curved biconcave adding negative power with minimal higher-order contribution. Same glass as E3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      fl: 32.8,
      glass: "S-TIM25 (OHARA)",
      cemented: "D3",
      role: "Rear doublet of L2 — provides chromatic correction and Petzval sum control.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -44.5,
      glass: "S-LAH55V (OHARA)",
      cemented: "D3",
      role: "Dense lanthanum partner correcting Petzval contribution of L2.",
    },
    // ── Unit 3: Aperture stop + relay group (f = +35.84 mm) ──
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      fl: 44.2,
      glass: "S-LAH59 (OHARA)",
      role: "Immediately after stop. Strong convergence; controls spherical aberration on-axis.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 36.9,
      glass: "S-FPL51 (OHARA) — UD 2 of 3",
      apd: "inferred",
      apdNote: "S-FPL51: anomalous partial dispersion.",
      cemented: "D4",
      role: "Second UD element. Paired with ultra-high-index S-NPH2 for powerful chromatic + Petzval correction.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -44.2,
      glass: "S-NPH2 (OHARA)",
      cemented: "D4",
      role: "Ultra-high-index (nd > 2.0) dense flint. Δnd = 0.504 with E11 provides extreme chromatic correction; strong negative Petzval contribution flattens field.",
    },
    // ── Unit 4: Image stabilization group (f = −69.07 mm) ──
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -45.5,
      glass: "S-BAL42 (OHARA) — PGM",
      cemented: "D5",
      role: "IS group front element. S22 aspherical. PGM glass-moulded. Mild asphere corrects coma during IS decentration.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.5,
      fl: 131.9,
      glass: "S-TIH14 (OHARA)",
      cemented: "D5",
      role: "IS group rear element. High-dispersion titanium flint balances chromatic shift during IS operation.",
    },
    // ── Unit 5: Main converging group (f = +28.29 mm) ──
    {
      id: 15,
      name: "Gfp",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 38.5,
      glass: "S-FPL51 (OHARA) — UD 3 of 3",
      apd: "inferred",
      apdNote: "S-FPL51: anomalous partial dispersion. This is Gfp per conditional expressions (13)–(14).",
      role: "Third UD element (Gfp). 'Chromatic anchor' — corrects axial LoCA at tele and lateral color at wide per §0053.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.3,
      fl: -115.3,
      glass: "S-NBH55 (OHARA)",
      cemented: "D6",
      role: "Niobium dense flint. Fine-tunes secondary spectrum correction.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 36.7,
      glass: "S-FPM3 (OHARA)",
      cemented: "D6",
      role: "Phosphate crown provides net positive power and secondary spectrum fine-tuning.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -126.8,
      glass: "S-LAH65V (OHARA) — PGM",
      role: "Double-asphere corrector plate. S30 has −0.75 mm departure — dominates the nearly-flat base curve. Corrects field-dependent coma and astigmatism.",
    },
    // ── Unit 6: Focus group (f = −49.77 mm) ──
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -49.2,
      glass: "S-LAH51 (OHARA)",
      role: "Single thin meniscus — focus element driven by Nano USM. 0.90 mm CT minimizes mass for fast AF response.",
    },
    // ── Unit 7: Rear field-flattening group (f = +785.94 mm) ──
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -91.9,
      glass: "S-BAL42 (OHARA) — PGM",
      role: "Double-asphere field corrector. S35 departure of −1.5 mm on R ≈ −3211 mm base = essentially pure aspheric plate. Targets wide-angle distortion and field curvature.",
    },
    {
      id: 21,
      name: "Grp",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 84.2,
      glass: "FDS30 (HOYA) or H-ZLaF92 (CDGM)",
      role: "Positive lens Grp — conditional expressions (2)–(3). Ultra-high nd = 2.001 corrects lateral color at both zoom ends via varying BF ray height (§0037). Also flattens Petzval sum.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Unit 1 (L1): E1–E3, front positive group ──
    { label: "1", R: 232.357, d: 2.1, nd: 1.80809, elemId: 1, sd: 34.35 }, // G1n front
    { label: "2", R: 90.381, d: 5.78, nd: 1.7725, elemId: 2, sd: 32.98 }, // G1n→G2p junction
    { label: "3", R: 323.713, d: 0.15, nd: 1.0, elemId: 0, sd: 32.69 }, // G2p rear → air
    { label: "4", R: 59.139, d: 7.05, nd: 1.72916, elemId: 3, sd: 30.34 }, // G3p front
    { label: "5", R: 166.984, d: 0.8, nd: 1.0, elemId: 0, sd: 29.73 }, // G3p rear → air (variable: L1→L2)

    // ── Unit 2 (L2): E4–E9, variator ──
    { label: "6", R: 67.802, d: 1.4, nd: 1.883, elemId: 4, sd: 19.27 }, // E4 front
    { label: "7", R: 18.663, d: 8.67, nd: 1.0, elemId: 0, sd: 14.6 }, // E4 rear → air
    { label: "8", R: -115.164, d: 1.2, nd: 1.497, elemId: 5, sd: 14.17 }, // E5 front (UD 1)
    { label: "9", R: 21.412, d: 3.87, nd: 1.85478, elemId: 6, sd: 12.44 }, // E5→E6 junction
    { label: "10", R: 47.653, d: 4.17, nd: 1.0, elemId: 0, sd: 11.93 }, // E6 rear → air
    { label: "11", R: -48.039, d: 1.0, nd: 1.72916, elemId: 7, sd: 11.34 }, // E7 front
    { label: "12", R: 425.782, d: 0.29, nd: 1.0, elemId: 0, sd: 11.02 }, // E7 rear → air
    { label: "13", R: 93.568, d: 6.03, nd: 1.5927, elemId: 8, sd: 10.87 }, // E8 front
    { label: "14", R: -24.518, d: 1.05, nd: 1.83481, elemId: 9, sd: 11.25 }, // E8→E9 junction
    { label: "15", R: -71.957, d: 16.15, nd: 1.0, elemId: 0, sd: 11.93 }, // E9 rear → air (variable: L2→L3)

    // ── Unit 3 (L3): Stop + E10–E12, relay group ──
    { label: "STO", R: 1e15, d: 0.4, nd: 1.0, elemId: 0, sd: 12.96 }, // Aperture stop
    { label: "17", R: 78.059, d: 4.31, nd: 1.76385, elemId: 10, sd: 13.43 }, // E10 front
    { label: "18", R: -59.447, d: 0.15, nd: 1.0, elemId: 0, sd: 13.57 }, // E10 rear → air
    { label: "19", R: 40.155, d: 7.4, nd: 1.497, elemId: 11, sd: 13.46 }, // E11 front (UD 2)
    { label: "20", R: -33.807, d: 1.1, nd: 2.00069, elemId: 12, sd: 13.14 }, // E11→E12 junction
    { label: "21", R: -143.919, d: 2.26, nd: 1.0, elemId: 0, sd: 13.17 }, // E12 rear → air (variable: L3→L4)

    // ── Unit 4 (L4): E13–E14, IS group ──
    { label: "22A", R: -63.149, d: 1.65, nd: 1.58313, elemId: 13, sd: 13.03 }, // E13 front (asph)
    { label: "23", R: 45.825, d: 1.92, nd: 1.76182, elemId: 14, sd: 13.14 }, // E13→E14 junction
    { label: "24", R: 84.251, d: 11.08, nd: 1.0, elemId: 0, sd: 13.12 }, // E14 rear → air (variable: L4→L5)

    // ── Unit 5 (L5): E15–E18, main converging group ──
    { label: "25", R: 26.393, d: 8.28, nd: 1.497, elemId: 15, sd: 13.71 }, // E15 front (Gfp, UD 3)
    { label: "26", R: -69.36, d: 0.35, nd: 1.0, elemId: 0, sd: 13.63 }, // E15 rear → air
    { label: "27", R: 39.335, d: 1.15, nd: 1.738, elemId: 16, sd: 13.45 }, // E16 front
    { label: "28", R: 26.899, d: 7.03, nd: 1.53775, elemId: 17, sd: 13.07 }, // E16→E17 junction
    { label: "29", R: -73.879, d: 0.15, nd: 1.0, elemId: 0, sd: 12.75 }, // E17 rear → air
    { label: "30A", R: -602.944, d: 1.7, nd: 1.854, elemId: 18, sd: 12.64 }, // E18 front (asph)
    { label: "31A", R: 131.941, d: 2.16, nd: 1.0, elemId: 0, sd: 12.45 }, // E18 rear → air (asph, variable: L5→L6)

    // ── Unit 6 (L6): E19, focus group ──
    { label: "32", R: 60.209, d: 0.9, nd: 1.804, elemId: 19, sd: 12.76 }, // E19 front
    { label: "33", R: 23.878, d: 12.96, nd: 1.0, elemId: 0, sd: 12.53 }, // E19 rear → air (variable: L6→L7)

    // ── Unit 7 (L7): E20–E21, rear field-flattening group ──
    { label: "34A", R: -52.714, d: 1.7, nd: 1.58313, elemId: 20, sd: 14.93 }, // E20 front (asph)
    { label: "35A", R: -3211.285, d: 0.15, nd: 1.0, elemId: 0, sd: 16.49 }, // E20 rear → air (asph)
    { label: "36", R: 317.277, d: 3.23, nd: 2.001, elemId: 21, sd: 17.64 }, // E21 front (Grp)
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
   *  Focus group is L6 (E19); in production, gaps D31, D33, D37 would vary during focus.
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
    ], // BF (zoom only; focus would vary this gap)
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
  zoomLabels: ["Wide", "Tele"],

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
    "Inner focus — L6 (single negative meniscus, E19) moves rearward via Nano USM. Close-focus gap data not available from patent; zoom-only variable gaps shown.",

  /* ── Aperture configuration ── */
  nominalFno: 2.91,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.22,
} satisfies LensDataInput;

export default LENS_DATA;
