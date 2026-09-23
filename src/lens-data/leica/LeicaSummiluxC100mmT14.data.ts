import type { LensDataInput } from "../../types/optics.js";

/**
 * Leica SUMMILUX-C 100 mm T1.4 research correlation.
 *
 * Source prescription: US 8,508,864 B2, Third Embodiment / Example 3, Table 5.
 * Active model: patent S3-S26 (source L2-L14), 13 glass elements, with the source
 * plane-parallel front filter L1/S1-S2 omitted under the current LensVisualizer scope.
 * No geometric scaling is applied (s = 1.0). The omitted filter's air-equivalent
 * S1→S3 reference shift remains documented in the Stage-2 dossier.
 *
 * Source corrections retained in the dossier:
 * - S7 A4 malformed "-0.1.071 × 10^-05" -> -1.071e-6.
 * - S22 A8 malformed "0.3184510^-11" -> 3.1845e-12.
 * - L13/S23 code "80822" -> OHARA S-NPH1 code 808228.
 * - Table 5/Fig. 15 stop S15 governs over conflicting prose that says S22.
 *
 * Focus status: PUBLISHED. Table 5 supplies F1/F2/F3 for S12, S14, and S26.
 * The current focus control uses object-to-image distance when that distance is
 * available. Table 5 gives 1440 mm and 696 mm from S0 to S1; adding the published
 * S1-to-image track (193.248 mm at F2/F3) gives 1.633248 m and 0.889248 m.
 * focusPositions therefore maps F2 to 0.889248/1.633248 = 0.5444659965908423,
 * and closeFocusM = 0.889248 m. This is the patent F3 object-to-image distance,
 * not the production lens's marketed 0.99 m MFD.
 *
 * nominalFno is the d-line exact image-space NA f-number of the implemented
 * published-clear-aperture model at F1. It is not the marketed T1.4 transmission
 * number and does not calibrate the published physical S15 stop radius.
 *
 * NOTE ON SEMI-DIAMETERS: every optical surface uses the Table 5 "Aperture Half
 * Diameter" column verbatim (patent values), including STO = 25.79 mm as the
 * published S15 clear radius; the engine derives the working f/1.3976 iris
 * (about 23.95 mm) from nominalFno. A 2026-09-23 check of Fig. 15 (page 16,
 * about 10.7 px/mm at 300 dpi from the L2 rim and the S3-S26 vertex span)
 * found the drawn rims within about 7% of these values, so none were changed.
 * gapSagFrac = 0.98 is a documented per-lens geometry override: the verified
 * maximum shared-band sag intrusion is 0.967816 of the affected center gap,
 * while physical edge clearance stays positive.
 *
 * imageFormat uses the canonical 35mm-cinema id (22 x 16 mm, 27.2 mm minimum
 * diagonal), which the patent's stated 28 mm image diagonal covers; the
 * marketed 33 mm Super 35 circle has no separate canonical id. The taxonomy has
 * no PL mount id, so lensMounts is intentionally omitted rather than fabricated.
 */

