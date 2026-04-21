import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 35mm f/1.2 S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2025-52870A Example 1 (Nikon / Harada, Shimada). ║
 * ║  Large-aperture wide-angle prime for Nikon Z mount mirrorless.     ║
 * ║  17 elements / 15 groups, 5 aspherical surfaces (4 elements).     ║
 * ║  Focus: floating (multi-focus) — two groups in rear move           ║
 * ║         independently (F1 negative, F2 positive).                  ║
 * ║  Front group A fixed; rear group B contains F1, F2, and fixed R.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent. Estimated via combined marginal + chief   ║
 * ║    ray trace (y-nu method, f/1.2 entrance pupil, 32.7° half-      ║
 * ║    field) with ~8% mechanical clearance. Front-group SDs           ║
 * ║    constrained by 82mm filter thread (max element diameter         ║
 * ║    ~56 mm) and rear-surface curvature limits (sd/|R| < 0.90).     ║
 * ║    Rear-group SDs follow marginal ray heights at f/1.2.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-z-35f12s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 35mm f/1.2 S",
  subtitle: "JP 2025-52870A EXAMPLE 1 — NIKON / HARADA, SHIMADA",
  specs: [
    "17 ELEMENTS / 15 GROUPS",
    "f = 34.4 mm (patent) · 35 mm (marketed)",
    "F/1.23 (patent) · F/1.2 (marketed)",
    "2ω ≈ 65.4° (patent) · 63° (marketed)",
    "3 ED + 1 ASPHERICAL ED + 3 ASPHERICAL ELEMENTS",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.4,
  apertureMarketing: 1.2,
  apertureDesign: 1.23,
  patentYear: 2025,
  elementCount: 17,
  groupCount: 15,

  /* ── Elements ── */
  elements: [
    // ── Front Group A — Object-Side Subgroup AF (Negative) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.64,
      vd: 60.1,
      fl: -60.5,
      glass: "LaK family (640601, CDGM H-LAK3)",
      apd: false,
      role: "Front diverging meniscus; begins negative AF subgroup. Image-side surface R1 = 31.1 mm is the steepest convex surface in the front section.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5168,
      vd: 64.1,
      fl: -137.7,
      glass: "BK7 family (517641, Schott N-BK7 / OHARA S-BSL7)",
      apd: false,
      role: "Weak negative aspherical corrector; both surfaces carry polynomial profiles to manage higher-order spherical aberration and coma at f/1.2.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.92119,
      vd: 24.0,
      fl: +99.5,
      glass: "Ultra-high-index dense flint (921240, HOYA TAFD5F / HIKARI E-FDS3HT)",
      apd: false,
      role: "Ultra-high-index positive meniscus. Provides positive power with low Petzval contribution thanks to nd = 1.921. High dispersion balanced by downstream ED elements.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.3,
      fl: -54.1,
      glass: "S-NBH52 (738323, OHARA S-NBH52)",
      apd: false,
      role: "Patent Ln1: negative lens adjacent to the four positive lenses. Object-side surface R2 = −38.6 mm is the steepest concave-toward-object surface in the front section. R1/R2 pair (with L11) controls Petzval sum.",
    },
    // ── Front Group A — Image-Side Subgroup AR (Positive) ──
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.95375,
      vd: 32.3,
      fl: +65.5,
      glass: "S-LAH79 (954323, OHARA S-LAH79)",
      apd: false,
      role: "Patent Lens H (condition 1–2): ultra-high-index plano-convex. First of the four consecutive positive lenses (L1). Flat front surface; all refracting power from rear surface R = −62.5 mm.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive (Symmetric)",
      nd: 1.59349,
      vd: 67.0,
      fl: +78.4,
      glass: "Phosphate crown ED (593670, OHARA S-FPM2 approx.)",
      apd: false,
      role: "ED element; second of four positive lenses (L2). Symmetric biconvex (R1 = +91.1, R2 = −91.1) minimizes coma. Shape factor (R22+R21)/(R22−R21) = 0.000.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: +118.0,
      glass: "Phosphate crown ED (593670, same as L16)",
      apd: false,
      role: "ED element; third of four positive lenses. Weaker positive power; meniscus form manages ray bundle convergence.",
    },
    {
      id: 8,
      name: "L18",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: +64.5,
      glass: "Phosphate crown ED (593679, OHARA L-PHM52 nearest)",
      apd: false,
      cemented: "D1",
      role: "ED element; fourth (last) of four positive lenses. Cemented to L19 to form achromatic doublet. Strong positive power (f = +64.5) before the negative corrector L19.",
    },
    {
      id: 9,
      name: "L19",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -37.4,
      glass: "S-NBH52 (738323, OHARA S-NBH52)",
      apd: "patent",
      apdNote: "θgF = 0.5896 (patent-listed); condition (11) value = 0.657",
      cemented: "D1",
      role: "Patent Ln2: negative element at image side of front group. Cemented to L18 forming achromatic doublet (combined f = −98.6 mm). θgF anomalous partial dispersion corrects secondary spectrum.",
    },
    // ── Rear Group B — Focus Group F1 (Negative) ──
    {
      id: 10,
      name: "L21",
      label: "Element 10",
      type: "Plano-Concave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -53.1,
      glass: "S-NBH55 (720347, OHARA S-NBH55)",
      apd: false,
      role: "Strong negative; begins rear group by diverging beam. Concave toward object, flat on image side. Part of F1 focus group.",
    },
    {
      id: 11,
      name: "L22",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: +73.0,
      glass: "Phosphate crown ED (593679, OHARA L-PHM52 nearest)",
      apd: false,
      role: "Positive element in F1 focus group. F1 combined focal length = −219 mm (very weak negative) — acts as aberration variator during focusing.",
    },
    // ── Rear Group B — Focus Group F2 (Positive) ──
    {
      id: 12,
      name: "L31",
      label: "Element 12",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59294,
      vd: 67.9,
      fl: +78.9,
      glass: "PGM phosphate crown ED (593679, OHARA L-PHM52)",
      apd: false,
      role: "Aspherical ED element (production spec). L-prefix = PGM glass-molded asphere. Rear surface (s24) aspherical. Focus group F2 — aspherical correction tracks with focus position.",
    },
    {
      id: 13,
      name: "L32",
      label: "Element 13",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.77503,
      vd: 47.3,
      fl: +93.4,
      glass: "PGM lanthanum (775473, OHARA L-LAH85)",
      apd: false,
      role: "Second PGM-molded asphere in F2. Front surface (s25) aspherical with highest-order coefficients (up to A16).",
    },
    // ── Rear Group B — Final Group R (Negative) ──
    {
      id: 14,
      name: "L41",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: +135.6,
      glass: "Phosphate crown ED (593679, OHARA L-PHM52 nearest)",
      apd: false,
      role: "Weak positive meniscus beginning the final group R.",
    },
    {
      id: 15,
      name: "L42",
      label: "Element 15",
      type: "Plano-Convex Positive",
      nd: 1.94594,
      vd: 17.98,
      fl: +95.2,
      glass: "S-NPH7 (946180, OHARA S-NPH7)",
      apd: "patent",
      apdNote:
        "θgF = 0.6546 (patent-listed); condition (14) value = 0.692; strong anomalous partial dispersion for secondary spectrum correction",
      cemented: "D2",
      role: "Patent Lens Lp: ultra-high-index, ultra-high-dispersion glass with strong anomalous partial dispersion. Cemented to L43. Corrects secondary chromatic aberration near image plane.",
    },
    {
      id: 16,
      name: "L43",
      label: "Element 16",
      type: "Plano-Concave Negative",
      nd: 1.7888,
      vd: 28.4,
      fl: -47.9,
      glass: "S-NBH56 (789284, OHARA S-NBH56)",
      apd: false,
      cemented: "D2",
      role: "Cemented to L42 forming negative achromat with anomalous dispersion correction (combined f = −102.7 mm). Flat junction; all negative power from rear surface R = +37.8.",
    },
    {
      id: 17,
      name: "L44",
      label: "Element 17",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.62372,
      vd: 58.4,
      fl: -156.1,
      glass: "Barium crown / LaK family (624584, no exact catalog match)",
      apd: false,
      role: "Final glass element. Front surface (s32) aspherical. Performs telecentricity correction and residual field aberration management.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── L11 (Negative meniscus) ──
    { label: "1", R: 163.28336, d: 2.5, nd: 1.64, elemId: 1, sd: 27.5 },
    { label: "2", R: 31.10505, d: 13.39, nd: 1.0, elemId: 0, sd: 26.3 },
    // ── L12 (Aspherical negative meniscus) ──
    { label: "3A", R: 149.89871, d: 3.0, nd: 1.5168, elemId: 2, sd: 27.0 },
    { label: "4A", R: 47.93253, d: 3.06, nd: 1.0, elemId: 0, sd: 26.0 },
    // ── L13 (Ultra-high-index positive meniscus) ──
    { label: "5", R: 73.4831, d: 5.4, nd: 1.92119, elemId: 3, sd: 27.0 },
    { label: "6", R: 357.5441, d: 12.73, nd: 1.0, elemId: 0, sd: 27.0 },
    // ── L14 (Negative meniscus, Ln1) ──
    { label: "7", R: -38.63142, d: 2.1, nd: 1.738, elemId: 4, sd: 26.4 },
    { label: "8", R: -1220.6706, d: 0.82, nd: 1.0, elemId: 0, sd: 26.0 },
    // ── L15 (Plano-convex, Lens H, S-LAH79) ──
    { label: "9", R: 1e15, d: 7.85, nd: 1.95375, elemId: 5, sd: 25.0 },
    { label: "10", R: -62.49727, d: 0.3, nd: 1.0, elemId: 0, sd: 25.0 },
    // ── L16 (Symmetric biconvex, ED) ──
    { label: "11", R: 91.13243, d: 10.25, nd: 1.59349, elemId: 6, sd: 26.0 },
    { label: "12", R: -91.13243, d: 0.2, nd: 1.0, elemId: 0, sd: 25.5 },
    // ── L17 (Positive meniscus, ED) ──
    { label: "13", R: 54.79591, d: 6.75, nd: 1.59349, elemId: 7, sd: 25.0 },
    { label: "14", R: 240.05962, d: 0.2, nd: 1.0, elemId: 0, sd: 24.0 },
    // ── L18 + L19 cemented doublet (D1) ──
    { label: "15", R: 116.72066, d: 10.25, nd: 1.59319, elemId: 8, sd: 24.0 },
    { label: "16", R: -55.03, d: 1.6, nd: 1.738, elemId: 9, sd: 23.0 },
    { label: "17", R: 56.1782, d: 5.63, nd: 1.0, elemId: 0, sd: 22.0 },
    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 19.089, nd: 1.0, elemId: 0, sd: 14.0 },
    // ── L21 (Plano-concave negative, F1) ──
    { label: "19", R: -38.22319, d: 1.5, nd: 1.72047, elemId: 10, sd: 16.5 },
    { label: "20", R: 1e15, d: 0.2, nd: 1.0, elemId: 0, sd: 16.5 },
    // ── L22 (Biconvex positive, F1) ──
    { label: "21", R: 63.64177, d: 6.0, nd: 1.59319, elemId: 11, sd: 16.5 },
    { label: "22", R: -130.91271, d: 2.019, nd: 1.0, elemId: 0, sd: 16.5 },
    // ── L31 (Biconvex positive, aspherical ED, F2) ──
    { label: "23", R: 49.41555, d: 8.0, nd: 1.59294, elemId: 12, sd: 16.0 },
    { label: "24A", R: -821.27474, d: 3.13, nd: 1.0, elemId: 0, sd: 15.0 },
    // ── L32 (Positive meniscus, aspherical, F2) ──
    { label: "25A", R: 65.70231, d: 3.75, nd: 1.77503, elemId: 13, sd: 14.5 },
    { label: "26", R: 690.07952, d: 2.0, nd: 1.0, elemId: 0, sd: 14.0 },
    // ── L41 (Positive meniscus, R group) ──
    { label: "27", R: 60.10155, d: 4.0, nd: 1.59319, elemId: 14, sd: 13.0 },
    { label: "28", R: 231.68418, d: 0.31, nd: 1.0, elemId: 0, sd: 12.0 },
    // ── L42 + L43 cemented doublet (D2) ──
    { label: "29", R: 90.05931, d: 4.05, nd: 1.94594, elemId: 15, sd: 12.0 },
    { label: "30", R: 1e15, d: 1.4, nd: 1.7888, elemId: 16, sd: 11.0 },
    { label: "31", R: 37.80163, d: 7.53, nd: 1.0, elemId: 0, sd: 10.5 },
    // ── L44 (Biconcave negative, aspherical, R group) ──
    { label: "32A", R: -124.60117, d: 2.0, nd: 1.62372, elemId: 17, sd: 10.5 },
    // Last surface: d = BFD to image plane (through filter, air-equivalent)
    // Patent: d33 = 10.38 (to filter) + 1.6/1.5168 (filter glass) + 1.0 (air) ≈ 12.43 air-equiv
    // Cover glass excluded; fold optical path into BFD
    { label: "33", R: 448.63838, d: 12.434, nd: 1.0, elemId: 0, sd: 10.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 0,
      A4: -1.9013e-6,
      A6: 5.9447e-9,
      A8: -7.3738e-12,
      A10: 6.8217e-15,
      A12: -2.333e-18,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: -4.72665e-6,
      A6: 6.15115e-9,
      A8: -1.3635e-11,
      A10: 1.8812e-14,
      A12: -1.5668e-17,
      A14: 4.21e-21,
    },
    "24A": {
      K: 0,
      A4: -1.45539e-5,
      A6: 3.33136e-8,
      A8: -7.3805e-11,
      A10: 1.2786e-13,
      A12: -1.3624e-16,
      A14: 8.2e-20,
      A16: -3.0514e-23,
    },
    "25A": {
      K: 0,
      A4: -1.73911e-5,
      A6: 2.29349e-8,
      A8: -7.947e-11,
      A10: 2.3428e-13,
      A12: -5.4062e-16,
      A14: 8.6287e-19,
      A16: -6.3291e-22,
    },
    "32A": {
      K: 0,
      A4: -6.15151e-6,
      A6: -3.25835e-10,
      A8: 1.0856e-11,
      A10: -5.9078e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating focus) ── */
  var: {
    STO: [19.089, 13.738],
    "22": [2.019, 3.693],
    "26": [2.0, 5.676],
  },
  varLabels: [
    ["STO", "D(STO)"],
    ["22", "D22"],
    ["26", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT A (+)", fromSurface: "1", toSurface: "17" },
    { text: "AF (−)", fromSurface: "1", toSurface: "8" },
    { text: "AR (+)", fromSurface: "9", toSurface: "17" },
    { text: "REAR B (+)", fromSurface: "19", toSurface: "33" },
    { text: "F1 (−)", fromSurface: "19", toSurface: "22" },
    { text: "F2 (+)", fromSurface: "23", toSurface: "26" },
    { text: "R (−)", fromSurface: "27", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" },
    { text: "D2", fromSurface: "29", toSurface: "31" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Floating focus (Multi-Focus System): F1 (L21–L22, weak negative) and F2 (L31–L32, moderate positive) advance toward object with differential movement. Front group A and final group R are fixed. Two STM motors.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,
  apertureBladeRoundedness: 0.85,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
