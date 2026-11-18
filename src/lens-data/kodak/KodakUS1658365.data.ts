import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,658,365 (Fred E. Altman, Eastman Kodak Company, granted February 7, 1928), the patent's sole numerical
 * example: an air-spaced triplet for folding hand cameras, working at f/7.5 to f/8.
 *
 * Source and scale: the typeset table on specification page 1 gives radii, thicknesses and air spaces in decimals
 * of the focal length (focal length = 1.000). Every radius and axial distance is multiplied by 100 here, so the
 * model is in millimetres at a nominal 100 mm focal length. The table prints magnitudes only; the signs of the
 * radii follow the drawing and are confirmed by the printed element focal lengths.
 *
 * Source discrepancy: the lettered table on the drawing sheet shows R1 = 2.39 and omits the air space S2. The
 * typeset table prints R1 = .239 and S2 = .066, and the text confirms both (greatest curvature on a radius of
 * .239; overall thickness .148). This file follows the typeset table.
 *
 * Indices: the patent prints the D index, the G' index and the dispersive ratio for each glass. The model uses the
 * D index and the printed ratio. The patent's focal lengths are G'-line values: the prescription computes to
 * 99.98 mm at G' and 99.75 mm at D. The G' indices (434.0 nm) are not stored, since the engine's blue line is g
 * (435.8 nm); its inferred G' - D differences, 0.0136 and 0.0176, match the printed 0.013 and 0.018 within rounding.
 *
 * Inferred, not printed: the stop position (the midpoint of the 6.6 mm rear air space, which the patent says holds
 * the diaphragm and shutter), all clear semi-diameters (a uniform 8 mm) and the back focus (the computed paraxial
 * D-line value).
 *
 * Semi-diameters: the drawing is close to scale along the axis (about 36.5 px/mm at 300 dpi; the 14.8 mm vertex
 * length and each thickness and air space agree within about 10 %). It draws all three elements square-cut at one
 * height, about 6.2 mm at the model's scale, which is no more than the f/8 axial beam at the front surface
 * (6.23 mm). The uniform 8 mm is kept: rims at the drawn height would cut the oblique light by up to 44 points
 * near 29 degrees, and even a uniform 7.8 mm costs 4.6 points at 32 degrees.
 *
 * Field: the patent states that the objective fully covers 32 degrees from the axis at F/7.5 to F/8. The image
 * circle, 124.7 mm, is 2 x 99.75 mm x tan 32 degrees. With these rims the chief ray passes to 42 degrees; geometric
 * transmission is about 83 % at 26 degrees and 64 % at 32 degrees, limited by the front element.
 *
 * Mount: the patent says each objective is individually fitted to the folding hand camera it is used on, on a fixed
 * lens board, so the catalog lists it as a fixed-lens camera objective. No film format is set: no source ties this
 * prescription at 100 mm to a film size.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f8-us1658365",
  maker: "Kodak",
  name: "KODAK 100mm f/8 (US 1,658,365 Design)",
  subtitle: "US 1,658,365 A, sole example — folding-camera triplet",
  visible: true,
  catalog: {
    specs: ["3 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/8", "AIR-SPACED TRIPLET"],
    elementCount: 3,
    groupCount: 3,
    lensMounts: ["fixed-lens-camera"],
    focalLengthMm: { design: 99.75 },
    fNumber: { design: 8 },
    imageCircleMm: 124.7,
  },
  source: {
    patentNumber: "US 1,658,365 A",
    example: { label: "Sole example", id: null },
    patentYear: 1928,
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 35.04,
      glass: "Unmatched (barium crown, nD 1.611 / V 57.2)",
      role: "Front collective element; carries the strongest curve of the lens.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.575,
      vd: 42.7,
      indexReference: "D",
      focalLengthMm: -29.33,
      glass: "Unmatched (light flint, nD 1.575 / V 42.7)",
      role: "Dispersive element closely spaced behind the front element, ahead of the diaphragm.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 76.31,
      glass: "Unmatched (barium crown, nD 1.611 / V 57.2)",
      role: "Rear collective meniscus behind the diaphragm, convex toward the image.",
    },
  ],
  surfaces: [
    { label: "1", R: 23.9, d: 2.6, sd: 8, medium: 1 },
    { label: "2", R: -197, d: 1.8, sd: 8 },
    { label: "3", R: -54.1, d: 1.2, sd: 8, medium: 2 },
    { label: "4", R: 24.7, d: 3.3, sd: 8 },
    { label: "STO", R: "flat", d: 3.3 },
    { label: "5", R: -146.4, d: 2.6, sd: 8, medium: 3 },
    { label: "6", R: -35.6, d: 91.2325, sd: 8 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: { nominalFNumber: 8, maxFNumber: 22, fStops: [8, 11, 16, 22] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 32 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
