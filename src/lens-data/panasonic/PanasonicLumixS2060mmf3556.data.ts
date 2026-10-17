import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    STO radius derived from the design f-number at each zoom       ║
 * ║    station.                                                       ║
 * ║    L11 (surfaces 20/21) was raised to the 18.3 mm rim drawn in    ║
 * ║    Fig. 3(a), which passes the traced chief ray to the patent's   ║
 * ║    21.633 mm middle/tele image height (2026-09-24 field-coverage  ║
 * ║    audit). Surface 3 was raised to pass the wide chief ray to the ║
 * ║    design Y = 19.60 mm.                                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "lumix-s-20-60-f35-56",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S 20-60mm f/3.5-5.6",
  subtitle: "JP 2021-179551 A EXAMPLE 2 — PANASONIC / KITADA, KUDO, SUEYOSHI, LI",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "f = 20.8–57.6 mm",
      "F/3.57–5.81",
      "2ω ≈ 93.4–40.6°",
      "4 ASPHERICAL SURFACES",
      "3 ED, 1 UHR",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: [20, 60], design: [20.81, 57.63] },
    fNumber: { marketing: 3.5, design: 3.57 },
  },

  source: {
    patentNumber: "JP 2021-179551 A",
    patentYear: 2021,
    authors: ["Takahiro Kitada", "Yuka Kudo", "Masafumi Sueyoshi", "Jindong Li"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.3,
      focalLengthMm: 163.4,
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
      focalLengthMm: -22.2,
      glass: "S-LAH95 (OHARA; exact patent coordinate match)",
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
      focalLengthMm: -21.7,
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
      focalLengthMm: 14.9,
      glass: "859300 - high-index flint (patent nd=1.85883, vd=30.0)",
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
      focalLengthMm: -32.2,
      glass: "J-LASF021 (Hikari)",
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
      focalLengthMm: 30.1,
      glass: "K-VC89 (Sumita)",
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
      focalLengthMm: 37.2,
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
      focalLengthMm: -12.7,
      glass: "NBFD15 (HOYA)",
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
      focalLengthMm: 15.8,
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
      focalLengthMm: -48.9,
      glass: "M-BACD12 (HOYA catalog equivalent; production supplier unspecified)",
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
      focalLengthMm: 121.0,
      glass: "PBH21 (OHARA discontinued catalog-equivalent to patent 923209; supplier not identified)",
      apd: false,
      role: "Fixed field flattener (G5, L5a). UHR element; stationary during zoom and focus. Corrects residual field curvature.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── G1: Front collector (L1) ── */
    { label: "1", R: 79.0512, d: 3.9852, sd: 20.5, medium: 1 },
    { label: "2", R: 433.2915, sd: 19.5 }, // d2 variable

    /* ── G2: Variator (L2, L3+L4, L5) ── */
    { label: "3", R: 52.4162, d: 1.1, sd: 15.4, medium: 2 },
    { label: "4", R: 14.3826, d: 9.6762, sd: 12.5 },
    { label: "5", R: -53.5391, d: 3.575, sd: 11.5, medium: 3 }, // L3 front
    { label: "6", R: 17.398, d: 8.74, sd: 11.5, medium: 4 }, // L3→L4 junction
    { label: "7", R: -37.416, d: 0.4308, sd: 10.5 },
    { label: "8", R: -31.6882, d: 0.8, sd: 9.5, medium: 5 },
    { label: "9", R: 204.4024, sd: 9.5 }, // d9 variable

    /* ── G3: Relay / imaging group (STO, L6, L7, L8+L9) ── */
    { label: "STO", R: "flat", d: 1.4 },
    {
      label: "11A",
      R: 18.3208,
      d: 3.54,
      sd: 8.0,
      medium: 6,
      asphere: { K: 0, A4: 2.37925e-6, A6: -2.0887e-7, A8: 1.86643e-9, A10: -1.36154e-11, A12: -1.95074e-13, A14: 0 },
    },
    {
      label: "12A",
      R: 67.3256,
      d: 0.6734,
      sd: 8.0,
      asphere: { K: 0, A4: 3.88512e-5, A6: -2.93102e-7, A8: 4.60572e-9, A10: -5.77765e-11, A12: 0, A14: 0 },
    },
    { label: "13", R: 36.3845, d: 3.315, sd: 8.0, medium: 7 },
    { label: "14", R: -36.3845, d: 1.8357, sd: 8.0 },
    { label: "15", R: "flat", d: 0.6, sd: 7.4, medium: 8 }, // L8 front (plano)
    { label: "16", R: 10.2444, d: 4.5235, sd: 7.4, medium: 9 }, // L8→L9 junction
    { label: "17", R: -28.728, sd: 7.4 }, // d17 variable

    /* ── G4: Focus group (L10) ── */
    {
      label: "18A",
      R: -33.6248,
      d: 1.1869,
      sd: 8.0,
      medium: 10,
      asphere: {
        K: 0,
        A4: 2.36793e-4,
        A6: -3.8777e-6,
        A8: 6.37251e-8,
        A10: -7.56853e-10,
        A12: 4.93569e-12,
        A14: -8.49844e-15,
      },
    },
    {
      label: "19A",
      R: 191.0158,
      sd: 8.0,
      asphere: {
        K: 0,
        A4: 2.39528e-4,
        A6: -3.14396e-6,
        A8: 2.40725e-8,
        A10: 2.5966e-10,
        A12: -8.75404e-12,
        A14: 6.41106e-14,
      },
    }, // d19 variable

    /* ── G5: Field flattener (L11, fixed) ── */
    { label: "20", R: -44.4984, d: 2.8302, sd: 18.3, medium: 11 },
    { label: "21", R: -32.7872, sd: 18.3 }, // BFD to image; BF varies slightly with zoom
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom positions ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 20.8053, nominalFNumber: 3.57, label: "Wide" },
      { focalLengthMm: 34.6272, nominalFNumber: 4.51 },
      { focalLengthMm: 57.6301, nominalFNumber: 5.81, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.15,
    description:
      "Inner focus via G4 (L10). L10 translates toward image for close focus; close-focus spacings are inferred from paraxial finite-conjugate matching because the patent publishes only infinity-focus data. Production MFD is 0.15 m (at 20–26 mm) and 0.40 m (at 60 mm), max magnification 0.43× at 26 mm.",
  },

  /* (moved from var) ── Variable air spacings
   * Patent publishes infinity-focus zoom spacings only. Close-focus d17/d19
   * values are inferred from paraxial conjugate matching to production MFD:
   * G4/L10 moves imageward, so d17 grows while d19 contracts by the same amount.
   */
  gaps: {
    "2": {
      label: "D2",
      values: [
        [0.5, 0.5],
        [8.7066, 8.7066],
        [25.4486, 25.4486],
      ],
    },
    "9": {
      label: "D9",
      values: [
        [19.7087, 19.7087],
        [8.3001, 8.3001],
        [2.5274, 2.5274],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [2.9215, 7.4935],
        [5.9516, 10.8445],
        [7.2409, 10.9612],
      ],
    },
    "19A": {
      label: "D19",
      values: [
        [12.294, 7.722],
        [20.9631, 16.0702],
        [36.2231, 32.5028],
      ],
    },
    "21": {
      label: "BFD",
      values: [
        [22.2307, 22.2307],
        [22.2303, 22.2303],
        [22.2025, 22.2025],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22], blades: 9 },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.45, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
