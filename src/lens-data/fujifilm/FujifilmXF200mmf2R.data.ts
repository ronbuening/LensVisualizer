import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — FUJINON XF 200mm F2 R LM OIS WR
 *
 * Data source: US 2019/0265504 A1 Example 1 (FUJIFILM Corporation, inventor Hiroki Saito; priority
 * JP 2018-035614, 28 Feb 2018; published 29 Aug 2019), Tables 1–3 and FIG. 1. Stored at the patent's
 * native scale (no scaling). All-spherical 19-element / 14-group design: positive front group G1
 * (8 elements), aperture stop St, positive cemented focus doublet G2, and G3 (9 elements) = negative
 * meniscus L3a + negative vibration-reduction group G3ois (L3b–L3d) + positive rear group G3r (L3e–L3i).
 * Example 3 of the same publication has the same 19/14 topology, so the Example 1 choice is the
 * patent's lead example rather than a uniquely proven production match.
 *
 * NOTE ON SPECIFICATIONS:
 *   Patent Table 2: f = 194.01 mm, FNo = 2.06, 2ω = 9.0° at infinity; f = 181.53 mm, FNo = 2.33,
 *   2ω = 8.2° at the 1.57 m close state. Paraxial trace of the stored data: EFL 194.015 / 181.530 mm.
 *   Marketing fields carry 200 mm f/2; nominalFno carries the patent's 2.06.
 *
 * NOTE ON FOCUS:
 *   Table 3 publishes only infinity and "Close Range (1.57 m)". The stored close gaps focus an
 *   object 1572 mm in front of surface 1 (calculated), so the patent's 1.57 m is measured from the
 *   first surface; adding the 219.0 mm physical lens-to-image length gives 1.79 m object-to-image, which is
 *   the production 1.8 m minimum focus distance. G2 moves 11.55 mm toward the object (DD[15]
 *   18.63 → 7.08, DD[18] 4.92 → 16.47).
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent lists no effective diameters. Rims were measured from the Example 1 FIG. 1 infinity
 *   section (sheet 1, 300 dpi native scan; scale 6.44 px/mm from the S1 and S34 vertex crossings,
 *   cross-checked by the drawn axial marginal ray at L1a ≈ 47.4 mm vs 47.09 mm traced). Measured:
 *   L1a 48.9, L1b 47.6, L1c 38.7, L1d 37.5, L1e 33.5, L1f 32.5, L1g 24.3, L1h 22.9, St 20.3,
 *   G2 19.2, L3a 14.8, L3b/L3c 12.9, L3d 12.3, L3e 13.4, L3f 13.6, L3g 15.1, L3h 15.2, L3i 14.8 mm.
 *   Stored values follow the figure except: G2 keeps 21.2/20.7 mm because at the 1.57 m state the
 *   doublet sits 7.08 mm behind the f/2.06 iris where the paraxial marginal ray is ≈19.6 mm; the
 *   L3c rear (S23) keeps 10.9 mm to clear the 1.89 mm air gap to L3d; L3d–L3f were already within
 *   ~10 % of the figure. Real-ray trace at f/2.06: every axial marginal ray clears its rim.
 *   The 97.6 mm front clear diameter fits the production 105 mm filter thread.
 *
 * NOTE ON COVER GLASS:
 *   Patent Table 1 surfaces 35–36 are the plane-parallel optical member PP (2.85 mm, nd 1.51680,
 *   νd 64.20, θgF 0.53430) followed by 1.10 mm air to the image. PP is modeled in `rearPlates`
 *   (traced, not drawn); surface 34 keeps the patent's 28.1625 mm gap to PP. Air-equivalent
 *   last gap: 28.1625 + 2.85/1.5168 + 1.10 = 31.1414 mm (paraxial BFD 31.152 mm, defocus −0.010 mm).
 *
 * NOTE ON APERTURE STOP:
 *   Table 1 lists the stop as surface 15 with d = DD[15]; surface 14's 9.4871 mm is L1h rear to St.
 *   STO sd 20.4 mm records the real-ray f/2.06 iris radius (20.37 mm; figure 20.3 mm).
 *
 * NOTE ON GLASS:
 *   nd/νd are the patent's; names are coordinate-matched OHARA/HOYA catalog equivalents (the patent
 *   names no glasses and does not call any element ED/APD). dPgF values are computed from the
 *   patent's θgF column as θgF − (0.6438 − 0.001682νd); apd "inferred" marks the Super-ED/ED
 *   crowns and niobophosphate flints.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf-200-f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 200mm f/2 R LM OIS WR",
  subtitle: "US 2019/0265504 A1 EXAMPLE 1 — FUJIFILM / H. SAITO",
  specs: [
    "19 ELEMENTS / 14 GROUPS",
    "f = 200 mm (200.0 marketed, 194.01 design)",
    "F/2 (2.06 design)",
    "2ω = 9.0° (design)",
    "0 ASPHERICAL SURFACES",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 200,
  focalLengthDesign: 194.01,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2019/0265504 A1",
  patentAuthors: ["Hiroki Saito"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2019,
  elementCount: 19,
  groupCount: 14,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.1,
      fl: 403.1,
      glass: "S-TIM25 family (OHARA, 673 321)",
      apd: false,
      dPgF: 0.0091, // from patent θgF = 0.59891
      role: "Front flint singlet; meets Cond. Expr. (5) on first-element Abbe number",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.66,
      fl: 330.3,
      glass: "S-FPL55 (OHARA, 439 948)",
      apd: "inferred",
      dPgF: 0.0494,
      apdNote: "Patent θgF = 0.53402; dPgF = θgF − (0.6438 − 0.001682νd) = +0.0494 (Super ED / fluorite-class crown; not labelled ED/APD in the patent text)",
      role: "Super ED collector; primary secondary-spectrum corrector",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 145.6,
      glass: "S-FPL51 (OHARA, 497 816)",
      apd: "inferred",
      dPgF: 0.0308,
      apdNote: "Patent θgF = 0.53748; dPgF = θgF − (0.6438 − 0.001682νd) = +0.0308 (ED fluorophosphate crown; not labelled ED/APD in the patent text)",
      role: "First achromat positive; ED",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L1d",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.74,
      fl: -203.8,
      glass: "S-LAH55V family (OHARA, 835 427)",
      apd: false,
      dPgF: -0.0070, // from patent θgF = 0.56490
      role: "First achromat negative; dense lanthanum flint",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L1e",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 138.6,
      glass: "S-FPL51 (OHARA, 497 816)",
      apd: "inferred",
      dPgF: 0.0308,
      apdNote: "Patent θgF = 0.53748; dPgF = θgF − (0.6438 − 0.001682νd) = +0.0308 (ED fluorophosphate crown; not labelled ED/APD in the patent text)",
      role: "Second achromat positive; ED",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L1f",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      fl: -101.4,
      glass: "TAFD35 (HOYA)",
      apd: false,
      dPgF: -0.0023, // from patent θgF = 0.58224
      role: "Second achromat negative; ultra-dense lanthanum flint",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L1g",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      fl: 165.6,
      glass: "S-NPH1 (OHARA, 808 228)",
      apd: "inferred",
      dPgF: 0.0252,
      apdNote: "Patent θgF = 0.63073; dPgF = θgF − (0.6438 − 0.001682νd) = +0.0252 (niobophosphate dense flint; not labelled ED/APD in the patent text)",
      role: "Symmetric biconvex; secondary-spectrum corrector",
    },
    {
      id: 8,
      name: "L1h",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 29.84,
      fl: -72.1,
      glass: "S-NBH55 (OHARA)",
      apd: false,
      dPgF: 0.0082, // from patent θgF = 0.60178
      role: "Spherical-aberration corrector; rear of G1",
    },
    {
      id: 9,
      name: "L2a",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.54814,
      vd: 45.78,
      fl: -207.8,
      glass: "S-TIL1 family (OHARA, 548 458)",
      apd: false,
      dPgF: 0.0018, // from patent θgF = 0.56859
      role: "Focus group front; achromat negative",
      cemented: "F1",
    },
    {
      id: 10,
      name: "L2b",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.6968,
      vd: 55.53,
      fl: +56.5,
      glass: "S-LAL14 (OHARA, 697 555)",
      apd: false,
      dPgF: -0.0070, // from patent θgF = 0.54341
      role: "Focus group rear; achromat positive; flat rear",
      cemented: "F1",
    },
    {
      id: 11,
      name: "L3a",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.03,
      fl: -126.2,
      glass: "S-TIM5 family (OHARA, 603 380)",
      apd: false,
      dPgF: 0.0037, // from patent θgF = 0.58356
      role: "Field lens; buffers G2-motion effects on downstream groups",
    },
    {
      id: 12,
      name: "L3b",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.95906,
      vd: 17.47,
      fl: +78.3,
      glass: "S-NPH3 (OHARA, 959 175)",
      apd: "inferred",
      dPgF: 0.0455,
      apdNote: "Patent θgF = 0.65993; dPgF = θgF − (0.6438 − 0.001682νd) = +0.0455 (ultra-high-dispersion niobophosphate flint; not labelled ED/APD in the patent text)",
      role: "G3ois inverted achromat positive; meets Cond. Expr. (4)",
      cemented: "O1",
    },
    {
      id: 13,
      name: "L3c",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.734,
      vd: 51.47,
      fl: -39.6,
      glass: "S-LAL59 (OHARA, 734 515)",
      apd: false,
      dPgF: -0.0085, // from patent θgF = 0.54874
      role: "G3ois inverted achromat negative",
      cemented: "O1",
    },
    {
      id: 14,
      name: "L3d",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.801,
      vd: 34.97,
      fl: -63.5,
      glass: "S-LAM66 family (OHARA, 801 350)",
      apd: false,
      dPgF: 0.0014, // from patent θgF = 0.58642
      role: "G3ois rear negative singlet",
    },
    {
      id: 15,
      name: "L3e",
      label: "Element 15",
      type: "Plano-Convex Positive",
      nd: 1.90366,
      vd: 31.31,
      fl: +57.0,
      glass: "S-LAH95 family (OHARA, 904 313)",
      apd: false,
      dPgF: 0.0037, // from patent θgF = 0.59481
      role: "Rear relay front; steep plano-convex",
    },
    {
      id: 16,
      name: "L3f",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.80809,
      vd: 22.76,
      fl: -62.7,
      glass: "S-NPH1 (OHARA, 808 228)",
      apd: "inferred",
      dPgF: 0.0252,
      apdNote: "Patent θgF = 0.63073; dPgF = θgF − (0.6438 − 0.001682νd) = +0.0252 (niobophosphate dense flint; not labelled ED/APD in the patent text)",
      role: "Rear relay colour corrector",
    },
    {
      id: 17,
      name: "L3g",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.93,
      fl: +52.3,
      glass: "S-LAH53 family (OHARA, 806 409)",
      apd: false,
      dPgF: -0.0035, // from patent θgF = 0.57141
      role: "Rear relay positive",
    },
    {
      id: 18,
      name: "L3h",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.73,
      fl: +42.0,
      glass: "S-NBH5 family (OHARA, 654 397)",
      apd: false,
      dPgF: -0.0033, // from patent θgF = 0.57369
      role: "Rear doublet positive; symmetric biconvex",
      cemented: "R1",
    },
    {
      id: 19,
      name: "L3i",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.8,
      vd: 29.84,
      fl: -49.3,
      glass: "S-NBH55 (OHARA)",
      apd: false,
      dPgF: 0.0082, // from patent θgF = 0.60178
      role: "Rear doublet negative; final lateral-colour trim",
      cemented: "R1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // --- G1 (8 elements) ---
    { label: "1", R: 430.7013, d: 7.07, nd: 1.6727, elemId: 1, sd: 48.8 }, // L1a front
    { label: "2", R: -727.3321, d: 0.4562, nd: 1.0, elemId: 0, sd: 48.8 }, // L1a rear → air
    { label: "3", R: 165.972, d: 10.75, nd: 1.43875, elemId: 2, sd: 47.5 }, // L1b front
    { label: "4", R: -1120.2835, d: 20.2132, nd: 1.0, elemId: 0, sd: 47.5 }, // L1b rear → air
    { label: "5", R: 105.9369, d: 13.91, nd: 1.497, elemId: 3, sd: 38.8 }, // L1c front
    { label: "6", R: -218.34, d: 3.16, nd: 1.83481, elemId: 4, sd: 38.8 }, // L1c/L1d cem junction
    { label: "7", R: 775.7212, d: 1.6106, nd: 1.0, elemId: 0, sd: 37.6 }, // L1d rear → air
    { label: "8", R: 91.4829, d: 11.02, nd: 1.497, elemId: 5, sd: 33.5 }, // L1e front
    { label: "9", R: -267.53, d: 2.72, nd: 1.91082, elemId: 6, sd: 33.5 }, // L1e/L1f cem junction
    { label: "10", R: 141.8275, d: 22.215, nd: 1.0, elemId: 0, sd: 32.5 }, // L1f rear → air
    { label: "11", R: 266.7587, d: 4.11, nd: 1.80809, elemId: 7, sd: 24.4 }, // L1g front
    { label: "12", R: -266.7587, d: 0.3002, nd: 1.0, elemId: 0, sd: 24.4 }, // L1g rear → air
    { label: "13", R: 266.7635, d: 2.0, nd: 1.8, elemId: 8, sd: 23.0 }, // L1h front
    { label: "14", R: 47.2925, d: 9.4871, nd: 1.0, elemId: 0, sd: 23.0 }, // L1h rear → air (to STO)

    // --- Aperture stop ---
    { label: "STO", R: 1e15, d: 18.63, nd: 1.0, elemId: 0, sd: 20.4 }, // St; real-ray f/2.06 iris radius 20.37 mm

    // --- G2 (2 elements, cemented doublet — focus group) ---
    { label: "16", R: 61.1684, d: 1.81, nd: 1.54814, elemId: 9, sd: 21.2 }, // L2a front
    { label: "17", R: 39.38, d: 6.6, nd: 1.6968, elemId: 10, sd: 21.2 }, // L2a/L2b cem junction
    { label: "18", R: 1e15, d: 4.92, nd: 1.0, elemId: 0, sd: 20.7 }, // L2b rear (flat) → air; variable (DD[18])

    // --- G3 ---
    // L3a field lens
    { label: "19", R: 36.1305, d: 2.3, nd: 1.60342, elemId: 11, sd: 15.0 }, // L3a front
    { label: "20", R: 23.9164, d: 7.9, nd: 1.0, elemId: 0, sd: 15.0 }, // L3a rear → air
    // G3ois (L3b+L3c cemented, then L3d)
    { label: "21", R: 415.3848, d: 2.28, nd: 1.95906, elemId: 12, sd: 13.0 }, // L3b front
    { label: "22", R: -91.476, d: 1.51, nd: 1.734, elemId: 13, sd: 13.0 }, // L3b/L3c cem junction
    { label: "23", R: 42.9219, d: 1.89, nd: 1.0, elemId: 0, sd: 10.9 }, // L3c rear → air
    { label: "24", R: -217.2372, d: 1.4, nd: 1.801, elemId: 14, sd: 12.1 }, // L3d front
    { label: "25", R: 66.6268, d: 3.2077, nd: 1.0, elemId: 0, sd: 12.1 }, // L3d rear → air
    // G3r (5 elements L3e..L3i)
    { label: "26", R: 51.5518, d: 3.11, nd: 1.90366, elemId: 15, sd: 13.5 }, // L3e front
    { label: "27", R: 1e15, d: 1.0602, nd: 1.0, elemId: 0, sd: 13.5 }, // L3e rear (flat) → air
    { label: "28", R: -77.9583, d: 1.4, nd: 1.80809, elemId: 16, sd: 12.1 }, // L3f front
    { label: "29", R: 145.8634, d: 4.4301, nd: 1.0, elemId: 0, sd: 13.4 }, // L3f rear → air
    { label: "30", R: 133.6002, d: 4.28, nd: 1.8061, elemId: 17, sd: 15.2 }, // L3g front
    { label: "31", R: -60.7409, d: 0.6043, nd: 1.0, elemId: 0, sd: 15.2 }, // L3g rear → air
    { label: "32", R: 53.252, d: 8.63, nd: 1.65412, elemId: 18, sd: 15.4 }, // L3h front
    { label: "33", R: -53.252, d: 1.9, nd: 1.8, elemId: 19, sd: 15.4 }, // L3h/L3i cem junction
    { label: "34", R: 154.3014, d: 28.1625, nd: 1.0, elemId: 0, sd: 15.0 }, // L3i rear → PP (patent gap)
  ],

  /* ── Optical member PP (patent Table 1 surfaces 35–36): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      dPgF: -0.0015, // from patent θgF = 0.53430
      gapAfterMm: 1.1,
      source: "US 2019/0265504 A1, Example 1 Table 1 surfaces 35–36",
    },
  ],

  /* ── Aspherical coefficients ──
   *  Zero aspherical surfaces in Example 1 of US 2019/0265504 A1.
   *  Confirmed by exhaustive inspection of Tables 1, 4, 7, and 10: no aspheric
   *  coefficient table, no asterisked surface indices, no aspheric keyword in
   *  specification text or claims. Fujifilm's official marketing does not cite
   *  aspherical elements in this lens, which is consistent with the patent.
   */
  asph: {},

  /* ── Variable air spacings (inner focus — G2 translates) ──
   *  Table 3 of patent: DD[15] and DD[18] at infinity (18.63, 4.92) and close
   *  range 1.57 m (7.08, 16.47). Conservation: ΔDD[15] = -11.55 mm, ΔDD[18] =
   *  +11.55 mm — exact rigid translation of G2 toward the object.
   *
   *  The patent's 1.57 m is measured from surface 1 (calculated object distance
   *  1572 mm); object-to-image it is 1.79 m, i.e. the production 1.8 m MFD.
   */
  var: {
    STO: [18.63, 7.08],
    "18": [4.92, 16.47],
  },

  varLabels: [
    ["STO", "DD15"],
    ["18", "DD18"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "14" },
    { text: "G2 (+, focus)", fromSurface: "16", toSurface: "18" },
    { text: "G3 (~0)", fromSurface: "19", toSurface: "34" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" }, // L1c+L1d
    { text: "D2", fromSurface: "8", toSurface: "10" }, // L1e+L1f
    { text: "F1", fromSurface: "16", toSurface: "18" }, // L2a+L2b (focus)
    { text: "O1", fromSurface: "21", toSurface: "23" }, // L3b+L3c (OIS)
    { text: "R1", fromSurface: "32", toSurface: "34" }, // L3h+L3i
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.8, // patent 1.57 m from surface 1 + 219.0 mm to image = 1.79 m; production MFD 1.8 m
  focusDescription:
    "Inner focus — cemented doublet G2 (L2a+L2b) translates 11.55 mm toward the object between infinity and the patent's close state (1.57 m from the front vertex, ≈1.8 m from the image plane). Driven by twin linear motors for quiet, high-speed autofocus; small moving mass.",

  /* ── Aperture configuration ── */
  nominalFno: 2.06, // patent Table 2 FNo at infinity (marketed f/2)
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22, // production minimum aperture f/22
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  /* ── Layout tuning ── */
  scFill: 0.62,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
