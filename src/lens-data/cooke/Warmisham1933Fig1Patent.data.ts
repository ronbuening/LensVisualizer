import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 1,926,569 A (Arthur Warmisham, assigned to Kapella Limited, granted 1933), the Figure 1 example: an f/1
 * photographic and projection objective of seven spherical elements in five groups, printed on specification page 1.
 * The patent gives two examples (Figures 1 and 2); this file uses the Figure 1 table only.
 *
 * The patent prints the table at an equivalent focal length of .97 with a front clear aperture of .97. Every printed
 * radius, thickness and separation is multiplied by 100, with no further scaling or fitting. The scaled prescription
 * traces to a paraxial focal length of 97.06 mm. Indices and Abbe numbers are the patent's sodium D-line nD and V
 * values. The 48.5 mm semi-diameter of the front cemented pair is the printed front clear aperture.
 *
 * Inferred, not printed: the diaphragm position. Figure 1 draws the diaphragm in the air space S2 between the two
 * biconcave elements, close behind the nearly flat rear face of L3; it is placed 1.9 mm behind R5, leaving 5.6 mm to
 * R6, where it clears both glass faces. Its radius follows from f/1 paraxially (34.04 mm). Because the design has
 * strong spherical aberration of the pupil, the real axial ray that grazes this stop enters at a height of 44.6 mm,
 * so the model passes about f/1.09 by real rays, not the full 48.5 mm front aperture. Also inferred: the 42 mm
 * semi-diameters of surfaces 4 to 12, which clear that axial beam and the chief ray of the patent's 14 degree
 * semi-field but are not figure readings; and the 60.5498 mm back focus, the computed paraxial image distance for an
 * object at infinity. The patent prints no back focus and no close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "kapella-warmisham-us1926569-fig1-patent-reference",
  maker: "Cooke",
  name: "WARMISHAM f/1 PATENT REFERENCE",
  subtitle: "1933 FIGURE 1; PATENT ONLY",
  visible: false,
  catalog: {
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "LITERAL FRONT APERTURE; ESTIMATED RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      design: 97.06,
    },
    fNumber: {
      design: 1,
    },
  },
  source: {
    patentNumber: "US 1,926,569 A",
    example: {
      label: "Figure 1",
      id: "1",
    },
    patentYear: 1933,
    authors: ["Arthur Warmisham"],
    assignees: ["Kapella Limited"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex",
      focalLengthMm: 81.79,
      nd: 1.6234,
      vd: 56.3,
      indexReference: "D",
      role: "Thick biconvex crown of the cemented front member",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Negative meniscus",
      focalLengthMm: -252.49,
      nd: 1.529,
      vd: 51.6,
      indexReference: "D",
      role: "Low-index negative meniscus cemented behind L1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave",
      focalLengthMm: -119.88,
      nd: 1.694,
      vd: 30.7,
      indexReference: "D",
      role: "First biconcave flint, ahead of the diaphragm",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave",
      focalLengthMm: -72.79,
      nd: 1.694,
      vd: 30.7,
      indexReference: "D",
      role: "Second biconcave flint, behind the diaphragm",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex",
      focalLengthMm: 102.63,
      nd: 1.6437,
      vd: 48.3,
      indexReference: "D",
      role: "Single biconvex fourth member",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconvex",
      focalLengthMm: 69.75,
      nd: 1.6234,
      vd: 56.3,
      indexReference: "D",
      role: "Thick biconvex crown of the cemented rear member",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Negative meniscus",
      focalLengthMm: -199.27,
      nd: 1.529,
      vd: 51.6,
      indexReference: "D",
      role: "Low-index negative meniscus cemented behind L6",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 84.3,
      d: 30.5,
      sd: 48.5,
      medium: 1,
    },
    {
      label: "2",
      R: -111.1,
      d: 3,
      sd: 48.5,
      medium: 2,
    },
    {
      label: "3",
      R: -666.6,
      d: 15,
      sd: 48.5,
    },
    {
      label: "4",
      R: -95.24,
      d: 3,
      sd: 42,
      medium: 3,
    },
    {
      label: "5",
      R: 666.6,
      d: 1.9,
      sd: 42,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.6,
    },
    {
      label: "6",
      R: -175.5,
      d: 3,
      sd: 42,
      medium: 4,
    },
    {
      label: "7",
      R: 71.43,
      d: 15,
      sd: 42,
    },
    {
      label: "8",
      R: 833.3,
      d: 22,
      sd: 42,
      medium: 5,
    },
    {
      label: "9",
      R: -71.01,
      d: 0.2,
      sd: 42,
    },
    {
      label: "10",
      R: 100,
      d: 47,
      sd: 42,
      medium: 6,
    },
    {
      label: "11",
      R: -63.05,
      d: 4.9,
      sd: 42,
      medium: 7,
    },
    {
      label: "12",
      R: -161.1,
      d: 60.5498,
      sd: 42,
    },
  ],
  aperture: {
    nominalFNumber: 1,
    fStops: [1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only patent Fig1; literal nD/V and 97mm front aperture at 100x scale. Computed BFD; estimated rims; no production identity.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
