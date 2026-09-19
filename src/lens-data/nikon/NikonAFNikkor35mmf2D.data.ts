import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — NIKON AF NIKKOR 35mm f/2 D
 *
 * Data source: JP 2021-36283 A, Example 1 (Nikon Corporation).
 * Six elements / five groups; all spherical. No source scaling (s = 1).
 *
 * Focus: PUBLISHED unit focus. The complete patent optical system translates objectward as D12 grows.
 * Nikon does not identify this example as the production prescription. Nikon USA lists the production lens as
 * rear focusing, so the patent mechanism is preserved without asserting that it is the production mechanism.
 *
 * Stop / semi-diameters: Example 1 publishes neither a physical stop diameter nor surface semi-diameters.
 * STO sd = 9.60608161136115 mm is calibrated from patent FNO = 2.006 and the independently computed
 * entrance-pupil magnification; it is not a published diaphragm dimension. Refracting-surface SDs are
 * modeled from exact spherical meridional ray geometry: on-axis full-stop marginal sampling plus the
 * default 0.6-field off-axis fan at all three published focus states, followed by about 10% mechanical
 * clearance and 0.1 mm rounding. Stage-2 CHAT_PREFLIGHT checks edge thickness, actual rim slope,
 * cross-gap intrusion, and sampled containment. Repository surface and image-circle audits pass.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-nikkor-35mm-f2d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 35mm f/2 D",
  subtitle:
    "JP 2021-36283 A Ex.1 — strong form correlation; attribution unconfirmed; patent unit focus differs from Nikon RF",
  specs: ["6 ELEMENTS / 5 GROUPS", "f = 36.000 mm (patent)", "F/2.006 (patent)", "2ω = 63.245°", "ALL-SPHERICAL"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.99965181217937,
  apertureMarketing: 2,
  apertureDesign: 2.006,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2021-36283 A",
  patentAuthors: ["Masashi Yamashita", "Tomoki Ito", "Tomonori Kuribayashi", "Keigo Koida", "Satoshi Miwa", "Yoko Komatsubara", "Katsuya Watanabe", "Azuna Nonaka", "Ayumu Makida"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2021,
  elementCount: 6,
  groupCount: 5,

  /* Patent nd/νd are retained exactly. Glass labels are confidence-qualified classes,
   * not claims of supplier/melt identity; candidate catalog line indices are not injected. */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.12,
      // Patent Table 1 theta_gF converted using the runtime Schott normal line.
      dPgF: 4.984e-05,
      indexReference: "d",
      fl: -57.650804457200344,
      glass: "J-BK7A-class (coordinate-compatible spectral proxy; supplier unproven)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.78797,
      vd: 47.17,
      // Patent Table 1 theta_gF converted using the runtime Schott normal line.
      dPgF: -0.00966006,
      indexReference: "d",
      fl: 20.028441617268722,
      glass: "Unmatched (788472 class; patent partial dispersion retained as dPgF)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 48.96,
      // Patent Table 1 theta_gF converted using the runtime Schott normal line.
      dPgF: -0.00154928,
      indexReference: "d",
      fl: -52.43273354474741,
      glass: "PBL6Y-class (coordinate-compatible spectral proxy; supplier unproven)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.35,
      // Patent Table 1 theta_gF converted using the runtime Schott normal line.
      dPgF: 0.0103387,
      indexReference: "d",
      fl: -21.49991921588884,
      glass: "Unmatched (805254 class; SF6-like nd/νd but partial dispersion incompatible)",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7481,
      vd: 52.28,
      // Patent Table 1 theta_gF converted using the runtime Schott normal line.
      dPgF: -0.00936504,
      indexReference: "d",
      fl: 39.28399682887146,
      glass: "E-LAKH1-class (coordinate-compatible spectral proxy; supplier unproven)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.68348,
      vd: 54.8,
      // Patent Table 1 theta_gF converted using the runtime Schott normal line.
      dPgF: -0.0015264,
      indexReference: "d",
      fl: 54.31888607111083,
      glass: "Unmatched (683548 class; patent partial dispersion retained as dPgF)",
    },
  ],

  surfaces: [
    { label: "1", R: 37.6614, d: 1.5, nd: 1.5168, elemId: 1, sd: 15.1 },
    { label: "2", R: 16.4087, d: 16, nd: 1, elemId: 0, sd: 13.4 },
    { label: "3", R: 34.4105, d: 9, nd: 1.78797, elemId: 2, sd: 12.7 },
    { label: "4", R: -25.7916, d: 5.5, nd: 1.53172, elemId: 3, sd: 12.5 },
    { label: "5", R: -369.8812, d: 2, nd: 1, elemId: 0, sd: 11.2 },
    { label: "STO", R: 1e15, d: 4, nd: 1, elemId: 0, sd: 9.60608161136115 },
    { label: "7", R: -24.4463, d: 1.9, nd: 1.80518, elemId: 4, sd: 10.1 },
    { label: "8", R: 61.3691, d: 2.2, nd: 1, elemId: 0, sd: 10.5 },
    { label: "9", R: -73.8984, d: 4, nd: 1.7481, elemId: 5, sd: 10.7 },
    { label: "10", R: -21.5135, d: 0.1, nd: 1, elemId: 0, sd: 11.2 },
    { label: "11", R: 94.8086, d: 3.6, nd: 1.68348, elemId: 6, sd: 11.7 },
    { label: "12", R: -60.0802, d: 37.938, nd: 1, elemId: 0, sd: 11.9 },
  ],

  asph: {},

  focusPositions: [0, 0.21368634550222804, 1],
  var: {
    "12": [37.938, 39.138, 46.457],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "GF", fromSurface: "1", toSurface: "5" },
    { text: "GR", fromSurface: "7", toSurface: "12" },
  ],
  doublets: [{ text: "L2+L3", fromSurface: "3", toSurface: "5" }],

  closeFocusM: 0.25,
  focusDescription: "Published whole-lens focus; the patent mechanism differs from production rear focusing.",

  nominalFno: 2.006,
  fstopSeries: [2.006, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
