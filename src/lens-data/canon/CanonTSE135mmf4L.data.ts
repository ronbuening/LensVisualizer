import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON TS-E 135mm f/4L MACRO                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-132674 A, Numerical Example 1.               ║
 * ║  Canon / Mizuma Akira; all-spherical 11-element tilt-shift macro.  ║
 * ║  11 elements / 7 air-spaced groups; no aspherical surfaces.        ║
 * ║  Focus: double floating focus. L2/FN moves imageward; L3/FP moves  ║
 * ║  objectward. L1, the aperture stop, and L4/RF remain fixed.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No production scaling is applied. Patent Example 1 is f=133.00  ║
 * ║    mm and corresponds directly to the marketed 135 mm lens.         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    JP 2018-132674 A does not publish clear-aperture semi-diameters.║
 * ║    SDs below are conservative reconstruction values derived from   ║
 * ║    paraxial marginal/chief-ray traces, the official 82 mm filter   ║
 * ║    size, the f/4.05 entrance-pupil solution, and renderer geometry ║
 * ║    constraints. They were reduced where necessary to preserve       ║
 * ║    edge thickness, element SD ratio, and cross-gap sag clearance.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from first element to image plane║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ No sensor glass, filters, coatings, diaphragm mechanics, or  ║
 * ║      tilt-shift hardware is modeled as an optical element.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-tse-135mm-f4l",
  maker: "Canon",
  name: "CANON TS-E 135mm f/4L MACRO",
  subtitle: "JP 2018-132674 A Example 1 — Canon / Mizuma Akira",
  specs: [
    "11 elements / 7 groups",
    "f = 132.97 mm design (135 mm marketed)",
    "F/4.05 design (f/4 marketed)",
    "Patent image circle: 67.3 mm diameter",
    "All-spherical; 2 UD/ED elements",
    "Double floating focus; ±10° tilt, ±12 mm shift",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 132.97085232771016,
  apertureMarketing: 4,
  apertureDesign: 4.05,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentYear: 2018,
  elementCount: 11,
  groupCount: 7,
  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-10, 10],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
  },
  focusDescription:
    "Double floating focus: L2/FN moves imageward and L3/FP moves objectward; L1, STO, and L4/RF remain fixed.",

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.9,
      fl: 100.26,
      glass: "N-SSK5 (Schott; S-BSM25 class equivalent)",
      nC: 1.65455,
      nF: 1.66749,
      ng: 1.67469,
      dPgF: -0.00181,
      role: "Front collector element of positive group L1.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconvex Positive (UD)",
      nd: 1.497,
      vd: 81.5,
      fl: 71.39,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.03194,
      apd: "inferred",
      apdNote: "Catalog line indices give θgF ≈ 0.539; patent condition L1p/FPp class.",
      role: "Low-dispersion positive member of the L1 rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      fl: -59.62,
      glass: "TAFD35L (HOYA equivalent; supplier uncertain)",
      nC: 1.90324,
      nF: 1.92908,
      ng: 1.94415,
      dPgF: -0.00118,
      role: "High-index negative partner in the L1 achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -54.84,
      glass: "S-LAH55V (OHARA)",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
      dPgF: -0.00693,
      role: "Standalone negative meniscus at the front of the moving FN focus group.",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -42.29,
      glass: "S-NBH5 (OHARA)",
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
      dPgF: -0.00303,
      role: "Negative short-flint member of the moving FN cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: 35.95,
      glass: "S-LAH99 (OHARA)",
      nC: 1.99105,
      nF: 2.0254,
      ng: 2.046,
      dPgF: 0.00492,
      apd: "inferred",
      apdNote: "Catalog line indices give θgF ≈ 0.600; positive FNp element in patent conditions (8)-(10).",
      role: "Ultra-high-index positive member of the moving FN doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 61.85,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      dPgF: -0.00697,
      role: "Standalone positive element at the front of the moving FP focus group.",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Biconvex Positive (UD)",
      nd: 1.497,
      vd: 81.5,
      fl: 53.77,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.03194,
      apd: "inferred",
      apdNote: "Catalog line indices give θgF ≈ 0.539; positive FPp element in patent conditions (4)-(6).",
      role: "Low-dispersion positive member of the moving FP cemented doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: -91.06,
      glass: "S-NBH56 (OHARA)",
      nC: 1.84488,
      nF: 1.87935,
      ng: 1.90045,
      dPgF: 0.01004,
      apd: "inferred",
      apdNote: "Catalog line indices give θgF ≈ 0.612; negative FPn element in patent conditions (1)-(3).",
      role: "High-dispersion negative member of the moving FP cemented doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "G10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.3,
      fl: 72.22,
      glass: "S-LAH98 (OHARA)",
      nC: 1.94514,
      nF: 1.97465,
      ng: 1.99207,
      dPgF: 0.00087,
      role: "High-index positive member of the stationary rear field-corrector doublet.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "G11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.6516,
      vd: 58.5,
      fl: -32.52,
      glass: "S-LAL7 (OHARA)",
      nC: 1.64821,
      nF: 1.65934,
      ng: 1.66537,
      dPgF: -0.00354,
      role: "Lower-dispersion negative member completing the stationary rear field-corrector doublet.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 82.416, d: 8.48, nd: 1.65844, elemId: 1, sd: 31.5 },
    { label: "2", R: -318.233, d: 0.2, nd: 1, elemId: 0, sd: 31.5 },
    { label: "3", R: 51.284, d: 10.91, nd: 1.497, elemId: 2, sd: 26 },
    { label: "4", R: -107.029, d: 2.4, nd: 1.91082, elemId: 3, sd: 26 },
    { label: "5", R: 111.402, d: 4.04, nd: 1, elemId: 0, sd: 26 },
    { label: "6", R: 129.518, d: 1.8, nd: 1.83481, elemId: 4, sd: 19.8 },
    { label: "7", R: 33.612, d: 5.21, nd: 1, elemId: 0, sd: 15.95 },
    { label: "8", R: -202.934, d: 1.6, nd: 1.65412, elemId: 5, sd: 15.95 },
    { label: "9", R: 32.129, d: 5.35, nd: 2.001, elemId: 6, sd: 17.6 },
    { label: "10", R: 274.715, d: 22.15, nd: 1, elemId: 0, sd: 17.6 },
    { label: "STO", R: 1e15, d: 19.94, nd: 1, elemId: 0, sd: 12.91694 },
    { label: "12", R: 115.67, d: 4.69, nd: 1.6968, elemId: 7, sd: 18.5 },
    { label: "13", R: -67.54, d: 0.2, nd: 1, elemId: 0, sd: 18.5 },
    { label: "14", R: 66.218, d: 6.45, nd: 1.497, elemId: 8, sd: 17.3 },
    { label: "15", R: -43.353, d: 1.6, nd: 1.85478, elemId: 9, sd: 17.3 },
    { label: "16", R: -99.522, d: 4.35, nd: 1, elemId: 0, sd: 17.3 },
    { label: "17", R: -65.005, d: 4.12, nd: 1.95375, elemId: 10, sd: 20.8 },
    { label: "18", R: -34.479, d: 1.95, nd: 1.6516, elemId: 11, sd: 20.8 },
    { label: "19", R: 56.191, d: 78.33, nd: 1, elemId: 0, sd: 21 },
  ],

  asph: {},
  var: {
    "5": [4.04, 19.81],
    "10": [22.15, 6.37],
    STO: [19.94, 11.39],
    "16": [4.35, 12.89],
  },
  varLabels: [
    ["5", "D5 L1-L2"],
    ["10", "D10 L2-STO"],
    ["STO", "D11 STO-L3"],
    ["16", "D16 L3-L4"],
  ],
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 / FN (-)", fromSurface: "6", toSurface: "10" },
    { text: "L3 / FP (+)", fromSurface: "12", toSurface: "16" },
    { text: "L4 / RF (-)", fromSurface: "17", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
  ],

  closeFocusM: 0.486,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,
  apertureBlades: 9,
  apertureBladeRoundedness: 1,
  scFill: 0.62,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
