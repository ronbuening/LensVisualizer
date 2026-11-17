import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,620,337 A (Charles W. Frederick and Fred E. Altman, Eastman Kodak Company; filed 1923, granted 1927),
 * the patent's only numerical example: a four-element, air-spaced f/2 projection objective with the printed focal
 * length of 100. Kodak engraved this patent number on its Kodak Anastigmat f/1.9 25 mm cine lens and on a Kodascope
 * projection lens; no production prescription is published.
 *
 * Printed and transcribed as published: radii R1-R8 (signs from the drawing-sheet table; the specification table
 * prints magnitudes only), thicknesses T1-T4, air spaces S1-S3, and the D-line index and dispersive ratio of each
 * glass. The printed G′-line indices (1.62448 crown, 1.63920 flint) are not stored, and neither glass matches a
 * catalogue row.
 *
 * Inferred: the stop, placed at the middle of the 18.0 central space (neither the figure nor the text shows one);
 * every clear semi-diameter; and the image plane, which is the computed paraxial back focus at the D line.
 * The patent states that each negative lens touches its positive neighbour at the edge, so the S1 air space closes
 * near 23.9 mm height; the cross-gap limit is relaxed slightly so R2/R3 pass the full f/2 axial beam.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-anastigmat-100mm-f2-us1620337",
  maker: "Kodak",
  name: "KODAK ANASTIGMAT 100mm f/2 (US 1,620,337 Design)",
  subtitle: "US 1,620,337 A, sole example — Kodak Anastigmat f/1.9 and Kodascope lenses",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/2",
      "PROJECTION OBJECTIVE",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100.08,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 1,620,337 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1927,
    authors: ["Charles W. Frederick", "Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      glass: "Unmatched (barium crown, nD 1.61088 / V 57.2)",
      role: "Front positive collector of the front component",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave Negative",
      nd: 1.6168,
      vd: 36.4,
      indexReference: "D",
      glass: "Unmatched (dense flint, nD 1.61680 / V 36.4)",
      role: "Achromatising flint of the front component; touches L1 at the rim",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Negative Meniscus",
      nd: 1.6168,
      vd: 36.4,
      indexReference: "D",
      glass: "Unmatched (dense flint, nD 1.61680 / V 36.4)",
      role: "Achromatising flint of the rear component, concave toward L4; touches L4 at the rim",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex Positive",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      glass: "Unmatched (barium crown, nD 1.61088 / V 57.2)",
      role: "Rear positive collector, identical to L1 and reversed",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64,
      d: 12,
      sd: 26,
      medium: 1,
    },
    {
      label: "2",
      R: -126,
      d: 1.5,
      sd: 22.9,
    },
    {
      label: "3",
      R: -77.2,
      d: 4.1,
      sd: 22.8,
      medium: 2,
    },
    {
      label: "4",
      R: 684.5,
      d: 9,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 9,
    },
    {
      label: "5",
      R: 222.2,
      d: 4.1,
      sd: 23,
      medium: 3,
    },
    {
      label: "6",
      R: 52.4,
      d: 3,
      sd: 21,
    },
    {
      label: "7",
      R: 126,
      d: 12,
      sd: 21,
      medium: 4,
    },
    {
      label: "8",
      R: -64,
      d: 74.33910968551392,
      sd: 26,
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
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
  checks: {
    gapSagFrac: 0.91,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
