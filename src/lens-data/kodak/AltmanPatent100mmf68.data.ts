import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Fred E. Altman, US 1,880,393 A (Eastman Kodak Company, granted October 4, 1932): the patent's sole numerical
 * example, a three-element air-spaced f/6.8 objective normalized to a focal length of 100.00. The patent's own
 * dimensions are used as millimetres; nothing is scaled. The patent prints radii as magnitudes; their signs come from
 * the drawing.
 *
 * The patent prints the table twice, and the two printings differ in two values. The specification table (p. 2) gives
 * S1 = 1.98 and lens 2 D = 1.573; the drawing-sheet table (p. 1) gives S1 = 1.89 and D = 1.575. This file keeps the
 * specification's S1 = 1.98: the patent's element focal lengths are G′-line values, and at the printed G′ indices the
 * system focal length is 100.00 with 1.98 against 100.46 with 1.89. It carries the drawing sheet's D = 1.575 for
 * lens 2 (source.errata): with the printed 1.573 the D-line focal length is 98.90 and the D and G′ foci lie 1.13 apart,
 * although the text calls the objective corrected for chromatic aberration; 1.575 gives 99.81 and 0.22, and it is the
 * value that fits the printed G′ index 1.593 and ν 41.4 of a light flint.
 *
 * Not printed by the patent and inferred here: the diaphragm, placed at the middle of the 6.80 air space between
 * lenses 2 and 3; the clear semi-diameters; and the image plane, which is the computed D-line paraxial back focus.
 * The patent gives no field angle and no close-focus data; the model is infinity-only.
 */
const LENS_DATA = {
  schema: 2,
  key: "altman-patent-100mm-f68",
  maker: "Kodak",
  name: "ALTMAN PATENT 100mm f/6.8 Triplet Reference",
  subtitle: "US1880393A — SPECIFICATION S1=1.98; PATENT-ONLY",
  visible: false,
  catalog: {
    specs: ["3 ELEMENTS / 3 GROUPS", "PATENT-ONLY", "SPECIFICATION-TABLE GAP"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 99.81 },
    fNumber: { marketing: 6.8, design: 6.8 },
  },
  source: {
    patentNumber: "US 1,880,393 A",
    example: { label: "Sole example", id: null },
    patentYear: 1932,
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
    errata: [
      {
        status: "corrected",
        surface: "3",
        field: "nd",
        printed: 1.573,
        applied: 1.575,
        evidence: ["source-summary", "sibling-example"],
        note: "The specification table (p. 2) prints lens 2 D = 1.573; the patent's drawing-sheet table of the same example (p. 1) prints 1.575, its only other difference being S1. With 1.573 the D-line focal length is 98.90 against the stated 100.00, and the D and G′ foci lie 1.13 apart although the text calls the objective corrected for chromatic aberration; 1.575 gives 99.81 and 0.22. With the printed G′ 1.593 and ν 41.4, 1.575 gives (nG′ − nD)/(nF − nC) = 1.30, as for a light flint, against 1.45 with 1.573.",
      },
      {
        status: "unresolved",
        note: "The specification table prints S1 = 1.98 and the drawing-sheet table 1.89. The file keeps 1.98, which gives the stated focal length 100.00 at the printed G′ indices (1.89 gives 100.46). Neither value reproduces the printed front-component focal length −529.72 (−545.90 with 1.98 and −520.07 with 1.89 at G′).",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front barium crown",
      type: "Biconvex Positive",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      glass: "Barium crown (source constants)",
    },
    {
      id: 2,
      name: "L2",
      label: "Middle flint",
      type: "Biconcave Negative",
      nd: 1.575,
      vd: 41.4,
      indexReference: "D",
      glass: "Flint (source constants)",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear low-index crown",
      type: "Positive Meniscus",
      nd: 1.523,
      vd: 59,
      indexReference: "D",
      glass: "Low-index crown (source constants)",
    },
  ],
  surfaces: [
    { label: "1", R: 24.06, d: 2.96, sd: 9.5, medium: 1 },
    { label: "2", R: -198.1, d: 1.98, sd: 9.5 },
    { label: "3", R: -54.52, d: 1.18, sd: 9, medium: 2 },
    { label: "4", R: 24.85, d: 3.4, sd: 9 },
    { label: "STO", R: "flat", d: 3.4 },
    { label: "5", R: -183.8, d: 2.66, sd: 10, medium: 3 },
    { label: "6", R: -33.36, d: 89.91640595715722, sd: 10 },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only diagnostic. Patent front-cell focus mentioned, but finite schedule not supplied or modeled.",
  },
  aperture: { nominalFNumber: 6.8, fStops: [6.8, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", fullFieldDeg: 6, maxTraceFieldDeg: 3 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "2" },
    { text: "NEGATIVE", fromSurface: "3", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "6" },
  ],
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;
export default LENS_DATA;
