import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — ZEISS VARIO-SONNAR T* 10.4-37.1mm f/1.8-4.9
 * Sony DSC-RX100 / DSC-RX100M2 correlation target.
 *
 * Source: US 2013/0314585 A1, Example 3 (Third Embodiment), Sony Corporation.
 * Prescription scale is unchanged. The patent publishes 11.007 / 19.615 / 35.426 mm
 * infinity-focus zoom states with Fno 1.860 / 3.469 / 5.070.
 *
 * Model normalization:
 * - Source surface 5 is an inactive zero-thickness air-to-air plane and is omitted.
 * - Source surfaces 16-19 are the rear SG/plate stack and are excluded from the active
 *   prescription. Their reduced-angle translation is preserved by adding the fixed
 *   air-equivalent 1.668975685986314 mm to source D15 at every zoom state.
 * - Exactly one STO is retained at source surface 11.
 * - The patent's asphere equation uses the standard (1+K) convention, so K maps directly.
 *
 * Focus:
 * NO_INTERNAL_RECONSTRUCTION. Example 3 publishes only infinity-focus zoom states.
 * closeFocusM is the Sony product focus-range minimum at the wide end and is metadata only;
 * no close-focus internal spacing is synthesized. Every var pair therefore repeats the same
 * infinity spacing at each zoom control point.
 *
 * Aperture:
 * The physical stop diameter is unpublished. STO.sd is calibrated at the wide state from
 * the patent Fno=1.860 and the modeled entrance-pupil magnification. nominalFno carries the
 * three published design f-numbers; agreement to those values is calibration, not an
 * independent measurement of the manufactured iris diameter.
 *
 * Semi-diameters:
 * The patent publishes no clear apertures. SDs are modeled from exact meridional ray
 * envelopes using the calibrated state-specific stop radius, the full pupil, on-axis rays,
 * and ±0.60 of each state's published half-field, with additional geometric margin and a
 * visual sanity check against patent Fig. 9. They are not production clear-aperture claims.
 *
 * Source discrepancies retained in the dossier:
 * - Table 13 d23_max=2.952 mm does not equal the direct D10+D11 maximum of 4.542 mm.
 * - Paragraph 0103 states 3.4x, while Table 11 endpoints give about 3.2185x.
 * - Example 3 GR1 reverses between wide/intermediate/tele when reconstructed from Table 12.
 */

// SD audit: local US20130314585A1 Fig. 9 (PDF p. 10), wide panel.
// GR1 optical rims are 12/10 mm on L11 and 11/11 mm on L12; the
// former ray-envelope front SD exaggerated the first group. Values are
// figure estimates, with the stepped rear rim excluding the flange.

