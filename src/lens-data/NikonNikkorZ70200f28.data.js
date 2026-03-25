/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 70-200mm f/2.8 VR S          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2020/105104 A1, Example 1 (Nikon / Ken Uehara).   ║
 * ║  Positive-lead internal-zoom telephoto with dual-group focus.      ║
 * ║  21 elements / 9 groups (18 marketing groups), 2 aspherical sfc.  ║
 * ║  Focus: dual-group inner focus (G7−, G8+) — opposite directions.  ║
 * ║                                                                    ║
 * ║  Internal zoom (constant overall length, TL = 199.886 mm).        ║
 * ║  Zoom variable gaps: D5, D13, D15, D19, D23 (zoom only).         ║
 * ║  Focus variable gaps: D30, D34, D36 (zoom + focus).              ║
 * ║  BF (D40) = 32.5469 mm constant (all zoom/focus positions).      ║
 * ║  D30+D34+D36 = 35.730 mm constant (focus groups rearrange        ║
 * ║  within a fixed total envelope).                                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated via paraxial marginal ray trace at tele/infinity  ║
 * ║    with 10% mechanical clearance.  G9 SDs enlarged for off-axis   ║
 * ║    field coverage (image half-height Y = 21.7 mm).  Not patent-   ║
 * ║    listed — these are engineering estimates for rendering only.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-70-200f28",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 70-200mm f/2.8 VR S",
  subtitle: "WO2020/105104 EXAMPLE 1 — NIKON / KEN UEHARA",
  specs: ["21 ELEMENTS / 18 GROUPS", "f = 71.5–196 mm", "F/2.88", "2ω = 33.8°–12.3°", "2 ASPHERICAL SURFACES"],

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.12,
      fl: -317.0,
      glass: "S-LAH99 / TAFD55 (001-291)",
      apd: false,
      role: "Achromatic partner for L12; ultra-high nd minimizes surface curvatures",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 171.0,
      glass: "S-FPL52 — ED (498-826)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Primary positive power for G1; ED glass corrects LoCA",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43385,
      vd: 95.25,
      fl: 244.3,
      glass: "CaF₂ Fluorite (434-952)",
      apd: "inferred",
      apdNote: "Fluorite, strong +ΔPgF",
      role: "Positive power with minimal chromatic contribution; lightweight",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.603,
      vd: 65.44,
      fl: -115.5,
      glass: "S-PHM53 or equiv. (603-654)",
      apd: false,
      role: "First negative element of variator; Petzval sum control",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -135.2,
      glass: "S-FPL52 — ED (498-826)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Strong negative power with low dispersion; LoCA correction in variator",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.66382,
      vd: 27.35,
      fl: 172.8,
      glass: "Nikon SR glass (proprietary)",
      apd: "patent",
      apdNote: "θgF=0.6319; extreme +ΔPgF for secondary spectrum correction",
      role: "SR element — anomalous dispersion corrects secondary spectrum across zoom range",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -79.6,
      glass: "S-FPL52 — ED (498-826)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Additional variator negative power; chromatic balance with SR element",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 112.0,
      glass: "FDS18 (HOYA) / H-ZF88 (946-180)",
      apd: false,
      role: "Zoom compensator; ultra-high nd minimizes SA from moving group",
    },
    {
      id: 9,
      name: "L41",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 126.8,
      glass: "S-FPL52 — ED (498-826)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Relay positive power with minimal color contribution",
    },
    {
      id: 10,
      name: "L42",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 156.4,
      glass: "S-FPL52 — ED (498-826)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Additional relay power; all-ED pair minimizes G4 LoCA",
    },
    {
      id: 11,
      name: "L51",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 20.88,
      fl: -35.0,
      glass: "N-SF66 / E-FDS1 (923-209)",
      apd: false,
      role: "Strong negative power; Petzval correction at stop",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L52",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 80.3,
      glass: "S-FPL52 — ED (498-826)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Achromatic partner for L51",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L61",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      fl: -155.6,
      glass: "Dense flint (850-324, no exact match)",
      apd: false,
      role: "Aberration correction; high-index field corrector",
    },
    {
      id: 14,
      name: "L62",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59306,
      vd: 66.97,
      fl: 48.2,
      glass: "PCD51 (HOYA) / J-PSKH4 (593-670)",
      apd: false,
      role: "Primary SA/coma correction via aspherical surface; PGM-moldable glass",
      cemented: "D3",
    },
    {
      id: 15,
      name: "L63",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.4,
      fl: -215.7,
      glass: "S-TIM2 / N-F2 (620-364)",
      apd: false,
      role: "Achromatic correction partner for L62",
      cemented: "D3",
    },
    {
      id: 16,
      name: "L64",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.801,
      vd: 34.92,
      fl: 126.9,
      glass: "Dense flint (801-349, no exact match)",
      apd: false,
      role: "Additional positive power; coma correction",
    },
    {
      id: 17,
      name: "L71",
      label: "Element 17",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 142.3,
      glass: "FDS18 (HOYA) / H-ZF88 (946-180)",
      apd: false,
      role: "Positive element within negative focus group; SA balance during focus",
    },
    {
      id: 18,
      name: "L72",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.96,
      fl: -53.6,
      glass: "S-LAL8 / N-LAK8 (713-540)",
      apd: false,
      role: "Dominant negative power for G7; lanthanum crown for Petzval control",
    },
    {
      id: 19,
      name: "L81",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.90265,
      vd: 35.77,
      fl: 66.1,
      glass: "J-LASFH9A / ~S-LAH93 (903-358)",
      apd: false,
      role: "Sole element of G8; symmetric form minimizes coma; high-nd for compact focus group",
    },
    {
      id: 20,
      name: "L91",
      label: "Element 20",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51696,
      vd: 64.14,
      fl: -214.2,
      glass: "S-BSL7 / N-BK7 (517-641)",
      apd: false,
      role: "Aspherical field flattener; corrects astigmatism and field curvature",
    },
    {
      id: 21,
      name: "L92",
      label: "Element 21",
      type: "Negative Meniscus",
      nd: 1.56384,
      vd: 60.71,
      fl: -121.0,
      glass: "S-BAL41 / N-SK11 (564-607)",
      apd: false,
      role: "Final Petzval correction for 43.4 mm image circle",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Fixed front group (positive, f = +148.0 mm) ──
    { label: "1", R: 116.34563, d: 2.8, nd: 2.001, elemId: 1, sd: 37.5 }, // L11 front
    { label: "2", R: 85.133, d: 9.7, nd: 1.49782, elemId: 2, sd: 37.0 }, // L11→L12 junction
    { label: "3", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 36.5 }, // L12 rear → air
    { label: "4", R: 92.01324, d: 7.7, nd: 1.43385, elemId: 3, sd: 36.0 }, // L13 front (fluorite)
    { label: "5", R: 696.98757, d: 1.59716, nd: 1.0, elemId: 0, sd: 35.0 }, // L13 rear → air [VAR zoom]

    // ── G2: Variator (negative, f = −40.6 mm) — moves during zoom ──
    { label: "6", R: 58.77, d: 1.9, nd: 1.603, elemId: 4, sd: 24.0 }, // L21 front
    { label: "7", R: 31.87745, d: 10.3, nd: 1.0, elemId: 0, sd: 23.0 }, // L21 rear → air
    { label: "8", R: -186.53352, d: 1.6, nd: 1.49782, elemId: 5, sd: 22.0 }, // L22 front (ED)
    { label: "9", R: 105.34866, d: 0.8, nd: 1.0, elemId: 0, sd: 21.5 }, // L22 rear → air
    { label: "10", R: 41.08366, d: 3.7, nd: 1.66382, elemId: 6, sd: 21.0 }, // L23 front (SR)
    { label: "11", R: 64.00891, d: 5.5, nd: 1.0, elemId: 0, sd: 20.5 }, // L23 rear → air
    { label: "12", R: -71.62319, d: 1.9, nd: 1.49782, elemId: 7, sd: 20.0 }, // L24 front (ED)
    { label: "13", R: 88.67881, d: 37.80333, nd: 1.0, elemId: 0, sd: 19.5 }, // L24 rear → air [VAR zoom]

    // ── G3: Compensator (positive, f = +110.7 mm) — moves during zoom ──
    { label: "14", R: 69.46271, d: 3.2, nd: 1.94595, elemId: 8, sd: 19.5 }, // L31 front
    { label: "15", R: 201.8299, d: 14.09965, nd: 1.0, elemId: 0, sd: 19.0 }, // L31 rear → air [VAR zoom]

    // ── G4: Fixed relay (positive, f = +69.8 mm) ──
    { label: "16", R: 126.26563, d: 4.7, nd: 1.49782, elemId: 9, sd: 19.5 }, // L41 front (ED)
    { label: "17", R: -126.26563, d: 0.1, nd: 1.0, elemId: 0, sd: 19.5 }, // L41 rear → air
    { label: "18", R: 47.66354, d: 3.85, nd: 1.49782, elemId: 10, sd: 19.0 }, // L42 front (ED)
    { label: "19", R: 122.86616, d: 4.24982, nd: 1.0, elemId: 0, sd: 18.5 }, // L42 rear → air [VAR zoom]

    // ── G5: Moving group with aperture stop (negative, f = −62.6 mm) ──
    { label: "STO", R: 1e15, d: 3.5, nd: 1.0, elemId: 0, sd: 13.0 }, // Aperture stop
    { label: "21", R: -84.82141, d: 1.8, nd: 1.92286, elemId: 11, sd: 14.0 }, // L51 front
    { label: "22", R: 52.171, d: 5.0, nd: 1.49782, elemId: 12, sd: 14.0 }, // L51→L52 junction
    { label: "23", R: -170.93248, d: 5.35666, nd: 1.0, elemId: 0, sd: 14.0 }, // L52 rear → air [VAR zoom]

    // ── G6: Fixed relay (positive, f = +56.9 mm) ──
    { label: "24", R: 111.64091, d: 1.7, nd: 1.85026, elemId: 13, sd: 15.5 }, // L61 front
    { label: "25", R: 60.55636, d: 2.0, nd: 1.0, elemId: 0, sd: 15.5 }, // L61 rear → air
    { label: "26A", R: 58.68256, d: 7.7, nd: 1.59306, elemId: 14, sd: 15.5 }, // L62 front [ASPH]
    { label: "27", R: -55.839, d: 1.7, nd: 1.62004, elemId: 15, sd: 15.5 }, // L62→L63 junction
    { label: "28", R: -95.85894, d: 1.3, nd: 1.0, elemId: 0, sd: 15.0 }, // L63 rear → air
    { label: "29", R: 58.0393, d: 2.7, nd: 1.801, elemId: 16, sd: 15.0 }, // L64 front
    { label: "30", R: 135.30037, d: 3.81632, nd: 1.0, elemId: 0, sd: 14.5 }, // L64 rear → air [VAR zoom+focus]

    // ── G7: Focus group 1 (negative, f = −87.3 mm) — moves toward image ──
    { label: "31", R: -369.28597, d: 2.0, nd: 1.94595, elemId: 17, sd: 14.0 }, // L71 front
    { label: "32", R: -98.65201, d: 0.8, nd: 1.0, elemId: 0, sd: 14.0 }, // L71 rear → air
    { label: "33", R: 1344.92022, d: 1.25, nd: 1.713, elemId: 18, sd: 13.5 }, // L72 front
    { label: "34", R: 37.13115, d: 28.12371, nd: 1.0, elemId: 0, sd: 13.0 }, // L72 rear → air [VAR zoom+focus]

    // ── G8: Focus group 2 (positive, f = +66.6 mm) — moves toward object ──
    { label: "35", R: 119.39985, d: 3.85, nd: 1.90265, elemId: 19, sd: 12.5 }, // L81 front
    { label: "36", R: -119.39985, d: 3.7896, nd: 1.0, elemId: 0, sd: 12.5 }, // L81 rear → air [VAR zoom+focus]

    // ── G9: Fixed field corrector (negative, f = −76.3 mm) ──
    { label: "37A", R: -83.23047, d: 1.9, nd: 1.51696, elemId: 20, sd: 18.0 }, // L91 front [ASPH]
    { label: "38", R: -335.27926, d: 4.1, nd: 1.0, elemId: 0, sd: 18.5 }, // L91 rear → air
    { label: "39", R: -54.71091, d: 1.9, nd: 1.56384, elemId: 21, sd: 19.0 }, // L92 front
    { label: "40", R: -276.64763, d: 32.5469, nd: 1.0, elemId: 0, sd: 19.5 }, // L92 rear → BF (constant)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "26A": {
      K: 0,
      A4: -2.0e-6,
      A6: 8.31e-10,
      A8: -6.83e-12,
      A10: 2.63e-14,
      A12: -3.55e-17,
      A14: 0,
    },
    "37A": {
      K: 0,
      A4: 1.18e-6,
      A6: 1.63e-9,
      A8: -7.32e-12,
      A10: 2.41e-14,
      A12: -2.65e-17,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom format: each value is an array of [d_infinity, d_close] pairs,
   *  one per zoom position (wide / mid / tele).
   *
   *  D5, D13, D15, D19, D23: zoom only (identical inf/close values).
   *  D30, D34, D36: zoom + focus (different inf/close values).
   *  BF (D40) = 32.5469 constant — not included here.
   */
  var: {
    // ── Zoom-only gaps ──
    5: [
      [1.59716, 1.59716],
      [33.49859, 33.49859],
      [49.53103, 49.53103],
    ], // G1→G2
    13: [
      [37.80333, 37.80333],
      [11.65214, 11.65214],
      [1.60516, 1.60516],
    ], // G2→G3
    15: [
      [14.09965, 14.09965],
      [8.34942, 8.34942],
      [2.36395, 2.36395],
    ], // G3→G4
    19: [
      [4.24982, 4.24982],
      [7.0795, 7.0795],
      [8.12305, 8.12305],
    ], // G4→STO/G5
    23: [
      [5.35666, 5.35666],
      [2.52698, 2.52698],
      [1.48342, 1.48342],
    ], // G5→G6
    // ── Zoom + focus gaps ──
    30: [
      [3.81632, 5.10137],
      [6.22894, 11.89468],
      [4.10722, 15.63265],
    ], // G6→G7
    34: [
      [28.12371, 24.58984],
      [22.59291, 10.97816],
      [27.70989, 4.65903],
    ], // G7→G8
    36: [
      [3.7896, 6.03843],
      [6.90778, 12.8568],
      [3.91252, 15.43795],
    ], // G8→G9
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

  /* ── Zoom fields ── */
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
    { text: "D1", fromSurface: "1", toSurface: "3" }, // L11+L12 cemented
    { text: "D2", fromSurface: "21", toSurface: "23" }, // L51+L52 cemented
    { text: "D3", fromSurface: "26A", toSurface: "28" }, // L62+L63 cemented
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Dual-group inner focus: G7 (neg.) moves toward image, G8 (pos.) moves toward object. Equal ±11.5 mm travel at tele. Multi-focusing via two STM motors.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.65,
  yScFill: 0.42,
};

export default LENS_DATA;
