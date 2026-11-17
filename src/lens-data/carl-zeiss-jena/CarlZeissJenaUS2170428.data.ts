import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,170,428, sole example (Robert Richter, assignor to the firm of Carl Zeiss, Jena). Filed 24 May 1938 with
 * German priority of 31 May 1937, granted 22 August 1939. The patent describes the example as a projection objective
 * of maximum relative aperture 1:1.9 and an angular field of up to about 40°. Four air-spaced single lenses: three
 * positive (L1, L2, L4) and one negative (L3); nothing is cemented. The table is printed on the drawing sheet and
 * repeated in the specification; both copies agree.
 *
 * SCALE: none. The patent states that its radii, thicknesses and air spaces refer to a focal length of 100 mm; they are
 * used as printed. The computed paraxial EFL is 99.78 mm (−0.22 %), within the rounding of the printed radii (r2, r5
 * and r7 are printed to whole millimetres). The surfaces are numbered in the patent's photographing order, with the
 * projection screen on the object side; the model keeps that order with the object at infinity.
 *
 * GLASS: the patent prints nd and ν for each lens. The flint L3, 1.7174 / 29.5, matches Schott SF1 at the helium d
 * line (nd 1.71736; the sodium D value would be 1.71715), so the indices are read as d-line values. The crown
 * 1.6138 / 56.3 has no catalogue match; all lenses are traced from their printed nd and ν.
 *
 * INFERRED: the patent prints no diaphragm, clear diameters or back focus.
 * - STOP: placed midway in the 19 mm air space between L3 and L4 (9.5 mm behind r6), the usual iris position for
 *   this positive–positive–negative–positive form.
 * - SEMI-DIAMETERS: estimated, not measured from the figure. L2's rear face and L3 are held to 19 mm so that the
 *   L2/L3 rims stay clear of each other across the 4.5 mm air space. The aperture audit finds no rim limit at f/1.9.
 * - IMAGE PLANE: the computed paraxial back focus, 63.2102 mm behind r8.
 *
 * FOCUS: only the infinity state is modelled; closeFocusM = 1e15 marks focus as not modelled.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f19-us2170428",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/1.9 (US 2,170,428 Design)",
  subtitle: "1939 FOUR-LENS PROJECTION OBJECTIVE; PATENT ONLY",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT REFERENCE; RETAIL IDENTITY UNPROVED",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 99.78,
    },
    fNumber: {
      design: 1.9,
    },
  },
  source: {
    patentNumber: "US 2,170,428 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1939,
    authors: ["Robert Richter"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex",
      nd: 1.6138,
      vd: 56.3,
      indexReference: "d",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.6138,
      vd: 56.3,
      indexReference: "d",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave",
      nd: 1.7174,
      vd: 29.5,
      indexReference: "d",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex",
      nd: 1.6138,
      vd: 56.3,
      indexReference: "d",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 85.4,
      d: 7.7,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -500,
      d: 0.5,
      sd: 28,
    },
    {
      label: "3",
      R: 44.5,
      d: 19,
      sd: 28,
      medium: 2,
    },
    {
      label: "4",
      R: 70,
      d: 4.5,
      sd: 19,
    },
    {
      label: "5",
      R: -135,
      d: 2,
      sd: 19,
      medium: 3,
    },
    {
      label: "6",
      R: 34.3,
      d: 9.5,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.5,
    },
    {
      label: "7",
      R: 146,
      d: 8,
      sd: 22,
      medium: 4,
    },
    {
      label: "8",
      R: -46.8,
      d: 63.2102,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 1.9,
    fStops: [1.9, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity focus only; the patent gives no focusing data. The image plane is the computed paraxial back focus, and the iris is an estimated position midway in the air space between L3 and L4.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
