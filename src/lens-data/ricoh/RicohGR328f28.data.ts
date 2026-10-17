import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2019/0154946 A1, Example 5: Fig. 5, Fig. 23 and paragraphs 244–265.
 * Grant US10948683B2 confirms the S02 A6 exponent -7.
 * Fig. 23 prints final gaps 0.70 / 12.807 (glass) / 1.40 in both copies.
 * Fig. 5 instead draws a thin filter near the image. The inferred reordered
 * gaps 12.807 air / 1.40 glass / 0.70 air give 14.430281871 mm air-equivalent
 * BFD, within 0.00101 mm of independent paraxial focus. This source-table
 * correction is an inference, not a literal transcription; see analysis.
 * Filter omitted. Rims estimated from the 600 dpi Fig. 5; SDs unpublished.
 * Patent specifies integral focusing but no finite station. The 0.10 m
 * object-to-image endpoint is an inferred paraxial scenario.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "ricoh-gr3-28f28",
  maker: "Ricoh",
  name: "RICOH GR LENS 18.3mm f/2.8 (Ricoh GR III)",
  subtitle: "US 2019/0154946 A1, Example 5 — Ohashi / Ricoh",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "f = 18.28 mm  (28 mm equiv.)",
      "F/2.87",
      "2ω ≈ 76.4°",
      "3 ASPHERICAL SURFACES (2 ELEMENTS)",
    ],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 18.3, design: 18.28 },
    fNumber: { marketing: 2.8, design: 2.87 },
  },

  source: {
    patentNumber: "US 2019/0154946 A1",
    patentYear: 2019,
    authors: ["Kazuyasu Ohashi"],
    assignees: ["Ricoh Co., Ltd."],
  },

  /* ── Elements ──
   *  Front group LO: L11 (singlet), L12+L13 (cemented doublet)
   *  Rear group LI:  L21+L22 (cemented doublet), L23 (singlet)
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: -60.9,
      glass: "OHARA L-BSL7 (PGM)",
      apd: false,
      role: "Front negative meniscus; introduces weak retrofocus property for exit pupil control. Aspherical rear surface (S02) corrects spherical aberration and field curvature.",
      dPgF: -0.00275,
    },

    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.47,
      focalLengthMm: -8.9,
      glass: "OHARA S-TIM27",
      apd: false,
      role: "Negative flint component of front cemented doublet; provides chromatic correction for L13.",
      cemented: "D1",
      dPgF: 0.00638,
    },

    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      focalLengthMm: 7.4,
      glass: "HOYA TAFD33",
      apd: false,
      role: "Positive high-index element of front doublet; primary converging power in front group.",
      cemented: "D1",
      dPgF: -0.00618,
    },

    {
      id: 4,
      name: "L21",
      label: "Element 4 (L21)",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      focalLengthMm: 6.3,
      glass: "HOYA TAFD33",
      apd: false,
      role: "Positive high-index element of rear doublet; strongest individual element in system (f ≈ +6.3 mm).",
      cemented: "D2",
      dPgF: -0.00618,
    },

    {
      id: 5,
      name: "L22",
      label: "Element 5 (L22)",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      focalLengthMm: -7.3,
      glass: "OHARA S-TIM35",
      apd: false,
      role: "Negative dense flint in rear doublet; highest dispersion glass in system (νd = 30.1) for chromatic balance.",
      cemented: "D2",
      dPgF: 0.00988,
    },

    {
      id: 6,
      name: "L23",
      label: "Element 6 (L23)",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.88202,
      vd: 37.22,
      focalLengthMm: -1620,
      glass: "882372 - HOYA M-TAFD307 (PGM; patent Pg,F=0.5769)",
      apd: false,
      role: "Double-aspherical corrector plate; near-zero paraxial power (f ≈ −1620 mm). Both surfaces aspherical — S10 fine-tunes field curvature, S11 (K = +7.28) provides final correction of astigmatism, coma, and distortion.",
      dPgF: -0.0043,
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbering: 01–11 (optical) + 12–13 (filter, omitted here).
   *  Cemented doublets: L12+L13 (D1), L21+L22 (D2).
   *  Last surface d = inferred air-equivalent BFD; see source-table caveat above.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Three aspherical surfaces: S02 (L11 rear), S10 (L23 front), S11 (L23 rear).
   *  Sag: Z(h) = (h²/R)/[1+√(1−(1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
   */
  surfaces: [
    // ── Front group LO ──
    { label: "1", R: 17.034, d: 0.7, sd: 5.9, medium: 1 }, // L11 front
    {
      label: "2A",
      R: 10.894,
      d: 2.46,
      sd: 5.8,
      asphere: { K: 0, A4: 2.49546e-4, A6: 5.30767e-7, A8: -1.77772e-7, A10: 2.52567e-8, A12: -9.4656e-10, A14: 1.70552e-11 },
    }, // L11 rear → air (asph)
    { label: "3", R: -18.486, d: 0.6, sd: 4.9, medium: 2 }, // L12 front
    { label: "4", R: 8.332, d: 2.75, sd: 4.9, medium: 3 }, // L12→L13 junction
    { label: "5", R: -25.206, d: 1.1, sd: 4.6 }, // L13 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat", d: 1.2 }, // stop; radius derived from the design f-number

    // ── Rear group LI ──
    { label: "7", R: 13.099, d: 2.76, sd: 4.4, medium: 4 }, // L21 front
    { label: "8", R: -8.666, d: 0.5, sd: 4.4, medium: 5 }, // L21→L22 junction
    { label: "9", R: 12.744, d: 1.52, sd: 4.4 }, // L22 rear → air
    { label: "10A", R: -16.835, d: 1.0, sd: 4.9, medium: 6, asphere: { K: 0, A4: 2.21965e-4, A6: -7.84181e-7, A8: 0, A10: 0, A12: 0, A14: 0 } }, // L23 front (asph)
    {
      label: "11A",
      R: -17.51,
      sd: 4.9,
      asphere: { K: 7.28422, A4: 6.02712e-4, A6: 8.85505e-6, A8: -5.39399e-8, A10: 4.60086e-9, A12: 0, A14: 0 },
    }, // L23 rear → air (asph) — BFD to image
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.1,
    description:
      "Unit focus; 0.10 m object-to-image endpoint is an inferred paraxial scenario, not a published patent station.",
  },

  // (moved from var) Unit motion is source-backed; this finite conjugate and filter correction are inferred.
  gaps: { "11A": { label: "BF (modeled)", values: [[14.430281871360455, 20.739542810277094]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.87, fStops: [2.87, 3.2, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (LO)", fromSurface: "1", toSurface: "5" },
    { text: "REAR (LI)", fromSurface: "7", toSurface: "11A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.42, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
