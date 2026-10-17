import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER NOKTON VINTAGE LINE 50mm f/1.5 ASPHERICAL II VM   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2022-012964 A, Example 2 (Cosina Co., Ltd.).               ║
 * ║ Production correlation: 8 elements / 7 groups, a final double-aspherical   ║
 * ║ negative meniscus, 49.60 mm design EFL, F/1.43 design aperture, 46.58°     ║
 * ║ full field, and the published F14 whole-lens focusing state.               ║
 * ║ Focus status: PUBLISHED. The source keeps ZD9 and ZD12 fixed and changes    ║
 * ║ only ZD16 from 25.00 mm at infinity to 29.12 mm at the 630 mm              ║
 * ║ object-to-first-surface state. This is unit focus, not a reconstruction.    ║
 * ║ The source folds sensor/filter plates into the published air-equivalent     ║
 * ║ rear spacing; no synthetic cover-glass or filter elements are included.     ║
 * ║ No uniform scaling is applied.                                              ║
 * ║                                                                              ║
 * ║ Semi-diameters are inferred because the patent does not publish them.       ║
 * ║ The stop radius is derived from the design f-number, the patent's F/1.43.   ║
 * ║ Element apertures use traced marginal/chief-ray envelopes, the              ║
 * ║ official Cosina section's relative diameter progression, and local          ║
 * ║ edge-thickness, actual-rim-slope, shared-gap, off-axis, and render-trim     ║
 * ║ checks. They are modeling values, not manufacturer dimensions.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF image-plane audit (2026-09-25): JP2022012964A Example 2, Table 2
 * (PDF p. 20), matches all radii, spacings, nd/vd and A4–A10 terms.
 * The source itself folds unspecified sensor plates into air-equivalent
 * back focus (paragraph 77); no physical plate values are available to
 * unfold. Published infinity ZD16=25.00 mm gives a -0.027512 mm paraxial
 * offset. Preserve it: no transcription error was found, and designer
 * best-focus intent is not explicit despite the small finite-aperture residual.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-nokton-50f15-aspherical-ii-vm",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM",
  subtitle: "JP 2022-012964 A — Example 2 — production correlation",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "EFL 49.598 mm MODEL / 49.60 mm PATENT",
      "50 mm / f/1.5 MARKETED",
      "F/1.43 / 2ω = 46.58° PATENT",
      "46.3° MARKETED AOV",
      "2 ASPHERICAL SURFACES",
      "PUBLISHED UNIT FOCUS",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 50, design: 49.6 },
    fNumber: { marketing: 1.5, design: 1.43 },
  },

  source: {
    patentNumber: "JP 2022-012964 A",
    patentYear: 2022,
    authors: ["Yasuyuki Sugano"],
    assignees: ["Cosina Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 101.27,
      glass: "883408 — dense lanthanum glass class (vendor unresolved)",
      apd: false,
      role: "Front positive collector; the first of three separated positive menisci ahead of the stop.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 169.97,
      glass: "729547 — lanthanum crown class (vendor unresolved)",
      apd: false,
      role: "Weak positive meniscus that distributes front-group power while retaining the compact curved shell.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.84202,
      vd: 43.34,
      focalLengthMm: 54.59,
      glass: "Unmatched (nd=1.84202, vd=43.34; code 842433)",
      apd: false,
      role: "Strongest positive element in the front group; works with the following negative meniscus.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -27.29,
      glass: "847238 — N-SF57/S-TIH53 class (vendor unresolved)",
      apd: false,
      role: "High-index flint negative meniscus immediately before the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60286,
      vd: 37.37,
      focalLengthMm: -24.55,
      glass: "Unmatched (nd=1.60286, vd=37.37; code 603374; near F5 class)",
      apd: false,
      role: "Front member of cemented doublet Ja; begins the rear partially symmetric section.",
      cemented: "Ja",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 34.47,
      glass: "883408 — dense lanthanum glass class (vendor unresolved)",
      apd: false,
      role: "Positive member of cemented doublet Ja; its cemented interface is surface 11.",
      cemented: "Ja",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.79316,
      vd: 47.24,
      focalLengthMm: 26.3,
      glass: "Unmatched (nd=1.79316, vd=47.24; near 788474/475 lanthanum-flint class)",
      apd: false,
      role: "Strong separated rear positive element ahead of the final negative meniscus.",
    },
    {
      id: 8,
      name: "LE",
      label: "Element 8",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.69453,
      vd: 30.66,
      focalLengthMm: -127.32,
      glass: "L-TIM28P (OHARA)",
      apd: false,
      role: "Weak negative final meniscus with aspherical front and rear surfaces.",
      nC: 1.68796,
      nF: 1.71061,
      ng: 1.72419,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 38.335, d: 4.04, sd: 20.5, medium: 1 },
    { label: "2", R: 63.787, d: 0.15, sd: 19.5 },
    { label: "3", R: 29.222, d: 3.48, sd: 18.9, medium: 2 },
    { label: "4", R: 36.32, d: 0.15, sd: 18 },
    { label: "5", R: 21.467, d: 5.18, sd: 17.1, medium: 3 },
    { label: "6", R: 35.839, d: 0.54, sd: 16.3 },
    { label: "7", R: 41.906, d: 1.7, sd: 14.5, medium: 4 },
    { label: "8", R: 14.616, d: 6.6, sd: 12.7 },
    { label: "STO", R: "flat", d: 5.3 },
    { label: "10", R: -25.853, d: 1.5, sd: 12.7, medium: 5 },
    { label: "11", R: 35.373, d: 4.05, sd: 13.1, medium: 6 },
    { label: "12", R: -206.591, d: 0.15, sd: 13.2 },
    { label: "13", R: 33.192, d: 5.02, sd: 13.2, medium: 7 },
    { label: "14", R: -52.402, d: 0.15, sd: 13.2 },
    {
      label: "15A",
      R: 346,
      d: 2,
      sd: 13.5,
      medium: 8,
      asphere: { K: 0, A4: 7.2539e-5, A6: -2.5678e-7, A8: -2.8512e-11, A10: 7.3475e-13 },
    },
    { label: "16A", R: 70.263, sd: 13.5, asphere: { K: 0, A4: 1.0007e-4, A6: -2.0572e-7, A8: -1.5793e-10, A10: 1.0603e-12 } },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.7,
    description:
      "Published F10/F14 unit focus: internal gaps ZD9=5.30 mm and ZD12=0.15 mm remain fixed; " +
      "air-equivalent rear spacing ZD16 changes from 25.00 to 29.12 mm. The close source row uses " +
      "630 mm from object to the first optical surface, equivalent to about 0.699 m object-to-image distance.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published unit-focus spacing ── */
  gaps: { "16A": { label: "BF", values: [[25, 29.12]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.43, fStops: [1.43, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Group annotations ── */
  groups: [
    { text: "FRONT 101", fromSurface: "1", toSurface: "8" },
    { text: "102A", fromSurface: "10", toSurface: "12" },
    { text: "102B", fromSurface: "13", toSurface: "16A" },
    { text: "REAR 102", fromSurface: "10", toSurface: "16A" },
  ],
  doublets: [{ text: "Ja", fromSurface: "10", toSurface: "12" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
