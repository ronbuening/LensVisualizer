import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Willy Merté / Carl Zeiss double objective, US 1,792,917 (granted 17 February 1931), sole numerical example.
 *
 * Source: the patent's table and drawing sheet, which agree. All ten radii with their printed signs, the ten
 * thicknesses and distances, and the three glasses (nD and ν) are stored exactly as printed, at the patent's own
 * scale of "focal length 100" units, read here as millimetres. No scale factor is applied. The printed table
 * computes to a focal length of 100.15.
 *
 * Printed: radii, thicknesses, air spaces, the diaphragm position (b1 = 2.90 behind r5, b2 = 2.80 before r6),
 * nD and ν, relative aperture 1:4.5 and a 65° image field.
 *
 * Inferred: the back focus (computed paraxial image distance, 86.7413; the patent prints none), the diaphragm
 * opening (from f/4.5) and every semi-diameter (the patent prints no diameters). The inner meniscus rims are the
 * smallest that pass the f/4.5 axial beam. The 0.75 air space between r3 and r4 closes near a height of 10, so
 * those two rims sit just inside that limit and the gap check is relaxed to 0.96 to admit them.
 *
 * The design is plausibly the basis of the Zeiss Orthometar f/4.5, but no production prescription has been
 * compared, so the file is kept as a patent reference.
 */
const LENS_DATA = {
  schema: 2,
  key: "zeiss-merte-us1792917-patent-reference",
  maker: "Carl Zeiss Jena",
  name: "MERTE DOUBLE OBJECTIVE PATENT REFERENCE",
  subtitle: "1931 100 mm f/4.5; PATENT ONLY",
  visible: false,
  checks: { gapSagFrac: 0.96 },
  catalog: {
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "LITERAL STOP POSITION; ESTIMATED RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100.15,
    },
    fNumber: {
      design: 4.5,
    },
  },
  source: {
    patentNumber: "US 1,792,917 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1931,
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex",
      nd: 1.61087,
      vd: 55.8,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave",
      nd: 1.53994,
      vd: 47.4,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Meniscus",
      nd: 1.56064,
      vd: 61.1,
      indexReference: "D",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Meniscus",
      nd: 1.56064,
      vd: 61.1,
      indexReference: "D",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconcave",
      nd: 1.53994,
      vd: 47.4,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconvex",
      nd: 1.61087,
      vd: 55.8,
      indexReference: "D",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 25.9,
      d: 5.12,
      sd: 12,
      medium: 1,
    },
    {
      label: "2",
      R: -96.1,
      d: 2.31,
      sd: 12,
      medium: 2,
    },
    {
      label: "3",
      R: 18.41,
      d: 0.75,
      sd: 9.8,
    },
    {
      label: "4",
      R: 23.78,
      d: 3.48,
      sd: 9.8,
      medium: 3,
    },
    {
      label: "5",
      R: 35.54,
      d: 2.9,
      sd: 9.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.8,
    },
    {
      label: "6",
      R: -33.12,
      d: 3.96,
      sd: 9.2,
      medium: 4,
    },
    {
      label: "7",
      R: -22.74,
      d: 1.57,
      sd: 9.4,
    },
    {
      label: "8",
      R: -18.14,
      d: 1.88,
      sd: 10,
      medium: 5,
    },
    {
      label: "9",
      R: 77.38,
      d: 5.56,
      sd: 12,
      medium: 6,
    },
    {
      label: "10",
      R: -25.37,
      d: 86.7413,
      sd: 12,
    },
  ],
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only literal 1931 patent. Source nD and V; calculated image plane. Literal b1/b2 stop position; estimated rims, stop diameter inferred from source f/4.5. Not factory identity.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
