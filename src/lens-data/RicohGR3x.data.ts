import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR IIIx 26.1mm f/2.8                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2022/0026670 A1 Example 3 (Kazuyasu Ohashi).     ║
 * ║  Semi-wide-angle quasi-symmetric design with telephoto shortening. ║
 * ║  7 elements / 5 groups (air-separated), 3 aspherical surfaces.    ║
 * ║  Focus: unit focus (whole lens translates).                        ║
 * ║                                                                    ║
 * ║  OCR CORRECTIONS APPLIED:                                          ║
 * ║    S2 R: 224.908 → 24.908 (leading "2" prepended from surf. no.). ║
 * ║    Verified: corrected value yields EFL = 26.051 mm (patent 26.05)║
 * ║    Uncorrected yields 25.0 mm — a 4% discrepancy.                 ║
 * ║    S9 glass name corrupted to "S-LAH58" (duplicated from S6);     ║
 * ║    actual glass identified as OHARA 755523 (TaC6) by nd/νd match. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent. Estimated from paraxial marginal + chief  ║
 * ║    ray trace at partial field (~50% off-axis), with 10% clearance  ║
 * ║    and constraints for edge thickness, sd/|R| ratio, and cross-gap ║
 * ║    sag overlap. Significant vignetting at full field is expected   ║
 * ║    (typical for compact camera lenses of this class).              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr3x-26f28",
  maker: "Ricoh",
  name: "RICOH GR IIIx 26.1mm f/2.8",
  subtitle: "US 2022/0026670 A1 EXAMPLE 3 — KAZUYASU OHASHI",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 26.1 mm", "F/2.8", "2ω ≈ 56.6°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 26.1,
  focalLengthDesign: 26.05,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  patentYear: 2022,
  elementCount: 7,
  groupCount: 5, // air-separated count (patent uses 4 power-groups; marketing counts 5)

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.854,
      vd: 40.38,
      fl: 15.86,
      glass: "OHARA L-LAH85V (PGM)",
      apd: false,
      role: "Front positive meniscus; primary telephoto-shortening power. Aspherical front surface corrects spherical aberration and near-axis coma.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7888,
      vd: 28.43,
      fl: -13.48,
      glass: "OHARA S-NBH58",
      apd: false,
      role: "Rear element of front cemented doublet D1; chromatic correction within Group I. High-dispersion niobium-barium flint paired against L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.47,
      fl: -25.89,
      glass: "OHARA S-TIM27",
      apd: false,
      role: "Concave-toward-object surface reduces Group I diameter and corrects coma of lower rays (¶0075). Forms diverging sub-group of Group II.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 17.23,
      glass: "OHARA S-LAH58",
      apd: false,
      role: "Principal converging element ahead of stop. Highest-index glass (nd=1.883) permits strong power from gentle curvatures. Convex surface faces L5 across stop (quasi-symmetric pair).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      fl: 9.12,
      glass: "OHARA 755523 (TaC6; see analysis §5.2)",
      apd: false,
      role: "Strongest converging element (FL=+9.1 mm). High-index low-dispersion crown anchors chromatic correction of rear group. Convex image-side surface completes quasi-symmetric opposing-convex architecture across stop.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.84,
      fl: -13.4,
      glass: "OHARA S-TIL6",
      apd: false,
      role: "Rear element of cemented doublet D2. Large Δnd at junction (0.223) drives chromatic and field curvature correction. Concave image-side surface faces L7 concave object-side surface.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.9027,
      vd: 31.0,
      fl: -64.86,
      glass: "OHARA L-LAH86 (PGM)",
      apd: false,
      role: "Sole element of Group IV; provides negative rear power for telephoto shortening of total track. Ultra-high-index (nd=1.903) PGM glass. Rear surface heavily aspherized for field-dependent aberration correction (astigmatism, distortion, peripheral coma).",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbers: 1–15 (including filter and image).
   *  Filter (S14–S15: ∞ / 1.40mm / nd=1.51633 + ∞ / 0.70mm to image)
   *  is omitted; its mechanical distance is folded into the last surface d.
   *  Total BFD = 14.378 + 1.40 + 0.70 = 16.478 mm.
   *
   *  S12 is marked aspherical in the patent (*) but has no published
   *  coefficients in the Example 3 data section.  L-LAH86 is a PGM glass
   *  (both surfaces formed in one mold), so mild asphericity is expected.
   *  Included in asph{} with K=0 and all coefficients zero.
   */
  surfaces: [
    // ── Group I: cemented doublet D1 (L1 + L2) ──
    { label: "1A", R: 9.247, d: 2.91, nd: 1.854, elemId: 1, sd: 6.0 }, // L1 front (asph, PGM)
    { label: "2", R: 24.908, d: 0.7, nd: 1.7888, elemId: 2, sd: 5.3 }, // L1→L2 cemented junction
    { label: "3", R: 7.36, d: 2.01, nd: 1.0, elemId: 0, sd: 4.3 }, // L2 rear → air

    // ── Group II: L3 (negative) + L4 (positive) ──
    { label: "4", R: -22.769, d: 0.7, nd: 1.6398, elemId: 3, sd: 4.5 }, // L3 front
    { label: "5", R: 61.496, d: 0.1, nd: 1.0, elemId: 0, sd: 4.2 }, // L3 rear → air (0.10 mm gap)
    { label: "6", R: 17.395, d: 2.32, nd: 1.883, elemId: 4, sd: 4.5 }, // L4 front
    { label: "7", R: -113.651, d: 1.2, nd: 1.0, elemId: 0, sd: 4.2 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.2, nd: 1.0, elemId: 0, sd: 3.6 }, // stop (patent S8)

    // ── Group III: cemented doublet D2 (L5 + L6) ──
    { label: "9", R: 24.522, d: 2.57, nd: 1.755, elemId: 5, sd: 4.0 }, // L5 front
    { label: "10", R: -9.139, d: 0.6, nd: 1.53172, elemId: 6, sd: 4.0 }, // L5→L6 cemented junction
    { label: "11", R: 33.044, d: 1.15, nd: 1.0, elemId: 0, sd: 4.0 }, // L6 rear → air

    // ── Group IV: L7 (negative meniscus, 2× asph) ──
    { label: "12A", R: -18.0, d: 1.0, nd: 1.9027, elemId: 7, sd: 4.8 }, // L7 front (asph, PGM; no published coeffs)
    { label: "13A", R: -26.676, d: 16.478, nd: 1.0, elemId: 0, sd: 5.2 }, // L7 rear → BFD to image (asph, PGM; incl. filter path)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: -2.63557e-5,
      A6: -6.86204e-7,
      A8: 9.51319e-9,
      A10: -2.99238e-10,
      A12: 0,
      A14: 0,
    },
    "12A": {
      // Patent marks S12 aspherical (*) but publishes no coefficients for Ex. 3.
      // PGM glass (L-LAH86) — mild asphericity likely present but unpublished.
      K: 0,
      A4: 0,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: 1.30975e-4,
      A6: -3.75252e-7,
      A8: 5.96446e-8,
      A10: -8.12812e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  BFD includes filter equivalent path (14.378 + 1.40 + 0.70 = 16.478 mm).
   *  Extension at 0.2 m: ≈ 3.90 mm (paraxial thin-lens estimate).
   */
  var: {
    "13A": [16.478, 20.38],
  },

  varLabels: [["13A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1A", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "7" },
    { text: "III", fromSurface: "9", toSurface: "11" },
    { text: "IV", fromSurface: "12A", toSurface: "13A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1A", toSurface: "3" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2, // normal mode; macro mode extends to 0.12 m
  focusDescription: "Unit focus — entire 7-element assembly translates along the optical axis.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
