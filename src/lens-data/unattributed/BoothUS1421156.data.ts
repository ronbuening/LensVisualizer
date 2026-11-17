import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,421,156 A (Lionel Barton Booth, granted 1922), the patent's sole numerical example.
 *
 * Scale: the patent prints its lengths for a focal length F = 6¼. Every radius, thickness, air space and element
 * diameter is multiplied by 16, giving a nominal 100 mm lens. The printed prescription traces to EFL 100.43 mm at the
 * sodium D line, 0.43 % above the nominal value; it is left as printed (no radius or spacing is adjusted).
 *
 * Glass: the patent prints nD and nG′ (the hydrogen G′ line, 434.05 nm) for its two glasses and no Abbe numbers. The
 * elements carry the printed nD only, so the model has no dispersion and shows no colour.
 *
 * Rims: the clear semi-diameters are half the printed element diameters (2.18, 1.9 and 1.95 before scaling).
 *
 * Inferred values:
 * - Stop: the patent allows the diaphragm in either air space and gives no station. It is placed at the midpoint of
 *   the rear air space (4.24 mm behind L3 and 4.24 mm ahead of L4); its radius follows from the printed f/3.
 * - Back focus: the patent prints none. The image plane is at the computed D-line paraxial focus, 83.724 mm behind
 *   the last surface.
 * - Field: the patent states no field of view; the 20° full field is a display setting, not a coverage claim.
 *
 * No maker is assigned because the patent names no assignee. The design is probably that of the Dallmeyer Pentac
 * f/2.9 (see the analysis), but no source ties this patent number to that lens.
 */
const LENS_DATA = {
  schema: 2,
  key: "booth-100mm-f3-us1421156",
  maker: null,
  name: "BOOTH 100mm f/3 (US 1,421,156 Design)",
  subtitle: "US 1,421,156 A, sole example — Heliar-type five-element objective",
  visible: true,
  catalog: {
    specs: ["5 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/3"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 100.43 },
    fNumber: { marketing: 3, design: 3 },
  },
  source: {
    patentNumber: "US 1,421,156 A",
    example: { label: "Sole example", id: null },
    patentYear: 1922,
    authors: ["Lionel Barton Booth"],
    assignees: [],
    sdSource: "source-table",
  },
  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.6109, indexReference: "D", glass: "Unmatched (nD 1.6109, nG′ 1.62411)", role: "Positive crown of the cemented front pair", cemented: "C1" },
    { id: 2, name: "L2", label: "Element 2", type: "Negative Meniscus", nd: 1.5485, indexReference: "D", glass: "Unmatched (nD 1.5485, nG′ 1.56424)", role: "Lower-index flint of the front pair; gives the cemented surface collecting power", cemented: "C1" },
    { id: 3, name: "L3", label: "Element 3", type: "Biconcave Negative", nd: 1.5485, indexReference: "D", glass: "Unmatched (nD 1.5485, nG′ 1.56424)", role: "Dispersive middle lens between the two positive pairs" },
    { id: 4, name: "L4", label: "Element 4", type: "Negative Meniscus", nd: 1.5485, indexReference: "D", glass: "Unmatched (nD 1.5485, nG′ 1.56424)", role: "Lower-index flint leading the cemented rear pair", cemented: "C2" },
    { id: 5, name: "L5", label: "Element 5", type: "Biconvex Positive", nd: 1.6109, indexReference: "D", glass: "Unmatched (nD 1.6109, nG′ 1.62411)", role: "Equi-convex positive crown of the cemented rear pair", cemented: "C2" },
  ],
  surfaces: [
    { label: "1", R: 42.16, d: 7.84, sd: 17.44, medium: 1 },
    { label: "2", R: -47.248, d: 1.6, sd: 17.44, medium: 2 },
    { label: "3", R: -1505.6, d: 8.32, sd: 17.44 },
    { label: "4", R: -43.84, d: 1.6, sd: 15.2, medium: 3 },
    { label: "5", R: 38, d: 4.24, sd: 15.2 },
    { label: "STO", R: "flat", d: 4.24 },
    { label: "6", R: 838.4, d: 1.6, sd: 15.6, medium: 4 },
    { label: "7", R: 39.216, d: 7.84, sd: 15.6, medium: 5 },
    { label: "8", R: -39.216, d: 83.72402687989012, sd: 15.6 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity focus only; the patent gives no close-focus data." },
  aperture: { nominalFNumber: 3, fStops: [3, 4, 5.6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", fullFieldDeg: 20, maxTraceFieldDeg: 10 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "MIDDLE", fromSurface: "4", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
  ],
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;
export default LENS_DATA;
