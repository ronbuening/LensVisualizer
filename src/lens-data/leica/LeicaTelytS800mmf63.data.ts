import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  radius is derived from the design f-number, the patent design    ║
 * ║  f/5.9. This is not an independent measurement of the production  ║
 * ║  diaphragm.                                                       ║
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
  schema: 2,
  key: "leica-telyt-s-800mm-f63",
  maker: "Leica",
  name: "LEICA TELYT-S 800mm f/6.3",
  subtitle: "US 3,536,379 — sole numerical embodiment; research correlation",

  catalog: {
    lensMounts: ["leica-r"],
    imageFormat: "135-full-frame",
    specs: ["3 ELEMENTS / 1 CEMENTED GROUP", "800mm f/6.3 MARKETED", "PATENT MODEL f/5.9"],
    elementCount: 3,
    groupCount: 1,
    focalLengthMm: { marketing: 800, design: 806.582980439 },
    fNumber: { marketing: 6.3, design: 5.9 },
  },

  source: {
    patentNumber: "US 3,536,379",
    patentYear: 1970,
    authors: ["Georg Knetsch"],
    assignees: ["Ernst Leitz GmbH"],
  },

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
      focalLengthMm: -1034.181611,
      glass: "Unmatched (Leitz proprietary/custom recipe; N-BAF10 coordinate-near only)",
      apd: false,
      role: "Front negative meniscus of the cemented triplet; source power is negative.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.54408,
      vd: 73,
      indexReference: "e",
      focalLengthMm: 238.573025,
      glass: "Unmatched (Leitz proprietary fluorophosphate APD glass; exact recipe published)",
      apd: "patent",
      apdNote: "Patent ν′=0.4819 and Δνe=11.8 in source notation; not modern dPgF.",
      role: "Central convergent element made from the patent's anomalous-partial-dispersion fluorophosphate glass.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.57125,
      vd: 55.8,
      indexReference: "e",
      focalLengthMm: -495.878343,
      glass: "BaK4 (Jenaer Glaswerk Schott & Gen.; modern N-BAK4 coordinate-compatible)",
      apd: false,
      role: "Rear negative meniscus; patent explicitly identifies historical Schott BaK4.",
      cemented: "T1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 411.328, d: 9.6, sd: 69.5, medium: 1 },
    { label: "2", R: 256.0328, d: 20, sd: 69.5, medium: 2 },
    { label: "3", R: -256.0328, d: 9.6, sd: 69.5, medium: 3 },
    { label: "4", R: -2699.024, d: 0, sd: 69.5 },
    // Synthetic stop inferred for the patent model; radius derived from the design f-number.
    { label: "STO", R: "flat", d: 782.024713136 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 12.5,
    description:
      "Only the infinity state is published. The production minimum focus distance is 12.5 m; focus travel is not modeled.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 5.9, fStops: [5.9, 6.3, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [{ text: "CEMENTED TRIPLET", fromSurface: "1", toSurface: "4" }],
  doublets: [],

  /* ── Layout ── */
  layout: { yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
