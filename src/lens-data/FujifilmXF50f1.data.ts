// FujifilmXF50f1.data.ts
// FUJIFILM FUJINON XF 50mm f/1.0 R WR
// Patent: US 2021/0231927 A1 (Kawamura & Cho, Fujifilm Corporation)
// Example 3 — 12 elements in 9 groups, inner focus (G2 moves)
//
// Prescription at patent scale (f ≈ 49.549 mm). Not rescaled to marketed 50 mm.
// Semi-diameters estimated via combined marginal + chief ray trace at f/1.03,
// ω = 15.7°, constrained by 77 mm filter thread and edge thickness ≥ 0.5 mm.
// Front-group SDs accept partial field vignetting at f/1.0 (consistent with
// production lens behavior).
//
// Aspherical surfaces use the patent's KA convention: KA = 1 + K.
// Patent KA = 1.0 → K = 0 (spherical base conic). Patent coefficients extend
// to 20th order and include odd-power terms (A3, A5, …). Only even-order
// coefficients A4–A14 are included here; odd-order and higher-even (A16–A20)
// terms are omitted. A3 = 0 on both surfaces. The first omitted odd term (A5)
// is non-negligible — the aspherical profile at large aperture heights is
// approximate.

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "fujifilm-xf50-f1",
  name: "FUJIFILM FUJINON XF 50mm f/1.0 R WR",
  maker: "Fujifilm",
  subtitle: "US 2021/0231927 A1 — Example 3",
  focalLengthMarketing: 50,
  focalLengthDesign: 49.549,
  apertureMarketing: 1.0,
  apertureDesign: 1.03,
  patentYear: 2021,
  elementCount: 12,
  groupCount: 9,
  specs: [
    "12 elements / 9 groups",
    "1 aspherical element (2 aspherical surfaces)",
    "2 ED elements",
    "Inner focus (G2 moves)",
    "f = 49.549 mm  FNo = 1.03  2ω = 31.4°",
  ],
  focusDescription:
    "Inner focus — G2 (5 elements, 2 cemented doublets) moves 4.44 mm toward object from ∞ to 0.7 m. G1 and stop remain stationary.",

  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1 (L1a)",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.23,
      fl: -76.1,
      glass: "S-FPM3 (Ohara)",
      role: "Front negative element — concave first surface diverges the on-axis beam before L1b. Part of the wide-conversion sub-structure (Gs1) that suppresses sagittal coma at the ~48 mm entrance pupil.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2 (L1b) — ED ①",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 74.3,
      glass: "ED fluorophosphate crown (unidentified)",
      apd: "inferred",
      apdNote: "ΔθgF = +0.014; LB positive lens per patent — maximum νd among all positive lenses before stop",
      role: "LB positive lens (patent designation). Second unit (Gs2) of the wide-conversion structure. Reconverges the divergent beam from L1a. Low-dispersion ED glass corrects longitudinal chromatic aberration.",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3 (L1c) — ED ②",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      fl: 86.5,
      glass: "ED fluorophosphate crown (unidentified)",
      apd: "inferred",
      apdNote: "ΔθgF = +0.014; LC positive lens per patent — second-highest νd among positive lenses before stop",
      role: "LC positive lens (patent designation). Shares the positive-power burden with L1b in low-dispersion glass, keeping curvatures moderate to suppress spherical aberration.",
    },
    {
      id: 4,
      name: "L1d",
      label: "Element 4 (L1d) — LA",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: 158.4,
      glass: "S-NPH53 (Ohara)",
      apd: "patent",
      apdNote:
        "ΔθgF = +0.047; LA positive lens per patent — high-index high-dispersion element for secondary spectrum correction",
      role: "LA positive lens — the patent's core innovation element. Strongly anomalous partial dispersion balances the ED elements' secondary spectrum. Very high nd (1.959) prevents excessive surface curvatures.",
    },
    {
      id: 5,
      name: "L1e",
      label: "Element 5 (L1e)",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.52,
      fl: 114.7,
      glass: "LaK (nd=1.788, νd=47.5)",
      cemented: "D1",
      role: "Positive component of cemented doublet D1. Contributes chromatic correction within G1 and controls Petzval sum.",
    },
    {
      id: 6,
      name: "L1f",
      label: "Element 6 (L1f)",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      fl: -74.8,
      glass: "NPH-class short flint (nd=1.893, νd=20.4)",
      cemented: "D1",
      role: "Negative flint component of doublet D1. Strong anomalous dispersion (ΔθgF = +0.031) aids secondary spectrum correction. Net doublet power is weakly negative (f ≈ −431 mm), contributing field-flattening Petzval curvature.",
    },
    {
      id: 7,
      name: "L1g",
      label: "Element 7 (L1g)",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.76,
      fl: -40.9,
      glass: "SF/NPH (nd=1.808, νd=22.8)",
      role: "Last element of G1 before the stop. Strongest negative power in G1 — provides Petzval field flattening and shapes the pupil geometry entering the stop.",
    },
    {
      id: 8,
      name: "L2a",
      label: "Element 8 (L2a) — Aspherical",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.68863,
      vd: 31.2,
      fl: -97.5,
      glass: "NbF/SF (nd=1.689, νd=31.2)",
      role: "Sole aspherical element — both surfaces carry polynomial aspherical figuring (even-order A4–A14 in data file; patent extends to A20 with odd terms). Primary corrector for residual spherical aberration and higher-order coma. Positioned immediately behind the stop.",
    },
    {
      id: 9,
      name: "L2b",
      label: "Element 9 (L2b)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.22,
      fl: 22.3,
      glass: "LaF (nd=1.883, νd=39.2)",
      cemented: "D2",
      role: "Positive crown of cemented doublet D2 in the focusing group. Paired with L2c for chromatic correction that remains stable during focus travel.",
    },
    {
      id: 10,
      name: "L2c",
      label: "Element 10 (L2c)",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      fl: -23.3,
      glass: "NbF (nd=1.699, νd=30.1)",
      cemented: "D2",
      role: "Negative flint of doublet D2. Nearly afocal combined power (f ≈ +306 mm) — acts as a chromatic corrector with minimal net power change during focusing.",
    },
    {
      id: 11,
      name: "L2d",
      label: "Element 11 (L2d)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.22,
      fl: 19.4,
      glass: "LaF (nd=1.883, νd=39.2)",
      cemented: "D3",
      role: "Positive crown of cemented doublet D3 — the primary power-carrying doublet of G2. Dominates focus sensitivity.",
    },
    {
      id: 12,
      name: "L2e",
      label: "Element 12 (L2e)",
      type: "Negative Meniscus",
      nd: 1.62005,
      vd: 36.35,
      fl: -55.3,
      glass: "TiF/F (nd=1.620, νd=36.4)",
      cemented: "D3",
      role: "Negative meniscus of doublet D3. Combined doublet f ≈ +31 mm — provides final beam convergence toward the image plane.",
    },
  ],

  surfaces: [
    // ─── G1: First lens group (stationary) ───
    // L1a — Biconcave negative
    { label: "1", R: -138.62827, d: 2.4, nd: 1.54072, elemId: 1, sd: 30.0 },
    { label: "2", R: 58.55723, d: 10.03, nd: 1.0, elemId: 0, sd: 30.0 },
    // L1b — Biconvex positive (ED ①)
    { label: "3", R: 75.89616, d: 11.8, nd: 1.59282, elemId: 2, sd: 30.5 },
    { label: "4", R: -105.01257, d: 0.2, nd: 1.0, elemId: 0, sd: 30.5 },
    // L1c — Positive meniscus (ED ②)
    { label: "5", R: 45.45982, d: 10.8, nd: 1.59282, elemId: 3, sd: 30.0 },
    { label: "6", R: 399.21443, d: 0.6, nd: 1.0, elemId: 0, sd: 28.5 },
    // L1d — Positive meniscus (LA lens)
    { label: "7", R: 44.95362, d: 4.32, nd: 1.95906, elemId: 4, sd: 27.5 },
    { label: "8", R: 63.84817, d: 0.6, nd: 1.0, elemId: 0, sd: 25.5 },
    // L1e + L1f — Cemented doublet D1
    { label: "9", R: 36.12697, d: 5.27, nd: 1.788, elemId: 5, sd: 25.0 },
    { label: "10", R: 60.177, d: 1.8, nd: 1.89286, elemId: 6, sd: 21.0 },
    { label: "11", R: 31.65635, d: 4.565, nd: 1.0, elemId: 0, sd: 20.0 },
    // L1g — Negative meniscus
    { label: "12", R: 177.12407, d: 1.52, nd: 1.80809, elemId: 7, sd: 16.5 },
    { label: "13", R: 27.86122, d: 6.406, nd: 1.0, elemId: 0, sd: 16.0 },
    // ─── Aperture stop ───
    { label: "STO", R: 1e15, d: 11.466, nd: 1.0, elemId: 0, sd: 13.9 },
    // ─── G2: Second lens group (moves during focus) ───
    // L2a — Aspherical negative meniscus (concave toward object)
    { label: "15A", R: -14.64464, d: 2.55, nd: 1.68863, elemId: 8, sd: 10.7 },
    { label: "16A", R: -18.73058, d: 0.2, nd: 1.0, elemId: 0, sd: 9.9 },
    // L2b + L2c — Cemented doublet D2
    { label: "17", R: 49.66071, d: 6.45, nd: 1.883, elemId: 9, sd: 15.0 },
    { label: "18", R: -32.522, d: 1.21, nd: 1.69895, elemId: 10, sd: 15.0 },
    { label: "19", R: 32.522, d: 0.82, nd: 1.0, elemId: 0, sd: 14.5 },
    // L2d + L2e — Cemented doublet D3
    { label: "20", R: 42.22428, d: 8.8, nd: 1.883, elemId: 11, sd: 16.0 },
    { label: "21", R: -28.754, d: 1.21, nd: 1.62005, elemId: 12, sd: 16.0 },
    { label: "22", R: -178.14293, d: 18.251, nd: 1.0, elemId: 0, sd: 16.0 },
    // d = DD[22] (14.401) + PP (2.850) + air (1.000) = 18.251 mm
  ],

  asph: {
    // Patent sag: Z = C·h²/{1+√(1−KA·C²·h²)} + Σ Am·h^m, m=3..20
    // KA = 1.0 → K = 0. Even-order A4–A14 only; odd-order and A16–A20 omitted.
    "15A": {
      K: 0,
      A4: 5.0823068e-5,
      A6: -1.1665918e-6,
      A8: -8.5462646e-9,
      A10: 5.8946218e-10,
      A12: -7.4371184e-12,
      A14: 3.7621265e-14,
    },
    "16A": {
      K: 0,
      A4: 3.9661172e-5,
      A6: -1.924187e-6,
      A8: 2.7709406e-8,
      A10: -2.2702122e-11,
      A12: -3.5432557e-12,
      A14: 4.3918443e-14,
    },
  },

  var: {
    STO: [11.466, 7.025],
    "22": [18.251, 22.692],
  },
  varLabels: [
    ["STO", "G1–G2"],
    ["22", "BF"],
  ],

  groups: [
    { text: "G1 — stationary", fromSurface: "1", toSurface: "13" },
    { text: "G2 — focus (moves →)", fromSurface: "15A", toSurface: "22" },
  ],

  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  closeFocusM: 0.7,
  nominalFno: 1.0,
  fstopSeries: [1.0, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.5,
  yScFill: 0.55,
  maxFstop: 16,
} satisfies LensDataInput;

export default LENS_DATA;
