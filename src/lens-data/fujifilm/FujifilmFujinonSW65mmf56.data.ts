import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — FUJIFILM FUJINON SW 65mm f/5.6                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S56-140311 (A), Example 1, Fuji Photo Optical.     ║
 * ║  Six-element / four-group all-spherical symmetric wide-angle lens   ║
 * ║  matching the EBC Fujinon SW 65mm f/5.6 fixed lens on the GSW690.   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent table is normalized to f = 1.0. R, d, BFD, and inferred   ║
 * ║    semi-diameters are scaled ×65 to the production 65 mm lens.      ║
 * ║    Paraxial EFL after scaling is 65.001 mm; residual is from        ║
 * ║    rounded patent table values.                                     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent drawing places the stop in the central air gap        ║
 * ║    between surfaces 5 and 6 but does not tabulate a split. The      ║
 * ║    data file splits patent d5 equally around STO.                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish clear apertures. SDs are inferred from   ║
 * ║    paraxial marginal/chief ray heights, the patent's approximately  ║
 * ║    38 mm front effective-diameter statement at f=65 mm, the 67 mm   ║
 * ║    production filter thread, spherical rim limits, element SD       ║
 * ║    ratios, cross-gap sag clearance, and Fig. 1 silhouette tuning.   ║
 * ║    They are visualization apertures, not measured production        ║
 * ║    mechanical drawings.                                             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and unit-focus rear spacing                      ║
 * ║    ✗ DO NOT include: filters, shutter blades, mechanics, film gate  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-sw-65f56",
  name: "FUJIFILM EBC FUJINON SW 65mm f/5.6 (Fujica GSW690 Professional)",
  maker: "Fujifilm",
  subtitle: "JP S56-140311 (A) Example 1 — Fuji Photo Optical",
  specs: ["6 elements / 4 groups", "f ≈ 65.0 mm", "F/5.6", "2ω = 75°", "All-spherical"],

  focalLengthMarketing: 65,
  focalLengthDesign: 65.001,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "6x9",
  patentYear: 1981,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 59.0,
      fl: -95.44,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      nC: 1.51556,
      nF: 1.52435,
      ng: 1.52915,
      role: "Front negative meniscus for wide-field collection and compact track control.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.4,
      fl: 25.99,
      glass: "S-LAL13 (OHARA, close; patent vd=53.4)",
      apd: false,
      nC: 1.68955,
      nF: 1.70258,
      ng: 1.70972,
      cemented: "D1",
      role: "High-index positive member of the front cemented doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -35.0,
      glass: "S-TIL26 (OHARA)",
      apd: false,
      nC: 1.56339,
      nF: 1.57664,
      ng: 1.58423,
      cemented: "D1",
      role: "Negative flint member of the front cemented doublet; chromatic and coma-flare correction.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -27.77,
      glass: "S-TIL26 (OHARA)",
      apd: false,
      nC: 1.56339,
      nF: 1.57664,
      ng: 1.58423,
      cemented: "D2",
      role: "Negative member of the stronger rear cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.4,
      fl: 20.98,
      glass: "S-LAL13 (OHARA, close; patent vd=53.4)",
      apd: false,
      nC: 1.68955,
      nF: 1.70258,
      ng: 1.70972,
      cemented: "D2",
      role: "Strong high-index positive member of the rear cemented doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: -70.29,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      nC: 1.59875,
      nF: 1.61462,
      ng: 1.62388,
      role: "Rear negative meniscus for field, exit-geometry, and lateral-color correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 30.589, d: 1.5925, nd: 1.51823, elemId: 1, sd: 19.0 },
    { label: "2", R: 18.564, d: 14.326, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "3", R: 43.108, d: 16.0745, nd: 1.6935, elemId: 2, sd: 14.6 },
    { label: "4", R: -26.2405, d: 1.079, nd: 1.56732, elemId: 3, sd: 13.2 },
    { label: "5", R: 82.7905, d: 1.6705, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "STO", R: 1e15, d: 1.6705, nd: 1.0, elemId: 0, sd: 6.0395 },
    { label: "6", R: -104.6955, d: 1.9305, nd: 1.56732, elemId: 4, sd: 12.0 },
    { label: "7", R: 18.668, d: 20.4425, nd: 1.6935, elemId: 5, sd: 13.2 },
    { label: "8", R: -36.374, d: 12.0705, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "9", R: -17.8035, d: 1.742, nd: 1.60342, elemId: 6, sd: 15.7 },
    { label: "10", R: -31.811, d: 41.6297, nd: 1.0, elemId: 0, sd: 17.6 },
  ],

  asph: {},

  var: {
    "10": [41.6297, 46.5959],
  },
  varLabels: [["10", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.0,
  focusDescription:
    "Unit focus; patent publishes only infinity data, so close focus is represented by increasing BFD for a 1 m object-distance paraxial estimate.",

  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.54,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
