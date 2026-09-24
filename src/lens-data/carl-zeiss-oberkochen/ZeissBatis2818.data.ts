import type { LensDataInput } from "../../types/optics.js";

/**
 * ZEISS Batis 2.8/18 candidate modeled from JP 2016-188967 A, Example 1.
 *
 * Source/model treatment:
 * - The selected patent example is retained at native scale (design EFL 18.54 mm; no uniform scaling).
 * - The source rear spacing d22 = 25.606 mm is preserved in the dossier as an apparent patent-table error.
 *   The implemented source-precision correction is d22 = 22.083 mm (derived, not printed), stored on surface
 *   22A. The printed cover glass CG (surfaces 23–24: 2.500 mm, nd 1.5168, νd 64.20) and the printed 1.000 mm
 *   air space to the image plane are modeled in `rearPlates` (traced, not drawn). The paraxial equivalent is
 *   the former air-equivalent final gap 22.083 + 2.500/1.5168 + 1.000 = 24.731206751055 mm.
 * - Focus status is PUBLISHED. G12/L121 moves imageward; D14 increases 1.472 -> 2.318 mm and D16 decreases
 *   6.519 -> 5.674 mm. G11 and G13 remain fixed. No production-MFD-driven internal reconstruction is used.
 * - The physical stop diameter is not published. STO semi-diameter 7.559068469367 mm is calibrated from the
 *   patent's infinity FNO=2.88; this calibration is not independent evidence of an unpublished diaphragm size.
 * - The patent publishes no semi-diameters. Modeled SDs use exact d-line ray envelopes through the calibrated
 *   stop with 10% clearance over the axial and +/-0.60 published-half-field construction region, plus a
 *   conservative full-field rim-ray coverage check. The front two elements were refined against Fig. 1 at 600 dpi: S1/S2 = 19.8/14.0 mm and
 *   S3/S4 = 14.4/10.3 mm. S2 is capped below the measured rim to respect the surface-slope limit.
 *   The second Fig. 1 review sets G12 to 8.3 mm and the three rear elements to 10.2/10.8/10.8 mm,
 *   excluding leaders and mechanical steps. Other ray-envelope SDs are retained.
 * - Glass labels are coordinate/class descriptions only; the patent does not establish suppliers or melts.
 *   No per-glass nC/nF/ng/dPgF values are authored because exact identities are not independently established.
 * - The production correlation to the ZEISS Batis 2.8/18 is strong but not manufacturer-confirmed patent attribution.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-batis-18f28",
  maker: "Carl Zeiss Oberkochen",
  name: "ZEISS BATIS 18mm f/2.8",
  subtitle: "JP 2016-188967 A Example 1 — strong Batis 2.8/18 correlation; attribution not manufacturer-confirmed",
  specs: [
    "11 ELEMENTS / 10 GROUPS",
    "18.54 mm DESIGN / 18 mm MARKETED",
    "F/2.88 DESIGN / f/2.8 MARKETED",
    "100.58° PATENT FULL FIELD",
    "8 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 18,
  focalLengthDesign: 18.541544365154,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2016-188967 A",
  patentAuthors: ["Keisuke Omori"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2016,
  elementCount: 11,
  groupCount: 10,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 100.58,
    maxTraceFieldDeg: 50.29,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L111",
      diagramLabel: "L111",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5935,
      vd: 67,
      indexReference: "d",
      fl: -60.891629,
      glass: "J-PSKH4 catalog proxy; 593670 class (supplier unconfirmed)",
      apd: false,
      role: "Front negative meniscus supporting wide-angle coverage.",
    },
    {
      id: 2,
      name: "L112",
      diagramLabel: "L112",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: -49.195131,
      glass: "H-FK61 catalog proxy; 497816 low-dispersion crown class (supplier unconfirmed)",
      apd: "inferred",
      apdNote: "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
    },
    {
      id: 3,
      name: "L113",
      diagramLabel: "L113",
      label: "Element 3",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.592,
      vd: 67.02,
      indexReference: "d",
      fl: -29.263186,
      glass: "M-PCD51 catalog proxy; 592670 molded PCD51/Q-PSKH4S class (supplier unconfirmed)",
      apd: false,
    },
    {
      id: 4,
      name: "L114",
      diagramLabel: "L114",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.881,
      vd: 40.14,
      indexReference: "d",
      fl: 43.391621,
      glass: "881401 TAFD33 class (supplier unconfirmed)",
      apd: false,
    },
    {
      id: 5,
      name: "L115",
      diagramLabel: "L115",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.881,
      vd: 40.14,
      indexReference: "d",
      fl: -35.916349,
      glass: "881401 TAFD33 class (supplier unconfirmed)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 6,
      name: "L116",
      diagramLabel: "L116",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.4875,
      vd: 70.44,
      indexReference: "d",
      fl: 20.910194,
      glass: "H-QK3L catalog proxy; 487704 low-index crown class (supplier unconfirmed)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 7,
      name: "L117",
      diagramLabel: "L117",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      indexReference: "d",
      fl: 23.842775,
      glass: "H-FK61 catalog proxy; 497816 molded low-dispersion class (supplier unconfirmed)",
      apd: "inferred",
      apdNote: "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
    },
    {
      id: 8,
      name: "L121",
      diagramLabel: "L121",
      label: "Element 8",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.729,
      vd: 54.04,
      indexReference: "d",
      fl: -45.915551,
      glass: "M-TAC80 catalog proxy; 729540 high-index low-dispersion molded class (supplier unconfirmed)",
      apd: false,
      role: "Single-element negative inner-focus group G12.",
    },
    {
      id: 9,
      name: "L131",
      diagramLabel: "L131",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: 80.283147,
      glass: "H-FK61 catalog proxy; 497816 low-dispersion crown class (supplier unconfirmed)",
      apd: "inferred",
      apdNote: "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
    },
    {
      id: 10,
      name: "L132",
      diagramLabel: "L132",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: 49.630236,
      glass: "H-FK61 catalog proxy; 497816 low-dispersion crown class (supplier unconfirmed)",
      apd: "inferred",
      apdNote: "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
    },
    {
      id: 11,
      name: "L133",
      diagramLabel: "L133",
      label: "Element 11",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.882,
      vd: 37.22,
      indexReference: "d",
      fl: -28.425101,
      glass: "M-TAFD307 catalog proxy; 882372 molded TAFD307 class (supplier unconfirmed)",
      apd: false,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 28.832, d: 2, nd: 1.5935, elemId: 1, sd: 19.8 },
    { label: "2", R: 15.623, d: 6.886, nd: 1, elemId: 0, sd: 14.0 },
    { label: "3", R: 29.397, d: 1.5, nd: 1.497, elemId: 2, sd: 14.4 },
    { label: "4", R: 13.122, d: 5.883, nd: 1, elemId: 0, sd: 10.3 },
    { label: "5A", R: 52.568, d: 1.3, nd: 1.592, elemId: 3, sd: 9.5 },
    { label: "6A", R: 12.91, d: 3.068, nd: 1, elemId: 0, sd: 9.1 },
    { label: "7", R: 30.333, d: 2.265, nd: 1.881, elemId: 4, sd: 9.5 },
    { label: "8", R: 141.737, d: 12.099, nd: 1, elemId: 0, sd: 9.4 },
    { label: "9", R: 24.676, d: 1, nd: 1.881, elemId: 5, sd: 9.3 },
    { label: "10", R: 13.601, d: 5.292, nd: 1.4875, elemId: 6, sd: 8.8 },
    { label: "11", R: -35.502, d: 1.3, nd: 1, elemId: 0, sd: 8.8 },
    { label: "STO", R: 1e15, d: 2.425, nd: 1, elemId: 0, sd: 7.559068469367 },
    { label: "13A", R: 30.85, d: 4.386, nd: 1.4971, elemId: 7, sd: 9.3 },
    { label: "14A", R: -18.338, d: 1.472, nd: 1, elemId: 0, sd: 9.4 },
    { label: "15A", R: 45.781, d: 0.8, nd: 1.729, elemId: 8, sd: 8.3 },
    { label: "16A", R: 19.193, d: 6.519, nd: 1, elemId: 0, sd: 8.3 },
    { label: "17", R: -68.737, d: 2.535, nd: 1.497, elemId: 9, sd: 10.2 },
    { label: "18", R: -25.555, d: 0.1, nd: 1, elemId: 0, sd: 10.2 },
    { label: "19", R: -329.577, d: 4.036, nd: 1.497, elemId: 10, sd: 10.8 },
    { label: "20", R: -23.042, d: 0.329, nd: 1, elemId: 0, sd: 10.8 },
    { label: "21A", R: -400, d: 1.2, nd: 1.882, elemId: 11, sd: 10.8 },
    // Last surface: corrected gap to the cover glass CG (patent prints 25.606; see header)
    { label: "22A", R: 26.785, d: 22.083, nd: 1, elemId: 0, sd: 10.8 },
  ],

  /* ── Cover glass CG (patent surfaces 23–24): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source:
        "JP 2016-188967 A, Example 1 surfaces 23–24 (¶0095); preceding d22 = 22.083 is a derived correction of the printed 25.606",
    },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "5A": {
      K: 0,
      A4: -2.6625e-5,
      A6: 3.0031e-7,
      A8: -1.7989e-9,
      A10: 5.7847e-12,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: -6.8334e-5,
      A6: 8.4364e-9,
      A8: -1.2228e-9,
      A10: -9.8374e-12,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -2.2269e-5,
      A6: 1.1253e-9,
      A8: -1.0562e-9,
      A10: -3.1969e-12,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 5.1791e-5,
      A6: -5.2286e-7,
      A8: 4.0083e-9,
      A10: 2.3692e-11,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 2.0348e-5,
      A6: -1.1141e-6,
      A8: 1.4175e-8,
      A10: -5.7786e-11,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 2.158e-5,
      A6: -8.9505e-7,
      A8: 1.278e-8,
      A10: -5.7413e-11,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -2.4151e-5,
      A6: -1.3394e-7,
      A8: 2.2182e-9,
      A10: -7.5852e-12,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: -3.5206e-6,
      A6: -1.2925e-7,
      A8: 2.2655e-9,
      A10: -8.5817e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published focus spacings ── */
  var: {
    "14A": [1.472, 2.318],
    "16A": [6.519, 5.674],
  },
  varLabels: [
    ["14A", "D(14)"],
    ["16A", "D(16)"],
  ],

  groups: [
    { text: "G11", fromSurface: "1", toSurface: "14A" },
    { text: "G12 FOCUS", fromSurface: "15A", toSurface: "16A" },
    { text: "G13F", fromSurface: "17", toSurface: "20" },
    { text: "G13R", fromSurface: "21A", toSurface: "22A" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "PUBLISHED inner focus: G12/L121 translates 0.846 mm imageward from infinity to the patent 158.000 mm close state while G11/G13 remain fixed. The patent does not state the 158 mm datum; the supported front-vertex interpretation normalizes to the manufacturer's 0.25 m sensor-plane MFD. No internal focus reconstruction is used.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
