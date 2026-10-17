import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ STO→surface-13 stays fixed. The stop radius is derived from the design      ║
 * ║ f-number, 4.63.                                                             ║
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
 *
 * Infinity image-plane source limit: Table 1 prints fb = 32.14 at f = 99.84.
 * Its rounded-index prescription instead gives native EFL 99.270917 and
 * BFL 31.798654. At the retained scale, BFL is 95.548840 vs the authored
 * 96.574519 mm, offset -1.025679 mm. All table entries match; preserve
 * published values without tuning indices or image distance (see audit).
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "mamiya-af-apo-300-f45-if",
  maker: "Mamiya",
  name: "MAMIYA AF APO 300mm f/4.5 IF",
  subtitle: "JP H10-206729 A — Example 1; uniformly scaled ×3.004807692 to 300mm",

  catalog: {
    lensMounts: ["mamiya-645"],
    imageFormat: "645",
    specs: ["8 ELEMENTS / 8 GROUPS", "300mm f/4.5", "DESIGN f/4.63", "2ω = 13.59°", "3.00m MFD"],
    elementCount: 8,
    groupCount: 8,
    focalLengthMm: { marketing: 300, design: 300 },
    fNumber: { marketing: 4.5, design: 4.63 },
  },

  source: {
    patentNumber: "JP H10-206729 A",
    patentYear: 1998,
    authors: ["Hideyuki Suga"],
    assignees: ["Mamiya-OP Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.488,
      vd: 70.2,
      focalLengthMm: 262.933,
      glass: "S-FSL 5 class (OHARA 487702 reference)",
      apd: false,
      role: "Front positive collector; the patent specifies a comparatively durable, temperature-stable material for the exposed first element.",
      dPgF: 0.0022,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 209.484,
      glass: "S-FPL51 class (OHARA 497816 reference)",
      apd: "patent",
      apdNote:
        "Patent specifies anomalous-dispersion material; dPgF is catalog-derived from the S-FPL51 class reference.",
      role: "Positive low-dispersion element used by the patent for secondary-spectrum correction.",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus (convex to object)",
      nd: 1.613,
      vd: 44.3,
      focalLengthMm: -105.091,
      glass: "S-NBM51 class (OHARA 613443 reference)",
      apd: false,
      role: "Negative member of G1; balances the positive front-group power and aberrations.",
      dPgF: -0.0065,
      nC: 1.60925,
      nF: 1.62311,
      ng: 1.63091,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 160.992,
      glass: "S-FPL51 class (OHARA 497816 reference)",
      apd: "patent",
      apdNote:
        "Patent specifies anomalous-dispersion material; dPgF is catalog-derived from the S-FPL51 class reference.",
      role: "Rear positive low-dispersion member of G1; paired in the patent's chromatic strategy with L2.",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.54,
      vd: 59.5,
      focalLengthMm: -121.335,
      glass: "S-BAL12 class (OHARA 540595 reference)",
      apd: false,
      role: "Leading negative element of the translating inner-focus group G2.",
      dPgF: -0.0012,
      nC: 1.53719,
      nF: 1.54627,
      ng: 1.55122,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (convex to object)",
      nd: 1.762,
      vd: 26.5,
      focalLengthMm: 329.849,
      glass: "S-TIH14 class (OHARA 762265 reference)",
      apd: false,
      role: "Positive partner in G2; its rear surface is constrained by the patent to r12 > 0.",
      dPgF: 0.015,
      nC: 1.75357,
      nF: 1.7823,
      ng: 1.79992,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.488,
      vd: 70.2,
      focalLengthMm: 136.328,
      glass: "S-FSL 5 class (OHARA 487702 reference)",
      apd: false,
      role: "Positive leading element of the fixed rear group G3.",
      dPgF: 0.0022,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus (convex to image)",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -120.652,
      glass: "S-LAL 8 class (OHARA 713539 reference)",
      apd: false,
      role: "Negative rear meniscus; the patent uses r16 < 0 as part of its distortion-control strategy.",
      dPgF: -0.0084,
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 128.311298, d: 7.704327, sd: 38.311298, medium: 1 },
    { label: "2", R: "flat", d: 0.513822, sd: 38.311298 },
    { label: "3", R: 93.242188, d: 8.218149, sd: 37.259615, medium: 2 },
    { label: "4", R: 866.841947, d: 1.40625, sd: 37.259615 },
    { label: "5", R: 1016.132812, d: 3.596755, sd: 34.555288, medium: 3 },
    { label: "6", R: 60.498798, d: 3.082933, sd: 34.555288 },
    { label: "7", R: 65.216346, d: 8.731971, sd: 33.503606, medium: 4 },
    { label: "8", R: 336.983173, sd: 33.503606 },
    { label: "9", R: -976.808894, d: 3.082933, sd: 23.4375, medium: 5 },
    { label: "10", R: 70.309495, d: 6.379207, sd: 23.4375 },
    { label: "11", R: 82.827524, d: 4.110577, sd: 23.137019, medium: 6 },
    { label: "12", R: 120.886418, sd: 23.137019 },
    { label: "STO", R: "flat", d: 20.950661 },
    { label: "13", R: 216.054688, d: 5.138221, sd: 19.080529, medium: 7 },
    { label: "14", R: -95.378606, d: 40.354567, sd: 19.080529 },
    { label: "15", R: -68.227163, d: 3.082933, sd: 15.024038, medium: 8 },
    { label: "16", R: -335.976562, d: 96.574519, sd: 15.024038 },
  ],

  focus: {
    closeFocusM: 3.0,
    description:
      "PUBLISHED inner focus: negative G2 (L5–L6) translates 14.423 mm imageward. The printed Example-1 d8/d12 endpoints are preserved; the patent's '700' close-distance label conflicts with those spacings and is not corrected.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published inner-focus motion ──
   * Patent d8: 8.438 → 13.238; patent d12: 20.507 → 15.707.
   * Because STO is modeled fixed relative to G3, only surface-12→STO carries
   * the d12 change; STO→13 remains 20.950661 mm.
   */
  gaps: {
    "8": { label: "D8", values: [[25.354567, 39.777644]] },
    "12": { label: "D12 → STO", values: [[40.668931, 26.245854]] },
  },

  aperture: { nominalFNumber: 4.63, fStops: [4.63, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2 FOCUS", fromSurface: "9", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
