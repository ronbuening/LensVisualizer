import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5
 *
 * Data source: US 3,615,125, Example 1 (Takashi Higuchi and Soichi Nakamura; Nippon Kogaku K.K.).
 * Production correlation: Nikon identifies the 1970 ZOOM-NIKKOR Auto 80-200mm f/4.5 as a Soichi Nakamura design.
 * Prescription: 15 elements / 10 groups, all spherical, no scaling.
 *
 * SOURCE CORRECTIONS:
 * - r5 is +357.269 mm. The Example 1 table prints +357.629 mm, while claim 1 prints +357.269 mm; the latter
 *   gives the best simultaneous agreement with the published endpoint EFL and BFL.
 * - r15 is -1347.294 mm. Claim 1 prints -1317.294 mm, but the Example 1 value gives materially better
 *   endpoint agreement.
 *
 * ZOOM MODEL:
 * - Published infinity endpoints: 80.0 and 200.3 mm.
 * - The patent plots a 126.4 mm middle state but omits its gap row. D5, D10, and D13 at 126.4 mm are a
 *   CONSTRAINED ZOOM RECONSTRUCTION solved for EFL = 126.4 mm, BFL = 40.0 mm, and D5 + D10 + D13 = 51.61 mm.
 * - D13 is non-monotonic, preserving the compensator reversal. The relay and image plane remain fixed.
 *
 * FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:
 * - The patent publishes infinity-focus zoom kinematics only. The production 1.8 m minimum focus distance is
 *   catalog metadata; all authored zoom var pairs are identical at infinity and close focus, so this file does
 *   not invent internal focusing motion.
 *
 * STOP MODEL:
 * - The patent gives f/4.5 but no iris station or diameter. Exactly one inferred STO splits D18 at its midpoint,
 *   19.05 mm after r18. Its 15.642403 mm diameter reproduces f/4.5 at all three modeled zoom states paraxially.
 *
 * SEMI-DIAMETERS:
 * - The patent does not publish clear apertures. Values were measured from Figure 1 and checked against the f/4.5
 *   marginal bundle, published field angles, the 135-format image field, and the period Nikon cross-section's
 *   52 mm front-element envelope. Surfaces 8 and 9 retain the smaller validator-safe clearance required by their
 *   opposing curvatures. Local edge-thickness, actual-rim-slope, and shared-gap checks pass at all modeled zoom
 *   states. Exact
 *   extreme-field tracing shows substantial clipping, so these values are not a reconstructed production aperture
 *   schedule and must not be used as photometric-vignetting data.
 *
 * SPECTRAL DATA:
 * - The patent supplies d-line nd and Abbe number only. nC, nF, ng, and dPgF are intentionally omitted.
 */
