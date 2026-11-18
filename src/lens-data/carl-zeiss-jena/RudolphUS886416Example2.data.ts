import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 886,416 A (Paul Rudolph, assigned to the firm of Carl Zeiss, Jena; filed July 12, 1907, granted May 5, 1908),
 * Example 2, Figure 2: a symmetric double objective of two equal cemented triplets, six spherical elements in two
 * groups, relative aperture 1:6.3. The patent gives two examples; Example 1 is a single f/11 cemented triplet and is
 * not used here.
 *
 * The patent tabulates the example for a focal length of 100, and every printed radius, thickness and distance is
 * used unchanged, with no scaling or fitting. The printed prescription traces to a paraxial focal length of 99.87 mm.
 * The table prints radii as magnitudes; their signs follow Figure 2 and the claims (the collective cemented surface
 * is convex toward the diaphragm, the dispersive one concave toward it). The diaphragm position is printed: b = 2.7
 * on each side. Indices are the patent's nD values for the solar D line. The patent also prints nG' for each glass
 * (1.4714, 1.5972, 1.6448 for glasses I, II, III) but no Abbe number, so the model carries no dispersion.
 *
 * Inferred, not printed: the clear semi-diameters (8.5 mm on the outer faces, 7.8 mm inside, estimates that pass the
 * f/6.3 axial beam; Figure 2 scales to roughly 7.4 mm); the 91.181 mm back focus, which is the computed paraxial image
 * distance for an object at infinity; and the 5 degree trace field. The patent states no field angle, image size,
 * lens diameter or close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "rudolph-us886416-example2-d-line",
  maker: "Carl Zeiss Jena",
  name: "RUDOLPH US886416 Example 2 100mm f/6.3 — D-line patent reference",
  subtitle: "1908 SYMMETRIC CEMENTED TRIPLETS; NO VERIFIED PRODUCTION MATCH",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "D-LINE ONLY", "PATENT REFERENCE"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 99.87 },
    fNumber: { design: 6.3 },
  },
  source: {
    patentNumber: "US 886,416 A",
    example: { label: "Example 2", id: "2" },
    patentYear: 1908,
    authors: ["Paul Rudolph"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      focalLengthMm: -34.93,
      nd: 1.624,
      indexReference: "D",
      role: "Outer negative meniscus of the front cemented triplet",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex",
      focalLengthMm: 15.71,
      nd: 1.5832,
      indexReference: "D",
      role: "Biconvex collective core of the front cemented triplet",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave",
      focalLengthMm: -31.89,
      nd: 1.4626,
      indexReference: "D",
      role: "Low-index biconcave element facing the diaphragm",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave",
      focalLengthMm: -31.89,
      nd: 1.4626,
      indexReference: "D",
      role: "Low-index biconcave element facing the diaphragm",
      cemented: "T2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex",
      focalLengthMm: 15.71,
      nd: 1.5832,
      indexReference: "D",
      role: "Biconvex collective core of the rear cemented triplet",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      focalLengthMm: -34.93,
      nd: 1.624,
      indexReference: "D",
      role: "Outer negative meniscus of the rear cemented triplet",
      cemented: "T2",
    },
  ],
  surfaces: [
    { label: "1", R: 22.6, d: 2.1, medium: 1, sd: 8.5 },
    { label: "2", R: 10.7, d: 4.1, medium: 2, sd: 7.8 },
    { label: "3", R: -54.8, d: 1, medium: 3, sd: 7.8 },
    { label: "4", R: 20.3, d: 2.7, sd: 7.8 },
    { label: "STO", R: "flat", d: 2.7 },
    { label: "6", R: -20.3, d: 1, medium: 4, sd: 7.8 },
    { label: "7", R: 54.8, d: 4.1, medium: 5, sd: 7.8 },
    { label: "8", R: -10.7, d: 2.1, medium: 6, sd: 7.8 },
    { label: "9", R: -22.6, d: 91.181, sd: 8.5 },
  ],
  doublets: [
    { text: "T1", fromSurface: "1", toSurface: "4" },
    { text: "T2", fromSurface: "6", toSurface: "9" },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only patent reconstruction." },
  aperture: { nominalFNumber: 6.3, fStops: [6.3, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 5 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
