import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — smc PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,301,711 B2, Numerical Example 6 (Table 6).     ║
 * ║  Inventor: Masakazu Saori. Assignee: PENTAX Corporation.          ║
 * ║  Fast positive-lead four-group zoom (P–N–P–P) for APS-C SLR.     ║
 * ║  15 elements / 12 groups, 3 aspherical elements (4 asph surfaces).║
 * ║  Zoom positions: 16.48 mm (W), 28.00 mm (M), 48.50 mm (T).      ║
 * ║  Constant F/2.9 (patent); marketed as f/2.8.                      ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5 (G1–G2), D15 (G2–STO), D21 (G3–G4),     ║
 * ║                       BFD (G4–image).                              ║
 * ║  D15 is the portion of patent gap d15 before the stop;             ║
 * ║  the stop is fixed at 2.40 mm in front of G3 surface 16.          ║
 * ║                                                                    ║
 * ║  CLOSE-FOCUS NOTE:                                                 ║
 * ║    Patent publishes only zoom-position data at infinity focus.     ║
 * ║    Close-focus air-gap tables are not available. All var entries   ║
 * ║    use identical [d_inf, d_close] pairs (zoom-only).              ║
 * ║    The production lens is IF (internal focus), MFD = 0.30 m.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish semi-diameters. SDs estimated from      ║
 * ║    paraxial marginal ray (at F/2.9) + chief ray (60% field),      ║
 * ║    envelope across all three zoom positions, with 8% mechanical   ║
 * ║    clearance. Front elements constrained by 77 mm filter thread.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-da-16-50-f28",
  maker: "Pentax",
  name: "PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM",
  subtitle: "US 7,301,711 B2 Example 6 — PENTAX / Saori",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "f = 16.48–48.50 mm (2.94×)",
    "F/2.8 (constant)",
    "2ω ≈ 84.0–32.4°",
    "3 ASPHERICAL ELEMENTS (4 SURFACES)",
    "2 ED ELEMENTS",
  ],

  focalLengthMarketing: [16, 50],
  focalLengthDesign: [16.48, 48.5],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentYear: 2007,
  elementCount: 15,
  groupCount: 12,

  /* ── Elements ──
   *  16 entries: the hybrid composite on L21 is split into resin layer (L21r, id 4)
   *  and glass body (L21g, id 5). The manufacturer counts them as one element (15 total).
   */
  elements: [
    // ── Group 10 (Positive First Lens Group, f₁ = +130.1 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -179.6,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Achromatizing flint in G1 cemented doublet",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 141.9,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Barium crown partner in G1 achromatic doublet",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 158.1,
      glass: "S-LAH63Q (OHARA)",
      apd: false,
      role: "Lanthanum crown singlet adding positive power to G1",
    },

    // ── Group 20 (Negative Second Lens Group, f₂ = −15.5 mm) ──
    {
      id: 4,
      name: "L21r",
      label: "Element 4 (resin)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.52972,
      vd: 42.7,
      fl: -352.9,
      glass: "UV-cure aspherical resin (not catalog glass)",
      apd: false,
      cemented: "H1",
      role: "Aspherical resin layer on front of hybrid composite; corrects SA and coma at wide",
    },
    {
      id: 5,
      name: "L21g",
      label: "Element 4 (glass)",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -23.1,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "H1",
      role: "Glass body of hybrid composite; primary negative power in G2 front sub-group",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -27.4,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Strong negative element distributing G2 divergence",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      fl: 27.1,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      role: "Chromatic corrector within G2; Petzval field-flattening",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -19.1,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Strong negative in G2 cemented doublet; achromatizing junction with L25",
    },
    {
      id: 9,
      name: "L25",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 30.6,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Positive flint partner in G2 closing doublet",
    },

    // ── Group 30 (Positive Third Lens Group, f₃ = +92.6 mm) ──
    {
      id: 10,
      name: "L31",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 77.7,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "ED element behind stop; primary chromatic correction",
    },
    {
      id: 11,
      name: "L32",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58636,
      vd: 60.9,
      fl: 39.8,
      glass: "BSM-class (586/609, vendor uncertain)",
      apd: false,
      role: "Strongest positive element in G3; aspherical rear corrects field curvature and astigmatism",
    },
    {
      id: 12,
      name: "L33",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -26.0,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Petzval-sum corrector; air-spaced achromatic pair with L32",
    },

    // ── Group 40 (Positive Fourth Lens Group, f₄ = +29.0 mm) ──
    {
      id: 13,
      name: "L41",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 37.6,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "ED element; primary positive power in G4, lateral chromatic correction (condition 6: νd > 70)",
    },
    {
      id: 14,
      name: "L42",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -81.0,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "High-dispersion flint for achromatizing cemented doublet in G4",
    },
    {
      id: 15,
      name: "L43",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 65.4,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Low-dispersion crown partner in G4 cemented doublet",
    },
    {
      id: 16,
      name: "L44",
      label: "Element 15",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58636,
      vd: 60.9,
      fl: 127.1,
      glass: "BSM-class (586/609, vendor uncertain)",
      apd: false,
      role: "Double-asphere final element; corrects coma, astigmatism, distortion per patent teaching",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surfaces 1–28, with STO inserted between patent surfaces 15 and 16.
   *  The stop is 2.40 mm in front of surface 16 (patent text: "2.40 in front of...surface No. 16").
   *  Patent gap d15 = 20.76/10.31/3.90 is split into:
   *    surface "15" d = (d15 − 2.40) = 18.36/7.91/1.50  (variable)
   *    "STO" d = 2.40                                      (fixed)
   */
  surfaces: [
    // ── Group 10 ──
    { label: "1", R: 228.853, d: 2.4, nd: 1.84666, elemId: 1, sd: 25.7 }, // L11 front
    { label: "2", R: 90.908, d: 6.36, nd: 1.713, elemId: 2, sd: 25.3 }, // L11→L12 cemented junction
    { label: "3", R: 868.199, d: 0.2, nd: 1.0, elemId: 0, sd: 24.4 }, // L12 rear → air
    { label: "4", R: 66.977, d: 4.95, nd: 1.7725, elemId: 3, sd: 24.4 }, // L13 front
    { label: "5", R: 143.503, d: 3.1, nd: 1.0, elemId: 0, sd: 23.0 }, // L13 rear → air (variable: G1–G2)

    // ── Group 20 ──
    { label: "6A", R: 69.698, d: 0.1, nd: 1.52972, elemId: 4, sd: 10.6 }, // L21r resin front (asph)
    { label: "7", R: 50.745, d: 1.45, nd: 1.83481, elemId: 5, sd: 10.6 }, // L21r→L21g hybrid junction
    { label: "8", R: 13.792, d: 6.68, nd: 1.0, elemId: 0, sd: 10.0 }, // L21g rear → air
    { label: "9", R: -48.189, d: 1.2, nd: 1.83481, elemId: 6, sd: 9.0 }, // L22 front
    { label: "10", R: 44.128, d: 0.34, nd: 1.0, elemId: 0, sd: 9.0 }, // L22 rear → air
    { label: "11", R: 29.394, d: 6.7, nd: 1.64769, elemId: 7, sd: 9.2 }, // L23 front
    { label: "12", R: -39.787, d: 1.14, nd: 1.0, elemId: 0, sd: 9.6 }, // L23 rear → air
    { label: "13", R: -22.186, d: 1.2, nd: 1.804, elemId: 8, sd: 9.6 }, // L24 front
    { label: "14", R: 50.962, d: 3.51, nd: 1.84666, elemId: 9, sd: 10.0 }, // L24→L25 cemented junction
    { label: "15", R: -50.962, d: 18.36, nd: 1.0, elemId: 0, sd: 10.6 }, // L25 rear → air (variable: G2–STO)

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 2.4, nd: 1.0, elemId: 0, sd: 10.1 }, // stop, 2.40 mm before G3

    // ── Group 30 ──
    { label: "16", R: 55.754, d: 3.71, nd: 1.497, elemId: 10, sd: 12.0 }, // L31 front (ED)
    { label: "17", R: -122.733, d: 0.2, nd: 1.0, elemId: 0, sd: 12.9 }, // L31 rear → air
    { label: "18", R: 34.402, d: 6.4, nd: 1.58636, elemId: 11, sd: 12.9 }, // L32 front
    { label: "19A", R: -67.745, d: 4.82, nd: 1.0, elemId: 0, sd: 13.3 }, // L32 rear → air (asph)
    { label: "20", R: -22.339, d: 1.25, nd: 1.834, elemId: 12, sd: 13.1 }, // L33 front
    { label: "21", R: 719.208, d: 5.39, nd: 1.0, elemId: 0, sd: 13.5 }, // L33 rear → air (variable: G3–G4)

    // ── Group 40 ──
    { label: "22", R: 35.999, d: 8.16, nd: 1.497, elemId: 13, sd: 14.1 }, // L41 front (ED)
    { label: "23", R: -35.999, d: 0.62, nd: 1.0, elemId: 0, sd: 15.6 }, // L41 rear → air
    { label: "24", R: 1796.044, d: 1.2, nd: 1.80518, elemId: 14, sd: 15.7 }, // L42 front
    { label: "25", R: 62.947, d: 4.67, nd: 1.48749, elemId: 15, sd: 15.7 }, // L42→L43 cemented junction
    { label: "26", R: -62.947, d: 0.3, nd: 1.0, elemId: 0, sd: 16.1 }, // L43 rear → air
    { label: "27A", R: -500.0, d: 4.77, nd: 1.58636, elemId: 16, sd: 16.1 }, // L44 front (asph)
    { label: "28A", R: -65.096, d: 39.0, nd: 1.0, elemId: 0, sd: 16.3 }, // L44 rear → image (BFD, variable)
  ],

  /* ── Aspherical coefficients ──
   *  Patent sag equation: Z(h) = (h²/R)/[1+√(1−(1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰
   *  All conic constants K = 0 (spherical base curve).
   *  A10 not specified by patent; set to 0.
   *
   *  NOTE: Surfaces 19A and 27A share an identical A6 = −2.7300e-8.
   *  In Embodiment 5 these differ (−2.7625e-8 vs −1.4970e-8). May be a
   *  patent typographical artifact; we take the published values as authoritative.
   */
  asph: {
    "6A": {
      K: 0,
      A4: 1.7834e-5,
      A6: -2.4983e-8,
      A8: 8.4108e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: -6.7065e-6,
      A6: -2.73e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: -2.0218e-5,
      A6: -2.73e-8,
      A8: 1.0251e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: -1.691e-7,
      A6: -4.1153e-9,
      A8: 1.4111e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [16.48, 28.0, 48.5],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom only — no close-focus data in patent) ──
   *  Patent gap d15 is split: surface "15" carries (d15 − 2.40), STO carries fixed 2.40.
   *  All entries use identical [d_inf, d_close] pairs since close-focus tables
   *  were not published.
   */
  var: {
    "5": [
      [3.1, 3.1],
      [17.89, 17.89],
      [36.27, 36.27],
    ], // G1–G2
    "15": [
      [18.36, 18.36],
      [7.91, 7.91],
      [1.5, 1.5],
    ], // G2–STO (d15 − 2.40)
    "21": [
      [5.39, 5.39],
      [2.8, 2.8],
      [1.27, 1.27],
    ], // G3–G4
    "28A": [
      [39.0, 39.0],
      [50.99, 50.99],
      [65.07, 65.07],
    ], // BFD
  },
  varLabels: [
    ["5", "D5"],
    ["15", "D15"],
    ["21", "D21"],
    ["28A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "15" },
    { text: "G3 (+)", fromSurface: "16", toSurface: "21" },
    { text: "G4 (+)", fromSurface: "22", toSurface: "28A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Internal focus (IF) via SDM ultrasonic motor. Patent provides zoom-only data; close-focus gaps not modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  apertureBlades: 9,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
