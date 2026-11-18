import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 1,797,202 A (Arthur Warmisham, assigned to Kapella Limited, granted 1931): the patent's only numerical example,
 * which it says applies to Figure 3. It is a Petzval-type objective of relative aperture f/1.5 with six spherical
 * elements in five groups: a front meniscus, a cemented pair, a negative meniscus and two positive menisci.
 *
 * The patent prints its lengths in a unit in which the focal length is 1.084. Every printed radius, thickness and
 * separation is multiplied by 100 to give millimetres, with no further scaling or fitting; the printed prescription
 * then traces to a paraxial focal length of 108.35 mm against the printed 108.4. Indices and dispersions are the
 * patent's sodium D-line nD and V values for Chance Brothers glasses 9002, 7863, 5093 and 4873.
 *
 * The patent prints a zero axial air space between R9 and R10. It is kept as printed: the two rear positive elements
 * touch at the vertex and the air space opens away from the axis because R10 is the steeper curve.
 *
 * Inferred, not printed: the stop, placed midway in the 32.6 mm air space between the front and rear components (the
 * patent mentions no diaphragm); the clear semi-diameters (the drawing is diagrammatic and gives no usable heights);
 * and the 51.29 mm back focus, which is the computed paraxial image distance for an object at infinity. The patent
 * prints no back focus, field angle, image size or close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "warmisham-us1797202-fig3-patent-reference",
  maker: "Cooke",
  name: "WARMISHAM PETZVAL FIGURE 3 PATENT REFERENCE",
  subtitle: "1931 f/1.5; PATENT ONLY; NOT MAXIMUM RETAIL IDENTITY",
  visible: false,
  catalog: {
    specs: [
      "6 ELEMENTS / 5 GROUPS",
      "PATENT FIGURE 3; NO PROVEN RETAIL IDENTITY",
      "ESTIMATED STOP AND RIMS",
      "LITERAL ZERO-AXIS AIR; INFINITY ONLY",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      design: 108.35,
    },
    fNumber: {
      design: 1.5,
    },
  },
  source: {
    patentNumber: "US 1,797,202 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1931,
    authors: ["Arthur Warmisham"],
    assignees: ["Kapella Limited"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      focalLengthMm: 356.46,
      nd: 1.5736,
      vd: 57.7,
      indexReference: "D",
      role: "Front positive meniscus of the divided front component",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconvex Positive",
      focalLengthMm: 87.74,
      nd: 1.529,
      vd: 51.6,
      indexReference: "D",
      role: "Biconvex crown of the cemented front pair",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave Negative",
      focalLengthMm: -114.15,
      nd: 1.6512,
      vd: 33.5,
      indexReference: "D",
      role: "Biconcave flint of the cemented front pair",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Negative Meniscus",
      focalLengthMm: -124.46,
      nd: 1.6512,
      vd: 33.5,
      indexReference: "D",
      role: "Divergent flint meniscus leading the back component",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      focalLengthMm: 141.75,
      nd: 1.6129,
      vd: 59.3,
      indexReference: "D",
      role: "First convergent crown meniscus of the back component",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Positive Meniscus",
      focalLengthMm: 166.41,
      nd: 1.6129,
      vd: 59.3,
      indexReference: "D",
      role: "Second convergent crown meniscus of the back component",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 101.03,
      d: 8.2,
      sd: 40,
      medium: 1,
    },
    {
      label: "2",
      R: 193.8,
      d: 0.2,
      sd: 40,
    },
    {
      label: "3",
      R: 71.43,
      d: 21,
      sd: 40,
      medium: 2,
    },
    {
      label: "4",
      R: -119.05,
      d: 3.2,
      sd: 40,
      medium: 3,
    },
    {
      label: "5",
      R: 200,
      d: 16.3,
      sd: 40,
    },
    {
      label: "STO",
      R: "flat",
      d: 16.3,
    },
    {
      label: "6",
      R: 116.93,
      d: 4.7,
      sd: 32,
      medium: 4,
    },
    {
      label: "7",
      R: 47.11,
      d: 4.7,
      sd: 32,
    },
    {
      label: "8",
      R: 62.5,
      d: 8,
      sd: 32,
      medium: 5,
    },
    {
      label: "9",
      R: 211.9,
      d: 0,
      sd: 32,
    },
    {
      label: "10",
      R: 59.1,
      d: 8,
      sd: 32,
      medium: 6,
    },
    {
      label: "11",
      R: 133.3,
      d: 51.2915,
      sd: 32,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent gives no close-focus data. Printed lengths are multiplied by 100 to millimetres; the stop, rims and back focus are inferred.",
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "3",
      toSurface: "5",
    },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
