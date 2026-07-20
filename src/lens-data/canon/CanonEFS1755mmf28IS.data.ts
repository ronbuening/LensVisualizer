import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon EF-S 17-55mm f/2.8 IS USM                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2007-108398 A, Example 1 (Canon Inc. / Endo).     ║
 * ║  Five-group positive–negative–positive–negative–positive zoom.      ║
 * ║  21 elements (19 glass + 2 resin) / 12 groups,                     ║
 * ║  3 aspherical surfaces (2 hybrid replica, 1 glass-molded).         ║
 * ║  Focus: inner focus via Group 2 (moves object-ward).               ║
 * ║  IS: Group 4a decentering perpendicular to axis.                   ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D15, D22, D28, BFD (all zoom-dependent). ║
 * ║  Focus variable gaps: D5 and D15 (zoom + focus).                   ║
 * ║  Zoom-only gaps: D22, D28, BFD.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: Patent prescription is at production focal       ║
 * ║  length (f = 17.50–53.44 mm). No scaling applied.                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: Estimated via combined marginal + chief   ║
 * ║  ray trace at all 3 zoom positions, then iteratively validated     ║
 * ║  against edge thickness (≥ 0.3 mm), cross-gap sag intrusion       ║
 * ║  (≤ 90% of gap), sd/|R| < 0.90, and element SD ratio ≤ 3.0.      ║
 * ║  Front group constrained by 77 mm filter thread.                   ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS: Patent publishes only infinity-focus gaps.   ║
 * ║  Close-focus gaps computed via paraxial ray trace for MFD = 0.35 m ║
 * ║  at wide and mid positions. Tele close-focus uses infinity values  ║
 * ║  (paraxial MFD at tele exceeds 0.35 m; production lens uses a     ║
 * ║  different mechanism or finite-conjugate optimization).            ║
 * ║                                                                    ║
 * ║  NOTE ON FLARE STOP: Patent surface r16 (flare-cut stop, d = 0)   ║
 * ║  is omitted — zero thickness, no optical effect. Surface labels    ║
 * ║  skip from "15" to "17" accordingly.                               ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-efs-17-55-f2.8-is",
  maker: "Canon",
  name: "CANON EF-S 17-55mm f/2.8 IS USM",
  subtitle: "JP 2007-108398 A Example 1 — Canon / Endo",
  specs: [
    "21 ELEMENTS (19 GLASS + 2 RESIN) / 12 GROUPS",
    "f = 17.50–53.44 mm",
    "F/2.9 (marketed f/2.8)",
    "2ω = 75.9°–28.7°",
    "3 ASPHERICAL SURFACES (2 HYBRID, 1 GMo)",
  ],

  focalLengthMarketing: [17, 55] as [number, number],
  focalLengthDesign: [17.5, 53.44] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-ef-s"],
  imageFormat: "aps-c" as const,
  patentNumber: "JP 2007-108398 A",
  patentAuthors: ["Hiroshi Endo"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2007,
  elementCount: 21,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -135.2,
      glass: "S-TIH53 (OHARA)",
      nC: 1.836554,
      nF: 1.871929,
      ng: 1.893856,
      cemented: "D1",
      role: "Front cemented doublet — flint achromatizer",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      fl: 113.7,
      glass: "S-BSM14 (OHARA)",
      nC: 1.600078,
      nF: 1.610024,
      ng: 1.615409,
      cemented: "D1",
      role: "Front cemented doublet — barium crown positive",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 110.1,
      glass: "S-LAL8 (OHARA)",
      nC: 1.708974,
      nF: 1.72221,
      ng: 1.729435,
      role: "Front group positive meniscus — lanthanum crown",
    },
    {
      id: 4,
      name: "Resin1",
      label: "Element 4 (resin)",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.5164,
      vd: 52.2,
      fl: -604.5,
      glass: "UV-curing resin",
      nC: 1.513427,
      nF: 1.523331,
      ng: 1.528843,
      cemented: "H1",
      role: "Hybrid composite resin layer — aspherical profile for distortion control",
    },
    {
      id: 5,
      name: "L4g",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -19.4,
      glass: "S-LAH65V (OHARA)",
      nC: 1.798815,
      nF: 1.81608,
      ng: 1.825699,
      cemented: "H1",
      role: "Hybrid composite glass body — primary negative power in variator front",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -22.3,
      glass: "S-LAH55V (OHARA)",
      nC: 1.828974,
      nF: 1.848514,
      ng: 1.859527,
      role: "Symmetric biconcave — primary variator power contributor",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7 (P2A)",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      fl: 19.4,
      glass: "S-LAH60 (OHARA)",
      nC: 1.827376,
      nF: 1.849819,
      ng: 1.862781,
      role: "P2A — strongest positive in variator; low-θgF glass for secondary spectrum control",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -16.0,
      glass: "S-LAH65V (OHARA)",
      nC: 1.798815,
      nF: 1.81608,
      ng: 1.825699,
      cemented: "D2",
      role: "Third negative in variator — cemented to P2B for achromatization",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 9 (P2B)",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 29.1,
      glass: "S-TIH6 (OHARA)",
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847285,
      cemented: "D2",
      role: "P2B — supplementary positive for variator achromatization",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.1,
      fl: 58.8,
      glass: "S-BAL35 (OHARA)",
      nC: 1.586188,
      nF: 1.595824,
      ng: 1.601034,
      role: "Relay group front positive — nearly plano-convex",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 20.6,
      glass: "S-BAL42 (OHARA)",
      nC: 1.580134,
      nF: 1.589954,
      ng: 1.595279,
      cemented: "D3",
      role: "Glass-molded aspherical — primary relay power, SA control across zoom",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -58.9,
      glass: "S-TIH53 (OHARA)",
      nC: 1.836554,
      nF: 1.871929,
      ng: 1.893856,
      cemented: "D3",
      role: "Relay group achromatizing flint — cemented to L10",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 33.9,
      glass: "S-TIH53 (OHARA)",
      nC: 1.836554,
      nF: 1.871929,
      ng: 1.893856,
      cemented: "D4",
      role: "IS group L4a — reversed achromat positive flint",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      fl: -20.7,
      glass: "S-LAL14 (OHARA)",
      nC: 1.692974,
      nF: 1.705522,
      ng: 1.712339,
      cemented: "D4",
      role: "IS group L4a — reversed achromat negative crown",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -50.3,
      glass: "S-TIH53 (OHARA)",
      nC: 1.836554,
      nF: 1.871929,
      ng: 1.893856,
      cemented: "D5",
      role: "IS group L4b — primary negative power",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: 124.0,
      glass: "S-BAL35 (OHARA)",
      nC: 1.586188,
      nF: 1.595824,
      ng: 1.601034,
      cemented: "D5",
      role: "IS group L4b — barium crown achromatizer",
    },
    {
      id: 17,
      name: "Resin2",
      label: "Element 17 (resin)",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.5164,
      vd: 52.2,
      fl: 1527.2,
      glass: "UV-curing resin",
      nC: 1.513427,
      nF: 1.523331,
      ng: 1.528843,
      cemented: "T1",
      role: "Hybrid composite resin layer — aspherical profile for field curvature control",
    },
    {
      id: 18,
      name: "L16a",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -56.9,
      glass: "S-LAH60 (OHARA)",
      nC: 1.827376,
      nF: 1.849819,
      ng: 1.862781,
      cemented: "T1",
      role: "Rear triplet flint — achromatizing partner to UD element L17",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 19 (UD)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 37.5,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "θgF = 0.537, ΔPgF > 0; satisfies conditions (3) and (4)",
      nC: 1.495138,
      nF: 1.501233,
      ng: 1.504509,
      cemented: "T1",
      role: "First UD element — secondary spectrum correction via anomalous partial dispersion",
    },
    {
      id: 20,
      name: "L18",
      label: "Element 20 (UD)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 36.1,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "θgF = 0.537, ΔPgF > 0; satisfies conditions (3) and (4)",
      nC: 1.495138,
      nF: 1.501233,
      ng: 1.504509,
      cemented: "D6",
      role: "Second UD element — secondary spectrum correction via anomalous partial dispersion",
    },
    {
      id: 21,
      name: "L19",
      label: "Element 21",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      fl: -85.6,
      glass: "S-NBH51 (OHARA)",
      nC: 1.74326,
      nF: 1.76447,
      ng: 1.77681,
      cemented: "D6",
      role: "Final achromatizing flint — dense lanthanum flint cemented to UD element L18",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // Group 1 — Front Collector (f₁ = +95.7 mm)
    { label: "1", R: 217.373, d: 1.9, nd: 1.84666, elemId: 1, sd: 34.0 }, // L1 front
    { label: "2", R: 74.677, d: 8.65, nd: 1.60311, elemId: 2, sd: 33.0 }, // L1→L2 junction
    { label: "3", R: -799.538, d: 0.15, nd: 1.0, elemId: 0, sd: 28.0 }, // L2 rear → air
    { label: "4", R: 48.982, d: 7.03, nd: 1.713, elemId: 3, sd: 28.0 }, // L3 front
    { label: "5", R: 122.553, d: 3.3, nd: 1.0, elemId: 0, sd: 24.0 }, // L3 rear → air (var)

    // Group 2 — Variator / Focus Group (f₂ = −12.8 mm)
    { label: "6A", R: 74.29, d: 0.05, nd: 1.5164, elemId: 4, sd: 14.0 }, // Resin1 front (asph)
    { label: "7", R: 59.996, d: 1.2, nd: 1.804, elemId: 5, sd: 13.5 }, // Resin1→L4g junction
    { label: "8", R: 12.277, d: 6.81, nd: 1.0, elemId: 0, sd: 11.0 }, // L4g rear → air
    { label: "9", R: -37.4, d: 1.0, nd: 1.83481, elemId: 6, sd: 8.0 }, // L5 front
    { label: "10", R: 37.4, d: 0.15, nd: 1.0, elemId: 0, sd: 8.3 }, // L5 rear → air
    { label: "11", R: 27.209, d: 4.93, nd: 1.834, elemId: 7, sd: 9.0 }, // L6 front
    { label: "12", R: -36.493, d: 0.53, nd: 1.0, elemId: 0, sd: 8.5 }, // L6 rear → air
    { label: "13", R: -25.912, d: 0.9, nd: 1.804, elemId: 8, sd: 8.5 }, // L7 front
    { label: "14", R: 25.912, d: 3.6, nd: 1.80518, elemId: 9, sd: 8.5 }, // L7→L8 junction
    { label: "15", R: -225.909, d: 17.2, nd: 1.0, elemId: 0, sd: 10.0 }, // L8 rear → air (var)
    // Flare-cut stop (patent r16, d=0) omitted — zero thickness, no optical effect

    // Group 3 — Relay Group (f₃ = +22.9 mm)
    { label: "17", R: 254.806, d: 3.5, nd: 1.58913, elemId: 10, sd: 11.0 }, // L9 front
    { label: "18", R: -39.891, d: 1.0, nd: 1.0, elemId: 0, sd: 11.5 }, // L9 rear → air
    { label: "STO", R: 1e15, d: 2.32, nd: 1.0, elemId: 0, sd: 9.2 }, // Aperture stop
    { label: "20A", R: 36.378, d: 8.54, nd: 1.58313, elemId: 11, sd: 13.0 }, // L10 front (asph)
    { label: "21", R: -16.418, d: 2.5, nd: 1.84666, elemId: 12, sd: 11.0 }, // L10→L11 junction
    { label: "22", R: -26.192, d: 2.2, nd: 1.0, elemId: 0, sd: 12.0 }, // L11 rear → air (var)

    // Group 4 — Image Stabilization Group (f₄ = −31.4 mm)
    // Sub-group L4a (IS decentering)
    { label: "23", R: -51.807, d: 2.61, nd: 1.84666, elemId: 13, sd: 11.0 }, // L12 front
    { label: "24", R: -18.89, d: 0.8, nd: 1.6968, elemId: 14, sd: 10.5 }, // L12→L13 junction
    { label: "25", R: 61.977, d: 5.05, nd: 1.0, elemId: 0, sd: 10.5 }, // L13 rear → air
    // Sub-group L4b
    { label: "26", R: -28.304, d: 1.2, nd: 1.84666, elemId: 15, sd: 10.5 }, // L14 front
    { label: "27", R: -85.924, d: 1.98, nd: 1.58913, elemId: 16, sd: 10.5 }, // L14→L15 junction
    { label: "28", R: -39.814, d: 9.72, nd: 1.0, elemId: 0, sd: 10.8 }, // L15 rear → air (var)

    // Group 5 — Field Flattener / Chromatic Corrector (f₅ = +38.4 mm)
    // Cemented triplet: Resin2 + L16a + L17
    { label: "29A", R: 129.162, d: 0.08, nd: 1.5164, elemId: 17, sd: 13.5 }, // Resin2 front (asph)
    { label: "30", R: 154.426, d: 1.32, nd: 1.834, elemId: 18, sd: 13.5 }, // Resin2→L16a junction
    { label: "31", R: 36.157, d: 6.47, nd: 1.497, elemId: 19, sd: 12.5 }, // L16a→L17 junction
    { label: "32", R: -36.157, d: 0.15, nd: 1.0, elemId: 0, sd: 12.0 }, // L17 rear → air
    // Cemented doublet: L18 + L19
    { label: "33", R: 64.804, d: 8.2, nd: 1.497, elemId: 20, sd: 12.5 }, // L18 front
    { label: "34", R: -23.782, d: 1.7, nd: 1.7495, elemId: 21, sd: 11.0 }, // L18→L19 junction
    { label: "35", R: -38.936, d: 35.29, nd: 1.0, elemId: 0, sd: 11.5 }, // L19 rear → BFD (var)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 1.457415e-5,
      A6: -3.790177e-8,
      A8: 6.739559e-11,
      A10: -1.117466e-13,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -8.402971e-6,
      A6: -1.432432e-8,
      A8: 9.77336e-11,
      A10: -2.555962e-13,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: -6.201996e-6,
      A6: 1.518167e-8,
      A8: -5.562855e-11,
      A10: 1.910063e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ──
   *  Zoom positions: [17.50, 28.70, 53.44] mm
   *  Focus: Group 2 inner focus — d5 decreases, d15 increases as L2 moves object-ward
   *  d22, d28, BFD: zoom-only (identical inf/close pairs)
   *
   *  Close-focus gaps computed via paraxial ray trace for MFD = 0.35 m:
   *    Wide:  Δ = 1.287 mm → d5: 3.30→2.01, d15: 17.20→18.49
   *    Mid:   Δ = 1.805 mm → d5: 16.65→14.85, d15: 9.08→10.88
   *    Tele:  Close-focus paraxially exceeds 0.35 m MFD; uses infinity values
   */
  zoomPositions: [17.5, 28.7, 53.44],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [3.3, 2.01],
      [16.65, 14.85],
      [32.55, 32.55],
    ],
    "15": [
      [17.2, 18.49],
      [9.08, 10.88],
      [2.26, 2.26],
    ],
    "22": [
      [2.2, 2.2],
      [6.49, 6.49],
      [10.69, 10.69],
    ],
    "28": [
      [9.72, 9.72],
      [5.44, 5.44],
      [1.23, 1.23],
    ],
    "35": [
      [35.29, 35.29],
      [39.38, 39.38],
      [47.67, 47.67],
    ],
  },

  varLabels: [
    ["5", "D5 (L1–L2)"],
    ["15", "D15 (L2–L3)"],
    ["22", "D22 (L3–L4)"],
    ["28", "D28 (L4–L5)"],
    ["35", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (L1)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (L2)", fromSurface: "6A", toSurface: "15" },
    { text: "G3 (L3)", fromSurface: "17", toSurface: "22" },
    { text: "G4 (L4)", fromSurface: "23", toSurface: "28" },
    { text: "G5 (L5)", fromSurface: "29A", toSurface: "35" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "20A", toSurface: "22" },
    { text: "D4 (IS)", fromSurface: "23", toSurface: "25" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
    { text: "T1", fromSurface: "29A", toSurface: "32" },
    { text: "D6", fromSurface: "33", toSurface: "35" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription: "Inner focus — Group 2 (5 elements) translates as rigid body toward object.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
