import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Kodak projection objective — US 1,620,339 A (Charles W. Frederick and Donald L. Wood, Eastman Kodak Company,
 * granted March 8, 1927), sole numerical example.
 *
 * Source: the table printed on the drawing sheet and repeated in the specification. Radii, thicknesses, the air
 * space S, the D-line indices and the dispersive ratios ν are the printed values. The patent prints radii as
 * magnitudes; the signs follow the drawing and the claims (biconvex crown cemented to a negative flint meniscus,
 * then a positive crown meniscus with its convex side toward the front component).
 *
 * Scale: the patent's own normalisation, equivalent focal length 100, aperture f/2.5. No scale factor is applied.
 * The printed table computes to a focal length of 99.98 mm.
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
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-frederick-wood-us1620339-patent-reference",
  maker: "Kodak",
  name: "FREDERICK-WOOD PROJECTION PATENT REFERENCE",
  subtitle: "1927 100 mm f/2.5; reciprocal infinity reference; PATENT ONLY",
  visible: false,
  catalog: {
    specs: [
      "3 ELEMENTS / 2 GROUPS",
      "PATENT ONLY; NO RETAIL IDENTITY",
      "ESTIMATED FRONT IRIS AND RIMS",
      "RECIPROCAL INFINITY REFERENCE ONLY",
    ],
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
      label: "L1",
      type: "Biconvex",
      nd: 1.523,
      vd: 59,
      indexReference: "D",
      indexReferenceNote: "Patent prints nD 1.523, nG′ 1.534 and ν 59.0; the model uses nD and ν.",
      focalLengthMm: 73.64,
      role: "Front biconvex crown of the cemented front component",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Meniscus",
      nd: 1.617,
      vd: 36.4,
      indexReference: "D",
      indexReferenceNote: "Patent prints nD 1.617, nG′ 1.639 and ν 36.4; the model uses nD and ν.",
      focalLengthMm: -127.07,
      role: "Negative flint meniscus cemented behind L1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Meniscus",
      nd: 1.523,
      vd: 59,
      indexReference: "D",
      indexReferenceNote: "Patent prints nD 1.523, nG′ 1.534 and ν 59.0; the model uses nD and ν.",
      focalLengthMm: 93.98,
      role: "Rear positive crown meniscus close to the film gate",
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
    maxFNumber: 22, fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Reciprocal infinity-only reference, front-to-film direction. Not a finite-conjugate projector simulation. Source nominal 100 mm f/2.5 and back focal length 31.3; the calculated D-line back focus of 31.4082 mm is used rather than fitted. Estimated iris 1 mm before the front surface and 22 mm clear semi-diameter rims; neither is specified by the patent. No projector magnification, gate format or production identity claimed.",
  },
  groups: [],
  doublets: [
    {
      text: "D1",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
