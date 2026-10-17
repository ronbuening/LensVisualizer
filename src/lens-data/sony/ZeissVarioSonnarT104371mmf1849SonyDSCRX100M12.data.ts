import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * - Source surfaces 16-19 are the rear filter SG stack, two plates modeled in order in
 *   `rearPlates` (traced, not drawn): 0.300 mm nd 1.516798 / vd 64.1983 + 0.150 mm air
 *   + 0.500 mm nd 1.556708 / vd 58.5624 + 1.000 mm to IMG. Surface 15A stores the
 *   patent's physical D15 (5.065 / 4.371 / 3.625 mm) to the first plate.
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
 * The physical stop diameter is unpublished. nominalFno carries the three published design f-numbers,
 * beginning at patent Fno=1.860. zoomApertureModel derives a physical iris schedule from those source
 * stations; agreement to those values is calibration, not an independent measurement of the manufactured
 * iris diameter. The original wide-state calibration used the modeled entrance-pupil magnification.
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
  schema: 2,
  key: "zeiss-vario-sonnar-t-104-371mm-f18-49-rx100m1-2",
  maker: "Sony",
  name: "SONY ZEISS VARIO-SONNAR T* 10.4-37.1mm f/1.8-4.9 (Sony Cyber-shot DSC-RX100 / DSC-RX100 II)",
  subtitle: "US 2013/0314585 A1 Example 3 — strong RX100/RX100M2 correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-inch-type",
    specs: [
      "7 elements / 4 groups",
      "Patent design: 11.007-35.426 mm",
      "Patent Fno: 1.860-5.070",
      "8 aspherical surfaces",
      "Infinity-focus zoom states only",
    ],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: [10.4, 37.1], design: [11.015040268, 35.421538518] },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "US 2013/0314585 A1",
    patentYear: 2013,
    authors: ["Atsushi Oohata", "Hiroki Hagiwara"],
    assignees: ["Sony Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.851348,
      vd: 40.1045,
      indexReference: "d",
      focalLengthMm: -15.382487,
      glass: "851401 class (HOYA M-TAFD305 coordinate match; supplier unproven)",
      role: "Negative GR1 front element.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 2.0027,
      vd: 19.317,
      indexReference: "d",
      focalLengthMm: 44.13644,
      glass: "002193 class (HOYA E-FDS2 coordinate match; supplier unproven)",
      role: "Positive GR1 rear element.",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Positive Lens (2× Asph)",
      nd: 1.77376,
      vd: 47.167,
      indexReference: "d",
      focalLengthMm: 17.306373,
      glass: "774472 class (HOYA M-TAF401 coordinate match; supplier unproven)",
      role: "Positive single element at the front of GR2.",
      diagramLabel: "L21",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7207,
      indexReference: "d",
      focalLengthMm: 12.096464,
      glass: "S-LAH55 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Positive member of the cemented GR2 pair.",
      diagramLabel: "L22",
      cemented: "L22+L23",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5305,
      indexReference: "d",
      focalLengthMm: -7.111407,
      glass: "E-FD4 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Negative member of the cemented GR2 pair.",
      diagramLabel: "L23",
      cemented: "L22+L23",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.592014,
      vd: 67.0227,
      indexReference: "d",
      focalLengthMm: 48.201667,
      glass: "592670 low-dispersion molding-glass class (HOYA M-PCD51 class; supplier unproven)",
      role: "Single positive GR3 element; source surface 13 is the cited wide-angle peripheral-ray mask plane.",
      diagramLabel: "L31",
    },
    {
      id: 7,
      name: "L41",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.592014,
      vd: 67.0227,
      indexReference: "d",
      focalLengthMm: 29.775544,
      glass: "592670 low-dispersion molding-glass class (HOYA M-PCD51 class; supplier unproven)",
      role: "Single positive GR4 element.",
      diagramLabel: "L41",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: -72.2917,
      d: 0.5,
      sd: 12,
      medium: 1,
      asphere: { K: 0, A4: -1.27013e-5, A6: 2.33648e-7, A8: -1.18572e-9, A10: 2.70274e-12 },
    },
    {
      label: "2A",
      R: 16.0439,
      d: 3.876,
      sd: 10,
      asphere: { K: 0, A4: -3.15446e-5, A6: 1.57628e-7, A8: -5.07497e-10, A10: 9.20126e-13 },
    },
    { label: "3", R: 24.5281, d: 2.07, sd: 11, medium: 2 },
    { label: "4", R: 52.7, sd: 11 },

    {
      label: "6A",
      R: 12.1278,
      d: 3.15,
      sd: 8.6,
      medium: 3,
      asphere: { K: 0, A4: -5.93351e-5, A6: 3.90662e-7, A8: -1.58802e-8, A10: 3.16018e-10 },
    },
    {
      label: "7A",
      R: 114.0,
      d: 0.138,
      sd: 8.4,
      asphere: { K: 0, A4: -1.09305e-5, A6: 7.4806e-7, A8: -1.07073e-8, A10: 2.98355e-10 },
    },
    { label: "8", R: 16.3964, d: 3.75, sd: 7.6, medium: 4 },
    { label: "9", R: -23.5538, d: 0.851, sd: 7.1, medium: 5 },
    { label: "10", R: 7.0649, d: 2.59, sd: 4.9 },

    { label: "STO", R: "flat" },

    {
      label: "12A",
      R: 9.8285,
      d: 3.45,
      sd: 5.1,
      medium: 6,
      asphere: { K: 0, A4: 2.93742e-5, A6: 3.24622e-6, A8: -7.05936e-8, A10: 2.04068e-9 },
    },
    {
      label: "13A",
      R: 13.0352,
      sd: 4.9,
      asphere: { K: 0, A4: 1.82865e-4, A6: 6.01753e-6, A8: -1.65902e-7, A10: 5.31568e-9 },
    },
    {
      label: "14A",
      R: 68.7924,
      d: 3.05,
      sd: 9.7,
      medium: 7,
      asphere: { K: 0, A4: 3.25663e-6, A6: 2.78857e-7, A8: -5.22524e-9, A10: 5.52448e-11 },
    },
    // Last surface: patent D15, physical gap to the first SG plate
    {
      label: "15A",
      R: -23.3099,
      sd: 9.8,
      asphere: { K: 0, A4: 5.699e-5, A6: -5.04925e-7, A8: 1.73218e-9, A10: 3.14415e-11 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 11.007, nominalFNumber: 1.86, label: "Wide" },
      { focalLengthMm: 19.615, nominalFNumber: 3.469 },
      { focalLengthMm: 35.426, nominalFNumber: 5.07, label: "Tele" },
    ],
    // Infer a physical iris at each source zoom station; a fixed wide iris
    // over-opens the middle/tele states relative to their published FNo.
    apertureModel: "from-nominal-fno",
  },

  focus: {
    closeFocusM: 0.05,
    description:
      "Example 3 publishes infinity-focus zoom states only; Sony's 0.05 m wide-end focus range is metadata only and does not define an internal close-focus state.",
  },

  gaps: {
    "4": {
      label: "D4",
      values: [
        [25.677, 25.677],
        [11.421, 11.421],
        [2.7, 2.7],
      ],
    },
    STO: {
      label: "D11",
      values: [
        [0.65, 0.65],
        [1.952, 1.952],
        [1.07, 1.07],
      ],
    },
    "13A": {
      label: "D13",
      values: [
        [5.953, 5.953],
        [14.438, 14.438],
        [29.463, 29.463],
      ],
    },
    "15A": {
      label: "D15",
      values: [
        [5.065, 5.065],
        [4.371, 4.371],
        [3.625, 3.625],
      ],
    },
  },

  aperture: { fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Filter SG (patent Table 9 surfaces 16–19): traced, not drawn ── */
  rearPlates: [
    {
      label: "SG",
      thicknessMm: 0.3,
      nd: 1.516798,
      vd: 64.1983,
      glass: "N-BK7",
      gapAfterMm: 0.15,
      source: "US 2013/0314585 A1, Example 3 Table 9 surfaces 16–17 (first SG plate)",
    },
    {
      label: "SG",
      thicknessMm: 0.5,
      nd: 1.556708,
      vd: 58.5624,
      glass: "BAL15Y",
      gapAfterMm: 1.0,
      source: "US 2013/0314585 A1, Example 3 Table 9 surfaces 18–19 (second SG plate)",
    },
  ],

  groups: [
    { text: "GR1", fromSurface: "1A", toSurface: "4" },
    { text: "GR2", fromSurface: "6A", toSurface: "10" },
    { text: "GR3", fromSurface: "12A", toSurface: "13A" },
    { text: "GR4", fromSurface: "14A", toSurface: "15A" },
  ],
  doublets: [{ text: "L22+L23", fromSurface: "8", toSurface: "10" }],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
