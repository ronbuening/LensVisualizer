import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJIFILM FUJINON XF35mmF1.4 R               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0285903 A1, Example 1 (Suzuki / Fujifilm).  ║
 * ║  Modified double-Gauss: positive front group, aperture stop,      ║
 * ║  positive rear group with biconcave aspheric + cemented triplet.  ║
 * ║  8 elements / 6 groups, 2 aspherical surfaces (both on L21).      ║
 * ║  Focus: unit focus (entire lens moves, only BFD changes).         ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                  ║
 * ║    Patent uses a non-standard sag equation with odd+even powers   ║
 * ║    (A3·h³ through A20·h²⁰) and a parabolic base (K_patent = 0).  ║
 * ║    Coefficients below are a least-squares refit to the standard   ║
 * ║    even-order-only sag equation with spherical base (K = 0).      ║
 * ║    Max residual: 0.44 µm (S10A), 0.35 µm (S11A) at sd = 8.0 mm. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated via combined     ║
 * ║    marginal ray (f/1.45) + chief ray (60% field) trace with ~5–8% ║
 * ║    clearance. Constrained by 52 mm filter thread (front group),   ║
 * ║    edge thickness ≥ 0.3 mm, and cross-gap sag overlap ≤ gap×1.1. ║
 * ║    S11A and S12 limited by tight 0.45 mm air gap.                 ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent includes a 2.80 mm flat cover glass (nd = 1.51680,      ║
 * ║    νd = 64.2) between S15 and the image plane. Excluded from      ║
 * ║    surfaces array; optical path folded into BFD (21.98 mm).       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf35-f14-r",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF35mmF1.4 R",
  subtitle: "US 2014/0285903 A1 EXAMPLE 1 — FUJIFILM / SUZUKI",
  specs: ["8 ELEMENTS / 6 GROUPS", "f ≈ 36.17 mm", "F/1.45", "2ω ≈ 43°", "2 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 36.17,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  patentYear: 2014,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.3,
      fl: 58.1,
      glass: "S-LAH97 (OHARA)",
      apd: false,
      role: "Front positive meniscus — primary power contributor in front group, bends f/1.4 cone gently inward",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: 47.1,
      glass: "S-LAH65VS (OHARA)",
      apd: false,
      role: "Strongest positive element in front group — high-index lanthanum glass reduces curvature needed for power",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: -24.7,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Front group color corrector — flint glass with ν ≈ 30 counteracts chromatic aberration from L11/L12",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: -135.9,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Weak negative meniscus — field flattener / wavefront shaper before aperture stop",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.5176,
      vd: 63.5,
      fl: -59.0,
      glass: "BSC7 family (glass-molded, proprietary PGM)",
      apd: false,
      role: "Aspheric aberration corrector — glass-molded biconcave singlet corrects spherical aberration before triplet",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.883,
      vd: 40.8,
      fl: 12.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Strongest element in system — flat front surface reduces manufacturing cost (patent [0043])",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.5,
      fl: -16.2,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Chromatic corrector core — high-dispersion flint sandwiched between positive elements for achromatic correction",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 27.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Rear positive meniscus — same glass as L22, convex to image for field curvature correction",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front Group GF (positive) ──
    { label: "1", R: 31.767, d: 4.7, nd: 1.755, elemId: 1, sd: 16.8 },
    { label: "2", R: 108.05, d: 0.15, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "3", R: 16.733, d: 5.01, nd: 1.804, elemId: 2, sd: 14.7 },
    { label: "4", R: 25.973, d: 0.2, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "5", R: 27.72, d: 1.35, nd: 1.69895, elemId: 3, sd: 11.3 },
    { label: "6", R: 10.424, d: 6.27, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "7", R: 37.345, d: 1.1, nd: 1.60342, elemId: 4, sd: 9.0 },
    { label: "8", R: 25.375, d: 2.73, nd: 1.0, elemId: 0, sd: 8.8 },

    // ── Aperture Stop ──
    // STO position: patent surface S9, between L14 and L21.
    // Patent lists D9 = 3.20 mm from stop to S10 (L21 front).
    { label: "STO", R: 1e15, d: 3.2, nd: 1.0, elemId: 0, sd: 8.3 },

    // ── Rear Group GR (positive) ──
    { label: "10A", R: -94.514, d: 2.5, nd: 1.5176, elemId: 5, sd: 8.5 },
    { label: "11A", R: 45.548, d: 0.45, nd: 1.0, elemId: 0, sd: 6.5 },

    // ── Cemented triplet T1: L22 + L23 + L24 ──
    { label: "12", R: 1e15, d: 6.72, nd: 1.883, elemId: 6, sd: 9.5 },
    { label: "13", R: -11.174, d: 1.2, nd: 1.76182, elemId: 7, sd: 9.8 },
    { label: "14", R: -124.5, d: 4.99, nd: 1.883, elemId: 8, sd: 9.9 },
    { label: "15", R: -20.516, d: 21.98, nd: 1.0, elemId: 0, sd: 10.4 },
    // d = 21.98 mm: air-equivalent BFD to image (cover glass excluded)
  ],

  /* ── Aspherical coefficients ──
   *  Refitted from patent's odd+even polynomial (A3–A20) to standard even-only
   *  format with spherical base (K = 0). Patent uses parabolic base (K_patent = 0)
   *  with odd-order terms A3, A5, A7, ... that the renderer does not support.
   *
   *  Least-squares refit at sd = 8.0 mm:
   *    S10A: max residual 0.44 µm, RMS 0.15 µm
   *    S11A: max residual 0.35 µm, RMS 0.13 µm
   */
  asph: {
    "10A": {
      K: 0,
      A4: 7.5398e-5,
      A6: -4.9896e-5,
      A8: 4.5017e-6,
      A10: -2.3482e-7,
      A12: 7.4625e-9,
      A14: -1.4611e-10,
      A16: 1.7093e-12,
      A18: -1.0857e-14,
      A20: 2.8399e-17,
    },
    "11A": {
      K: 0,
      A4: 1.897e-4,
      A6: -5.6871e-5,
      A8: 5.4658e-6,
      A10: -3.0315e-7,
      A12: 1.0355e-8,
      A14: -2.2094e-10,
      A16: 2.87e-12,
      A18: -2.0759e-14,
      A20: 6.4103e-17,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens moves as a unit, only BFD changes.
   *  Close focus 0.28 m: extension ≈ 5.37 mm, BFD_close ≈ 27.35 mm.
   */
  var: {
    "15": [21.98, 27.35],
  },
  varLabels: [["15", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (GF)", fromSurface: "1", toSurface: "8" },
    { text: "REAR (GR)", fromSurface: "10A", toSurface: "15" },
  ],
  doublets: [{ text: "T1", fromSurface: "12", toSurface: "15" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "Unit focus — all lens groups move together, only BFD changes. Simple mechanism preserves aberration correction across focus range.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 7,
  apertureBladeRoundedness: 0.7,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
