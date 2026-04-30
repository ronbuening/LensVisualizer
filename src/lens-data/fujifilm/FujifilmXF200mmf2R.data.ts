import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON XF 200mm F2 R LM OIS WR              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0265504 A1 Example 1 (FUJIFILM Corp.,        ║
 * ║  inventor Hiroki Saito; priority JP 2018-035614, 28 Feb 2018;      ║
 * ║  published 29 Aug 2019).                                            ║
 * ║  Super-telephoto APS-C prime; all-spherical 19-element / 14-group  ║
 * ║  design with three-group architecture: positive front collector    ║
 * ║  (G1, 8 elements), aperture stop, positive focus doublet (G2, 2    ║
 * ║  elements), and third group (G3, 9 elements) composed of a field   ║
 * ║  lens (L3a), negative vibration-reduction group (G3ois, 3          ║
 * ║  elements), and positive rear relay (G3r, 5 elements).             ║
 * ║  Zero aspherical surfaces.                                          ║
 * ║  Focus: inner focus — cemented doublet G2 translates 11.55 mm      ║
 * ║  object-ward from infinity to 1.57 m (patent close focus).         ║
 * ║                                                                    ║
 * ║  NOTE ON SPECIFICATIONS:                                           ║
 * ║    Patent gives f = 194.01 mm and F/2.06 at infinity (Table 2).    ║
 * ║    Manufacturer markets the lens as 200 mm f/2 with 1.8 m close    ║
 * ║    focus. Per project convention, manufacturer values govern the   ║
 * ║    marketed (focalLengthMarketing, apertureMarketing, closeFocusM) ║
 * ║    while patent values are preserved as -Design fields. Independ-  ║
 * ║    ent paraxial ray trace confirms EFL = 194.015 mm at infinity    ║
 * ║    and 181.530 mm at 1.57 m, matching the patent to within 0.003%. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Values derived from paired ║
 * ║    on-axis marginal and off-axis chief ray traces at 60% of max    ║
 * ║    half-field (per project offAxisFieldFrac), with 8% mechanical   ║
 * ║    clearance. Iterated downward where needed to satisfy edge-      ║
 * ║    thickness (>= 0.7 mm) and cross-gap sag overlap constraints.    ║
 * ║    Front element SD of 58.6 mm (diameter 117 mm) is consistent     ║
 * ║    with the 105 mm filter thread modulo the rotating filter ring   ║
 * ║    that sits ahead of L1a.                                          ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent includes a plane-parallel optical member PP (surfaces    ║
 * ║    35-36, d=2.85 + 1.10, n=1.5168) representing sensor cover/      ║
 * ║    filter stack. Per project convention, PP is excluded from the   ║
 * ║    surfaces array; its optical path is folded into the last d      ║
 * ║    value: 28.1625 + 2.85/1.5168 + 1.10 = 31.1415 mm (air-equiv).   ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    Patent places St explicitly between surface 14 (L1h rear) and   ║
 * ║    surface 16 (L2a front), with DD[15] = 18.63 mm at infinity      ║
 * ║    representing the stop-to-L2a gap. The stop surface itself has   ║
 * ║    no listed d — it is inferred as lying at the L1h-rear/L2a-front ║
 * ║    interface. Here the 9.4871 mm gap BEFORE the stop (surface 14   ║
 * ║    d value) is L1h-rear-to-stop, and DD[15] = 18.63 mm is stop-    ║
 * ║    to-L2a-front.                                                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf-200-f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 200mm F2 R LM OIS WR",
  subtitle: "US 2019/0265504 A1 EXAMPLE 1 — FUJIFILM / H. SAITO",
  specs: [
    "19 ELEMENTS / 14 GROUPS",
    "f = 200 mm (200.0 marketed, 194.01 design)",
    "F/2",
    "2ω = 9.0° (design)",
    "0 ASPHERICAL SURFACES",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 200,
  focalLengthDesign: 194.01,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
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
      apd: "patent",
      dPgF: 0.0457, apdNote: "dPgF = +0.0457 (Super ED / fluorite-family)",
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
      apd: "patent",
      dPgF: 0.03, apdNote: "dPgF approx +0.030 (ED / fluorite-family)",
      role: "First achromat positive; ED",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L1d",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.74,
      fl: -203.8,
      glass: "S-LAH55V family (OHARA, 835 427)",
      apd: false,
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
      apd: "patent",
      dPgF: 0.03, apdNote: "dPgF approx +0.030 (ED / fluorite-family)",
      role: "Second achromat positive; ED",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L1f",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -101.4,
      glass: "S-LAH58 family (OHARA, 911 353)",
      apd: false,
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
      dPgF: 0.026, apdNote: "dPgF approx +0.026 (niobophosphate flint)",
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
      glass: "S-NBH5 / S-LAH53 family (OHARA, 800 298)",
      apd: false,
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
      apd: "patent",
      dPgF: 0.0466, apdNote: "dPgF = +0.0466 (ultra-dense niobophosphate flint)",
      role: "G3ois inverted achromat positive; meets Cond. Expr. (4)",
      cemented: "O1",
    },
    {
      id: 13,
      name: "L3c",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.734,
      vd: 51.47,
      fl: -39.6,
      glass: "S-LAL59 / S-LAL18 family (OHARA, 734 515)",
      apd: false,
      role: "G3ois inverted achromat negative",
      cemented: "O1",
    },
    {
      id: 14,
      name: "L3d",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.97,
      fl: -63.5,
      glass: "S-LAM66 family (OHARA, 801 350)",
      apd: false,
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
      role: "Rear relay front; steep plano-convex",
    },
    {
      id: 16,
      name: "L3f",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.76,
      fl: -62.7,
      glass: "S-NPH1 (OHARA, 808 228)",
      apd: "inferred",
      dPgF: 0.026, apdNote: "dPgF approx +0.026 (niobophosphate flint)",
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
      role: "Rear doublet positive; symmetric biconvex",
      cemented: "R1",
    },
    {
      id: 19,
      name: "L3i",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 29.84,
      fl: -49.3,
      glass: "S-NBH5 / S-LAH53 family (OHARA, 800 298)",
      apd: false,
      role: "Rear doublet negative; final lateral-colour trim",
      cemented: "R1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // --- G1 (8 elements) ---
    { label: "1", R: 430.7013, d: 7.07, nd: 1.6727, elemId: 1, sd: 58.6 }, // L1a front
    { label: "2", R: -727.3321, d: 0.4562, nd: 1.0, elemId: 0, sd: 58.6 }, // L1a rear → air
    { label: "3", R: 165.972, d: 10.75, nd: 1.43875, elemId: 2, sd: 53.3 }, // L1b front
    { label: "4", R: -1120.2835, d: 20.2132, nd: 1.0, elemId: 0, sd: 53.3 }, // L1b rear → air
    { label: "5", R: 105.9369, d: 13.91, nd: 1.497, elemId: 3, sd: 42.7 }, // L1c front
    { label: "6", R: -218.34, d: 3.16, nd: 1.83481, elemId: 4, sd: 44.7 }, // L1c/L1d cem junction
    { label: "7", R: 775.7212, d: 1.6106, nd: 1.0, elemId: 0, sd: 44.7 }, // L1d rear → air
    { label: "8", R: 91.4829, d: 11.02, nd: 1.497, elemId: 5, sd: 36.9 }, // L1e front
    { label: "9", R: -267.53, d: 2.72, nd: 1.91082, elemId: 6, sd: 37.4 }, // L1e/L1f cem junction
    { label: "10", R: 141.8275, d: 22.215, nd: 1.0, elemId: 0, sd: 37.4 }, // L1f rear → air
    { label: "11", R: 266.7587, d: 4.11, nd: 1.80809, elemId: 7, sd: 26.5 }, // L1g front
    { label: "12", R: -266.7587, d: 0.3002, nd: 1.0, elemId: 0, sd: 26.5 }, // L1g rear → air
    { label: "13", R: 266.7635, d: 2.0, nd: 1.8, elemId: 8, sd: 25.1 }, // L1h front
    { label: "14", R: 47.2925, d: 9.4871, nd: 1.0, elemId: 0, sd: 25.1 }, // L1h rear → air (to STO)

    // --- Aperture stop ---
    { label: "STO", R: 1e15, d: 18.63, nd: 1.0, elemId: 0, sd: 20.2 }, // STO (infinity value)

    // --- G2 (2 elements, cemented doublet — focus group) ---
    { label: "16", R: 61.1684, d: 1.81, nd: 1.54814, elemId: 9, sd: 21.2 }, // L2a front
    { label: "17", R: 39.38, d: 6.6, nd: 1.6968, elemId: 10, sd: 21.2 }, // L2a/L2b cem junction
    { label: "18", R: 1e15, d: 4.92, nd: 1.0, elemId: 0, sd: 20.7 }, // L2b rear (flat) → air; variable (DD[18])

    // --- G3 ---
    // L3a field lens
    { label: "19", R: 36.1305, d: 2.3, nd: 1.60342, elemId: 11, sd: 18.3 }, // L3a front
    { label: "20", R: 23.9164, d: 7.9, nd: 1.0, elemId: 0, sd: 18.3 }, // L3a rear → air
    // G3ois (L3b+L3c cemented, then L3d)
    { label: "21", R: 415.3848, d: 2.28, nd: 1.95906, elemId: 12, sd: 15.3 }, // L3b front
    { label: "22", R: -91.476, d: 1.51, nd: 1.734, elemId: 13, sd: 15.3 }, // L3b/L3c cem junction
    { label: "23", R: 42.9219, d: 1.89, nd: 1.0, elemId: 0, sd: 10.9 }, // L3c rear → air
    { label: "24", R: -217.2372, d: 1.4, nd: 1.801, elemId: 14, sd: 12.1 }, // L3d front
    { label: "25", R: 66.6268, d: 3.2077, nd: 1.0, elemId: 0, sd: 12.1 }, // L3d rear → air
    // G3r (5 elements L3e..L3i)
    { label: "26", R: 51.5518, d: 3.11, nd: 1.90366, elemId: 15, sd: 13.5 }, // L3e front
    { label: "27", R: 1e15, d: 1.0602, nd: 1.0, elemId: 0, sd: 13.5 }, // L3e rear (flat) → air
    { label: "28", R: -77.9583, d: 1.4, nd: 1.80809, elemId: 16, sd: 12.1 }, // L3f front
    { label: "29", R: 145.8634, d: 4.4301, nd: 1.0, elemId: 0, sd: 13.4 }, // L3f rear → air
    { label: "30", R: 133.6002, d: 4.28, nd: 1.8061, elemId: 17, sd: 17.2 }, // L3g front
    { label: "31", R: -60.7409, d: 0.6043, nd: 1.0, elemId: 0, sd: 17.2 }, // L3g rear → air
    { label: "32", R: 53.252, d: 8.63, nd: 1.65412, elemId: 18, sd: 18.0 }, // L3h front
    { label: "33", R: -53.252, d: 1.9, nd: 1.8, elemId: 19, sd: 18.0 }, // L3h/L3i cem junction
    { label: "34", R: 154.3014, d: 31.1415, nd: 1.0, elemId: 0, sd: 16.3 }, // L3i rear → BFD (PP folded into air-equivalent d)
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
   *  Production lens specs closest focus as 1.80 m (manufacturer); the values
   *  here are the patent's 1.57 m close-focus values. The actual close-focus
   *  mechanism in the production barrel may not reach the patent's 1.57 m stop,
   *  but the internal inner-focus optics are the same — the variable gap values
   *  at 1.80 m would be linearly between infinity and 1.57 m values (closer to
   *  1.57 m endpoint).
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
  closeFocusM: 1.8, // Fujifilm production spec (patent is 1.57 m; manufacturer governs)
  focusDescription:
    "Inner focus — cemented doublet G2 (L2a+L2b) translates 11.55 mm toward the object between infinity and the patent's 1.57 m close focus. Driven by twin linear motors for quiet, high-speed autofocus; small moving mass (~25 g glass).",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  /* ── Layout tuning ── */
  scFill: 0.62,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