const LENS_DATA = {
  key: "leica-summilux-c-100mm-t14",
  maker: "Leica",
  name: "LEICA SUMMILUX-C 100mm T1.4",
  subtitle: "US 8,508,864 B2 — Example 3; research correlation, not manufacturer-confirmed patent attribution",
  specs: [
    "13 ELEMENTS / 10 AIR-SPACED GROUPS",
    "3 FUNCTIONAL GROUPS (G1a / G1b / G2)",
    "MARKETED 100 mm / T1.4",
    "MODELED f/1.3976 AT F1 (d-line)",
    "2 ASPHERICAL SURFACES",
    "28 mm PATENT IMAGE DIAGONAL",
  ],

  focalLengthMarketing: 100,
  focalLengthDesign: 99.24255193581324,
  apertureDesign: 1.39761502894306,
  patentNumber: "US 8,508,864 B2",
  patentAuthors: ["Iain A. Neil"],
  patentAssignees: ["ACM Projektentwicklung GmbH"],
  patentYear: 2013,
  imageFormat: "35mm-cinema",
  elementCount: 13,
  groupCount: 10,

  elements: [
  {
    id: 1,
    name: "L2",
    diagramLabel: "L2",
    label: "Element 1 (L2)",
    type: "Biconvex Positive",
    nd: 1.497,
    vd: 81.54,
    fl: 127.898,
    indexReference: "d",
    glass: "S-FPL51 (OHARA)",
    apd: "patent",
    apdNote: "US 8,508,864 B2 (printed col. 22) names SFPL51 an abnormal dispersion glass; Table 5 assigns it to this element.",
    dPgF: 0.030850280000000008,
    role: "G1a fixed front positive element.",
  },
  {
    id: 2,
    name: "L3",
    diagramLabel: "L3",
    label: "Element 2 (L3)",
    type: "Biconvex Positive",
    nd: 1.744,
    vd: 44.78,
    fl: 57.96,
    indexReference: "d",
    glass: "S-LAM2 (OHARA)",
    dPgF: -0.0029800400000000726,
    role: "G1a positive element; front member of cemented doublet D1.",
    cemented: "D1",
  },
  {
    id: 3,
    name: "L4",
    diagramLabel: "L4",
    label: "Element 3 (L4)",
    type: "Biconcave Negative (1× Asph)",
    nd: 1.6134,
    vd: 44.27,
    fl: -45.06,
    indexReference: "d",
    glass: "S-NBM51 (OHARA)",
    dPgF: -0.0060378600000000615,
    role: "G1a negative element; rear member of D1 with aspheric rear surface.",
    cemented: "D1",
  },
  {
    id: 4,
    name: "L5",
    diagramLabel: "L5",
    label: "Element 4 (L5)",
    type: "Biconcave Negative",
    nd: 1.6134,
    vd: 44.27,
    fl: -46.97,
    indexReference: "d",
    glass: "S-NBM51 (OHARA)",
    dPgF: -0.0060378600000000615,
    role: "G1a negative singlet.",
  },
  {
    id: 5,
    name: "L6",
    diagramLabel: "L6",
    label: "Element 5 (L6)",
    type: "Positive Meniscus",
    nd: 1.762,
    vd: 40.1,
    fl: 51.8,
    indexReference: "d",
    glass: "S-LAM55 (OHARA)",
    dPgF: 0.00014819999999993172,
    role: "G1a positive element; front member of cemented doublet D2.",
    cemented: "D2",
  },
  {
    id: 6,
    name: "L7",
    diagramLabel: "L7",
    label: "Element 6 (L7)",
    type: "Negative Meniscus",
    nd: 1.72047,
    vd: 34.71,
    fl: -40.09,
    indexReference: "d",
    glass: "S-NBH8 (OHARA)",
    dPgF: -0.002017779999999969,
    role: "G1a negative element; rear member of D2.",
    cemented: "D2",
  },
  {
    id: 7,
    name: "L8",
    diagramLabel: "L8",
    label: "Element 7 (L8)",
    type: "Biconvex Positive",
    nd: 1.497,
    vd: 81.54,
    fl: 72.413,
    indexReference: "d",
    glass: "S-FPL51 (OHARA)",
    apd: "patent",
    apdNote: "US 8,508,864 B2 (printed col. 22) names SFPL51 an abnormal dispersion glass; Table 5 assigns it to this element.",
    dPgF: 0.030850280000000008,
    role: "G1b published moving positive focus element.",
  },
  {
    id: 8,
    name: "L9",
    diagramLabel: "L9",
    label: "Element 8 (L9)",
    type: "Positive Meniscus",
    nd: 1.43875,
    vd: 94.93,
    fl: 127.106,
    indexReference: "d",
    glass: "S-FPL53 (OHARA)",
    apd: "patent",
    apdNote: "US 8,508,864 B2 (printed col. 22) names SFPL53 an abnormal dispersion glass; Table 5 assigns it to this element.",
    dPgF: 0.04987226,
    role: "G2 positive singlet.",
  },
  {
    id: 9,
    name: "L10",
    diagramLabel: "L10",
    label: "Element 9 (L10)",
    type: "Positive Meniscus",
    nd: 1.80809,
    vd: 22.76,
    fl: 6666.5,
    indexReference: "d",
    glass: "S-NPH1 (OHARA)",
    dPgF: 0.02518231999999998,
    role: "G2 weak positive meniscus.",
  },
  {
    id: 10,
    name: "L11",
    diagramLabel: "L11",
    label: "Element 10 (L11)",
    type: "Positive Meniscus",
    nd: 1.43875,
    vd: 94.93,
    fl: 175.49,
    indexReference: "d",
    glass: "S-FPL53 (OHARA)",
    apd: "patent",
    apdNote: "US 8,508,864 B2 (printed col. 22) names SFPL53 an abnormal dispersion glass; Table 5 assigns it to this element.",
    dPgF: 0.04987226,
    role: "G2 positive element; front member of cemented doublet D3.",
    cemented: "D3",
  },
  {
    id: 11,
    name: "L12",
    diagramLabel: "L12",
    label: "Element 11 (L12)",
    type: "Biconcave Negative (1× Asph)",
    nd: 1.72047,
    vd: 34.71,
    fl: -40.08,
    indexReference: "d",
    glass: "S-NBH8 (OHARA)",
    dPgF: -0.002017779999999969,
    role: "G2 negative element; rear member of D3 with aspheric rear surface.",
    cemented: "D3",
  },
  {
    id: 12,
    name: "L13",
    diagramLabel: "L13",
    label: "Element 12 (L13)",
    type: "Positive Meniscus",
    nd: 1.80809,
    vd: 22.76,
    fl: 215.54,
    indexReference: "d",
    glass: "S-NPH1 (OHARA)",
    dPgF: 0.02518231999999998,
    role: "G2 positive meniscus; patent code typo normalized to OHARA 808228.",
  },
  {
    id: 13,
    name: "L14",
    diagramLabel: "L14",
    label: "Element 13 (L14)",
    type: "Biconvex Positive",
    nd: 1.804,
    vd: 46.58,
    fl: 51.68,
    indexReference: "d",
    glass: "S-LAH65V (OHARA)",
    dPgF: -0.008152440000000039,
    role: "G2 rear positive element; patent legacy SLAH65 corresponds to current S-LAH65V code 804466.",
  },
  ],

  surfaces: [
  { label: "3", R: 74.531, d: 13.235, nd: 1.497, elemId: 1, sd: 35.58 },
  { label: "4", R: -406.565, d: 0.1, nd: 1.0, elemId: 0, sd: 35.09 },
  { label: "5", R: 46.553, d: 15.245, nd: 1.744, elemId: 2, sd: 30.85 },
  { label: "6", R: -503.689, d: 3.597, nd: 1.6134, elemId: 3, sd: 29.41 },
  { label: "7A", R: 29.324, d: 13.913, nd: 1.0, elemId: 0, sd: 21.1 },
  { label: "8", R: -54.183, d: 1.922, nd: 1.6134, elemId: 4, sd: 20.99 },
  { label: "9", R: 62.358, d: 6.709, nd: 1.0, elemId: 0, sd: 20.97 },
  { label: "10", R: -79.664, d: 10.013, nd: 1.762, elemId: 5, sd: 21.03 },
  { label: "11", R: -27.83, d: 2.232, nd: 1.72047, elemId: 6, sd: 21.66 },
  { label: "12", R: -790.119, d: 1.81, nd: 1.0, elemId: 0, sd: 24.53 },
  { label: "13", R: 126.083, d: 13.387, nd: 1.497, elemId: 7, sd: 26.32 },
  { label: "14", R: -48.59, d: 14.2, nd: 1.0, elemId: 0, sd: 26.76 },
  { label: "STO", R: 1e15, d: 0.9, nd: 1.0, elemId: 0, sd: 25.79 },
  { label: "16", R: 46.722, d: 8.377, nd: 1.43875, elemId: 8, sd: 25.27 },
  { label: "17", R: 272.299, d: 0.1, nd: 1.0, elemId: 0, sd: 24.8 },
  { label: "18", R: 45.682, d: 5.499, nd: 1.80809, elemId: 9, sd: 23.23 },
  { label: "19", R: 43.594, d: 9.442, nd: 1.0, elemId: 0, sd: 21.26 },
  { label: "20", R: -63.953, d: 5.399, nd: 1.43875, elemId: 10, sd: 21.17 },
  { label: "21", R: -35.835, d: 3.496, nd: 1.72047, elemId: 11, sd: 20.96 },
  { label: "22A", R: 154.866, d: 1.758, nd: 1.0, elemId: 0, sd: 21.52 },
  { label: "23", R: 128.774, d: 3.427, nd: 1.80809, elemId: 12, sd: 21.99 },
  { label: "24", R: 488.134, d: 0.1, nd: 1.0, elemId: 0, sd: 22.15 },
  { label: "25", R: 256.724, d: 8.588, nd: 1.804, elemId: 13, sd: 22.26 },
  { label: "26", R: -48.84, d: 44.8, nd: 1.0, elemId: 0, sd: 22.4 },
  ],

  asph: {
    "7A": {
      K: 0.3518,
      A4: -1.071e-6,
      A6: -1.44e-9,
      A8: -3.022e-13,
      A10: -5.736e-15,
      A12: 5.9e-18,
      A14: -1.142e-20,
    },
    "22A": {
      K: 0,
      A4: 3.358e-6,
      A6: -1.009e-9,
      A8: 3.1845e-12,
      A10: -1.293e-14,
      A12: 2.044e-17,
      A14: -1.237e-20,
    },
  },

  focusPositions: [0, 0.5444659965908423, 1],
  var: {
    "12": [1.81, 1.313, 0.8],
    "14": [14.2, 7.672, 1.3],
    "26": [44.8, 51.824, 58.709],
  },
  varLabels: [
    ["12", "G1a→G1b"],
    ["14", "G1b→G2"],
    ["26", "BF"],
  ],

  groups: [
    { text: "G1a (fixed)", fromSurface: "3", toSurface: "12" },
    { text: "G1b (focus)", fromSurface: "13", toSurface: "14" },
    { text: "G2 (focus)", fromSurface: "STO", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7A" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "20", toSurface: "22A" },
  ],

  closeFocusM: 0.889248,
  focusDescription:
    "Published three-state floating focus: G1a fixed; G1b and G2 move independently but coordinately toward object space for closer focus. Table 5 gives F3 as 0.696 m from S0 to S1; after adding the 0.193248 m S1-to-image track, closeFocusM = 0.889248 m is the patent F3 object-to-image distance used by the focus control, not the marketed 0.99 m production MFD.",

  nominalFno: 1.39761502894306,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  gapSagFrac: 0.98,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
