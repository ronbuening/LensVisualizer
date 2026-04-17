import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon RF 24-50mm F4.5-6.3 IS STM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2023/0213739 A1, Numerical Example 1              ║
 * ║    (Canon Kabushiki Kaisha / Nakahara & Okuoka).                   ║
 * ║  Negative-lead 4-unit zoom: L1(−) / L2(+) / LP(+) / L4(−).       ║
 * ║  8 elements / 8 groups, 3 aspherical surfaces (2 PMo elements).   ║
 * ║  Focus: inner focus via LP (unit 3), single positive meniscus.     ║
 * ║  IS: L2 shift (OIS group).                                        ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d6 (L1→L2), d18/BF (zoom only).             ║
 * ║  Focus variable gaps: d14 (FP→LP), d16 (LP→L4).                  ║
 * ║  No reversing groups — all movements monotonic.                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: No scaling applied — patent at production        ║
 * ║    focal lengths (f ≈ 24.7–48.5 mm).                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: Patent does not list semi-diameters.      ║
 * ║    Estimated via combined marginal + chief ray paraxial trace at   ║
 * ║    wide and tele positions with ~8% mechanical clearance.          ║
 * ║    Front group SDs constrained by G1 rear surface slope limit      ║
 * ║    (sd/|R| < 0.90 at R₂ = 18.479 mm) and L1P edge thickness.     ║
 * ║    Production lens has heavy vignetting at 24 mm, corrected        ║
 * ║    electronically — SDs reflect the optical clear aperture, not    ║
 * ║    the full field circle.                                          ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS: Patent provides only infinity-focus          ║
 * ║    spacings. Close-focus d14/d16 values are estimates based on     ║
 * ║    LP movement of ~1.5–2.0 mm toward the object side.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24-50-f45-63",
  maker: "Canon",
  name: "CANON RF 24-50mm F4.5-6.3 IS STM",
  subtitle: "US 2023/0213739 A1 Example 1 — Canon / Nakahara & Okuoka",
  specs: [
    "8 ELEMENTS / 8 GROUPS",
    "f ≈ 24.7–48.5 mm",
    "F/4.63–6.48",
    "2ω ≈ 72.5–46.2°",
    "3 ASPHERICAL SURFACES (2 PMo)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 50],
  focalLengthDesign: [24.71, 48.53],
  apertureMarketing: 4.5,
  apertureDesign: 4.63,
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
      glass: "S-BSL7 (OHARA 639/554)",
      apd: false,
      role: "First negative lens — diverges beam for wide-angle coverage. Steeply curved rear surface (R₂ = 18.5 mm) carries the dominant refraction in L1.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2 (G2, PMo)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: -112.73,
      glass: "COP resin / ZEONEX E48R (531/559)",
      apd: false,
      role: "Aspherical correction plate — nearly flat base curve (R₁ ≈ 995 mm) with aspherical departure correcting wide-angle coma and field curvature. Plastic molded for weight reduction.",
    },
    {
      id: 3,
      name: "L1P",
      label: "Element 3 (L1P)",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: 67.52,
      glass: "S-TIH6 (OHARA 699/301)",
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
      glass: "S-LAH55V (OHARA 904/313)",
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
      glass: "S-TIH53 (OHARA 847/239)",
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
      glass: "S-LAH53 (OHARA 773/496)",
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
      label: "Element 8 (L4, PMo)",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: -185.51,
      glass: "COP resin / ZEONEX E48R (531/559)",
      apd: false,
      role: "Rear field corrector — dual aspherical surfaces (departures >2 mm) provide higher-order aberration correction for astigmatism and field curvature. Weak negative power (f ≈ −186 mm) slightly extends BFD.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ─── L1 (Unit 1): Negative front group ───
    { label: "1", R: 238.756, d: 1.4, nd: 1.63854, elemId: 1, sd: 17.0 }, // G1 front
    { label: "2", R: 18.479, d: 7.21, nd: 1.0, elemId: 0, sd: 16.5 }, // G1 rear → air
    { label: "3A", R: 994.673, d: 3.7, nd: 1.5311, elemId: 2, sd: 16.0 }, // G2 front (asph)
    { label: "4", R: 56.399, d: 0.3, nd: 1.0, elemId: 0, sd: 15.4 }, // G2 rear → air
    { label: "5", R: 28.004, d: 3.6, nd: 1.69895, elemId: 3, sd: 15.5 }, // L1P front
    { label: "6", R: 65.231, d: 27.85, nd: 1.0, elemId: 0, sd: 15.0 }, // L1P rear → air (var: d6, zoom only)

    // ─── L2 (Unit 2): Positive converging group (IS group) ───
    { label: "7", R: 21.644, d: 3.0, nd: 1.90366, elemId: 4, sd: 9.5 }, // L2a front
    { label: "8", R: -709.102, d: 2.6, nd: 1.0, elemId: 0, sd: 8.5 }, // L2a rear → air
    { label: "9", R: -102.707, d: 0.7, nd: 1.84666, elemId: 5, sd: 7.0 }, // L2b front
    { label: "10", R: 16.164, d: 0.37, nd: 1.0, elemId: 0, sd: 6.5 }, // L2b rear → air
    { label: "11", R: 26.583, d: 2.05, nd: 1.7725, elemId: 6, sd: 6.5 }, // L2c front
    { label: "12", R: -76.939, d: 2.0, nd: 1.0, elemId: 0, sd: 5.6 }, // L2c rear → air

    // ─── Aperture stop + flare-cutting stop ───
    { label: "STO", R: 1e15, d: 6.15, nd: 1.0, elemId: 0, sd: 4.9 }, // aperture diaphragm
    { label: "14", R: 1e15, d: 10.04, nd: 1.0, elemId: 0, sd: 7.0 }, // flare stop FP (var: d14, zoom + focus)

    // ─── LR: Rear group ───
    // LP (Unit 3): Focus lens unit
    { label: "15", R: -65.961, d: 2.95, nd: 1.48749, elemId: 7, sd: 11.0 }, // LP front
    { label: "16", R: -21.205, d: 11.24, nd: 1.0, elemId: 0, sd: 12.0 }, // LP rear → air (var: d16, zoom + focus)
    // L4 (Unit 4): Negative field corrector
    { label: "17A", R: -90.404, d: 3.5, nd: 1.5311, elemId: 8, sd: 13.5 }, // L4 front (asph)
    { label: "18A", R: -1111.779, d: 16.94, nd: 1.0, elemId: 0, sd: 14.0 }, // L4 rear (asph) → image (var: d18/BF, zoom only)
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
   *  d16: zoom + focus (LP→L4, conjugate gap to d14)
   *  d18: zoom only (BFD — inner focus does not shift image plane)
   *
   *  Close-focus estimates: LP movement of ~2.0/1.5/1.5 mm at W/M/T.
   *  Patent provides only infinity-focus data; close-focus values derived
   *  from Canon's published MFD (0.30 m at 24 mm, 0.35 m at 50 mm).
   */
  var: {
    "6": [
      [27.85, 27.85],
      [11.87, 11.87],
      [1.02, 1.02],
    ], // zoom only
    "14": [
      [10.04, 8.04],
      [10.38, 8.88],
      [10.3, 8.8],
    ], // zoom + focus
    "16": [
      [11.24, 13.24],
      [10.91, 12.41],
      [10.98, 12.48],
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
  focusDescription: "Inner focus — LP (single positive meniscus, f ≈ 63 mm) moves toward object. Lead screw STM drive.",

  /* ── Aperture configuration ── */
  nominalFno: [4.63, 5.66, 6.48],
  fstopSeries: [4.5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 7,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
