import type { LensDataInput } from "../../types/optics.js";

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
 * ║   STO is inferred from the figure and placed 5% of s2 behind R5,     ║
 * ║   then sized for a 90mm f/4 entrance pupil. Semi-diameters are       ║
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
  key: "agfa-color-telinear-90mm-f4",
  maker: "Agfa",
  name: "AGFA COLOR-TELINEAR 90mm f/4",
  subtitle: "US 2,819,651 — Baur / Otzen",
  specs: ["5 elements / 3 groups", "f ≈ 90.0 mm", "F/4", "2ω = 30° patent field", "All spherical"],

  focalLengthMarketing: 90,
  focalLengthDesign: 90.000442,
  apertureMarketing: 4,
  apertureDesign: 4,
  imageFormat: "135-full-frame",
  patentYear: 1958,
  elementCount: 5,
  groupCount: 3,

  focusDescription: "Unit focus by helicoid; close focus modeled as back-focus increase from 33.52 mm to 38.61 mm.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Lens I",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.0,
      fl: 32.0003,
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
      fl: -30.2066,
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
      fl: 54.8684,
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
      fl: -16.7808,
      glass: "KF3 / NSL33 class (legacy crown-flint, 515/547)",
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
      fl: 24.268,
      glass: "BAM5 class (barium middle glass, 607/492)",
      role: "Positive partner in the net-negative rear doublet.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 26.7579, d: 5.7942, nd: 1.51633, elemId: 1, sd: 12.7 },
    { label: "2", R: -40.0104, d: 1.143, nd: 1.62606, elemId: 2, sd: 12.5 },
    { label: "3", R: 36.2556, d: 1.8945, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "4", R: 23.3694, d: 4.3416, nd: 1.57041, elemId: 3, sd: 12.5 },
    { label: "5", R: 86.0292, d: 1.328805, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "STO", R: 1e15, d: 25.247295, nd: 1.0, elemId: 0, sd: 9.281263 },
    { label: "6", R: -12.0096, d: 1.1223, nd: 1.51454, elemId: 4, sd: 10.2 },
    { label: "7", R: 31.698, d: 4.4919, nd: 1.60729, elemId: 5, sd: 10.2 },
    { label: "8", R: -26.0694, d: 33.521087, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  asph: {},

  var: {
    "8": [33.521087, 38.607519],
  },
  varLabels: [["8", "BF"]],

  groups: [
    { text: "G1 front positive doublet", fromSurface: "1", toSurface: "3" },
    { text: "G2 positive meniscus", fromSurface: "4", toSurface: "5" },
    { text: "G3 rear negative doublet", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.8,
  nominalFno: 4,
  maxFstop: 32,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 5,

  scFill: 0.7,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
