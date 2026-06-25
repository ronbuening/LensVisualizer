import type { LensDataInput } from "../../types/optics.js";

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
  key: "canon-efs-24-f28-stm",
  maker: "Canon",
  name: "CANON EF-S 24mm f/2.8 STM",
  subtitle: "JP 2015-111192 A EXAMPLE 1 — CANON / GYODA",
  specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 24.5 mm", "F/2.8", "2ω ≈ 58.3°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 24,
  focalLengthDesign: 24.5,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["canon-ef-s"],
  imageFormat: "aps-c",
  patentYear: 2015,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.3,
      fl: 40.28,
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
      fl: -22.32,
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
      fl: 19.87,
      glass: "N-LAK14 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Crown component of cemented doublet; suppresses high-order spherical aberration and sagittal flare",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: -13.72,
      glass: "NBFD15 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Flint component of cemented doublet; meniscus concave to object corrects coma and astigmatism",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 24.62,
      glass: "S-FPM2 (OHARA)",
      apd: "patent",
      dPgF: 0.0141,
      apdNote:
        "θgF = 0.544, ΔPgF ≈ +0.0141 (from patent Table 1); positive anomalous dispersion for lateral color correction",
      role: "Primary positive relay; strongest rear-group element with anomalous partial dispersion for secondary spectrum",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 42.54,
      glass: "S-BAL42 (OHARA) / 583594 barium crown",
      apd: false,
      role: "Aspherical field flattener; corrects field curvature and residual spherical aberration at large ray heights",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front group FB (negative) ──
    { label: "1", R: 23.706, d: 2.83, nd: 1.91082, elemId: 1, sd: 8.07 }, // L1 front
    { label: "2", R: 63.184, d: 0.25, nd: 1.0, elemId: 0, sd: 7.21 }, // L1 rear → air
    { label: "3", R: 22.266, d: 0.9, nd: 1.48749, elemId: 2, sd: 6.45 }, // L2 front
    { label: "4", R: 7.213, d: 7.26, nd: 1.0, elemId: 0, sd: 5.06 }, // L2 rear → air (includes 3.26 mm flare-cut gap)

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 3.24, nd: 1.0, elemId: 0, sd: 4.39 },

    // ── Rear group RB (positive) ──
    // Cemented doublet D1 (L3 + L4)
    { label: "5", R: -16.321, d: 4.82, nd: 1.6968, elemId: 3, sd: 4.65 }, // L3 front
    { label: "6", R: -8.4, d: 0.8, nd: 1.8061, elemId: 4, sd: 5.69 }, // L3→L4 junction
    { label: "7", R: -36.438, d: 0.2, nd: 1.0, elemId: 0, sd: 6.84 }, // L4 rear → air

    // L5 (biconvex positive)
    { label: "8", R: 227.537, d: 4.39, nd: 1.59522, elemId: 5, sd: 7.62 }, // L5 front
    { label: "9", R: -15.547, d: 0.9, nd: 1.0, elemId: 0, sd: 8.36 }, // L5 rear → air

    // L6 (aspherical positive meniscus)
    { label: "10A", R: -34.842, d: 3.55, nd: 1.58313, elemId: 6, sd: 8.88 }, // L6 front (asph)
    { label: "11", R: -15.035, d: 35.68, nd: 1.0, elemId: 0, sd: 9.47 }, // L6 rear → air (BFD)
  ],

  /* ── Aspherical coefficients ──
   *  Patent ¶0067: standard sag equation with K = conic constant.
   *  K = 0 corresponds to a spherical base (standard convention).
   *  Coefficients through A12; A14 not provided by patent (set to 0).
   */
  asph: {
    "10A": {
      K: 0,
      A4: -5.24174e-5,
      A6: 5.25723e-8,
      A8: -3.53661e-9,
      A10: 3.36031e-11,
      A12: -1.48386e-13,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates as rigid assembly.
   *  Only the BFD (last surface d) changes.
   *  Close-focus BFD computed via paraxial ABCD trace at Canon MFD = 0.16 m.
   *  Computed magnification at MFD: 0.27× (matches Canon specification).
   */
  var: {
    "11": [35.68, 42.32],
  },

  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FB", fromSurface: "1", toSurface: "4" },
    { text: "RB", fromSurface: "5", toSurface: "11" },
  ],

  doublets: [{ text: "D₁", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.16,
  focusDescription: "Unit focus — entire optical assembly extends toward object (STM drive).",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22],

  /* ── Layout tuning ── */
  scFill: 0.6,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
