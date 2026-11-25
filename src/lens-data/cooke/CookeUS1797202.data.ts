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
 * Elements are named L1–L6 from the front. The patent's own designations for Figure 3 are members A6 and B6 (cemented
 * elements a6 and b6) in the front component and L6, M6 and N6 in the back component; each element's role gives its
 * patent designation, so the patent's L6 is L4 here. The group brackets mark the patent's front and back components.
 *
 * The patent prints a zero axial air space between R9 and R10. It is kept as printed: the two rear positive elements
 * touch at the vertex and the air space opens away from the axis because R10 is the steeper curve.
 *
 * Inferred, not printed: the stop, placed midway in the 32.6 mm air space between the front and rear components (the
 * patent mentions no diaphragm), and the 51.29 mm back focus, which is the computed paraxial image distance for an
 * object at infinity. The patent prints no back focus, field angle, image size or close-focus data.
 *
 * Semi-diameters are estimated; the patent prints no diameters. Figure 3 is not to scale (its axial spacings disagree
 * with the table by more than a factor of two), so it is used for proportions only. It draws all six elements at one
 * height, with square-cut rims, and draws L4's rear face meeting L5's front face at the rim. The front component is
 * 40 mm, above the 36.1 mm the f/1.5 axial beam reaches at the first surface; a lower L1 rim costs corner light. The
 * rear component is 34 mm on every surface: there the L4–L5 air space has narrowed to 0.26 mm (it closes at 34.6 mm)
 * and L5's edge to 0.69 mm, so the rear group cannot reach the front height the figure draws. `checks.gapSagFrac`
 * 0.95 admits the 34 mm rim across the L4–L5 air space, where the faces do not cross.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-108mm-f15-us1797202",
  maker: "Cooke",
  name: "COOKE 108mm f/1.5 (US 1,797,202 Design)",
  subtitle: "US 1,797,202 A, sole example — Warmisham f/1.5 Petzval-type objective",
  visible: true,
  catalog: {
    specs: ["6 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 108.4 mm", "DESIGN F/1.5", "PETZVAL TYPE"],
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
      label: "Element 1",
      type: "Positive Meniscus",
      focalLengthMm: 356.46,
      nd: 1.5736,
      vd: 57.7,
      indexReference: "D",
      glass: "Unmatched (nD 1.5736 / V 57.7, Chance type 9002)",
      role: "Front positive meniscus of the divided front component (patent member A6)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      focalLengthMm: 87.74,
      nd: 1.529,
      vd: 51.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.5290 / V 51.6, Chance type 7863)",
      role: "Biconvex crown of the cemented front pair (patent element a6 of member B6)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      focalLengthMm: -114.15,
      nd: 1.6512,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.6512 / V 33.5, Chance type 5093)",
      role: "Biconcave flint of the cemented front pair (patent element b6 of member B6)",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      focalLengthMm: -124.46,
      nd: 1.6512,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.6512 / V 33.5, Chance type 5093)",
      role: "Divergent flint meniscus leading the back component (patent member L6)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      focalLengthMm: 141.75,
      nd: 1.6129,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6129 / V 59.3, Chance type 4873)",
      role: "First convergent crown meniscus of the back component (patent member M6)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      focalLengthMm: 166.41,
      nd: 1.6129,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6129 / V 59.3, Chance type 4873)",
      role: "Second convergent crown meniscus of the back component (patent member N6)",
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
      sd: 34,
      medium: 4,
    },
    {
      label: "7",
      R: 47.11,
      d: 4.7,
      sd: 34,
    },
    {
      label: "8",
      R: 62.5,
      d: 8,
      sd: 34,
      medium: 5,
    },
    {
      label: "9",
      R: 211.9,
      d: 0,
      sd: 34,
    },
    {
      label: "10",
      R: 59.1,
      d: 8,
      sd: 34,
      medium: 6,
    },
    {
      label: "11",
      R: 133.3,
      d: 51.2915,
      sd: 34,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "BACK",
      fromSurface: "6",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "3",
      toSurface: "5",
    },
  ],
  checks: {
    gapSagFrac: 0.95,
  },
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
