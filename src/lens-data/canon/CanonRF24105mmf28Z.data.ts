import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon RF24-105mm F2.8 L IS USM Z                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2024/0192474 A1, Numerical Example 4 (¶0082).    ║
 * ║  Inventor: Shunji Iwamoto, Canon Kabushiki Kaisha.                ║
 * ║  JP Priority: 2022-192641 (Dec. 1, 2022).                        ║
 * ║  Positive–negative–positive–rear-group zoom for RF mount.         ║
 * ║  23 elements / 18 groups (24 optical bodies), 3 aspherical        ║
 * ║  surfaces (2× GMo + 1× replica).                                 ║
 * ║  Focus: Dual-group floating focus via two Nano USM motors.        ║
 * ║    L5 (S35-S36) moves image-ward; L6 (S37-S38) moves             ║
 * ║    object-ward when focusing close.                               ║
 * ║                                                                    ║
 * ║  Internal zoom (constant overall length 211.98 mm).               ║
 * ║  Zoom variable gaps: d8, d15, d24 (zoom primary).                ║
 * ║  Zoom + focus variable gaps: d34, d36, d38, d43.                 ║
 * ║  Non-monotonic BFD: d43 peaks at middle zoom position.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Estimated from combined marginal + chief ray envelope across   ║
 * ║    all zoom positions, constrained by positive edge thickness,    ║
 * ║    cross-gap sag intrusion (≤ 90% of gap), and 82 mm filter      ║
 * ║    thread (front elements capped at SD ≤ 39 mm). The replica     ║
 * ║    resin layer is capped separately because it is only 0.05 mm    ║
 * ║    thick at center. Significant                                  ║
 * ║    vignetting is expected at field corners, especially in L2.     ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent provides no close-focus air spacing data for this       ║
 * ║    example. All var entries use identical inf/close values.        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf24-105f28z",
  maker: "Canon",
  name: "CANON RF24-105mm F2.8 L IS USM Z",
  subtitle: "US 2024/0192474 A1 Example 4 — Canon / Iwamoto",
  specs: [
    "23 ELEMENTS / 18 GROUPS",
    "f = 24.78–102.06 mm",
    "F/2.9 (constant)",
    "2ω ≈ 82.2–24.0°",
    "3 ASPHERICAL SURFACES (2 GMo + 1 Replica)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 105],
  focalLengthDesign: [24.78, 102.06],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  patentYear: 2024,
  elementCount: 23,
  groupCount: 18,

  /* ── Elements ── */
  elements: [
    // ── Lens Unit L1 (fixed front positive, f = +90.57 mm) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.90043,
      vd: 37.4,
      fl: -79.6,
      glass: "Lanthanum dense flint (900/374)",
      role: "Single negative lens L11; retrofocus lead, diverges marginal ray for wide-angle coverage",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 199.9,
      glass: "Phosphate crown (538/747)",
      role: "Low-dispersion positive; adds power with minimal chromatic contribution",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 153.3,
      glass: "Lanthanum crown (729/547)",
      role: "Distributed positive power with low curvatures",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 96.4,
      glass: "Lanthanum crown (729/547)",
      role: "Strongest positive element in L1; same glass as Element 3",
    },

    // ── Lens Unit L2 (negative variator, f = −27.00 mm) ──
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -35.0,
      glass: "Dense lanthanum flint (883/408)",
      role: "Primary negative in variator; strongest individual negative element",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.7,
      fl: -82.4,
      glass: "Barium crown (595/677)",
      role: "Secondary negative in variator",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      fl: -53.0,
      glass: "UD fluorophosphate crown (497/815)",
      apd: "inferred",
      apdNote: "Canon UD glass, equivalent to fluorophosphate crown",
      role: "UD element; negative crown in reversed achromatic doublet",
      cemented: "Da",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.77047,
      vd: 29.7,
      fl: 44.8,
      glass: "Heavy flint (770/297)",
      role: "Positive flint in reversed achromatic doublet; chromatic corrector for L2",
      cemented: "Da",
    },

    // ── Lens Unit L3 (positive compensator with stop, f = +119.23 mm) ──
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 82.1,
      glass: "Very heavy flint (847/238)",
      role: "Positive near stop; high-dispersion glass deliberately exploited for chromatic balance",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -98.2,
      glass: "Extreme dense flint — OHARA S-NPH4 (001/291)",
      role: "Highest-index glass in design; strong correction at cemented junction",
      cemented: "Db",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      fl: 50.3,
      glass: "Borosilicate crown (517/524)",
      role: "Crown partner in cemented doublet near stop",
      cemented: "Db",
    },
    {
      id: 12,
      name: "L12r",
      label: "Element 12 (resin)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.59022,
      vd: 30.1,
      fl: -1256.1,
      glass: "UV-curing optical resin (replica aspheric)",
      role: "Replica aspherical layer; first Canon improved replica aspheric on RF lens",
      cemented: "Ha",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -65.9,
      glass: "Lanthanum crown (773/496)",
      role: "Glass substrate for replica aspherical composite",
      cemented: "Ha",
    },

    // ── Lens Unit L4 (rear positive relay, f = +35.02 mm) ──
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 50.4,
      glass: "UD fluorophosphate crown (497/815)",
      apd: "inferred",
      role: "UD element; positive crown in cemented doublet for chromatic correction",
      cemented: "Dc",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.90043,
      vd: 37.4,
      fl: -34.9,
      glass: "Lanthanum dense flint (900/374)",
      role: "Negative flint partner for UD achromatization",
      cemented: "Dc",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 61.2,
      glass: "UD fluorophosphate crown (497/815)",
      apd: "inferred",
      role: "UD element; strongest individual positive in L4",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 78.2,
      glass: "UD fluorophosphate crown (497/815)",
      apd: "inferred",
      role: "UD element; distributed positive power with Element 16",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -70.8,
      glass: "OHARA L-LAH86 PGM glass (854/404)",
      role: "GMo aspherical element; primary spherical aberration corrector in converging beam",
      cemented: "Dd",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      fl: 41.2,
      glass: "Barium crown (603/606)",
      role: "Positive partner in GMo aspherical doublet; dominant positive power in rear of L4",
      cemented: "Dd",
    },

    // ── Lens Unit L5 (focus group A, f = −47.42 mm) ──
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: -47.4,
      glass: "Lanthanum crown (729/547)",
      role: "Focus group A (Nano USM #1); moves image-ward when focusing close",
    },

    // ── Lens Unit L6 (focus group B, f = +112.74 mm) ──
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 112.7,
      glass: "OHARA L-BAL42 PGM glass (583/594)",
      role: "Focus group B (Nano USM #2); GMo aspherical, moves object-ward when focusing close",
    },

    // ── Lens Unit L7 (rear field corrector, f = −90.78 mm) ──
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 48.1,
      glass: "Heavy flint (805/254)",
      role: "Flint-lead in rear doublet; chromatic overcorrection for residual color balance",
      cemented: "De",
    },
    {
      id: 23,
      name: "L23",
      label: "Element 23",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      fl: -53.4,
      glass: "Fluorocrown (487/702)",
      role: "Crown partner near image; lateral color correction at field edge",
      cemented: "De",
    },
    {
      id: 24,
      name: "L24",
      label: "Element 24",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -70.9,
      glass: "Extreme dense flint — OHARA S-NPH3 (001/255)",
      role: "Final element; extreme index for field curvature and lateral color correction near image plane",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── L1: Fixed front positive group ──
    { label: "1", R: -266.746, d: 1.6, nd: 1.90043, elemId: 1, sd: 38.0 }, // E1 front
    { label: "2", R: 98.34, d: 2.81, nd: 1.0, elemId: 0, sd: 30.3 }, // E1 rear → air
    { label: "3", R: 192.058, d: 6.58, nd: 1.53775, elemId: 2, sd: 30.3 }, // E2 front
    { label: "4", R: -241.263, d: 0.15, nd: 1.0, elemId: 0, sd: 34.8 }, // E2 rear → air
    { label: "5", R: 119.575, d: 5.31, nd: 1.72916, elemId: 3, sd: 31.5 }, // E3 front
    { label: "6", R: -1682.093, d: 0.15, nd: 1.0, elemId: 0, sd: 31.5 }, // E3 rear → air
    { label: "7", R: 76.157, d: 6.72, nd: 1.72916, elemId: 4, sd: 28.1 }, // E4 front
    { label: "8", R: -880.3, d: 0.8, nd: 1.0, elemId: 0, sd: 28.1 }, // E4 rear → air [var d8]

    // ── L2: Negative variator ──
    { label: "9", R: 915.083, d: 1.2, nd: 1.883, elemId: 5, sd: 25.0 }, // E5 front
    { label: "10", R: 29.841, d: 5.73, nd: 1.0, elemId: 0, sd: 15.4 }, // E5 rear → air
    { label: "11", R: -218.33, d: 1.0, nd: 1.59522, elemId: 6, sd: 15.4 }, // E6 front
    { label: "12", R: 63.389, d: 3.69, nd: 1.0, elemId: 0, sd: 14.5 }, // E6 rear → air
    { label: "13", R: -74.215, d: 1.1, nd: 1.497, elemId: 7, sd: 14.5 }, // E7 front (UD, cemented Da)
    { label: "14", R: 41.057, d: 4.98, nd: 1.77047, elemId: 8, sd: 14.5 }, // E7→E8 junction (cemented Da)
    { label: "15", R: -204.631, d: 42.76, nd: 1.0, elemId: 0, sd: 15.5 }, // E8 rear → air [var d15]

    // ── L3: Positive compensator with aperture stop ──
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 15.2 }, // Aperture stop
    { label: "17", R: 78.578, d: 3.15, nd: 1.84666, elemId: 9, sd: 15.6 }, // E9 front
    { label: "18", R: -594.031, d: 0.6, nd: 1.0, elemId: 0, sd: 16.1 }, // E9 rear → air
    { label: "19", R: 59.615, d: 1.2, nd: 2.001, elemId: 10, sd: 16.3 }, // E10 front (cemented Db)
    { label: "20", R: 36.734, d: 7.47, nd: 1.51742, elemId: 11, sd: 16.3 }, // E10→E11 junction
    { label: "21", R: -83.322, d: 3.11, nd: 1.0, elemId: 0, sd: 17.3 }, // E11 rear → air
    { label: "22A", R: -44.261, d: 0.05, nd: 1.59022, elemId: 12, sd: 15.5 }, // E12 front (replica asph, cemented Ha)
    { label: "23", R: -47.091, d: 1.2, nd: 1.7725, elemId: 13, sd: 15.5 }, // E12→E13 junction
    { label: "24", R: -640.625, d: 19.63, nd: 1.0, elemId: 0, sd: 18.1 }, // E13 rear → air [var d24]

    // ── L4: Rear positive relay ──
    { label: "25", R: 255.634, d: 8.1, nd: 1.497, elemId: 14, sd: 17.8 }, // E14 front (UD, cemented Dc)
    { label: "26", R: -27.474, d: 1.3, nd: 1.90043, elemId: 15, sd: 17.8 }, // E14→E15 junction
    { label: "27", R: -222.061, d: 0.15, nd: 1.0, elemId: 0, sd: 18.8 }, // E15 rear → air
    { label: "28", R: 41.537, d: 8.18, nd: 1.497, elemId: 16, sd: 20.2 }, // E16 front (UD)
    { label: "29", R: -105.932, d: 2.3, nd: 1.0, elemId: 0, sd: 20.2 }, // E16 rear → air
    { label: "30", R: 63.231, d: 6.49, nd: 1.497, elemId: 17, sd: 20.6 }, // E17 front (UD)
    { label: "31", R: -97.379, d: 0.15, nd: 1.0, elemId: 0, sd: 20.6 }, // E17 rear → air
    { label: "32A", R: 85.354, d: 2.4, nd: 1.854, elemId: 18, sd: 19.9 }, // E18 front (GMo asph, cemented Dd)
    { label: "33", R: 34.925, d: 8.89, nd: 1.60311, elemId: 19, sd: 18.9 }, // E18→E19 junction
    { label: "34", R: -78.017, d: 2.5, nd: 1.0, elemId: 0, sd: 18.9 }, // E19 rear → air [var d34]

    // ── L5: Focus group A (Nano USM #1) ──
    { label: "35", R: 157.315, d: 1.2, nd: 1.72916, elemId: 20, sd: 24.6 }, // E20 front
    { label: "36", R: 28.256, d: 8.07, nd: 1.0, elemId: 0, sd: 23.0 }, // E20 rear → air [var d36]

    // ── L6: Focus group B (Nano USM #2) ──
    { label: "37A", R: 47.159, d: 4.54, nd: 1.58313, elemId: 21, sd: 21.6 }, // E21 front (GMo asph)
    { label: "38", R: 160.935, d: 6.12, nd: 1.0, elemId: 0, sd: 21.6 }, // E21 rear → air [var d38]

    // ── L7: Rear field corrector ──
    { label: "39", R: 210.344, d: 5.69, nd: 1.80518, elemId: 22, sd: 18.5 }, // E22 front (cemented De)
    { label: "40", R: -46.896, d: 1.5, nd: 1.48749, elemId: 23, sd: 18.5 }, // E22→E23 junction
    { label: "41", R: 59.11, d: 9.57, nd: 1.0, elemId: 0, sd: 18.5 }, // E23 rear → air
    { label: "42", R: -33.883, d: 1.2, nd: 2.00069, elemId: 24, sd: 18.5 }, // E24 front
    { label: "43", R: -66.006, d: 11.63, nd: 1.0, elemId: 0, sd: 18.5 }, // E24 rear → BFD [var d43]
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "22A": {
      K: 0,
      A4: 3.72124e-6,
      A6: 3.39835e-10,
      A8: 6.96887e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "32A": {
      K: 0,
      A4: -7.10364e-6,
      A6: -3.27713e-9,
      A8: -1.38031e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "37A": {
      K: 0,
      A4: 1.68172e-6,
      A6: 3.21879e-9,
      A8: 5.86323e-12,
      A10: -1.2647e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  No close-focus spacing data in patent for Example 4.
   *  All var entries use identical infinity/close values.
   */
  var: {
    "8": [
      [0.8, 0.8],
      [16.58, 16.58],
      [34.7, 34.7],
    ],
    "15": [
      [42.76, 42.76],
      [21.9, 21.9],
      [2.98, 2.98],
    ],
    "24": [
      [19.63, 19.63],
      [10.61, 10.61],
      [0.79, 0.79],
    ],
    "34": [
      [2.5, 2.5],
      [1.78, 1.78],
      [1.1, 1.1],
    ],
    "36": [
      [8.07, 8.07],
      [7.9, 7.9],
      [7.19, 7.19],
    ],
    "38": [
      [6.12, 6.12],
      [7.0, 7.0],
      [25.75, 25.75],
    ],
    "43": [
      [11.63, 11.63],
      [25.76, 25.76],
      [19.01, 19.01],
    ],
  },

  varLabels: [
    ["8", "D8"],
    ["15", "D15"],
    ["24", "D24"],
    ["34", "D34"],
    ["36", "D36"],
    ["38", "D38"],
    ["43", "BF"],
  ],

  /* ── Zoom configuration ── */
  zoomPositions: [24.78, 50.31, 102.06],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (fixed)", fromSurface: "1", toSurface: "8" },
    { text: "L2 (variator)", fromSurface: "9", toSurface: "15" },
    { text: "L3 (compensator)", fromSurface: "STO", toSurface: "24" },
    { text: "L4 (relay)", fromSurface: "25", toSurface: "34" },
    { text: "L5 (focus A)", fromSurface: "35", toSurface: "36" },
    { text: "L6 (focus B)", fromSurface: "37A", toSurface: "38" },
    { text: "L7 (corrector)", fromSurface: "39", toSurface: "43" },
  ],

  doublets: [
    { text: "Da", fromSurface: "13", toSurface: "15" },
    { text: "Db", fromSurface: "19", toSurface: "21" },
    { text: "Ha", fromSurface: "22A", toSurface: "24" },
    { text: "Dc", fromSurface: "25", toSurface: "27" },
    { text: "Dd", fromSurface: "32A", toSurface: "34" },
    { text: "De", fromSurface: "39", toSurface: "41" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "Dual-group floating focus: L5 (neg. meniscus) moves image-ward, L6 (pos. meniscus, GMo asph) moves object-ward. Driven by two independent Nano USM motors. Close-focus gap data not available from patent; identical inf/close values used.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
