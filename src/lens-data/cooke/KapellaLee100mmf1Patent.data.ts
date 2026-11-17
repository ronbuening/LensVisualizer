import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,012,822 A (Horace William Lee, assigned to Kapella Limited, 1935), Example 1, Figure 1: an f/1 objective of
 * five spherical elements in four groups, printed on specification page 2. The patent gives three examples of unit
 * equivalent focal length; this file uses Example 1 only.
 *
 * Every printed radius, thickness and separation is multiplied by 100, with no further scaling or fitting. The printed
 * prescription then traces to a paraxial focal length of 100.15 mm. Indices and Abbe numbers are the patent's sodium
 * D-line nD and V values; the Chance Brothers type numbers it prints do not match a modern catalogue glass, so colour
 * is estimated from nD and V alone.
 *
 * Inferred, not printed: the iris, placed 18 mm behind R7 inside the 22.94 mm air space S3, where it clears the
 * deeply curved rear face of the cemented pair (its radius is set by the engine for f/1); all clear semi-diameters,
 * estimated from the axial ray envelope; and the 32.177 mm back focus, the computed paraxial image distance for an
 * object at infinity. The patent prints no back focus, field angle, image size or close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "kapella-lee-100mm-f1-us2012822-example1",
  maker: "Cooke",
  name: "KAPELLA LEE 100mm f/1 PATENT REFERENCE",
  subtitle: "US 2,012,822 A EXAMPLE 1 — HORACE WILLIAM LEE",
  visible: false,
  catalog: {
    specs: ["5 ELEMENTS / 4 GROUPS", "PATENT-ONLY RECONSTRUCTION", "INFINITY ONLY", "ESTIMATED STOP AND CLEAR APERTURES"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { design: 100.15 },
    fNumber: { design: 1 },
  },
  source: {
    patentNumber: "US 2,012,822 A",
    example: { label: "Example 1", id: "1" },
    patentYear: 1935,
    authors: ["Horace William Lee"],
    assignees: ["Kapella Limited"],
    sdSource: "heuristic",
  },
  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Positive Meniscus", nd: 1.6135, vd: 59.4, indexReference: "D", glass: "Chance Brothers 8065 (source identification)", role: "Front collective meniscus" },
    { id: 2, name: "L2", label: "Element 2", type: "Positive Meniscus", nd: 1.6135, vd: 59.4, indexReference: "D", glass: "Chance Brothers 8065 (source identification)", role: "Second collective meniscus" },
    { id: 3, name: "L3", label: "Element 3", type: "Biconvex Positive", nd: 1.6062, vd: 59.8, indexReference: "D", glass: "Chance Brothers 4317 (source identification)", role: "Positive element in compound dispersive member", cemented: "C1" },
    { id: 4, name: "L4", label: "Element 4", type: "Biconcave Negative", nd: 1.6945, vd: 30.7, indexReference: "D", glass: "Uncatalogued Chance glass in patent", role: "Higher-index dispersive member", cemented: "C1" },
    { id: 5, name: "L5", label: "Element 5", type: "Biconvex Positive", nd: 1.6135, vd: 59.4, indexReference: "D", glass: "Chance Brothers 8065 (source identification)", role: "Rear collective member" },
  ],
  surfaces: [
    { label: "1", R: 121.47, d: 8.81, sd: 51, medium: 1 },
    { label: "2", R: 310.7, d: 0.5, sd: 50.5 },
    { label: "3", R: 73.27, d: 8.38, sd: 49, medium: 2 },
    { label: "4", R: 118.55, d: 0.5, sd: 48.5 },
    { label: "5", R: 50.42, d: 33.7, sd: 43.5, medium: 3 },
    { label: "6", R: -105.16, d: 3.39, sd: 41.5, medium: 4 },
    { label: "7", R: 29.03, d: 18, sd: 26 },
    { label: "STO", R: "flat", d: 4.94 },
    { label: "8", R: 59.39, d: 13.72, sd: 25, medium: 5 },
    { label: "9", R: -190.62, d: 32.17678887228511, sd: 23.5 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only patent reference; no finite-focus motion modeled. Sentinel is not a product MFD." },
  aperture: { nominalFNumber: 1, fStops: [1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },
  groups: [],
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;
export default LENS_DATA;
