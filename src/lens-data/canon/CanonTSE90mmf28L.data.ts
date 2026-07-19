import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON TS-E 90mm f/2.8L MACRO                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2018205474A, Numerical Example 1 (Canon).          ║
 * ║  Modified double-Gauss macro perspective-control lens.             ║
 * ║  Patent prescription: 11 elements / 9 groups, all spherical.       ║
 * ║  Production lens: 90mm f/2.8L Macro, Canon EF TS-E mount.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent Example 1 is normalized to f = 55.986 mm.            ║
 * ║    All radii, thicknesses, air spaces, and inferred semi-diameters ║
 * ║    are scaled by 90 / 55.986 = 1.6075447433 for the production     ║
 * ║    90 mm focal-length class. The computed scaled EFL is            ║
 * ║    89.963 mm because of patent-table rounding.                     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Numerical Example 1 does not publish effective diameters. The   ║
 * ║    stop semi-diameter is computed from the patent F/2.91 aperture ║
 * ║    and pre-stop paraxial matrix, then scaled to 12.740 mm. Other   ║
 * ║    semi-diameters are renderer-safe inferred clear apertures,      ║
 * ║    cross-checked against on-axis F/2.91 ray heights, element edge  ║
 * ║    thickness, surface-sag overlap, and the effective-diameter      ║
 * ║    scale of Examples 2 and 3. They are not production-measured     ║
 * ║    mechanical clear apertures.                                     ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERES:                                                 ║
 * ║    Canon's production specification refers to aspherical and UD    ║
 * ║    elements. JP2018205474A Example 1 itself is fully spherical, so ║
 * ║    this file records the patent prescription and leaves asph empty.║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-tse-90mm-f28l-macro",
  maker: "Canon",
  name: "CANON TS-E 90mm f/2.8L MACRO",
  subtitle: "JP2018205474A Example 1 — Canon / Yamagishi",
  specs: [
    "11 elements / 9 groups",
    "Patent f = 55.986 mm; scaled ×1.60754",
    "Computed scaled EFL ≈ 89.96 mm",
    "F/2.91 design; f/2.8 marketed",
    "Image circle ≈ 69.4 mm from scaled patent image height",
    "Patent prescription all spherical",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 89.963,
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2018-205474 A",
  patentAuthors: ["Masakazu Yamagishi"],
  patentAssignees: ["Canon Inc"],
  patentYear: 2018,
  elementCount: 11,
  groupCount: 9,

  // Canon official specification: tilt ±10°, shift ±12 mm.
  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-10, 10],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.4,
      fl: -115.83,
      glass: "S-NSL36 (OHARA)",
      role: "Front negative meniscus of L1a; establishes the divergent pre-stop pupil-control section.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: 102.89,
      glass: "S-LAH55V (OHARA)",
      role: "High-index positive meniscus partially balancing the L1a negative power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -55.01,
      glass: "N-KZFS5 (Schott) / S-NBH5 class",
      role: "Strongest negative element in L1a and a short-flint partial-dispersion correcting position.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      fl: 36.23,
      glass: "TAFD35 (HOYA)",
      role: "Dominant positive power element in L1b.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 41.55,
      glass: "S-FPL51 (OHARA) / FCD1 class UD fluorophosphate",
      role: "Low-dispersion positive element in the primary achromatizing cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.1,
      fl: -24.74,
      glass: "S-NBH52 (OHARA)",
      role: "Dense flint partner to L5; its rear surface forms the object-side half of the stop waist.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.74951,
      vd: 35.3,
      fl: -55.5,
      glass: "S-LAM7 (OHARA)",
      role: "Negative member of the nearly afocal post-stop correcting doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 62.13,
      glass: "S-LAH66 (OHARA)",
      role: "Positive member of the post-stop correcting doublet; pairs with L7 at the stop waist.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 65.82,
      glass: "S-FPM2 (OHARA)",
      role: "Positive relay singlet completing L1c.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.57135,
      vd: 53,
      fl: -85.02,
      glass: "S-BAL3 (OHARA)",
      role: "Weak negative element at the front of L2; contributes field-curvature control during focusing.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: 121.08,
      glass: "S-LAH60V (OHARA)",
      role: "Final high-index positive meniscus with concave object-side surface for sensor-reflection ghost control.",
    },
  ],

  surfaces: [
    { label: "1", R: 71.94406, d: 2.13803, nd: 1.51742, elemId: 1, sd: 17.6 },
    { label: "2", R: 32.3647, d: 4.24392, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "3", R: 60.90987, d: 3.55267, nd: 1.83481, elemId: 2, sd: 17.3 },
    { label: "4", R: 203.83989, d: 2.20234, nd: 1.0, elemId: 0, sd: 15.75 },
    { label: "5", R: -91.40499, d: 1.73615, nd: 1.65412, elemId: 3, sd: 15.75 },
    { label: "6", R: 59.79584, d: 0.16075, nd: 1.0, elemId: 0, sd: 17.1 },
    { label: "7", R: 41.55021, d: 6.81599, nd: 1.91082, elemId: 4, sd: 17.2 },
    { label: "8", R: -147.73497, d: 0.16075, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "9", R: 36.48323, d: 8.63252, nd: 1.497, elemId: 5, sd: 16.8 },
    { label: "10", R: -43.85543, d: 1.94513, nd: 1.673, elemId: 6, sd: 14.4 },
    { label: "11", R: 27.32665, d: 6.43018, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "STO", R: 1e15, d: 5.17629, nd: 1.0, elemId: 0, sd: 12.74 },
    { label: "13", R: -28.39567, d: 1.73615, nd: 1.74951, elemId: 7, sd: 13.7 },
    { label: "14", R: -91.82939, d: 4.05101, nd: 1.7725, elemId: 8, sd: 14.0 },
    { label: "15", R: -32.12517, d: 0.16075, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "16", R: 69.60669, d: 4.99946, nd: 1.59522, elemId: 9, sd: 14.8 },
    { label: "17", R: -87.21412, d: 2.556, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "18", R: -193.3603, d: 1.6397, nd: 1.57135, elemId: 10, sd: 13.9 },
    { label: "19", R: 65.07823, d: 2.02551, nd: 1.0, elemId: 0, sd: 13.7 },
    { label: "20", R: -318.01093, d: 2.39524, nd: 1.834, elemId: 11, sd: 13.8 },
    { label: "21", R: -76.90816, d: 71.85725, nd: 1.0, elemId: 0, sd: 13.8 },
  ],

  asph: {},

  var: {
    "17": [2.556, 10.48119],
    "21": [71.85725, 103.10792],
  },
  varLabels: [
    ["17", "D17"],
    ["21", "BF"],
  ],

  groups: [
    { text: "L1a", fromSurface: "1", toSurface: "6" },
    { text: "L1b", fromSurface: "7", toSurface: "11" },
    { text: "L1c", fromSurface: "13", toSurface: "17" },
    { text: "L2", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.39,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,
  scFill: 0.62,
  yScFill: 0.48,
  offAxisFieldFrac: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
