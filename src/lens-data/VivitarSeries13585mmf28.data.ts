import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 35–85 mm f/2.8 VMC                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,975,089 Example 1 (Ellis I. Betensky /         ║
 * ║  Ponder & Best, Inc.).  Corrected per Certificate of Correction   ║
 * ║  dated January 25, 1977.                                          ║
 * ║  12 elements / 4 functional groups (9 sub-groups), all spherical. ║
 * ║  Focus: unit focus (entire optical assembly translates).           ║
 * ║  Zoom: 3 moving groups (I, II, III); Group IV stationary.         ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6 (Group I–II), D9 (Group II–III),          ║
 * ║    D12 (Group III–STO, split from patent gap (3)).                 ║
 * ║  Focus variable gap: D21 (BFD — whole lens translates, so only    ║
 * ║    the back focal distance changes with focus).                    ║
 * ║  Reversing groups: Group I exhibits non-monotonic motion           ║
 * ║    (forward then back) — only 2 zoom positions available from     ║
 * ║    the patent, so piecewise-linear interpolation is limited.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated from marginal  ║
 * ║    ray trace at both zoom positions (f/2.8 design aperture),      ║
 * ║    taking the maximum height across positions with ~5–10%         ║
 * ║    mechanical clearance.  Validated for edge thickness > 0,       ║
 * ║    sd/|R| < 0.90, cross-gap sag overlap, and element SD ratios.   ║
 * ║                                                                    ║
 * ║  NOTE ON EFL DISCREPANCY:                                          ║
 * ║    Computed EFLs (~38.5 / ~89.1 mm) differ from the patent's     ║
 * ║    stated 36–83 mm by ~7%.  Group powers, zoom ratio (2.32×),    ║
 * ║    and all conditional expressions match precisely.  The offset   ║
 * ║    likely reflects the patent gap values not corresponding to     ║
 * ║    the extreme zoom positions.  Prescription used as-is.          ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Stop position inferred from Fig. 1 — iris between Groups III  ║
 * ║    and IV, fixed to Group IV housing.  Patent gap (3) split into  ║
 * ║    R12-to-STO (variable, 8.83/0.69 mm) + STO-to-R13 (fixed,     ║
 * ║    0.50 mm).                                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "vivitar-s1-35-85-f28",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 35–85mm f/2.8 VMC",
  subtitle: "US 3,975,089 Example 1 — Betensky / Ponder & Best",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "f ≈ 38.5–89.1 mm (patent: 36–83 mm)",
    "F/2.8",
    "2ω ≈ 58.7°–27.3°",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: [35, 85] as [number, number],
  focalLengthDesign: [36, 83] as [number, number],
  apertureMarketing: 2.8,
  patentYear: 1976,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: -89.6,
      glass: "SF6 (Schott)",
      apd: false,
      role: "High-index negative meniscus (concave toward image). Negative Petzval contribution to flatten field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.531,
      vd: 62.1,
      fl: 68.7,
      glass: "BSM-type crown (531/621)",
      apd: false,
      role: "Primary positive power in Group I. Exceptionally thick (13.8 mm) for principal-plane control.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.694,
      vd: 53.3,
      fl: 87.7,
      glass: "S-LAL13 (Ohara)",
      apd: false,
      role: "Lanthanum crown meniscus completing Group I positive triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.847,
      vd: 23.8,
      fl: 50.2,
      glass: "SF57 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Ultra-dense flint; individually positive element of Group II variator doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      fl: -16.5,
      glass: "LaSF5 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Strongly negative element dominating Group II. R9 (+17.98 mm) is the steepest curvature in the system.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.498,
      vd: 65.1,
      fl: -19.2,
      glass: "BK3 (Schott)",
      apd: false,
      cemented: "D2",
      role: "Low-index crown element of Group III compensator doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.785,
      vd: 25.7,
      fl: 24.5,
      glass: "SF11 (Schott)",
      apd: false,
      cemented: "D2",
      role: "Dense flint in reversed crown-flint arrangement; opposes Group II chromatism.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62,
      vd: 60.3,
      fl: 38.4,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Strongest positive singlet. First element of stationary relay Group IV.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.487,
      vd: 70.4,
      fl: 31.4,
      glass: "FK5 (Schott)",
      apd: false,
      cemented: "D3",
      role: "Fluorite crown with near-plano front (R15 ≈ −502 mm). Positive power with minimal chromatic contribution.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: -27.8,
      glass: "SF6 (Schott)",
      apd: false,
      cemented: "D3",
      role: "Chromatic corrector for L9. FK5+SF6 pairing yields Δνd = 44.9 — the most aggressive achromat in the system.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.639,
      vd: 45.1,
      fl: 33.9,
      glass: "BaSF52 (Schott)",
      apd: false,
      role: "Strongly asymmetric biconvex in the converging beam. Moderate-dispersion barium flint for higher-order chromatic tuning.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: -54.9,
      glass: "SF6 (Schott)",
      apd: false,
      role: "Field flattener. High-index SF6 maximizes negative Petzval contribution per unit power. Convex side faces image.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group I (L1, L2, L3) — moves during zoom ──
    { label: "1", R: 135.72, d: 2.6, nd: 1.805, elemId: 1, sd: 18.0 }, // L1 front
    { label: "2", R: 46.71, d: 2.84, nd: 1.0, elemId: 0, sd: 17.5 }, // L1 rear → air
    { label: "3", R: 46.5, d: 13.8, nd: 1.531, elemId: 2, sd: 18.0 }, // L2 front
    { label: "4", R: -152.15, d: 0.1, nd: 1.0, elemId: 0, sd: 18.0 }, // L2 rear → air
    { label: "5", R: 41.84, d: 6.6, nd: 1.694, elemId: 3, sd: 18.0 }, // L3 front
    { label: "6", R: 125.2, d: 0.47, nd: 1.0, elemId: 0, sd: 16.5 }, // L3 rear → air — var gap (1)

    // ── Group II (L4–L5 cemented) — moves during zoom ──
    { label: "7", R: 140.19, d: 3.1, nd: 1.847, elemId: 4, sd: 10.5 }, // L4 front
    { label: "8", R: -60.45, d: 1.1, nd: 1.834, elemId: 5, sd: 10.5 }, // L4→L5 junction
    { label: "9", R: 17.98, d: 15.94, nd: 1.0, elemId: 0, sd: 8.5 }, // L5 rear → air — var gap (2)

    // ── Group III (L6–L7 cemented) — moves during zoom ──
    { label: "10", R: -16.56, d: 1.0, nd: 1.498, elemId: 6, sd: 10.5 }, // L6 front
    { label: "11", R: 22.97, d: 3.1, nd: 1.785, elemId: 7, sd: 9.0 }, // L6→L7 junction
    { label: "12", R: -112.11, d: 8.83, nd: 1.0, elemId: 0, sd: 11.0 }, // L7 rear → air — var gap (3a: R12→STO)

    // ── Aperture stop (inferred from Fig. 1, fixed to Group IV) ──
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 12.0 },

    // ── Group IV (L8, L9–L10, L11, L12) — stationary during zoom ──
    { label: "13", R: 53.32, d: 2.9, nd: 1.62, elemId: 8, sd: 11.0 }, // L8 front
    { label: "14", R: -42.06, d: 2.0, nd: 1.0, elemId: 0, sd: 11.0 }, // L8 rear → air
    { label: "15", R: -502.33, d: 5.0, nd: 1.487, elemId: 9, sd: 10.5 }, // L9 front
    { label: "16", R: -14.89, d: 0.9, nd: 1.805, elemId: 10, sd: 10.5 }, // L9→L10 junction
    { label: "17", R: -45.59, d: 11.53, nd: 1.0, elemId: 0, sd: 10.5 }, // L10 rear → air
    { label: "18", R: 125.96, d: 3.5, nd: 1.639, elemId: 11, sd: 11.0 }, // L11 front
    { label: "19", R: -25.9, d: 5.98, nd: 1.0, elemId: 0, sd: 11.0 }, // L11 rear → air
    { label: "20", R: -19.4, d: 1.296, nd: 1.805, elemId: 12, sd: 9.0 }, // L12 front
    { label: "21", R: -35.59, d: 45.82, nd: 1.0, elemId: 0, sd: 9.0 }, // L12 rear → image — var BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Zoom positions ── */
  zoomPositions: [36, 83],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  Unit focus: inter-group gaps change with zoom only (identical inf/close pairs).
   *  BFD (surface 21) changes with both zoom and focus.
   *
   *  Patent gap (3) between R12 and R13 has been split:
   *    Surface "12": R12-to-STO (variable with zoom)
   *    Surface "STO": STO-to-R13 (fixed at 0.50 mm)
   *
   *  BFD at close focus computed for MFD = 0.30 m (production spec) via
   *  finite-conjugate paraxial ray trace with unit-focus extension.
   */
  var: {
    "6": [
      [0.47, 0.47],
      [19.48, 19.48],
    ],
    "9": [
      [15.94, 15.94],
      [5.01, 5.01],
    ],
    "12": [
      [8.83, 8.83],
      [0.69, 0.69],
    ],
    "21": [
      [45.82, 50.41],
      [46.37, 75.21],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["9", "D9"],
    ["12", "D12"],
    ["21", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "6" },
    { text: "II (−)", fromSurface: "7", toSurface: "9" },
    { text: "III (−)", fromSurface: "10", toSurface: "12" },
    { text: "IV (+)", fromSurface: "13", toSurface: "21" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Unit focus — entire optical assembly translates. Push-pull zoom/focus ring.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
