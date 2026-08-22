import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MAMIYA AF APO 300mm f/4.5 IF                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP H10-206729 A, Example 1 (Mamiya-OP Co., Ltd.; Hideyuki Suga).   ║
 * ║ Production correlation: Mamiya AF Apo 300mm F/4.5 IF, Mamiya 645 AF.      ║
 * ║ 8 elements / 8 air-spaced groups; all spherical.                           ║
 * ║                                                                              ║
 * ║ SCALE: patent f = 99.84 was uniformly scaled by                             ║
 * ║ s = 300 / 99.84 = 3.004807692307692. All radii, axial spacings,            ║
 * ║ semi-diameters, and image-plane distances are scaled by s.                  ║
 * ║ Indices and Abbe numbers are unchanged. No asphere coefficients exist.      ║
 * ║                                                                              ║
 * ║ FOCUS STATUS: PUBLISHED. The printed Example-1 d8/d12 endpoints are         ║
 * ║ preserved. G2 (L5-L6) translates 4.800 native units = 14.423077 mm          ║
 * ║ imageward. The Table-1 close-distance heading "700" conflicts with the      ║
 * ║ published spacings; the source values are not swapped or silently fixed.    ║
 * ║                                                                              ║
 * ║ STOP MODEL: the patent draws diaphragm D inside d12 but gives neither its   ║
 * ║ exact axial coordinate nor diameter. Figure 1 places it at about 66% of     ║
 * ║ d12 measured from r12 toward r13. The model uses 0.66×d12 at infinity.      ║
 * ║ D is fixed relative to G3, so focus motion changes surface-12→STO while     ║
 * ║ STO→surface-13 stays fixed. STO semi-diameter is solved from the actual     ║
 * ║ rounded-index model so the modeled infinity f-number is 4.63.               ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: the patent gives no numerical clear apertures. Values were  ║
 * ║ derived from sequential paraxial bundles for f/4.63, including the default ║
 * ║ 0.60 field / ±0.75 sampled-pupil off-axis rays at infinity and the          ║
 * ║ published close-focus state, then rounded upward. Edge thickness, actual    ║
 * ║ rim slope, cross-gap intrusion, and both focus states are independently     ║
 * ║ checked in the accompanying verification artifact.                         ║
 * ║                                                                              ║
 * ║ GLASS: the patent publishes only rounded nd/νd values. Glass strings are    ║
 * ║ class-level OHARA coordinate matches, not supplier claims. nC/nF/ng/dPgF    ║
 * ║ are catalog-derived from those class references and are stored directly on ║
 * ║ the elements; the prescription nd/νd remains the patent's rounded data.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "mamiya-af-apo-300-f45-if",
  maker: "Mamiya",
  name: "MAMIYA AF APO 300mm f/4.5 IF",
  subtitle: "JP H10-206729 A — Example 1; uniformly scaled ×3.004807692 to 300mm",
  specs: ["8 ELEMENTS / 8 GROUPS", "300mm f/4.5", "DESIGN f/4.63", "2ω = 13.59°", "3.00m MFD"],

  focalLengthMarketing: 300,
  focalLengthDesign: 300,
  apertureMarketing: 4.5,
  apertureDesign: 4.63,
  lensMounts: ["mamiya-645"],
  imageFormat: "645",
  patentNumber: "JP H10-206729 A",
  patentAuthors: ["Hideyuki Suga"],
  patentAssignees: ["Mamiya-OP Co., Ltd."],
  patentYear: 1998,
  elementCount: 8,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.488,
      vd: 70.2,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      dPgF: 0.0022,
      fl: 262.933,
      glass: "S-FSL 5 class (OHARA 487702 reference)",
      apd: false,
      role:
        "Front positive collector; the patent specifies a comparatively durable, temperature-stable material for the exposed first element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      fl: 209.484,
      glass: "S-FPL51 class (OHARA 497816 reference)",
      apd: "patent",
      apdNote:
        "Patent specifies anomalous-dispersion material; dPgF is catalog-derived from the S-FPL51 class reference.",
      role: "Positive low-dispersion element used by the patent for secondary-spectrum correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus (convex to object)",
      nd: 1.613,
      vd: 44.3,
      nC: 1.60925,
      nF: 1.62311,
      ng: 1.63091,
      dPgF: -0.0065,
      fl: -105.091,
      glass: "S-NBM51 class (OHARA 613443 reference)",
      apd: false,
      role: "Negative member of G1; balances the positive front-group power and aberrations.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      fl: 160.992,
      glass: "S-FPL51 class (OHARA 497816 reference)",
      apd: "patent",
      apdNote:
        "Patent specifies anomalous-dispersion material; dPgF is catalog-derived from the S-FPL51 class reference.",
      role: "Rear positive low-dispersion member of G1; paired in the patent's chromatic strategy with L2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.54,
      vd: 59.5,
      nC: 1.53719,
      nF: 1.54627,
      ng: 1.55122,
      dPgF: -0.0012,
      fl: -121.335,
      glass: "S-BAL12 class (OHARA 540595 reference)",
      apd: false,
      role: "Leading negative element of the translating inner-focus group G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (convex to object)",
      nd: 1.762,
      vd: 26.5,
      nC: 1.75357,
      nF: 1.7823,
      ng: 1.79992,
      dPgF: 0.015,
      fl: 329.849,
      glass: "S-TIH14 class (OHARA 762265 reference)",
      apd: false,
      role: "Positive partner in G2; its rear surface is constrained by the patent to r12 > 0.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.488,
      vd: 70.2,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      dPgF: 0.0022,
      fl: 136.328,
      glass: "S-FSL 5 class (OHARA 487702 reference)",
      apd: false,
      role: "Positive leading element of the fixed rear group G3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus (convex to image)",
      nd: 1.713,
      vd: 53.9,
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
      dPgF: -0.0084,
      fl: -120.652,
      glass: "S-LAL 8 class (OHARA 713539 reference)",
      apd: false,
      role: "Negative rear meniscus; the patent uses r16 < 0 as part of its distortion-control strategy.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 128.311298, d: 7.704327, nd: 1.488, elemId: 1, sd: 38.311298 },
    { label: "2", R: 1e15, d: 0.513822, nd: 1.0, elemId: 0, sd: 38.311298 },
    { label: "3", R: 93.242188, d: 8.218149, nd: 1.497, elemId: 2, sd: 37.259615 },
    { label: "4", R: 866.841947, d: 1.40625, nd: 1.0, elemId: 0, sd: 37.259615 },
    { label: "5", R: 1016.132812, d: 3.596755, nd: 1.613, elemId: 3, sd: 34.555288 },
    { label: "6", R: 60.498798, d: 3.082933, nd: 1.0, elemId: 0, sd: 34.555288 },
    { label: "7", R: 65.216346, d: 8.731971, nd: 1.497, elemId: 4, sd: 33.503606 },
    { label: "8", R: 336.983173, d: 25.354567, nd: 1.0, elemId: 0, sd: 33.503606 },
    { label: "9", R: -976.808894, d: 3.082933, nd: 1.54, elemId: 5, sd: 23.4375 },
    { label: "10", R: 70.309495, d: 6.379207, nd: 1.0, elemId: 0, sd: 23.4375 },
    { label: "11", R: 82.827524, d: 4.110577, nd: 1.762, elemId: 6, sd: 23.137019 },
    { label: "12", R: 120.886418, d: 40.668931, nd: 1.0, elemId: 0, sd: 23.137019 },
    { label: "STO", R: 1e15, d: 20.950661, nd: 1.0, elemId: 0, sd: 19.957918 },
    { label: "13", R: 216.054688, d: 5.138221, nd: 1.488, elemId: 7, sd: 19.080529 },
    { label: "14", R: -95.378606, d: 40.354567, nd: 1.0, elemId: 0, sd: 19.080529 },
    { label: "15", R: -68.227163, d: 3.082933, nd: 1.713, elemId: 8, sd: 15.024038 },
    { label: "16", R: -335.976562, d: 96.574519, nd: 1.0, elemId: 0, sd: 15.024038 },
  ],

  asph: {},

  /* ── Published inner-focus motion ──
   * Patent d8: 8.438 → 13.238; patent d12: 20.507 → 15.707.
   * Because STO is modeled fixed relative to G3, only surface-12→STO carries
   * the d12 change; STO→13 remains 20.950661 mm.
   */
  var: {
    "8": [25.354567, 39.777644],
    "12": [40.668931, 26.245854],
  },
  varLabels: [
    ["8", "D8"],
    ["12", "D12 → STO"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2 FOCUS", fromSurface: "9", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [],

  closeFocusM: 3.0,
  focusDescription:
    "PUBLISHED inner focus: negative G2 (L5–L6) translates 14.423 mm imageward. The printed Example-1 d8/d12 endpoints are preserved; the patent's '700' close-distance label conflicts with those spacings and is not corrected.",

  nominalFno: 4.63,
  fstopSeries: [4.63, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
