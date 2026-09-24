import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon RF 24-50mm F4.5-6.3 IS STM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2023/0213739 A1, Numerical Example 1              ║
 * ║    (Canon Kabushiki Kaisha / Nakahara & Okuoka). Examples 1–3 are ║
 * ║    all 8-element 24.7–48.5 mm designs; Example 1 is the FIG. 1 /   ║
 * ║    front-page embodiment and is the one stored.                    ║
 * ║  Negative-lead 4-unit zoom: L1(−) / L2(+) / L3 = LP(+) / L4(−).   ║
 * ║  8 elements / 8 groups, 3 aspherical surfaces on G2 and L4.        ║
 * ║  Focus: inner focus via LP (unit 3), single positive meniscus.     ║
 * ║  IS: L2 shift (¶0064).                                             ║
 * ║                                                                    ║
 * ║  Zoom (¶0070, FIG. 1): L1 follows a path convex toward the image   ║
 * ║    (front vertex 105.60 → 98.52 → 99.03 mm from the image, so it   ║
 * ║    reverses near the middle station). L2, L3 and L4 move           ║
 * ║    monotonically toward the object; L2 and L4 move as one          ║
 * ║    (d14 + 2.95 + d16 = 24.23 mm at every station), with LP         ║
 * ║    floating between them. Variable gaps: d6, d14, d16, d18 (BF).  ║
 * ║    All three tabulated stations (24.71 / 35.01 / 48.53 mm) are     ║
 * ║    stored; nothing is interpolated.                                ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: No scaling applied — patent at production        ║
 * ║    focal lengths (f = 24.71–48.53 mm).                             ║
 * ║  NOTE ON BF / CONIC: No filter or cover plate is listed, so d18 is ║
 * ║    the tabulated BF. All three aspheres have K = 0 (convention     ║
 * ║    moot).                                                          ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE: FNO 4.63 / 5.66 / 6.48 with the stop in L2; no  ║
 * ║    iris diameters are published, so the station iris radii are    ║
 * ║    inferred from the FNO schedule ("from-nominal-fno": 4.58 /      ║
 * ║    4.40 / 4.58 mm). STO sd records the largest (4.6 mm). FIG. 1    ║
 * ║    draws the SP opening at about 4.4 mm.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: The patent publishes no effective         ║
 * ║    diameters. G1 front (18.8) and L2a (6.4) are measured from      ║
 * ║    FIG. 1 (front page, 300 dpi; 15.02 px/mm from the S1–S18 vertex ║
 * ║    span). S10 (4.9) clears the f/4.63 axial beam (4.72 mm) inside  ║
 * ║    the S10/S11 gap limit. The remaining rims are earlier estimates ║
 * ║    that lie within about 15 % of FIG. 1. The G1 rear curve ends at ║
 * ║    about 14.8 mm and L4's front curve at about 12.1 mm, each with  ║
 * ║    a flat flange outside. The wide end relies on digital           ║
 * ║    distortion correction: a real chief ray at the patent's 36.23°  ║
 * ║    lands at 15.8 mm (FIG. 2A about −13 %).                         ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS: The patent gives infinity spacings only.     ║
 * ║    Close-focus d14/d16 are CALCULATED: the paraxial LP travel      ║
 * ║    (3.27 / 4.79 / 6.88 mm toward the object) that focuses Canon's  ║
 * ║    published MFD, 0.30 m at 24 mm and 0.35 m at 50 mm, with 0.32 m ║
 * ║    interpolated at 35 mm. The resulting β = −0.116 / −0.151 /      ║
 * ║    −0.195 matches Canon's published 0.11× / 0.19× maxima.          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24-50-f45-63",
  maker: "Canon",
  name: "CANON RF 24-50mm f/4.5-6.3 IS STM",
  subtitle: "US 2023/0213739 A1 Example 1 — Canon / Nakahara & Okuoka",
  specs: [
    "8 ELEMENTS / 8 GROUPS",
    "f ≈ 24.7–48.5 mm",
    "F/4.63–6.48",
    "2ω ≈ 72.5–46.2°",
    "3 ASPHERICAL SURFACES (G2, L4)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 50],
  focalLengthDesign: [24.71, 48.53],
  apertureMarketing: 4.5,
  apertureDesign: 4.63,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2023/0213739 A1",
  patentAuthors: ["Makoto Nakahara", "Shinya Okuoka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2023,
  elementCount: 8,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1 (G1)",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      fl: -31.45,
      glass: "S-BSM18 (OHARA)",
      apd: false,
      role: "First negative lens — diverges beam for wide-angle coverage. Steeply curved rear surface (R₂ = 18.5 mm) carries the dominant refraction in L1.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2 (G2, Asph.)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: -112.73,
      glass: "531559 — optical resin coordinate (COP class; patent ¶0062 allows resin for G2, material not named)",
      apd: false,
      role: "Aspherical correction plate — nearly flat base curve (R₁ ≈ 995 mm) with aspherical departure correcting wide-angle coma and field curvature (¶0061). The patent allows resin for G2 to save weight (¶0062).",
    },
    {
      id: 3,
      name: "L1P",
      label: "Element 3 (L1P)",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: 67.52,
      glass: "S-TIM35 (OHARA 699/301)",
      apd: false,
      role: "Chromatic corrector for L1 — high-dispersion flint counterbalances G1/G2 lateral chromatic aberration.",
    },
    {
      id: 4,
      name: "L2a",
      label: "Element 4 (L2a)",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.3,
      fl: 23.29,
      glass: "S-LAH95 (OHARA 904/313)",
      apd: false,
      role: "Primary convergence element — highest nd in system (1.904) keeps curvatures moderate despite strong +23 mm power. Near-planoconvex orientation minimizes spherical aberration.",
    },
    {
      id: 5,
      name: "L2b",
      label: "Element 5 (L2b)",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -16.45,
      glass: "S-NPH53 (OHARA 847/239)",
      apd: false,
      role: "Chromatic corrector for L2 — most dispersive element (νd = 23.9). Air-spaced flint in the L2 PNP triplet provides strong chromatic counterbalance.",
    },
    {
      id: 6,
      name: "L2c",
      label: "Element 6 (L2c)",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 25.8,
      glass: "S-LAH66 (OHARA 773/496)",
      apd: false,
      role: "Secondary convergence in L2 — completes the PNP triplet. Biconvex shape distributes refraction for coma balance.",
    },
    {
      id: 7,
      name: "LP",
      label: "Element 7 (LP, Focus)",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 62.75,
      glass: "S-FSL5 (OHARA 487/702)",
      apd: false,
      role: "Inner focus element — lightweight fluor crown (density ~2.46 g/cm³) moves toward object for close focus. Concave-toward-object shape reduces field curvature variation during focus.",
    },
    {
      id: 8,
      name: "L4",
      label: "Element 8 (L4, Asph.)",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: -185.51,
      glass: "531559 — optical resin coordinate (same as G2; material not named in patent)",
      apd: false,
      role: "Rear field corrector — dual aspherical surfaces (departures about −1.8 mm at the rims) provide higher-order aberration correction for astigmatism and field curvature. Weak negative power (f ≈ −186 mm) slightly extends BFD.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ─── L1 (Unit 1): Negative front group ───
    { label: "1", R: 238.756, d: 1.4, nd: 1.63854, elemId: 1, sd: 18.8 }, // G1 front
    { label: "2", R: 18.479, d: 7.21, nd: 1.0, elemId: 0, sd: 14.4 }, // G1 rear → air
    { label: "3A", R: 994.673, d: 3.7, nd: 1.5311, elemId: 2, sd: 14.0 }, // G2 front (asph)
    { label: "4", R: 56.399, d: 0.3, nd: 1.0, elemId: 0, sd: 14.2 }, // G2 rear → air
    { label: "5", R: 28.004, d: 3.6, nd: 1.69895, elemId: 3, sd: 13.2 }, // L1P front
    { label: "6", R: 65.231, d: 27.85, nd: 1.0, elemId: 0, sd: 12.7 }, // L1P rear → air (var: d6, zoom only)

    // ─── L2 (Unit 2): Positive converging group (IS group) ───
    { label: "7", R: 21.644, d: 3.0, nd: 1.90366, elemId: 4, sd: 6.4 }, // L2a front
    { label: "8", R: -709.102, d: 2.6, nd: 1.0, elemId: 0, sd: 6.4 }, // L2a rear → air
    { label: "9", R: -102.707, d: 0.7, nd: 1.84666, elemId: 5, sd: 5.8 }, // L2b front
    { label: "10", R: 16.164, d: 0.37, nd: 1.0, elemId: 0, sd: 4.9 }, // L2b rear → air
    { label: "11", R: 26.583, d: 2.05, nd: 1.7725, elemId: 6, sd: 5.8 }, // L2c front
    { label: "12", R: -76.939, d: 2.0, nd: 1.0, elemId: 0, sd: 5.2 }, // L2c rear → air

    // ─── Aperture stop + flare-cutting stop ───
    { label: "STO", R: 1e15, d: 6.15, nd: 1.0, elemId: 0, sd: 4.6 }, // aperture diaphragm
    { label: "14", R: 1e15, d: 10.04, nd: 1.0, elemId: 0, sd: 6.5 }, // flare stop FP (var: d14, zoom + focus)

    // ─── LR: Rear group ───
    // LP (Unit 3): Focus lens unit
    { label: "15", R: -65.961, d: 2.95, nd: 1.48749, elemId: 7, sd: 8.6 }, // LP front
    { label: "16", R: -21.205, d: 11.24, nd: 1.0, elemId: 0, sd: 9.0 }, // LP rear → air (var: d16, zoom + focus)
    // L4 (Unit 4): Negative field corrector
    { label: "17A", R: -90.404, d: 3.5, nd: 1.5311, elemId: 8, sd: 11.8 }, // L4 front (asph)
    { label: "18A", R: -1111.779, d: 16.94, nd: 1.0, elemId: 0, sd: 12.5 }, // L4 rear (asph) → image (var: d18/BF, zoom only)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 0,
      A4: 2.06228e-6,
      A6: -3.09541e-9,
      A8: 7.24904e-11,
      A10: -3.07809e-13,
      A12: 9.19241e-16,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: -1.01775e-4,
      A6: 1.71677e-7,
      A8: 1.83977e-10,
      A10: -1.16025e-11,
      A12: 2.80092e-14,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -9.00719e-5,
      A6: 2.07355e-7,
      A8: -1.21619e-10,
      A10: -4.95038e-12,
      A12: 1.35424e-14,
      A14: 0,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [24.71, 35.01, 48.53],
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  d6:  zoom only (L1→L2 gap, dominant zoom motion)
   *  d14: zoom + focus (FP→LP, LP moves toward object for close focus)
   *  d16: zoom + focus (LP→L4; d14 + d16 = 21.28 mm, constant)
   *  d18: zoom only (BF — inner focus does not shift the image plane)
   *
   *  Infinity columns are the patent's W/M/T table. Close columns are
   *  CALCULATED paraxial LP positions for 0.30 / 0.32 / 0.35 m
   *  object-to-image (LP travel 3.27 / 4.79 / 6.88 mm); the patent
   *  publishes no close-focus spacings.
   */
  var: {
    "6": [
      [27.85, 27.85],
      [11.87, 11.87],
      [1.02, 1.02],
    ], // zoom only
    "14": [
      [10.04, 6.77],
      [10.38, 5.59],
      [10.3, 3.42],
    ], // zoom + focus
    "16": [
      [11.24, 14.51],
      [10.91, 15.7],
      [10.98, 17.86],
    ], // zoom + focus
    "18A": [
      [16.94, 16.94],
      [25.84, 25.84],
      [37.19, 37.19],
    ], // zoom only (BF)
  },
  varLabels: [
    ["6", "D6"],
    ["14", "D14"],
    ["16", "D16"],
    ["18A", "BF"],
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "L1 (−)", fromSurface: "1", toSurface: "6" },
    { text: "L2 (+)", fromSurface: "7", toSurface: "12" },
    { text: "LR", fromSurface: "15", toSurface: "18A" },
  ],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  zoomCloseFocusM: [0.3, 0.32, 0.35],
  focusDescription: "Inner focus — LP (single positive meniscus, f ≈ 63 mm) moves toward object. Lead screw STM drive.",

  /* ── Aperture configuration ── */
  nominalFno: [4.63, 5.66, 6.48],
  zoomApertureModel: "from-nominal-fno",
  fstopSeries: [4.63, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
