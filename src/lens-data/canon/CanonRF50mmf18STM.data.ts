import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON RF 50mm f/1.8 STM                                                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Fixed patent source: US 2021/0263286 A1, Example 1 / Numerical Example 1 (Junya Ichimura, Canon).          ║
 * ║ The US Example 1 surface table is internally corrupt. Same-family JP 7414575 B2 / JP 2021-131499 A        ║
 * ║ Numerical Example 1 supplies the corrected surface values used here solely to resolve those source errors.  ║
 * ║ The corrected prescription reproduces the patent's EFL/BFD/track and single-element focal lengths.          ║
 * ║                                                                                                              ║
 * ║ Production identity is a strong but inferred correlation, not a manufacturer-confirmed patent linkage.      ║
 * ║ Canon's production specifications are used only for marketing/system metadata and the close-focus constraint.║
 * ║                                                                                                              ║
 * ║ 6 elements / 5 groups; modified double-Gauss-derived prime. LF = L11(+), L12(+), L13(-);                    ║
 * ║ LR = L21(-), L22(+), L23(+). L12+L13 are cemented. L22 is a resin meniscus with two aspherical faces.      ║
 * ║ No scaling is applied. Prescription indices are Fraunhofer d-line values.                                    ║
 * ║                                                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Patent ¶0048 specifies rigid unit focus: LF, STO, and LR          ║
 * ║ translate together with all internal spacings fixed. The close state is code-solved from Canon's official   ║
 * ║ 0.30 m MFD, normalized here to object-to-image-plane distance. S12→IMG changes from 25.667112 mm to       ║
 * ║ 38.059827 mm, a 12.392715 mm outward unit-focus travel; solved paraxial magnification = -0.250047×,       ║
 * ║ matching Canon's marketed 0.25×. The patent itself publishes no finite-distance spacing row.                ║
 * ║                                                                                                              ║
 * ║ Semi-diameters are the patent's published effective diameters divided by two.                                ║
 * ║ Glass supplier identity is unresolved: neutral six-digit nd/νd coordinate classes are used where defensible.║
 * ║ L22 is explicitly resin and remains Unmatched. nC, nF, ng, and dPgF are omitted because neither the patent  ║
 * ║ nor an independently established material identity supplies those element-level spectral data.              ║
 * ║                                                                                                              ║
 * ║ No sensor cover glass, filter, dummy/flare-cutter plane, or mechanical part is present in this model.        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-50mm-f1-8-stm",
  maker: "Canon",
  name: "CANON RF 50mm f/1.8 STM",
  subtitle: "US 2021/0263286 A1 Example 1 — corrected same-family prescription; constrained unit-focus reconstruction",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "6 ELEMENTS / 5 GROUPS",
      "50mm f/1.8 (MARKETED)",
      "f = 49.5616 mm / F1.8527 (MODELED)",
      "2ω = 47.16° (PATENT) / 46° (MARKETED)",
      "1 ASPHERICAL ELEMENT / 2 ASPHERICAL SURFACES",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 49.56160229792826 },
    fNumber: { marketing: 1.8, design: 1.8527048207058032 },
  },

  source: {
    patentNumber: "US 2021/0263286 A1",
    patentYear: 2021,
    authors: ["Junya Ichimura"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: 56.38992013038208,
      glass: "835427 class (vendor unresolved)",
      role: "Front positive meniscus of LF; largest published effective diameter in the prescription.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.79952,
      vd: 42.2,
      indexReference: "d",
      focalLengthMm: 29.580776263735135,
      glass: "800422 class (vendor unresolved)",
      role: "Thick positive meniscus of LF; cemented to L13.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -17.744533091990828,
      glass: "805254 class (vendor unresolved)",
      role: "Negative meniscus nearest STO; with L12 forms a net-negative cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      indexReference: "d",
      focalLengthMm: -58.21086624695457,
      glass: "673321 class (vendor unresolved)",
      role: "Weak negative rear-unit element with the smallest published effective diameter.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      indexReference: "d",
      focalLengthMm: 113.04891926638967,
      glass: "Unmatched (resin material; patent nd=1.53110, vd=55.9)",
      role: "Weak positive resin meniscus; both faces are aspherical for coma/field-curvature balancing.",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.5,
      indexReference: "d",
      focalLengthMm: 41.565802386714736,
      glass: "734515 class (vendor unresolved)",
      role: "Rear biconvex positive element; image-side surface carries the stronger curvature.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) Patent equation already uses the standard conic constant K; no κ→K conversion. */
  surfaces: [
    { label: "1", R: 28.621, d: 4.2, sd: 14.995, medium: 1 },
    { label: "2", R: 68.136, d: 0.18, sd: 14.24 },
    { label: "3", R: 17.772, d: 6.7, sd: 11.95, medium: 2 },
    { label: "4", R: 59.525, d: 1.1, sd: 10.39, medium: 3 },
    { label: "5", R: 11.427, d: 5.27, sd: 8.39 },
    // JP 7414575 B2 / JP 2021-131499 A Numerical Example 1 surface table (same-family correction), stop row:
    // printed effective diameter 16.24 mm at the stop (the corrupt US 2021/0263286 A1 Example 1 table prints 36.24 mm).
    { label: "STO", R: "flat", d: 6.2 },
    { label: "7", R: -16.726, d: 0.9, sd: 7.475, medium: 4 },
    { label: "8", R: -29.829, d: 0.83, sd: 7.73 },
    {
      label: "9A",
      R: -25.0,
      d: 2.95,
      sd: 7.76,
      medium: 5,
      asphere: { K: 0, A4: -4.12032e-5, A6: -2.90015e-7, A8: -4.67119e-9, A10: 7.90646e-11, A12: -9.2847e-13, A14: 0 },
    },
    {
      label: "10A",
      R: -18.373,
      d: 0.98,
      sd: 9.07,
      asphere: { K: 0, A4: -2.41619e-5, A6: -3.29146e-7, A8: 1.91098e-10, A10: -9.28593e-13, A12: -2.29193e-13, A14: 0 },
    },
    { label: "11", R: 280.004, d: 4.6, sd: 12.215, medium: 6 },
    { label: "12", R: -34.002, sd: 12.855 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description:
      "CONSTRAINED_RECONSTRUCTION — patent ¶0048 specifies rigid unit focus (LF + STO + LR translate together). " +
      "The 0.30 m close state is code-solved from Canon's MFD, normalized to object-to-image-plane distance: " +
      "S12→IMG = 38.059827 mm, 12.392715 mm outward travel from computed infinity, with paraxial magnification " +
      "-0.250047×. The reference-plane normalization is a modeling choice; all internal spacings remain fixed, " +
      "and no finite-distance spacing row is published in the patent.",
  },

  /* (moved from var) CONSTRAINED_RECONSTRUCTION: only the final air gap changes under rigid unit focus. */
  gaps: { "12": { label: "BF", values: [[25.66711201049858, 38.059826728909414]] } },

  /* ── Aperture configuration ── */
  aperture: {
    nominalFNumber: 1.8527048207058032,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },

  groups: [
    { text: "LF", fromSurface: "1", toSurface: "5" },
    { text: "LR", fromSurface: "7", toSurface: "12" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
