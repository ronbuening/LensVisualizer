import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — HD PENTAX-DA 18-50mm F4-5.6 DC WR RE                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2016-6455 A, Numerical Example 2 (Tables 5-8), Ricoh Imaging. ║
 * ║ Job-card identifier: JP 2016-006455 A. Source publication prints 2016-6455 A.  ║
 * ║ Production correlation: Ricoh Imaging's HD PENTAX-DA 18-50mm F4-5.6 DC WR RE. ║
 * ║ Physical design: 11 lens members / 8 air-separated groups / 1 asphere.          ║
 * ║ Modeling split: the bonded resin asphere on L12 is a separate media entry,      ║
 * ║ so `elements` has 12 entries while `elementCount` remains the patent's 11.      ║
 * ║ Scale factor: s = 1. No prescription rescaling is applied.                       ║
 * ║                                                                                  ║
 * ║ Focus status: PUBLISHED. G1b (hybrid L12 + L13) translates objectward.          ║
 * ║ Table 6 publishes infinity and 300 mm rows at all three zoom stations.           ║
 * ║ Focus gaps: D2 and D7. D2 decreases and D7 increases by equal travel.            ║
 * ║ Zoom-only gaps: D12, D16, and rear spacing D21. D7 also varies with zoom.        ║
 * ║ G1 reverses direction over wide→mid→tele; G2 and G4 share a trajectory.          ║
 * ║                                                                                  ║
 * ║ Stop SD: inferred, not patent-published. The adopted 5.31736 mm radius is the    ║
 * ║ mean of six independent radii solved from the patent FNO rows. `nominalFno`      ║
 * ║ stores the modeled infinity-state F-numbers produced by this physical stop.      ║
 * ║                                                                                  ║
 * ║ Surface SDs: inferred, not patent-published. They were derived from the Fig. 10  ║
 * ║ optical section plus exact/paraxial marginal/chief-ray envelopes, then checked  ║
 * ║ at all six published states for edge thickness, actual rim slope, shared-gap    ║
 * ║ intrusion, 60%-field containment, and asphere validity.                          ║
 * ║                                                                                  ║
 * ║ Glass identity: the patent publishes only d-line nd/νd coordinates. Vendor       ║
 * ║ identity remains unresolved, but exact catalog equivalents are named where the   ║
 * ║ coordinate match is defensible. No production-supplier or APO claim is inferred. ║
 * ║ The resin chemistry is unpublished and remains Unmatched.                        ║
 * ║                                                                                  ║
 * ║ Manufacturer identity/spec sources:                                              ║
 * ║ https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/hdpentax-da-18-50/ ║
 * ║ https://news.ricoh-imaging.co.jp/rim_info2/2015/20150210_019091.html             ║
 * ╚══════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-hd-da-18-50-f4-56-dc-wr-re",
  maker: "Pentax",
  name: "PENTAX HD DA 18-50mm f/4-5.6 DC WR RE",
  subtitle: "JP 2016-6455 A — Numerical Example 2; production-correlated prescription",
  specs: ["11 ELEMENTS / 8 GROUPS", "18-50mm F4-5.6", "0.3m MFD", "1 HYBRID ASPHERICAL SURFACE"],

  focalLengthMarketing: [18, 50],
  focalLengthDesign: [18.500561, 48.605212],
  apertureMarketing: 4,
  apertureDesign: 4.001065,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "JP 2016-6455 A",
  patentAuthors: ["Tomoya Koga"],
  patentAssignees: ["Ricoh Imaging Company, Ltd."],
  patentYear: 2016,
  elementCount: 11,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -43.45394,
      glass: "804466 (vendor unresolved)",
      role: "G1a front negative singlet.",
    },
    {
      id: 2,
      name: "L12g",
      label: "L12 Glass Substrate",
      type: "Biconcave Negative (Hybrid Substrate)",
      nd: 1.497,
      vd: 81.6,
      fl: -38.656266,
      glass: "497816 (vendor unresolved)",
      role: "Glass body of the G1b hybrid negative lens; bonded to the L12r resin layer.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12r",
      label: "L12 Bonded Resin Layer",
      type: "Bonded Aspheric Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      fl: -168.657246,
      glass: "Unmatched (synthetic resin layer; chemistry unpublished)",
      role: "0.200 mm bonded resin layer carrying the image-side aspherical surface of physical lens member L12.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 67.210578,
      glass: "805254 (vendor unresolved)",
      role: "Positive singlet completing the moving G1b focus subgroup.",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 45.882259,
      glass: "618634 (vendor unresolved)",
      role: "Front positive singlet of G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 28.286498,
      glass: "487702 (vendor unresolved)",
      role: "Positive component of the cemented G2 pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -54.04,
      glass: "847238 (vendor unresolved)",
      role: "Negative component of the cemented G2 pair.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 28.07863,
      glass: "805254 (vendor unresolved)",
      role: "Positive component of the cemented negative G3 group.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.788,
      vd: 47.4,
      fl: -15.208439,
      glass: "788474 (vendor unresolved)",
      role: "Negative component of the cemented G3 group.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: 37.815566,
      glass: "618634 (vendor unresolved)",
      role: "Front positive singlet of G4.",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.52249,
      vd: 59.8,
      fl: 27.476315,
      glass: "S-NSL5 (OHARA catalog equivalent for patent 522598; production supplier unspecified)",
      role: "Positive component of the rear cemented pair in G4.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 29.9,
      fl: -27.925412,
      glass: "S-NBH55 (OHARA catalog equivalent for patent 800299; production supplier unspecified)",
      role: "Negative component of the rear cemented pair in G4.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 38.725, d: 1.3, nd: 1.804, elemId: 1, sd: 15.5 },
    { label: "2", R: 18.092, d: 12.109, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "3", R: -214.949, d: 1.2, nd: 1.497, elemId: 2, sd: 12.5 },
    { label: "4", R: 21.137, d: 0.2, nd: 1.52972, elemId: 3, sd: 12.0 },
    { label: "5A", R: 17.037, d: 3.345, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "6", R: 32.376, d: 2.74, nd: 1.80518, elemId: 4, sd: 12.0 },
    { label: "7", R: 77.548, d: 24.316, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "8", R: 66.235, d: 2.577, nd: 1.618, elemId: 5, sd: 10.2 },
    { label: "9", R: -48.844, d: 0.1, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "10", R: 25.02, d: 3.56, nd: 1.48749, elemId: 6, sd: 10.0 },
    { label: "11", R: -29.288, d: 1.0, nd: 1.84666, elemId: 7, sd: 9.5 },
    { label: "12", R: -82.658, d: 2.2, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 5.31736 },
    { label: "14", R: -63.274, d: 1.995, nd: 1.80518, elemId: 8, sd: 5.8 },
    { label: "15", R: -16.891, d: 1.0, nd: 1.788, elemId: 9, sd: 5.9 },
    { label: "16", R: 42.331, d: 15.481, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "17", R: -730.056, d: 2.944, nd: 1.618, elemId: 10, sd: 9.5 },
    { label: "18", R: -22.68, d: 0.1, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "19", R: 628.948, d: 5.419, nd: 1.52249, elemId: 11, sd: 9.5 },
    { label: "20", R: -14.648, d: 1.0, nd: 1.8, elemId: 12, sd: 9.5 },
    { label: "21", R: -43.832, d: 37.91, nd: 1.0, elemId: 0, sd: 9.5 },
  ],

  asph: {
    "5A": {
      K: 0,
      A4: -4.022e-5,
      A6: -3.753e-8,
      A8: -2.039e-10,
      A10: -2.006e-13,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [18.5, 31.893, 48.601],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "2": [
      [12.109, 8.003],
      [12.109, 8.162],
      [12.109, 8.052],
    ],
    "7": [
      [24.316, 28.422],
      [8.901, 12.848],
      [2.502, 6.559],
    ],
    "12": [
      [2.2, 2.2],
      [9.54, 9.54],
      [15.481, 15.481],
    ],
    "16": [
      [15.481, 15.481],
      [8.141, 8.141],
      [2.2, 2.2],
    ],
    "21": [
      [37.91, 37.91],
      [45.75, 45.75],
      [57.43, 57.43],
    ],
  },
  varLabels: [
    ["2", "D2 / FOCUS"],
    ["7", "D7 / ZOOM+FOCUS"],
    ["12", "D12 / ZOOM"],
    ["16", "D16 / ZOOM"],
    ["21", "BF / ZOOM"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2", fromSurface: "8", toSurface: "12" },
    { text: "G3", fromSurface: "14", toSurface: "16" },
    { text: "G4", fromSurface: "17", toSurface: "21" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "10", toSurface: "12" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.3,
  focusDescription:
    "PUBLISHED: G1b (hybrid L12 + L13) moves objectward from infinity to the patent's 300 mm state; D2 decreases while D7 increases by the same travel at each zoom station. No internal focus reconstruction is used.",

  nominalFno: [4.001065, 4.596028, 5.73828],
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 7,
  maxFstop: 32,

  yScFill: 0.33,
} satisfies LensDataInput;

export default LENS_DATA;
