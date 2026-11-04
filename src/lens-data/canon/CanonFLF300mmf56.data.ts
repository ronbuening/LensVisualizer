import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP S47-8749 B, Example 2 (f = 100, 1:5.6, 2ω = 8.2°), every R and d scaled uniformly ×3 to f = 300 mm; N and V
 * as printed. The printed N/V carry no line subscript; the CaF2 and SFS3 values match catalog d-line indices, so they
 * are used as nd/νd. The association with the FL-F 300 mm f/5.6 is probable, not a factory prescription.
 * The example has six elements in five groups. Canon lists seven elements in six groups; its section drawing adds a
 * thin front protective meniscus that the patent does not list, so it is not modelled and the counts follow the patent.
 * Image plane: printed L = 69.042 × 3 = 207.126 mm from the first vertex; the last gap (83.193 mm) is L minus the axial
 * track, 0.026 mm shorter than the paraxial back focus.
 * The patent prints no stop coordinate or clear apertures. Fig. 4 draws the stop at about 0.70 of d7 between the r7 and
 * r8 vertices; the model places it at 0.70 (59.8248 / 25.6392 mm). Front sd 28.9 mm = entrance-pupil radius + 8 %; rear sd 13.3 mm follows the
 * Fig. 4 rear/front outline ratio (0.459). A 347 dpi re-reading of Fig. 4 gives front rims of 25.9–26.6 mm,
 * under the 26.79 mm axial floor at r1, and a rear/front ratio of 0.44–0.45. The rims are kept: L1 below about
 * 28.1 mm or L6 below about 12.85 mm costs more than 3 points of corner illumination, and the rest of the
 * difference is within the reading noise.
 * L1 and L2 are labelled CaF2 in the patent and use the catalog CaF2 curve; L3–L6 use coordinate-equal catalog
 * equivalents (SF56A, J-LASF013, S-LAM60, FF5) for dispersion; the production melts are unidentified.
 * Infinity focus only: the patent prints no close-focus state.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fl-f-300mm-f56",
  maker: "Canon",
  name: "CANON FL-F 300mm f/5.6",
  subtitle: "JP S47-8749 B, Example 2 — probable production correlation, front protective glass omitted",
  catalog: {
    lensMounts: ["canon-fl"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 300,
      design: 300,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    closeFocusM: {
      marketing: 3.5,
    },
    specs: [
      "6 ELEMENTS / 5 GROUPS (CANON 7/6 INCL. FRONT PROTECTOR)",
      "DESIGN f = 300 mm",
      "DESIGN F/5.6",
      "2 FLUORITE ELEMENTS",
      "PATENT f = 100 SCALED × 3",
    ],
  },
  source: {
    patentNumber: "JP S47-8749 B",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 1972,
    authors: ["Michiyoshi Suwa"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      glass: "CaF2 (fluorite crystal)",
      indexReference: "d",
      apd: "inferred",
      apdNote:
        "Canon identifies two fluorite elements in this lens and the patent labels L1 CaF2; the dispersion curve is the catalog CaF2 fit, not measured production material.",
      focalLengthMm: 128.68635382982097,
      role: "Biconvex fluorite front element; its strongly curved front face toward the object limits spherical aberration.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      glass: "CaF2 (fluorite crystal)",
      indexReference: "d",
      apd: "inferred",
      apdNote:
        "Canon identifies two fluorite elements in this lens and the patent labels L2 CaF2; the dispersion curve is the catalog CaF2 fit, not measured production material.",
      focalLengthMm: 182.08966946254128,
      role: "Fluorite positive meniscus, convex to the object; shares the front group's positive power and moves its principal point forward.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      glass: "SF56A (SCHOTT catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 345.34846160563654,
      role: "Dense-flint positive meniscus, concave to the object, cemented to L4; the pair is the negative rear component of the front group.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.6,
      glass: "J-LASF013 (HIKARI catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -84.20133605539667,
      role: "Biconcave lanthanum-flint element of the cemented pair; its strongly curved rear face, toward the image, carries most of the pair's negative power.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7432,
      vd: 49.3,
      glass: "S-LAM60 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -41.803556975448735,
      role: "Negative element of the rear group, placed on the stop side with its strongly curved face toward the object.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      glass: "FF5 (HOYA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 71.49156035175966,
      role: "Positive rear element with its strongly curved face toward the image; with L5 it gives the rear group its net negative power.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.077,
      d: 8.34,
      sd: 28.9,
      medium: 1,
    },
    {
      label: "2",
      R: -416.88300000000004,
      d: 0.18,
      sd: 28.9,
    },
    {
      label: "3",
      R: 66.816,
      d: 6.218999999999999,
      sd: 28.9,
      medium: 2,
    },
    {
      label: "4",
      R: 420.933,
      d: 5.9910000000000005,
      sd: 28.9,
    },
    {
      label: "5",
      R: -647.2560000000001,
      d: 3.609,
      sd: 28.9,
      medium: 3,
    },
    {
      label: "6",
      R: -191.487,
      d: 1.479,
      sd: 28.9,
      medium: 4,
    },
    {
      label: "7",
      R: 105.162,
      d: 59.824799999999996,
      sd: 28.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 25.639200000000002,
    },
    {
      label: "8",
      R: -32.367,
      d: 2.8409999999999997,
      sd: 13.3,
      medium: 5,
    },
    {
      label: "9",
      R: 803.346,
      d: 3.75,
      sd: 13.3,
    },
    {
      label: "10",
      R: 344.637,
      d: 6.0600000000000005,
      sd: 13.3,
      medium: 6,
    },
    {
      label: "11",
      R: -47.997,
      d: 83.19300000000001,
      sd: 13.3,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Patent infinity state only; the production lens focuses to 3.5 m. The patent prints no close-focus spacing, so no element moves.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 8,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 8.2,
    maxTraceFieldDeg: 4.1,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "7",
    },
    {
      text: "Rear",
      fromSurface: "8",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
