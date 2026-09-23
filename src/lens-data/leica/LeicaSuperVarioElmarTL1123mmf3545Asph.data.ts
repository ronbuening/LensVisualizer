import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA SUPER-VARIO-ELMAR-TL 11-23mm f/3.5-4.5 ASPH.
 *
 * Source prescription: JP 2016-133764 A, Example 6 (Konica Minolta, Inc.).
 * Production correlation: strong inference, not manufacturer-confirmed attribution.
 * Leica publishes 14 elements / 11 groups / 4 aspherical surfaces for the production lens.
 *
 * Active-model normalization:
 * - No uniform scale is applied (s = 1).
 * - Three 0.010 mm n=1.51400 generic cement media at equal-radius bonded interfaces are omitted.
 *   Their axial thicknesses are folded into the downstream physical elements, preserving every
 *   downstream axial station and the source image-plane track: 4.128 -> 4.138 mm,
 *   0.700 -> 0.710 mm, and 0.800 -> 0.810 mm.
 * - The resulting first-order EFL/BFD shifts relative to the raw source are intentional and are
 *   recorded in the Stage 2 dossier; the raw source values remain preserved there.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. Example 6 publishes infinity-focus W/M/T zoom states
 * but no close-focus internal spacing law. Leica's 0.2 m production MFD is retained as metadata;
 * no close-focus optical motion is invented. All var pairs are therefore zoom-only and identical
 * at infinity/close-focus coordinates.
 *
 * Aperture: the patent publishes F-number but not a physical diaphragm diameter. Per-position
 * stop sizes were calibrated from the raw-source paraxial model and published F-numbers, then
 * carried unchanged through the cement normalization. nominalFno stores the resulting normalized-
 * model F-numbers. Agreement with those values is therefore calibration-dependent, not independent
 * evidence of the production diaphragm diameter. STO.sd is the calibrated wide-position value.
 *
 * NOTE ON SEMI-DIAMETERS (2026-09-23 figure pass): not patent-published per surface. L1 front (20.2) is
 * derived from Table 1 condition (3), R1/omega_w = 0.392 x 51.489 deg = 20.18 mm, read as the first
 * lens's effective radius (a diameter reading would give 10.1 mm, below the 16.2 mm wide-end chief-ray
 * height). The rest of Gr1 (L1 rear through L4) and Gr3/Gr4 were enlarged toward Fig. 6 (p. 30, wide
 * state, measured at 0.153 mm/px): figure rims about 14.6 / 15.7 / 14.5 / 11.6 / 11.1 mm for L1 rear,
 * L2 front/rear, L3, L4 and about 7.6 / 8.6-9.0 mm for D2 / D3, each capped by rim slope (surface 2,
 * R = 16.711), the 4A polynomial slope plateau near 12 mm, the 6-7 air-gap intrusion limit and L13 edge
 * thickness. The earlier ray-containment set (13.6 / 11.4 / 10.5 / 9.35 in front) blocked the wide-end
 * chief ray. Gr2 (L5-L10) rims are the earlier traced values, within ~10 % of the figure.
 * Wide-end real field: surface 2 is a near-hemisphere (R = 16.711), and chief rays steeper than about
 * 44.9 deg miss it, so the wide state reaches only about 10.5 mm real image height in this prescription
 * (the printed omega = 51.489 deg equals atan(14.2 / 11.3), a paraxial value; Fig. 14 shows about
 * -10 % wide-end distortion).
 *
 * Patent discrepancy register retained in the dossier:
 * - Condition (1) is printed in reciprocal order relative to Table 1 across Examples 1-8.
 * - Example 6 Table 1 conditions (4) and (6) do not reproduce from the printed prescription.
 */

