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
 * 99.98 mm at G' and 99.75 mm at D.
 *
 * Inferred, not printed: the stop position (the midpoint of the 6.6 mm rear air space, which the patent says holds
 * the diaphragm and shutter), all clear semi-diameters (a uniform 8 mm) and the back focus (the computed paraxial
 * D-line value). The patent states coverage of 32 degrees from the axis; with these rims the chief ray passes to
 * that angle but the front element vignettes the oblique beam heavily beyond about 25 degrees.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f8-us1658365",
  maker: "Kodak",
  name: "KODAK 100mm f/8 (US 1,658,365 Design)",
  subtitle: "1928 COMPACT FOLDING-CAMERA TRIPLET; NO VERIFIED RETAIL IDENTITY",
  visible: true,
  catalog: {
    specs: ["3 ELEMENTS / 3 GROUPS", "ESTIMATED IRIS / RIMS", "PATENT REFERENCE"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { design: 99.75 },
    fNumber: { design: 8 },
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
    { id: 1, name: "L1", label: "Patent 1", type: "Biconvex", nd: 1.611, vd: 57.2, indexReference: "D" },
    { id: 2, name: "L2", label: "Patent 2", type: "Biconcave", nd: 1.575, vd: 42.7, indexReference: "D" },
    { id: 3, name: "L3", label: "Patent 3", type: "Meniscus", nd: 1.611, vd: 57.2, indexReference: "D" },
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
    description:
      "Infinity only. The patent table is normalized to focal length 1; the model is scaled by 100. Computed D-line focal length 99.75 mm.",
  },
  aperture: { nominalFNumber: 8, maxFNumber: 22, fStops: [8, 11, 16, 22] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 32 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
