import type { LensDataInput } from "../../types/optics.js";

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
 * ║    Patent uses odd+even powers A3·h³ through A20·h²⁰ and KA = 0. ║
 * ║    The exact Table 2 coefficients are stored below. Its conic    ║
 * ║    convention converts to the standard renderer constant K = −1. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated via combined     ║
 * ║    marginal ray (f/1.45) + chief ray (60% field) trace with ~5–8% ║
 * ║    clearance. Constrained by 52 mm filter thread (front group),   ║
 * ║    edge thickness ≥ 0.3 mm, and cross-gap sag overlap ≤ gap×1.1. ║
 * ║    S10A is limited to 8.4 mm by exact-profile rim slope; S11A    ║
 * ║    and S12 are limited by the tight 0.45 mm air gap.             ║
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
  name: "FUJIFILM FUJINON XF 35mm f/1.4 R",
  subtitle: "US 2014/0285903 A1 EXAMPLE 1 — FUJIFILM / SUZUKI",
  specs: ["8 ELEMENTS / 6 GROUPS", "f ≈ 36.17 mm", "F/1.45", "2ω ≈ 43°", "2 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 36.17,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2014/0285903 A1",
  patentAuthors: ["Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
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
      glass: "D-K59 (CDGM catalog equivalent; production supplier unspecified)",
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
    { label: "4", R: 25.973, d: 0.2, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "5", R: 27.72, d: 1.35, nd: 1.69895, elemId: 3, sd: 11.3 },
    { label: "6", R: 10.424, d: 6.27, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "7", R: 37.345, d: 1.1, nd: 1.60342, elemId: 4, sd: 9.0 },
    { label: "8", R: 25.375, d: 2.73, nd: 1.0, elemId: 0, sd: 8.8 },

    // ── Aperture Stop ──
    // STO position: patent surface S9, between L14 and L21.
    // Patent lists D9 = 3.20 mm from stop to S10 (L21 front).
    { label: "STO", R: 1e15, d: 3.2, nd: 1.0, elemId: 0, sd: 8.3 },

    // ── Rear Group GR (positive) ──
    { label: "10A", R: -94.514, d: 2.5, nd: 1.5176, elemId: 5, sd: 8.4 },
    { label: "11A", R: 45.548, d: 0.45, nd: 1.0, elemId: 0, sd: 6.5 },

    // ── Cemented triplet T1: L22 + L23 + L24 ──
    { label: "12", R: 1e15, d: 6.72, nd: 1.883, elemId: 6, sd: 9.5 },
    { label: "13", R: -11.174, d: 1.2, nd: 1.76182, elemId: 7, sd: 9.8 },
    { label: "14", R: -124.5, d: 4.99, nd: 1.883, elemId: 8, sd: 9.9 },
    { label: "15", R: -20.516, d: 21.98, nd: 1.0, elemId: 0, sd: 10.4 },
    // d = 21.98 mm: air-equivalent BFD to image (cover glass excluded)
  ],

  /* ── Exact Example 1, Table 2 aspherical coefficients ──
   *  Patent denominator sqrt(1 - KA*C²h²), so renderer K = KA - 1 = -1.
   */
  asph: {
    "10A": {
      K: -1,
      A3: 1.4267934e-3,
      A4: -1.6625706e-3,
      A5: 7.1056683e-4,
      A6: -9.1063817e-5,
      A7: -6.7671475e-5,
      A8: 3.1530346e-5,
      A9: -2.7404199e-6,
      A10: -1.2148981e-6,
      A11: 2.9053673e-7,
      A12: 6.3508375e-9,
      A13: -7.9573382e-9,
      A14: 4.5951622e-10,
      A15: 9.3989975e-11,
      A16: -9.7762088e-12,
      A17: -4.3352953e-13,
      A18: 7.1170331e-14,
      A19: 2.5581917e-16,
      A20: -1.6083703e-16,
    },
    "11A": {
      K: -1,
      A3: 1.4075342e-3,
      A4: -1.5407051e-3,
      A5: 7.2833847e-4,
      A6: -1.3764849e-4,
      A7: -3.4723387e-5,
      A8: 2.1553742e-5,
      A9: -2.4723865e-6,
      A10: -6.0987942e-7,
      A11: 1.7824931e-7,
      A12: -3.5081942e-9,
      A13: -3.6689473e-9,
      A14: 3.806084e-10,
      A15: 2.1235855e-11,
      A16: -5.4237286e-12,
      A17: 1.6515932e-13,
      A18: 2.1078707e-14,
      A19: -1.6918406e-15,
      A20: 3.4763829e-17,
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
