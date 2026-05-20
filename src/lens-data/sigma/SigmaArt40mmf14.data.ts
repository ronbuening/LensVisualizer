import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA 40mm F1.4 DG HSM | Art                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2020-012952 A, Example 1 (Sigma / Yamanaka).     ║
 * ║  Modified retrofocus (negative-leading) for full-frame SLR.       ║
 * ║  16 elements / 12 groups, 2 aspherical surfaces.                  ║
 * ║  Focus: floating inner focus — G2 and G3 move independently,      ║
 * ║         G1 fixed, stop moves with G3.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated via combined    ║
 * ║    marginal + chief ray trace (60% field fraction, 8% mechanical  ║
 * ║    clearance), constrained against sd/|R| < 0.90, positive edge   ║
 * ║    thickness, and cross-gap sag intrusion ≤ 90% of gap.  Front    ║
 * ║    element capped against 82 mm filter thread constraint.         ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-art-40-f14",
  maker: "Sigma",
  name: "SIGMA 40mm F1.4 DG HSM | Art",
  subtitle: "JP 2020-012952 A Example 1 — Sigma / Yamanaka",
  specs: ["16 ELEMENTS / 12 GROUPS", "f ≈ 41.2 mm", "F/1.4", "2ω ≈ 55.9°", "2 ASPHERICAL SURFACES"],

  focalLengthMarketing: 40,
  focalLengthDesign: 41.2,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  patentYear: 2020,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    // G1A — negative subgroup (fixed)
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: 184.7,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Front positive meniscus; counteracts retrofocus negative distortion (¶0042).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: -82.2,
      glass: "FCD100 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF ≈ +0.053; FLD fluorite-equivalent fluorophosphate",
      dPgF: 0.053,
      role: "FLD negative meniscus in G1A; provides retrofocus divergence with secondary-spectrum correction (¶0043–0044).",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: -132.1,
      glass: "FCD100 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF ≈ +0.053; FLD fluorite-equivalent fluorophosphate",
      dPgF: 0.053,
      role: "Second FLD negative meniscus; distributes G1A negative power across two elements (¶0021).",
    },
    // G1B — positive subgroup (fixed)
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.84,
      fl: -48.3,
      glass: "E-FD2 (HOYA)",
      apd: false,
      cemented: "X",
      role: "LX1 — negative element of Component X (new-achromatism doublet); field-curvature correction (¶0026).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 50.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "X",
      role: "LX2 — positive partner of Component X; lanthanum dense crown for low-curvature power.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      fl: 60.6,
      glass: "M-FCD500 (HOYA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.028; SLD PGM-compatible fluorophosphate crown",
      dPgF: 0.028,
      cemented: "Y",
      role: "LY1 — positive element of Component Y (old-achromatism doublet); high-order SA correction (¶0026).",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -47.9,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      cemented: "Y",
      role: "LY2 — negative partner of Component Y; achromatizing flint.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      fl: 88.3,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Closing positive element of G1B; collects beam into the variable G1–G2 gap.",
    },
    // G2 — focus group
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 83.7,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "High-index singlet leading the focus group; minimises surface curvatures in the moving group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      fl: 41.8,
      glass: "PCD51 (HOYA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.015; SLD phosphate crown",
      dPgF: 0.015,
      cemented: "D2",
      role: "Crown element of G2 doublet; SLD glass for axial-color trimming near the stop.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.89,
      fl: -36.0,
      glass: "E-FL5 (HOYA)",
      apd: false,
      cemented: "D2",
      role: "Flint element of G2 doublet; rear surface concave to sensor per Claim 5 / ¶0012.",
    },
    // G3 — rear focus group (stop attached)
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 53.3,
      glass: "FCD100 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF ≈ +0.053; FLD fluorite-equivalent — third and final FLD element",
      dPgF: 0.053,
      cemented: "L3a",
      role: "L31 — positive crown of Component L3a; axial-color and SA correction immediately after stop (¶0049).",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.84,
      fl: -33.5,
      glass: "E-FD2 (HOYA)",
      apd: false,
      cemented: "L3a",
      role: "L32 — flint partner of Component L3a; Δn = 0.211 at cemented interface provides SA correction.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.74,
      fl: -55.5,
      glass: "E-F1 (HOYA)",
      apd: false,
      role: "L33 — concentric negative meniscus for sagittal coma flare correction; R33/Ds33 = −1.52 (¶0054).",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      fl: 42.2,
      glass: "PCD51 (HOYA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.015; SLD phosphate crown",
      dPgF: 0.015,
      role: "L34 — convergent relay element; SLD glass minimises rear-group chromatic residual.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: 74.1,
      glass: "S-NBH56 (OHARA)",
      apd: false,
      role: "Dual-asphere final element; progressively increasing negative power toward periphery (¶0056).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1A — negative subgroup (fixed)
    { label: "1", R: 111.7037, d: 5.5478, nd: 1.7725, elemId: 1, sd: 37.0 },
    { label: "2", R: 514.0093, d: 0.15, nd: 1.0, elemId: 0, sd: 36.0 },
    { label: "3", R: 191.8963, d: 1.5, nd: 1.437, elemId: 2, sd: 28.0 },
    { label: "4", R: 30.2492, d: 12.0599, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "5", R: 423.9805, d: 1.5, nd: 1.437, elemId: 3, sd: 23.0 },
    { label: "6", R: 50.8216, d: 13.2984, nd: 1.0, elemId: 0, sd: 21.0 },
    // G1B — positive subgroup (fixed)
    // Component X (L4 + L5 cemented)
    { label: "7", R: -38.1791, d: 1.5, nd: 1.64769, elemId: 4, sd: 21.0 },
    { label: "8", R: 172.544, d: 9.3857, nd: 1.83481, elemId: 5, sd: 22.0 },
    { label: "9", R: -56.304, d: 0.15, nd: 1.0, elemId: 0, sd: 22.0 },
    // Component Y (L6 + L7 cemented)
    { label: "10", R: -1641.6822, d: 12.4672, nd: 1.55032, elemId: 6, sd: 22.5 },
    { label: "11", R: -32.7021, d: 1.5, nd: 1.60342, elemId: 7, sd: 22.5 },
    { label: "12", R: 246.8799, d: 0.15, nd: 1.0, elemId: 0, sd: 22.5 },
    // L8 singlet
    { label: "13", R: 83.2754, d: 5.882, nd: 1.7725, elemId: 8, sd: 23.0 },
    { label: "14", R: -377.0503, d: 8.7665, nd: 1.0, elemId: 0, sd: 23.0 },
    // G2 — focus group
    { label: "15", R: 90.4416, d: 5.3037, nd: 1.92286, elemId: 9, sd: 21.0 },
    { label: "16", R: -527.4885, d: 0.15, nd: 1.0, elemId: 0, sd: 21.0 },
    // G2 doublet (L10 + L11 cemented)
    { label: "17", R: 55.6364, d: 11.866, nd: 1.59282, elemId: 10, sd: 20.0 },
    { label: "18", R: -44.6058, d: 2.482, nd: 1.58144, elemId: 11, sd: 18.5 },
    { label: "19", R: 39.3845, d: 7.3907, nd: 1.0, elemId: 0, sd: 17.5 },
    // Aperture stop — attached to G3, moves during focus
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 16.6 },
    // G3 — rear focus group
    // Component L3a (L12 + L13 cemented)
    { label: "21", R: 84.0231, d: 6.8887, nd: 1.437, elemId: 12, sd: 15.5 },
    { label: "22", R: -32.202, d: 1.5, nd: 1.64769, elemId: 13, sd: 15.5 },
    { label: "23", R: 66.2242, d: 7.8613, nd: 1.0, elemId: 0, sd: 15.5 },
    // L14 — concentric negative meniscus
    { label: "24", R: -26.9856, d: 1.5, nd: 1.62588, elemId: 14, sd: 14.5 },
    { label: "25", R: -121.029, d: 0.15, nd: 1.0, elemId: 0, sd: 14.5 },
    // L15 singlet
    { label: "26", R: 64.6922, d: 6.7685, nd: 1.59282, elemId: 15, sd: 15.0 },
    { label: "27", R: -40.8255, d: 0.15, nd: 1.0, elemId: 0, sd: 15.5 },
    // L16 — dual-asphere final element
    { label: "28A", R: -430.037, d: 4.6315, nd: 1.85135, elemId: 16, sd: 15.5 },
    { label: "29A", R: -54.9865, d: 39.0002, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "28A": {
      K: 0,
      A4: -2.73662e-6,
      A6: 3.07519e-9,
      A8: 3.90515e-11,
      A10: -1.94154e-14,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: 3.26804e-6,
      A6: 3.98767e-9,
      A8: 3.58258e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating inner focus) ──
   *  G1 fixed; G2 and G3 move toward object independently.
   *  Stop attached to G3.
   *  Total track constant at 171.00 mm.
   */
  var: {
    "14": [8.7665, 2.603],
    "19": [7.3907, 6.3421],
    "29A": [39.0002, 46.2123],
  },
  varLabels: [
    ["14", "D14"],
    ["19", "D19"],
    ["29A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FIXED)", fromSurface: "1", toSurface: "14" },
    { text: "G2 (FOCUS)", fromSurface: "15", toSurface: "19" },
    { text: "G3 (FOCUS)", fromSurface: "21", toSurface: "29A" },
  ],

  doublets: [
    { text: "X", fromSurface: "7", toSurface: "9" },
    { text: "Y", fromSurface: "10", toSurface: "12" },
    { text: "D₂", fromSurface: "17", toSurface: "19" },
    { text: "L3a", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4,
  focusDescription:
    "Floating inner focus. G2 and G3 move toward the object with differential travel (G3 moves ~1 mm farther than G2). G1 fixed; stop attached to G3. HSM ring-type ultrasonic drive.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
