import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,892,162, sole numerical example (drawing sheet and specification p. 2, which print the same table). Robert
 * Richter, assignor to the firm Carl Zeiss, Jena. Filed 12 May 1931 with German priority of 27 May 1930; granted
 * 27 December 1932. The patent states a maximum aperture of 1:4.5 and a focal length of 100 mm for a hand-camera
 * objective that covers a picture diagonal about equal to the focal length. Three air-spaced singlets: a plano-convex
 * front lens, a biconcave middle lens and a biconvex rear lens.
 *
 * SCALE: none. Radii, thicknesses and spacings are as printed in millimetres, with the printed signs; the paraxial EFL
 * of the printed table is 100.0004 mm.
 *
 * GLASS: the patent prints nD and ν for each lens. They are stored as printed with indexReference "D" (sodium D line).
 * The patent names no glass types, and no catalog label is assigned.
 *
 * STOP (inferred): neither the drawing nor the text shows a diaphragm. The iris is placed midway in the 10 mm air space
 * between the middle and rear lenses, 5 mm behind r4, where the between-lens shutter of a hand camera would sit. Its
 * radius is derived from the stated f/4.5.
 *
 * SEMI-DIAMETERS: half the printed lens diameters (D_I = 23.4, D_II = 20.8, D_III = 20.0 mm), on both faces of each
 * lens. The f/4.5 axial beam clears every rim.
 *
 * IMAGE PLANE (computed): the patent prints no back focus. The last spacing is the paraxial back focus of the printed
 * table, 82.234 mm.
 *
 * FOCUS: the patent gives only the infinity state; closeFocusM = 1e15 marks focus as not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-triotar-100mm-f45-us1892162",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TRIOTAR 100mm f/4.5 (US 1,892,162 Design)",
  subtitle: "1932 100 mm f/4.5; PATENT ONLY",
  visible: true,
  catalog: {
    specs: [
      "3 ELEMENTS / 3 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "SOURCE LENS DIAMETERS; ESTIMATED STOP",
      "INFINITY ONLY",
    ],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 4.5,
    },
  },
  source: {
    patentNumber: "US 1,892,162 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1932,
    authors: ["Robert Richter"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "source-table",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Plano-convex",
      nd: 1.6227,
      vd: 56.9,
      indexReference: "D",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave",
      nd: 1.6128,
      vd: 37.0,
      indexReference: "D",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex",
      nd: 1.6423,
      vd: 48.0,
      indexReference: "D",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 23.25,
      d: 4.5,
      sd: 11.7,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 3.7,
      sd: 11.7,
    },
    {
      label: "3",
      R: -78.6,
      d: 1.3,
      sd: 10.4,
      medium: 2,
    },
    {
      label: "4",
      R: 22.85,
      d: 5,
      sd: 10.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 5,
    },
    {
      label: "5",
      R: 205,
      d: 2.5,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -59.96,
      d: 82.23402737346156,
      sd: 10,
    },
  ],
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only; literal nD/V, signed radii, source lens diameters retained; calculated paraxial BFD; estimated iris midway in final air gap. No production identity.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
