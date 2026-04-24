import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKKOR Z 24-70mm f/2.8 S                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2020/136749 A1, Example 1 (Nikon / Machida,       ║
 * ║  Gomibuchi).  Standard zoom for Z-mount, positive-lead 7-group     ║
 * ║  design.  17 elements / 15 groups, 4 aspherical surfaces.         ║
 * ║  Focus: dual-group inner focus (G5+G6, independent STM drives).   ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D13, D18 (zoom only).                   ║
 * ║  Focus variable gaps: D21, D25, D27, BF (zoom + focus).          ║
 * ║  No reversing groups — all gaps monotonic across zoom range.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated via paraxial marginal + chief ray trace at wide  ║
 * ║    and tele positions, with off-axis clearance margins.  These    ║
 * ║    are approximate and may need tuning for optimal rendering.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-24-70-f28",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-70mm f/2.8 S",
  subtitle: "WO2020/136749 A1 EXAMPLE 1 — NIKON / MACHIDA, GOMIBUCHI",
  specs: ["17 ELEMENTS / 15 GROUPS", "f = 24.8–67.9 mm", "F/2.92", "2ω = 85.10°–33.84°", "4 ASPHERICAL SURFACES"],

  focalLengthMarketing: [24, 70],
  focalLengthDesign: [24.8, 67.9],
  apertureMarketing: 2.8,
  apertureDesign: 2.92,
  patentYear: 2020,
  elementCount: 17,
  groupCount: 15,

  /* ── Elements ── */
  elements: [
    // ── Group 1 — Front Positive (f = +119.1 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -245.1,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Achromatic corrector — high-dispersion flint, cemented to L12",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.34,
      fl: 200.2,
      glass: "S-LAL8 (OHARA)",
      apd: false,
      role: "Crown element of front achromatic doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: 131.4,
      glass: "S-LAH55VS (OHARA)",
      apd: false,
      role: "Principal converging element of G1",
    },

    // ── Group 2 — Variator, Negative (f = −22.1 mm) ──
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.74389,
      vd: 49.53,
      fl: -27.6,
      glass: "L-LAH85 (OHARA)",
      apd: false,
      role: "Strong negative, aspherical front — PGM moldable glass",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      fl: -38.5,
      glass: "S-LAH55VS (OHARA)",
      apd: false,
      role: "Symmetric biconcave — distributes negative power evenly",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.38,
      fl: 30.8,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Chromatic correction within variator — high-dispersion glass",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.34,
      fl: -68.4,
      glass: "S-PHM52Q (OHARA)",
      apd: "inferred",
      role: "Petzval correction, phosphate crown with mild anomalous dispersion",
    },

    // ── Group 3 — Compensator, Positive (f = +40.9 mm) ──
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.6937,
      vd: 53.32,
      fl: 233.0,
      glass: "S-LAL12Q (OHARA)",
      apd: false,
      role: "Weak positive near stop, aspherical front for zonal SA correction",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 48.5,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred",
      apdNote: "Dense phosphate crown, anomalous partial dispersion — likely one of 2 ED elements",
      role: "Main positive power of G3, ED glass candidate",
    },

    // ── Group 4 — Positive Relay (f = +115.7 mm) ──
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.33,
      fl: -37.7,
      glass: "S-NBH8 (OHARA)",
      apd: false,
      role: "Chromatic corrector in cemented doublet — niobium flint",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 29.7,
      glass: "S-FPL51Y (OHARA)",
      apd: "inferred",
      apdNote: "νd = 82.57, fluorophosphate — unambiguously ED glass",
      role: "Primary ED element — fluorophosphate crown, strongest anomalous dispersion",
      cemented: "D2",
    },

    // ── Group 5 — 1st Focus Group, Positive (f = +124.7 mm) ──
    {
      id: 12,
      name: "L51",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.71,
      fl: -58.7,
      glass: "S-NBH56 (OHARA)",
      apd: false,
      role: "Reduces SA sensitivity to focus position — niobium flint",
    },
    {
      id: 13,
      name: "L52",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 42.8,
      glass: "S-PHM53 (OHARA)",
      apd: "inferred",
      apdNote: "Dense phosphate crown — ED glass candidate",
      role: "Main positive power of G5 focus group",
    },

    // ── Group 6 — 2nd Focus Group, Positive (f = +100.4 mm) ──
    {
      id: 14,
      name: "L61",
      label: "Element 14",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.79189,
      vd: 45.04,
      fl: 100.4,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Single-element focus group, aspherical rear — largest aspheric departure",
    },

    // ── Group 7 — Rear Negative (f = −47.4 mm) ──
    {
      id: 15,
      name: "L71",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 115.8,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Extreme flint (nd≈1.95) — secondary spectrum correction via strong chromatic contribution",
    },
    {
      id: 16,
      name: "L72",
      label: "Element 16",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.85207,
      vd: 40.15,
      fl: -54.9,
      glass: "S-LAH93 (OHARA)",
      apd: false,
      role: "Aspherical front corrects field curvature and astigmatism",
    },
    {
      id: 17,
      name: "L73",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.22,
      fl: -99.5,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Final element — telecentricity and field curvature trim",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group 1 ──
    { label: "1", R: 234.3873, d: 2.5, nd: 1.84666, elemId: 1, sd: 18.5 }, // L11 front (cemented doublet D1)
    { label: "2", R: 109.518, d: 5.2, nd: 1.755, elemId: 2, sd: 18.5 }, // L11→L12 junction
    { label: "3", R: 389.6852, d: 0.2, nd: 1.0, elemId: 0, sd: 18.5 }, // L12 rear → air
    { label: "4", R: 59.0627, d: 5.7, nd: 1.7725, elemId: 3, sd: 18.0 }, // L13 front
    { label: "5", R: 135.3649, d: 1.78, nd: 1.0, elemId: 0, sd: 17.0 }, // L13 rear → air (VARIABLE: zoom D5)

    // ── Group 2 ──
    { label: "6A", R: 218.442, d: 2.0, nd: 1.74389, elemId: 4, sd: 15.5 }, // L21 front (aspherical)
    { label: "7", R: 18.6957, d: 9.658, nd: 1.0, elemId: 0, sd: 15.0 }, // L21 rear → air
    { label: "8", R: -59.6856, d: 1.3, nd: 1.7725, elemId: 5, sd: 14.5 }, // L22 front
    { label: "9", R: 59.6856, d: 0.442, nd: 1.0, elemId: 0, sd: 14.5 }, // L22 rear → air
    { label: "10", R: 39.2099, d: 6.4, nd: 1.72825, elemId: 6, sd: 14.0 }, // L23 front
    { label: "11", R: -48.6731, d: 1.933, nd: 1.0, elemId: 0, sd: 13.5 }, // L23 rear → air
    { label: "12", R: -26.4065, d: 1.3, nd: 1.618, elemId: 7, sd: 13.0 }, // L24 front
    { label: "13", R: -71.7612, d: 19.285, nd: 1.0, elemId: 0, sd: 13.0 }, // L24 rear → air (VARIABLE: zoom D13)

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 1.712, nd: 1.0, elemId: 0, sd: 12.0 }, // aperture stop (patent surface 14)

    // ── Group 3 ──
    { label: "15A", R: 71.8876, d: 2.5, nd: 1.6937, elemId: 8, sd: 13.5 }, // L31 front (aspherical)
    { label: "16", R: 127.6411, d: 0.716, nd: 1.0, elemId: 0, sd: 13.5 }, // L31 rear → air
    { label: "17", R: 38.7492, d: 5.9, nd: 1.59319, elemId: 9, sd: 14.0 }, // L32 front
    { label: "18", R: -105.4274, d: 9.167, nd: 1.0, elemId: 0, sd: 14.0 }, // L32 rear → air (VARIABLE: zoom D18)

    // ── Group 4 ──
    { label: "19", R: 67.0276, d: 1.3, nd: 1.738, elemId: 10, sd: 14.0 }, // L41 front (cemented doublet D2)
    { label: "20", R: 19.5126, d: 9.7, nd: 1.49782, elemId: 11, sd: 14.0 }, // L41→L42 junction
    { label: "21", R: -50.5609, d: 5.179, nd: 1.0, elemId: 0, sd: 14.0 }, // L42 rear → air (VARIABLE: zoom+focus D21)

    // ── Group 5 ──
    { label: "22", R: -23.9237, d: 1.2, nd: 1.72047, elemId: 12, sd: 12.5 }, // L51 front
    { label: "23", R: -56.2081, d: 0.2, nd: 1.0, elemId: 0, sd: 12.5 }, // L51 rear → air
    { label: "24", R: 103.1749, d: 5.9, nd: 1.59349, elemId: 13, sd: 13.0 }, // L52 front
    { label: "25", R: -33.0197, d: 2.679, nd: 1.0, elemId: 0, sd: 13.0 }, // L52 rear → air (VARIABLE: zoom+focus D25)

    // ── Group 6 ──
    { label: "26", R: -70.6288, d: 3.5, nd: 1.79189, elemId: 14, sd: 13.5 }, // L61 front
    { label: "27A", R: -38.2153, d: 6.128, nd: 1.0, elemId: 0, sd: 13.5 }, // L61 rear → air (aspherical, VARIABLE: zoom+focus D27)

    // ── Group 7 ──
    { label: "28", R: -43.9824, d: 3.0, nd: 1.94595, elemId: 15, sd: 14.0 }, // L71 front
    { label: "29", R: -32.4253, d: 0.2, nd: 1.0, elemId: 0, sd: 14.0 }, // L71 rear → air
    { label: "30A", R: -100.5837, d: 1.5, nd: 1.85207, elemId: 16, sd: 14.5 }, // L72 front (aspherical)
    { label: "31", R: 88.1634, d: 7.847, nd: 1.0, elemId: 0, sd: 14.5 }, // L72 rear → air
    { label: "32", R: -25.2838, d: 1.4, nd: 1.58913, elemId: 17, sd: 15.0 }, // L73 front
    { label: "33", R: -45.3661, d: 11.93, nd: 1.0, elemId: 0, sd: 15.0 }, // L73 rear → air (VARIABLE: BF)
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: Z(h) = h²/R / [1 + √(1−(1+κ)(h/R)²)] + ΣAᵢhⁱ
   *  κ = 1.0 for all surfaces (oblate ellipsoid base, (1+κ)=2.0).
   *  Template K field uses standard conic constant K where (1+K) appears in sag equation.
   */
  asph: {
    "6A": {
      K: 1.0,
      A4: 5.27866e-6,
      A6: -5.41835e-9,
      A8: 1.33113e-11,
      A10: -2.04736e-14,
      A12: 2.0509e-17,
      A14: 0,
    },
    "15A": {
      K: 1.0,
      A4: -4.55747e-6,
      A6: -1.40092e-10,
      A8: -8.81384e-13,
      A10: -8.42653e-15,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 1.0,
      A4: 1.09543e-5,
      A6: -2.36281e-8,
      A8: 1.42728e-10,
      A10: -5.02724e-13,
      A12: 7.518e-16,
      A14: 0,
    },
    "30A": {
      K: 1.0,
      A4: -2.18913e-6,
      A6: -2.29301e-8,
      A8: 3.94582e-11,
      A10: -9.842e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  3 zoom positions: Wide (24.8mm), Mid (34.7mm), Tele (67.9mm).
   *  Each value is [d_infinity, d_close_focus] at that zoom position.
   *
   *  D5, D13, D18: zoom-only gaps (identical inf/close values).
   *  D21, D25, D27, BF: zoom + focus gaps (different inf/close).
   *
   *  Focus groups: G5 (gaps D21, D25) and G6 (gaps D25, D27).
   *  G4 and G7 are stationary during focus.
   *  Sum of focus gap changes = 0 at each zoom position (verified ±0.001mm).
   */
  var: {
    // Zoom-only gaps
    5: [
      [1.78, 1.78],
      [11.449, 11.449],
      [30.246, 30.246],
    ], // G1→G2
    13: [
      [19.285, 19.285],
      [10.055, 10.055],
      [2.013, 2.013],
    ], // G2→Stop/G3
    18: [
      [9.167, 9.167],
      [4.523, 4.523],
      [1.493, 1.493],
    ], // G3→G4

    // Zoom + focus gaps
    21: [
      [5.179, 4.137],
      [14.279, 12.991],
      [19.018, 17.666],
    ], // G4→G5
    25: [
      [2.679, 3.249],
      [3.515, 4.079],
      [2.616, 3.027],
    ], // G5→G6
    "27A": [
      [6.128, 6.6],
      [2.807, 3.53],
      [1.953, 2.893],
    ], // G6→G7
    33: [
      [11.93, 12.402],
      [18.88, 19.444],
      [28.62, 29.571],
    ], // BF (G7→image)
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["18", "D18"],
    ["21", "D21"],
    ["25", "D25"],
    ["27A", "D27"],
    ["33", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [24.8, 34.7, 67.9],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+119)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−22)", fromSurface: "6A", toSurface: "13" },
    { text: "G3 (+41)", fromSurface: "15A", toSurface: "18" },
    { text: "G4 (+116)", fromSurface: "19", toSurface: "21" },
    { text: "G5 (+125)", fromSurface: "22", toSurface: "25" },
    { text: "G6 (+100)", fromSurface: "26", toSurface: "27A" },
    { text: "G7 (−47)", fromSurface: "28", toSurface: "33" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.38,
  focusDescription:
    "Dual-group inner focus: G5 and G6 move independently toward object. Driven by separate stepping motors (STM5 + STM6) on shared barrel member.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
