import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Sigma 60mm F2.8 DN | Art                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-145954 A, Numerical Example 1 (Sigma).       ║
 * ║  8 elements / 6 groups, one glass-molded aspherical surface.       ║
 * ║  Focus: internal focusing by translation of G2 (surfaces 7–10A).   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No focal-length scaling was applied. The patent is already      ║
 * ║    normalized to f = 60.00 mm.                                     ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER/COVER GLASS:                                       ║
 * ║    Patent surfaces 16–17 are the camera-side filter F, not part    ║
 * ║    of the lens optical system per ¶0051. The filter is excluded    ║
 * ║    here and its optical path is folded into surface 15's final     ║
 * ║    air-equivalent back distance: 23.0700 + 2.2000/1.51680 +       ║
 * ║    1.0000 = 25.52042194 mm.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS DATA:                                               ║
 * ║    The patent directly tabulates the INF and 800 mm states. The    ║
 * ║    close-focus entries below extend the same one-degree internal   ║
 * ║    focus motion to Sigma's published 0.50 m MFD by paraxial        ║
 * ║    conjugate solve while conserving D6 + D10. The result gives    ║
 * ║    beta ≈ -0.139, matching Sigma's 1:7.2 maximum magnification.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Semi-diameters are inferred from marginal/chief-ray footprints  ║
 * ║    at the patent stop and field, then mechanically reduced where   ║
 * ║    necessary to satisfy edge-thickness and cross-gap sag limits.   ║
 * ║    The patent does not publish clear-aperture diameters.           ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ Excludes camera-side filter/cover glass and mechanical parts ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sigma-60mm-f28-dn",
  maker: "Sigma",
  name: "SIGMA 60mm f/2.8 DN | Art",
  subtitle: "JP 2014-145954 A — Example 1",
  specs: [
    "8 elements / 6 groups",
    "f = 60.00 mm patent design",
    "F2.8 marketed; F2.92 design",
    "2ω = 26.38° patent field",
    "1 aspherical surface",
    "Inner focus",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 60,
  apertureMarketing: 2.8,
  apertureDesign: 2.92,
  lensMounts: ["micro-four-thirds", "sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "JP 2014-145954 A",
  patentAuthors: ["Masakazu Hibino"],
  patentAssignees: ["Sigma Corporation"],
  patentYear: 2014,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: 64.97,
      glass: "TAF3 / N-LASF44 class (804/465 dense lanthanum flint)",
      apd: false,
      role: "High-index front positive collector; convex to object.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 35.56,
      glass: "FCD515 (HOYA, SLD fluorophosphate class)",
      apd: "inferred",
      apdNote: "FCD515-class fluorophosphate; position of Sigma-published SLD element inferred from nd/vd.",
      role: "Low-dispersion positive member of the front cemented achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -24.88,
      glass: "E-F5 (HOYA) / S-TIM5 class",
      apd: false,
      role: "Ordinary flint member paired with L1b for front-group chromatic correction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L2a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.84,
      fl: -57.36,
      glass: "E-FD2 (HOYA) / N-SF2 class",
      apd: false,
      role: "Stop-concentric negative meniscus at the front of the moving focus group.",
    },
    {
      id: 5,
      name: "L2b",
      label: "Element 5",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.02,
      fl: 26.77,
      glass: "M-PCD51 (HOYA, moldable low-dispersion crown)",
      apd: false,
      role: "Power-bearing positive focus element with molded aspherical image-side surface.",
    },
    {
      id: 6,
      name: "L3a",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.89,
      fl: -34.34,
      glass: "E-FL5 (HOYA) / S-TIL25 class",
      apd: false,
      role: "Main negative singlet in the fixed rear field group.",
    },
    {
      id: 7,
      name: "L3b",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.05,
      fl: -36.56,
      glass: "E-FD15 (HOYA) / N-SF15 class",
      apd: false,
      role: "Negative member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L3c",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      fl: 21.27,
      glass: "TAFD55 (HOYA) / S-LAH99 class",
      apd: false,
      role: "Very-high-index positive member balancing rear-group power and Petzval contribution.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 31.12, d: 3.35, nd: 1.8042, elemId: 1, sd: 16.8 },
    { label: "2", R: 73.27, d: 4.93, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "3", R: 21.5, d: 4.4, nd: 1.59282, elemId: 2, sd: 12.75 },
    { label: "4", R: -1000.0, d: 1.55, nd: 1.60342, elemId: 3, sd: 10.6 },
    { label: "5", R: 15.25, d: 4.5, nd: 1.0, elemId: 0, sd: 9.75 },
    { label: "STO", R: 1e15, d: 10.13, nd: 1.0, elemId: 0, sd: 6.991 },
    { label: "7", R: -17.72, d: 1.05, nd: 1.64769, elemId: 4, sd: 10.1 },
    { label: "8", R: -34.67, d: 2.7, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "9", R: 44.258, d: 4.05, nd: 1.59201, elemId: 5, sd: 10.5 },
    { label: "10A", R: -23.85, d: 1.94, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "11", R: -1000.0, d: 0.7, nd: 1.58144, elemId: 6, sd: 9.8 },
    { label: "12", R: 20.38, d: 2.9, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "13", R: 61.64, d: 0.7, nd: 1.69895, elemId: 7, sd: 9.8 },
    { label: "14", R: 17.98, d: 4.85, nd: 2.001, elemId: 8, sd: 12.2 },
    { label: "15", R: 100.0, d: 25.5204219409, nd: 1.0, elemId: 0, sd: 12.2 },
  ],

  asph: {
    "10A": {
      K: 0,
      A4: 1.66e-5,
      A6: -1.3996e-8,
      A8: 2.6793e-10,
      A10: -1.097e-12,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    STO: [10.13, 4.43018],
    "10A": [1.94, 7.63982],
  },

  varLabels: [
    ["STO", "D6"],
    ["10A", "D10"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2 IF", fromSurface: "7", toSurface: "10A" },
    { text: "G3", fromSurface: "11", toSurface: "15" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "Inner focus: the two-element positive second group moves toward the object from infinity to near focus while G1, the stop, and G3 remain fixed.",

  nominalFno: 2.8,
  maxFstop: 22,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.62,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
