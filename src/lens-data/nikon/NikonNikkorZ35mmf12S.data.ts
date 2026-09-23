import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — NIKON NIKKOR Z 35mm f/1.2 S
 *
 * Data source: JP 2025-052870 A, Example 1 / Table 1 (Nikon; inventors Masaki Harada, Toshiyuki Shimada).
 * Native scale (patent f = 34.4 mm, FNo 1.23, ω = 32.7°, Y = 21.7 mm); no rescaling.
 * 17 elements / 15 groups, 5 aspherical surfaces on 4 elements (L12 both sides, L31 rear, L32 front, L44 front).
 * Example 1 is the patent's representative example (abstract figure). Example 2 has the same 17/15 layout with
 * f = 35.00 mm, so the production match is a structural inference, not a published identification.
 *
 * FOCUS: patent ¶[0120] — F1 (L21–L22, weak negative) and F2 (L31–L32, positive) both move toward the object
 * by different amounts; front group A and final group R are fixed. Table 1 publishes two states: infinity and
 * β = −0.1000 at d0 = 308.07 mm (object-to-image 472.1 mm, calculated from d0 + TL 163.987). The stored close
 * gaps are those patent values; F1 travels 5.351 mm and F2 3.677 mm. Production MFD (0.3 m) is not tabulated,
 * so `closeFocusM` records the patent state rather than the production minimum.
 *
 * BACK FOCUS: Table 1 lists d33 = 10.38 to a 1.6 mm filter FL (nd 1.51680) and d35 = 1.00 to the image. The
 * filter is excluded and folded into the last gap as air: 10.38 + 1.6/1.5168 + 1.00 = 12.434 mm (= patent BFa).
 *
 * APERTURE: the engine derives the iris from `nominalFno` 1.23; the exact f/1.23 stop radius is 19.86 mm
 * (calculated), matching the Fig. 1 stop tick marks (19.5–20.1 mm). STO sd 19.9 records that iris.
 *
 * NOTE ON SEMI-DIAMETERS: the patent lists no effective diameters. S1, L15–L17, the stop and every rear-group
 * rim (19–33) are measured from Fig. 1 (infinity half, lower clean side; 0.1429 mm/px at 400 dpi from the
 * 151.008 mm S1–S33 vertex span), minus flat mounting annuli. Exceptions: 25A is held at 17.2 mm, just inside
 * the asphere's slope turnover (≈17.25 mm; the figure draws L32 to ≈19.3 mm), and S31 is 18.0 mm so the
 * L43/L44 air gap keeps rendering clearance (the drawn 19.1 mm would intrude). S2–S8 and D1 (15–17) retain the
 * earlier estimates, which lie within ≈15 % of the figure. All rims pass the f/1.23 axial beam and the full-
 * field chief ray at both focus states.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-z-35f12s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 35mm f/1.2 S",
  subtitle: "JP 2025-052870 A EXAMPLE 1 — NIKON / HARADA, SHIMADA",
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
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2025-052870 A",
  patentAuthors: ["Masaki Harada", "Toshiyuki Shimada"],
  patentAssignees: ["Nikon Corporation"],
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
      glass: "S-BSM81 (OHARA catalog equivalent; production supplier unspecified)",
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
      glass: "J-BK7A (HIKARI catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Weak negative aspherical corrector; both surfaces carry polynomial profiles to manage higher-order spherical aberration and coma at f/1.23.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.92119,
      vd: 24.0,
      fl: +99.5,
      glass: "FDS24 (HOYA catalog equivalent)",
      apd: false,
      role: "Ultra-high-index positive meniscus. Provides positive power with low Petzval contribution thanks to nd = 1.921. High dispersion balanced by downstream low-dispersion elements.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.3,
      fl: -54.1,
      glass: "J-KZFH9 (HIKARI catalog equivalent)",
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
      glass: "J-LASFH21 (HIKARI catalog equivalent; OHARA S-LAH98 / HOYA TAFD45 share the coordinate)",
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
      glass: "J-PSKH4 (HIKARI catalog equivalent)",
      apd: false,
      role: "Low-dispersion phosphate crown (ED role inferred); second of four positive lenses (L2). Symmetric biconvex (R1 = +91.1, R2 = −91.1) minimizes coma. Shape factor (R22+R21)/(R22−R21) = 0.000.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: +118.0,
      glass: "J-PSKH4 (HIKARI catalog equivalent)",
      apd: false,
      role: "Low-dispersion phosphate crown (ED role inferred); third of four positive lenses. Weaker positive power; meniscus form manages ray bundle convergence.",
    },
    {
      id: 8,
      name: "L18",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: +64.5,
      glass: "J-PSKH1 (HIKARI catalog equivalent)",
      apd: false,
      cemented: "D1",
      role: "Low-dispersion phosphate crown (ED role inferred); fourth (last) of four positive lenses. Cemented to L19 to form achromatic doublet. Strong positive power (f = +64.5) before the negative corrector L19.",
    },
    {
      id: 9,
      name: "L19",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -37.4,
      glass: "J-KZFH9 (HIKARI catalog equivalent)",
      apd: "patent",
      dPgF: 0.0001,
      apdNote: "θgF = 0.5896 (patent-listed); condition (11) value = 0.657",
      cemented: "D1",
      role: "Patent Ln2: negative element at image side of front group. Cemented to L18 forming achromatic doublet (combined f = −98.6 mm). Patent condition (11) bounds its partial dispersion (θgF + 0.0021νd = 0.657) for axial-colour correction.",
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
      glass: "N-KZFS8 (SCHOTT catalog equivalent; OHARA S-NBH8 shares the coordinate)",
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
      glass: "J-PSKH1 (HIKARI catalog equivalent)",
      apd: false,
      role: "Positive element in F1 focus group. F1 combined focal length = −219.4 mm (very weak negative) — acts as aberration variator during focusing.",
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
      glass: "J-PSKH1 family (HIKARI nearest; patent nd 1.59294 is 0.00025 below the catalog 1.59319)",
      apd: false,
      role: "Inferred aspherical ED element of the production spec (the only low-dispersion aspheric element). Rear surface (s24) aspherical. Focus group F2 — aspherical correction tracks with focus position.",
    },
    {
      id: 13,
      name: "L32",
      label: "Element 13",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.77503,
      vd: 47.3,
      fl: +93.4,
      glass: "M-TAF401 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Second aspherical element in F2. Front surface (s25) aspherical with coefficients up to A16; its slope turns over near 17.25 mm, which caps the stored clear aperture.",
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
      glass: "J-PSKH1 (HIKARI catalog equivalent)",
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
      glass: "FDS18 / H-ZF75A family (946180)",
      apd: "patent",
      dPgF: 0.041,
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
      glass: "S-NBH58 (OHARA catalog equivalent)",
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
    { label: "1", R: 163.28336, d: 2.5, nd: 1.64, elemId: 1, sd: 31.2 },
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
    // ── L15 (Plano-convex, Lens H) ──
    { label: "9", R: 1e15, d: 7.85, nd: 1.95375, elemId: 5, sd: 27.5 },
    { label: "10", R: -62.49727, d: 0.3, nd: 1.0, elemId: 0, sd: 27.5 },
    // ── L16 (Symmetric biconvex, ED) ──
    { label: "11", R: 91.13243, d: 10.25, nd: 1.59349, elemId: 6, sd: 27.9 },
    { label: "12", R: -91.13243, d: 0.2, nd: 1.0, elemId: 0, sd: 27.9 },
    // ── L17 (Positive meniscus, ED) ──
    { label: "13", R: 54.79591, d: 6.75, nd: 1.59349, elemId: 7, sd: 26.0 },
    { label: "14", R: 240.05962, d: 0.2, nd: 1.0, elemId: 0, sd: 26.0 },
    // ── L18 + L19 cemented doublet (D1) ──
    { label: "15", R: 116.72066, d: 10.25, nd: 1.59319, elemId: 8, sd: 24.0 },
    { label: "16", R: -55.03, d: 1.6, nd: 1.738, elemId: 9, sd: 23.0 },
    { label: "17", R: 56.1782, d: 5.63, nd: 1.0, elemId: 0, sd: 22.0 },
    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 19.089, nd: 1.0, elemId: 0, sd: 19.9 },
    // ── L21 (Plano-concave negative, F1) ──
    { label: "19", R: -38.22319, d: 1.5, nd: 1.72047, elemId: 10, sd: 19.0 },
    { label: "20", R: 1e15, d: 0.2, nd: 1.0, elemId: 0, sd: 19.0 },
    // ── L22 (Biconvex positive, F1) ──
    { label: "21", R: 63.64177, d: 6.0, nd: 1.59319, elemId: 11, sd: 19.6 },
    { label: "22", R: -130.91271, d: 2.019, nd: 1.0, elemId: 0, sd: 19.6 },
    // ── L31 (Biconvex positive, aspherical ED, F2) ──
    { label: "23", R: 49.41555, d: 8.0, nd: 1.59294, elemId: 12, sd: 19.3 },
    { label: "24A", R: -821.27474, d: 3.13, nd: 1.0, elemId: 0, sd: 19.3 },
    // ── L32 (Positive meniscus, aspherical, F2) ──
    { label: "25A", R: 65.70231, d: 3.75, nd: 1.77503, elemId: 13, sd: 17.2 },
    { label: "26", R: 690.07952, d: 2.0, nd: 1.0, elemId: 0, sd: 19.4 },
    // ── L41 (Positive meniscus, R group) ──
    { label: "27", R: 60.10155, d: 4.0, nd: 1.59319, elemId: 14, sd: 19.6 },
    { label: "28", R: 231.68418, d: 0.31, nd: 1.0, elemId: 0, sd: 19.6 },
    // ── L42 + L43 cemented doublet (D2) ──
    { label: "29", R: 90.05931, d: 4.05, nd: 1.94594, elemId: 15, sd: 19.6 },
    { label: "30", R: 1e15, d: 1.4, nd: 1.7888, elemId: 16, sd: 19.3 },
    { label: "31", R: 37.80163, d: 7.53, nd: 1.0, elemId: 0, sd: 18.0 },
    // ── L44 (Biconcave negative, aspherical, R group) ──
    { label: "32A", R: -124.60117, d: 2.0, nd: 1.62372, elemId: 17, sd: 19.0 },
    // Last gap: patent d33 10.38 + filter 1.6/1.5168 + d35 1.00 = 12.434 mm air-equivalent (= patent BFa);
    // the filter group FL is excluded from the prescription.
    { label: "33", R: 448.63838, d: 12.434, nd: 1.0, elemId: 0, sd: 19.0 },
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
    STO: [19.089, 13.738], // Table 1 d18 (infinity, β = −0.1000)
    "22": [2.019, 3.693],
    "26": [2.0, 5.676],
  },
  varLabels: [
    ["STO", "D18"],
    ["22", "D22"],
    ["26", "D26"],
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
  closeFocusM: 0.472,
  focusDescription:
    "Floating internal focus: F1 (L21–L22, weak negative) and F2 (L31–L32, positive) both move toward the object by different amounts (patent: 5.351 mm and 3.677 mm to β = −0.10). Front group A and final group R are fixed. Close state is the patent's β = −0.10 conjugate (0.472 m object-to-image, calculated); production MFD is 0.3 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.23,
  fstopSeries: [1.23, 1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,
  apertureBladeRoundedness: 0.85,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
