import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SAMYANG AF 35mm f/2.8 FE                                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: KR 10-2127451 B1, Example 4 (Samyang Optics Co., Ltd.; Moon-Kyung Kim).      ║
 * ║ Production correlation is an author inference. Samyang publishes 35mm f/2.8,        ║
 * ║ Sony E/full-frame, 7 elements in 6 groups, 2 aspherical elements, 0.35 m MFD,       ║
 * ║ and 0.12× maximum magnification; Example 4 is 35.18 mm / F2.90 with the same        ║
 * ║ element/group count, two aspherical physical elements, internal two-element focus,   ║
 * ║ and 0.123 close-state magnification.                                                 ║
 * ║                                                                                      ║
 * ║ 7 elements / 6 air-separated groups; 3 aspherical surfaces on L2 and L7.             ║
 * ║ Focus status: PUBLISHED. G24 (L3+L4) translates; G14 and G34 are fixed.                 ║
 * ║ D1/D2 preserve all three Table 12 states and D1+D2 is constant to printed precision. ║
 * ║                                                                                      ║
 * ║ FILTER / REAR PLANE: Patent surfaces 15-16 are a plane-parallel Filter and are       ║
 * ║ excluded from the ordinary LensVisualizer stack. Surface 14A d uses the patent's     ║
 * ║ published filter-absent "in Air" distance, 19.70032771 mm, as the documented        ║
 * ║ air-equivalent rear spacing. The patent's OAL and "in Air" values do not fully      ║
 * ║ reconcile with the independent Gaussian image plane; that source discrepancy is      ║
 * ║ preserved explicitly and no invented rear-spacing correction is applied.              ║
 * ║                                                                                      ║
 * ║ INDEX / GLASS NOTE: Table 10 labels its index column nd, but the seven stored index   ║
 * ║ values are e-line-like while the paired Abbe values are d-line νd-like. The raw      ║
 * ║ patent values are retained exactly because they reproduce the patent EFL.             ║
 * ║ indexReference is therefore NOT set to "e" (the source pair is mixed-coordinate).    ║
 * ║ Glass annotations use Unmatched class/code descriptions; no vendor identity or        ║
 * ║ Sellmeier resolution is asserted. The patent publishes no nC, nF, ng, or dPgF.       ║
 * ║                                                                                      ║
 * ║ ASPHERES: Equation 5 already uses the standard conic constant K. No K conversion     ║
 * ║ and no dimensional scaling are applied.                                              ║
 * ║                                                                                      ║
 * ║ SEMI-DIAMETERS: None are published. STO sd=6.073525663 mm is inferred from the       ║
 * ║ preserved infinity prescription and F/2.899. Lens-surface SDs are modeled from exact ║
 * ║ sequential rays across all three published focus states: full on-axis marginal rays ║
 * ║ plus the default 0.60-field off-axis bundle at stop fractions ±0.75, ±0.375, 0.     ║
 * ║ Rounded mechanical clearance was then added and the current edge-thickness, actual   ║
 * ║ rim-slope, conic, shared-band cross-gap, and containment rules are all satisfied.     ║
 * ║ These semi-diameters remain modeling values rather than patent dimensions.             ║
 * ║                                                                                      ║
 * ║ NO SCALING: s=1. The marketed 35 mm / f/2.8 values remain separate from the modeled ║
 * ║ patent design values.                                                                ║
 * ║                                                                                      ║
 * ║ Manufacturer sources:                                                                ║
 * ║ https://www.lksamyang.com/en/product/product-view.php?seq=151                         ║
 * ║ https://www.lksamyang.com/en/about/notice-view.php?seq=399                            ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "samyang-af-35mm-f2p8-fe",
  maker: "Samyang",
  name: "SAMYANG AF 35mm f/2.8 FE",
  subtitle: "KR 10-2127451 B1 Example 4 — production correlation inferred",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "f ≈ 35.183 mm (MODELED)",
    "F/2.899 (DESIGN)",
    "2ω ≈ 64.73° (PATENT INFINITY FIELD)",
    "3 ASPHERICAL SURFACES",
    "PUBLISHED INNER FOCUS",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.182840213,
  apertureMarketing: 2.8,
  apertureDesign: 2.899,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "KR 10-2127451 B1",
  patentAuthors: ["Moon-Kyung Kim"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2020,
  elementCount: 7,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L14",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.73432,
      vd: 28.32,
      fl: -40.10146,
      glass: "Unmatched (728283-728285 class; mixed e-line-like n / d-line νd)",
      role: "Fixed G14 front negative meniscus.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L24",
      label: "Element 2",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.77641,
      vd: 49.7,
      fl: 16.606041,
      glass: "Unmatched (773496 class; mixed e-line-like n / d-line νd)",
      role: "Fixed G14 positive element; object-side surface 3A is aspherical.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L34",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62408,
      vd: 36.3,
      fl: -22.623692,
      glass: "Unmatched (620363-620364 class; mixed e-line-like n / d-line νd)",
      role: "First element of the translating two-element inner-focus group G24.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L44",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.93323,
      vd: 20.88,
      fl: 71.203757,
      glass: "Unmatched (923209 class; mixed e-line-like n / d-line νd)",
      role: "Second element of the translating two-element inner-focus group G24.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L54",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83945,
      vd: 42.72,
      fl: 9.779848,
      glass: "Unmatched (835427-835431 class; mixed e-line-like n / d-line νd)",
      role: "Positive component of the fixed G34 cemented doublet.",
      cemented: "J1",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L64",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.65222,
      vd: 33.84,
      fl: -12.712037,
      glass: "Unmatched (648337-648339 class; mixed e-line-like n / d-line νd)",
      role: "Negative component of the fixed G34 cemented doublet.",
      cemented: "J1",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L74",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.69385,
      vd: 31.19,
      fl: -86.873115,
      glass: "Unmatched (689311-689313 class; mixed e-line-like n / d-line νd)",
      role: "Fixed rear negative meniscus / field-flattener element; both surfaces are aspherical.",
    },
  ],

  surfaces: [
    { label: "1", R: -15.492, d: 0.9, nd: 1.73432, elemId: 1, sd: 6.5 },
    { label: "2", R: -33.494, d: 0.1, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "3A", R: 27.956, d: 3.424, nd: 1.77641, elemId: 2, sd: 6.8 },
    { label: "4", R: -22.648, d: 0.5, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 6.073525663 },
    { label: "6", R: 533.448, d: 0.7, nd: 1.62408, elemId: 3, sd: 6.2 },
    { label: "7", R: 13.748, d: 1.179, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "8", R: 19.94, d: 1.196, nd: 1.93323, elemId: 4, sd: 6.2 },
    { label: "9", R: 27.664, d: 3.66560705, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "10", R: 36.828, d: 6.728, nd: 1.83945, elemId: 5, sd: 7.4 },
    { label: "11", R: -9.684, d: 1.0, nd: 1.65222, elemId: 6, sd: 7.5 },
    { label: "12", R: 59.99, d: 4.246, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "13A", R: -8.419, d: 1.5, nd: 1.69385, elemId: 7, sd: 7.7 },
    { label: "14A", R: -10.5, d: 19.70032771, nd: 1.0, elemId: 0, sd: 8.4 },
  ],

  asph: {
    "3A": {
      K: -1.74199,
      A4: -3.454513e-5,
      A6: -7.997276e-9,
      A8: -1.30306e-9,
      A10: 1.178286e-11,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: -0.5397246,
      A4: 1.74928e-4,
      A6: 1.372817e-6,
      A8: -2.796398e-8,
      A10: 3.650418e-11,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: -2.462853,
      A4: -3.441633e-5,
      A6: 2.149737e-6,
      A8: -2.785146e-8,
      A10: 1.053277e-10,
      A12: 0,
      A14: 0,
    },
  },

  focusPositions: [0, 0.237653048385, 1],
  var: {
    STO: [2.0, 2.523725915, 4.638416687],
    "9": [3.66560705, 3.141881136, 1.027190363],
  },
  varLabels: [
    ["STO", "D1"],
    ["9", "D2"],
  ],

  groups: [
    { text: "G14", fromSurface: "1", toSurface: "4" },
    { text: "G24 (FOCUS)", fromSurface: "6", toSurface: "9" },
    { text: "G34", fromSurface: "10", toSurface: "14A" },
  ],
  doublets: [{ text: "J1", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.35,
  focusDescription:
    "PUBLISHED inner focus: L34 + L44 (G24) translates toward image space while G14/G34 remain fixed. Table 12 D1/D2 states are preserved at infinity, MAG=-1/40, and the raw close row headed TL=0.3m. The close heading is internally inconsistent with D0+OAL≈0.3485m and Samyang's 0.35m sensor-to-object MFD; no spacing is reconstructed.",

  nominalFno: 2.899,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  yScFill: 0.43,
} satisfies LensDataInput;

export default LENS_DATA;