const LENS_DATA = {
  key: "leica-super-vario-elmar-tl-11-23mm-f35-45-asph",
  maker: "Leica",
  name: "LEICA SUPER-VARIO-ELMAR-TL 11-23mm f/3.5-4.5 ASPH.",
  subtitle: "JP 2016-133764 A Example 6 — strong inferred production correlation",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "MODEL EFL ≈ 11.308-22.366 mm",
    "MODEL F/3.603-4.615",
    "4 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [11, 23],
  focalLengthDesign: [11.307818, 22.365965],
  lensMounts: ["l-mount"],
  imageFormat: "aps-c",
  patentNumber: "JP 2016-133764 A",
  patentAuthors: ["Atsuo Masui", "Yasunari Fukuda"],
  patentAssignees: ["Konica Minolta, Inc."],
  patentYear: 2016,
  elementCount: 14,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      indexReference: "d",
      fl: -37.133,
      glass: "729547 — lanthanum crown class (supplier unproven)",
      apd: false,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.80866,
      vd: 40.41,
      indexReference: "d",
      fl: -32.887,
      glass: "L-LAH84 spectral proxy (patent 809404 coordinate; low-Tg class inferred; supplier unconfirmed)",
      apd: false,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      fl: 38.091,
      glass: "699301 — dense flint class (supplier unproven)",
      apd: false,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: -44.804,
      glass: "497816 — ultra-low-dispersion crown class (supplier unproven)",
      apd: false,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.59551,
      vd: 39.24,
      indexReference: "d",
      fl: 39.324,
      glass: "596392 — flint class (supplier unproven)",
      apd: false,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -26.886,
      glass: "911353 — high-index low-dispersion class (supplier unproven)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: 14.784,
      glass: "497816 — ultra-low-dispersion crown class (supplier unproven)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -16.374,
      glass: "911353 — high-index low-dispersion class (supplier unproven)",
      apd: false,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: 24.018,
      glass: "497816 — ultra-low-dispersion crown class (supplier unproven)",
      apd: false,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      indexReference: "d",
      fl: 36.829,
      glass: "583594 — barium/crown class (supplier unproven)",
      apd: false,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      fl: 16.931,
      glass: "847238 — high-dispersion/high-transmission flint class (supplier unproven)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      fl: -10.94,
      glass: "773496 — lanthanum high-index class (supplier unproven)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.39,
      indexReference: "d",
      fl: 15.323,
      glass: "618634 — phosphate crown class (supplier unproven)",
      apd: false,
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      indexReference: "d",
      fl: -13.139,
      glass: "904313 — high-index lanthanum flint class (supplier unproven)",
      apd: false,
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 46.36, d: 2.456, nd: 1.72916, elemId: 1, sd: 20.2 },
    { label: "2", R: 16.711, d: 5.262, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "3A", R: 34.511, d: 2.133, nd: 1.80866, elemId: 2, sd: 14.5 },
    { label: "4A", R: 14.605, d: 12.764, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "5", R: 24.234, d: 3.564, nd: 1.69895, elemId: 3, sd: 10.8 },
    { label: "6", R: 253.635, d: 1.057, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "7", R: -75.436, d: 1.0, nd: 1.497, elemId: 4, sd: 10.2 },
    { label: "8", R: 31.733, d: 27.293, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 2.047, nd: 1.0, elemId: 0, sd: 5.497332 },
    { label: "10", R: 18.067, d: 2.234, nd: 1.59551, elemId: 5, sd: 6.95 },
    { label: "11", R: 75.42, d: 3.926, nd: 1.0, elemId: 0, sd: 6.95 },
    { label: "12", R: 15.561, d: 0.703, nd: 1.91082, elemId: 6, sd: 7.5 },
    { label: "13", R: 9.31, d: 4.138, nd: 1.497, elemId: 7, sd: 7.05 },
    { label: "15", R: -29.717, d: 1.435, nd: 1.0, elemId: 0, sd: 7.05 },
    { label: "16", R: -15.076, d: 0.7, nd: 1.91082, elemId: 8, sd: 7.15 },
    { label: "17", R: 1416.645, d: 0.677, nd: 1.0, elemId: 0, sd: 7.55 },
    { label: "18", R: 41.638, d: 3.47, nd: 1.497, elemId: 9, sd: 8.1 },
    { label: "19", R: -16.271, d: 0.807, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "20A", R: 170.391, d: 2.965, nd: 1.58313, elemId: 10, sd: 8.3 },
    { label: "21A", R: -24.416, d: 1.5, nd: 1.0, elemId: 0, sd: 8.25 },
    { label: "22", R: 110.615, d: 2.628, nd: 1.84666, elemId: 11, sd: 7.5 },
    { label: "23", R: -16.29, d: 0.71, nd: 1.7725, elemId: 12, sd: 7.4 },
    { label: "25", R: 17.897, d: 3.476, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "26", R: 55.841, d: 4.736, nd: 1.618, elemId: 13, sd: 8.0 },
    { label: "27", R: -11.034, d: 0.81, nd: 1.90366, elemId: 14, sd: 8.0 },
    { label: "29", R: -161.564, d: 15.541, nd: 1.0, elemId: 0, sd: 8.0 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: 1.0337e-4,
      A6: -6.9267e-7,
      A8: 2.1776e-9,
      A10: -2.3084e-12,
      A12: -4.4223e-15,
      A14: 8.5082e-18,
      A16: 0,
    },
    "4A": {
      K: 0,
      A4: 9.355e-5,
      A6: -6.4639e-7,
      A8: -4.1522e-9,
      A10: 4.3696e-11,
      A12: -1.5519e-13,
      A14: 9.3357e-17,
      A16: 0,
    },
    "20A": {
      K: 0,
      A4: -3.9538e-5,
      A6: 6.2938e-7,
      A8: -5.5458e-9,
      A10: 1.1762e-10,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "21A": {
      K: 0,
      A4: 1.1097e-5,
      A6: 5.2217e-7,
      A8: -5.2545e-9,
      A10: 1.1053e-10,
      A12: 0,
      A14: 0,
      A16: 0,
    },
  },

  zoomPositions: [11.3, 16.822, 22.347],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "8": [
      [27.293, 27.293],
      [12.32, 12.32],
      [4.112, 4.112],
    ],
    "21A": [
      [1.5, 1.5],
      [2.921, 2.921],
      [4.532, 4.532],
    ],
    "25": [
      [3.476, 3.476],
      [3.313, 3.313],
      [3.398, 3.398],
    ],
    "29": [
      [15.541, 15.541],
      [19.711, 19.711],
      [22.707, 22.707],
    ],
  },
  varLabels: [
    ["8", "D8"],
    ["21A", "D21"],
    ["25", "D25"],
    ["29", "BF"],
  ],

  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "8" },
    { text: "Gr2", fromSurface: "STO", toSurface: "21A" },
    { text: "Gr3", fromSurface: "22", toSurface: "25" },
    { text: "Gr4", fromSurface: "26", toSurface: "29" },
  ],

  doublets: [
    { text: "D1", fromSurface: "12", toSurface: "15" },
    { text: "D2", fromSurface: "22", toSurface: "25" },
    { text: "D3", fromSurface: "26", toSurface: "29" },
  ],

  closeFocusM: 0.2,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JP 2016-133764 A Example 6 publishes infinity-focus W/M/T zoom spacings only; Leica specifies 0.2 m production MFD, but no unique internal close-focus law is source-determined. Zoom gaps are therefore repeated at both focus endpoints.",

  nominalFno: [3.603174, 4.18708, 4.614821],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16],

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
