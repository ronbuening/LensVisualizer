import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Nikon Fisheye-Nikkor 6mm f/5.6              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,524,697 Example 1 (Isshiki / Matsuki).          ║
 * ║  Mirror-lock-up circular fisheye, patent normalized at f≈10.       ║
 * ║  9 glass elements / 6 groups, all spherical.                       ║
 * ║  Focus: fixed-focus; no variable air spacings in the patent.       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Example 1 computes to EFL = 10.004615486. All radii,     ║
 * ║    thicknesses, BFD, and estimated semi-diameters are scaled by     ║
 * ║    ×0.599723199 to the manufacturer nominal 6.0 mm focal length.       ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER:                                                   ║
 * ║    Patent L5 is a flat built-in filter. Per project data rules it   ║
 * ║    is excluded from the surfaces/elements arrays. Its first-order   ║
 * ║    effect is folded into the r7-to-r10 air gap as t/n =            ║
 * ║    1.9 / 1.51743 patent units.                                     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. SD values are       ║
 * ║    conservative estimates from Fig. 1 proportions, stop geometry,   ║
 * ║    spherical rim-slope limits, edge thickness, and cross-gap sag.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-fisheye-nikkor-6mm-f56",
  maker: "Nikon",
  name: "NIKON FISHEYE-NIKKOR 6mm f/5.6",
  subtitle: "US 3,524,697 Example 1 — Isshiki / Matsuki",
  specs: ["9 elements / 6 groups", "f ≈ 6.00 mm", "F/5.6", "2ω = 220°", "all-spherical"],

  focalLengthMarketing: 6,
  focalLengthDesign: 6.0,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  projection: {
    kind: "fisheye-equidistant",
    focalLengthMm: 6.0,
    fullFieldDeg: 220,
    imageCircleMm: 21.6,
    maxTraceFieldDeg: 110,
  },
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,524,697",
  patentAuthors: ["Masaki Isshiki", "Keiji Matsuki"],
  patentAssignees: ["Nippon Kogaku KK"],
  patentYear: 1970,
  elementCount: 9,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Patent L1",
      type: "Negative Meniscus",
      nd: 1.61272,
      vd: 58.6,
      fl: -46.53,
      glass: "BACD4 / N-SK4 class (613/586)",
      apd: false,
      role: "First strongly curved negative meniscus for extreme-field angular compression.",
    },
    {
      id: 2,
      name: "L2",
      label: "Patent L2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: -16.78,
      glass: "BACD16 / N-SK16 / S-BSM16 class (620/603)",
      apd: false,
      role: "Second negative meniscus; the stronger front-group angular compressor.",
    },
    {
      id: 3,
      name: "L3",
      label: "Patent L3",
      type: "Biconcave Negative",
      nd: 1.48848,
      vd: 70.3,
      fl: -16.62,
      glass: "FC5 / N-FK5 / S-FSL5 class (488/703)",
      apd: false,
      role: "Low-dispersion negative member of the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Patent L4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.0,
      fl: 17.33,
      glass: "FD110 / N-SF11 / S-TIH11 class (785/260)",
      apd: false,
      role: "Dense-flint positive member of the front doublet; lateral-color correction.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L6",
      label: "Patent L6",
      type: "Biconcave Negative",
      nd: 1.78477,
      vd: 26.0,
      fl: -11.26,
      glass: "FD110 / N-SF11 / S-TIH11 class (785/260)",
      apd: false,
      role: "Dense-flint negative member of the rear chromatic-correction doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L7",
      label: "Patent L7",
      type: "Biconvex Positive",
      nd: 1.74372,
      vd: 45.0,
      fl: 10.15,
      glass: "LAF2 / N-LAF2 / S-LAM2 class (744/450)",
      apd: false,
      role: "High-index positive member behind the stop; longitudinal chromatic correction with L6.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L8",
      label: "Patent L8",
      type: "Positive Meniscus",
      nd: 1.76764,
      vd: 46.5,
      fl: 24.83,
      glass: "768465 — lanthanum flint patent melt (nd=1.76764, νd=46.5; no exact public catalog match)",
      apd: false,
      role: "Air-spaced positive meniscus; field-shaping and rear-group power balance.",
    },
    {
      id: 8,
      name: "L9",
      label: "Patent L9",
      type: "Negative Meniscus",
      nd: 1.78485,
      vd: 26.0,
      fl: -26.65,
      glass: "FD110 / N-SF11 / S-TIH11 class (785/260)",
      apd: false,
      role: "Dense-flint negative member of the final cemented doublet; astigmatism and lateral-color balance.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L10",
      label: "Patent L10",
      type: "Biconvex Positive",
      nd: 1.6223,
      vd: 53.1,
      fl: 17.5,
      glass: "S-BSM22 (OHARA) / N-SSK2 class (622/532)",
      apd: false,
      role: "Thick final positive element; image-side convergence and final field/chromatic balancing.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 53.20864, d: 2.69875, nd: 1.61272, elemId: 1, sd: 14.9931 }, // patent r1; L1 front
    { label: "2", R: 18.2052, d: 14.69322, nd: 1.0, elemId: 0, sd: 14.0935 }, // patent r2; L1 rear
    { label: "3", R: 53.75139, d: 2.33892, nd: 1.62041, elemId: 2, sd: 7.1967 }, // patent r3; L2 front
    { label: "4", R: 8.57664, d: 9.29571, nd: 1.0, elemId: 0, sd: 6.8968 }, // patent r4; L2 rear
    { label: "5", R: -39.75085, d: 0.77964, nd: 1.48848, elemId: 3, sd: 4.4979 }, // patent r5; L3 front
    { label: "6", R: 10.27146, d: 3.47839, nd: 1.7847, elemId: 4, sd: 4.4979 }, // patent r6; L3/L4 cemented surface
    { label: "7", R: 35.73511, d: 3.26976, nd: 1.0, elemId: 0, sd: 4.4979 }, // patent r7; L4 rear; folded filter-equivalent gap to stop
    { label: "STO", R: 1e15, d: 3.23851, nd: 1.0, elemId: 0, sd: 1.5053 }, // stop inferred from Fig. 1, in air after the omitted filter
    { label: "8", R: -1931.61786, d: 3.35845, nd: 1.78477, elemId: 5, sd: 3.1186 }, // patent r10; L6 front
    { label: "9", R: 8.8855, d: 6.77687, nd: 1.74372, elemId: 6, sd: 3.1186 }, // patent r11; L6/L7 cemented surface
    { label: "10", R: -33.8034, d: 0.11994, nd: 1.0, elemId: 0, sd: 3.4784 }, // patent r12; L7 rear
    { label: "11", R: -183.5039, d: 2.87867, nd: 1.76764, elemId: 7, sd: 3.8982 }, // patent r13; L8 front
    { label: "12", R: -17.38478, d: 10.31524, nd: 1.0, elemId: 0, sd: 4.7978 }, // patent r14; L8 rear
    { label: "13", R: 38.63237, d: 1.55928, nd: 1.78485, elemId: 8, sd: 6.597 }, // patent r15; L9 front
    { label: "14", R: 13.32825, d: 10.43518, nd: 1.6223, elemId: 9, sd: 7.1967 }, // patent r16; L9/L10 cemented surface
    { label: "15", R: -41.68556, d: 10.71129, nd: 1.0, elemId: 0, sd: 7.4965 }, // patent r17; L10 rear to image plane
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.3,
  focusDescription: "Fixed-focus mirror-lock-up fisheye; the patent publishes no variable air spacings.",

  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.72,
  yScFill: 0.68,
} satisfies LensDataInput;

export default LENS_DATA;
