import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — CANON EF 28-105mm f/3.5-4.5 II USM                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2002-365547 A, Numerical Example 1 (Canon).       ║
 * ║  Five-group positive-negative-positive-negative-positive zoom.     ║
 * ║  15 elements / 12 air-spaced components, all spherical.            ║
 * ║  Focus: patent-preferred L2 inner focus; close-focus gaps below     ║
 * ║  are an independently solved first-order model because the patent  ║
 * ║  publishes infinity-focus zoom spacings only.                       ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D13, D19, D22.                            ║
 * ║  Focus variable gaps: D5 and D13 (L2 translation only).            ║
 * ║  BFD: independently solved at every zoom state.                    ║
 * ║                                                                    ║
 * ║  NOTE ON CORRELATION:                                               ║
 * ║  Example 1 is strongly associated with the production lens by      ║
 * ║  format, construction, power sequence, aperture, focus concept,    ║
 * ║  and official block-diagram similarity. The patent does not name   ║
 * ║  the retail lens, and its sibling examples are closely related;    ║
 * ║  this file therefore represents the patent example, not a claim    ║
 * ║  of exact factory-production prescription identity.                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent omits clear apertures. SDs were inferred from combined ║
 * ║  marginal/chief-ray envelopes at 60% field, constrained by the     ║
 * ║  official 58 mm filter thread, patent/production diagram          ║
 * ║  proportions, element edge thickness, rim slope, and residual     ║
 * ║  clearance across every air gap at all modeled states.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-28-105mm-f35-45-ii-usm",
  maker: "Canon",
  name: "CANON EF 28-105mm f/3.5-4.5 II USM",
  subtitle: "JP 2002-365547 A — Numerical Example 1 (correlated patent prescription)",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "PATENT EFL 28.903-101.333 mm",
    "PATENT f/3.63-4.67",
    "ALL-SPHERICAL",
    "INNER FOCUS",
  ],
  focalLengthMarketing: [28, 105],
  focalLengthDesign: [28.902522, 101.333334],
  apertureMarketing: 3.5,
  apertureDesign: 3.63,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2002-365547 A",
  patentAuthors: ["Makoto Mitsusaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2002,
  elementCount: 15,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -125.335825,
      glass: "S-TIH53 (OHARA equivalent; vendor unspecified)",
      role: "High-index flint member of the weakly positive front cemented pair.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.622992,
      vd: 58.2,
      fl: 93.684162,
      glass: "S-BSM15 (OHARA equivalent; vendor unspecified)",
      role: "Positive crown partner in the front achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.712995,
      vd: 53.9,
      fl: 92.660685,
      glass: "S-LAL8 (OHARA equivalent; vendor unspecified)",
      role: "Air-spaced positive meniscus that supplies most of Group 1's useful positive power.",
    },
    {
      id: 4,
      name: "L2a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -19.861731,
      glass: "S-LAH60V (OHARA equivalent; vendor unspecified)",
      role: "Strong front negative member of the variator/focus group.",
    },
    {
      id: 5,
      name: "L2b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -25.703743,
      glass: "S-LAH65V (OHARA equivalent; vendor unspecified)",
      role: "Dense lanthanum flint negative element in the variator group.",
    },
    {
      id: 6,
      name: "L2c",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      fl: 18.943621,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      role: "Strong internal positive element that moderates Group 2's net negative power.",
    },
    {
      id: 7,
      name: "L2d",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      fl: -35.706268,
      glass: "S-LAH66 (OHARA equivalent; vendor unspecified)",
      role: "Higher-Abbe rear negative element constrained explicitly by patent conditions (8)-(10).",
    },
    {
      id: 8,
      name: "L3a",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -35.217623,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      role: "Negative member of the principal Group 3 cemented achromat.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L3b",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.622992,
      vd: 58.2,
      fl: 18.338521,
      glass: "S-BSM15 (OHARA equivalent; vendor unspecified)",
      role: "Strong positive crown member of the Group 3 cemented achromat.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L3c",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      fl: 46.852369,
      glass: "S-BSM14 (OHARA equivalent; catalog code 603607)",
      role: "Air-spaced positive singlet completing the main positive relay group.",
    },
    {
      id: 11,
      name: "L4a",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.698947,
      vd: 30.1,
      fl: 23.772583,
      glass: "S-TIM35 (OHARA equivalent; vendor unspecified)",
      role: "High-dispersion positive member of the net-negative Group 4 cemented pair.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L4b",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.712995,
      vd: 53.9,
      fl: -15.223364,
      glass: "S-LAL8 (OHARA equivalent; vendor unspecified)",
      role: "Lower-dispersion negative member of Group 4.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L5a",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 35.708067,
      glass: "S-FSL5 (OHARA equivalent; vendor unspecified)",
      role: "Low-dispersion rear-group positive element with a weak object-side surface.",
    },
    {
      id: 14,
      name: "L5b",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.1,
      fl: 61.644959,
      glass: "S-BAL35 (OHARA equivalent; catalog code 589612)",
      role: "Moderate positive crown constrained by patent conditions (14)-(16).",
    },
    {
      id: 15,
      name: "L5c",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -33.697556,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      role: "Image-convex negative meniscus completing the net-positive rear relay.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 92.12, d: 1.5, nd: 1.84666, elemId: 1, sd: 28.4 },
    { label: "2", R: 48.944, d: 6.14, nd: 1.622992, elemId: 2, sd: 27.0 },
    { label: "3", R: 288.63, d: 0.12, nd: 1.0, elemId: 0, sd: 24.5 },
    { label: "4", R: 45.314, d: 5.05, nd: 1.712995, elemId: 3, sd: 23.5 },
    { label: "5", R: 137.567, d: 1.95, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "6", R: 62.216, d: 1.2, nd: 1.834, elemId: 4, sd: 13.4 },
    { label: "7", R: 12.967, d: 5.23, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "8", R: -73.291, d: 1.05, nd: 1.804, elemId: 5, sd: 10.8 },
    { label: "9", R: 28.965, d: 0.1, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "10", R: 21.363, d: 5.16, nd: 1.84666, elemId: 6, sd: 10.5 },
    { label: "11", R: -57.228, d: 0.63, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "12", R: -28.337, d: 1.0, nd: 1.772499, elemId: 7, sd: 9.0 },
    { label: "13", R: 1052.655, d: 14.66, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "STO", R: 1e15, d: 0.07, nd: 1.0, elemId: 0, sd: 7.75 },
    { label: "15", R: 25.369, d: 0.9, nd: 1.84666, elemId: 8, sd: 8.8 },
    { label: "16", R: 13.484, d: 5.35, nd: 1.622992, elemId: 9, sd: 8.8 },
    { label: "17", R: -63.416, d: 0.12, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "18", R: 35.055, d: 2.66, nd: 1.603112, elemId: 10, sd: 10.0 },
    { label: "19", R: -141.558, d: 1.71, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "20", R: -40.005, d: 3.63, nd: 1.698947, elemId: 11, sd: 9.2 },
    { label: "21", R: -12.178, d: 1.55, nd: 1.712995, elemId: 12, sd: 9.4 },
    { label: "22", R: 105.139, d: 7.34, nd: 1.0, elemId: 0, sd: 10.7 },
    { label: "23", R: 780.731, d: 4.99, nd: 1.48749, elemId: 13, sd: 11.7 },
    { label: "24", R: -17.767, d: 0.12, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "25", R: 58.656, d: 2.83, nd: 1.58913, elemId: 14, sd: 12.8 },
    { label: "26", R: -93.652, d: 3.06, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "27", R: -17.953, d: 1.4, nd: 1.84666, elemId: 15, sd: 10.4 },
    { label: "28", R: -50.156, d: 38.889555575, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  asph: {},

  /* ── Zoom and focus ── */
  zoomPositions: [28.9, 50.0, 101.37],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [1.95, 0.749849791],
      [13.77, 11.807430419],
      [28.64, 24.129250072],
    ],
    "13": [
      [14.66, 15.860150209],
      [8.32, 10.282569581],
      [1.96, 6.470749928],
    ],
    "19": [
      [1.71, 1.71],
      [4.65, 4.65],
      [7.6, 7.6],
    ],
    "22": [
      [7.34, 7.34],
      [4.4, 4.4],
      [1.45, 1.45],
    ],
    "28": [
      [38.889555575, 38.889555575],
      [45.425398029, 45.425398029],
      [51.691520748, 51.691520748],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["19", "D19"],
    ["22", "D22"],
    ["28", "BF"],
  ],
  focusDescription:
    "Inner focus. The patent recommends moving negative Group 2; close-focus D5/D13 values are a paraxial L2-only model solved at the official 0.50 m MFD, not a published production cam law.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (-) / FOCUS", fromSurface: "6", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "19" },
    { text: "L4 (-)", fromSurface: "20", toSurface: "22" },
    { text: "L5 (+)", fromSurface: "23", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  /* ── Product and display controls ── */
  closeFocusM: 0.5,
  nominalFno: [3.5, 4.0, 4.5],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 27],
  maxFstop: 27,
  apertureBlades: 7,
  scFill: 0.63,
  yScFill: 0.68,
} satisfies LensDataInput;

export default LENS_DATA;
