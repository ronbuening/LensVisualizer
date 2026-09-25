import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — LEICA TELYT-S 800mm f/6.3                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,536,379, sole preferred numerical embodiment   ║
 * ║  (mapped from the job card's "Example 1"), Georg Knetsch /        ║
 * ║  Firma Ernst Leitz GmbH.                                           ║
 * ║  3 elements / 1 cemented group, all spherical.                    ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The patent publishes only      ║
 * ║  the infinity state; production 12.5 m MFD is metadata only.      ║
 * ║                                                                    ║
 * ║  SCALE: Patent dimensions are normalized to nominal f=1.0.        ║
 * ║  All radii and glass thicknesses are scaled uniformly ×800.       ║
 * ║  The scaled exact e-line Gaussian EFL is 806.582980 mm; this is    ║
 * ║  kept separate from the marketed/patent practical 800 mm value.   ║
 * ║                                                                    ║
 * ║  STOP MODEL: The patent does not publish a physical diaphragm      ║
 * ║  location or diameter. A synthetic STO is placed immediately      ║
 * ║  behind the cemented cell, co-located with the r4 vertex. Its     ║
 * ║  66.273281 mm semi-diameter is calibrated so the paraxial         ║
 * ║  entrance pupil gives the patent design f/5.9. This is not an     ║
 * ║  independent measurement of the production diaphragm.             ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: The patent publishes none. All four refracting   ║
 * ║  surfaces use a modeled 69.5 mm clear semi-diameter. The value    ║
 * ║  was selected from exact meridional spherical-ray containment at ║
 * ║  the full 135-format diagonal field plus current edge-thickness   ║
 * ║  and rim-slope checks. It is not a production clear-aperture      ║
 * ║  measurement or a production render-trim validation.              ║
 * ║                                                                    ║
 * ║  GLASS: Patent-native ne/νe coordinates are retained with         ║
 * ║  indexReference: "e". L1/L2 remain source-specific Unmatched     ║
 * ║  glasses. L3 is patent-named BaK4; the runtime resolves its        ║
 * ║  modern N-BAK4 spectral proxy; no catalog line indices are       ║
 * ║  authored as patent-published measurements.                               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-telyt-s-800mm-f63",
  maker: "Leica",
  name: "LEICA TELYT-S 800mm f/6.3",
  subtitle: "US 3,536,379 — sole numerical embodiment; research correlation",
  specs: ["3 ELEMENTS / 1 CEMENTED GROUP", "800mm f/6.3 MARKETED", "PATENT MODEL f/5.9"],

  focalLengthMarketing: 800,
  focalLengthDesign: 806.582980439,
  apertureMarketing: 6.3,
  apertureDesign: 5.9,
  lensMounts: ["leica-r"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,536,379",
  patentAuthors: ["Georg Knetsch"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1970,
  elementCount: 3,
  groupCount: 1,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.67245,
      vd: 45.8,
      indexReference: "e",
      fl: -1034.181611,
      glass: "Unmatched (Leitz proprietary/custom recipe; N-BAF10 coordinate-near only)",
      apd: false,
      cemented: "T1",
      role: "Front negative meniscus of the cemented triplet; source power is negative.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.54408,
      vd: 73,
      indexReference: "e",
      fl: 238.573025,
      glass: "Unmatched (Leitz proprietary fluorophosphate APD glass; exact recipe published)",
      apd: "patent",
      apdNote: "Patent ν′=0.4819 and Δνe=11.8 in source notation; not modern dPgF.",
      cemented: "T1",
      role: "Central convergent element made from the patent's anomalous-partial-dispersion fluorophosphate glass.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.57125,
      vd: 55.8,
      indexReference: "e",
      fl: -495.878343,
      glass: "BaK4 (Jenaer Glaswerk Schott & Gen.; modern N-BAK4 coordinate-compatible)",
      apd: false,
      cemented: "T1",
      role: "Rear negative meniscus; patent explicitly identifies historical Schott BaK4.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 411.328, d: 9.6, nd: 1.67245, elemId: 1, sd: 69.5 },
    { label: "2", R: 256.0328, d: 20, nd: 1.54408, elemId: 2, sd: 69.5 },
    { label: "3", R: -256.0328, d: 9.6, nd: 1.57125, elemId: 3, sd: 69.5 },
    { label: "4", R: -2699.024, d: 0, nd: 1, elemId: 0, sd: 69.5 },
    // Synthetic stop inferred for the patent model; calibrated from the published f/5.9 target.
    { label: "STO", R: 1e15, d: 782.024713136, nd: 1, elemId: 0, sd: 66.273280774 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [{ text: "CEMENTED TRIPLET", fromSurface: "1", toSurface: "4" }],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 12.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — the patent publishes only the infinity state; production 12.5 m MFD is retained as metadata with no authored focus motion.",

  /* ── Aperture configuration ── */
  nominalFno: 5.9,
  fstopSeries: [5.9, 6.3, 8, 11, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
