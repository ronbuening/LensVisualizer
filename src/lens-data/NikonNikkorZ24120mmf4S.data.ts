import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 24-120mm f/4 S                    ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2022/259649 A1 (PCT/JP2022/008965), Example 5        ║
 * ║               (Table 5, Figures 9–10).                                 ║
 * ║  Inventors: Ono Takuro, Machida Kosuke, Makida Ayumu,                  ║
 * ║             Tsubonoya Keisuke — Nikon Corporation.                     ║
 * ║  Priority: JP 2021-096938 (9 June 2021).                              ║
 * ║  Published: 15 December 2022.                                         ║
 * ║                                                                        ║
 * ║  7-group zoom (G1–G7), 16 elements / 13 groups.                       ║
 * ║  4 aspherical surfaces (*4, *13, *27, *28).                           ║
 * ║  3 ED elements (L6, L9, L11 = S-FPL53) + 1 asph. ED (L14 = M-FCD500).║
 * ║                                                                        ║
 * ║  Focus: internal multi-focus (G5 + G6 move independently).            ║
 * ║  Zoom: externally telescoping, non-constant overall length.            ║
 * ║    Variable zoom gaps: d3, d11, d16, d21, d25, d27, Bf.              ║
 * ║    Focus groups: G5 (d25) and G6 (d27).                              ║
 * ║    Aperture stop moves with G3 (between d11 and S13).                 ║
 * ║                                                                        ║
 * ║  NOTE ON CLOSE-FOCUS DATA:                                             ║
 * ║    Patent Example 5 provides infinity-focus spacings only. Close-focus ║
 * ║    group placements (Δ5, Δ6) were derived via ray-tracing: at each     ║
 * ║    zoom position, solve for the minimum-norm (Δ5, Δ6) that images an   ║
 * ║    on-axis object at MFD = 0.35 m on the image plane, subject to a     ║
 * ║    0.5 mm mechanical-clearance floor on all variable gaps. Δ5 and Δ6   ║
 * ║    denote displacement of G5 and G6 toward the object; total-track is  ║
 * ║    conserved so d21 also varies with focus. See                        ║
 * ║    __tests__/solveZ24120CloseFocus.test.ts for the derivation. At tele ║
 * ║    the solver reproduces the published MRR (0.39×) to within ~5%.      ║
 * ║                                                                        ║
 * ║  NOTE ON ZOOM POSITIONS:                                               ║
 * ║    Patent tabulates variable gaps only at wide (24.7) and tele (116.5).║
 * ║    Intermediate positions (35/50/70/85) were added for improved        ║
 * ║    close-focus fidelity; their infinity-gap values are linear          ║
 * ║    interpolations of the two patent endpoints and therefore preserve   ║
 * ║    the patent's infinity behavior exactly. Aberration plots show a     ║
 * ║    mid-zoom evaluation at f≈69.98 mm in Example 5.                     ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    Not provided in the patent. Estimated via combined marginal +       ║
 * ║    chief ray trace at both zoom positions (60% off-axis field          ║
 * ║    fraction, 8% mechanical clearance). Front group capped by 77 mm    ║
 * ║    filter thread (~33 mm max SD at S1). Junction SDs constrained by   ║
 * ║    edge thickness ≥ 0.5 mm (L2 junction ≤ 27.0, L10/L11 junction     ║
 * ║    ≤ 13.4). Cross-gap sag overlap verified at both zoom positions.    ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-24-120f4",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-120mm f/4 S",
  subtitle: "WO 2022/259649 A1 EXAMPLE 5 — NIKON / ONO, MACHIDA, MAKIDA, TSUBONOYA",
  specs: [
    "16 ELEMENTS / 13 GROUPS",
    "f = 24.70 – 116.50 mm",
    "F/4.00 – F/4.12",
    "2ω ≈ 82.4° – 21.0°",
    "4 ASPHERICAL SURFACES",
    "3 ED + 1 ASPHERICAL ED",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 120] as [number, number],
  focalLengthDesign: [24.7, 116.5] as [number, number],
  apertureMarketing: 4,
  apertureDesign: 4.0,
  patentYear: 2022,
  elementCount: 16,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      fl: -166.4,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Front negative meniscus of G1 cemented doublet; high-index dense lanthanum flint for compact diameter",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.34,
      fl: 75.9,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Rear positive meniscus of G1 doublet; moderate-dispersion phosphate crown for lateral color correction",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.77503,
      vd: 47.31,
      fl: -27.8,
      glass: "Moldable lanthanum crown (no exact catalog match; nearest HOYA M-TAFD305 1.77377/47.17)",
      apd: false,
      role: "Aspherical corrector plate at G2 entrance; nearly flat base R with dominant polynomial departure (~4 mm at rim)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.18,
      fl: -54.4,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Strong negative diverger in G2 variator; high-index lanthanum flint keeps curvatures moderate",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.85451,
      vd: 25.15,
      fl: 35.2,
      glass: "S-TIM35 (OHARA) or K-VC89 (Sumita)",
      apd: false,
      role: "High-dispersion positive in G2 (P1 element); forms air-spaced achromatic pair with L4 for Petzval/chromatic correction",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: -69.2,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote: "ED glass; νd = 82.57, N-tagged in patent (cond. 24: νdN > 60)",
      role: "First S-FPL53 ED element; secondary chromatic correction at image-side of G2 variator",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.59306,
      vd: 66.97,
      fl: 78.9,
      glass: "Moldable phosphate crown (no exact catalog match)",
      apd: false,
      role: "Aspherical positive meniscus immediately behind stop in G3; corrects spherical aberration in the axial beam",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.34,
      fl: 256.9,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Weak positive meniscus in G3; distributes relay convergence and shares glass with L2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 51.8,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote: "ED glass; νd = 82.57, P2-tagged in patent (cond. 25: νdP2 > 60)",
      role: "Second S-FPL53 ED element in G4; low-dispersion positive for axial color suppression in the converging relay",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.90043,
      vd: 37.38,
      fl: -30.6,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D4",
      role: "Dense lanthanum flint in G4 cemented doublet; provides dispersive counterbalance to L11",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 36.4,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote: "ED glass; νd = 82.57, P2-tagged in patent",
      cemented: "D4",
      role: "Third S-FPL53 ED element; cemented with L10 for chromatic doublet (Δνd ≈ 45)",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.64,
      fl: -77.4,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      role: "High-dispersion negative meniscus in G5 focus group; chromatic corrector within the focusing assembly",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      fl: 51.6,
      glass: "S-LAM66 (OHARA)",
      apd: false,
      role: "Positive power in G5 focus group; lanthanum crown provides net group convergence (f_G5 ≈ +135.76 mm)",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.55332,
      vd: 71.67,
      fl: 80.2,
      glass: "M-FCD500 (HOYA)",
      apd: "patent",
      apdNote: "Aspherical ED glass; νd = 71.67, P2-tagged in patent; mold-compatible fluorophosphate crown",
      role: "Single aspherical ED element in G6 focus group; rear aspherical surface provides field-dependent correction across focus range",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.77503,
      vd: 47.31,
      fl: -25.8,
      glass: "Moldable lanthanum crown (same as L3)",
      apd: false,
      cemented: "D7",
      role: "Aspherical negative in G7 rear doublet; fine-tunes converging wavefront before image plane",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: 74.7,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      cemented: "D7",
      role: "Ultra-high-dispersion dense flint in G7 doublet (P1 element); final lateral color correction (Δνd ≈ 26 with L15)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front positive cemented doublet (L1 + L2) ── */
    { label: "1", R: 61.204, d: 1.8, nd: 1.90366, elemId: 1, sd: 33.0 },
    { label: "2", R: 43.5, d: 9.29, nd: 1.618, elemId: 2, sd: 27.0 },
    { label: "3", R: 599.325, d: 1.525, nd: 1.0, elemId: 0, sd: 27.0 },

    /* ── G2: Variator — four air-spaced singlets (L3, L4, L5, L6) ── */
    { label: "4A", R: 8892.243, d: 1.4, nd: 1.77503, elemId: 3, sd: 13.0 },
    { label: "5", R: 21.486, d: 7.77, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "6", R: -67.187, d: 1.5, nd: 1.834, elemId: 4, sd: 14.0 },
    { label: "7", R: 139.906, d: 0.23, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "8", R: 60.17, d: 4.73, nd: 1.85451, elemId: 5, sd: 13.8 },
    { label: "9", R: -60.17, d: 1.96, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "10", R: -27.165, d: 1.1, nd: 1.49782, elemId: 6, sd: 13.5 },
    { label: "11", R: -128.171, d: 24.145, nd: 1.0, elemId: 0, sd: 14.7 },

    /* ── Aperture stop (moves with G3) ── */
    { label: "STO", R: 1e15, d: 0.88, nd: 1.0, elemId: 0, sd: 6.3 },

    /* ── G3: First relay — two air-spaced singlets (L7, L8) ── */
    { label: "13A", R: 34.508, d: 3.66, nd: 1.59306, elemId: 7, sd: 13.5 },
    { label: "14", R: 131.359, d: 0.2, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "15", R: 51.576, d: 2.03, nd: 1.618, elemId: 8, sd: 14.0 },
    { label: "16", R: 76.388, d: 9.007, nd: 1.0, elemId: 0, sd: 14.2 },

    /* ── G4: Second relay — L9 singlet + L10/L11 cemented doublet ── */
    { label: "17", R: 33.398, d: 5.6, nd: 1.49782, elemId: 9, sd: 15.5 },
    { label: "18", R: -112.939, d: 1.45, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "19", R: 51.317, d: 1.1, nd: 1.90043, elemId: 10, sd: 15.2 },
    { label: "20", R: 17.933, d: 6.55, nd: 1.49782, elemId: 11, sd: 13.4 },
    { label: "21", R: 1939.354, d: 6.277, nd: 1.0, elemId: 0, sd: 13.4 },

    /* ── G5: First focus group — two air-spaced singlets (L12, L13) ── */
    { label: "22", R: -28.1, d: 1.1, nd: 1.78472, elemId: 12, sd: 13.2 },
    { label: "23", R: -52.294, d: 0.2, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "24", R: 156.708, d: 4.09, nd: 1.7725, elemId: 13, sd: 13.4 },
    { label: "25", R: -53.421, d: 2.0, nd: 1.0, elemId: 0, sd: 13.6 },

    /* ── G6: Second focus group — single element (L14) ── */
    { label: "26", R: -214.076, d: 3.8, nd: 1.55332, elemId: 14, sd: 13.0 },
    { label: "27A", R: -36.775, d: 9.107, nd: 1.0, elemId: 0, sd: 12.8 },

    /* ── G7: Rear negative cemented doublet (L15 + L16) ── */
    { label: "28A", R: -43.094, d: 1.3, nd: 1.77503, elemId: 15, sd: 12.3 },
    { label: "29", R: 37.433, d: 3.6, nd: 1.92286, elemId: 16, sd: 12.3 },
    { label: "30", R: 81.956, d: 13.555, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "4A": {
      K: 0.0,
      A4: 6.78e-6,
      A6: -9.11e-9,
      A8: 2.14e-11,
      A10: -6.61e-15,
      A12: -7.48e-17,
      A14: 1.46e-19,
    },
    "13A": {
      K: 0.0,
      A4: -7.33e-6,
      A6: 1.12e-9,
      A8: -3.78e-12,
      A10: -5.24e-15,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 0.0,
      A4: 1.69e-5,
      A6: -8.63e-9,
      A8: 5.71e-12,
      A10: -9.88e-15,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0.0,
      A4: 2.41e-6,
      A6: 1.5e-9,
      A8: -1.37e-10,
      A10: 6.99e-13,
      A12: -1.28e-15,
      A14: -1.88e-19,
    },
  },

  /* ── Zoom lens fields ── */
  zoomPositions: [24.7, 35.0, 50.0, 70.0, 85.0, 116.5],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom + focus) ──
   *  Six zoom positions covering the ring marks 24–35–50–70–85–120 mm
   *  (design focal lengths 24.7 and 116.5 at the endpoints).
   *  Infinity gaps at 35/50/70/85 are linear interpolations of the patent's
   *  wide/tele endpoints, preserving the patent's infinity behavior exactly.
   *  Close-focus gaps were solved at each position via ray tracing with a
   *  minimum-norm (Δ5, Δ6) objective and a 0.5 mm mechanical-clearance floor.
   *  d3:  G1 → G2 (zoom only)
   *  d11: G2 → STO/G3 (zoom only)
   *  d16: G3 → G4 (zoom only)
   *  d21: G4 → G5 (zoom + focus — moves with G5 via −Δ5)
   *  d25: G5 → G6 (zoom + focus — moves via +Δ5 − Δ6)
   *  d27: G6 → G7 (zoom + focus — moves via +Δ6)
   *  Bf:  G7 → image (zoom only — total track conserved during focus)
   */
  var: {
    "3": [
      [1.525, 1.525],
      [6.587, 6.587],
      [13.982, 13.982],
      [23.825, 23.825],
      [31.21, 31.21],
      [46.708, 46.708],
    ],
    "11": [
      [24.145, 24.145],
      [21.702, 21.702],
      [18.145, 18.145],
      [13.401, 13.401],
      [9.843, 9.843],
      [2.37, 2.37],
    ],
    "16": [
      [9.007, 9.007],
      [8.154, 8.154],
      [6.91, 6.91],
      [5.253, 5.253],
      [4.01, 4.01],
      [1.4, 1.4],
    ],
    "21": [
      [6.277, 5.288],
      [7.597, 7.075],
      [9.519, 9.199],
      [12.082, 11.198],
      [14.004, 12.121],
      [18.04, 10.574],
    ],
    "25": [
      [2.0, 0.759],
      [2.356, 1.699],
      [2.876, 2.471],
      [3.568, 2.439],
      [4.087, 1.654],
      [5.177, 0.5],
    ],
    "27A": [
      [9.107, 11.337],
      [8.284, 9.464],
      [7.086, 7.81],
      [5.488, 7.501],
      [4.29, 8.605],
      [1.773, 13.916],
    ],
    "30": [
      [13.555, 13.555],
      [17.1, 17.1],
      [22.264, 22.264],
      [29.143, 29.143],
      [34.306, 34.306],
      [45.147, 45.147],
    ],
  },
  varLabels: [
    ["3", "D3"],
    ["11", "D11"],
    ["16", "D16"],
    ["21", "D21"],
    ["25", "D25"],
    ["27A", "D27"],
    ["30", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+136.58)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−24.06)", fromSurface: "4A", toSurface: "11" },
    { text: "G3 (+59.44)", fromSurface: "13A", toSurface: "16" },
    { text: "G4 (+67.49)", fromSurface: "17", toSurface: "21" },
    { text: "G5 (+135.76)", fromSurface: "22", toSurface: "25" },
    { text: "G6 (+79.64)", fromSurface: "26", toSurface: "27A" },
    { text: "G7 (−38.93)", fromSurface: "28A", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D7", fromSurface: "28A", toSurface: "30" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "Internal multi-focus: G5 (L12+L13) and G6 (L14) move independently toward the object side when focusing from infinity to close range (Nikon Multi-Focus System). Close-focus group placements were derived by ray-tracing the minimum-norm (Δ5, Δ6) pair that images a 0.35 m object on the image plane at each zoom position.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.28,
  maxFstop: 22,
} satisfies LensDataInput;

export default LENS_DATA;