const LENS_DATA = {
  key: "zeiss-vario-sonnar-t-104-371mm-f18-49-rx100m1-2",
  maker: "Sony",
  name: "SONY ZEISS VARIO-SONNAR T* 10.4-37.1mm f/1.8-4.9 (Sony Cyber-shot DSC-RX100 / DSC-RX100 II)",
  subtitle: "US 2013/0314585 A1 Example 3 — strong RX100/RX100M2 correlation; not manufacturer-confirmed",
  specs: [
    "7 elements / 4 groups",
    "Patent design: 11.007-35.426 mm",
    "Patent Fno: 1.860-5.070",
    "8 aspherical surfaces",
    "Infinity-focus zoom states only",
  ],

  focalLengthMarketing: [10.4, 37.1],
  focalLengthDesign: [11.015040268, 35.421538518],
  apertureMarketing: 1.8,
  apertureDesign: 1.86,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1-inch-type",
  patentNumber: "US 2013/0314585 A1",
  patentAuthors: ["Atsushi Oohata", "Hiroki Hagiwara"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2013,
  elementCount: 7,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.851348,
      vd: 40.1045,
      indexReference: "d",
      fl: -15.382487,
      glass: "851401 class (HOYA M-TAFD305 coordinate match; supplier unproven)",
      role: "Negative GR1 front element.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 2.0027,
      vd: 19.317,
      indexReference: "d",
      fl: 44.13644,
      glass: "002193 class (HOYA E-FDS2 coordinate match; supplier unproven)",
      role: "Positive GR1 rear element.",
    },
    {
      id: 3,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 3",
      type: "Positive Lens (2× Asph)",
      nd: 1.77376,
      vd: 47.167,
      indexReference: "d",
      fl: 17.306373,
      glass: "774472 class (HOYA M-TAF401 coordinate match; supplier unproven)",
      role: "Positive single element at the front of GR2.",
    },
    {
      id: 4,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7207,
      indexReference: "d",
      fl: 12.096464,
      glass: "835427 lanthanum-flint class (vendor ambiguous)",
      cemented: "L22+L23",
      role: "Positive member of the cemented GR2 pair.",
    },
    {
      id: 5,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5305,
      indexReference: "d",
      fl: -7.111407,
      glass: "755275 dense-flint class (vendor ambiguous)",
      cemented: "L22+L23",
      role: "Negative member of the cemented GR2 pair.",
    },
    {
      id: 6,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 6",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.592014,
      vd: 67.0227,
      indexReference: "d",
      fl: 48.201667,
      glass: "592670 low-dispersion molding-glass class (HOYA M-PCD51 class; supplier unproven)",
      role: "Single positive GR3 element; source surface 13 is the cited wide-angle peripheral-ray mask plane.",
    },
    {
      id: 7,
      name: "L41",
      diagramLabel: "L41",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.592014,
      vd: 67.0227,
      indexReference: "d",
      fl: 29.775544,
      glass: "592670 low-dispersion molding-glass class (HOYA M-PCD51 class; supplier unproven)",
      role: "Single positive GR4 element.",
    },
  ],

  surfaces: [
    { label: "1A", R: -72.2917, d: 0.5, nd: 1.851348, elemId: 1, sd: 12 },
    { label: "2A", R: 16.0439, d: 3.876, nd: 1.0, elemId: 0, sd: 10 },
    { label: "3", R: 24.5281, d: 2.07, nd: 2.0027, elemId: 2, sd: 11 },
    { label: "4", R: 52.7, d: 25.677, nd: 1.0, elemId: 0, sd: 11 },

    { label: "6A", R: 12.1278, d: 3.15, nd: 1.77376, elemId: 3, sd: 8.6 },
    { label: "7A", R: 114.0, d: 0.138, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "8", R: 16.3964, d: 3.75, nd: 1.83481, elemId: 4, sd: 7.6 },
    { label: "9", R: -23.5538, d: 0.851, nd: 1.7552, elemId: 5, sd: 7.1 },
    { label: "10", R: 7.0649, d: 2.59, nd: 1.0, elemId: 0, sd: 4.9 },

    { label: "STO", R: 1e15, d: 0.65, nd: 1.0, elemId: 0, sd: 4.304772316 },

    { label: "12A", R: 9.8285, d: 3.45, nd: 1.592014, elemId: 6, sd: 5.1 },
    { label: "13A", R: 13.0352, d: 5.953, nd: 1.0, elemId: 0, sd: 4.9 },
    { label: "14A", R: 68.7924, d: 3.05, nd: 1.592014, elemId: 7, sd: 9.7 },
    { label: "15A", R: -23.3099, d: 6.733975685986314, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  asph: {
    "1A": {
      K: 0,
      A4: -1.27013e-5,
      A6: 2.33648e-7,
      A8: -1.18572e-9,
      A10: 2.70274e-12,
      A12: 0,
      A14: 0,
    },
    "2A": {
      K: 0,
      A4: -3.15446e-5,
      A6: 1.57628e-7,
      A8: -5.07497e-10,
      A10: 9.20126e-13,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: -5.93351e-5,
      A6: 3.90662e-7,
      A8: -1.58802e-8,
      A10: 3.16018e-10,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: -1.09305e-5,
      A6: 7.4806e-7,
      A8: -1.07073e-8,
      A10: 2.98355e-10,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 2.93742e-5,
      A6: 3.24622e-6,
      A8: -7.05936e-8,
      A10: 2.04068e-9,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: 1.82865e-4,
      A6: 6.01753e-6,
      A8: -1.65902e-7,
      A10: 5.31568e-9,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 3.25663e-6,
      A6: 2.78857e-7,
      A8: -5.22524e-9,
      A10: 5.52448e-11,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 5.699e-5,
      A6: -5.04925e-7,
      A8: 1.73218e-9,
      A10: 3.14415e-11,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "4": [
      [25.677, 25.677],
      [11.421, 11.421],
      [2.7, 2.7],
    ],
    STO: [
      [0.65, 0.65],
      [1.952, 1.952],
      [1.07, 1.07],
    ],
    "13A": [
      [5.953, 5.953],
      [14.438, 14.438],
      [29.463, 29.463],
    ],
    "15A": [
      [6.733975685986314, 6.733975685986314],
      [6.039975685986314, 6.039975685986314],
      [5.293975685986314, 5.293975685986314],
    ],
  },

  varLabels: [
    ["4", "D4"],
    ["STO", "D11"],
    ["13A", "D13"],
    ["15A", "Rear gap (air-equivalent)"],
  ],

  zoomPositions: [11.007, 19.615, 35.426],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "GR1", fromSurface: "1A", toSurface: "4" },
    { text: "GR2", fromSurface: "6A", toSurface: "10" },
    { text: "GR3", fromSurface: "12A", toSurface: "13A" },
    { text: "GR4", fromSurface: "14A", toSurface: "15A" },
  ],

  doublets: [{ text: "L22+L23", fromSurface: "8", toSurface: "10" }],

  closeFocusM: 0.05,
  focusDescription:
    "Example 3 publishes infinity-focus zoom states only; Sony's 0.05 m wide-end focus range is metadata only and does not define an internal close-focus state.",

  nominalFno: [1.86, 3.469, 5.07],
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
