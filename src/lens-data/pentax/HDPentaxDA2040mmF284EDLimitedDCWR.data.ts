import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — HD PENTAX-DA 20–40mm F2.8–4 ED Limited DC WR                                                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2015-11156 A, Numerical Example 1 (Ricoh Imaging; inventor Takahiko Oishi).                    ║
 * ║ Production correlation: HD PENTAX-DA 20–40mm F2.8–4 ED Limited DC WR; no uniform scaling is applied.             ║
 * ║ 9 elements / 8 air-spaced groups; one aspherical surface, raw patent surface 4* → LensVisualizer label 4A.       ║
 * ║                                                                                                                      ║
 * ║ Zoom: patent infinity states at f = 20.60 / 30.00 / 39.00 mm.                                                     ║
 * ║   D6 is zoom + focus. G1 moves imageward from wide to mid, then reverses objectward toward tele.                  ║
 * ║   D18 is zoom-only after rear-plane normalization; G2 moves monotonically objectward toward tele.                 ║
 * ║                                                                                                                      ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                                                                          ║
 * ║   The patent states that G1 translates objectward for close focus but gives no finite-focus spacing table.         ║
 * ║   Close-focus D6 values are code-solved from the production 0.28 m MFD with object distance normalized from       ║
 * ║   the image plane. The tele reconstruction predicts |m| ≈ 0.2011× versus the official 0.20× specification.       ║
 * ║                                                                                                                      ║
 * ║ Inactive-plane normalization: patent surface 19 is a fixed flare-cut aperture with no published clear aperture.   ║
 * ║   It is omitted from the sequential model. Surface 18 rear gaps preserve its axial location as d18 + 37.02 mm:    ║
 * ║   39.000 / 49.307 / 59.175 mm at wide / mid / tele.                                                               ║
 * ║                                                                                                                      ║
 * ║ Semi-diameters: the patent publishes none. SDs were derived by independent exact meridional tracing of             ║
 * ║   on-axis marginal rays, 0.6-field bundles, and full-field chief rays across all three zoom states, then checked   ║
 * ║   against the Example-1 optical sections (Figs. 1 and 4), edge thickness, actual rim slope, and cross-gap sag.      ║
 * ║   The 1.267 mm air gap 16→17 is binding. gapSagFrac = 0.95 retains positive physical rim clearance while          ║
 * ║   clearing the modeled mid-zoom on-axis f/2.9 marginal ray; no layout control is used to conceal invalid geometry. ║
 * ║                                                                                                                      ║
 * ║ Glass: the patent provides d-line nd/νd coordinates only, not vendor names or per-element C/F/g line indices.      ║
 * ║   Six-digit coordinate codes are retained with unresolved vendor/catalog identity; nC/nF/ng/dPgF are not invented. ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources for production metadata:
 * https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/hdpentax-da-20-40/
 * https://news.ricoh-imaging.co.jp/rim_info2/2013/20131107_018815.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-hd-da-20-40-f28-4-limited",
  maker: "Pentax",
  name: "HD PENTAX-DA 20-40mm f/2.8-4 ED Limited DC WR",
  subtitle: "JP 2015-11156 A — Numerical Example 1; production correlation inferred",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "20–40mm f/2.8–4 (production)",
    "20.60 / 30.00 / 39.00 mm (patent)",
    "FNO 2.9 / 2.9 / 4.0",
    "1 ASPHERICAL SURFACE",
    "1 ED + 1 ANOMALOUS-DISPERSION ELEMENT",
  ],

  focalLengthMarketing: [20, 40],
  focalLengthDesign: [20.600371, 39.00081],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "JP 2015-11156 A",
  patentAuthors: ["Takahiko Oishi"],
  patentAssignees: ["Ricoh Imaging Company, Ltd."],
  patentYear: 2015,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      fl: -37.273774,
      glass: "729547 (vendor/catalog identity unresolved)",
      role: "Object-side negative meniscus in the negative G1 focus/zoom group.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.689,
      vd: 52.8,
      indexReference: "d",
      fl: -50.785104,
      glass: "K-VC80-M (Sumita catalog equivalent; patent code 689528, supplier unspecified)",
      role: "Negative G1 meniscus with the image-side asphere on surface 4A.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      fl: 79.585311,
      glass: "762265 (vendor/catalog identity unresolved)",
      role: "Positive meniscus completing the negative G1 power group.",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.7432,
      vd: 49.3,
      indexReference: "d",
      fl: 63.783312,
      glass: "743493 (vendor/catalog identity unresolved)",
      role: "Front positive element of G2A.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 31.765924,
      glass: "497816 (vendor/catalog identity unresolved)",
      apd: "inferred",
      apdNote:
        "Ricoh's production construction diagram marks the corresponding middle cemented-pair position as ED; the patent publishes no line indices or production glass identity.",
      cemented: "D1",
      role: "Positive member of the cemented L22+L23 pair immediately before the stop.",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.788,
      vd: 47.4,
      indexReference: "d",
      fl: -33.313686,
      glass: "788474 (vendor/catalog identity unresolved)",
      cemented: "D1",
      role: "Negative member of the cemented L22+L23 pair; surface 10 is the downstream-element junction.",
    },
    {
      id: 7,
      name: "L25",
      label: "L25",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      fl: 100.484119,
      glass: "717479 (vendor/catalog identity unresolved)",
      role: "First positive meniscus of G2B behind the stop.",
    },
    {
      id: 8,
      name: "L26",
      label: "L26",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: -50.19917,
      glass: "847238 (vendor/catalog identity unresolved)",
      role: "Negative meniscus in G2B.",
    },
    {
      id: 9,
      name: "L27",
      label: "L27",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.5,
      indexReference: "d",
      fl: 40.149892,
      glass: "603655 (vendor/catalog identity unresolved)",
      apd: "inferred",
      apdNote:
        "Ricoh's production construction diagram marks the final element as anomalous-dispersion glass; the patent publishes no partial-dispersion value or production supplier.",
      role: "Final positive element of G2B.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 47.867, d: 1.562, nd: 1.72916, elemId: 1, sd: 16.8 },
    { label: "2", R: 17.097, d: 6.06, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "3", R: 46.121, d: 3.24, nd: 1.689, elemId: 2, sd: 14.0 },
    { label: "4A", R: 19.326, d: 8.761, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "5", R: 33.188, d: 3.66, nd: 1.76182, elemId: 3, sd: 13.0 },
    { label: "6", R: 69.829, d: 27.117, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "7", R: 64.514, d: 3.06, nd: 1.7432, elemId: 4, sd: 12.0 },
    { label: "8", R: -175.121, d: 0.1, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "9", R: 30.912, d: 5.753, nd: 1.497, elemId: 5, sd: 11.6 },
    { label: "10", R: -30.274, d: 1.34, nd: 1.788, elemId: 6, sd: 10.8 },
    { label: "11", R: 201.409, d: 2.9, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 1.65, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "13", R: 62.059, d: 1.993, nd: 1.717, elemId: 7, sd: 10.1 },
    { label: "14", R: 441.646, d: 5.123, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "15", R: 42.455, d: 1.483, nd: 1.84666, elemId: 8, sd: 9.9 },
    { label: "16", R: 20.899, d: 1.267, nd: 1.0, elemId: 0, sd: 8.35 },
    { label: "17", R: 64.749, d: 3.166, nd: 1.603, elemId: 9, sd: 9.5 },
    { label: "18", R: -37.958, d: 39.0, nd: 1.0, elemId: 0, sd: 9.7 },
  ],

  /* Patent uses the standard conic constant K directly; no convention conversion is applied. */
  asph: {
    "4A": {
      K: 0,
      A4: -1.834e-5,
      A6: -7.423e-8,
      A8: 8.34e-11,
      A10: -8.259e-13,
      A12: 0,
      A14: 0,
    },
  },

  /*
   * D6: patent zoom spacing plus constrained close-focus reconstruction.
   * D18: normalized last-powered-surface-to-image spacing; zoom only, no focus movement.
   */
  var: {
    "6": [
      [27.117, 32.234744],
      [10.964, 15.919911],
      [2.796, 7.793782],
    ],
    "18": [
      [39.0, 39.0],
      [49.307, 49.307],
      [59.175, 59.175],
    ],
  },

  varLabels: [
    ["6", "D6 / G1–G2"],
    ["18", "BF (normalized)"],
  ],

  zoomPositions: [20.6, 30.0, 39.0],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "6" },
    { text: "G2A (+)", fromSurface: "7", toSurface: "11" },
    { text: "G2B (+)", fromSurface: "13", toSurface: "18" },
  ],

  doublets: [{ text: "L22+L23", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 0.28,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: G1 translates objectward for close focus. Close-focus D6 states are solved from the production 0.28 m MFD with object distance normalized from the image plane; the patent publishes only infinity spacings.",

  nominalFno: [2.9, 2.9, 4.0],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* The 16→17 air gap requires a slightly relaxed shared-band clearance threshold; physical rim clearance remains > 0. */
  gapSagFrac: 0.95,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
