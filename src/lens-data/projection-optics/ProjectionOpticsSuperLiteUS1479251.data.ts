import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 1,479,251 (William H. Repp, filed July 31, 1922, granted January 1, 1924), "Projecting lens": the patent's sole
 * numerical example, E.F. 100 mm, F/2.2. Radii, thicknesses, the 94.54 mm separation, nD and V are copied from the
 * typeset table on printed page 3 in millimetres, unscaled. The patent prints the signs of the radii.
 *
 * The drawing sheet repeats the example in hand lettering with two errors: it labels the front radius "88.57" (table
 * +82.57) and the flint V "30.4" (table 36.4). The table values are used. They give the printed 39.82 mm back focus
 * (88.57 would give 44.05 mm) and near-achromatic doublets (30.4 would overcorrect the colour about fourfold).
 *
 * Orientation: the patent projects from the film (right) to the screen (left). The model traces from the screen side
 * at infinity toward the film, so the convex faces lead and the plano faces point at the film, as drawn.
 *
 * Inferred values: the aperture stop sits at the front vertex plane with the printed 45.4 mm free aperture of the front
 * doublet (the patent draws no iris). The rear-doublet clear radii (17.5 mm, 17 mm on the plano face) are estimates
 * that clear a 3° field; the drawing's rear/front height ratio (about 0.78) suggests roughly 17.7 mm. The last gap is
 * the computed paraxial back focus, 39.82254 mm; the patent prints 39.82 mm and says the film sits slightly farther
 * away at a finite projection throw.
 */
const LENS_DATA = {
  schema: 2,
  key: "projection-optics-super-lite-100mm-f22-us1479251",
  maker: "Projection Optics",
  name: "PROJECTION OPTICS SUPER-LITE 100mm f/2.2 (US 1,479,251 Design)",
  subtitle: "US1479251A — PATENT-ONLY; RECIPROCAL INFINITY REFERENCE",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 2 GROUPS",
      "PATENT-ONLY",
      "PROJECTION DESIGN; INFINITY REFERENCE",
    ],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 2.2 },
  },
  source: {
    patentNumber: "US 1,479,251 A",
    example: { label: "Sole example", id: null },
    patentYear: 1924,
    authors: ["William H. Repp"],
    assignees: [],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front borosilicate crown",
      type: "Biconvex Positive",
      nd: 1.516,
      vd: 63.8,
      indexReference: "D",
      glass: "Borosilicate crown (source constants)",
      cemented: "A",
    },
    {
      id: 2,
      name: "L2",
      label: "Front dense flint",
      type: "Plano-Concave Negative",
      nd: 1.6182,
      vd: 36.4,
      indexReference: "D",
      glass: "Dense flint (source constants)",
      cemented: "A",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear borosilicate crown",
      type: "Biconvex Positive",
      nd: 1.516,
      vd: 63.8,
      indexReference: "D",
      glass: "Borosilicate crown (source constants)",
      cemented: "B",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear dense flint",
      type: "Plano-Concave Negative",
      nd: 1.6182,
      vd: 36.4,
      indexReference: "D",
      glass: "Dense flint (source constants)",
      cemented: "B",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 0 },
    { label: "1", R: 82.57, d: 8.54, sd: 22.7, medium: 1 },
    { label: "2", R: -82.57, d: 2.85, sd: 22.7, medium: 2 },
    { label: "3", R: "flat", d: 94.54, sd: 22.7 },
    { label: "4", R: 41.28, d: 8.54, sd: 17.5, medium: 3 },
    { label: "5", R: -41.28, d: 2.85, sd: 17.5, medium: 4 },
    { label: "6", R: "flat", d: 39.82254, sd: 17 },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Fixed at infinity on the screen side; the finite projection throw to the film is not modelled.",
  },
  aperture: {
    nominalFNumber: 2.2026,
    fStops: [2.2026],
    maxFNumber: 2.2026,
  },
  projection: { kind: "rectilinear", fullFieldDeg: 6, maxTraceFieldDeg: 3 },
  groups: [
    { text: "A", fromSurface: "1", toSurface: "3" },
    { text: "B", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "A", fromSurface: "1", toSurface: "3" },
    { text: "B", fromSurface: "4", toSurface: "6" },
  ],
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;
export default LENS_DATA;