const LENS_DATA = {
  key: "nikon-zoom-nikkor-auto-80-200mm-f4-5",
  maker: "Nikon",
  name: "NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5",
  subtitle: "US 3,615,125 — Example 1; constrained 126.4 mm zoom state",
  specs: [
    "15 elements / 10 groups",
    "computed f = 80.009–200.341 mm",
    "constant f/4.5",
    "all spherical",
    "focus not internally reconstructed",
  ],
  focalLengthMarketing: [80, 200],
  focalLengthDesign: [80.009, 200.341],
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,615,125",
  patentAuthors: ["Takashi Higuchi", "Soichi Nakamura"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1971,
  elementCount: 15,
  groupCount: 10,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes infinity-focus zoom kinematics only. " +
    "The production 1.8 m minimum focus distance is catalog metadata; all authored variable-gap pairs remain " +
    "identical at infinity and close focus, so no close-focus optical motion is modeled.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 151.336,
      glass: "620603 - SK16 class (vendor unresolved)",
      apd: false,
      role: "Positive entrance singlet of the fixed first zoom group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.61375,
      vd: 56.3,
      fl: 119.347,
      glass: "BACD6 (HOYA catalog-equivalent; patent supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Positive component of the fixed first-group cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -143.544,
      glass: "755275 - SF4 class (vendor unresolved)",
      apd: false,
      cemented: "D1",
      role: "Negative component of the fixed first-group cemented pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.1,
      fl: 64.388,
      glass: "689311 - SF8 class (vendor unresolved)",
      apd: false,
      cemented: "D2",
      role: "Positive component at the front of the negative variator.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51728,
      vd: 69.6,
      fl: -45.305,
      glass: "S-APL1 (OHARA; 517696)",
      apd: false,
      cemented: "D2",
      role: "Negative component of the variator cemented pair.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      fl: -55.865,
      glass: "620603 - SK16 class (vendor unresolved)",
      apd: false,
      role: "Rear negative singlet completing the variator.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 58.671,
      glass: "620603 - SK16 class (vendor unresolved)",
      apd: false,
      cemented: "D3",
      role: "Positive component of the moving compensator.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      fl: -127.185,
      glass: "620363 - F2 class (vendor unresolved)",
      apd: false,
      cemented: "D3",
      role: "Negative component of the net-positive compensator.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.9,
      fl: 139.235,
      glass: "548459 - LLF1 class (vendor unresolved)",
      apd: false,
      role: "Front positive singlet of the fixed relay-front group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.9,
      fl: 54.235,
      glass: "532489 - LLF6 class (vendor unresolved)",
      apd: false,
      cemented: "D4",
      role: "Positive component of the relay-front cemented pair.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -47.31,
      glass: "785261 - SFS3 / dense short-flint class (vendor unresolved)",
      apd: false,
      cemented: "D4",
      role: "Negative component of the nearly afocal relay-front cemented pair.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 76.631,
      glass: "517642 - BK7 class (vendor unresolved)",
      apd: false,
      role: "Front positive singlet of the fixed relay-rear group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      fl: -23.358,
      glass: "744449 - LAF2 class (vendor unresolved)",
      apd: false,
      cemented: "D5",
      role: "Negative component of the relay-rear cemented pair.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.69895,
      vd: 30,
      fl: 57.229,
      glass: "SF15 (Sumita coefficient-backed equivalent), 699300",
      apd: false,
      cemented: "D5",
      role: "Plano-convex positive component of the net-negative relay-rear cemented pair.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.1,
      fl: 86.332,
      glass: "BASF7 (Sumita coefficient-backed equivalent), 702411",
      apd: false,
      role: "Final positive relay singlet before the image space.",
    },
  ],

  surfaces: [
    { label: "1", R: 123.951, d: 5, nd: 1.62041, elemId: 1, sd: 26 },
    { label: "2", R: -381.17, d: 0.1, nd: 1, elemId: 0, sd: 25.5 },
    { label: "3", R: 135.63, d: 7.3, nd: 1.61375, elemId: 2, sd: 24 },
    { label: "4", R: -156, d: 2, nd: 1.7552, elemId: 3, sd: 24 },
    { label: "5", R: 357.269, d: 1.33, nd: 1, elemId: 0, sd: 24 },
    { label: "6", R: 10000, d: 3.7, nd: 1.68893, elemId: 4, sd: 16 },
    { label: "7", R: -44.55, d: 1, nd: 1.51728, elemId: 5, sd: 16 },
    { label: "8", R: 49.824, d: 4.4, nd: 1, elemId: 0, sd: 13.5 },
    { label: "9", R: -45.25, d: 1.2, nd: 1.62041, elemId: 6, sd: 13.5 },
    { label: "10", R: 149.585, d: 39.4, nd: 1, elemId: 0, sd: 16 },
    { label: "11", R: 121.5, d: 4, nd: 1.62041, elemId: 7, sd: 13.5 },
    { label: "12", R: -51.315, d: 1, nd: 1.62004, elemId: 8, sd: 13.5 },
    { label: "13", R: -148.009, d: 10.88, nd: 1, elemId: 0, sd: 13.5 },
    { label: "14", R: 80.803, d: 4.7, nd: 1.54814, elemId: 9, sd: 13.5 },
    { label: "15", R: -1347.294, d: 0.7, nd: 1, elemId: 0, sd: 13.5 },
    { label: "16", R: 32.6, d: 10.4, nd: 1.53172, elemId: 10, sd: 13.5 },
    { label: "17", R: -222.2, d: 2.8, nd: 1.7847, elemId: 11, sd: 13.5 },
    { label: "18", R: 44.818, d: 19.05, nd: 1, elemId: 0, sd: 13.5 },
    { label: "STO", R: 1e15, d: 19.05, nd: 1, elemId: 0, sd: 7.821201623123754 },
    { label: "19", R: 103.461, d: 3.8, nd: 1.5168, elemId: 12, sd: 15.2 },
    { label: "20", R: -63.36, d: 3, nd: 1, elemId: 0, sd: 15.2 },
    { label: "21", R: -31.22, d: 1.5, nd: 1.744, elemId: 13, sd: 15.2 },
    { label: "22", R: 40, d: 4.9, nd: 1.69895, elemId: 14, sd: 15.2 },
    { label: "23", R: 1e15, d: 0.1, nd: 1, elemId: 0, sd: 15.2 },
    { label: "24", R: 62.328, d: 4, nd: 1.70154, elemId: 15, sd: 15.2 },
    { label: "25", R: -2085.243, d: 40, nd: 1, elemId: 0, sd: 15.2 },
  ],

  asph: {},

  zoomPositions: [80, 126.4, 200.3],
  zoomLabels: ["80 mm", "200 mm"],
  var: {
    "5": [
      [1.33, 1.33],
      [24.70539772659737, 24.70539772659737],
      [39.58, 39.58],
    ],
    "10": [
      [39.4, 39.4],
      [24.61075663686849, 24.61075663686849],
      [1.04, 1.04],
    ],
    "13": [
      [10.88, 10.88],
      [2.293845636534147, 2.293845636534147],
      [10.99, 10.99],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["13", "D13"],
  ],

  groups: [
    { text: "G1 FIXED POSITIVE", fromSurface: "1", toSurface: "5" },
    { text: "G2 VARIATOR", fromSurface: "6", toSurface: "10" },
    { text: "G3 COMPENSATOR", fromSurface: "11", toSurface: "13" },
    { text: "RELAY FRONT", fromSurface: "14", toSurface: "18" },
    { text: "RELAY REAR", fromSurface: "19", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 1.8,
  nominalFno: 4.5,
  maxFstop: 32,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32],
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
