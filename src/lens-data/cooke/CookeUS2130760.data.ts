import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,130,760 A (Arthur Warmisham, assigned to Kapella Limited, granted 1938), Example II, illustrated by Fig. 6: an
 * f/2 objective of eight spherical elements in four groups (singlet, cemented triplet, cemented triplet, singlet),
 * printed at an equivalent focal length of 1.004. The patent gives two examples; this file uses Example II only.
 *
 * Every printed radius, thickness and separation is multiplied by 100, with no further scaling or fitting; the
 * calculated paraxial focal length is 100.40 mm. Indices are the printed sodium D-line values and the Abbe numbers
 * are copied as printed. The cemented interfaces are R4 and R5 (L2/L3/L4) and R8 and R9 (L5/L6/L7).
 *
 * Inferred, not printed: the diaphragm, which the patent places between the two meniscus components without a
 * position and which Fig. 6 does not draw; it is set midway through the 16 mm central air space S2. The 71.1054 mm
 * image distance is the calculated paraxial back focus for an object at infinity. Only infinity focus is modelled.
 *
 * SEMI-DIAMETERS: no clear apertures are printed. Fig. 6 is drawn to scale (vertex spacings and the arcs of R1, R6 and
 * R10 agree with the table at about 12.5 px/mm at 600 dpi). Measured from it: L1 about 24 mm, the front triplet's
 * square top about 22.4 mm, the rims of L4 and L5 beside the diaphragm about 16.4 mm, the rear triplet's square top
 * about 19 mm, and L8 about 19 mm. L8 is square-cut at 19.1 mm, where the f/2 marginal ray crosses it. The other rims
 * depart from the drawing where the rays or the glass require it. L1 is square-cut at 25.8 mm, not the drawn 24: the
 * f/2 entrance beam needs 25.1 mm there, and 25.8 mm keeps the off-axis light within 3 points of the earlier
 * estimate. The rims beside the diaphragm stay at 17.5 mm because the axial beam at the aperture actually reached
 * needs 17.3 mm at R5. L2 stays at 23 mm and L7 (with L6, drawn square-topped with it) at 18.3 mm, because with the
 * printed thicknesses the edge of L2 closes at about 23.06 mm and the edge of L7 at about 18.4 mm; the drawing gives
 * L7 a slightly thicker edge than the table.
 *
 * Aperture reached: f/2 is the paraxial aperture. The real f/2 marginal ray needs 23.2 mm at R3 and R4 and about
 * 19.6 mm at R9 and R10, which the edge limits above do not allow. The widest axial ray that passes enters at
 * 23.74 mm, about f/2.11, limited at R9 and R10. The chief ray passes every rim out to about 29 degrees off axis.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f2-us2130760",
  maker: "Cooke",
  name: "COOKE 100mm f/2 (US 2,130,760 Design)",
  subtitle: "US 2,130,760 A, Example II — f/2 objective with two cemented triplets",
  visible: false,
  catalog: {
    specs: ["8 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/2", "TWO CEMENTED TRIPLETS"],
    elementCount: 8,
    groupCount: 4,
    focalLengthMm: {
      design: 100.4,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 2,130,760 A",
    example: {
      label: "Example II",
      id: "2",
    },
    patentYear: 1938,
    authors: ["Arthur Warmisham"],
    assignees: ["Kapella Limited"],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      focalLengthMm: 150.88,
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / V 59.3)",
      role: "Front collective meniscus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      focalLengthMm: 78.55,
      nd: 1.621,
      vd: 60.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.621 / V 60.4)",
      role: "Outer crown of the front cemented triplet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      focalLengthMm: -39.19,
      nd: 1.605,
      vd: 38.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.605 / V 38.2)",
      role: "Negative flint at the centre of the front cemented triplet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      focalLengthMm: 117.58,
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.652 / V 33.5)",
      role: "Higher-index positive meniscus of the front triplet, next to the diaphragm",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      focalLengthMm: 97.85,
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.652 / V 33.5)",
      role: "Higher-index positive meniscus of the rear triplet, next to the diaphragm",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      focalLengthMm: -31.68,
      nd: 1.605,
      vd: 38.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.605 / V 38.2)",
      role: "Negative flint at the centre of the rear cemented triplet",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      focalLengthMm: 52.68,
      nd: 1.621,
      vd: 60.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.621 / V 60.4)",
      role: "Outer crown of the rear cemented triplet",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      focalLengthMm: 109.7,
      nd: 1.621,
      vd: 60.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.621 / V 60.4)",
      role: "Rear collective element",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 69.25,
      d: 8.2,
      sd: 25.8,
      medium: 1,
    },
    {
      label: "2",
      R: 263.2,
      d: 0.1,
      sd: 25.8,
    },
    {
      label: "3",
      R: 36.97,
      d: 6.2,
      sd: 23,
      medium: 2,
    },
    {
      label: "4",
      R: 142.9,
      d: 4,
      sd: 23,
      medium: 3,
    },
    {
      label: "5",
      R: 20.12,
      d: 5.4,
      sd: 17.5,
      medium: 4,
    },
    {
      label: "6",
      R: 24.39,
      d: 8,
      sd: 17.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 8,
    },
    {
      label: "7",
      R: -28.82,
      d: 5.4,
      sd: 17.5,
      medium: 5,
    },
    {
      label: "8",
      R: -21.32,
      d: 3,
      sd: 18.3,
      medium: 6,
    },
    {
      label: "9",
      R: 200,
      d: 5.5,
      sd: 18.3,
      medium: 7,
    },
    {
      label: "10",
      R: -38.7,
      d: 0.1,
      sd: 18.3,
    },
    {
      label: "11",
      R: 208.3,
      d: 6,
      sd: 19.1,
      medium: 8,
    },
    {
      label: "12",
      R: -100.12,
      d: 71.1054,
      sd: 19.1,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "6" },
    { text: "C2", fromSurface: "7", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
