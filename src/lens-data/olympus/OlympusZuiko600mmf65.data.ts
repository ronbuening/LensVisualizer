import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — OLYMPUS ZUIKO AUTO-T 600mm f/6.5               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,827,781, sole Example (repeated in claim 2),    ║
 * ║  Olympus / Yoshitsugi Ikeda. Six all-spherical elements in four    ║
 * ║  groups: L1, L2, cemented L3/L4, long air space with the iris,     ║
 * ║  cemented rear L5/L6.                                              ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent is normalized to f = 100 mm. Every radius and axial  ║
 * ║    distance is scaled ×6; the computed EFL is 600.003 mm and the   ║
 * ║    telephoto ratio 0.7006 (patent: 0.70).                          ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    The patent states F 1:6. The production lens is f/6.5, and the  ║
 * ║    Olympus manual section draws L1 at about the f/6.5 axial beam   ║
 * ║    (about 93 mm clear), too small for f/6. The stop therefore      ║
 * ║    opens to f/6.5; catalog.fNumber.design keeps the patent's F6.   ║
 * ║    The patent draws the iris D inside d7 but gives no coordinate;  ║
 * ║    the STO is placed at the midpoint of d7 (inferred).             ║
 * ║                                                                    ║
 * ║  NOTE ON BACK FOCUS AND FOCUS:                                     ║
 * ║    No back focal distance is printed; 134.22 mm is the computed    ║
 * ║    paraxial BFD. Focus is rack-and-pinion unit focus to 11 m       ║
 * ║    (Olympus); the extension is a paraxial solution, sampled in     ║
 * ║    inverse object distance.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent lists none. L1 and L3/L4 follow the scaled section   ║
 * ║    in the Olympus Zuiko lens manual (110 mm barrel, 103.6 mm front ║
 * ║    bore, 100 mm filter), held at or above the f/6.5 axial beam.    ║
 * ║    Fig. 1 draws the F6 design about 13 % larger (L1 ≈ 53 mm, past  ║
 * ║    the front bore). L2 (0.94) and the rear doublet (0.44) follow   ║
 * ║    Fig. 1's proportion to L1, so L2 stands above L3/L4 as drawn.   ║
 * ║    Floor-checked by real-ray trace; corner vignetting is kept.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-600mm-f65",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-T 600mm f/6.5",
  subtitle: "US 3,827,781 A, sole example — probable production correlation",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "DESIGN f = 600.0 mm", "DESIGN F/6 (SOLD AS F/6.5)", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 600, design: 600 },
    fNumber: { marketing: 6.5, design: 6 },
  },

  source: {
    patentNumber: "US 3,827,781",
    example: { label: "Sole example", id: null },
    patentYear: 1974,
    authors: ["Yoshitsugi Ikeda"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: 280.42,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Low-dispersion crown front collector; the strong positive power that sets the 0.70 telephoto ratio.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.80452,
      vd: 39.6,
      focalLengthMm: -407.02,
      glass: "NBFD3 (HOYA)",
      apd: false,
      role: "High-index negative element air-spaced behind L1 (condition 2); its front surface r3 sets condition 3 for off-axis correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: 203.03,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Crown half of the positive compound meniscus; the ν3 − ν4 > 25 split of condition 4 corrects axial colour.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 43.8,
      focalLengthMm: -281.43,
      glass: "BPM4 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Flint half of the front doublet; n4 − n3 > 0.1 (condition 4) controls coma and keeps the Petzval sum from going more negative.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 54.0,
      focalLengthMm: -79.96,
      glass: "J-LAK8 (HIKARI)",
      apd: false,
      cemented: "D2",
      role: "Lanthanum-crown negative of the rear telephoto doublet; n5 > n6 (condition 5) for Petzval correction.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: 133.08,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Dense-flint positive partner; the weak cemented surface r9 (condition 5) corrects lateral colour.",
    },
  ],

  surfaces: [
    { label: "1", R: 184.104, d: 15.024, sd: 47.0, medium: 1 },
    { label: "2", R: -516.732, d: 33.522, sd: 47.0 },
    { label: "3", R: -460.836, d: 6.012, sd: 44.2, medium: 2 },
    { label: "4", R: 1137.99, d: 1.2, sd: 44.2 },
    { label: "5", R: 140.172, d: 14.022, sd: 42.0, medium: 3 },
    { label: "6", R: -325.746, d: 5.01, sd: 42.0, medium: 4 },
    { label: "7", R: 369.402, d: 100.929, sd: 42.0 },
    { label: "STO", R: "flat", d: 100.929 }, // inferred: midpoint of patent d7 (33.643 × 6)
    { label: "8", R: -73.644, d: 3.504, sd: 20.8, medium: 5 },
    { label: "9", R: 257.472, d: 6.012, sd: 20.8, medium: 6 },
    { label: "10", R: -144.228, sd: 20.8 },
  ],

  focus: {
    closeFocusM: 11,
    keyframes: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    description:
      "Rack-and-pinion unit focus; the whole optical assembly extends 39.26 mm from infinity to 11 m (paraxial solution).",
  },

  gaps: {
    "10": {
      label: "BF",
      values: [[134.2197, 138.3959, 142.7507, 147.2973, 152.0503, 157.0261, 162.2429, 167.7211, 173.4839]],
    },
  },

  aperture: {
    nominalFNumber: 6.5,
    fStops: [6.5, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },

  layout: { scFill: 0.65, yScFill: 0.3 },

  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "7" },
    { text: "II (−)", fromSurface: "8", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
