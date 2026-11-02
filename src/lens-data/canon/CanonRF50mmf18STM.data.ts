import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Primary source: JP 2021-131499 A, Numerical Example 1, paragraph 0049,
 * PDF/printed pp. 9-10; Figure 1 on p. 14. Direct original review: 2026-10-30.
 * The JP front page identifies application 2020-027795, the former US
 * 2021/0263286 A1 priority application. All 15 disputed US table cells are
 * printed coherently in this JP original; the audit retains the US comparison.
 * The JP grant was not inspected. No numerical example is mixed or scaled.
 *
 * Six elements / five groups. L12/L13 share one cemented interface; L22 is
 * explicitly a single resin meniscus with two aspherical faces (JP paragraph 0013).
 * All refracting clear SDs remain the JP effective diameters / 2. A resolved free-air shoulder at
 * 9A follows Figure 1's stepped front resin rim, ending at its partner's
 * published clear SD. Other apparent equal-height rims are unresolved. This land
 * preserves the traced optical aperture. The bonded front pair retains unequal
 * clear caps: no opaque land is added at 4.
 * No inferred cuts, rear plates, bonded resin layers or spectral overrides.
 *
 * JP paragraph 0045 defines d-line indices and Abbe numbers. Six compatible
 * catalog curves are qualified spectral proxies after the 2026-10-31 E48R
 * archival-source follow-up; source resin grade, supplier and chemistry remain
 * unspecified. No printed line indices,
 * partial dispersion or APD identity is supplied. Catalog data is not source data.
 *
 * Source controls: restore the printed 49.57 mm / F1.85 design targets and
 * 25.67 mm infinity BF instead of earlier computed 49.5616 / F1.8527 / 25.667112.
 * R/d, aspheres, clear SDs and all internal spacings are unchanged. Paragraph 0044
 * supports rigid unit focus; the retained 38.059827 mm close BF is a constrained
 * reconstruction from the marketed 0.30 m image-plane-referenced distance,
 * not a source spacing. Travel from the printed infinity BF is 12.389827 mm.
 * Source fidelity, sampled clearance and production correlation are separate.
 * Table 1 on p. 13 conflicts with Numerical Example 1's f/track; see errata.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-50mm-f1-8-stm",
  maker: "Canon",
  name: "CANON RF 50mm f/1.8 STM",
  subtitle:
    "JP 2021-131499 A Numerical Example 1 — constrained unit-focus reconstruction; production correlation inferred",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "6 ELEMENTS / 5 GROUPS",
      "50mm f/1.8 (MARKETED)",
      "f = 49.57 mm / F1.85 (PATENT)",
      "2ω = 47.16° (PATENT) / 46° (MARKETED)",
      "1 ASPHERICAL ELEMENT / 2 ASPHERICAL SURFACES",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 49.57 },
    fNumber: { marketing: 1.8, design: 1.85 },
  },

  source: {
    patentNumber: "JP 2021-131499 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2021,
    authors: ["Junya Ichimura"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "JP Table 1 (p. 13) gives Example 1 f=49.50 mm and TTL=60.64 mm, conflicting with Numerical Example 1 (pp. 9-10), f=49.57 mm and total length=59.59 mm. The numerical prescription computes f=49.5616 mm and a 59.58 mm track with its printed BF=25.67 mm. Retain the Numerical Example 1 prescription; do not tune surfaces or gaps to either summary.",
      },
    ],
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
      glass: "E48R (qualified spectral proxy for source resin; historical grade and supplier not established)",
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
    // JP Numerical Example 1 prints stop effective diameter 16.24 mm; the prime iris follows the printed F1.85.
    { label: "STO", R: "flat", d: 6.2 },
    { label: "7", R: -16.726, d: 0.9, sd: 7.475, medium: 4 },
    { label: "8", R: -29.829, d: 0.83, sd: 7.73 },
    {
      label: "9A",
      R: -25.0,
      d: 2.95,
      sd: 7.76,
      rimExtensionSd: 9.07,
      medium: 5,
      asphere: { K: 0, A4: -4.12032e-5, A6: -2.90015e-7, A8: -4.67119e-9, A10: 7.90646e-11, A12: -9.2847e-13, A14: 0 },
    },
    {
      label: "10A",
      R: -18.373,
      d: 0.98,
      sd: 9.07,
      asphere: {
        K: 0,
        A4: -2.41619e-5,
        A6: -3.29146e-7,
        A8: 1.91098e-10,
        A10: -9.28593e-13,
        A12: -2.29193e-13,
        A14: 0,
      },
    },
    { label: "11", R: 280.004, d: 4.6, sd: 12.215, medium: 6 },
    { label: "12", R: -34.002, sd: 12.855 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description:
      "CONSTRAINED_RECONSTRUCTION — JP ¶0044 specifies rigid unit focus (LF + STO + LR translate together). " +
      "The 0.30 m close state is code-solved from Canon's MFD, normalized to object-to-image-plane distance: " +
      "S12→IMG = 38.059827 mm, 12.389827 mm outward travel from printed infinity BF, with paraxial magnification " +
      "-0.250047×. The reference-plane normalization is a modeling choice; all internal spacings remain fixed, " +
      "and no finite-distance spacing row is published in the patent.",
  },

  /* (moved from var) CONSTRAINED_RECONSTRUCTION: only the final air gap changes under rigid unit focus. */
  gaps: { "12": { label: "BF", values: [[25.67, 38.059826728909414]] } },

  /* ── Aperture configuration ── */
  aperture: {
    nominalFNumber: 1.85,
    fStops: [1.85, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
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
