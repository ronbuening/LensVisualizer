import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  NOTE ON PARTIAL DISPERSION:                                       ║
 * ║    `dPgF` is PgF minus the engine's normal line                    ║
 * ║    (0.6438 − 0.001682·νd), not the patent's ΔPgF = PgF − 0.64833   ║
 * ║    + 0.00180·νd (¶0017), which the analysis quotes.  The patent    ║
 * ║    prints PgF to two decimals only, so L2/L3/L12 use the PgF       ║
 * ║    implied by condition (9) (5.36 / νd 95.10 → PgF 0.5335) and     ║
 * ║    L6, L10 and L15 are catalog-derived (FCD705 0.5400, FCD515      ║
 * ║    0.5441); each agrees with the printed two-decimal PgF.          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sigma-art-40-f14",
  maker: "Sigma",
  name: "SIGMA 40mm f/1.4 DG HSM | Art",
  subtitle: "JP 2020-012952 A Example 1 — Sigma / Yamanaka",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sigma-sa", "sony-fe", "l-mount"],
    imageFormat: "135-full-frame",
    specs: ["16 ELEMENTS / 12 GROUPS", "f ≈ 41.2 mm", "F/1.4", "2ω ≈ 55.9°", "2 ASPHERICAL SURFACES"],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: 40, design: 41.2 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "JP 2020-012952 A",
    patentYear: 2020,
    authors: ["Takeshi Yamanaka"],
    assignees: ["Sigma Corporation"],
  },

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
      focalLengthMm: 184.7,
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
      focalLengthMm: -82.2,
      glass: "FCD100 (HOYA)",
      apd: "patent",
      apdNote:
        "Patent condition (9) VnA × ΔPgFnA = 5.36 at νd 95.10: ΔPgF = +0.0564 by the patent's line (PgF − 0.64833 + 0.00180·νd), PgF = 0.5335 (table prints 0.53), runtime dPgF +0.04967; FLD fluorite-equivalent fluorophosphate",
      role: "FLD negative meniscus in G1A; provides retrofocus divergence with secondary-spectrum correction (¶0043–0044).",
      dPgF: 0.04967,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -132.1,
      glass: "FCD100 (HOYA)",
      apd: "patent",
      apdNote:
        "Patent condition (9) VnA × ΔPgFnA = 5.36 at νd 95.10: ΔPgF = +0.0564 by the patent's line (PgF − 0.64833 + 0.00180·νd), PgF = 0.5335 (table prints 0.53), runtime dPgF +0.04967; FLD fluorite-equivalent fluorophosphate",
      role: "Second FLD negative meniscus; distributes G1A negative power across two elements (¶0021).",
      dPgF: 0.04967,
    },
    // G1B — positive subgroup (fixed)
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: -48.3,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "LX1 — negative element of Component X (new-achromatism doublet); field-curvature correction (¶0026).",
      cemented: "X",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 50.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "LX2 — positive partner of Component X; lanthanum dense crown for low-curvature power.",
      cemented: "X",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 60.6,
      glass: "FCD705 (HOYA)",
      apd: "inferred",
      apdNote:
        "Patent prints PgF = 0.54 (two decimals; ΔPgF ≈ +0.028 by the patent's line PgF − 0.64833 + 0.00180·νd). Catalog-derived: HOYA FCD705 PgF 0.5400, runtime dPgF +0.02318; SLD PGM-compatible fluorophosphate crown",
      role: "LY1 — positive element of Component Y (old-achromatism doublet); high-order SA correction (¶0026).",
      cemented: "Y",
      dPgF: 0.023177,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: -47.9,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "LY2 — negative partner of Component Y; achromatizing flint.",
      cemented: "Y",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 88.3,
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
      focalLengthMm: 83.7,
      glass: "PBH21 (OHARA; historical 923209)",
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
      focalLengthMm: 41.8,
      glass: "FCD515 (HOYA) / FCD505 class",
      apd: "inferred",
      apdNote:
        "Patent prints PgF = 0.54 (two decimals; ΔPgF ≈ +0.015 by the patent's line PgF − 0.64833 + 0.00180·νd). Catalog-derived: HOYA FCD515 PgF 0.5441 (ΔPgF +0.0193 by the patent's line), runtime dPgF +0.01575; SLD fluorophosphate crown",
      role: "Crown element of G2 doublet; SLD glass for axial-color trimming near the stop.",
      cemented: "D2",
      dPgF: 0.015751,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.89,
      focalLengthMm: -36.0,
      glass: "E-FL5 (HOYA)",
      apd: false,
      role: "Flint element of G2 doublet; rear surface concave to sensor per Claim 5 / ¶0012.",
      cemented: "D2",
    },
    // G3 — rear focus group (stop attached)
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 53.3,
      glass: "FCD100 (HOYA)",
      apd: "patent",
      apdNote:
        "Same glass row as L2/L3 (nd 1.43700, νd 95.10, table PgF 0.53), so PgF = 0.5335 from patent condition (9): ΔPgF = +0.0564 by the patent's line (PgF − 0.64833 + 0.00180·νd), runtime dPgF +0.04967; FLD fluorite-equivalent — third and final FLD element",
      role: "L31 — positive crown of Component L3a; axial-color and SA correction immediately after stop (¶0049).",
      cemented: "L3a",
      dPgF: 0.04967,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: -33.5,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "L32 — flint partner of Component L3a; Δn = 0.211 at cemented interface provides SA correction.",
      cemented: "L3a",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.74,
      focalLengthMm: -55.5,
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
      focalLengthMm: 42.2,
      glass: "FCD515 (HOYA) / FCD505 class",
      apd: "inferred",
      apdNote:
        "Patent prints PgF = 0.54 (two decimals; ΔPgF ≈ +0.015 by the patent's line PgF − 0.64833 + 0.00180·νd). Catalog-derived: HOYA FCD515 PgF 0.5441 (ΔPgF +0.0193 by the patent's line), runtime dPgF +0.01575; SLD fluorophosphate crown",
      role: "L34 — convergent relay element; SLD glass minimises rear-group chromatic residual.",
      dPgF: 0.015751,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: 74.1,
      glass: "M-TAFD305 (HOYA)",
      apd: false,
      role: "Dual-asphere final element; progressively increasing negative power toward periphery (¶0056).",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // G1A — negative subgroup (fixed)
    { label: "1", R: 111.7037, d: 5.5478, sd: 37.0, medium: 1 },
    { label: "2", R: 514.0093, d: 0.15, sd: 36.0 },
    { label: "3", R: 191.8963, d: 1.5, sd: 28.0, medium: 2 },
    { label: "4", R: 30.2492, d: 12.0599, sd: 23.0 },
    { label: "5", R: 423.9805, d: 1.5, sd: 23.0, medium: 3 },
    { label: "6", R: 50.8216, d: 13.2984, sd: 21.0 },
    // G1B — positive subgroup (fixed)
    // Component X (L4 + L5 cemented)
    { label: "7", R: -38.1791, d: 1.5, sd: 21.0, medium: 4 },
    { label: "8", R: 172.544, d: 9.3857, sd: 22.0, medium: 5 },
    { label: "9", R: -56.304, d: 0.15, sd: 22.0 },
    // Component Y (L6 + L7 cemented)
    { label: "10", R: -1641.6822, d: 12.4672, sd: 22.5, medium: 6 },
    { label: "11", R: -32.7021, d: 1.5, sd: 22.5, medium: 7 },
    { label: "12", R: 246.8799, d: 0.15, sd: 22.5 },
    // L8 singlet
    { label: "13", R: 83.2754, d: 5.882, sd: 23.0, medium: 8 },
    { label: "14", R: -377.0503, sd: 23.0 },
    // G2 — focus group
    { label: "15", R: 90.4416, d: 5.3037, sd: 21.0, medium: 9 },
    { label: "16", R: -527.4885, d: 0.15, sd: 21.0 },
    // G2 doublet (L10 + L11 cemented)
    { label: "17", R: 55.6364, d: 11.866, sd: 20.0, medium: 10 },
    { label: "18", R: -44.6058, d: 2.482, sd: 18.5, medium: 11 },
    { label: "19", R: 39.3845, sd: 17.5 },
    // Aperture stop — attached to G3, moves during focus
    { label: "STO", R: "flat", d: 1.5 },
    // G3 — rear focus group
    // Component L3a (L12 + L13 cemented)
    { label: "21", R: 84.0231, d: 6.8887, sd: 15.5, medium: 12 },
    { label: "22", R: -32.202, d: 1.5, sd: 15.5, medium: 13 },
    { label: "23", R: 66.2242, d: 7.8613, sd: 15.5 },
    // L14 — concentric negative meniscus
    { label: "24", R: -26.9856, d: 1.5, sd: 14.5, medium: 14 },
    { label: "25", R: -121.029, d: 0.15, sd: 14.5 },
    // L15 singlet
    { label: "26", R: 64.6922, d: 6.7685, sd: 15.0, medium: 15 },
    { label: "27", R: -40.8255, d: 0.15, sd: 15.5 },
    // L16 — dual-asphere final element
    {
      label: "28A",
      R: -430.037,
      d: 4.6315,
      sd: 15.5,
      medium: 16,
      asphere: { K: 0, A4: -2.73662e-6, A6: 3.07519e-9, A8: 3.90515e-11, A10: -1.94154e-14, A12: 0 },
    },
    { label: "29A", R: -54.9865, sd: 15.5, asphere: { K: 0, A4: 3.26804e-6, A6: 3.98767e-9, A8: 3.58258e-11, A10: 0, A12: 0 } },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.4,
    description:
      "Floating inner focus. G2 and G3 move toward the object with differential travel (G3 moves ~1 mm farther than G2). G1 fixed; stop attached to G3. HSM ring-type ultrasonic drive.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (floating inner focus) ──
   *  G1 fixed; G2 and G3 move toward object independently.
   *  Stop attached to G3.
   *  Total track constant at 171.00 mm.
   */
  gaps: {
    "14": { label: "D14", values: [[8.7665, 2.603]] },
    "19": { label: "D19", values: [[7.3907, 6.3421]] },
    "29A": { label: "BF", values: [[39.0002, 46.2123]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16] },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.48, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
