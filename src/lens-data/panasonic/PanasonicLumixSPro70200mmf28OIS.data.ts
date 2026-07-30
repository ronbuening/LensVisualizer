import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S PRO 70-200mm f/2.8 O.I.S.                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2021/0132345 A1, Third Example of Numerical Values.          ║
 * ║  Correlation: Panasonic S-E70200; 22 elements / 17 physical groups,       ║
 * ║  seven kinematic groups, one double-sided aspherical element.             ║
 * ║                                                                            ║
 * ║  NORMALIZATION:                                                            ║
 * ║  • Five 0.01 mm adhesive shells were removed. At each cemented junction,  ║
 * ║    the downstream element's nd/elemId is used and 0.01 mm is added to its ║
 * ║    center thickness: L7 6.21, L12 1.21, L14 6.01, L17 3.71, L19 0.71 mm. ║
 * ║  • Rear plate P (2.1 mm, nd 1.51680) was omitted. Surface 45 uses the     ║
 * ║    air-equivalent image spacing 31 + 2.1/1.51680 + 1.09 = 33.47449367 mm. ║
 * ║  • No scale factor was applied. The normalized model computes EFLs of     ║
 * ║    72.45950, 120.01656, and 193.02488 mm. Its fixed stop computes         ║
 * ║    f/2.832625 at wide; the patent control value is f/2.83239.             ║
 * ║                                                                            ║
 * ║  ZOOM / FOCUS:                                                             ║
 * ║  • d6, d16, d18, d35, d39, and d41 are published infinity-focus zoom     ║
 * ║    gaps. G5 reverses between wide, middle, and tele.                       ║
 * ║  • Focus status is NO_INTERNAL_RECONSTRUCTION. The patent gives only the  ║
 * ║    directions of G5 and G6 at close focus, not their trajectories. All    ║
 * ║    close values therefore equal the published infinity values.            ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                           ║
 * ║  The patent publishes none. SDs were inferred from the fixed 16.249643 mm ║
 * ║  stop, paraxial marginal/chief-ray envelopes at all three zoom states,    ║
 * ║  Figure 5 proportions, and the production lens's 94.4 mm maximum barrel  ║
 * ║  diameter. They were then constrained by edge thickness, actual rim       ║
 * ║  slope, conic limits, cross-gap intrusion, and off-axis clipping. At the  ║
 * ║  default 0.6 field, one extreme tele ray clips first at air-separated L2; ║
 * ║  no representative ray first clips at a cemented junction.                ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "panasonic-lumix-s-pro-70-200mm-f2-8-ois",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 70-200mm f/2.8 O.I.S.",
  subtitle: "US 2021/0132345 A1 Numerical Example 3 — strong S-E70200 correlation",
  specs: [
    "22 ELEMENTS / 17 GROUPS",
    "MODELED f = 72.46–193.02 mm",
    "MODELED F/2.83263 WIDE",
    "1 ASPHERICAL ELEMENT / 2 SURFACES",
    "3 ED / 2 UED CLASS ELEMENTS",
  ],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [72.4595046, 193.0248816],
  apertureMarketing: 2.8,
  apertureDesign: 2.83239,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2021/0132345 A1",
  patentAuthors: ["Takehiro Nishioka", "Hisayuki Ii"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2021,
  elementCount: 22,
  groupCount: 17,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.90366,
      vd: 31.3,
      fl: -224.8424,
      glass: "904313 — lanthanum dense-flint class (vendor unresolved)",
      role: "Negative front meniscus in fixed positive group G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive (convex to object)",
      nd: 1.497,
      vd: 81.6,
      fl: 161.7103,
      glass: "497816 — ED fluorophosphate crown class (vendor unresolved)",
      role: "High-Abbe positive collector in fixed group G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (convex to object)",
      nd: 1.437,
      vd: 95.1,
      fl: 182.9693,
      glass: "437951 — UED fluorophosphate crown class (vendor unresolved)",
      role: "Very-low-dispersion rear collector in fixed group G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60562,
      vd: 43.7,
      fl: 227.9454,
      glass: "606437 — barium-flint class (vendor unresolved)",
      role: "Positive lead element of negative variator G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus (convex to object)",
      nd: 1.6968,
      vd: 55.5,
      fl: -60.9511,
      glass: "697555 — lanthanum-crown class (vendor unresolved)",
      role: "Strong negative contribution within variator G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.4,
      fl: -61.9187,
      glass: "487704 — fluor-crown class (vendor unresolved)",
      cemented: "D1",
      role: "Negative crown component of the L6–L7 cemented pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.3,
      fl: 45.6049,
      glass: "904313 — lanthanum dense-flint class (vendor unresolved)",
      cemented: "D1",
      role: "High-index positive component of the L6–L7 cemented pair.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      fl: -75.5764,
      glass: "603607 — dense-crown class (vendor unresolved)",
      role: "Rear negative element completing variator G2.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.8045,
      vd: 39.6,
      fl: 55.6031,
      glass: "805396 — dense barium-flint class (vendor unresolved)",
      role: "Single-element positive compensator G3.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      fl: 184.3158,
      glass: "497816 — ED fluorophosphate crown class (vendor unresolved)",
      role: "High-Abbe positive element immediately before the aperture stop.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus (convex to image)",
      nd: 1.437,
      vd: 95.1,
      fl: 136.785,
      glass: "437951 — UED fluorophosphate crown class (vendor unresolved)",
      cemented: "D2",
      role: "Very-low-dispersion positive element immediately after the stop.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -27.7749,
      glass: "847238 — dense-flint class (vendor unresolved)",
      cemented: "D2",
      role: "Strong negative partner in the L11–L12 cemented pair.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus (convex to object)",
      nd: 1.84666,
      vd: 23.8,
      fl: -152.1903,
      glass: "847238 — dense-flint class (vendor unresolved)",
      cemented: "D3",
      role: "Probable negative lead element of the inferred L13–L15 O.I.S. subgroup.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      fl: 59.2087,
      glass: "497816 — ED fluorophosphate crown class (vendor unresolved)",
      cemented: "D3",
      role: "ED-class positive component of the inferred O.I.S. subgroup.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58578,
      vd: 59.5,
      fl: 60.7002,
      glass: "Unmatched (molded crown/asphere, nd=1.58578, vd=59.5)",
      role: "Double-sided asphere; probable positive rear element of the inferred O.I.S. subgroup.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus (convex to image)",
      nd: 1.6935,
      vd: 53.2,
      fl: -73.1786,
      glass: "694532 — lanthanum-crown class (vendor unresolved)",
      cemented: "D4",
      role: "Negative component of the rear cemented pair in fixed group G4.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Positive Meniscus (convex to image)",
      nd: 1.85883,
      vd: 30,
      fl: 57.7674,
      glass: "859300 — dense-flint class (vendor unresolved)",
      cemented: "D4",
      role: "Positive component of the L16–L17 cemented pair.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Plano-Convex Positive (convex to image)",
      nd: 1.86966,
      vd: 20,
      fl: 53.4213,
      glass: "870200 — very dense-flint class (vendor unresolved)",
      cemented: "D5",
      role: "Positive front component of negative first focus group G5.",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.1,
      fl: -28.4135,
      glass: "BASF7 (Sumita catalog-equivalent; supplier not identified)",
      cemented: "D5",
      role: "Negative rear component that makes cemented focus group G5 net negative.",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 64.9303,
      glass: "847238 — dense-flint class (vendor unresolved)",
      role: "Single positive second focus group G6.",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -39.5016,
      glass: "847238 — dense-flint class (vendor unresolved)",
      role: "Negative lead element of fixed rear group G7.",
    },
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Positive Meniscus (convex to object)",
      nd: 1.717,
      vd: 47.9,
      fl: 77.1082,
      glass: "LAF3 (Hoya catalog-equivalent; supplier not identified)",
      role: "Positive rear element completing fixed negative group G7.",
    },
  ],

  surfaces: [
    { label: "1", R: 131.2282, d: 2.4, nd: 1.90366, elemId: 1, sd: 38.0 },
    { label: "2", R: 79.0397, d: 1.4, nd: 1, elemId: 0, sd: 37.8 },
    { label: "3", R: 80.37, d: 9.5, nd: 1.497, elemId: 2, sd: 37 },
    { label: "4", R: 1e15, d: 0.2, nd: 1, elemId: 0, sd: 37 },
    { label: "5", R: 76.8358, d: 8.9, nd: 1.437, elemId: 3, sd: 35.5 },
    { label: "6", R: 1898.6547, d: 1, nd: 1, elemId: 0, sd: 35 },
    { label: "7", R: 487.4325, d: 3.8, nd: 1.60562, elemId: 4, sd: 25 },
    { label: "8", R: -192.0274, d: 0.2, nd: 1, elemId: 0, sd: 24 },
    { label: "9", R: 856.4336, d: 1.5, nd: 1.6968, elemId: 5, sd: 23.8 },
    { label: "10", R: 40.435, d: 9.625, nd: 1, elemId: 0, sd: 21.1 },
    { label: "11", R: -84.6589, d: 1.5, nd: 1.48749, elemId: 6, sd: 21.4 },
    { label: "12", R: 47.1828, d: 6.21, nd: 1.90366, elemId: 7, sd: 21.7 },
    { label: "14", R: -305.2809, d: 3.4131, nd: 1, elemId: 0, sd: 20 },
    { label: "15", R: -53.2587, d: 1.5, nd: 1.60311, elemId: 8, sd: 19.4 },
    { label: "16", R: 319.5297, d: 47.7393, nd: 1, elemId: 0, sd: 19.5 },
    { label: "17", R: 64.0495, d: 6.4, nd: 1.8045, elemId: 9, sd: 20.5 },
    { label: "18", R: -141.7141, d: 1, nd: 1, elemId: 0, sd: 20 },
    { label: "19", R: 60.124, d: 3.5, nd: 1.497, elemId: 10, sd: 18.7 },
    { label: "20", R: 171.5708, d: 2.7, nd: 1, elemId: 0, sd: 17.6 },
    { label: "STO", R: 1e15, d: 3, nd: 1, elemId: 0, sd: 16.2496432811 },
    { label: "22", R: -173.7603, d: 3.79, nd: 1.437, elemId: 11, sd: 15.9 },
    { label: "23", R: -44.7702, d: 1.21, nd: 1.84666, elemId: 12, sd: 16 },
    { label: "25", R: 50.1478, d: 2.4, nd: 1, elemId: 0, sd: 15.7 },
    { label: "26", R: 35.4374, d: 1.5, nd: 1.84666, elemId: 13, sd: 16.2 },
    { label: "27", R: 27.2542, d: 6.01, nd: 1.497, elemId: 14, sd: 16.4 },
    { label: "29", R: 342.129, d: 0.3, nd: 1, elemId: 0, sd: 16.5 },
    { label: "30A", R: 82.9525, d: 5.4, nd: 1.58578, elemId: 15, sd: 16.6 },
    { label: "31A", R: -60.736, d: 3, nd: 1, elemId: 0, sd: 16.7 },
    { label: "32", R: -43.7303, d: 1.4, nd: 1.6935, elemId: 16, sd: 16.2 },
    { label: "33", R: -320.3249, d: 3.71, nd: 1.85883, elemId: 17, sd: 16.5 },
    { label: "35", R: -43.1887, d: 2.4, nd: 1, elemId: 0, sd: 16.5 },
    { label: "36", R: 1e15, d: 3.3, nd: 1.86966, elemId: 18, sd: 15.9 },
    { label: "37", R: -46.4584, d: 0.71, nd: 1.70154, elemId: 19, sd: 16 },
    { label: "39", R: 35.1327, d: 20.1578, nd: 1, elemId: 0, sd: 15.6 },
    { label: "40", R: 491.7514, d: 4.2, nd: 1.84666, elemId: 20, sd: 16.3 },
    { label: "41", R: -61.6507, d: 9.2347, nd: 1, elemId: 0, sd: 16.3 },
    { label: "42", R: -46.9831, d: 1.4, nd: 1.84666, elemId: 21, sd: 14.5 },
    { label: "43", R: 117.6471, d: 0.2, nd: 1, elemId: 0, sd: 14.5 },
    { label: "44", R: 49.6263, d: 5, nd: 1.717, elemId: 22, sd: 14.5 },
    { label: "45", R: 464.3283, d: 33.4744936709, nd: 1, elemId: 0, sd: 14.3 },
  ],

  asph: {
    "30A": {
      K: 9.97221,
      A4: -3.94139e-6,
      A6: -6.42008e-9,
      A8: 9.84655e-11,
      A10: -2.27304e-13,
      A12: -2.10054e-17,
      A14: 2.3109e-18,
    },
    "31A": {
      K: -5.11777,
      A4: 9.64e-7,
      A6: -3.12961e-9,
      A8: 9.40918e-11,
      A10: -1.49427e-13,
      A12: -4.27405e-16,
      A14: 3.25178e-18,
    },
  },

  var: {
    "6": [
      [1, 1],
      [24.4387, 24.4387],
      [44.9034, 44.9034],
    ],
    "16": [
      [47.7393, 47.7393],
      [22.3112, 22.3112],
      [1, 1],
    ],
    "18": [
      [1, 1],
      [2.9893, 2.9893],
      [3.8358, 3.8358],
    ],
    "35": [
      [2.4, 2.4],
      [5.2518, 5.2518],
      [3.0651, 3.0651],
    ],
    "39": [
      [20.1578, 20.1578],
      [20.0419, 20.0419],
      [26.0482, 26.0482],
    ],
    "41": [
      [9.2347, 9.2347],
      [6.4988, 6.4988],
      [2.6792, 2.6792],
    ],
  },

  varLabels: [
    ["6", "D6 (G1→G2)"],
    ["16", "D16 (G2→G3)"],
    ["18", "D18 (G3→G4)"],
    ["35", "D35 (G4→G5)"],
    ["39", "D39 (G5→G6)"],
    ["41", "D41 (G6→G7)"],
  ],

  zoomPositions: [72.4497, 120.0003, 193.0002],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+) FIXED", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−) VARIATOR", fromSurface: "7", toSurface: "16" },
    { text: "G3 (+) COMPENSATOR", fromSurface: "17", toSurface: "18" },
    { text: "G4 (+) FIXED / STOP", fromSurface: "19", toSurface: "35" },
    { text: "G5 (−) FOCUS", fromSurface: "36", toSurface: "39" },
    { text: "G6 (+) FOCUS", fromSurface: "40", toSurface: "41" },
    { text: "G7 (−) FIXED", fromSurface: "42", toSurface: "45" },
  ],

  doublets: [
    { text: "D1 L6–L7", fromSurface: "11", toSurface: "14" },
    { text: "D2 L11–L12", fromSurface: "22", toSurface: "25" },
    { text: "D3 L13–L14", fromSurface: "26", toSurface: "29" },
    { text: "D4 L16–L17", fromSurface: "32", toSurface: "35" },
    { text: "D5 L18–L19", fromSurface: "36", toSurface: "39" },
  ],

  closeFocusM: 0.95,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes infinity-focus zoom states and only the directions of the " +
    "two rear focus groups. G5/G6 close-focus trajectories are underdetermined, so the viewer retains the " +
    "infinity-focus spacings at every focus setting.",

  nominalFno: 2.832625,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 11,

  scFill: 0.58,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
