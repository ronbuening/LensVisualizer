import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON RF 200-800mm f/6.3-9 IS USM                          ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2024/0134166 A1, Example 1 (Kohei Kimura / Canon).          ║
 * ║ Unscaled 29-surface all-spherical prescription; 17 elements /          ║
 * ║ 11 air-separated groups. Surface 19 is the published aperture plane.   ║
 * ║                                                                          ║
 * ║ Zoom: published infinity-focus states at 203.00, 390.84, 776.00 mm.    ║
 * ║ Variable gaps: D5, D10, D19/STO, D22, D26, D29. D19 and D26 reverse   ║
 * ║ direction at the intermediate state.                                    ║
 * ║                                                                          ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent identifies L5 as  ║
 * ║ the focusing unit and says it moves imageward toward close focus, but   ║
 * ║ publishes no close-focus internal spacings. Each focus pair therefore   ║
 * ║ repeats the published infinity spacing. closeFocusM is product metadata ║
 * ║ only and does not imply a traced close-focus prescription.              ║
 * ║                                                                          ║
 * ║ Stop: physical diameter is unpublished. Base STO.sd = 12.986356 mm is  ║
 * ║ back-solved from the wide-state design f/6.42. The nominalFno zoom      ║
 * ║ array implies 13.220/13.251 mm at the later states. Agreement with the  ║
 * ║ calibrated f-numbers is not independent diaphragm-diameter evidence.    ║
 * ║                                                                          ║
 * ║ Semi-diameters: modeled from exact spherical ray envelopes at the three ║
 * ║ published states using the default on-axis fan and 0.6-field off-axis   ║
 * ║ fan, then enlarged by about 6% where geometry permits. The D8 air gap   ║
 * ║ is the binding geometry constraint; S8/S9 are set to 15.25 mm to keep  ║
 * ║ shared-band sag intrusion below the current 0.90 limit. The defined      ║
 * ║ published and midpoint ray samples remain within all modeled apertures.  ║
 * ║                                                                          ║
 * ║ Glass: the patent supplies d-line nd/vd only. glass strings are          ║
 * ║ coordinate classes with supplier unresolved; no candidate catalog       ║
 * ║ nC/nF/ng values are promoted to patent facts.                            ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

