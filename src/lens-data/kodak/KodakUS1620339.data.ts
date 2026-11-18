import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * KODAK 100mm f/2.5 (US 1,620,339 Design) — projection objective for home projectors, US 1,620,339 A
 * (Charles W. Frederick and Donald L. Wood, Eastman Kodak Company, granted March 8, 1927), sole numerical example.
 *
 * Source: the table printed on the drawing sheet and repeated in the specification. Radii, thicknesses, the air
 * space S, the D-line indices and the dispersive ratios ν are the printed values. The patent prints radii as
 * magnitudes; the signs follow the drawing and the claims (biconvex crown cemented to a negative flint meniscus,
 * then a positive crown meniscus with its convex side toward the front component).
 *
 * The patent states an equivalent focal length of 100 and an aperture of f/2.5; the printed table computes to a
 * focal length of 99.98 mm.
 *
 * Direction: the model runs from the cemented front component to the film gate, with the object at infinity. In
 * a projector the light travels the other way, from the gate to a screen at a finite distance, which the patent
 * does not give.
 *
 * Inferred values (not printed in the patent):
 * - Stop: the patent shows no diaphragm. A flat stop is placed 1 mm in front of the first surface and its radius
 *   is set by f/2.5.
 * - Semi-diameters: 22 mm on every surface, chosen to pass the f/2.5 axial beam. The patent gives no clear
 *   diameters and states no field.
 * - Image plane: the last gap is the computed paraxial back focus, 31.4082 mm. The patent prints a back focal
 *   length of 31.3.
 *
 * Dispersion: the patent prints nD, nG′ (1.534, 1.639, 1.534) and ν. The model uses nD and ν.
 *
 * Glass: the patent calls the two glasses white optical crown and dense flint and names no maker. No current
 * catalog glass matches the printed values closely enough, so the labels state the printed numbers.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f25-us1620339",
  maker: "Kodak",
  name: "KODAK 100mm f/2.5 (US 1,620,339 Design)",
  subtitle: "US 1,620,339 A, sole example — home-projector objective",
  visible: true,
  catalog: {
    specs: ["3 ELEMENTS / 2 GROUPS", "ALL SPHERICAL", "DESIGN F/2.5", "PROJECTION OBJECTIVE"],
    elementCount: 3,
    groupCount: 2,
    focalLengthMm: {
      design: 99.98,
    },
    fNumber: {
      design: 2.5,
    },
  },
  source: {
    patentNumber: "US 1,620,339 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1927,
    authors: ["Charles W. Frederick", "Donald L. Wood"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      glass: "Unmatched (white optical crown, nD 1.523 / V 59.0)",
      nd: 1.523,
      vd: 59,
      indexReference: "D",
      indexReferenceNote: "Patent prints nD 1.523, nG′ 1.534 and ν 59.0; the model uses nD and ν.",
      focalLengthMm: 73.64,
      role: "Positive crown of the cemented front component",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      glass: "Unmatched (dense flint, nD 1.617 / V 36.4)",
      nd: 1.617,
      vd: 36.4,
      indexReference: "D",
      indexReferenceNote: "Patent prints nD 1.617, nG′ 1.639 and ν 36.4; the model uses nD and ν.",
      focalLengthMm: -127.07,
      role: "Negative flint of the cemented front component; corrects colour",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      glass: "Unmatched (white optical crown, nD 1.523 / V 59.0)",
      nd: 1.523,
      vd: 59,
      indexReference: "D",
      indexReferenceNote: "Patent prints nD 1.523, nG′ 1.534 and ν 59.0; the model uses nD and ν.",
      focalLengthMm: 93.98,
      role: "Rear collecting meniscus close to the film gate",
    },
  ],
  surfaces: [
    {
      label: "STO",
      R: "flat",
      d: 1,
    },
    {
      label: "1",
      R: 82.8,
      d: 9.4,
      sd: 22,
      medium: 1,
    },
    {
      label: "2",
      R: -69.2,
      d: 3.8,
      sd: 22,
      medium: 2,
    },
    {
      label: "3",
      R: -601.9,
      d: 96.7,
      sd: 22,
    },
    {
      label: "4",
      R: 40.7,
      d: 8,
      sd: 22,
      medium: 3,
    },
    {
      label: "5",
      R: 220.7,
      d: 31.4082,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    maxFNumber: 22,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data, screen distance or film size.",
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
