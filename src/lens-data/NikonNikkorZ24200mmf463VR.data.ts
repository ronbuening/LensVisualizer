import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR Z 24-200mm f/4-6.3 VR                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPWO2020/157904 A1, Example 1 (Table 1).            ║
 * ║  Inventors: Makita Ayumu, Itō Tomoki, Miwa Tetsushi — Nikon Corp. ║
 * ║  Six-group positive-lead zoom (G1+/G2−/G3+/G4+/G5−/G6−).         ║
 * ║  19 elements / 15 groups, 3 aspherical surfaces (S28A, S31A,      ║
 * ║  S33A).  All aspherical surfaces have K = 0 (spherical base).     ║
 * ║  Focus: G5 moves toward image (internal focus).                   ║
 * ║  VR: L32+L33 cemented doublet in G3, decenters ⊥ to axis.        ║
 * ║                                                                    ║
 * ║  ZOOM CONFIGURATION:                                               ║
 * ║    4 zoom positions: 24.72 / 50.00 / 105.05 / 194.00 mm.         ║
 * ║    Variable-aperture: F/4.12(W) → F/6.50(T).                     ║
 * ║    Zoom-only variable gaps: D1 (S6), D2 (S14), D3 (S22).         ║
 * ║    Zoom + focus gaps: D4 (S28A), D5 (S31A), BF (S35).            ║
 * ║    Stop (S15), G3, and G6 move as a unit during zoom.             ║
 * ║    All moving groups translate toward object, wide → tele.        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not provided in patent.  Estimated via combined marginal +     ║
 * ║    chief ray trace (y-nu method) at all 4 zoom positions,         ║
 * ║    envelope (max) taken across positions, ~8–10% mechanical       ║
 * ║    clearance applied.  Front group capped at 31.0 mm per 67 mm   ║
 * ║    filter thread (Nikon published spec).  Cemented-pair SDs       ║
 * ║    matched at junctions.                                          ║
 * ║                                                                    ║
 * ║  CONIC CONSTANT CONVENTION:                                        ║
 * ║    Patent uses κ where K = κ − 1.  All three aspheric surfaces    ║
 * ║    have κ = 1.0000, giving K = 0 (spherical base curve).          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-24-200-f4-63-vr",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-200mm f/4-6.3 VR",
  subtitle: "JPWO2020/157904 A1 Example 1 — Nikon / Makita, Itō, Miwa",
  specs: [
    "19 ELEMENTS / 15 GROUPS",
    "f = 24.7–194.0 mm (design)",
    "F/4.12–6.50 (design)",
    "2ω ≈ 85.2°–12.3°",
    "3 ASPHERICAL SURFACES",
    "3 ED ELEMENTS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 200],
  focalLengthDesign: [24.72, 194.0],
  apertureMarketing: 4,
  apertureDesign: 4.12,
  patentYear: 2020,
  elementCount: 19,
  groupCount: 15,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      fl: -142.3,
      glass: "S-LAH96 / TAFD45 (190366/3127)",
      apd: false,
      role: "Front negative meniscus — reduces Petzval sum, chromatic partner to L12/L13.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 118.1,
      glass: "PCD4 equiv. (159319/6790)",
      apd: "inferred",
      apdNote: "ED-class phosphate crown, vd = 67.9. Nikon markets as ED element.",
      role: "Front positive — ED glass for secondary spectrum correction at tele.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 117.5,
      glass: "PCD4 equiv. (159319/6790)",
      apd: "inferred",
      apdNote: "Same ED glass as L12.",
      role: "Front positive meniscus — additional ED power, controls higher-order SA.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.33,
      fl: -21.7,
      glass: "S-LAH79 (195375/3233)",
      apd: false,
      role: "Variator primary negative — dominant zoom power, ultra-high nd for compact curvatures.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.33,
      fl: -36.7,
      glass: "N-LAK33B equiv. (175500/5233)",
      apd: false,
      role: "Variator secondary negative — chromatic balance partner for L21 and L23.",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 23.6,
      glass: "S-NPH2 (192286/2088)",
      apd: false,
      role: "High-dispersion positive element — achromatization lever for zoom-dependent lateral color.",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.59,
      fl: -37.4,
      glass: "TAFD25 equiv. (181600/4659)",
      apd: false,
      role: "Variator exit element — controls divergence angle entering long G2–G3 air gap.",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.90265,
      vd: 35.72,
      fl: 38.8,
      glass: "TAFD30 equiv. (190265/3572)",
      apd: false,
      role: "Relay positive — reconverges beam after stop, ultra-high nd minimises curvatures.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.12,
      fl: -48.7,
      glass: "S-NPH53 (200100/2912)",
      apd: false,
      cemented: "VR",
      role: "VR doublet flint — highest nd in design (2.001), creates strong cemented-interface correction.",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.57957,
      vd: 53.74,
      fl: 28.3,
      glass: "N-BAF4 equiv. (157957/5374)",
      apd: false,
      cemented: "VR",
      role: "VR doublet crown — dominant positive power, large Δnd at cemented interface corrects lateral color during VR.",
    },
    {
      id: 11,
      name: "L34",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.33,
      fl: -42.5,
      glass: "S-LAH79 (195375/3233)",
      apd: false,
      role: "Petzval flattener — compensates excess positive power from L31 and VR doublet.",
    },
    {
      id: 12,
      name: "L41",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      fl: 22.2,
      glass: "S-LAH55V equiv. (183481/4273)",
      apd: false,
      cemented: "D4a",
      role: "Relay doublet positive — symmetric biconvex minimises coma near relay conjugate.",
    },
    {
      id: 13,
      name: "L42",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      fl: -46.7,
      glass: "S-LAH96 / TAFD45 (190366/3127)",
      apd: false,
      cemented: "D4a",
      role: "Relay doublet flint — chromatic partner to L41. Same glass as L11.",
    },
    {
      id: 14,
      name: "L43",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.33,
      fl: -31.0,
      glass: "S-LAH79 (195375/3233)",
      apd: false,
      cemented: "D4b",
      role: "Aspherical-ED doublet flint — high-dispersion partner for L44 secondary spectrum correction.",
    },
    {
      id: 15,
      name: "L44",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.4971,
      vd: 81.49,
      fl: 22.3,
      glass: "S-FPL51 (149710/8149)",
      apd: "inferred",
      apdNote: "ΔP(g,F) ≈ +0.028 above normal line. Fluorophosphate crown, PGM-compatible.",
      cemented: "D4b",
      role: "Aspherical ED element — triple duty: ED glass (secondary spectrum), asph S28A (SA correction), achromatic relay power.",
    },
    {
      id: 16,
      name: "L51",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 40.7,
      glass: "TAFD37 equiv. (184666/2380)",
      apd: false,
      cemented: "D5",
      role: "Focus doublet positive — ultra-high dispersion for focus-invariant chromatic correction.",
    },
    {
      id: 17,
      name: "L52",
      label: "Element 17",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.85135,
      vd: 40.13,
      fl: -19.9,
      glass: "TAFD33 equiv. (185135/4013)",
      apd: false,
      cemented: "D5",
      role: "Focus doublet negative — dominant net-negative power, asph S31A stabilises SA during focus travel.",
    },
    {
      id: 18,
      name: "L61",
      label: "Element 18",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8208,
      vd: 42.51,
      fl: -84.3,
      glass: "Lanthanum flint (182080/4251, uncertain — possibly CDGM H-LAF3)",
      apd: false,
      role: "Rear field corrector negative — asph S33A corrects field curvature/astigmatism. Part of G6 air lens.",
    },
    {
      id: 19,
      name: "L62",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.68376,
      vd: 37.57,
      fl: 101.0,
      glass: "S-TIM22 equiv. (168376/3757)",
      apd: false,
      role: "Final element — completes G6 air-lens field correction. Weak power, primarily corrective.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front Positive (L11, L12, L13) ── */
    { label: "1", R: 185.7354, d: 2.0, nd: 1.90366, elemId: 1, sd: 31.0 },
    { label: "2", R: 75.9813, d: 1.0263, nd: 1.0, elemId: 0, sd: 31.0 },
    { label: "3", R: 81.5981, d: 6.4204, nd: 1.59319, elemId: 2, sd: 29.4 },
    { label: "4", R: -494.4016, d: 0.1, nd: 1.0, elemId: 0, sd: 29.4 },
    { label: "5", R: 59.132, d: 6.13, nd: 1.59319, elemId: 3, sd: 28.0 },
    { label: "6", R: 390.1369, d: 1.5, nd: 1.0, elemId: 0, sd: 28.0 }, // D1 — zoom only

    /* ── G2: Negative Variator (L21, L22, L23, L24) ── */
    { label: "7", R: 236.0277, d: 1.25, nd: 1.95375, elemId: 4, sd: 17.5 },
    { label: "8", R: 19.0394, d: 5.0675, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "9", R: -46.67, d: 1.1, nd: 1.755, elemId: 5, sd: 10.7 },
    { label: "10", R: 68.1612, d: 0.4169, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "11", R: 37.121, d: 3.384, nd: 1.92286, elemId: 6, sd: 9.6 },
    { label: "12", R: -52.558, d: 0.5124, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "13", R: -32.9357, d: 1.0, nd: 1.816, elemId: 7, sd: 11.0 },
    { label: "14", R: 416.8076, d: 18.83905, nd: 1.0, elemId: 0, sd: 11.0 }, // D2 — zoom only

    /* ── Aperture Stop ── */
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 7.4 },

    /* ── G3: Positive Relay + VR (L31, L32+L33, L34) ── */
    { label: "16", R: 39.8204, d: 2.5136, nd: 1.90265, elemId: 8, sd: 8.9 },
    { label: "17", R: -292.5261, d: 0.5, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "18", R: 36.7161, d: 1.0, nd: 2.001, elemId: 9, sd: 9.3 }, // L32 front
    { label: "19", R: 20.9452, d: 3.3404, nd: 1.57957, elemId: 10, sd: 9.3 }, // L32→L33 junction
    { label: "20", R: -76.062, d: 1.4447, nd: 1.0, elemId: 0, sd: 9.7 }, // L33 rear → air
    { label: "21", R: -35.5626, d: 1.0, nd: 1.95375, elemId: 11, sd: 10.1 },
    { label: "22", R: -290.1606, d: 12.23175, nd: 1.0, elemId: 0, sd: 10.3 }, // D3 — zoom only

    /* ── G4: Positive Relay + Asph ED (L41+L42, L43+L44) ── */
    { label: "23", R: 37.1374, d: 4.6344, nd: 1.83481, elemId: 12, sd: 12.9 }, // L41 front
    { label: "24", R: -37.1374, d: 1.0, nd: 1.90366, elemId: 13, sd: 12.9 }, // L41→L42 junction
    { label: "25", R: -308.9768, d: 0.1, nd: 1.0, elemId: 0, sd: 13.0 }, // L42 rear → air
    { label: "26", R: 31.6449, d: 2.7756, nd: 1.95375, elemId: 14, sd: 13.0 }, // L43 front
    { label: "27", R: 15.2741, d: 8.703, nd: 1.4971, elemId: 15, sd: 12.9 }, // L43→L44 junction
    { label: "28A", R: -40.3095, d: 5.54311, nd: 1.0, elemId: 0, sd: 12.9 }, // L44 rear (asph) → air, D4

    /* ── G5: Focus Group (L51+L52) ── */
    { label: "29", R: 1365.4927, d: 3.0634, nd: 1.84666, elemId: 16, sd: 13.7 }, // L51 front
    { label: "30", R: -35.3251, d: 1.0, nd: 1.85135, elemId: 17, sd: 13.7 }, // L51→L52 junction
    { label: "31A", R: 32.6144, d: 10.05055, nd: 1.0, elemId: 0, sd: 13.1 }, // L52 rear (asph) → air, D5

    /* ── G6: Rear Field Corrector (L61, L62) ── */
    { label: "32", R: -16.9998, d: 1.4, nd: 1.8208, elemId: 18, sd: 15.2 },
    { label: "33A", R: -22.5398, d: 0.1, nd: 1.0, elemId: 0, sd: 18.5 }, // L61 rear (asph) → air
    { label: "34", R: 626.7496, d: 3.553, nd: 1.68376, elemId: 19, sd: 20.2 },
    { label: "35", R: -77.6296, d: 11.75486, nd: 1.0, elemId: 0, sd: 21.2 }, // BF
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: κ (kappa) where K = κ − 1.
   *  All three surfaces: κ = 1.0000 → K = 0 (spherical base).
   *  Coefficients A4–A12 from patent; A14 = 0 for all.
   */
  asph: {
    "28A": {
      K: 0,
      A4: 3.13017e-5,
      A6: -1.0309e-7,
      A8: 6.53525e-10,
      A10: -2.5783e-12,
      A12: 3.2673e-15,
      A14: 0,
    },
    "31A": {
      K: 0,
      A4: -6.66636e-6,
      A6: 5.10546e-8,
      A8: 1.72567e-11,
      A10: -2.40595e-12,
      A12: 9.8445e-15,
      A14: 0,
    },
    "33A": {
      K: 0,
      A4: -1.93366e-6,
      A6: -2.0575e-8,
      A8: 8.81224e-11,
      A10: -2.94021e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [24.72, 50.0, 105.05, 194.0],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  Zoom format: each value is [[d_inf, d_close], ...] per zoom position.
   *
   *  Zoom-only gaps (D1, D2, D3): identical inf/close at each position.
   *  Zoom+focus gaps (D4, D5, BF): different inf/close at each position.
   *
   *  Focus mechanism: G5 translates toward image (D4 increases, D5 decreases).
   *  BF shifts slightly (~0.03–0.56 mm) due to residual conjugate shift.
   */
  var: {
    "6": [
      [1.5, 1.5],
      [17.29645, 17.29645],
      [38.92328, 38.92328],
      [54.52847, 54.52847],
    ],
    "14": [
      [18.83905, 18.83905],
      [10.91446, 10.91446],
      [4.55495, 4.55495],
      [1.10018, 1.10018],
    ],
    "22": [
      [12.23175, 12.23175],
      [6.39417, 6.39417],
      [3.18615, 3.18615],
      [1.47844, 1.47844],
    ],
    "28A": [
      [5.54311, 6.43705],
      [4.42699, 6.05192],
      [5.70823, 10.02051],
      [2.00068, 11.69839],
    ],
    "31A": [
      [10.05055, 9.15661],
      [17.0046, 15.37967],
      [18.93085, 14.61857],
      [24.34574, 14.64803],
    ],
    "35": [
      [11.75486, 11.78171],
      [22.41624, 22.50112],
      [30.66474, 30.88824],
      [38.48515, 39.045],
    ],
  },

  varLabels: [
    ["6", "D1"],
    ["14", "D2"],
    ["22", "D3"],
    ["28A", "D4"],
    ["31A", "D5"],
    ["35", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−)", fromSurface: "7", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "16", toSurface: "22" },
    { text: "G4 (+)", fromSurface: "23", toSurface: "28A" },
    { text: "G5 (−)", fromSurface: "29", toSurface: "31A" },
    { text: "G6 (−)", fromSurface: "32", toSurface: "35" },
  ],

  doublets: [
    { text: "VR", fromSurface: "18", toSurface: "20" },
    { text: "D4a", fromSurface: "23", toSurface: "25" },
    { text: "D4b", fromSurface: "26", toSurface: "28A" },
    { text: "D5", fromSurface: "29", toSurface: "31A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Internal focus — G5 (cemented doublet L51+L52) translates toward image. Travel: 0.9 mm (W) to 9.7 mm (T).",

  /* ── Aperture configuration ── */
  nominalFno: [4.12, 5.59, 6.4, 6.5],
  fstopSeries: [4, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 7,
  apertureBladeRoundedness: 0.7,

  /* ── Layout tuning ──
   * Nikon's published 24 mm construction diagram reads taller and more
   * compact through the rear relay/focus stack than the raw max-track zoom
   * framing suggests. Bias the display toward that wide-end silhouette
   * without altering the prescription itself.
   */
  scFill: 0.5,
  yScFill: 0.38,
  maxAspectRatio: 2.0,
  lensShiftFrac: 0.05,
} satisfies LensDataInput;

export default LENS_DATA;