// Integration SD audit: S27-S29 now use a common 15.0 mm rim from Figure 1 (PDF p. 2).
const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-200-800-f63-9-is-usm",
  maker: "Canon",
  name: "CANON RF 200-800mm f/6.3-9 IS USM",
  subtitle: "US 2024/0134166 A1 · Example 1 — strong production correlation, not manufacturer-confirmed",
  specs: [
    "17 ELEMENTS / 11 GROUPS",
    "DESIGN 203.00-776.00 mm",
    "F/6.42-9.18 (DESIGN)",
    "3 × 497816-CLASS LOW-DISPERSION ELEMENTS",
    "L2 TRANSVERSE IS / L5 FOCUS UNIT",
  ],

  focalLengthMarketing: [200, 800],
  focalLengthDesign: [203.00606, 776.180743],
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2024/0134166 A1",
  patentAuthors: ["Kohei Kimura"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2024,
  elementCount: 17,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 314.611417,
      glass: "N-FK5 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Front positive collector in patent unit L1.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      fl: 166.383119,
      glass: "497816 low-dispersion fluorophosphate class (supplier unresolved)",
      cemented: "C1",
      role: "Low-dispersion positive member of the near-afocal cemented pair in L1.",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.3,
      indexReference: "d",
      fl: -159.917447,
      glass: "613443 lanthanum/crown-flint class (supplier unresolved)",
      cemented: "C1",
      role: "Negative partner of the near-afocal cemented pair in L1.",
    },
    {
      id: 4,
      name: "L2a",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 85.280338,
      glass: "805254 dense-flint class (supplier unresolved)",
      cemented: "C2",
      role: "Positive member of the negative L2 image-stabilization unit.",
    },
    {
      id: 5,
      name: "L2b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -53.696442,
      glass: "773496 lanthanum crown class (supplier unresolved)",
      cemented: "C2",
      role: "Strong negative member of the L2 image-stabilization unit.",
    },
    {
      id: 6,
      name: "L2c",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      fl: -142.470788,
      glass: "835427 high-index lanthanum class (supplier unresolved)",
      role: "Rear negative element of the axially fixed L2 unit.",
    },
    {
      id: 7,
      name: "L3a",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      fl: 62.071135,
      glass: "497816 low-dispersion fluorophosphate class (supplier unresolved)",
      role: "Low-dispersion positive element at the front of positive unit L3.",
    },
    {
      id: 8,
      name: "L3b",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -39.999159,
      glass: "773496 lanthanum crown class (supplier unresolved)",
      cemented: "C3",
      role: "Negative member of the first cemented pair in L3.",
    },
    {
      id: 9,
      name: "L3c",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.54072,
      vd: 47.2,
      indexReference: "d",
      fl: 53.518219,
      glass: "541472 flint/crown class (supplier unresolved)",
      cemented: "C3",
      role: "Positive member of the first cemented pair in L3.",
    },
    {
      id: 10,
      name: "L3d",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      indexReference: "d",
      fl: 48.585388,
      glass: "518590 crown class (supplier unresolved)",
      cemented: "C4",
      role: "Positive member of the second cemented pair in L3.",
    },
    {
      id: 11,
      name: "L3e",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -46.42005,
      glass: "773496 lanthanum crown class (supplier unresolved)",
      cemented: "C4",
      role: "Negative partner immediately before the aperture plane at the end of L3.",
    },
    {
      id: 12,
      name: "L4a",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      indexReference: "d",
      fl: -71.027577,
      glass: "001255 high-index flint class (supplier unresolved)",
      cemented: "C5",
      role: "High-index negative member of positive unit L4.",
    },
    {
      id: 13,
      name: "L4b",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6134,
      vd: 44.3,
      indexReference: "d",
      fl: 38.405071,
      glass: "613443 lanthanum/crown-flint class (supplier unresolved)",
      cemented: "C5",
      role: "Strong positive partner completing positive unit L4.",
    },
    {
      id: 14,
      name: "L5a",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      indexReference: "d",
      fl: 96.113085,
      glass: "517524 crown class (supplier unresolved)",
      role: "Positive member of the negative L5 focusing unit.",
    },
    {
      id: 15,
      name: "L5b",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.7,
      indexReference: "d",
      fl: -38.418297,
      glass: "595677 low-dispersion high-index crown class (supplier unresolved)",
      role: "Strong negative member that makes L5 net negative within the moving focus unit.",
    },
    {
      id: 16,
      name: "L6a",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      fl: -43.84835,
      glass: "497816 low-dispersion fluorophosphate class (supplier unresolved)",
      cemented: "C6",
      role: "Low-dispersion negative member of the final L6 cemented group.",
    },
    {
      id: 17,
      name: "L6b",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.7,
      indexReference: "d",
      fl: 56.668732,
      glass: "720347 high-index flint class (supplier unresolved)",
      cemented: "C6",
      role: "Positive partner in the net-negative final L6 group.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 208.14, d: 8.3, nd: 1.48749, elemId: 1, sd: 47.0 },
    { label: "2", R: -575.227, d: 39.2, nd: 1.0, elemId: 0, sd: 46.8 },
    { label: "3", R: 117.4, d: 11.35, nd: 1.497, elemId: 2, sd: 39.0 },
    { label: "4", R: -270.733, d: 2.7, nd: 1.6134, elemId: 3, sd: 38.3 },
    { label: "5", R: 154.413, d: 39.49, nd: 1.0, elemId: 0, sd: 36.5 },
    { label: "6", R: -1313.396, d: 3.5, nd: 1.80518, elemId: 4, sd: 16.8 },
    { label: "7", R: -65.332, d: 1.4, nd: 1.7725, elemId: 5, sd: 16.6 },
    { label: "8", R: 114.681, d: 2.08, nd: 1.0, elemId: 0, sd: 15.25 },
    { label: "9", R: -137.293, d: 1.4, nd: 1.83481, elemId: 6, sd: 15.25 },
    { label: "10", R: 893.658, d: 43.89, nd: 1.0, elemId: 0, sd: 16.3 },
    { label: "11", R: 48.839, d: 8.05, nd: 1.497, elemId: 7, sd: 16.8 },
    { label: "12", R: -79.168, d: 0.55, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "13", R: 301.466, d: 1.35, nd: 1.7725, elemId: 8, sd: 16.0 },
    { label: "14", R: 27.972, d: 5.77, nd: 1.54072, elemId: 9, sd: 15.3 },
    { label: "15", R: 776.993, d: 0.48, nd: 1.0, elemId: 0, sd: 15.1 },
    { label: "16", R: 93.677, d: 6.14, nd: 1.51823, elemId: 10, sd: 15.0 },
    { label: "17", R: -33.663, d: 1.3, nd: 1.7725, elemId: 11, sd: 14.7 },
    { label: "18", R: -558.826, d: 6.04, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "STO", R: 1e15, d: 46.32, nd: 1.0, elemId: 0, sd: 12.986356 },
    { label: "20", R: 71.179, d: 1.3, nd: 2.00069, elemId: 12, sd: 12.5 },
    { label: "21", R: 35.239, d: 4.65, nd: 1.6134, elemId: 13, sd: 12.4 },
    { label: "22", R: -67.501, d: 21.38, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "23", R: 112.661, d: 2.56, nd: 1.51742, elemId: 14, sd: 9.9 },
    { label: "24", R: -88.341, d: 1.22, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "25", R: -100.206, d: 0.9, nd: 1.59522, elemId: 15, sd: 9.5 },
    { label: "26", R: 29.728, d: 26.74, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "27", R: -43.8, d: 1.3, nd: 1.497, elemId: 16, sd: 15 },
    { label: "28", R: 43.8, d: 4.3, nd: 1.72047, elemId: 17, sd: 15 },
    { label: "29", R: -576.993, d: 37.98, nd: 1.0, elemId: 0, sd: 15 },
  ],

  asph: {},

  /* Published infinity-focus zoom spacings; no invented close-focus motion. */
  var: {
    "5": [
      [39.49, 39.49],
      [98.84, 98.84],
      [129.47, 129.47],
    ],
    "10": [
      [43.89, 43.89],
      [32.37, 32.37],
      [3.29, 3.29],
    ],
    STO: [
      [46.32, 46.32],
      [45.47, 45.47],
      [47.31, 47.31],
    ],
    "22": [
      [21.38, 21.38],
      [12.89, 12.89],
      [3.01, 3.01],
    ],
    "26": [
      [26.74, 26.74],
      [23.95, 23.95],
      [26.42, 26.42],
    ],
    "29": [
      [37.98, 37.98],
      [61.62, 61.62],
      [96.27, 96.27],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["STO", "D19"],
    ["22", "D22"],
    ["26", "D26"],
    ["29", "BF"],
  ],

  zoomPositions: [203.0, 390.84, 776.0],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "5" },
    { text: "L2 · IS", fromSurface: "6", toSurface: "10" },
    { text: "L3", fromSurface: "11", toSurface: "STO" },
    { text: "L4", fromSurface: "20", toSurface: "22" },
    { text: "L5 · FOCUS", fromSurface: "23", toSurface: "26" },
    { text: "L6", fromSurface: "27", toSurface: "29" },
  ],

  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
    { text: "C3", fromSurface: "13", toSurface: "15" },
    { text: "C4", fromSurface: "16", toSurface: "18" },
    { text: "C5", fromSurface: "20", toSurface: "22" },
    { text: "C6", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 0.8,
  focusDescription: "NO_INTERNAL_RECONSTRUCTION: the patent publishes only infinity-focus zoom spacings. L5 is the focusing unit and moves toward the image side for close focus, but no close-focus L5 position is published. The 0.8 m value is manufacturer minimum-focus metadata at 200 mm; the modeled internal gaps remain at the published infinity state.",

  zoomApertureModel: "from-nominal-fno",
  nominalFno: [6.42, 7.3, 9.18],
  fstopSeries: [6.3, 8, 9, 11, 16],

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
