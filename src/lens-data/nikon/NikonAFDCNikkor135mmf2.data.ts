import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF DC-NIKKOR 135mm f/2D                               ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,908,639 A, Example 2 (Masaaki Yanagisawa / Nikon).     ║
 * ║ Patent prescription: 7 elements / 6 groups, all spherical.               ║
 * ║ Production correlation: 135mm f/2, 18° full field, 7/6 construction,     ║
 * ║ cemented front pair, rear three-element focusing group, and DC motion.    ║
 * ║                                                                            ║
 * ║ FOCUS-STATE STATUS                                                        ║
 * ║   PUBLISHED anchors: corrected infinity; corrected, under-corrected, and  ║
 * ║   over-corrected states at β = -0.0333. The modeled close endpoint is     ║
 * ║   4.0967736 m object-to-image-plane, not the production 1.1 m MFD.        ║
 * ║   The runtime layers the published close-state DC spacing deltas onto the ║
 * ║   two-point focus interpolation. Only the four anchors are source-exact;  ║
 * ║   intermediate focus×DC combinations and DC-at-infinity are constrained   ║
 * ║   visualization interpolations, not patent-published states.              ║
 * ║                                                                            ║
 * ║ STOP MODEL                                                                 ║
 * ║   Fig. 4 places the stop between G2 and GR but gives no coordinate. A      ║
 * ║   zero-offset stop at the S7 vertex intersects the strongly curved S7     ║
 * ║   surface at the f/2 pupil radius. The stop is therefore placed 8.000 mm  ║
 * ║   behind the S7 vertex, within the published d7 gap; STO.d carries the     ║
 * ║   remaining d7 distance. The stop station is held fixed while G2 moves    ║
 * ║   around it during DC adjustment; this mechanism-constrained inference is ║
 * ║   not numerically specified by the patent. The 19.032357 mm stop SD is     ║
 * ║   solved paraxially for nominal f/2 at the infinity state.                 ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS                                                             ║
 * ║   The patent publishes no clear apertures. SDs were derived from exact     ║
 * ║   spherical tracing of the f/2 axial bundle and the default 0.6× field     ║
 * ║   bundle in all four published states, then constrained by edge thickness,║
 * ║   actual rim slope, shared-gap intrusion, and the Fig. 4 silhouette.       ║
 * ║                                                                            ║
 * ║ GLASS DATA                                                                 ║
 * ║   nd/νd are the patent's d-line values. nC/nF/ng/dPgF are included only   ║
 * ║   for deliberate catalog-coordinate matches. L1 and L3-L6 use current     ║
 * ║   HIKARI data; L2 uses an OHARA special-order code match. L7 uses a        ║
 * ║   coordinate-compatible HIKARI catalog equivalent without asserting melt. ║
 * ║                                                                            ║
 * ║ The production protective glass and all mechanical parts are excluded.    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-dc-nikkor-135mm-f2",
  maker: "Nikon",
  name: "NIKON AF DC-NIKKOR 135mm f/2D",
  subtitle: "US 4,908,639 A — Example 2; high-confidence production correlation",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "135mm f/2",
    "18° FULL FIELD",
    "REAR FOCUS + DEFOCUS CONTROL",
    "PATENT CLOSE STATE β = -0.0333",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 134.820643667,
  apertureMarketing: 2,
  apertureDesign: 2.00000003,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,908,639 A",
  patentAuthors: ["Masaaki Yanagisawa"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1990,
  elementCount: 7,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.620409,
      vd: 60.14,
      fl: 85.608194,
      glass: "J-SK16 (HIKARI; coordinate-compatible current catalog match)",
      nC: 1.617264,
      nF: 1.627562,
      ng: 1.633125,
      dPgF: -0.0031,
      cemented: "D1",
      role: "Front positive member of the cemented G1 collector and achromatizing pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.648311,
      vd: 33.75,
      fl: -537.323355,
      glass: "S-TIM22 (OHARA special-order; code 648338 coordinate match)",
      nC: 1.642096,
      nF: 1.661263,
      ng: 1.672645,
      dPgF: 0.007,
      cemented: "D1",
      role: "Weak negative cemented partner that moderates G1 power and longitudinal color.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.93,
      fl: 105.814046,
      glass: "J-LAK8 (HIKARI; coordinate-compatible current catalog match)",
      nC: 1.708982,
      nF: 1.722196,
      ng: 1.7294,
      dPgF: -0.0086,
      role: "Positive member of G2; its spacing from G1 is the primary DC variable.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.749501,
      vd: 35.19,
      fl: -45.544,
      glass: "J-LAF7 (HIKARI; coordinate-compatible current catalog match)",
      nC: 1.743271,
      nF: 1.764535,
      ng: 1.77704,
      dPgF: 0.0029,
      role: "Strong negative member completing G2 and controlling the converging bundle before the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.08,
      fl: -59.292864,
      glass: "J-SF8 (HIKARI; coordinate-compatible current catalog match)",
      nC: 1.682509,
      nF: 1.704616,
      ng: 1.717865,
      dPgF: 0.0072,
      role: "Negative leading member of the rear focusing group GR.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.8,
      fl: 88.382325,
      glass: "J-LASFH2 (HIKARI; coordinate-compatible current catalog match)",
      nC: 1.761914,
      nF: 1.778307,
      ng: 1.787448,
      dPgF: -0.0083,
      role: "High-index positive member of GR that restores convergence after L5.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.796681,
      vd: 45.37,
      fl: 94.683964,
      glass: "J-LASF017 (Hikari catalog equivalent to patent 797454; production supplier unspecified)",
      role: "Final positive member of GR and principal contributor to the rear group's net positive power.",
    },
  ],

  surfaces: [
    { label: "1", R: 58, d: 14.5, nd: 1.620409, elemId: 1, sd: 35 },
    { label: "2", R: -569.905, d: 3, nd: 1.648311, elemId: 2, sd: 34.5 },
    { label: "3", R: 897.932, d: 10, nd: 1, elemId: 0, sd: 33.5 },
    { label: "4", R: 44.435, d: 8, nd: 1.713, elemId: 3, sd: 26 },
    { label: "5", R: 100.005, d: 2.6, nd: 1, elemId: 0, sd: 23.3 },
    { label: "6", R: 626.47, d: 3, nd: 1.749501, elemId: 4, sd: 23.3 },
    { label: "7", R: 32.305, d: 8, nd: 1, elemId: 0, sd: 20.5 },
    { label: "STO", R: 1e15, d: 29.2882, nd: 1, elemId: 0, sd: 19.032357 },
    { label: "8", R: -40.174, d: 3, nd: 1.68893, elemId: 5, sd: 17.5 },
    { label: "9", R: -2506.608, d: 7, nd: 1, elemId: 0, sd: 18 },
    { label: "10", R: -412.962, d: 5, nd: 1.76684, elemId: 6, sd: 20.2 },
    { label: "11", R: -58.526, d: 0.2, nd: 1, elemId: 0, sd: 20.6 },
    { label: "12", R: 165.943, d: 4, nd: 1.796681, elemId: 7, sd: 21.1 },
    { label: "13", R: -136.822, d: 61.145, nd: 1, elemId: 0, sd: 21.1 },
  ],

  asph: {},

  var: {
    STO: [29.2882, 22.4792],
    "13": [61.145, 67.954],
  },
  varLabels: [
    ["STO", "D7 AFTER STOP"],
    ["13", "BF"],
  ],

  aberrationControl: {
    label: "DC",
    description:
      "Published close-state DC offsets. R/UNDER and F/OVER are source-exact only at the modeled β = -0.0333 close endpoint; other focus×DC combinations are constrained visualization interpolations.",
    minLabel: "R / UNDER",
    centerLabel: "0 / SHARP",
    maxLabel: "F / OVER",
    step: 0.001,
    var: {
      "3": [10.2, 10, 9.9],
      "7": [7.8, 8, 8.1],
      STO: [29.6738, 29.2882, 29.0965],
      "13": [60.7593, 61.145, 61.3367],
    },
    varLabels: [
      ["3", "D3"],
      ["7", "S7 TO STOP"],
      ["STO", "D7 AFTER STOP"],
      ["13", "BF"],
    ],
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "7" },
    { text: "GR", fromSurface: "8", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 4.0967736,
  focusDescription:
    "Published rear-focus anchors: corrected infinity to β = -0.0333 at 4.0967736 m object-to-image-plane. GR moves 6.8090 mm objectward while G1 and G2 remain fixed. The production 1.1 m minimum-focus endpoint is not reconstructed. DC motion changes D3 and compensates with GR motion while the inferred stop station remains fixed; the three close DC positions are patent-published.",

  nominalFno: 2.00000003,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
