import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON TS-E 90mm f/2.8 L MACRO                 ║
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
 * ║    stop radius is derived from the patent design f-number          ║
 * ║    (F/2.91). Other semi-diameters are renderer-safe inferred clear ║
 * ║    apertures, cross-checked against on-axis F/2.91 ray heights,    ║
 * ║    element edge thickness, surface-sag overlap, and the            ║
 * ║    effective-diameter scale of Examples 2 and 3. They are not      ║
 * ║    production-measured mechanical clear apertures.                 ║
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
  schema: 2,
  key: "canon-tse-90mm-f28l-macro",
  maker: "Canon",
  name: "CANON TS-E 90mm f/2.8 L MACRO",
  subtitle: "JP2018205474A Example 1 — Canon / Yamagishi",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "11 elements / 9 groups",
      "Patent f = 55.986 mm; scaled ×1.60754",
      "Computed scaled EFL ≈ 89.96 mm",
      "F/2.91 design; f/2.8 marketed",
      "Image circle ≈ 69.4 mm from scaled patent image height",
      "Patent prescription all spherical",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 90, design: 89.963 },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "JP 2018-205474 A",
    patentYear: 2018,
    authors: ["Masakazu Yamagishi"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.4,
      focalLengthMm: -115.83,
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
      focalLengthMm: 102.89,
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
      focalLengthMm: -55.01,
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
      focalLengthMm: 36.23,
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
      focalLengthMm: 41.55,
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
      focalLengthMm: -24.74,
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
      focalLengthMm: -55.5,
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
      focalLengthMm: 62.13,
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
      focalLengthMm: 65.82,
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
      focalLengthMm: -85.02,
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
      focalLengthMm: 121.08,
      glass: "S-LAH60V (OHARA)",
      role: "Final high-index positive meniscus with concave object-side surface for sensor-reflection ghost control.",
    },
  ],

  surfaces: [
    { label: "1", R: 71.94406, d: 2.13803, sd: 17.6, medium: 1 },
    { label: "2", R: 32.3647, d: 4.24392, sd: 16.8 },
    { label: "3", R: 60.90987, d: 3.55267, sd: 17.3, medium: 2 },
    { label: "4", R: 203.83989, d: 2.20234, sd: 15.75 },
    { label: "5", R: -91.40499, d: 1.73615, sd: 15.75, medium: 3 },
    { label: "6", R: 59.79584, d: 0.16075, sd: 17.1 },
    { label: "7", R: 41.55021, d: 6.81599, sd: 17.2, medium: 4 },
    { label: "8", R: -147.73497, d: 0.16075, sd: 16.8 },
    { label: "9", R: 36.48323, d: 8.63252, sd: 16.8, medium: 5 },
    { label: "10", R: -43.85543, d: 1.94513, sd: 14.4, medium: 6 },
    { label: "11", R: 27.32665, d: 6.43018, sd: 14.0 },
    { label: "STO", R: "flat", d: 5.17629 },
    { label: "13", R: -28.39567, d: 1.73615, sd: 13.7, medium: 7 },
    { label: "14", R: -91.82939, d: 4.05101, sd: 14.0, medium: 8 },
    { label: "15", R: -32.12517, d: 0.16075, sd: 14.8 },
    { label: "16", R: 69.60669, d: 4.99946, sd: 14.8, medium: 9 },
    { label: "17", R: -87.21412, sd: 14.5 },
    { label: "18", R: -193.3603, d: 1.6397, sd: 13.9, medium: 10 },
    { label: "19", R: 65.07823, d: 2.02551, sd: 13.7 },
    { label: "20", R: -318.01093, d: 2.39524, sd: 13.8, medium: 11 },
    { label: "21", R: -76.90816, sd: 13.8 },
  ],

  focus: {
    closeFocusM: 0.39,
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "17": { label: "D17", values: [[2.556, 10.48119]] }, "21": { label: "BF", values: [[71.85725, 103.10792]] } },

  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  // Canon official specification: tilt ±10°, shift ±12 mm.
  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-10, 10],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
    // Reference-state rear vertex fallback; not a measured mechanical tilt hinge.
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -71.85725 },
  },

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

  layout: { scFill: 0.62, yScFill: 0.48 },

  rays: { offAxisFieldFrac: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
