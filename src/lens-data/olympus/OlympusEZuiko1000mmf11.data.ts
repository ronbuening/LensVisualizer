import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — OLYMPUS E.ZUIKO AUTO-T 1000mm f/11              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: DE 2206106 A1, single worked example (Olympus /          ║
 * ║  Jihei Nakagawa). Five spherical singlets in five groups.          ║
 * ║                                                                    ║
 * ║  Patent dimensions are normalized to f = 100 and scaled ×10.      ║
 * ║  The printed n3 = 1.7817 is emended to 1.78472 (OHARA S-TIH11):   ║
 * ║  that catalog value independently restores both f = 100.00 and    ║
 * ║  fB = 32.58 from the published prescription.                       ║
 * ║                                                                    ║
 * ║  The patent does not locate the aperture stop. The modeled stop    ║
 * ║  is placed 1.0 mm behind surface 6, near the front of d6. Its     ║
 * ║  semi-diameter reproduces f/11 while keeping the full-field front  ║
 * ║  ray envelope within the production lens's 100 mm filter opening. ║
 * ║                                                                    ║
 * ║  Semi-diameters are inferred from combined marginal/chief-ray      ║
 * ║  traces at the manufacturer-published 2.5° field, then checked     ║
 * ║  against rim slope, edge thickness, and signed gap-sag limits.     ║
 * ║                                                                    ║
 * ║  Focus is modeled as unit extension. The patent gives only the     ║
 * ║  infinity prescription; the 30 m state is a paraxial solution      ║
 * ║  constrained by the manufacturer-published minimum distance.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-e-zuiko-auto-t-1000mm-f11",
  maker: "Olympus",
  name: "OLYMPUS E.ZUIKO AUTO-T 1000mm f/11",
  subtitle: "DE 2206106 A1 — SINGLE WORKED EXAMPLE — OLYMPUS / JIHEI NAKAGAWA",
  specs: ["5 ELEMENTS / 5 GROUPS", "f = 1000.10 mm", "F/11", "2ω = 2.5°", "ALL-SPHERICAL"],

  focalLengthMarketing: 1000,
  focalLengthDesign: 1000.09768,
  apertureMarketing: 11,
  apertureDesign: 10.99994,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 2206106 A1",
  patentAuthors: ["Jihei Nakagawa"],
  patentAssignees: ["Olympus Optical Co Ltd"],
  patentYear: 1972,
  elementCount: 5,
  groupCount: 5,
  focusDescription:
    "Rack-and-pinion unit-focus model; the full optical assembly extends 36.70 mm from infinity to 30 m.",

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.38,
      fl: 233.843,
      glass: "PCD4 class (618/634 dense phosphate crown; vendor uncertain)",
      apd: false,
      role: "Front collector and principal low-dispersion positive element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -109.968,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      role: "Strong dense-flint negative corrector in the front objective.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.68,
      fl: 152.6,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "High-index positive element completing the front objective; nd emended from the printed table.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.699,
      vd: 30.1,
      fl: 537.654,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Weak positive meniscus that moderates the rear negative unit and contributes coma correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.5687,
      vd: 63.1,
      fl: -207.473,
      glass: "PCD2 / PSK2 class (569/631 phosphate crown; vendor uncertain)",
      apd: false,
      role: "Low-dispersion negative rear element providing most of the telephoto multiplication.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 380.79, d: 13.51, nd: 1.618, elemId: 1, sd: 47.0 },
    { label: "2", R: -229.75, d: 0.14, nd: 1.0, elemId: 0, sd: 46.2 },
    { label: "3", R: -238.11, d: 8.0, nd: 1.7552, elemId: 2, sd: 46.2 },
    { label: "4", R: 129.37, d: 2.09, nd: 1.0, elemId: 0, sd: 45.8 },
    { label: "5", R: 133.23, d: 13.25, nd: 1.78472, elemId: 3, sd: 46.2 },
    { label: "6", R: -1131.67, d: 1.0, nd: 1.0, elemId: 0, sd: 45.6 },
    { label: "STO", R: 1e15, d: 330.62, nd: 1.0, elemId: 0, sd: 44.5 },
    { label: "7", R: 239.28, d: 2.99, nd: 1.699, elemId: 4, sd: 23.5 },
    { label: "8", R: 655.22, d: 0.5, nd: 1.0, elemId: 0, sd: 23.2 },
    { label: "9", R: 1e15, d: 3.7, nd: 1.5687, elemId: 5, sd: 23.2 },
    { label: "10", R: 117.99, d: 325.86519, nd: 1.0, elemId: 0, sd: 23.0 },
  ],

  asph: {},

  /* ── Unit-focus back-focus variation ── */
  var: {
    "10": [325.86519, 362.56063],
  },
  varLabels: [["10", "BF"]],

  groups: [
    { text: "FRONT OBJECTIVE (G1–G3)", fromSurface: "1", toSurface: "6" },
    { text: "REAR TELEPHOTO UNIT (G4–G5)", fromSurface: "7", toSurface: "10" },
  ],
  doublets: [],

  closeFocusM: 30,
  nominalFno: 11,
  fstopSeries: [11, 16, 22, 32, 45],
  maxFstop: 45,
  scFill: 0.68,
  yScFill: 0.68,
} satisfies LensDataInput;

export default LENS_DATA;
