import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ AGFA COLOR-TELINEAR 90mm f/4                                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2,819,651, single worked example, F = 1.000.        ║
 * ║ Five-element positive / positive / negative telephoto objective.    ║
 * ║ 5 elements / 3 groups, all spherical.                               ║
 * ║ Focus: unit focus; close-focus model increases final BFD only.      ║
 * ║                                                                    ║
 * ║ NOTE ON SCALING:                                                    ║
 * ║   Patent prescription is normalized to F=1.000. All R and d values  ║
 * ║   are scaled ×90.0 to represent the production 90mm lens. Computed  ║
 * ║   EFL after scaling is 90.0004 mm.                              ║
 * ║                                                                    ║
 * ║ NOTE ON STOP AND SEMI-DIAMETERS:                                    ║
 * ║   Patent does not publish a stop station or clear semi-diameters.    ║
 * ║   STO is inferred from the figure and placed 5% of s2 behind R5;     ║
 * ║   its radius is derived from the design f-number. Semi-diameters are ║
 * ║   conservative inferred clear apertures checked against f/4 on-axis  ║
 * ║   rays, the 15° chief ray, edge thickness, sd/|R| < 0.90 on the      ║
 * ║   tight spherical surfaces, and cross-gap sag intrusion.             ║
 * ║                                                                    ║
 * ║ IMPORTANT: This file describes ONLY the optical design:             ║
 * ║   ✓ Glass elements and refracting surfaces                          ║
 * ║   ✓ Inferred aperture stop and unit-focus back-focus variable       ║
 * ║   ✗ Mechanical mount, filters, and sensor glass are not included    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "agfa-color-telinear-90mm-f4",
  maker: "Agfa",
  name: "AGFA COLOR-TELINEAR 90mm f/4",
  subtitle: "US 2,819,651 — Baur / Otzen",

  catalog: {
    lensMounts: ["agfa-ambi-silette"],
    imageFormat: "135-full-frame",
    specs: ["5 elements / 3 groups", "f ≈ 90.0 mm", "F/4", "2ω = 30° patent field", "All spherical"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { marketing: 90, design: 90.000442 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 2,819,651",
    patentYear: 1958,
    authors: ["Carl Baur", "Christian Otzen"],
    assignees: ["Agfa Camera-Werk AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Lens I",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.0,
      focalLengthMm: 32.0003,
      glass: "BK7 (Schott legacy / N-BK7 class)",
      role: "Positive crown component of the weak front achromat.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Lens II",
      type: "Biconcave Negative",
      nd: 1.62606,
      vd: 39.1,
      focalLengthMm: -30.2066,
      glass: "BASF1 / BAM21 class (legacy barium flint, 626/391)",
      role: "High-dispersion negative partner in the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Lens III",
      type: "Positive Meniscus",
      nd: 1.57041,
      vd: 48.1,
      focalLengthMm: 54.8684,
      glass: "KzF4 class (Schott-Jena legacy short flint, 570/481)",
      role: "Dominant positive-power meniscus placed close behind the front doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Lens IV",
      type: "Biconcave Negative",
      nd: 1.51454,
      vd: 54.7,
      focalLengthMm: -16.7808,
      glass: "KF3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Strong negative front component of the rear telephoto doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Lens V",
      type: "Biconvex Positive",
      nd: 1.60729,
      vd: 49.2,
      focalLengthMm: 24.268,
      glass: "BAF5 (HOYA) class (607493 barium flint, BAM5 type; nd-exact, Δνd +0.14; equivalent)",
      role: "Positive partner in the net-negative rear doublet.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 26.7579, d: 5.7942, sd: 12.7, medium: 1 },
    { label: "2", R: -40.0104, d: 1.143, sd: 12.5, medium: 2 },
    { label: "3", R: 36.2556, d: 1.8945, sd: 12.4 },
    { label: "4", R: 23.3694, d: 4.3416, sd: 12.5, medium: 3 },
    { label: "5", R: 86.0292, d: 1.328805, sd: 12.3 },
    { label: "STO", R: "flat", d: 25.247295 },
    { label: "6", R: -12.0096, d: 1.1223, sd: 10.2, medium: 4 },
    { label: "7", R: 31.698, d: 4.4919, sd: 10.2, medium: 5 },
    { label: "8", R: -26.0694, sd: 10.2 },
  ],

  focus: {
    closeFocusM: 1.8,
    description: "Unit focus by helicoid; close focus modeled as back-focus increase from 33.52 mm to 38.61 mm.",
  },

  gaps: { "8": { label: "BF", values: [[33.521087, 38.607519]] } },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 5 },

  groups: [
    { text: "G1 front positive doublet", fromSurface: "1", toSurface: "3" },
    { text: "G2 positive meniscus", fromSurface: "4", toSurface: "5" },
    { text: "G3 rear negative doublet", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { scFill: 0.7, yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
