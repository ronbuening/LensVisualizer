import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP2021056407A Numerical Example 3, pages 15–16, Figure 5 page 23.
 * Seventeen elements, twelve air-separated components, seven zoom units.
 * Numerical zoom stations retained; finite focus is unpublished and disabled.
 * Figure 5 assigns focus to G4 objectward and G6 imageward, not G7.
 * No cover glass or filter block; surface 6 is an air-only flare diaphragm.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-70-200-f28",
  maker: "Canon",
  name: "CANON RF 70-200mm f/2.8 L IS USM",
  subtitle: "JP 2021-056407 A — EXAMPLE 3",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 12 GROUPS / 7 ZOOM UNITS",
      "f = 72.13–194.06 mm",
      "F/2.89–2.91",
      "Infinity-focus model; centered IS",
      "2ω = 33.4–12.7°",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 17,
    groupCount: 12,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [70, 200], design: [72.13, 194.06] },
    fNumber: { marketing: 2.8, design: 2.89 },
  },

  source: {
    patentNumber: "JP 2021-056407 A",
    patentYear: 2021,
    authors: ["Makoto Nakahara", "Shunji Iwamoto", "Masato Katayose"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 240.6,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive Meniscus singlet",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      focalLengthMm: -163.33,
      glass: "S-NBM51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative Meniscus element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.43875,
      vd: 94.7,
      focalLengthMm: 117.29,
      glass: "S-FPL55 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Plano-Convex Positive element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: -101.22,
      glass: "S-FPM2 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconcave Negative singlet",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.76385,
      vd: 48.5,
      focalLengthMm: -36.58,
      glass: "S-LAH96 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconcave Negative element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 58.34,
      glass: "S-NBH56 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive Meniscus element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 67.04,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive (1× Asph) singlet",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -34.67,
      glass: "S-FTM16 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconcave Negative element of cemented doublet D3; G4 focus objectward",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: 46.53,
      glass: "S-TIH10 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive element of cemented doublet D3; G4 focus objectward",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.9,
      focalLengthMm: -67.79,
      glass: "TAFD65 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative Meniscus element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 54.62,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 65.7,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive element of cemented doublet D5",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.9,
      focalLengthMm: -103.4,
      glass: "TAFD65 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative Meniscus element of cemented doublet D5",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 59.9,
      glass: "TAFD37A — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive singlet",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: -55.03,
      glass: "S-PHM52 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative Meniscus singlet; G6 focus imageward",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 89.66,
      glass: "S-NBH56 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive Meniscus singlet; rear G7, no source focus arrow",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -60.64,
      glass: "S-BAL42 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Neg. Meniscus (1× Asph) singlet; rear G7, no source focus arrow",
    },
  ],

  /* ── Surface prescription ──
   *  31 surfaces: 17 glass elements + air gaps, front to rear.
   *  SDs estimated from ray trace and manufacturer diagram proportions (see file header).
   *  Surface 6 is the flare-cut stop (FP), surface 12 is the aperture stop (STO).
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Group G1 (L1): positive front group ──
    { label: "1", R: 99.618, d: 7.7, sd: 37.0, medium: 1 }, // L1 front — Pos. Meniscus
    { label: "2", R: 581.439, d: 0.2, sd: 36.0 }, // L1 rear → air
    { label: "3", R: 107.681, d: 2.4, sd: 36.0, medium: 2 }, // L2 front (cemented D1)
    { label: "4", R: 51.46, d: 12.7, sd: 35.0, medium: 3 }, // L2→L3 junction — elemId: 3 (L3)
    { label: "5", R: "flat", sd: 33.0 }, // L3 rear (flat) → air [ZOOM VAR]

    // ── Flare-cut stop (FP) — fixed air gap between G1 and G2 ──
    { label: "6", R: "flat", d: 3.67, sd: 19.0 }, // FP diaphragm

    // ── Group G2 (L2): variator / IS group — STATIONARY during zoom ──
    { label: "7", R: -617.95, d: 1.45, sd: 18.0, medium: 4 }, // L4 front — Biconcave (nearly plano front)
    { label: "8", R: 66.515, d: 3.79, sd: 18.0 }, // L4 rear → air
    { label: "9", R: -81.698, d: 1.3, sd: 15.7, medium: 5 }, // L5 front (cemented D2; sd reduced to avoid cross-gap sag overlap)
    { label: "10", R: 42.75, d: 4.4, sd: 16.5, medium: 6 }, // L5→L6 junction — elemId: 6 (L6)
    { label: "11", R: 285.171, sd: 18.0 }, // L6 rear → air [ZOOM VAR]

    // ── Aperture stop (STO) — positioned at front of G3 ──
    { label: "STO", R: "flat", d: 0.5 }, // STO — radius derived from the design f-number at each zoom station

    // ── Group G3 (L3): compensator — single UD aspherical element ──
    {
      label: "13A",
      R: 52.335,
      d: 7.05,
      sd: 18.5,
      medium: 7,
      asphere: { K: 0, A4: -1.09244e-6, A6: 1.04634e-9, A8: 2.02132e-13 },
    }, // L7 front — ASPH
    { label: "14", R: -87.607, sd: 18.0 }, // L7 rear → air [ZOOM VAR]

    // ── Group G4 (L4): negative field flattener — cemented doublet ──
    { label: "15", R: -34.35, d: 1.2, sd: 16.4, medium: 8 }, // L8 front (cemented D3)
    { label: "16", R: 51.821, d: 5.0, sd: 16.4, medium: 9 }, // L8→L9 junction — elemId: 9 (L9)
    { label: "17", R: -93.944, sd: 16.2 }, // L9 rear → air [ZOOM VAR]

    // ── Group G5 (LP/L5): main positive relay — 5 elements, 3 sub-groups ──
    { label: "18", R: 126.864, d: 1.35, sd: 16.4, medium: 10 }, // L10 front (cemented D4)
    { label: "19", R: 45.374, d: 6.25, sd: 16.4, medium: 11 }, // L10→L11 junction — elemId: 11 (L11)
    { label: "20", R: -64.472, d: 0.15, sd: 16.4 }, // L11 rear → air
    { label: "21", R: 114.577, d: 5.8, sd: 16.6, medium: 12 }, // L12 front (cemented D5)
    { label: "22", R: -44.904, d: 1.35, sd: 16.2, medium: 13 }, // L12→L13 junction — elemId: 13 (L13)
    { label: "23", R: -77.708, d: 0.15, sd: 16.0 }, // L13 rear → air
    { label: "24", R: 61.735, d: 4.45, sd: 17.0, medium: 14 }, // L14 front — Biconvex
    { label: "25", R: -412.192, sd: 16.2 }, // L14 rear → air [ZOOM VAR]

    // ── Group G6 (LN): focus group — single element ──
    { label: "26", R: 159.922, d: 1.2, sd: 16.0, medium: 15 }, // L15 front — Neg. Meniscus
    { label: "27", R: 27.965, sd: 15.4 }, // L15 rear → air [ZOOM VAR]

    // ── Group G7 (LR): rear group — 2 elements; no source focus motion ──
    { label: "28", R: -113.431, d: 3.2, sd: 15.0, medium: 16 }, // L16 front — Pos. Meniscus
    { label: "29", R: -46.333, d: 6.54, sd: 14.2 }, // L16 rear → air
    {
      label: "30A",
      R: -23.301,
      d: 1.9,
      sd: 17.0,
      medium: 17,
      asphere: { K: 0, A4: 1.0914e-5, A6: 1.43304e-8, A8: -2.5459e-11, A10: 1.38882e-13, A12: -1.1676e-16 },
    }, // L17 front — ASPH
    { label: "31", R: -70.381, sd: 16.0 }, // L17 rear → image (BFD) [ZOOM VAR]
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom lens fields ── */
    stations: [
      { focalLengthMm: 72.13, nominalFNumber: 2.89, label: "72.13 mm" },
      { focalLengthMm: 100.0, nominalFNumber: 2.89 },
      { focalLengthMm: 194.06, nominalFNumber: 2.91, label: "194.06 mm" },
    ],
    /* ── Aperture configuration ── */
    apertureModel: "from-nominal-fno",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.7,
    description:
      "Infinity-focus model: Figure 5 shows G4 (L8/L9) focusing objectward and G6 (L15) imageward. G7 has no focus arrow. Finite-focus gaps are unpublished, so focus is disabled; 0.70 m is retained retail metadata, not a modeled conjugate. Zoom iris is inferred from source f-numbers; lateral IS is not simulated.",
  },

  /* (moved from var) ── Variable air spacings (zoom format) ──
   *  Zoom positions: 72.13 mm (wide), 100.00 mm (mid), 194.06 mm (tele).
   *  Patent does not provide close-focus variable gap data, so inf = close
   *  at each zoom position.  Each value is [d_inf, d_close] per position.
   */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.5, 1.5],
        [26.97, 26.97],
        [59.94, 59.94],
      ],
    }, // G1→G2 barrel extension (zoom only)
    "11": {
      label: "D11",
      values: [
        [10.41, 10.41],
        [9.24, 9.24],
        [2.9, 2.9],
      ],
    }, // G2→G3
    "14": {
      label: "D14",
      values: [
        [9.57, 9.57],
        [12.46, 12.46],
        [18.11, 18.11],
      ],
    }, // G3→G4
    "17": {
      label: "D17",
      values: [
        [9.69, 9.69],
        [6.8, 6.8],
        [1.15, 1.15],
      ],
    }, // G4→G5
    "25": {
      label: "D25",
      values: [
        [13.8, 13.8],
        [10.49, 10.49],
        [1.21, 1.21],
      ],
    }, // G5→G6 (LN)
    "27": {
      label: "D27",
      values: [
        [17.06, 17.06],
        [16.73, 16.73],
        [21.22, 21.22],
      ],
    }, // G6→G7 — non-monotonic: W→M decrease, M→T increase
    "31": {
      label: "BF",
      values: [
        [15.86, 15.86],
        [20.68, 20.68],
        [31.81, 31.81],
      ],
    }, // BFD
  },

  aperture: { fStops: [2.89, 2.91, 4, 5.6, 8, 11, 16, 22, 32] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+155)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−48) IS", fromSurface: "6", toSurface: "11" },
    { text: "G3 (+67)", fromSurface: "STO", toSurface: "14" },
    { text: "G4 Focus", fromSurface: "15", toSurface: "17" },
    { text: "G5 (+39)", fromSurface: "18", toSurface: "25" },
    { text: "G6 Focus", fromSurface: "26", toSurface: "27" },
    { text: "G7 (−224)", fromSurface: "28", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" }, // L2 + L3 (front achromatic)
    { text: "D2", fromSurface: "9", toSurface: "11" }, // L5 + L6 (IS doublet)
    { text: "D3", fromSurface: "15", toSurface: "17" }, // L8 + L9 (field flattener)
    { text: "D4", fromSurface: "18", toSurface: "20" }, // L10 + L11 (NPH2/FPL51)
    { text: "D5", fromSurface: "21", toSurface: "23" }, // L12 + L13 (FPL51/NPH2, inverted)
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.65, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
