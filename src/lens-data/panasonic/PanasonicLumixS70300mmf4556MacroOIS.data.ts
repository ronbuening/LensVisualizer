import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  PANASONIC LUMIX S 70-300mm f/4.5-5.6 MACRO O.I.S.                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2022-125453 A, Numerical Example 1 / Embodiment 1.             ║
 * ║  Correlation: strong inferred S-R70300 match; patent and product values     ║
 * ║  separate. No dimensional scaling was applied.                             ║
 * ║                                                                              ║
 * ║  Model: 17 elements / 11 physical groups / 7 zoom groups; all spherical.   ║
 * ║  Group powers: G1(+)–G2(−)–G3(+)–G4(+)–G5(−)–G6(+)–G7(−).                 ║
 * ║  O.I.S.: all of G2 translates perpendicular to the optical axis.            ║
 * ║                                                                              ║
 * ║  Zoom states: published infinity-focus stations only.                       ║
 * ║  Zoom-only gaps: D6, D12, D19, D23, D27, D31, and BF.                      ║
 * ║  Reversing gap: D23 increases from wide to middle, then decreases.           ║
 * ║                                                                              ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent identifies G5 as       ║
 * ║  moving imageward for close focus but publishes no close-focus spacing       ║
 * ║  table. All var focus pairs are therefore identical. closeFocusM is product ║
 * ║  metadata only and does not create an internal focus state.                  ║
 * ║                                                                              ║
 * ║  Cement normalization: six repeated 0.010 mm generic adhesive layers at      ║
 * ║  raw patent surfaces 10, 16, 21, 25, 29, and 33 were removed. Each shared  ║
 * ║  junction is assigned directly to the downstream glass element, and the      ║
 * ║  0.010 mm axial thickness is folded into that downstream element. This       ║
 * ║  preserves every later axial station and the total track, but slightly       ║
 * ║  changes paraxial power relative to the raw adhesive-layer model.             ║
 * ║                                                                              ║
 * ║  Semi-diameters: inferred from exact spherical marginal/chief-ray envelopes  ║
 * ║  at all three zoom states, the published image height and field angles,      ║
 * ║  and the wide-open stop derived from the modeled F-number. Mechanical        ║
 * ║  clearance was added, then the current edge-thickness, actual rim-slope,     ║
 * ║  shared-band cross-gap, off-axis containment, and render-trim rules were     ║
 * ║  applied. The two thin front air gaps set the limiting clear apertures.       ║
 * ║                                                                              ║
 * ║  Spectral data: the patent supplies nd and νd only. nC, nF, ng, and dPgF    ║
 * ║  below are current HOYA catalog representatives for the matched six-digit    ║
 * ║  glass classes, not claims that Panasonic used those named melts. dPgF uses ║
 * ║  the LensVisualizer Schott-normal-line convention.                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-lumix-s-70-300-f45-56-macro-ois",
  name: "PANASONIC LUMIX S 70-300mm f/4.5-5.6 MACRO O.I.S.",
  maker: "Panasonic",
  subtitle: "JP 2022-125453 A, Numerical Example 1 — strong inferred S-R70300 correlation",
  specs: [
    "17 ELEMENTS / 11 GROUPS",
    "7 ZOOM GROUPS (+/−/+/+/−/+/−)",
    "ALL SPHERICAL",
    "G2 OPTICAL IMAGE STABILIZATION",
    "PUBLISHED INFINITY-FOCUS ZOOM STATES ONLY",
  ],
  focalLengthMarketing: [70, 300],
  focalLengthDesign: [72.844591, 288.233075],
  apertureMarketing: 4.5,
  apertureDesign: 4.54605,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2022-125453 A",
  patentAuthors: ["Takahiro Kitada", "Takehiro Nishioka", "Yoshio Matsumura", "Takakazu Bito"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2022,
  elementCount: 17,
  groupCount: 11,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION. The patent publishes infinity-focus zoom spacings and states that G5 moves imageward for close focus, but it provides no close-focus spacing row or travel. The production minimum-focus distance is retained only as catalog metadata; every authored var pair is identical between infinity and close.",

  /* ── Zoom and aperture ── */
  zoomPositions: [72.8, 144.7974, 287.997],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  nominalFno: [4.54605, 5.43172, 5.85441],
  closeFocusM: 0.54,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 11,

  /* ── Layout ── */
  scFill: 0.48,
  yScFill: 0.43,
  lensShiftFrac: 0.06,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -256.5229,
      glass: "904313 — TAFD25 / S-LAH95 class (HOYA line-index representative)",
      nC: 1.89526,
      nF: 1.92412,
      ng: 1.94128,
      dPgF: 0.00368024,
      role: "Front negative meniscus, convex to the object; moderates front-group ray angles and longitudinal color.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 178.663,
      glass: "497816 — FCD1 / S-FPL51 class (HOYA line-index representative)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.03236802,
      role: "Low-dispersion positive component of the front collecting group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 176.3143,
      glass: "437951 — FCD100 / H-FK95 class (HOYA line-index representative)",
      nC: 1.43559,
      nF: 1.44019,
      ng: 1.44264,
      dPgF: 0.0497582,
      role: "Very-low-dispersion positive meniscus completing G1 and reducing telephoto secondary color.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.3,
      fl: -73.9868,
      glass: "589613 — BACD5 / N-SK5 class (HOYA line-index representative)",
      nC: 1.58619,
      nF: 1.59581,
      ng: 1.601,
      dPgF: -0.0004775,
      role: "First negative element of the fixed G2 stabilization group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67,
      fl: -52.1737,
      glass: "593670 — PCD51 / J-PSKH4 class (HOYA line-index representative)",
      nC: 1.59078,
      nF: 1.59964,
      ng: 1.60439,
      dPgF: 0.005494,
      cemented: "D1",
      role: "Negative meniscus, convex to the object, forming the front component of G2 cemented doublet D1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 71.6229,
      glass: "847238 — FDS90-SG / N-SF57 class (HOYA line-index representative)",
      nC: 1.83649,
      nF: 1.87209,
      ng: 1.89413,
      dPgF: 0.01539796,
      cemented: "D1",
      role: "High-index positive partner of D1; completes the laterally translating G2 O.I.S. group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.87071,
      vd: 40.7,
      fl: 60.7655,
      glass: "871407 — TAFD32-class (HOYA representative; catalog Δnd = −0.00001)",
      nC: 1.86436,
      nF: 1.88573,
      ng: 1.89788,
      dPgF: -0.00709214,
      role: "High-index positive element beginning the converging G3 relay.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 38.5128,
      glass: "497816 — FCD1 / S-FPL51 class (HOYA line-index representative)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.03236802,
      cemented: "D2",
      role: "Low-dispersion positive component of the strong G3 cemented doublet D2.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.1,
      fl: -33.601,
      glass: "001291 — TAFD55-W / S-LAH99 class (HOYA line-index representative)",
      nC: 1.99105,
      nF: 2.0254,
      ng: 2.046,
      dPgF: 0.00469666,
      cemented: "D2",
      role: "Ultra-high-index negative partner of D2; controls Petzval curvature and near-stop spherical aberration.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -96.1853,
      glass: "847238 — FDS90-SG / N-SF57 class (HOYA line-index representative)",
      nC: 1.83649,
      nF: 1.87209,
      ng: 1.89413,
      dPgF: 0.01539796,
      cemented: "D3",
      role: "Negative front component of the compact positive G4 cemented doublet.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      fl: 46.5423,
      glass: "806333 — NBFD15-W / J-LASFH6 class (HOYA line-index representative)",
      nC: 1.79902,
      nF: 1.82324,
      ng: 1.8375,
      dPgF: 0.00056014,
      cemented: "D3",
      role: "Dominant positive component of G4; reconverges the beam behind the moving stop group.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.86966,
      vd: 20,
      fl: 40.0416,
      glass: "870200 — FDS20-W class (HOYA line-index representative)",
      nC: 1.85742,
      nF: 1.90086,
      ng: 1.92881,
      dPgF: 0.03337364,
      cemented: "D4",
      role: "Positive front component of the negative G5 focus doublet.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      fl: -21.6822,
      glass: "806333 — NBFD15-W / J-LASFH6 class (HOYA line-index representative)",
      nC: 1.79902,
      nF: 1.82324,
      ng: 1.8375,
      dPgF: 0.00056014,
      cemented: "D4",
      role: "Strong negative rear component of G5; the patent identifies this rigid doublet as the imageward focus group.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.9,
      fl: 35.5547,
      glass: "658509 — BACED5 / S-BSM25 class (HOYA line-index representative)",
      nC: 1.65454,
      nF: 1.66749,
      ng: 1.67471,
      dPgF: -0.00065348,
      cemented: "D5",
      role: "Positive front component of the positive G6 cemented doublet.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: -118.9628,
      glass: "923209 — E-FDS1-W / N-SF66 class (HOYA line-index representative)",
      nC: 1.91038,
      nF: 1.95457,
      ng: 1.98281,
      dPgF: 0.03032016,
      cemented: "D5",
      role: "High-index negative meniscus, convex to the image, balancing G6 chromatic and field power.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.85883,
      vd: 30,
      fl: 52.6743,
      glass: "859300 — NBFD30 class (HOYA line-index representative)",
      nC: 1.85052,
      nF: 1.87915,
      ng: 1.89627,
      dPgF: 0.00456,
      cemented: "D6",
      role: "Positive meniscus, convex to the image, forming the front component of the final negative group.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      fl: -27.7663,
      glass: "804465 — TAF3D / S-LAH65VS class (HOYA line-index representative)",
      nC: 1.799,
      nF: 1.8163,
      ng: 1.82594,
      dPgF: -0.008287,
      cemented: "D6",
      role: "Final negative element; supplies the rear-group divergence used for field and pupil control.",
    },
  ],

  /* ── Normalized surface prescription ── */
  surfaces: [
    // G1 (+)
    { label: "1", R: 149.0293, d: 1.7, nd: 1.90366, elemId: 1, sd: 27.0 },
    { label: "2", R: 90.2201, d: 0.2, nd: 1.0, elemId: 0, sd: 25.3 },
    { label: "3", R: 94.6947, d: 5.47, nd: 1.497, elemId: 2, sd: 25.3 },
    { label: "4", R: -1397.9052, d: 0.15, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "5", R: 71.4589, d: 5.86, nd: 1.437, elemId: 3, sd: 26.5 },
    { label: "6", R: 960.248, d: 3.2665, nd: 1.0, elemId: 0, sd: 26.0 },

    // G2 (−), O.I.S.
    { label: "7", R: -150.7398, d: 1.1, nd: 1.58913, elemId: 4, sd: 14.0 },
    { label: "8", R: 61.4845, d: 1.5325, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "9", R: 4030.4763, d: 1.0, nd: 1.59349, elemId: 5, sd: 13.0 },
    { label: "11", R: 30.7258, d: 2.95, nd: 1.84666, elemId: 6, sd: 13.5 },
    { label: "12", R: 59.5523, d: 35.1758, nd: 1.0, elemId: 0, sd: 13.5 },

    // G3 (+), stop moves with G3
    { label: "13", R: 219.4495, d: 2.62, nd: 1.87071, elemId: 7, sd: 13.5 },
    { label: "14", R: -69.3302, d: 0.2, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "15", R: 36.1872, d: 5.29, nd: 1.497, elemId: 8, sd: 13.0 },
    { label: "17", R: -38.6611, d: 1.01, nd: 2.001, elemId: 9, sd: 13.0 },
    { label: "18", R: 262.0546, d: 3.0, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "STO", R: 1e15, d: 9.687, nd: 1.0, elemId: 0, sd: 9.7 },

    // G4 (+)
    { label: "20", R: -127.3572, d: 0.8, nd: 1.84666, elemId: 10, sd: 11.5 },
    { label: "22", R: 226.5087, d: 2.8, nd: 1.8061, elemId: 11, sd: 11.5 },
    { label: "23", R: -44.7184, d: 4.2909, nd: 1.0, elemId: 0, sd: 11.5 },

    // G5 (−), published focus group
    { label: "24", R: 342.1455, d: 2.45, nd: 1.86966, elemId: 12, sd: 10.0 },
    { label: "26", R: -38.6393, d: 0.61, nd: 1.8061, elemId: 13, sd: 10.0 },
    { label: "27", R: 32.1349, d: 11.3199, nd: 1.0, elemId: 0, sd: 9.5 },

    // G6 (+)
    { label: "28", R: 67.746, d: 5.64, nd: 1.65844, elemId: 14, sd: 11.5 },
    { label: "30", R: -34.5895, d: 1.21, nd: 1.92286, elemId: 15, sd: 11.5 },
    { label: "31", R: -51.3411, d: 28.6871, nd: 1.0, elemId: 0, sd: 12.0 },

    // G7 (−)
    { label: "32", R: -69.6444, d: 3.87, nd: 1.85883, elemId: 16, sd: 13.5 },
    { label: "34", R: -28.1286, d: 1.31, nd: 1.8042, elemId: 17, sd: 14.0 },
    { label: "35", R: 110.5423, d: 22.63464, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  asph: {},

  /* ── Published infinity-focus zoom spacings; no close-focus reconstruction ── */
  var: {
    "6": [
      [3.2665, 3.2665],
      [33.0367, 33.0367],
      [62.7665, 62.7665],
    ],
    "12": [
      [35.1758, 35.1758],
      [19.5944, 19.5944],
      [4.0, 4.0],
    ],
    STO: [
      [9.687, 9.687],
      [5.5015, 5.5015],
      [4.773, 4.773],
    ],
    "23": [
      [4.2909, 4.2909],
      [7.8833, 7.8833],
      [3.9453, 3.9453],
    ],
    "27": [
      [11.3199, 11.3199],
      [19.9125, 19.9125],
      [36.7084, 36.7084],
    ],
    "31": [
      [28.6871, 28.6871],
      [15.0691, 15.0691],
      [1.0, 1.0],
    ],
    "35": [
      [22.63464, 22.63464],
      [43.83449, 43.83449],
      [61.26739, 61.26739],
    ],
  },
  varLabels: [
    ["6", "D6"],
    ["12", "D12"],
    ["STO", "D19"],
    ["23", "D23"],
    ["27", "D27"],
    ["31", "D31"],
    ["35", "BF"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−) O.I.S.", fromSurface: "7", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "13", toSurface: "STO" },
    { text: "G4 (+)", fromSurface: "20", toSurface: "23" },
    { text: "G5 (−) Focus", fromSurface: "24", toSurface: "27" },
    { text: "G6 (+)", fromSurface: "28", toSurface: "31" },
    { text: "G7 (−)", fromSurface: "32", toSurface: "35" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "12" },
    { text: "D2", fromSurface: "15", toSurface: "18" },
    { text: "D3", fromSurface: "20", toSurface: "23" },
    { text: "D4", fromSurface: "24", toSurface: "27" },
    { text: "D5", fromSurface: "28", toSurface: "31" },
    { text: "D6", fromSurface: "32", toSurface: "35" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
