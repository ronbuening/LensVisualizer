import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — PANASONIC LUMIX S 20–60mm F3.5–5.6 (S-R2060)      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2021-179551 A, Numerical Example 2 (Panasonic).  ║
 * ║  Five-group zoom (+−+−+), G5 fixed. 11 elements / 9 groups,      ║
 * ║  4 aspherical surfaces on 2 elements. 3 ED, 1 UHR.               ║
 * ║  Focus: inner focus via G4 (single element L10) toward image.     ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d2, d9, d17, d19, and BF.                    ║
 * ║  Focus variable gaps: d17, d19 (G3–G4, G4–G5 spacing).           ║
 * ║  The patent states that G4 moves imageward for close focus but    ║
 * ║  publishes only infinity-focus spacings. Close-focus d17/d19      ║
 * ║  values are inferred by paraxial finite-conjugate matching: move  ║
 * ║  only G4, conserve d17 + d19, and solve against production MFD    ║
 * ║  constraints (0.15 m wide, 0.40 m tele; mid MFD interpolated).    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not published in the patent. Estimated from marginal ray       ║
 * ║    (at design f/#) + chief ray (60–75% field, graded by position) ║
 * ║    with 8% mechanical clearance, validated against edge thickness ║
 * ║    (≥ 0.3 mm), sd/|R| < 0.88, and cross-gap sag (≤ 90% of gap). ║
 * ║    STO SD = marginal ray height at the stop (wide end).           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "lumix-s-20-60-f35-56",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S 20–60mm F3.5–5.6",
  subtitle: "JP 2021-179551 A EXAMPLE 2 — PANASONIC / KITADA, KUDO, SUEYOSHI, LI",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "f = 20.8–57.6 mm",
    "F/3.57–5.81",
    "2ω ≈ 93.4–40.6°",
    "4 ASPHERICAL SURFACES",
    "3 ED, 1 UHR",
  ],

  focalLengthMarketing: [20, 60],
  focalLengthDesign: [20.81, 57.63],
  apertureMarketing: 3.5,
  apertureDesign: 3.57,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentYear: 2021,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.3,
      fl: 163.4,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Front collector (G1). Weakly positive meniscus convex to object gathers the wide-angle field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -22.2,
      glass: "S-LAH93 (OHARA)",
      apd: false,
      role: "Variator lead (G2, L2a). High-index lanthanum flint for compact negative power and field curvature control.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.59283,
      vd: 68.6,
      fl: -21.7,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote: "ED class, dPgF ≈ +0.019 (HOYA catalog)",
      role: "Variator achromat crown (G2, L2b). ED fluorophosphate crown cemented to L4.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.85883,
      vd: 30.0,
      fl: 14.9,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Variator achromat flint (G2, L2c). Dense titanium flint cemented to L3.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 32.4,
      fl: -32.2,
      glass: "S-TIH10 (OHARA)",
      apd: false,
      role: "Trailing negative (G2, L2d). Closes the variator group; reduces field curvature.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.80998,
      vd: 40.9,
      fl: 30.1,
      glass: "S-LAH63Q (OHARA)",
      apd: false,
      role: "Double-aspheric relay element (G3, L3a). PGM-grade lanthanum crown; primary monochromatic corrector after the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 37.2,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.038 (OHARA catalog)",
      role: "Relay ED crown (G3, L3b). Symmetric biconvex for minimum coma; first of two S-FPL51 elements.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Concave Negative",
      nd: 1.8061,
      vd: 33.3,
      fl: -12.7,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      role: "Relay achromat flint (G3, L3c). Dense titanium flint cemented to L9; concentrates power at the junction.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 15.8,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.038 (OHARA catalog)",
      role: "Relay ED crown (G3, L3d). Second S-FPL51 element; primary axial color corrector in the relay group.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: -48.9,
      glass: "L-PHL1 (OHARA)",
      apd: false,
      role: "Focus element (G4). Double-aspheric PGM phosphate crown; translates toward image for close focus.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 121.0,
      glass: "S-NPH7 (OHARA)",
      apd: false,
      role: "Fixed field flattener (G5, L5a). UHR element; stationary during zoom and focus. Corrects residual field curvature.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front collector (L1) ── */
    { label: "1", R: 79.0512, d: 3.9852, nd: 1.58913, elemId: 1, sd: 20.5 },
    { label: "2", R: 433.2915, d: 0.5, nd: 1.0, elemId: 0, sd: 19.5 }, // d2 variable

    /* ── G2: Variator (L2, L3+L4, L5) ── */
    { label: "3", R: 52.4162, d: 1.1, nd: 1.90366, elemId: 2, sd: 14.5 },
    { label: "4", R: 14.3826, d: 9.6762, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "5", R: -53.5391, d: 3.575, nd: 1.59283, elemId: 3, sd: 11.5 }, // L3 front
    { label: "6", R: 17.398, d: 8.74, nd: 1.85883, elemId: 4, sd: 11.5 }, // L3→L4 junction
    { label: "7", R: -37.416, d: 0.4308, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "8", R: -31.6882, d: 0.8, nd: 1.85, elemId: 5, sd: 9.5 },
    { label: "9", R: 204.4024, d: 19.7087, nd: 1.0, elemId: 0, sd: 9.5 }, // d9 variable

    /* ── G3: Relay / imaging group (STO, L6, L7, L8+L9) ── */
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "11A", R: 18.3208, d: 3.54, nd: 1.80998, elemId: 6, sd: 8.0 },
    { label: "12A", R: 67.3256, d: 0.6734, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "13", R: 36.3845, d: 3.315, nd: 1.497, elemId: 7, sd: 8.0 },
    { label: "14", R: -36.3845, d: 1.8357, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "15", R: 1e15, d: 0.6, nd: 1.8061, elemId: 8, sd: 7.4 }, // L8 front (plano)
    { label: "16", R: 10.2444, d: 4.5235, nd: 1.497, elemId: 9, sd: 7.4 }, // L8→L9 junction
    { label: "17", R: -28.728, d: 2.9215, nd: 1.0, elemId: 0, sd: 7.4 }, // d17 variable

    /* ── G4: Focus group (L10) ── */
    { label: "18A", R: -33.6248, d: 1.1869, nd: 1.58313, elemId: 10, sd: 8.0 },
    { label: "19A", R: 191.0158, d: 12.294, nd: 1.0, elemId: 0, sd: 8.0 }, // d19 variable

    /* ── G5: Field flattener (L11, fixed) ── */
    { label: "20", R: -44.4984, d: 2.8302, nd: 1.92286, elemId: 11, sd: 12.5 },
    { label: "21", R: -32.7872, d: 22.2307, nd: 1.0, elemId: 0, sd: 13.0 }, // BFD to image; BF varies slightly with zoom
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "11A": {
      K: 0,
      A4: 2.37925e-6,
      A6: -2.0887e-7,
      A8: 1.86643e-9,
      A10: -1.36154e-11,
      A12: -1.95074e-13,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 3.88512e-5,
      A6: -2.93102e-7,
      A8: 4.60572e-9,
      A10: -5.77765e-11,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: 2.36793e-4,
      A6: -3.8777e-6,
      A8: 6.37251e-8,
      A10: -7.56853e-10,
      A12: 4.93569e-12,
      A14: -8.49844e-15,
    },
    "19A": {
      K: 0,
      A4: 2.39528e-4,
      A6: -3.14396e-6,
      A8: 2.40725e-8,
      A10: 2.5966e-10,
      A12: -8.75404e-12,
      A14: 6.41106e-14,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [20.8053, 34.6272, 57.6301],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings
   * Patent publishes infinity-focus zoom spacings only. Close-focus d17/d19
   * values are inferred from paraxial conjugate matching to production MFD:
   * G4/L10 moves imageward, so d17 grows while d19 contracts by the same amount.
   */
  var: {
    "2": [
      [0.5, 0.5],
      [8.7066, 8.7066],
      [25.4486, 25.4486],
    ],
    "9": [
      [19.7087, 19.7087],
      [8.3001, 8.3001],
      [2.5274, 2.5274],
    ],
    "17": [
      [2.9215, 7.4935],
      [5.9516, 10.8445],
      [7.2409, 10.9612],
    ],
    "19A": [
      [12.294, 7.722],
      [20.9631, 16.0702],
      [36.2231, 32.5028],
    ],
    "21": [
      [22.2307, 22.2307],
      [22.2303, 22.2303],
      [22.2025, 22.2025],
    ],
  },
  varLabels: [
    ["2", "D2"],
    ["9", "D9"],
    ["17", "D17"],
    ["19A", "D19"],
    ["21", "BFD"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (−)", fromSurface: "3", toSurface: "9" },
    { text: "G3 (+)", fromSurface: "STO", toSurface: "17" },
    { text: "G4 (−)", fromSurface: "18A", toSurface: "19A" },
    { text: "G5 (+)", fromSurface: "20", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.15,
  focusDescription:
    "Inner focus via G4 (L10). L10 translates toward image for close focus; close-focus spacings are inferred from paraxial finite-conjugate matching because the patent publishes only infinity-focus data. Production MFD is 0.15 m (at 20–26 mm) and 0.40 m (at 60 mm), max magnification 0.43× at 26 mm.",

  /* ── Aperture configuration ── */
  nominalFno: [3.57, 4.51, 5.81],
  apertureBlades: 9,
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
