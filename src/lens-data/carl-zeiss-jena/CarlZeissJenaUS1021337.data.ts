import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,021,337 (Paul Rudolph, assignor to the firm of Carl Zeiss, Jena; granted March 26, 1912),
 * "Quadruple-Lens Objective". The patent has one numerical example, drawn in Fig. 1: a single
 * objective of four lenses cemented together with a front diaphragm, relative aperture 1:12.5.
 *
 * The patent calls the design an improvement of the four-lens single objective of US 532,398,
 * supplied by Zeiss as Series VII (Protar lens 1:12.5). No source shows that this table was produced.
 *
 * PRINTED: the radii, thicknesses, diaphragm distance b = 2.34 and sodium D-line indices are the
 * patent's values for "focal length 100". The radii are printed to 0.1, so the table computes to a
 * focal length of 99.00 rather than 100; a rounding step of 0.05 in r1 or r5 alone moves the focal
 * length by more than 1.5, so no misprint is implied.
 *
 * DISPERSION: the patent prints nD and nG' (hydrogen 434 nm) but no Abbe numbers. The model carries
 * nD only and is therefore monochromatic. The nG' column is not used; its value for lens II (1.6308)
 * is probably a misprint, since only a value near 1.637 gives the colour correction the patent states.
 *
 * INFERRED: the back focus (computed paraxial image distance for an infinite object, 109.1747),
 * all clear semi-diameters (4.5, set to pass the f/12.5 axial beam; the patent prints none and
 * Fig. 1 is not to scale) and the 5-degree trace field (the patent states no field).
 * The stop position is printed (b); its opening follows from 1:12.5.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f125-us1021337",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/12.5 (US 1,021,337 Design)",
  subtitle: "US 1,021,337 A, sole example — development of the Series VII Protar lens",
  visible: true,
  catalog: {
    specs: ["4 ELEMENTS / 1 GROUP", "DESIGN F/12.5", "ALL SPHERICAL", "CEMENTED QUADRUPLET"],
    elementCount: 4,
    groupCount: 1,
    focalLengthMm: { design: 99 },
    fNumber: { design: 12.5 },
  },
  source: {
    patentNumber: "US 1,021,337 A",
    example: { label: "Sole example", id: null },
    patentYear: 1912,
    authors: ["Paul Rudolph"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.4979,
      indexReference: "D",
      glass: "Unmatched (nD 1.4979 / nG′ 1.5074; no Abbe number printed)",
      focalLengthMm: -18.9,
      role: "Low-index biconcave front lens facing the diaphragm.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6227,
      indexReference: "D",
      glass: "Unmatched (nD 1.6227 / nG′ 1.6308 as printed; no Abbe number printed)",
      focalLengthMm: 12.49,
      role: "High-index biconvex crown carrying most of the positive power.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5813,
      indexReference: "D",
      glass: "Unmatched (nD 1.5813 / nG′ 1.5952; no Abbe number printed)",
      focalLengthMm: 32.48,
      role: "Positive meniscus whose raised index is the patent's improvement.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6275,
      indexReference: "D",
      glass: "Unmatched (nD 1.6275 / nG′ 1.6487; no Abbe number printed)",
      focalLengthMm: -21.53,
      role: "Dispersive rear meniscus with a convex rear surface.",
      cemented: "C1",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 2.34 },
    { label: "1", R: -12, d: 0.48, sd: 4.5, medium: 1 },
    { label: "2", R: 44.2, d: 1.7, sd: 4.5, medium: 2 },
    { label: "3", R: -9.3, d: 1.5, sd: 4.5, medium: 3 },
    { label: "4", R: -6.6, d: 0.66, sd: 4.5, medium: 4 },
    { label: "5", R: -13.4, d: 109.1747, sd: 4.5 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity focus only; the patent gives no close-focus data." },
  aperture: { nominalFNumber: 12.5, maxFNumber: 22, fStops: [12.5, 16, 22] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 5 },
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "5" }],
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
