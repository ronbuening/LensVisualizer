import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,021,337 (Paul Rudolph, assignor to the firm of Carl Zeiss, Jena; granted March 26, 1912),
 * "Quadruple-Lens Objective". The patent has one numerical example, drawn in Fig. 1: a single
 * objective of four lenses cemented together with a front diaphragm, relative aperture 1:12.5.
 *
 * SCALE: the patent's own, "focal length 100". Nothing is rescaled. The printed radii, thicknesses,
 * diaphragm distance b = 2.34 and sodium D-line indices are copied exactly. The table is printed to
 * 0.1 in the radii, so it computes to a focal length of 99.00 rather than 100; a rounding step of
 * 0.05 in r1 or r5 alone moves the focal length by more than 1.5, so no misprint is implied.
 *
 * DISPERSION: the patent prints nD and nG' (hydrogen 434 nm) but no Abbe numbers. The model carries
 * nD only and is therefore monochromatic. The nG' column is not used.
 *
 * INFERRED: the back focus (computed paraxial image distance for an infinite object, 109.1747),
 * all clear semi-diameters (4.5, set to pass the f/12.5 axial beam; the patent prints none and
 * Fig. 1 is not to scale) and the 5-degree trace field (the patent states no field).
 * The stop position is printed (b); its opening follows from 1:12.5.
 */
const LENS_DATA = {
  schema: 2,
  key: "rudolph-us1021337-fig1-d-line",
  maker: "Carl Zeiss Jena",
  name: "RUDOLPH US1021337 Fig. 1 100mm f/12.5 — D-line patent reference",
  subtitle: "1912 ZEISS QUADRUPLE SINGLE OBJECTIVE; NO VERIFIED PRODUCTION MATCH",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 1 GROUP", "D-LINE ONLY", "PATENT REFERENCE"],
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
      label: "Patent I",
      type: "Biconcave",
      nd: 1.4979,
      indexReference: "D",
      focalLengthMm: -18.9,
      role: "Low-index biconcave front lens facing the diaphragm.",
      cemented: "Q1",
    },
    {
      id: 2,
      name: "L2",
      label: "Patent II",
      type: "Biconvex",
      nd: 1.6227,
      indexReference: "D",
      focalLengthMm: 12.49,
      role: "High-index biconvex crown carrying most of the positive power.",
      cemented: "Q1",
    },
    {
      id: 3,
      name: "L3",
      label: "Patent III",
      type: "Positive Meniscus",
      nd: 1.5813,
      indexReference: "D",
      focalLengthMm: 32.48,
      role: "Positive meniscus of raised index, the subject of the patent.",
      cemented: "Q1",
    },
    {
      id: 4,
      name: "L4",
      label: "Patent IV",
      type: "Negative Meniscus",
      nd: 1.6275,
      indexReference: "D",
      focalLengthMm: -21.53,
      role: "Dispersive rear meniscus with a convex rear surface.",
      cemented: "Q1",
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
  focus: { closeFocusM: 1e15, description: "Infinity-only patent reconstruction." },
  aperture: { nominalFNumber: 12.5, fStops: [12.5, 16, 22] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 5 },
  doublets: [{ text: "Q1", fromSurface: "1", toSurface: "5" }],
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
