import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 85mm f/1.5                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,973 Example 1 (Fig. 1) — Hiroshi Ito /     ║
 * ║  Canon. Modified double-Gauss, cemented triplet front meniscus.   ║
 * ║  7 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens moves).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.00 (traced EFL 1.0001); all R, d and sd values ║
 * ║    scaled ×85, giving EFL 85.005 mm and BFD 44.79 mm. Every d,     ║
 * ║    including d₂ = 0.002 → 0.17 mm, is the patent value × 85.       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS (2026-09-23 audit):                        ║
 * ║    Not listed in the patent. Every surface passes the exact f/1.5 ║
 * ║    axial marginal ray (entrance-pupil radius 28.3 mm) with ≥ 2 %   ║
 * ║    margin, and the rims follow Fig. 1 measured at ≈8.7 px/mm:     ║
 * ║    L1 ≈ 31, r₃–r₅ flat rim ≈ 26.7, r₆ ≈ 15.3, r₇ ≈ 13.0, L5–L6    ║
 * ║    flat rim ≈ 17.8, L7 ≈ 18.3 mm. L1 is kept at 29.0 (58 mm        ║
 * ║    filter / 62.5 mm barrel of the production lens) and r₇ at 15.6 ║
 * ║    (the drawn 13 mm would clip the f/1.5 marginal ray).           ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent neither tabulates nor draws an iris (Fig. 1 shows   ║
 * ║    glass only). STO placed at the centre of d₆, splitting         ║
 * ║    16.15 mm into 8.075 + 8.075 — the canonical Gauss location.    ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent publishes no close-focus state. The 1 m keyframe is a   ║
 * ║    derived unit-focus extension (+8.58 mm) that places the object ║
 * ║    1.0 m from the image plane (rangefinder convention).           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-serenar-85f15",
  maker: "Canon",
  name: "CANON SERENAR 85mm f/1.5",
  subtitle: "US 2,645,973 Example 1 (Fig. 1) — Hiroshi Ito / Canon",
  specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 85.0 mm", "F/1.5", "2ω = 30°", "ALL SPHERICAL"],
  focalLengthMarketing: 85,
  focalLengthDesign: 85.0,
  apertureMarketing: 1.5,
  apertureDesign: 1.5,
  lensMounts: ["leica-ltm"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,645,973",
  patentAuthors: ["Hiroshi Ito"],
  patentAssignees: ["Canon Camera Co., Inc."],
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
      glass: "K-SK18 (Sumita)",
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
      glass: "S-BSL7 (OHARA)",
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
      glass: "S-TIM28 (OHARA)",
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
      glass: "S-TIL6 catalog equivalent (patent coordinate; production supplier unspecified)",
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
      glass: "BACED5 catalog equivalent (patent coordinate; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Rear element of the image-side meniscus — provides dominant positive power within Group III. Its moderate-dispersion barium dense-crown coordinate supports the rear doublet's chromatic balance.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      fl: 72.7,
      glass: "K-SK18 (Sumita)",
      apd: false,
      role: "Rear positive collector — provides final convergence to bring the image to focus. Asymmetric biconvex shape minimizes coma for off-axis rays past the stop.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 69.87, d: 8.925, nd: 1.6228, elemId: 1, sd: 29.0 },
    { label: "2", R: 807.5, d: 0.17, nd: 1.0, elemId: 0, sd: 29.0 }, // patent d₂ = 0.002 × 85; r₂ and r₃ both recede toward the image, so the gap opens outward
    { label: "3", R: 37.4, d: 7.225, nd: 1.6385, elemId: 2, sd: 26.5 },
    { label: "4", R: 68.425, d: 16.15, nd: 1.5163, elemId: 3, sd: 26.5 },
    { label: "5", R: -157.25, d: 1.7, nd: 1.6889, elemId: 4, sd: 26.5 },
    { label: "6", R: 21.42, d: 8.075, nd: 1.0, elemId: 0, sd: 16.5 },
    // Iris neither tabulated nor drawn in the patent; placed at the centre of d₆.
    { label: "STO", R: 1e15, d: 8.075, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "8", R: -26.35, d: 1.275, nd: 1.5317, elemId: 5, sd: 15.6 },
    { label: "9", R: 48.62, d: 8.755, nd: 1.6584, elemId: 6, sd: 17.8 },
    { label: "10", R: -37.4, d: 0.17, nd: 1.0, elemId: 0, sd: 17.8 },
    { label: "11", R: 127.5, d: 5.1, nd: 1.6385, elemId: 7, sd: 18.2 },
    { label: "12", R: -71.91, d: 44.79, nd: 1.0, elemId: 0, sd: 18.2 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — only BFD changes) ── */
  var: {
    "12": [44.79, 53.37],
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
  focusDescription:
    "Unit focusing — entire optical assembly moves forward. The 1 m keyframe is a derived extension (patent publishes no close state).",

  /* ── Aperture configuration ── */
  nominalFno: 1.5,
  fstopSeries: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
