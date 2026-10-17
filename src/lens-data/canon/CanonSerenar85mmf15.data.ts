import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "canon-serenar-85f15",
  maker: "Canon",
  name: "CANON SERENAR 85mm f/1.5",
  subtitle: "US 2,645,973 Example 1 (Fig. 1) — Hiroshi Ito / Canon",

  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 85.0 mm", "F/1.5", "2ω = 30°", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: 85, design: 85.0 },
    fNumber: { marketing: 1.5, design: 1.5 },
  },

  source: {
    patentNumber: "US 2,645,973",
    patentYear: 1953,
    authors: ["Hiroshi Ito"],
    assignees: ["Canon Camera Co., Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6228,
      vd: 56.9,
      focalLengthMm: 122.2,
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
      focalLengthMm: 118.4,
      glass: "K-SK18 (Sumita)",
      apd: false,
      role: "Leading element of the object-side cemented triplet. Steeply curved front face introduces controlled spherical aberration for on-axis correction.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5163,
      vd: 64.0,
      focalLengthMm: 94.7,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Center element of the triplet — thick low-index crown spacer creating a large index difference at the L3–L4 junction for spherical aberration correction.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.1,
      focalLengthMm: -27.3,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Strongest element in the system — dominant negative power drives Group II's net divergence. High-dispersion flint provides chromatic correction. The steeply curved rear face (r₆) confronts the stop.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5317,
      vd: 48.9,
      focalLengthMm: -32.0,
      glass: "S-TIL6 catalog equivalent (patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Front element of the image-side meniscus doublet. Its concave face (r₇) directly opposes L4 across the stop; the patent requires |r₇|/f to be 0.25–0.45 for coma correction.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6584,
      vd: 50.8,
      focalLengthMm: 33.5,
      glass: "BACED5 catalog equivalent (patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Rear element of the image-side meniscus — provides dominant positive power within Group III. Its moderate-dispersion barium dense-crown coordinate supports the rear doublet's chromatic balance.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      focalLengthMm: 72.7,
      glass: "K-SK18 (Sumita)",
      apd: false,
      role: "Rear positive collector — provides final convergence to bring the image to focus. Asymmetric biconvex shape minimizes coma for off-axis rays past the stop.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 69.87, d: 8.925, sd: 29.0, medium: 1 },
    { label: "2", R: 807.5, d: 0.17, sd: 29.0 }, // patent d₂ = 0.002 × 85; r₂ and r₃ both recede toward the image, so the gap opens outward
    { label: "3", R: 37.4, d: 7.225, sd: 26.5, medium: 2 },
    { label: "4", R: 68.425, d: 16.15, sd: 26.5, medium: 3 },
    { label: "5", R: -157.25, d: 1.7, sd: 26.5, medium: 4 },
    { label: "6", R: 21.42, d: 8.075, sd: 16.5 },
    // Iris neither tabulated nor drawn in the patent; placed at the centre of d₆.
    { label: "STO", R: "flat", d: 8.075 },
    { label: "8", R: -26.35, d: 1.275, sd: 15.6, medium: 5 },
    { label: "9", R: 48.62, d: 8.755, sd: 17.8, medium: 6 },
    { label: "10", R: -37.4, d: 0.17, sd: 17.8 },
    { label: "11", R: 127.5, d: 5.1, sd: 18.2, medium: 7 },
    { label: "12", R: -71.91, sd: 18.2 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focusing — entire optical assembly moves forward. The 1 m keyframe is a derived extension (patent publishes no close state).",
  },

  /* (moved from var) ── Variable air spacings (unit focus — only BFD changes) ── */
  gaps: { "12": { label: "BF", values: [[44.79, 53.37]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.5, fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16] },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
