import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon EF-S 18-55mm f/3.5-5.6 IS              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2007/0058265 A1, Numerical Example 2.             ║
 * ║  Four-group negative-lead APS-C DSLR zoom with single-lens IS.      ║
 * ║  11 elements / 9 groups, 1 aspherical surface.                     ║
 * ║  Focus: front-group focusing by translating Group 1.                ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D8, D14, D17, and rear BF.                    ║
 * ║  Focus variable gap: D8 only, inferred paraxially for 0.25 m MFD.  ║
 * ║  Reversing groups: Group 1 follows the patent's image-convex cam   ║
 * ║  path; the tabulated model represents the three patent zoom stops. ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scale factor was applied. Patent Example 2 already matches   ║
 * ║    the production 18-55 mm class design.                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. Semi-diameters below were      ║
 * ║    estimated from paraxial marginal/chief-ray envelopes, patent     ║
 * ║    cross-section proportions, the 58 mm filter constraint, and      ║
 * ║    renderer clearance limits. The steep S4/S5 air gap, L32 rim,    ║
 * ║    and 19A/20 near-contact pair are capped to preserve positive     ║
 * ║    edge thickness and visible inter-element clearance.              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ Sensor cover glass, filters, and mechanical parts omitted    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-efs-18-55mm-f35-56-is",
  maker: "Canon",
  name: "CANON EF-S 18-55mm f/3.5-5.6 IS",
  subtitle: "US 2007/0058265 A1 — Numerical Example 2",
  specs: [
    "11 elements / 9 groups",
    "Design f = 18.693-53.300 mm",
    "Patent Fno = 3.63-5.86",
    "2ω = 72.2°-28.7°",
    "1 aspherical surface",
    "single-lens IS unit",
  ],

  focalLengthMarketing: [18, 55],
  focalLengthDesign: [18.693085625, 53.299961543],
  lensMounts: ["canon-ef-s"],
  imageFormat: "aps-c",
  patentNumber: "US 2007/0058265 A1",
  patentAuthors: ["Takeshi Nishimura"],
  patentAssignees: ["Canon Inc"],
  patentYear: 2007,
  elementCount: 11,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: 164.052,
      glass: "S-BSL7 (OHARA)",
      role: "Weak front positive meniscus that moderates the entrance bundle before the negative front-group lenses.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.622992,
      vd: 58.2,
      fl: -29.41,
      glass: "S-BSM15 (OHARA)",
      role: "Primary negative-power lens in the retrofocus front group.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.2,
      fl: -34.932,
      glass: "S-BSM15 (OHARA)",
      role: "Second negative front-group lens, sharing the wide-angle divergence with L12.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.805181,
      vd: 25.4,
      fl: 45.305,
      glass: "S-TIH6 (OHARA)",
      role: "High-index dense flint positive lens that trims front-group chromatic and monochromatic aberrations.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5 / L2A IS unit",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 78.625,
      glass: "S-FSL5 (OHARA)",
      role: "Single positive image-stabilizing lens displaced perpendicular to the optical axis.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -60.003,
      glass: "S-TIH53 (OHARA)",
      role: "High-index heavy-flint component of the positive L2B achromatizing doublet.",
      cemented: "L2B",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 21.949,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion positive crown component of the L2B cemented doublet.",
      cemented: "L2B",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.639799,
      vd: 34.5,
      fl: -13.711,
      glass: "S-TIM27 (OHARA)",
      role: "Strong negative component of the third-group compensator doublet.",
      cemented: "L3",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.784723,
      vd: 25.7,
      fl: 21.969,
      glass: "S-TIH11 (OHARA)",
      role: "High-index dense-flint positive component paired with L31 in the net-negative compensator group.",
      cemented: "L3",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58306,
      vd: 30.2,
      fl: -211.974,
      glass: "Unmatched (583/302 flint; obsolete HOYA E-F3-class candidate)",
      role: "Weak negative field lens carrying the sole aspherical surface on its rear face.",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 36.394,
      glass: "S-FSL5 (OHARA)",
      role: "Rear positive relay/field lens with strong rear convergence toward the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 80.198, d: 3.4, nd: 1.51633, elemId: 1, sd: 21.0 },
    { label: "2", R: 1485.52, d: 0.15, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "3", R: 74.916, d: 1.6, nd: 1.622992, elemId: 2, sd: 15.5 },
    { label: "4", R: 14.601, d: 7.99, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "5", R: -141.698, d: 1.2, nd: 1.622992, elemId: 3, sd: 13.0 },
    { label: "6", R: 25.795, d: 0.15, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "7", R: 21.179, d: 3.4, nd: 1.805181, elemId: 4, sd: 14.2 },
    { label: "8", R: 46.88, d: 33.62, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "9", R: -302.692, d: 1.9, nd: 1.48749, elemId: 5, sd: 8.2 },
    { label: "10", R: -34.091, d: 4.2, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "11", R: 16.673, d: 0.8, nd: 1.84666, elemId: 6, sd: 8.2 },
    { label: "12", R: 12.277, d: 4.5, nd: 1.48749, elemId: 7, sd: 8.6 },
    { label: "13", R: -73.294, d: 1.0, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "STO", R: 1e15, d: 3.3, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "15", R: -29.161, d: 0.75, nd: 1.639799, elemId: 8, sd: 8.4 },
    { label: "16", R: 12.672, d: 2.6, nd: 1.784723, elemId: 9, sd: 8.7 },
    { label: "17", R: 43.512, d: 7.34, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "18", R: -96.235, d: 1.5, nd: 1.58306, elemId: 10, sd: 8.0 },
    { label: "19A", R: -437.245, d: 0.03, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "20", R: 417.34, d: 3.8, nd: 1.48749, elemId: 11, sd: 8.0 },
    { label: "21", R: -18.474, d: 35.265626831, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  asph: {
    "19A": {
      K: 0,
      A4: 3.76648e-5,
      A6: 3.00374e-8,
      A8: 7.60709e-10,
      A10: -8.99719e-12,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [18.693085625, 32.076103746, 53.299961543],
  zoomLabels: ["18 mm", "55 mm"],
  zoomStep: 0.004,
  nominalFno: [3.5, 4.5, 5.6],
  maxFstop: 36,
  closeFocusM: 0.25,
  focusDescription:
    "Front-group focusing: Group 1 translates objectward for close focus. Close-focus D8 values are paraxially inferred from the official 0.25 m MFD because the patent provides infinity-focus zoom spacings only.",
  var: {
    "8": [
      [33.62, 38.243622193],
      [13.53, 17.916075104],
      [3.23, 7.872280536],
    ],
    STO: [
      [3.3, 3.3],
      [6.19, 6.19],
      [8.96, 8.96],
    ],
    "17": [
      [7.34, 7.34],
      [4.45, 4.45],
      [1.68, 1.68],
    ],
    "21": [
      [35.265626831, 35.265626831],
      [46.875312338, 46.875312338],
      [66.283929333, 66.283929333],
    ],
  },
  varLabels: [
    ["8", "D8 / focus"],
    ["STO", "D14"],
    ["17", "D17"],
    ["21", "BF"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "8" },
    { text: "G2 / IS (+)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (-)", fromSurface: "15", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "L2B", fromSurface: "11", toSurface: "13" },
    { text: "L3", fromSurface: "15", toSurface: "17" },
  ],

  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32, 36],
  apertureBlades: 6,
  apertureBladeRoundedness: 0.6,
  scFill: 0.72,
  yScFill: 0.68,
} satisfies LensDataInput;

export default LENS_DATA;
