import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S.                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: JP 2020-086133 A, Numerical Example 6 (Sigma Corporation).         ║
 * ║  Product correlation: strong inference, not an explicit statement in the patent.   ║
 * ║  Native-scale model: 23 elements / 17 air-spaced groups / 7 functional groups.     ║
 * ║  One aspherical surface: source surface 40, labeled 40A below.                      ║
 * ║                                                                                      ║
 * ║  Focus status: PUBLISHED. The file encodes the patent's infinity and 1.000 m        ║
 * ║  object-to-image states. G6 (L13-L14) moves objectward by 2.6344, 6.2169, and       ║
 * ║  16.7858 mm at wide, middle, and tele. The marketed 0.92 m state is not rebuilt.    ║
 * ║                                                                                      ║
 * ║  Internal zoom: source first-surface-to-image track is fixed at 193.72 mm. G1, G5,  ║
 * ║  and G7 are fixed; G2 is the principal variator; G3 and STO move together. G3, G4, ║
 * ║  and G6 reverse direction between the middle and tele positions.                    ║
 * ║  Zoom-only gaps: 5, 12, STO (source d15), 18. Zoom + focus gaps: 22, 25, and 41.   ║
 * ║                                                                                      ║
 * ║  Source correction: the close-focus table prints d16; geometry and repeated values  ║
 * ║  establish that this is d15, represented by the STO key.                            ║
 * ║                                                                                      ║
 * ║  Filter normalization: source plane-parallel filter surfaces 42-43 are omitted.     ║
 * ║  Surface 41 rear spacing is 30.3551 + 2.1074 / 1.51680 + published BF.              ║
 * ║                                                                                      ║
 * ║  Semi-diameters: inferred from reduced-angle axial and full-field bundles in all    ║
 * ║  six published states, checked against Figure 66, then constrained by positive edge ║
 * ║  thickness, actual rim slope, conic validity, cross-gap clearance, and first-clip   ║
 * ║  location. gapSagFrac 0.93 is required only by the 0.6288 mm G5 inter-element gap;  ║
 * ║  the modeled shared rim band retains 0.0468 mm physical clearance.                  ║
 * ║                                                                                      ║
 * ║  Glass labels use six-digit nd/vd codes because the patent names no vendor.         ║
 * ║  nC, nF, ng, and dPgF are not authored: the patent does not publish them and the    ║
 * ║  code coordinates do not establish a unique vendor dispersion curve.               ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-lumix-s-pro-70-200-f4-ois",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S.",
  subtitle: "JP 2020-086133 A, Numerical Example 6 — strong inferred S-R70200 correlation",
  specs: [
    "23 ELEMENTS / 17 GROUPS",
    "DESIGN f = 72.50-193.95 mm",
    "MODELED F/4.11-4.15",
    "2ω = 33.12°-12.34°",
    "1 ASPHERICAL SURFACE",
    "PUBLISHED 1.000 m FOCUS STATE",
  ],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [72.501598, 193.954168],
  apertureMarketing: 4,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2020-086133 A",
  patentAuthors: ["佐藤 良祐", "小山 武久"],
  patentAssignees: ["Sigma Corporation"],
  patentYear: 2020,
  elementCount: 23,
  groupCount: 17,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.7552,
      vd: 27.53,
      fl: -288.336339,
      glass: "755275 — vendor unresolved",
      cemented: "D1",
      role: "Front negative component of fixed positive group G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 122.288958,
      glass: "497816 — vendor unresolved",
      cemented: "D1",
      role: "Positive partner of the front cemented pair in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.437,
      vd: 95.1,
      fl: 213.861998,
      glass: "437951 — vendor unresolved",
      role: "Low-dispersion positive meniscus completing fixed group G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus, convex to object",
      nd: 1.8061,
      vd: 33.27,
      fl: -84.386055,
      glass: "806333 — vendor unresolved",
      role: "G2a negative variator singlet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      fl: -46.180983,
      glass: "487704 — vendor unresolved",
      cemented: "D2",
      role: "Negative front component of G2b.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.78,
      fl: 48.149391,
      glass: "847238 — vendor unresolved",
      cemented: "D2",
      role: "Positive cemented partner within negative subgroup G2b.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus, concave to object",
      nd: 1.7725,
      vd: 49.62,
      fl: -69.183504,
      glass: "773496 — vendor unresolved",
      role: "Rear negative singlet of G2b.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8045,
      vd: 39.64,
      fl: 92.071445,
      glass: "805396 — vendor unresolved",
      role: "Positive G3 compensator moving with the aperture stop.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus, convex to object",
      nd: 2.001,
      vd: 29.13,
      fl: -72.869426,
      glass: "001291 — vendor unresolved",
      cemented: "D3",
      role: "Negative front component of positive group G4.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 38.425457,
      glass: "593686 — vendor unresolved",
      cemented: "D3",
      role: "Positive partner producing the net positive power of G4.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus, convex to object",
      nd: 1.91082,
      vd: 35.25,
      fl: 92.489013,
      glass: "911353 — vendor unresolved",
      role: "Positive component in fixed negative relay group G5.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.8,
      vd: 29.84,
      fl: -62.488074,
      glass: "800298 — vendor unresolved",
      role: "Negative component establishing the net negative power of G5.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 51.109916,
      glass: "487704 — vendor unresolved",
      cemented: "D4",
      role: "Positive front component of the translating G6 focus group.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus, concave to object",
      nd: 1.69895,
      vd: 30.05,
      fl: -130.446405,
      glass: "699301 — vendor unresolved",
      cemented: "D4",
      role: "Negative cemented partner in positive focus group G6.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.78,
      fl: 50.236389,
      glass: "847238 — vendor unresolved",
      cemented: "D5",
      role: "Positive front component of negative image-stabilizing subgroup G7a.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67,
      fl: -28.039852,
      glass: "593670 — vendor unresolved",
      cemented: "D5",
      role: "Negative cemented partner in the transversely moving G7a subgroup.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.801,
      vd: 34.97,
      fl: -60.599174,
      glass: "801350 — vendor unresolved",
      role: "Rear negative singlet completing OIS subgroup G7a.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 36.608793,
      glass: "497816 — vendor unresolved",
      role: "Low-dispersion positive entrance element of G7b.",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.05,
      fl: 26.268966,
      glass: "699301 — vendor unresolved",
      cemented: "D6",
      role: "Positive front component of the central G7b cemented pair.",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Negative Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.78,
      fl: -45.897638,
      glass: "847238 — vendor unresolved",
      cemented: "D6",
      role: "Negative cemented partner in G7b.",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      fl: -72.201483,
      glass: "729547 — vendor unresolved",
      role: "Negative correction element in G7b.",
    },
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Negative Meniscus, concave to object",
      nd: 1.83481,
      vd: 42.72,
      fl: -32.012512,
      glass: "835427 — vendor unresolved",
      role: "Strong negative meniscus preceding the final aspherical element.",
    },
    {
      id: 23,
      name: "L23",
      label: "Element 23",
      type: "Positive Meniscus (1× Asph), convex to object",
      nd: 1.58913,
      vd: 61.25,
      fl: 66.845521,
      glass: "589613 — vendor unresolved",
      role: "Final positive meniscus and sole aspherical correction element.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 110.8869, d: 1.7013, nd: 1.7552, elemId: 1, sd: 34 },
    { label: "2", R: 72.9872, d: 10.5583, nd: 1.497, elemId: 2, sd: 34 },
    { label: "3", R: -345.871, d: 0.1501, nd: 1, elemId: 0, sd: 34 },
    { label: "4", R: 59.1964, d: 6.405, nd: 1.437, elemId: 3, sd: 32 },
    { label: "5", R: 156.1623, d: 0.7606, nd: 1, elemId: 0, sd: 32 },
    { label: "6", R: 40.1615, d: 0.9007, nd: 1.8061, elemId: 4, sd: 21.5 },
    { label: "7", R: 24.9996, d: 11.3089, nd: 1, elemId: 0, sd: 21.5 },
    { label: "8", R: -148.116, d: 0.9007, nd: 1.48749, elemId: 5, sd: 16.4 },
    { label: "9", R: 26.6008, d: 4.0532, nd: 1.84666, elemId: 6, sd: 16.4 },
    { label: "10", R: 71.2058, d: 3.3026, nd: 1, elemId: 0, sd: 16.4 },
    { label: "11", R: -49.5188, d: 0.9007, nd: 1.7725, elemId: 7, sd: 13 },
    { label: "12", R: -679.5324, d: 33.3561, nd: 1, elemId: 0, sd: 13 },
    { label: "13", R: 224.676, d: 2.3518, nd: 1.8045, elemId: 8, sd: 13.1 },
    { label: "14", R: -109.9862, d: 1.0008, nd: 1, elemId: 0, sd: 13.1 },
    { label: "STO", R: 1e15, d: 3.823, nd: 1, elemId: 0, sd: 12.7 },
    { label: "16", R: 39.7929, d: 0.9007, nd: 2.001, elemId: 9, sd: 13.9 },
    { label: "17", R: 25.4554, d: 5.104, nd: 1.59282, elemId: 10, sd: 13.9 },
    { label: "18", R: -200.5164, d: 3.9631, nd: 1, elemId: 0, sd: 13.9 },
    { label: "19", R: 66.9425, d: 1.9938, nd: 1.91082, elemId: 11, sd: 13.0 },
    { label: "20", R: 321.3737, d: 0.6288, nd: 1, elemId: 0, sd: 11.8 },
    { label: "21", R: -180.7817, d: 0.9007, nd: 1.8, elemId: 12, sd: 11.6 },
    { label: "22", R: 69.2506, d: 19.1453, nd: 1, elemId: 0, sd: 13.0 },
    { label: "23", R: 70.2323, d: 5.4543, nd: 1.48749, elemId: 13, sd: 15.5 },
    { label: "24", R: -37.6316, d: 0.8006, nd: 1.69895, elemId: 14, sd: 15.5 },
    { label: "25", R: -64.6406, d: 3.0024, nd: 1, elemId: 0, sd: 15.5 },
    { label: "26", R: -386.1025, d: 2.8022, nd: 1.84666, elemId: 15, sd: 14.3 },
    { label: "27", R: -38.4401, d: 0.8006, nd: 1.59349, elemId: 16, sd: 14.3 },
    { label: "28", R: 29.5732, d: 2.9623, nd: 1, elemId: 0, sd: 14.3 },
    { label: "29", R: -131.0627, d: 0.8006, nd: 1.801, elemId: 17, sd: 11.1 },
    { label: "30", R: 77.3006, d: 1.4411, nd: 1, elemId: 0, sd: 12.0 },
    { label: "31", R: 35.1776, d: 7.0555, nd: 1.497, elemId: 18, sd: 14.8 },
    { label: "32", R: -35.1776, d: 0.1501, nd: 1, elemId: 0, sd: 14.8 },
    { label: "33", R: 192.8511, d: 7.5559, nd: 1.69895, elemId: 19, sd: 14.7 },
    { label: "34", R: -19.9656, d: 0.9007, nd: 1.84666, elemId: 20, sd: 14.7 },
    { label: "35", R: -41.9128, d: 0.1501, nd: 1, elemId: 0, sd: 14.7 },
    { label: "36", R: -68.4736, d: 0.9007, nd: 1.72916, elemId: 21, sd: 14.5 },
    { label: "37", R: 229.0294, d: 6.0247, nd: 1, elemId: 0, sd: 14.5 },
    { label: "38", R: -24.1789, d: 0.9007, nd: 1.83481, elemId: 22, sd: 14.5 },
    { label: "39", R: -258.1522, d: 0.1501, nd: 1, elemId: 0, sd: 14.5 },
    { label: "40A", R: 33.5263, d: 4.9539, nd: 1.58913, elemId: 23, sd: 16.7 },
    { label: "41", R: 213.167, d: 32.092572363, nd: 1, elemId: 0, sd: 16.7 },
  ],

  asph: {
    "40A": {
      K: 0,
      A4: -1.1205e-5,
      A6: 2.28367e-8,
      A8: -6.93799e-11,
      A10: 9.63136e-14,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "5": [
      [0.7606, 0.7606],
      [20.4344, 20.4344],
      [35.3177, 35.3177],
    ],
    "12": [
      [33.3561, 33.3561],
      [17.9581, 17.9581],
      [1.221, 1.221],
    ],
    STO: [
      [3.823, 3.823],
      [1.5039, 1.5039],
      [1.5012, 1.5012],
    ],
    "18": [
      [3.9631, 3.9631],
      [2.0064, 2.0064],
      [3.863, 3.863],
    ],
    "22": [
      [19.1453, 16.5109],
      [15.0714, 8.8545],
      [19.1011, 2.3153],
    ],
    "25": [
      [3.0024, 5.6367],
      [7.0744, 13.2914],
      [3.0468, 19.8325],
    ],
    "41": [
      [32.092572363, 32.092672363],
      [32.094872363, 32.094872363],
      [32.092972363, 32.093072363],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["12", "D12"],
    ["STO", "D15"],
    ["18", "D18"],
    ["22", "D22"],
    ["25", "D25"],
    ["41", "BF (AIR-EQUIVALENT)"],
  ],

  zoomPositions: [72.5, 117.6, 193.95],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "14" },
    { text: "G4", fromSurface: "16", toSurface: "18" },
    { text: "G5", fromSurface: "19", toSurface: "22" },
    { text: "G6", fromSurface: "23", toSurface: "25" },
    { text: "G7", fromSurface: "26", toSurface: "41" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
    { text: "D6", fromSurface: "33", toSurface: "35" },
  ],

  closeFocusM: 1,
  focusDescription:
    "PUBLISHED: G6 (L13-L14) translates objectward between infinity and the patent's 1.000 m object-to-image state; travel is 2.6344 / 6.2169 / 16.7858 mm at wide / middle / tele. The marketed 0.92 m state is not reconstructed.",

  nominalFno: [4.15, 4.11, 4.14],
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  gapSagFrac: 0.93,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
