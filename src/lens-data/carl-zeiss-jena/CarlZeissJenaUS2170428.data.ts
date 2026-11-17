import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,170,428, sole example (Robert Richter, assignor to the firm of Carl Zeiss, Jena). Filed 24 May 1938 with
 * German priority of 31 May 1937, granted 22 August 1939. The patent describes the example as a projection objective
 * of maximum relative aperture 1:1.9 and an angular field of up to about 40°. Four air-spaced single lenses in the
 * Ernostar-type positive–positive–negative–positive arrangement: three positive (L1, L2, L4) and one negative (L3);
 * nothing is cemented. The table is printed on the drawing sheet and repeated in the specification; both copies agree.
 * No production lens is documented for this example.
 *
 * SCALE: none. The patent states that its radii, thicknesses and air spaces refer to a focal length of 100 mm; they are
 * used as printed. The computed paraxial EFL is 99.78 mm (−0.22 %), within the rounding of the printed radii (r2, r5
 * and r7 are printed to whole millimetres). The surfaces are numbered in the patent's photographing order, with the
 * projection screen on the object side; the model keeps that order with the object at infinity.
 *
 * GLASS: the patent prints nd and ν for each lens. The flint L3, 1.7174 / 29.5, matches Schott SF1 at the helium d
 * line (nd 1.71736, νd 29.51; the sodium D value would be 1.71715), so the indices are read as d-line values. The
 * crown of L1, L2 and L4, 1.6138 / 56.3, matches the modern Hoya BACD6 row (nd 1.61375, νd 56.38), a dense barium
 * crown of the same 614/564 class; it is a catalogue equivalent, not the historical melt. Both labels supply the
 * dispersion curve; the trace keeps the printed nd.
 *
 * INFERRED: the patent prints no diaphragm, clear diameters or back focus.
 * - STOP: placed midway in the 19 mm air space between L3 and L4 (9.5 mm behind r6), the usual iris position for
 *   this positive–positive–negative–positive form.
 * - SEMI-DIAMETERS: from the patent drawing, which is to scale (its vertex spacings match the table within about 5 %,
 *   21.2 px/mm at 600 dpi). It draws L1 at 26.8, L2 at 25.4 (front) and 20.7 (rear, after a bevel), L3 at 19.8 and
 *   L4 at 21.5 mm. L2 takes the drawn 25.4 / 20.7; L1 (28), L3 (19) and L4 (22) stay within 5 % of the drawing. L3 is
 *   held at 19 so that its front rim stays clear of L2's rear face across the 4.5 mm air space. No rim cuts the f/1.9
 *   axial beam.
 * - IMAGE PLANE: the computed paraxial back focus, 63.2102 mm behind r8.
 *
 * FOCUS: only the infinity state is modelled; closeFocusM = 1e15 marks focus as not modelled.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f19-us2170428",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/1.9 (US 2,170,428 Design)",
  subtitle: "US 2,170,428 A, sole example — Ernostar-type projection objective",
  visible: true,
  catalog: {
    lensMounts: ["projection-lens"],
    specs: ["4 ELEMENTS / 4 GROUPS", "DESIGN F/1.9", "ALL SPHERICAL", "PROJECTION OBJECTIVE"],
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
      type: "Biconvex Positive",
      nd: 1.6138,
      vd: 56.3,
      glass: "BACD6 (Hoya)",
      indexReference: "d",
      role: "Front positive lens with a strongly curved front face and a nearly flat rear face.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.6138,
      vd: 56.3,
      glass: "BACD6 (Hoya)",
      indexReference: "d",
      role: "Thick positive meniscus, convex to the front; with L1 it forms the strong positive front pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave Negative",
      nd: 1.7174,
      vd: 29.5,
      glass: "SF1 (Schott)",
      indexReference: "d",
      role: "The only negative lens and the only flint; it almost cancels the front pair's power and corrects colour.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex Positive",
      nd: 1.6138,
      vd: 56.3,
      glass: "BACD6 (Hoya)",
      indexReference: "d",
      role: "Rear positive collector behind the iris; it supplies nearly all of the system's power.",
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
      sd: 25.4,
      medium: 2,
    },
    {
      label: "4",
      R: 70,
      d: 4.5,
      sd: 20.7,
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
    fStops: [1.9],
    maxFNumber: 1.9,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
