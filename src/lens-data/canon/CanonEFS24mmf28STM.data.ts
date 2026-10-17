import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON EF-S 24mm f/2.8 STM                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2015-111192 A, Example 1 (Canon / Gyoda).        ║
 * ║  Retrofocus wide-angle pancake for APS-C (EF-S mount).            ║
 * ║  6 elements / 5 groups, 1 aspherical surface.                     ║
 * ║  Focus: Unit focusing (entire lens extends toward object).         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent-listed effective diameters (有効径) divided by 2.        ║
 * ║    All constraints verified: sd/|R| < 0.90, edge thickness > 0.3  ║
 * ║    mm, cross-gap intrusion < 90%.                                  ║
 * ║                                                                    ║
 * ║  NOTE ON FLARE-CUT STOP:                                           ║
 * ║    Patent surface 5 (フレアーカット絞り P) between the front       ║
 * ║    group and aperture stop is omitted; its air gap (d=3.26 mm)    ║
 * ║    is folded into the preceding surface "4" thickness.             ║
 * ║    Surface "4" d = 4.00 + 3.26 = 7.26 mm.                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-efs-24-f28-stm",
  maker: "Canon",
  name: "CANON EF-S 24mm f/2.8 STM",
  subtitle: "JP 2015-111192 A EXAMPLE 1 — CANON / GYODA",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 24.5 mm", "F/2.8", "2ω ≈ 58.3°", "1 ASPHERICAL SURFACE"],
    elementCount: 6,
    groupCount: 5,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 24, design: 24.5 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: { patentNumber: "JP 2015-111192 A", patentYear: 2015, authors: ["Yuichi Gyoda"], assignees: ["Canon Inc."] },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: 40.28,
      glass: "TAFD35 (HOYA)",
      apd: false,
      role: "Front positive collector; high-index dense lanthanum flint for Petzval field flattening",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -22.32,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Diverging element; creates retrofocus back focal distance and front-group achromatization",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 19.87,
      glass: "N-LAK14 (Schott)",
      apd: false,
      role: "Crown component of cemented doublet; suppresses high-order spherical aberration and sagittal flare",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -13.72,
      glass: "NBFD15 (HOYA)",
      apd: false,
      role: "Flint component of cemented doublet; meniscus concave to object corrects coma and astigmatism",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 24.62,
      glass: "S-FPM2 (OHARA)",
      apd: "patent",
      apdNote:
        "θgF = 0.544, ΔPgF ≈ +0.0141 (from patent Table 1); positive anomalous dispersion for lateral color correction",
      role: "Primary positive relay; strongest rear-group element with anomalous partial dispersion for secondary spectrum",
      dPgF: 0.0141,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 42.54,
      glass: "S-BAL42 (OHARA) / 583594 barium crown",
      apd: false,
      role: "Aspherical field flattener; corrects field curvature and residual spherical aberration at large ray heights",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent ¶0067: standard sag equation with K = conic constant.
   *  K = 0 corresponds to a spherical base (standard convention).
   *  Coefficients through A12; A14 not provided by patent (set to 0).
   */
  surfaces: [
    // ── Front group FB (negative) ──
    { label: "1", R: 23.706, d: 2.83, sd: 8.07, medium: 1 }, // L1 front
    { label: "2", R: 63.184, d: 0.25, sd: 7.21 }, // L1 rear → air
    { label: "3", R: 22.266, d: 0.9, sd: 6.45, medium: 2 }, // L2 front
    { label: "4", R: 7.213, d: 7.26, sd: 5.06 }, // L2 rear → air (includes 3.26 mm flare-cut gap)

    // ── Aperture stop ──
    // JP 2015-111192 A, Example 1 surface table, surface 6: printed effective diameter 8.78 mm at the stop.
    { label: "STO", R: "flat", d: 3.24 },

    // ── Rear group RB (positive) ──
    // Cemented doublet D1 (L3 + L4)
    { label: "5", R: -16.321, d: 4.82, sd: 4.65, medium: 3 }, // L3 front
    { label: "6", R: -8.4, d: 0.8, sd: 5.69, medium: 4 }, // L3→L4 junction
    { label: "7", R: -36.438, d: 0.2, sd: 6.84 }, // L4 rear → air

    // L5 (biconvex positive)
    { label: "8", R: 227.537, d: 4.39, sd: 7.62, medium: 5 }, // L5 front
    { label: "9", R: -15.547, d: 0.9, sd: 8.36 }, // L5 rear → air

    // L6 (aspherical positive meniscus)
    {
      label: "10A",
      R: -34.842,
      d: 3.55,
      sd: 8.88,
      medium: 6,
      asphere: { K: 0, A4: -5.24174e-5, A6: 5.25723e-8, A8: -3.53661e-9, A10: 3.36031e-11, A12: -1.48386e-13 },
    }, // L6 front (asph)
    { label: "11", R: -15.035, sd: 9.47 }, // L6 rear → air (BFD)
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 0.16, description: "Unit focus — entire optical assembly extends toward object (STM drive)." },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates as rigid assembly.
   *  Only the BFD (last surface d) changes.
   *  Close-focus BFD computed via paraxial ABCD trace at Canon MFD = 0.16 m.
   *  Computed magnification at MFD: 0.27× (matches Canon specification).
   */
  gaps: { "11": { label: "BF", values: [[35.68, 42.32]] } },

  /* ── Aperture configuration ── */
  aperture: {
    nominalFNumber: 2.88,
    fStops: [2.88, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22],
  },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FB", fromSurface: "1", toSurface: "4" },
    { text: "RB", fromSurface: "5", toSurface: "11" },
  ],
  doublets: [{ text: "D₁", fromSurface: "5", toSurface: "7" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.6, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
