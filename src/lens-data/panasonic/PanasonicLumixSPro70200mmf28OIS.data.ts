import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  • Table 7 surfaces 46–47 (parallel plate P, 2.1 mm, nd 1.51680, νd 64.2)  ║
 * ║    and BF 1.09 mm are modeled in `rearPlates` (traced, not drawn).         ║
 * ║    Surface 45 keeps the patent's physical 31.0 mm gap to the plate.        ║
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
 * ║  The patent publishes none. SDs were inferred from the earlier solved     ║
 * ║  fixed stop (paraxial f/2.832625 at wide), paraxial marginal/chief-ray    ║
 * ║  envelopes at all three zoom states, Figure 5 proportions, and the        ║
 * ║  production lens's 94.4 mm maximum barrel diameter. The runtime stop      ║
 * ║  radius is derived from the design f-number at wide and held at every     ║
 * ║  station. SDs were then constrained by edge thickness, actual rim slope,  ║
 * ║  conic limits, cross-gap intrusion, and off-axis clipping. At the default ║
 * ║  0.6 field, one extreme tele ray clips first at air-separated L2; no      ║
 * ║  representative ray first clips at a cemented junction.                   ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "panasonic-lumix-s-pro-70-200mm-f2-8-ois",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 70-200mm f/2.8 O.I.S.",
  subtitle: "US 2021/0132345 A1 Numerical Example 3 — strong S-E70200 correlation",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "22 ELEMENTS / 17 GROUPS",
      "MODELED f = 72.46–193.02 mm",
      "MODELED F/2.83263 WIDE",
      "1 ASPHERICAL ELEMENT / 2 SURFACES",
      "3 ED / 2 UED CLASS ELEMENTS",
    ],
    elementCount: 22,
    groupCount: 17,
    focalLengthMm: { marketing: [70, 200], design: [72.4595046, 193.0248816] },
    fNumber: { marketing: 2.8, design: 2.83239 },
  },

  source: {
    patentNumber: "US 2021/0132345 A1",
    patentYear: 2021,
    authors: ["Takehiro Nishioka", "Hisayuki Ii"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -224.8424,
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
      focalLengthMm: 161.7103,
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
      focalLengthMm: 182.9693,
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
      focalLengthMm: 227.9454,
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
      focalLengthMm: -60.9511,
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
      focalLengthMm: -61.9187,
      glass: "487704 — fluor-crown class (vendor unresolved)",
      role: "Negative crown component of the L6–L7 cemented pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: 45.6049,
      glass: "904313 — lanthanum dense-flint class (vendor unresolved)",
      role: "High-index positive component of the L6–L7 cemented pair.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -75.5764,
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
      focalLengthMm: 55.6031,
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
      focalLengthMm: 184.3158,
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
      focalLengthMm: 136.785,
      glass: "437951 — UED fluorophosphate crown class (vendor unresolved)",
      role: "Very-low-dispersion positive element immediately after the stop.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -27.7749,
      glass: "847238 — dense-flint class (vendor unresolved)",
      role: "Strong negative partner in the L11–L12 cemented pair.",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus (convex to object)",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -152.1903,
      glass: "847238 — dense-flint class (vendor unresolved)",
      role: "Probable negative lead element of the inferred L13–L15 O.I.S. subgroup.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 59.2087,
      glass: "497816 — ED fluorophosphate crown class (vendor unresolved)",
      role: "ED-class positive component of the inferred O.I.S. subgroup.",
      cemented: "D3",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58578,
      vd: 59.5,
      focalLengthMm: 60.7002,
      glass: "P-SK57Q1 (SCHOTT catalog-equivalent; production supplier unspecified)",
      role: "Double-sided asphere; probable positive rear element of the inferred O.I.S. subgroup.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus (convex to image)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -73.1786,
      glass: "694532 — lanthanum-crown class (vendor unresolved)",
      role: "Negative component of the rear cemented pair in fixed group G4.",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Positive Meniscus (convex to image)",
      nd: 1.85883,
      vd: 30,
      focalLengthMm: 57.7674,
      glass: "859300 — dense-flint class (vendor unresolved)",
      role: "Positive component of the L16–L17 cemented pair.",
      cemented: "D4",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Plano-Convex Positive (convex to image)",
      nd: 1.86966,
      vd: 20,
      focalLengthMm: 53.4213,
      glass: "870200 — very dense-flint class (vendor unresolved)",
      role: "Positive front component of negative first focus group G5.",
      cemented: "D5",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.1,
      focalLengthMm: -28.4135,
      glass: "BASF7 (Sumita catalog-equivalent; supplier not identified)",
      role: "Negative rear component that makes cemented focus group G5 net negative.",
      cemented: "D5",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 64.9303,
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
      focalLengthMm: -39.5016,
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
      focalLengthMm: 77.1082,
      glass: "LAF3 (Hoya catalog-equivalent; supplier not identified)",
      role: "Positive rear element completing fixed negative group G7.",
    },
  ],

  surfaces: [
    { label: "1", R: 131.2282, d: 2.4, sd: 38.0, medium: 1 },
    { label: "2", R: 79.0397, d: 1.4, sd: 37.8 },
    { label: "3", R: 80.37, d: 9.5, sd: 37, medium: 2 },
    { label: "4", R: "flat", d: 0.2, sd: 37 },
    { label: "5", R: 76.8358, d: 8.9, sd: 35.5, medium: 3 },
    { label: "6", R: 1898.6547, sd: 35 },
    { label: "7", R: 487.4325, d: 3.8, sd: 25, medium: 4 },
    { label: "8", R: -192.0274, d: 0.2, sd: 24 },
    { label: "9", R: 856.4336, d: 1.5, sd: 23.8, medium: 5 },
    { label: "10", R: 40.435, d: 9.625, sd: 21.1 },
    { label: "11", R: -84.6589, d: 1.5, sd: 21.4, medium: 6 },
    { label: "12", R: 47.1828, d: 6.21, sd: 21.7, medium: 7 },
    { label: "14", R: -305.2809, d: 3.4131, sd: 20 },
    { label: "15", R: -53.2587, d: 1.5, sd: 19.4, medium: 8 },
    { label: "16", R: 319.5297, sd: 19.5 },
    { label: "17", R: 64.0495, d: 6.4, sd: 20.5, medium: 9 },
    { label: "18", R: -141.7141, sd: 20 },
    { label: "19", R: 60.124, d: 3.5, sd: 18.7, medium: 10 },
    { label: "20", R: 171.5708, d: 2.7, sd: 17.6 },
    { label: "STO", R: "flat", d: 3 },
    { label: "22", R: -173.7603, d: 3.79, sd: 15.9, medium: 11 },
    { label: "23", R: -44.7702, d: 1.21, sd: 16, medium: 12 },
    { label: "25", R: 50.1478, d: 2.4, sd: 15.7 },
    { label: "26", R: 35.4374, d: 1.5, sd: 16.2, medium: 13 },
    { label: "27", R: 27.2542, d: 6.01, sd: 16.4, medium: 14 },
    { label: "29", R: 342.129, d: 0.3, sd: 16.5 },
    {
      label: "30A",
      R: 82.9525,
      d: 5.4,
      sd: 16.6,
      medium: 15,
      asphere: {
        K: 9.97221,
        A4: -3.94139e-6,
        A6: -6.42008e-9,
        A8: 9.84655e-11,
        A10: -2.27304e-13,
        A12: -2.10054e-17,
        A14: 2.3109e-18,
      },
    },
    {
      label: "31A",
      R: -60.736,
      d: 3,
      sd: 16.7,
      asphere: {
        K: -5.11777,
        A4: 9.64e-7,
        A6: -3.12961e-9,
        A8: 9.40918e-11,
        A10: -1.49427e-13,
        A12: -4.27405e-16,
        A14: 3.25178e-18,
      },
    },
    { label: "32", R: -43.7303, d: 1.4, sd: 16.2, medium: 16 },
    { label: "33", R: -320.3249, d: 3.71, sd: 16.5, medium: 17 },
    { label: "35", R: -43.1887, sd: 16.5 },
    { label: "36", R: "flat", d: 3.3, sd: 15.9, medium: 18 },
    { label: "37", R: -46.4584, d: 0.71, sd: 16, medium: 19 },
    { label: "39", R: 35.1327, sd: 15.6 },
    { label: "40", R: 491.7514, d: 4.2, sd: 16.3, medium: 20 },
    { label: "41", R: -61.6507, sd: 16.3 },
    { label: "42", R: -46.9831, d: 1.4, sd: 14.5, medium: 21 },
    { label: "43", R: 117.6471, d: 0.2, sd: 14.5 },
    { label: "44", R: 49.6263, d: 5, sd: 14.5, medium: 22 },
    { label: "45", R: 464.3283, d: 31, sd: 14.3 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.4497, nominalFNumber: 2.832625, label: "Wide" },
      { focalLengthMm: 120.0003, nominalFNumber: 2.89443376 },
      { focalLengthMm: 193.0002, nominalFNumber: 2.928545591, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.95,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes infinity-focus zoom states and only the directions of the " +
      "two rear focus groups. G5/G6 close-focus trajectories are underdetermined, so the viewer retains the " +
      "infinity-focus spacings at every focus setting.",
  },

  gaps: {
    "6": {
      label: "D6 (G1→G2)",
      values: [
        [1, 1],
        [24.4387, 24.4387],
        [44.9034, 44.9034],
      ],
    },
    "16": {
      label: "D16 (G2→G3)",
      values: [
        [47.7393, 47.7393],
        [22.3112, 22.3112],
        [1, 1],
      ],
    },
    "18": {
      label: "D18 (G3→G4)",
      values: [
        [1, 1],
        [2.9893, 2.9893],
        [3.8358, 3.8358],
      ],
    },
    "35": {
      label: "D35 (G4→G5)",
      values: [
        [2.4, 2.4],
        [5.2518, 5.2518],
        [3.0651, 3.0651],
      ],
    },
    "39": {
      label: "D39 (G5→G6)",
      values: [
        [20.1578, 20.1578],
        [20.0419, 20.0419],
        [26.0482, 26.0482],
      ],
    },
    "41": {
      label: "D41 (G6→G7)",
      values: [
        [9.2347, 9.2347],
        [6.4988, 6.4988],
        [2.6792, 2.6792],
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 11 },

  /* ── Parallel plate P (patent Table 7 surfaces 46–47): traced, not drawn ── */
  rearPlates: [
    {
      label: "P",
      thicknessMm: 2.1,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.09,
      source: "US 2021/0132345 A1, Third Example Table 7 surfaces 46–47; BF from Table 9A",
    },
  ],

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

  layout: { scFill: 0.58, yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
