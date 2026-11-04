import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP S63-179308 A, Example 2 (Canon Inc.; Takashi Matsushita): F = 50.3 mm, FNo 1:2.5, 2ω = 46°,
 * all spherical, 9 elements / 8 groups. No scale factor is applied. Probable production correlation
 * with the December 1987 EF 50mm f/2.5 Compact Macro (Canon: 9/8, floating focus, 0.5×); not a
 * factory prescription.
 * R, d, N and ν follow the printed table without alteration; R18 uses the printed 1441.23, correcting
 * a transcription error in the source package. The terminal gap (38.907158 mm) is the
 * computed paraxial back focus at infinity; the patent prints no back focus.
 * The patent prints N and ν without naming a spectral line; they are read as d-line, and all nine
 * pairs coincide with d-line catalog glasses.
 * The stop position (row 7, D6 = 4.00, D7 = 3.10) is printed; every semi-diameter is inferred, since
 * the only section drawing (Fig. 1) shows Example 1. S5 = 9.2 mm is the smallest 0.1 mm step that
 * passes the f/2.5 axial beam; at that height S4 and S5 leave 0.044 mm clearance in the 0.60 mm
 * gap, hence gapSagFrac 0.925935.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-50mm-f25-compact-macro",
  maker: "Canon",
  name: "CANON EF 50mm f/2.5 Compact Macro",
  subtitle: "JP S63-179308 A, Example 2 — probable production correlation",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    elementCount: 9,
    groupCount: 8,
    closeFocusM: {
      marketing: 0.23,
    },
    focalLengthMm: {
      marketing: 50,
      design: 50.3,
    },
    fNumber: {
      marketing: 2.5,
      design: 2.5,
    },
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 50.3 mm",
      "DESIGN F/2.5",
      "ALL SPHERICAL",
      "FLOATING FOCUS; 0.5× MAX",
    ],
  },
  source: {
    patentNumber: "JP S63-179308 A",
    example: {
      label: "Numerical Example 2",
      id: "2",
    },
    patentYear: 1988,
    authors: ["Takashi Matsushita"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.2,
      glass: "S-LAL10 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 73.91359215522337,
      role: "Weak biconvex front element of the moving first group; begins converging the axial beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      glass: "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 48.43047757002394,
      role: "High-index positive meniscus, convex to the object; the strongest positive element ahead of the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.60717,
      vd: 40.3,
      glass: "BAFD3 (HOYA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -27.67386070617443,
      role: "Negative meniscus just ahead of the stop; its deeply curved rear face, concave to the stop, supplies the main negative power ahead of the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      glass: "S-TIM35 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 95.97179628769526,
      role: "Weak positive meniscus just behind the stop, convex to the image (the patent's lens B); limits the change of astigmatism at intermediate distances.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -16.56395949737902,
      role: "Dense-flint negative front element of the cemented pair; its strongly curved front face, concave to the stop, is the main negative surface behind the stop.",
      cemented: "CD1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      glass: "S-LAH60V (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 26.377815409965656,
      role: "High-index biconvex rear element of the cemented pair; the dispersion step across the cemented face helps correct axial colour.",
      cemented: "CD1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 43.46771845183897,
      role: "Positive meniscus, concave to the object, closing the moving first group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.66672,
      vd: 48.3,
      glass: "S-BAH11 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -116.38728602870907,
      role: "Weak negative meniscus, convex to the object, at the front of the fixed rear group; with Element 9 it bounds the negative air lens that corrects close-range coma.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.58144,
      vd: 40.7,
      glass: "S-TIL25 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 115.92,
      role: "Nearly plano-convex rear element; its power almost cancels Element 8's, leaving the fixed rear group nearly afocal.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 76.72,
      d: 2.25,
      sd: 11.1,
      medium: 1,
    },
    {
      label: "2",
      R: -171.59,
      d: 0.15,
      sd: 11.1,
    },
    {
      label: "3",
      R: 25.09,
      d: 3.6,
      sd: 10.5,
      medium: 2,
    },
    {
      label: "4",
      R: 65.72,
      d: 0.6,
      sd: 10.5,
    },
    {
      label: "5",
      R: 462.21,
      d: 3.27,
      sd: 9.2,
      medium: 3,
    },
    {
      label: "6",
      R: 16.17,
      d: 4.0,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.1,
    },
    {
      label: "8",
      R: -38.34,
      d: 3.3,
      sd: 10.5,
      medium: 4,
    },
    {
      label: "9",
      R: -25.26,
      d: 1.35,
      sd: 8.4,
    },
    {
      label: "10",
      R: -14.66,
      d: 1.87,
      sd: 8.4,
      medium: 5,
    },
    {
      label: "11",
      R: 156.19,
      d: 4.77,
      sd: 10.5,
      medium: 6,
    },
    {
      label: "12",
      R: -25.25,
      d: 0.25,
      sd: 10.5,
    },
    {
      label: "13",
      R: -88.58,
      d: 3.6,
      sd: 11.1,
      medium: 7,
    },
    {
      label: "14",
      R: -24.78,
      sd: 11.1,
    },
    {
      label: "15",
      R: 85.78,
      d: 1.8,
      sd: 13.7,
      medium: 8,
    },
    {
      label: "16",
      R: 40.4,
      d: 1.06,
      sd: 13.7,
    },
    {
      label: "17",
      R: 64.44,
      d: 3.0,
      sd: 13.7,
      medium: 9,
    },
    {
      label: "18",
      R: 1441.23,
      d: 38.907158076,
      sd: 13.7,
    },
  ],
  focus: {
    closeFocusM: 0.228547738,
    keyframes: [0, 1],
    published: [1],
    description:
      "PUBLISHED floating focus: JP S63-179308 A, Example 2 prints D14 = 1.7 mm at infinity and 26.9 mm at 0.5×. Group I (the front seven elements and the stop) moves 25.2 mm toward the object while the rear two elements and the image plane stay fixed. The near object distance is derived from the printed gaps and the computed infinity back focus: 228.5 mm object to image at −0.499×, close to Canon's 0.23 m and 0.5×. Intermediate positions interpolate D14 linearly. The iris keeps its infinity f/2.5 diameter; the patent labels its 0.5× curves effective F/3.5.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 124.77058004778468,
        distanceReference: "first-surface",
        source:
          "D14 = 26.9 mm is printed for 0.5×; the object distance is derived with the rear group and image plane fixed at the computed infinity back focus (38.907 mm). It is not printed. The computed magnification is −0.4993× against the patent's 0.5×.",
      },
    ],
  },
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 46,
    maxTraceFieldDeg: 23,
  },
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "14",
    },
    {
      text: "II",
      fromSurface: "15",
      toSurface: "18",
    },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "10",
      toSurface: "12",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
  checks: {
    gapSagFrac: 0.925935,
  },
  gaps: {
    "14": {
      label: "D14",
      values: [[1.7, 26.9]],
    },
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
