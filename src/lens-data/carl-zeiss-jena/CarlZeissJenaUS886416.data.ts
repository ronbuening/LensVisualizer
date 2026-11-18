import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 886,416 A (Paul Rudolph, assigned to the firm of Carl Zeiss, Jena; filed July 12, 1907, granted May 5, 1908),
 * Example 2, Figure 2: a symmetric double objective of two equal cemented triplets, six spherical elements in two
 * groups, relative aperture 1:6.3. The patent gives two examples; Example 1 is a single f/11 cemented triplet and is
 * not used here.
 *
 * The patent tabulates the example for a focal length of 100, and every printed radius, thickness and distance is
 * used as printed. The printed prescription traces to a paraxial focal length of 99.87 mm.
 * The table prints radii as magnitudes; their signs follow Figure 2 and the claims (the collective cemented surface
 * is convex toward the diaphragm, the dispersive one concave toward it). The diaphragm position is printed: b = 2.7
 * on each side. Indices are the patent's nD values for the solar D line. The patent also prints nG' for each glass
 * (1.4714, 1.5972, 1.6448 for glasses I, II, III) but no Abbe number, so the model carries no dispersion
 * and no glass is identified.
 *
 * Inferred, not printed: the 91.181 mm back focus, which is the computed paraxial image distance for an object at
 * infinity; the 5 degree trace field; and the clear semi-diameters. The patent states no field angle, image size,
 * lens diameter or close-focus data.
 *
 * SEMI-DIAMETERS: estimated from Figure 2, which is drawn to scale (about 35.5 px/mm at 600 dpi, from the 19.8 mm
 * first-to-last vertex span; the curve of the 10.7 mm cemented face fits the same scale radially, and the drawn edge
 * of element II, 0.8 mm thick at 7.2 mm height, matches the prescription), and checked by real-ray trace. The figure
 * draws each triplet square-cut at about 7.45 mm (7.6 mm to the outside of the drawn line), where element II is about
 * 0.6 mm thick at its edge (the prescription closes it at about 7.93 mm), and ends the diaphragm-side face of element
 * I at about 6.3 mm, with a 45 degree bevel out to the edge. Its diaphragm opening, about 5.25 mm in radius, is nearer
 * f/8 than f/6.3, so the drawing is not at full aperture. The cemented faces keep 7.8 mm. The faces beside the
 * diaphragm take 7.0 and 6.9 mm, just above the f/6.3 axial beam (6.94 and 6.80 mm), so the drawn bevel line is not
 * followed further. The rear face takes 7.8 mm, square with its cemented face as drawn. The front face takes 8.3 mm:
 * the axial beam needs 7.93 mm there, and 8.3 mm keeps the 5 degree field at 97.5 % of its light (8.2 mm would lose
 * more than 3 points of light against the earlier 8.5 mm rims).
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f63-us886416",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/6.3 (US 886,416 Design)",
  subtitle: "US 886,416 A, Example 2 — Rudolph symmetric double objective",
  visible: true,
  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "DESIGN F/6.3", "ALL SPHERICAL"],
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
      glass: "Unmatched (nD 1.6240, nG′ 1.6448)",
      indexReference: "D",
      role: "Outer negative meniscus of the front cemented triplet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      focalLengthMm: 15.71,
      nd: 1.5832,
      glass: "Unmatched (nD 1.5832, nG′ 1.5972)",
      indexReference: "D",
      role: "Biconvex collective core of the front cemented triplet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      focalLengthMm: -31.89,
      nd: 1.4626,
      glass: "Unmatched (nD 1.4626, nG′ 1.4714)",
      indexReference: "D",
      role: "Low-index biconcave element of the front cemented triplet, facing the diaphragm",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      focalLengthMm: -31.89,
      nd: 1.4626,
      glass: "Unmatched (nD 1.4626, nG′ 1.4714)",
      indexReference: "D",
      role: "Low-index biconcave element of the rear cemented triplet, facing the diaphragm",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      focalLengthMm: 15.71,
      nd: 1.5832,
      glass: "Unmatched (nD 1.5832, nG′ 1.5972)",
      indexReference: "D",
      role: "Biconvex collective core of the rear cemented triplet",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      focalLengthMm: -34.93,
      nd: 1.624,
      glass: "Unmatched (nD 1.6240, nG′ 1.6448)",
      indexReference: "D",
      role: "Outer negative meniscus of the rear cemented triplet",
      cemented: "C2",
    },
  ],
  surfaces: [
    { label: "1", R: 22.6, d: 2.1, medium: 1, sd: 8.3 },
    { label: "2", R: 10.7, d: 4.1, medium: 2, sd: 7.8 },
    { label: "3", R: -54.8, d: 1, medium: 3, sd: 7.8 },
    { label: "4", R: 20.3, d: 2.7, sd: 7 },
    { label: "STO", R: "flat", d: 2.7 },
    { label: "6", R: -20.3, d: 1, medium: 4, sd: 6.9 },
    { label: "7", R: 54.8, d: 4.1, medium: 5, sd: 7.8 },
    { label: "8", R: -10.7, d: 2.1, medium: 6, sd: 7.8 },
    { label: "9", R: -22.6, d: 91.181, sd: 7.8 },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "4" },
    { text: "C2", fromSurface: "6", toSurface: "9" },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity focus only; the patent gives no close-focus data." },
  aperture: { nominalFNumber: 6.3, fStops: [6.3, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 5 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
