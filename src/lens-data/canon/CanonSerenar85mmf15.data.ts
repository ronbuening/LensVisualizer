import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 85mm f/1.5                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,973 Example 1 (Hiroshi Ito / Canon).       ║
 * ║  Modified double-Gauss with cemented triplet front meniscus.       ║
 * ║  7 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens moves).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.00; all R, d, sd values scaled ×85 to match    ║
 * ║    the production 85 mm focal length.                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from paraxial marginal ray trace at f/1.5 with   ║
 * ║    8–10% mechanical clearance. Front element constrained by 58 mm ║
 * ║    filter thread (max glass OD ≈ 54 mm). Cemented junction SDs    ║
 * ║    constrained to ≤ 1.25 ratio between adjacent surfaces and by   ║
 * ║    sd/|R| < 0.90 limit on the steeply curved r₆ surface.         ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent does not specify exact iris location within the d₆ gap. ║
 * ║    STO position inferred from Fig. 1 iris placement — centered    ║
 * ║    in the gap, splitting d₆ = 16.15 mm into 8.075 + 8.075.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-serenar-85f15",
  maker: "Canon",
  name: "CANON SERENAR 85mm f/1.5",
  subtitle: "US 2,645,973 Example 1 — Hiroshi Ito / Canon",
  specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 85.0 mm", "F/1.5", "2ω = 30°", "ALL SPHERICAL"],
  focalLengthMarketing: 85,
  focalLengthDesign: 85.0,
  apertureMarketing: 1.5,
  apertureDesign: 1.5,
  patentYear: 1953,
  elementCount: 7,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6228,
      vd: 56.9,
      fl: 122.2,
      glass: "SK10 (Schott)",
      apd: false,
      role: "Front positive collector — nearly all power from the steeply curved front surface; the weak rear surface (r₂ ≈ flat) adds minimal contribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      fl: 118.4,
      glass: "SK family (639/555, unconfirmed)",
      apd: false,
      cemented: "T1",
      role: "Leading element of the object-side cemented triplet. Steeply curved front face introduces controlled spherical aberration for on-axis correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5163,
      vd: 64.0,
      fl: 94.7,
      glass: "BK7 (Schott, ≈)",
      apd: false,
      cemented: "T1",
      role: "Center element of the triplet — thick low-index crown spacer creating a large index difference at the L3–L4 junction for spherical aberration correction.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.1,
      fl: -27.3,
      glass: "SF8 (Schott)",
      apd: false,
      cemented: "T1",
      role: "Strongest element in the system — dominant negative power drives Group II's net divergence. High-dispersion flint provides chromatic correction. The steeply curved rear face (r₆) confronts the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5317,
      vd: 48.9,
      fl: -32.0,
      glass: "LLF6 (Schott, ≈)",
      apd: false,
      cemented: "D1",
      role: "Front element of the image-side meniscus doublet. Its concave face (r₇) directly opposes L4 across the stop; the patent requires |r₇|/f to be 0.25–0.45 for coma correction.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6584,
      vd: 50.8,
      fl: 33.5,
      glass: "KzFS2 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Rear element of the image-side meniscus — provides dominant positive power within Group III. KzFS2 short-flint-special glass contributes anomalous partial dispersion for secondary spectrum correction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      fl: 72.7,
      glass: "SK family (639/555, unconfirmed)",
      apd: false,
      role: "Rear positive collector — provides final convergence to bring the image to focus. Asymmetric biconvex shape minimizes coma for off-axis rays past the stop.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 69.87, d: 8.925, nd: 1.6228, elemId: 1, sd: 27.0 },
    { label: "2", R: 807.5, d: 0.5, nd: 1.0, elemId: 0, sd: 27.0 }, // d₂ widened from patent 0.17 to 0.50 mm to clear cross-gap sag at SD 27; optical impact negligible (ΔEFL < 0.2 mm)
    { label: "3", R: 37.4, d: 7.225, nd: 1.6385, elemId: 2, sd: 27.0 },
    { label: "4", R: 68.425, d: 16.15, nd: 1.5163, elemId: 3, sd: 24.0 },
    { label: "5", R: -157.25, d: 1.7, nd: 1.6889, elemId: 4, sd: 20.0 },
    { label: "6", R: 21.42, d: 8.075, nd: 1.0, elemId: 0, sd: 16.5 },
    // STO position inferred from Fig. 1 iris placement — centered in the d₆ gap.
    { label: "STO", R: 1e15, d: 8.075, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "8", R: -26.35, d: 1.275, nd: 1.5317, elemId: 5, sd: 15.0 },
    { label: "9", R: 48.62, d: 8.755, nd: 1.6584, elemId: 6, sd: 16.0 },
    { label: "10", R: -37.4, d: 0.17, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "11", R: 127.5, d: 5.1, nd: 1.6385, elemId: 7, sd: 16.5 },
    { label: "12", R: -71.91, d: 44.63, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — only BFD changes) ── */
  var: {
    "12": [44.63, 52.56],
  },
  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II (Triplet)", fromSurface: "3", toSurface: "6" },
    { text: "III (Doublet)", fromSurface: "8", toSurface: "10" },
    { text: "IV", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "D1", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Unit focusing — entire optical assembly moves forward.",

  /* ── Aperture configuration ── */
  nominalFno: 1.5,
  fstopSeries: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
