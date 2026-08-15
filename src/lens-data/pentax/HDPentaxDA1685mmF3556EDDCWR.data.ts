import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — HD PENTAX-DA 16-85mm F3.5-5.6 ED DC WR
 *
 * Data source: JP 2016-114800 A, Numerical Example 1 (Ricoh Imaging Company, Ltd.; Yoichi Nomura).
 * Production correlation: HD PENTAX-DA 16-85mm F3.5-5.6 ED DC WR.
 * 16 physical optical elements / 12 air-separated groups; 3 aspherical surfaces.
 * The L21 hybrid negative lens is one physical element but is authored as two optical media entries:
 * a 0.200 mm synthetic-resin aspheric layer plus the bonded glass substrate. elementCount remains 16.
 *
 * Zoom positions are the three infinity-focus states published in patent Table 2.
 * Zoom-only variable gaps: D5, D15, D23, and BF (surface 30 to image plane).
 * Example 1 has a real G2 reversal. Recomputed from the actual authored spacings and BF values, G2 moves
 * 0.141 mm imageward from wide to mid, then 15.465 mm objectward from mid to tele relative to the fixed
 * image plane. (Using the independently rounded patent L values instead gives +0.144 / -15.464 mm.)
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes no close-focus spacing table or focusing
 * mechanism. The production 0.35 m minimum focus distance is metadata only; all var pairs therefore keep
 * infinity and close values identical at each zoom position.
 *
 * Scaling: none. Patent radii, thicknesses, spacings, and asphere coefficients are used at source scale.
 * The patent uses the standard conic constant K directly; all Example 1 K values are 0.
 *
 * Aperture stop: the patent publishes the stop plane but not its clear diameter. STO sd = 6.95 mm is an
 * inferred single physical stop semi-diameter consistent with all three one-decimal patent FNO values.
 * nominalFno stores the exact modeled f-numbers produced by that stop and the transcribed prescription.
 *
 * Semi-diameters: not published. They are modeling values derived from independent marginal/chief-ray
 * envelopes across all three zoom states, the patent Fig. 1/Fig. 4 silhouettes, and the current geometry
 * limits (edge thickness, actual rim slope, shared-gap intrusion). Full-field envelopes inform the large
 * G1/G4 apertures; strongly curved G2 surfaces are capped by physical sag/gap limits while containing the
 * default 0.6-field off-axis bundle with clearance. These SDs are not claimed as patent values.
 *
 * Glass labels: the patent publishes d-line nd/vd coordinates but no vendors. Vendor-neutral six-digit
 * optical codes are used where defensible; the hybrid resin is explicitly unmatched. No nC/nF/ng/dPgF
 * values are authored because Example 1 does not publish them and catalog coordinates are not unique enough
 * to establish vendor-specific spectral data without speculation.
 *
 * Production metadata sources:
 * https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/hdpentax-da-16-85/
 * https://news.ricoh-imaging.co.jp/rim_info2/2014/20141030_019036.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hd-pentax-da-16-85mm-f35-56-ed-dc-wr",
  maker: "Pentax",
  name: "HD PENTAX-DA 16-85mm f/3.5-5.6 ED DC WR",
  subtitle: "JP 2016-114800 A Example 1 — Ricoh Imaging / Yoichi Nomura",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "16-85mm f/3.5-5.6 (marketing)",
    "16.48-82.45mm, modeled f/3.585-5.764 (Example 1)",
    "3 ASPHERICAL SURFACES",
    "1 PRODUCTION ED ELEMENT",
    "APS-C / PENTAX K",
  ],

  focalLengthMarketing: [16, 85],
  focalLengthDesign: [16.480103, 82.441997],
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "JP 2016-114800 A",
  patentAuthors: ["Yoichi Nomura"],
  patentAssignees: ["Ricoh Imaging Company, Ltd."],
  patentYear: 2016,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -139.1918,
      glass: "847238 (vendor-neutral optical code)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 126.272069,
      glass: "773496 (vendor-neutral optical code)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: 119.376823,
      glass: "804466 (vendor-neutral optical code)",
    },
    {
      id: 4,
      name: "L21r",
      label: "L21 synthetic-resin aspheric layer",
      type: "Aspheric Synthetic-Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      fl: -743.136801,
      glass: "Unmatched (synthetic resin; patent nd=1.52972, vd=42.7)",
      cemented: "H21",
    },
    {
      id: 5,
      name: "L21g",
      label: "L21 glass substrate",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -19.418324,
      glass: "883408 (vendor-neutral optical code)",
      cemented: "H21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -24.711918,
      glass: "773496 (vendor-neutral optical code)",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      fl: 25.683342,
      glass: "762265 (vendor-neutral optical code)",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -31.676811,
      glass: "804466 (vendor-neutral optical code)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L25",
      label: "L25",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      fl: 60.788354,
      glass: "762265 (vendor-neutral optical code)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 30.66729,
      glass: "516641 (vendor-neutral optical code)",
    },
    {
      id: 11,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 27.401008,
      glass: "516641 (vendor-neutral optical code)",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.79952,
      vd: 42.2,
      fl: -31.516554,
      glass: "800422 (vendor-neutral optical code)",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L34",
      label: "L34",
      type: "Biconcave Negative (1x Asph)",
      nd: 1.7433,
      vd: 49.3,
      fl: -36.182304,
      glass: "743493 (vendor-neutral optical code)",
    },
    {
      id: 14,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive (1x Asph)",
      nd: 1.497,
      vd: 81.6,
      fl: 43.228259,
      glass: "497816 (vendor-neutral optical code)",
      apd: "patent",
      apdNote:
        "JP 2016-114800 A identifies the outer positive G4 lenses as anomalous-dispersion materials. Example 1 publishes no line indices or dPgF for L41.",
    },
    {
      id: 15,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 108.723291,
      glass: "618634 (vendor-neutral optical code)",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L43",
      label: "L43",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      fl: -26.857313,
      glass: "883408 (vendor-neutral optical code)",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 34.89006,
      glass: "538747 (vendor-neutral optical code)",
      apd: "patent",
      apdNote:
        "JP 2016-114800 A identifies the outer positive G4 lenses as anomalous-dispersion materials; Ricoh's production diagram also marks the corresponding final element as ED. No production supplier or dPgF is asserted.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 345.162, d: 1.6, nd: 1.84666, elemId: 1, sd: 30.0 },
    { label: "2", R: 87.666, d: 5.788, nd: 1.7725, elemId: 2, sd: 30.0 },
    { label: "3", R: 840.691, d: 0.15, nd: 1.0, elemId: 0, sd: 30.0 },
    { label: "4", R: 60.115, d: 4.797, nd: 1.804, elemId: 3, sd: 24.0 },
    { label: "5", R: 155.158, d: 2.523, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "6A", R: 54.995, d: 0.2, nd: 1.52972, elemId: 4, sd: 11.0 },
    { label: "7", R: 48.193, d: 1.25, nd: 1.883, elemId: 5, sd: 11.0 },
    { label: "8", R: 12.493, d: 7.732, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "9", R: -29.668, d: 1.2, nd: 1.7725, elemId: 6, sd: 9.5 },
    { label: "10", R: 54.485, d: 0.469, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "11", R: 34.364, d: 4.255, nd: 1.76182, elemId: 7, sd: 9.75 },
    { label: "12", R: -43.004, d: 0.579, nd: 1.0, elemId: 0, sd: 9.75 },
    { label: "13", R: -30.485, d: 1.2, nd: 1.804, elemId: 8, sd: 9.75 },
    { label: "14", R: 157.473, d: 3.076, nd: 1.76182, elemId: 9, sd: 9.75 },
    { label: "15", R: -65.048, d: 25.03, nd: 1.0, elemId: 0, sd: 9.75 },
    { label: "STO", R: 1e15, d: 0.8, nd: 1.0, elemId: 0, sd: 6.95 },
    { label: "17", R: 30.478, d: 4.95, nd: 1.51633, elemId: 10, sd: 8.5 },
    { label: "18", R: -31.134, d: 0.15, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "19", R: 32.939, d: 4.33, nd: 1.51633, elemId: 11, sd: 8.5 },
    { label: "20", R: -23.69, d: 1.2, nd: 1.79952, elemId: 12, sd: 8.5 },
    { label: "21", R: -404.729, d: 2.261, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "22A", R: -28.209, d: 1.2, nd: 1.7433, elemId: 13, sd: 9.0 },
    { label: "23", R: 587.53, d: 7.451, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "24", R: 30.626, d: 4.787, nd: 1.497, elemId: 14, sd: 10.0 },
    { label: "25A", R: -68.242, d: 0.15, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "26", R: 342.777, d: 2.426, nd: 1.618, elemId: 15, sd: 10.5 },
    { label: "27", R: -83.347, d: 1.2, nd: 1.883, elemId: 16, sd: 10.5 },
    { label: "28", R: 33.37, d: 2.01, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "29", R: 117.624, d: 5.226, nd: 1.53775, elemId: 17, sd: 11.0 },
    { label: "30", R: -21.976, d: 38.99, nd: 1.0, elemId: 0, sd: 11.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 1.598e-5,
      A6: -2.837e-8,
      A8: -5.046e-12,
      A10: 6.249e-14,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: 1.291e-5,
      A6: -4.793e-9,
      A8: -2.705e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 4.185e-5,
      A6: -4.956e-8,
      A8: 7.569e-11,
      A10: -7.196e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom-only variable air spacings; no close-focus reconstruction ── */
  var: {
    "5": [
      [2.523, 2.523],
      [22.037, 22.037],
      [44.543, 44.543],
    ],
    "15": [
      [25.03, 25.03],
      [10.55, 10.55],
      [1.825, 1.825],
    ],
    "23": [
      [7.451, 7.451],
      [3.24, 3.24],
      [1.5, 1.5],
    ],
    "30": [
      [38.99, 38.99],
      [57.54, 57.54],
      [83.47, 83.47],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["15", "D15"],
    ["23", "D23"],
    ["30", "BF"],
  ],

  zoomPositions: [16.48, 35.0, 82.45],
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and cemented/hybrid annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6A", toSurface: "15" },
    { text: "G3 (+)", fromSurface: "17", toSurface: "23" },
    { text: "G4 (+)", fromSurface: "24", toSurface: "30" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H21", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JP 2016-114800 A Example 1 publishes infinity-focus zoom states only; " +
    "the production 0.35 m MFD is metadata and does not define internal focus travel.",

  /* ── Aperture configuration ── */
  nominalFno: [3.585229851, 4.435970318, 5.763925078],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,

  /* ── Layout ── */
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
