import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon RF 28-70mm F2.8 IS STM                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2024/0329367 A1, Example 1 (§0083) — Canon.      ║
 * ║  Compact constant-aperture standard zoom for RF mount.             ║
 * ║  15 elements / 12 groups (7 movable units), 4 aspherical surfaces. ║
 * ║  Zoom: 28.80–67.90 mm (marketed 28–70 mm), f/2.88–2.92.          ║
 * ║  Internal zoom (total track 132–159 mm).                           ║
 * ║  Zoom variable gaps: D2, D9, D16, D19, D23, D25, D28.             ║
 * ║  Focus: rear inner focus via B6 (single element L13).              ║
 * ║  Patent provides infinity-focus spacings only; close-focus data    ║
 * ║  not available — all gaps encoded as zoom-only.                    ║
 * ║                                                                    ║
 * ║  NOTE ON R4: The patent's rendering of surface 4 radius is         ║
 * ║  ambiguous at low resolution (22 vs 32). Independent paraxial ray  ║
 * ║  trace confirms R4 = 22.455 mm — this produces exact EFL and       ║
 * ║  group focal length matches at all three zoom positions.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  Estimated via combined marginal + chief ray trace at all three    ║
 * ║  zoom positions, refined against the patent cross-section figure   ║
 * ║  (FIG. 1). Constrained by: edge thickness ≥ 0.5 mm (L1, L4, L10, ║
 * ║  L11, L12, L15 are binding), cross-gap sag overlap (S4→S5 gap     ║
 * ║  limits SD to ~15.5 mm at that junction), sd/|R| ≤ 0.90 slope     ║
 * ║  limit, and 67 mm production filter thread (~29.5 mm max SD).     ║
 * ║  Cover glass (nd=1.544, 2.00 mm) excluded; BFD includes its       ║
 * ║  physical thickness + 1.09 mm air gap to image plane.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-28-70-f28-is-stm",
  maker: "Canon",
  name: "CANON RF 28-70mm F2.8 IS STM",
  subtitle: "US 2024/0329367 A1 EXAMPLE 1 — CANON / HAGIWARA",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "f = 28.80–67.90 mm (2.36×)",
    "F/2.88–2.92",
    "2ω = 69.9–35.3°",
    "4 ASPHERICAL SURFACES (2 GMo ELEMENTS)",
    "2 UD ELEMENTS",
  ],

  focalLengthMarketing: [28, 70],
  focalLengthDesign: [28.8, 67.9],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 2024,
  elementCount: 15,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.7,
      fl: 135.5,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.028 (S-FPL51 catalog)",
      role: "Front collecting element; UD glass suppresses chromatic aberration at wide-angle where marginal ray height is greatest.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8919,
      vd: 37.1,
      fl: -33.2,
      glass: "892371 — S-LAH66 family (OHARA)",
      apd: false,
      role: "Primary variator element; strong negative power drives zoom action in B2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.6,
      fl: -34.6,
      glass: "603606 — S-BSL7 family (OHARA)",
      apd: false,
      role: "Front element of cemented doublet D1 in B2; provides achromatic correction for the variator.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: 25.7,
      glass: "904313 — S-LAH58 family (OHARA)",
      apd: false,
      role: "Rear element of D1; high-index lanthanum flint provides positive power for achromatic balance in B2.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.8515,
      vd: 40.8,
      fl: -73.0,
      glass: "851408 — S-LAH65V (OHARA)",
      apd: false,
      role: "Rear element of B2; concave-to-object meniscus controls field curvature near the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 41.5,
      glass: "001291 — S-NPH4 family (OHARA)",
      apd: false,
      role: "Ultra-high-index element immediately after stop; primary spherical aberration corrector at f/2.88.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 73.5,
      glass: "L-BAL42 (OHARA)",
      apd: false,
      role: "First GMo aspherical element; doubly-aspherized corrector for zonal spherical aberration post-stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      fl: -45.2,
      glass: "770297 — S-TIH18 family (OHARA)",
      apd: false,
      role: "Chromatic corrector and Petzval flattener for B3.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Concave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -33.7,
      glass: "855248 — S-TIH53W family (OHARA)",
      apd: false,
      role: "Front element of anomalous-dispersion doublet D2; ultra-dense flint for secondary spectrum correction.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.7,
      fl: 39.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.028 (S-FPL51 catalog)",
      role: "Rear element of D2; UD glass paired with L9 for secondary chromatic aberration correction across zoom range.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 78.3,
      glass: "L-BAL42 (OHARA)",
      apd: false,
      role: "Second GMo aspherical element; addresses field-dependent aberrations (coma, astigmatism, field curvature) away from stop.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 37.7,
      glass: "595677 — S-BSM14 family (OHARA)",
      apd: false,
      role: "Primary positive element of B5; low-dispersion barium crown provides strong convergence for image formation.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      fl: -57.2,
      glass: "613443 — S-BAH11 family (OHARA)",
      apd: false,
      role: "Sole focusing element (B6); lightweight meniscus for fast, quiet STM autofocus. Convex side faces object per §0065.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.8,
      fl: -32.0,
      glass: "744448 — S-LAL14 family (OHARA)",
      apd: false,
      role: "Front element of rear doublet D3; provides strong negative power for field curvature and distortion control.",
      cemented: "D3",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      fl: 44.3,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Rear element of D3; ultra-dense short flint provides achromatic correction and positive power to offset L14.",
      cemented: "D3",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── B1: Front collecting group (L1) ──
    { label: "1", R: 71.698, d: 7.4, nd: 1.497, elemId: 1, sd: 29.5 },
    { label: "2", R: -1074.771, d: 0.85, nd: 1.0, elemId: 0, sd: 29.0 }, // d2 variable (zoom)

    // ── B2: Variator (L2, L3+L4, L5) ──
    { label: "3", R: 95.769, d: 1.6, nd: 1.8919, elemId: 2, sd: 18.5 },
    { label: "4", R: 22.455, d: 7.05, nd: 1.0, elemId: 0, sd: 15.5 }, // R4 confirmed; cross-gap limited
    { label: "5", R: -369.959, d: 1.25, nd: 1.60311, elemId: 3, sd: 15.5 }, // D1 front
    { label: "6", R: 22.126, d: 7.0, nd: 1.90366, elemId: 4, sd: 16.0 }, // D1 junction
    { label: "7", R: 412.508, d: 4.86, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "8", R: -36.457, d: 1.0, nd: 1.8515, elemId: 5, sd: 13.5 },
    { label: "9", R: -89.252, d: 21.64, nd: 1.0, elemId: 0, sd: 13.0 }, // d9 variable (zoom)

    // ── B3: First intermediate positive (Stop, L6, L7, L8) ──
    { label: "STO", R: 1e15, d: 0.65, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "11", R: 43.928, d: 3.45, nd: 2.001, elemId: 6, sd: 12.0 },
    { label: "12", R: -750.0, d: 2.4, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "13A", R: 106.432, d: 3.7, nd: 1.58313, elemId: 7, sd: 13.0 },
    { label: "14A", R: -70.798, d: 2.33, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "15", R: -41.445, d: 1.2, nd: 1.77047, elemId: 8, sd: 13.0 },
    { label: "16", R: 220.269, d: 4.86, nd: 1.0, elemId: 0, sd: 13.0 }, // d16 variable (zoom)

    // ── B4: Weak negative compensator (L9+L10 cemented doublet D2) ──
    { label: "17", R: 1e15, d: 1.2, nd: 1.85478, elemId: 9, sd: 14.5 },
    { label: "18", R: 28.842, d: 6.1, nd: 1.497, elemId: 10, sd: 14.0 }, // D2 junction; edge-limited
    { label: "19", R: -56.203, d: 2.0, nd: 1.0, elemId: 0, sd: 14.0 }, // d19 variable (zoom)

    // ── B5: Second intermediate positive (L11, L12) ──
    { label: "20A", R: 55.622, d: 3.8, nd: 1.58313, elemId: 11, sd: 17.0 },
    { label: "21A", R: -248.88, d: 0.2, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "22", R: 69.909, d: 7.75, nd: 1.59522, elemId: 12, sd: 17.0 },
    { label: "23", R: -31.69, d: 3.22, nd: 1.0, elemId: 0, sd: 17.0 }, // d23 variable (zoom)

    // ── B6: Focusing element (L13) ──
    { label: "24", R: 71.379, d: 1.1, nd: 1.6134, elemId: 13, sd: 16.5 },
    { label: "25", R: 23.38, d: 12.68, nd: 1.0, elemId: 0, sd: 16.0 }, // d25 variable (zoom)

    // ── B7: Rear negative doublet (L14+L15 cemented doublet D3) ──
    { label: "26", R: -53.964, d: 1.3, nd: 1.744, elemId: 14, sd: 17.0 },
    { label: "27", R: 43.097, d: 4.8, nd: 1.92286, elemId: 15, sd: 18.0 }, // D3 junction
    { label: "28", R: -750.0, d: 16.09, nd: 1.0, elemId: 0, sd: 18.0 }, // BFD (d28+CG+d30)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "13A": {
      K: 0,
      A4: -5.91734e-6,
      A6: -1.25922e-8,
      A8: -6.96192e-11,
      A10: -1.24634e-13,
      A12: 3.32938e-16,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -2.81431e-6,
      A6: -1.15888e-8,
      A8: -1.2081e-10,
      A10: 3.67743e-13,
      A12: -6.62375e-16,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -2.16306e-6,
      A6: -3.51669e-8,
      A8: 3.80997e-12,
      A10: -8.02806e-13,
      A12: 7.68937e-16,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: 1.35282e-5,
      A6: -2.86368e-8,
      A8: 3.89958e-11,
      A10: -1.08816e-12,
      A12: 1.8361e-15,
      A14: 0,
    },
  },

  /* ── Zoom configuration ── */
  zoomPositions: [28.8, 49.0, 67.9],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom only — close-focus data not available) ── */
  var: {
    "2": [
      [0.85, 0.85],
      [15.7, 15.7],
      [26.56, 26.56],
    ],
    "9": [
      [21.64, 21.64],
      [7.73, 7.73],
      [2.9, 2.9],
    ],
    "16": [
      [4.86, 4.86],
      [2.83, 2.83],
      [2.01, 2.01],
    ],
    "19": [
      [2.0, 2.0],
      [4.04, 4.04],
      [4.86, 4.86],
    ],
    "23": [
      [3.22, 3.22],
      [3.12, 3.12],
      [2.0, 2.0],
    ],
    "25": [
      [12.68, 12.68],
      [12.78, 12.78],
      [13.9, 13.9],
    ],
    "28": [
      [16.09, 16.09],
      [27.02, 27.02],
      [35.57, 35.57],
    ],
  },
  varLabels: [
    ["2", "D2"],
    ["9", "D9"],
    ["16", "D16"],
    ["19", "D19"],
    ["23", "D23"],
    ["25", "D25"],
    ["28", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "B1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "B2 (−)", fromSurface: "3", toSurface: "9" },
    { text: "B3 (+)", fromSurface: "STO", toSurface: "16" },
    { text: "B4 (−)", fromSurface: "17", toSurface: "19" },
    { text: "B5 (+)", fromSurface: "20A", toSurface: "23" },
    { text: "B6 (−)", fromSurface: "24", toSurface: "25" },
    { text: "B7 (−)", fromSurface: "26", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.27,
  focusDescription:
    "Rear inner focus via B6 (L13). Patent §0042/§0065: B6 moves toward image side from ∞ to close. " +
    "Close-focus spacings not provided in Example 1; zoom-only gaps encoded.",

  /* ── Aperture configuration ── */
  nominalFno: [2.88, 2.88, 2.92],
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
