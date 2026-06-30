import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — KONICA HEXAR 35mm f/2                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H05-164961, Example 1 (Konica / Shimazaki).        ║
 * ║  Modified Xenotar-type fixed-lens-camera design for the Konica      ║
 * ║  Hexar AF.                                                          ║
 * ║  7 elements / 6 groups, all spherical.                              ║
 * ║  Focus: unit focus; the close-focus BFD below assumes the published ║
 * ║  0.6 m shooting distance is measured from the film plane.           ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    The patent prescription is normalized at f = 1. All radii,       ║
 * ║    thicknesses, BFD, and inferred semi-diameters are scaled ×35 to  ║
 * ║    the production 35 mm nominal focal length. The rounded patent    ║
 * ║    prescription then ray-traces to EFL = 34.99 mm.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear apertures. Semi-diameters were ║
 * ║    estimated from a combined f/2 marginal-ray and 31.5° chief-ray   ║
 * ║    paraxial trace, then reduced where required by edge thickness,   ║
 * ║    element SD ratio, spherical rim slope, and cross-gap sag checks. ║
 * ║    The tight L2/L3 and L3/L4 gaps are the controlling constraints.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)     ║
 * ║    ✓ Aperture stop and variable focus BFD                           ║
 * ║    ✗ DO NOT include: filters, mechanical shutter blades, film,      ║
 * ║      pressure plate, or camera-body parts                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "konica-hexar-35f2",
  maker: "Konica",
  name: "KONICA HEXAR 35mm f/2 (Konica Hexar AF)",
  subtitle: "JP H05-164961 Example 1 — Konica / Shimazaki",
  specs: ["7 elements / 6 groups", "f = 34.99 mm", "F/2.0", "2ω = 63°", "All-spherical"],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.99,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentYear: 1993,
  elementCount: 7,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 46.01,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      apd: false,
      role: "Front positive meniscus collector; starts convergence while keeping the first surface curvature moderate.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.741,
      vd: 52.7,
      fl: 51.25,
      glass: "S-LAL61 (OHARA)",
      nC: 1.73673,
      nF: 1.7508,
      ng: 1.7585,
      apd: false,
      role: "Second positive meniscus; rear surface forms the first boundary of the negative air lens before L3.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -22.77,
      glass: "S-TIH1 (OHARA)",
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
      apd: false,
      role: "Strong front-group negative meniscus; completes the patent's negative air lens and bounds the shutter cavity.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      fl: -52.92,
      glass: "S-FTM16 (OHARA)",
      nC: 1.58779,
      nF: 1.60458,
      ng: 1.61454,
      apd: false,
      role: "Weak rear-group negative meniscus after the shutter space; controls bundle geometry entering L5.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.741,
      vd: 52.7,
      fl: 27.91,
      glass: "S-LAL61 (OHARA)",
      nC: 1.73673,
      nF: 1.7508,
      ng: 1.7585,
      apd: false,
      role: "Strong rear positive meniscus; main converging element of the rear group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 29.99,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      apd: false,
      role: "Positive element of the rear cemented doublet; high-index partner at the chromatic correction interface.",
      cemented: "G6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      fl: -44.75,
      glass: "S-TIH10 (OHARA)",
      nC: 1.72086,
      nF: 1.74645,
      ng: 1.762,
      apd: false,
      role: "Negative element of the rear cemented doublet; dense-flint partner for achromatization at the cemented interface.",
      cemented: "G6",
    },
  ],

  surfaces: [
    { label: "1", R: 24.9025, d: 3.913, nd: 1.7725, elemId: 1, sd: 15.5 },
    { label: "2", R: 77.49, d: 0.19565, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "3", R: 12.159, d: 2.93475, nd: 1.741, elemId: 2, sd: 9.5 },
    { label: "4", R: 16.0475, d: 0.53795, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "5", R: 20.4645, d: 0.7826, nd: 1.71736, elemId: 3, sd: 7.6 },
    { label: "6", R: 8.939, d: 5.13625, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "STO", R: 1e15, d: 5.13625, nd: 1.0, elemId: 0, sd: 6.08 },
    { label: "7", R: -8.8305, d: 0.8806, nd: 1.5927, elemId: 4, sd: 7.8 },
    { label: "8", R: -12.747, d: 0.14665, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "9", R: -31.5245, d: 4.06, nd: 1.741, elemId: 5, sd: 9.9 },
    { label: "10", R: -13.174, d: 0.19565, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "11", R: 140.175, d: 4.207, nd: 1.7725, elemId: 6, sd: 12.2 },
    { label: "12", R: -27.391, d: 0.97825, nd: 1.72825, elemId: 7, sd: 12.2 },
    { label: "13", R: -174.3, d: 22.205076, nd: 1.0, elemId: 0, sd: 15.3 },
  ],

  asph: {},

  var: {
    "13": [22.205076, 24.503568],
  },

  varLabels: [["13", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "8" },
    { text: "G5", fromSurface: "9", toSurface: "10" },
    { text: "G6", fromSurface: "11", toSurface: "13" },
  ],

  doublets: [{ text: "G6", fromSurface: "11", toSurface: "13" }],

  closeFocusM: 0.6,
  focusDescription: "Unit focus; entire optical cell translates forward, increasing BFD by 2.30 mm at 0.6 m.",

  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.58,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
