import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,019,985 A (Horace William Lee, assigned to Kapella Limited, granted 1935), the patent's only numerical
 * example and its single drawing: an f/1.4 objective of seven spherical elements in five groups, described as a lens
 * "of one inch focal length".
 *
 * Every printed radius, thickness and separation is in inches and is multiplied by 25.4, with no further scaling or
 * fitting. Signs follow the printed "Plus" / "Minus" (plus when convex to the incident light). The printed table
 * traces to a paraxial focal length of 26.31 mm, 3.6 % longer than the nominal one inch (25.4 mm). The radii are
 * printed to only one to three figures (0.9, 6.1, 0.44), and a scan of 393 single-value misreadings (one digit, a
 * sign or a transposition in one radius or thickness) found no change that the page supports, so the difference is
 * taken as rounding in the table and is kept. Indices and V values are the patent's sodium D-line figures.
 *
 * Inferred, not printed: the iris, placed at the middle of the 0.195 inch (4.953 mm) central air space, where the
 * drawing shows no diaphragm; the clear semi-diameters; and the 15.4249 mm back focus, which is the computed
 * paraxial image distance for an object at infinity. The patent prints no back focus, field angle or image size.
 *
 * The semi-diameters are set by the on-axis beam where the printed geometry allows it. Four of them are capped by
 * that geometry: the front cemented pair's first two surfaces at 8.24 mm, where its biconvex element runs out of
 * edge thickness, and the two concave faces either side of the iris at 5.65 mm, where their rims leave only a
 * tenth of the central air space between them and the front one stops 0.05 mm short of the iris plane. The model
 * therefore passes a real on-axis beam of about f/1.52 rather than the full f/1.4.
 */
const LENS_DATA = {
  schema: 2,
  key: "kapella-lee-us2019985-patent-reference",
  maker: "Cooke",
  name: "LEE LARGE-APERTURE PATENT REFERENCE",
  subtitle: "1935 1 INCH f/1.4; PATENT ONLY",
  visible: false,
  catalog: {
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "ESTIMATED CENTRAL STOP AND RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      design: 26.31,
    },
    fNumber: {
      design: 1.4,
    },
  },
  source: {
    patentNumber: "US 2,019,985 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1935,
    authors: ["Horace William Lee"],
    assignees: ["Kapella Limited"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      focalLengthMm: 43.24,
      nd: 1.6135,
      vd: 59.4,
      indexReference: "D",
      role: "Front collective meniscus",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconvex",
      focalLengthMm: 14.85,
      nd: 1.6135,
      vd: 59.4,
      indexReference: "D",
      role: "Biconvex crown of the front cemented dispersive meniscus",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave",
      focalLengthMm: -11.31,
      nd: 1.579,
      vd: 40.4,
      indexReference: "D",
      role: "Biconcave flint of the front cemented dispersive meniscus",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave",
      focalLengthMm: -14.03,
      nd: 1.579,
      vd: 40.4,
      indexReference: "D",
      role: "Biconcave flint of the rear cemented dispersive meniscus",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex",
      focalLengthMm: 18.49,
      nd: 1.6437,
      vd: 48.3,
      indexReference: "D",
      role: "Biconvex crown of the rear cemented dispersive meniscus",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Plano-convex",
      focalLengthMm: 46.37,
      nd: 1.6135,
      vd: 59.4,
      indexReference: "D",
      role: "First element of the split rear collective member",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Plano-convex",
      focalLengthMm: 72.04,
      nd: 1.6135,
      vd: 59.4,
      indexReference: "D",
      role: "Second element of the split rear collective member",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.86,
      d: 3.81,
      sd: 10,
      medium: 1,
    },
    {
      label: "2",
      R: 154.94,
      d: 0.127,
      sd: 10,
    },
    {
      label: "3",
      R: 11.176,
      d: 4.445,
      sd: 8.24,
      medium: 2,
    },
    {
      label: "4",
      R: -41.91,
      d: 0.508,
      sd: 8.24,
      medium: 3,
    },
    {
      label: "5",
      R: 7.7978,
      d: 2.4765,
      sd: 5.65,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.4765,
    },
    {
      label: "6",
      R: -8.89,
      d: 0.508,
      sd: 5.65,
      medium: 4,
    },
    {
      label: "7",
      R: 96.52,
      d: 5.334,
      sd: 8,
      medium: 5,
    },
    {
      label: "8",
      R: -13.2842,
      d: 0.127,
      sd: 9,
    },
    {
      label: "9",
      R: "flat",
      d: 2.032,
      sd: 9,
      medium: 6,
    },
    {
      label: "10",
      R: -28.448,
      d: 0.127,
      sd: 9,
    },
    {
      label: "11",
      R: 44.196,
      d: 1.524,
      sd: 9,
      medium: 7,
    },
    {
      label: "12",
      R: "flat",
      d: 15.4249,
      sd: 9,
    },
  ],
  aperture: {
    nominalFNumber: 1.4,
    fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity only: the patent gives no focusing data. Printed inch dimensions are multiplied by 25.4; indices and V values are the patent's sodium D-line figures. The printed table computes to a 26.31 mm focal length against the patent's nominal one inch (25.4 mm) and is not rescaled. The iris position (middle of the 0.195 inch central air space) and the clear rims are inferred, and the patent states no field of view.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
