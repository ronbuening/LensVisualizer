/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR Z 70-200mm f/2.8 VR S                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2020/105104 A1 (JPWO2020105104A1), Example 1     ║
 * ║  (Nikon / Internal zoom telephoto for Z-mount).                   ║
 * ║  21 elements / 9 groups, 2 aspherical surfaces.                   ║
 * ║  Internal zoom (constant overall length 199.89 mm).               ║
 * ║  Focus: Two inner-focus groups (F1, F2) within the rear section.  ║
 * ║  Zoom variable gaps: D5, D13, D15, D19, D23 (zoom only).         ║
 * ║  Focus variable gaps: D30, D34, D36 (zoom + focus).               ║
 * ║  Back focus (BF) is constant at 32.5469 mm.                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in the patent. Estimated from paraxial marginal     ║
 * ║    ray trace at wide end (EP SD ≈ 12.4 mm at f/2.88) with 10%   ║
 * ║    mechanical clearance. Front elements sized for full 70mm       ║
 * ║    field coverage. STO SD from patent half-angle + geometry.      ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAP D34 (REVERSING GROUP):                      ║
 * ║    D34 exhibits non-monotonic zoom behavior:                      ║
 * ║    W=28.12 → M=22.59 → T=27.71 (decreases then increases).      ║
 * ║    This is correctly handled by piecewise-linear interpolation.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z70-200f28",
  name: "NIKON NIKKOR Z 70-200mm f/2.8 VR S",
  subtitle: "WO 2020/105104 A1 EXAMPLE 1 — NIKON",
  visible: true,
  specs: ["21 ELEMENTS / 9 GROUPS", "f = 71.5–196 mm", "F/2.88", "2ω = 33.8°–12.3°", "2 ASPHERICAL SURFACES"],

  /* ── Elements ──
   *  21 optical elements, front to rear.
   *  Group architecture: G1(+), G2(-), G3(+), G4(+), G5(-), G6(+), G7(-), G8(+), G9(-)
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.12,
      fl: -315.0,
      glass: "S-NPH7 equiv (nd=2.001, νd=29.1)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 233.0,
      glass: "S-FPL51 equiv (nd=1.498, νd=82.6)",
      apd: "inferred",
      apdNote: "Fluorite-equivalent, νd=82.6",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43385,
      vd: 95.25,
      fl: 211.0,
      glass: "S-FPL55 equiv (nd=1.434, νd=95.3)",
      apd: "inferred",
      apdNote: "Fluorite crown, νd=95.3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.603,
      vd: 65.44,
      fl: -69.3,
      glass: "S-BSL7 equiv (nd=1.603, νd=65.4)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -133.0,
      glass: "S-FPL51 equiv (nd=1.498, νd=82.6)",
      apd: "inferred",
      apdNote: "Fluorite-equivalent ED",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.66382,
      vd: 27.35,
      fl: 65.0,
      glass: "S-TIH53 equiv (nd=1.664, νd=27.4)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -56.0,
      glass: "S-FPL51 equiv (nd=1.498, νd=82.6)",
      apd: "inferred",
      apdNote: "Fluorite-equivalent ED",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 17.98,
      fl: 111.0,
      glass: "S-NPH53 equiv (nd=1.946, νd=18.0)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 63.1,
      glass: "S-FPL51 equiv (nd=1.498, νd=82.6)",
      apd: "inferred",
      apdNote: "Fluorite-equivalent ED",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 121.0,
      glass: "S-FPL51 equiv (nd=1.498, νd=82.6)",
      apd: "inferred",
      apdNote: "Fluorite-equivalent ED",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: -31.3,
      glass: "S-NPH4 equiv (nd=1.923, νd=20.9)",
      cemented: "D1",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 53.0,
      glass: "S-FPL51 equiv (nd=1.498, νd=82.6)",
      apd: "inferred",
      apdNote: "Fluorite-equivalent ED",
      cemented: "D1",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      fl: -133.0,
      glass: "S-NBH51 equiv (nd=1.850, νd=32.4)",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.59306,
      vd: 66.97,
      fl: 28.8,
      glass: "S-FPM2 equiv (nd=1.593, νd=67.0)",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.0",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.4,
      fl: -182.0,
      glass: "S-TIM25 equiv (nd=1.620, νd=36.4)",
      cemented: "D2",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.92,
      fl: 87.0,
      glass: "S-LAH65VS equiv (nd=1.801, νd=34.9)",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: -87.0,
      glass: "S-NPH53 equiv (nd=1.946, νd=18.0)",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.96,
      fl: -102.0,
      glass: "S-LAL61 equiv (nd=1.713, νd=54.0)",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.90265,
      vd: 35.77,
      fl: 63.1,
      glass: "S-LAH79 equiv (nd=1.903, νd=35.8)",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51696,
      vd: 64.14,
      fl: -104.0,
      glass: "S-BSL7 equiv (nd=1.517, νd=64.1)",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Negative Meniscus",
      nd: 1.56384,
      vd: 60.71,
      fl: -103.0,
      glass: "S-BAL41 equiv (nd=1.564, νd=60.7)",
    },
  ],

  /* ── Surface prescription ──
   *  40 patent surfaces → 40 data file surfaces.
   *  Surface 20 is the aperture stop (STO).
   *
   *  elemId assignment:
   *    - Front (entry) surface of each element → elemId = element's id
   *    - Rear surface to air → elemId = 0
   *    - Cemented junction → elemId = second element's id
   *    - STO and all air interfaces → elemId = 0
   */
  surfaces: [
    //                                                                          Patent
    // label    R              d         nd         elemId  sd      // surf   Description
    { label: "1", R: 116.34563, d: 2.8, nd: 2.001, elemId: 1, sd: 35.5 }, // 1   L1 front (G1)
    { label: "2", R: 85.133, d: 9.7, nd: 1.49782, elemId: 2, sd: 34.0 }, // 2   L1→L2 cemented junction
    { label: "3", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 34.0 }, // 3   L2 rear → air (flat)
    { label: "4", R: 92.01324, d: 7.7, nd: 1.43385, elemId: 3, sd: 34.0 }, // 4   L3 front
    { label: "5", R: 696.98757, d: 1.597, nd: 1.0, elemId: 0, sd: 33.5 }, // 5   L3 rear → air (variable: zoom)
    { label: "6", R: 58.77, d: 1.9, nd: 1.603, elemId: 4, sd: 22.0 }, // 6   L4 front (G2)
    { label: "7", R: 31.87745, d: 10.3, nd: 1.0, elemId: 0, sd: 19.5 }, // 7   L4 rear → air
    { label: "8", R: -186.53352, d: 1.6, nd: 1.49782, elemId: 5, sd: 19.0 }, // 8   L5 front
    { label: "9", R: 105.34866, d: 0.8, nd: 1.0, elemId: 0, sd: 18.5 }, // 9   L5 rear → air
    { label: "10", R: 41.08366, d: 3.7, nd: 1.66382, elemId: 6, sd: 18.0 }, // 10  L6 front
    { label: "11", R: 64.00891, d: 5.5, nd: 1.0, elemId: 0, sd: 17.0 }, // 11  L6 rear → air
    { label: "12", R: -71.62319, d: 1.9, nd: 1.49782, elemId: 7, sd: 17.0 }, // 12  L7 front
    { label: "13", R: 88.67881, d: 37.803, nd: 1.0, elemId: 0, sd: 17.0 }, // 13  L7 rear → air (variable: zoom)
    { label: "14", R: 69.46271, d: 3.2, nd: 1.94595, elemId: 8, sd: 16.0 }, // 14  L8 front (G3)
    { label: "15", R: 201.8299, d: 14.1, nd: 1.0, elemId: 0, sd: 16.0 }, // 15  L8 rear → air (variable: zoom)
    { label: "16", R: 126.26563, d: 4.7, nd: 1.49782, elemId: 9, sd: 17.0 }, // 16  L9 front (G4)
    { label: "17", R: -126.26563, d: 0.1, nd: 1.0, elemId: 0, sd: 17.0 }, // 17  L9 rear → air
    { label: "18", R: 47.66354, d: 3.85, nd: 1.49782, elemId: 10, sd: 16.5 }, // 18  L10 front
    { label: "19", R: 122.86616, d: 4.25, nd: 1.0, elemId: 0, sd: 16.0 }, // 19  L10 rear → air (variable: zoom)
    { label: "STO", R: 1e15, d: 3.5, nd: 1.0, elemId: 0, sd: 12.4 }, // 20  Aperture stop (G5)
    { label: "21", R: -84.82141, d: 1.8, nd: 1.92286, elemId: 11, sd: 12.5 }, // 21  L11 front — cemented D1
    { label: "22", R: 52.171, d: 5.0, nd: 1.49782, elemId: 12, sd: 13.0 }, // 22  L11→L12 junction — cemented D1
    { label: "23", R: -170.93248, d: 5.357, nd: 1.0, elemId: 0, sd: 13.0 }, // 23  L12 rear → air (variable: zoom)
    { label: "24", R: 111.64091, d: 1.7, nd: 1.85026, elemId: 13, sd: 14.0 }, // 24  L13 front (G6)
    { label: "25", R: 60.55636, d: 2.0, nd: 1.0, elemId: 0, sd: 14.0 }, // 25  L13 rear → air
    { label: "26A", R: 58.68256, d: 7.7, nd: 1.59306, elemId: 14, sd: 14.5 }, // 26* L14 front (ASPH)
    { label: "27", R: -55.839, d: 1.7, nd: 1.62004, elemId: 15, sd: 14.5 }, // 27  L14→L15 junction — cemented D2
    { label: "28", R: -95.85894, d: 1.3, nd: 1.0, elemId: 0, sd: 14.0 }, // 28  L15 rear → air
    { label: "29", R: 58.0393, d: 2.7, nd: 1.801, elemId: 16, sd: 14.0 }, // 29  L16 front
    { label: "30", R: 135.30037, d: 3.816, nd: 1.0, elemId: 0, sd: 13.5 }, // 30  L16 rear → air (variable: zoom+focus)
    { label: "31", R: -369.28597, d: 2.0, nd: 1.94595, elemId: 17, sd: 12.0 }, // 31  L17 front (G7 — focus F1)
    { label: "32", R: -98.65201, d: 0.8, nd: 1.0, elemId: 0, sd: 12.0 }, // 32  L17 rear → air
    { label: "33", R: 1344.92022, d: 1.25, nd: 1.713, elemId: 18, sd: 12.0 }, // 33  L18 front
    { label: "34", R: 37.13115, d: 28.124, nd: 1.0, elemId: 0, sd: 11.5 }, // 34  L18 rear → air (variable: zoom+focus) — REVERSING
    { label: "35", R: 119.39985, d: 3.85, nd: 1.90265, elemId: 19, sd: 14.0 }, // 35  L19 front (G8 — focus F2)
    { label: "36", R: -119.39985, d: 3.79, nd: 1.0, elemId: 0, sd: 14.0 }, // 36  L19 rear → air (variable: zoom+focus)
    { label: "37A", R: -83.23047, d: 1.9, nd: 1.51696, elemId: 20, sd: 14.5 }, // 37* L20 front (ASPH) (G9)
    { label: "38", R: -335.27926, d: 4.1, nd: 1.0, elemId: 0, sd: 15.0 }, // 38  L20 rear → air
    { label: "39", R: -54.71091, d: 1.9, nd: 1.56384, elemId: 21, sd: 15.0 }, // 39  L21 front
    { label: "40", R: -276.64763, d: 32.547, nd: 1.0, elemId: 0, sd: 15.5 }, // 40  L21 rear → image (BF, constant)
  ],

  /* ── Aspherical coefficients ──
   *  Patent uses sag equation with conic κ and even-order polynomial A4–A12.
   */
  asph: {
    "26A": {
      K: 0.0,
      A4: -2.0e-6,
      A6: 8.31e-10,
      A8: -6.83e-12,
      A10: 2.63e-14,
      A12: -3.55e-17,
      A14: 0,
    },
    "37A": {
      K: 0.0,
      A4: 1.18e-6,
      A6: 1.63e-9,
      A8: -7.32e-12,
      A10: 2.41e-14,
      A12: -2.65e-17,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom lens format: each value is an array of [d_inf, d_close] pairs,
   *  one per zoom position (W=71.5mm, M=135mm, T=196mm).
   *
   *  D5, D13, D15, D19, D23: zoom-only (identical inf/close values).
   *  D30, D34, D36: zoom + focus (different inf/close values).
   *
   *  D34 exhibits non-monotonic (reversing) zoom behavior:
   *    W=28.12 → M=22.59 → T=27.71
   */
  var: {
    5: [
      [1.597, 1.597],
      [33.499, 33.499],
      [49.531, 49.531],
    ],
    13: [
      [37.803, 37.803],
      [11.652, 11.652],
      [1.605, 1.605],
    ],
    15: [
      [14.1, 14.1],
      [8.349, 8.349],
      [2.364, 2.364],
    ],
    19: [
      [4.25, 4.25],
      [7.08, 7.08],
      [8.123, 8.123],
    ],
    23: [
      [5.357, 5.357],
      [2.527, 2.527],
      [1.483, 1.483],
    ],
    30: [
      [3.816, 5.101],
      [6.229, 11.895],
      [4.107, 15.633],
    ],
    34: [
      [28.124, 24.59],
      [22.593, 10.978],
      [27.71, 4.659],
    ],
    36: [
      [3.79, 6.038],
      [6.908, 12.857],
      [3.913, 15.438],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["15", "D15"],
    ["19", "D19"],
    ["23", "D23"],
    ["30", "D30"],
    ["34", "D34"],
    ["36", "D36"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [71.5, 135, 196],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "15" },
    { text: "G4 (+)", fromSurface: "16", toSurface: "19" },
    { text: "G5 (−)", fromSurface: "STO", toSurface: "23" },
    { text: "G6 (+)", fromSurface: "24", toSurface: "30" },
    { text: "G7 (−)", fromSurface: "31", toSurface: "34" },
    { text: "G8 (+)", fromSurface: "35", toSurface: "36" },
    { text: "G9 (−)", fromSurface: "37A", toSurface: "40" },
  ],

  doublets: [
    { text: "D1", fromSurface: "21", toSurface: "23" },
    { text: "D2", fromSurface: "26A", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Dual inner-focus: F1 (G7, negative) moves toward image; F2 (G8, positive) moves toward object.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.38,
  maxAspectRatio: 3.0,
};

export default LENS_DATA;
